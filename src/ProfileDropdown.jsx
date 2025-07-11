import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./context/AuthContext.jsx"; // ✅ Import useAuth from context
import "./ProfileDropdown.css";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef();
  const { logout } = useAuth(); // ✅ grab logout from context
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token") || sessionStorage.getItem("token");
      if (!token) {
        console.log("❌ No token found");
        return;
      }
      try {
        const { data } = await axios.get("http://localhost:5000/api/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        // Generate random 6-digit id if not present
        let updated = false;
        if (!data.id) {
          data.id = Math.floor(100000 + Math.random() * 900000);
          updated = true;
        }
        // Add joined date if not present
        if (!data.joined) {
          const now = new Date();
          const month = now.toLocaleString('default', { month: 'long' });
          const year = now.getFullYear();
          data.joined = `${month} ${year}`;
          updated = true;
        }
        if (updated) {
          if (localStorage.getItem("user")) {
            localStorage.setItem("user", JSON.stringify(data));
          } else {
            sessionStorage.setItem("user", JSON.stringify(data));
          }
        }
        setUser(data);
        console.log("✅ User fetched and updated:", data);
      } catch (error) {
        console.error("❌ Failed to load user profile", error);
      }
    };

    fetchUser();
  }, []);


  const handleLogout = () => {
    logout(); // clear state and storage
    setUser(null); // clear local user state
    navigate("/login"); // redirect to login
  };

  const toggleDropdown = () => {
    console.log("🟢 Profile icon clicked");
    setOpen(!open);
  };

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
          {/* <div className="profile-row">🆔 {user.id}</div> */}
          <div className="profile-row">📅 Joined: {user.joined}</div>
          <div className="profile-row">🔐 Status: Logged In</div>
          <div className="profile-row">
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      )}
    </div>
  );
}
