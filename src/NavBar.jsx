import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">홈</Link>
      <Link to="/projects">프로젝트 목록</Link>
      <Link to="/about">자기소개</Link>
    </nav>
  );
};

export default NavBar;
