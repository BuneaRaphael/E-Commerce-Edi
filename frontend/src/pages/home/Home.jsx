import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./home.scss";
import BannerList from "../../components/bannerList/BannerList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductList from "../../components/productsList/ProductsList";
import Newsletter from "../../components/newsletter/Newsletter";
import Hero from "../../components/hero/Hero";
export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Header>
        <Newsletter />
        <Hero />
        <ProductList />
        <BannerList />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
