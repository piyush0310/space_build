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
            Vastu for Home in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior believes your home should work for you, not against you. Not just look good on Instagram, but feel calm when you walk in, support your health, and quietly amplify prosperity in your everyday life.
              </p>
              <p className="mt-4 font-semibold">
                That's exactly where our approach to Vastu for homes in Chandausi begins: with intention, intelligence, and alignment, both energetic and aesthetic.
              </p>
              <p className="mt-4">
                In a town where homes are deeply personal and often multi-generational, Vastu isn't about rigid rules or superstition. It's about flow. Balance. And designing spaces that feel right, because they are right.
              </p>
            </div>

            {/* Why Vastu Matters */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vastu Matters for Homes in Chandausi
              </h3>
              <p className="mt-4">
                Chandausi homes have a unique rhythm. Independent houses, inherited properties, mixed-use spaces, evolving lifestyles. But many homeowners face the same silent issues:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Constant stress or restlessness at home</li>
                <li>Financial stagnation despite hard work</li>
                <li>Sleep disturbances or recurring health concerns</li>
                <li>Spaces that feel "off" but can't be explained</li>
              </ul>
              <p>More often than not, these issues are linked to imbalanced spatial energy, blocked zones, incorrect room placements, or disturbed directional flow.</p>
              <p>That's where Vastu for home in Chandausi, when done correctly, becomes a game-changer.</p>
            </div>

            {/* MahaVastu Foundation */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Foundation: MahaVastu, Explained Simply
              </h3>
              <p className="mt-4">
                Vasterior works exclusively with MahaVastu principles, a modern, scientific evolution of traditional Vastu that focuses on correction, not destruction.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>No breaking walls</li>
                <li>No demolition</li>
                <li>No extreme rituals</li>
                <li>No fear-based advice</li>
              </ul>
              <p className="mt-4">Instead, MahaVastu looks at:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Directional energies</li>
                <li>Elemental balance (earth, water, fire, air, space)</li>
                <li>Energy flow within rooms and layouts</li>
                <li>Practical, design-led remedies</li>
              </ul>
              <p>It's logical. It's subtle. And it fits seamlessly into modern interior design.</p>
            </div>

            {/* Interior Design + Vastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Interior Design + Vastu: Not Two Services, One Philosophy
              </h3>
              <p className="mt-4">
                Here's the truth most people won't tell you: Vastu without design feels restrictive. Design without Vastu feels incomplete. Vasterior bridges both.
              </p>
              <p>We don't "apply Vastu later." We design with Vastu from the ground up.</p>
              <p>From layout planning to furniture placement, from colors to lighting, every decision supports both aesthetics and energy alignment. The result? Homes that feel peaceful, powerful, and beautifully intentional.</p>
            </div>

            {/* Common Issues */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Common Home Vastu Issues We Fix (Without Drama)
              </h3>
              <p className="mt-4">
                Many clients come to us after trying generic Vastu advice that didn't work. We approach problems differently. We commonly correct:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Incorrect main entrance energy</li>
                <li>Bedrooms causing restlessness or emotional drain</li>
                <li>Kitchens placed in conflicting zones</li>
                <li>Financial blocks linked to southwest or north imbalances</li>
                <li>Work-from-home spaces that kill focus</li>
              </ul>
              <p>All corrections are customised, subtle, and aligned with your existing home, no chaos, no confusion.</p>
            </div>

            {/*SPACE BUILD */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Homeowners in Chandausi Choose Vasterior
              </h3>
              <p className="mt-4">Because we don't sell fear. We deliver clarity.</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>MahaVastu–based expertise</li>
                <li>Design-first mindset</li>
                <li>Practical, no-demolition solutions</li>
                <li>Deep understanding of residential spaces</li>
                <li>Calm, professional, non-preachy guidance</li>
              </ul>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. Is Vastu really necessary if my home already looks well-designed?
                  </h3>
                  <p>Yes, because design and energy are not the same thing. A home can look stunning yet feel mentally draining. Vastu ensures the space supports your lifestyle, not just your aesthetics.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do I need to break walls or rebuild parts of my home?
                  </h3>
                  <p>No. Vasterior follows MahaVastu principles that focus on non-destructive corrections. Most solutions involve alignment, placement, and subtle design changes.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Can Vastu help with financial or career growth?
                  </h3>
                  <p>When done correctly, yes. Many financial and career blocks are linked to directional imbalances. Correcting them often improves clarity, decision-making, and momentum.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Is MahaVastu different from traditional Vastu?
                  </h3>
                  <p>Yes. MahaVastu is more scientific, flexible, and practical. It adapts to modern homes instead of forcing outdated rules.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. Do you only work with new homes?
                  </h3>
                  <p>Not at all. We work extensively with existing homes in Chandausi, including inherited properties and lived-in spaces.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. How do I know if my home needs Vastu correction?
                  </h3>
                  <p>If your home feels heavy, stagnant, or stressful, or if life feels blocked despite effort, it's worth checking. A brief consultation can usually bring clarity.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    7. How can I get started with Vasterior?
                  </h3>
                  <p>You can begin with a simple conversation. Many clients call +917906086899 to discuss their concerns, while others prefer to write to spacebuild.india@gamil.com for a more detailed consultation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
              How the Consultation Process Works
            </h3>
            <ol className="text-center mb-6 space-y-2 max-w-2xl mx-auto">
              <li>We understand your home layout and concerns</li>
              <li>We analyse spatial energy using MahaVastu principles</li>
              <li>We propose clear, doable corrections</li>
              <li>We align interiors, furniture, and flow</li>
              <li>You experience the difference, gradually, naturally</li>
            </ol>
            <p className="text-center mb-6">
              If you're curious where your home stands, a short conversation is often enough to uncover what's working, and what's not.
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

          <PostNavigation slug="vastu-for-home-in-chandausi" />
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
