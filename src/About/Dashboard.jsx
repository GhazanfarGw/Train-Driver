import React from "react";

export default function HeroSection() {
  return (
    <div className="relative md:px-10 px-5 py-20 mx-auto">
        <section className="bg-gray-200 py-16">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                backgroundImage:
                    "url('./istockphoto-624740220-612x612.jpg')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

            {/* Content */}
            <div className="relative max-w-6xl mx-auto md:py-12 text-left bg-[#000]/40 p-8 shadow">
                <h1 className="text-3xl md:text-5xl font-semibold text-[#fff] mb-4">
                    About Train Driver Prep
                </h1>
                <p className="text-[#fff] mb-6 max-w-xl">
                Interview preparation and mock interviews for trainee
                train driver roles across the UK, explained properly.
                </p>
                <div className="border-t pb-5 border-[#fff] max-w-3xl border-opacity-30 mx-auto'>
                <div className="/>

                <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-[#324E91] text-white shadow">
                    <a href="/courses" className="text-white no-underline">
                        View Courses
                    </a>
                </button>
                <button className="px-6 py-3 bg-gray-100 text-[#5079AD] font-bold shadow">
                    <a href="/mock-interviews" className="text-[#5079AD] no-underline">
                        Book a Mock Interview
                    </a>
                </button>
                </div>
            </div>
        </section>

    </div>
  );
}