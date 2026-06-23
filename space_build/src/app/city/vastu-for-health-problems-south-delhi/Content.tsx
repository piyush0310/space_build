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
            Vastu for Health Problems in South Delhi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that health is not just treated, it is supported. In many South
              Delhi homes, recurring health issues quietly persist despite good doctors, clean
              diets, and disciplined routines. Sleepless nights, unexplained fatigue, anxiety,
              digestive discomfort, or frequent illness often feel normal in urban life. But what if
              your home itself is placing constant pressure on your body?
            </p>
            <p>
              This is where Vastu, when applied correctly and scientifically, becomes a silent ally
              to your well-being.
            </p>

            {/* When issues don’t have answers */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              When Health Issues Do Not Have Clear Answers
            </h3>
            <p>Many clients approach Vasterior after trying everything else.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Medical tests are normal, but energy feels low</li>
              <li>Sleep is complete, yet the body wakes up tired</li>
              <li>Children fall sick often or struggle with focus</li>
              <li>Stress lingers even in a beautiful, well-designed home</li>
            </ul>
            <p>These situations are not imagined, and they are not coincidences.</p>
            <p>
              Your nervous system constantly responds to light, layout, airflow, heat, noise, and
              spatial orientation. If these elements are misaligned, the body remains in a subtle
              state of stress, and over time this stress begins to show up as health problems.
            </p>

            {/* Why South Delhi homes are prone */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why South Delhi Homes Are Especially Prone to Health Imbalance
            </h3>
            <p>South Delhi homes are premium, but they also face unique challenges:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Builder floors designed for resale, not long-term living</li>
              <li>Renovations that prioritise aesthetics over spatial logic</li>
              <li>Closed bedrooms with poor air circulation</li>
              <li>Kitchens relocated without considering fire balance</li>
              <li>Toilets placed in sensitive zones due to plumbing convenience</li>
            </ul>
            <p>
              Combined with high-pressure lifestyles, screen exposure, and limited recovery time,
              the body rarely gets a chance to fully heal. A well-designed home can still work
              against your health if Vastu is ignored at the planning level.
            </p>

            {/* How Vastu affects health */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Vastu Affects Physical and Mental Health
            </h3>
            <p>
              Vastu is not about superstition or religious rules. At Vasterior, it is approached as
              a spatial health system.
            </p>
            <p>Certain imbalances commonly impact health, for example:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Incorrect bedroom placement leading to disturbed sleep and hormonal issues</li>
              <li>Fire imbalance in the kitchen contributing to digestion problems and acidity</li>
              <li>Toilet positioning errors linked with dips in immunity and recurring infections</li>
              <li>Blocked natural light creating low mood and deficiency patterns</li>
              <li>Wrong activity in sensitive zones increasing anxiety, restlessness, and burnout</li>
            </ul>
            <p>These issues are subtle, cumulative, and often invisible until the body reacts.</p>

            {/* MahaVastu health-first */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu, a Health-First Approach to Spatial Alignment
            </h3>
            <p>
              Vasterior follows MahaVastu principles, which focus on activity, direction, and
              function rather than demolition or fear-based remedies.
            </p>
            <p>The approach is:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Non-destructive, with no breaking or panic-driven changes</li>
              <li>Design-integrated, so Vastu works with your interiors</li>
              <li>Lifestyle-aware, aligned with urban routines and modern families</li>
              <li>Health-focused, supporting rest, recovery, immunity, and mental calm</li>
            </ul>
            <p>
              Instead of placing objects and hoping for results, the causes are corrected, how your
              space interacts with your body each day.
            </p>

            {/* Improvements clients see */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Health Improvements Clients Commonly Experience
            </h3>
            <p>
              While Vastu does not replace medical care, correct spatial alignment often supports:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Deeper, uninterrupted sleep</li>
              <li>Reduced anxiety and mental fog</li>
              <li>Better digestion and appetite rhythm</li>
              <li>Improved immunity, especially for children</li>
              <li>Faster recovery and emotional stability</li>
              <li>A general sense of calm at home</li>
            </ul>
            <p>The home begins to feel supportive instead of draining.</p>

            {/* What makes Vasterior different */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Vasterior Different
            </h3>
            <p>Most Vastu services focus on objects, pyramids, and one-size-fits-all remedies.</p>
            <p>Vasterior works differently by combining:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Interior design intelligence</li>
              <li>MahaVastu zone analysis</li>
              <li>Human behaviour and health psychology</li>
              <li>Practical, livable solutions</li>
            </ul>
            <p>
              The goal is not just to fix Vastu, but to redesign how your home supports your life
              and health.
            </p>

            {/* Is this right for you */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Is This Right for You?
            </h3>
            <p>Vastu for health is especially helpful if:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Health issues feel unexplained or recurring</li>
              <li>Sleep does not feel restful anymore</li>
              <li>Children fall sick frequently</li>
              <li>Stress seems to follow you home</li>
              <li>Your house looks beautiful but feels heavy</li>
            </ul>
            <p>
              If something feels off, it usually is, and your space may be part of the answer.
            </p>

            {/* Speak to consultant */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Speak to a Vasterior Consultant
            </h3>
            <p>
              If you want to understand how your home may be influencing your health, a thoughtful
              conversation is the best place to start.
            </p>
            <p>
              You can call <strong>+917906086899</strong> to speak directly with a Vasterior
              consultant, or write to{" "}
              <a
                href="mailto:info@spacebuild.com"
                className="text-blue-600 hover:underline"
              >
                info@spacebuild.com
              </a>{" "}
              to begin a calm, confidential discussion about your space and well-being. There is no
              pressure, only clarity.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <span className="font-semibold">Can Vastu really affect health?</span> Yes,
                indirectly but significantly. Vastu influences sleep quality, stress response,
                digestion rhythm, and mental calm by shaping how the body experiences space daily.
              </li>
              <li>
                <span className="font-semibold">
                  Is this service only for people with serious illnesses?
                </span>{" "}
                Not at all. Many clients seek preventive health, better sleep, stress reduction, or
                additional support for children and elderly family members.
              </li>
              <li>
                <span className="font-semibold">
                  Will you ask us to break walls or demolish parts of the house?
                </span>{" "}
                No. Vasterior follows non-destructive MahaVastu principles. Most corrections involve
                layout adjustments, activity changes, or subtle design refinements.
              </li>
              <li>
                <span className="font-semibold">Do you use religious symbols or rituals?</span> No.
                The work is practical, neutral, and design-based. The focus stays on spatial logic,
                not rituals.
              </li>
              <li>
                <span className="font-semibold">
                  Can this be done for apartments and builder floors in South Delhi?
                </span>{" "}
                Yes. The team regularly works with South Delhi apartments, builder floors, villas,
                and renovated homes.
              </li>
              <li>
                <span className="font-semibold">How long does it take to see changes?</span> Many
                clients report improvements in sleep, calmness, or energy within weeks, although the
                experience varies with each home and family.
              </li>
              <li>
                <span className="font-semibold">Does Vastu replace medical treatment?</span> No.
                Vastu supports health but does not replace medical advice or treatment. It works
                alongside professional healthcare.
              </li>
              <li>
                <span className="font-semibold">How do I start?</span> Start with a conversation.
                Calling <strong>+917906086899</strong> or emailing{" "}
                <a
                  href="mailto:info@spacebuild.com"
                  className="text-blue-600 hover:underline"
                >
                  info@spacebuild.com
                </a>{" "}
                allows your concerns to be understood and addressed with clear guidance.
              </li>
            </ol>

            {/* Closing */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Your Home Should Help You Heal
            </h3>
            <p>
              Health is not only about what you eat or how you live, it is also about where you
              live. When your home is aligned, your body finally gets permission to rest, and
              healing begins quietly.
            </p>
          </div>

          <PostNavigation slug="vastu-for-health-problems-south-delhi" />
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
