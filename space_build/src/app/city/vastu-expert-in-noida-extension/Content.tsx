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
              The rise of Noida Extension (Greater Noida West), Uttar Pradesh has created an exciting blend of modern housing societies, luxury villas, corporate hubs, and retail spaces. Yet, as families settle down and businesses expand, many realize that peace of mind, financial stability, and harmonious relationships depend not just on design and interiors but also on the energy alignment of their spaces.
            </p>
            <p>
              This is where Vasterior&apos;s Vastu consultation services in Noida Extension play a vital role. We help individuals and organizations transform ordinary buildings into centers of positive energy, prosperity, and well-being by applying authentic Vastu Shastra principles in a modern, practical way.
            </p>

            {/* What Makes Vastu Important */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Vastu Consultation Services Important in Noida Extension?
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>High-Rise Living</strong> – Most apartments in societies like Gaur City, Eco Village, and Panchsheel Greens are built for space efficiency, often ignoring directional energy flow.</li>
              <li><strong>Business Expansion</strong> – With Techzone and Knowledge Park hubs growing, offices and startups need Vastu-compliant layouts for better productivity.</li>
              <li><strong>Retail Competition</strong> – Showrooms and shops require customer-friendly energy to stay ahead in a competitive market.</li>
              <li><strong>Family Well-being</strong> – Balanced spaces reduce conflicts, health issues, and financial instability.</li>
            </ul>
            <p className="mt-4">
              In short, Vastu is not about superstition—it&apos;s about creating balanced environments where people naturally thrive.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Vastu Consultation Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Residential Vastu Consultation</h3>
                <p className="mb-2">We provide solutions for:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Proper orientation of bedrooms, kitchens, and balconies.</li>
                  <li>Energy flow corrections in compact apartments.</li>
                  <li>Remedies for peace, harmony, and financial growth in homes.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Commercial Vastu Consultation</h3>
                <p className="mb-2">For businesses, we analyze:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Entrance and reception layouts to attract opportunities.</li>
                  <li>Ideal placement of workstations and cabins.</li>
                  <li>Pantry and conference room alignment for stress-free operations.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Retail and Showroom Vastu</h3>
                <p className="mb-2">To maximize profits, our consultants guide:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cash counter and product display positioning.</li>
                  <li>Entrance direction for higher footfall.</li>
                  <li>Lighting and color suggestions for customer engagement.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Plot and Pre-Construction Vastu</h3>
                <p className="mb-2">Before you start construction in Noida Extension, we evaluate:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Plot direction, soil quality, and shape.</li>
                  <li>Layout suggestions for long-term success.</li>
                  <li>Best alignment for entrances, water sources, and structures.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Remedies Without Demolition</h3>
                <p className="mb-2">Modern living doesn&apos;t allow drastic reconstruction. Our services include:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use of pyramids, mirrors, and crystals.</li>
                  <li>Color therapy for directional balance.</li>
                  <li>Element-based solutions to harmonize energy flow.</li>
                </ul>
              </div>
            </div>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is Trusted for Vastu Services in Noida Extension
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Experience Across Local Projects:</strong> We&apos;ve worked with families, startups, and retailers in multiple societies and commercial hubs.</li>
              <li><strong>Practical Approach:</strong> Solutions that work within the limitations of modern apartments and offices.</li>
              <li><strong>Scientific Methods:</strong> Our process is analytical and logical, not superstition-based.</li>
              <li><strong>Flexibility:</strong> On-site visits and virtual consultations available across Uttar Pradesh.</li>
              <li><strong>Proven Track Record:</strong> Consistent positive feedback from residents, entrepreneurs, and shop owners.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Key Benefits of Vasterior&apos;s Vastu Services
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Enhanced Prosperity</strong> – Businesses see better cash flow and growth opportunities.</li>
              <li><strong>Peace & Happiness</strong> – Families experience stronger bonding and harmony.</li>
              <li><strong>Health Improvements</strong> – Balanced spaces reduce stress and promote healing.</li>
              <li><strong>Career & Education Success</strong> – Improved focus for students and professionals.</li>
              <li><strong>Competitive Advantage</strong> – Shops and showrooms attract more customers.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Our Vastu Consultation Works
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Understanding Your Needs</strong> – Initial discussion about your goals and challenges.</li>
              <li><strong>Detailed Property Analysis</strong> – Either on-site or virtual, using compass and layout mapping.</li>
              <li><strong>Customized Recommendations</strong> – Personalized remedies suitable for your property.</li>
              <li><strong>Implementation Support</strong> – Clear, practical steps for applying changes.</li>
              <li><strong>Follow-Up Guidance</strong> – Ensuring that results are visible and long-lasting.</li>
            </ul>

            {/* Client Experiences */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Experiences in Noida Extension
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We shifted to a 2BHK in Eco Village and faced constant stress. Vasterior&apos;s remedies brought noticeable peace within weeks.&quot; – Family, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our office in Techzone wasn&apos;t attracting clients. After applying their suggestions, meetings and deals have improved significantly.&quot; – IT Firm Owner, Greater Noida West.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our small shop in Gaur City Arcade now feels welcoming and customers spend more time here. Truly helpful services!&quot; – Retailer, Sector 4.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Expert in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Do Vastu experts provide solutions without demolition?</h3>
                <p>Yes, most remedies by Vasterior involve non-structural changes like colors, mirrors, or crystals.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Is Vastu applicable to apartments in high-rise buildings?</h3>
                <p>Absolutely. Our methods adapt to modern apartments and flats.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can Vastu really improve business growth?</h3>
                <p>Yes, aligning workspaces with energy flow enhances opportunities and financial stability.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide online consultations?</h3>
                <p>Yes, Vasterior offers both online and in-person consultations across Uttar Pradesh.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How soon can results be noticed?</h3>
                <p>Improvements vary, but many clients feel changes within a few weeks.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              As Noida Extension, Uttar Pradesh continues to flourish as a hub of modern living and commerce, the importance of Vastu Shastra is more relevant than ever. Choosing the right Vastu expert can transform your property into a space filled with peace, prosperity, and positivity.
            </p>
            <p className="mt-4">
              At Vasterior, our solutions are practical, scientific, and tailored to your unique needs. From compact apartments to sprawling villas, from corporate offices to retail showrooms, we ensure every space aligns with natural energies for long-term success.
            </p>
            <p className="mt-4">
              Take the first step toward harmony—consult Vasterior, your trusted Vastu expert in Noida Extension.
            </p>

            
          </div>
          <PostNavigation slug="vastu-expert-in-noida-extension" />
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