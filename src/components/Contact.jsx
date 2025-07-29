import React from "react";

export default function Contact() {
  return (
    <section className="py-[50px] px-5 xl:p-[50px]" id="contact">
      <div className="w-full bg-white rounded-[20px] py-5 xl:py-[110px]">
        <div className="max-w-[1300px] mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-[#dcdcdc] p-5 xl:p-10 rounded-[20px]">
              <span
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
                className="inline-block text-xl font-medium text-black py-[10px] px-5 border-b border-[#49B0DC] rounded-[20px]"
              >
                Contact
              </span>
              <div className="mt-10 w-full border-t border-[#dcdcdc]"></div>

              <div className="text-[#49B0DC] font-semibold text-[18px] mt-10 mb-[15px]">
                EMAIL US:
              </div>
              <div className="text-2xl font-bold">info@scale8up.com</div>

              <div className="text-[#49B0DC] font-semibold text-[18px] mt-10 mb-[15px]">
                CALL US:
              </div>
              <div className="text-2xl font-bold">+1 5589 55488 55</div>

              <div className="text-[#49B0DC] font-semibold text-[18px] mt-10 mb-[15px]">
                ADDRESS:
              </div>
              <div className="text-2xl font-bold">
                A108 Business Street
                <br />
                New York, NY 535022
                <br />
                United States
              </div>
            </div>

            <div className="border border-[#dcdcdc] py-5 xl:py-[50px] pl-5 pr-5 xl:pl-[30px] xl:pr-[75px] rounded-[20px] ">
              <div className="font-bold text-2xl lg:text-[40px] lg:leading-[50px] mb-5">
                Send us a message
              </div>
              <div className="text-[18px] font-medium ">
                Have a project in mind? Let's discuss how we can help you
                achieve your goals.
              </div>

              <form>
                <div className="md:flex mt-[30px] gap-[15px]">
                  <input type="text" placeholder="First Name *" className="border border-[#dcdcdc] rounded-[15px] py-[15px] pl-5 w-full md:w-1/2"/>
                   <input type="text" placeholder="Last Name *" className="border border-[#dcdcdc] rounded-[15px] py-[15px] mt-[15px] md:mt-0 pl-5 w-full md:w-1/2"/>
                </div>
                 <input type="email" placeholder="Email *" className="border border-[#dcdcdc] rounded-[15px] my-[15px] py-[15px] pl-5 w-full"/>
                 <input type="text" placeholder="subject" className="border border-[#dcdcdc] rounded-[15px] my-[15px] py-[15px] pl-5 w-full"/>
                 <textarea  placeholder="Message" className="min-h-[150px] mb-0 border border-[#dcdcdc] rounded-[15px] my-[15px] py-[15px] pl-5 w-full"/>
                 <button onClick={''} className="cursor-pointer flex items-center gap-[10px] bg-[#423F67] rounded-[10px] py-[6px] mt-[30px] pl-5 pr-[6px]">
                  <span className="text-[17px] font-semibold leading-5 text-white">
                   Send Message
                  </span>
                  <a
                    className="h-12 w-12 flex items-center justify-center rounded-[10px] bg-white"
                    href=""
                  >
                    <img
                      className="h-5 w-5 object-contain"
                      alt="rightarrow"
                      src="/src/assets/arrow-right.png"
                    />
                  </a>
                </button>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
