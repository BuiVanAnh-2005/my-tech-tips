import { useParams, Link } from "react-router-dom";
import articles from "../data/articles";
import { Helmet } from "react-helmet-async";


export default function CategoryPage() {
  const { categorySlug } = useParams();
  const categoryName = categorySlug ? categorySlug.replace(/-/g, " ") : "";

  const filtered = articles.filter(
    (a) => a.category?.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <>
      <Helmet>
        <title>{`Chuyên mục: ${categoryName} | TechTips`}</title>
        <meta
          name="description"
          content={`Tổng hợp các bài viết về ${categoryName} – cập nhật mẹo, thủ thuật và tin tức công nghệ mới nhất.`}
        />
      </Helmet>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "1rem" }}>
        <h1 style={{
  fontSize: "1.8rem",
  fontWeight: 700,
  color: "#fff",
  marginTop: "0.5rem",
  marginBottom: "1.5rem",
}}>
  <span style={{ color: "#9ca3af", fontWeight: 500, marginRight: "0.5rem" }}>
    Chuyên mục:
  </span>
  <span style={{ color: "#38bdf8" }}>{categoryName}</span>
</h1>

<div style={{
  width: "80px",
  height: "3px",
  background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
  borderRadius: "3px",
  marginBottom: "1.5rem",
}}></div>


        {filtered.length === 0 ? (
          <p>Không có bài viết nào trong chuyên mục này.</p>
        ) : (
          <div style={{ display: "grid", gap: "16px" }}>
            {filtered.map((a, index) => (
              <div
                key={`${a.id || a.slug}-${index}`}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "16px",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  paddingBottom: "16px",
                  marginBottom: "16px",
                }}
              >
                {(a.image || a.cover) && (
                  <Link to={`/bai-viet/${a.slug}`}>
                    <img
                      src={a.image || a.cover}
                      alt={a.title}
                      style={{
                        width: "120px",
                        height: "80px",
                        objectFit: "cover",
                        borderRadius: "6px",
                        flexShrink: 0,
                      }}
                    />
                  </Link>
                )}

                <div style={{ flex: 1 }}>
                  <Link
                    to={`/bai-viet/${a.slug}`}
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      lineHeight: 1.4,
                      marginBottom: "4px",
                      display: "block",
                    }}
                  >
                    {a.title}
                  </Link>

                  <p
                    style={{
                      color: "#ccc",
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                      marginTop: "4px",
                      marginBottom: "2px",
                       display: "-webkit-box", 
                       WebkitLineClamp: 3, // 👈 Giới hạn 3 dòng (có thể chỉnh 2–3)
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {a.excerpt}
                  </p>

                  {a.author && (
                    <p
                      style={{
                        color: "#888",
                        fontSize: "0.75rem",
                        marginTop: "6px",
                      }}
                    >
                      {a.author} — {a.date || "Cập nhật gần đây"}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
