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
            Vastu for Peace at Home in Chandausi
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
            A Home That Supports You, Every Day
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p className="text-lg mb-4">
                Vasterior believes that peace at home isn't something you stumble upon by luck, it's something you design, align, and live into. In a world that's constantly loud, rushed, and overstimulating, your home should be the one place that slows you down, holds you steady, and restores your balance.
              </p>
              <p className="text-lg">
                If your space looks beautiful but doesn't feel calm, there's a reason, and it often has nothing to do with effort or intention. In Chandausi, where homes are deeply personal and family life is closely intertwined, even subtle spatial imbalances can quietly affect mental peace, relationships, sleep, and focus.
              </p>
              <p className="text-lg">
                Vasterior helps realign homes using the practical, modern principles of MahaVastu, creating spaces that support harmony, not resistance.
              </p>
            </div>

            {/* Peace is Designed */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Peace at Home Is Designed, Not Discovered
              </h3>
              <p className="mt-4">
                Most people assume peace is emotional. In reality, it's also spatial. The way a home is oriented, how rooms are placed, where light flows, and how movement happens inside a space all influence the human nervous system.
              </p>
              <p className="mt-4">
                A poorly aligned bedroom can disturb sleep. An imbalanced kitchen can create friction. Incorrect placement of entrances or heavy elements can trigger restlessness that no amount of décor can fix.
              </p>
              <p className="mt-4">
                Peace isn't about removing problems, it's about removing friction. And that's exactly where Vastu, when applied correctly, changes everything.
              </p>
            </div>

            {/* MahaVastu Benefits */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What MahaVastu Means in Real Life
              </h3>
              <p className="mt-4">
                MahaVastu isn't about rigid rules or outdated beliefs. It's a practical system that studies how space, direction, and energy interact with human life.
              </p>
              <p className="mt-4">At Vasterior, MahaVastu is used to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Improve mental calm and emotional stability</li>
                <li>Encourage smoother family relationships</li>
                <li>Support financial flow and decision-making</li>
                <li>Enhance focus, sleep quality, and overall well-being</li>
              </ul>
              <p className="mt-4">
                Most importantly, corrections are non-invasive wherever possible. No unnecessary demolition. No forcing drastic changes. The goal is alignment, not disruption.
              </p>
            </div>

            {/* Vasterior Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The Vasterior Way: Where Design Meets Alignment
              </h3>
              <p className="mt-4">
                Vasterior doesn't treat interior design and Vastu as two separate conversations. They are deeply connected. Every layout decision, material choice, and spatial adjustment is made with both aesthetics and energy in mind.
              </p>
              <p className="mt-4">
                The result? Homes that look intentional and feel right. There are no templates here. Every home is observed, understood, and aligned based on its unique layout, the people living in it, and their lived realities.
              </p>
            </div>

            {/* Common Signs */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Common Signs Your Home Needs Vastu Alignment
              </h3>
              <p className="mt-4">
                Many homeowners in Chandausi reach out when they notice patterns they can't explain:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Constant mental restlessness or poor sleep</li>
                <li>Frequent arguments or emotional tension</li>
                <li>Financial stagnation despite effort</li>
                <li>Children struggling to focus or settle</li>
                <li>A home that feels "heavy" or draining for no clear reason</li>
              </ul>
              <p className="mt-4">
                These aren't failures, they're signals. And once identified, they can be corrected thoughtfully.
              </p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                How Vasterior Creates Peaceful Homes
              </h3>
              <p className="mt-4">
                The process is calm, structured, and respectful of your space:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mt-4">
                <li>Detailed Space Assessment – Understanding layout, direction, and existing energy flow</li>
                <li>MahaVastu Analysis – Identifying imbalances that affect daily life</li>
                <li>Practical Corrections – Through layout changes, placements, colors, or design interventions</li>
                <li>Integrated Design Guidance – Ensuring beauty and balance coexist</li>
              </ol>
              <p className="mt-4">
                The focus is long-term peace, not temporary fixes.
              </p>
            </div>

            {/* Reputation */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Quiet Reputation Built on Trust
              </h3>
              <p className="mt-4">
                Vasterior works with discretion, clarity, and intention. Most relationships begin with a conversation—and often continue for years. The approach is consultative, never forceful.
              </p>
              <p className="mt-4">
                Because when it comes to homes, trust matters more than trends.
              </p>
            </div>

            {/* Conversation CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Let's Begin with a Conversation
              </h3>
              <p className="mt-4">
                If you've been feeling that something in your home is slightly off but can't quite name it, a simple conversation can bring clarity. Many homeowners start by speaking directly with the Vasterior team over a call at{" "}
                <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                  +917906086899
                </a>
                , where concerns are heard before solutions are suggested.
              </p>
              <p className="mt-4">
                For those who prefer to take the first step quietly, writing to{" "}
                <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                  spacebuild.india@gamil.com
                </a>{" "}
                is an easy, pressure-free way to begin exploring what alignment could look like for your home.
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
                    1. Is Vastu really necessary if my home already looks good?
                  </h3>
                  <p>
                    Yes. Aesthetic beauty and energetic balance are different layers. A home can look perfect and still feel unsettled. Vastu addresses what design alone cannot.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do MahaVastu corrections require breaking walls or major construction?
                  </h3>
                  <p>
                    In most cases, no. Vasterior focuses on practical, non-invasive corrections that work with your existing structure.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Can Vastu help with mental peace and sleep issues?
                  </h3>
                  <p>
                    Absolutely. Bedrooms, directions, and spatial weight play a huge role in rest and mental calm. Correcting these often brings noticeable improvements.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Is this service only for new homes?
                  </h3>
                  <p>
                    Not at all. Many clients approach Vasterior for existing homes that need alignment without renovation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. How do I know if my home needs Vastu alignment?
                  </h3>
                  <p>
                    If you've tried improving things externally but something still feels off internally, that's usually the sign. A consultation helps confirm this.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. Do you provide services specifically in Chandausi?
                  </h3>
                  <p>
                    Yes. Vasterior works closely with homeowners in and around Chandausi, understanding local living patterns and home layouts.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Create Lasting Peace at Home
              </h3>
              <p className="text-center mb-6">
                Peace isn't dramatic. It's subtle. It's waking up rested. It's conversations that flow. It's a space that gives back instead of taking from you.
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

          <PostNavigation slug="vastu-for-peace-at-home-in-chandausi" />
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
