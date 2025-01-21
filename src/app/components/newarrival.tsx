'use client';

import { useState, useEffect } from "react";
import { Product } from "@/sanity/lib/type";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import useRouter for routing

interface NewArrivalsProps {
  products: Product[] | undefined;
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ products }) => {
  // Safe check to ensure 'products' exists
  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }

  const [cartItems, setCartItems] = useState<any[]>([]);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null); // Track expanded product

  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart items to localStorage whenever cartItems change
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

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

  const router = useRouter();

  const goToCart = () => {
    router.push("/cart"); // Redirect to the cart page
  };

  // Toggle expanded product view
  const toggleExpandedProduct = (productId: string) => {
    setExpandedProduct((prev) => (prev === productId ? null : productId));
  };

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-2 mb-6">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow flex flex-col justify-between h-full">
            <Link href={`/product/${product._id}`}>
              <img
                src={product.imageUrl || '/placeholder-image.jpg'}
                alt={product.name}
                className="w-full h-auto object-center mb-2"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
            </Link>
            <p className="text-gray-600">Price: ${product.price}</p>

            {/* Show "See More" button */}
            <button
              onClick={() => toggleExpandedProduct(product._id)}
              className="text-blue-500 mt-2"
            >
              {expandedProduct === product._id ? 'See Less' : 'See More'}
            </button>

            {/* Conditionally render additional product information */}
            {expandedProduct === product._id && (
              <div className="mt-2">
                <p className="text-gray-600">
                  Discount: {product.discountPercent || "N/A"}
                </p>
                <p className="text-gray-600">
                  Sizes: {product.sizes?.join(", ") || "N/A"}
                </p>
                <p className="text-gray-600">
                  Colors: {product.colors?.join(", ") || "N/A"}
                </p>
                <p className="text-gray-600">New: {product.new ? "Yes" : "No"}</p>
              </div>
            )}

            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold">Cart</h3>
        <ul className="mt-4">
          {cartItems.map((item) => (
            <li key={item._id} className="flex justify-between p-2 border-b">
              <span>{item.name} x {item.quantity}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={goToCart}
          className="mt-4 py-2 bg-green-500 text-white rounded-md"
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
