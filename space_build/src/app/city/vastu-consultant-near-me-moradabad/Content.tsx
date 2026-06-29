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
            <p className="text-lg font-semibold text-gray-800">
              Local Expertise, Global Knowledge – Right at Your Doorstep
            </p>

            {/* Intro */}
            <p>
              When families in Moradabad search for a &quot;Vastu Consultant Near Me&quot;, they are not just looking for quick advice. They want a professional who understands local culture, architecture, and lifestyle while applying authentic Vastu Shastra principles. At Vasterior – Vastu Consultant in Moradabad, UP, we provide personalized, result-oriented Vastu guidance, ensuring your home, villa, or farmhouse is filled with harmony, prosperity, and balance.
            </p>

            {/* Why a Local Vastu Consultant Matters */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why a Local Vastu Consultant Matters
            </h2>
            <p>Choosing a nearby consultant ensures:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Quick Access</strong> – On-site visits and regular follow-ups are easier.</li>
              <li><strong>Cultural Understanding</strong> – Designs and remedies aligned with Moradabad&apos;s heritage.</li>
              <li><strong>Affordable & Efficient</strong> – No long-distance consultation costs.</li>
              <li><strong>Better Coordination</strong> – Easy integration with architects and contractors.</li>
              <li><strong>Practical Advice</strong> – Remedies suited to local climate and construction styles.</li>
            </ul>

            {/* Our Expertise */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Expertise as Vastu Consultants in Moradabad
            </h2>
            <p>
              Unlike general advisors, we combine authentic Vastu knowledge with modern interior design.
            </p>

            {/* Key Services */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Key Services
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Residential Vastu Consultation</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Villas, apartments, farmhouses, and kothis.</li>
                  <li>Bedroom, kitchen, living room, and study alignment.</li>
                  <li>Remedies for family harmony, prosperity, and health.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Commercial Vastu Consultation</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Offices, shops, factories, and showrooms.</li>
                  <li>Space planning for growth, productivity, and success.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Farmhouse Vastu Consultation</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Large land layouts analyzed for directional balance.</li>
                  <li>Placement of gardens, pools, and courtyards aligned with Vastu.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Remedies Without Demolition</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Colors, mirrors, symbols, and furniture repositioning.</li>
                  <li>Subtle, practical corrections integrated into interiors.</li>
                </ul>
              </div>
            </div>

            {/* Our Consultation Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Consultation Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Site Visit & Analysis</strong> – Detailed study of property layout, directions, and energy flow.</li>
              <li><strong>Diagnosis of Imbalances</strong> – Identifying problem zones (financial, health, relationships).</li>
              <li><strong>Customized Remedies</strong> – Practical corrections based on your space and lifestyle.</li>
              <li><strong>Integration with Interiors</strong> – Remedies blended with design for elegance.</li>
              <li><strong>Follow-Up Guidance</strong> – Continued support until results are experienced.</li>
            </ul>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Vastu Consultant Near Me in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Presence</strong> – Easily accessible for site visits and quick solutions.</li>
              <li><strong>Dual Expertise</strong> – Vastu consultancy + premium interior design.</li>
              <li><strong>Practical Remedies</strong> – Focus on corrections without major demolition.</li>
              <li><strong>Trusted Across UP</strong> – Experience with villas, farmhouses, offices, and residences.</li>
              <li><strong>Client-Focused</strong> – Every consultation is personalized and confidential.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Vastu-Aligned Spaces
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Positive Energy Flow</strong> – Spaces that feel calm, balanced, and vibrant.</li>
              <li><strong>Better Family Harmony</strong> – Improved relationships and peace at home.</li>
              <li><strong>Financial Growth</strong> – Correct alignment of wealth zones.</li>
              <li><strong>Health & Wellness</strong> – Placement of bedrooms, kitchens, and bathrooms for vitality.</li>
              <li><strong>Prestige & Confidence</strong> – A Vastu-compliant home enhances well-being and status.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We searched for a Vastu consultant near us in Moradabad and found Vasterior. Their guidance was practical, and our villa now feels much more positive.&quot; – Rahul & Sneha Verma
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;The remedies were simple — no demolition, just placements and colors. We could feel the change in energy within weeks.&quot; – Ankit & Meena Sethi
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Consultant Near Me Moradabad
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: How is Vasterior different from other consultants?</h3>
                <p>A: We combine authentic Vastu principles with modern interior design expertise, offering practical and aesthetic solutions.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Do you provide Vastu consultation only for new homes?</h3>
                <p>A: No, we also correct and balance existing homes, villas, and farmhouses.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can you visit properties outside Moradabad?</h3>
                <p>A: Yes, we serve nearby towns and districts across UP.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Do you give online consultations?</h3>
                <p>A: Yes, but on-site visits are preferred for accurate analysis.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you also provide Vastu for commercial properties?</h3>
                <p>A: Absolutely. Offices, shops, and factories benefit greatly from our consultations.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Vastu Consultant Near You in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>

            <p className="mt-4 font-medium text-gray-800">
              Vasterior – Local Vastu Consultancy in Moradabad for Homes, Villas & Farmhouses That Radiate Balance and Prosperity.
            </p>
          </div>
          <PostNavigation slug="vastu-consultant-near-me-moradabad" />
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
