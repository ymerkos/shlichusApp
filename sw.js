//B"H
// A basic service worker without caching
self.addEventListener('install', (event) => {
  console.log('Service Worker installed.');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated.');
});

self.addEventListener('fetch', (event) => {
  // No caching logic; just log fetch events
  console.log('Fetch intercepted for:', event.request.url);
});
