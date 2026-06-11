const CACHE = 'sendadigital-v5';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll([
      'index.html',
      'manifest.json',
      'icon-192.png',
      'icon-512.png'
    ]))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// index.html y manifest: red primero (para que los pilotos reciban actualizaciones),
// caché solo como respaldo sin conexión. Resto: caché primero.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const esApp = e.request.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname.endsWith('manifest.json');
  if (esApp) {
    e.respondWith(
      fetch(e.request).then(resp => {
        const copia = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia));
        return resp;
      }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request))
    );
  }
});
