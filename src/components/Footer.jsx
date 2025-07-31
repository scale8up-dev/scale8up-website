import React from "react";
import logo from "../assets/footerlogo.png";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";

export default function Footer({ activeSection }) {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    
    if (targetId === "") {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for header height
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
    
    // Prevent URL hash change
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  };

  return (
    <div className="w-full bg-[#070C11] rounded-[10px] pt-[121px] pb-[50px]">
      <div className="max-w-[1300px] mx-auto px-5">
        <div className="flex items-center justify-between">
          <div className="logoimg">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center">
            <div className="flex items-center gap-[10px] pl-12 pr-[10px]">
              <a
                className="h-15 w-15 flex items-center justify-center rounded-[10px] border border-[#49B0DC] hover:bg-[#49B0DC] transition-colors"
                href="https://www.facebook.com/scale8upcommunity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-5 w-5 object-contain" src={fb} alt="fb" />
              </a>
              <a
                className="h-15 w-15 flex items-center justify-center rounded-[10px] border border-[#49B0DC] hover:bg-[#49B0DC] transition-colors"
                href="https://www.linkedin.com/company/scale8up/"
                target="_blank"
                rel="noopener noreferrer"
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

        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-2 sm:gap-10 md:gap-18 lg:gap-20">
          <button
            onClick={(e) => handleNavClick(e, "")}
            className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px] transition-all duration-200 hover:bg-[#49B0DC] cursor-pointer border-none bg-transparent
            ${
              activeSection === ""
                ? "bg-[#49B0DC] text-white"
                : "text-white hover:text-white"
            }
            `}
          >
            Home
          </button>
          <button
            onClick={(e) => handleNavClick(e, "about")}
            className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px] transition-all duration-200 hover:bg-[#49B0DC] cursor-pointer border-none bg-transparent
            ${
              activeSection === "about"
                ? "bg-[#49B0DC] text-white"
                : "text-white hover:text-white"
            }
            `}
          >
            About Us
          </button>
          <button
            onClick={(e) => handleNavClick(e, "service")}
            className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px] transition-all duration-200 hover:bg-[#49B0DC] cursor-pointer border-none bg-transparent
            ${
              activeSection === "service"
                ? "bg-[#49B0DC] text-white"
                : "text-white hover:text-white"
            }
            `}
          >
            Services
          </button>
          <button
            onClick={(e) => handleNavClick(e, "portfolio")}
            className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px] transition-all duration-200 hover:bg-[#49B0DC] cursor-pointer border-none bg-transparent
            ${
              activeSection === "portfolio"
                ? "bg-[#49B0DC] text-white"
                : "text-white hover:text-white"
            }
            `}
          >
            Portfolio
          </button>
          <button
            onClick={(e) => handleNavClick(e, "team")}
            className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px] transition-all duration-200 hover:bg-[#49B0DC] cursor-pointer border-none bg-transparent
            ${
              activeSection === "team"
                ? "bg-[#49B0DC] text-white"
                : "text-white hover:text-white"
            }
            `}
          >
            Team
          </button>
        </div>

        <div className="mt-[35px] mb-[50px] w-full border-t border-[#fff] opacity-30"></div>

        <div className="text-center text-[18px] leading-5 font-normal text-white">
          © Copyright Business Evolution AI. All Rights Reserved
        </div>
      </div>
    </div>
  );
}