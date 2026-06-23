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
              As Noida Extension (Greater Noida West), Uttar Pradesh rapidly develops into a hub of modern living and business, many families and entrepreneurs are realizing that their spaces don&apos;t always feel as peaceful or prosperous as they should. This often happens because homes, offices, or shops were designed without following the principles of Vastu Shastra.
            </p>
            <p>
              But there&apos;s good news—these imbalances can be fixed. With Vasterior&apos;s Vastu correction services in Noida Extension, you don&apos;t need to reconstruct or demolish your property. Instead, our expert remedies are simple, practical, and designed to restore balance, harmony, and growth in your space.
            </p>

            {/* What Are Vastu Corrections */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Are Vastu Corrections?
            </h2>
            <p>
              Vastu corrections are non-demolition remedies that align your property with natural energies. They don&apos;t require tearing down walls or major renovations. Instead, they rely on:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Correct furniture placement.</li>
              <li>Mirror, crystal, and pyramid usage.</li>
              <li>Color therapy and décor alignment.</li>
              <li>Strategic use of natural elements.</li>
            </ul>
            <p className="mt-4">
              These corrections transform apartments, villas, offices, and retail outlets into positive environments without disturbing their structure.
            </p>

            {/* Why Need Vastu Corrections */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Do You Need Vastu Correction Services in Noida Extension?
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Modern Construction Limitations</strong> - High-rise apartments in Gaur City, Panchsheel Greens, Eco Village, and Ajnara Homes are often designed for efficiency, not energy flow.</li>
              <li><strong>Business Growth Blockages</strong> - Offices in Techzone and Knowledge Park may face productivity or financial hurdles due to poor layouts.</li>
              <li><strong>Stress and Family Discomfort</strong> - Incorrect placement of bedrooms, kitchens, or entrances can cause disharmony at home.</li>
              <li><strong>Affordable & Practical</strong> - Vastu corrections by Vasterior are cost-effective and don&apos;t involve breaking structures.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Vastu Correction Services
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Home Vastu Corrections</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom bed placement for restful sleep.</li>
                  <li>Kitchen alignment for health and prosperity.</li>
                  <li>Entrance and balcony corrections to welcome positive energy.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Office Vastu Corrections</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Desk orientation for productivity.</li>
                  <li>Cabin placement for leadership and authority.</li>
                  <li>Conference room alignment for smoother decision-making.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Retail & Showroom Corrections</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cash counter placement for steady cash flow.</li>
                  <li>Display arrangements to attract customers.</li>
                  <li>Entrance energy alignment for better footfall.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Plot & Construction Corrections</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Shape or slope imbalances corrected through design adjustments.</li>
                  <li>Element balancing before or during construction.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Remedies Without Demolition</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Mirrors for energy redirection.</li>
                  <li>Crystals and pyramids for balancing zones.</li>
                  <li>Colors for harmonizing elements like fire, water, earth, and air.</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior for Vastu Correction Services?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Expertise</strong> – Years of work across Noida Extension projects.</li>
              <li><strong>Certified Knowledge</strong> – Authentic, science-based remedies.</li>
              <li><strong>Affordable Solutions</strong> – Designed to fit every budget.</li>
              <li><strong>Trusted by Families & Businesses</strong> – Strong client base with proven results.</li>
              <li><strong>Flexible Options</strong> – On-site and online consultations available.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Vastu Corrections
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Peaceful Living</strong> – Reduced stress and better relationships at home.</li>
              <li><strong>Financial Stability</strong> – Smoother income and business opportunities.</li>
              <li><strong>Health & Well-being</strong> – Balanced energy supports physical and mental wellness.</li>
              <li><strong>Career & Education Growth</strong> – Students and professionals gain focus and success.</li>
              <li><strong>Positive Business Impact</strong> – Shops and offices see higher client engagement.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Consultation</strong> – Understanding your challenges and goals.</li>
              <li><strong>Property Review</strong> – On-site or online analysis of layout and directions.</li>
              <li><strong>Correction Plan</strong> – Customized remedies suited for your property.</li>
              <li><strong>Implementation Support</strong> – Step-by-step guidance on applying remedies.</li>
              <li><strong>Follow-Up</strong> – Ensuring visible and lasting results.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our flat in Eco Village always felt heavy. After Vasterior&apos;s Vastu corrections, the home feels lighter and more peaceful.&quot; – Family, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;They corrected our office desk and reception setup. Within weeks, team productivity improved.&quot; – Startup Owner, Techzone.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We run a shop in Gaur City Arcade, and sales have gone up after simple Vastu corrections.&quot; – Retailer, Sector 4.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Correction Services in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Do Vastu corrections require breaking walls?</h3>
                <p>No, they are non-demolition remedies like mirrors, colors, and placements.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Are Vastu corrections affordable?</h3>
                <p>Yes, Vasterior specializes in cost-effective solutions for every budget.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can corrections really change results?</h3>
                <p>Yes, clients often notice improvements in peace, finances, and health within weeks.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide online correction guidance?</h3>
                <p>Yes, both on-site and online consultations are available.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Are corrections permanent?</h3>
                <p>Once applied, they provide long-term benefits, supported by follow-ups.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a modern and competitive hub like Noida Extension, Uttar Pradesh, it&apos;s common for spaces to be built without energy alignment. But with Vasterior&apos;s Vastu correction services, you can restore balance, positivity, and prosperity—without expensive renovations.
            </p>
            <p className="mt-4">
              From apartments to villas, offices to retail outlets, our practical and affordable remedies ensure that your space truly supports your goals and well-being.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Vastu Correction Services in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> info@spacebuild.com</p>
            </div>
          </div>
          <PostNavigation slug="vastu-correction-services-in-noida-extension" />
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