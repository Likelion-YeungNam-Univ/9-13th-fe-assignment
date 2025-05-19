import React from "react";
import profile from "../assets/profile2.png";

const insta =
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg";

const soundcloud =
  "https://www.vectorlogo.zone/logos/soundcloud/soundcloud-tile.svg";

const InfoRow = ({ label, value }) => (
  <div className="flex border-b border-gray-300">
    <div className="flex w-22 items-center justify-center bg-black text-white font-semibold px-4 py-2 border-r border-gray-300 text-sm">
      {label}
    </div>
    <div className="flex-1 px-3 py-2 text-sm">{value}</div>
  </div>
);

const About = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img
        src={profile}
        className="flex items-center justify-center w-75 h-104"
      />
      <div className="border border-gray-300 rounded overflow-hidden">
        <InfoRow label="이름" value="홍진성" />
        <InfoRow label="출생" value="2002년 1월 10일" />
        <InfoRow label="출생지" value="경상북도 포항시" />
        <InfoRow label="국적" value="🇰🇷 대한민국" />
        <InfoRow label="신체" value="173cm | 70kg | O형" />
        <InfoRow label="가족" value="아버지 어머니 여동생" />
        <InfoRow
          label="학력"
          value={
            <div className="flex flex-col space-y-1">
              <div>대도중학교 졸업</div>
              <div>대동고등학교 졸업</div>
              <div>영남대학교 로봇공학과 재학</div>
            </div>
          }
        />
        <InfoRow label="취미" value="농구, 헬스, 음악" />
        <InfoRow label="MBTI" value="INFJ" />
        <InfoRow
          label="링크"
          value={
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/gyeongsangseaman/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} className="h-5 w-5" />
              </a>
              <a
                href="https://soundcloud.com/newbadloo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={soundcloud} className="h-5 w-5" />
              </a>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default About;
