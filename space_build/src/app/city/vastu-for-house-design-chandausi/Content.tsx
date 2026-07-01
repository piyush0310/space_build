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
            Vastu for House Design in Chandausi
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
            Thoughtful Homes. Balanced Energy. Designed to Support Your Life.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior brings together intentional interior design and the precision of MahaVastu to create homes in Chandausi that feel calm, aligned, and genuinely supportive. This isn't about superstition or fear-based Vastu, it's about designing living spaces that work with natural energy, not against it.
              </p>
              <p className="mt-4">
                A well-designed home should do more than look good. It should help you sleep better, think clearer, feel grounded, and grow, personally and professionally. That's exactly where our approach to Vastu for house design in Chandausi makes a real difference.
              </p>
            </div>

            {/* Why Vastu Is Essential */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vastu Is Essential in Modern House Design
              </h3>
              <p className="mt-4">
                Most homes are built with measurements and materials, but not enough intention. When room placement, directions, or layouts are ignored, the impact shows up slowly: restlessness, constant stress, lack of focus, or things simply not moving forward in life.
              </p>
              <p className="mt-4">
                In Chandausi, where traditional values meet modern construction, many homes face:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Layouts designed without directional awareness</li>
                <li>Renovations that disturb energy balance</li>
                <li>Modern interiors clashing with natural flow</li>
              </ul>
              <p className="mt-4">
                Vastu, when applied correctly, brings alignment back into the space. It's not about rigid rules—it's about creating harmony between structure, movement, and energy so the home starts supporting you quietly, every day.
              </p>
            </div>

            {/* MahaVastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                MahaVastu: Practical, Scientific, and Non-Intrusive
              </h3>
              <p className="mt-4">
                At Vasterior, we follow MahaVastu, a refined and modern system rooted in classical Vastu Shastra but adapted for today's homes.
              </p>
              <p className="mt-4">What makes MahaVastu effective:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>No demolition or drastic structural changes</li>
                <li>Direction-based energy corrections</li>
                <li>Logical, science-backed principles</li>
                <li>Ideal for both new and existing homes</li>
              </ul>
              <p className="mt-4">
                This approach respects tradition without forcing it. The goal is balance, not disruption.
              </p>
            </div>

            {/* Integrated Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior's Integrated Vastu + Interior Design Approach
              </h3>
              <p className="mt-4">
                We don't "add" Vastu after designing interiors, we design with Vastu from the start.
              </p>
              <p className="mt-4">Our process considers:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Plot and layout planning</li>
                <li>Correct placement of bedrooms, kitchen, living areas, and pooja spaces</li>
                <li>Furniture positioning that allows energy to flow naturally</li>
                <li>Colors, materials, and elements chosen with intention</li>
                <li>Lighting and spatial balance for mental and emotional calm</li>
              </ul>
              <p className="mt-4">
                The result is a home that feels aesthetically refined, emotionally grounding, and energetically aligned, without looking forced or formulaic.
              </p>
            </div>

            {/* Who This Service Is For */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Who This Service Is Meant For
              </h3>
              <p className="mt-4">
                Our Vastu for house design services in Chandausi are ideal if you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Are building a new home</li>
                <li>Are renovating or redesigning your interiors</li>
                <li>Feel something is "off" in your current space</li>
                <li>Want long-term harmony, not temporary fixes</li>
                <li>Prefer logic, clarity, and design-led Vastu guidance</li>
              </ul>
              <p className="mt-4">
                If your home is important to you beyond surface-level beauty, this approach fits.
              </p>
            </div>

            {/* Calm Guidance */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Calm Guidance. No Fear. No Extremes.
              </h3>
              <p className="mt-4">
                We believe Vastu should bring confidence and clarity, not anxiety. Our consultations are practical, respectful, and tailored to your space and lifestyle. No exaggerated promises. No unnecessary changes. Just informed guidance based on MahaVastu principles and real-world experience.
              </p>
              <p className="mt-4">
                Often, a short conversation is enough to understand what your home truly needs. A simple call can open that door, and for those who prefer writing, reaching out by email is just as effective.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. What is MahaVastu?
                  </h3>
                  <p>
                    MahaVastu is a modern, scientific approach to Vastu that focuses on energy balance using directions, placements, and subtle corrections—without demolition or drastic changes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Can Vastu be applied to an already constructed house?
                  </h3>
                  <p>
                    Yes. MahaVastu works extremely well for existing homes and lived-in spaces through non-invasive corrections.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Will Vastu changes affect my interior design?
                  </h3>
                  <p>
                    No. At Vasterior, Vastu and interior design are planned together, ensuring the home remains visually refined and cohesive.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Is Vastu relevant for modern homes and apartments?
                  </h3>
                  <p>
                    Absolutely. In fact, modern lifestyles benefit greatly from Vastu-aligned spaces that promote calm, focus, and stability.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. Do I need to follow strict rules?
                  </h3>
                  <p>
                    No rigid rules or fear-based guidelines are involved. Every recommendation is practical, contextual, and tailored to your home.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. How do I begin with Vasterior?
                  </h3>
                  <p>
                    You can start with a simple conversation. A quick call helps assess your needs, or you can share details comfortably via email.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
              Let Your Home Work in Your Favour
            </h3>
            <p className="text-center mb-6">
              Your home already holds energy. The choice is whether it supports you, or silently holds you back.
            </p>
            <p className="text-center mb-6">
              If you're looking for Vastu for house design in Chandausi, Vasterior offers a balanced, design-first approach rooted in MahaVastu. A quiet discussion over a call at +917906086899 can bring surprising clarity. Or, if it feels easier to start in writing, an email to spacebuild.india@gmail.com is always welcome.
            </p>
            <div className="text-center space-y-3">
              <p className="font-semibold">
                📞 Call: <a href="tel:+917906086899" className="text-blue-600 hover:underline">+917906086899</a>
              </p>
              <p className="font-semibold">
                📧 Email: <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">spacebuild.india@gmail.com</a>
              </p>
            </div>
          </div>

          <PostNavigation slug="vastu-for-house-design-in-chandausi" />
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
