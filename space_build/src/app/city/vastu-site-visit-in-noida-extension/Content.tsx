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
              When it comes to building or buying a property, a Vastu site visit plays a crucial role in ensuring that the land and structure are aligned with natural energies. In a fast-developing area like Noida Extension (Greater Noida West), Uttar Pradesh, where high-rise apartments, villas, factories, and offices are rapidly emerging, ensuring Vastu compliance at the site stage can prevent future imbalances.
            </p>
            <p>
              At Vasterior, we provide professional Vastu site visit services in Noida Extension. With our on-site evaluation, we analyze directions, layout, and environmental factors to give you practical recommendations for long-term prosperity, peace, and growth.
            </p>

            {/* Why is a Vastu Site Visit Important */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why is a Vastu Site Visit Important?
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Accurate Directional Analysis</strong> - On-site readings with a compass are more precise than just analyzing blueprints.</li>
              <li><strong>Real-Time Observations</strong> - We study surrounding roads, water bodies, slopes, and neighboring structures that may influence your property&apos;s energy.</li>
              <li><strong>Customized Remedies</strong> - A site visit allows us to suggest practical, non-demolition solutions tailored to your exact property conditions.</li>
              <li><strong>Preventive Measure for Future Projects</strong> - Evaluating plots, construction sites, or new buildings ensures you don&apos;t face issues like financial instability or stress after moving in.</li>
              <li><strong>Holistic Energy Balance</strong> - On-site reviews help us suggest accurate placements for entrances, utilities, rooms, and work areas.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Vastu Site Visit Services
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Pre-Construction Site Visits</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Evaluation of land direction, slope, and shape.</li>
                  <li>Recommendations for entrances, water sources, and layouts.</li>
                  <li>Suggestions for foundations and first brick placement.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Residential Site Visits</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom, kitchen, and living area alignment.</li>
                  <li>Entrance and balcony positioning for harmony.</li>
                  <li>Remedies for energy imbalances in homes.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Commercial & Office Site Visits</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Placement of cabins, workstations, and reception.</li>
                  <li>Meeting room and pantry alignment.</li>
                  <li>Layout suggestions for business growth.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Retail & Showroom Site Visits</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Entrance positioning to attract footfall.</li>
                  <li>Cash counter and product display adjustments.</li>
                  <li>Lighting and décor guidance for customer engagement.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏭 Factory & Industrial Site Visits</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Machine, generator, and utility placements.</li>
                  <li>Storage, dispatch, and loading/unloading alignment.</li>
                  <li>Solutions for smoother operations and fewer losses.</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior for Vastu Site Visits in Noida Extension?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Expertise</strong> – Familiarity with residential societies, retail complexes, and industrial areas in Greater Noida West.</li>
              <li><strong>Scientific Methods</strong> – Use of directional tools, logical observation, and Vastu principles.</li>
              <li><strong>Practical Solutions</strong> – Remedies that fit modern apartments, offices, and factories.</li>
              <li><strong>Affordable Packages</strong> – Flexible plans to suit different project needs.</li>
              <li><strong>Trusted by Clients</strong> – Families, entrepreneurs, and shop owners recommend our site visit services.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of a Vastu Site Visit
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Peace of Mind</strong> – Confidently invest in Vastu-compliant property.</li>
              <li><strong>Financial Prosperity</strong> – Better chances of stable cash flow and growth.</li>
              <li><strong>Healthy Living</strong> – Homes that support health and relationships.</li>
              <li><strong>Efficient Workplaces</strong> – Offices and factories with higher productivity.</li>
              <li><strong>Future Security</strong> – Long-term benefits without expensive corrections later.</li>
            </ul>

            {/* How Our Vastu Site Visit Works */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Our Vastu Site Visit Works
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Booking & Scheduling</strong> – Choose a convenient date for the visit.</li>
              <li><strong>On-Site Evaluation</strong> – Detailed study of directions, layout, and environment.</li>
              <li><strong>Immediate Feedback</strong> – Verbal guidance provided during the visit.</li>
              <li><strong>Written Report</strong> – A detailed plan with remedies and suggestions.</li>
              <li><strong>Follow-Up Support</strong> – Assistance in implementing corrections.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension Clients
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior&apos;s site visit before our villa construction in Gaur City saved us from costly mistakes. Highly professional service.&quot; – Villa Owner, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our office layout in Techzone was finalized after their site visit. Business operations became smoother.&quot; – Startup Owner.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;They visited our shop in Eco Village Arcade and corrected the cash counter direction. Sales improved within weeks.&quot; – Retailer, Noida Extension.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Site Visit in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What happens during a Vastu site visit?</h3>
                <p>We study directions, layout, surroundings, and provide on-site remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. How long does a site visit take?</h3>
                <p>Depending on property size, a visit can take between 1–3 hours.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Do I need blueprints for a site visit?</h3>
                <p>Yes, floor plans help us align observations with your design.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Can remedies be applied without demolition?</h3>
                <p>Yes, most corrections involve placements, mirrors, colors, and crystals.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Do you offer both residential and commercial site visits?</h3>
                <p>Yes, we provide site visits for homes, offices, factories, shops, and plots.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a rapidly growing hub like Noida Extension, Uttar Pradesh, ensuring your property aligns with natural energies is the key to long-term success. A Vastu site visit by Vasterior gives you precise, practical, and affordable guidance before or after construction, helping you avoid costly mistakes and live or work in harmony.
            </p>
            <p className="mt-4">
              Whether it&apos;s a plot, apartment, villa, office, showroom, or factory, our on-site evaluations provide clarity, balance, and prosperity.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Vastu Site Visit in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> info@spacebuild.com</p>
            </div>
          </div>
          <PostNavigation slug="vastu-site-visit-in-noida-extension" />
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