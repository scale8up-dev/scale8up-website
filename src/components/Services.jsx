import React from "react";
import SwiperCustome from "./SwiperCustome";

export default function Services() {
  return (
    <div className="px-5 py-[110px] relative">
      <div className="relative mb-[30px]">
        <span
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
          className="inline-block text-xl font-medium text-black py-[10px] px-5 border-b border-[#49B0DC] rounded-[20px] mb-5"
        >
          Our Services
        </span>
        <h2 className="text-6xl leading-[65px] text-black font-semibold">
          What We Offer
        </h2>
        <p className="mt-5 text-lg text-[#868686] leading-[32px] ">
          Comprehensive technology solutions to drive your business forward
        </p>
      </div>

      <SwiperCustome />
    </div>
  );
}
