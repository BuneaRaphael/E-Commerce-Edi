import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import ProductPage from "./pages/product/ProductPage.jsx";
import CollectionsPage from "./pages/collections/CollectionsPage.jsx";
import ShopPage from "./pages/shop/ShopPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="collections/:id" element={<CollectionsPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
