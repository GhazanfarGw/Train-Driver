// steps/StepDate.jsx

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function StepDate({ formData, setFormData, next, back }) {

  const [selectedDate, setSelectedDate] = useState(formData.date || null);

  const [selectedTime, setSelectedTime] = useState(formData.time || null);

  const [error, setError] = useState("");

  // Example time availability logic
  const timeSlots = {
    Monday: ["10:00 AM", "11:00 AM", "1:00 PM"],
    Tuesday: ["11:00 AM", "2:00 PM"],
    Wednesday: ["10:00 AM", "12:00 PM", "3:00 PM"],
    Thursday: ["9:00 AM", "11:00 AM"],
    Friday: ["1:00 PM", "4:00 PM"]
  };

  const getDayName = (date) => {
    return date?.toLocaleDateString("en-US", { weekday: "long" });
  };

  const availableTimes = selectedDate
    ? timeSlots[getDayName(selectedDate)] || []
    : [];

  const handleNext = () => {

    if (!selectedDate || !selectedTime) {
      setError("Please select date and time.");
      return;
    }

    setError("");

    setFormData({
      ...formData,
      date: selectedDate,
      time: selectedTime
    });

    next();
  };

  return (
    <div className="md:space-y-6 space-y-4 py-12 bg-[#ECE9F4] md:p-4 px-5 md:px-10">

      {/* Header */}
      <div>
        <h2 className="text-lg font-semibold text-[#1F2D4A]">
          Check Availability
        </h2>

        <p className="text-sm text-gray-400">
          Step 2 of 4
        </p>

        <div className="w-full bg-slate-700 h-2 rounded mt-2">
          <div className="bg-blue-500 h-2 rounded w-2/4"></div>
        </div>
      </div>

      {/* Calendar */}
      <div className="md:bg-white md:p-4 w-full mx-auto justify-center">

        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />

      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div>

          <h3 className="text-[#1F2D4A] mb-3">
            Available Times
          </h3>

          <div className="grid grid-cols-3 gap-3">

            {availableTimes.length > 0 ? (
              availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg text-sm
                  ${
                    selectedTime === time
                      ? "bg-[#324E91] text-white"
                      : "bg-white text-[#1F2D4A] hover:bg-slate-200"
                  }`}
                >
                  {time}
                </button>
              ))
            ) : (
              <p className="text-gray-400">
                No times available for this day
              </p>
            )}

          </div>

        </div>
      )}

      {error && (
        <p className="text-red-400">
          {error}
        </p>
      )}

      {/* Buttons */}
      <div className="flex gap-4">

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