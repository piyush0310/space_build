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
              Bringing Harmony, Health & Prosperity to Every Home
            </p>

            {/* Intro */}
            <p>
              A home is more than walls and rooms — it is the center of family life, emotions, and energy flow. While modern interiors add comfort and style, Vastu Shastra ensures peace, balance, and prosperity. At Vasterior – Vastu Expert for Homes in Moradabad, UP, we combine authentic Vastu principles with contemporary interior design, so your house feels not only beautiful but also energetically aligned for well-being.
            </p>

            {/* Why Vastu is Important for Homes */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu is Important for Homes
            </h2>
            <p>
              Unlike villas or commercial spaces, homes carry a deeply personal energy. With the right Vastu alignment, families experience:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Positive Energy Flow</strong> – Natural balance of light, air, and layout.</li>
              <li><strong>Better Health & Wellness</strong> – Bedrooms, kitchens, and bathrooms placed for vitality.</li>
              <li><strong>Financial Stability</strong> – Wealth zones activated for prosperity.</li>
              <li><strong>Peace & Relationships</strong> – Homes that nurture family bonding.</li>
              <li><strong>Spiritual Harmony</strong> – A calm environment for prayer, rest, and growth.</li>
            </ul>

            {/* Our Home Vastu Consultation Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Home Vastu Consultation Services
            </h2>
            <p>
              We provide end-to-end Vastu guidance for new and existing homes in Moradabad.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. New Home Vastu Planning</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Plot selection and orientation advice.</li>
                  <li>Placement of entrances, bedrooms, kitchen, and pooja room.</li>
                  <li>Integration of Vastu principles into architectural design.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Existing Home Vastu Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Identifying imbalances in direction, zones, and rooms.</li>
                  <li>Non-demolition corrections using colors, mirrors, and placements.</li>
                  <li>Furniture layout adjustments for energy flow.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Interior Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Choosing wall colors, lighting, and décor based on zones.</li>
                  <li>Placement of beds, sofas, study tables, and appliances.</li>
                  <li>Ensuring balance of the five elements (earth, water, fire, air, space).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Apartment & Flat Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Layout analysis for compact living.</li>
                  <li>Remedies for structural limitations.</li>
                  <li>Space programming for harmony in urban settings.</li>
                </ul>
              </div>
            </div>

            {/* Our Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process as Vastu Expert for Homes
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Site Visit & Analysis</strong> – Measuring layout, directions, and energy fields.</li>
              <li><strong>Problem Diagnosis</strong> – Identifying issues related to health, wealth, or relationships.</li>
              <li><strong>Customized Remedies</strong> – Simple, effective solutions integrated into interiors.</li>
              <li><strong>Design Integration</strong> – Blending Vastu corrections with modern home décor.</li>
              <li><strong>Follow-Up Guidance</strong> – Ongoing support to ensure lasting benefits.</li>
            </ul>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Vastu Expert in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Dual Expertise</strong> – Interior design + Vastu consultation.</li>
              <li><strong>Practical Approach</strong> – Non-demolition remedies, easy to implement.</li>
              <li><strong>Family-Focused Solutions</strong> – Customized to your lifestyle and needs.</li>
              <li><strong>Local Experience</strong> – Understanding of Moradabad&apos;s cultural and architectural context.</li>
              <li><strong>Trusted Guidance</strong> – Villas, flats, and farmhouses across UP designed with balance.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Vastu-Compliant Homes
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Peace of Mind</strong> – A home filled with positivity and calm.</li>
              <li><strong>Health & Vitality</strong> – Correct placement for rest and rejuvenation.</li>
              <li><strong>Stronger Relationships</strong> – Layouts that support family harmony.</li>
              <li><strong>Financial Prosperity</strong> – Wealth and growth zones activated.</li>
              <li><strong>Daily Comfort</strong> – Interiors aligned with energy for ease of living.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We consulted Vasterior for our new 3BHK in Moradabad. Their Vastu guidance was easy to apply and blended well with interiors.&quot; – Rohit & Meenal Sharma
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our old home had energy issues. Vasterior corrected it with simple remedies, and we immediately felt the difference.&quot; – Vikas & Poonam Gupta
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Expert for Homes Moradabad
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Can you help before buying a home?</h3>
                <p>A: Yes, we guide in plot selection, apartment layout analysis, and directional alignment.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Do you recommend demolition if the layout is wrong?</h3>
                <p>A: No. We focus on non-demolition remedies that are practical and effective.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you also give advice on interiors?</h3>
                <p>A: Yes, we merge Vastu remedies with modern interior design.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does a consultation take?</h3>
                <p>A: A standard home consultation takes 1–2 sessions, with ongoing support if needed.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Is Vastu only for new houses?</h3>
                <p>A: Not at all. Existing homes can also be corrected with remedies.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Vastu Expert for Homes in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gmail.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>

            <p className="mt-4 font-medium text-gray-800">
              Vasterior – Guiding Moradabad Families Towards Homes Filled with Peace, Prosperity & Balance.
            </p>
          </div>
          <PostNavigation slug="vastu-expert-for-home-moradabad" />
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
