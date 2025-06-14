import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      {/* Header with Navigation */}
      <header className="fixed-header">
        <h2 className="header-title">Micro-AI</h2>
        <nav className="main-nav">
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
