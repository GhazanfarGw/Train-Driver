import React from "react";
import { Clock, MessageSquare, LayoutGrid } from "lucide-react";

export default function MockInterviewService() {
  return (
    <section className="py-16 px-5 md:px-10 bg-[#F5F6FB]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2A44] mb-4">
          Our Mock Interview Service
        </h2>

        <p className="text-[#4A5568] max-w-3xl mb-10">
          We offer independent 1-to-1 online mock interviews for candidates
          applying for trainee train driver roles. All mock interviews are
          conducted by experienced UK train drivers.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-sm border border-gray-200">
            <div className="flex items-start gap-3">
              <LayoutGrid className="text-[#324E91] w-6 h-6 shrink-0 mt-1" size={32} />
              <h3 className="font-semibold text-[#1F2A44] mb-2">
                Structured & Role Specific
              </h3>
            </div>
            <p className="text-sm text-[#4A5568] mt-5">
              Practice either the structured trainee train driver interview or
              the Driver Manager interview.
            </p>
          </div>

          <div className="bg-white p-6 shadow-sm border border-gray-200">
            <div className="flex items-start gap-3">
              <Clock className="text-[#324E91] w-6 h-6 shrink-0 mt-1" size={32} />
              <h3 className="font-semibold text-[#1F2A44] mb-2">
                45–60 Minute Sessions
              </h3>
            </div>
            <p className="text-sm text-[#4A5568] mt-5">
              Practice either the structured trainee train driver interview or
              the Driver Manager interview.
            </p>
          </div>

          <div className="bg-white p-6 shadow-sm border border-gray-200">
            <div className="flex items-start gap-3">
              <MessageSquare className="text-[#324E91] w-6 h-6 shrink-0 mt-1" size={32} />
              <h3 className="font-semibold text-[#1F2A44] mb-2">
                Detailed Feedback & Guidance
              </h3>
            </div>
            <p className="text-sm text-[#4A5568] mt-5">
              Receive personal feedback and guidance on structure, answers,
              interview performance, and scoreable evidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}