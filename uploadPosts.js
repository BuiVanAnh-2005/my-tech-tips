// uploadPosts.js
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import admin from "firebase-admin";

// === 1. Định nghĩa đường dẫn hiện tại ===
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === 2. Nạp Service Account Key ===
const serviceAccount = JSON.parse(
  fs.readFileSync(path.join(__dirname, "serviceAccountKey.json"), "utf8")
);

// === 3. Khởi tạo Firebase Admin ===
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// === 4. Đường dẫn chứa dữ liệu ===
const dataDir = path.join(__dirname, "src", "data");

async function uploadPosts() {
  console.log("📂 Đang tìm các thư mục bài viết...");

  const categories = fs
    .readdirSync(dataDir)
    .filter((dir) => fs.statSync(path.join(dataDir, dir)).isDirectory());

  for (const category of categories) {
    const indexPath = path.join(dataDir, category, "index.js");

    if (!fs.existsSync(indexPath)) {
      console.warn(`⚠️ Không có index.js trong thư mục ${category}`);
      continue;
    }

    try {
      const mod = await import(pathToFileURL(indexPath).href);
      const posts = mod.default;

      if (!posts || !Array.isArray(posts) || posts.length === 0) {
        console.warn(`⚠️ Không có bài viết hợp lệ trong ${indexPath}`);
        continue;
      }

      console.log(`📁 Uploading ${posts.length} bài trong ${category}...`);

      for (const post of posts) {
        if (!post.title || !post.content) {
          console.warn(
            `⚠️ Bỏ qua bài thiếu title/content: ${post.id || "(không có id)"}`
          );
          continue;
        }

        await db.collection("posts").add(post);
        console.log(`✅ Đã upload: ${post.title}`);
      }
    } catch (err) {
      console.error(`❌ Lỗi khi xử lý ${category}:`, err.message);
    }
  }

  console.log("🎉 Done uploading all posts!");
}

uploadPosts();
