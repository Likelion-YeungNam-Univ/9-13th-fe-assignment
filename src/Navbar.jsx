import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4">
      <Link to="/home" className="p-4 border">
        홈
      </Link>
    </nav>
  );
};

export default Navbar;
