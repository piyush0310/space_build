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
            Modular Kitchen Designer Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior Studio brings a new language of refinement to Amroha&apos;s modern homes, one where kitchens are not merely cooking zones but living experiences.
              </p>
              <p>
                Spaces where warmth, beauty, ergonomics, and energy flow come together effortlessly. In every project, we design not just for convenience but for how you live, how you host, how your family gathers, and how your day begins and ends.
              </p>
              <p>
                Your modular kitchen is the heart of your home — and we ensure it beats with precision, luxury, and poetic calmness.
              </p>
            </div>

            {/* Why luxury modular kitchens matter */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Luxury Modular Kitchens Matter Today
              </h3>
              <p>
                A beautifully designed modular kitchen is more than cabinetry and countertops. It is:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>A daily experience of comfort</li>
                <li>A seamless rhythm between movement and function</li>
                <li>A space that nurtures family conversations</li>
                <li>A reflection of personal taste and lifestyle</li>
                <li>A long-term investment in durability and value</li>
              </ul>
              <p className="mt-2">
                A luxury kitchen marries craftsmanship with intention. It feels intuitive, soothing, visually balanced, and aligned with the natural energy of the home. Every inch contributes to harmony.
              </p>
            </div>

            {/* Why choose a professional designer */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Choose a Professional Modular Kitchen Designer in Amroha?
              </h3>
              <p>
                Homes in Amroha carry history, warmth, and evolving aspirations. As families grow, kitchens must grow with them. A professional designer brings:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Intelligent Space Optimization</strong> – Small or large, every kitchen has hidden potential; corner solutions, vertical storage, tall units, multipurpose drawers, and more.
                </li>
                <li>
                  <strong>Aesthetic Balance + Practical Performance</strong> – The right pairing of finishes, textures, lighting, and color palettes determines how premium and peaceful a kitchen feels.
                </li>
                <li>
                  <strong>Customization for Lifestyle</strong> – Whether you are a frequent cook, a weekend host, or a family that enjoys shared meal prep, every layout adapts to your rhythm.
                </li>
                <li>
                  <strong>Vastu-Aligned Placement</strong> – We subtly integrate directional logic for better energy flow, positioning water, heat, storage, and movement in harmony.
                </li>
                <li>
                  <strong>Long-Term Durability</strong> – Factory-finished modules, premium hinges, European hardware, reliable stones, and engineered surfaces ensure longevity.
                </li>
                <li>
                  <strong>Smooth and Stress-Free Execution</strong> – From first sketch to final installation, the journey remains seamless, transparent, and comfortable.
                </li>
              </ol>
              <p className="mt-2">
                Amroha deserves spaces that feel contemporary yet deeply rooted in family values — and Vasterior brings that balance beautifully.
              </p>
            </div>

            {/* Signature approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior&apos;s Signature Modular Kitchen Design Approach
              </h3>
              <p>
                Every kitchen we create is crafted like a bespoke editorial story, thoughtful, refined, and deeply personal.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                1. Discovery &amp; Lifestyle Understanding
              </h4>
              <p>We begin by understanding:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Cooking habits</li>
                <li>Storage needs</li>
                <li>Appliances you use</li>
                <li>Family size</li>
                <li>Hosting style</li>
                <li>Vastu considerations</li>
                <li>Your preferred textures, tones, and materials</li>
              </ul>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                2. Concept &amp; Moodboard Creation
              </h4>
              <p>This is where your kitchen begins its visual life. We curate:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Material palettes</li>
                <li>Color stories</li>
                <li>Lighting concepts</li>
                <li>Surface textures</li>
                <li>Architectural mood references</li>
              </ul>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                3. Precise Layout Planning
              </h4>
              <p>Using measured ergonomics, we determine the ideal:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Work triangle</li>
                <li>Counter heights</li>
                <li>Appliance placements</li>
                <li>Wet zone, dry zone, and prep areas</li>
                <li>Walkways and circulation flow</li>
              </ul>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                4. Vastu-Aligned Positioning (Elegant &amp; Subtle)
              </h4>
              <p>No superstition, only directional harmony. We guide:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Stove / Agni placement</li>
                <li>Sink / Jal alignment</li>
                <li>Storage (Prithvi) positioning</li>
                <li>Natural light pathways</li>
              </ul>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                5. 3D Visualisation
              </h4>
              <p>
                Before a single panel is fabricated, you see your kitchen in lifelike detail — lighting, textures, finishes, and flow.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                6. Material Finalisation
              </h4>
              <p>We source premium finishes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Italian laminates</li>
                <li>Quartz &amp; natural stone countertops</li>
                <li>High-gloss acrylic</li>
                <li>Matte PU</li>
                <li>Veneers</li>
                <li>Soft-close hardware</li>
                <li>Modular internal fittings</li>
              </ul>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                7. Factory Finish Production
              </h4>
              <p>
                Your kitchen is crafted with precision technology, ensuring clean edges, perfect alignment, and superior longevity.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                8. Installation &amp; Styling
              </h4>
              <p>
                We assemble your kitchen with meticulous care, followed by final styling that makes the space feel complete.
              </p>
            </div>

            {/* Types of kitchens */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Types of Modular Kitchens We Design in Amroha
              </h3>
              <p>
                Each kitchen is tailored to the architecture of the home and the psychology of the family.
              </p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>L-shaped kitchens – ideal for compact homes; open, efficient, and movement-friendly.</li>
                <li>U-shaped kitchens – high storage, large prep zones, perfect for multi-person cooking.</li>
                <li>Parallel kitchens – luxury in symmetry with two long counters, ideal for efficiency.</li>
                <li>Island kitchens – a modern centerpiece for hosting, conversations, and display.</li>
                <li>Straight-line kitchens – minimalist, elegant, and perfect for studio-style or linear spaces.</li>
                <li>Open luxury kitchens – seamless flow into dining or living spaces for modern living.</li>
              </ol>
            </div>

            {/* Materials and finishes */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Premium Materials &amp; Finishes – Editorial-Grade Textures
              </h3>
              <p>Your kitchen deserves tactile luxury. We curate surfaces that feel timeless and grounded:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Warm beige &amp; ivory palettes</li>
                <li>Rich, matte laminates</li>
                <li>Veined natural stones</li>
                <li>Soft-touch acrylics</li>
                <li>Textured veneers</li>
                <li>Satin-finish metals</li>
                <li>Anti-scratch quartz</li>
                <li>Premium LED-lit cabinetry</li>
              </ul>
              <p className="mt-2">
                Every element is chosen not only for beauty but for the emotional tone it brings into the home.
              </p>
            </div>

            {/* Storage innovations */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Storage Innovations That Transform Everyday Living
              </h3>
              <p>A luxury kitchen is defined by what you do not see — hidden efficiency.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Hydraulic lift-up cabinets</li>
                <li>Tall pantry units</li>
                <li>Corner carousels</li>
                <li>Cutlery organizers</li>
                <li>Spice pull-outs</li>
                <li>Tandem drawers</li>
                <li>Under-sink organization</li>
                <li>Hidden appliances</li>
                <li>LED-integrated shelving</li>
              </ul>
              <p className="mt-2">
                These solutions create calmness, rhythm, and ease. Vasterior stands as the trusted, sophisticated choice for homeowners seeking artistry and alignment.
              </p>
            </div>

            {/* Journey with Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Your Journey with Vasterior – Simple, Elegant, Stress-Free
              </h3>
              <p>From first consultation to installation, we ensure:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Crystal-clear communication</li>
                <li>Transparent pricing</li>
                <li>Premium materials</li>
                <li>A clean, timely execution process</li>
                <li>End-to-end support</li>
                <li>A kitchen that feels emotionally grounding and visually stunning</li>
              </ul>
              <p className="mt-2">
                Our goal is to transform the most active room in your home into the most beautiful one. Transform your kitchen into a haven of luxury, intention, and effortless functionality.
              </p>
              <p>
                Begin your design journey with Vasterior Studio today. For further details, connect with our experts at{" "}
                <strong>+917906086899</strong> or{" "}
                <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                  info@spacebuild.com
                </a>
                .
              </p>
            </div>
          </div>

          <PostNavigation slug="modular-kitchen-designer-amroha" />
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
