import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import rightarrow from "../assets/arrow-right.png";

function PortfolioSwiperCustome() {
  const items = [
    {
      id: 1,
      text: "Web Solutions",
      image: service1,
      url: "https://www.prepforindependence.ai/",
      title: "PrepForIndependence.AI",
      description:
        "Leverage the power of artificial intelligence with our cutting-edge solutions. From machine learning to natural language processing, we help you stay ahead in the AI revolution.",
    },
    {
      id: 2,
      text: "AI Projects",
      image: service2,
      url: "https://www.scale8upmethod.com/",
      title: "Scale8Up AI",
      description:
        "Custom web solutions that combine stunning design with powerful functionality. We create responsive, scalable, and secure web applications that drive your business forward.",
    },
    {
      id: 3,
      text: "Mobile Apps",
      image: service3,
      url: "https://onyxflow.co/",
      title: "OnyxFlow",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps that users love and businesses trust.",
    },
    {
      id: 4,
      text: "AI Projects",
      image: service4,
      url:'http://foreclosurebidai.com/',
      title: "foreclosurebid AI",
      description:
        "User-centered design solutions that create engaging and intuitive interfaces. Our designs combine aesthetics with functionality to deliver memorable user experiences.",
    },
    {
      id: 5,
      text: "AI Projects",
      image: service1,
      url:'https://nexplutus.com/',
      title: "SecurRoom AI",
      description: "Streamline your M&A workflow with AI-powered due diligence, document analysis, and automated redaction.",
    },
    {
      id: 6,
      url:'https://primeagefit.com/',
      text: "Web Solutions",
      image: service3,
      title: "FitAI Coach",
      description: "Get hyper-personalized workout plans that adapt to your progress. No more generic fitness apps - experience the precision of a personal trainer powered by intelligent AI.",
    },
      {
      id: 7,
      url:'https://envisionhr360.com/',
      text: "Web Solutions",
      image: service4,
      title: "Envision HR Platform",
      description: "Empower your SMB with self-service HR resources, AI-powered assistance, and on-demand access to human expertise—all through one intuitive platform.",
    },
  ];

  return (
    <div className="homeswiper portfolioswiper" style={{ position: "relative px-5" }}>
      <div
        className="absolute top-[160px] sm:top-[90px] xl:top-[170px] right-3"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px",
          padding: "8px",
        }}
      >
        <button className="cursor-pointer group h-15 w-15 flex items-center justify-center border border-white bg-transparent hover:bg-white swiper-button-prev-custom rounded-[10px] px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              className="group-hover:stroke-black transition-colors"
              d="M18.2085 11.5H4.79183"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="group-hover:stroke-black transition-colors"
              d="M11.5 4.79199L4.79167 11.5003L11.5 18.2087"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="cursor-pointer group h-15 w-15 flex items-center justify-center border border-white bg-transparent hover:bg-white swiper-button-next-custom rounded-[10px] px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              className="group-hover:stroke-black transition-colors"
              d="M4.7915 11.5H18.2082"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="group-hover:stroke-black transition-colors"
              d="M11.5 4.79199L18.2083 11.5003L11.5 18.2087"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        spaceBetween={20}
        slidesPerView={1.5}
        centeredSlidesBounds={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          }
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="bg-white p-5 lg:p-[30px] rounded-[30px] h-full grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-9 items-end"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div className="w-full">
                <img
                  className="sm:h-100 img-fluid object-cover h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
                  src={item.image}
                  alt={item.text}
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div>
                <p className="text-[17px] font-semibold leading-5 py-[18px] px-5 bg-[#D9D9D9] rounded-[50px] absolute top-[30px] right-[30px]">
                  {item.text}
                </p>
                <p className="mb-5 text-2xl lg:text-3xl xl:text-4xl 2xl:text-[50px] 2xl:leading-[65px] text-black font-semibold">
                  {item?.title}
                </p>
                <p className="mb-5 lg:mb-[60px] text-[18px] leading-[32px] text-[#868686]">
                  {item?.description}
                </p>
                <button className="cursor-pointer flex items-center gap-[10px] bg-[#423F67] rounded-[10px] py-[6px] pl-5 pr-[6px]">
                  <span className="text-[17px] font-semibold leading-5 text-white">
                    More Details
                  </span>
                  <a
                    className="h-12 w-12 flex items-center justify-center rounded-[10px] bg-white"
                    href={item.url}
                    target="_blank"
                  >
                    <img
                      className="h-5 w-5 object-contain"
                      alt="rightarrow"
                      src={rightarrow}
                    />
                  </a>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PortfolioSwiperCustome;
