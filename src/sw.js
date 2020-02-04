importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/4.0.0-alpha.0/workbox-sw.js'
);

workbox.core.setCacheNameDetails({
  prefix: 'bassam.co'
});

// Note: this is populated at build time.
workbox.precaching.precacheAndRoute([]);

workbox.googleAnalytics.initialize({});

workbox.skipWaiting();
