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
              Contemporary Elegance, Global Inspiration, Local Sensibilities
            </h3>
            <p>
              Luxury today is no longer just about chandeliers and marble floors. It is about clean lines, smart technology, natural light, and spaces that adapt to lifestyle. At Vasterior – Modern Interior Design for Luxury Homes in Moradabad, UP, we blend international design trends with cultural depth to create homes that are stylish, functional, and truly timeless.
            </p>

            {/* What Defines Modern Luxury */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Defines &quot;Modern Luxury&quot; in Homes?
            </h2>
            <p>Modern luxury is subtle, not loud. It uses:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Minimalist Forms</strong> – Straight lines, uncluttered layouts, open-plan living.</li>
              <li><strong>Premium Materials</strong> – Quartz, natural wood, metal accents, eco-friendly finishes.</li>
              <li><strong>Technology Integration</strong> – Smart lighting, automation, and climate control.</li>
              <li><strong>Light & Space</strong> – Maximizing daylight, large windows, glass partitions.</li>
              <li><strong>Personalization</strong> – Homes designed for lifestyle, not just looks.</li>
            </ul>
            <p className="mt-4">
              In Moradabad, where families value both heritage and modernity, this style brings balance: understated sophistication with comfort at its core.
            </p>

            {/* Our Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Modern Luxury Home Design Services
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Living Rooms & Lounges</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Open-plan layouts with seamless flow.</li>
                  <li>Accent walls with wood, textured plaster, or metal details.</li>
                  <li>Furniture customized for comfort + aesthetic appeal.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Bedrooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Minimalist yet cozy spaces with mood lighting.</li>
                  <li>Smart storage integrated into wardrobes.</li>
                  <li>Statement headboards and layered fabrics.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Modern Kitchens</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Sleek modular kitchens with concealed hardware.</li>
                  <li>Quartz or Corian countertops with island setups.</li>
                  <li>Smart appliances and hidden storage solutions.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Bathrooms & Spa Corners</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Rain showers, glass partitions, stone basins.</li>
                  <li>Neutral tones with warm lighting for relaxation.</li>
                  <li>Premium fittings that blend simplicity with luxury.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Dining Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Minimal yet elegant dining halls with designer lighting.</li>
                  <li>Flexible furniture for small family meals and large gatherings.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Home Offices & Study Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ergonomic setups for productivity.</li>
                  <li>Neutral backdrops for video conferencing.</li>
                  <li>Natural light maximized for focus and energy.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">7. Outdoor Zones & Balconies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Wooden decks, lounge seating, and greenery.</li>
                  <li>Mood lighting for evenings.</li>
                  <li>Indoor-outdoor transitions designed for comfort.</li>
                </ul>
              </div>
            </div>

            {/* Our Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process for Modern Luxury Interiors
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation</strong> – Understanding family needs, lifestyle, and design vision.</li>
              <li><strong>Concept Development</strong> – Creating modern design narratives and mood boards.</li>
              <li><strong>3D Visualization</strong> – Realistic previews of the proposed layouts.</li>
              <li><strong>Material Selection</strong> – Premium but practical finishes curated for durability.</li>
              <li><strong>Execution</strong> – On-site supervision to ensure precision.</li>
              <li><strong>Styling & Handover</strong> – Adding art, décor, and final touches.</li>
            </ul>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior for Modern Luxury Home Design in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Trend Awareness</strong> – We follow global design movements but adapt them locally.</li>
              <li><strong>Smart & Sustainable</strong> – Modern homes designed with technology and eco-friendly finishes.</li>
              <li><strong>Bespoke Execution</strong> – No two homes are alike; every project is custom.</li>
              <li><strong>Luxury That Lasts</strong> – Materials and finishes chosen for durability.</li>
              <li><strong>Balanced Design</strong> – Blending minimalism with Vastu compliance where needed.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Modern Interior Design for Luxury Homes
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Enhanced Lifestyle</strong> – Open, airy, tech-enabled homes that suit modern living.</li>
              <li><strong>Prestige Factor</strong> – A modern luxury home is a symbol of global taste.</li>
              <li><strong>Practical Elegance</strong> – Easy-to-maintain, clutter-free interiors.</li>
              <li><strong>Wellness-Centered</strong> – More natural light, better ventilation, and thoughtful layouts.</li>
              <li><strong>Future-Ready</strong> – Spaces designed for adaptability and sustainability.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior transformed our luxury home in Moradabad with a modern design approach. The spaces are clean, functional, yet warm.&quot; – Ritika & Ajay Sethi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our kitchen and living area now feel like a New York loft, but perfectly adapted to our family life. Amazing work!&quot; – Ankur & Nidhi Sharma
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Modern Interior Design for Luxury Homes in Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: How is modern luxury different from traditional luxury?</h3>
                <p>A: Traditional luxury is ornate and heavy; modern luxury is sleek, minimal, and technology-driven.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Can modern interiors still include cultural or heritage elements?</h3>
                <p>A: Yes, we often blend brass art, carved wood, or local craft with modern backdrops.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Is modern luxury only for large villas?</h3>
                <p>A: Not at all. Flats, 3BHKs, and compact homes can also be modern and premium.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does a modern luxury project take?</h3>
                <p>A: Usually 10–16 weeks, depending on scale and customization.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you design smart home features?</h3>
                <p>A: Yes, we integrate automation, lighting systems, and home theaters seamlessly.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Modern Interior Design for Luxury Homes in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Creating Modern Luxury Homes in Moradabad with Elegance, Innovation & Precision.
            </p>
          </div>

          <PostNavigation slug="modern-interior-design-for-luxury-homes-moradabad-up" />
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
