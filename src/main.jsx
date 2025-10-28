import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./i18n";
import { HelmetProvider } from "react-helmet-async";
import "./pwa-prompt";

// 🚀 Đảm bảo React mount đúng vào #root
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("❌ Không tìm thấy phần tử #root trong index.html");
}

// ✅ Service Worker (chỉ chạy khi tồn tại file)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js") // ⚡ quan trọng: dùng './' thay vì '/'
      .then((reg) => {
        console.log("✅ Service Worker đăng ký thành công:", reg);
      })
      .catch((err) => {
        console.warn("⚠️ Không thể đăng ký Service Worker:", err);
      });
  });
}
