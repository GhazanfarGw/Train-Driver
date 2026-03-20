import React, { useEffect } from 'react';
import Header from '../Home/header';
import Footer from '../Home/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Section = ({ title, children }) => (
  <div data-aos="fade-up" className="mb-8 scroll-mt-32">
    <h2 className="md:text-xl font-semibold text-[#1F2D4A] mb-3">{title}</h2>
    <div className="text-gray-700 leading-relaxed md:text-sm text-xs">
      {children}
    </div>
  </div>
);

export default function CookiePolicy() {

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Header />

      <div className="bg-gray-100 py-10 px-4 md:pt-36 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {/* Sidebar */}
          <div className="hidden md:block col-span-1 sticky top-32 h-fit">
            <div className="bg-white shadow-lg rounded-xl p-4">
              <h3 className="font-semibold text-[#1F2D4A] mb-3">Contents</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                {[
                  "What Are Cookies",
                  "How We Use Cookies",
                  "Types of Cookies",
                  "Managing Cookies",
                  "Third-Party Cookies",
                  "Policy Changes",
                  "Contact"
                ].map((item, i) => (
                  <li key={i}>
                    <a href={`#section-${i + 1}`} className="hover:text-blue-600">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12">

              {/* Header */}
              <div className="mb-10 border-b pb-6 flex justify-between items-center">
                <div>
                  <h1 className="md:text-4xl text-2xl font-bold text-[#1F2D4A] mb-2">
                    Cookie Policy
                  </h1>
                  <p className="text-sm text-gray-500">Last updated: 20 March 2026</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                This Cookie Policy explains how Train Driver Prep Ltd uses cookies and similar technologies on our website.
              </p>

              <div id="section-1"><Section title="1. What Are Cookies">
                <p>
                  Cookies are small text files stored on your device when you visit a website. They help websites function correctly and improve user experience.
                </p>
              </Section></div>

              <div id="section-2"><Section title="2. How We Use Cookies">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ensure the website functions properly</li>
                  <li>Improve performance and usability</li>
                  <li>Understand user interaction</li>
                  <li>Enable secure payments and video features</li>
                </ul>
              </Section></div>

              <div id="section-3"><Section title="3. Types of Cookies We Use">
                <p className="font-semibold">Essential Cookies</p>
                <ul className="list-disc pl-5 space-y-1 mb-3">
                  <li>Security cookies</li>
                  <li>Session management</li>
                  <li>Checkout functionality</li>
                </ul>

                <p className="font-semibold">Performance & Analytics Cookies</p>
                <p className="mb-3">Help us understand website usage (no personal identification).</p>

                <p className="font-semibold">Functional Cookies</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Language settings</li>
                  <li>Consent preferences</li>
                </ul>
              </Section></div>

              <div id="section-4"><Section title="4. Managing Cookies">
                <p>
                  You can control or disable cookies via browser settings. Disabling cookies may affect functionality.
                </p>
              </Section></div>

              <div id="section-5"><Section title="5. Third-Party Cookies">
                <p>
                  Third-party services (payments, analytics, video providers) may set cookies governed by their own policies.
                </p>
              </Section></div>

              <div id="section-6"><Section title="6. Changes to This Policy">
                <p>We may update this policy at any time.</p>
              </Section></div>

              <div id="section-7"><Section title="7. Contact Us">
                <p>Email: info@traindriverprep.co.uk</p>
              </Section></div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}