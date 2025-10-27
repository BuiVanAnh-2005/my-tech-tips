import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ChinhSachCookie() {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto", lineHeight: "1.7" }}>
      <Helmet>
        <title>Hướng Dẫn Cookie - Thủ Thuật Công Nghệ</title>
        <meta
          name="description"
          content="Hướng dẫn cookie trên Thủ Thuật Công Nghệ: giải thích cookie là gì, mục đích sử dụng, cách quản lý cookie, tuân thủ GDPR và CCPA."
        />
        {/* Structured data chuẩn Google: WebPage + FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Hướng Dẫn Cookie",
            "url": window.location.href,
            "description": "Trang hướng dẫn cookie của Thủ Thuật Công Nghệ, giải thích mục đích và cách quản lý cookie, tuân thủ GDPR và CCPA.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Trang chủ",
                  "item": "https://yourdomain.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Hướng Dẫn Cookie",
                  "item": window.location.href
                }
              ]
            },
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Cookie là gì?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cookie là các tệp nhỏ lưu trên trình duyệt, giúp website ghi nhớ thông tin, cải thiện trải nghiệm và phân tích hành vi người dùng."
                }
              },
              {
                "@type": "Question",
                "name": "Làm sao để tắt hoặc quản lý cookie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bạn có thể thay đổi cài đặt cookie trong trình duyệt Chrome, Firefox, Edge hoặc Safari. Một số cookie cũng có thể quản lý qua công cụ của bên thứ ba."
                }
              },
              {
                "@type": "Question",
                "name": "Tại sao cookie quan trọng?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cookie giúp website hoạt động ổn định, ghi nhớ lựa chọn, phân tích dữ liệu và hiển thị nội dung phù hợp."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <h1>Hướng Dẫn Cookie</h1>

      <img
        src="https://cdn-icons-png.flaticon.com/512/3077/3077473.png"
        alt="Cookie Icon"
        style={{ width: "120px", display: "block", margin: "1rem auto" }}
      />

      <p>
        Cookie là các tệp nhỏ được lưu trên trình duyệt khi bạn truy cập website. Chúng giúp website ghi nhớ thông tin, cải thiện trải nghiệm, và phân tích hiệu suất. Việc sử dụng cookie trên <strong>Thủ Thuật Công Nghệ</strong> tuân thủ các quy định quốc tế như GDPR và CCPA.
      </p>

      <h2>1. Các loại cookie mà chúng tôi sử dụng</h2>
      <ul>
        <li><strong>Cookie cần thiết:</strong> đảm bảo website hoạt động ổn định, như đăng nhập, bảo mật tài khoản.</li>
        <li><strong>Cookie phân tích:</strong> thu thập dữ liệu truy cập, giúp chúng tôi hiểu hành vi người dùng và cải thiện website.</li>
        <li><strong>Cookie quảng cáo:</strong> hiển thị quảng cáo phù hợp với sở thích người dùng.</li>
      </ul>

      <img
        src="https://cdn-icons-png.flaticon.com/512/2910/2910767.png"
        alt="Cookie Types"
        style={{ width: "100%", margin: "1rem 0", borderRadius: "8px" }}
      />

      <h2>2. Mục đích sử dụng cookie</h2>
      <ul>
        <li>Cải thiện trải nghiệm người dùng: ghi nhớ lựa chọn, ngôn ngữ, đăng nhập.</li>
        <li>Phân tích lưu lượng truy cập và hành vi người dùng để tối ưu website.</li>
        <li>Tùy chỉnh nội dung và quảng cáo theo sở thích người dùng.</li>
      </ul>

      <h2>3. Hướng dẫn quản lý và tắt cookie</h2>
      <p>
        Bạn có thể kiểm soát cookie qua trình duyệt hoặc công cụ bên thứ ba. Lưu ý: tắt cookie có thể khiến một số tính năng không hoạt động.
      </p>

      <h3>3.1. Trình duyệt Chrome</h3>
      <ol>
        <li>Chọn biểu tượng ba chấm → Cài đặt → Quyền riêng tư và bảo mật → Cookie và dữ liệu trang web.</li>
        <li>Bật hoặc tắt cookie theo nhu cầu.</li>
      </ol>

      <h3>3.2. Trình duyệt Firefox</h3>
      <ol>
        <li>Menu → Cài đặt → Quyền riêng tư & bảo mật → Cookie và dữ liệu trang web.</li>
      </ol>

      <h3>3.3. Trình duyệt Edge</h3>
      <ol>
        <li>Cài đặt → Cookie và quyền trang web → Chọn cách quản lý cookie.</li>
      </ol>

      <h3>3.4. Trình duyệt Safari</h3>
      <ol>
        <li>Cài đặt → Safari → Quyền riêng tư → Cookie và dữ liệu trang web.</li>
      </ol>

      <h2>4. Quyền của bạn theo GDPR & CCPA</h2>
      <ul>
        <li>Biết cookie nào được sử dụng và mục đích của chúng.</li>
        <li>Từ chối hoặc xóa cookie bất kỳ lúc nào.</li>
        <li>Yêu cầu xóa dữ liệu thu thập từ cookie.</li>
        <li>Liên hệ chúng tôi để giải quyết các vấn đề liên quan cookie.</li>
      </ul>

      <h2>5. FAQ về Cookie</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", margin: "1rem 0" }}>
        <thead>
          <tr style={{ backgroundColor: "#f3f4f6" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Câu hỏi</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Trả lời</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Cookie là gì?</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Các tệp nhỏ lưu trên trình duyệt, giúp website ghi nhớ thông tin.</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Tại sao cookie quan trọng?</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Giúp website hoạt động ổn định, phân tích dữ liệu, hiển thị nội dung phù hợp.</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Làm sao để tắt cookie?</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Thay đổi cài đặt cookie trong trình duyệt hoặc qua công cụ bên thứ ba.</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Liên kết nội bộ liên quan</h2>
      <ul>
        <li>
          <Link to="/chinh-sach-bao-mat">Chính Sách Bảo Mật</Link> – thông tin về dữ liệu cá nhân.
        </li>
        <li>
          <Link to="/lien-he">Liên Hệ</Link> – để yêu cầu hỗ trợ về cookie.
        </li>
      </ul>

      <p><strong>Ngày hiệu lực:</strong> 26/10/2025</p>
    </div>
  );
}
