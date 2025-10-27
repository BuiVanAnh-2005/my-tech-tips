import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ChinhSachBaoMat() {
  return (
    <div style={{ padding: "2rem 1rem", maxWidth: "900px", margin: "0 auto", lineHeight: 1.7, fontFamily: "Arial, sans-serif" }}>
      <Helmet>
        <title>Chính Sách Bảo Mật & Cookie - Thủ Thuật Công Nghệ</title>
        <meta
          name="description"
          content="Chính sách bảo mật và cookie tại Thủ Thuật Công Nghệ: hướng dẫn cách thu thập, sử dụng và bảo vệ dữ liệu cá nhân, tuân thủ GDPR & CCPA, kèm FAQ và minh họa trực quan."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Chính Sách Bảo Mật & Cookie",
            "url": window.location.href,
            "description": "Trang chính sách bảo mật & cookie của Thủ Thuật Công Nghệ, giải thích cách chúng tôi bảo vệ dữ liệu cá nhân, minh họa và FAQ trực quan.",
            "publisher": {
              "@type": "Organization",
              "name": "Thủ Thuật Công Nghệ",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yourwebsite.com/logo.png"
              }
            },
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Cookie là gì?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cookie là các tệp nhỏ lưu trên trình duyệt giúp cải thiện trải nghiệm người dùng và phân tích hoạt động website."
                }
              },
              {
                "@type": "Question",
                "name": "Tôi có thể xóa dữ liệu cá nhân không?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa dữ liệu cá nhân theo GDPR & CCPA."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <h1>Chính Sách Bảo Mật & Cookie</h1>

      <img
        src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200"
        alt="Bảo mật dữ liệu Thủ Thuật Công Nghệ"
        style={{ width: "100%", height: "auto", borderRadius: "12px", margin: "1rem 0" }}
      />

      <p>
        Tại <strong>Thủ Thuật Công Nghệ</strong>, chúng tôi cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của người dùng. Trang này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ, bảo vệ và chia sẻ thông tin, tuân thủ các quy định GDPR và CCPA.
      </p>

      <h2 id="thong-tin-thu-thap">1. Thông tin chúng tôi thu thập</h2>
      <ul>
        <li>Thông tin bạn cung cấp khi đăng ký nhận tin, bình luận hoặc liên hệ.</li>
        <li>Dữ liệu tự động: cookie, địa chỉ IP, trình duyệt, thiết bị, thời gian truy cập.</li>
        <li>Dữ liệu phân tích để cải thiện trải nghiệm và hiệu suất website.</li>
      </ul>

      <h2 id="su-dung-thong-tin">2. Cách chúng tôi sử dụng thông tin</h2>
      <ul>
        <li>Cung cấp nội dung và dịch vụ phù hợp.</li>
        <li>Nâng cao trải nghiệm website, cải thiện tốc độ và tính năng.</li>
        <li>Liên lạc với người dùng về thông báo quan trọng.</li>
        <li>Tuân thủ pháp luật và bảo vệ quyền lợi hợp pháp.</li>
      </ul>

      <h2 id="bao-mat-thong-tin">3. Bảo mật thông tin</h2>
      <p>
        Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý nghiêm ngặt để bảo vệ dữ liệu. Thông tin nhạy cảm như email và mật khẩu được <strong>mã hóa</strong> và không hiển thị công khai. Hệ thống được cập nhật liên tục để ngăn truy cập trái phép.
      </p>

      <h2 id="chia-se-thong-tin">4. Chia sẻ thông tin</h2>
      <p>
        Chúng tôi <strong>không bán hoặc cho thuê</strong> thông tin cá nhân. Dữ liệu chỉ được chia sẻ khi:
      </p>
      <ul>
        <li>Pháp luật yêu cầu.</li>
        <li>Cung cấp dịch vụ bạn đã đồng ý (ví dụ: lưu trữ dữ liệu, phân tích website).</li>
      </ul>

      <h2 id="cookie">5. Cookie & công nghệ theo dõi</h2>
      <p>
        Website sử dụng cookie để:
      </p>
      <ul>
        <li>Phân tích hiệu suất và hành vi người dùng.</li>
        <li>Cải thiện trải nghiệm truy cập.</li>
        <li>Hiển thị quảng cáo phù hợp (nếu có).</li>
      </ul>
      <p>
        Bạn có thể <strong>tắt cookie</strong> trong trình duyệt, nhưng một số tính năng sẽ bị hạn chế. Xem chi tiết: <Link to="/chinh-sach-cookie">Trang Hướng Dẫn Cookie</Link>.
      </p>

      <h2 id="quyen-cua-ban">6. Quyền của bạn</h2>
      <p>Theo GDPR & CCPA, bạn có quyền:</p>
      <ul>
        <li>Xem, chỉnh sửa hoặc yêu cầu xóa dữ liệu cá nhân.</li>
        <li>Từ chối nhận email quảng cáo.</li>
        <li>Yêu cầu thông tin về dữ liệu mà chúng tôi lưu trữ.</li>
        <li>Liên hệ chúng tôi để khiếu nại hoặc giải quyết vấn đề quyền riêng tư.</li>
      </ul>

      <h2 id="faq">7. FAQ - Câu hỏi thường gặp</h2>
      <div style={{ overflowX: "auto", marginTop: "1rem" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "500px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f3f4f6" }}>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>Câu hỏi</th>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>Trả lời</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>Cookie là gì?</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>Tệp nhỏ lưu trên trình duyệt giúp cải thiện trải nghiệm người dùng và phân tích website.</td>
            </tr>
            <tr>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>Tôi có thể xóa dữ liệu cá nhân không?</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa dữ liệu cá nhân theo GDPR & CCPA.</td>
            </tr>
            <tr>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>Tôi có thể từ chối cookie không?</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>Bạn có thể thay đổi cài đặt cookie trên trình duyệt hoặc công cụ bảo mật của bên thứ ba.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="lien-he">8. Liên hệ</h2>
      <ul>
        <li><Link to="/lien-he">Form liên hệ</Link> – để yêu cầu hỗ trợ về dữ liệu và cookie.</li>
        <li>Phản hồi nhanh nhất trong vòng 48 giờ làm việc.</li>
      </ul>

      <p style={{ marginTop: "1rem" }}><strong>Ngày hiệu lực:</strong> 26/10/2025</p>
    </div>
  );
}
