// This exists because of the previous version, which had a service worker.
// Based on https://github.com/NekR/self-destroying-sw/blob/master/packages/gatsby-plugin-remove-serviceworker/sw.js.
self.addEventListener('install', function (e) {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  self.registration.unregister()
    .then(() => self.clients.matchAll())
    .then(clients => {
      clients.forEach(client => client.navigate(client.url))
    });
});