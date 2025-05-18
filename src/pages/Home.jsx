import React from "react";
import helloImg from "../assets/hello.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 space-y-4 mt-20">
      <img
        src={helloImg}
        alt="hello"
        className="w-52 h-52 mb-6 shadow-lg rounded-full"
      />
      <span className="font-extrabold text-4xl text-gray-800">안녕하세요!</span>
      <span className="font-semibold text-xl text-gray-700">
        사용자를 생각하는 프론트엔드 개발자{" "}
        <span className="text-blue-500">안현석</span> 입니다.
      </span>
      <span className="text-base text-gray-600 leading-relaxed max-w-xl">
        🌱 변화를 받아들이며 나날이 새롭게, 꾸준히 성장하는 개발자가 되고
        있습니다.
      </span>
      <span className="text-base text-gray-600 leading-relaxed max-w-xl">
        🤝 부족한 부분을 보완하여 더 나은 서비스를 제공하고, <br />
        협업을 통해 성장하길 좋아하는 개발자입니다.
      </span>
    </div>
  );
};

export default Home;
