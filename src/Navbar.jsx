import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-100">
      <Link to="/home" className="mr-4">
        홈
      </Link>
      <Link to="/portfolios" className="mr-4">
        프로젝트
      </Link>
    </nav>
  );
};

export default Navbar;
