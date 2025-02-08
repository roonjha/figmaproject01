"use client";

import React, { useEffect, useState } from "react";
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
import { Product } from "@/sanity/lib/type"; // Assuming this type exists

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const authStatus = localStorage.getItem("isAuthenticated");
      if (authStatus === "true") {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        router.push("/auth/login");
      }
    }
  }, [router]); // ✅ Added `router` dependency

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const productsData: Product[] = await fetchProducts();
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (err) {
        setError(`Failed to fetch products: ${(err as Error).message}`);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      loadProducts();
    }
  }, [isAuthenticated]);

  const handleSearch = (query: string) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredProducts(filtered);
  };

  if (isAuthenticated === null) return <div>Checking authentication...</div>;
  if (!isAuthenticated) return <div>Redirecting to login...</div>;
  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

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
