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
            Vastu Specialist in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior believes that a space should do more than just look good, it should work for you. Your home, office, or commercial space silently influences your peace of mind, financial growth, relationships, and overall well-being every single day.
              </p>
              <p className="mt-4">
                When interiors are designed without energetic alignment, even the most beautiful spaces can feel heavy, stagnant, or unsettling. That's where Vasterior steps in, blending thoughtful interior design with precise MahaVastu principles to create spaces in Chandausi that feel balanced, supportive, and effortlessly powerful.
              </p>
            </div>

            {/* Trusted Specialist */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Trusted Vastu Specialist in Chandausi - Designed for Modern Living
              </h3>
              <p className="mt-4">
                Chandausi is evolving. Homes are becoming more modern, businesses more ambitious, and lifestyles more fast-paced. Yet, many spaces are still planned without considering directional energy, element balance, or flow.
              </p>
              <p>
                Generic Vastu advice found online or passed down casually often fails because it ignores the purpose of the space and the people using it. Vasterior approaches Vastu as a personalized science, not a one-size-fits-all checklist.
              </p>
              <p>Every consultation considers your plot, construction, interiors, lifestyle, and goals. The result? Spaces that don't just look aligned on paper but feel right in real life.</p>
            </div>

            {/* MahaVastu Principles */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                MahaVastu Principles - Practical, Powerful, No Demolition
              </h3>
              <p className="mt-4">
                At the core of Vasterior's work lies MahaVastu, a modern, results-driven approach to Vastu Shastra. Unlike traditional methods that rely heavily on structural changes or rigid rules, MahaVastu focuses on subtle yet impactful corrections, often without breaking walls or rebuilding spaces.
              </p>
              <p>
                Through directional balancing, element alignment, color usage, material selection, and placement strategies, Vasterior helps correct energy imbalances in existing as well as newly designed spaces. The emphasis is always on practicality, logic, and long-term harmony, never superstition or fear-based fixes.
              </p>
            </div>

            {/* Interior Design Meets Energy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Where Interior Design Meets Energy Alignment
              </h3>
              <p className="mt-4">
                What sets Vasterior apart as a Vastu specialist in Chandausi is the seamless integration of interior design and Vastu. Instead of treating Vastu as an afterthought, it is woven into the design process from the very beginning.
              </p>
              <p>
                Layout planning, furniture placement, lighting, textures, and color palettes are all thoughtfully chosen to support energy flow while maintaining a refined, modern aesthetic. The outcome is a space that feels visually calm, emotionally grounding, and energetically supportive, without looking overtly "Vastu-designed."
              </p>
            </div>

            {/* Who Can Benefit */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Who Can Benefit from Vasterior's Vastu Services?
              </h3>
              <p className="mt-4">Vasterior works with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Homeowners seeking peace, health, and stability</li>
                <li>Families moving into new homes or renovating existing ones</li>
                <li>Business owners aiming for growth, clarity, and customer flow</li>
                <li>Offices, clinics, shops, and showrooms needing functional and energetic balance</li>
              </ul>
              <p>Whether it's a compact apartment or a full-scale commercial project, the approach remains intentional, detailed, and deeply personalized.</p>
            </div>

            {/* Why Clients Trust */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Clients Trust Vasterior
              </h3>
              <p className="mt-4">
                Clients choose Vasterior not just for Vastu advice, but for clarity, honesty, and results-driven solutions. The focus is never on creating dependency or fear, only on empowering people to understand their spaces better and align them with their intentions.
              </p>
              <p>Every recommendation is explained logically, implemented aesthetically, and aligned with real-life practicality. That's what makes the transformation feel natural, not forced.</p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. Is MahaVastu different from traditional Vastu?
                  </h3>
                  <p>Yes. MahaVastu is a modern, simplified system that focuses on practical corrections rather than rigid rules or major structural changes. It emphasizes energy balance without demolition.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Can Vastu be applied to an already constructed home or office?
                  </h3>
                  <p>Absolutely. Most MahaVastu solutions work perfectly for existing spaces and often require only subtle adjustments in placement, colors, or elements.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Will my interiors look traditional or overly spiritual?
                  </h3>
                  <p>Not at all. Vasterior specializes in modern, elegant interiors where Vastu alignment is invisible, but strongly felt.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Do you offer Vastu services along with interior design?
                  </h3>
                  <p>Yes. Vasterior integrates Vastu principles directly into interior planning, ensuring both aesthetics and energy work together seamlessly.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. How long does it take to see results after Vastu corrections?
                  </h3>
                  <p>Many clients notice changes in mood, clarity, and flow within weeks. Results vary depending on the space and level of correction, but alignment often brings gradual, lasting improvements.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. How do I get started with a Vastu consultation in Chandausi?
                  </h3>
                  <p>The easiest way is to initiate a conversation, either by calling +917906086899 or sending an email to spacebuild.india@gamil.com. From there, the process is explained step-by-step based on your needs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
              Let's Align Your Space - Naturally
            </h3>
            <p className="text-center mb-6">
              If you've been feeling that something in your space is "off" but can't quite pinpoint it, a simple conversation can bring clarity.
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

          <PostNavigation slug="vastu-specialist-in-chandausi" />
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
