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
            Interior Designers in Amroha With Price
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior brings a new language of luxury interior design to
              Amroha, one that blends refined aesthetics, thoughtful space
              planning, and complete pricing clarity for homeowners and
              businesses who value both beauty and balance. If you have been
              searching for interior designers in Amroha with transparent
              pricing, this page is designed to answer your questions with
              honesty, elegance, and confidence.
            </p>

            {/* Standard in Amroha */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              A New Standard of Interior Design in Amroha
            </h3>
            <p>
              Amroha homes are evolving. From spacious builder floors and
              independent houses to modern villas and commercial offices, the
              aspiration today goes beyond decoration; it is about living better
              in well-designed spaces.
            </p>
            <p>
              At Vasterior, interiors are never template-driven or rushed. Every
              project begins by understanding:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>How you live</li>
              <li>How your family moves through the space</li>
              <li>What comfort, luxury, and practicality mean to you</li>
            </ul>
            <p>
              The role of the studio is to translate that understanding into
              interiors that feel timeless, functional, and deeply personal.
            </p>

            {/* Why Vasterior */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Interior Designer in Amroha?
            </h3>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Luxury Design Thinking, Local Understanding
            </h4>
            <p>
              Vasterior brings big-city design sensibility while respecting the
              lifestyle, architecture, and scale of Amroha homes.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Design + Spatial Alignment
            </h4>
            <p>
              The approach integrates interior design with intelligent spatial
              flow planning, ensuring homes feel calm, balanced, and effortless
              to live in.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Transparent Pricing Philosophy
            </h4>
            <p>
              There are no confusing per-square-foot traps or hidden costs,
              only clear, consultation-led pricing aligned to your scope.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              End-to-End Expertise
            </h4>
            <p>
              From concept to execution, or even consultation-only, you choose
              how deeply Vasterior is involved.
            </p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design Services We Offer in Amroha
            </h3>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Residential Interior Design
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Complete home interiors</li>
              <li>Living room and drawing room design</li>
              <li>Bedrooms and wardrobes</li>
              <li>Modular kitchens</li>
              <li>Bathrooms and utility spaces</li>
              <li>Builder floors and villas</li>
              <li>Renovations and refurbishments</li>
            </ul>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Commercial &amp; Office Interiors
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Corporate offices</li>
              <li>Boutique workspaces</li>
              <li>Clinics and studios</li>
              <li>Retail and small commercial units</li>
            </ul>
            <p>
              Each project is custom-designed, never copied and never
              mass-produced.
            </p>

            {/* Pricing approach */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Designers in Amroha With Price: Our Transparent Approach
            </h3>
            <p>
              One of the most common questions clients ask is:{" "}
              <em>What is the price of interior design in Amroha?</em> At
              Vasterior, pricing is scope-based, not misleadingly simplified.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Why We Do Not Follow Per-Sq-Ft Pricing
            </h4>
            <p>Per-square-foot rates often ignore key variables such as:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Design complexity</li>
              <li>Level of detailing</li>
              <li>Furniture and storage requirements</li>
              <li>Material quality</li>
              <li>Execution supervision</li>
            </ul>
            <p>
              Instead, a project-based and zone-based pricing model is used,
              which is fairer and more accurate.
            </p>

            {/* What is included */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Is Included in Vasterior&apos;s Interior Design Price?
            </h3>
            <p>
              When you engage Vasterior, you are investing in clarity, quality,
              and expertise.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Design Scope
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Space planning and zoning</li>
              <li>Furniture layouts</li>
              <li>Mood boards and material palettes</li>
              <li>Colour, texture, and finish selection</li>
              <li>3D visualizations (where applicable)</li>
            </ul>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Technical Scope
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Furniture and carpentry drawings</li>
              <li>Electrical and lighting layouts</li>
              <li>Ceiling and wall detailing</li>
              <li>Bathroom and kitchen drawings</li>
            </ul>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Budgeting &amp; Guidance
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Detailed BOQs</li>
              <li>Cost clarity before execution</li>
              <li>Material sourcing assistance</li>
            </ul>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Execution Support (Full-Service Projects)
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Vendor coordination</li>
              <li>Site supervision</li>
              <li>Quality checks</li>
              <li>Timeline and cost control</li>
            </ul>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Philosophy: Spaces That Feel Right
            </h3>
            <p>
              Great interiors should not just look good; they should feel right
              every day.
            </p>
            <p>Vasterior&apos;s design philosophy focuses on:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Natural light and ventilation</li>
              <li>Logical movement and circulation</li>
              <li>Balanced proportions</li>
              <li>Calm colour palettes</li>
              <li>Materials that age gracefully</li>
            </ul>
            <p>
              MahaVastu-based spatial alignment is integrated in a modern,
              scientific manner, without superstition or fear-based language, so
              the home feels grounded, peaceful, and supportive of daily life.
            </p>

            {/* Experience */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Experience That Goes Beyond Amroha
            </h3>
            <p>
              While Vasterior actively serves Amroha, the studio brings
              experience from luxury residential projects, high-end offices,
              boutique commercial spaces, and large-scale renovations across
              North India and NCR. [web:3][web:39]
            </p>
            <p>
              This experience allows refined detailing, better material choices,
              and future-ready layouts to be introduced into local projects.
            </p>

            {/* Who it is for */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Is This Service Ideal For?
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Homeowners building or renovating their dream home</li>
              <li>Families upgrading lifestyle spaces</li>
              <li>Builders seeking premium interiors</li>
              <li>Business owners wanting dignified workspaces</li>
              <li>Clients who value clarity, not chaos</li>
            </ul>
            <p>
              If you are looking for the cheapest interior designer, Vasterior
              may not be the right fit. If you are looking for value, longevity,
              and thoughtful design, it probably is.
            </p>

            {/* CTA */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Book Your Interior Design Consultation in Amroha
            </h3>
            <p>
              Choosing the right interior designer is a decision that shapes
              your everyday life. At Vasterior, that decision is made easier
              through honest conversations, transparent pricing, and refined
              design thinking.
            </p>
            <p>
              Speak to a designer and contact us today at{" "}
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

          <PostNavigation slug="interior-designer-in-amroha" />
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
