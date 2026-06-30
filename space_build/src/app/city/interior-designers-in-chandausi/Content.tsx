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
            Interior Designers in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior begins every space with a simple belief: when design, intention, and 
              energy flow align, homes don{"'"}t just look beautiful, they feel right. As a 
              luxury interior design and spatial flow consultancy serving Chandausi, we create 
              interiors that are refined, functional, and deeply personal, blending contemporary 
              design sensibilities with a scientific, non-destructive approach to Vastu. The 
              result is a space that supports your lifestyle, aspirations, and everyday 
              well-being, quietly, elegantly, and with lasting relevance.
            </p>

            {/* Understanding Homes */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Understanding Homes & Lifestyles in Chandausi
            </h3>
            <p>
              Chandausi is evolving. Traditional homes stand alongside newly built residences; 
              families value comfort and longevity while aspiring for modern aesthetics and 
              thoughtful planning. We understand these nuances. Our designs respect local 
              living patterns, natural light, ventilation, storage needs, family flow, while 
              introducing materials, layouts, and finishes that elevate the experience of daily life.
            </p>
            <p>
              Whether it{"'"}s a compact apartment, an independent house, or a commercial space, 
              our approach begins by listening. How do you use your home? What feels missing? 
              What should feel effortless? These answers shape everything that follows.
            </p>

            {/* Design Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Vasterior Design Philosophy: Interiors with Spatial Flow
            </h3>
            <p>
              At Vasterior, interior design is not a surface-level exercise. It{"'"}s a layered 
              process that considers movement, balance, materials, light, and intention. We 
              integrate Vastu as a scientific framework, not superstition, using layout 
              planning, object placement, material logic, and activity alignment. Demolition is 
              never the default; intelligent design is.
            </p>
            <p>This philosophy allows us to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Improve spatial efficiency without disruption</li>
              <li>Enhance comfort, focus, and calm through layout logic</li>
              <li>Create timeless interiors that don{"'"}t chase trends</li>
              <li>Ensure design decisions are both aesthetic and purposeful</li>
            </ul>
            <p className="mt-2">
              The outcome is a space that supports you, subtly, consistently, and beautifully.
            </p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design Services in Chandausi
            </h3>
            <p>
              We offer a curated range of services for residential and select commercial 
              projects in and around Chandausi:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Residential Interior Design</strong> - From full-home transformations 
                  to focused renovations, we design living rooms, bedrooms, kitchens, and private 
                  spaces that feel cohesive and intentional.</li>
              <li><strong>Commercial & Office Interiors</strong> - Thoughtful layouts, material 
                  palettes, and lighting strategies that enhance productivity while maintaining 
                  a refined brand presence.</li>
              <li><strong>Interior Design Consultation (Per Zone)</strong> - Ideal for 
                  renovations or partial upgrades, get professional guidance on layout, 
                  finishes, furniture, and styling for individual rooms.</li>
              <li><strong>Vastu Consultation (Non-Destructive)</strong> - A comprehensive 
                  analysis of spatial alignment with practical, décor-led corrections that 
                  integrate seamlessly into your interiors.</li>
              <li><strong>Design + Execution (Selective Projects)</strong> - For clients seeking 
                  end-to-end clarity, we manage design development, detailing, and execution 
                  with precision and accountability.</li>
            </ul>

            {/* What Sets Vasterior Apart */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Sets Vasterior Apart
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Non-Destructive Vastu Integration</strong> - No breaking walls, no 
                  unnecessary changes, only intelligent alignment through design.</li>
              <li><strong>Detail-Driven Process</strong> - From space documentation to lighting 
                  layers and material junctions, every decision is considered.</li>
              <li><strong>Timeless, Not Trend-Driven</strong> - We design spaces that age 
                  gracefully, visually and functionally.</li>
              <li><strong>Clear Communication</strong> - You{"'"}ll always know why something is 
                  being designed a certain way.</li>
              <li><strong>Founder-Led Vision</strong> - Every project reflects the studio{"'"}s 
                  core philosophy of spatial harmony and refined living.</li>
            </ul>

            {/* Our Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process: Clear, Calm, and Collaborative
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Discovery & Consultation – Understanding your space, lifestyle, and objectives</li>
              <li>Spatial Planning & Concept – Layouts, zoning, and design direction</li>
              <li>Material & Detail Development – Finishes, lighting, furniture, and detailing</li>
              <li>Vastu Alignment – Scientific, décor-based corrections integrated seamlessly</li>
              <li>Execution & Oversight – For applicable projects, we ensure design intent is realized on site</li>
            </ol>

            {/* Is Vasterior Right for You */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Is Vasterior Right for You?
            </h3>
            <p>Our services are ideal if you:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Value clarity, quality, and longevity in design</li>
              <li>Want interiors that feel calm, balanced, and intentional</li>
              <li>Prefer thoughtful guidance over generic solutions</li>
              <li>Are planning a new home, renovation, or focused upgrade in Chandausi</li>
            </ul>
            <p className="mt-2">
              If you{"'"}re looking for quick fixes or trend-heavy décor, we may not be the right 
              fit. If you{"'"}re seeking a considered, long-term design approach, you{"'"}re in 
              the right place.
            </p>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Design Journey
            </h3>
            <p>
              A well-designed space often begins with a simple conversation. If you{"'"}re 
              exploring interior designers in Chandausi and want clarity on how your home or 
              workplace can be planned more intelligently, you can speak directly with the 
              Vasterior team by calling <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or by writing to{" "}
              <a
                href="mailto:spacebuild.india@gamil.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gamil.com
              </a>
              . We{"'"}ll help you understand what{"'"}s possible, calmly, honestly, and without pressure.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. Do you provide interior design services specifically in Chandausi?
                </h4>
                <p>
                  Yes. Vasterior offers interior design and Vastu consultation services in 
                  Chandausi and nearby regions, tailored to local homes and lifestyles.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Is Vastu mandatory in your interior design projects?
                </h4>
                <p>
                  No. Vastu is offered as an optional, scientific layer. When included, it is 
                  integrated non-destructively and aligned with modern interior design principles.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Do you take renovation and partial interior projects?
                </h4>
                <p>
                  Yes. We offer per-zone consultation services for renovations, room upgrades, 
                  and focused design improvements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. How do you price your interior design services?
                </h4>
                <p>
                  Pricing depends on the scope, consultation, design-only, or full execution. 
                  We follow project-based clarity rather than confusing per-square-foot rates.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. Will you handle execution and site coordination?
                </h4>
                <p>
                  For select projects, yes. We offer end-to-end design and execution management 
                  where scope and timelines allow for quality control.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. What makes Vasterior different from other interior designers in Chandausi?
                </h4>
                <p>
                  Our emphasis on spatial flow, non-destructive Vastu, detail-driven planning, 
                  and timeless design sets us apart from trend-led or purely decorative studios.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  7. How do I start working with Vasterior?
                </h4>
                <p>
                  You can begin by discussing your requirements over a call at{" "}
                  <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or by emailing{" "}
                  <a
                    href="mailto:spacebuild.india@gamil.com"
                    className="text-blue-600 hover:underline"
                  >
                    spacebuild.india@gamil.com
                  </a>
                  . We{"'"}ll guide you on the next steps based on your needs.
                </p>
              </div>
            </div>

            <p className="mt-8 italic text-gray-600">
              Thoughtful spaces don{"'"}t announce themselves, they support you quietly, every day. 
              That{"'"}s the Vasterior way.
            </p>
          </div>

          <PostNavigation slug="interior-designers-in-chandausi" />
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
