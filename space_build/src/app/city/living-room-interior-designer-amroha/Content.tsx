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
            Living Room Interior Designer Amroha — Space Build Studio
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Space Build Studio begins every living room transformation in Amroha with a simple
              belief: your living space should feel like home, look like art, and flow like energy.
              As a luxury interior and Vastu-aligned design studio, living rooms are crafted to
              blend cultural warmth with contemporary elegance, creating spaces that host memories,
              elevate mood, and support the life you aspire to live.
            </p>
            <p>
              For discerning homeowners in Amroha who want more than just good interiors, Space Build
              brings a boutique, founder-led design practice rooted in MahaVastu science, European
              aesthetic clarity, and modern Indian living.
            </p>
            <p>
              This is where intention meets design. This is where your living room becomes the heart
              of your home.
            </p>

            {/* Why redesign */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Homeowners in Amroha Are Redesigning Their Living Rooms
            </h3>
            <p>
              A living room is not merely a room; it is your first impression, your family&apos;s
              comfort zone, and the emotional centre of your home.
            </p>
            <p>Most homeowners in Amroha come to Space Build because they want:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A luxurious, elegant space that feels guest-ready every day</li>
              <li>A living room that is harmonious and Vastu-aligned, without superstition</li>
              <li>
                A layout that truly works for gatherings, family time, and everyday living
              </li>
              <li>Premium materials, refined textures, and a palette that feels timeless</li>
              <li>Proper lighting that enhances mood and ambience</li>
              <li>Functional yet beautiful storage and seating</li>
              <li>A space that feels emotionally peaceful and visually stunning</li>
            </ul>
            <p className="mt-2">
              If this sounds like what you want, Space Build Studio was designed for you.
            </p>

            {/* Method */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Space Build Signature Method: Where Spatial Flow Meets Design Intelligence
            </h3>
            <p>
              Every living room designed in Amroha follows a highly curated, founder-led process
              that honours both energy and aesthetics.
            </p>

            {/* Step 1 */}
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              1. Spatial Flow Planning — The Heart of Your Home&apos;s Energy
            </h4>
            <p>
              Space Build does not simply place furniture; it shapes movement, conversation, comfort,
              and clarity. Many Amroha homes face layout limitations, narrow spaces, awkward beams,
              challenging natural light, or misaligned seating positions.
            </p>
            <p>The Spatial Flow method ensures:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Effortless movement</li>
              <li>Seamless transitions toward dining and foyer areas</li>
              <li>Visual openness</li>
              <li>Correct placement of sofas, TV units, artefacts, and décor</li>
              <li>A room that feels calm and complete, even before materials are added</li>
            </ul>
            <p className="mt-2">
              This is where most designers stop thinking, and where Space Build begins.
            </p>

            {/* Step 2 */}
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              2. Vastu-Aligned Living Room Design — Zero Fear, Full Science
            </h4>
            <p>
              Space Build integrates Vastu subtly, as energy understanding rather than superstition.
              The living room is refined according to directional intelligence and elemental
              balance.
            </p>
            <p>Key zones are viewed as:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>North-East (NE):</strong> Clarity, freshness, and entry of light — ideal
                for windows, soft hues, and minimal clutter.
              </li>
              <li>
                <strong>North (N):</strong> Social energy and movement — best for open walkways and
                greeting areas.
              </li>
              <li>
                <strong>South-West (SW):</strong> Stability and grounding — suitable for the main
                sofa, heavy storage, or statement artwork.
              </li>
              <li>
                <strong>Elemental balance:</strong> Earth for grounding, air for ease, fire for
                warmth, and space for calm.
              </li>
            </ul>
            <p className="mt-2">
              These principles enhance comfort, emotional harmony, and functionality without
              demanding structural changes or fear-based remedies.
            </p>

            {/* Step 3 */}
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              3. Material and Colour Curation — Luxury You Can Feel
            </h4>
            <p>
              The living room must feel warm the moment you enter. Space Build carefully curates
              materials and colours to create a tactile, emotionally rich environment.
            </p>
            <p>Common elements include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Matte textured walls in warm ivory, beige, or earthy undertones</li>
              <li>
                Natural stone centrepieces such as Italian marble, rainforest stone, or travertine
              </li>
              <li>Wooden accents that add depth and visual grounding</li>
              <li>Sofas upholstered in tan, oatmeal, taupe, or charcoal tones</li>
              <li>Metallic trims in brass, copper, or black matte</li>
              <li>Rugs that soften acoustics and enhance cosiness</li>
            </ul>
            <p className="mt-2">
              Every material is chosen to balance aesthetics, durability, cost value, Vastu energy,
              and long-term emotional comfort.
            </p>

            {/* Step 4 */}
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              4. Custom Furniture Tailored for Amroha Homes
            </h4>
            <p>
              Generic furniture breaks a design; custom furniture completes it. Pieces are designed
              to reflect how you actually live.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Premium sofas with ergonomic comfort</li>
              <li>Modern TV units with concealed wiring</li>
              <li>Floating shelves and curated artefact displays</li>
              <li>Coffee tables with distinctive stone tops</li>
              <li>Accent chairs that combine style and function</li>
              <li>Multipurpose furniture for flexible layouts</li>
            </ul>
            <p className="mt-2">
              Everything is crafted with precision through Space Build&apos;s trusted vendor network.
            </p>

            {/* Step 5 */}
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              5. Moodboards and 3D Renders That Show You the Future
            </h4>
            <p>
              Before execution, you see your living room brought to life through visuals and
              technical plans, removing all guesswork.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Highly detailed 3D renders</li>
              <li>Material boards and colour palettes</li>
              <li>Layout options and furniture placements</li>
              <li>Lighting simulations</li>
            </ul>
            <p className="mt-2">You gain clarity and confidence at every step.</p>

            {/* Step 6 */}
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              6. Lighting Architecture — The Element Most Designers Ignore
            </h4>
            <p>
              Lighting can elevate or diminish even the most beautiful living room. Space Build
              treats lighting as a core design layer.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Ambient lighting for everyday warmth</li>
              <li>Accent lighting to highlight textures and art</li>
              <li>Cove lighting for softness and depth</li>
              <li>Floor lamps for mood and reading</li>
              <li>Task lighting for focused activities</li>
              <li>Dimmable settings for flexible ambience</li>
            </ul>
            <p className="mt-2">
              A beautifully designed room finally feels complete when its lighting glows with
              intention.
            </p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Services Offered for Living Room Interior Design in Amroha
            </h3>
            <p>
              Space Build Studio offers a full suite of living room design services for a complete,
              premium experience:
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>
                <strong>Living Room Concept and Design Blueprint</strong> – Brand-aligned,
                mood-driven conceptualisation tailored to your taste.
              </li>
              <li>
                <strong>Space Planning and Layout Optimization</strong> – Redesigned movement,
                seating flow, viewing angles, and conversational comfort.
              </li>
              <li>
                <strong>Full Living Room Renovation</strong> – From civil changes to carpentry and
                finishing.
              </li>
              <li>
                <strong>Vastu-Aligned Energy Planning</strong> – Directional harmony without
                superstition.
              </li>
              <li>
                <strong>Furniture Design and Custom Fabrication</strong> – Unique pieces built
                precisely for your home.
              </li>
              <li>
                <strong>Lighting Architecture</strong> – Premium lighting plans with layered
                illumination.
              </li>
              <li>
                <strong>Décor Curation and Styling</strong> – Handpicked rugs, art, sculptures,
                lamps, flowers, and textures.
              </li>
              <li>
                <strong>Project Execution and Management</strong> – Coordination of materials,
                vendors, site teams, and timelines.
              </li>
            </ol>

            {/* Why Space Build */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Amroha Chooses Space Build Studio
            </h3>
            <p>
              Homeowners in Amroha trust Space Build because the design philosophy goes beyond
              surface-level styling and into emotional, energetic, and functional depth.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Founder-led expertise on every project</li>
              <li>Integrated luxury and Vastu, a rare combination in India</li>
              <li>
                Editorial-level aesthetics that look magazine-worthy yet feel deeply personal
              </li>
              <li>Boutique studio attention with limited projects at a time</li>
              <li>Transparent communication and clear processes</li>
              <li>
                Designs tailored for real Indian homes, considering lifestyle, climate, family size,
                traditions, and preferences
              </li>
              <li>
                Deep emotional understanding of how central the living room is to family life
              </li>
            </ul>

            {/* Case studies */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              A Few Living Room Stories from Amroha
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Case Study 1 — The Modern Heritage Living Room
            </h4>
            <p>
              A family sought a living room that felt contemporary yet rooted in heritage. Warm
              neutrals, brass accents, artisanal décor, and Vastu-aligned seating created a space
              that feels proud, welcoming, and emotionally grounding.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Case Study 2 — The Minimalist Living Room for a Young Couple
            </h4>
            <p>
              A young couple desired a clutter-free aesthetic with soft pastels and clean lines.
              The result was a bright, airy living room with Scandinavian influences and perfectly
              balanced lighting.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Case Study 3 — The Grand Living Room for a Joint Family
            </h4>
            <p>
              For a joint family, seating was optimised for groups, natural light was enhanced, and
              distinct zones were created for reading, conversations, and prayer. The space now
              supports their lifestyle with ease.
            </p>

            {/* Transformation */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Transform Your Living Room, Transform Your Life
            </h3>
            <p>Your living room is the space where:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Guests experience your warmth</li>
              <li>Your family bonds and reconnects</li>
              <li>Energies settle after long days</li>
              <li>Memories gather over years</li>
              <li>Your home&apos;s story begins</li>
            </ul>
            <p className="mt-2">
              When this room is designed well, everything in the home begins to feel better.
            </p>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Book Your Consultation with Space Build Studio
            </h3>
            <p>
              If you are looking for the finest Living Room Interior Designer in Amroha, you are in
              the right place. Let us design a space that feels luxurious, aligned, intentional, and
              deeply you.
            </p>
            <p>
              Contact Space Build Studio today at <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or{" "}
              <a
                href="mailto:spacebuild.india@gamil.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gamil.com
              </a>
              . Your living room deserves nothing less than art, and you deserve a designer who
              understands your story.
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
