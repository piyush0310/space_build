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
            Vastu Consultation at Home in Chandausi
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Align Your Space. Unlock Flow. Live Better.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p className="text-lg mb-4">
                Vasterior believes your home isn't just where you live, it's where your energy compounds. When spaces are misaligned, life feels heavy: decisions get harder, peace feels distant, and progress slows down. 
              </p>
              <p className="text-lg mb-4">
                Through personalized Vastu Consultation at Home in Chandausi, Vasterior helps realign your living space using authentic MahaVastu principles, blended seamlessly with thoughtful interior design.
              </p>
              <p className="text-lg">
                This isn't about superstition. It's about structure, direction, energy flow, and intentional design, all working together to support the life you're building.
              </p>
            </div>

            {/* Why In-Home */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Choose In-Home Vastu Consultation?
              </h3>
              <p className="mt-4">
                Every home has a unique energetic fingerprint. Floor plans on paper don't reveal how sunlight moves, how air circulates, or how people interact with a space daily. That's why on-site Vastu consultation matters.
              </p>
              <p className="mt-4">
                At Vasterior, we physically experience your space, observing directions, layout, light, furniture placement, entrances, and daily movement patterns. This allows us to identify energetic blockages and correct them practically, without disrupting your home or lifestyle.
              </p>
              <p className="mt-4 font-semibold">
                Because true alignment can't be guessed. It must be observed.
              </p>
            </div>

            {/* Vasterior Difference */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The Vasterior Difference: MahaVastu Meets Modern Interiors
              </h3>
              <p className="mt-4">
                Traditional Vastu often feels rigid, intimidating, or unrealistic for modern homes. MahaVastu is different, and so is Vasterior's approach.
              </p>
              <p className="mt-4">
                We don't ask you to break walls or rebuild your home. Instead, we:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Correct energy through layout optimization</li>
                <li>Balance elements using placement, color, materials, and proportions</li>
                <li>Integrate Vastu solutions directly into interior design decisions</li>
              </ul>
              <p className="mt-4">
                The result? A space that looks refined, feels calm, and supports growth, without compromise.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Vastu & Interior Alignment Services in Chandausi
              </h3>
              <ul className="list-disc list-inside space-y-4 ml-4 mt-6">
                <li>
                  <strong>Residential Vastu Consultation at Home</strong>
                  <br />
                  Detailed, room-by-room analysis of your house using MahaVastu principles to improve peace, health, and overall harmony.
                </li>
                <li>
                  <strong>Interior Layout & Space Planning</strong>
                  <br />
                  We redesign layouts to enhance energy flow while maintaining aesthetics, functionality, and comfort.
                </li>
                <li>
                  <strong>Non-Demolition Vastu Corrections</strong>
                  <br />
                  Smart, subtle solutions that correct imbalance without breaking walls or structural changes.
                </li>
                <li>
                  <strong>Energy Alignment for Existing Homes</strong>
                  <br />
                  Perfect for homes already built but feeling "off", mentally, emotionally, or financially.
                </li>
                <li>
                  <strong>Vastu-Aligned Interior Design</strong>
                  <br />
                  From furniture placement to colors and materials, every design choice is intentional and energy-aware.
                </li>
              </ul>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Changes When Your Space Is Aligned?
              </h3>
              <p className="mt-4">
                Clients often notice shifts that go beyond the physical space:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Improved mental clarity and emotional calm</li>
                <li>Better sleep and daily rhythm</li>
                <li>Stronger focus and productivity</li>
                <li>Healthier relationships at home</li>
                <li>Smoother financial flow and decision-making</li>
              </ul>
              <p className="mt-4 font-semibold">
                Your home begins working with you, not against you.
              </p>
            </div>

            {/* For Chandausi Homes */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Designed for Modern Homes in Chandausi
              </h3>
              <p className="mt-4">
                Whether you live in a newly constructed house or a long-established family home, Vasterior's Vastu consultation is designed for real homes and real lives in Chandausi. Our solutions respect your structure, budget, and lifestyle, while elevating the energy of your space.
              </p>
            </div>

            {/* CTA Text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Let's Begin with a Conversation
              </h3>
              <p className="mt-4">
                If your home feels heavy, chaotic, or stagnant, it's usually trying to communicate something. Understanding it starts with a conversation.
              </p>
              <p className="mt-4">
                A quick call to{" "}
                <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                  +917906086899
                </a>{" "}
                is often all it takes to explore whether Vastu consultation is right for your home. If you prefer something more detailed, a thoughtful note at{" "}
                <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                  info@spacebuild.com
                </a>{" "}
                allows us to understand your space before we even step in.
              </p>
              <p className="mt-4 font-semibold">Either way, clarity starts here.</p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. What is MahaVastu, and how is it different from traditional Vastu?
                  </h3>
                  <p>
                    MahaVastu is a modern, practical system derived from ancient Vastu principles. It focuses on energy balance without structural demolition, making it ideal for today's homes and apartments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do I need to break walls or rebuild my house?
                  </h3>
                  <p>
                    No. Vasterior specializes in non-demolition corrections. Most solutions involve layout changes, placement adjustments, and interior refinements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Is in-home Vastu consultation really necessary?
                  </h3>
                  <p>
                    Yes. Energy flow, light direction, and human movement can only be accurately assessed by physically experiencing the space.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Can Vastu be applied to an already furnished home?
                  </h3>
                  <p>
                    Absolutely. Many of our clients live in fully furnished homes. We work with what exists and optimize from there.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. How long does a home Vastu consultation take?
                  </h3>
                  <p>
                    Typically, an in-home consultation takes a few hours, depending on the size and complexity of the space.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. Will Vastu changes affect the look of my interiors?
                  </h3>
                  <p>
                    In most cases, interiors actually look better. Our approach blends aesthetics with energy, not against it.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    7. How do I get started with Vasterior in Chandausi?
                  </h3>
                  <p>
                    Simply reach out. A call on{" "}
                    <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                      +917906086899
                    </a>{" "}
                    or an email to{" "}
                    <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                      info@spacebuild.com
                    </a>{" "}
                    is the first step toward understanding what your space truly needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Ready to Transform Your Home?
              </h3>
              <p className="text-center mb-6">
                Vastu Consultation at Home with Vasterior – where your space becomes your silent ally.
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
                  <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                    info@spacebuild.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="vastu-consultation-at-home-in-chandausi" />
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
