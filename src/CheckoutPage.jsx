// src/pages/CheckoutPage.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css"; // Ensure you have a CSS file for styling

export default function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const totalAmount = location.state?.totalAmount;

  // Redirect back if no amount is passed
  useEffect(() => {
    if (!totalAmount) {
      alert("No amount provided. Redirecting to payment page...");
      navigate("/payment");
    }
  }, [totalAmount, navigate]);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const openPayment = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/payment/create-order", {
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
          name: "Chandan A G",
          email: "agchandan73@gmail.com",
          contact: "8197805161",
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
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout Page</h1>
      <p className="checkout-amount">Payable Amount: ₹{totalAmount}</p>
      <button
        className="checkout-button"
        onClick={openPayment}
      >
        Pay ₹{totalAmount}
      </button>
    </div>
  );
}
