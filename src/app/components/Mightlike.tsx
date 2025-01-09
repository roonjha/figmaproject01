import React from "react";

interface Product {
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  image: string;
  rating: number;
}

const products: Product[] = [
  {
    name: "Polo with Contrast Trims",
    price: 212,
    originalPrice: 242,
    discount: "-20%",
    image: "/Frame 32.png",
    rating: 4.0
  },
  {
    name: "Gradient Graphic T-shirt",
    price: 145,
    image: "/Frame 33.png",
    rating: 3.5
  },
  {
    name: "Polo with Tipping Details",
    price: 180,
    image: "/Frame 34.png",
    rating: 4.5
  },
  {
    name: "Black Striped T-shirt",
    price: 120,
    originalPrice: 150,
    discount: "-30%",
    image: "/Frame 38.png",
    rating: 5.0
  }
];

const ProductCard: React.FC<Product> = ({ name, price, originalPrice, discount, image, rating }) => {
  return (
    <div className="product-card border rounded-lg p-4 shadow-md text-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <div className="flex justify-center items-center mb-2">
        <span className="text-yellow-500 text-sm">{'★'.repeat(Math.floor(rating))}</span>
        <span className="text-gray-400 text-sm">{'☆'.repeat(5 - Math.floor(rating))}</span>
        <span className="ml-2 text-gray-600 text-sm">{rating}/5</span>
      </div>
      <div className="text-center">
        <span className="font-bold text-lg">${price}</span>
        {originalPrice && (
          <span className="text-gray-500 line-through ml-2">${originalPrice}</span>
        )}
        {discount && (
          <span className="text-red-500 ml-2 font-medium">{discount}</span>
        )}
      </div>
    </div>
  );
};

const YouMightAlsoLike: React.FC = () => {
  return (
    <div className="you-might-also-like max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default YouMightAlsoLike;
