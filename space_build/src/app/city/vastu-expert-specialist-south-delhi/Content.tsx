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
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 text-gray-900">
            Vastu Expert &amp; Specialist in South Delhi
          </h2>
          <h3 className="text-lg sm:text-xl font-medium mb-8 text-gray-800">
            Interior Design &amp; MahaVastu Alignment by Vasterior
          </h3>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior is a South Delhi–based interior design and MahaVastu consultancy that works
              at the intersection of space, structure, and human performance. We help homes and
              workplaces function better, not through belief or superstition, but through precise
              spatial placement, directional logic, and activity alignment rooted in MahaVastu
              principles.
            </p>
            <p>
              If your home looks beautiful yet feels unsettled, or your office functions efficiently
              but still resists growth, the issue may not be effort or intent, it may be how the
              space is aligned to support you.
            </p>

            {/* Why the right expert matters */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Finding the Right Vastu Expert in South Delhi Matters
            </h3>
            <p>South Delhi homes and offices are unlike anywhere else in the city.</p>
            <p>
              They are high-value, high-pressure environments, designed for success, yet often
              burdened by stress, indecision, or stagnation.
            </p>
            <p>Traditional Vastu advice often fails here because it:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Focuses on objects instead of layout</li>
              <li>Suggests demolition where none is needed</li>
              <li>Ignores modern lifestyles and workflows</li>
            </ul>
            <p>
              At Vasterior, Vastu is approached as a performance system for contemporary living.
              Using MahaVastu, we study how direction, activity, furniture placement, and movement
              paths influence clarity, stability, relationships, and financial flow, without
              disrupting the architecture of your space.
            </p>

            {/* What makes Vasterior trusted */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Vasterior a Trusted Vastu Specialist in South Delhi
            </h3>
            <p>Vasterior does not treat Vastu as a belief system. We treat it as environmental intelligence.</p>
            <p>Our approach is built on:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>MahaVastu methodology, activity-based and non-destructive</li>
              <li>Integration of interior design and spatial correction</li>
              <li>Scientific zoning of spaces based on use, not rituals</li>
              <li>Corrections that respect architecture, aesthetics, and budget</li>
              <li>Long-term alignment instead of quick fixes</li>
            </ul>
            <p>
              Every recommendation is grounded in how you actually live or work in the space, not
              generic do and do not lists.
            </p>

            {/* MahaVastu + Interior */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu + Interior Design: One Unified System
            </h3>
            <p>Most Vastu consultants stop at advice.</p>
            <p>Most interior designers stop at aesthetics.</p>
            <p>Vasterior bridges the gap.</p>
            <p>
              By combining interior design expertise with MahaVastu alignment, we ensure that:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Furniture placement supports focus and authority</li>
              <li>Bedrooms promote deep rest and emotional balance</li>
              <li>Kitchens stabilize health and routine</li>
              <li>Offices enhance decision-making and growth</li>
              <li>Renovations improve outcomes, not just appearance</li>
            </ul>
            <p>
              This unified approach makes Vasterior a preferred choice for clients seeking a Vastu
              expert in South Delhi who understands modern interiors.
            </p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu &amp; Spatial Alignment Services
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <span className="font-semibold">MahaVastu Consultation</span> – Detailed analysis of
                your home or office using direction, activity, and spatial logic to identify
                misalignments and corrective strategies.
              </li>
              <li>
                <span className="font-semibold">Interior Design with Vastu Alignment</span> –
                Designing or redesigning spaces where layout, materials, and movement work in
                harmony with MahaVastu principles.
              </li>
              <li>
                <span className="font-semibold">Home Vastu for Stability &amp; Growth</span> – Ideal
                for families experiencing stress, health issues, or lack of peace despite a
                well-designed home.
              </li>
              <li>
                <span className="font-semibold">Office &amp; Commercial Vastu</span> – For founders,
                professionals, and business owners facing slow growth, team friction, or decision
                fatigue.
              </li>
              <li>
                <span className="font-semibold">Renovation-Friendly Corrections</span> –
                Non-destructive solutions that work within existing structures, with no unnecessary
                demolition.
              </li>
            </ul>

            {/* Who works with Vasterior */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Typically Works With Vasterior
            </h3>
            <p>Our clients are people who:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Value logic over superstition</li>
              <li>Want results without chaos</li>
              <li>Seek growth with stability</li>
              <li>Prefer subtle, intelligent interventions</li>
              <li>Live or work in premium South Delhi locations</li>
            </ul>
            <p>
              From private residences to leadership cabins and boutique offices, our work is
              designed for people who expect their space to work as hard as they do.
            </p>

            {/* When to consult */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              When Should You Consult a Vastu Expert?
            </h3>
            <p>Consider speaking with a Vastu specialist if:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Your space feels heavy or unproductive</li>
              <li>Rest does not feel restorative at home</li>
              <li>Career or business growth feels blocked</li>
              <li>Despite success, peace feels missing</li>
              <li>Renovation is planned and alignment matters</li>
            </ul>
            <p>Often, a single conversation can reveal what your space is silently resisting.</p>

            {/* Begin the conversation */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin the Conversation
            </h3>
            <p>
              Choosing the right Vastu expert in South Delhi is not about faith, it is about fit,
              clarity, and method.
            </p>
            <p>
              If you are considering aligning your home or office with a more intelligent spatial
              system, a direct conversation is the best place to begin. Many of our clients start by
              calling <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} to understand whether MahaVastu alignment is
              relevant for their space. Others prefer writing to{" "}
              <a
                href="mailto:spacebuild.india@gmail.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gmail.com
              </a>{" "}
              to share details before planning a consultation.
            </p>
            <p>
              Either way, the first step is simply listening to what your space is already telling
              you.
            </p>
          </div>

          <PostNavigation slug="vastu-expert-specialist-south-delhi" />
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
