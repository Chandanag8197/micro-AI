import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";

//const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    agree: false,
  });
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [checkingName, setCheckingName] = useState(false);
  const navigate = useNavigate();

  // Password validation function
  const validatePassword = (password) => {
    if (password.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter.";
    if (!/[0-9]/.test(password)) return "Password must contain a number.";
    return "";
  };

  // // Check if name is unique (call backend)
  // const checkNameUnique = async (name) => {
  //   setCheckingName(true);
  //   try {
  //     const res = await axios.post(`http://localhost:5000/api/users/check-name`, { name });
  //     setCheckingName(false);
  //     return res.data.unique;
  //   } catch {
  //     setCheckingName(false);
  //     return false;
  //   }
  // };

  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError(""); // Clear error on change

    // Password validation
    if (name === "password") {
      setPasswordError(validatePassword(value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email must end with @gmail.com
    if (!form.email.endsWith("@gmail.com")) {
      setError("Email must be a @gmail.com address.");
      return;
    }

    // Passwords must match
    if (form.password !== form.repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Password requirements
    const pwdErr = validatePassword(form.password);
    if (pwdErr) {
      setError(pwdErr);
      return;
    }

    // Name uniqueness
    // const unique = await checkNameUnique(form.name.trim());
    // if (!unique) {
    //   setError("Name is already taken.");
    //   return;
    // }

    try {
      await axios.post(`http://localhost:5000/api/users/register`, {
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
        {passwordError && (
          <div style={{ color: "red", marginBottom: "10px" }}>{passwordError}</div>
        )}
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
          {" "}I agree all statements in{" "}
          <Link to="/terms" style={{ color: "#00bcd4", textDecoration: "underline" }}>
            Terms of service
          </Link>
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