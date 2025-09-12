import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
// ResetPassword.jsx
export function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/api/users/reset-password`, {
        token,
        password,
      });
      alert("✅ Password reset successful. Please login.");
    } catch (err) {
      console.error(err);
      alert("❌ Reset failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reset Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Reset Password</button>
    </form>
  );
}
