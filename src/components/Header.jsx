import React, { useState } from "react";
import logo from "../assets/logomain.png";
import fb from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";
import rightarrow from "../assets/arrow-right.png";

export default function Header({ activeSection }) {
  console.log("activeSection", activeSection);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (targetId === "") {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for header height
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }

    // Close mobile menu after navigation
    setIsMenuOpen(false);

    // Prevent URL hash change
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white sticky top-0 shadow-lg z-50">
      <div className="max-w-[1300px] mx-auto p-5 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logoimg max-w-[180px] xl:max-w-full">
            <img src={logo} alt="logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-2 xl:gap-5">
              <button
                onClick={(e) => handleNavClick(e, "")}
                className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px] transition-all duration-200 border-none cursor-pointer
                ${
                  activeSection === "hero"
                    ? "bg-[#49B0DC] text-white"
                    : "text-black hover:bg-gray-100"
                }
              `}
              >
                Home
              </button>
              <button
                onClick={(e) => handleNavClick(e, "about")}
                className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px] transition-all duration-200 border-none cursor-pointer
                 ${
                   activeSection === "about"
                     ? "bg-[#49B0DC] text-white"
                     : "text-black hover:bg-gray-100 "
                 }
                `}
              >
                About Us
              </button>
              <button
                onClick={(e) => handleNavClick(e, "service")}
                className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px] transition-all duration-200 border-none cursor-pointer
                 ${
                   activeSection === "service"
                     ? "bg-[#49B0DC] text-white"
                     : "text-black hover:bg-gray-100"
                 }
                `}
              >
                Services
              </button>
              <button
                onClick={(e) => handleNavClick(e, "portfolio")}
                className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px] transition-all duration-200 border-none cursor-pointer
                 ${
                   activeSection === "portfolio"
                     ? "bg-[#49B0DC] text-white"
                     : "text-black hover:bg-gray-100"
                 }
                `}
              >
                Portfolio
              </button>
              <button
                onClick={(e) => handleNavClick(e, "team")}
                className={`inline-block text-[18px] leading-[24px] py-1 px-[10px] rounded-[70px] transition-all duration-200 border-none cursor-pointer
                 ${
                   activeSection === "team"
                     ? "bg-[#49B0DC] text-white"
                     : "text-black hover:bg-gray-100"
                 }
                `}
              >
                Team
              </button>
            </div>
            <div className="flex items-center gap-[10px] pl-4 xl:pl-12 pr-[10px]">
              <a
                className="h-15 w-15 flex items-center justify-center rounded-[10px] border border-[#DBDBE2] hover:bg-gray-50 transition-colors"
                href="https://www.facebook.com/scale8upcommunity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-5 w-5 object-contain" src={fb} alt="fb" />
              </a>
              <a
                className="h-15 w-15 flex items-center justify-center rounded-[10px] border border-[#DBDBE2] hover:bg-gray-50 transition-colors"
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
            <button
              onClick={(e) => handleNavClick(e, "contact")}
              className="cursor-pointer flex items-center gap-[10px] bg-[#2B3A52] rounded-[10px] py-[6px] pl-5 pr-[6px] hover:bg-[#1F2A3D] transition-colors"
            >
              <span className="text-[17px] font-semibold leading-5 text-white">
                Contact Us
              </span>
              <div className="h-12 w-12 flex items-center justify-center rounded-[10px] bg-white">
                <img
                  className="h-5 w-5 object-contain"
                  src={rightarrow}
                  alt="rightarrow"
                />
              </div>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
            isMenuOpen ? "opacity-50 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile Sidebar Navigation */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-full w-80 bg-[#2B3A52] shadow-xl transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col px-6 pb-6 space-y-2">
            {/* Mobile Navigation Links */}
            <button
              onClick={(e) => handleNavClick(e, "")}
              className={`text-left text-[18px] leading-[24px] py-3 px-4 rounded-[10px] transition-all duration-200 border-none cursor-pointer
              ${
                activeSection === "hero"
                  ? "bg-[#49B0DC] text-white"
                  : "text-white hover:bg-[#3A4A65]"
              }
            `}
            >
              Home
            </button>
            <button
              onClick={(e) => handleNavClick(e, "about")}
              className={`text-left text-[18px] leading-[24px] py-3 px-4 rounded-[10px] transition-all duration-200 border-none cursor-pointer
               ${
                 activeSection === "about"
                   ? "bg-[#49B0DC] text-white"
                   : "text-white hover:bg-[#3A4A65]"
               }
              `}
            >
              About Us
            </button>
            <button
              onClick={(e) => handleNavClick(e, "service")}
              className={`text-left text-[18px] leading-[24px] py-3 px-4 rounded-[10px] transition-all duration-200 border-none cursor-pointer
               ${
                 activeSection === "service"
                   ? "bg-[#49B0DC] text-white"
                   : "text-white hover:bg-[#3A4A65]"
               }
              `}
            >
              Services
            </button>
            <button
              onClick={(e) => handleNavClick(e, "portfolio")}
              className={`text-left text-[18px] leading-[24px] py-3 px-4 rounded-[10px] transition-all duration-200 border-none cursor-pointer
               ${
                 activeSection === "portfolio"
                   ? "bg-[#49B0DC] text-white"
                   : "text-white hover:bg-[#3A4A65]"
               }
              `}
            >
              Portfolio
            </button>
            <button
              onClick={(e) => handleNavClick(e, "team")}
              className={`text-left text-[18px] leading-[24px] py-3 px-4 rounded-[10px] transition-all duration-200 border-none cursor-pointer
               ${
                 activeSection === "team"
                   ? "bg-[#49B0DC] text-white"
                   : "text-white hover:bg-[#3A4A65]"
               }
              `}
            >
              Team
            </button>

            {/* Mobile Social Links */}
            <div className="flex items-center gap-4 pt-6 pb-4 px-4">
              <a
                className="h-12 w-12 flex items-center justify-center rounded-[10px] border border-gray-400 hover:bg-[#3A4A65] transition-colors"
                href="https://www.facebook.com/scale8upcommunity/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-5 w-5 object-contain filter brightness-0 invert"
                  src={fb}
                  alt="fb"
                />
              </a>
              <a
                className="h-12 w-12 flex items-center justify-center rounded-[10px] border border-gray-400 hover:bg-[#3A4A65] transition-colors"
                href="https://www.linkedin.com/company/scale8up/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-5 w-5 object-contain filter brightness-0 invert"
                  src={linkedin}
                  alt="linkedin"
                />
              </a>
            </div>

            {/* Mobile Contact Button */}
            {/* <button
              onClick={(e) => handleNavClick(e, "contact")}
              className="cursor-pointer flex items-center justify-center gap-[10px] bg-[#49B0DC] rounded-[10px] py-3 px-5 hover:bg-[#3A9BC1] transition-colors mx-4 mt-4"
            >
              <span className="text-[17px] font-semibold leading-5 text-white">
                Contact Us
              </span>
              <div className="h-8 w-8 flex items-center justify-center rounded-[6px] bg-white">
                <img
                  className="h-4 w-4 object-contain"
                  src={rightarrow}
                  alt="rightarrow"
                />
              </div>
            </button> */}
            <button
             onClick={(e) => handleNavClick(e, "contact")}
              className="cursor-pointer flex items-center justify-between gap-[10px] bg-[#49B0DC] rounded-[10px] py-[6px] pl-5 pr-[6px] hover:bg-[#1F2A3D] transition-colors mt-4"
            >
              <span className="text-[17px] font-semibold leading-5 text-white">
                Contact Us
              </span>
              <div className="h-12 w-12 flex items-center justify-center rounded-[10px] bg-white">
                <img
                  className="h-5 w-5 object-contain"
                  src={rightarrow}
                  alt="rightarrow"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
