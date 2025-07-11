// src/pages/PaymentPage.jsx
import React, { useEffect } from "react";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext.jsx";
import "./Payment.css";

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function PaymentPage() {
  const { cartItems } = useCart();
  const { user } = useAuth();
  const totalAmount = cartItems.length * 10;

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openPayment = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount }),
      });
      const data = await res.json();
      const options = {
        key: "rzp_test_JTUBgVbUKDh5uO",
        amount: data.amount,
        currency: data.currency,
        name: "Micro AI",
        description: "AI Subscription",
        order_id: data.orderId,
        handler: function (response) {
          console.log("✅ Payment success", response);
          alert("Payment Successful!");
        },
        prefill: {
          name: user?.name || "",
          email: user?.email || "",
          contact: user?.contact || "",
        },
        theme: { color: "#0066cc" },
        method: {
          upi: true,
          card: true,
          netbanking: true,
        },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("❌ Payment Error", err);
      alert("Payment initiation failed");
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment & Checkout</h2>
      <p className="payment-amount">Total Amount: ₹{totalAmount}</p>
      <div className="cart-summary">
        <h3>Cart Items</h3>
        <ul>
          {cartItems.map((item, idx) => (
            <li key={idx}>{item.itemName || item.name} - ₹{item.price || 10}</li>
          ))}
        </ul>
      </div>
      <div className="user-details">
        <h3>User Details</h3>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
      </div>
      <button className="pay-now-button" onClick={openPayment}>
        Pay ₹{totalAmount}
      </button>
    </div>
  );
}
