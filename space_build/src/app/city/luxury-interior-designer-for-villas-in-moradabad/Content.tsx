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
          

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Crafting Elegant & Timeless Interiors for Villas
            </h3>
            <p>
              Villas represent space, status, and comfort. To design a villa&apos;s interior is to create an immersive, layered environment that balances grandeur with livability. At Vasterior – Luxury Interior Designer for Villas in Moradabad, UP, we specialize in turning your villa into a masterpiece through bespoke design, luxury finishes, and seamless execution.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Villa Interiors in Moradabad
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Villa-Focused Expertise</h3>
                <p>We understand the scale, nuances, and challenges of designing large residences and villas.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Luxury Themes & Customization</h3>
                <p>From contemporary opulence to classic elegance—each villa is unique and curated.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Premium Materials & Detailing</h3>
                <p>Marble, designer lighting, imported fixtures, custom millwork—only the best.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vastu + Aesthetics</h3>
                <p>We integrate Vastu principles without compromising on style.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Full Lifecycle Execution</h3>
                <p>Concept, design, procurement, site management, finishing—handled end to end.</p>
              </div>
            </div>

            {/* Our Luxury Interior Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Luxury Interior Services for Villas
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Grand Living Rooms & Double-Height Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Dramatic ceilings, sculptural features, statement lighting</li>
                  <li>Designer walls with texture, veneers, or natural stone</li>
                  <li>Flow with outdoor zones, terraces, and lounges</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dining & Entertaining Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Formal dining halls, wine rooms, bars, lounge zones</li>
                  <li>Premium furniture, ambient lighting, artistic backdrops</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Bedrooms & Suites</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Master suites with private lounges, walk-in closets</li>
                  <li>En-suite bathrooms with spa-inspired themes</li>
                  <li>Ambient lighting, sound control, and refined details</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kitchens & Butler&apos;s Pantries</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Gourmet modular kitchens with luxury appliances</li>
                  <li>Countertops in quartz, marble, exotic stone</li>
                  <li>Custom cabinetry, concealed hardware, service zones</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Bathrooms & Wellness Zones</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Spa, steam, and rain showers</li>
                  <li>Premium fixtures, natural stone surfaces, backlit mirrors</li>
                  <li>Vanity areas, warm lighting, and thoughtful layouts</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Home Theaters & Entertainment Rooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Acoustic treatment, custom seating, ambient environment</li>
                  <li>Integrated AV systems, smart control panels</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Outdoor Living & Terraces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Lounge zones, pergolas, garden seating</li>
                  <li>Mood lighting, water features, connection with interiors</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Corridors, Staircases & Feature Zones</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Sculptural staircases, elevator areas, gallery walls, atriums</li>
                </ul>
              </div>
            </div>

            {/* Our Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Vision & Discovery</strong> — Understanding your villa&apos;s architecture, lifestyle, and vision</li>
              <li><strong>Concept & Theme Development</strong> — Mood boards, reference styles, materials</li>
              <li><strong>3D Visualization & Walkthrough</strong> — Detailed previews of interiors before execution</li>
              <li><strong>Material Selection & Procurement</strong> — Premium sourcing locally and globally</li>
              <li><strong>Execution & Supervision</strong> — On-site craftsmanship, quality checks, finishing</li>
              <li><strong>Handover & Support</strong> — Final walkthrough, adjustments, and aftercare</li>
            </ul>

            {/* Advantages */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Advantages of Luxury Villa Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Statement of Excellence</strong> — Interiors that reflect prestige and elegance</li>
              <li><strong>Value Addition</strong> — Luxury villas command a premium in real estate</li>
              <li><strong>Refined Living Experience</strong> — Harmonious environments, comfort & style</li>
              <li><strong>Durability</strong> — Premium materials are built to last</li>
              <li><strong>Energy & Harmony</strong> — Designs that honor both aesthetics and Vastu balance</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior designed our villa interiors in Moradabad with unmatched detail and elegance. Every corner feels luxe, yet comfortable.&quot; — Rajat & Priya Mehra
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;They created a dream home for us—luxurious living rooms, spa bathrooms, serene terraces. Absolutely worth every rupee.&quot; — Anita Kapoor
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Luxury Interior Designer for Villas in Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you only do villas or other homes as well?</h3>
                <p>A: We design all types—flats, villas, kothis, offices. But villa projects are our signature forte.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Are luxury villa interiors extremely expensive?</h3>
                <p>A: They can be, but we offer tiers of luxury—design your project according to your budget and vision.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: How long does villa interior design take?</h3>
                <p>A: Depending on size and complexity, 12–20 weeks or more is common.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Do you integrate smart home systems?</h3>
                <p>A: Absolutely. Automation, lighting control, climate, audio–visual—all can be part of your design.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Will Vastu also be part of the design?</h3>
                <p>A: Yes, Vasterior ensures that even high-end villa projects follow Vastu principles when possible.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Luxury Interior Designer for Villas in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gmail.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Crafting Luxury Villa Interiors in Moradabad with Vision, Opulence & Harmony
            </p>
          </div>

          <PostNavigation slug="luxury-interior-designer-for-villas-in-moradabad-up" />
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
