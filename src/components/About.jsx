import React from "react";
import about from "../assets/about.png";
import about2 from "../assets/about2.png";

export default function About() {
  return (
    <section
      className="w-full relative bg-white rounded-[20px] py-[50px] xl:py-[100px] bg-[url(assets/vector.png)] bg-contain bg-no-repeat"
      id="about"
    >
      <div className="mx-auto max-w-[1300px] px-5">
        <div className="relative sm:pl-[240px] aboutusheading mb-[30px]">
          <span
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            className="inline-block text-xl !font-grotes font-medium text-black py-[10px] px-5 border-b border-[#49B0DC] rounded-[20px] mb-5"
          >
            About Us
          </span>
          <h2 className="text-3xl lg:text-5xl leading-[1] xl:text-6xl xl:leading-[65px] text-black font-semibold">
            Empowering Businesses <br /> Through Technology <br /> Innovation
          </h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-[40%] sm:pr-5 md:pr-10 mb-5 mb-sm-0">
            <img src={about} alt="about" />
          </div>
          <div className="w-full sm:w-[60%]">
            <p className="mb-5 md:mb-10 text-[#868686] text-sm lg:text-lg lg:leading-[32px]">
              At Business Evolution AI, we are passionate about transforming
              businesses through cutting-edge technology solutions. Our team of
              experts combines creativity with technical excellence to deliver
              exceptional results.
            </p>
            <p className="mb-5 md:mb-10 text-[#868686] text-sm lg:text-lg lg:leading-[32px]">
              With years of experience in the software industry, we understand
              the unique challenges businesses face in the digital age. Our
              comprehensive suite of services is designed to help you stay ahead
              of the competition and achieve your business goals.
            </p>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 mb-5 mb-sm-0">
                <div className="flex gap-5 items-baseline mb-4 sm:mb-0">
                  <svg
                    className="!h-3 !w-3 sm:!h-5 sm:!w-5 object-contain"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19 19"
                    fill="#49B0DC"
                  >
                    <path
                      d="M1 1H18M18 1V18M18 1L1 18"
                      stroke="#49B0DC"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                  <p className="text-[#10171E] text-sm lg:text-lg lg:leading-[35px] font-medium">
                    Expert team with diverse technical expertise{" "}
                  </p>
                </div>
                <div className="flex gap-5 items-baseline mb-4 sm:mb-0">
                  <svg
                    className="!h-3 !w-3 sm:!h-5 sm:!w-5 object-contain"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19 19"
                    fill="#49B0DC"
                  >
                    <path
                      d="M1 1H18M18 1V18M18 1L1 18"
                      stroke="#49B0DC"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                  <p className="text-[#10171E] text-sm lg:text-lg lg:leading-[35px] font-medium">
                    Expert team with diverse technical expertise{" "}
                  </p>
                </div>
                <div className="flex gap-5 items-baseline mb-4 sm:mb-0">
                  <svg
                    className="!h-3 !w-3 sm:!h-5 sm:!w-5 object-contain"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 19 19"
                    fill="#49B0DC"
                  >
                    <path
                      d="M1 1H18M18 1V18M18 1L1 18"
                      stroke="#49B0DC"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                  <p className="text-[#10171E] text-sm lg:text-lg lg:leading-[35px] font-medium">
                    Customer-centric approach with dedicated support
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 sm:pl-2 md:pl-5 lg:pl-10">
                <img src={about2} alt="about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
