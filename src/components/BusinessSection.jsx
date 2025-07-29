import React from "react";
import businessleft from "../assets/businessleft.png";
import businessright from "../assets/businessright.png";

export default function BusinessSection() {
  return (
    <div>
      <div className="relative w-full mt-[50px] px-5">
        <div className="bg-[#423F67] py-[50px] xl:py-[120px] bg-[url(assets/businesssection.png)] bg-right-bottom md:bg-right bg-size-[60%] md:bg-contain bg-no-repeat rounded-[20px]">
          <div className="max-w-[1300px] px-5 mx-auto ">
            <div className="w-full max-w-[350px] lg:max-w-[450px] xl:max-w-[750px]">
              <h2 className="text-3xl lg:text-4xl xl:text-6xl xl:leading-[65px] font-semibold mb-[30px] text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-[16px] leading-[26px] text-white mb-10">
                Let's discuss how our innovative solutions can help you achieve
                your business goals. Contact us today for a free consultation.
              </p>
              <button className="flex items-center gap-[10px] bg-[#fff] rounded-[10px] py-[6px] pl-5 pr-[6px] cursor-pointer">
                <span className="text-[17px] font-semibold leading-5 text-[#423F67]">
                  Contact Us
                </span>
                <a
                  className="h-12 w-12 flex items-center justify-center rounded-[10px] bg-[#423F67]"
                  href=""
                >
                  {/* <img className="h-5 w-5 object-contain" alt="rightarrow" src="/src/assets/arrow-right.png"> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <path
                      d="M4.7915 11.5H18.2082"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.5 4.79199L18.2083 11.5003L11.5 18.2087"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative py-[50px] xl:py-[140px]">
        <div className="max-w-[1300px] px-5 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full sm:w-1/2 sm:pr-5 xl:pr-[80px] mb-5 sm:mb-0">
              <img
                className="rounded-[10px] w-full object-cover"
                src={businessleft}
                alt="leftimg"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <h3 className="text-3xl xl:text-[50px] xl:leading-[65px] text-black mb-5 xl:mb-[30px]">
                Comprehensive Technology Solutions
              </h3>
              <p className="text-[18px] leading-[32px] text-[#868686] mb-5 xl:mb-[30px]">
                We offer end-to-end technology solutions that cover every aspect
                of your digital transformation journey. From initial
                consultation to final deployment, we're with you every step of
                the way.
              </p>
              <p className="text-[18px] leading-[32px] text-[#868686]">
                Our team of experts brings together diverse skills and
                experiences to deliver solutions that are not just technically
                sound but also aligned with your business objectives.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center mt-12 xl:mt-[115px]">
            <div className="w-full sm:w-1/2 sm:pr-5 xl:pr-[80px]">
              <h3 className="text-3xl xl:text-[50px] xl:leading-[65px] text-black mb-5 xl:mb-[30px]">
                Agile Development Methodology
              </h3>
              <p className="text-[18px] leading-[32px] text-[#868686] mb-5 xl:mb-[30px]">
                We follow agile development practices to ensure rapid delivery
                of high-quality solutions. Our iterative approach allows for
                continuous improvement and adaptation to changing requirements.
              </p>
              <p className="text-[18px] leading-[32px] text-[#868686]">
                Regular communication and transparent processes keep you
                informed about project progress and ensure your vision is
                realized exactly as intended.
              </p>
            </div>
            <div className="w-full sm:w-1/2 mt-5 sm:mt-0">
              <img
                className="rounded-[10px] w-full object-cover"
                src={businessright}
                alt="rigthimg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
