//make name for cache
//call install event
//activate
const cacheVersion = 'archive02'

self.addEventListener('install', () => {
    console.log('Installed Succesfully')
})

//after activation extract all cache keys
//check if any of the cache is the same as the current currentVersion name
//if none, delete them
self.addEventListener('activate', (e) => {
    console.log('SW Activated')

    e.waitUntil(
        //get all cuurent cache items in storage
        caches.keys().then((cacheNames => {
                const deletedPromise = []
                for (const cacheName of cacheNames){
                    if (cacheName !== cacheVersion){
                        console.log(`Deleting cache... ${cacheName}`);
                        deletedPromise.push(caches.delete(cacheName))
                    } else{
                        console.log(`current version: ${cacheVersion}`)
                    }
                }
            return Promise.all(deletedPromise);
            }))
            
    )
})


//listen for fetch events made by app
//intercept request made by browser
//clone the response
//add to cache
//open cache with cacheVersion
//put res into cache opend

self.addEventListener('fetch', (e) => {
    e.respondWith(
        //intercept request
        fetch(e.request)
            .then(res => {
                const clonedResponse = res.clone()

                caches
                .open(cacheVersion)
                .then(cache => {
                    cache.put(e.request, clonedResponse)
            });
            return res
        

        }).catch((err) => {
            console.log(`Error Occured, ${err}`)
            return caches.match(e.request)
        })
    )
})