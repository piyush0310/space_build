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
            Modern Farmhouse Interiors Rampur - By Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            
            <p>
              Vasterior brings a new design language to Rampur - a style where quiet luxury meets grounded simplicity, where warm textures breathe life into spacious layouts, and where every corner feels intentional, aligned, and deeply personal. Modern Farmhouse interiors are no longer just an aesthetic; they are a lifestyle, shaped by natural materials, soft-toned palettes, and Vastu-supported planning that helps your home feel calmer, clearer, and beautifully balanced.
            </p>
            <p>
              In Rampur&apos;s evolving architectural landscape - from heritage bungalows and expansive farms to newly built villas and independent floors - families are looking for spaces that feel warm yet upscale, rustic yet refined. And that is exactly where Modern Farmhouse design shines: it brings the soul of the countryside and the sophistication of contemporary luxury into one seamless living experience.
            </p>

            {/* About Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior - Where Design, Energy & Emotion Meet
            </h2>
            <p>
              Vasterior is a luxury interior design and Vastu consultancy studio known for creating spaces that feel visually stunning and energetically aligned. Our design philosophy blends:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Timeless materials</li>
              <li>Natural textures</li>
              <li>Balanced spatial flow</li>
              <li>Vastu-led decision making</li>
              <li>Modern yet rooted aesthetics</li>
            </ul>
            <p>
              Every project we take up — whether a Rampur farmhouse, villa, builder floor, or urban apartment — is designed with a deep respect for how our clients live, what they value, and how they want their space to support their life&apos;s direction.
            </p>
            <p>
              With strong expertise in MahaVastu and modern interior design, Vasterior offers a unique design approach not found anywhere else in Rampur.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as the Best Interior Designer in Rampur
            </h2>
            <p>
              Choosing the right designer is not just about style - it&apos;s about trust, intention, and the ability to translate your lifestyle into a home that feels like you. Here&apos;s why families in Rampur prefer Vasterior:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A premium design approach rooted in natural storytelling</li>
              <li>Expertise in Modern Farmhouse interiors — rustic, calm, luxurious</li>
              <li>Strong grip over spatial flow and movement patterns</li>
              <li>Customized furniture, material curation, and artisanal finishes</li>
              <li>MahaVastu-led placement that enhances harmony and functionality</li>
              <li>Transparent processes and client-centric consultations</li>
            </ul>
            <p>
              Whether you&apos;re building a countryside farmhouse or renovating a legacy home, we ensure every element feels purposeful and refined.
            </p>

            {/* Approach Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Signature Design Approach - Warm Textures, Calm Palettes, Precise Energy Flow
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Material Selection</h3>
                <p>We curate classic Modern Farmhouse materials:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Solid wood</li>
                  <li>Distressed white or beige textures</li>
                  <li>Matte black metals</li>
                  <li>Linen, jute, stone, and handcrafted details</li>
                </ul>
                <p>These textures bring warmth and add depth without overpowering the space.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Lighting Design</h3>
                <p>
                  Rampur homes often have large windows and open fields around them — making natural light a major asset. Our lighting strategy enhances:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Golden-hour tones</li>
                  <li>Soft ambient glows</li>
                  <li>Warm white layering</li>
                  <li>Accent lighting over art, niches, and beams</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Intentional Spatial Flow</h3>
                <p>
                  Designed to feel breathable and clutter-free, with pathways that support ease and movement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Custom Furniture & Styling</h3>
                <p>We craft signature farmhouse elements like:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Wooden beams</li>
                  <li>Panelled walls</li>
                  <li>Soft upholstered chairs</li>
                  <li>Rustic-modern kitchen layouts</li>
                  <li>Oversized farmhouse dining tables</li>
                </ul>
                <p>Each piece is made to fit the home - not forced into it.</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu + Interior Design Integration - Rampur&apos;s Unique Advantage
            </h2>
            <p>
              Rampur&apos;s residential plots vary widely — from rectangular farms to irregular layouts. This leads to energy disruption when rooms are placed without directional intelligence.
            </p>
            <p>Vasterior bridges this beautifully.</p>
            <p>We bring MahaVastu science into modern design, ensuring:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Correct activity placement</li>
              <li>Balanced elements (earth, water, fire, air, space)</li>
              <li>Energy-enhancing object positioning</li>
              <li>Colour palettes aligned with each zone</li>
              <li>Occupant-specific Vastu analysis</li>
            </ul>
            <p>
              A Modern Farmhouse not only looks luxurious — it feels energetically grounded.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design Services We Offer in Rampur
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Full-Service Modern Farmhouse Interiors</strong> – Concept, layout, furniture design, materials, lighting, styling, and execution.</li>
              <li><strong>Space Planning & Layout Optimization</strong> – Especially useful for farm plots, independent floors, and irregular shapes.</li>
              <li><strong>Vastu Consultation & Alignment</strong> – Including zone mapping, activity correction, and element balancing.</li>
              <li>
                <strong>Residential Interior Design for:</strong>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Farmhouses</li>
                  <li>Villas</li>
                  <li>Builder floors</li>
                  <li>Renovations</li>
                  <li>Apartments</li>
                  <li>Weekend homes</li>
                </ul>
              </li>
              <li><strong>3D Renders & Material Moodboards</strong> – To help you visualize before execution.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process — How Vasterior Designs Modern Farmhouse Homes in Rampur
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Discovery & Consultation</strong> – Understanding your lifestyle, family needs, land type, and design vision.</li>
              <li><strong>Site Evaluation & Vastu Mapping</strong> – We study directions, natural light, zoning, and energetic flow.</li>
              <li><strong>Concept Design & Floor Planning</strong> – Farmhouse design themes, palettes, spatial zoning, and layout optimization.</li>
              <li><strong>Material & Furniture Selection</strong> – We curate high-quality natural textures, handcrafted elements, and farmhouse-essential details.</li>
              <li><strong>3D Visualization</strong> – You see your future home — before the work begins.</li>
              <li><strong>Execution & Styling</strong> – End-to-end site coordination, installation, and final styling with emotional intention.</li>
            </ul>

            {/* Project Types */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Where Modern Farmhouse Style Works Best in Rampur
            </h2>
            <p>
              Rampur has diverse residential pockets that respond beautifully to the Modern Farmhouse aesthetic:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Large agricultural lands converted into luxury farmhouses</li>
              <li>Heritage family properties restored with modern comfort</li>
              <li>New villas in developing corridors</li>
              <li>Independent floors needing warmth and character</li>
              <li>Renovation-based farm stays or boutique homestays</li>
            </ul>
            <p>
              Every category offers room for natural textures, soft elegance, and Vastu-directional flow.
            </p>

            {/* Pricing */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Pricing & Consultation
            </h2>
            <p>
              Vasterior believes in clarity and premium value. Pricing depends on:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Size of farmhouse</li>
              <li>Scope of work</li>
              <li>Level of detailing</li>
              <li>Vastu involvement</li>
              <li>Execution requirements</li>
            </ul>
            <p>We offer:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full Interior Design + Vastu Packages</li>
              <li>Conceptual Design Packages</li>
              <li>Room-wise Consultation Options</li>
            </ul>
            <p>
              Our goal is simple: design a home that feels calm, luxurious, and deeply aligned.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs - Modern Farmhouse Interiors in Rampur
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">1. What makes Modern Farmhouse interiors ideal for Rampur?</h3>
                <p>
                  They complement Rampur&apos;s natural landscapes, open plots, and spacious homes with warm, timeless textures.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2. Does Vasterior provide Vastu-based Modern Farmhouse design?</h3>
                <p>
                  Yes. Vastu is a core part of our design process — ensuring alignment and harmony.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. How long does a Modern Farmhouse project take?</h3>
                <p>
                  On average 3–8 months depending on size and execution scope.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. Can Vasterior design only the interiors without execution?</h3>
                <p>
                  Yes, we offer design-only packages along with full execution options.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. Do you work with builder floors and smaller homes in Rampur?</h3>
                <p>
                  Absolutely. Modern Farmhouse aesthetics can be beautifully adapted to any home size.
                </p>
              </div>
            </div>

            {/* Call-to-Action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Design Your Dream Modern Farmhouse
            </h2>
            <p>
              Your home is not just a space - it is an experience shaped every day by how you move, feel, and live.
            </p>
            <p>
              If you&apos;re dreaming of Modern Farmhouse Interiors in Rampur that feel warm, grounded, intentional, and deeply luxurious, Vasterior would love to bring that vision to life.
            </p>
            <div className="p-4 border-l-4 border-[#FF9800] bg-[#FFF8F0] rounded">
              <strong>Let us design a home that aligns with your story.</strong>
              <br />
              <p className="mt-2">Contact us today:</p>
              <a href="tel:+917906086899" className="text-blue-700 font-semibold underline">+917906086899</a>
              <br />
              <a href="mailto:spacebuild.india@gmail.com" className="text-blue-700 font-semibold underline">spacebuild.india@gmail.com</a>
            </div>
          </div>

          <PostNavigation slug="modern-farmhouse-interiors-rampur" />
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
