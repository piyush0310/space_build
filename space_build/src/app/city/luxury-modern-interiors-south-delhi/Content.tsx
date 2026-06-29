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
            Luxury Modern Interiors in South Delhi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes luxury isn&apos;t something you show, it&apos;s something you live
              with.
            </p>
            <p>
              In South Delhi, where taste is inherited as much as it&apos;s curated, homes are no
              longer about surface-level glamour. They&apos;re about clarity, calm, balance, and
              intention. Vasterior designs modern luxury interiors that don&apos;t just look
              stunning on day one, but continue to feel right, year after year.
            </p>
            <p>
              We design homes that align with how you wake up, wind down, host, retreat, and reset.
              And we do it by blending contemporary interior design with the deeply powerful
              principles of MahaVastu, creating spaces that support both your lifestyle and your
              life force.
            </p>

            {/* Modern luxury section */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Modern Luxury, Designed for the Way South Delhi Lives Today
            </h3>
            <p>South Delhi doesn&apos;t need loud design. It needs intelligent design.</p>
            <p>
              The modern luxury homeowner here knows the difference between excess and elegance.
              Vasterior&apos;s approach to luxury interiors is rooted in restraint, proportion,
              material honesty, and spatial flow. Every line, finish, and layout decision is
              intentional, not decorative for the sake of it.
            </p>
            <p>We work with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Clean architectural geometry</li>
              <li>Elevated yet understated materials</li>
              <li>Soft transitions between rooms</li>
              <li>Light, air, and openness that feels natural, not forced</li>
            </ul>
            <p>
              Our interiors don&apos;t chase trends. They set a rhythm, quietly confident, deeply
              refined, and unmistakably personal.
            </p>

            {/* MahaVastu section */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu: Where Energy Meets Architecture
            </h3>
            <p>
              At Vasterior, MahaVastu isn&apos;t an afterthought or an add-on, it&apos;s embedded
              into the design process from the very first sketch.
            </p>
            <p>
              Unlike traditional Vastu that often feels restrictive or outdated, MahaVastu works
              with modern architecture. It focuses on energy balance, spatial orientation, and
              psychological comfort without compromising aesthetics.
            </p>
            <p>What this means for your home:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Spaces that feel calmer without you knowing why</li>
              <li>Bedrooms that actually support rest</li>
              <li>Kitchens that feel energizing, not chaotic</li>
              <li>Workspaces that enhance focus and flow</li>
            </ul>
            <p>
              The result? A home that doesn&apos;t just look luxurious, but supports your life
              quietly, daily, and consistently.
            </p>

            {/* Real life section */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Homes Designed Around Real Life, Not Show Homes
            </h3>
            <p>Luxury today is private.</p>
            <p>
              Vasterior designs interiors for lived-in moments, the morning silence, the evening
              exhale, the unplanned conversations, the rituals that only matter to you. We believe
              the most successful homes are not those that impress guests, but those that feel
              aligned when no one else is watching.
            </p>
            <p>
              Our design process is deeply personal. We study how you move through space, what calms
              you, what grounds you, and what energizes you. The outcome is a home that feels
              intuitive, almost inevitable, as if it couldn&apos;t have been designed any other way.
            </p>

            {/*SPACE BUILD */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why South Delhi Homeowners Choose Vasterior
            </h3>
            <p>Our clients don&apos;t come to us for just interiors. They come to us for clarity.</p>
            <p>They choose Vasterior because:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>They want modern luxury without visual noise</li>
              <li>They value energy alignment but refuse aesthetic compromise</li>
              <li>They understand that design decisions impact daily life</li>
            </ul>
            <p>
              We don&apos;t operate like vendors. We operate like collaborators, bringing design
              intelligence, MahaVastu expertise, and long-term thinking into every project.
            </p>

            {/* Call to action */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let&apos;s Design a Home That Works for You
            </h3>
            <p>
              If you&apos;re considering a luxury modern interior in South Delhi, and you want it to
              feel as good as it looks, the next step is a conversation.
            </p>
            <p>
              You can speak directly with the Vasterior team by calling{" "}
              <strong>+917906086899</strong> to explore whether our approach aligns with your
              vision.
            </p>
            <p>
              Or, if you prefer to begin quietly, you can write to us at{" "}
              <a
                href="mailto:info@spacebuild.com"
                className="text-blue-600 hover:underline"
              >
                info@spacebuild.com
              </a>
              , and we&apos;ll take it from there, thoughtfully, privately, and without pressure.
            </p>
            <p>Because the right home doesn&apos;t need convincing. It just needs alignment.</p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What type of projects does Vasterior specialize in?
                </h4>
                <p>
                  Vasterior specializes in luxury modern residential interiors, particularly for
                  villas, builder floors, and high-end apartments in South Delhi. Each project
                  integrates contemporary design with MahaVastu principles.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Does MahaVastu limit design choices?
                </h4>
                <p>
                  Not at all. MahaVastu enhances design, it doesn&apos;t restrict it. At Vasterior,
                  MahaVastu is applied in a way that complements modern layouts, materials, and
                  aesthetics without making the space feel traditional or rigid.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Can MahaVastu be applied to existing homes?
                </h4>
                <p>
                  Yes. MahaVastu can be effectively integrated into both new constructions and
                  existing homes through layout corrections, material placement, color strategy, and
                  spatial adjustments, without demolition in most cases.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. How is Vasterior different from other luxury interior designers?
                </h4>
                <p>
                  Vasterior doesn&apos;t design for trends or visual drama alone. We design for
                  long-term comfort, energy balance, and emotional ease. Our strength lies in
                  combining refined modern aesthetics with MahaVastu expertise, something very few
                  studios do well.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. Do you only work in South Delhi?
                </h4>
                <p>
                  While South Delhi is a key focus area, Vasterior also undertakes select luxury
                  projects in other premium locations. Each project is evaluated based on alignment,
                  scale, and design intent.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How do I start a project with Vasterior?
                </h4>
                <p>
                  It starts with a conversation. Call <strong>+917906086899</strong> or email{" "}
                  <a
                    href="mailto:info@spacebuild.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@spacebuild.com
                  </a>{" "}
                  to discuss your space, goals, and timelines. If the alignment feels right, we take
                  it forward step by step.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="luxury-modern-interiors-south-delhi" />
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
