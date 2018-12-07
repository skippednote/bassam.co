var cacheVersion = 'v1';
var pagesCache = 'v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheVersion).then(function(cache) {
      return cache.addAll([
        '/',
        '/css/style.css',
        '/images/feature-la-calypso.jpg',
        '/images/favicon.ico',
        '/js/script.js',
        '/fonts/fontello.ttf',
        '/fonts/fontello.woff',
        'https://fonts.googleapis.com/css?family=Open+Sans:400,700'
      ]);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName != cacheVersion
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      )
    })
  )
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response) {
        return response;
      } else {
        caches.open(pagesCache).then(function(cache) {
          return cache.add(event.request.url);
        });
        return fetch(event.request)
      }
    })
  );
});

self.addEventListener('message', function(event) {
  console.log('Got a message');
  if (event.data.action == 'skipWaiting') {
    self.skipWaiting();
  }
})
