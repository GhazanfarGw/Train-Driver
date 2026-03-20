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

export default function TermsConditions() {

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
                {Array.from({ length: 15 }, (_, i) => (
                  <li key={i}>
                    <a href={`#section-${i + 1}`} className="hover:text-blue-600">
                      Section {i + 1}
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
                    Terms & Conditions
                  </h1>
                  <p className="text-sm text-gray-500">Last updated: 20 March 2026</p>
                </div>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                These Terms & Conditions govern your use of the Train Driver Prep Ltd
                website and services. By accessing our website or purchasing any of
                our products or services, you agree to be bound by these terms.
              </p>

              <div id="section-1"><Section title="1. About Us">
                <p>
                  Train Driver Prep Ltd provides interview preparation courses,
                  application support, and mock interview services for trainee train
                  driver applicants.
                </p>
                <p>Email: info@traindriverprep.co.uk</p>
              </Section></div>

              <div id="section-2"><Section title="2. Services Provided">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Digital interview preparation courses</li>
                  <li>Educational video content</li>
                  <li>Application support guidance</li>
                  <li>Mock interview sessions</li>
                </ul>
              </Section></div>

              <div id="section-3"><Section title="3. No Guarantee of Employment">
                <p>
                  We are independent and not affiliated with any Train Operating
                  Company. We do not guarantee employment, interview success, or job
                  offers.
                </p>
              </Section></div>

              <div id="section-4"><Section title="4. Eligibility">
                <ul className="list-disc pl-5 space-y-1">
                  <li>You must be at least 18 years old</li>
                  <li>You must be legally capable of entering a contract</li>
                  <li>You must provide accurate information</li>
                </ul>
              </Section></div>

              <div id="section-5"><Section title="5. Purchases & Payments">
                <ul className="list-disc pl-5 space-y-1">
                  <li>All prices are in GBP (£)</li>
                  <li>Full payment required at purchase</li>
                  <li>Secure third-party payment processing</li>
                </ul>
              </Section></div>

              <div id="section-6"><Section title="6. Digital Products">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Personal use only</li>
                  <li>No sharing or reselling</li>
                  <li>Violations may result in revoked access</li>
                </ul>
              </Section></div>

              <div id="section-7"><Section title="7. Mock Interviews">
                <p>
                  Sessions must be booked in advance. Missed sessions may not be
                  refundable.
                </p>
              </Section></div>

              <div id="section-8"><Section title="8. Refund Policy">
                <p>
                  Digital products are non-refundable once accessed. Mock interviews
                  may be rescheduled at our discretion.
                </p>
              </Section></div>

              <div id="section-9"><Section title="9. Intellectual Property">
                <p>
                  All content including videos, text, branding, and materials are owned
                  by Train Driver Prep Ltd.
                </p>
              </Section></div>

              <div id="section-10"><Section title="10. Website Use">
                <ul className="list-disc pl-5 space-y-1">
                  <li>No misuse or hacking attempts</li>
                  <li>No malicious uploads</li>
                  <li>No interference with functionality</li>
                </ul>
              </Section></div>

              <div id="section-11"><Section title="11. Limitation of Liability">
                <p>
                  We are not liable for indirect losses. Liability is limited to the
                  amount paid.
                </p>
              </Section></div>

              <div id="section-12"><Section title="12. External Links">
                <p>
                  We are not responsible for third-party website content or privacy
                  practices.
                </p>
              </Section></div>

              <div id="section-13"><Section title="13. Changes to Terms">
                <p>
                  We may update these terms at any time. Continued use means
                  acceptance.
                </p>
              </Section></div>

              <div id="section-14"><Section title="14. Governing Law">
                <p>These terms are governed by the laws of England and Wales.</p>
              </Section></div>

              <div id="section-15"><Section title="15. Contact Us">
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
