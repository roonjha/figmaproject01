// 'use client';

// import { useEffect, useState } from "react";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState<any[]>([]);

//   // Load cart items from localStorage on mount
//   useEffect(() => {
//     const storedCart = localStorage.getItem("cartItems");
//     if (storedCart) {
//       const parsedCart = JSON.parse(storedCart);
//       console.log("Cart Items:", parsedCart); // Debugging
//       setCartItems(parsedCart);
//     }
//   }, []);

//   return (
//     <div>
//       <h2 className="text-4xl text-center font-bold mt-2 mb-6">Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item._id} className="flex justify-between p-2 border-b">
//               <div className="flex items-center">
//                 <img
//                   src={item.imageUrl || '/placeholder-image.jpg'}
//                   alt={item.name}
//                   className="w-24 h-24 object-cover mr-10"
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold">{item.name}</h3>
//                   <p className="text-gray-600">Price: ${item.price}</p>
//                   <p className="text-gray-600">Quantity: {item.quantity}</p>
//                   <p className="text-gray-600">
//                     Sizes: {item.sizes?.join(", ") || "N/A"}
//                   </p>
//                   <p className="text-gray-600">
//                     Colors: {item.colors?.join(", ") || "N/A"}
//                   </p>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;
