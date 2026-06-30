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
            Custom Luxury Interiors Rampur – Designed by Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            
            <p>
              Vasterior believes that every home in Rampur holds a quiet story—one shaped by heritage, family, and aspiration. As the city evolves with modern residences, boutique villas, and stylish builder floors, homeowners are seeking something more than just décor. They are seeking custom luxury interiors in Rampur that feel intentional, emotionally soothing, and energetically aligned with their life&apos;s direction.
            </p>
            <p>
              This is where Vasterior steps in—bringing together design, Vastu, and deep spatial awareness.
            </p>

            {/* About Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Where Luxury Meets Conscious Spatial Design
            </h2>
            <p>
              Vasterior is a spatial-flow-driven interior design and MahaVastu studio known for crafting personalized, meaningful interiors across Delhi NCR and now Rampur. Our work blends:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Luxury interior design</li>
              <li>MahaVastu principles</li>
              <li>Architectural clarity</li>
              <li>Artistic storytelling</li>
              <li>Human-centered living</li>
            </ul>
            <p>
              We design spaces that feel warm, grounded, and deeply calm—spaces where your lifestyle, energy, and comfort come together in harmony.
            </p>
            <p>
              Every project is a journey from how you live today to how you aspire to live tomorrow.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as the Best Interior Designer in Rampur
            </h2>
            <p>
              Rampur deserves interiors that feel bespoke—not generic. At Vasterior, we do not offer templates; we craft custom, luxury interiors that flow with intention.
            </p>
            <p>What sets us apart?</p>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Tailor-made luxury</strong> – Every material, layout, and texture is chosen for your lifestyle—not trends.</li>
              <li><strong>Precision-led Spatial Flow</strong> – We analyze movement, comfort, natural light, object placement, and energy cycles to create spaces that simply &quot;feel right.&quot;</li>
              <li><strong>Vastu + Design Integration</strong> – We are among the few studios offering MahaVastu-based luxury interior design in Rampur, ensuring both beauty and energetic balance.</li>
              <li><strong>High-touch Creative Process</strong> – You work directly with our founders—ensuring each decision is rooted in clarity, consistency, and premium taste.</li>
              <li><strong>End-to-end Execution</strong> – From conceptual design to drafting, visualization, site management, and styling—we deliver spaces that are effortless for you and exceptional in experience.</li>
            </ul>

            {/* Approach Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Signature Approach to Custom Luxury Interiors in Rampur
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Spatial Flow Design</h3>
                <p>
                  We begin by understanding how your family moves, thinks, rests, and gathers. Every corner is optimized for balance, purpose, and ease.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Material & Color Mastery</h3>
                <p>
                  Rampur homes often desire warmth and timelessness. We bring high-end woods, designer laminates, sophisticated fabrics, and natural stones—curated to create an elegant palette of serenity.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Lighting as Emotion</h3>
                <p>
                  From cove lights to task lighting and accent layers, we design illumination that supports both mood and functionality.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Bespoke Furniture & Craftsmanship</h3>
                <p>
                  Every piece is tailor-made to your exact dimensions, habits, and aesthetic preferences.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Sensory & Energetic Clarity</h3>
                <p>
                  We use textures, forms, and placements that support the emotional rhythm of your home.
                </p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu + Interior Design Integration — Vasterior&apos;s Unique Advantage in Rampur
            </h2>
            <p>
              Vastu is not about strict rules or fear—it&apos;s about alignment, clarity, and conscious living.
            </p>
            <p>Vasterior brings authentic MahaVastu expertise to Rampur through:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Directional analysis</li>
              <li>Elemental balance (Fire, Water, Air, Earth, Space)</li>
              <li>Activity-object alignment</li>
              <li>16 MahaVastu zone study</li>
              <li>Astro-Vastu integration based on individual goals</li>
              <li>Remedy-based solutions without demolition</li>
            </ul>
            <p>
              This ensures your home supports your peace, focus, relationships, and growth.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Services We Offer in Rampur
            </h2>
            <p>
              Vasterior provides a comprehensive spectrum of interior and Vastu services—including both free and premium offerings.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Vastu Yogdan (Every Wednesday — Free Consultation)</strong> – A heartfelt initiative where we help homeowners understand their Vastu concerns with simple, practical guidance.</li>
              <li><strong>Paid Vastu Consultation</strong> – A detailed MahaVastu analysis that includes direction-based planning, zone correction, object recommendations, and personal goal alignment.</li>
              <li><strong>Vastu Styling</strong> – We curate colors, accessories, and placements that support energetic harmony within the home.</li>
              <li><strong>Interior Designing (Full-Service Custom Luxury Interiors)</strong> – End-to-end conceptualization, drawings, selections, 3D renders, and execution.</li>
              <li><strong>Spatial Flow Expertise</strong> – We organize layouts that enhance movement, efficiency, and emotional comfort.</li>
              <li><strong>Astro-Vastu Consultation</strong> – We align home energy with birth charts and life goals.</li>
              <li><strong>Drafting, Gridding & Technical Surveys</strong> – Our architectural precision ensures seamless execution with contractors and vendors.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Vasterior Process — How We Transform Homes in Rampur
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Understanding Your Vision</strong> – A detailed conversation to understand your lifestyle, aspirations, and aesthetic preferences.</li>
              <li><strong>Site Visit & Survey</strong> – We document every measurement and energetic detail of your space.</li>
              <li><strong>Spatial Flow Plan</strong> – A layout that balances Vastu, architecture, and daily movement.</li>
              <li><strong>Concept Development</strong> – Mood boards, color palettes, and material directions are curated.</li>
              <li><strong>Technical Drawings & 3D Renders</strong> – We bring everything to life with clarity and precision.</li>
              <li><strong>Execution & Vendor Coordination</strong> – Our team manages contractors, materials, timelines, and quality checks.</li>
              <li><strong>Styling & Handover</strong> – Soft furnishings, accessories, art, and final detailing complete your luxury interior.</li>
            </ul>

            {/* Project Types */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Project Possibilities in Rampur
            </h2>
            <p>
              Whether your space is compact, sprawling, traditional, or modern—Vasterior crafts interiors that feel tailor-made.
            </p>
            <p>We work with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Builder floors in Rampur</li>
              <li>Independent houses & bungalows</li>
              <li>Luxury farmhouses</li>
              <li>Apartments in gated communities</li>
              <li>Heritage home renovations</li>
              <li>Modern extensions & expansions</li>
            </ul>
            <p>
              Every project receives the same depth, care, and artistry.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">1. What makes Vasterior the best interior designer in Rampur?</h3>
                <p>
                  Our fusion of luxury design, spatial flow intelligence, and authentic MahaVastu practice sets us uniquely apart.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2. Do you offer Vastu-friendly luxury interiors?</h3>
                <p>
                  Absolutely. Every project incorporates Vastu-aligned elements without compromising aesthetics.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. Can you help with renovations for old Rampur homes?</h3>
                <p>
                  Yes. We bring modern luxury into heritage homes while preserving their warmth.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. Are your services suitable for small apartments?</h3>
                <p>
                  Yes. Spatial flow design makes even compact spaces feel open and efficient.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. How do I start working with Vasterior?</h3>
                <p>
                  A simple consultation call is enough. We take over from there.
                </p>
              </div>
            </div>

            {/* Call-to-Action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Design Journey
            </h2>
            <p>
              Your home is more than a structure - it&apos;s an emotional landscape, a personal universe, a reflection of who you are becoming.
            </p>
            <p>
              If you&apos;re seeking Custom Luxury Interiors in Rampur that feel deeply aligned, intentionally designed, and energetically balanced, Vasterior would love to guide your journey.
            </p>
            <div className="p-4 border-l-4 border-[#FF9800] bg-[#FFF8F0] rounded">
              <strong>Let&apos;s design the space that supports your next chapter.</strong>
              <br />
              <p className="mt-2">Contact Vasterior:</p>
              <a href="tel:+917906086899" className="text-blue-700 font-semibold underline">+917906086899</a>
              <br />
              <a href="mailto:spacebuild.india@gamil.com" className="text-blue-700 font-semibold underline">spacebuild.india@gamil.com</a>
            </div>
          </div>

          <PostNavigation slug="custom-luxury-interiors-rampur" />
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
