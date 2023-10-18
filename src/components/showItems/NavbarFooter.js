import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavbarFooter = ({ children }) => {
  const location = useLocation();
  const [showNavbarFooter, setShowNavFooter] = useState(false);

  useEffect(() => {
    location.pathname === "/login" || location.pathname === "/register"
      ? setShowNavFooter(false)
      : setShowNavFooter(true);
  }, [location]);

  return <div>{showNavbarFooter && children}</div>;
};

export default NavbarFooter;
