import React, { useEffect, useState } from "react";
import rightarrow from "../assets/arrow-right.png";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("xgvzljbp");
  const [showSuccess, setShowSuccess] = useState(false);

  // When form submission succeeds
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000); 

      return () => clearTimeout(timer); // Cleanup on unmount or rerun
    }
  }, [state.succeeded]);

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
              <div className="text-2xl font-bold">
                <a
                  href="mailto:info@businessevolutionai.com"
                  className="hover:underline"
                >
                  info@businessevolutionai.com
                </a>
              </div>

              <div className="text-[#49B0DC] font-semibold text-[18px] mt-10 mb-[15px]">
                CALL US:
              </div>
              <div className="text-2xl font-bold">
                <a href="tel:5615420047" className="hover:underline">
                  561-542-0047
                </a>
              </div>

              <div className="text-[#49B0DC] font-semibold text-[18px] mt-10 mb-[15px]">
                ADDRESS:
              </div>
              <div className="text-2xl font-bold">
                30 N Gould Street
                <br />
                Suite R
                <br />
                Sheridan, WY 82801
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

              {/* Show form only when not succeeded */}

              <form onSubmit={handleSubmit}>
                <div className="md:flex mt-[30px] gap-[15px]">
                  <div className="w-full md:w-1/2">
                    <input
                      id="fname"
                      type="text"
                      name="fname"
                      placeholder="First Name *"
                      required
                      className="border border-[#dcdcdc] rounded-[15px] py-[15px] pl-5 w-full focus:border-[#49B0DC] focus:outline-none transition-colors"
                    />
                    <ValidationError
                      prefix="First Name"
                      field="fname"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1 block"
                    />
                  </div>

                  <div className="w-full md:w-1/2 mt-[15px] md:mt-0">
                    <input
                      id="lname"
                      name="lname"
                      type="text"
                      placeholder="Last Name *"
                      required
                      className="border border-[#dcdcdc] rounded-[15px] py-[15px] pl-5 w-full focus:border-[#49B0DC] focus:outline-none transition-colors"
                    />
                    <ValidationError
                      prefix="Last Name"
                      field="lname"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1 block"
                    />
                  </div>
                </div>

                <div className="mt-[15px]">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    className="border border-[#dcdcdc] rounded-[15px] py-[15px] pl-5 w-full focus:border-[#49B0DC] focus:outline-none transition-colors"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1 block"
                  />
                </div>

                <div className="mt-[15px]">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject *"
                    required
                    className="border border-[#dcdcdc] rounded-[15px] py-[15px] pl-5 w-full focus:border-[#49B0DC] focus:outline-none transition-colors"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1 block"
                  />
                </div>

                <div className="mt-[15px]">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Message *"
                    required
                    className="min-h-[150px] border border-[#dcdcdc] rounded-[15px] py-[15px] pl-5 w-full focus:border-[#49B0DC] focus:outline-none transition-colors resize-vertical"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1 block"
                  />
                </div>

                {/* Display general form errors */}
                {state.errors && state.errors.length > 0 && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-[10px]">
                    <p className="text-red-600 text-sm font-medium">
                      Please fix the following errors:
                    </p>
                  </div>
                )}
                {showSuccess && (
                  <div className="mt-[30px]">
                    <div className="bg-[#49B0DC] text-white text-center py-4 px-6 rounded-[10px] font-medium text-lg transition-opacity duration-500">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="cursor-pointer flex items-center gap-[10px] bg-[#423F67] rounded-[10px] py-[6px] mt-[30px] pl-5 pr-[6px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#3a3658] transition-colors"
                >
                  <span className="text-[17px] font-semibold leading-5 text-white">
                    {state.submitting ? "Sending..." : "Send Message"}
                  </span>
                  <span className="h-12 w-12 flex items-center justify-center rounded-[10px] bg-white">
                    <img
                      className="h-5 w-5 object-contain"
                      alt="rightarrow"
                      src={rightarrow}
                    />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
