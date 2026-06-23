// components/WeddingPageContent.js
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
            Vastu Expert Hyderabad
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <p>
              Vasterior believes your space should do more than look beautiful,
              it should support your life. Because the truth is, you can have a
              stunning home and still feel stuck, restless, stressed, or drained
              inside it, and you can have a perfectly designed office and still
              struggle with business growth, team harmony, or cash flow.
            </p>
            <p>That is where we come in.</p>
            <p>
              Vasterior is a Hyderabad-based studio that blends modern interior
              design with powerful MahaVastu alignment, helping you create
              spaces that do not just impress visitors, they uplift you daily.
            </p>
            <p>Design that looks good. Energy that feels right.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu Matters More Than Ever in Hyderabad Homes Today
            </h2>
            <p>
              Hyderabad is growing fast, with new apartments, villas, gated
              communities, high-rises, and commercial spaces coming up
              everywhere. But a home can be modern, expensive, and perfectly
              styled yet still feel off.
            </p>
            <p>
              And when a space is off, it does not always show up as something
              obvious like bad vibes. It shows up as real-life problems:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You feel constantly tired even after sleeping</li>
              <li>You are facing unnecessary stress and overthinking</li>
              <li>Family arguments are increasing</li>
              <li>Finances feel stuck, delayed, or unpredictable</li>
              <li>Work opportunities come but do not convert</li>
              <li>Business growth feels slow despite effort</li>
              <li>You feel like something is blocking your momentum</li>
            </ul>
            <p>Because your home should not block your life.</p>
            <p>
              Vastu is not about superstition. It is about how the energy flow
              of a space affects the people living or working in it emotionally,
              mentally, and practically. And if you are searching for a Vastu
              expert in Hyderabad, you are likely already sensing that your
              space needs more than decor.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes MahaVastu Different From Traditional Vastu?
            </h2>
            <p>
              Many people avoid Vastu because they fear demolition, breaking,
              and fear-based rules. Traditional consultations often overwhelm
              with rigid instructions, complex directions, and scary warnings.
            </p>
            <p>MahaVastu is different. It is:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Practical</li>
              <li>Flexible</li>
              <li>Result-oriented</li>
              <li>Modern in approach</li>
              <li>Focused on energy correction with minimal disturbance</li>
            </ul>
            <p>
              Instead of telling you to tear down walls or rebuild your home,
              MahaVastu focuses on aligning zones, correcting imbalances, and
              improving energy circulation in a way that works with your
              existing structure.
            </p>
            <p>
              This is why MahaVastu is especially effective for apartments,
              high-rise flats, gated community villas, commercial spaces,
              already-constructed homes, and renovations.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior’s Difference: Vastu + Interior Design Together
            </h2>
            <p>
              Most Vastu consultants do not understand design, and most interior
              designers do not understand Vastu. So you either get corrections
              that look ugly or unrealistic, or aesthetics that ignore energy
              balance.
            </p>
            <p>
              Vasterior solves this gap. We bring both worlds together, so your
              space is beautiful, functional, luxurious, balanced, and
              energetically aligned.
            </p>
            <p>
              We do not just suggest remedies. We design solutions that look
              premium, feel natural, and fit your lifestyle.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What You Get When Your Space Is Properly Aligned
            </h2>
            <p>
              When MahaVastu is applied correctly, people often experience:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Better sleep and mental peace</li>
              <li>Improved relationships and family harmony</li>
              <li>More stability in finances</li>
              <li>Better focus and productivity</li>
              <li>Reduction in stress and emotional heaviness</li>
              <li>Better business results and smoother decision-making</li>
              <li>A stronger sense of comfort and belonging at home</li>
            </ul>
            <p>It is not magic. It is alignment.</p>
            <p>
              Just as a well-designed home improves your daily routine, a
              well-aligned space improves your inner state.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vastu Expert Hyderabad: Who This Is Perfect For
            </h2>
            <p>Vasterior’s MahaVastu-based services are ideal for:</p>
            <h3 className="font-semibold text-gray-900 mt-2">Homeowners</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>New home buyers in Hyderabad</li>
              <li>Families moving into a new apartment</li>
              <li>Villa owners seeking long-term harmony</li>
              <li>People facing repeated obstacles without clear reasons</li>
            </ul>
            <h3 className="font-semibold text-gray-900 mt-2">
              Working Professionals
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>People feeling restless, anxious, or mentally drained</li>
              <li>Those struggling with career growth or focus</li>
              <li>People experiencing sleep issues or lack of peace</li>
            </ul>
            <h3 className="font-semibold text-gray-900 mt-2">
              Business Owners
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Entrepreneurs facing slow growth</li>
              <li>Business owners dealing with team conflicts</li>
              <li>Those wanting better cash flow and stability</li>
              <li>Office owners seeking stronger growth energy</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Services — Vastu + Design Solutions
            </h2>
            <h3 className="font-semibold text-gray-900 mt-2">
              1) MahaVastu Consultation for Homes
            </h3>
            <p>
              We study your layout, entrance energy, bedroom placement, kitchen
              positioning, and key zones that impact health, money, and
              relationships, then create a correction plan that fits your
              structure.
            </p>

            <h3 className="font-semibold text-gray-900 mt-2">
              2) MahaVastu Consultation for Offices &amp; Businesses
            </h3>
            <p>
              We align workstations, cabins, entrances, and prosperity zones so
              your office supports productivity, leadership clarity, and
              financial flow.
            </p>

            <h3 className="font-semibold text-gray-900 mt-2">
              3) Vastu + Interior Design Packages
            </h3>
            <p>
              Our signature service integrates MahaVastu principles into your
              interior design plan so your space looks stunning while supporting
              your goals.
            </p>

            <h3 className="font-semibold text-gray-900 mt-2">
              4) Vastu Corrections Without Demolition
            </h3>
            <p>
              In most cases, MahaVastu allows corrections without breaking or
              rebuilding. We focus on zone balancing, energy flow correction,
              and layout-based solutions.
            </p>

            <h3 className="font-semibold text-gray-900 mt-2">
              5) Space Energy Audit + Layout Correction
            </h3>
            <p>
              If you are unsure what is wrong, we perform an energy-based
              assessment of your home or office and identify the exact zones
              causing imbalance.
            </p>

            <h3 className="font-semibold text-gray-900 mt-2">
              6) Bedroom / Kitchen / Entrance Corrections
            </h3>
            <p>
              These areas strongly influence health, finances, and peace. We
              help you correct them strategically and beautifully.
            </p>

            <h3 className="font-semibold text-gray-900 mt-2">
              7) Plot Selection / Home Buying Vastu Check
            </h3>
            <p>
              If you are buying a new home in Hyderabad, we can help you
              evaluate layouts before purchase so you avoid issues later.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Common Problems We Solve Using MahaVastu
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Financial instability or delayed income</li>
              <li>Unwanted expenses and money leakage</li>
              <li>Frequent conflicts between couples or family members</li>
              <li>Anxiety, restlessness, and lack of peace</li>
              <li>Poor sleep and fatigue</li>
              <li>Career stagnation</li>
              <li>Business slowdown or inconsistent growth</li>
              <li>Lack of focus, motivation, and clarity</li>
              <li>Feeling drained at home even after rest</li>
              <li>Sudden health dips without clear cause</li>
            </ul>
            <p>A beautiful home is great. A supportive home is powerful.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process: Clear, Premium, Results-Focused
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Discovery Call:</strong> We understand your concerns,
                space type, and goals.
              </li>
              <li>
                <strong>Layout Study / Site Visit:</strong> We review floor
                plans, directions, entrances, and zones, with site visits
                available for Hyderabad projects.
              </li>
              <li>
                <strong>MahaVastu Diagnosis:</strong> We identify energetic
                imbalances affecting prosperity, health, relationships, and
                stability.
              </li>
              <li>
                <strong>Correction Plan:</strong> You receive a structured,
                practical correction plan, not random suggestions.
              </li>
              <li>
                <strong>Design + Implementation Support:</strong> We integrate
                corrections into interior design or guide you on applying them.
              </li>
              <li>
                <strong>Final Walkthrough + Alignment Check:</strong> Once
                corrections are applied, we review the space to ensure balance.
              </li>
            </ol>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Clients Trust Vasterior in Hyderabad
            </h2>
            <p>
              Hyderabad has many Vastu consultants, but Vasterior stands out
              because we do not just talk Vastu—we build spaces.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>We combine interior design and MahaVastu in one solution</li>
              <li>We keep everything practical and modern</li>
              <li>We avoid fear-based advice</li>
              <li>We prioritise minimal disturbance and maximum impact</li>
              <li>We create premium-looking corrections, not awkward fixes</li>
              <li>
                We understand real Hyderabad layouts, from apartments to villas
                and high-rises
              </li>
              <li>We guide you step-by-step instead of confusing you</li>
            </ul>
            <p>
              Your space should feel like it is working with you, not against
              you.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready to Align Your Home or Office?
            </h2>
            <p>
              If you feel something is off in your home or office, do not ignore
              it. Most people wait too long and then wonder why things felt
              heavy for years. A simple consultation can bring clarity.
            </p>
            <p>
              To speak with our team, you can call{" "}
              <strong>+917906086899</strong> and we will guide you on the best
              next step based on your space and concerns. If you prefer sharing
              layouts or details first, email us at{" "}
              <strong>
                <a href="mailto:info@spacebuild.com">
                  info@spacebuild.com
                </a>
              </strong>{" "}
              and we will respond personally.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              FAQs
            </h2>

            <div className="space-y-6 mt-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  8) Is MahaVastu different from traditional Vastu Shastra?
                </h3>
                <p>
                  Yes. MahaVastu is a modern, result-oriented approach that
                  focuses on practical corrections and energy alignment. It is
                  typically more flexible than traditional Vastu and works well
                  for modern apartments and commercial spaces.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  9) Can Vastu be corrected without demolition?
                </h3>
                <p>
                  In most cases, yes. MahaVastu corrections are designed to work
                  with existing structures and often avoid demolition, focusing
                  instead on energy correction and zone balancing.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  10) Do you provide both interior design and Vastu together?
                </h3>
                <p>
                  Yes, that is one of Vasterior’s biggest strengths. We
                  integrate MahaVastu principles into interior design so you do
                  not have to choose between beauty and alignment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  11) How long does it take to see results after Vastu
                  correction?
                </h3>
                <p>
                  This varies based on the issue and space, but many people
                  notice shifts in peace, sleep, and energy within a few weeks.
                  Larger changes like finances or business growth may take
                  longer.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  12) Do you consult for apartments in Hyderabad?
                </h3>
                <p>
                  Absolutely. MahaVastu works very well for apartments and
                  high-rise flats, which is why many Hyderabad homeowners prefer
                  this approach.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  13) Is MahaVastu scientific or religious?
                </h3>
                <p>
                  MahaVastu is not religious. It focuses on space energy flow,
                  directional impact, and zone balance. It is practical and does
                  not require rituals or belief-based practices.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  14) Can you help with office and business growth?
                </h3>
                <p>
                  Yes. Office energy plays a major role in productivity,
                  leadership clarity, staff harmony, and financial flow. We
                  consult for offices, clinics, studios, and commercial spaces.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  15) What if the layout cannot be changed?
                </h3>
                <p>
                  That is very common, especially in apartments. MahaVastu is
                  designed for real-world constraints, and we work with what you
                  have while still providing effective correction options.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  16) Do you provide online consultation?
                </h3>
                <p>
                  Yes. If you cannot schedule a site visit, we can consult
                  online using floor plans, photos, and a structured review
                  process.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  17) How do I book a consultation with Vasterior?
                </h3>
                <p>
                  You can start by calling <strong>+917906086899</strong> for a
                  quick discussion, or emailing{" "}
                  <strong>
                    <a href="mailto:info@spacebuild.com">
                      info@spacebuild.com
                    </a>
                  </strong>{" "}
                  with your layout and concerns. We will guide you to the right
                  consultation package.
                </p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Final Note
            </h2>
            <p>
              Your home is not just where you live, it is where your mind resets,
              where your relationships grow, and where your future is built.
            </p>
            <p>
              When your space is aligned, life starts feeling lighter, not
              because the world changes overnight, but because your foundation
              becomes stronger.
            </p>
            <p>
              If you are looking for a trusted Vastu expert in Hyderabad who
              understands both MahaVastu and modern interior design, Vasterior
              is here to help you create a space that looks premium and supports
              your goals.
            </p>
            <p>
              To book your consultation, call{" "}
              <strong>+917906086899</strong> and we will help you choose the
              right service, or email{" "}
              <strong>
                <a href="mailto:info@spacebuild.com">
                  info@spacebuild.com
                </a>
              </strong>{" "}
              and we will take it forward from there.
            </p>
          </div>

          <PostNavigation slug="vastu-expert-hyderabad" />
        </div>

        {/* Form Section - Smart positioning with CSS order */}
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
