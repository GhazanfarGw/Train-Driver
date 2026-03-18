import React from "react";

export default function HeroSection() {
  return (
    <div className="relative md:px-10 px-5 py-20 mx-auto">
      <section className="bg-gray-200 md:pt-12 pt-5">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('./Dsc_0007.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto md:py-12 text-left bg-[#000]/40 p-8 shadow">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Frequently Asked Questions
          </h1>

          <p className="text-white/90 mb-6 max-w-xl">
            Have questions? Below are the answers to our most common questions
            about train driver interviews, courses, and mock interviews.
          </p>

          <div className="border-t border-white/30 max-w-3xl mb-6"></div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@traindriverprep.co.uk"
              className="px-6 py-3 bg-[#324E91] text-white shadow text-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}