import React from "react";
import Link from "next/link";

const Breadcrumb: React.FC = () => {
  return (
    <nav className="breadcrumb p-4">
      <ol className="flex items-center text-gray-600">
        <li className="flex items-center">
          <Link href="/" passHref>
            <div className="hover:underline cursor-pointer">Home</div>
          </Link>
          <span className="mx-2 text-gray-400">{'\u00A0>\u00A0'}</span>
        </li>
        <li className="flex items-center text-gray-800">
          <div>Casual</div>
        </li>
      </ol>
    </nav>
  );
};

const Pagination: React.FC = () => {
  return (
    <div className="flex justify-between items-center mt-6">
      <button className="flex items-center px-4 py-2 border rounded text-gray-500 hover:bg-gray-100">
        <span className="mr-2">←</span>
        Previous
      </button>
      <ul className="flex items-center space-x-2 text-gray-500">
        <li>
          <button className="w-8 h-8 flex items-center justify-center border rounded-full bg-gray-200 text-gray-800">
            1
          </button>
        </li>
        <li>
          <button className="w-8 h-8 flex items-center justify-center border rounded">
            2
          </button>
        </li>
        <li>
          <button className="w-8 h-8 flex items-center justify-center border rounded">
            3
          </button>
        </li>
        <li>...</li>
        <li>
          <button className="w-8 h-8 flex items-center justify-center border rounded">
            9
          </button>
        </li>
        <li>
          <button className="w-8 h-8 flex items-center justify-center border rounded">
            10
          </button>
        </li>
      </ul>
      <button className="flex items-center px-4 py-2 border rounded text-gray-500 hover:bg-gray-100">
        Next
        <span className="ml-2">→</span>
      </button>
    </div>
  );
};

const Casual: React.FC = () => {
  const products = [
    { id: 1, name: "Gradient Graphic T-shirt", price: 145, rating: 3.5, image: "/Frame 33.png", discount: null },
    { id: 2, name: "Polo with Tipping Details", price: 180, rating: 4.5, image: "/Frame 34.png", discount: null },
    { id: 3, name: "Black Striped T-shirt", price: 120, rating: 4.0, image: "/Frame 38.png", discount: "30%" },
    { id: 4, name: "Skinny Fit Jeans", price: 240, rating: 4.0, image: "/skinny.png", discount: "20%" },
    { id: 5, name: "Checkered Shirt", price: 180, rating: 4.5, image: "/check.png", discount: null },
    { id: 6, name: "Sleeve Striped T-shirt", price: 130, rating: 4.0, image: "/strip.png", discount: "30%" },
    { id: 7, name: "Vertical Striped Shirt", price: 212, rating: 5.0, image: "/Group 20.png", discount: "20%" },
    { id: 8, name: "Courage Graphic T-shirt", price: 145, rating: 4.0, image: "/orange.png", discount: null },
    { id: 9, name: "Loose Fit Bermuda Shorts", price: 80, rating: 4.5, image: "/short.png", discount: null },
  ];

  return (
    <div>
      <Breadcrumb />
      <div className="flex">
        <aside className="p-4 w-1/4 border-r">
          <h2 className="font-semibold text-lg mb-4">Filters</h2>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Categories</h3>
            <ul className="space-y-1">
              <li><input type="checkbox" id="tshirts" /><label htmlFor="tshirts" className="ml-2">T-shirts</label></li>
              <li><input type="checkbox" id="shorts" /><label htmlFor="shorts" className="ml-2">Shorts</label></li>
              <li><input type="checkbox" id="shirts" /><label htmlFor="shirts" className="ml-2">Shirts</label></li>
              <li><input type="checkbox" id="hoodies" /><label htmlFor="hoodies" className="ml-2">Hoodies</label></li>
              <li><input type="checkbox" id="jeans" /><label htmlFor="jeans" className="ml-2">Jeans</label></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price</h3>
            <input type="range" min="50" max="200" className="w-full" />
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Colors</h3>
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-medium mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              <button className="border px-4 py-1 rounded">Small</button>
              <button className="border px-4 py-1 rounded">Medium</button>
              <button className="border px-4 py-1 rounded">Large</button>
              <button className="border px-4 py-1 rounded">X-Large</button>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Dress Style</h3>
            <ul className="space-y-1">
              <li><input type="checkbox" id="casual" /><label htmlFor="casual" className="ml-2">Casual</label></li>
              <li><input type="checkbox" id="formal" /><label htmlFor="formal" className="ml-2">Formal</label></li>
              <li><input type="checkbox" id="party" /><label htmlFor="party" className="ml-2">Party</label></li>
              <li><input type="checkbox" id="gym" /><label htmlFor="gym" className="ml-2">Gym</label></li>
            </ul>
          </div>
          <button className="mt-6 bg-black text-white px-4 py-2 rounded">Apply Filter</button>
        </aside>
        <main className="p-4 w-3/4">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">Casual</h1>
            <p className="text-sm text-gray-500">Showing 1-10 of 100 Products</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {products.map(product => (
              <div key={product.id} className="border p-4 rounded">
                <img src={product.image} alt={product.name} className="mb-2 rounded" />
                <h2 className="font-medium text-lg">{product.name}</h2>
                <p className="text-gray-500">${product.price}</p>
                {product.discount && (  
                  <p className="text-red-500 text-sm">-{product.discount}</p>
                )}
                <p className="text-yellow-500">⭐ {product.rating}</p>
              </div>
            ))}
          </div>
          <Pagination />
        </main>
      </div>
    </div>
  );
};

export default Casual;
