const CACHE_NAME = "mi-pwa-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/styles.css",
    "/script.js",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png"
];

// Instalar el Service Worker y almacenar en caché los archivos necesarios
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// Interceptar solicitudes y cargar desde caché si es posible
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
