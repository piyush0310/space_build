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
              Noida Extension (Greater Noida West), Uttar Pradesh has quickly emerged as a leading destination for modern families, entrepreneurs, and industries. With its high-rise apartments, luxury villas, commercial hubs, and factories, the region offers immense opportunities. Yet, many residents and businesses face challenges such as stress, financial instability, or slow growth. The missing element often lies in the energy alignment of the property.
            </p>
            <p>
              This is where Vasterior, recognized as the best Vastu consultancy in Noida Extension, helps. By blending authentic Vastu Shastra principles with modern, practical remedies, we ensure your home, office, shop, or industry is aligned with positivity, prosperity, and peace.
            </p>

            {/* Why Vasterior is the Best */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Best Vastu Consultancy in Noida Extension
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Proven Expertise</strong> - Years of successful consultations across residential, commercial, and industrial spaces.</li>
              <li><strong>Practical Solutions</strong> - Focus on non-demolition remedies such as mirror placement, color therapy, and crystal balancing.</li>
              <li><strong>Local Experience</strong> - Extensive work in Noida Extension societies like Gaur City, Eco Village, Panchsheel Greens, and Ajnara Homes, as well as offices in Techzone and Knowledge Park.</li>
              <li><strong>Trusted by Clients</strong> - Families, shopkeepers, entrepreneurs, and manufacturers trust us for visible results.</li>
              <li><strong>Flexible Consultation Options</strong> - On-site visits and online consultancy services available for convenience.</li>
            </ul>

            {/* Our Vastu Consultancy Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu Consultancy Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Residential Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom, kitchen, and living room corrections.</li>
                  <li>Entrance and balcony alignment for peace and prosperity.</li>
                  <li>Remedies for rented and owned apartments or villas.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Office Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Desk and cabin placement for productivity.</li>
                  <li>Conference room and reception corrections for success.</li>
                  <li>Energy balancing to reduce stress and improve teamwork.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Retail & Shop Vastu Consultancy</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cash counter placement for financial stability.</li>
                  <li>Entrance and product display design to attract customers.</li>
                  <li>Décor and lighting remedies for improved sales.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏭 Factory & Industrial Vastu Consultancy</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Machine and utility placement for smoother operations.</li>
                  <li>Warehouse and dispatch area alignment.</li>
                  <li>Remedies to reduce losses and improve efficiency.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Plot & Pre-Construction Consultancy</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Land slope, direction, and shape analysis.</li>
                  <li>Blueprint suggestions before construction.</li>
                  <li>Recommendations for entrance, water, and utilities.</li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Choosing the Best Vastu Consultancy
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Peaceful Homes</strong> – Harmony and stronger family bonds.</li>
              <li><strong>Financial Growth</strong> – Better income and consistent prosperity.</li>
              <li><strong>Productive Workplaces</strong> – Offices and factories run more efficiently.</li>
              <li><strong>Better Health</strong> – Balanced spaces improve physical and mental wellness.</li>
              <li><strong>Long-Term Stability</strong> – Energy-aligned properties sustain growth.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Consultancy Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Call</strong> – Understanding property details and concerns.</li>
              <li><strong>Site Visit / Layout Review</strong> – Detailed analysis of design, direction, and environment.</li>
              <li><strong>Customized Report</strong> – Practical remedies specific to your property.</li>
              <li><strong>Implementation Support</strong> – Guidance for step-by-step corrections.</li>
              <li><strong>Follow-Up</strong> – Ensuring visible and lasting improvements.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension Clients
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We consulted Vasterior for our 3BHK in Gaur City. Their remedies brought peace and prosperity to our family.&quot; – Resident, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our Techzone office became more productive after Vasterior&apos;s consultancy. Team harmony improved greatly.&quot; – Entrepreneur, Greater Noida West.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We run a shop in Eco Village Arcade. After applying their remedies, our sales increased steadily.&quot; – Retailer, Sector 4.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Best Vastu Consultancy in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What makes Vasterior the best Vastu consultancy?</h3>
                <p>Our local expertise, practical remedies, and proven results make us a top choice in Noida Extension.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Are remedies costly?</h3>
                <p>No, we provide affordable, non-demolition corrections.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can Vastu be applied in rented apartments or offices?</h3>
                <p>Yes, our solutions are adaptable to both rented and owned properties.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide online consultations?</h3>
                <p>Yes, both on-site and virtual consultations are available.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How soon do results appear?</h3>
                <p>Many clients notice improvements within weeks, with long-term benefits over months.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a growing hub like Noida Extension, Uttar Pradesh, it&apos;s essential to align living and working spaces with Vastu Shastra for peace, prosperity, and success. As the best Vastu consultancy in Noida Extension, Vasterior offers tailored, affordable, and effective remedies for homes, offices, shops, and factories.
            </p>
            <p className="mt-4">
              Our client-focused approach, local expertise, and practical corrections ensure that your space radiates positivity and supports your goals for years to come.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Best Vastu Consultancy in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> info@spacebuild.com</p>
            </div>
          </div>
          <PostNavigation slug="best-vastu-consultancy-in-noida-extension" />
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