import React from "react";

function WhyUseMockInterview() {
  return (
    <section className="w-full bg-[#ECE9F4] md:py-16 py-12 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2D4A] leading-tight">
              Why Use a Mock Interview?
            </h2>

            <div className="w-16 h-1 bg-[#243A6B] mt-6 mb-6 rounded"></div>


            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Mock interviews are a valuable way to practice answering real
              questions under pressure, build confidence, and receive feedback
              from experienced UK train drivers who understand what scores.
            </p>


            <ul className="mt-6 space-y-3 text-gray-700 text-sm md:text-base">

              <li>✔ Understand how certain interview answers score</li>

              <li>✔ Gain clarity on the structure of your answers</li>

              <li>
                ✔ <span className="font-semibold">
                Identify and correct common mistakes
                </span>
              </li>

              <li>
                ✔ <span className="font-semibold">
                Build confidence
                </span> in explaining your experience
              </li>

            </ul>

          </div>


          {/* RIGHT SIDE IMAGE */}
          <div className="bg-white shadow-sm border overflow-hidden rounded">

            <img
              src="/Depositphotos_130582534_l-2015-1080x675.jpg"
              alt="Mock Interview"
              className="w-full h-full object-cover"
            />

          </div>


        </div>



        {/* Disclaimer Section */}

        <div className="border-t border-gray-300 mt-14 pt-8">

          <h3 className="text-xl font-semibold text-[#1F2D4A] mb-4">
            Important Disclaimer
          </h3>


          <p className="text-gray-600 text-sm leading-relaxed">

            Train Driver Prep provides independent mock interview services only.
            Completion of any mock interview does not guarantee success.
            Limited availability to respect the recruitment process.
            Train Driver Prep is not affiliated with any train operating company.

          </p>

        </div>


      </div>

    </section>
  );
}

export default WhyUseMockInterview;