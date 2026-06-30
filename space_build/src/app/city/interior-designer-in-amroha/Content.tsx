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
            Interior Designer in Amroha – Luxury Interior Design & MahaVastu-Aligned Spaces by Vasterior Studio
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior Studio brings a new dimension of luxury interior design to Amroha, where refined aesthetics meet intentional energy alignment. With a philosophy rooted in timeless design, spatial harmony, and modern craftsmanship, Vasterior transforms homes not just into beautiful spaces, but into environments that elevate the way you live. Our approach blends premium materials, thoughtful detailing, and MahaVastu-based spatial flow, ensuring every room feels serene, balanced, and deeply personal.
            </p>
            <p>
              For discerning homeowners in Amroha seeking elegance, alignment, and a global design language, Vasterior creates interiors that feel as good as they look.
            </p>

            {/* Redefining Luxury */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Redefining Luxury Interiors in Amroha
            </h3>
            <p>
              Amroha is evolving, families are investing in homes that reflect their aspirations, individuality, and lifestyle. Vasterior steps into this landscape with designs that bring metropolitan sophistication to the heart of the city, while retaining the warmth and cultural essence of its people.
            </p>
            <p>
              Every project is treated as a bespoke canvas. Clean lines, natural palettes, curated textures, handcrafted materials, and refined lighting come together in a symphony of calm. Our interiors reflect a quiet luxury; elegant, immersive, and intentionally composed.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Interior Design Philosophy
            </h3>
            <p>
              At Vasterior, design is more than decoration, it is an experience. Three pillars guide every project:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Spatial Flow & Functionality</strong> – Spaces must breathe, support movement, and intuitively serve daily life. Our layouts are fluid, practical, and aesthetically timeless.</li>
              <li><strong>Materiality & Craftsmanship</strong> – We curate the finest woods, stones, metals, fabrics, and finish palettes. Every detail, whether a hand-stitched leather panel or a grain-matched wardrobe shutter, is executed with precision and artistry.</li>
              <li><strong>Energy Alignment (MahaVastu)</strong> – Without invoking superstition, we apply directional logic, elemental balance, and intuitive zoning to design homes that feel grounded, positive, and emotionally harmonious. Northeast remains light and creative; Southwest is kept strong and stable; Fire zones are planned with intention.</li>
            </ul>
            <p>
              This philosophy ensures that your home in Amroha is not only visually stunning, but emotionally comforting and energetically aligned.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design Services in Amroha
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Full Luxury Home Interior Design</h3>
                <p>End-to-end planning, concept development, detailed drawings, materials, styling, and turnkey execution.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Room-Specific Makeovers</h3>
                <p>Living rooms, bedrooms, kitchens, home offices, pooja rooms, entertainment rooms, lounges, and more.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. MahaVastu-Based Spatial Planning</h3>
                <p>Zoning, layout optimisation, elemental balancing, activity alignment, and subconscious energy flow strategies.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Renovation & Re-Styling</h3>
                <p>Transform existing spaces into modern, elegant, and functional interiors.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Custom Furniture & Lighting Design</h3>
                <p>Signature furniture pieces crafted with aesthetic precision and ergonomic ease.</p>
              </div>
            </div>

            {/* Why Choose */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Is the Preferred Interior Designer in Amroha
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Luxury Meets Meaning</strong> – A Vasterior home is not defined by how expensive it looks—but by how intentionally it is designed.</li>
              <li><strong>Editorial-Grade Aesthetics</strong> – Soft palettes, sculptural forms, warm textures, and cinematic lighting echo the editorial world of AD, Elle Decor, and Vogue Living.</li>
              <li><strong>Founder-Led Creatorship</strong> – Concept direction by Chitresh Jain and Charu Shukla, who blend artistic intuition with MahaVastu precision.</li>
              <li><strong>Premium Execution</strong> – From stone craftsmanship to bespoke cabinetry, every aspect reflects integrity, sophistication, and long-term durability.</li>
              <li><strong>Seamless Experience</strong> – Clear communication, transparent processes, and meticulous site coordination make your design journey effortless.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process - From Vision to Reality
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Step 1: Discovery Consultation</strong> – Understanding your lifestyle, aspirations, space constraints, and long-term vision.</li>
              <li><strong>Step 2: Spatial Design & Vastu Alignment</strong> – Crafting layouts rooted in functionality, energy balance, and comfort.</li>
              <li><strong>Step 3: Material & Concept Development</strong> – Mood boards, palettes, finishes, inspirations, and technical drawings.</li>
              <li><strong>Step 4: Execution with Precision</strong> – Vendor management, site supervision, quality checks, and on-time delivery.</li>
              <li><strong>Step 5: Styling & Handover</strong> – Final touches that bring emotion, identity, and warmth to your home.</li>
            </ol>

            {/* Contact */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior Studio Today
            </h2>
            <div className="space-y-2">
              <p>To design a home in Amroha that feels aligned, intentional, and beautifully yours, connect with Vasterior Studio today.</p>
              <p>Your space deserves a story, and we craft it with elegance.</p>
              <p><strong>📞 Phone:</strong> +917906086899</p>
              <p><strong>📧 Email:</strong> <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">spacebuild.india@gamil.com</a></p>
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
