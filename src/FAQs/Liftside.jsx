import React, { useState } from "react";

/* =========================
   Reusable FAQ Item (Left Side)
========================= */

function SimpleFAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm transition hover:shadow-md">
      <button
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex justify-between items-center"
      >
        <span className="text-[#1F2A44] font-medium text-base md:text-lg">
          {question}
        </span>
        <span
          className={`text-[#324E91] text-xl transition-transform duration-300 ${
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
   Two Column FAQ Section
========================= */

export default function AdditionalFAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const leftFaqs = [
    {
      question: "Do you provide in-person training?",
      answer:
        "No, all our training and mock interviews are conducted online via video call. This approach allows for greater flexibility and accessibility.",
    },
    {
      question:
        "What is covered in the Structured Interview Preparation Course?",
      answer:
        "The course covers the stages of the structured interview, assessment criteria, answer planning using the CLEAR framework, and examples of strong versus weak answers.",
    },
    {
      question: "What do mock train driver interviews involve?",
      answer:
        "Our mock interviews simulate a real structured interview. You will receive professional feedback, performance scoring, and improvement guidance tailored to trainee driver assessments.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F7F8FC] md:py-12 px-5 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ================= LEFT COLUMN ================= */}
        <div className="space-y-6">
          {leftFaqs.map((faq, index) => (
            <SimpleFAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 md:mb-0 mb-10">

          {/* Image */}
          <div
            className="h-56 bg-cover bg-center"
            style={{ backgroundImage: "url('./mock-interview.jpg')" }}
          />

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-semibold text-[#1F2A44] mb-4">
              How are your mock interviews scheduled?
            </h3>

            <ul className="space-y-3 text-[#4A5A7A] text-sm md:text-base">
              <li className="flex items-start gap-3">
                <span className="text-[#324E91] mt-1">✓</span>
                Mock interviews are typically scheduled during the evenings
                or weekends.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#324E91] mt-1">✓</span>
                Candidates can select available time slots.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#324E91] mt-1">✓</span>
                Book a session that suits your availability.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}