import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import articles from "../data/articles";
import SearchBar from "../components/SearchBar";
import { Helmet } from "react-helmet-async";


export default function Home() {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(10); // 👈 ban đầu 10 bài
  const loadMoreRef = useRef(null); // 👈 mốc để load thêm


  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return articles.filter((a) => {
      const title = a?.title?.toLowerCase() || "";
      const excerpt = a?.excerpt?.toLowerCase() || "";
      const tags = Array.isArray(a?.tags) ? a.tags.join(" ").toLowerCase() : "";
      return title.includes(q) || excerpt.includes(q) || tags.includes(q);
    });
  }, [query]);
  // 🏆 Hero Post — chọn bài có featured: true
const heroPost = useMemo(() => {
  return articles.find((a) => a.featured) || articles[0];
}, []);

const otherArticles = useMemo(() => {
  return filtered.filter((a) => a !== heroPost).slice(0, visibleCount);
}, [filtered, heroPost, visibleCount]);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCount((prev) => prev + 10); // 👈 mỗi lần cuộn tới mốc → cộng thêm 10 bài
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
    <div style={{ padding: "1rem" }}>
       <Helmet>
      <title>Mẹo & Thủ Thuật Công Nghệ | TechTips</title>
        <link rel="canonical" href="https://techtips.icu/" />
        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://techtips.icu/",
  "name": "TechTips",
  "description": "Trang tổng hợp mẹo công nghệ, hướng dẫn nhanh và thủ thuật hữu ích",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://techtips.icu/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
`}
</script>

        <script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://techtips.icu/",
      "name": "TechTips",
      "description": "Trang tổng hợp mẹo công nghệ, hướng dẫn nhanh và thủ thuật hữu ích"
    }
  `}
</script>

      <meta
        name="description"
        content="Cập nhật mẹo, thủ thuật và hướng dẫn nhanh cho Windows, iPhone, Android và ứng dụng miễn phí — tổng hợp bởi TechTips."
      />
      <meta property="og:title" content="Mẹo & Thủ Thuật Công Nghệ | TechTips" />
      <meta
        property="og:description"
        content="Khám phá hàng trăm mẹo công nghệ, hướng dẫn sử dụng phần mềm, và thủ thuật tối ưu hệ thống tại TechTips."
      />
      <meta property="og:image" content="https://techtips.icu/og-image.jpg" />
      <meta property="og:url" content="https://techtips.icu/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="TechTips - Mẹo & Thủ Thuật Hữu Ích" />
      <meta
        name="twitter:description"
        content="Trang tổng hợp mẹo công nghệ, hướng dẫn nhanh và đánh giá phần mềm hữu ích."
      />
      <meta name="twitter:image" content="https://techtips.icu/og-image.jpg" />
    </Helmet>
      <h1 style={{ marginTop: 0 }}>Mẹo & Thủ thuật nổi bật</h1>
      <p style={{ color: "#666" }}>
        Cập nhật các hướng dẫn nhanh cho Windows, iPhone, Android, Ứng dụng miễn phí
      </p>
<div style={{ marginBottom: "1rem" }}></div>
      <SearchBar onSearch={setQuery} />
      

{/* 🏆 Hero Post */}
{heroPost && (
  <section style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
    <article>
      <Link to={`/bai-viet/${heroPost.slug}`}>
        <img
          src={heroPost.cover}
          alt={`${heroPost.title} - mẹo công nghệ`}
          loading="lazy"
          style={{
            width: "100%",
            height: "auto",       // tự co trên mobile
            maxHeight: "300px",   // desktop giữ 300px
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "1rem",
          }}
        />
      </Link>
      <h2 style={{ fontSize: "1.8rem", marginBottom: "0.5rem" }}>
        {heroPost.title}
      </h2>
      <p style={{ color: "#555" }}>{heroPost.excerpt}</p>
    </article>
  </section>
)}

      <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "1rem",
  }}
>
  {otherArticles.map((a, index) => (
    <article
      key={`${a.id || a.slug}-${index}`}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: "16px",
        borderBottom: "1px solid rgba(150,130,90,0.25)",
        paddingBottom: "16px",
        marginBottom: "16px",
      }}
       title={a.excerpt}
    >
      {a.cover && (
        <Link to={`/bai-viet/${a.slug}`}>
          <img
            src={a.cover}
            alt={`${a.title} - mẹo công nghệ`}
            loading="lazy"
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
        <h3>
        <Link
          to={`/bai-viet/${a.slug}`}
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
          {a.title}
        </Link>
        </h3>

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
    </article>
  ))}
</div>
<div ref={loadMoreRef} style={{ height: "40px" }}></div> 
</div> 
);
}