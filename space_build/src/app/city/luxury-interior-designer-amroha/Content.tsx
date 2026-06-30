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
            Luxury Interior Designer Amroha — Vasterior Studio
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior Studio brings a rare harmony of luxury, craftsmanship, and energy-aligned design to Amroha, a city where heritage, artistry, and evolving modern aspirations coexist beautifully. For homeowners seeking more than just interiors, Vasterior curates spaces that feel profoundly personal… spaces that breathe, hold warmth, and elevate everyday living into an experience of comfort and quiet sophistication.
              </p>
              <p>
                As one of North India&apos;s emerging authorities in luxury residential design and MahaVastu-led spatial planning, Vasterior blends architectural clarity with soulful design language. Every home in Amroha is treated as a narrative, of family, aspirations, and emotional rhythm, translated gently into materials, proportions, and purposeful energy flow. This is interior design redefined: intentional, elegant, and deeply attuned to how you truly want to live.
              </p>
            </div>

            {/* Luxury Interiors */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Luxury Interiors Crafted for the Modern Amroha Home
              </h3>
              <p>
                Amroha&apos;s residences, from ancestral homes with cultural depth to new-age villas and farmhouses, hold unique opportunities for design storytelling. At Vasterior Studio, luxury is not about excess; it is about precision, atmosphere, and emotional intelligence.
              </p>
              <p>
                Every project begins with understanding how a space should feel.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A drawing room that carries the serenity of soft neutral palettes</li>
                <li>A master bedroom that wraps you in warmth and grounding stability</li>
                <li>A kitchen that radiates clarity, hygiene, and effortless movement</li>
                <li>A study that sparks focus, intention, and mental clarity</li>
                <li>A children&apos;s room that becomes a cocoon of joy and imagination</li>
              </ul>
              <p>
                Our design language is warm, contemporary, timeless, blending tactile materials, sensory comfort, and a refined palette suited to Amroha&apos;s climate, culture, and lifestyle. Whether it is rich sheesham woods, artisanal textures, brushed metals, or curated artworks, every element contributes to a luxurious yet soulful atmosphere.
              </p>
            </div>

            {/* MahaVastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Where MahaVastu Meets High-End Interior Design
              </h3>
              <p>
                Vasterior is one of the few studios in the region where luxury interiors are thoughtfully aligned with MahaVastu principles, not as superstition, but as spatial psychology and energy sciences rooted in centuries of observation.
              </p>
              <p>We integrate:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Directional intelligence (NE for clarity, SW for stability, East for growth, North for abundance)</li>
                <li>Element balancing (fire, water, earth, air, space)</li>
                <li>Purpose zoning (placing the right activities in the right directions)</li>
                <li>Object placement and material choices that enhance emotional comfort</li>
              </ul>
              <p>
                For Amroha&apos;s culturally rich households, this interplay creates interior spaces that feel intuitively right — calmer mornings, smoother family interactions, better productivity, and a grounded sense of belonging. Luxury becomes meaningful when energy flows effortlessly.
              </p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Signature Design Process
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Deep-Dive Discovery</strong>
                  <br />
                  We begin by understanding your lifestyle, architectural constraints, aspirations, and emotional priorities. Every family in Amroha has a unique rhythm, and the design evolves around that narrative.
                </li>
                <li>
                  <strong>Spatial Flow & MahaVastu Alignment</strong>
                  <br />
                  Before selecting materials or forms, we decode the property&apos;s energy blueprint, ensuring each room supports the intended activity and emotional tone.
                </li>
                <li>
                  <strong>Luxury Concept Development</strong>
                  <br />
                  Mood boards, visual narratives, and material palettes are curated with an editorial eye: soft neutrals, elegant textures, and rich details that feel timeless.
                </li>
                <li>
                  <strong>Technical Precision</strong>
                  <br />
                  Vasterior delivers complete working drawings, 3D renders, furniture detailing, lighting plans, and custom joinery to ensure flawless execution.
                </li>
                <li>
                  <strong>End-to-End Execution</strong>
                  <br />
                  From vendor coordination to quality control, our team ensures the entire process feels seamless and refined.
                </li>
              </ol>
              <p>
                Every design choice, lighting layers, wall textures, furniture ergonomics, accessory styling, is made with clarity and intention.
              </p>
            </div>

            {/* Why Choose */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Amroha Chooses Vasterior for Luxury Homes
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Tailored Luxury</strong><br/>Your home should feel like you. We design environments that reflect your taste, lifestyle, and cultural sensibilities.</li>
                <li><strong>Energy-Aligned Living</strong><br/>With subtle MahaVastu integration, your home supports emotional well-being, clarity, abundance, and harmony.</li>
                <li><strong>Editorial Aesthetics</strong><br/>Expect spaces that feel like pages of a premium interior magazine — clean, atmospheric, and visually composed.</li>
                <li><strong>Material Mastery</strong><br/>From stones, fabrics, wood finishes, and artistic details sourced across India, every material is handpicked for durability and luxury.</li>
                <li><strong>Transparent Process & Trust</strong><br/>Our founders are deeply involved in every project, ensuring high craftsmanship and personalised guidance throughout.</li>
                <li><strong>Future-Ready Designs</strong><br/>Lighting automation, ergonomic planning, and modern storage solutions make your home equipped for evolving lifestyles.</li>
              </ol>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Luxury Interior Design Services We Offer in Amroha
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Premium residential interior design</li>
                <li>Bedroom, living room, kitchen, and pooja room transformations</li>
                <li>Villa, bungalow, and farmhouse interiors</li>
                <li>Custom furniture and artisan-crafted décor elements</li>
                <li>Complete space planning + MahaVastu consultation</li>
                <li>High-end renovation and makeovers</li>
                <li>3D visualization, mood boards, and material curation</li>
                <li>Turnkey execution for a seamless experience</li>
              </ul>
              <p>
                Luxury is not just visual; it is emotional. A well-designed space can shift how you wake up, how you connect with your family, and how you move through your day.
              </p>
              <p>
                At Vasterior, design is a quiet dialogue with your aspirations. A home in Amroha becomes more than architecture, it becomes a sanctuary of grounding, expression, and elevated living. Call us today at <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or{' '}
                <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                  spacebuild.india@gamil.com
                </a>.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                FAQs
              </h3>
              <div className="space-y-4 mt-4">
                <div>
                  <p className="font-semibold">Q1. Who is the best luxury interior designer in Amroha?</p>
                  <p>Vasterior Studio is widely recognized for offering premium, editorial-grade, and Vastu-aligned luxury interiors tailored for Amroha&apos;s modern and traditional homes.</p>
                </div>
                <div>
                  <p className="font-semibold">Q2. How does Vasterior integrate MahaVastu into interior design?</p>
                  <p>MahaVastu principles are applied through direction-based zoning, element balancing, and purposeful spatial planning, enhancing comfort, clarity, and holistic well-being.</p>
                </div>
                <div>
                  <p className="font-semibold">Q3. Do you offer turnkey interior design services in Amroha?</p>
                  <p>Yes. Vasterior provides complete design-to-execution services including layouting, 3D visualization, material selection, joinery drawings, and premium execution.</p>
                </div>
                <div>
                  <p className="font-semibold">Q4. What is your design style for Amroha homes?</p>
                  <p>Warm neutrals, rich textures, contemporary elegance, clean lines, and emotionally grounded spaces — editorial yet deeply comfortable.</p>
                </div>
                <div>
                  <p className="font-semibold">Q5. Can Vasterior design Vastu-compliant modern homes?</p>
                  <p>Absolutely. Our approach blends modern luxury design with subtle, non-superstitious MahaVastu alignment.</p>
                </div>
              </div>
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
