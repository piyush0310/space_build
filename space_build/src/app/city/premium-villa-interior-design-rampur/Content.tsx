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
            Premium Villa Interior Design Rampur – Vasterior’s Luxury + Vastu Integrated Living Experience
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Rampur Villas Need Thoughtful, Energy-Aligned Design
            </h3>
            <p>
              Vasterior believes that a home is never just a structure—it is a living canvas of memories, aspirations, emotions, and energies. In a city like Rampur, where sprawling villas blend heritage charm with modern sensibilities, interior design is not merely about aesthetics. It is about creating a harmonious spatial experience that elevates the way you live.
            </p>
            <p>
              Rampur’s villas come with generous layouts, private courtyards, multi-level zones, and unique architectural opportunities. But these very features also demand deeper planning—how the sun enters the house, how family members circulate through the space, how the five elements interact, and how the residence supports well-being.
            </p>
            <p>
              This is where Vasterior’s philosophy stands apart. We design villas that look luxurious, feel intentional, and flow energetically with precision.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – A Luxury Interior Design & Vastu Studio
            </h2>
            <p>
              Vasterior is a premium interior design and MahaVastu-led studio founded in Delhi NCR, now extending its signature design expertise to premium villas in Rampur. Our approach is rooted in timeless luxury, spatial clarity, material honesty, energy alignment, and client-centered storytelling.
            </p>
            <p>We believe every villa should reflect the family’s lifestyle, aspirations, and elemental harmony. Our design philosophy blends:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>High-end interior design</li>
              <li>MahaVastu 16-zone analysis</li>
              <li>Technical detailing & execution clarity</li>
              <li>Sensory comfort through colors, textures & lighting</li>
              <li>Mindful placement of activities, objects & utilities</li>
            </ul>
            <p>Your villa becomes more than beautiful—it becomes aligned with your identity and future direction.</p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as the Best Interior Designer in Rampur
            </h2>
            <p>Choosing Vasterior means choosing a partner who understands both luxury architecture and Vastu-conscious living. Here’s why Rampur villa owners trust us:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>End-to-end expertise: From concept to execution</li>
              <li>Vastu-aligned designs: No demolitions, fully scientific, energy-optimized</li>
              <li>Material intelligence: Sourcing premium stones, textures, woodwork & finishes</li>
              <li>Human-centric spaces: Designed for wellness, comfort & emotional resonance</li>
              <li>Personalized approach: Every zone is tailored to your family’s habits</li>
              <li>Modern + Traditional balance: Contemporary styling with Rampur’s cultural nuance</li>
              <li>Technical mastery: Lighting, storage, acoustics, zoning, ventilation, and spatial grids</li>
            </ul>
            <p>Your villa becomes visually compelling, functionally seamless, and energetically aligned.</p>

            {/* Signature Interior Design Approach */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Signature Interior Design Approach – The Vasterior Method
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Spatial Flow Design</strong> – We begin by understanding movement patterns—how a family naturally lives and navigates. Every door, corridor, and seating layout is placed to support effortless everyday living.
              </li>
              <li>
                <strong>Material Selection</strong> – Premium villas deserve timeless materials. We curate Italian & rainforest marble, hand-selected veneers, ivory-beige palettes, soft metallic accents, matte neutrals, and Vastu-aligned colors for each zone.
              </li>
              <li>
                <strong>Lighting Philosophy</strong> – Lighting is a mood-setter. For Rampur villas, we design cove lighting for spaciousness, task lighting for productivity, accent lighting for art & textures, natural light optimization, and layered lighting scenes for evenings.
              </li>
              <li>
                <strong>Customization & Detailing</strong> – From bespoke furniture to integrated storage to tailored room themes—every detail is designed specifically for your lifestyle.
              </li>
            </ol>

            {/* MahaVastu Integration */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu + Interior Design Integration – Vasterior’s Distinctive Advantage in Rampur
            </h2>
            <p>Vasterior doesn’t treat Vastu as a checkbox. We integrate MahaVastu deeply into the design process for a truly aligned villa. We evaluate:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>16 zones</li>
              <li>Activity-object-utility mapping</li>
              <li>Element balancing</li>
              <li>Astro-Vastu for individual family members</li>
              <li>Marma sensitivity</li>
              <li>Flow of sunlight, air, and fire</li>
              <li>Energy pathways and functional alignment</li>
            </ul>
            <p>This helps ensure peace in relationships, better health & sleep, financial clarity, emotional grounding, productivity & success, and a harmonious family environment. Your villa becomes a powerhouse of aligned living.</p>

            {/* Services Offered */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Services We Offer in Rampur
            </h2>
            <p>We provide a comprehensive suite of premium villa interior & Vastu services, including:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Vastu Yogdan (Free Wednesday Consultation)</strong> – A community service offered weekly for basic Vastu concerns.</li>
              <li><strong>Paid Vastu Consultation (₹50,000 per property)</strong> – Full MahaVastu analysis, reports, Astro-Vastu mapping, and remedies.</li>
              <li><strong>Vastu Styling</strong> – Aligning your existing villa using correct objects, colors, elements, and placements.</li>
              <li><strong>Interior Designing</strong> – Complete design solutions covering layouts & zoning, 3D renders, material palette, furniture detailing, lighting plans, wall & ceiling elevations, and execution documentation.</li>
              <li><strong>Spatial Flow Expertise</strong> – Designing movement, circulation, and usability within each zone.</li>
              <li><strong>Astro-Vastu Consultation</strong> – Aligning home energy with planetary placements of family members.</li>
              <li><strong>Drafting, Gridding & Survey</strong> – Technical documentation, marma mapping, devta grids, and on-site measurements.</li>
            </ol>

            {/* Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Process – How Vasterior Transforms a Rampur Villa
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Discovery & Visioning</strong> – We understand your villa, your lifestyle, and your goals.</li>
              <li><strong>Spatial & Vastu Diagnostics</strong> – We map all 16 zones, identify imbalances, and propose corrections.</li>
              <li><strong>Concept & Moodboards</strong> – We produce moodboards capturing luxury aesthetics, textures, and spatial emotion.</li>
              <li><strong>Technical Drawings</strong> – Layouts, ceiling plans, electrical mapping, elevations, furniture drawings.</li>
              <li><strong>Material & Lighting Curation</strong> – A curated blend of luxury materials and Vastu-aligned colors.</li>
              <li><strong>Execution Support</strong> – Vendor coordination, site visits, quality checks, supervision assistance.</li>
              <li><strong>Final Styling & Energy Alignment</strong> – Placement of décor, textures, art, and Vastu objects for balanced harmony.</li>
            </ol>

            {/* Project Possibilities */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Project Possibilities in Rampur
            </h2>
            <p>Whether you’re building new or renovating old, Vasterior brings its premium touch to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Luxury villas</li>
              <li>Farmhouses</li>
              <li>Independent bungalows</li>
              <li>Builder floors</li>
              <li>Heritage homes</li>
              <li>Large apartments</li>
              <li>Renovation-based transformations</li>
            </ul>
            <p>Each project is treated as a curated design journey.</p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Premium Villa Interior Design Rampur
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">1. Who is the best interior designer for villas in Rampur?</h3>
                <p>Vasterior is widely trusted for premium, Vastu-aligned villa interiors in Rampur due to its luxury detailing and scientific MahaVastu integration.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2. What is the cost of premium villa interior design in Rampur?</h3>
                <p>It depends on scope, materials, and customizations. Full projects begin at a minimum ₹50 Lakhs, with Vasterior’s service fee at 10%.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. Do you provide Vastu consultation along with interior design?</h3>
                <p>Yes. Every villa project includes Vastu diagnostics, element balancing, and Astro-Vastu recommendations.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. Can Vasterior redesign an existing villa without demolition?</h3>
                <p>Yes. We specialize in non-destructive Vastu corrections and aesthetic transformations.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. Do you work on villas under construction?</h3>
                <p>Absolutely. Early-stage involvement leads to better zoning, lighting, and structural-based decisions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">6. How long does it take to design a premium villa in Rampur?</h3>
                <p>Typically 45–75 days for design and documentation, depending on complexity.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Best Interior Designer for Villas in Rampur
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Rampur, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gamil.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>

            <p className="mt-4 font-semibold text-gray-900">
              Your villa is more than a residence—it is a legacy. A place where your family evolves, grows, and flourishes. If you are ready to transform your Rampur villa into a luxurious, Vastu-aligned, emotionally grounding space, Vasterior would be honoured to design this journey with you.
            </p>
            <p className="mt-1 font-semibold text-gray-900">
              Let’s create a home that supports your present and shapes your future.
            </p>
            <p className="mt-1 font-semibold text-gray-900">
              Call +917906086899 or mail us at <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 underline">spacebuild.india@gamil.com</a>.
            </p>
          </div>

          <PostNavigation slug="premium-villa-interior-design-rampur" />
        </div>

        {/* Form Section - Smart positioning with CSS order */}
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
