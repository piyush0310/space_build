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
              Designing Opulent, Thoughtful Interiors for Premium Living
            </h3>
            <p>
              Not every interior is about trends. Luxury homes demand a narrative, precision, and an elevated sensibility. At Vasterior – Interior Design for Luxury Homes in Moradabad, UP, we create interiors that distinguish your home as a work of art. Every room speaks your taste; every detail reflects excellence.
            </p>

            {/* Why Vasterior Leads */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Leads in Luxury Home Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Visionary Design</strong> – We think beyond finishes; our approach is about lifestyle and experience.</li>
              <li><strong>Exceptional Craftsmanship</strong> – Local artisans + skilled professionals deliver world-class finishes.</li>
              <li><strong>Material Excellence</strong> – Imported marbles, rare woods, bespoke fittings, custom textures.</li>
              <li><strong>Vastu-Sensitive Luxury</strong> – Harmonizing luxury layouts with energy flow techniques.</li>
              <li><strong>Full-Service Execution</strong> – We manage procurement, logistics, installation, and aftercare.</li>
            </ul>

            {/* Our Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Luxury Home Interior Services
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Grand Living & Drawing Rooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Expansive layouts, sculptural ceilings, statement lighting</li>
                  <li>Wall features: veneers, brass inlays, textured plaster</li>
                  <li>Seamless transitions to gardens, lounges, terraces</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Master Suites & Guest Suites</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Walk-ins, lounge nooks, ambient lighting</li>
                  <li>Mood-controlled systems, privacy zones</li>
                  <li>Luxury fabrics, wall panels, rich finishes</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dining & Entertainment Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Elegant dining halls, wine walls, bar zones</li>
                  <li>Flexibility in seating, refined lighting choreography</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Gourmet Kitchens</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Chef-grade appliance integration, exotic stone surfaces</li>
                  <li>Hidden storage, smart layouts, island counters</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Bathrooms & Spa Lounges</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Rain systems, steam showers, designer fixtures</li>
                  <li>Backlit glass walls, marble, natural stone themes</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Home Theater & Game Rooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Acoustic treatments, concealed tech, ambient lighting</li>
                  <li>Mood zones matched with design narrative</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Outdoor Living & Terraces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Lounges, fire pits, garden seating</li>
                  <li>Seamless indoor–outdoor integration, lighting magic</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Corridors, Staircases & Feature Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Sculptural staircases, light wells, atriums</li>
                  <li>Gallery walls, art niches, thematic zones</li>
                </ul>
              </div>
            </div>

            {/* Our Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process for Designing Luxury Homes
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Discovery & Storytelling</strong> – Understanding how you live, breathe, and feel at home</li>
              <li><strong>Concept Narratives</strong> – Theme direction & mood flow throughout the home</li>
              <li><strong>3D Immersive Renderings</strong> – Walk through your home before any work starts</li>
              <li><strong>Curated Material Sourcing</strong> – World-class finishes, curated globally</li>
              <li><strong>Precision Execution</strong> – Craftsmanship, QA, alignment, finishing touches</li>
              <li><strong>Handover & Lifestyle Integration</strong> – Styling, lighting balance, maintenance support</li>
            </ul>

            {/* Why Luxury Home Owners Choose Us */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Luxury Home Owners in Moradabad Choose Us
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Deep familiarity with local architecture, climate & culture</li>
              <li>A portfolio of luxury residences across UP & Moradabad</li>
              <li>Trust, transparency & respect for timeline and budget</li>
              <li>A design identity that&apos;s personalized — not copied</li>
              <li>After-support and care for your investment</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Luxury Home Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A home that inspires admiration & comfort</li>
              <li>Long-term durability with premium materials</li>
              <li>Emotional connection—spaces designed for you</li>
              <li>Higher resale value for a distinguished property</li>
              <li>The joy of living in an environment that uplifts</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior&apos;s design made our luxury home in Moradabad into a statement. Every corner feels curated and lived in.&quot; — Mr & Mrs Kapoor
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;From bespoke living hall to spa bathrooms—everything is elegant, functional, and timeless.&quot; — Arun & Priya Sethi
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Interior Design for Luxury Homes in Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Is &quot;luxury&quot; just expensive materials?</h3>
                <p>A: Not at all. Luxury is in design narrative, detail, precision, and how each space feels.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Can an existing home be upgraded to luxury?</h3>
                <p>A: Definitely. With redesign, finish upgrades, and careful planning, many homes are transformed.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: How do you integrate Vastu in luxury projects?</h3>
                <p>A: We map energy flows, directions, and combine them with your design vision.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does a full luxury home project take?</h3>
                <p>A: Depending on size & scope—12–20 weeks is typical, sometimes more for estates.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you source materials globally?</h3>
                <p>A: Yes, when needed. But we always balance with high-quality local sourcing to optimize cost and sustainability.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Interior Design for Luxury Homes in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Shaping Luxury Homes in Moradabad with Vision, Integrity & Design Distinction
            </p>
          </div>

          <PostNavigation slug="interior-design-for-luxury-homes-in-moradabad-up" />
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
