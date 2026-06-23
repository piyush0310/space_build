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
            Vastu Consultant in Safdarjung Enclave, South Delhi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a home should do more than look good, it should work for you.
              In the heart of Safdarjung Enclave, where legacy homes meet modern lifestyles,
              Vasterior offers refined, logic-led Vastu consultancy designed for people who want
              clarity, stability, and forward momentum in their lives, not fear-based fixes or
              outdated rituals.
            </p>

            {/* Why Safdarjung Enclave needs Vastu */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Homes in Safdarjung Enclave Need a Thoughtful Vastu Approach
            </h3>
            <p>
              Safdarjung Enclave is not a cookie-cutter locality. Builder floors, independent homes,
              renovated apartments, and mixed orientations each space carries its own energetic
              challenges. Generic Vastu advice simply does not cut it here.
            </p>
            <p>Residents often reach out to us when they feel:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Progress feels blocked despite effort</li>
              <li>Financial or career growth has plateaued</li>
              <li>Mental stress lingers inside an otherwise perfect home</li>
              <li>Renovations improved aesthetics but disrupted harmony</li>
            </ul>
            <p>
              Vastu, when applied correctly, is not about superstition. It is about correcting
              spatial imbalances that subtly affect focus, relationships, health, and
              decision-making.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Vastu Consultancy Philosophy
            </h3>
            <p>
              We do not believe in tearing down homes or creating panic. Vasterior follows
              MahaVastu-aligned principles, blended with modern spatial psychology and real-world
              practicality.
            </p>
            <p>Our approach is:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Non-invasive – no demolition unless absolutely essential</li>
              <li>Design-integrated – Vastu aligned with interiors, not fighting them</li>
              <li>Outcome-focused – solutions aimed at measurable life improvements</li>
              <li>Modern and rational – no blind rituals, no fear-driven advice</li>
            </ul>
            <p>Every recommendation is tailored to your exact floor plan, orientation, and life goals.</p>

            {/* What consultation covers */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Our Vastu Consultation Covers
            </h3>
            <p>Our Safdarjung Enclave Vastu consultations typically include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Energy flow analysis of the entire home</li>
              <li>Bedroom, kitchen, entrance, and workspace alignment</li>
              <li>Correction strategies using layout, placement, colours, and elements</li>
              <li>Guidance that works for already constructed homes</li>
              <li>Seamless integration with interior design, if required</li>
            </ul>
            <p>This is Vastu that fits modern living, not the other way around.</p>

            {/* Who this is for */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who This Is For
            </h3>
            <p>This service is ideal if you are:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Living in or renovating a home in Safdarjung Enclave</li>
              <li>A professional or entrepreneur seeking stability and growth</li>
              <li>A family wanting emotional harmony and mental calm</li>
              <li>Someone tired of contradictory Vastu advice online</li>
            </ul>
            <p>If you value logic, aesthetics, and results, you will feel at home with Vasterior.</p>

            {/* What makes Vasterior different */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Vasterior Different
            </h3>
            <p>Most Vastu consultants stop at advice. Vasterior goes further.</p>
            <p>
              We translate Vastu principles into practical spatial decisions, how your home flows,
              how it feels to live in, and how it supports your daily life. Our work sits at the
              intersection of energy alignment, design intelligence, and lived experience.
            </p>
            <p>No jargon. No drama. Just clarity.</p>

            {/* Vastu + interiors */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vastu and Interior Design: A Seamless Advantage
            </h3>
            <p>
              Because Vasterior also specializes in interior design, our Vastu solutions never look
              forced. Every correction feels intentional, refined, and aligned with the overall
              aesthetic of your home.
            </p>
            <p>
              This is especially powerful for Safdarjung Enclave homes undergoing upgrades or
              full-scale renovations.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <span className="font-semibold">
                  Is Vastu consultation useful for already constructed homes?
                </span>{" "}
                Absolutely. Most of our work focuses on existing homes. Vasterior specializes in
                non-invasive Vastu corrections that respect your current structure.
              </li>
              <li>
                <span className="font-semibold">
                  Do you recommend demolition or structural changes?
                </span>{" "}
                Only when there is no alternative, and that is rare. Our priority is intelligent
                correction, not disruption.
              </li>
              <li>
                <span className="font-semibold">
                  Is this traditional Vastu or modern Vastu?
                </span>{" "}
                Our approach is MahaVastu-aligned but applied with modern logic. It is practical,
                measurable, and lifestyle-friendly.
              </li>
              <li>
                <span className="font-semibold">
                  Can Vastu be aligned without changing my interiors?
                </span>{" "}
                In many cases, yes. Small but strategic changes can create significant energetic
                shifts.
              </li>
              <li>
                <span className="font-semibold">
                  Do you only consult in Safdarjung Enclave?
                </span>{" "}
                Safdarjung Enclave is a key focus area, but Vasterior works across South Delhi and
                beyond.
              </li>
            </ol>

            {/* CTA */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let&apos;s Align Your Space, Thoughtfully
            </h3>
            <p>
              If you feel your home looks right but does not feel right, it is time for a deeper
              conversation. You can speak directly with the Vasterior team by calling{" "}
              <strong>+917906086899</strong> to explore whether a Vastu consultation is right for
              your Safdarjung Enclave home.
            </p>
            <p>
              For a more detailed discussion or to share your floor plan, you are welcome to write
              to us at{" "}
              <a
                href="mailto:info@spacebuild.com"
                className="text-blue-600 hover:underline"
              >
                info@spacebuild.com
              </a>
              , and we will guide you through the next aligned step, calmly, clearly, and without
              pressure.
            </p>
          </div>

          <PostNavigation slug="vastu-consultant-in-safdarjung-enclave-south-delhi" />
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
