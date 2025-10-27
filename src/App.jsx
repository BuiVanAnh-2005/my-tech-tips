import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
 
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import GioiThieu from "./pages/GioiThieu";
import LienHe from "./pages/LienHe";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navigation/Navbar.jsx";
import "./styles/mobile.css";
import "./styles/desktop.css"
import { HelmetProvider } from "react-helmet-async"; 
import TinTuc from "./pages/TinTuc";
import TinTucDetail from "./pages/TinTucDetail";
import SearchPage from "./pages/SearchPage";
import SearchResults from "./pages/SearchResults";
import ChinhSachBaoMat from "./pages/ChinhSachBaoMat";
import ChinhSachCookie from "./pages/ChinhSachCookie";
import ScrollToTop from "./components/ScrollToTop";




 
 
function App() {
  
  return (
    <HelmetProvider>
    <div className="app-shell">
      <Navbar />
      <main className="container">
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bai-viet" element={<Articles />} />
          <Route path="/bai-viet/:slug" element={<ArticleDetail />} />
          <Route path="/gioi-thieu" element={<GioiThieu />} />
          <Route path="/lien-he" element={<LienHe />} />
          <Route path="/chuyen-muc/:categorySlug" element={<CategoryPage />} />

          <Route path="/tin-tuc" element={<TinTuc />} />
          <Route path="/tin-tuc/:slug" element={<TinTucDetail />} />
          <Route path="/tim-kiem" element={<SearchPage />} />
          <Route path="/tim-kiem-ket-qua" element={<SearchResults />} /> {/* ✅ THÊM DÒNG NÀY */}
          <Route path="/chinh-sach-bao-mat" element={<ChinhSachBaoMat />} />
           <Route path="/chinh-sach-cookie" element={<ChinhSachCookie />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </HelmetProvider>
  );
}

export default App;
