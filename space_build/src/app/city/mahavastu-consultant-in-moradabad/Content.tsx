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
              Scientific Vastu Solutions for Homes, Villas & Farmhouses
            </p>

            {/* Intro */}
            <p>
              Every home carries energy. If the balance of that energy is disturbed, it affects health, happiness, and prosperity. MahaVastu, a modern, scientific interpretation of Vastu Shastra, provides practical remedies without demolition. At Vasterior – MahaVastu Consultant in Moradabad, UP, we integrate MahaVastu principles with our interior design expertise, helping families create spaces that are both luxurious and energetically harmonious.
            </p>

            {/* What is MahaVastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What is MahaVastu?
            </h2>
            <p>
              MahaVastu, developed by Vastu expert Dr. Khushdeep Bansal, is a contemporary Vastu system that focuses on:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Four-Step Method</strong> – Diagnosis, Energy Balancing, Space Programming, and Result Testing.</li>
              <li><strong>Energy Mapping</strong> – Understanding how different zones of a house impact life aspects.</li>
              <li><strong>Practical Remedies</strong> – Using colors, metals, symbols, mirrors, and placements instead of structural changes.</li>
              <li><strong>Scientific Foundation</strong> – Backed by research, psychology, and architecture.</li>
            </ul>
            <p>
              It goes beyond traditional Vastu by offering easy-to-implement solutions suited for modern apartments, villas, and farmhouses.
            </p>

            {/* Why MahaVastu is Relevant */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why MahaVastu is Relevant for Moradabad Homes
            </h2>
            <p>
              Moradabad is a city known for its heritage, craftsmanship, and growing modern lifestyle. Families here often live in spacious villas, kothis, and farmhouses, where energy balance plays a vital role. MahaVastu helps by:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Harmonizing Family Relationships</strong> – Correct placement of bedrooms, kitchens, and lounges.</li>
              <li><strong>Enhancing Prosperity</strong> – Strengthening the north and north-east energy zones.</li>
              <li><strong>Supporting Health & Peace</strong> – Aligning bathrooms, bedrooms, and study areas.</li>
              <li><strong>Boosting Growth & Opportunities</strong> – Balancing workspace and career zones within homes.</li>
              <li><strong>Blending with Interiors</strong> – Remedies applied through design elements, colors, and décor.</li>
            </ul>

            {/* Our MahaVastu Consultancy Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our MahaVastu Consultancy Services
            </h2>
            <p>
              At Vasterior, we combine MahaVastu principles with design execution, ensuring both harmony and aesthetics.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Residential MahaVastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Apartments, villas, kothis, and farmhouses.</li>
                  <li>Bedroom, kitchen, dining, and living room alignments.</li>
                  <li>Family wellness and prosperity-focused remedies.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Commercial MahaVastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Offices, shops, showrooms, and factories.</li>
                  <li>Layout planning for growth and business success.</li>
                  <li>Cash counters, cabins, and conference zones mapped.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Farmhouse MahaVastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Land orientation analysis.</li>
                  <li>Integration of gardens, pools, and courtyards.</li>
                  <li>Remedies for leisure spaces and retreats.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Remedy Implementation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Mirrors, metal strips, colors, and placements.</li>
                  <li>No demolition solutions customized for each property.</li>
                </ul>
              </div>
            </div>

            {/* Our MahaVastu Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our MahaVastu Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Site Visit & Energy Mapping</strong> – Measuring property layout and identifying directional zones.</li>
              <li><strong>Problem Diagnosis</strong> – Understanding family/business challenges linked to imbalances.</li>
              <li><strong>Four-Step Method Application</strong> – Energy balancing, space programming, and result testing.</li>
              <li><strong>Customized Remedies</strong> – Implementing design-friendly solutions.</li>
              <li><strong>Monitoring & Guidance</strong> – Supporting clients till results are experienced.</li>
            </ul>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as MahaVastu Consultant in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Certified MahaVastu Knowledge</strong> – Expertise in scientific Vastu methodology.</li>
              <li><strong>Design Integration</strong> – We merge remedies seamlessly with luxury interiors.</li>
              <li><strong>Local Insight</strong> – Experience with Moradabad&apos;s cultural and architectural styles.</li>
              <li><strong>Practical Remedies</strong> – No need for structural demolition.</li>
              <li><strong>Trusted Expertise</strong> – Serving villas, farmhouses, and residences across UP.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of MahaVastu for Your Home
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Peace & Positivity</strong> – Homes filled with calm, balanced energy.</li>
              <li><strong>Health & Harmony</strong> – Proper placement of bedrooms and kitchens for wellness.</li>
              <li><strong>Financial Stability</strong> – Prosperity-enhancing remedies for growth.</li>
              <li><strong>Stronger Relationships</strong> – Family bonding supported by balanced interiors.</li>
              <li><strong>Future Security</strong> – Energy zones aligned for long-term success.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted a scientific approach to Vastu for our villa in Moradabad. Vasterior&apos;s MahaVastu consultancy gave us simple remedies that worked beautifully.&quot; – Naveen & Ritu Agarwal
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our farmhouse was redesigned with MahaVastu corrections. It now feels more peaceful and aligned with our lifestyle.&quot; – Suresh & Anita Kapoor
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – MahaVastu Consultant Moradabad
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: How is MahaVastu different from traditional Vastu?</h3>
                <p>A: Traditional Vastu often requires structural changes. MahaVastu offers remedies without demolition, using colors, mirrors, and placements.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Can MahaVastu be applied to modern villas and apartments?</h3>
                <p>A: Yes, it is designed for contemporary spaces, from compact flats to large farmhouses.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you only give advice, or also execute remedies?</h3>
                <p>A: We provide both — consultancy and integration into interiors.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does it take to see results?</h3>
                <p>A: Many clients notice changes within a few weeks, though it depends on the issue.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Can MahaVastu be applied to commercial properties too?</h3>
                <p>A: Yes, we specialize in both residential and commercial MahaVastu consultations.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – MahaVastu Consultant in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gamil.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>

            <p className="mt-4 font-medium text-gray-800">
              Vasterior – Bringing Balance, Prosperity & Peace to Moradabad Homes with MahaVastu.
            </p>
          </div>
          <PostNavigation slug="mahavastu-consultant-in-moradabad" />
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
