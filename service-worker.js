const CACHE_NAME = 'jardel-website-v1';
const urlsToCache = [
  '/Project-DesainWeb-Jardel/',
  '/Project-DesainWeb-Jardel/index.html',
  '/Project-DesainWeb-Jardel/about.html',
  '/Project-DesainWeb-Jardel/contact.html',
  '/Project-DesainWeb-Jardel/offline.html',
  '/Project-DesainWeb-Jardel/style.css',
  '/Project-DesainWeb-Jardel/image/icon-192x192.png',
  '/Project-DesainWeb-Jardel/image/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(() => {
        return caches.match('/Project-DesainWeb-Jardel/offline.html');
      })
  );
});