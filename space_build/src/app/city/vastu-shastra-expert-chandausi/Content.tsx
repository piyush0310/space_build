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
            Vastu Shastra Expert in Chandausi
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            -Interior Design & MahaVastu Alignment by Vasterior
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior begins every transformation with one belief: when your space is aligned, life flows better. As a trusted Vastu Shastra Expert in Chandausi, Vasterior brings together thoughtful interior design and the proven principles of MahaVastu to create spaces that don't just look beautiful, but actively support success, peace, health, and growth.
              </p>
              <p className="mt-4 font-semibold">
                This isn't fear-based Vastu. This isn't demolition-driven advice. This is intelligent spatial alignment designed for modern living.
              </p>
            </div>

            {/* Design Meets Direction */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Where Design Meets Direction
              </h3>
              <p className="mt-4">
                Most homes and workplaces look fine on the surface, yet something always feels off. Restlessness. Blocked growth. Financial instability. Constant stress. That's where Vasterior steps in.
              </p>
              <p>
                By integrating MahaVastu principles directly into interior planning, Vasterior helps correct energy imbalances without breaking walls or disrupting your lifestyle. Every recommendation is practical, personalized, and grounded in logic, not superstition.
              </p>
              <p>Whether it's a home, office, shop, or commercial property, the goal remains the same: create harmony that works silently in your favor.</p>
            </div>

            {/* What Makes Vasterior Different */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes Vasterior Different
              </h3>
              <p className="mt-4">
                Vasterior is not just another Vastu consultancy. It's a design-first, result-oriented practice built for today's realities.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>MahaVastu-based guidance that respects modern architecture</li>
                <li>No demolition, no fear, no rigid rules</li>
                <li>Interior layouts aligned with natural energy flow</li>
                <li>Focus on long-term harmony, not quick fixes</li>
                <li>Solutions tailored specifically for Chandausi homes and businesses</li>
              </ul>
              <p>Every space has a story. Vasterior simply helps it unfold the right way.</p>
            </div>

            {/* MahaVastu Explained */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                MahaVastu - Explained Simply
              </h3>
              <p className="mt-4">
                MahaVastu is a refined and practical approach to traditional Vastu Shastra. Instead of rigid directions and outdated limitations, it focuses on energy balance through placement, zoning, colors, and movement.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>You don't need to rebuild your home</li>
                <li>You don't need to shift mountains</li>
                <li>You just need alignment</li>
              </ul>
              <p>MahaVastu works with what you already have, correcting subtle imbalances that often go unnoticed but deeply affect daily life.</p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Services Offered by Vasterior
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Residential Vastu Consultation</h4>
                  <p>Personalized guidance for homes and apartments to improve peace, health, relationships, and prosperity, without disrupting daily living.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Commercial & Office Vastu</h4>
                  <p>Strategic alignment for offices, showrooms, shops, and workspaces to enhance productivity, decision-making, and financial growth.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interior Design with Vastu Integration</h4>
                  <p>Designing spaces where aesthetics and energy work together—layouts, furniture placement, colors, and flow planned intentionally.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pre-Construction & Layout Planning</h4>
                  <p>Early-stage guidance to ensure your space starts right, avoiding long-term corrections later.</p>
                </div>
              </div>
            </div>

            {/* Why Clients Trust */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Clients in Chandausi Trust Vasterior
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Deep understanding of local architecture and lifestyle</li>
                <li>One-on-one consultations, not generic advice</li>
                <li>Calm, transparent guidance without pressure</li>
                <li>Focus on sustainable, real-world outcomes</li>
              </ul>
              <p>Clients don't just feel a difference in their spaces—they experience it in their lives.</p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. Is MahaVastu different from traditional Vastu Shastra?
                  </h3>
                  <p>Yes. MahaVastu is a modern, flexible approach that focuses on energy balance without strict rules or demolition. It works with existing structures.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Will I need to break walls or reconstruct my space?
                  </h3>
                  <p>No. Vasterior specializes in non-demolition solutions using layout changes, placements, and subtle corrections.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Can MahaVastu be applied to rented homes or offices?
                  </h3>
                  <p>Absolutely. Since changes are non-structural, MahaVastu works perfectly for rented properties.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. How long does it take to see results?
                  </h3>
                  <p>Many clients notice shifts within weeks. Long-term benefits strengthen as the space settles into alignment.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. Do you offer online consultations?
                  </h3>
                  <p>Yes. Depending on the project, consultations can be done remotely or in person.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. Is this suitable for commercial spaces and shops in Chandausi?
                  </h3>
                  <p>Definitely. Vasterior works extensively with offices, retail spaces, and commercial properties in and around Chandausi.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
              Let's Align Your Space, Naturally
            </h3>
            <p className="text-center mb-6">
              Sometimes, clarity begins with a simple conversation. Speaking directly at +917906086899 can help you understand what your space needs, and what it doesn't.
            </p>
            <div className="text-center space-y-3">
              <p className="font-semibold">
                📞 Call: <a href="tel:+917906086899" className="text-blue-600 hover:underline">+917906086899</a>
              </p>
              <p className="font-semibold">
                📧 Email: <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">spacebuild.india@gamil.com</a>
              </p>
            </div>
          </div>

          <PostNavigation slug="vastu-shastra-expert-in-chandausi" />
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
