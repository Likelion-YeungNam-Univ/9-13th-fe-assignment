import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex p-4 bg-gray-400">
      <Link to="/" className="mr-4 hover:underline">
        홈
      </Link>
      <Link to="/about" className="mr-4 hover:underline">
        소개
      </Link>
      <Link to="/projects" className="mr-4 hover:underline">
        프로젝트 목록
      </Link>
    </nav>
  );
};

export default NavBar;
