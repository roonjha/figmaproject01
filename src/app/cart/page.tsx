"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
  description?: string;
}

interface CustomerInfo {
  name: string;
  email: string;
  address: string;
}

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set());
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    email: "",
    address: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) setCartItems(JSON.parse(storedCart));
  }, []);

  const updateLocalStorage = (items: CartItem[]) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const handleQuantityChange = (id: string, delta: number) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      );
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const handleDelete = (id: string) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.filter((item) => item._id !== id);
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const toggleDescription = (id: string) => {
    setExpandedDescriptions((prev) => {
      const updated = new Set(prev);
      updated.has(id) ? updated.delete(id) : updated.add(id);
      return updated;
    });
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const validateForm = () => Object.values(customerInfo).every((val) => val.trim() !== "");

  const handlePlaceOrder = () => {
    if (validateForm()) {
      setShowConfirmation(true);
      setCartItems([]);
      updateLocalStorage([]);
      setIsCheckingOut(false);
      setCustomerInfo({ name: "", email: "", address: "" });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-4xl text-center font-bold mt-2 mb-6">
          {isCheckingOut ? "Checkout" : "Your Cart"}
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-6">
              {cartItems.map((item) => (
                <li key={item._id} className="p-4 border-b">
                  <div className="flex justify-center items-center mb-4">
                    <img
                      src={item.imageUrl || "/placeholder-image.jpg"}
                      alt={item.name}
                      className="w-48 h-48 object-cover rounded-md"
                    />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">
                      Description: {expandedDescriptions.has(item._id) ? item.description : item.description?.slice(0, 50)}
                      {item.description && item.description.length > 50 && (
                        <button
                          onClick={() => toggleDescription(item._id)}
                          className="text-blue-500 ml-2"
                        >
                          {expandedDescriptions.has(item._id) ? "Show Less" : "See More"}
                        </button>
                      )}
                    </p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center space-x-2">
                      <button onClick={() => handleQuantityChange(item._id, -1)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                      <button onClick={() => handleQuantityChange(item._id, 1)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                    </div>
                    <button onClick={() => handleDelete(item._id)} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <p className="text-xl font-bold mb-4">Total: ${totalPrice.toFixed(2)}</p>
              {isCheckingOut ? (
                <div>
                  <input type="text" name="name" value={customerInfo.name} onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} placeholder="Full Name" className="w-[40%] p-2 border rounded" />
                  <input type="email" name="email" value={customerInfo.email} onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })} placeholder="Email" className="w-[40%] p-2 border rounded" />
                  <input type="text" name="address" value={customerInfo.address} onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })} placeholder="Shipping Address" className="w-[40%] p-2 border rounded" />
                  <button onClick={handlePlaceOrder} className="px-4 py-2 bg-green-500 text-white rounded">Place Order</button>
                </div>
              ) : (
                <button onClick={() => setIsCheckingOut(true)} className="px-4 py-2 bg-blue-500 text-white rounded">Proceed to Checkout</button>
              )}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
