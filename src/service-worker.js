self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("app-saudacao-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "image/icon-192.png",
        "image/icon-512.png",
        "image/morning.jpg",
        "image/afternoon.jpg",
        "image/night.jpg",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
