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
            Luxury Home Interior Designer in South Delhi
          </h2>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
            Vasterior believes luxury isn&apos;t loud, it&apos;s aligned.
          </h3>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior designs homes in South Delhi that don&apos;t just look exceptional, but feel
              right every single day. Beyond finishes and furniture, we create residences that
              support your life, your routines, your relationships, your growth, by blending refined
              interior design with the intelligence of MahaVastu. The result is not a show home.
              It&apos;s a living, breathing space that works quietly in your favour.
            </p>

            {/* Redefining luxury */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Redefining Luxury Interior Design in South Delhi
            </h3>
            <p>
              South Delhi homes are layered, legacy bungalows, bespoke builder floors, modern villas
              built on old plots. Designing for them requires more than trend awareness. It demands
              sensitivity.
            </p>
            <p>
              At Vasterior, luxury is not about excess. It&apos;s about clarity, flow, and
              intention.
            </p>
            <p>
              Every space we design balances aesthetics with spatial energy, so your home supports
              calm mornings, focused workdays, and grounded evenings.
            </p>
            <p>
              Because what&apos;s the point of a beautiful house if it constantly feels heavy,
              restless, or disconnected?
            </p>

            {/* MahaVastu */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Where Interior Design Meets MahaVastu
            </h3>
            <p>Most people think Vastu means rigid rules.</p>
            <p>We think that&apos;s outdated.</p>
            <p>
              Vasterior integrates MahaVastu principles seamlessly into modern interior design,
              without visual compromise, superstition, or forceful corrections.
            </p>
            <p>We study:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Natural light movement</li>
              <li>Entry and circulation patterns</li>
              <li>Room placements and proportions</li>
              <li>Material behaviour and spatial balance</li>
            </ul>
            <p>You don&apos;t need to believe in anything. You just experience:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Better flow</li>
              <li>A calmer home</li>
              <li>Spaces that feel supportive, not draining</li>
            </ul>
            <p>That&apos;s MahaVastu, applied intelligently.</p>

            {/* South Delhi living */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Designed for South Delhi Living
            </h3>
            <p>South Delhi homes come with unique challenges:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Irregular plot shapes</li>
              <li>Renovations over existing structures</li>
              <li>Conflicting Vastu layouts</li>
              <li>Multiple generations under one roof</li>
            </ul>
            <p>
              Vasterior specialises in navigating these complexities quietly and skillfully.
              Whether it&apos;s reworking a builder floor, redesigning a legacy home, or aligning a
              newly constructed residence, we design spaces that honour both architecture and
              energy.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Philosophy: Soul Over Show
            </h3>
            <p>We don&apos;t design for guests.</p>
            <p>We design for real life.</p>
            <p>That means:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Personal rituals shaping layouts</li>
              <li>Custom corners with meaning</li>
              <li>Furniture placed for comfort, not Instagram</li>
              <li>Materials that age gracefully</li>
              <li>Homes that feel peaceful even when silent</li>
            </ul>
            <p>
              Every Vasterior project is bespoke. No templates. No rushed timelines. No copy-paste
              luxury.
            </p>

            {/* What makes different */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Vasterior Different
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>MahaVastu-led design intelligence, not surface-level Vastu fixes</li>
              <li>Deep focus on emotional and energetic wellbeing</li>
              <li>One-home-at-a-time design attention</li>
              <li>Seamless collaboration between design, alignment, and execution</li>
              <li>Spaces that feel calm, intentional, and deeply personal</li>
            </ul>
            <p>We don&apos;t sell interiors.</p>
            <p>We shape how a home supports your life.</p>

            {/* Fit */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Is Vasterior the Right Fit for You?
            </h3>
            <p>Vasterior works best with homeowners who:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Value longevity over trends</li>
              <li>Care how a space feels, not just how it looks</li>
              <li>Want luxury with meaning</li>
              <li>Are open to aligning their home, not fighting it</li>
            </ul>
            <p>If that sounds like you, we should talk.</p>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin the Conversation
            </h3>
            <p>
              Designing a home like this starts with a conversation, not a quotation. If you&apos;d
              like to explore how your South Delhi home can be elevated through thoughtful interior
              design and MahaVastu alignment, a direct conversation can open the door. Many of our
              clients begin by simply calling <strong>+917906086899</strong> to understand whether
              the approach feels right.
            </p>
            <p>
              For a more detailed discussion or to share drawings and plans, reaching out at{" "}
              <a
                href="mailto:info@spacebuild.com"
                className="text-blue-600 hover:underline"
              >
                info@spacebuild.com
              </a>{" "}
              is often the easiest first step.
            </p>
            <p>No pressure. Just clarity.</p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What kind of projects does Vasterior specialise in?
                </h4>
                <p>
                  Vasterior specialises in luxury residential interiors, builder floors, villas,
                  bungalows, and high-end apartments in South Delhi. Our focus is on homes that
                  require both design excellence and spatial alignment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do I need to believe in Vastu to work with Vasterior?
                </h4>
                <p>
                  Not at all. MahaVastu is used as a design intelligence, not a belief system.
                  Clients choose Vasterior because they feel the difference, not because they&apos;re
                  following rules.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Will MahaVastu affect the look of my home?
                </h4>
                <p>
                  No. Our work ensures that alignment happens behind the scenes. The aesthetic
                  remains modern, refined, and luxurious, never compromised.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Can Vasterior work with existing homes and renovations?
                </h4>
                <p>
                  Yes. Many of our projects involve reworking existing layouts, correcting energy
                  imbalances, and upgrading interiors without structural disruption.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. How early should I involve Vasterior in my project?
                </h4>
                <p>
                  Ideally, during planning or early renovation stages. However, we also consult on
                  finished or semi-finished homes to improve alignment and flow.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. Is Vasterior only for South Delhi clients?
                </h4>
                <p>
                  While South Delhi is a primary focus, we do take select projects elsewhere based
                  on alignment, scope, and intent.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  7. How do I get started?
                </h4>
                <p>
                  Start with a conversation. A quick call or email helps determine if our philosophy
                  aligns with what you&apos;re looking for, before anything formal begins.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="luxury-home-interior-designer-south-delhi" />
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
