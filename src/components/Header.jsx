import React from "react";
import logo from "../assets/logomain.png";
import fb from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";
import rightarrow from "../assets/arrow-right.png";

export default function Header() {
  return (
    <div className="w-full bg-white rounded-[10px]">
      <div className="max-w-[1300px] mx-auto p-5 rleative">
        <div className="flex items-center justify-between">
          <div className="logoimg ">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-5">
              <a
                href=""
                className="inline-block text-[18px] leading-[24px] text-white py-1 px-[10px] rounded-[70px] bg-[#49B0DC]"
              >
                Home
              </a>
              <a
                href=""
                className="inline-block text-[18px] leading-[24px] text-black py-1 px-[10px] rounded-[70px]"
              >
                About Us
              </a>
              <a
                href=""
                className="inline-block text-[18px] leading-[24px] text-black py-1 px-[10px] rounded-[70px]"
              >
                Services
              </a>
              <a
                href=""
                className="inline-block text-[18px] leading-[24px] text-black py-1 px-[10px] rounded-[70px]"
              >
                Portfolio
              </a>
              <a
                href=""
                className="inline-block text-[18px] leading-[24px] text-black py-1 px-[10px] rounded-[70px]"
              >
                Team
              </a>
            </div>
            <div className="flex items-center gap-[10px] pl-12 pr-[10px]">
              <a
                className="h-15 w-15 flex items-center justify-center rounded-[10px] border border-[#DBDBE2]"
                href=""
              >
                <img className="h-5 w-5 object-contain" src={fb} alt="fb" />
              </a>
              <a
                className="h-15 w-15 flex items-center justify-center rounded-[10px] border border-[#DBDBE2]"
                href=""
              >
                <img
                  className="h-5 w-5 object-contain"
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
            </div>
            <button className="cursor-pointer flex items-center gap-[10px] bg-[#423F67] rounded-[10px] py-[6px] pl-5 pr-[6px]">
              <span className="text-[17px] font-semibold leading-5 text-white">
                Contact Us
              </span>
              <a
                className="h-12 w-12 flex items-center justify-center rounded-[10px] bg-white"
                href=""
              >
                <img
                  className="h-5 w-5 object-contain"
                  src={rightarrow}
                  alt="rightarrow"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
