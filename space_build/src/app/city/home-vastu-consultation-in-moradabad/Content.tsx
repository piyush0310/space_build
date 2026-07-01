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
          
          <p className="text-gray-900 font-semibold mb-6 text-xl">
            Creating Homes That Radiate Peace, Health &amp; Prosperity
          </p>
          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <p>
              A house is more than bricks and walls &mdash; it is the space where families create memories, nurture dreams, and build their future. But if the energy in a home is imbalanced, residents may experience stress, financial instability, or health concerns. At Vasterior &ndash; specialists in Home Vastu Consultation in Moradabad, UP, we align your home with the principles of Vastu Shastra so that every room supports happiness, wellness, and abundance.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Homes Need Vastu Consultation
            </h2>
            <p>
              While modern architecture focuses on design and aesthetics, Vastu ensures that your home also becomes a center of balanced energy.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improves Family Harmony &ndash; Aligns bedrooms and living areas for peace.</li>
              <li>Enhances Health &amp; Wellness &ndash; Correct kitchen, bathroom, and water placement.</li>
              <li>Supports Financial Stability &ndash; Wealth corners activated for prosperity.</li>
              <li>Boosts Children&rsquo;s Education &ndash; Study rooms aligned for focus and success.</li>
              <li>Creates Positivity &ndash; Homes feel lighter, more vibrant, and welcoming.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Home Vastu Consultation Services
            </h2>
            <p>We provide end-to-end services for new homes as well as existing residences in Moradabad.</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>New Home Planning</strong><br />
                Guidance for plot selection and orientation.<br />
                Entrance, bedroom, kitchen, and pooja room placement.<br />
                Integration of Vastu at blueprint stage.
              </li>
              <li>
                <strong>Existing Home Remedies</strong><br />
                Non-demolition corrections through colors, mirrors, metals, and plants.<br />
                Furniture placement and décor adjustments for balance.<br />
                Room-wise remedies to fix specific concerns.
              </li>
              <li>
                <strong>Apartment &amp; Flat Vastu</strong><br />
                Compact solutions tailored to smaller layouts.<br />
                Easy remedies for shared walls and limited spaces.
              </li>
              <li>
                <strong>Luxury Homes &amp; Villas</strong><br />
                Advanced Mahavastu methods for multi-zonal properties.<br />
                Aligning gyms, home theatres, courtyards, and pools.
              </li>
            </ol>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Step-by-Step Consultation Process
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Initial Discussion &ndash; Understanding family needs, concerns, and goals.</li>
              <li>Layout Analysis &ndash; Studying directions, entrances, and room placement.</li>
              <li>Energy Mapping &ndash; Evaluating the balance of 16 directions and five elements.</li>
              <li>Customized Remedies &ndash; Offering non-demolition corrections suited to your home.</li>
              <li>Integration with Interiors &ndash; Remedies applied seamlessly into décor.</li>
              <li>Follow-Up Guidance &ndash; Tracking results and offering ongoing advice.</li>
            </ol>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Home Vastu Consultation in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Certified Vastu Expertise &ndash; Skilled in both traditional and Mahavastu methods.</li>
              <li>Practical Remedies &ndash; No unnecessary demolition or reconstruction.</li>
              <li>Design + Vastu Advantage &ndash; Interiors blended with energy balance.</li>
              <li>Local Understanding &ndash; Knowledge of Moradabad&rsquo;s culture and housing trends.</li>
              <li>Trusted by Families &ndash; Homes across UP rely on us for peace and prosperity.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Home Vastu Consultation
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Peaceful Living &ndash; A home filled with positive energy.</li>
              <li>Better Health &ndash; Bedrooms and kitchens aligned with vitality.</li>
              <li>Financial Growth &ndash; Wealth zones energized for prosperity.</li>
              <li>Family Unity &ndash; Harmonized layouts reduce conflicts.</li>
              <li>Legacy Value &ndash; Homes that benefit generations.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &ldquo;We moved into a new home but felt constant stress. Vasterior&rsquo;s home Vastu consultation brought harmony within weeks.&rdquo; &ndash; Sanjay &amp; Pooja Malhotra
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &ldquo;Our 3BHK apartment was corrected with simple remedies. The results were surprisingly effective.&rdquo; &ndash; Vivek &amp; Richa Sharma
              </blockquote>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Home Vastu Consultation in Moradabad
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q1: Do you provide Vastu consultation for apartments?
                </h3>
                <p>Yes, we specialize in compact and multi-floor apartment remedies.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q2: Can remedies be applied without renovation?
                </h3>
                <p>Absolutely. Most involve simple changes like colors, metals, and placements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q3: How long does a consultation take?
                </h3>
                <p>Typically 1&ndash;2 sessions depending on the property size.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q4: Do you also integrate Vastu into interior design?
                </h3>
                <p>Yes, we blend décor and Vastu for seamless results.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q5: How soon will results show?
                </h3>
                <p>Many families feel energy changes in weeks; deeper benefits develop over months.</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Contact Vasterior – Home Vastu Consultation in Moradabad
            </h2>
            <div className="space-y-2 text-gray-900">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p>
                <strong>📧 Email:</strong>{" "}
                <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 underline">
                  spacebuild.india@gmail.com
                </a>
              </p>
              <p>
                <strong>🌐 Website:</strong>{" "}
                <a href="http://www.vasterior.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  www.vasterior.com
                </a>
              </p>
            </div>

            <p className="mt-6 text-gray-700">
              Vasterior &ndash; Your Partner for Vastu-Compliant Homes in Moradabad, Helping Families Live in Balance, Prosperity &amp; Joy.
            </p>
          </div>
          <PostNavigation slug="home-vastu-consultation-in-moradabad" />
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
