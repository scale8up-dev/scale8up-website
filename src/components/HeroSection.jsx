import React, { useEffect, useRef, useState } from "react";
import playicon from "../assets/playicon.svg";

export default function HeroSection() {
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [count, setCount] = useState(0);

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

  return (
    <div className="w-full relative px-5">
      <div className="mt-[30px] mb-[50px] py-[189px] bg-[url(assets/bannerimg.png)] bg-cover bg-no-repeat rounded-[20px]">
        <div className="mx-auto max-w-[1300px] px-5">
          <h1 className="mb-[30px] max-w-[990px] text-[90px] leading-[100px] text-white">
            Innovative Solutions for Your
            <span className="text-[#49B0DC] font-bold">
              {" "}
              Digital <br /> Future!
            </span>
          </h1>
          <img src={playicon} alt="playicon" />
        </div>

        {/* Circle CTA Button */}
        <div className="h-[190px] w-[190px] flex flex-col items-center justify-center rounded-[50%] bg-[#49B0DC] absolute right-[18%] bottom-[50px]">
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
          <p className="text-white font-semibold leading-[20px] uppercase text-[18px]">
            Get Started
          </p>
        </div>

        {/* Counter Section */}
        <div ref={counterRef} className="absolute top-[50px] right-[15%]">
          <div className="flex items-center">
            <p className="text-[#49B0DC] text-[50px] leading-[1.2] mr-5 font-bold">
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
    </div>
  );
}
