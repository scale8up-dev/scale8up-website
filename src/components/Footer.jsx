import React from "react";
import logo from "../assets/footerlogo.png";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";
export default function Footer() {
  return (
    <div className="w-full bg-[#070C11] rounded-[10px] pt-[121px] pb-[50px]">
      <div className="max-w-[1300px] mx-auto px-5 ">
        <div className="flex items-center justify-between">
          <div className="logoimg ">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-[10px] pl-12 pr-[10px]">
              <a
                className="h-15 w-15 flex items-center justify-center rounded-[10px] border border-[#49B0DC]"
                href=""
              >
                <img className="h-5 w-5 object-contain" src={fb} alt="fb" />
              </a>
              <a
                className="h-15 w-15 flex items-center justify-center rounded-[10px] border border-[#49B0DC]"
                href=""
              >
                <img
                  className="h-5 w-5 object-contain"
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="my-[35px] w-full border-t border-[#fff] opacity-30"></div>

        <div className="flex items-center justify-center gap-20">
          <a
            href=""
            className="inline-block text-[18px] leading-[24px] text-white py-1 px-[10px] rounded-[70px] bg-[#49B0DC]"
          >
            Home
          </a>
          <a
            href="#about"
            className="inline-block text-[18px] leading-[24px] text-white py-1 px-[10px] rounded-[70px]"
          >
            About Us
          </a>
          <a
            href="#service"
            className="inline-block text-[18px] leading-[24px] text-white py-1 px-[10px] rounded-[70px]"
          >
            Services
          </a>
          <a
            href="#portfolio"
            className="inline-block text-[18px] leading-[24px] text-white py-1 px-[10px] rounded-[70px]"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="inline-block text-[18px] leading-[24px] text-white py-1 px-[10px] rounded-[70px]"
          >
            Team
          </a>
        </div>

        <div className="mt-[35px] mb-[50px] w-full border-t border-[#fff] opacity-30"></div>

        <div className="text-center text-[18px] leading-5 font-normal text-white ">© Copyright SCALE8UP. All Rights Reserved</div>
      </div>
    </div>
  );
}
