'use client'
import { createClient } from "next-sanity";
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const client = createClient({
  projectId: "77aypzxg",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

async function getSearchResults(query: string) {
  if (!query) return [];

  const searchQuery = `*[_type == "products" && (lower(name) match "*${query.toLowerCase()}*" || lower(description) match "*${query.toLowerCase()}*")] {
    _id,
    name,
    price,
    description,
    "imageUrl": image.asset->url,
    category
  }`;

  try {
    return await client.fetch(searchQuery);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

async function getAllProducts() {
  const allProductsQuery = `*[_type == "products"] {
    _id,
    name,
    price,
    "imageUrl": image.asset->url
  }`;

  try {
    return await client.fetch(allProductsQuery);
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
}

export default function SearchPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("query") || "";

    if (!query) return;

    async function fetchProducts() {
      setIsLoading(true);
      const results = await getSearchResults(query);
      setProducts(results);
      setIsLoading(false);
    }

    async function fetchAllProducts() {
      const allResults = await getAllProducts();
      setAllProducts(allResults);
    }

    fetchProducts();
    fetchAllProducts();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-center">Search Results</h1>

        {isLoading ? (
          <div className="flex justify-center items-center w-full h-64">
            <div className="border-t-4 border-blue-500 border-solid rounded-full w-auto h-auto animate-spin"></div>
          </div>
        ) : products.length === 0 ? (
          <p className="text-gray-500 text-lg">No products found.</p>
        ) : (
          <div className="w-full flex justify-center overflow-hidden">
            <div ref={carouselRef} className="flex space-x-6 overflow-x-auto py-4">
              {products.map((product) => (
                <div key={product._id} className="min-w-[200px] border p-4 rounded-lg shadow-md">
                  <img
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    className="flex items-center justify-between ml-[30%] w-auto h-auto object-cover rounded-lg"
                  />
                  <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
                  <p className="text-gray-600">${product.price}</p>
                  <button className="mt-4 p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600">
                    Add to Cart
                  </button>
                </div>

                
              ))}
            </div>
          </div>
        )}

        {/* All Products Section */}
{allProducts.length > 0 && (
  <div className="mt-28 w-full relative">
    <h2 className="text-2xl font-extrabold mb-4 text-center">You May Also Like it</h2>

    <div className="grid xl:grid-cols-12 items-center">
      {/* Left Button for Carousel Scroll */}
      <button
        onClick={() => scrollCarousel("left")}
        className="text-blue-600 p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 col-span-1"
      >
        &lt;
      </button>

      {/* Carousel Content for All Products */}
      <div
        ref={carouselRef}
        className="col-span-10 flex space-x-6 pb-4"
        style={{ overflow: "hidden" }} // Hide the scroll bar
      >
        {allProducts.map((product) => (
          <div key={product._id} className="min-w-[200px] border p-4 rounded-lg shadow-md">
            <img
              src={product.imageUrl || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-52 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>

            <button className="flex items-center col-span-1 justify-center mt-4 p-2 bg-blue-500 text-white rounded-lg w-full hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Right Button for Carousel Scroll */}
      <button
        onClick={() => scrollCarousel("right")}
        className="text-blue-600 p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 col-span-1"
      >
        &gt;
      </button>
    </div>
  </div>
)}

      </div>

      <Footer />
    </>
  );
}
