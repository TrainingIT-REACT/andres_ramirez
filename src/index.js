import React, { StrictMode, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Polyfills! 
import '@babel/polyfill'; 
import 'whatwg-fetch';

// TODO: Add concurrent and strict mode
ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
        <main>
          <App />
        </main>
    </StrictMode>,
  );


//  // Comprobamos que el navegador lo soporte: 
//  if ('serviceWorker' in navigator) { 
//    // Esperamos a que cargue la web 
//    window.addEventListener('load', () => { 
//      // Intentamos instalar el Service worker 
//      navigator.serviceWorker.register('/sw.js')
//      .then((registration) => { 
//        // Se ha registrado correctamente 
//        console.log('El service worker SW se ha registrado correctamente: ', registration.scope); }, 
//        (err) => { 
//          // registration failed :( 
//            console.log('El registro de SW ha fallado :(', err); 
//           }); }); }


if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').then((registration) => {
      console.log(`El service worker SW se ha registrado correctamente ${registration.scope}`)

      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;

        worker.addEventListener('statechange', () => {
          if(worker.state == "installed") {
            // Do something here when the worker is installed
          }
        })
      })
    }, (error) => {
      console.error(`El registro de SW ha fallado: ${err}`)
    });
  })
}