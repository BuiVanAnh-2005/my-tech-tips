// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import các file JSON bạn vừa tạo
import en from "./locales/en.json";
import vi from "./locales/vi.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import ja from "./locales/ja.json";
import ko from "./locales/ko.json";
import zh from "./locales/zh.json";
import es from "./locales/es.json";
import ru from "./locales/ru.json";
import ar from "./locales/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
    fr: { translation: fr },
    de: { translation: de },
    ja: { translation: ja },
    ko: { translation: ko },
    zh: { translation: zh },
    es: { translation: es },
    ru: { translation: ru },
    ar: { translation: ar }
  },
  lng: "vi",           // mặc định: tiếng Việt — đổi nếu muốn
  fallbackLng: "en",   // nếu key thiếu ở ngôn ngữ hiện tại, dùng en
  interpolation: { escapeValue: false },
});

// set lang + dir trên <html> khi thay đổi ngôn ngữ (RTL cho arabic)
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
    document.documentElement.dir = ["ar", "he", "ur"].includes(lng) ? "rtl" : "ltr";
  }
});

export default i18n;
