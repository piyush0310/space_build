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
              Noida Extension (Greater Noida West), Uttar Pradesh has emerged as a preferred destination for families, professionals, and entrepreneurs due to its modern apartments, villas, offices, and retail hubs. Yet, many residents and business owners experience stress, financial fluctuations, or disharmony in spite of having well-designed properties. The reason often lies in the lack of alignment with Vastu Shastra—the ancient Indian science of architecture and energy balance.
            </p>
            <p>
              At Vasterior, we provide professional Vastu Shastra services in Noida Extension, blending time-tested principles with modern practicality. Our aim is to create spaces that radiate peace, prosperity, and growth without requiring major structural changes.
            </p>

            {/* Why Vastu Shastra is Important */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu Shastra is Important for Modern Spaces
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Holistic Balance</strong> - Vastu Shastra aligns the five natural elements—earth, water, fire, air, and space—for harmony.</li>
              <li><strong>Compact Urban Homes</strong> - High-rise apartments in Noida Extension often lack directional balance, making Vastu guidance essential.</li>
              <li><strong>Business & Financial Growth</strong> - Shops, offices, and factories designed as per Vastu see smoother operations and prosperity.</li>
              <li><strong>Practical & Non-Demolition Remedies</strong> - Modern Vastu focuses on easy corrections using placements, colors, mirrors, and crystals.</li>
              <li><strong>Local Relevance</strong> - With layouts common to societies like Gaur City, Panchsheel Greens, Eco Village, and Ajnara Homes, specialized Vastu Shastra services make a real difference.</li>
            </ul>

            {/* Vasterior's Vastu Shastra Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Vastu Shastra Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Residential Vastu Shastra</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom and kitchen alignment for peace and prosperity.</li>
                  <li>Entrance and living area corrections for harmony.</li>
                  <li>Prayer room and balcony adjustments for positivity.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Office Vastu Shastra</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Desk and cabin placements for improved leadership.</li>
                  <li>Reception and meeting room corrections for smoother communication.</li>
                  <li>Energy balancing for stress-free and productive workplaces.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Retail & Shop Vastu Shastra</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cash counter and product display adjustments for better sales.</li>
                  <li>Entrance corrections to attract more customers.</li>
                  <li>Lighting and color suggestions for higher engagement.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏭 Factory & Industrial Vastu Shastra</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Machinery and generator placements for stability.</li>
                  <li>Warehouse and dispatch area alignment for efficiency.</li>
                  <li>Workforce seating corrections for teamwork and harmony.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Plot & Pre-Construction Vastu Shastra</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Directional analysis of land, slope, and surroundings.</li>
                  <li>Blueprint corrections before construction begins.</li>
                  <li>Placement guidance for entrances, utilities, and water sources.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Vastu Remedies & Corrections</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Mirror, crystal, and pyramid placements for balance.</li>
                  <li>Color therapy for walls and décor.</li>
                  <li>Natural element balancing for lasting positivity.</li>
                </ul>
              </div>
            </div>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Vastu Shastra in Noida Extension?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Certified Knowledge</strong> – Authentic expertise in Vastu Shastra principles.</li>
              <li><strong>Local Experience</strong> – Worked extensively across Noida Extension&apos;s residential and commercial spaces.</li>
              <li><strong>Customized Solutions</strong> – Remedies designed specifically for your property.</li>
              <li><strong>Practical & Affordable</strong> – Easy-to-implement corrections without costly demolition.</li>
              <li><strong>Trusted Results</strong> – Hundreds of families and businesses report positive transformations.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Vastu Shastra Services
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Peaceful Homes</strong> – Stronger family bonding and reduced conflicts.</li>
              <li><strong>Financial Prosperity</strong> – Improved cash flow and business growth.</li>
              <li><strong>Better Health</strong> – Balanced spaces support wellness.</li>
              <li><strong>Enhanced Productivity</strong> – Offices and shops function more efficiently.</li>
              <li><strong>Long-Term Success</strong> – Properties aligned with Vastu sustain growth for years.</li>
            </ul>

            {/* How Services Work */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Vasterior&apos;s Vastu Shastra Services Work
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation Call</strong> – Discuss your property concerns and goals.</li>
              <li><strong>Site Visit / Layout Review</strong> – Analyze directions, design, and surroundings.</li>
              <li><strong>Customized Report</strong> – Detailed, step-by-step remedies.</li>
              <li><strong>Implementation Guidance</strong> – Assistance with applying corrections.</li>
              <li><strong>Follow-Up Support</strong> – Ensuring results are visible and long-lasting.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension Clients
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our 3BHK flat in Gaur City was full of stress. Vasterior&apos;s Vastu Shastra corrections brought harmony to our family.&quot; – Resident, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our office in Techzone saw major improvements in productivity and client interactions after their guidance.&quot; – Startup Owner.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We run a shop in Eco Village Arcade. After applying their remedies, sales have been consistently better.&quot; – Retailer, Greater Noida West.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Shastra Services in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What is the difference between Vastu consultation and Vastu Shastra services?</h3>
                <p>Vastu Shastra services are broader, covering residential, commercial, industrial, and plot-level solutions.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Are Vastu Shastra remedies expensive?</h3>
                <p>No, we specialize in affordable, non-demolition remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can Vastu Shastra be applied in rented properties?</h3>
                <p>Yes, our remedies are adaptable for both owned and rented spaces.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide online Vastu Shastra consultations?</h3>
                <p>Yes, we offer both on-site and virtual services.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How quickly can results be seen?</h3>
                <p>Many clients notice positive changes within weeks, with long-term benefits continuing for years.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In the growing hub of Noida Extension, Uttar Pradesh, energy balance is the key to a peaceful, prosperous life. With Vasterior&apos;s Vastu Shastra services, your home, office, shop, or factory can be aligned with natural energies for harmony, financial growth, and long-term success.
            </p>
            <p className="mt-4">
              Our remedies are practical, affordable, and customized, ensuring every property—whether newly built or existing—supports your goals and well-being.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Vastu Shastra Services in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gmail.com</p>
            </div>
          </div>
          <PostNavigation slug="vastu-shastra-services-in-noida-extension" />
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