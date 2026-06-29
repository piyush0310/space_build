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
              In the rapidly growing cityscape of Noida Extension, Uttar Pradesh, modern infrastructure and real estate projects are shaping new lifestyles every day. Yet, amid all the skyscrapers and luxury townships, one ancient science continues to hold immense relevance—Vastu Shastra. At Vasterior, we bring together time-tested Vastu principles and modern architectural understanding to design homes, offices, and commercial spaces that radiate positivity, balance, and prosperity.
            </p>
            <p>
              If you are searching for a Vastu consultant in Noida Extension, you have landed at the right place. Our experts guide you with authentic, result-oriented solutions that enhance energy flow and harmonize living and working environments.
            </p>

            {/* Why Vastu Matters */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu Shastra Matters in Noida Extension
            </h2>
            <p className="mb-4">
              Noida Extension, officially known as Greater Noida West, has emerged as one of the fastest-developing hubs in Uttar Pradesh. Thousands of families are moving into high-rise apartments, while corporate offices and retail outlets continue to expand. In such an urbanized setting, following Vastu principles ensures:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Peaceful living amidst the hustle and bustle.</li>
              <li>Financial growth by aligning commercial spaces with prosperity energies.</li>
              <li>Better health and relationships through balanced home layouts.</li>
              <li>Stress-free work environments that enhance productivity.</li>
            </ul>
            <p className="mt-4">
              By blending Vastu with modern design, Vasterior consultants ensure that your property becomes a true center of positivity.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Services Offered by Vasterior – Vastu Consultant in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Residential Vastu Consultation</h3>
                <p className="mb-2">Whether you are purchasing a flat in Gaur City, Supertech Eco Village, or any independent villa, we help you:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Assess property orientation.</li>
                  <li>Recommend placement for bedrooms, kitchens, and living spaces.</li>
                  <li>Suggest remedies for imbalanced energies without structural changes.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Commercial Vastu Consultation</h3>
                <p className="mb-2">For offices in Techzone, Knowledge Park, or Sector 4, our experts guide:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ideal desk placements for decision-makers.</li>
                  <li>Reception and entrance orientation for positive client inflow.</li>
                  <li>Pantry, washroom, and conference room positioning to avoid blockages in financial growth.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Retail & Showroom Vastu</h3>
                <p className="mb-2">Retail outlets in Noida Extension thrive on customer engagement. We help you plan:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Entrance alignment for higher footfall.</li>
                  <li>Product display strategies to enhance sales.</li>
                  <li>Cash counter placements for consistent profit flow.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Plot and Pre-Construction Vastu</h3>
                <p>Before buying land or initiating construction, Vasterior experts analyze soil quality, directional alignment, and shape of the plot. This ensures long-term stability and prosperity for both residential and commercial projects.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Vastu Remedies without Demolition</h3>
                <p className="mb-2">We understand that structural changes aren&apos;t always possible in modern apartments. Our consultants provide simple yet powerful remedies like:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Crystal placements.</li>
                  <li>Pyramids and energy separators.</li>
                  <li>Color therapies and directional corrections.</li>
                </ul>
              </div>
            </div>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD in Noida Extension, Uttar Pradesh?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Expertise with Local Projects:</strong> Our consultants have worked with apartments, villas, offices, and showrooms across Noida Extension and Greater Noida West.</li>
              <li><strong>Customized Solutions:</strong> Every home or office has unique requirements; we never apply generic formulas.</li>
              <li><strong>Blend of Tradition & Modernity:</strong> While our roots are in ancient Vastu Shastra, our approach is practical and suited to today&apos;s lifestyles.</li>
              <li><strong>Client Trust:</strong> From homeowners to entrepreneurs, our clientele values our authentic guidance and positive results.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Hiring a Vastu Consultant in Noida Extension
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Harmony in Relationships</strong> – Proper room placements enhance peace among family members.</li>
              <li><strong>Wealth & Prosperity</strong> – Business owners witness smoother cash flow and profit stability.</li>
              <li><strong>Good Health</strong> – Balanced energy ensures fewer health complications and faster recovery.</li>
              <li><strong>Career Growth</strong> – Students and professionals achieve higher focus and success.</li>
              <li><strong>Stress Reduction</strong> – An environment free from conflicting energies reduces daily stress.</li>
            </ul>

            {/* Local Relevance */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Local Relevance – Why Noida Extension Needs Vastu Experts More than Ever
            </h2>
            <p className="mb-4">
              Unlike old townships, Noida Extension is dominated by high-rise apartments and group housing societies. Many of these buildings are designed primarily for maximum space utilization, often ignoring natural energy alignments. This makes professional Vastu consultation crucial for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Correcting imbalances in apartments built without directional focus.</li>
              <li>Enhancing energy in compact spaces.</li>
              <li>Providing solutions for joint families in multi-story units.</li>
            </ul>
            <p className="mt-4">
              Additionally, with the influx of startups and offices in the region, a well-aligned workspace can make a huge difference in growth and employee satisfaction.
            </p>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Process of Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Discussion</strong> – Understanding your requirements, challenges, and goals.</li>
              <li><strong>On-Site/Virtual Visit</strong> – Analyzing property structure, directions, and energy flow.</li>
              <li><strong>Detailed Report</strong> – Providing recommendations for corrections and remedies.</li>
              <li><strong>Implementation Guidance</strong> – Step-by-step support in applying the suggested changes.</li>
              <li><strong>Follow-Up Support</strong> – Continuous consultation to ensure results are visible.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension Clients
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;After following Vasterior&apos;s suggestions, our retail outlet at Gaur City Mall saw a noticeable increase in sales within three months. Highly recommended!&quot; – Retail Owner, Sector 4.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We were skeptical about Vastu earlier, but after applying simple remedies in our 3BHK apartment, our home feels lighter and more positive.&quot; – Resident, Eco Village.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our IT startup in Techzone now has better client inflow and smoother team coordination. Thanks to Vasterior for guiding us.&quot; – Entrepreneur, Greater Noida West.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQ – Vastu Consultant in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Do I need to make structural changes in my flat to follow Vastu?</h3>
                <p>Not always. Our consultants specialize in remedies that don&apos;t require demolition.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Can Vastu really help in boosting business growth?</h3>
                <p>Yes, correct placements and energy balance in offices and retail shops attract more opportunities and financial stability.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Is Vastu applicable for apartments in high-rise societies?</h3>
                <p>Absolutely. Vastu Shastra is adaptable and our team ensures practical solutions for every type of space.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. How long does it take to see results?</h3>
                <p>It varies, but many clients experience positive changes within weeks of implementing remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Does Vasterior provide online Vastu consultation for Noida Extension?</h3>
                <p>Yes, we offer both on-site and virtual consultations for convenience.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a modern hub like Noida Extension, Uttar Pradesh, where thousands of families and businesses are building their futures, the right alignment of energies can make all the difference. Vasterior, as your trusted Vastu consultant in Noida Extension, ensures that your property radiates positivity, harmony, and prosperity. Whether it&apos;s a 2BHK flat, a luxury villa, a corporate office, or a booming retail store, our customized Vastu guidance helps you achieve balance and success.
            </p>

            
          </div>
          <PostNavigation slug="vastu-consultant-in-noida-extension" />
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