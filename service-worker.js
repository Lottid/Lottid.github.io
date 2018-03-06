// configuration
`use strict`;

const
    version = '1.0.0',
    CACHE = version + '::PWAsite',
    offlineURL = '/offline/',
    installFilesEssential = [
        '/',
        '/manifest.json',
        '/dist/css/animate.css',
        '/dist/css/icomoon.css',
        '/dist/css/bootstrap.css',
        // '//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css',
        '/dist/css/style.css',
        '/dist/js/modernizr-2.6.2.min.js',
        '/dist/js/jquery.min.js',
        '/dist/js/jquery.easing.1.3.js',
        '/dist/js/bootstrap.min.js',
        '/dist/js/jquery.waypoints.min.js',
        '/dist/js/jquery.stellar.min.js',
        '/dist/js/jquery.easypiechart.min.js',
        '/dist/js/main.js',
        // '//cdn.bootcss.com/modernizr/2.8.3/modernizr.min.js',
        // '//cdn.bootcss.com/jquery/2.1.4/jquery.min.js',
        // '//cdn.bootcss.com/jquery-easing/1.3/jquery.easing.min.js',
        // '//cdn.bootcss.com/bootstrap/4.0.0/js/bootstrap.min.js',
        '/dist/js/offline/offlinepage.js',
        '/dist/images/user-00.jpg'
    ].concat(offlineURL),
    installFilesDesirable = [
        '/dist/images/user-00.jpg',
        '/dist/images/company/cstar.png',
        '/dist/images/company/ultraEdu.png',
        '/dist/images/company/gft.png',
        '/demos/logos/img/logo-css.jpg',
        '/demos/logos/img/logo-vue.png',
        '/demos/logos/img/logo-react.svg'
    ];

// install static assets
function installStaticFiles() {

    return caches.open(CACHE)
        .then(cache => {

            // cache desirable files
            cache.addAll(installFilesDesirable);

            // cache essential files
            return cache.addAll(installFilesEssential);

        });

}

// clear old caches
function clearOldCaches() {

    return caches.keys()
        .then(keylist => {

            return Promise.all(
                keylist
                .filter(key => key !== CACHE)
                .map(key => caches.delete(key))
            );

        });

}

// application installation
self.addEventListener('install', event => {

    console.log('service worker: install');
    // alert('service worker: install');
    // cache core files
    event.waitUntil(
        installStaticFiles()
        .then(() => self.skipWaiting())
    );

});


// application activated
self.addEventListener('activate', event => {

    console.log('service worker: activate');
    console.log(self);

    // delete old caches
    event.waitUntil(
        clearOldCaches()
        .then(() => self.clients.claim())
    );

});


// is image URL?
let iExt = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp','svg'].map(f => '.' + f);

function isImage(url) {

    return iExt.reduce((ret, ext) => ret || url.endsWith(ext), false);

}


// return offline asset
function offlineAsset(url) {

    if (isImage(url)) {

        // return image
        return new Response(
            '<svg role="img" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title>offline</title><path d="M0 0h400v300H0z" fill="#eee" /><text x="200" y="150" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="50" fill="#ccc">offline</text></svg>', {
                headers: {
                    'Content-Type': 'image/svg+xml',
                    'Cache-Control': 'no-store'
                }
            }
        );

    } else {

        // return page
        return caches.match(offlineURL);

    }

}

// application fetch network data
self.addEventListener('fetch', event => {

    // abandon non-GET requests
    if (event.request.method !== 'GET') return;

    let url = event.request.url;

    event.respondWith(

        caches.open(CACHE)
        .then(cache => {

            return cache.match(event.request)
                .then(response => {

                    if (response) {
                        // return cached file
                        console.log('cache fetch: ' + url);
                        return response;
                    }

                    // make network request
                    return fetch(event.request)
                        .then(newreq => {

                            // console.log('network fetch: ' + url);
                            if (newreq.ok) cache.put(event.request, newreq.clone());
                            return newreq;

                        })
                        // app is offline
                        .catch(() => offlineAsset(url));

                });

        })

    );

});