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
            Interior Contractor Amroha — Vasterior Studio
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior Studio brings architectural finesse, luxury
                craftsmanship and energy-aligned spatial design to Amroha&apos;s
                most discerning homes and workplaces.
              </p>
              <p>
                As a premium interior contractor in Amroha, Vasterior transforms
                raw structures into refined, high-performance spaces, blending
                modern functionality with timeless aesthetics and meticulous
                on-site execution guided by a boutique design sensibility.
              </p>
              <p>
                Whether you are building your dream home, redefining a family
                property or crafting a statement office, Vasterior turns your
                vision into a beautifully executed reality, with zero chaos and
                complete accountability.
              </p>
            </div>

            {/* Luxury meets precision */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Where Luxury Meets Precision, Where Design Meets Discipline
              </h3>
              <p>
                Unlike traditional contracting, Vasterior approaches every
                project as a designed experience, not just a checklist of tasks.
              </p>
              <p>
                The philosophy, rooted in spatial flow planning and
                energy-aligned layouts, ensures that the space does not just
                look beautiful, it works for you for years to come.
              </p>
              <p>Clients choose Vasterior because the studio offers:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Editorial-grade design sensibility</li>
                <li>Architect-level precision in drawings</li>
                <li>Reliable, trained craftsmen</li>
                <li>Quality-controlled material sourcing</li>
                <li>Transparent communication</li>
                <li>Time-bound project delivery</li>
                <li>Single-point accountability</li>
              </ul>
              <p>
                Every line, every panel and every joint is deliberate,
                thoughtful and beautifully finished.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Turnkey Interior Contracting Services in Amroha
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Complete Turnkey Interior Solutions</strong> – From
                  layout planning to materials and execution, the entire site is
                  handled under one disciplined system with no miscommunication
                  or divided teams.
                </li>
                <li>
                  <strong>Civil Work and Structural Enhancements</strong> – Wall
                  modifications, space re-layouts, openings, window resizing and
                  partitions executed with engineering safety and aesthetic
                  clarity.
                </li>
                <li>
                  <strong>Bespoke Furniture and Modular Installations</strong> –
                  Custom furniture in solid wood, veneer, PU and leather, with
                  soft-closing hardware and ergonomic storage.
                </li>
                <li>
                  <strong>Premium Wall Panelling and Architectural Surfaces</strong>{" "}
                  – Brass details, PU panels, stone cladding, leather panelling,
                  grooved and fluted surfaces installed with tight tolerances.
                </li>
                <li>
                  <strong>Flooring and Ceiling Craftsmanship</strong> – False
                  ceilings with concealed and profile lighting, Italian marble,
                  wooden flooring and anti-skid tiles finished to perfection.
                </li>
                <li>
                  <strong>Lighting Planning and Execution</strong> – Accent,
                  ambient, cove, task and grid lighting designed for mood as
                  much as visibility.
                </li>
                <li>
                  <strong>Luxury Painting, Polishing and Textures</strong> –
                  Imported textures, stucco, limewash, PU, melamine and lacquer
                  finishes that age gracefully.
                </li>
                <li>
                  <strong>Material Sourcing and Vendor Management</strong> –
                  From signature marbles to brass profiles and designer
                  laminates, all materials are sourced and checked under strict
                  quality control.
                </li>
                <li>
                  <strong>Energy-Aligned Space Planning</strong> – Modern,
                  non-superstitious interpretations of Vastu help optimise
                  comfort, flow and emotional balance.
                </li>
              </ol>
            </div>

            {/* Why Amroha chooses Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Amroha Chooses Vasterior for Luxury Interior Contracting
              </h3>
              <p>
                Amroha is evolving, with families investing in more refined
                homes, better workspaces and thoughtfully curated environments.
              </p>
              <p>Vasterior stands out by offering:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Luxury detailing usually seen in top metro studios</li>
                <li>End-to-end execution with zero misalignment</li>
                <li>Aesthetic harmony combined with technical accuracy</li>
                <li>Transparent costing and material documentation</li>
                <li>Local site presence with NCR-level expertise</li>
                <li>
                  Experience across premium homes, offices, boutiques and studio
                  apartments
                </li>
              </ul>
              <p>
                From elegant Amroha residences to modern offices across the
                Moradabad belt, Rampur, Gajraula and Delhi NCR, the work is
                recognised for sophistication and soul.
              </p>
            </div>

            {/* Vasterior Difference */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The Vasterior Difference
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
                Editorial Design Sensibility
              </h4>
              <p>
                Spaces are layered, balanced and timeless, with a visual
                language worthy of leading design publications.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
                Craftsmen Trained for Luxury Projects
              </h4>
              <p>
                Teams include polish specialists, veneer experts, stone
                craftsmen, electricians and civil professionals experienced in
                high-end work.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
                Flawless Project Coordination
              </h4>
              <p>
                One unified workflow, one finishing standard and one point of
                communication keep the project smooth and predictable.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
                Energy and Aesthetic Harmony
              </h4>
              <p>
                MahaVastu-backed spatial logic supports peace, clarity and flow
                across living and working areas.
              </p>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
                Premium Client Experience
              </h4>
              <p>
                Every meeting is guided, every drawing intentional and every
                detail crafted to reflect a truly premium journey.
              </p>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Ready to Build a Space That Feels Designed, Not Assembled?
              </h3>
              <p>
                Your dream space deserves more than basic carpentry and labour;
                it deserves expert execution, refined detailing and a premium
                client journey.
              </p>
              <p>
                Contact Vasterior Studio today at{" "}
                <strong>+917906086899</strong> or{" "}
                <a
                  href="mailto:info@spacebuild.com"
                  className="text-blue-600 hover:underline"
                >
                  info@spacebuild.com
                </a>{" "}
                to explore turnkey interior services.
              </p>
              <p>
                Experience interior contracting that elevates your space and
                respects your time.
              </p>
            </div>
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
