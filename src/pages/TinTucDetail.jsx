import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import tinTuc from "../data/TinTuc"; // ✅ Dữ liệu tin tức
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

export default function TinTucDetail() {
  const { slug } = useParams();
  const article = tinTuc.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!article) {
    return (
      <div style={{ padding: "1rem", textAlign: "center" }}>
        <h2>❌ Tin tức không tồn tại</h2>
        <Link to="/tin-tuc" style={{ color: "blue" }}>
          ← Quay lại danh sách
        </Link>
      </div>
    );
  }

  const related = tinTuc.filter(
    (a) =>
      a.id !== article.id &&
      (a.tags || []).some((tag) => (article.tags || []).includes(tag))
  );

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <Helmet>
        <title>{article.title} | Tin tức công nghệ</title>
        <meta
          name="description"
          content={
            article.content
              ? article.content.substring(0, 150).replace(/\n/g, " ") + "..."
              : "Tin tức công nghệ mới nhất."
          }
        />
      </Helmet>

      {/* 📰 Tiêu đề */}
      <h1
        style={{
          fontSize: "1.8rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          lineHeight: 1.3,
          color: "#FFFFFF",
        }}
      >
        {article.title}
      </h1>
      <p style={{ color: "#CCCCCC", fontSize: "0.9rem", marginBottom: "1rem" }}>
        {article.date} — Tags:{" "}
        {Array.isArray(article.tags) ? article.tags.join(", ") : ""}
      </p>

      {/* 🖼 Hero (Cover 16:9) */}
      {article.cover && (
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%", // ✅ tỷ lệ 16:9
            borderRadius: "10px",
            overflow: "hidden",
            marginBottom: "1.5rem",
          }}
        >
          <img
            src={article.cover}
            alt={article.title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </div>
      )}

      {/* 📄 Nội dung */}
      <div
        style={{
          lineHeight: "1.7",
          fontSize: "1rem",
          color: "#FFFFFF",
          marginBottom: "2rem",
        }}
      >
        <ReactMarkdown
          components={{
            hr: () => (
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #444",
                  margin: "1.5rem 0",
                }}
              />
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </div>

      {/* 🔗 Tin tức liên quan */}
      {related.length > 0 && (
        <div>
          <h3 style={{ marginBottom: "1rem" }}>Tin tức liên quan</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {related.slice(0, 4).map((r, index) => (
              <div
                key={`${r.id}-${index}`}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "16px",
                  borderBottom: "1px solid #333",
                  paddingBottom: "16px",
                  marginBottom: "16px",
                }}
                title={r.excerpt}
              >
                {r.cover && (
                  <Link
                    to={`/tin-tuc/${r.slug}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "150px",
                        paddingTop: "66.66%", // ✅ 3:2
                        overflow: "hidden",
                        borderRadius: "6px",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={r.cover}
                        alt={r.title}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />
                    </div>
                  </Link>
                )}

                <div style={{ flex: 1 }}>
                  <Link
                    to={`/tin-tuc/${r.slug}`}
                    style={{
                      color: "#EAEAEA",
                      fontWeight: 600,
                      textDecoration: "none",
                      fontSize: "1rem",
                      lineHeight: 1.4,
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {r.title}
                  </Link>

                  <p
                    style={{
                      color: "#999",
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                      margin: "0 0 6px 0",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {r.excerpt}
                  </p>

                  <p style={{ color: "#888", fontSize: "0.8rem" }}>
                    {r.date} — Tags:{" "}
                    {Array.isArray(r.tags) ? r.tags.join(", ") : ""}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
