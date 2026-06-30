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
            Interior Designer and Vastu Expert Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Interior Designer and Vastu Expert Amroha – where design meets
                energy and where your home meets harmony.
              </p>
              <p>
                Vasterior Studio Pvt. Ltd. brings a new era of luxury living,
                spatial harmony, and MahaVastu-aligned interior design to the
                evolving landscape of Amroha.
              </p>
              <p>
                For homeowners seeking beauty that feels peaceful, for families
                who want homes that support their aspirations, and for modern
                lifestyles that need both elegance and energetic balance,
                Vasterior offers a signature experience unlike anything else in
                the region.
              </p>
              <p>
                With a philosophy rooted in spatial flow consulting, MahaVastu
                methodology, refined aesthetics, and emotion-driven design,
                Vasterior transforms ordinary houses into meaningful,
                energy-aligned luxury spaces that breathe ease, comfort, and
                clarity.
              </p>
            </div>

            {/* Why Amroha is ready */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Amroha Is Ready for Vasterior&apos;s Design Philosophy
              </h3>
              <p>
                Amroha is growing, with modern homes, evolving lifestyles, and
                emerging aspirations that call for interiors that feel global
                yet rooted, stylish yet serene.
              </p>
              <p>Families today want more than beautiful rooms; they want:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Homes that reduce stress and increase clarity</li>
                <li>Bedrooms that support relationships and rest</li>
                <li>Kitchens that feel warm, nourishing, and prosperous</li>
                <li>Living rooms that welcome abundance and conversation</li>
                <li>
                  Spaces that help manifest goals, careers, health, and peace
                </li>
              </ul>
              <p className="mt-2">
                Vasterior blends design sophistication with Vastu intelligence
                to create spaces that look luxurious and live intuitively.
              </p>
            </div>

            {/* Signature approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior&apos;s Signature Approach: Design, Vastu &amp; Spatial
                Flow
              </h3>
              <p>
                A well-designed home should make life easier, lighter, happier,
                and more aligned with who you are becoming.
              </p>
              <p>
                To achieve this, three core pillars are combined into every
                project.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                Interior Design Excellence
              </h4>
              <p>
                Global aesthetics, luxury finishes, calm palettes, crafted
                details, and intelligent functional planning define the visual
                language of each space.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                MahaVastu Intelligence
              </h4>
              <p>
                A non-demolition, scientific four-step framework of direction,
                element, activity, and object is used to study the 16
                MahaVastu zones of the home.
              </p>
              <p>
                These zones are then aligned with key goals such as career
                growth, harmony, creativity, stability, and prosperity.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                Spatial Flow Planning
              </h4>
              <p>
                Vasterior&apos;s proprietary lens ensures that light, air,
                materials, colours, pathways, proportions, and daily routines
                move together in a smooth, effortless flow.
              </p>
              <p>
                The approach is fear-free and modern, replacing superstition
                with logic, clarity, and ease.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Premium Interior &amp; Vastu Services in Amroha
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                1. Luxury Home Interior Design
              </h4>
              <p>
                From concept and material selection to bespoke furniture,
                lighting, and final styling, homes are crafted to feel warm,
                luxurious, and deeply personal.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                2. Living Room Interior Design
              </h4>
              <p>
                Living rooms are designed as the heart of the home, reflecting
                hospitality, abundance, and emotional comfort with Vastu-backed
                placement and balanced lighting.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                3. Vastu-Aligned Modular Kitchens
              </h4>
              <p>
                Kitchens are planned with fire–water balance, ideal appliance
                placements, efficient storage, and smooth workflow so they feel
                grounded and prosperous.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                4. Luxury Bedroom Design &amp; Vastu Alignment
              </h4>
              <p>
                Bedrooms blend soft palettes, comfortable layouts, custom
                wardrobes, mood lighting, and Vastu-correct placements to
                support rest, relationships, and emotional recharge.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                5. Office &amp; Commercial Interiors
              </h4>
              <p>
                Offices, studios, clinics, boutiques, and showrooms are
                designed with energy-flow analysis to improve stability, focus,
                and growth.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                6. Full Vastu Consultation (₹51,000 per property)
              </h4>
              <p>
                A detailed, modern, non-demolition service covering energy
                mapping, 16-zone analysis, astro-Vastu, remedies, colour and
                object corrections, and personalised manifestation guidance.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                7. Vision Manifestation Vastu Package
              </h4>
              <p>
                A deeper journey for individuals focusing on goals like wealth,
                career growth, marriage, creativity, emotional stability, and
                health using MahaVastu principles.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                8. Renovation &amp; Refurbishment
              </h4>
              <p>
                Existing homes are upgraded through improved layouts, finishes,
                lighting, storage, furniture, and materials, while integrating
                Vastu-friendly solutions seamlessly.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                9. Site Visit &amp; Evaluation
              </h4>
              <p>
                A combined technical and Vastu walkthrough of the property
                identifies strengths, weaknesses, and transformation
                possibilities.
              </p>
            </div>

            {/* Why Vasterior different */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes Vasterior Different?
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  Founder-led expertise from Chitresh Jain, trained in
                  MahaVastu and known for modern aesthetic sensibility and
                  spatial intelligence.
                </li>
                <li>
                  Emotion-first design that focuses on lifestyle, aspirations,
                  comfort, daily habits, and personal story rather than trends
                  alone.
                </li>
                <li>
                  Clear, simple communication with no fear-based advice and no
                  confusing rituals, only science, structure, and peace.
                </li>
                <li>
                  Premium quality and editorial finish that still feel warm,
                  intimate, and livable.
                </li>
                <li>
                  One of the few studios in India that truly integrates Vastu
                  and luxury interior design into a single coherent approach.
                </li>
              </ul>
            </div>

            {/* Mini transformations */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Mini Transformations Seen in Amroha Homes
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  North-facing living rooms becoming brighter and more
                  welcoming through better spatial flow.
                </li>
                <li>
                  Kitchens with fire–water conflict rebalanced for warmth and
                  prosperity.
                </li>
                <li>
                  Cluttered bedrooms turned into calm sanctuaries that support
                  deeper rest.
                </li>
                <li>
                  Workspaces realigned directionally to support consistency and
                  financial stability.
                </li>
              </ul>
              <p className="mt-2">
                Each story has a common thread, alignment creates ease.
              </p>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Ready to Transform Your Home in Amroha?
              </h3>
              <p>
                Your space holds stories, your walls hold possibilities, and
                your home holds a quiet power waiting to be aligned.
              </p>
              <p>
                Let Vasterior design a space that feels luxurious and lives
                effortlessly. Contact the team at{" "}
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
          </div>

          <PostNavigation slug="interior-designer-and-vastu-expert-amroha" />
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
