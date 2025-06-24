import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    try {
      await axios.post("http://localhost:5000/api/users/forgot-password", { email });
      setMessage("Password reset link sent! Please check your email.");
      setTimeout(() => navigate("/login"), 2500); // Redirect after 2.5 seconds
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send reset link.");
    }
  };

  return (
    <div className="login-bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Forgot Password</h1>
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
        {message && <div style={{ color: "green", marginBottom: "10px" }}>{message}</div>}
        <button className="login-btn" type="submit">Send Reset Link</button>
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;