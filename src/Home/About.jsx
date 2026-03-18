import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full bg-[#F4F6FA] md:py-24 py-12 md:px-10 px-5 overflow-hidden">

      {/* Soft background accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#243A6B]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
            {/* IMAGE SIDE */}
        <div
            className="relative group md:hidden lg:hidden block"
            data-aos="fade-left"
        >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#243A6B]/20 to-transparent rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition"></div>

            <img
              src="/Screenshot_2.png"
              alt="Interview preparation guidance"
              className="relative md:rounded-xl shadow-xl w-full object-cover"
            />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT SIDE */}
          <div data-aos="fade-up">

            <p className="text-sm uppercase tracking-widest text-[#243A6B] font-medium md:pt-0 pt-5 mb-4">
              Interview Preparation
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2D4A] leading-tight">
              Our Approach to <br />
              Structured & Driver Manager Interviews
            </h2>

            <div className="w-16 h-1 bg-[#243A6B] mt-6 mb-8 rounded"></div>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              We offer clear and structured support to help you confidently prepare for the structured interview and Driver Manager interview stages of the trainee train driver recruitment process.
            </p>

            <p className="text-gray-600 text-base leading-relaxed">
              Our method is practical, honest, and built on real experience, helping you develop the understanding and mindset needed to perform at your best without relying on memorised answers or false expectations.
            </p>

          </div>

          {/* IMAGE SIDE */}
          <div
            className="relative group hidden md:block lg:block"
            data-aos="fade-left"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#243A6B]/20 to-transparent rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition"></div>

            <img
              src="/Screenshot_2.png"
              alt="Interview preparation guidance"
              className="relative rounded-xl shadow-xl w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;