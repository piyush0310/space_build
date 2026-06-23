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
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Balanced Living with Modern Interiors & Vastu Guidance
            </h3>
            <p>
              A home or office is not just about stylish interiors – it&apos;s also about harmony, energy, and well-being. That&apos;s why Vasterior – Interior Design + Vastu Consultation Moradabad, UP brings together the best of modern design and traditional Vastu principles. Our team creates interiors that are elegant, functional, and energy-balanced, ensuring your spaces promote positivity and success.
            </p>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior for Interior Design + Vastu Consultation in Moradabad?
            </h2>
            <p>
              Moradabad, the Brass City of India, is a mix of tradition and modern lifestyle. Families here prefer interiors that are beautiful, functional, and aligned with Vastu Shastra. Vasterior is trusted because:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Dual Expertise</strong> – We combine professional interior design with authentic Vastu guidance.</li>
              <li><strong>Personalized Layouts</strong> – Designs created to match your lifestyle and energy needs.</li>
              <li><strong>Residential & Commercial Focus</strong> – From apartments and villas to offices and shops.</li>
              <li><strong>End-to-End Service</strong> – Consultation, design, 3D visualization, and execution.</li>
              <li><strong>Affordable Luxury</strong> – Stylish interiors and Vastu remedies within your budget.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Services in Moradabad
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Residential Interior Design + Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Living room layouts that encourage family bonding.</li>
                  <li>Bedrooms aligned with Vastu directions for health and peace.</li>
                  <li>Kitchens designed for prosperity and better energy flow.</li>
                  <li>Kids&apos; rooms with playful yet balanced designs.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Commercial & Office Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Office layouts that enhance productivity and teamwork.</li>
                  <li>Retail showrooms designed to attract customers and increase sales.</li>
                  <li>Vastu-based seating arrangements for better growth and leadership.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Renovations with Vastu Integration</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Remodeling existing homes with balanced interiors.</li>
                  <li>Correcting Vastu defects with simple design adjustments.</li>
                  <li>Affordable upgrades without structural changes.</li>
                </ul>
              </div>
            </div>

            {/* Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process
            </h2>
            <p>We follow a scientific yet creative approach:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation & Site Analysis</strong> – Understanding your goals and checking layout as per Vastu.</li>
              <li><strong>Concept & Interior Planning</strong> – Developing themes with space planning and Vastu alignment.</li>
              <li><strong>3D Visualization</strong> – Realistic previews to see design + Vastu balance before execution.</li>
              <li><strong>Material & Furniture Selection</strong> – Suggesting cost-effective yet stylish options.</li>
              <li><strong>Execution & Supervision</strong> – Managing everything for timely delivery.</li>
              <li><strong>Final Handover & After Support</strong> – Delivering ready interiors with Vastu harmony.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Interior Design + Vastu Consultation
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Positive Energy Flow</strong> – Spaces aligned with directions and elements.</li>
              <li><strong>Better Lifestyle</strong> – Interiors that look good and feel harmonious.</li>
              <li><strong>Business Growth</strong> – Offices and shops designed for success.</li>
              <li><strong>Health & Well-Being</strong> – Homes that reduce stress and improve family happiness.</li>
              <li><strong>Increased Property Value</strong> – Balanced and stylish interiors are more valuable.</li>
            </ul>

            {/* Why Moradabad Prefers Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Moradabad Prefers Vasterior
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Trusted brand for Interior Design + Vastu Consultation Moradabad, UP.</li>
              <li>Experienced in both traditional homes and modern apartments.</li>
              <li>Strong portfolio of residences, kothis, offices, and showrooms.</li>
              <li>Transparent pricing and on-time delivery.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We hired Vasterior for our 3BHK interior design + Vastu consultation in Moradabad. The home looks stylish and feels positive.&quot; – Anjali Gupta, Moradabad
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our office interiors were redesigned by Vasterior with Vastu guidance. Within months, we saw better productivity and client response.&quot; – Ramesh Singh, Moradabad
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Interior Design + Vastu Consultation Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you provide only Vastu consultation or full interiors too?</h3>
                <p>A: We provide both – full interior designing along with Vastu integration.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Can Vastu be applied in flats and apartments?</h3>
                <p>A: Yes, even small flats can be aligned with Vastu through design solutions.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you handle commercial projects with Vastu guidance?</h3>
                <p>A: Absolutely, we design offices, showrooms, and shops with Vastu-based layouts.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How much does interior design + Vastu service cost in Moradabad?</h3>
                <p>A: Costs vary with project size, but we offer affordable packages.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you provide 3D previews before execution?</h3>
                <p>A: Yes, we provide 3D visuals so you can see the interiors before work starts.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Interior Design + Vastu Consultation Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Beautiful Interiors with Vastu Harmony in Moradabad.
            </p>
          </div>

          <PostNavigation slug="interior-design-vastu-consultation-moradabad-up" />
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
