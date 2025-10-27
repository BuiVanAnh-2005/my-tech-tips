import { Helmet } from "react-helmet-async";
import { useState } from "react";

export default function GioiThieu() {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto", lineHeight: "1.8" }}>
      <Helmet>
        <title>Giới thiệu về TechTips.icu - Nền tảng chia sẻ thủ thuật & kiến thức công nghệ Việt Nam</title>
        <meta name="description" content="TechTips.icu là nền tảng chia sẻ kiến thức, thủ thuật và xu hướng công nghệ 2025 dành cho người Việt. Cập nhật AI, phần mềm, ứng dụng và kỹ năng số thực tế." />
        <meta name="keywords" content="TechTips.icu, Thủ thuật công nghệ, Kiến thức công nghệ, Xu hướng AI, Ứng dụng phần mềm, Kỹ năng số, Trang công nghệ Việt Nam" />
        <meta property="og:title" content="Giới thiệu TechTips.icu - Kiến thức & thủ thuật công nghệ Việt Nam" />
        <meta property="og:description" content="Nền tảng công nghệ dành cho người Việt - chia sẻ thủ thuật, mẹo, xu hướng AI và kỹ năng số hữu ích. Cập nhật công nghệ mỗi ngày cùng TechTips.icu." />
        <meta property="og:image" content="https://techtips.icu/cover/techtips-og.jpg" />
        <meta property="og:url" content="https://techtips.icu/gioi-thieu" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="TechTips.icu Team" />
        {/* ✅ Schema JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "url": "https://techtips.icu/gioi-thieu",
            "name": "Giới thiệu TechTips.icu",
            "description": "TechTips.icu là nền tảng chia sẻ kiến thức, thủ thuật và xu hướng công nghệ 2025 dành cho người Việt.",
            "publisher": {
              "@type": "Organization",
              "name": "TechTips.icu",
              "url": "https://techtips.icu",
              "logo": "https://techtips.icu/logo.png",
            },
            "mainEntityOfPage": "https://techtips.icu/gioi-thieu",
            "inLanguage": "vi-VN",
          })}
        </script>
      </Helmet>

      <h1 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#ffffff" }}>
        Giới thiệu về TechTips.icu
      </h1>

      <img
        src="https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Giới thiệu TechTips.icu - nền tảng chia sẻ kiến thức công nghệ Việt Nam"
        style={{ width: "100%", borderRadius: "16px", marginBottom: "2rem", boxShadow: "0 4px 15px rgba(0,0,0,0.2)", objectFit: "cover" }}
      />

      <p>
        <strong>TechTips.icu</strong> là nền tảng chia sẻ kiến thức và thủ thuật công nghệ dành cho người Việt, được xây dựng với mục tiêu giúp mọi người tiếp cận, học hỏi và ứng dụng công nghệ một cách đơn giản, hiệu quả và thực tế.
      </p>

      <p>
        Trong bối cảnh thế giới số phát triển nhanh chóng, công nghệ không chỉ là công cụ mà còn là nền tảng của tư duy mới. <strong>TechTips.icu</strong> tập trung vào việc tổng hợp, biên soạn và truyền tải các kiến thức, xu hướng và giải pháp công nghệ theo hướng ngắn gọn, chính xác và cập nhật — giúp người dùng làm chủ công nghệ trong cuộc sống và công việc.
      </p>

      <h2 style={{ marginTop: "2rem" }}>Mục tiêu</h2>
      <p>Chúng tôi hướng đến việc xây dựng một không gian học tập mở, nơi người dùng có thể:</p>
      <ul>
        <li>Nắm bắt xu hướng công nghệ, trí tuệ nhân tạo và kỹ năng số</li>
        <li>Tìm hiểu các ứng dụng, phần mềm và giải pháp thực tế</li>
        <li>Phát triển tư duy sáng tạo và khả năng làm chủ công nghệ</li>
        <li>Kết nối cộng đồng yêu công nghệ Việt Nam</li>
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Tầm nhìn</h2>
      <p>
        <strong>TechTips.icu</strong> hướng đến trở thành nền tảng tri thức công nghệ đáng tin cậy tại Việt Nam — nơi mọi người có thể học, khám phá và chia sẻ kiến thức hữu ích mỗi ngày.
      </p>
      <p>
        Đội ngũ phát triển TechTips.icu gồm những người đam mê công nghệ và truyền thông số, cam kết mang đến nội dung minh bạch, chất lượng và mang tính ứng dụng cao cho cộng đồng.
      </p>

      <h2 style={{ marginTop: "2rem" }}>Liên hệ</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => window.location.href = "mailto:buivananh.dev@gmail.com"}
          style={{ backgroundColor: "#007BFF", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "8px", cursor: "pointer", fontSize: "1rem", transition: "background 0.3s ease" }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#007BFF"}
        >
          Liên hệ qua email
        </button>
      </div>
      <p>
        Website:{" "}
        <a href="https://techtips.icu" target="_blank" rel="noopener noreferrer" style={{ color: "#4faaff" }}>
          techtips.icu
        </a>
      </p>

      <h2 style={{ marginTop: "2rem" }}>Khám phá thêm</h2>
      <p>
        Xem thêm tại mục{" "}
        <a href="/tin-tuc" style={{ color: "#4faaff" }}>Tin tức công nghệ</a>{" "}
        hoặc{" "}
        <a href="/bai-viet" style={{ color: "#4faaff" }}>Bài viết thủ thuật</a>{" "}
        để cập nhật xu hướng, hướng dẫn và mẹo sử dụng công nghệ mới nhất.
      </p>

      <h2 style={{ marginTop: "2rem" }}>Lời kết</h2>
      <p>
        <strong>TechTips.icu</strong> cam kết mang đến nội dung công nghệ rõ ràng, hữu ích và mang tính ứng dụng cao, giúp người dùng hiểu đúng, học nhanh và sử dụng công nghệ thông minh trong cuộc sống.
      </p>

      <p style={{ marginTop: "1.5rem", fontStyle: "italic", color: "#555" }}>
        TechTips.icu – Kiến thức công nghệ cho thế hệ mới.
      </p>
    </div>
  );
}
