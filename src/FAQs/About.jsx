import React, { useState } from "react";

/* =========================
   Reusable FAQ Item
========================= */

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div
      className={`bg-white rounded-xl border transition-all duration-300 ${
        isOpen
          ? "border-[#324E91] shadow-md"
          : "border-gray-200 shadow-sm hover:shadow-md"
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left px-6 py-5"
      >
        <span className="font-medium text-[#1F2A44] text-base md:text-lg">
          {question}
        </span>

        <span
          className={`text-[#324E91] text-2xl transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6 px-6" : "max-h-0 px-6"
        }`}
      >
        <p className="text-[#4A5A7A] leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

/* =========================
   Main FAQ Page
========================= */

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Do you guarantee a pass?",
      answer:
        "We cannot and do not make any guarantees about passing a trainee train driver interview. We provide guidance and mock interviews based on experience to give you the knowledge and practice to perform at your best during assessments. The outcome of any interview depends on the candidate.",
    },
    {
      question: "Are you affiliated with any train operating companies?",
      answer:
        "No, Train Driver Prep is fully independent and unaffiliated with any train operating company, assessment provider, or recruitment organisation. We offer impartial guidance based on experience only.",
    },
    {
      question: "Do I need previous railway experience to apply?",
      answer:
        "No prior railway experience is required to apply for a trainee train driver role. Train operating companies value customer service, safety-mindedness, decision-making, professionalism, and personal responsibility — attributes that can be gained outside of the railway industry.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F7F8FC]">
      {/* =========================
          FAQ CONTENT SECTION
      ========================= */}
      <section className="md:py-20 px-5 md:px-10 py-12">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold text-[#1F2A44] mb-4">
            Our Mock Interview Service
          </h2>

          <p className="text-[#4A5A7A] max-w-3xl mb-12 leading-relaxed">
            We offer independent 1-to-1 online mock interviews for candidates
            applying for trainee train driver roles. All mock interviews are
            conducted by experienced UK train drivers.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === index}
                onClick={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}