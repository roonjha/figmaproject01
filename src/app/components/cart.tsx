import React from 'react';

const Cart = () => {
  const cartItems = [
    {
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      image: "Frame 33.png",
    },
    {
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      image: "check.png",
    },
    {
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      image: "skinny.png",
    },
  ];

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="flex flex-col lg:flex-row justify-between p-6 bg-gray-50 min-h-screen">
      <div className="w-full lg:w-2/3 p-4">
        <h1 className="text-2xl font-bold mb-6">YOUR CART</h1>
        <div>
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 mb-4 bg-white rounded shadow-sm"
            >

              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
                <p className="text-sm text-gray-600">Color: {item.color}</p>
                <p className="text-lg font-bold mt-2">${item.price}</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-gray-200 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button className="p-2 bg-gray-200 rounded">+</button>
                </div>
                <button className="text-red-500">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/3 p-4">
        <div className="p-6 bg-white rounded shadow-sm">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount (-20%)</span>
            <span className="text-red-500">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-full p-2 border rounded mb-4"
            />
            <button className="w-full p-2 bg-black text-white rounded">Apply</button>
          </div>
          <button className="w-full p-2 mt-4 bg-black text-white rounded">Go to Checkout →</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
