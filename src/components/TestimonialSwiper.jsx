import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";
import testimonial3 from "../assets/testimonial-3.jpg";
import testimonial4 from "../assets/testimonial-4.jpg";
import quote from "../assets/quote.svg";

function TestimonialSwiper() {
  const items = [
    {
      id: 1,
      text: "John Smith",
      image: testimonial1,
      title: "John Smith",
      position:'CEO & Founder, TechCorp',
      description:
        "Business Evolution AI transformed our business with their innovative AI solutions. Their team's expertise and dedication to our project was exceptional. Highly recommended!",
    },
    {
      id: 2,
      text: "Sarah Johnson",
      image: testimonial2,
      position:'CTO, Digital Solutions',
      title: "Sarah Johnson",
      description:
      "The web development team at Business Evolution AI delivered beyond our expectations. Their attention to detail and commitment to quality is outstanding.",
        // "Working with Business Evolution AI on our mobile app development was a game-changer. Their expertise in cross-platform development saved us time and resources.",
    },
     {
      id: 3,
      text: "Michael Chen",
      image: testimonial3,
      position:'Product Manager, InnovateTech',
      title: "Michael Chen",
      description:
        "Working with Business Evolution AI on our mobile app development was a game-changer. Their expertise in cross-platform development saved us time and resources.",
    },
    {
      id: 4,
      text: "Emily Davis",
      image: testimonial4,
      position:'Design Director, Creative Solutions',
      title: "Emily Davis",
      description:
       "The UI/UX design team at SCALE8UP created an intuitive and beautiful interface that our users love. Their design thinking approach was invaluable.",
    },
   
  
  ];

  return (
    <div className="homeswiper testimonialslider mt-[30px]" style={{ position: "relative px-5" }}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next-custom-t",
          prevEl: ".swiper-button-prev-custom-t",
        }}
        spaceBetween={20}
        slidesPerView={3}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="bg-[#f5f5f5] hover:bg-white hover:shadow-sm p-[30px] pt-[60px] rounded-[10px] h-full flex flex-wrap content-between relative  text-left"
            >
            <img className="absolute w-fit top-[-35px] right-12" src={quote} alt="quoteimg" />
              <p className="mb-10 text-[16px] leading-[26px] text-[#868686] text-left">
                {item?.description}
              </p>
              <div className="flex gap-4">
                <img
                  className=" h-15 w-15 rounded-[50%] object-cover"
                  src={item.image}
                  alt={item.text}
                />
                <div>
                  <p className="mb-[10px] text-xl text-[#423F67] font-semibold">
                    {item?.title}
                  </p>
                  <p className="text-[16px] text-black ">{item.position}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          padding: "8px",
          marginTop: "40px",
        }}
      >
        <button className="cursor-pointer group h-15 w-15 flex items-center justify-center border border-[#423F67] bg-transparent hover:bg-[#423F67] swiper-button-prev-custom-t rounded-[10px] px-2 py-1">
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

        <button className="cursor-pointer group h-15 w-15 flex items-center justify-center border border-[#423F67] bg-transparent hover:bg-[#423F67] swiper-button-next-custom-t rounded-[10px] px-2 py-1">
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
    </div>
  );
}

export default TestimonialSwiper;
