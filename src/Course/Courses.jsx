import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ClipboardCheck, Brain, FileText } from "lucide-react";

const courses = [
  {
    title: "Structured Interview Preparation Course",
    description:
      "A structured interview preparation course designed for candidates applying for UK train driver roles.",
    price: "£49.99",
    color: "#2E4C86",
    icon: <BookOpen size={26} />,
    badge: "Best Seller",
  },
  {
    title: "Driver Manager Interview Preparation Course",
    description:
      "Designed for candidates attending a Train Driver Manager Interview.",
    price: "£49.99",
    color: "#2E4C86",
    icon: <ClipboardCheck size={26} />,
  },
  {
    title: "Train Driver Assessment Preparation Guide",
    description:
      "Prepare for psychometric assessments with practical tips.",
    price: "£14.99",
    color: "#B9772E",
    icon: <Brain size={26} />,
  },
  {
    title: "Train Driver Application Preparation Workbook",
    description:
      "A practical workbook to help candidates complete strong applications.",
    price: "£14.99",
    color: "#B9772E",
    icon: <FileText size={26} />,
  },
];

function InterviewPreparation() {
  return (
    <section className="w-full bg-gradient-to-b from-[#EEF1F6] to-white md:py-40 py-20 md:px-10 px-5">
      
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center pt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2E4C86]">
          Interview Preparation Resources
        </h2>

        <p className="mt-4 text-gray-600 text-sm md:text-lg leading-relaxed">
          Premium courses and guides to help you succeed in train driver recruitment.
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-[#2E4C86] to-[#B9772E] mx-auto mt-5 rounded-full"></div>
      </div>

      {/* Space */}
      <div className="mt-16"></div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative backdrop-blur-lg bg-white/70 border border-white/40 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Badge */}
            {course.badge && (
              <div className="absolute top-4 right-4 bg-[#B9772E] text-white text-xs px-3 py-1 rounded-full shadow">
                {course.badge}
              </div>
            )}

            {/* Icon */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 shadow"
              style={{
                background: `linear-gradient(135deg, ${course.color}, #00000020)`,
                color: "white",
              }}
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
              className="mt-4 text-xl font-bold"
              style={{ color: course.color }}
            >
              {course.price}
            </p>

            {/* Button */}
            <a
              href="/book-now"
              className="inline-block mt-5 px-6 py-2.5 text-white rounded-lg shadow-md hover:shadow-lg transition"
              style={{
                background: `linear-gradient(135deg, ${course.color}, #00000030)`,
              }}
            >
              Buy Now →
            </a>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default InterviewPreparation;
