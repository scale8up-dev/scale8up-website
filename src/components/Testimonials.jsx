import React from "react";
import TestimonialSwiper from "./TestimonialSwiper";

export default function Testimonials() {
  return (
    <div className="xl:p-[50px]">
      <div className="px-5 py-[50px] xl:py-[120px] relative bg-white rounded-[20px]">
        <div className="max-w-[1300px] mx-auto relative text-center">
          <span
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            className="inline-block text-xl font-medium text-black py-[10px] px-5 border-b border-[#49B0DC] rounded-[20px] mb-5"
          >
            Our Testimonials
          </span>
          <h2 className="text-center text-3xl xl:text-6xl xl:leading-[65px] text-black font-semibold">
            Client Testimonials
          </h2>
          <p className="text-center mt-5 text-lg text-[#868686] leading-[32px] ">
            What our clients say about working with us
          </p>
          <TestimonialSwiper />
        </div>
      </div>
    </div>
  );
}
