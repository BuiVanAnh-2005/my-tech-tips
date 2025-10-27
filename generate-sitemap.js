import fs from "fs";
import path from "path";
import articles from "./src/data/articles.js"; // ✅ đường dẫn tới file bài viết

// ⚙️ Cấu hình domain website của bạn
const SITE_URL = "https://techtips.icu"; // ← sửa lại nếu tên miền khác

// 🧩 Danh sách các trang tĩnh
const staticPages = [
  "",
  "bai-viet",
  "tin-tuc",
  "tim-kiem",
];

// 🧠 Hàm tạo URL XML
function generateUrl(loc, lastmod = new Date().toISOString()) {
  return `
  <url>
    <loc>${SITE_URL}/${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${loc === "" ? "1.0" : "0.8"}</priority>
  </url>`;
}

// 📝 Gộp tất cả URL
const urls = [
  ...staticPages.map((page) => generateUrl(page)),
  ...articles.map((a) => generateUrl(`bai-viet/${a.slug}`, a.date || new Date().toISOString())),
];

// 📦 Nội dung sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

// 📁 Xuất ra thư mục public
const outputPath = path.join("public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap, "utf8");

console.log("✅ Sitemap đã được tạo tại:", outputPath);
