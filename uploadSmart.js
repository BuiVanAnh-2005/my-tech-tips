// uploadSmart.js
// ✅ Tự động upload bài mới, bỏ qua bài đã có

import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import admin from "firebase-admin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === 🔐 Khởi tạo Firebase Admin ===

const serviceAccount = JSON.parse(fs.readFileSync("./serviceAccountKey.json", "utf8"));


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const postsRef = db.collection("posts");

// === 📂 Đường dẫn thư mục data ===
const dataDir = path.join(__dirname, "src", "data");

async function uploadNewPosts() {
  console.log("📂 Đang tìm các thư mục bài viết...");

  // Lấy danh sách thư mục con trong src/data/
  const categories = fs.readdirSync(dataDir).filter(dir =>
    fs.statSync(path.join(dataDir, dir)).isDirectory()
  );

  for (const category of categories) {
    const indexPath = path.join(dataDir, category, "index.js");
    if (!fs.existsSync(indexPath)) {
      console.warn(`⚠️ Không có index.js trong ${category}`);
      continue;
    }

    try {
      const mod = await import(pathToFileURL(indexPath).href);
      const posts = mod.default;

      if (!Array.isArray(posts) || posts.length === 0) {
        console.warn(`⚠️ Thư mục ${category} không có bài hợp lệ`);
        continue;
      }

      console.log(`\n📁 Đang xử lý ${posts.length} bài trong "${category}"...`);

      for (const post of posts) {
        if (!post.title || !post.slug) {
          console.warn(`⚠️ Bỏ qua bài thiếu title hoặc slug: ${post.id || "(không có id)"}`);
          continue;
        }

        // Kiểm tra xem bài đã có trong Firestore chưa (theo slug)
        const querySnapshot = await postsRef.where("slug", "==", post.slug).get();

        if (!querySnapshot.empty) {
          console.log(`⏭️ Đã có sẵn: ${post.title}`);
          continue;
        }

        // Upload bài mới
        await postsRef.add(post);
        console.log(`✅ Đã upload mới: ${post.title}`);
      }
    } catch (err) {
      console.error(`❌ Lỗi khi xử lý ${category}:`, err.message);
    }
  }

  console.log("\n🎉 Hoàn tất upload bài mới!");
}

uploadNewPosts();
