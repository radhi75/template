import React from "react";
import { Navigate } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const token = localStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>{token && user.role == "user" ? children : <Navigate to="/" />}</div>
  );
};

export default PrivetRoutes;
