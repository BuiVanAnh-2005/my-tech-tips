import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import "./i18n";
import { HelmetProvider } from "react-helmet-async";
import "./pwa-prompt";




createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<HelmetProvider>
<App />
</HelmetProvider>
</BrowserRouter>
</React.StrictMode>
);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((reg) => {
        console.log('✅ Service Worker đăng ký thành công:', reg);
      })
      .catch((err) => {
        console.log('❌ Lỗi khi đăng ký Service Worker:', err);
      });
  });
}