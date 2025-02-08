"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Component4brandsname from "./components/component4brandsname";
import UpperHeader from "./components/upperheader";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import Bestselling from "./components/bestselling";
import BrowseByStyle from "./components/browse";
import CustomerReviews from "./components/customerreview";
import Footer from "./components/footer";
import { fetchProducts } from "@/sanity/lib/fetch";
import { Product } from "@/sanity/lib/type";

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // ✅ Optimized Authentication Check
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/auth/login");
    }
  }, []);

  // ✅ Fetch Products After Authentication
  useEffect(() => {
    if (!isAuthenticated) return;

    const loadProducts = async () => {
      try {
        setLoading(true);
        const productsData = await fetchProducts();
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [isAuthenticated]);

  // ✅ Optimized Search Function
  const handleSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();
    setFilteredProducts(
      products.filter(
        (product) =>
          product.name.toLowerCase().includes(lowerQuery) ||
          product.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
      )
    );
  };

  // ✅ Improved UI for Loading & Errors
  if (isAuthenticated === null) return null;
  if (!isAuthenticated) return <div className="text-center text-gray-500">Redirecting to login...</div>;
  if (loading) return <div className="animate-pulse text-center text-gray-500">Loading products...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div>
      <UpperHeader />
      <Navbar onSearch={handleSearch} />
      <HeroSection />
      <Component4brandsname />
      <Bestselling products={filteredProducts} />
      <BrowseByStyle />
      <CustomerReviews />
      <Footer />
    </div>
  );
}
