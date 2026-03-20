import React from "react";
import { BookOpen, ClipboardCheck, Brain, FileText } from "lucide-react";

const courses = [
  {
    title: "Structured Interview Preparation Course",
    description:
      "A structured interview preparation course designed for candidates applying for UK train driver roles.",
    price: "£49.99",
    color: "#2E4C86",
    icon: <BookOpen size={28} />,
  },
  {
    title: "Driver Manager Interview Preparation Course",
    description:
      "Designed for candidates attending a Train Driver Manager Interview.",
    price: "£49.99",
    color: "#2E4C86",
    icon: <ClipboardCheck size={28} />,
  },
  {
    title: "Train Driver Assessment Preparation Guide",
    description:
      "Helps candidates prepare for psychometric assessments with practical tips.",
    price: "£14.99",
    color: "#B9772E",
    icon: <Brain size={28} />,
    fade: true,
  },
  {
    title: "Train Driver Application Preparation Workbook",
    description:
      "A practical workbook to help candidates complete strong applications.",
    price: "£14.99",
    color: "#B9772E",
    icon: <FileText size={28} />,
    fade: true,
  },
];

function InterviewPreparation() {
  return (
    <section className="w-full md:py-40 py-20 md:px-10 px-5 bg-[#ECE9F4]">
      
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center pt-10">
        <h2 className="text-2xl md:text-4xl font-bold text-[#2E4C86]">
          Interview Preparation Resources
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
          Explore our professionally designed courses and guides to help you
          succeed in train driver recruitment.
        </p>

        <div className="w-20 h-1 bg-[#2E4C86] mx-auto mt-4"></div>
      </div>

      {/* Space */}
      <div className="mt-12"></div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border rounded-xl p-6"
          >
            {/* Icon */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-lg mb-4"
              style={{ backgroundColor: course.color, color: "white" }}
            >
              {course.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              {course.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {course.description}
            </p>

            {/* Price */}
            <p
              className="mt-4 text-lg font-bold"
              style={{ color: course.color }}
            >
              {course.price}
            </p>

            {/* Button */}
            <a
              href="/book-now"
              className="inline-block mt-4 px-5 py-2 text-white shadow hover:opacity-90 rounded-md"
              style={{ backgroundColor: course.color }}
            >
              Book Now
            </a>
          </div>
        ))}
      </div>

    </section>
  );
}

export default InterviewPreparation;