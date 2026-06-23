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
            Luxury Villa Interior Designer Rampur – Vasterior
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">

            <p>
              Vasterior begins every project with a simple belief: a luxury villa is not just a structure - it is a canvas where emotions, energy, and timeless aesthetics come together to shape a life. Rampur&apos;s evolving landscape of premium villas, estate homes, and modern residential plots is inspiring families to create spaces that feel deeply personal, spiritually aligned, and unmistakably elegant. This is where thoughtful interior design becomes transformative.
            </p>
            <p>
              Rampur, known for its heritage, lush surroundings, and growing community of premium homeowners, is now seeking interiors that reflect sophistication, comfort, and a sense of peace. Each villa here carries unique architecture and cultural identity — and when these elements blend with intentional design, they create homes that elevate the way you think, feel, and live.
            </p>
            <p>
              At Vasterior, our work goes beyond decoration. We design spatially intelligent, energy-aligned, luxury-focused interiors that honor both modern expectations and the subtle flow of Vastu.
            </p>

            {/* About Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior - A Luxury Interior & Vastu Studio with Soul
            </h2>
            <p>
              Vasterior is a boutique interior design and MahaVastu-led spatial design studio founded on the principles of clarity, aesthetic harmony, and energetic alignment. We specialize in transforming builder floors, premium villas, family estates, and boutique homes into sanctuaries of comfort and calm.
            </p>
            <p>Our design philosophy merges:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Luxury living,</li>
              <li>Modern interior design,</li>
              <li>Material richness,</li>
              <li>And the wisdom of Vastu Shastra,</li>
            </ul>
            <p>
              …to craft spaces that feel visually stunning and energetically balanced.
            </p>
            <p>
              Every design detail — from the placement of a bed to the material of a partition - is guided by our commitment to spatial flow and mindful living.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior as the Best Interior Designer in Rampur?
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. A Luxury-Aesthetic That Feels Personal</h3>
                <p>
                  We do not follow trends; we interpret your story, lifestyle, and aspirations into a signature spatial experience.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Vastu Integration Without Compromise</h3>
                <p>
                  Unlike traditional practices that demand structural changes, Vasterior aligns your home using object placement + activity zoning + material balance — ensuring harmony without disruption.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Tailored for Villas & Large Residences</h3>
                <p>
                  Rampur&apos;s villas have expansive layouts, double-height spaces, courtyards, terraces, and multi-functional family zones.
                  We specialize in optimizing these volumes through:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Layered lighting</li>
                  <li>Warm luxury palettes</li>
                  <li>Bespoke furniture</li>
                  <li>Stone, veneer & metal combinations</li>
                  <li>And balanced elemental energies</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Local Understanding + Premium Execution</h3>
                <p>
                  We understand Rampur&apos;s local architecture, climate, and lifestyle. This ensures our designs are not just beautiful — they are practical, durable, and rooted in local comfort.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. End-to-End Design Studio</h3>
                <p>
                  Concept. Space planning. 3D visualization. Material curation. Site execution.
                  Vasterior handles every stage with professional clarity and emotional sensitivity.
                </p>
              </div>
            </div>

            {/* Approach Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Signature Vasterior Approach – How We Design Luxury Villas in Rampur
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Spatial Flow & Zoning</h3>
                <p>Every villa has a rhythm. We decode it by mapping:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Energy lines</li>
                  <li>Activity zones</li>
                  <li>Circulation pathways</li>
                  <li>Family usability patterns</li>
                </ul>
                <p>This creates effortless movement and functional harmony.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Materiality & Texture Language</h3>
                <p>We handpick materials that feel premium yet warm:</p>
                <p>
                  Italian marble, rainforest stone, sheesham wood, tan leather, brushed gold metal, ivory laminates, soft textiles, and warm lighting.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Light-First Philosophy</h3>
                <p>Lighting defines luxury. We use a combination of:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cove lighting</li>
                  <li>Task lighting</li>
                  <li>Mood lamps</li>
                  <li>Accent lights</li>
                  <li>Natural light integration</li>
                </ul>
                <p>to make every corner feel intentional.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Custom Furniture & Bespoke Detailing</h3>
                <p>Every villa has its own mood board. We craft:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Customized wardrobes</li>
                  <li>Statement beds</li>
                  <li>Entrance foyers</li>
                  <li>Elegant living room sets</li>
                  <li>Dining installations</li>
                  <li>Artistic partitions</li>
                </ul>
                <p>that elevate the identity of the home.</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu + Interior Design – The Vasterior Advantage in Rampur
            </h2>
            <p>Rampur&apos;s villas often have:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Irregular plots</li>
              <li>Multi-storey layouts</li>
              <li>Deep corridors</li>
              <li>Skewed orientations</li>
            </ul>
            <p>These create energy pockets that affect comfort and well-being.</p>
            <p>Vasterior integrates MahaVastu principles through:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Object-based remedies</li>
              <li>Color corrections</li>
              <li>Activity alignment</li>
              <li>Element balancing</li>
              <li>Astrological considerations (when needed)</li>
            </ul>
            <p>
              We ensure the villa feels emotionally stable, financially supportive, and creatively uplifting — without demolishing anything.
            </p>
            <div className="my-2 text-center italic font-semibold">
              [Insert Image: Vastu zone analysis chart on a luxury villa blueprint]
            </div>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design Services We Offer in Rampur
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Full Luxury Interior Design (End-to-End)</strong> – Concept to completion for villas, farmhouses, bungalows, and premium residences.</li>
              <li><strong>Vastu Consultation for Homes & Villas</strong> – Complete 16-zone analysis + remedy placement.</li>
              <li><strong>Space Planning & Layout Optimization</strong> – Specialized for expansive villa layouts.</li>
              <li><strong>Design-Only Consultation</strong> – Perfect for families who want expert guidance but will execute themselves.</li>
              <li><strong>Renovation & Makeover Services</strong> – Modern upgrades for old Rampur villas.</li>
              <li><strong>3D Visualization & Mood Boards</strong> – Accurate previews before execution.</li>
              <li><strong>Material Selection & Styling</strong> – From sofas to curtains to art curation — we refine every detail.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process - How Vasterior Transforms Your Villa Step-by-Step
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Discovery Session</strong> – Understanding your lifestyle, family needs, and villa layout.</li>
              <li><strong>Vastu Mapping (If chosen)</strong> – A complete energy-analysis of the property.</li>
              <li><strong>Concept & Ideation</strong> – Moodboards, inspiration boards, color palettes.</li>
              <li><strong>Space Planning</strong> – Functional zoning, circulation planning, detailed layouts.</li>
              <li><strong>3D Renders</strong> – Photorealistic views of each room.</li>
              <li><strong>Material Selection</strong> – Luxury stones, veneers, fabrics, lights — curated with precision.</li>
              <li><strong>Execution & Site Supervision</strong> – Smooth, transparent, well-managed.</li>
              <li><strong>Styling & Handover</strong> – Fine detailing. Décor curation. Energy alignment.</li>
            </ul>

            {/* Project Types */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Project Possibilities in Rampur
            </h2>
            <p>We design for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Heritage Villas</li>
              <li>Modern Luxury Villas</li>
              <li>Builder Floors</li>
              <li>Family Estates</li>
              <li>Renovated Ancestral Homes</li>
              <li>Farm Villas & Holiday Homes</li>
              <li>Premium 3–5 BHK Residences</li>
            </ul>
            <p>
              Whether it&apos;s a villa in Civil Lines, Shahabad Gate, Bilaspur Road, Swar, Gandhi Samadhi area, or outskirts near farm plots, Vasterior&apos;s approach adapts beautifully.
            </p>

            {/* Pricing */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Pricing & Consultation (Elegant, Transparent, Premium)
            </h2>
            <p>
              We operate with a project-based consultation structure to provide clarity and luxury-level service.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Interior Design Fee</h3>
                <p>Tailored based on:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Villa size</li>
                  <li>Scope</li>
                  <li>Complexity</li>
                  <li>Material palette</li>
                  <li>Custom furniture requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vastu Consultation</h3>
                <p>₹50,000 per property (complete analysis + remedies)</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Design Consultation Per Room/Zone</h3>
                <p>₹50,000 per zone (design-only)</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Initial Site Visit (Rampur)</h3>
                <p>₹5,000</p>
              </div>
            </div>

            <p className="mt-4">
              There is no sales pressure — only clarity, professionalism, and sincerity.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs - Interior Designer in Rampur
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">1. Who is the best interior designer for luxury villas in Rampur?</h3>
                <p>
                  Vasterior is among the top luxury interior designers in Rampur, known for blending premium interiors with Vastu-based spatial intelligence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2. Do you provide Vastu consultation along with interior designing?</h3>
                <p>
                  Yes. Vastu is integrated seamlessly without structural changes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. What&apos;s the cost of villa interior design in Rampur?</h3>
                <p>
                  Costs vary based on layout, materials, and customization, but consultations start at ₹50,000 per zone.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. Can you design old villas or heritage homes?</h3>
                <p>
                  Absolutely. We specialize in modernizing heritage properties while retaining character.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. Do you take full project execution in Rampur?</h3>
                <p>
                  Yes, from planning to finishing touches, Vasterior manages every detail.
                </p>
              </div>
            </div>

            {/* Call-to-Action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Luxury Villa Journey with Vasterior
            </h2>
            <p>
              Your villa deserves more than decoration, it deserves intention, emotion, and alignment.
            </p>
            <p>
              Vasterior designs homes that nurture your energy, elevate your identity, and support your goals.
            </p>
            <p>
              If you&apos;re building or renovating a luxury villa in Rampur, we would love to craft a space that feels truly yours.
            </p>
            <div className="p-4 border-l-4 border-[#FF9800] bg-[#FFF8F0] rounded">
              <strong>Let&apos;s begin this journey together. Contact us today:</strong>
              <br />
              <a href="tel:+917906086899" className="text-blue-700 font-semibold underline">+917906086899</a>
              <br />
              <a href="mailto:info@spacebuild.com" className="text-blue-700 font-semibold underline">info@spacebuild.com</a>
            </div>
          </div>

          <PostNavigation slug="luxury-villa-interior-designer-rampur" />
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
