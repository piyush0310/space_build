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
            Vastu Consultant in Lajpat Nagar, South Delhi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior begins every transformation with one simple belief: when a space is
              energetically aligned, life starts flowing differently. In the heart of Lajpat Nagar,
              where old homes meet modern ambitions, Vasterior offers thoughtful, practical Vastu
              consultation designed for real urban living, not rigid rulebooks.
            </p>
            <p>
              If your home or workplace feels off despite doing everything right, chances are the
              issue is not visible, it is energetic. That is exactly where we work best.
            </p>

            {/* Why Vastu matters */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu Matters in Lajpat Nagar Homes and Workspaces
            </h3>
            <p>
              Lajpat Nagar is layered, with builder floors, renovated apartments, legacy homes, and
              mixed-use spaces. Each comes with its own spatial challenges: blocked corners, awkward
              layouts, renovations that ignored energy flow, or homes that just do not feel restful
              anymore.
            </p>
            <p>
              Vastu is not about tearing down walls or fearing directions. It is about understanding
              how space influences mindset, health, relationships, and financial momentum, especially
              in dense urban environments like South Delhi.
            </p>
            <p>When Vastu is aligned correctly:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Homes feel calmer and more grounded</li>
              <li>Workspaces support clarity and growth</li>
              <li>Families experience better emotional balance</li>
              <li>Decisions feel easier, not heavier</li>
            </ul>
            <p>That shift is subtle, but powerful.</p>

            {/* Approach */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Approach to Vastu Consulting
            </h3>
            <p>We do not do superstition. We do not do fear-based fixes.</p>
            <p>
              Vasterior follows MahaVastu-aligned principles, blended seamlessly with modern
              interiors and contemporary lifestyles.
            </p>
            <p>Our approach is:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Non-invasive – no unnecessary demolition</li>
              <li>Practical – solutions that fit how you actually live</li>
              <li>Personalised – no copy-paste remedies</li>
              <li>Integrated – Vastu works with your interiors, not against them</li>
            </ul>
            <p>
              Every consultation is rooted in clarity, logic, and long-term harmony, not quick
              fixes.
            </p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vastu Consulting Services We Offer
            </h3>
            <h4 className="font-semibold text-gray-900">Residential Vastu Consultation</h4>
            <p>
              For apartments, builder floors, villas, and renovated homes. We analyse layout,
              entrances, kitchens, bedrooms, and energy flow to restore balance without disrupting
              your lifestyle.
            </p>
            <h4 className="font-semibold text-gray-900">Commercial and Office Vastu</h4>
            <p>
              Designed for offices, studios, clinics, and retail spaces in and around Lajpat Nagar.
              Ideal for businesses facing stagnation, team friction, or inconsistent growth.
            </p>
            <h4 className="font-semibold text-gray-900">Vastu and Interior Alignment</h4>
            <p>
              For new homes or renovations where Vastu and interiors need to work together, not
              clash. This is where Vasterior truly stands apart.
            </p>
            <h4 className="font-semibold text-gray-900">Correction and Remedy Planning</h4>
            <p>
              Smart, subtle corrections using placement, zoning, and energy balancing, never extreme
              measures.
            </p>

            {/* Why choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD in South Delhi
            </h3>
            <p>Vasterior does not treat Vastu as a checklist. We treat it as spatial psychology.</p>
            <p>Clients choose us because:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>We understand South Delhi homes deeply</li>
              <li>Our work blends ancient wisdom with modern design intelligence</li>
              <li>We focus on how spaces feel, not just how they look</li>
              <li>Our guidance is calm, clear, and rooted in experience</li>
            </ul>
            <p>This is Vastu for people who want alignment, not anxiety.</p>

            {/* Who this is for */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Is This For?
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Homeowners who feel stuck or unsettled without knowing why</li>
              <li>Families seeking peace, stability, and emotional grounding</li>
              <li>Business owners looking for consistent growth and clarity</li>
              <li>
                Anyone who believes their space should support their life, not drain it
              </li>
            </ul>
            <p>If that sounds like you, you are in the right place.</p>

            {/* CTA */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Book a Vastu Consultation with Vasterior
            </h3>
            <p>
              If you are ready to understand what your space is truly communicating, the next step
              is simple. A conversation can often bring more clarity than months of overthinking.
            </p>
            <p>
              You can speak directly with the Vasterior team by calling{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} to explore how a Vastu consultation might support your
              home or workspace. If you prefer to start with details or floor plans, simply write to
              us at{" "}
              <a
                href="mailto:spacebuild.india@gmail.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gmail.com
              </a>
              , and we will take it from there, thoughtfully and discreetly.
            </p>
            <p>No pressure. Just alignment.</p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <span className="font-semibold">
                  Do you offer Vastu consultation for existing homes in Lajpat Nagar?
                </span>{" "}
                Yes. Most of our work involves existing homes and renovated spaces. Our solutions
                are designed to work within your current layout, without drastic structural
                changes.
              </li>
              <li>
                <span className="font-semibold">
                  Is demolition required to fix Vastu issues?
                </span>{" "}
                Almost never. Vasterior specialises in non-invasive, intelligent corrections that
                respect your space and your lifestyle.
              </li>
              <li>
                <span className="font-semibold">
                  Can Vastu really make a difference in apartments?
                </span>{" "}
                Absolutely. Even small apartments respond strongly to proper energy alignment when
                done correctly and thoughtfully.
              </li>
              <li>
                <span className="font-semibold">
                  Do you combine Vastu with interior design guidance?
                </span>{" "}
                Yes. This is one of our core strengths. We ensure that Vastu alignment enhances
                aesthetics rather than compromising them.
              </li>
              <li>
                <span className="font-semibold">How do I get started?</span>{" "}
                You can begin by calling <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} for an initial discussion
                or emailing{" "}
                <a
                  href="mailto:spacebuild.india@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  spacebuild.india@gmail.com
                </a>{" "}
                with your requirements. We will guide you through the next steps clearly and calmly.
              </li>
            </ol>
          </div>

          <PostNavigation slug="vastu-consultant-in-lajpat-nagar-south-delhi" />
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
