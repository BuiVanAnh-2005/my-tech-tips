import { Helmet } from "react-helmet-async";

export default function LienHe() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: "1.8",
        color: "#fff",
      }}
    >
      <Helmet>
        <title>Liên hệ - TechTips.icu</title>
        <meta
          name="description"
          content="Liên hệ với TechTips.icu để hợp tác truyền thông, quảng cáo, hoặc góp ý phát triển nội dung. Chúng tôi luôn sẵn sàng lắng nghe bạn."
        />
        <meta
          name="keywords"
          content="Liên hệ TechTips.icu, Hợp tác quảng cáo, Góp ý website công nghệ, TechTips, Contact TechTips"
        />
        <meta property="og:title" content="Liên hệ với TechTips.icu" />
        <meta
          property="og:description"
          content="Liên hệ với TechTips.icu để hợp tác, quảng cáo hoặc chia sẻ thông tin công nghệ."
        />
        <meta property="og:image" content="https://techtips.icu/cover/contact-og.jpg" />
        <meta property="og:url" content="https://techtips.icu/lien-he" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="TechTips.icu Team" />

        {/* ✅ Schema JSON-LD chuẩn Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://techtips.icu/lien-he",
            "name": "Liên hệ TechTips.icu",
            "description":
              "Liên hệ với TechTips.icu để hợp tác, quảng cáo hoặc đóng góp nội dung.",
            "publisher": {
              "@type": "Organization",
              "name": "TechTips.icu",
              "url": "https://techtips.icu",
              "logo": "https://techtips.icu/logo.png",
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "buivananh.dev@gmail.com",
              "contactType": "Customer Support",
              "availableLanguage": ["Vietnamese", "English"],
            },
          })}
        </script>
      </Helmet>

      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Liên hệ với TechTips.icu
      </h1>

      <p>
        Chúng tôi luôn sẵn sàng lắng nghe ý kiến, hợp tác truyền thông hoặc phản hồi từ bạn.
        Hãy liên hệ với đội ngũ <strong>TechTips.icu</strong> qua kênh sau:
      </p>

      {/* --- EMAIL LIÊN HỆ --- */}
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          padding: "1.5rem",
          borderRadius: "12px",
          marginTop: "1.5rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2>📧 Email liên hệ</h2>

        <button
          onClick={() => (window.location.href = "mailto:buivananh.dev@gmail.com")}
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
            marginTop: "0.5rem",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
        >
          Gửi email cho chúng tôi
        </button>

        <p style={{ marginTop: "1rem", color: "#4faaff" }}>
          {"buivananh"}<span style={{ display: "none" }}>-</span>
          {"\u002E"}{"dev"}{"\u0040"}{"gmail"}{"\u002E"}{"com"}
        </p>
      </div>

      {/* --- WEBSITE --- */}
      <div style={{ marginTop: "2rem" }}>
        <h2>🌐 Website</h2>
        <p>
          <a
            href="https://techtips.icu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4faaff" }}
          >
            https://techtips.icu
          </a>
        </p>

        <h2>💬 Kết nối</h2>
        <p>Theo dõi chúng tôi để cập nhật tin tức và thủ thuật công nghệ mới nhất:</p>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          <li>🔗 <a href="#" style={{ color: "#4faaff" }}>Facebook</a></li>
          <li>🔗 <a href="#" style={{ color: "#4faaff" }}>YouTube</a></li>
          <li>🔗 <a href="#" style={{ color: "#4faaff" }}>GitHub</a></li>
        </ul>
      </div>

      <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#ccc" }}>
        TechTips.icu – Cùng bạn khám phá và làm chủ công nghệ.
      </p>
    </div>
  );
}
