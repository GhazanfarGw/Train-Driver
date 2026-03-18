import React from "react";

export default function HeroSection() {
  return (
    <div className="relative md:px-10 px-5 py-20 mx-auto">
      <section className="bg-gray-200 py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./WhatsApp Image 2026-02-07 at 9.11.53 PM.jpeg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto md:py-12 text-left bg-[#000]/40 p-8 shadow">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Mock Online Train Driver Interviews
          </h1>

          <p className="text-white/90 mb-6 max-w-xl">
            1-to-1 practice for structured and Driver Manager interviews,
            with experienced UK train drivers.
          </p>

          <div className="border-t border-white/30 max-w-3xl mb-6"></div>

          <p className="text-sm text-white/90 mb-6">
            Realistic Interview Practice
            <span className="mx-2">•</span>
            Personalised Feedback
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-[#324E91] text-white shadow">
              <a href="/book-now" className="text-white no-underline">
                Book a Mock Interview
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}