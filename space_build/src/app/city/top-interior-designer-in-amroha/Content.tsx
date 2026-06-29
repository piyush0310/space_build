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
            Top Interior Designer in Amroha — Vasterior Studio's Luxury, Vastu-Aligned Approach
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior Studio stands at the intersection of luxury, intuition, and spatial intelligence; bringing an elevated design language to discerning homeowners who seek more than interiors. They seek meaning. As one of the top interior designers in Amroha, Vasterior brings a rare synergy of refined aesthetics, MahaVastu principles, and contemporary living sensibilities. Every home is crafted with an editorial softness, a sense of calm movement, and an energy alignment that feels both timeless and deeply personal.
            </p>
            <p>
              In Amroha, where heritage meets aspiration, Vasterior shapes spaces that breathe, flow, and speak to the people who inhabit them. The result is not just a beautifully designed home, but a life that feels more aligned, grounded, and effortlessly luxurious.
            </p>

            {/* Why Vasterior Leads */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Leads as the Top Interior Designer in Amroha
            </h3>
            <p>
              Design in Amroha holds its own rhythm, a rhythm shaped by craftsmanship, family narratives, courtyards, and a deep connection to comfort. Vasterior understands this emotional architecture. Our work is not about imposing trends; it is about listening to the home, decoding its potential, and amplifying its best qualities through world-class design.
            </p>
            <p>
              We blend:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Luxury interior design enriched with tactile materials</li>
              <li>MahaVastu understanding that elevates well-being</li>
              <li>Spatial flow strategy that enhances comfort and productivity</li>
              <li>Aesthetic clarity drawn from global editorial inspirations</li>
            </ul>
            <p>
              This balance has made Vasterior the preferred interior designer for Amroha's homeowners who desire refined modernity with cultural grounding.
            </p>

            {/* Design Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              A Design Philosophy Rooted in Elegance and Energy
            </h3>
            <p>
              Great interiors whisper before they speak. They guide movement, invite harmony, and set the emotional tone of a home. Vasterior's design language is built on this philosophy.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Aesthetics That Feel Naturally Luxurious</h4>
                <p>We work with warm neutrals, soft beige tones, natural stone, artisanal textures, heritage-inspired elements, and contemporary silhouettes. The aim is always the same, timeless elegance that never feels loud, cluttered, or trend-dependent.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">2. MahaVastu-Informed Spatial Planning</h4>
                <p>Unlike conventional design, Vasterior integrates non-superstitious, scientifically structured MahaVastu principles:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Directional intelligence for peace, productivity, and comfort</li>
                  <li>Five-element balance for wellness</li>
                  <li>Activity-object alignment for functional flow</li>
                  <li>Emotional resonance through correct furniture placement</li>
                </ul>
                <p className="mt-2">In Amroha's diverse home layouts, from ancestral homes to modern villas, this alignment helps create spaces that feel emotionally grounded and energetically uplifting.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Editorial Storytelling Through Interiors</h4>
                <p>Every room should feel like a curated editorial spread, calm, layered, intentional. We design with:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Light that shapes mood</li>
                  <li>Materiality that defines warmth</li>
                  <li>Form that champions comfort</li>
                  <li>Craftsmanship that celebrates detail</li>
                </ul>
                <p className="mt-2">Each Vasterior project stands as a visual and emotional narrative unique to the homeowner.</p>
              </div>
            </div>

            {/* Signature Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Signature Services for Homes in Amroha
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Luxury Interior Design (Full Home & Renovations)</h3>
                <p>From concept to completion, we transform spaces into refined, modern sanctuaries.</p>
                <p>Includes:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Zoning + Layout</li>
                  <li>Lighting & RCP design</li>
                  <li>Wall elevations, sections, furniture details</li>
                  <li>Material palette creation</li>
                  <li>High-end 3D visualization</li>
                  <li>Styling & décor curation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. MahaVastu Home Consultation</h3>
                <p>We analyze directional zones, activities, elemental balance, and energy flow, then offer practical, non-destructive remedies that seamlessly blend with your interiors.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Spatial Flow & Lifestyle Planning</h3>
                <p>Amroha homes often include multi-generational living. Our planning ensures:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Smooth circulation</li>
                  <li>Emotional comfort</li>
                  <li>Privacy + community balance</li>
                  <li>Clutter-free, breathable layouts</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Designer Furniture & Bespoke Decor</h3>
                <p>Custom wardrobes, study units, pooja areas, TV walls, and soft furnishing curation ensure the home feels handcrafted for your life.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Turnkey Execution for Hassle-Free Experience</h3>
                <p>Every project is executed with precision, transparency, and quality-driven craftsmanship.</p>
              </div>
            </div>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Amroha Homeowners Prefer Vasterior
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Elegant Modern Design With Cultural Sensitivity</strong> – We understand how deeply homes in Amroha hold memories, traditions, and family rituals. Our designs honor this sentiment while introducing global luxury aesthetics.</li>
              <li><strong>A Founder-Led Vision</strong> – With expertise across interior design, 3D visualization, material strategy, and MahaVastu, Vasterior's founders ensure every project carries personal attention and editorial finesse.</li>
              <li><strong>Premium, Clean Aesthetic</strong> – If you love calm spaces, soft colors, refined details, and timeless textures, Vasterior's design philosophy aligns naturally with your taste.</li>
              <li><strong>Long-Term Value & Alignment</strong> – Our designs are meant to age gracefully and support your lifestyle for years.</li>
            </ul>

            {/* Crafting Homes */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Crafting Homes That Feel Aligned, Intentional, and Beautifully Personal
            </h2>
            <p>
              Designing a home in Amroha requires a balance of restraint and richness. We take pride in creating interiors that feel:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Visually serene</li>
              <li>Emotionally nurturing</li>
              <li>Energetically aligned</li>
              <li>Functionally thoughtful</li>
              <li>Aesthetically timeless</li>
            </ul>
            <p>
              Vasterior's presence in Amroha represents not just interior design, but a commitment to shaping lives through spatial harmony and luxury craftsmanship.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              FAQs
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">1. Why is Vasterior considered the top interior designer in Amroha?</h3>
                <p>Because Vasterior blends luxury interior design, MahaVastu alignment, and editorial aesthetics—creating refined spaces that feel emotionally harmonious and visually timeless.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">2. Do you offer full-home interior design services in Amroha?</h3>
                <p>Yes. From layout to lighting, materials, furniture, execution, and styling, Vasterior manages the complete design journey end-to-end.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">3. Can Vasterior work with ancestral or older homes in Amroha?</h3>
                <p>Absolutely. We specialize in bringing new life to heritage or older structures while retaining their emotional and cultural character.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">4. Is MahaVastu included in the interior design process?</h3>
                <p>Yes. Our approach subtly integrates directional intelligence, elemental balance, and activity-object alignment without any superstition or structural demolition.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">5. Do you provide 3D renders before execution?</h3>
                <p>Yes. Our high-quality, photorealistic 3D visualizations help clients experience their future home with clarity and confidence.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">6. What is the typical project duration in Amroha?</h3>
                <p>Timelines vary by scope, but full-home projects generally range from 10-20 weeks depending on complexity.</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 space-y-4 text-gray-700">
            <p>To design a home in Amroha that feels aligned, intentional, and beautifully personal, connect with Vasterior Studio. Your space has a story, let us help you shape it with elegance and emotional depth.</p>
            <p><strong>📞 Call us today at:</strong> +917906086899</p>
            <p><strong>📧 Email:</strong> <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">info@spacebuild.com</a></p>
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
