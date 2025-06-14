import React from 'react';
import { Link } from "react-router-dom";

function Login({ onBack }) {
  return (
    <div className="login-bg">
      <form className="login-form" onSubmit={e => { e.preventDefault(); onBack(); }}>
        <h1 className="login-title">Sign In</h1>
        <input className="login-input" type="text" placeholder="Username" required />
        <input className="login-input" type="password" placeholder="Password" required />
        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="forgot-link">Forgot Password</a>
        </div>
        <button className="login-btn" type="submit">LOGIN</button>
        <div className="register-link">
          Don’t have an account? <Link to="/register">Register here</Link>
        </div>
        <button type="button" className="back-btn" onClick={onBack}>Back to Home</button>
      </form>
    </div>
  );
}

export default Login;
