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
            Farmhouse Interior Designer Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior Studio brings the soul of luxury living to Amroha&apos;s
                farmhouses, where nature, architecture, and energy alignment
                come together to create spaces that heal, elevate, and inspire.
                Every farmhouse tells a story, and at Vasterior Studio these
                stories are designed with an artistry that blends spatial flow,
                cultural nuance, and deep emotional intelligence.
              </p>
              <p>
                Whether perched amidst lush fields or quietly tucked along the
                outskirts of Amroha, your farmhouse becomes a sanctuary, a place
                where families gather, celebrations unfold, and the rhythm of
                life slows into something more meaningful. As a leading
                farmhouse interior designer in Amroha, the approach is grounded
                in editorial refinement, architectural clarity, and the gentle
                science of MahaVastu so every line, texture, and corner feels
                alive, grounded, and stunningly luxurious.
              </p>
            </div>

            {/* Essence of farmhouse interiors */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The Essence of Farmhouse Interiors in Amroha
              </h3>
              <p>
                Designing a farmhouse is unlike designing any other space; it
                requires sensitivity to land, climate, light, and the natural
                mood of the region. Amroha, with its open landscapes, rich soil,
                and traditional lifestyle, lends itself beautifully to soulful,
                character-rich interiors.
              </p>
              <p>Farmhouse interiors in Amroha draw from:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  Warm earthy palettes that blend gently with the outdoor
                  landscape
                </li>
                <li>Natural ventilation and generous open volumes</li>
                <li>
                  Stone, timber, cane, and textured walls that echo timeless
                  rural elegance
                </li>
                <li>
                  Courtyards, verandas, and pavilions that encourage slow living
                </li>
                <li>Vastu-aligned zones for harmony and emotional wellbeing</li>
              </ul>
              <p>
                A farmhouse should not just look beautiful; it should feel like
                a retreat that restores and recentres everyone who enters.
              </p>
            </div>

            {/* Signature approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior&apos;s Signature Approach: Where Luxury Meets
                Vastu-Driven Spatial Flow
              </h3>
              <p>
                Vasterior does not design rooms; it designs experiences held
                together by intention, energy, and impeccable craftsmanship. A
                clear framework guides every farmhouse project.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Spatial Flow Consulting</strong> &mdash; Analysing how
                  you move, gather, rest, work, and celebrate within the
                  farmhouse so the plan becomes the architecture of your
                  lifestyle.
                </li>
                <li>
                  <strong>MahaVastu Alignment</strong> &mdash; Using Direction ×
                  Element × Activity × Object to enhance each zone for clarity,
                  comfort, health, and prosperity, seamlessly integrated into
                  the interiors without superstition.
                </li>
                <li>
                  <strong>Luxury-Driven Material Curation</strong> &mdash; From
                  handcrafted leather chairs to warm beige stone, tactile timber,
                  and antique brass, every detail is chosen to heighten emotion
                  and experience.
                </li>
                <li>
                  <strong>Editorial Aesthetic Thinking</strong> &mdash; Styling
                  farmhouses with cinematic light, layered textures, symmetry,
                  softness, and depth inspired by high-end editorial interiors.
                </li>
                <li>
                  <strong>Founder-Led Design Experience</strong> &mdash; Every
                  project is personally overseen to ensure sensitivity,
                  craftsmanship, and precision at every step.
                </li>
              </ol>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Farmhouse Interior Design Services in Amroha
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                1. Full Farmhouse Interior Design
              </h4>
              <p>
                A complete transformation that blends luxury design, Vastu
                intent, architectural clarity, and refined materials to create a
                farmhouse that becomes a weekend retreat, celebration hub, and
                cherished family destination.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                2. Bespoke Furniture &amp; Material Curation
              </h4>
              <p>Custom furniture crafted specifically for farmhouse living:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Solid wood dining tables</li>
                <li>Cane and timber lounge seating</li>
                <li>Weather-resistant outdoor pieces</li>
                <li>Textured wardrobes and rustic-modern cabinetry</li>
              </ul>
              <p>
                Material palettes include stone, terracotta, matte textures,
                ivory limewash, and warm neutrals that age beautifully.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                3. Living Room &amp; Drawing Room Makeovers
              </h4>
              <p>
                Grand, inviting, sun-lit spaces designed for large gatherings
                with warm earthy palettes, layered lighting, statement elements
                such as stone walls or leather master chairs, and editorial
                styling using plants, pottery, and handcrafted decor.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                4. Luxury Bedroom &amp; Suite Concepts
              </h4>
              <p>
                Serene, grounded, Vastu-aligned bedrooms promote deep rest and
                rejuvenation with ivory and beige palettes, linen textures,
                sculptural lights, slow-living furniture layouts, and corner
                seating overlooking nature.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                5. Courtyard, Veranda &amp; Outdoor Design
              </h4>
              <p>
                Farmhouse living is incomplete without its outdoor soul, so
                designs may include sunset lounges, firepit zones, meditation
                nooks, pergola dining spaces, water features, and
                landscape-led pathways using resilient, timeless materials.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                6. Luxury Kitchens &amp; Dining for Farmhouses
              </h4>
              <p>
                Open, warm, functional dining experiences are crafted with
                terracotta or stone accents, warm yellow lighting, island
                counters, Vastu-aligned cooking zones, and large, inviting
                dining setups ideal for hosting.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                7. Vastu-Aligned Planning
              </h4>
              <p>
                The farmhouse layout is mapped to balance water and fire zones,
                heavy storage, family gathering areas, entry flow, sleep
                directions, and work-from-farmhouse requirements using
                psychological and experiential insight rather than fear-based
                language.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                8. End-to-End Execution Management (Optional)
              </h4>
              <p>
                From contractors to carpenters and from flooring to decor
                procurement, execution is coordinated so the final build matches
                the design vision with precision.
              </p>
            </div>

            {/* Why Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vasterior Is Amroha&apos;s Most Trusted Farmhouse Interior Designer
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Luxury meets intention</strong> &mdash; Designs chase
                  timelessness instead of short-lived trends.
                </li>
                <li>
                  <strong>MahaVastu integration without disruption</strong>{" "}
                  &mdash; Energy alignment is woven into the aesthetic rather
                  than overpowering it.
                </li>
                <li>
                  <strong>Crafted for lifestyle</strong> &mdash; Weekends,
                  events, and family gatherings are designed for ease and
                  comfort.
                </li>
                <li>
                  <strong>Founder-led creative direction</strong> &mdash; Every
                  dimension and detail is personally reviewed.
                </li>
                <li>
                  <strong>Deep understanding of Amroha&apos;s homes and land</strong>{" "}
                  &mdash; Designs respond to local conditions, culture, and
                  building styles.
                </li>
              </ul>
            </div>

            {/* Sensory experience */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Sensory Visual Experience in Every Layer
              </h3>
              <p>
                Imagine soft sunrise light entering through the veranda, a warm
                breeze carrying the scent of fields, and textured beige stone
                cooling under barefoot mornings while a handcrafted wooden
                console glows in the golden hour.
              </p>
              <p>
                A leather master chair is grounded in the south-west zone, muted
                earthy tones echo the nature beyond the windows, and layers of
                cane, linen, terracotta, and exposed timber create soulful
                warmth. This is not just interior design; this is Vasterior&apos;s
                vision of farmhouse living in Amroha.
              </p>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Let&apos;s Design Your Farmhouse Retreat
              </h3>
              <p>
                Your farmhouse deserves a story crafted thoughtfully,
                beautifully, and energetically aligned. Invite Vasterior Studio
                into your vision to shape a retreat that feels both luxurious
                and deeply personal.
              </p>
              <p>
                Book a consultation with the experts at{" "}
                <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or email{" "}
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
