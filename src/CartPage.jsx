import React from 'react';
import { useCart } from './context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const ITEM_PRICE = 10;

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalAmount = cartItems.length * ITEM_PRICE;

  const handleCheckout = () => {
    navigate('/payment');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">Your cart is empty.</div>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <span className="cart-label">{item.label}</span>
                <span className="cart-price">₹{ITEM_PRICE}</span>
                <button
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item.label)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-total">
            <h3>Total: ₹{totalAmount}</h3>
          </div>

          <div className="cart-actions">
            <button onClick={handleCheckout} className="cart-pay-btn">
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
}
