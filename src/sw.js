/* eslint-disable no-undef, no-restricted-globals */

self.addEventListener('install', (event) => {
  console.log("Service Worker instalado!")
})

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

self.addEventListener('activate', function(e) { 
  console.log('activado!'); 
  return self.clients.claim(); 
});