import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Suspense } from 'react';

import { Provider } from 'react-redux';
import "normalize.css"
import "./assets/css/index.css"
import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from './assets/css/svg/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Suspense fallback="loading ...">
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
  // </React.StrictMode>
);

