import { NavLink } from "react-router-dom";
import {
  Home,          // Trang chủ
  FileText,      // Bài viết
  Newspaper,     // Tin tức
  Lightbulb,     // Mẹo công nghệ
  Smartphone,    // Ứng dụng
  HardDrive,           // Phần cứng
  Code,          // Lập trình
  Shield,        // Bảo mật
  Car,           // Xe công nghệ
  Brain,         // Trí tuệ nhân tạo
  Compass,       // Khám phá
  Star,          // Đánh giá
  Watch, 
  Globe,        // Thiết bị đeo
  Info,          // Giới thiệu
  Mail,          // Liên hệ
  Lock,          // Chính sách bảo mật
  Cookie
} from "lucide-react";


export default function NavLinks({ onClose }) {
  return (
    <ul>
      {/* Trang chủ */}
      <li>
        <NavLink
    to="/"
    onClick={() => onClose && onClose()}
    style={({ isActive }) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 5px",
      borderRadius: "10px",
      color: isActive ? "#fff" : "#222",
      backgroundColor: isActive ? "#2563eb" : "transparent",
      textDecoration: "none",
      fontWeight: 500,
      transition: "all 0.2s ease",
    })}
  >
    <Home size={20} />
    Trang chủ
  </NavLink>
      </li>
      <li>
        <NavLink
  to="/bai-viet"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <FileText size={20} />
  Bài viết
</NavLink>
      </li>

      {/* Tin tức */}
      <li>
        <NavLink
  to="/tin-tuc"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Newspaper size={20} />
  Tin tức
</NavLink>
      </li>
{/* Đường kẻ chia nhóm */}
<hr style={{
  border: "none",
  borderTop: "1px solid #e5e7eb", // màu xám nhạt
  margin: "12px 0",
}} />
      {/* Nhãn “Chuyên mục” */}
      <li
  style={{
    fontSize: "11px",
    fontWeight: 600,
    color: "#6B7280",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    padding: "6px 0 4px",
    userSelect: "none",
    cursor: "default",
  }}
>
  CHUYÊN MỤC
</li>



      <li>
        <NavLink
  to="/chuyen-muc/Mẹo công nghệ"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Lightbulb size={20} /> {/* icon cho mẹo công nghệ */}
  Mẹo công nghệ
</NavLink>
      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Ứng dụng"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Smartphone size={20} /> {/* Ứng dụng */}
  Ứng dụng
</NavLink>

      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Phần mềm"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <HardDrive size={20} /> {/* Phần mềm */}
  Phần mềm
</NavLink>
      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Phần cứng"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <HardDrive size={20} /> {/* Phần cứng */}
  Phần cứng
</NavLink>
      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Lập trình"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Code size={20} /> {/* Lập trình */}
  Lập trình
</NavLink>
      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Bảo mật"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Shield size={20} /> {/* Bảo mật */}
  Bảo mật
</NavLink>
      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Xe công nghệ"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Car size={20} /> {/* Xe công nghệ */}
  Xe công nghệ
</NavLink>

      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Trí tuệ nhân tạo"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Brain size={20} /> {/* Trí tuệ nhân tạo */}
  Trí tuệ nhân tạo
</NavLink>
      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Khám phá"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Compass size={20} /> {/* Khám phá */}    5
  Khám phá
</NavLink>
      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Đánh giá"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Star size={20} /> {/* Đánh giá */}
  Đánh giá
</NavLink>
      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Thiết bị đeo"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Watch size={20} /> {/* Thiết bị đeo */}
  Thiết bị đeo
</NavLink>
      </li>
      <li>
        <NavLink
  to="/chuyen-muc/Tin tức Công Nghệ"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Globe size={20} /> {/* icon trái đất */}
  Tin tức Công Nghệ
</NavLink>
      </li>
{/* Đường kẻ chia nhóm */}
<hr style={{
  border: "none",
  borderTop: "1px solid #e5e7eb", // màu xám nhạt
  margin: "12px 0",
}} />
      {/* Giới thiệu + Liên hệ */}
      <li>
        <NavLink
  to="/gioi-thieu"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Info size={20} />
  Giới thiệu
</NavLink>
      </li>
      <li>
        <NavLink
  to="/lien-he"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Mail size={20} />
  Liên hệ
</NavLink>
      </li>
      <li>
      <NavLink
  to="/chinh-sach-bao-mat"
  onClick={() => onClose && onClose()}
  style={({ isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 5px",
    borderRadius: "10px",
    color: isActive ? "#fff" : "#222",
    backgroundColor: isActive ? "#2563eb" : "transparent",
    textDecoration: "none",
    fontWeight: 500,
    transition: "all 0.2s ease",
  })}
>
  <Shield size={20} />
  Chính sách bảo mật
</NavLink>

  <NavLink
    to="/chinh-sach-cookie"
    onClick={() => onClose && onClose()}
    style={({ isActive }) => ({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 5px",
      borderRadius: "10px",
      color: isActive ? "#fff" : "#222",
      backgroundColor: isActive ? "#2563eb" : "transparent",
      textDecoration: "none",
      fontWeight: 500,
      transition: "all 0.2s ease",
    })}
  >
    <Cookie size={20} />
    Hướng dẫn Cookie
  </NavLink>


      </li>
    </ul>
  );
}
