import { useState } from "react";

export default function StepCourse({ formData, setFormData, next, back }) {
  const [error, setError] = useState("");

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
    <div className="space-y-6 py-12 bg-[#ECE9F4] p-4 px-5 md:px-10">
      <div>
        <h2 className="text-lg font-semibold text-[#1F2D4A]">
          Check Availability
        </h2>

        <p className="text-sm text-gray-400">Step 3 of 4</p>

        <div className="w-full bg-slate-700 h-2 rounded mt-2">
          <div className="bg-blue-500 h-2 rounded w-3/4"></div>
        </div>
      </div>

      <h2 className="font-bold text-xl text-[#1F2D4A]">Select Course</h2>

      <div className="md:grid md:grid-cols-2 md:gap-6">

        {/* Structured Interview */}
        <div
          onClick={() =>
            selectCourse({
              name: "Structured Interview",
              duration: "45 mins",
              price: 49.99,
            })
          }
          className={`cursor-pointer overflow-hidden border-4
          ${
            formData.course?.name === "Structured Interview"
              ? "border-[#324E91]"
              : "border-[#ECE9F4]"
          }
          hover:scale-105 transition transform duration-200`}
        >
          <img
            src="./WhatsApp Image 2026-02-07 at 9.11.53 PM.jpeg"
            alt="Structured Interview"
            className="h-32 w-full object-cover"
          />

          <div className="p-3 bg-white py-8">
            <h3 className="text-lg font-bold">Structured Interview</h3>

            <span className="text-sm text-gray-400 flex items-center">
              45 mins
              <p className="text-xl text-[#324E91] pl-2 font-bold">
                £49.99
              </p>
            </span>
          </div>
        </div>

        {/* Driver Manager Interview */}
        <div
          onClick={() =>
            selectCourse({
              name: "Driver Manager Interview",
              duration: "60 mins",
              price: 99.99,
            })
          }
          className={`cursor-pointer overflow-hidden pt-5 md:pt-0 border-4
          ${
            formData.course?.name === "Driver Manager Interview"
              ? "border-[#324E91]"
              : "border-[#ECE9F4]"
          }
          hover:scale-105 transition transform duration-200`}
        >
          <img
            src="./Screenshot_1.png"
            alt="Driver Manager Interview"
            className="h-32 w-full object-cover"
          />

          <div className="p-3 bg-white py-8">
            <h3 className="text-lg font-bold">Driver Manager Interview</h3>

            <span className="text-sm text-gray-400 flex items-center">
              60 mins
              <p className="text-xl text-[#324E91] pl-2 font-bold">
                £99.99
              </p>
            </span>
          </div>
        </div>
      </div>

      {error && <p className="text-red-400">{error}</p>}

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={back}
          className="flex-1 bg-white text-[#1F2D4A] p-3"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="flex-1 bg-[#324E91] p-3 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}