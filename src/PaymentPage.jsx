import React, { useState } from "react";
import axios from "axios";
import { useCart } from "./context/CartContext";
import "./Payment.css";

export default function PaymentPage() {
  const { cartItems, markAsPaid } = useCart();
  const totalAmount = cartItems.length * 10;

  const [selectedMethod, setSelectedMethod] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
  });

  const openModal = (method) => {
    setSelectedMethod(method);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setUpiId("");
    setCardDetails({ number: "", expiry: "", cvv: "" });
  };

  const handlePayment = async () => {
    if (
      (["phonepe", "gpay", "paytm"].includes(selectedMethod) && !upiId) ||
      (selectedMethod === "card" && (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv))
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/payment/create-order", {
        amount: totalAmount,
      });

      const options = {
        key: "YOUR_KEY_ID",
        amount: data.amount,
        currency: data.currency,
        name: "Micro-AI",
        description: "Course Payment",
        order_id: data.id,
        handler: function (response) {
          alert("Payment successful!");
          console.log("Payment response:", response);
          markAsPaid();
          closeModal();
        },
        prefill: {
          name: "Chandan A G",
          email: "agchandan73@gmail.com",
          contact: "8197805161",
        },
        theme: { color: "#19a7e0" },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Payment initiation failed.");
    }
  };

  const methods = [
    { id: "phonepe", label: "PhonePe", icon: "phonepe.png" },
    { id: "gpay", label: "Google Pay", icon: "gpay.png" },
    { id: "paytm", label: "Paytm", icon: "paytm.png" },
    { id: "card", label: "Cards", icon: "cards.png" },
  ];

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Page</h2>
      <p className="payment-amount">Total Amount: ₹{totalAmount}</p>

      <div className="payment-methods-vertical">
        {methods.map((method) => (
          <div
            key={method.id}
            className="payment-method-option"
            onClick={() => openModal(method.id)}
          >
            <img src={`/images/${method.icon}`} alt={method.label} />
            <div>{method.label}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Enter Payment Details ({selectedMethod.toUpperCase()})</h3>

            {["phonepe", "gpay", "paytm"].includes(selectedMethod) && (
              <input
                type="text"
                className="input-box"
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            )}

            {selectedMethod === "card" && (
              <div className="card-inputs">
                <input
                  type="text"
                  placeholder="Card Number"
                  value={cardDetails.number}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, number: e.target.value })
                  }
                  className="input-box"
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={cardDetails.expiry}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, expiry: e.target.value })
                  }
                  className="input-box"
                />
                <input
                  type="password"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, cvv: e.target.value })
                  }
                  className="input-box"
                />
              </div>
            )}

            <div className="modal-buttons">
              <button className="pay-now-button" onClick={handlePayment}>
                Pay ₹{totalAmount}
              </button>
              <button className="cancel-button" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
