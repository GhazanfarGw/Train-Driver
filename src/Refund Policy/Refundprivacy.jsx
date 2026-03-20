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

export default function RefundPolicy() {

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
                  "Digital Products",
                  "Mock Interview Sessions",
                  "Exceptional Circumstances",
                  "How to Request",
                  "Chargebacks",
                  "Policy Changes"
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
                    Refund Policy
                  </h1>
                  <p className="text-sm text-gray-500">Last updated: 20 March 2026</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                This Refund Policy explains how refunds are handled for products and services purchased from Train Driver Prep Ltd.
                By purchasing from our website, you agree to this Refund Policy.
              </p>

              <div id="section-1"><Section title="1. Digital Products">
                <p>Due to the nature of digital content:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>All digital products are non-refundable once accessed</li>
                  <li>This includes videos, interview content, and materials</li>
                </ul>
                <p>Once accessed or downloaded, refunds cannot be issued.</p>
              </Section></div>

              <div id="section-2"><Section title="2. Mock Interview Sessions">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Advance booking required</li>
                  <li>Notice required if unable to attend</li>
                  <li>May offer reschedule or refund at discretion</li>
                </ul>
                <p>Missed sessions without notice are non-refundable.</p>
              </Section></div>

              <div id="section-3"><Section title="3. Exceptional Circumstances">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Technical issues preventing access</li>
                  <li>Service errors caused by us</li>
                </ul>
                <p>All such refunds are at our discretion.</p>
              </Section></div>

              <div id="section-4"><Section title="4. How to Request a Refund">
                <p>Email: info@traindriverprep.co.uk</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Full name</li>
                  <li>Email used for purchase</li>
                  <li>Order details</li>
                </ul>
              </Section></div>

              <div id="section-5"><Section title="5. Chargebacks & Disputes">
                <p>
                  Initiating a chargeback without contacting us may result in
                  suspension of access during investigation.
                </p>
              </Section></div>

              <div id="section-6"><Section title="6. Changes to This Policy">
                <p>We may update this policy at any time.</p>
              </Section></div>

            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}