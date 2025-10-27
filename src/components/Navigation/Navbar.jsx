import { useState } from "react";
import { NavLink ,useNavigate } from "react-router-dom";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import SettingsMenu from "./SettingsMenu";
import "../../styles/mobile.css";
import { MdHome, MdHomeFilled, MdArticle, MdNewspaper, MdSearch  } from "react-icons/md";







export default function Navbar() {
    const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language || "vi");
  const { t } = useTranslation();

  const handleChangeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(18,26,43,0.9)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid #444",
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            padding: "12px 0", // hoặc "12px 0" nếu bạn muốn sát hẳn mép

            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          {/* Nút menu 3 gạch */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            style={{ fontSize: "22px", color: "#fff", background: "none", border: "none", cursor: "pointer" }}
          >
            ☰
          </button>

          {/* Logo */}
          <NavLink to="/" style={{ fontWeight: 800, fontSize: "18px", color: "#fff", textDecoration: "none" }}>
            TechTips
          </NavLink>

          {/* Header links */}
          <nav style={{ marginLeft: "auto", display: "flex", gap: "16px" }}>
            <NavLink to="/" end>
    {({ isActive }) =>
      isActive ? (
        <MdHomeFilled size={28} color="#4fc3f7" title="Trang chủ" />
      ) : (
        <MdHome size={28} color="#fff" title="Trang chủ" />
      )
    }
  </NavLink>





             {/* ✍️ Bài viết */}
  <NavLink to="/bai-viet">
    {({ isActive }) =>
      isActive ? (
        <MdArticle size={27} color="#4fc3f7" title="Bài viết" />
      ) : (
        <MdArticle size={27} color="#fff" title="Bài viết" />
      )
    }
  </NavLink>
             {/* 🗞️ Tin tức */}
  <NavLink to="/tin-tuc">
    {({ isActive }) =>
      isActive ? (
        <MdNewspaper size={27} color="#4fc3f7" title="Tin tức" />
      ) : (
        <MdNewspaper size={27} color="#fff" title="Tin tức" />
      )
    }
  </NavLink>
  {/* 🔍 Tìm kiếm */}
<NavLink to="/tim-kiem">
  {({ isActive }) =>
    isActive ? (
      <MdSearch
        size={27}
        color="#4fc3f7"
        title="Tìm kiếm"
        style={{ transition: "transform 0.15s ease" }}
        onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.88)")}
        onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    ) : (
      <MdSearch
        size={27}
        color="#fff"
        title="Tìm kiếm"
        style={{ transition: "transform 0.15s ease" }}
        onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.88)")}
        onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
    )
  }
</NavLink>



            
          </nav>

          
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
