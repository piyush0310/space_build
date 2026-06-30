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
            Vastu Consultant in Green Park, South Delhi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a home should do more than look beautiful, it should support
              you. In a refined neighborhood like Green Park, where homes reflect years of
              aspiration and achievement, Vastu is not about superstition or rigid rules, it is
              about alignment, alignment between space, energy, and the life you are building.
            </p>
            <p>
              As a trusted Vastu consultant in Green Park, South Delhi, Vasterior helps homeowners
              create spaces that feel calmer, clearer, and quietly powerful, without disrupting
              their lifestyle or design sensibilities. Homes here are layered with history,
              including renovated apartments, builder floors, inherited properties, and thoughtfully
              designed new residences. Each one carries its own energy patterns, and our role is to
              read those patterns and realign them so your home starts working with you, not against
              you.
            </p>

            {/* Why Vastu matters */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu Matters for Homes in Green Park
            </h3>
            <p>
              Green Park homes are rarely blank slates. They come with architectural constraints,
              prior modifications, and real-life usage patterns that standard Vastu advice often
              ignores. Generic remedies do not work here, and they do not belong in refined living
              spaces anyway.
            </p>
            <p>
              What homeowners in Green Park actually need is a practical, design-sensitive Vastu
              approach, one that respects modern layouts, premium interiors, and the reality of
              lived-in homes. Whether it is recurring stress, financial stagnation, health
              concerns, or simply a sense that something feels off, these signals often trace back
              to spatial imbalances.
            </p>
            <p>
              Vasterior approaches Vastu as a corrective design science, not a belief system. The
              goal is subtle correction, not dramatic disruption.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Vastu Consulting Philosophy
            </h3>
            <p>
              At Vasterior, Vastu consulting is never separated from design thinking. We follow
              MahaVastu-aligned principles, interpreted through a modern lens that prioritizes flow,
              proportion, materiality, and daily human movement within the space.
            </p>
            <p>Our approach focuses on:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Non-invasive corrections wherever possible</li>
              <li>Energy balancing through layout, zoning, and directional use</li>
              <li>Strategic use of colours, materials, and elements</li>
              <li>Alignment of entrances, kitchens, bedrooms, and work zones</li>
              <li>Solutions that integrate seamlessly with existing interiors</li>
            </ul>
            <p>
              There are no forced demolitions, no fear-driven recommendations, and no cluttered
              remedies that disrupt aesthetics. Every suggestion is intentional, measured, and
              personalised.
            </p>

            {/* New vs existing */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vastu Consulting for New Homes and Existing Residences
            </h3>
            <p>
              Vasterior works with both new constructions and lived-in homes across Green Park and
              South Delhi.
            </p>
            <p>For new homes, we assist with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Layout planning and directional zoning</li>
              <li>Entrance and room placement guidance</li>
              <li>Early-stage energy alignment to prevent long-term issues</li>
            </ul>
            <p>For existing homes, we focus on:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Correcting imbalances without major reconstruction</li>
              <li>Enhancing peace, stability, and clarity within the current structure</li>
              <li>Fine-tuning spaces that impact health, relationships, and work</li>
            </ul>
            <p>The idea is simple: your home should feel supportive, not demanding.</p>

            {/* Who this is for */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Typically Seeks a Vastu Consultant at Vasterior
            </h3>
            <p>
              Our clients are thoughtful, design-aware individuals who want more than surface-level
              fixes. They often include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Homeowners feeling stuck despite doing everything right</li>
              <li>Families seeking harmony, better sleep, or emotional balance</li>
              <li>Professionals wanting stronger focus and career momentum</li>
              <li>People renovating homes and wanting to do it right this time</li>
            </ul>
            <p>They do not want dogma, they want clarity and results that feel natural.</p>

            {/* Why choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Homeowners in Green Park Choose Vasterior
            </h3>
            <p>What sets Vasterior apart is not louder promises, it is quieter confidence.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Understanding of South Delhi homes and their architectural realities</li>
              <li>Blending of Vastu with refined interior sensibility</li>
              <li>Focus on long-term alignment, not short-term fixes</li>
              <li>Respect for privacy, discretion, and personal belief boundaries</li>
              <li>Treating Vastu as a strategic layer, not a visual intrusion</li>
            </ul>
            <p>Our work is meant to be felt, not flaunted.</p>

            {/* CTA */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin a Thoughtful Vastu Consultation
            </h3>
            <p>
              If you have been sensing that your home could support you better, or you are planning
              a renovation and want to align it intelligently, a conversation is the best place to
              start. You can speak directly with the Vasterior team by calling{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "}.
            </p>
            <p>
              If you prefer a quieter first step, you can write to{" "}
              <a
                href="mailto:spacebuild.india@gamil.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gamil.com
              </a>{" "}
              to share details about your space and concerns before we guide you further. There is
              no pressure, just clarity, direction, and an approach rooted in balance.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <span className="font-semibold">
                  Is Vastu consultation possible without structural changes?
                </span>{" "}
                Yes. In most Green Park homes, Vasterior focuses on non-invasive corrections that
                work with your existing layout and interiors.
              </li>
              <li>
                <span className="font-semibold">
                  Do you follow traditional or modern Vastu principles?
                </span>{" "}
                We follow MahaVastu-aligned principles interpreted through a contemporary,
                design-led framework that is practical, flexible, and realistic.
              </li>
              <li>
                <span className="font-semibold">
                  Can Vastu be integrated with luxury interiors?
                </span>{" "}
                Absolutely. Our recommendations are designed to enhance aesthetics, not compromise
                them.
              </li>
              <li>
                <span className="font-semibold">
                  Is Vastu consultation useful for apartments and builder floors?
                </span>{" "}
                Yes. Many of our consultations focus on apartments and builder floors where
                intelligent adjustments make the biggest difference.
              </li>
              <li>
                <span className="font-semibold">
                  Do I need to believe in Vastu for it to work?
                </span>{" "}
                Belief is not required. Vastu works at the level of spatial logic and energy flow,
                and most clients notice changes simply by living in a better-aligned space.
              </li>
            </ol>
          </div>

          <PostNavigation slug="vastu-consultant-in-green-park-south-delhi" />
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
