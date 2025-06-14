import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Header with Navigation */}
      <header className="fixed-header">
        <nav className="main-nav">
          <button
      className="login-icon"
      title="Login"
      onClick={() => navigate("/login")}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        paddingLeft: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "-20px" // Remove negative margin
      }}
    >
      <img
        src="./assets/login.png"
        alt="Login"
        style={{ width: 35, height: 35, borderRadius: 10, marginBottom: 4 }}
      />
      <span style={{ fontSize: 12, color: "#222" }}>Login</span>
    </button>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Main content area */}
      <main style={{ padding: '0px' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '10px', borderTop: '1px solid #ccc' }}>
        <small>&copy; 2025 Micro-AI. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default Layout;
