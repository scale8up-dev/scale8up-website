import React, { useEffect, useRef, useState } from "react";
import playicon from "../assets/playicon.svg";

export default function HeroSection() {
  
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count, setCount] = useState(0);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter(50); // your final value
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounter = (target) => {
    let start = 0;
    const duration = 1000;
    const increment = target / (duration / 20);

    const update = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        setTimeout(update, 20);
      } else {
        setCount(target);
      }
    };

    update();
  };
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
    // setIsMenuOpen(false);

    // Prevent URL hash change
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  };

  return (
    <section id="hero" className="w-full relative px-5">
      <div className="mt-[30px] mb-[50px] py-10 xl:py-[189px] bg-[url(assets/bannerimg.png)] bg-cover bg-no-repeat rounded-[20px]">
        <div className="mx-auto max-w-[1300px] px-5">
          <h1 className="mb-[30px] max-w-[400px] lg:max-w-[600px] xl:max-w-[990px] text-4xl lg:text-6xl leading-[1] xl:text-[90px] xl:leading-[100px] text-white">
            Innovative Solutions for Your
            <span className="text-[#49B0DC] font-bold">
              {" "}
              Digital <br /> Future!
            </span>
          </h1>
          <img src={playicon} alt="playicon" />
        </div>

        {/* Circle CTA Button */}
        <div  onClick={(e) => handleNavClick(e, "contact")} className="h-27 w-27 lg:h-40 lg:w-40 xl:h-[190px] xl:w-[190px] flex flex-col items-center justify-center rounded-[50%] bg-[#49B0DC] absolute right-[10%] sm:right-[18%] bottom-[20px] md:bottom-[30px] lg:bottom-[50px]">
          <svg
            className="mb-3"
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <path
              d="M1 1H18M18 1V18M18 1L1 18"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
          <p  onClick={(e) => handleNavClick(e, "contact")} className="text-white font-semibold leading-[20px] uppercase text-sm xl:text-[18px]">
            Get Started
          </p>
        </div>

        {/* Counter Section */}
        <div ref={counterRef} className="sm:absolute sm:top-[50px] sm:right-[5%] md:right-[15%] px-5 sm:px-0 mt-3 sm:mt-0">
          <div className="flex items-center">
            <p className="text-[#49B0DC] text-4xl xl:text-[50px] leading-[1.2] mr-5 font-bold">
              {count}+
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="#49B0DC"
            >
              <path
                d="M1 1H18M18 1V18M18 1L1 18"
                stroke="#49B0DC"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <p className="text-[16px] text-white">Projects Completed</p>
        </div>
      </div>
    </section>
  );
}
