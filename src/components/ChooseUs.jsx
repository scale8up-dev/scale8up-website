import React, { useEffect, useRef, useState } from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

const stats = [
  { number: 50, label: "Happy Clients" },
  { number: 50, label: "Projects Completed" },
  { number: 2500, label: "Hours Of Support" },
  { number: 25, label: "Team Members" },
];

export default function ChooseUs() {
  const countersRef = useRef([]);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    countersRef.current.forEach((el) => {
      const target = +el.dataset.target;
      let count = 0;
      const duration = 1000;
      const increment = target / (duration / 20);

      const update = () => {
        count += increment;
        if (count < target) {
          el.innerText = Math.ceil(count).toLocaleString();
          setTimeout(update, 20);
        } else {
          el.innerText = target.toLocaleString();
        }
      };
      update();
    });
  };

  return (
    <div ref={sectionRef} className="bg-white relative py-[110px]">
      <div className="max-w-[1300px] px-5 mx-auto">
        <div className="relative pb-[70px] mb-[70px] text-center border-b">
          <span style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="inline-block text-xl font-medium text-black py-[10px] px-5 border-b border-[#49B0DC] rounded-[20px] mb-5">
            Why choose us?
          </span>
          <h2 className="text-[54px] leading-[65px] text-black font-medium max-w-[960px] mx-auto">
            We combine technical expertise with innovative solutions to deliver
            exceptional results for our clients
          </h2>
        </div>

        <div className="flex justify-between gap-8">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-[80px] font-medium text-black flex items-baseline">
                <span
                  ref={(el) => (countersRef.current[index] = el)}
                  data-target={item.number}
                >
                  0
                </span>
                <span className="text-[#49B0DC] text-6xl ml-1">+</span>
              </h2>
              <p className="mt-2 text-[22px] text-black">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 mt-[70px]">
          <div className="bg-[#F7F6F9] rounded-[15px] p-[30px] border border-[#0000001a]">
            <div className="bg-white rounded-[10px] h-[50px] w-[50px] flex items-center justify-center mb-5">
              <img src={icon1} alt="boxicon" />
            </div>
            <p className="text-[22px] font-medium text-black mb-5">
              Innovation First
            </p>
            <p className="text-[16px] leading-[26px] text-[#868686]">
              We stay at the forefront of technology trends to deliver
              cutting-edge solutions that give you a competitive advantage.
            </p>
          </div>
          <div className="bg-[#F7F6F9] rounded-[15px] p-[30px] border border-[#0000001a]">
            <div className="bg-white rounded-[10px] h-[50px] w-[50px] flex items-center justify-center mb-5">
              <img src={icon2} alt="boxicon" />
            </div>
            <p className="text-[22px] font-medium text-black mb-5">
              Quality Assured
            </p>
            <p className="text-[16px] leading-[26px] text-[#868686]">
              Our rigorous quality assurance processes ensure that every solution we deliver meets the highest standards of excellence.
            </p>
          </div>
          <div className="bg-[#F7F6F9] rounded-[15px] p-[30px] border border-[#0000001a]">
            <div className="bg-white rounded-[10px] h-[50px] w-[50px] flex items-center justify-center mb-5">
              <img src={icon3} alt="boxicon" />
            </div>
            <p className="text-[22px] font-medium text-black mb-5">
              24/7 Support
            </p>
            <p className="text-[16px] leading-[26px] text-[#868686]">
              Our dedicated support team is always ready to help you, ensuring your business operations run smoothly around the clock.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
