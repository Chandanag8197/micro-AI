import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./context/AuthContext.jsx";
import "./ProfileDropdown.css";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef();
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      if (!token) return;
      try {
        const { data } = await axios.get("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
      } catch (error) {
        console.error("Failed to load user profile", error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/login");
  };

  const toggleDropdown = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-dropdown" ref={dropdownRef}>
      <div className="profile-icon" onClick={toggleDropdown}>
        <img src="/assets/login.png" alt="Profile" />
        <span>{user?.name || "Profile"}</span>
      </div>
      {open && user && (
        <div className="dropdown-card">
          <div className="profile-row">👤 <strong>{user.name}</strong></div>
          <div className="profile-row">📧 {user.email}</div>
          <div className="profile-row">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}