import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import pool from "./db.js";

dotenv.config();
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

// ✅ Kiểm tra server hoạt động
app.get("/", (req, res) => {
  res.send("✅ Server PostgreSQL hoạt động!");
});

// ✅ API lấy danh sách bài viết
app.get("/api/articles", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM articles ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

// ✅ Xử lý lỗi toàn cục
app.use((err, req, res, next) => {
  console.error("❌ Lỗi server:", err.stack);
  res.status(500).json({ error: "Lỗi server nội bộ" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server chạy tại http://localhost:${PORT}`));
