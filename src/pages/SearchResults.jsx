import { useLocation } from "react-router-dom";
import articles from "../data/articles";
import { Helmet } from "react-helmet-async";

export default function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("keyword")?.trim().toLowerCase() || "";
const keyword = q;
const highlight = (text, keyword) => {
  if (!text) return "";
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
};


  const results = articles.filter((a) => {
    return (
      a.title?.toLowerCase().includes(q) ||
      a.excerpt?.toLowerCase().includes(q) ||
      a.content?.toLowerCase().includes(q) ||
      a.category?.toLowerCase().includes(q) ||
      a.tags?.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div style={{ padding: "16px", maxWidth: "1080px", margin: "0 auto" }}>
      <Helmet>
        <title>Kết quả tìm kiếm: {q} | Tech Tips</title>
        <meta
  name="description"
  content={`Kết quả tìm kiếm cho từ khóa "${q}" trên Tech Tips – Tổng hợp bài viết công nghệ, AI, bảo mật và lập trình mới nhất.`}
/>

      </Helmet>

      <h2 style={{ color: "#4fc3f7", marginBottom: "16px" }}>
         Kết quả cho: “{q}”
      </h2>

      {results.length > 0 ? (
        results.map((r) => (
          <article
  key={r.slug}
  role="article"
  aria-label={`Kết quả: ${r.title}`}
  style={{
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
    paddingBottom: "12px",
    borderBottom: "1px solid #334155",
  }}
>

            <img
              src={r.cover || "/default-thumbnail.jpg"}
              alt={r.title}
              style={{
                width: "120px",
                height: "80px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <div>
              <a
  href={`/bai-viet/${r.slug}`}
  dangerouslySetInnerHTML={{ __html: highlight(r.title, keyword) }}
  style={{
    color: "#4fc3f7",
    fontWeight: 600,
    fontSize: "17px",
    textDecoration: "none",
  }}
></a>

<p
  style={{ color: "#aaa", fontSize: "14px", margin: "4px 0" }}
  dangerouslySetInnerHTML={{ __html: highlight(r.excerpt, keyword) }}
></p>

              <p style={{ color: "#777", fontSize: "13px" }}>
                {new Date(r.date).toLocaleDateString("vi-VN")}
              </p>
            </div>
          </article>

        ))
      ) : (
        <p style={{ color: "#aaa" }}>Không tìm thấy kết quả nào.</p>
      )}
    </div>
  );
}
