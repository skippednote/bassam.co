importScripts("workbox-sw.prod.v2.1.2.js");

const workbox = new WorkboxSW({
  skipWaiting: true,
  clientsClaim: true
});

workbox.precache([]);

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
