"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { cartCountAtom } from "../cartatom/cartAtom";
import { createClient } from "next-sanity";
import debounce from "lodash/debounce";

const client = createClient({
  projectId: "77aypzxg",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl?: string;
}

const Navbar: React.FC = () => {
  const [cartCount] = useAtom(cartCountAtom);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query.trim() === "") {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const results = await client.fetch<Product[]>(`
          *[_type == "products" && name match "${query}*"] {
            _id,
            name,
            price,
            "imageUrl": image.asset->url
          }[0...5]
        `);
        setSuggestions(results);
      } catch (err) {
        console.error("Error fetching suggestions:", err);
        setError("Failed to fetch suggestions. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }, 300),
    [setSuggestions, setIsLoading, setError] // Added missing dependencies
  );

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="bg-white shadow-md py-3 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">SHOP.CO</div>

          {/* Centered Search Bar */}
          <div className="relative">
            <form onSubmit={handleSearch} className="flex w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 text-gray-700 border rounded-l-lg focus:outline-none focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                Search
              </button>
            </form>
            {(isLoading || suggestions.length > 0 || error) && (
              <div className="absolute top-full left-0 w-full max-w-md mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {isLoading && <div className="p-2 text-center text-gray-500">Loading...</div>}
                {error && <div className="p-2 text-center text-red-500">{error}</div>}
                {suggestions.length > 0 && (
                  <ul>
                    {suggestions.map((product) => (
                      <li key={product._id} className="p-2 hover:bg-gray-100 cursor-pointer">
                        <Link href={`/search?query=${encodeURIComponent(product.name)}`} className="flex items-center">
                          {product.imageUrl && (
                            <img
                              src={product.imageUrl ?? "/placeholder.svg"} // Ensure imageUrl is defined
                              alt={product.name}
                              className="w-10 h-10 object-cover mr-2"
                            />
                          )}
                          <div>
                            <div className="font-semibold">{product.name}</div>
                            <div className="text-sm text-gray-600">${product.price.toFixed(2)}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Right-aligned buttons and cart */}
          <div className="flex justify-end items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <Link href="/" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Home
              </Link>
              <Link
                href="/newarrivals"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-red-500 focus:text-red-500 transition-colors duration-300 blinking-button"
              >
                New Arrivals
              </Link>
              <Link href="/category" className="bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Category
              </Link>
            </div>
            <Link href="/cart" className="text-gray-700 hover:text-gray-900">
              <div className="flex items-center space-x-2">
                <span>Cart</span>
                <span className="text-red-700">{cartCount}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h18l-2.343 14.059A2.25 2.25 0 0116.432 19.5H7.568a2.25 2.25 0 01-2.225-2.441L3 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 22.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
