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
            Home Renovation Contractor in South Delhi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes a home renovation is not just about replacing tiles, repainting
              walls, or upgrading furniture, it is about correcting what never felt right in the
              first place. As a specialised home renovation contractor in South Delhi, we redesign
              homes at two levels simultaneously, the visible structure and the invisible energy
              that shapes everyday life inside it.
            </p>
            <p>
              If your home looks fine but feels exhausting, cluttered, or strangely heavy,
              renovation alone will not fix that. Alignment will.
            </p>

            {/* South Delhi context */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Renovating Homes in South Delhi Needs More Than Good Taste
            </h3>
            <p>South Delhi homes are layered.</p>
            <p>Builder floors with legacy layouts.</p>
            <p>Apartments designed for efficiency, not flow.</p>
            <p>Independent houses that evolved without intention.</p>
            <p>
              Most renovations here focus on surface upgrades, new finishes, trendy palettes,
              imported fittings. What gets ignored is how space functions emotionally:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Why certain rooms feel tense</li>
              <li>Why sleep does not feel restful</li>
              <li>Why productivity dips despite perfect interiors</li>
            </ul>
            <p>This is where Vasterior operates differently.</p>
            <p>We approach renovation as correction, not decoration.</p>

            {/* MahaVastu + design */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior’s Signature Approach, Design Meets MahaVastu
            </h3>
            <p>
              Vasterior integrates interior design with MahaVastu principles, creating homes that
              do not just look composed, they feel balanced.
            </p>
            <p>
              MahaVastu is not about superstition or rigid rules. It is about understanding how
              direction, proportion, light, movement, and placement affect human behaviour, focus,
              relationships, and wellbeing.
            </p>
            <p>In every renovation, we consider:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Layout flow and directional balance</li>
              <li>Placement of key spaces like kitchens, bedrooms, and work areas</li>
              <li>Light movement and material weight</li>
              <li>How the home supports daily rituals, not just Instagram moments</li>
            </ul>
            <p>The result? Homes that feel calmer, lighter, and easier to live in.</p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Home Renovation Services in South Delhi
            </h3>
            <p>We handle end-to-end renovation, from diagnosis to final alignment.</p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Complete Home Renovation
            </h4>
            <p>
              From demolition to finishing, we rework your home holistically, layouts, surfaces,
              lighting, furniture, and energy flow.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Interior Redesign and Spatial Planning
            </h4>
            <p>
              Ideal for homes that do not need a full teardown but desperately need better
              functionality and balance.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Vastu-Aligned Corrections (Without Structural Drama)
            </h4>
            <p>
              Smart, practical corrections using MahaVastu principles, often without breaking
              everything down.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Kitchen, Bedroom and Workspace Alignment
            </h4>
            <p>
              Spaces where energy matters the most. We correct placement, flow, and orientation for
              ease and stability.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Custom Furniture and Material Selection
            </h4>
            <p>
              Designed for your home, your habits, and your lifestyle, not pulled from a catalog.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Calm, Managed Execution
            </h4>
            <p>
              No chaos. No endless follow-ups. No last-minute surprises. Just structured,
              transparent execution.
            </p>

            {/* Difference */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Vasterior Different from Typical Contractors
            </h3>
            <p>Most contractors ask, “What finish do you want?”</p>
            <p>We ask, “How do you want your home to feel at 7am on a Monday?”</p>
            <p>Here is what sets us apart:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>We do not do cookie-cutter designs</li>
              <li>We do not ignore emotional discomfort in spaces</li>
              <li>We do not rush decisions that affect long-term living</li>
              <li>We design for lived-in reality, not show-home aesthetics</li>
            </ul>
            <p>Vasterior renovations are quiet, intentional, and deeply personal.</p>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Vasterior Renovation Experience
            </h3>
            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              1. Diagnosis Before Design
            </h4>
            <p>We study your home, your lifestyle, and existing spatial imbalances.</p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              2. Intentional Design Planning
            </h4>
            <p>
              Layouts, materials, and alignments are designed together, not in isolation.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              3. Precision Execution
            </h4>
            <p>
              Clear timelines, disciplined coordination, and respectful site management.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              4. Final Alignment and Handover
            </h4>
            <p>Your home is not just completed, it is settled.</p>

            {/* CTA */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              A Subtle Start Is All It Takes
            </h3>
            <p>
              Sometimes clarity begins with a simple conversation. A short call can help you
              understand why your current space feels off, and what can actually be corrected. Many
              homeowners start by speaking directly with the Vasterior team at{" "}
              <strong>+917906086899</strong>, just to explore possibilities without pressure.
            </p>
            <p>
              If you prefer to articulate things slowly, an email often works better. Writing to{" "}
              <a
                href="mailto:info@spacebuild.com"
                className="text-blue-600 hover:underline"
              >
                info@spacebuild.com
              </a>{" "}
              is often how thoughtful renovations begin, quietly, intentionally, and without rush.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. Is Vasterior only a Vastu consultant or a full renovation contractor?
                </h4>
                <p>
                  Vasterior is a full-service home renovation contractor that integrates interior
                  design with MahaVastu principles. We handle design, execution, and alignment
                  under one roof.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do you only work in South Delhi?
                </h4>
                <p>
                  Our primary focus is South Delhi due to the nature of properties and renovation
                  requirements here, though we do take on select projects elsewhere.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Will MahaVastu require major demolition?
                </h4>
                <p>
                  Not always. Many corrections can be achieved through layout planning, placement
                  adjustments, material choices, and directional balance, without excessive
                  structural changes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Is this suitable for apartments and builder floors?
                </h4>
                <p>
                  Absolutely. In fact, builder floors and apartments benefit the most from aligned
                  renovation because they often suffer from poor initial planning.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. How early should I involve Vasterior in my renovation?
                </h4>
                <p>
                  The earlier, the better. Involving us before design finalisation prevents
                  expensive rework and ensures alignment from day one.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. Is this approach more expensive than regular renovation?
                </h4>
                <p>
                  Not necessarily. What you save is long-term, less regret, fewer corrections, and
                  a home that supports you instead of draining you.
                </p>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Renovation That Finally Feels Right
            </h3>
            <p>
              If you are looking for a home renovation contractor in South Delhi who understands
              that homes impact mood, energy, and everyday life, Vasterior is where that
              conversation begins. Not louder. Just better aligned.
            </p>
          </div>

          <PostNavigation slug="home-renovation-contractor-south-delhi" />
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
