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
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 text-gray-900">
            Vastu for Prosperity in Chandausi
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
            Because a well-designed space should work for you, not against you.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p className="text-lg mb-4">
                Vasterior believes that prosperity isn’t accidental, it’s designed. In homes and businesses across Chandausi, we help people realign their spaces so growth, stability, and opportunities flow naturally.
              </p>
              <p className="text-lg">
                By integrating premium interior design with the precise principles of MahaVastu, Vasterior creates environments that don’t just look good, but actively support wealth, harmony, and long-term success.
              </p>
            </div>

            {/* Why Vastu for Prosperity */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vastu for Prosperity Matters Today
              </h3>
              <p className="mt-4">
                Modern life is fast, demanding, and often chaotic. Yet many homes and workplaces are unknowingly designed in ways that block growth, financial, emotional, and professional.
              </p>
              <p className="mt-4">
                Vastu isn’t about superstition or rituals; it’s about energy alignment. When your space is aligned correctly:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Decisions feel clearer</li>
                <li>Work flows with fewer obstacles</li>
                <li>Stress reduces</li>
                <li>Finances stabilize and grow</li>
                <li>Relationships improve</li>
              </ul>
              <p className="mt-4">
                In a growing town like Chandausi, where families are upgrading homes and businesses are expanding, Vastu for prosperity becomes less of a belief system and more of a strategic advantage.
              </p>
            </div>

            {/* MahaVastu Difference */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes MahaVastu Different (and More Powerful)
              </h3>
              <p className="mt-4">
                MahaVastu is not old-school Vastu with rigid rules and fear-based corrections. It’s a scientific, directional, and result-oriented system that works with modern construction realities.
              </p>
              <p className="mt-4">MahaVastu focuses on:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Directional energy balance</li>
                <li>Practical corrections without demolition</li>
                <li>Alignment of entrances, kitchens, bedrooms, workstations, and cash zones</li>
                <li>Remedies that are subtle, logical, and sustainable</li>
              </ul>
              <p className="mt-4">
                At Vasterior, MahaVastu is not an add-on service, it’s the foundation of every design decision we make.
              </p>
            </div>

            {/* How Vasterior Applies MahaVastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                How Vasterior Applies MahaVastu in Real Spaces
              </h3>
              <p className="mt-4">
                We don’t “fix” spaces after they’re built. We design with alignment from day one.
              </p>
              <h4 className="mt-4 font-semibold">For Homes</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Wealth-enhancing layouts for living rooms and master bedrooms</li>
                <li>Kitchen and dining alignment for stability and nourishment</li>
                <li>Bedroom placements that support peace, health, and relationships</li>
              </ul>
              <h4 className="mt-4 font-semibold">For Businesses &amp; Commercial Spaces</h4>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Office layouts that improve productivity and leadership clarity</li>
                <li>Shop and showroom planning to attract customers and sales</li>
                <li>Clinics, studios, and workspaces designed for trust and growth</li>
              </ul>
              <p className="mt-4">
                Every recommendation is customized. No copy-paste Vastu. No generic interiors.
              </p>
            </div>

            {/* Vasterior Difference */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The Vasterior Difference in Chandausi
              </h3>
              <p className="mt-4">
                What sets Vasterior apart isn’t just knowledge, it’s execution.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Deep expertise in MahaVastu principles</li>
                <li>Strong sense of modern interior aesthetics</li>
                <li>Respect for client lifestyle, budget, and goals</li>
                <li>Calm, practical guidance, no fear-based Vastu talk</li>
                <li>Solutions that feel natural, not forced</li>
              </ul>
              <p className="mt-4">
                We design spaces that feel lighter, calmer, and more aligned—because that’s when prosperity shows up without resistance.
              </p>
            </div>

            {/* Client Outcomes */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Clients Actually Experience
              </h3>
              <p className="mt-4">
                Clients often come to us looking for “Vastu for money.” What they leave with is much more:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Better focus and mental clarity</li>
                <li>Smoother business operations</li>
                <li>Improved family harmony</li>
                <li>Consistent financial growth</li>
                <li>A sense of control over their environment</li>
              </ul>
              <p className="mt-4">
                That’s the real power of aligned design.
              </p>
            </div>

            {/* CTA Text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Ready to Align Your Space with Prosperity?
              </h3>
              <p className="mt-4">
                Sometimes, all it takes is one conversation to see what’s blocking growth in your space. Whether you’re planning a new home, redesigning an office, or simply feeling that something is “off,” guidance is closer than you think.
              </p>
              <p className="mt-4">
                A quick call at{" "}
                <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                  +917906086899
                </a>{" "}
                can help you understand how your space can start supporting your goals instead of silently working against them. And if you prefer to begin thoughtfully, writing to{" "}
                <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                  spacebuild.india@gamil.com
                </a>{" "}
                is often the first aligned step toward lasting change.
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
                    1. Is MahaVastu different from traditional Vastu?
                  </h3>
                  <p>
                    Yes. MahaVastu is more practical, scientific, and flexible. It works with existing structures and modern lifestyles instead of demanding major structural changes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do I need to break walls or rebuild my home?
                  </h3>
                  <p>
                    No. Most MahaVastu corrections are non-destructive and subtle. Vasterior focuses on smart design alignment rather than expensive demolition.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Can Vastu really improve financial prosperity?
                  </h3>
                  <p>
                    When applied correctly, Vastu removes energetic blockages that affect decision-making, opportunities, and stability. Prosperity often improves as a natural outcome.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Is Vasterior only for new constructions?
                  </h3>
                  <p>
                    Not at all. We work with new homes, existing houses, offices, shops, and commercial spaces across Chandausi.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. How long does it take to see results?
                  </h3>
                  <p>
                    Many clients notice changes within weeks, while deeper shifts happen over time as the space settles into alignment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. Does Vasterior handle both interiors and Vastu together?
                  </h3>
                  <p>
                    Yes, and that’s our core strength. Design and Vastu are integrated, not treated as separate services.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Start Your Prosperity Alignment
              </h3>
              <p className="text-center mb-6">
                Your space can either hold you back or help you move forward. The choice to realign starts with a single step.
              </p>
              <div className="text-center space-y-3">
                <p className="font-semibold">
                  📞 Call:{" "}
                  <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                    +917906086899
                  </a>
                </p>
                <p className="font-semibold">
                  📧 Email:{" "}
                  <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                    spacebuild.india@gamil.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="vastu-for-prosperity-in-chandausi" />
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
