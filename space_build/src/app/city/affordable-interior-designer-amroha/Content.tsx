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
            Affordable Interior Designer in Amroha — Space Build Studio
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Space Build Studio brings its signature blend of luxury design, MahaVastu intelligence, and refined spatial storytelling to Amroha, making high-quality interiors truly accessible. As a studio that believes every home deserves intention, harmony, and beauty, Space Build approaches affordability not as a compromise, but as an opportunity to craft meaningful spaces with clarity and elegance. Our philosophy is simple: even a modest budget deserves world-class design thinking, thoughtful material selection, and an atmosphere that nurtures the people living within it.
            </p>
            <p>
              With this conviction, Space Build Studio positions itself as the most trusted and affordable interior designer in Amroha for homeowners who desire timeless aesthetics without overwhelming costs.
            </p>

            {/* New Section */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Affordable Interiors With a Luxury Heart
            </h3>
            <p>
              Affordability in interior design is often misunderstood. It is not about cutting corners; it is about making smart, intentional choices. At Space Build, every decision, whether related to material palettes, spatial planning, lighting, or furniture, is inspired by the client&rsquo;s lifestyle and the natural energy of the space.
            </p>
            <p>
              For Amroha&rsquo;s evolving residential landscape, we bring design solutions that respect regional sensibilities, modern needs, and practical comfort. We specialize in elevating compact homes, renovating heritage houses, and transforming new apartments with thoughtful detailing. The goal is always the same: create a home that looks luxurious, feels balanced, and fits the budget beautifully.
            </p>

            {/* Why Space Build */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Space Build is Amroha&rsquo;s Most Trusted Affordable Interior Design Partner
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">1. Design Intelligence that Saves Cost Long-Term</h4>
                <p>Affordable design is about spending right.</p>
                <p>Our design methodology focuses on:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Minimizing material waste through precision planning</li>
                  <li>Choosing alternatives that offer luxury finishes at lower cost</li>
                  <li>Creating built-in solutions that reduce future expenses</li>
                  <li>Using color psychology and directional awareness to enhance visual spaciousness</li>
                </ul>
                <p className="mt-2">This approach allows Amroha homeowners to experience premium aesthetics without overstretching resources.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">2. MahaVastu-Aligned, Wellness-Centric Spaces</h4>
                <p>Subtle yet powerful, MahaVastu principles guide our layouts, color choices, and room utilities. There is no superstition, no fear—just practical energy alignment supported by the 5 elements and spatial flow.</p>
                <p>For example:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>We strengthen the North-East zone with calm tones to support clarity and wellbeing.</li>
                  <li>The South-West zone is designed with grounding materials, stable furniture, and warm textures that bring emotional solidity.</li>
                  <li>Kitchens in the South-East are enhanced with muted fire tones for vitality.</li>
                </ul>
                <p className="mt-2">Residents experience greater harmony, productivity, and emotional balance simply by living in a thoughtfully aligned home.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">3. Tailored for Amroha&rsquo;s Lifestyle &amp; Local Architecture</h4>
                <p>Amroha homes often blend traditional layouts with modern aspirations. We bring the sensitivity to work with both. Whether it&rsquo;s optimizing natural light in narrow plots, enhancing airflow in older constructions, or creating multifunctional areas for extended families, our solutions are contextual and grounded in everyday practicality.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">4. Transparent Pricing with No Hidden Surprises</h4>
                <p>Space Build believes affordability must come with transparency.</p>
                <p>Our pricing structure is simple:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Clear design fee</li>
                  <li>Clear BOQ</li>
                  <li>Clear material selection guidance</li>
                  <li>Clear timelines</li>
                </ul>
                <p className="mt-2">This is why families in Amroha trust us, because they know exactly what they are paying for and how every rupee adds value to their home.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">5. A Modern Aesthetic Rooted in Emotional Warmth</h4>
                <p>Our design language is modern yet timeless. Ivory, taupe, sand, and muted beige form the base palette, layered with textures, subtle accents, and soft lighting. Every room is crafted to feel warm, personal, and emotionally grounding.</p>
                <p className="mt-2">Your home should not only photograph beautifully—it should feel like a sanctuary.</p>
              </div>
            </div>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Affordable Interior Design Solutions for Amroha
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Space Planning &amp; Layout Optimization</strong> – We maximize every inch through strategic zoning, open layouts, and furniture placement. The outcome: homes that feel larger, calmer, and more functional.</li>
              <li><strong>Kitchen &amp; Wardrobe Design</strong> – We create efficient, elegant, and budget-friendly modular solutions in line with Amroha&rsquo;s daily usage patterns. Durable materials, ergonomic planning, and stylish finishes ensure longevity without overspending.</li>
              <li><strong>Living &amp; Dining Makeovers</strong> – Curated lighting, layered textures, and smart furniture choices create premium-looking spaces even within modest budgets.</li>
              <li><strong>Bedroom Styling &amp; Renovation</strong> – Soft tones, grounding elements, and Vastu-informed layouts enhance rest, romance, and emotional wellbeing.</li>
              <li><strong>Material &amp; Colour Consultation</strong> – We guide you in selecting cost-effective but visually rich materials, tiles, laminates, fabrics, wallpapers, ensuring world-class aesthetics at attainable prices.</li>
            </ol>

            {/* Method */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Space Build Keeps Design Affordable Without Losing Luxury
            </h3>
            <p>The Space Build Method&trade; – A three-layered approach that blends design excellence with practical efficiencies:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4 mt-4">
              <li><strong>Spatial Flow Mapping</strong> – Ensures every room supports its intended activity.</li>
              <li><strong>Material Intelligence</strong> – Focuses on tasteful selections that balance elegance and economy.</li>
              <li><strong>Energy Alignment</strong> – Subtle MahaVastu integration enhances emotional harmony.</li>
            </ol>
            <p className="mt-4">This method allows us to serve as the most reliable and cost-efficient interior design partner in Amroha.</p>

            {/* Who We Are */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              A Design Experience Built on Trust
            </h3>
            <p>
              Our founders, trained in MahaVastu, architectural photography, spatial flow design, and material curation, bring their deep expertise into every project. With projects across Delhi NCR, Noida, Moradabad, Rampur, and now expanding to Amroha, Space Build Studio stands as a brand defined by craftsmanship, clarity, and quiet luxury.
            </p>
            <p>
              Our clients appreciate that we listen deeply, design intelligently, and execute with intention.
            </p>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Connect With Space Build Studio Today
            </h3>
            <div className="space-y-2">
              <p>To design a home that feels aligned, intentional, visually luxurious, and comfortably within budget, connect with Space Build Studio, your trusted affordable interior designer in Amroha.</p>
              <p>Connect with our experts today at <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">spacebuild.india@gamil.com</a>.</p>
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
