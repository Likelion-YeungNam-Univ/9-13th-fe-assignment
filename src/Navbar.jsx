import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-100">
      <button to="/" className="mr-4">
        🏚
      </button>
      <button to="/about" className="mr-4">
        자기소개
      </button>
      <button to="/projects">프로젝트 목록</button>
    </nav>
  );
};

export default Navbar;