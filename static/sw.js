importScripts("workbox-sw.prod.v2.1.2.js");

const workbox = new WorkboxSW({
  skipWaiting: true,
  clientsClaim: true
});

workbox.precache([
  {
    "url": "404.html",
    "revision": "7febff5c3b7f447f01654d4fa3b469af"
  },
  {
    "url": "about/index.html",
    "revision": "bc7b03d204ad127e28ac2d64770d299d"
  },
  {
    "url": "app.js",
    "revision": "77fdb9f8e772b9792dc6fb719da808a4"
  },
  {
    "url": "audio/aiza.mp3",
    "revision": "6d360b8a9743e86aab21aa745e8a2fa7"
  },
  {
    "url": "audio/aliya.mp3",
    "revision": "61ae36f1834e2c1a2f84753353a30108"
  },
  {
    "url": "audio/bassam.mp3",
    "revision": "e4269706e9a1d7e7f74a933499e770de"
  },
  {
    "url": "blog/2016/07/cs101-binary-search/index.html",
    "revision": "00777a2b479e788e181b58e380b3a0cd"
  },
  {
    "url": "blog/2016/07/cs101-selection-sort/index.html",
    "revision": "637d3c2a0b08a62a3d2dda04848581b7"
  },
  {
    "url": "blog/2016/07/deploying-static-sites-on-surge-using-github-and-travis/index.html",
    "revision": "fe4c67b4976f79280eb4711a2eec0faf"
  },
  {
    "url": "blog/2016/07/http-requests-in-elm/index.html",
    "revision": "f8940cbcb1ee0e71cf355baae0a1f1ee"
  },
  {
    "url": "blog/2016/08/concurrent-elixir-processes/index.html",
    "revision": "172dc658dd37edbbecf021b9e25c3e42"
  },
  {
    "url": "blog/2016/08/signing-commits-with-gpg-and-keybase/index.html",
    "revision": "d611e7db150f35af026ae5ffe58fb34c"
  },
  {
    "url": "blog/2016/10/progressively-decoupled-drupal-with-react/index.html",
    "revision": "4f3f97cc14953eb03e4bdbd367ffe3d8"
  },
  {
    "url": "blog/2016/12/going-offline-with-service-worker/index.html",
    "revision": "db793ad24f7230108860306ebbc9f5e2"
  },
  {
    "url": "blog/2017/09/streaming-html-to-yourbrowsers/index.html",
    "revision": "948696c62f3824fb3aff91adcaf6efae"
  },
  {
    "url": "blog/index.html",
    "revision": "496d2710f24322b46e4386768c4f8f0e"
  },
  {
    "url": "contact/index.html",
    "revision": "25334061e891b1207278bdb8002b1266"
  },
  {
    "url": "hire/index.html",
    "revision": "060bd0dab5c3d59c2445be0b3a18e7a1"
  },
  {
    "url": "imgs/favicons/logo.svg",
    "revision": "e150bc750c2db27bbdb1d587de62040d"
  },
  {
    "url": "imgs/favicons/safari-pinned-tab.svg",
    "revision": "32901a60a6c6669850ce515ac69bb9dc"
  },
  {
    "url": "index.html",
    "revision": "e607f61c3629883eae25585b06697406"
  },
  {
    "url": "offline/index.html",
    "revision": "603965e0458f586f9225129bc3485bee"
  },
  {
    "url": "reading/index.html",
    "revision": "fa73a26987b070f76e4a101aa755fc7e"
  },
  {
    "url": "styles.css",
    "revision": "fb90d04e856c59ea9a5bed0701c2e431"
  },
  {
    "url": "sw.js",
    "revision": "66cb228af627adcd784eb1ce4f767546"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  },
  {
    "url": "imgs/bassam/banner-portrait.jpg",
    "revision": "0129c7c827e2f38939ff8bb559491ed8"
  },
  {
    "url": "imgs/bassam/banner.jpg",
    "revision": "d1032f3f0b54155dcf69159b76bbf229"
  }
]);

workbox.router.registerRoute(
  "https://fonts.googleapis.com/(.*)",
  workbox.strategies.cacheFirst({
    cacheName: "googleapis",
    cacheableResponse: {
      statuses: [0, 200]
    },
    networkTimeoutSeconds: 4
  })
);

workbox.router.registerRoute(
  "https://fonts.gstatic.com/(.*)",
  workbox.strategies.cacheFirst({
    cacheName: "googlefont",
    cacheableResponse: {
      statuses: [0, 200]
    },
    networkTimeoutSeconds: 4
  })
);

workbox.router.registerRoute(
  "/imgs/blog/(.*)",
  workbox.strategies.cacheFirst({
    cacheName: "blogs",
    cacheableResponse: {
      statuses: [0, 200]
    },
    networkTimeoutSeconds: 4
  })
);
