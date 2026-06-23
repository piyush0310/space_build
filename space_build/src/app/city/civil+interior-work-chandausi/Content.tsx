// components/CafeContent.js
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
            Civil + Interior Work in Chandausi
          </h2>
          <p className="text-lg font-semibold text-gray-800 mb-6">
            Thoughtfully Designed. Structurally Sound. Energetically Aligned.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior is where civil construction, interior design, and MahaVastu alignment come together as one seamless system. Not stitched together. Not outsourced in pieces. Designed, planned, and executed under a single vision, so your space doesn't just look good, but works for you at every level.
            </p>
            <p>
              If you're looking for civil + interior work in Chandausi that goes beyond surface-level design and focuses on long-term comfort, stability, and energy balance, you're in the right place.
            </p>

            {/* Why Integrated */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Civil + Interior Work Should Never Be Separate
            </h2>
            <p className="mb-4">
              Most homes and commercial spaces fail not because of poor design, but because civil work and interiors are planned in isolation.
            </p>
            <p className="mb-6">
              Structural decisions are made first. Design is forced later. Walls get shifted. Layouts get compromised. Budgets bleed.
            </p>
            <p className="mb-6">
              At Vasterior, we flip that outdated process on its head.
            </p>
            <p>We believe:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Civil planning should support interior functionality</li>
              <li>Interiors should be designed with structure, not against it</li>
              <li>Vastu alignment should be considered from the foundation, not as an afterthought</li>
            </ul>
            <p>That's how you get spaces that are efficient, balanced, and future-proof.</p>

            {/* MahaVastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The MahaVastu Difference: Design That Aligns Energy & Structure
            </h2>
            <p className="mb-4">
              Vasterior doesn't follow generic Vastu tips pulled from the internet. Our approach is rooted in MahaVastu principles, a modern, scientific evolution of traditional Vastu that focuses on energy correction without unnecessary demolition.
            </p>
            <p className="mb-6">What this means for you:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Smarter layout planning based on direction and energy flow</li>
              <li>Structural and interior corrections that are practical, not disruptive</li>
              <li>Spaces that support health, clarity, growth, and stability</li>
            </ul>
            <p>Whether it's a new build or an existing property, MahaVastu allows alignment without breaking everything down and starting over.</p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Civil + Interior Services in Chandausi
            </h2>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Civil Construction & Structural Planning</h3>
            <p className="mb-6">
              From foundations to final finishes, our civil work is planned with precision and foresight. We ensure that structural elements support not just strength, but usability, airflow, lighting, and future interior flexibility.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Interior Design (Residential & Commercial)</h3>
            <p className="mb-6">
              We design interiors that balance aesthetics with purpose. Every layout, material, and finish is selected to serve your lifestyle or business needs, while maintaining visual harmony and long-term durability.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">MahaVastu-Based Space Alignment</h3>
            <p className="mb-6">
              We integrate MahaVastu principles at the planning stage itself, correcting directional imbalances, optimizing layouts, and enhancing energy flow without unnecessary reconstruction.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Turnkey Execution</h3>
            <p className="mb-6">
              One team. One vision. One point of accountability. From drawings to handover, Vasterior manages everything, so timelines stay intact and decisions don't get lost in translation.
            </p>

            {/* Local */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Built for Chandausi. Designed to Last.
            </h2>
            <p className="mb-6">
              Chandausi has its own architectural patterns, plot constraints, and construction challenges. Vasterior brings local understanding with metro-level execution standards, ensuring your space feels rooted yet refined.
            </p>
            <p>
              Whether it's a family home, a renovation, a retail outlet, or an office space, our work is tailored to the realities of the region while delivering a premium finish.
            </p>

            {/* Working With */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Working With Vasterior Feels Like
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Clear planning, not confusion</li>
              <li>Transparent execution, not surprise costs</li>
              <li>Design that ages well, not trends that expire</li>
              <li>Spaces that feel calm, aligned, and intentional</li>
            </ul>
            <p>Clients don't come to Vasterior just for interiors or civil work. They come for clarity, confidence, and control over how their space is built.</p>

            {/* Call to Action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Talk Before You Build
            </h2>
            <p className="mb-4">
              If you're planning civil + interior work in Chandausi, or even rethinking an existing space, a single conversation can save months of mistakes. Many of our projects begin with a simple call to understand possibilities, timelines, and alignment.
            </p>
            <p className="mb-8">
              You can always reach the Vasterior team directly at <strong>+917906086899</strong>, or start the conversation over email at{" "}
              <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                info@spacebuild.com
              </a>{" "}
              whenever it's convenient.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  1. Do you handle both civil and interior work together?
                </h3>
                <p>Yes. That's our core strength. Civil planning, interior design, and execution are handled as one integrated process, ensuring zero disconnect between structure and design.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  2. What makes MahaVastu different from traditional Vastu?
                </h3>
                <p>MahaVastu is more practical and scientific. It focuses on energy balance, directional alignment, and correction without forcing demolition or drastic structural changes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. Can MahaVastu be applied to existing homes?</h3>
                <p>Absolutely. Many corrections can be done through layout changes, design elements, and energy alignment, without breaking walls.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. Do you offer turnkey solutions?</h3>
                <p>Yes. From concept to completion, Vasterior manages design, civil execution, interiors, and alignment, so you deal with one team, not multiple vendors.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. Is Vasterior suitable for small homes or only large projects?</h3>
                <p>We work across scales. Whether it's a compact home, a renovation, or a commercial space, the same attention and planning apply.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">6. How early should I involve Vasterior in my project?</h3>
                <p>Ideally before civil work begins. Early involvement allows us to align structure, design, and MahaVastu from day one, saving cost and corrections later.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">7. How do I get started?</h3>
                <p>A conversation is all it takes. Reach out when you're ready to plan intelligently, Vasterior will guide you from there.</p>
              </div>
            </div>
          </div>
          <PostNavigation slug="civil-interior-work-chandausi" />
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
