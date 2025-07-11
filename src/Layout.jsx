import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx";
import { useCart } from "./context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import "./Layout.css"; // ✅ Add this line
import ProfileDropdown from "./ProfileDropdown.jsx";

function Layout() {
  // const navigate = useNavigate();
  const { user } = useAuth();
  const { cartCount } = useCart();

  return (
    <div className="layout-container">
      {user ? (
        <>
          <header className="fixed-header">
            <nav className="main-nav">
              {/* Login/Logout */}
              <div className="login-area">
                <ProfileDropdown />
              </div>

              {/* Navigation Links */}
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>

              {/* Cart */}
              <div className="cart-area">
                <Link to="/cart" title="Cart" className="cart-link">
                  <div className="cart-icon-wrapper">
                    <FaShoppingCart size={32} />
                    {cartCount > 0 && (
                      <span className="cart-count">{cartCount}</span>
                    )}
                  </div>
                  <span className="cart-label">Cart</span>
                </Link>
              </div>
            </nav>
          </header>

          <main className="main-content">
            <Outlet />
          </main>

          <footer className="footer">
            <small>&copy; 2025 Micro-AI. All rights reserved.</small>
          </footer>
        </>
      ) : (
        <main className="main-content">
          <Outlet />
        </main>
      )}
    </div>
  );
}

export default Layout;
