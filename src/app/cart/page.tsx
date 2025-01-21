"use client";

import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';

const Page = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());

  // Load cart items from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Update cart items in localStorage
  const updateLocalStorage = (items: any[]) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  // Handle quantity change
  const handleQuantityChange = (id: string, delta: number) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  // Handle delete item
  const handleDelete = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  // Handle description toggle
  const toggleDescription = (id: string) => {
    const updatedExpanded = new Set(expandedDescriptions);
    if (expandedDescriptions.has(id)) {
      updatedExpanded.delete(id);
    } else {
      updatedExpanded.add(id);
    }
    setExpandedDescriptions(updatedExpanded);
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      <div className="p-6">
        <h2 className="text-4xl text-center font-bold mt-2 mb-6">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-6">
              {cartItems.map((item: any) => (
                <li key={item._id} className="p-4 border-b">
                  {/* Product Image */}
                  <div className="flex justify-center items-center mb-4">
                    <img
                      src={item.imageUrl || '/placeholder-image.jpg'}
                      alt={item.name}
                      className="w-48 h-48 object-cover rounded-md"
                    />
                  </div>
                  {/* Product Information */}
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">
                      Description:{' '}
                      {expandedDescriptions.has(item._id) ? (
                        <>
                          {item.description || 'No description available'}
                          <button
                            onClick={() => toggleDescription(item._id)}
                            className="text-blue-500 ml-2"
                          >
                            Show Less
                          </button>
                        </>
                      ) : (
                        <>
                          {item.description?.slice(0, 50) || 'No description available'}
                          {item.description?.length > 50 && (
                            <button
                              onClick={() => toggleDescription(item._id)}
                              className="text-blue-500 ml-2"
                            >
                              See More
                            </button>
                          )}
                        </>
                      )}
                    </p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  {/* Buttons */}
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item._id, -1)}
                        className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      >
                        -
                      </button>
                      <button
                        onClick={() => handleQuantityChange(item._id, 1)}
                        className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <p className="text-gray-800 font-semibold">
                      Total: ${item.price * item.quantity}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
