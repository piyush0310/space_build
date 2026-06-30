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
            Vastu Planning for Home in Chandausi
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Align Your Space. Elevate Your Life.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p className="text-lg mb-4">
                Vasterior believes that a home is not just designed, it is tuned. Tuned to your energy, your intentions, and the life you want to live. 
              </p>
              <p className="text-lg mb-4">
                Our approach to Vastu Planning for Home in Chandausi blends refined interior design with the precision of MahaVastu principles, creating spaces that feel calm, balanced, and quietly powerful from the moment you step in.
              </p>
              <p className="text-lg">
                This isn't superstition. This is spatial intelligence, applied beautifully.
              </p>
            </div>

            {/* Why Planning Matters */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vastu Planning Matters for Homes in Chandausi
              </h3>
              <p className="mt-4">
                Modern homes in Chandausi are evolving, apartments, villas, independent houses, renovations. But many spaces still suffer from invisible imbalances: constant stress, financial blocks, disturbed sleep, or that something feels off energy.
              </p>
              <p className="mt-4">
                When your home's layout, directions, and energy flow are aligned correctly, life starts flowing smoother too. From better health and relationships to financial clarity and mental peace, the impact of Vastu-aligned spaces goes far beyond walls and furniture.
              </p>
              <p className="mt-4">
                At Vasterior, we design homes that support your life, not work against it.
              </p>
            </div>

            {/* MahaVastu Advantage */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why MahaVastu Is the Smarter Choice for Modern Homes
              </h3>
              <p className="mt-4">
                Traditional Vastu often feels rigid and impractical, especially for already-constructed homes. That's where MahaVastu changes the game.
              </p>
              <p className="mt-4">
                MahaVastu is a modern, scientific, and deeply practical system that works with existing structures rather than demanding demolition or unrealistic changes.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>No unnecessary breaking or rebuilding</li>
                <li>Direction-based energy correction using subtle remedies</li>
                <li>Works effectively for apartments, villas, and independent homes</li>
                <li>Focuses on results, not rituals</li>
                <li>Compatible with contemporary interior design</li>
              </ul>
            </div>

            {/* Interior Design Meets Energy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Where Interior Design Meets Energy Alignment
              </h3>
              <p className="mt-4">
                Most designers focus on how a home looks. Most Vastu consultants focus on directions. Vasterior does both, intentionally.
              </p>
              <p className="mt-4">
                We design interiors that are:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Visually elegant</li>
                <li>Functionally smart</li>
                <li>Energetically aligned</li>
              </ul>
              <p className="mt-4">
                From room layouts and furniture placement to color palettes, lighting, materials, and finishes, every element is planned to enhance both aesthetics and energy flow.
              </p>
              <p className="mt-4 font-semibold">
                Your home doesn't have to look spiritual to feel powerful.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Vastu Planning Services for Homes in Chandausi
              </h3>
              <ul className="list-disc list-inside space-y-4 ml-4 mt-6">
                <li>
                  <strong>Vastu consultation using MahaVastu principles</strong>
                  <br />
                  Comprehensive analysis of your home's energy and layout
                </li>
                <li>
                  <strong>Layout correction for existing homes</strong>
                  <br />
                  Smart adjustments that work within your current structure
                </li>
                <li>
                  <strong>Vastu-aligned interior design planning</strong>
                  <br />
                  Beautiful spaces that are also energetically balanced
                </li>
                <li>
                  <strong>Room-wise energy optimization</strong>
                  <br />
                  Bedroom, kitchen, pooja, living area - all aligned perfectly
                </li>
                <li>
                  <strong>Color, material, and element balancing</strong>
                  <br />
                  Harmonious selections that enhance both look and energy
                </li>
                <li>
                  <strong>Guidance during construction or renovation</strong>
                  <br />
                  Expert support from planning to completion
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Benefits of a Vastu-Aligned Home by Vasterior
              </h3>
              <p className="mt-4">
                Clients often tell us the shift is subtle—but undeniable.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Calmer, more peaceful living environment</li>
                <li>Better sleep and mental clarity</li>
                <li>Improved family harmony</li>
                <li>Stronger financial stability and opportunities</li>
                <li>A home that feels lighter, balanced, and welcoming</li>
              </ul>
              <p className="mt-4 font-semibold">
                When your space is aligned, you feel aligned.
              </p>
            </div>

            {/* Who It's For */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Who Is This Ideal For?
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Building a new home and want it done right from day one</li>
                <li>Living in a house that feels stuck or draining</li>
                <li>Renovating and want both beauty and balance</li>
                <li>A believer in energy alignment, but grounded and practical</li>
                <li>Someone who values design, intention, and long-term wellbeing</li>
              </ul>
            </div>

            {/*SPACE BUILD */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Homeowners in Chandausi Choose Vasterior
              </h3>
              <p className="mt-4 font-semibold">
                Because we don't push beliefs, we deliver results.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Deep expertise in MahaVastu</li>
                <li>Design-first, energy-aligned approach</li>
                <li>Honest guidance without fear tactics</li>
                <li>Premium yet practical solutions</li>
                <li>One-on-one attention, not cookie-cutter advice</li>
              </ul>
            </div>

            {/* CTA Text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Let's Align Your Home, Thoughtfully
              </h3>
              <p className="mt-4">
                If you're ready to bring clarity, harmony, and intention into your home, a simple conversation can be the first step.
              </p>
              <p className="mt-4">
                You can speak directly with a Vasterior expert by calling{" "}
                <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                  +917906086899
                </a>
                , or share your home details at{" "}
                <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                  spacebuild.india@gamil.com
                </a>{" "}
                to begin a personalized Vastu planning journey, without pressure, without overwhelm.
              </p>
              <p className="mt-4 font-semibold">
                Your home already holds potential. Let's unlock it properly.
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
                    1. What is Vastu planning and how does it help a home?
                  </h3>
                  <p>
                    Vastu planning focuses on aligning a home's layout, directions, and elements with natural energies. When done correctly, it enhances peace, health, relationships, and financial flow within the home.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. What is MahaVastu and how is it different from traditional Vastu?
                  </h3>
                  <p>
                    MahaVastu is a modern, practical system that works with existing structures. It avoids demolition and focuses on subtle yet effective corrections, making it ideal for contemporary homes and apartments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Can Vastu be applied to already constructed homes?
                  </h3>
                  <p>
                    Yes. Vasterior specializes in Vastu planning for existing homes in Chandausi using MahaVastu principles, without breaking walls or major reconstruction.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Will Vastu changes affect my interior design?
                  </h3>
                  <p>
                    Not at all. In fact, our approach integrates Vastu seamlessly into interior design, ensuring your home remains stylish, modern, and visually refined.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. How long does it take to see results after Vastu alignment?
                  </h3>
                  <p>
                    Many clients notice shifts in energy, mood, and overall comfort within weeks. Tangible results vary depending on the home and corrections applied.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. Do you provide on-site Vastu consultations in Chandausi?
                  </h3>
                  <p>
                    Yes. Vasterior offers both on-site and guided consultations, depending on the project requirements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    7. How do I get started with Vasterior?
                  </h3>
                  <p>
                    Simply call{" "}
                    <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                      +917906086899
                    </a>{" "}
                    or email{" "}
                    <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                      spacebuild.india@gamil.com
                    </a>
                    , and we'll guide you from there.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Ready to Plan Your Vastu-Aligned Home?
              </h3>
              <p className="text-center mb-6">
                Vasterior – where beautiful design meets intelligent energy alignment.
              </p>
              <div className="text-center space-y-3">
                <p>
                  📞 Call:{" "}
                  <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                    +917906086899
                  </a>
                </p>
                <p>
                  📧 Email:{" "}
                  <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                    spacebuild.india@gamil.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="vastu-planning-for-home-in-chandausi" />
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
