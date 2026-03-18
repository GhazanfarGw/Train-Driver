import React from "react";

function InterviewPreparation() {
  return (
    <section className="w-full bg-[#ECE9F4] md:py-16 py-12 px-4">

      {/* Heading */}
      <div className="max-w-6xl mx-auto md:text-center border-b border-gray-300 pb-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2D4A] leading-tight">
          Our Approach to Interview Preparation
        </h2>
        <div className="w-16 h-1 md:text-center md:mx-auto bg-[#243A6B] mt-6 mb-8 rounded"></div>

        <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          We provide clear, structured guidance to help you understand how to pass the
          structured and Driver Manager interview stages of the trainee train driver
          recruitment process. Our approach is calm, realistic, and based on experience
          — without memorised answers or unrealistic promises.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:mt-10 mt-5">

        {/* CARD 1 */}
        <div className="bg-white shadow-sm overflow-hidden border">
          
          {/* Header Bar */}
          <div className="bg-[#2E4C86] text-white px-6 py-3 font-medium text-sm md:text-base">
            Structured Interview Preparation Course
          </div>

          {/* Body */}
          <div className="relative p-6 min-h-[220px]">

            {/* Image */}
            <img
              src="/WhatsApp Image 2026-02-07 at 9.12.17 PM.jpeg"
              alt="Train"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>

            {/* Content */}
            <div className="relative max-w-xs">
              <p className="text-gray-700 text-sm leading-relaxed">
                Learn how structured interviews are assessed and how to give clear,
                effective answers during long, safety-critical interviews.
              </p>

              <p className="mt-4 text-lg font-semibold text-[#2E4C86]">
                £50 <span className="text-gray-400 font-normal">Introductory Price £80</span>
              </p>

              <button className="mt-4 bg-[#2E4C86] text-white px-5 py-2 shadow hover:opacity-90">
                View Courses
              </button>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white shadow-sm overflow-hidden border">
          
          {/* Header Bar */}
          <div className="bg-[#B9772E] text-white px-6 py-3 font-medium text-sm md:text-base">
            Driver Manager Interview Preparation Course
          </div>

          {/* Body */}
          <div className="relative p-6 h-[220px]">

            {/* Image */}
            <img
              src="/WhatsApp Image 2026-02-07 at 9.11.44 PM.jpeg"
              alt="Interview"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>

            {/* Content */}
            <div className="relative max-w-xs">
              <p className="text-gray-700 text-sm leading-relaxed">
                Prepare professionally for the Driver Manager interview stage of
                trainee train driver recruitment.
              </p>

              <p className="mt-4 text-lg font-semibold text-[#B9772E]">
                £30 ~ £40
              </p>

              <button className="mt-4 bg-[#B9772E] text-white px-5 py-2 shadow hover:opacity-90">
                View Course
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default InterviewPreparation;