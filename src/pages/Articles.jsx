import { useState, useMemo, useEffect, useRef } from "react"; // ✅ thêm useMemo, useEffect, useRef
import { Link } from "react-router-dom";
import articles from "../data/articles";
import Sidebar from "../components/Navigation/Sidebar";
 // 👈 thêm sidebar

export default function Articles() {
  const [search, setSearch] = useState("");  
 const [visibleCount, setVisibleCount] = useState(10);
const loadMoreRef = useRef(null);
const [filterTag, setFilterTag] = useState("all");



  // ✅ 12 chuyên mục cố định
  const tags = [
    "all",
    "Công nghệ",
    "Thủ thuật",
    "AI",
    "Lập trình",
    "Mobile",
    "Web",
    "Tin tức",
    "Game",
    "Phần mềm",
    "Bảo mật",
    "Học tập",
    "Đời sống"
  ];

  // lọc bài viết
 const filteredArticles = useMemo(() => {
  const q = search.toLowerCase();
  return articles.filter((a) => {
    const title = a?.title?.toLowerCase() || "";
    const excerpt = a?.excerpt?.toLowerCase() || "";
    const tags = Array.isArray(a?.tags) ? a.tags.join(" ").toLowerCase() : "";
    const matchTag = filterTag === "all" || a.tags?.includes(filterTag);
    return (title.includes(q) || excerpt.includes(q) || tags.includes(q)) && matchTag;
  });
}, [search, filterTag]);


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => prev + 10);
      }
    },
    { threshold: 1.0 }
  );

  if (loadMoreRef.current) observer.observe(loadMoreRef.current);
  return () => {
    if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
  };
}, []);


  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1rem",
      }}
    >
      {/* Cột trái (nội dung chính) */}
      <div style={{ flex: 1 }}>
        <h1>Tất cả bài viết</h1>

        {/* Ô tìm kiếm */}
        <input
          type="text"
          placeholder="Tìm bài viết..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            margin: "12px 0",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        {/* Filter theo 12 chuyên mục */}
        <div
          style={{
            margin: "12px 0",
            display: "flex",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterTag(tag)}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                background: filterTag === tag ? "#222" : "#f9f9f9",
                color: filterTag === tag ? "#fff" : "#333",
                cursor: "pointer",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Danh sách bài viết dạng list giống Home */}
<div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "20px",
  }}
>
  {filteredArticles.slice(0, visibleCount).map((a, index) => (

    <div
      key={a.slug || `article-${index}`}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "16px",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        paddingBottom: "16px",
        marginBottom: "16px",
      }}
      title={a.excerpt}
    >
      {a.cover && (
        <Link to={`/bai-viet/${a.slug}`}>
          <img
            src={a.cover}
            alt={a.title}
            style={{
              width: "150px",
              height: "100px",
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
            color: "#EAEAEA", // ✅ màu tối dễ đọc
            fontWeight: 600,
            textDecoration: "none",
            fontSize: "1rem",
            lineHeight: 1.4,
            display: "block",
            marginBottom: "6px",
          }}
        >
          {a.title} 
        </Link>

        <p
          style={{
            color: "#555",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            margin: "0 0 6px 0",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {a.excerpt}
        </p>

        <p style={{ color: "#888", fontSize: "0.8rem" }}>
          {a.date} — Tags: {Array.isArray(a.tags) ? a.tags.join(", ") : ""}
        </p>
      </div>
    </div>
  ))}
</div>
<div ref={loadMoreRef} style={{ height: "40px" }}></div>  
</div>
  <Sidebar articles={articles} />
    </div> 
  );
  }
