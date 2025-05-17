import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">프로젝트</Link>
      <Link to="/about">자기소개</Link>
    </nav>
  );
};

export default Navbar;
