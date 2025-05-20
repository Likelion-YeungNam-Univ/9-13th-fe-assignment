import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="p-4 bg-gray-100 flex gap-4">
    <Link to="/">홈</Link>
    <Link to="/about">자기소개</Link>
    <Link to="/projects">프로젝트</Link>
  </nav>
);

export default Navbar;
