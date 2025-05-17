import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate(`/home`);
  };
  return (
    <div>
      <h1 className="p-4 text-6xl font-bold text-center bg-gray-300">
        💻TaeHyeon의 포트폴리오
      </h1>
    </div>
  );
};

export default Home;
