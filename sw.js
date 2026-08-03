/* Physicist's Mind — service worker (offline + auto-update) */
var CACHE = "physmind-v1";
var ASSETS = [
  "./", "./index.html",
  "./curriculum.js",
  "./content-foundations.js",
  "./content-relativity.js",
  "./content-quantum.js",
  "./content-particles.js",
  "./app.js",
  "./manifest.webmanifest"
];

self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Stale-while-revalidate: serve cache instantly, refresh in background. */
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(e.request).then(function (cached) {
        var network = fetch(e.request).then(function (res) {
          if (res && res.status === 200 && e.request.url.indexOf("http") === 0) cache.put(e.request, res.clone());
          return res;
        }).catch(function () { return cached; });
        return cached || network;
      });
    })
  );
});
