---

date: "2016-12-09"
title: "Going Offline with Service Worker"
path: "/going-offline-with-service-worker"
---

I have had Service Worker working on this site (on and off) for a while now. Caching everything other than posts. When I moved away from github-pages to Surge I had to forgo the HTTPS support, which meant no more offline caching. However, I have switched back to github-pages with Cloudflare providing the HTTPS certificates. This is temporary until I move to a platform where I can explore other PWA patterns.

I'd like to go over the steps I took to make this site a Progressive Web App.

### Moving to HTTPS

Before you drop everything and decide to jump on the PWA bandwagon you need to make sure you are serving content over HTTPS and not HTTP. If you don't want to spend money on purchasing custom SSL certificates the best option would be moving your DNS to Cloudflare. From there you can route your site hosted on github-pages to the custom domain. You will also need to enable Full SSL encryption and setup rules to forward all HTTP requests to HTTPS. Here is a [comprehensive post](http://blog.cloudflare.com/secure-and-fast-github-pages-with-cloudflare/) by Cloudflare explaining all this in detail.

### (Progressively) Introducing Service Worker

The "P" in PWA stands for Progressive, that is, your web app will work perfectly well for browsers that do not support the Service Worker API.

To get started I check if the browser supports Service Worker and if it does I will register a script containing all the related code that would run in the worker thread. Make sure the script is in the root serving directory so that it can work with all the resources that are at that level and down.

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(function(registration) {
      console.info('Service Worker is registered!');
    })
    .catch(function(error) {
      console.warn('Service Worker failed to register!');
    });
} else {
  console.warn('Service Worker is not supported.');
}
```

### Cache First Network Later

I have opted for the **Cache First** strategy where the resource is first looked in the caches and served from there and if I'm online the browser fetches the data from network and updates the caches. This means the next time you visit the page you will get the new content if available. If the caches do not have the resource and I'm off network I'll be shown a custom offline page.

```javascript
self.addEventListener('fetch', function(event) {
  console.info('Event: Fetch');

  var requestURL = new URL(event.request.url);
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      }
      return fetch(event.request)
        .then(response => {
          if (
            !(
              requestURL.pathname.startsWith('/journal/') ||
              requestURL.pathname.startsWith('/imgs/')
            )
          ) {
            let responseToCache = response.clone();
            caches
              .open(staticCache)
              .then(cache => {
                cache.put(event.request, responseToCache);
              })
              .catch(err => {
                console.warn('Failed to cache: ' + event.request);
              });
          }
          return response;
        })
        .catch(() => {
          console.log('gonna fail');
          return caches.match('/offline/');
        });
    })
  );
});
```

### Read Later?

I'm not implictly caching the journal entries so I can leave it upto the reader in case they want to cache it for later. The Cache API is available to both Service Worker and pages, so on the journal pages I've added a button which lets the reader cache the page for later. I check if the page is there in the cache and if it is I hide the button.

```javascript
var postsCache = 'cache-posts-v2';
var goOffline = document.querySelector('#go-offline');
var requestObj = new Request(window.location.pathname);
if (goOffline) {
  caches
    .match(requestObj)
    .then(res => {
      if (res) {
        goOffline.style.display = 'none';
      }
    })
    .catch(err => console.log('not found', err));
  goOffline.addEventListener('click', event => {
    goOffline.disabled = true;

    caches.open(postsCache).then(cache => {
      fetch(window.location.pathname)
        .then(post => {
          cache.put(window.location.pathname, post);
          goOffline.style.display = 'none';
        })
        .catch(err => {
          console.warn('Failed to get/cache the post.', err);
          goOffline.style.display = 'block';
        });
    });
  });
}
```

### Native like feels!

PWAs allow your web apps to behave and feel like native apps. This means you get an icon on homescreen/menu drawer, chromeless UI, splash screens, and many more goodies. For this all you need to do is add a `manifest.json` file and link in the head using the `link` tag.

```javascript
{
    "name": "Bassam Ismail",
    "short_name": "Bassam Ismail",
    "description": "Building Progressive Front-ends.",
    "icons": [
        {
        "src": "\/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image\/png"
        },
        {
        "src": "\/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image\/png"
        }
    ],
    "theme_color": "#3399ff",
    "background_color": "#ffffff",
    "display": "standalone",
    "orientation": "natural",
    "start_url": "/"
}
```

### Resources

This isn't the most helpful post when learning how to building PWAs and neither was it intended. The goal is to share the patterns that have worked for me so far.

But to help someone new get started with PWA here are a few handy resources:

- [Google's PWA Guide](https://developers.google.com/web/progressive-web-apps/)
- [PWA Summit 2016](https://www.youtube.com/playlist?list=PLNYkxOF6rcIAWWNR_Q6eLPhsyx6VvYjVb)
- [The Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/)
- [A Beginner’s Guide To Progressive Web Apps](https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/)
