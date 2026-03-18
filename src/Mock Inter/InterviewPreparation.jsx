import React from "react";

function InterviewPreparation() {
  return (
    <section className="w-full bg-[#ECE9F4] md:py-16 py-12 px-4">

      {/* Heading */}
      <div className="max-w-6xl mx-auto md:text-center border-b border-gray-300 pb-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2D4A] leading-tight">
          What to Expect in a Mock Interview
        </h2>

        <div className="w-16 h-1 md:mx-auto bg-[#243A6B] mt-6 mb-8 rounded"></div>

        <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          Train Driver Prep mocks replicate the structure, pressure, and follow-up
          questioning of trainee train driver interviews — helping you understand
          what answers score well and how to handle difficult, safety-critical
          situations.
        </p>
      </div>


      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:mt-10 mt-5">

        {/* CARD 1 */}
        <div className="bg-white shadow-sm overflow-hidden border">

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
            <div className="relative max-w-sm">

              <h3 className="text-lg font-semibold text-[#2E4C86] mb-3">
                Mock Structured Interview
              </h3>

              <ul className="text-gray-700 text-sm space-y-2">

                <li>✔ Structured answer planning and assessment.</li>

                <li>✔ Based on real assessment criteria.</li>

                <li>✔ CLEAR approach feedback</li>

              </ul>

            </div>

          </div>

        </div>



        {/* CARD 2 */}
        <div className="bg-white shadow-sm overflow-hidden border">

          <div className="relative p-6 min-h-[220px]">

            {/* Image */}
            <img
              src="/WhatsApp Image 2026-02-07 at 9.11.44 PM.jpeg"
              alt="Interview"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>


            {/* Content */}
            <div className="relative max-w-sm">

              <h3 className="text-lg font-semibold text-[#B9772E] mb-3">
                Mock Driver Manager Interview
              </h3>

              <ul className="text-gray-700 text-sm space-y-2">

                <li>✔ Interview length and focus vary by company</li>

                <li>✔ Emphasis on your motivations for the role</li>

                <li>✔ Feedback on attitude, benefits and professionalism</li>

              </ul>

            </div>

          </div>

        </div>

      </div>


      {/* Button */}
      <div className="text-center mt-10">

        <button className="bg-[#2E4C86] text-white px-8 py-3 shadow hover:opacity-90">
            <a href="/book-now" className="text-white no-underline">
              Book a Mock Interview
            </a>
        </button>

      </div>


    </section>
  );
}

export default InterviewPreparation;