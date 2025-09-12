import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "./context/AuthContext.jsx"; // 🔁 Ensure the path is correct

const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // ✅ Added
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${baseUrl}/api/users/login`, form);
      
      // Assume response = { token, name, email }
      const userData = {
        name: res.data.name,
        email: res.data.email,
        token: res.data.token,
      };

      // ✅ Call login with rememberMe option
      login(userData, rememberMe);

      alert("✅ Logged in successfully!");
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-layout">
        <div className="login-left-panel">
          <img src="/assets/logo.png" alt="Logo" className="login-logo" />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="login-title">Sign In</h1>

          <input
            className="login-input"
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}

          <div className="login-options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              /> Remember me
            </label>
            <Link to="/forgot-password" className="forgot-link">Forgot Password</Link>
          </div>

          <button className="login-btn" type="submit">LOGIN</button>

          <div className="register-link">
            Don’t have an account? <Link to="/register">Register here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;