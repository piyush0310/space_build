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
            High-End Home Interior Design Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                Vasterior Studio Pvt. Ltd.
              </h3>
              <p>
                Vasterior brings a rare blend of luxury interior design and refined MahaVastu intelligence to Amroha,
                crafting homes that are not only visually stunning but emotionally aligned with the people who inhabit
                them. Every space is guided by intention, artistry, and a deep understanding of spatial energy.
              </p>
              <p>
                The result is a high-end home that feels beautiful, balanced, and unmistakably yours. In a city where
                tradition meets evolving modern aspirations, Vasterior has become the preferred partner for homeowners
                seeking luxury home interiors that feel timeless, soulful, and deeply personal.
              </p>
            </div>

            {/* Philosophy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The Vasterior Philosophy: Where Luxury Meets Alignment
              </h3>
              <p>
                High-end design is not merely about expensive materials or elaborate layouts; it is about creating a
                space that breathes with you, a home that elevates daily rituals and anchors life with clarity and calm.
              </p>
              <p>Our philosophy blends three pillars:</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Design excellence – modern luxury sensibility inspired by global aesthetics.</li>
                <li>Vastu and MahaVastu principles – energy-aligned layouts that support wellbeing and prosperity.</li>
                <li>Craftsmanship and detail – meticulous selection of materials, textures, colours, and finishes.</li>
              </ol>
              <p>
                This synthesis allows Vasterior to transform homes in Amroha into living works of art, emotionally warm,
                visually serene, and architecturally refined.
              </p>
            </div>

            {/* Why choose */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Homeowners in Amroha Choose Vasterior
              </h3>
              <p>
                Amroha&apos;s growing community of discerning homeowners is seeking something more meaningful than just
                decor. They want:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Spaces that look luxurious and feel effortless</li>
                <li>Rooms that are aligned energetically, not just aesthetically</li>
                <li>Design clarity for every function, from living and sleeping to cooking and working</li>
                <li>
                  A timeless home that is future-ready, emotionally soothing, and shaped around their personal identity
                </li>
              </ul>
              <p>
                This is where Vasterior stands apart. Spaces are designed to be lived in rather than merely seen, with a
                focus on identity, intention, and the art of everyday living.
              </p>
            </div>

            {/* Approach 1 */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Signature Approach to High-End Home Interior Design
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                1. Space-Decoding Through MahaVastu Insight
              </h4>
              <p>
                Every home holds a unique energy blueprint. Before designing the first line, the team decodes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The sixteen MahaVastu zones</li>
                <li>Elemental harmony across fire, water, air, earth, and space</li>
                <li>Activity alignment and utility</li>
                <li>Movement patterns and light flow</li>
                <li>Material resonance and emotional tone</li>
              </ul>
              <p>
                This creates a home that supports goals, work-life balance, family dynamics, creativity, and growth,
                with no fear-based language or superstition, only clarity and intelligent spatial flow.
              </p>
            </div>

            {/* Approach 2 */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                2. Bespoke Luxury Design Crafted for Amroha Homes
              </h4>
              <p>
                Vasterior&apos;s design language is rooted in global luxury yet sensitively adapted to Amroha&apos;s
                architecture, climate, and lifestyle. Expect interiors that echo:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Warm beige, ivory, and charcoal palettes</li>
                <li>Matte textures and luxury natural materials</li>
                <li>Italian veneers, stone surfaces, and engineering-grade finishes</li>
                <li>Soft, layered lighting that enhances depth and drama</li>
                <li>Custom furniture tailored to each space</li>
                <li>Bold accents balanced with timeless calmness</li>
              </ul>
              <p>Every room feels like a thoughtfully curated scene, elegant, modern, and remarkably livable.</p>
            </div>

            {/* Approach 3 */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                3. Function Embedded in Beauty
              </h4>
              <p>
                Luxury today is not ornamental; it is purposeful. Amroha projects focus on:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Intelligent storage that disappears into walls</li>
                <li>Multi-functional zones for modern families</li>
                <li>Ergonomic layouts that reduce movement fatigue</li>
                <li>Noise control, echo reduction, and thermal comfort</li>
                <li>Seamless technology integration</li>
                <li>Easy-to-maintain high-end materials</li>
              </ul>
              <p>Beauty is designed to simplify life, not complicate it.</p>
            </div>

            {/* Approach 4 */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                4. Craftsmanship Rooted in Precision
              </h4>
              <p>
                Every detail matters. The team collaborates with artisans, carpenters, stone specialists, and lighting
                technicians to ensure each inch reflects the Vasterior standard of excellence.
              </p>
              <p>
                From hand-selected stone slabs and custom leather-wrapped furniture to meticulously crafted cabinetry,
                your home becomes a signature piece of art engineered to last.
              </p>
            </div>

            {/* Room-by-room */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Room-by-Room Luxury in Your Amroha Home
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                Luxury Living Rooms
              </h4>
              <p>
                Living spaces are designed to feel warm, welcoming, and magazine-worthy, ideal for gatherings, intimate
                evenings, and everyday family moments, with symmetry and visual depth that draw the eye naturally.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                Vastu-Aligned Master Bedrooms
              </h4>
              <p>
                Personal sanctuaries are crafted for rest, rejuvenation, and emotional grounding, using material
                softness, warm lighting, and elemental balance to help the mind relax.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                High-End Modular Kitchens
              </h4>
              <p>
                Kitchens are ergonomic, beautifully planned, and rich in material palette. With Vastu-aligned zones,
                premium hardware, and layered lighting, they become effortless and enjoyable workspaces.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                Luxurious Bathrooms
              </h4>
              <p>
                Bathrooms elevate everyday rituals with soft illumination, refined textures, and considered fixtures,
                often experienced as private spa environments.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3">
                Dedicated Work-from-Home Spaces
              </h4>
              <p>
                Work zones are designed for focus, productivity, and calmness, with intentional layouts that support
                long hours without fatigue.
              </p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Design Process: Smooth, Transparent, Personal
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Discovery call and site evaluation</li>
                <li>MahaVastu zoning and interior concept development</li>
                <li>Material selection and mood board crafting</li>
                <li>Detailed layouts, renders, and design reveal</li>
                <li>BOQ and budget alignment</li>
                <li>Execution oversight and quality control</li>
                <li>Final styling and handover</li>
              </ol>
              <p>Every step is seamless, collaborative, and respectful of your vision.</p>
            </div>

            {/* Transformation */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Transforming Amroha&apos;s Homes, One Story at a Time
              </h3>
              <p>
                Every home is a story waiting to be told through textures, proportions, light, and spatial alignment.
                Vasterior translates life patterns, values, habits, and aspirations into a living environment that
                supports your journey.
              </p>
              <p>
                Your home in Amroha becomes a sanctuary, a creative space, a symbol of achievement, a reflection of your
                identity, and most importantly a place that feels emotionally right.
              </p>
            </div>

            {/* Call to action */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Begin Your Luxury Home Transformation in Amroha
              </h3>
              <p>
                If you are ready to experience high-end home interior design with depth, intention, and artistry,
                Vasterior would be honoured to bring your vision to life.
              </p>
              <p>
                Your space holds potential; let the team help align it beautifully. Call{" "}
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
