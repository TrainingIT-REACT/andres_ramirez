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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
