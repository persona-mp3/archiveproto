//check if sw is supported 
if ('serviceWorker' in navigator){
    console.log('Service Worker Supported')

    //register sw on page load
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../service_worker.js')
            .then((reg) => console.log('Registered Succesfully'))
            .catch((err) => console.log('Registration error:', err))
    })
}