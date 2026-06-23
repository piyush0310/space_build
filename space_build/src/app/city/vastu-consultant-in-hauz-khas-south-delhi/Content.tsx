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
            Vastu Consultant in Hauz Khas, South Delhi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior is a Vastu consulting and interior alignment studio in Hauz Khas, South
              Delhi, created for people who do not just want their spaces to look good, but to work
              for them. We help homes and commercial spaces realign their energy, flow, and purpose
              using authentic Vastu principles translated for contemporary living, modern
              architecture, and real human routines.
            </p>
            <p>
              In a neighbourhood like Hauz Khas, where heritage homes sit next to design-forward
              apartments, cafés, studios, and offices, generic Vastu advice simply does not cut it.
              Every structure carries a different past, orientation, and energy imprint. Vasterior&apos;s
              role is to read that invisible layer and bring it back into harmony, without breaking
              walls, without fear-based remedies, and without compromising aesthetics.
            </p>

            {/* Why Vastu here */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu in Hauz Khas Needs a Thoughtful Approach
            </h3>
            <p>
              Hauz Khas is layered architecturally, emotionally, and energetically. Old DDA flats,
              renovated builder floors, creative workspaces, boutique cafés, and heritage-adjacent
              homes each carry a different Vastu challenge.
            </p>
            <p>Clients often come to us saying:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>&quot;The house looks perfect, but something feels off.&quot;</li>
              <li>&quot;Work has slowed down since we moved offices.&quot;</li>
              <li>&quot;We are always tired at home for no clear reason.&quot;</li>
              <li>&quot;This space does not feel like it supports us anymore.&quot;</li>
            </ul>
            <p>These are not coincidences, they are signals.</p>
            <p>
              Vasterior approaches Vastu as a diagnostic science, not superstition. We study
              orientation, zoning, light flow, elemental balance, and spatial psychology, then
              translate that into practical, livable solutions designed specifically for Hauz Khas
              properties.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Vastu Philosophy: No Demolition. No Drama. Just Alignment.
            </h3>
            <p>We do not believe Vastu should scare you, or freeze your design vision.</p>
            <p>Our approach is:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Non-invasive – no demolition, no reconstruction pressure</li>
              <li>Design-integrated – Vastu works with your interiors, not against them</li>
              <li>Lifestyle-aware – aligned to how you actually live or run your business</li>
              <li>
                Rooted in classical principles, adapted intelligently for modern spaces
              </li>
            </ul>
            <p>
              Whether it is a home, office, studio, or retail space, our goal is simple: remove
              energetic friction and restore natural flow. When that happens, things start moving,
              mentally, emotionally, and financially.
            </p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vastu Consultation Services in Hauz Khas, South Delhi
            </h3>
            <h4 className="font-semibold text-gray-900">Residential Vastu Consultation</h4>
            <p>
              For apartments, builder floors, independent homes, and renovated properties. We focus
              on sleep quality, relationships, health, emotional grounding, and overall harmony.
            </p>
            <h4 className="font-semibold text-gray-900">Commercial and Office Vastu</h4>
            <p>
              For studios, clinics, cafés, boutiques, and corporate offices. We address
              productivity, decision-making clarity, client flow, financial stability, and team
              energy.
            </p>
            <h4 className="font-semibold text-gray-900">Vastu and Interior Alignment</h4>
            <p>
              Our signature strength. We realign furniture layouts, colour palettes, materials,
              lighting, and functional zones so Vastu corrections feel intentional, not patched on.
            </p>
            <h4 className="font-semibold text-gray-900">
              Pre-Purchase and Pre-Lease Vastu Review
            </h4>
            <p>
              Before you commit to a property in Hauz Khas, we evaluate its energetic potential so
              you make informed decisions, not reactive ones.
            </p>

            {/* Outcomes */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Changes After a Vasterior Vastu Consultation?
            </h3>
            <p>Clients often tell us:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>&quot;The space feels calmer, without us doing much.&quot;</li>
              <li>&quot;Work decisions became easier.&quot;</li>
              <li>&quot;The house finally feels like it is supporting us.&quot;</li>
              <li>&quot;We did not expect the emotional shift to be this strong.&quot;</li>
            </ul>
            <p>
              That is the real outcome of good Vastu. Not miracles, alignment. When a space stops
              resisting you, life stops feeling like a constant push.
            </p>

            {/* Why choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Clients Choose Vasterior
            </h3>
            <p>We do not treat Vastu as a ritual, we treat it as spatial intelligence.</p>
            <p>
              Clients choose us because we understand both ancient science and modern design
              language, because we respect your space, your budget, and your lifestyle, and because
              we believe a well-aligned space should feel quietly powerful, not loudly corrected.
            </p>

            {/* CTA */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready to Realign Your Space?
            </h3>
            <p>
              If you are based in Hauz Khas or anywhere in South Delhi and feel that your home or
              workspace is out of sync, a single conversation can bring clarity. You can speak
              directly with the Vasterior team by calling <strong>+917906086899</strong>, or, if
              you prefer to start with a detailed discussion, writing to us at{" "}
              <a
                href="mailto:info@spacebuild.com"
                className="text-blue-600 hover:underline"
              >
                info@spacebuild.com
              </a>{" "}
              is a great first step.
            </p>
            <p>No pressure. No hard sell. Just an honest assessment of what your space needs.</p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <span className="font-semibold">
                  Is Vastu really relevant for modern apartments in Hauz Khas?
                </span>{" "}
                Yes. In fact, modern apartments often need Vastu alignment more because layouts are
                design-led, not energy-led. Small shifts in zoning and usage can create a big
                difference.
              </li>
              <li>
                <span className="font-semibold">
                  Do you ask clients to break walls or reconstruct spaces?
                </span>{" "}
                No. Vasterior specializes in non-demolition, design-sensitive Vastu solutions.
                Structural changes are suggested only when absolutely unavoidable, and always as an
                option, not a mandate.
              </li>
              <li>
                <span className="font-semibold">
                  Can Vastu be integrated without changing interiors?
                </span>{" "}
                In many cases, yes. Furniture placement, colour corrections, lighting balance, and
                functional zoning can significantly realign energy without altering your interiors.
              </li>
              <li>
                <span className="font-semibold">
                  Do you provide Vastu services for commercial spaces and cafés in Hauz Khas?
                </span>{" "}
                Absolutely. We work extensively with offices, studios, cafés, clinics, and retail
                spaces, focusing on growth, stability, and customer experience.
              </li>
              <li>
                <span className="font-semibold">
                  How is Vasterior different from traditional Vastu consultants?
                </span>{" "}
                We do not rely on fear, generic remedies, or one-size-fits-all advice. Our work
                blends classical Vastu principles with interior design, psychology, and real-world
                practicality.
              </li>
              <li>
                <span className="font-semibold">How do I get started?</span>{" "}
                Start with a conversation. Call <strong>+917906086899</strong> or email{" "}
                <a
                  href="mailto:info@spacebuild.com"
                  className="text-blue-600 hover:underline"
                >
                  info@spacebuild.com
                </a>
                , and we will guide you through the next steps based on your space and goals.
              </li>
            </ol>
          </div>

          <PostNavigation slug="vastu-consultant-in-hauz-khas-south-delhi" />
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
