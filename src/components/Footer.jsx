export default function Footer() {
  return (
    <footer
      style={{
        background: "#121a2b",
        color: "#ccc",
        padding: "24px",
        marginTop: "40px",
        borderTop: "1px solid #333",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          textAlign: "center",
        }}
      >
        {/* Logo / tên site */}
        <h2 style={{ margin: 0, color: "#fff" }}>TechTips</h2>

        {/* Social links */}
        <div style={{ display: "flex", gap: "16px" }}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4fc3f7", textDecoration: "none" }}
          >
            Facebook
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ff5252", textDecoration: "none" }}
          >
            YouTube
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#90caf9", textDecoration: "none" }}
          >
            GitHub
          </a>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: "0.85rem", color: "#888", margin: 0 }}>
          © {new Date().getFullYear()} TechTips. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
