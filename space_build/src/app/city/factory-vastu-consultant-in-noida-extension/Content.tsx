// components/WeddingPageContent.js
import React from "react";

import LandingEnquiry from "@/components/LandingEnquiry";
import PostNavigation from "@/components/PostNavigation";

const Content = () => {
  return (
    <div className="min-h-screen bg-[#FFF2EB] pt-15">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          {/* Main Heading */}
          

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Noida Extension (Greater Noida West), Uttar Pradesh has developed into a powerful industrial and business hub, attracting manufacturers, warehouses, and production units across diverse sectors. With its excellent connectivity to Delhi, Ghaziabad, and Greater Noida, the region is a preferred choice for setting up factories and industrial plants. But even with advanced technology and planning, many factory owners face issues like production delays, labor unrest, financial instability, or frequent breakdowns.
            </p>
            <p>
              Often, these problems arise due to imbalances in factory layout and energy flow. That is where Vasterior, a trusted Factory Vastu Consultant in Noida Extension, provides expert guidance. By blending Vastu Shastra principles with modern industrial planning, we help factories achieve efficiency, profitability, and long-term stability.
            </p>

            {/* Why Factories Need Vastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Factories Need Vastu Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Production Efficiency</strong> - Machine placement, workflow direction, and energy flow directly impact manufacturing output.</li>
              <li><strong>Financial Stability</strong> - Incorrect positioning of the main gate, accounts section, or cash counters can disrupt financial consistency.</li>
              <li><strong>Labor & Workforce Harmony</strong> - A well-aligned layout fosters teamwork, reduces conflicts, and improves productivity.</li>
              <li><strong>Reduced Losses & Breakdowns</strong> - Balanced energy in storage, machinery, and utilities ensures smoother operations.</li>
              <li><strong>Long-Term Growth</strong> - Vastu-aligned factories are more resilient to challenges and sustain profitability.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Factory Vastu Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏭 Factory Layout Planning</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Directional planning for production zones.</li>
                  <li>Correct positioning of raw material and finished goods areas.</li>
                  <li>Machine alignment for maximum efficiency.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">⚙️ Machinery & Equipment Placement</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Heavy machinery placement in correct zones.</li>
                  <li>Balanced arrangement of boilers, furnaces, and generators.</li>
                  <li>Energy-friendly alignment of utilities to reduce downtime.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Administrative & Office Block</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Placement of management cabins and accounts offices.</li>
                  <li>Reception alignment to welcome opportunities.</li>
                  <li>Conference room design for successful decision-making.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🚚 Storage & Dispatch Area</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Correct positioning of godowns and warehouses.</li>
                  <li>Placement of loading/unloading zones to reduce delays.</li>
                  <li>Flow optimization from raw materials to finished goods.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Non-Demolition Remedies for Factories</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use of pyramids, crystals, and mirrors to correct imbalances.</li>
                  <li>Color therapy for walls, cabins, and sections.</li>
                  <li>Element balancing for smoother energy flow.</li>
                </ul>
              </div>
            </div>

            {/* Why Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Best Choice for Factory Vastu in Noida Extension
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Industrial Expertise</strong> – Proven experience across manufacturing units and warehouses.</li>
              <li><strong>Practical & Affordable Remedies</strong> – No costly demolitions, only logical corrections.</li>
              <li><strong>Local Knowledge</strong> – Familiarity with Noida Extension&apos;s industrial clusters and layouts.</li>
              <li><strong>Flexible Consultation Options</strong> – On-site visits and virtual guidance available.</li>
              <li><strong>Trusted by Business Owners</strong> – Factories report improved efficiency and financial growth after consultation.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Factory Vastu Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Higher Productivity</strong> – Workers perform better in balanced environments.</li>
              <li><strong>Improved Profits</strong> – Better cash flow and financial stability.</li>
              <li><strong>Employee Satisfaction</strong> – Reduced conflicts and smoother operations.</li>
              <li><strong>Fewer Breakdowns</strong> – Machinery functions more efficiently.</li>
              <li><strong>Business Growth</strong> – Long-term expansion and stronger market presence.</li>
            </ul>

            {/* Consultation Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process of Factory Vastu Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Consultation</strong> – Understanding challenges in production or management.</li>
              <li><strong>Factory Visit / Layout Study</strong> – On-site or digital blueprint analysis.</li>
              <li><strong>Customized Recommendations</strong> – Tailored solutions for your factory setup.</li>
              <li><strong>Implementation Guidance</strong> – Step-by-step corrections and remedies.</li>
              <li><strong>Follow-Up Support</strong> – Ensuring results are consistent and long-lasting.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Factory Owners in Noida Extension
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our packaging unit faced frequent machine breakdowns. Vasterior&apos;s Vastu remedies reduced downtime drastically.&quot; – Factory Owner, Techzone.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;The accounts department and main gate alignment corrections improved our cash flow within months.&quot; – Industrialist, Greater Noida West.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior&apos;s factory consultation gave us practical solutions without stopping production. Highly recommended.&quot; – Manufacturer, Sector 4.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Factory Vastu Consultant in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Is Vastu relevant for modern factories with heavy machinery?</h3>
                <p>Yes, Vastu principles adapt well to modern industries, improving efficiency and profits.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do I need to reconstruct my factory for Vastu compliance?</h3>
                <p>No, most remedies are non-demolition solutions like placements, colors, and energy tools.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can Vastu reduce machine breakdowns?</h3>
                <p>Yes, correct placement of machinery and energy alignment minimizes frequent failures.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide services only in Noida Extension?</h3>
                <p>While we specialize in Noida Extension, we also serve across Uttar Pradesh and India.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Do you offer online consultations for factories?</h3>
                <p>Yes, both on-site visits and virtual consultations are available.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In the competitive industrial landscape of Noida Extension, Uttar Pradesh, smooth operations and profitability depend not only on skilled labor and technology but also on the energy balance of the factory layout.
            </p>
            <p className="mt-4">
              With Vasterior&apos;s Factory Vastu Consultation, your manufacturing unit gains stability, growth, and harmony. From machine placement to warehouse alignment, our practical, affordable solutions ensure your factory runs at its full potential.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Factory Vastu Consultant in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gmail.com</p>
            </div>
          </div>
          <PostNavigation slug="factory-vastu-consultant-in-noida-extension" />
        </div>

        {/* Form Section - Smart positioning with CSS order */}
        <div className="w-full lg:w-[450px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;