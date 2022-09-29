/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppProvider from './providers/AppProvider';
import './styles/main.scss';

(async () => {
  if (process.env.NODE_ENV !== 'production') {
    const axe = await import('react-axe');
    axe(React, ReactDOM, 1000);
  }
})();

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <AppProvider>
    <App />
  </AppProvider>,
);
