"use client";
import Image from "next/image";
import React, { useState } from "react";

// Updated image paths to the public folder
const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState("olive");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) => (type === "increment" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-1xl mx-auto">
      {/* Left Section */}
      <div className="flex flex-col items-center gap-4 mr-1">
        {/* Additional Images */}
        <div className="flex flex-col gap-8 ml-28">
          <img
            src="/image 2.png" // Corrected path to the public folder
            alt="Color Olive"
            className={`w-16 h-16 object-cover rounded-md border ${selectedColor === "olive" ? "border-black" : "border-gray-300"}`}
            onClick={() => setSelectedColor("olive")}
          />
          <img
            src="/image 5.png" // Corrected path to the public folder
            alt="Color Green"
            className={`w-16 h-16 object-cover rounded-md border ${selectedColor === "green" ? "border-black" : "border-gray-300"}`}
            onClick={() => setSelectedColor("green")}
          />
          <img
            src="/image 6.png" // Corrected path to the public folder
            alt="Color Navy"
            className={`w-16 h-16 object-cover rounded-md border ${selectedColor === "navy" ? "border-black" : "border-gray-300"}`}
            onClick={() => setSelectedColor("navy")}
          />
        </div>
      </div>

      {/* Right Section (Main Image, Title, and Product Details) */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Main Image and Title */}
        <div className="flex items-start space-x-4">
          <Image
            src="/image1.png" // Corrected path to the public folder
            alt="One Life Graphic T-Shirt"
            className="w-64 h-64 object-cover"
            width={256}
            height={256}
          />
          <div className="flex flex-col space-y-4">
            <h1 className="text-2xl underline font-extrabold">ONE LIFE GRAPHIC T-SHIRT</h1>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-lg">★★★★☆</span>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-xl font-semibold text-green-600">$260</span>
              <span className="text-lg text-gray-400 line-through">$300</span>
              <span className="text-sm text-red-500">-40%</span>
            </div>
            <p className="text-gray-700 text-justify w-[88%]">
              This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold">Select Colors</h3>
              <div className="flex space-x-2 mt-2">
                <div
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === "olive" ? "border-black" : "border-gray-300"}`}
                  style={{ backgroundColor: "olive" }}
                  onClick={() => setSelectedColor("olive")}
                ></div>
                <div
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === "green" ? "border-black" : "border-gray-300"}`}
                  style={{ backgroundColor: "green" }}
                  onClick={() => setSelectedColor("green")}
                ></div>
                <div
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === "navy" ? "border-black" : "border-gray-300"}`}
                  style={{ backgroundColor: "navy" }}
                  onClick={() => setSelectedColor("navy")}
                ></div>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-semibold">Choose Size</h3>
              <div className="flex space-x-2 mt-2">
                {["Small", "Medium", "Large", "X-Large"].map((size) => (
                  <button key={size} className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 rounded-full"
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="px-4 py-2 bg-gray-200 rounded-full"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button className="w-[88%] py-2 p-4 mr-[10%] bg-black text-white rounded-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
