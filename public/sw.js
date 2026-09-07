// Retire legacy service-worker registrations for this site.
// This app does not use offline caching or intercept network requests.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister());
});
