importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/59515d3.js",
    "revision": "0ccbaf7495f6d43cb1eee4004a02eed7"
  },
  {
    "url": "/_nuxt/7bb6150.js",
    "revision": "a7c1efaad585e617c354ff0d16f3637e"
  },
  {
    "url": "/_nuxt/8344e5b.js",
    "revision": "1b330fb47e5f1da44b9f241a04678f18"
  },
  {
    "url": "/_nuxt/8754fd3.js",
    "revision": "23380e0f7ecb5cd036d96325dc858870"
  },
  {
    "url": "/_nuxt/8b219fd.js",
    "revision": "4435553f47a6d8fe0af9b4698ce679e1"
  },
  {
    "url": "/_nuxt/931eff0.js",
    "revision": "f72f8af4781ba79030f9d2cbfc6b4e2d"
  }
], {
  "cacheId": "chat-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
