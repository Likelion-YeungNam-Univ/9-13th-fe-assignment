import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4">
      <Link to="/" className="p-4 border">
        Home
      </Link>
      <Link to="/projects" className="p-4 border">
        프로젝트 목록
      </Link>
      <Link to="/about" className="p-4 border">
        자기소개
      </Link>
    </nav>
  );
};

export default Navbar;
