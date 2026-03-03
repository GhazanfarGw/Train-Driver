import React from "react";
import { ShieldCheck, UserCheck, ListChecks, BadgeCheck } from "lucide-react";

export default function OurApproach() {
  return (
    <section className="py-16 px-5 md:px-10 bg-[#ECE9F4]">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1F2D4A] mb-4">
          Our Approach to Interview Preparation
        </h2>

        <div className="w-16 h-1 bg-[#243A6B] mb-6 rounded"></div>


        {/* Intro Text */}
        <p className="text-gray-600 max-w-3xl mb-4 text-sm md:text-base">
          Train Driver Prep is completely independent and unaffiliated with
          any train operating company or assessment provider.
        </p>

        <p className="text-gray-600 max-w-3xl mb-10 text-sm md:text-base">
          All guidance is based on experience and designed to compliment
          personal preparation.
        </p>


        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 border shadow-sm">
            <ShieldCheck className="text-[#324E91] w-10 h-10 mt-1" />

            <div>
              <h3 className="font-semibold text-[#1F2D4A] mb-2 mt-5">
                Independent & Unaffiliated
              </h3>

              <p className="text-sm text-gray-600">
                We focus purely on candidate preparation.
              </p>
            </div>
          </div>


          {/* Card 2 */}
          <div className="bg-white p-6 border shadow-sm">

            <UserCheck className="text-[#324E91] w-10 h-10 mt-1" />

            <div>

              <h3 className="font-semibold text-[#1F2D4A] mb-2 mt-5">
                Behaviour Over Background
              </h3>

              <p className="text-sm text-gray-600">
                We focus on behaviour, decisions, and safety mindset.
              </p>

            </div>

          </div>


          {/* Card 3 */}
          <div className="bg-white p-6 border shadow-sm">

            <ListChecks className="text-[#324E91] w-10 h-10 mt-1" />

            <div>

              <h3 className="font-semibold text-[#1F2D4A] mb-2 mt-5">
                Structure Without Scripts
              </h3>

              <p className="text-sm text-gray-600">
                We help candidates explain decisions clearly.
              </p>

            </div>

          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 border shadow-sm">

            <BadgeCheck className="text-[#324E91] w-10 h-10 mt-1" />

            <div>

              <h3 className="font-semibold text-[#1F2D4A] mb-2 mt-5">
                Ethical & Professional
              </h3>

              <p className="text-sm text-gray-600">
                Respectful, realistic and honest guidance.
              </p>

            </div>

          </div>


        </div>


      </div>

    </section>
  );
}