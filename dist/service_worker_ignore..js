const cacheAssets = [
    'index.html',
    'bundle.js',
]

const dbRequest = indexedDB.open('happy-camper', 1);

dbRequest.onupgradeneeded = event => {
    const db = event.target.result;

    db.createObjectStore("itinerary");
};

let db;
dbRequest.onsuccess = event => {
    db = event.target.result;
};

self.addEventListener('install', event => {
    console.info('Service worker installing...');
    event.waitUntil(
        caches.open('happy-camper').then(cache => {
            return cache.addAll(alwaysCached)
            .then(() => {
                if (db){
                    return populateDbResourceList();
                }
                const promise = new Promise((resolve, reject) => {
                    const oldOnSuccess = dbRequest.onsuccess;
                    dbRequest.onsuccess = (event) => {
                        oldOnSuccess(event);
                        return resolve(populateDbResourceList());
                    }
                });
                return promise;
            });
        })
    );
});
