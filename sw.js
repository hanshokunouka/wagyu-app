const CACHE_NAME = "breeder285-v7"; // バージョンを上げる
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon.png" // アイコンもキャッシュに含める
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  // ネットワークから最新を取得し、ダメならキャッシュを出す設定
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
