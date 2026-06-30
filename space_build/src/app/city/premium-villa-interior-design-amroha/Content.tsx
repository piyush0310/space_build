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
            Premium Villa Interior Design Amroha — Vasterior Studio
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior Studio brings a rare union of luxury, intuition, and
                energy alignment to the villas of Amroha. In a city where
                heritage meets rising modern aspirations, interiors are designed
                to feel deeply personal, emotionally grounding, and
                architecturally refined.
              </p>
              <p>
                Every villa becomes a living narrative where elegance, comfort,
                and MahaVastu-aligned spatial flow create an unmistakable sense
                of harmony. For families building their legacy homes in Amroha,
                Vasterior Studio becomes a creative partner, shaping spaces that
                are not only beautiful but meaningful, sensory, and timeless.
              </p>
            </div>

            {/* Why premium villas need distinct design */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Premium Villas in Amroha Need a Distinct Design Language
              </h3>
              <p>
                Amroha is evolving, and its villas are no longer just
                structures; they are reflections of ambition, lifestyle, and the
                grace of modern living. A premium villa in Amroha demands a
                design language that respects cultural depth while embracing
                contemporary luxury.
              </p>
              <p className="font-semibold">Families today seek:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Open layouts that breathe</li>
                <li>Warm material palettes rooted in nature</li>
                <li>Spatial clarity for effortless movement</li>
                <li>Rooms that support productivity, relaxation, and wellbeing</li>
              </ul>
              <p>
                The city&apos;s unique character, a blend of tradition, craft,
                and rising sophistication, calls for interiors that feel global
                yet grounded. Vasterior Studio curates this balance with
                precision, creating villas that are serene, curated, and
                unmistakably premium.
              </p>
            </div>

            {/* Signature approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The Vasterior Signature — Where Luxury Meets Energy Alignment
              </h3>
              <p>
                Every Vasterior villa is built on one silent principle: a space
                must feel right before it looks right. With deep expertise in
                MahaVastu and interior architecture, subtle energy alignment is
                woven into each design decision through thoughtful zoning,
                elemental balance, and intuitive material selection.
              </p>
              <p className="font-semibold">This approach creates:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Rooms that feel calmer</li>
                <li>Workspaces that feel more focused</li>
                <li>Bedrooms that invite deeper rest</li>
                <li>Living areas that encourage connection</li>
                <li>Kitchens that support nourishment and flow</li>
              </ul>
              <p className="font-semibold">Our signature style blends:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Warm neutral palettes</li>
                <li>Natural stone and rich veneers</li>
                <li>Curated textures and tactile finishes</li>
                <li>Layered, ambient and task lighting</li>
                <li>Bespoke furniture detailing and storage</li>
              </ul>
              <p>
                Each villa becomes a well-balanced world, aesthetically
                luxurious, emotionally grounded, and aligned with the family&apos;s
                rhythm of life.
              </p>
            </div>

            {/* What we create */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What We Create Inside a Premium Villa
              </h3>
              <p>
                A villa gives the canvas for a complete masterpiece. Vasterior
                designs each zone with impeccable craft and intention.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                1. Living Room Sanctuaries
              </h4>
              <p>
                The heart of the villa with airy layouts, sculpted furniture,
                soft layered lighting, and a neutral palette enriched with
                natural materials, perfect for hosting, gathering, and
                unwinding.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                2. Gourmet Kitchens Aligned for Flow
              </h4>
              <p>
                Modern, efficient kitchens blended with subtle Vastu logic,
                where the placement of fire, water, and storage works in
                harmony. Premium finishes, ergonomic layouts, and elegant
                cabinetry turn every kitchen into a joy to work in.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                3. Master Suites That Feel Like Private Resorts
              </h4>
              <p>
                Tan leathers, warm ivory walls, sensual textures, and deep
                restful lighting shape master suites into personal sanctuaries
                where every element slows down the pace of life.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                4. Walk-In Wardrobes Crafted for Lifestyle
              </h4>
              <p>
                Bespoke wardrobes with soft-close systems, island counters, shoe
                walls, and integrated lighting that elevate everyday dressing
                into a refined ritual.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                5. Earthy, Spa-Like Bathrooms
              </h4>
              <p>
                Soft stone surfaces, spacious wet zones, rain showers, and warm
                lighting inspired by boutique luxury resorts, creating bathrooms
                that feel handcrafted, calm, and immersive.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                6. Children&apos;s Rooms Designed for Expression
              </h4>
              <p>
                Spaces curated for creativity, positivity, and mental clarity
                with playful, age-appropriate concepts without clutter, designed
                to grow with the child.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                7. Courtyards, Pooja Rooms &amp; Terraces
              </h4>
              <p>
                Inner courtyards and pooja rooms become centers of peace,
                designed with pure elements, intention, and emotional resonance.
                Terraces evolve into lounge zones, micro-gardens, or evening
                retreats under soft lighting.
              </p>
              <p>
                Each room flows seamlessly into the next, each corner
                thoughtfully grounded, and each detail emotionally intelligent.
              </p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Process — From First Sketch to Final Reveal
              </h3>
              <p>
                Designing a premium villa is a journey, and Vasterior makes it
                effortless, immersive, and deeply personalized through a clear,
                end-to-end process.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Vision Mapping</strong> — Understanding lifestyle,
                  aspirations, family story, and the emotions the villa should
                  hold.
                </li>
                <li>
                  <strong>Spatial Zoning &amp; MahaVastu Alignment</strong> —
                  Creating layouts that balance direction, elements, and
                  activities for intuitive comfort.
                </li>
                <li>
                  <strong>Concept Development &amp; 3D Visualization</strong> —
                  Moodboards, material palettes, and photorealistic renders to
                  experience spaces before execution.
                </li>
                <li>
                  <strong>Material &amp; Furniture Selection</strong> — Curating
                  stones, veneers, lighting, and soft furnishings for aesthetic
                  harmony and longevity.
                </li>
                <li>
                  <strong>Technical Drawings &amp; Detailing</strong> —
                  Complete drawings, electricals, elevations, and joinery
                  details for flawless execution.
                </li>
                <li>
                  <strong>On-Site Management &amp; Quality Control</strong> —
                  Ensuring every inch is executed with care, craftsmanship, and
                  discipline.
                </li>
                <li>
                  <strong>Styling &amp; Final Reveal</strong> — Soft
                  furnishings, decor, accessories, and lighting layers completing
                  the villa with editorial finesse.
                </li>
              </ol>
              <p>
                The final reveal is always emotional, a moment where vision
                turns into tangible beauty.
              </p>
            </div>

            {/* Why high-end clients choose Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why High-End Clients in Amroha Choose Vasterior
              </h3>
              <p>
                Every premium villa owner seeks a team that understands both
                design and lifestyle. Vasterior Studio stands apart through its
                depth of intention and execution.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Bespoke Design Philosophy</strong> — Each villa is a
                  fresh canvas, crafted uniquely for the family.
                </li>
                <li>
                  <strong>MahaVastu-Backed Spatial Flow</strong> — Not
                  superstition, but directional intelligence and experience.
                </li>
                <li>
                  <strong>Curated Material Luxury</strong> — Natural stones,
                  custom furniture, and designer fittings that age beautifully.
                </li>
                <li>
                  <strong>Boutique-Scale Personal Attention</strong> — Limited
                  projects to ensure depth, focus, and excellence.
                </li>
                <li>
                  <strong>End-to-End Execution Expertise</strong> — From concept
                  to handover, a seamless, stress-free journey.
                </li>
                <li>
                  <strong>Signature Editorial Aesthetic</strong> — Villas that
                  look magazine-worthy yet feel intimately like home.
                </li>
              </ul>
              <p>
                Vasterior becomes not just a designer, but a creative partner, a
                guide, and a curator of luxury and harmony.
              </p>
            </div>

            {/* Begin villa journey */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Begin Your Villa Journey
              </h3>
              <p>
                A villa in Amroha deserves to be more than just a structure; it
                should become a living, breathing extension of identity. If
                you&apos;re ready to build a home that feels premium, personal,
                and powerfully aligned, the journey can begin now.
              </p>
              <p>
                Vasterior Studio is ready to create it with you. Book a
                consultation for Premium Villa Interior Design in Amroha.
                Contact us today at <strong>+919927611780</strong> or{" "}
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
