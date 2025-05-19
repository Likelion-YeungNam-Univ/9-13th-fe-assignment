import React from "react";

const Home = () => {
  return (
    <div>
      <div className="text-lg font-extrabold">
        ⬆️상단의 메뉴를 클릭해주세요⬆️
      </div>
      <div className="flex flex-col space-y-3 justify-center items-center">
        <div className="flex justify-center items-center text-3xl">
          안녕하세요👋
        </div>
        <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTAxMTZfMjcx/MDAxNjEwNzc1OTg0OTAy.zRE-4PnI79kRMdJQ7TcI6b6L1HYqXrqIXXSiaRl0cxsg.gAqFhL-F5Trn3QESHk3msTnakyvCUbs3dwH19rJrEIcg.GIF.cc_76/i015146442997.gif?type=w800" />
      </div>
    </div>
  );
};

export default Home;
