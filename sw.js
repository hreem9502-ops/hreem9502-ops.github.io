/**
 * PlantCare AI — minimal service worker.
 *
 * Goal: make the app installable as an Android/iOS PWA (a fetch handler is
 * required for installability) WITHOUT aggressive caching, so the always-live
 * demo and dev server behaviour stay intact. Strategy: network passthrough —
 * every request goes to the network; if the network fails we return a tiny
 * offline response for navigations so the installed app never shows the
 * dinosaur error.
 */
const CACHE = "plantcare-runtime-v1";
const OFFLINE_URLS = ["/", "/icon-192.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(OFFLINE_URLS))
      .catch(() => undefined)
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Only handle safe GET navigations/resources; let everything else pass.
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Network-first with cache fallback (never blocks freshness).
  event.respondWith(
    fetch(request)
      .then((response) => {
        // Opportunistic runtime cache for same-origin basics.
        if (
          response &&
          response.ok &&
          (request.mode === "navigate" ||
            url.pathname.startsWith("/_next/static/") ||
            url.pathname === "/icon-192.png" ||
            url.pathname === "/icon-512.png" ||
            url.pathname === "/manifest.webmanifest")
        ) {
          const clone = response.clone();
          caches
            .open(CACHE)
            .then((cache) => cache.put(request, clone))
            .catch(() => undefined);
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request).catch(() => undefined);
        if (cached) return cached;
        if (request.mode === "navigate") {
          const shell = await caches.match("/").catch(() => undefined);
          if (shell) return shell;
          return new Response(
            "<!doctype html><meta charset=utf-8><meta name=viewport content=\"width=device-width,initial-scale=1\"><title>PlantCare AI — offline</title><body style=\"font-family:system-ui;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#FAF8F1;color:#2E6B4F\"><div style=\"text-align:center\"><div style=\"font-size:48px\">🌱</div><h1 style=\"margin:8px 0\">PlantCare AI</h1><p style=\"color:#5A6B5F\">You are offline — reconnect to analyse plants.</p></div></body>",
            { headers: { "Content-Type": "text/html; charset=utf-8" } }
          );
        }
        return new Response("", { status: 504, statusText: "Offline" });
      })
  );
});
