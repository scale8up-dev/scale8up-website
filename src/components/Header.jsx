import React from "react";
import logo from "../assets/logomain.png";
import fb from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";
import rightarrow from "../assets/arrow-right.png";

export default function Header({ activeSection }) {

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
                className={`inline-block text-[18px] leading-[24px]  py-1 px-[10px] rounded-[70px] 
                ${
                  activeSection === ""
                    ? "bg-[#49B0DC] text-white"
                    : "text-black"
                }
              
                `}
              >
                Home
              </a>
              <a
                href="#about"
                className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px]
                 ${
                   activeSection === "about"
                     ? "bg-[#49B0DC] text-white"
                     : "text-black"
                 }
                `}
              >
                About Us
              </a>
              <a
                href="#service"
                className={`inline-block text-[18px] leading-[24px]  py-1 px-[10px] rounded-[70px]
                 ${
                   activeSection === "service"
                     ? "bg-[#49B0DC] text-white"
                     : "text-black"
                 }
                `}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className={`inline-block text-[18px] leading-[24px]  py-1 px-[10px] rounded-[70px]
                 ${
                   activeSection === "portfolio"
                     ? "bg-[#49B0DC] text-white"
                     : "text-black"
                 }
                `}
              >
                Portfolio
              </a>
              <a
                href="#"
                className={`inline-block text-[18px] leading-[24px] text-black py-1 px-[10px] rounded-[  70px]
                 ${
                   activeSection === "#"
                     ? "bg-[#49B0DC] text-white"
                     : "text-black"
                 }
              
                `}
              >
                Team
              </a>
            </div>
            <div className="flex items-center gap-[10px] pl-12 pr-[10px]">
              <a
                className="h-15 w-15 flex items-center justify-center rounded-[10px] border border-[#DBDBE2]"
                href="https://www.linkedin.com/company/scale8up/"
                target="_blank"
              >
                <img className="h-5 w-5 object-contain" src={fb} alt="fb" />
              </a>
              <a
                className="h-15 w-15 flex items-center justify-center rounded-[10px] border border-[#DBDBE2]"
                href="https://www.facebook.com/scale8upcommunity/"
              >
                <img
                  className="h-5 w-5 object-contain"
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
            </div>
            <button
              onClick={"#contact"}
              className="cursor-pointer flex items-center gap-[10px] bg-[#423F67] rounded-[10px] py-[6px] pl-5 pr-[6px]"
            >
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
