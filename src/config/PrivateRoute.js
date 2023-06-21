import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const Auth = ({ allowedRoles }) => {
  const location = useLocation();

  let user = localStorage.getItem("auth");
  user = JSON.parse(user);

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return allowedRoles.find((role) => user.role === role) ? (
      <Outlet />
    ) : (
      <Navigate to="/unauthorized" state={{ from: location }} replace />
    );
  }
};

export default Auth;
