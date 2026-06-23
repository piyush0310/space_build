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
            Interior Design Firm in South Delhi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior begins every space with one belief: a home should do more than look good, it
              should support the life lived inside it. As a leading interior design firm in South
              Delhi, Vasterior blends refined interior aesthetics with MahaVastu-aligned planning,
              creating homes that feel calm, intentional, and naturally aligned with your energy.
            </p>
            <p>This isn&apos;t décor for display.</p>
            <p>This is design that works, emotionally, energetically, and practically.</p>

            {/* Interior design done differently */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design in South Delhi – Done Differently
            </h3>
            <p>
              South Delhi homes carry history, aspiration, and high expectations. From builder
              floors and luxury apartments to independent villas, these spaces demand more than
              trend-led interiors.
            </p>
            <p>Most homeowners come to us with a familiar problem:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The home looks polished but feels restless</li>
              <li>Rooms don&apos;t flow the way life does</li>
              <li>Despite good design, something feels off</li>
            </ul>
            <p>That off feeling is rarely about furniture or finishes. It&apos;s about alignment.</p>
            <p>
              Vasterior approaches interior design in South Delhi with a deeper lens, one that
              considers layout, movement, light, direction, and energy alongside aesthetics. The
              result? Homes that don&apos;t just impress guests but genuinely support daily living.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Vasterior Philosophy: Design With Purpose
            </h3>
            <p>At Vasterior, design starts before mood boards and material samples.</p>
            <p>Every project begins with understanding:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>How you move through your day</li>
              <li>Where stress shows up in your home</li>
              <li>Which spaces feel heavy, blocked, or underused</li>
            </ul>
            <p>
              Using MahaVastu principles, we subtly align spatial planning so energy flows
              naturally, without religious symbolism or rigid rules. Think of it as logic-backed
              harmony, where layout decisions are intentional, not accidental.
            </p>
            <p>The outcome is simple but powerful:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A calmer home</li>
              <li>Clearer thinking</li>
              <li>Better sleep</li>
              <li>A sense of ease that grows over time</li>
            </ul>
            <p>No drama. No superstition. Just smart alignment.</p>

            {/* What makes Vasterior stand apart */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Vasterior Stand Apart
            </h3>
            <p>Most interior design firms stop at beautiful. Vasterior goes further.</p>
            <p>What sets us apart:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Energy-first planning: layouts are designed for flow before form</li>
              <li>MahaVastu integration: applied practically, not performatively</li>
              <li>No template interiors: every home is deeply customized</li>
              <li>Balanced luxury: modern aesthetics grounded in timeless principles</li>
              <li>Design for living: homes designed for real routines, not magazine spreads</li>
            </ul>
            <p>This is interior design that holds up long after trends fade.</p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Interior Design &amp; Vastu-Led Services
            </h3>
            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Residential Interior Design
            </h4>
            <p>Thoughtfully designed homes that reflect your lifestyle, not a catalog.</p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              MahaVastu-Aligned Space Planning
            </h4>
            <p>
              Subtle yet powerful alignment of rooms, entrances, kitchens, bedrooms, and
              workspaces.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Home Renovation &amp; Energy Correction
            </h4>
            <p>
              For homes that look fine but feel misaligned, we correct flow without structural
              chaos.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Layout Optimization for Apartments &amp; Builder Floors
            </h4>
            <p>
              Maximize space, clarity, and movement, especially crucial in South Delhi layouts.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Turnkey Interior Solutions
            </h4>
            <p>
              From concept to execution, handled seamlessly with design integrity intact.
            </p>

            {/* Why clients choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why South Delhi Clients Choose Vasterior
            </h3>
            <p>Clients don&apos;t come to Vasterior for quick makeovers. They come for clarity.</p>
            <p>They stay because:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The process feels calm and collaborative</li>
              <li>Decisions are explained, not imposed</li>
              <li>Design choices are intentional and future-proof</li>
              <li>The home feels noticeably better once complete</li>
            </ul>
            <p>
              Trust is built quietly, through listening, precision, and results that speak daily.
            </p>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let&apos;s Begin the Conversation
            </h3>
            <p>
              If your home looks complete but doesn&apos;t feel complete, that&apos;s worth paying
              attention to. A thoughtful conversation is often the first correction.
            </p>
            <p>
              You can speak directly with the Vasterior team by calling{" "}
              <strong>+917906086899</strong>, or take a quieter route and write to{" "}
              <a
                href="mailto:info@spacebuild.com"
                className="text-blue-600 hover:underline"
              >
                info@spacebuild.com
              </a>{" "}
              to begin a personalized design discussion.
            </p>
            <p>No pressure. No hard sell. Just an honest starting point for a better-aligned home.</p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What makes Vasterior a unique interior design firm in South Delhi?
                </h4>
                <p>
                  Vasterior combines high-end interior design with MahaVastu-based spatial
                  alignment, ensuring homes are both visually refined and energetically balanced.
                  This dual approach is rare, and highly effective.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do I need to believe in Vastu for this to work?
                </h4>
                <p>
                  Not at all. MahaVastu is applied logically and practically. Many clients simply
                  experience better flow, comfort, and clarity without engaging with it on a belief
                  level.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Will Vastu limit my design choices?
                </h4>
                <p>
                  No. At Vasterior, Vastu supports design, it doesn&apos;t restrict it. Aesthetics
                  always remain modern, elegant, and fully personalized.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Can Vasterior work with existing homes?
                </h4>
                <p>
                  Yes. We specialize in energy correction and layout optimization for existing
                  homes, often without major demolition or disruption.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. Is Vasterior only for luxury homes?
                </h4>
                <p>
                  Vasterior works with a range of South Delhi residences. What matters most is
                  intent, the desire for a home that feels right, not just looks expensive.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How do I get started?
                </h4>
                <p>
                  Start with a conversation. Call <strong>+917906086899</strong> or email{" "}
                  <a
                    href="mailto:info@spacebuild.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@spacebuild.com
                  </a>{" "}
                  to schedule an initial discussion and understand what your space truly needs.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="interior-design-firm-south-delhi" />
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
