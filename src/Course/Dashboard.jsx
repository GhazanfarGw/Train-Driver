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
                    "url('./train.png')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#E6E6F6]/10 backdrop-blur-xs" />

            {/* Content */}
            <div className="relative max-w-6xl mx-auto md:py-12 text-left bg-[#000]/40 p-8 shadow">
                <h1 className="text-3xl md:text-5xl font-semibold text-[#fff] mb-4">
                    Train Driver Interview <br /> Preparation Courses
                </h1>
                <p className="text-[#fff] mb-6 max-w-xl">
                Understand how train driver interviews are assessed, how answers are
                scored, and how to present your experience clearly.
                </p>
                <div className="border-t pb-5 border-[#fff] max-w-3xl border-opacity-30 mx-auto'>
                <div className="/>

                <div className="text-sm text-white mb-6">
                <span className="font-medium">Structured Interview Course</span> <br className="block md:hidden lg:hidden"/>
                <span className="mx-2">•</span>
                <span className="underline text-[#fff]">View Driver Manager Interview Course</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-[#324E91] text-white shadow">
                    View Courses
                </button>
                <button className="px-6 py-3 bg-gray-100 text-[#5079AD] font-bold shadow">
                    Book a Mock Interview
                </button>
                </div>
            </div>
        </section>

    </div>
  );
}