import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter }  from 'react-router-dom';
import { Suspense } from 'react';

import "normalize.css"
import "./assets/css/index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Suspense fallback="loading">
    <HashRouter>
      <App />
    </HashRouter>
  </Suspense>
  // </React.StrictMode>
);

