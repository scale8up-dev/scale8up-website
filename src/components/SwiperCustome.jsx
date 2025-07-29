import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
function SwiperCustome() {
  const items = [
    {
      id: 1,
      text: "AI Development",
      image: service1,
      title: "AI Development",
      description:
        "Leverage the power of artificial intelligence with our cutting-edge solutions. From machine learning to natural language processing, we help you stay ahead in the AI revolution.",
    },
    {
      id: 2,
      text: "Web Development",
      image: service2,
      title: "Web Development",
      description:
        "Custom web solutions that combine stunning design with powerful functionality. We create responsive, scalable, and secure web applications that drive your business forward.",
    },
    {
      id: 3,
      text: "Mobile App Development",
      image: service3,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences. We build apps that users love and businesses trust.",
    },
    {
      id: 4,
      text: "UI/UX Design",
      image: service4,
      title: "UI/UX Design",
      description:
        "User-centered design solutions that create engaging and intuitive interfaces. Our designs combine aesthetics with functionality to deliver memorable user experiences.",
    },
    {
      id: 5,
      text: "Cloud & DevOps",
      image: service1,
      title: "Cloud & DevOps",
      description:
        "Streamline your operations with our cloud solutions and DevOps practices. We help you achieve faster deployment, better scalability, and improved efficiency.",
    },
    {
      id: 6,
      text: "Machine Learning",
      image: service2,
      title: "Machine Learning",
      description:
        "Advanced machine learning solutions that help you make data-driven decisions. From predictive analytics to pattern recognition, we leverage cutting-edge ML algorithms to solve complex business challenges.",
    },
  ];

  return (
    <div className="homeswiper" style={{ position: "relative px-5" }}>
      <div
        className="absolute top-[240px] sm:top-[100px] md:top-[150px] xl:top-[200px] right-3"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "8px",
          padding: "8px",
        }}
      >
        <button className="cursor-pointer group h-15 w-15 flex items-center justify-center border border-[#423F67] bg-transparent hover:bg-[#423F67] swiper-button-prev-custom rounded-[10px] px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              className="group-hover:stroke-white transition-colors"
              d="M18.2085 11.5H4.79183"
              stroke="#423F67"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="group-hover:stroke-white transition-colors"
              d="M11.5 4.79199L4.79167 11.5003L11.5 18.2087"
              stroke="#423F67"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="cursor-pointer group h-15 w-15 flex items-center justify-center border border-[#423F67] bg-transparent hover:bg-[#423F67] swiper-button-next-custom rounded-[10px] px-2 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
          >
            <path
              className="group-hover:stroke-white transition-colors"
              d="M4.7915 11.5H18.2082"
              stroke="#423F67"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="group-hover:stroke-white transition-colors"
              d="M11.5 4.79199L18.2083 11.5003L11.5 18.2087"
              stroke="#423F67"
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
        slidesPerView={4}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="bg-white p-[15px] rounded-[20px] h-full"
              style={{
                position: "relative",
                overflow: "hidden",
              }}
            >
              <img
                className="mb-[30px]"
                src={item.image}
                alt={item.text}
                style={{ width: "100%", display: "block", borderRadius: "8px" }}
              />
              <p className="mb-5 text-[26px] text-black font-medium">
                {item?.title}
              </p>
              <p className="mb-5 text-[16px] leading-[26px] text-[#868686]">
                {item?.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperCustome;
