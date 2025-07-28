import React, { useState } from "react";
import faqimg from "../assets/faqimg.png";
import faqarrow from "../assets/faqarrow.png";

const faqs = [
  {
    question: "What services does Business Evolution AI provide?",
    answer:
      "We offer comprehensive technology solutions including AI Development, Web Development, Mobile App Development, UI/UX Design, and Cloud & DevOps services. Each service is tailored to meet your specific business needs.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary depending on the scope and complexity. We work with you to establish realistic timelines and milestones. Our agile methodology ensures regular updates and continuous delivery of value.",
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development process that includes requirement gathering, design, development, testing, and deployment. We maintain regular communication with clients and involve them in key decision points throughout the project.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive support and maintenance services. Our team is available 24/7 to handle any issues and ensure your systems run smoothly. We also provide regular updates and improvements to keep your solutions current.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We have a rigorous quality assurance process that includes code reviews, automated testing, and manual testing. Our team follows industry best practices and standards to ensure the highest quality deliverables.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with a wide range of modern technologies including AI/ML frameworks, cloud platforms, mobile development frameworks, and web technologies. We choose the best tools for each project based on requirements and industry standards.",
  },
  // Add more FAQ objects as needed
];
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full p-[100px] faq">
      <div className="flex">
        <div className="w-[40%] pr-[100px]">
          <span
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
            className="inline-block text-xl font-medium text-black py-[10px] px-5 border-b border-[#49B0DC] rounded-[20px] mb-5"
          >
            FAQ
          </span>
          <h2 className="text-5xl leading-[65px] text-black font-semibold mb-10">
            Frequently Asked Questions
          </h2>
          <img
            className="w-full object-cover rounded-[30px]"
            src={faqimg}
            alt="FAQ"
          />
        </div>
        <div className="w-[60%]">
          <div id="faq" data-aos="fade-up" className="w-full ">
            <h2 className="text-semibold text-black text-3xl mb-5">
              General Information
            </h2>

            <div className="w-full">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-[#D9D9D9] rounded-[15px] p-5 transition-all duration-300 mb-[10px] cursor-pointer"
                >
                  <button
                    className="w-full text-left text-sm font-medium text-black flex justify-between items-center cursor-pointer"
                    onClick={() => toggle(index)}
                  >
                    <span className="text-[18px] font-medium">
                      {faq.question.split("UImand")[0]}
                      {faq.question.split("UImand")[1]}
                    </span>
                    <img
                      src={faqarrow}
                      alt="faq_arrow"
                      className={`${openIndex === index ? "rotate-180" : ""}`}
                    />
                    {/* <span className="text-xl">
                      {openIndex === index ? "−" : "+"}
                    </span> */}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-full mt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-[16px] font-medium text-black pt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
