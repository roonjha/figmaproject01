"use client"

import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

interface CartItem {
  _id: string
  name: string
  price: number
  quantity: number
  imageUrl?: string
  description?: string
}

interface CustomerInfo {
  name: string
  email: string
  address: string
}

const Page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<string>>(new Set())
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card")
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({ name: "", email: "", address: "" })
  const [showConfirmation, setShowConfirmation] = useState(false)

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems")
    if (storedCart) {
      setCartItems(JSON.parse(storedCart))
    }
  }, [])

  const updateLocalStorage = (items: CartItem[]) => {
    localStorage.setItem("cartItems", JSON.stringify(items))
  }

  const handleQuantityChange = (id: string, delta: number) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item,
    )
    setCartItems(updatedCart)
    updateLocalStorage(updatedCart)
  }

  const handleDelete = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id)
    setCartItems(updatedCart)
    updateLocalStorage(updatedCart)
  }

  const toggleDescription = (id: string) => {
    const updatedExpanded = new Set(expandedDescriptions)
    if (expandedDescriptions.has(id)) {
      updatedExpanded.delete(id)
    } else {
      updatedExpanded.add(id)
    }
    setExpandedDescriptions(updatedExpanded)
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleProceedToCheckout = () => {
    setIsCheckingOut(true)
  }

  const handleCustomerInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCustomerInfo((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    return customerInfo.name && customerInfo.email && customerInfo.address
  }

  const handlePlaceOrder = () => {
    if (validateForm()) {
      console.log("Placing order with payment method:", paymentMethod)
      console.log("Customer info:", customerInfo)
      console.log("Cart items:", cartItems)
      setShowConfirmation(true)
    } else {
      alert("Please fill in all required fields.")
    }
  }

  const handleConfirmationClose = () => {
    setShowConfirmation(false)
    setCartItems([])
    updateLocalStorage([])
    setIsCheckingOut(false)
    setCustomerInfo({ name: "", email: "", address: "" })
  }

  return (
    <div>
      <Navbar
        onSearch={(query: string): void => {
          throw new Error("Function not implemented.")
        }}
      />

      <div className="p-6">
        <h2 className="text-4xl text-center font-bold mt-2 mb-6">{isCheckingOut ? "Checkout" : "Your Cart"}</h2>
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
                      Description:{" "}
                      {expandedDescriptions.has(item._id) ? (
                        <>
                          {item.description || "No description available"}
                          <button onClick={() => toggleDescription(item._id)} className="text-blue-500 ml-2">
                            Show Less
                          </button>
                        </>
                      ) : (
                        <>
                          {item.description?.slice(0, 50) || "No description available"}
                          {item.description?.length > 50 && (
                            <button onClick={() => toggleDescription(item._id)} className="text-blue-500 ml-2">
                              See More
                            </button>
                          )}
                        </>
                      )}
                    </p>
                    <p className="text-gray-600">Price: ${item.price}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
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
                  </div>
                  <p className="text-gray-800 font-semibold text-center mt-2">Total: ${item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <p className="text-xl font-bold mb-4">Total: ${totalPrice.toFixed(2)}</p>
              {isCheckingOut ? (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Customer Information</h3>
                  <div className="space-y-2 mb-4">
                    <input
                      type="text"
                      name="name"
                      value={customerInfo.name}
                      onChange={handleCustomerInfoChange}
                      placeholder="Full Name"
                      className="w-[40%] p-2 border rounded"
                      required
                    />
                    <br/>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleCustomerInfoChange}
                      placeholder="Email"
                      className="w-[40%] p-2 border rounded"
                      required
                    />
                    <br/>
                    <input
                      type="text"
                      name="address"
                      value={customerInfo.address}
                      onChange={handleCustomerInfoChange}
                      placeholder="Shipping Address"
                      className="w-[40%] p-2 border rounded"
                      required
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
                  <div className="flex justify-center space-x-4 mb-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="mr-2"
                      />
                      Card
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="mr-2"
                      />
                      Cash on Delivery
                    </label>
                  </div>
                  <button
                    onClick={handlePlaceOrder}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Place Order
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleProceedToCheckout}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Order Confirmation</h3>
            <p>Thank you for your order!</p>
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <p>Payment Method: {paymentMethod === "card" ? "Card" : "Cash on Delivery"}</p>
            <button
              onClick={handleConfirmationClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Page

