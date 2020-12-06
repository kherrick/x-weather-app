/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "dist/esm/_rollupPluginBabelHelpers-f13f2144.js",
    "revision": "782a57ba2d17b8fdd4e6e7c12925b400"
  },
  {
    "url": "dist/esm/dispatchers-5941fc5e.js",
    "revision": "b7c8702d9bcf98b27f75a30d56537af6"
  },
  {
    "url": "dist/esm/index.js",
    "revision": "b2a676429846686e10e915f040102990"
  },
  {
    "url": "dist/esm/iron-flex-layout-8e8a6502.js",
    "revision": "5218a129ad7c6309f3592f33e85f27ca"
  },
  {
    "url": "dist/esm/lit-element-243fe127.js",
    "revision": "f4aa08f562aa43f718c5e7835f9da086"
  },
  {
    "url": "dist/esm/mwc-button-30cf2617.js",
    "revision": "1e080d72af967139e6a6979cd18d8d4f"
  },
  {
    "url": "dist/esm/utilities.js",
    "revision": "b50b637a878dd9f33b50bdeb04746517"
  },
  {
    "url": "dist/esm/x-weather-app.js",
    "revision": "bc0d4e4615efe4bdb04ed8837fa009b4"
  },
  {
    "url": "dist/esm/XWeatherApp.js",
    "revision": "1e8549d6ab580ce910fae196024b3e12"
  },
  {
    "url": "dist/esm/XWeatherBouncer.js",
    "revision": "bbacfc2cefcc3d716103113c1caf00ba"
  },
  {
    "url": "dist/esm/XWeatherBranding.js",
    "revision": "2cbcbba42999b1867cf361c63a8848d2"
  },
  {
    "url": "dist/esm/XWeatherContent.js",
    "revision": "c58396e31112c55e8e443d348a6bd9c6"
  },
  {
    "url": "dist/esm/XWeatherDrawerChildren.js",
    "revision": "bd0ac069d002874d528300f89b323963"
  },
  {
    "url": "dist/esm/XWeatherHamburger.js",
    "revision": "7e106632797aa2455642beef84c2d48d"
  },
  {
    "url": "dist/umd/index.js",
    "revision": "0c94f9956b0cd9d14a1770ad8a9a8732"
  },
  {
    "url": "favicon.ico",
    "revision": "8e95f1cb8b20c3c74e03e8788dcf2130"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "1541be46d0e48ddf14d4eaffdf2f2fa2"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "b3c4915043fbf42450a262a702a81dc9"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "737dbeeb265bff426a290c3e156b16a7"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "8b0639445ecc159db7848cec32fc1636"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "9843dc733a8bca96ebb41a6e330959e0"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "4b995869ae98ea520a369dad70a19e63"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "d4e01d5114f575aac7ab4ecf13794364"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "602f70018994896e1a4573e738ce1225"
  },
  {
    "url": "index.html",
    "revision": "b5a37d685596240883dac714a4793808"
  },
  {
    "url": "service-worker/registerServiceWorker.js",
    "revision": "2430ad6c9c7564564959df43b746fb26"
  },
  {
    "url": "service-worker/workbox-config.js",
    "revision": "00e741f21ab3b319c2c7215a09f5c13a"
  },
  {
    "url": "theme.css",
    "revision": "7c7d53a1de5143b229f8879a38dcab6d"
  },
  {
    "url": "/x-weather-app/",
    "revision": "36421624cfa9bb83d19cd44b881023a3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/api.openweathermap.org\/data\/2.5.*$/, new workbox.strategies.NetworkFirst({ "cacheName":"openweathermap-api-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/openweathermap.org\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"openweathermap-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"cdn-jsdeliver-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/rawgit.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"rawgit-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/unpkg.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"unpkg-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
