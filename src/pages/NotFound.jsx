import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br text-center px-5">
      <h1 className="text-8xl font-extrabold text-green-500 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-green-800 mb-2">
        페이지를 찾을 수 없습니다
      </h2>
      <p className="text-black mb-6">
        요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-green-600 text-white font-medium rounded-xl"
      >
        홈으로 돌아가기
      </a>
    </div>
  );
};

export default NotFound;
