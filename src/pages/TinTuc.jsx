import { useMemo, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Helmet } from "react-helmet-async";

export default function TinTuc() {
  const [visibleCount, setVisibleCount] = useState(6);
  const loadMoreRef = useRef(null);

  // --- Hero news ---
  const heroNews = useMemo(() => {
    if (!news || news.length === 0) return null;
    return news.find((n) => n.featured) || news[0];
  }, []);

  // --- Other news ---
  const otherNews = useMemo(() => {
    if (!heroNews) return [];
    return news.filter((n) => n !== heroNews).slice(0, visibleCount);
  }, [heroNews, visibleCount]);

  // --- Infinite scroll ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 6);
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, []);

  if (!news || news.length === 0)
    return <p style={{ padding: "1rem" }}>Chưa có dữ liệu tin tức.</p>;

  return (
  <div
    style={{
      padding: "1.5rem",
      maxWidth: "1100px",
      margin: "0 auto",
      color: "#EAEAEA",
    }}
  >
    <Helmet>
      <title>Tin tức công nghệ | Thủ Thuật Công Nghệ</title>
      <meta
        name="description"
        content="Tin tức công nghệ mới nhất, cập nhật xu hướng, sản phẩm và sự kiện nổi bật."
      />
    </Helmet>

    {/* Tiêu đề trang */}
    <h1 style={{ marginTop: 0, fontSize: "2rem", fontWeight: 700 }}>
      Tin tức công nghệ mới nhất
    </h1>
    <p style={{ color: "#AAA", marginBottom: "1.5rem" }}>
      Cập nhật nhanh xu hướng, sản phẩm và sự kiện nổi bật trong thế giới công nghệ.
    </p>

    {/* Hero section */}
    {heroNews && (
      <div
        style={{
          background: "#1a1a1a",
          borderRadius: "12px",
          overflow: "hidden",
          marginBottom: "2.5rem",
          transition: "transform 0.25s ease",
        }}
      >
        <Link
          to={`/tin-tuc/${heroNews.slug}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // 16:9
              borderRadius: "10px",
            }}
          >
            <img
              src={heroNews.cover}
              alt={heroNews.title}
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

          <div style={{ padding: "1.5rem" }}>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
              }}
            >
              {heroNews.title}
            </h2>
            <p
              style={{
                color: "#CCC",
                fontSize: "1rem",
                lineHeight: 1.6,
                marginBottom: "0.5rem",
              }}
            >
              {heroNews.excerpt}
            </p>
            <p style={{ color: "#888", fontSize: "0.9rem" }}>
              {heroNews.date} — {heroNews.category}
            </p>
          </div>
        </Link>
      </div>
    )}

    {/* Danh sách tin kiểu ảnh trái - chữ phải */}
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      {otherNews.map((n) => (
        <div
          key={n.id}
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "flex-start",
            borderBottom: "1px solid #2c2c2c",
            paddingBottom: "18px",
          }}
        >
          <Link
            to={`/tin-tuc/${n.slug}`}
            style={{
              flexShrink: 0,
              width: "160px",
              height: "100px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <img
              src={n.cover}
              alt={n.title}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "none")
              }
            />
          </Link>

          <div style={{ flex: 1 }}>
            <Link
              to={`/tin-tuc/${n.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#FFF",
                  margin: "0 0 6px 0",
                  lineHeight: 1.4,
                }}
              >
                {n.title}
              </h3>
            </Link>

            <p
              style={{
                color: "#BBB",
                fontSize: "0.9rem",
                lineHeight: 1.6,
                margin: "0 0 6px 0",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {n.excerpt}
            </p>

            <p style={{ color: "#888", fontSize: "0.8rem" }}>
              {n.date} — {n.category}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* Load more trigger */}
    <div ref={loadMoreRef} style={{ height: "40px" }}></div>
  </div>
);
}
