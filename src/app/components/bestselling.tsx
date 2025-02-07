'use client';

import { useState } from "react";
import { Product } from "@/sanity/lib/type";
import { useRouter } from "next/navigation"; // For navigation in Next.js

interface BestsellingProps {
  products: Product[];
}

const Bestselling: React.FC<BestsellingProps> = ({ products }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const router = useRouter(); // Initialize the router for navigation

  // Add to cart functionality
  const addToCart = (product: any) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item._id === product._id);
      if (existingItem) {
        return prevItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Handle product click to navigate to product details page
  const handleProductClick = (productId: string) => {
    router.push(`/products/${productId}`); // Navigate to the product details page
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-2 mb-1">Best Selling Products List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded shadow flex flex-col justify-between cursor-pointer"
            onClick={() => handleProductClick(product._id)} // Make the entire product card clickable
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover mb-2"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">Price: ${product.price}</p>
            <p className={`text-gray-600 ${product.stockStatus === "outStock" ? "text-red-600" : "text-green-600"}`}>
              {product.stockStatus === "inStock" ? "In Stock" : "Out of Stock"}
            </p>

            <div className="flex justify-center mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click event from bubbling up to the parent div
                  addToCart(product);
                }}
                className={`w-full py-2 ${product.stockStatus === "inStock" ? "bg-blue-500" : "bg-gray-500"} text-white rounded-md`}
                disabled={product.stockStatus === "outStock"}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Display Cart Items */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold"></h3>
        <ul className="mt-4">
          {cartItems.map((item) => (
            <li key={item._id} className="flex justify-between p-2 border-b">
              <span>{item.name} x {item.quantity}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bestselling;