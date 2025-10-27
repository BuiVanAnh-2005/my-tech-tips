import i18n from "../../i18n";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SettingsMenu({ language, onChangeLanguage }) {
  const [localLang, setLocalLang] = useState(language || (i18n.language || "vi"));
  const { t } = useTranslation();

  const handle = (lng) => {
    setLocalLang(lng);
    onChangeLanguage && onChangeLanguage(lng);
  };

  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        top: "40px",
        background: "#fff",
        borderRadius: "8px",
        padding: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        minWidth: "160px",
        zIndex: 50,
      }}
    >
      <p style={{ fontWeight: "bold", marginBottom: "8px" }}>🌐 {t ? t("language") : "Language"}</p>
      <select
        value={localLang}
        onChange={(e) => handle(e.target.value)}
        style={{
          width: "100%",
          padding: "6px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      >
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
        <option value="zh">中文</option>
        <option value="es">Español</option>
        <option value="ru">Русский</option>
        <option value="ar">العربية</option>
      </select>
    </div>
  );
}
