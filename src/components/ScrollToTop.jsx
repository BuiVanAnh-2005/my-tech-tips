// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function findScrollableAncestor(el) {
  // tìm phần tử ancestor có overflow-y autor/scroll và nội dung vượt
  while (el && el !== document.body && el !== document.documentElement) {
    const style = window.getComputedStyle(el);
    const overflowY = style.overflowY;
    if ((overflowY === "auto" || overflowY === "scroll") && el.scrollHeight > el.clientHeight) {
      return el;
    }
    el = el.parentElement;
  }
  // fallback: document.scrollingElement (thường là <html> hoặc <body>)
  return document.scrollingElement || document.documentElement;
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      console.groupCollapsed(`[ScrollToTop] pathname changed -> ${pathname}`);
      console.log("[ScrollToTop] running...");

      // Kiểm tra element cuộn chính hiện tại
      const scrollingElement = document.scrollingElement || document.documentElement;
      console.log("[ScrollToTop] document.scrollingElement:", scrollingElement);

      // thử tìm `.container` nếu có
      const namedContainer = document.querySelector(".container");
      console.log("[ScrollToTop] .container element:", namedContainer);

      // thử tìm ancestor cuộn của main content (bắt đầu từ .container nếu có, else body)
      const startEl = namedContainer || document.body;
      const scrollable = findScrollableAncestor(startEl);
      console.log("[ScrollToTop] chosen scrollable element:", scrollable);

      // tắt tạm scroll-behavior global để ép cuộn lập tức
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";

      // 1) đặt trực tiếp giá trị (thực sự mạnh)
      if (scrollable === document.documentElement || scrollable === document.body) {
        // cho mọi trường hợp
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        console.log("[ScrollToTop] scrolled window/document to 0");
      } else {
        // cuộn phần tử có overflow
        try {
          scrollable.scrollTo({ top: 0, behavior: "auto" });
          console.log("[ScrollToTop] scrolled scrollable element to 0 via scrollTo()");
        } catch (err) {
          // fallback
          scrollable.scrollTop = 0;
          console.log("[ScrollToTop] scrolled scrollable element to 0 via scrollTop");
        }
      }

      // 2) restore smooth behavior (nếu muốn) sau 60ms và lần cuộn mượt thứ 2
      setTimeout(() => {
        html.style.scrollBehavior = prevBehavior || "";
        // lần hai: cuộn mượt để UX tốt
        if (scrollable === document.documentElement || scrollable === document.body) {
          try {
            window.scrollTo({ top: 0, behavior: "smooth" });
            console.log("[ScrollToTop] smooth window.scrollTo()");
          } catch (e) {}
        } else {
          try {
            scrollable.scrollTo({ top: 0, behavior: "smooth" });
            console.log("[ScrollToTop] smooth scroll on scrollable element");
          } catch (e) {}
        }
        console.groupEnd();
      }, 60);
    } catch (e) {
      console.error("[ScrollToTop] error:", e);
    }
  }, [pathname]);

  return null;
}
