import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext.jsx";

const ProtectedRoute = ({ requiredRole = null, children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  // Not logged in → send to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Logged in but role doesn’t match
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // If everything is fine, render the children
  return children;
};

export default ProtectedRoute;
