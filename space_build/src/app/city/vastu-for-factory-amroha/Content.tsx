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
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Vastu For Factory in Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a factory is not just a physical structure, it is a living system where energy, workflow, people, machinery, and decisions must move in harmony. In industrial hubs like Amroha, where manufacturing, warehousing, and processing units drive local economies, even small spatial misalignments can silently impact productivity, profits, and peace of mind. Our approach to Vastu for factories in Amroha is rooted in logic, science, and modern MahaVastu principles, designed to support growth without disrupting operations.
            </p>

            {/* Why Vastu Matters */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu Matters for Factories & Manufacturing Units
            </h2>
            <p>
              Factories operate on precision. When spatial energy supports that precision, businesses scale smoothly. When it doesn't, challenges often appear as unexplained delays, frequent breakdowns, labour issues, or financial stagnation.
            </p>
            <p>A well-aligned factory layout helps ensure:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Smooth flow of raw materials → production → finished goods → dispatch</li>
              <li>Reduced machinery downtime and operational friction</li>
              <li>Better labour efficiency, safety, and retention</li>
              <li>Improved cash flow, billing, and receivables</li>
              <li>Stability in decision-making and leadership</li>
              <li>Fewer legal, compliance, or authority-related hurdles</li>
            </ul>
            <p>Vastu, when applied correctly, becomes a strategic business tool, not a belief system.</p>

            {/* Common Mistakes */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Common Factory Vastu Mistakes Seen in Amroha
            </h2>
            <p>
              Over the years, we've observed recurring issues in industrial units across Amroha and nearby regions:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Incorrect main gate or factory entry direction, affecting growth and approvals</li>
              <li>Borewell, water tanks, or drainage placed in unfavourable zones</li>
              <li>Heavy machinery blocking critical energy zones</li>
              <li>Fire and electrical panels clashing with water or storage areas</li>
              <li>Finished goods stored in zones meant for movement and expansion</li>
              <li>Owner's cabin, accounts, or cash handling placed without directional logic</li>
            </ul>
            <p>These mistakes often go unnoticed because they don't cause immediate failure—but they slowly erode efficiency and profitability.</p>

            {/* Vasterior's Approach */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior's Approach to Factory Vastu
            </h2>
            <p>At Vasterior, we do not believe in demolition-heavy or disruptive solutions. Our work is guided by MahaVastu principles, aligned with modern industrial planning.</p>
            <p>Our factory Vastu services include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Non-demolition corrections wherever possible</li>
              <li>Directional alignment of machinery, storage, utilities, and movement</li>
              <li>Optimisation of owner's cabin, accounts, admin, and security zones</li>
              <li>Integration of Vastu with interior planning and spatial flow</li>
              <li>Practical, site-specific recommendations, never generic remedies</li>
            </ul>
            <p>Every factory is different. Our solutions are tailored to your business model, process flow, and future expansion plans.</p>

            {/* Who Should Consider */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Should Consider Factory Vastu Consultation?
            </h2>
            <p>Our Vastu for Factory in Amroha service is ideal for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>New factory or warehouse setups</li>
              <li>Existing units facing losses, stagnation, or repeated obstacles</li>
              <li>Businesses planning expansion or capacity enhancement</li>
              <li>Factories experiencing labour unrest or management stress</li>
              <li>Owners dealing with unexplained financial blocks or delays</li>
            </ul>
            <p>Whether you are setting up from scratch or correcting an existing layout, early alignment saves long-term cost and effort.</p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Expertise in industrial Vastu and spatial planning</li>
              <li>Practical, business-first mindset</li>
              <li>Experience with factories, offices, warehouses, and commercial spaces</li>
              <li>Discreet, professional, and result-oriented approach</li>
              <li>Solutions that respect your time, structure, and operations</li>
            </ul>
            <p>We work with business owners who value clarity, logic, and long-term stability.</p>

            {/* CTA */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Align Your Factory for Sustainable Growth
            </h2>
            <p>
              If you're planning a new factory in Amroha or want to understand why your current unit feels stuck, a professional Vastu evaluation can bring clarity.
            </p>
            <p>
              You can speak directly with our team at <strong>+917906086899</strong> or write to us at{" "}
              <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                info@spacebuild.com
              </a>{" "}
              to schedule a consultation.
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              At Vasterior, we don't just design spaces, we help businesses move forward, with intention and balance.
            </p>
          </div>

          <PostNavigation slug="vastu-for-factory-amroha" />
        </div>

        {/* Form Section */}
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
