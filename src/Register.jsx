import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    agree: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError(""); // Clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await axios.post("https://microai-backend.onrender.com/api/users/register", {
        name: form.name,
        email: form.email,
        password: form.password,
      });
      alert("✅ Registered Successfully!");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="register-bg">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">CREATE ACCOUNT</h2>
        <input
          className="register-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="register-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="register-input"
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          className="register-input"
          type="password"
          name="repeatPassword"
          placeholder="Repeat your password"
          value={form.repeatPassword}
          onChange={handleChange}
          required
        />
        {error && <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>}
        <label className="register-checkbox">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
            required
          />
          I agree all statements in <a href="#">Terms of service</a>
        </label>
        <button className="register-btn" type="submit">SIGN UP</button>
        <div className="register-login-link">
          Have already an account?{" "}
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              navigate("/login");
            }}
          >
            Login here
          </a>
        </div>
      </form>
    </div>
  );
}
