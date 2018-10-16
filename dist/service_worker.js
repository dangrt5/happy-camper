'use strict';

const cacheName = 'v1'

const cacheAssets = [
    '/index.html',
    '/bundle.js',
]

//Call Install Event (saves files in cacheAssets into cache)
self.addEventListener('install', (event) => {
    // console.log('Service Worker: Installed')

    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(()=>self.skipWaiting())
    )
})

//Call Activate Event (also erases old caches not with cacheName)
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated')
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache !== cacheName){
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})

//Call Fetch Event (saves files that are loaded into cache, also gets data from cache when offline)
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching ', event.request.method);
    if (event.request.method === 'POST'){
        return
    }
    try {
        event.respondWith(
            caches
            .match(event.request)
            .then(response => {
                if (response){
                    return response;
                }
                return fetch(event.request)
                .then(response => {
                    // if (event.request.method === 'GET'){
                        return caches.open(cacheName)
                        .then(cache => {
                            cache.put(event.request, response.clone());
                            return response;
                        })
                    // }
                })
            })
        );
    } catch (error) {
        console.error('Service Worker: Error: ', error);
        event.respondWith(fetch(event.request));
    }
})
