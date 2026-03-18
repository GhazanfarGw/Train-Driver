import React from "react";
function WhoCoursesFor() {
  return (
    <section className="w-full bg-[#EEF1F6] md:py-16 py-12 md:px-10 px-5">

      {/* Heading */}
      <div className="max-w-6xl mx-auto md:text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2D4A] leading-tight">
          Our Experience in Train <br className="block md:hidden lg:hidden"/>Driving & Recruitment
        </h2>
        <div className="w-16 h-1 md:text-center md:mx-auto bg-[#243A6B] mt-6 mb-8 rounded"></div>
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mt-10 items-center">
        {/* LEFT LIST */}
        <div className="bg-white items-center shadow-sm border md:pt-12 pt-6 p-6 min-h-[250px]">
          <p>We thrive experienced ur train drivers as at: affiliated with any train operating:</p> <br />
          <ul className="space-y-4 text-gray-700 text-sm md:text-base">
            <li className="flex items-center gap-3">
              <p className="text-[#2E4C86] font-bold text-xl">✓</p>
                Understanding of safety-critical roles.
            </li>

            <li className="flex items-center gap-3">
              <p className="text-[#2E4C86] font-bold text-xl">✓</p>
                Experience with Structured Interviews.
            </li>

            <li className="flex items-center gap-3">
              <p className="text-[#2E4C86] font-bold text-xl">✓</p>
                Licence-holding & Driver Manager Interviews
            </li>

            <li className="flex items-center gap-3">
              <p className="text-[#2E4C86] font-bold text-xl">✓</p>
              Rules, procedures & safe operating practices
            </li>

          </ul>
        </div>

        {/* RIGHT MESSAGE CARD */}
        <div className="relative items-center overflow-hidden shadow-sm border min-h-[250px]">
          
          {/* Background Image */}
          <img
            src="/1520216729438.jpg"
            alt="Founders message"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>

          {/* Content */}
          <div className="relative p-6 md:pt-12 pt-6 max-w-md">
            <h3 className="text-lg md:text-xl font-semibold text-[#243A6B]">
              Founder’s Message
            </h3>

            <p className="mt-2 text-gray-700 text-sm leading-relaxed">
              Train Driver Prep was created to explain how trainee train driver
              interviews work, and help candidates perform at their best during
              long, detailed interviews.
              <br /> <br />
              The aim is to reduce uncertainty, help candidates understand how performance is assessed, and allow them to present their experience clearly and professionally.

              <br />
              <br />
              Train Driver Prep Founder
            </p>
          </div>
        </div>
      </div>
              {/* Disclaimer Section */}

        <div className="max-w-6xl mx-auto border-t border-gray-300 mt-14 pt-8">
          <h3 className="text-xl font-semibold text-[#1F2D4A] mb-4">
            Important Disclaimer
          </h3>
                      <div className="items-center">
              <ul className="space-y-4 text-gray-700 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <p className="text-[#2E4C86] font-bold text-xl">✓</p>
                    New trainee train driver applicants
                </li>

                <li className="flex items-center gap-3">
                  <p className="text-[#2E4C86] font-bold text-xl">✓</p>
                  Candidates reapplying after an interview
                </li>

                <li className="flex items-center gap-3">
                  <p className="text-[#2E4C86] font-bold text-xl">✓</p>
                  Confident candidates who struggle with clear answer structure
                </li>

              </ul>
            </div>

        </div>
    </section>
  );
}

export default WhoCoursesFor;