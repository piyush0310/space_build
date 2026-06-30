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
              Noida Extension, also known as Greater Noida West, has emerged as a vibrant hub for offices, startups, and co-working spaces. With its strategic location, affordable infrastructure, and modern facilities, it attracts entrepreneurs, IT firms, and service companies from across India. But beyond technology and business plans, one factor often decides the pace of growth: the energy balance of the office environment.
            </p>
            <p>
              That&apos;s where Vasterior, your trusted Office Vastu Consultant in Noida Extension, Uttar Pradesh, comes in. By applying Vastu Shastra principles in practical and modern ways, we help offices create spaces that improve productivity, reduce stress, and attract prosperity.
            </p>

            {/* Why Offices Need Vastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Do Offices Need Vastu in Noida Extension?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Employee Productivity</h3>
                <p>The positioning of desks, cabins, and meeting rooms influences concentration, teamwork, and creativity.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Business Growth</h3>
                <p>Entrances, cash flow areas, and conference rooms aligned with Vastu encourage steady opportunities and client trust.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Stress Management</h3>
                <p>Balanced workspaces reduce conflicts and promote harmony among employees.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Competitive Advantage</h3>
                <p>With so many businesses setting up in Techzone, Knowledge Park, and Gaur City, a Vastu-aligned office offers a hidden advantage.</p>
              </div>
            </div>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Office Vastu Consultation Services
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🪑 Workstation & Desk Alignment</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Proper seating direction for employees.</li>
                  <li>Placement to avoid distractions and improve focus.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Management & CEO Cabin Placement</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ensuring leadership sits in directions that foster authority and decision-making.</li>
                  <li>Correct positioning of desks and back support.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">📊 Meeting & Conference Rooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Orientation for smooth discussions and successful negotiations.</li>
                  <li>Layout planning to improve communication flow.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">☕ Pantry & Break Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Placement of pantry and refreshment corners to balance fire and water elements.</li>
                  <li>Correct usage of colors for relaxation.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🚪 Office Entrance & Reception</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Reception alignment to create welcoming energy for clients.</li>
                  <li>Entrance positioning to allow positivity and opportunities.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🖼️ Non-Demolition Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use of mirrors, crystals, and pyramids to redirect energy.</li>
                  <li>Color and décor therapy for modern office designs.</li>
                </ul>
              </div>
            </div>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Office Vastu Consultant?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Expertise</strong> – Years of consultation experience in Noida Extension&apos;s office hubs.</li>
              <li><strong>Practical Approach</strong> – Remedies that don&apos;t disrupt daily operations.</li>
              <li><strong>Customized Guidance</strong> – Tailored advice for IT firms, startups, and co-working spaces.</li>
              <li><strong>Trusted by Businesses</strong> – Proven results with improved focus and profitability.</li>
              <li><strong>Flexible Consultation Options</strong> – On-site visits and virtual sessions available.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Office Vastu Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Enhanced Productivity</strong> – Employees stay focused and motivated.</li>
              <li><strong>Better Client Relations</strong> – Positive environments foster trust and stronger partnerships.</li>
              <li><strong>Steady Growth</strong> – Financial stability and smoother business expansion.</li>
              <li><strong>Employee Satisfaction</strong> – Reduced conflicts and healthier teamwork.</li>
              <li><strong>Stress Reduction</strong> – Balanced spaces create calmer atmospheres.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Our Office Vastu Process Works
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation Call</strong> – Understanding business goals and challenges.</li>
              <li><strong>Layout Review</strong> – Studying office plans, compass directions, and current setup.</li>
              <li><strong>Customized Report</strong> – Step-by-step recommendations tailored for your office.</li>
              <li><strong>Implementation Guidance</strong> – Simple remedies and corrective suggestions.</li>
              <li><strong>Follow-Up</strong> – Continued support to ensure visible results.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our IT startup in Techzone lacked focus. After Vasterior&apos;s consultation, our team efficiency improved within a month.&quot; – Entrepreneur, Greater Noida West.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior helped restructure our conference room and reception. Since then, client meetings are more successful.&quot; – Service Firm, Sector 4.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We didn&apos;t have to change our interiors drastically—the remedies were simple yet very effective.&quot; – Co-working Space Owner, Noida Extension.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Office Vastu Consultant in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Is Vastu applicable in modern offices with open layouts?</h3>
                <p>Yes, Vastu adapts well to open layouts, ensuring directional balance.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do you provide remedies without construction changes?</h3>
                <p>Absolutely. Most corrections involve non-structural solutions like colors, placements, and crystals.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can office Vastu really improve profitability?</h3>
                <p>Yes, many clients report better client trust and smoother financial flow after corrections.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you offer online office consultations?</h3>
                <p>Yes, Vasterior provides both on-site and online consultations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How long does it take to see changes?</h3>
                <p>Many businesses notice improvements within a few weeks of applying remedies.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In the fast-growing hub of Noida Extension, Uttar Pradesh, success depends on more than just hard work and strategies. A Vastu-aligned office creates the right environment for productivity, prosperity, and long-term stability.
            </p>
            <p className="mt-4">
              With Vasterior&apos;s Office Vastu Consultation, your workspace becomes a center of positive energy, where employees thrive, clients feel welcome, and businesses grow effortlessly.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Office Vastu Consultant in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gamil.com</p>
            </div>
          </div>
          <PostNavigation slug="office-vastu-consultant-in-noida-extension" />
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