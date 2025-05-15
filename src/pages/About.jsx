import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClickAbout = () => {
    navigate(`/about`);
  };
  return (
    <div>
      <h1 className="p-4 text-center text-6xl font-bold bg-gray-300">
        📖자기소개
      </h1>
      <p className="p-4 text-3xl">이름 : 임태현</p>
      <p className="p-4 text-3xl">나이 : 24세</p>
      <p className="p-4 text-3xl">학과 : 컴퓨터 공학과</p>
      <p className="p-4 text-3xl">전화번호 : 010 - xxxx -xxxx</p>
    </div>
  );
};

export default About;
