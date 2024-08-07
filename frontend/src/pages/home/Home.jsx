import React from "react";
import "./home.scss";
import BannerList from "../../components/bannerList/BannerList";
import ProductList from "../../components/productsList/ProductsList";
import Newsletter from "../../components/newsletter/Newsletter";
import Hero from "../../components/hero/Hero";
export default function Home() {
  return (
    <div>
      <Newsletter />
      <Hero />
      <ProductList />
      <BannerList />
    </div>
  );
}
