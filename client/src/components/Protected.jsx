import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, isAuth }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (!isAuth) return nav("/register");
  }, [isAuth, nav]);
  return children;
};

export default Protected;