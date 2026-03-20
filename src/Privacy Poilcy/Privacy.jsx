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

export default function PrivacyPolicy() {

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
                  "Who We Are",
                  "Data We Collect",
                  "How We Use Data",
                  "Legal Basis",
                  "Payments & Security",
                  "Data Storage",
                  "Cookies",
                  "Third Parties",
                  "Your Rights",
                  "Children",
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
                    Privacy Policy & Data Protection
                  </h1>
                  <p className="text-sm text-gray-500">Last updated: 20 March 2026</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                Train Driver Prep Ltd is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal data.
              </p>

              <div id="section-1"><Section title="1. Who We Are">
                <p>Train Driver Prep Ltd provides interview preparation services.</p>
                <p>Email: support@traindriverprep.co.uk</p>
              </Section></div>

              <div id="section-2"><Section title="2. Personal Data We Collect">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Payment details</li>
                  <li>Booking information</li>
                  <li>Contact form data</li>
                </ul>
              </Section></div>

              <div id="section-3"><Section title="3. How We Use Your Data">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Provide courses and services</li>
                  <li>Process payments</li>
                  <li>Customer communication</li>
                  <li>Improve services</li>
                </ul>
                <p>We do not sell your data.</p>
              </Section></div>

              <div id="section-4"><Section title="4. Legal Basis for Processing">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Contractual necessity</li>
                  <li>Legitimate interests</li>
                  <li>Legal obligations</li>
                </ul>
              </Section></div>

              <div id="section-5"><Section title="5. Payment Information & Security">
                <p>Payments are securely processed by third-party providers. We do not store card details.</p>
              </Section></div>

              <div id="section-6"><Section title="6. Data Storage & Retention">
                <p>Data is stored securely and deleted when no longer needed.</p>
              </Section></div>

              <div id="section-7"><Section title="7. Use of Cookies">
                <p>We use cookies to improve experience and functionality.</p>
              </Section></div>

              <div id="section-8"><Section title="8. Third-Party Services">
                <p>We use trusted providers for payments, hosting, and communication.</p>
              </Section></div>

              <div id="section-9"><Section title="9. Your Data Protection Rights">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Access your data</li>
                  <li>Request correction</li>
                  <li>Request deletion</li>
                  <li>Restrict processing</li>
                  <li>Data portability</li>
                </ul>
              </Section></div>

              <div id="section-10"><Section title="10. Children’s Data">
                <p>We do not collect data from users under 18.</p>
              </Section></div>

              <div id="section-11"><Section title="11. Changes to This Policy">
                <p>This policy may be updated at any time.</p>
              </Section></div>

              <div id="section-12"><Section title="12. Contact Us">
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