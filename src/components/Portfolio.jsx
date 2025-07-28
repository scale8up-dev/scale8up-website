import React from "react";
import PortfolioSwiperCustome from "./PortfolioSwiperCustome";

export default function Portfolio() {
  return (
    <div className="py-[110px] relative bg-black" id="portfolio">
      <div className="relative mb-[30px] px-5">
        <span
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          className="inline-block text-xl font-medium text-white py-[10px] px-5 border-b border-[#49B0DC] rounded-[20px] mb-5"
        >
          Portfolio
        </span>
        <h2 className="text-6xl leading-[65px] text-white font-semibold">
          Our Portfolio
        </h2>
        {/* <p className="mt-5 text-lg text-[#868686] leading-[32px] ">
          Comprehensive technology solutions to drive your business forward
        </p> */}
      </div>
      <PortfolioSwiperCustome />
    </div>
  );
}
