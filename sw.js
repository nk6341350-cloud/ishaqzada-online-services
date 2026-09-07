const CACHE='ishaqzada-v9-20260908-real-icons';
const ASSETS=['./','index.html','styles.css','app.js','config.js','manifest.json','logo.jpg','icon-192.png','icon-512.png','cat-medicine.jpg','cat-oil.jpg','cat-shampoo.jpg','cat-other.jpg','cat-cream.jpg','cat-hair.jpg','cat-weight.jpg','cat-health.jpg','cat-perfume.jpg','cat-watch.jpg','cat-serum.jpg','cat-majoon.jpg','cat-capsule.jpg','cat-shampoo-oil.jpg','cat-capsule-oil.jpg'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  const url=new URL(event.request.url);
  if(url.origin===self.location.origin && /\.(?:js|css|html|json)$/.test(url.pathname)){
    event.respondWith(
      fetch(event.request).then(response=>{
        const copy=response.clone();
        caches.open(CACHE).then(cache=>cache.put(event.request,copy));
        return response;
      }).catch(()=>caches.match(event.request))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached=>cached||fetch(event.request))
  );
});
