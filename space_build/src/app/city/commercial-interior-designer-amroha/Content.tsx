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
            Commercial Interior Designer Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior Studio brings the language of luxury, intentionality, and
              spatial intelligence to the commercial landscape of Amroha. In a city
              where businesses are rapidly evolving, from modern offices and boutique
              stores to clinics, cafés, and corporates, your space has become more than
              a workplace. It is your brand&apos;s first impression, your energy centre,
              and your silent ambassador of growth.
            </p>
            <p>
              Our role is simple: design spaces that work beautifully, flow
              intelligently, and convert effortlessly. Vasterior blends interior design
              sophistication with MahaVastu-aligned spatial flow, ensuring every
              commercial space we create not only looks premium, but performs with
              purpose.
            </p>

            {/*SPACE BUILD */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Commercial Interior Designer in Amroha?
            </h3>
            <p>
              Because we do not just design spaces, we design experiences, behaviours,
              and business outcomes.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Editorial-grade design finesse</li>
              <li>Luxury interiors crafted with deep functional intelligence</li>
              <li>
                Vastu-backed spatial planning without superstition, led by logic,
                psychology, and energy-flow science
              </li>
              <li>Brand storytelling through materials, lighting, and layouts</li>
              <li>A process that is transparent, collaborative, and grounded</li>
            </ul>
            <p className="mt-2">
              Whether you are building an office for 20 employees or a multi-floor
              corporate space for 200+, Vasterior elevates your commercial environment
              into a space that attracts opportunities, inspires people, and grows your
              brand.
            </p>

            {/* Office Interiors */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Office Interior Designer Amroha – Workspaces That Inspire Performance
            </h3>
            <p>
              Your office is where your team ideates, collaborates, closes deals, and
              carries your brand&apos;s energy every day. Our office designs focus on
              clarity, comfort, acoustics, lighting intelligence, circulation flow, and
              a refined aesthetic.
            </p>
            <p>We design:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Leadership cabins with authority-driven materials</li>
              <li>Collaborative zones and lounges</li>
              <li>High-performance work bays</li>
              <li>Conference and presentation rooms</li>
              <li>Reception areas that communicate trust</li>
              <li>Pantry and breakout zones</li>
              <li>Storage-optimized cabinetry</li>
              <li>IT-compatible layouts and server demarcation</li>
            </ul>
            <p className="mt-2">
              Every office is mapped using Vastu&apos;s directional psychology so that
              departments, leadership positions, client discussions, and financial
              activities sit where they flourish best. The result is a workspace that
              feels balanced, productive, and prestigious.
            </p>

            {/* Retail & Showroom */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Retail &amp; Showroom Interior Design Amroha
            </h3>
            <p>In retail, design is not decoration; it is strategy.</p>
            <p>
              Your showroom must guide the customer&apos;s eye, influence movement,
              highlight your products, and create a premium brand perception within
              seconds. Our showroom interiors use:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Zoning and circulation mapping</li>
              <li>Experience-driven display planning</li>
              <li>Layered lighting for product highlighting</li>
              <li>Material palettes that elevate brand value</li>
              <li>Smart storage and operational ease</li>
              <li>Visual merchandising logic rooted in spatial psychology</li>
            </ul>
            <p className="mt-2">
              Whether it is a jewellery store, clothing boutique, electronics showroom,
              or tile and stone studio, Vasterior creates spaces that sell without
              selling.
            </p>

            {/* Corporate Space Planning */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Corporate Space Planning – Strategic, Modern &amp; Future-Ready
            </h3>
            <p>
              Corporate interiors demand more than aesthetics; they require clarity,
              resilience, standardisation, and identity.
            </p>
            <p>
              For large-scale commercial buildings, workshops, or multi-floor
              establishments in Amroha, we offer:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Macro space planning</li>
              <li>Departmental zoning</li>
              <li>Circulation and movement flow</li>
              <li>Multi-floor layout standardisation</li>
              <li>Reception-to-boardroom brand communication</li>
              <li>Executive-level workspace design</li>
              <li>High-quality material selection</li>
            </ul>
            <p className="mt-2">
              Our expertise blends global corporate design sensibilities with local
              operational practicality, ensuring your commercial building stands out as
              a landmark presence in Amroha.
            </p>

            {/* Hospitality */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Hospitality Interiors – Cafés, Restaurants &amp; Experience Spaces
            </h3>
            <p>
              The hospitality industry thrives on ambience. We create warm,
              experiential, photogenic, and memorable spaces through:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Soft mood lighting</li>
              <li>Textured material palettes</li>
              <li>Seating ergonomics</li>
              <li>Efficient service circulation</li>
              <li>Vastu-backed kitchen positioning</li>
              <li>Signature wall elements</li>
              <li>Modern architectural aesthetics</li>
            </ul>
            <p className="mt-2">
              Your café or restaurant becomes the place everyone talks about, not just
              a space where they dine, but a space where they feel.
            </p>

            {/* Renovation */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Commercial Renovation &amp; Refurbishment Services Amroha
            </h3>
            <p>
              Many businesses in Amroha operate in older structures that require
              modernization, energy correction, and functional rethinking. We provide:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Layout transformation</li>
              <li>Cabinetry and carpentry redesign</li>
              <li>Lighting re-mapping</li>
              <li>Workflow correction</li>
              <li>Material upgrade</li>
              <li>Acoustic enhancement</li>
              <li>Spatial energy alignment</li>
              <li>Facade enhancement</li>
            </ul>
            <p className="mt-2">
              A smart renovation can change the entire performance of your business
              without changing the address.
            </p>

            {/* Commercial Vastu */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Commercial Vastu Consultation Amroha
            </h3>
            <p>
              A well-designed commercial space performs better when its activities,
              departments, and objects are aligned with their natural directional
              strengths.
            </p>
            <p>Our Vastu services include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>16-direction MahaVastu mapping</li>
              <li>Activity–direction alignment</li>
              <li>Element balancing</li>
              <li>Astro-Vastu interpretation</li>
              <li>Object and functional corrections</li>
              <li>Energy flow optimization</li>
              <li>Vastu renovations and space rectification</li>
            </ul>
            <p className="mt-2">
              The focus is on science, psychology, and design, not superstition. The
              goal is simple: create a space where growth feels natural and effortless.
            </p>

            {/* Industries */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Industries We Serve in Amroha
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Corporate offices</li>
              <li>Co-working spaces</li>
              <li>Start-up studios</li>
              <li>Retail shops and showrooms</li>
              <li>Jewellery and luxury boutiques</li>
              <li>Clinics and diagnostic centres</li>
              <li>Hospitality and cafés</li>
              <li>Beauty salons and wellness centres</li>
              <li>Educational spaces</li>
              <li>Manufacturing admin offices</li>
            </ul>
            <p className="mt-2">
              Every industry has its behavioural needs, and the design process adapts
              to each.
            </p>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Signature Process
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>
                <strong>Discovery &amp; Consultation</strong> – Understanding your
                brand, workflow, energy needs, and commercial goals.
              </li>
              <li>
                <strong>Spatial Flow &amp; Vastu Mapping</strong> – Mapping your
                building using the 16-zone MahaVastu grid to determine ideal
                placements.
              </li>
              <li>
                <strong>Concept &amp; Material Palette</strong> – Creating a luxe,
                cohesive identity aligned with your industry and brand.
              </li>
              <li>
                <strong>Detailed Drawings &amp; 3D Visualisation</strong> – Layouts,
                elevations, reflected ceiling plans, electrical plans, furniture
                detailing, and 3D renders.
              </li>
              <li>
                <strong>Execution &amp; Management</strong> – On-site supervision,
                vendor coordination, quality checks, and final styling.
              </li>
              <li>
                <strong>Handover with Energy Alignment</strong> – A space ready for
                operations and ready for growth.
              </li>
            </ol>

            {/* Trust */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Amroha Businesses Trust Vasterior
            </h3>
            <p>Because thoughtful design becomes your growth strategy.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Attract clients</li>
              <li>Boost team productivity</li>
              <li>Enhance brand experience</li>
              <li>Improve workflow efficiency</li>
              <li>Create an environment of success</li>
              <li>Strengthen leadership energy</li>
              <li>Increase long-term operational ease</li>
            </ul>

            {/* CTA */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Transform Your Commercial Space in Amroha
            </h3>
            <p>
              Whether you are building a new office, renovating your store, or
              redesigning a full-scale corporate building, Vasterior Studio ensures
              your space becomes a high-performance asset.
            </p>
            <p>
              Book your consultation today. Contact us at{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or{" "}
              <a
                href="mailto:spacebuild.india@gamil.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gamil.com
              </a>
              .
            </p>
          </div>

          <PostNavigation slug="commercial-interior-designer-amroha" />
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
