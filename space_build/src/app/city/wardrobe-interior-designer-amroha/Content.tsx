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
            Wardrobe Interior Designer Amroha — Luxury, Precision and Vastu-Aligned Storage Design
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior Studio brings the art of luxury wardrobe design to Amroha with a rare blend
              of architectural finesse, spatial flow intelligence, and timeless aesthetic
              sensibility. In a city evolving rapidly with new homes, modern aspirations, and a
              growing taste for refined living, the wardrobe is no longer just storage; it is the
              anchor of your private universe.
            </p>
            <p>
              It is the space where your morning flow begins, where your essentials rest, and where
              your lifestyle quietly takes shape every single day. A beautifully designed wardrobe
              does not just organise belongings; it organises life.
            </p>
            <p>
              At Vasterior, wardrobes are designed as living extensions of your personality,
              grounded in Vastu alignment, elevated through bespoke craftsmanship, and engineered
              with space-maximising innovation for today&apos;s urban living in Amroha.
            </p>

            {/* Why custom wardrobes */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Custom Wardrobes Matter More Than Ever
            </h3>
            <p>
              The wardrobe is one of the most frequently used elements in any home. If it is not
              thoughtfully planned, mornings become chaotic, space feels cluttered, energy feels
              heavy, and the room loses its calm.
            </p>
            <p>A truly well-designed wardrobe should feel effortless:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Doors glide softly and close seamlessly</li>
              <li>Lighting guides your eye without glare</li>
              <li>Compartments feel intuitive and easy to access</li>
              <li>Every object feels like it belongs exactly where it is</li>
            </ul>
            <p className="mt-2">
              This is the difference between an ordinary cupboard and a luxury wardrobe designed by
              Vasterior Studio.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Signature Wardrobe Design Philosophy
            </h3>
            <p>
              Every wardrobe designed in Amroha is crafted through a clear design lens that blends
              energy, engineering, and elegance.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              1. MahaVastu-Aligned Spatial Planning
            </h4>
            <p>
              There is no superstition, only subtle, intelligent energy mapping. Zone influence is
              considered before placing heavy storage.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>South-West:</strong> Stability zone, ideal for heavy, grounding wardrobes
              </li>
              <li>
                <strong>North-West:</strong> Support zone, well-suited for guest wardrobes
              </li>
              <li>
                <strong>South-East:</strong> Dynamic fire zone, better for minimal, functional
                designs
              </li>
              <li>
                <strong>North-East:</strong> Light, spiritual zone where heavy storage is avoided
              </li>
            </ul>
            <p className="mt-2">
              This creates a space that feels harmonious as well as visually refined.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              2. Architecture-Led Interior Engineering
            </h4>
            <p>
              Drafting, gridding, and precise site surveying are integrated to ensure
              millimetre-perfect execution, especially important for compact Amroha homes and tight
              niches.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              3. Material Luxury That Lasts
            </h4>
            <p>
              Finishes are handpicked to balance luxury and long-term durability: matte laminates,
              PU finishes, fluted panels, Italian textures, soft neutrals, brass highlights, and
              leatherette shutters with boutique-style interiors.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              4. Internal Storage That Thinks for You
            </h4>
            <p>Inside the wardrobe, intelligent storage systems are designed for daily rhythm:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Jewellery trays</li>
              <li>Saree stacks</li>
              <li>Shoe pull-outs</li>
              <li>Hidden hampers</li>
              <li>Adjustable shelves</li>
              <li>LED motion lights</li>
              <li>Premium hardware such as Hettich or Hafele</li>
            </ul>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              5. Boutique-Style Lighting
            </h4>
            <p>
              Warm, diffused, shadow-free lighting makes every wardrobe feel like a private
              boutique: calm, premium, and beautifully lit, so that outfits and accessories are
              always easy to see.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              6. Customised for Every Lifestyle
            </h4>
            <p>
              Whether you are a minimalist, collector, fashion enthusiast, or part of a
              multitasking family, wardrobes are tailored to suit specific daily routines and
              storage habits.
            </p>

            {/* Types */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Types of Luxury Wardrobes Designed in Amroha
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>
                <strong>Walk-In Wardrobes</strong> – Hotel-suite inspired spaces with dedicated
                zones for accessories, daily wear, occasion wear, and more; ideal for villas and
                luxury homes.
              </li>
              <li>
                <strong>Sliding Wardrobes</strong> – Space-saving, sleek, and modern, perfect for
                compact rooms in Amroha.
              </li>
              <li>
                <strong>Hinged Wardrobes</strong> – Classic, timeless wardrobes with premium hinges
                and clear internal visibility.
              </li>
              <li>
                <strong>Floor-to-Ceiling Wardrobes</strong> – Maximise height, reduce dust, and
                create a grand, continuous visual wall.
              </li>
              <li>
                <strong>Vastu-Aligned Wardrobes</strong> – Direction-conscious placement for maximum
                grounding and harmony.
              </li>
              <li>
                <strong>Wardrobe Renovation and Refurbishment</strong> – Transform existing
                wardrobes with better layouts, finishes, and lighting without full demolition.
              </li>
            </ol>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process — Designed Like a Luxury Experience
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>
                <strong>Step 1 — Discovery Consultation</strong> – Understanding lifestyle, storage
                habits, likes and dislikes, along with Vastu direction. Complimentary Vastu
                guidance is available on specific days.
              </li>
              <li>
                <strong>Step 2 — Concept, Moodboard and Material Palette</strong> – Curated finishes,
                textures, lighting mood, and spatial layouts are presented.
              </li>
              <li>
                <strong>Step 3 — Drafting, Gridding and Survey</strong> – Technical precision to set
                the foundation for flawless execution.
              </li>
              <li>
                <strong>Step 4 — Detailed Internal Engineering</strong> – Compartments, rods, trays,
                drawers, and shelves are designed for exact needs.
              </li>
              <li>
                <strong>Step 5 — Execution and Quality Control</strong> – High-end workmanship with
                strict on-site supervision.
              </li>
              <li>
                <strong>Step 6 — Final Styling and Handover</strong> – The wardrobe is delivered
                ready to use: aligned, organised, and premium.
              </li>
            </ol>

            {/* Why Vasterior */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Amroha Chooses Vasterior for Wardrobe Interiors
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Editorial-level design language</li>
              <li>MahaVastu-backed spatial alignment</li>
              <li>Ultra-premium materials and finishes</li>
              <li>Boutique-style lighting concepts</li>
              <li>Space-maximising layouts for all room sizes</li>
              <li>Deep technical expertise in wardrobe engineering</li>
              <li>Founder-led design supervision</li>
              <li>Zero compromise on quality and detailing</li>
              <li>Trusted interior studio for premium homeowners in Amroha</li>
            </ul>
            <p className="mt-2">
              Whether building a dream home or renovating an existing room, the wardrobe is where
              transformation begins.
            </p>

            {/* Case story */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              A Wardrobe Story — From Chaos to Calm
            </h3>
            <p>
              A client in Katghar, Amroha approached Vasterior with a bedroom cluttered by
              mismatched cabinets, no defined space for valuables, and restricted movement. The
              entire wardrobe wall was reimagined.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Placement in the South-West zone for grounding</li>
              <li>Tan leatherette and matte ivory shutters</li>
              <li>Pull-out jewellery trays and soft-close drawers</li>
              <li>LED motion lighting for effortless visibility</li>
              <li>Floor-to-ceiling design for a clean, grand look</li>
              <li>Hidden full-length mirror and internal ironing pull-out</li>
            </ul>
            <p className="mt-2">
              The room immediately felt grounded, elegant, and emotionally quiet. The client shared
              that for the first time, the space felt aligned with their life.
            </p>

            {/* CTA */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Design Your Signature Wardrobe with Vasterior
            </h3>
            <p>
              Your wardrobe holds your mornings, your memories, and your personal rhythm. It
              deserves to be designed with intention and care, not left to chance.
            </p>
            <p>
              For further details, connect with Vasterior Studio&apos;s experts today at{" "}
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

          <PostNavigation slug="villa-interior-designer-in-amroha" />
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
