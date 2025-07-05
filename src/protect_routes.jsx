import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext.jsx"; // ✅ Make sure the path is correct

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return null; // Or show a spinner if desired

  if (!user) return <Navigate to="/login" replace />;
  return children;
}
