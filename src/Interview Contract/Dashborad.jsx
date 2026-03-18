import { useState } from "react";
import Booking from "./MultiStepForm";

export default function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative">
      <section className="relative md:pt-52 pt-32 pb-10 md:pb-0 md:px-10 px-5 mx-auto md:min-h-screen">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./istockphoto-624740220-612x612.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"/>

        {/* Content */}
        {!showForm && (
          <div className="relative max-w-5xl mx-auto text-left bg-black/40 p-10 shadow-xl rounded-lg">

            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">
              Book Your Mock Train <br className="hidden md:block lg:block" /> Driver Interview
            </h1>

            <p className="text-gray-200 mb-6 max-w-xl">
              Practice in a realistic interview environment and get structured
              feedback to improve your performance.
            </p>

            <div className="border-t border-white/30 pt-5 max-w-lg">

              <button
                onClick={() => setShowForm(true)}
                className="px-6 py-3 bg-[#324E91] hover:bg-[#243b70] text-white shadow-lg rounded transition"
              >
                Check Availability
              </button>
            </div>
          </div>
        )}

        {/* Booking Form */}
          {showForm && (
            <div className="md:fixed inset-0 bg-black/70 flex items-center justify-center z-50">

              <div className="relative max-w-xl w-full">

                <button
                  onClick={()=>setShowForm(false)}
                  className="absolute -top-10 right-0 text-white text-xl"
                >
                  ✕
                </button>

                <Booking/>

              </div>

            </div>

          )}
        </section>
    </div>
  );
}
