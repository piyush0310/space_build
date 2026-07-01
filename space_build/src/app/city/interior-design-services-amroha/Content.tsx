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
            Interior Design Services in Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a home is not merely constructed or
              decorated, it is composed. Every wall, every material, and every
              axis of movement carries a rhythm that quietly shapes how you
              live, think, and feel. As a luxury interior design and Spatial
              Flow Consulting studio, Vasterior brings a refined blend of
              contemporary interior design and modern MahaVastu principles to
              homes in Amroha, creating spaces that feel balanced, timeless, and
              deeply personal.
            </p>

            {/* Amroha context */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Designing Homes for the Way Amroha Lives
            </h3>
            <p>
              Amroha&apos;s homes tell stories of rooted families, evolving
              aspirations, and spaces that are meant to last generations. From
              independent houses and builder floors to villas and renovation
              projects, interior design here must respond to climate, lifestyle,
              and long-term usability, not fleeting trends.
            </p>
            <p>Interior design in Amroha is not about excess. It is about:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Intelligent space planning for joint and nuclear families</li>
              <li>Materials that age gracefully in local conditions</li>
              <li>Layouts that support daily routines, privacy, and gathering</li>
              <li>
                Design decisions that reduce maintenance while elevating
                aesthetics
              </li>
            </ul>
            <p>
              Vasterior approaches each project with this contextual
              sensitivity, designing interiors that feel relevant today and
              enduring tomorrow.
            </p>

            {/* Services list */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Interior Design Services in Amroha
            </h3>
            <p>
              Our interior design services in Amroha are comprehensive,
              structured, and deeply intentional. There are no cookie-cutter
              solutions or per-square-foot formulas; every project begins with
              understanding how the space needs to function before deciding how
              it should look.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Space Planning &amp; Layout Design
            </h4>
            <p>
              We start by decoding movement, furniture placement, storage needs,
              and visual balance, ensuring that every square foot is optimized
              without feeling crowded.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Luxury Residential Interiors
            </h4>
            <p>
              From living rooms and bedrooms to dining areas and private
              lounges, designs balance elegance with everyday comfort, focusing
              on proportion, material harmony, and calm sophistication.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Modular Kitchens &amp; Wardrobes
            </h4>
            <p>
              Highly functional yet aesthetically refined kitchens and wardrobes
              are planned around workflow, storage intelligence, and long-term
              durability, customized for Indian cooking habits and usage
              patterns.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Living Room &amp; Bedroom Styling
            </h4>
            <p>
              Thoughtful layering of textures, lighting, furniture, and finishes
              creates spaces that feel warm, grounded, and emotionally
              comforting.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Lighting Design &amp; Material Selection
            </h4>
            <p>
              Lighting is treated as an architectural element, not an
              afterthought. Layered lighting plans and premium materials are
              curated to enhance both mood and usability.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Turnkey Interior Execution
            </h4>
            <p>
              For clients seeking a seamless experience, Vasterior manages
              execution, vendor coordination, quality control, and on-site
              supervision, ensuring the design intent is preserved till final
              handover.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              MahaVastu-Integrated Interior Design
            </h4>
            <p>
              For those who wish to align their home energetically, MahaVastu
              principles are integrated gently and scientifically, without
              superstition or disruption. [web:8][web:25]
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Spatial Flow Planning
            </h4>
            <p>
              A signature Vasterior approach that studies how energy, movement,
              and human activity interact within a space, bringing clarity,
              calm, and coherence to the layout.
            </p>

            {/* MahaVastu section */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu × Interior Design: A Modern, Scientific Approach
            </h3>
            <p>
              Vasterior&apos;s association with MahaVastu is rooted in logic,
              psychology, and spatial science, not fear-based corrections. In
              Amroha homes, MahaVastu integration often involves:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Aligning activities with directional strengths</li>
              <li>
                Correcting imbalance through layout, materials, and placement
              </li>
              <li>Enhancing natural light, airflow, and spatial clarity</li>
              <li>
                Supporting goals such as stability, growth, peace, or focus
              </li>
            </ul>
            <p>
              There is no demolition or panic remedy, only intelligent alignment
              that works with architecture, not against it. [web:43][web:25]
            </p>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process: Clear, Transparent, Structured
            </h3>
            <p>
              A refined design experience requires clarity at every step. The
              interior design process in Amroha is designed to be collaborative,
              calm, and transparent.
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>
                <strong>Initial Consultation</strong> – Understanding your
                lifestyle, needs, budget range, and long-term vision.
              </li>
              <li>
                <strong>Site Visit &amp; Survey</strong> – Detailed
                measurements, spatial analysis, and on-ground understanding of
                the property.
              </li>
              <li>
                <strong>Concept Development</strong> – Mood boards, layout
                options, and design direction that reflect your personality and
                priorities.
              </li>
              <li>
                <strong>Design Development</strong> – Detailed drawings,
                material palettes, lighting plans, and furniture designs.
              </li>
              <li>
                <strong>BOQs &amp; Cost Clarity</strong> – Transparent budgets
                and scope definitions, with no surprises later.
              </li>
              <li>
                <strong>Execution &amp; Supervision</strong> – On-site
                coordination, quality checks, and alignment with approved
                designs.
              </li>
            </ol>

            {/* Who we design for */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who We Design For in Amroha
            </h3>
            <p>
              Vasterior works with clients who value quality, clarity, and
              intention in design, including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Owners of independent homes and villas</li>
              <li>Builder floor residents seeking refined upgrades</li>
              <li>Families planning renovations or extensions</li>
              <li>
                Business owners and professionals investing in long-term homes
              </li>
            </ul>
            <p>
              Whether the project is a fresh interior or a thoughtful
              renovation, the approach remains rooted in precision and purpose.
            </p>

            {/* Why Vasterior */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Interior Design in Amroha
            </h3>
            <p>
              What sets Vasterior apart is not just what is designed, but how it
              is designed. [web:2][web:58]
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Design and MahaVastu under one roof</li>
              <li>Luxury sensibility without visual noise</li>
              <li>Founder-led vision and involvement</li>
              <li>No per-square-foot confusion, only project-based clarity</li>
              <li>Calm execution with strong technical depth</li>
            </ul>
            <p>
              Luxury here is not loud; it is confident, composed, and quietly
              powerful.
            </p>

            {/* CTA */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Interior Design Journey with Vasterior
            </h3>
            <p>
              A well-designed home supports your life silently, every single
              day. If you are looking for interior design services in Amroha
              that combine elegance, intelligence, and long-term value,
              Vasterior invites you to begin with a conversation.
            </p>
            <p>
              Book a design consultation, request a site visit, or explore how
              Spatial Flow Planning and MahaVastu-integrated interiors can
              transform not just your home, but the way it feels to live in it.
              For further details, connect with our experts today at{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or{" "}
              <a
                href="mailto:spacebuild.india@gmail.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gmail.com
              </a>
              .
            </p>
          </div>

          <PostNavigation slug="interior-contractor-amroha" />
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
