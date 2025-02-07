'use client';

import { useState, useEffect } from "react";
import { Product } from "@/sanity/lib/type";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { cartCountAtom } from "../cartatom/cartAtom";

interface NewArrivalsProps {
  products: Product[] | undefined;
}

const NewArrivals: React.FC<NewArrivalsProps> = ({ products }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const setCartCount = useSetAtom(cartCountAtom); // Use Jotai atom setter

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
      setCartCount(parsedCart.reduce((total: number, item: any) => total + item.quantity, 0)); // Update cart count
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0)); // Update cart count
  }, [cartItems]);

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

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-2 mb-6">New Arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
  {products?.length ? (
    products.map((product) => (
      <div key={product._id} className="border p-4 rounded shadow flex flex-col h-full">
        <Link href={`/product/${product._id}`} className="flex flex-col h-full">
          {/* Image */}
          <img
            src={product.imageUrl || '/placeholder-image.jpg'}
            alt={product.name}
            className="w-full h-auto object-center mb-2"
          />
          <h3 className="text-xl font-semibold mb-0">{product.name}</h3>
        </Link>

        {/* Price, Stars, Discount and Add to Cart Button */}
        <div className="flex justify-between items-center mt-2 flex-grow">
          <div className="flex flex-col justify-between">
            {/* Price */}
            <p className="text-gray-600 mb-0">Price: ${product.price}</p>

            {/* Discount */}
            {product.discount && (
              <p className="text-red-500 text-sm mb-0">-{product.discount}</p>
            )}
          </div>

          {/* Star Rating */}
          <p className="text-yellow-500 mb-0">⭐ {product.rating}</p>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-2 w-full py-2 bg-blue-500 text-white rounded-md"
        >
          Add to Cart
        </button>
      </div>
    ))
  ) : (
    <p>No products available</p>
  )}
</div>



    </div>
  );
};

export default NewArrivals;
