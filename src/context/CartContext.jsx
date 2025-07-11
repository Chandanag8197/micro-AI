import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext.jsx"; // 🔁 Make sure the path is correct

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const { user } = useAuth(); // 🔑 Get the user from AuthContext

  // Load cartItems from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Load paidItems from localStorage
  const [paidItems, setPaidItems] = useState(() => {
    const savedPaid = localStorage.getItem("paidItems");
    return savedPaid ? JSON.parse(savedPaid) : [];
  });

  // Sync cartItems to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Sync paidItems to localStorage
  useEffect(() => {
    localStorage.setItem("paidItems", JSON.stringify(paidItems));
  }, [paidItems]);

  // 🧹 Clear cartItems (used after payment or when user logs out)
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const addToCart = (item) => {
    if (!cartItems.some(i => i.label === item.label)) {
      setCartItems(prev => [...prev, item]);
    }
  };

  const removeFromCart = (label) => {
    setCartItems(prev => prev.filter(i => i.label !== label));
  };

  const markAsPaid = () => {
    const updated = [...new Set([...paidItems, ...cartItems.map(i => i.label)])];
    setPaidItems(updated);
    setCartItems([]); // Clear cart after successful payment
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        paidItems,
        markAsPaid,
        clearCart, // Optional: exposed for manual use
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
