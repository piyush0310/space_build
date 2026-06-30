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
            {/* Subtitle */}
            <p className="text-lg font-medium text-gray-800">
              Create Workplaces That Drive Growth, Productivity & Positive Energy
            </p>

            {/* Intro */}
            <p>
              An office is more than a workplace — it is the nerve center of your business success. While modern interiors enhance functionality, Vastu Shastra aligns energy, creativity, and prosperity. At Vasterior – Vastu Consultant for Offices in Moradabad, UP, we specialize in designing and correcting office spaces so they radiate positive energy, efficiency, and financial growth.
            </p>

            {/* Why Vastu Matters in Office Design */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu Matters in Office Design
            </h2>
            <p>
              Offices are directly connected to the financial stability and productivity of a business. A Vastu-compliant workplace ensures:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Business Growth</strong> – Wealth and prosperity zones activated for success.</li>
              <li><strong>Productivity Boost</strong> – Proper placement of cabins, desks, and workstations.</li>
              <li><strong>Team Harmony</strong> – Layouts that encourage collaboration and reduce conflicts.</li>
              <li><strong>Decision-Making Power</strong> – Correct positioning of the owner&apos;s cabin for authority.</li>
              <li><strong>Client Attraction</strong> – A welcoming energy that builds trust and relationships.</li>
            </ul>

            {/* Our Office Vastu Consultancy Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Office Vastu Consultancy Services
            </h2>
            <p>
              At Vasterior, we offer end-to-end Vastu solutions for offices, ranging from small setups to large corporate spaces.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. New Office Vastu Planning</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Site selection and orientation guidance.</li>
                  <li>Placement of main entrances, cabins, and workstations.</li>
                  <li>Integration of Vastu into architectural and interior plans.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Existing Office Vastu Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Analysis of energy imbalances in the current setup.</li>
                  <li>Non-demolition solutions like furniture rearrangement, mirrors, colors, and décor.</li>
                  <li>Simple corrections that yield powerful results.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Owner&apos;s Cabin Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Placement in the southwest for authority and stability.</li>
                  <li>Desk alignment for confident decision-making.</li>
                  <li>Décor elements to enhance leadership energy.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Staff Workstation Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>North or east-facing seating for productivity.</li>
                  <li>Balanced layouts for team harmony.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Reception & Client Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>North-east placement for welcoming energy.</li>
                  <li>Décor and lighting for trust-building.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Conference & Meeting Rooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Vastu alignment for constructive discussions.</li>
                  <li>Seating positions to support balanced communication.</li>
                </ul>
              </div>
            </div>

            {/* Our Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Consultation</strong> – Understanding business needs, goals, and office layout.</li>
              <li><strong>Site Visit & Energy Mapping</strong> – Identifying directional strengths and weaknesses.</li>
              <li><strong>Customized Vastu Plan</strong> – Tailored solutions to maximize success.</li>
              <li><strong>Integration with Design</strong> – Remedies that blend seamlessly into interiors.</li>
              <li><strong>Follow-Up Guidance</strong> – Long-term support for consistent growth.</li>
            </ul>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Office Vastu Consultant in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Dual Expertise</strong> – Vastu consultancy + premium interior design.</li>
              <li><strong>Business-Oriented Approach</strong> – Focused on growth, productivity, and financial stability.</li>
              <li><strong>Practical Remedies</strong> – Easy-to-implement corrections without disruption.</li>
              <li><strong>Local Presence</strong> – Based in Moradabad for quick access and support.</li>
              <li><strong>Trusted Across UP</strong> – Businesses, startups, and corporates rely on us for Vastu guidance.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Vastu-Compliant Offices
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Financial Prosperity</strong> – Offices aligned with wealth zones experience growth.</li>
              <li><strong>Employee Satisfaction</strong> – Positive energy increases efficiency and motivation.</li>
              <li><strong>Stronger Leadership</strong> – Owner&apos;s cabin placement enhances authority.</li>
              <li><strong>Client Trust</strong> – Welcoming and harmonious spaces build relationships.</li>
              <li><strong>Long-Term Stability</strong> – Energy-balanced offices sustain success for years.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our office in Moradabad was restructured with Vasterior&apos;s Vastu guidance. We saw noticeable improvements in productivity and overall environment.&quot; – Arun & Pooja Bansal
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted a consultant who understood business growth. Vasterior gave us practical remedies that worked without disrupting our daily work.&quot; – Rajesh & Sneha Gupta
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Consultant for Offices Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you only consult for new offices, or existing ones too?</h3>
                <p>A: Both. We plan new offices and correct existing ones with practical remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Do Vastu remedies require structural changes?</h3>
                <p>A: No. Most remedies are simple, cost-effective, and non-demolition based.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: How can Vastu help improve business performance?</h3>
                <p>A: By aligning owner cabins, workstations, and wealth zones, Vastu enhances authority, productivity, and financial flow.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Do you serve offices outside Moradabad?</h3>
                <p>A: Yes, we provide consultation across UP for small and large businesses.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Can modern interiors still follow Vastu?</h3>
                <p>A: Absolutely. We design contemporary offices fully aligned with Vastu principles.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Vastu Consultant for Offices in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gamil.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            <p className="mt-4 font-medium text-gray-800">
              Vasterior – Designing Vastu-Compliant Offices in Moradabad That Drive Growth, Productivity & Success.
            </p>
          </div>
          <PostNavigation slug="vastu-consultant-for-office-moradabad" />
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
