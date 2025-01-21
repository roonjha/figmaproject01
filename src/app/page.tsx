'use client';

import React, { useState, useEffect } from "react";
import Component4brandsname from "./components/component4brandsname";
import UpperHeader from "./components/upperheader";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import NewArrivals from "./components/newarrival";
import Bestselling from "./components/bestselling";
import BrowseByStyle from "./components/browse";
import CustomerReviews from "./components/customerreview";
import Footer from "./components/footer";
import { fetchProducts } from "@/sanity/lib/fetch";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);  // Initially set to all products
    };

    loadProducts();
  }, []);

  // Handle search and filter products based on search query
  const handleSearch = (query: string) => {
    const filtered = products.filter((product: any) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some((tag: string) =>
        tag.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <UpperHeader />
      <Navbar onSearch={handleSearch} />
      <HeroSection />
      <Component4brandsname />
      <NewArrivals products={filteredProducts} />
      <Bestselling products={filteredProducts} />
      <BrowseByStyle />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

