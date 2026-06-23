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
            Modern Farmhouse Interiors Amroha – By Vasterior Studio, Where Rustic Simplicity Meets Modern Luxury
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior Studio crafts Modern Farmhouse Interiors in Amroha with an elegance that feels both rooted and refreshing. In every project, we bring together sunlit openness, tactile natural materials, soft rustic charm, and the architectural precision of contemporary living. The result is a space that feels like home; grounded, serene, purposeful, and emotionally warm.
              </p>
              <p>
                Modern farmhouse design is not merely an aesthetic. It is a way of living: slow, intentional, connected to nature, and deeply human. And in Amroha, where tradition, family, and comfort hold profound value, this style becomes even more meaningful.
              </p>
            </div>

            {/* Soul of Modern Farmhouse */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The Soul of Modern Farmhouse Interiors
              </h3>
              <p>Rustic heart. Modern mind. Luxury hands.</p>
              <p>Modern Farmhouse Interiors blend two worlds beautifully:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Rustic warmth:</strong> Natural wood, handcrafted textures, vintage metal, earthy tones, imperfect beauty.
                </li>
                <li>
                  <strong>Modern sophistication:</strong> Clean geometry, minimal lines, hidden storage, architectural lighting, premium finishes.
                </li>
                <li>
                  <strong>Effortless luxury:</strong> Muted color palettes, curated art, soft linen drapes, textured walls, and thoughtfully placed decor.
                </li>
              </ul>
              <p>This harmony allows everyday living to feel elevated, even poetic.</p>
              <p>Every beam, tile, cabinet, and corner contributes to a home that is:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Warm yet refined</li>
                <li>Simple yet luxurious</li>
                <li>Timeless yet inviting</li>
              </ul>
            </div>

            {/* Why it thrives in Amroha */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Modern Farmhouse Style Thrives in Amroha
              </h3>
              <p>
                Amroha&apos;s cultural charm, close-knit family structure, natural surroundings, and generous sunlight make it the perfect canvas for farmhouse interiors.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Climate-Friendly Aesthetics:</strong> Light-toned woods, breathable textiles, and airy layouts maintain comfort through Amroha&apos;s seasonal variations.
                </li>
                <li>
                  <strong>Family-Focused Design:</strong> Open-concept living rooms and welcoming dining areas create ideal family gathering spaces.
                </li>
                <li>
                  <strong>Connection to Nature:</strong> Courtyards, verandas, and organic materials help residents stay emotionally and visually connected to the outdoor environment.
                </li>
                <li>
                  <strong>Warm, Earthy Palettes:</strong> Colours like cream, terracotta, jute brown, sage, and sand blend beautifully with Amroha&apos;s rooted architectural ethos.
                </li>
              </ul>
              <p>
                Modern farmhouse interiors feel &quot;right at home&quot; here; natural, honest, and harmonious.
              </p>
            </div>

            {/* Vasterior Signature Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior&apos;s Signature Approach to Modern Farmhouse Design
              </h3>
              <p>
                At Vasterior, every home is treated as a living story. A story of materials, emotions, ancestral memories, and modern aspirations.
              </p>

              <ol className="list-decimal list-inside space-y-4 ml-4">
                <li>
                  <strong>Spatial Flow Design – Calm, Logic, and Comfort</strong>
                  <br />
                  We design layouts that breathe. Movement flows naturally. Rooms feel connected yet independent. Light travels gracefully from one space to another.
                </li>
                <li>
                  <strong>Material Storytelling – Tactile, Authentic, Timeless</strong>
                  <br />
                  We curate:
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Solid woods with deep natural grains</li>
                    <li>Matte-finish stone</li>
                    <li>Handmade tiles</li>
                    <li>Linen, jute, and cotton upholstery</li>
                    <li>Bespoke ironwork</li>
                    <li>Neutral textures that age gracefully</li>
                  </ul>
                  <p className="mt-2">
                    Each element is chosen for emotional resonance, not trend.
                  </p>
                </li>
                <li>
                  <strong>Editorial Elegance – A Home That Photographs Like a Magazine</strong>
                  <br />
                  Our designs carry the warmth of Studio McGee and the polished simplicity of Architectural Digest. Soft light, balanced decor, grounded energy, and sculpted silhouettes make your home feel cinematic.
                </li>
                <li>
                  <strong>MahaVastu-Informed Luxury</strong>
                  <br />
                  We subtly integrate the 16-zone principles of MahaVastu: direction, element, activity, and object alignment. This is never superstition. It is energetic intelligence, improving mood, harmony, productivity, rest, and relationships. Amroha&apos;s farmhouses especially benefit from this balanced energy grid.
                </li>
              </ol>
            </div>

            {/* Room-by-room breakdown */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Room-by-Room Breakdown of Modern Farmhouse Interiors
              </h3>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                1. Living Room – The Heart of the Farmhouse
              </h4>
              <p>A modern farmhouse living room feels like a warm embrace.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Large, comfortable sofas</li>
                <li>Cream and beige upholstery</li>
                <li>Oak or ash wood center tables</li>
                <li>Subtle wrought-iron accents</li>
                <li>Layered lighting: ambient, task, and accent</li>
                <li>Soft rugs that anchor the space</li>
              </ul>
              <p className="mt-2">
                We often use natural stone, ribbed textures, and matte finishes to create an understated luxury.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                2. Bedrooms – Calm, Cozy, Restorative
              </h4>
              <p>Farmhouse bedrooms prioritize serenity.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Panelled or shiplap-style walls</li>
                <li>Minimalist wardrobes</li>
                <li>Floating side tables</li>
                <li>Plush natural textiles</li>
                <li>Warm lighting for evening calmness</li>
              </ul>
              <p className="mt-2">
                Colours remain soft: ivory, muted taupe, faded green, and clay undertones.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                3. Kitchen – Functional Beauty Meets Rustic Luxury
              </h4>
              <p>The modern farmhouse kitchen is a showstopper.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Shaker-style cabinetry</li>
                <li>Quartz or stone countertops</li>
                <li>Deep farmhouse sinks</li>
                <li>Matte brass or nickel handles</li>
                <li>Open shelves with curated crockery</li>
                <li>Terracotta or neutral stone flooring</li>
              </ul>
              <p className="mt-2">
                We integrate Vastu-friendly zones subtly to ensure flow, comfort, and natural abundance.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                4. Dining Area – A Place for Togetherness
              </h4>
              <p>
                A long wooden dining table, soft upholstered chairs, and pendant lighting create a warm, family-first energy.
              </p>
              <p>We emphasize:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Comfort</li>
                <li>Natural materials</li>
                <li>Spaciousness</li>
                <li>A welcoming visual rhythm</li>
              </ul>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                5. Bathrooms – Spa-Like, Grounded, Earthy
              </h4>
              <p>Modern farmhouse bathrooms use:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Natural textures</li>
                <li>Stone counters</li>
                <li>Frameless glass</li>
                <li>Warm metal finishes</li>
                <li>Linen tones</li>
                <li>Elegant matte surfaces</li>
              </ul>
              <p className="mt-2">They feel calm, refreshing, and intimate.</p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                6. Outdoor Spaces – Verandas, Courtyards, Porticos
              </h4>
              <p>We bring the outdoors into your lifestyle through:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Rustic seating corners</li>
                <li>Stone flooring</li>
                <li>Planters and greens</li>
                <li>Natural light optimization</li>
              </ul>
              <p className="mt-2">
                These spaces carry exceptional Vastu significance and elevate daily living.
              </p>
            </div>

            {/* Vastu-integrated section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vastu-Integrated Modern Farmhouse Interiors
              </h3>
              <p>Without superstition. Without fear. Without rituals.</p>
              <p>Only alignment. Only harmony. Only energy flow.</p>
              <p>We design farmhouses in Amroha so that:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Bedrooms fall in restful zones</li>
                <li>Kitchens stay in active, fire-friendly directions</li>
                <li>Workspaces receive clarity-giving light</li>
                <li>Entrances feel welcoming and abundant</li>
                <li>Courtyards distribute natural vitality</li>
              </ul>
              <p className="mt-2">
                Every zone supports the family emotionally, mentally, and energetically.
              </p>
            </div>

            {/* Why Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vasterior Is Amroha&apos;s Most Trusted Modern Farmhouse Designer
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Boutique luxury design</li>
                <li>Personalized approach</li>
                <li>Editorial-grade aesthetics</li>
                <li>Deep material expertise</li>
                <li>MahaVastu-informed spatial planning</li>
                <li>End-to-end turnkey execution</li>
                <li>Transparent processes and timelines</li>
              </ul>
              <p className="mt-2">
                We design not just homes, but experiences. Spaces that breathe. Spaces that ground. Spaces that quietly elevate everyday life.
              </p>
            </div>

            {/* Closing / CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Start Your Modern Farmhouse Journey in Amroha
              </h3>
              <p>
                A modern farmhouse is a dream that deserves precision, warmth, and a designer who understands both emotion and functionality. Vasterior Studio brings that balance to life.
              </p>
              <p>
                <strong>Book a Consultation.</strong> Contact us today at{" "}
                <strong>+917906086899</strong> or{" "}
                <a
                  href="mailto:info@spacebuild.com"
                  className="text-blue-600 hover:underline"
                >
                  info@spacebuild.com
                </a>
                .
              </p>
              <p>
                Let&apos;s design a farmhouse that feels like a warm sunrise; calm, grounded, and deeply yours.
              </p>
            </div>
          </div>

          <PostNavigation slug="modern-farmhouse-interiors-amroha" />
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
