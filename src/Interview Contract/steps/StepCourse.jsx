import { useState } from "react";
import {
  BookOpen,
  ClipboardCheck,
  Brain,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function StepCourse({ formData, setFormData, next, back }) {
  const [error, setError] = useState("");

  const courses = [
    {
      name: "Structured Interview Preparation Course",
      duration: "45 mins",
      price: 49.99,
      icon: <BookOpen size={24} />,
      color: "#324E91",
      badge: "Popular",
    },
    {
      name: "Driver Manager Interview Preparation Course",
      duration: "60 mins",
      price: 49.99,
      icon: <ClipboardCheck size={24} />,
      color: "#324E91",
    },
    {
      name: "Train Driver Assessment Preparation Guide",
      duration: "Self-paced",
      price: 14.99,
      icon: <Brain size={24} />,
      color: "#B9772E",
    },
    {
      name: "Train Driver Application Preparation Workbook",
      duration: "Self-paced",
      price: 14.99,
      icon: <FileText size={24} />,
      color: "#B9772E",
    },
  ];

  const handleNext = () => {
    if (!formData.course) {
      setError("Please select a course before continuing.");
      return;
    }
    setError("");
    next();
  };

  const selectCourse = (course) => {
    setFormData({ ...formData, course });
  };

  return (
    <div className="space-y-6 py-10 px-4 md:px-10 bg-gradient-to-br from-[#ECE9F4] to-white">
      
      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-[#1F2D4A]">
          Check Availability
        </h2>

        <p className="text-sm text-gray-400">Step 3 of 4</p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded mt-2">
          <div className="bg-[#324E91] h-2 rounded w-3/4"></div>
        </div>
      </div>

      <h2 className="font-bold text-xl text-[#1F2D4A]">
        Select Course
      </h2>

      {/* Courses */}
      <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
        {courses.map((course, index) => {
          const isSelected = formData.course?.name === course.name;

          return (
            <div
              key={index}
              onClick={() => selectCourse(course)}
              className={`relative cursor-pointer p-4 border transition-all duration-300
              ${
                isSelected
                  ? "border-[#324E91] border-4 bg-white shadow-lg scale-[1.02]"
                  : "border-gray-200 bg-white/80 hover:shadow-md"
              }`}
            >
              {/* Badge */}
              {course.badge && (
                <div className="absolute top-2 right-2 text-xs bg-[#B9772E] text-white px-2 py-1 rounded-full">
                  {course.badge}
                </div>
              )}

              {/* Selected Tick */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#324E91] flex items-center justify-center shadow-md">
                  <CheckCircle size={16} className="text-white" />
                </div>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg mb-3"
                style={{
                  backgroundColor: course.color,
                  color: "white",
                }}
              >
                {course.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm md:text-base font-semibold text-gray-800 leading-snug">
                {course.name}
              </h3>

              {/* Info */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs md:text-sm text-gray-500">
                  {course.duration}
                </span>

                <span
                  className="text-sm md:text-lg font-bold"
                  style={{ color: course.color }}
                >
                  £{course.price}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={back}
          className="flex-1 bg-white border border-gray-300 text-[#1F2D4A] p-3 hover:bg-gray-50"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="flex-1 bg-[#324E91] p-3 text-white shadow hover:opacity-90"
        >
          Next
        </button>
      </div>
    </div>
  );
}
