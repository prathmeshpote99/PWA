var staticCacheName = "pwa";

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(["/"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});


// for button use this code 👇🏻

// var staticCacheName = "pwa";
// self.addEventListener("install", function (e) {
//   e.waitUntil(
//     caches.open(staticCacheName).then(function (cache) {
//       return cache.addAll(["/"]);
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   console.log(event.request.url);

//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       return response || fetch(event.request).catch(() => {
//         console.error("Failed to fetch:", event.request.url);
//         return new Response("Network error occurred", {
//           status: 408,
//           statusText: "Network error occurred"
//         });
//       });
//     })
//   );
// });
