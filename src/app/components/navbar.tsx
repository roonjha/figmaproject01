import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-3">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          SHOP.CO
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-700 hover:text-gray-900">
            Shop
          </Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900">
            On Sale
          </Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900">
            New Arrivals
          </Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900">
            Brands
          </Link>
          <Link href="/productpage" className="text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link href="/category" className="text-gray-700 hover:text-gray-900">
            Category
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex items-center border rounded-lg overflow-hidden w-full max-w-md">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full px-4 py-2 text-gray-700 focus:outline-none"
          />
          <button className="bg-blue-500 text-white px-4 py-2">
            Search
          </button>
        </div>

        {/* Icons */}
        <Link href="/cart" className="text-gray-700 hover:text-gray-900">
          <div className="flex items-center space-x-4">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-red-700 hover:text-gray-900"
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
              <span className="sr-only">Cart</span>
            </button>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700 hover:text-gray-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25a3.75 3.75 0 00-7.5 0V9m-3 0a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3m-12 0V5.25a6 6 0 0112 0V9"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
