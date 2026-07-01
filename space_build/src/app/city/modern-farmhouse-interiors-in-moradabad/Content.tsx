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
              Where Rustic Charm Meets Modern Elegance
            </h3>
            <p>
              A farmhouse is more than a weekend retreat — it&apos;s a space to unwind, host family gatherings, and connect with nature. Today, the design preference has shifted from purely rustic to modern farmhouse interiors that blend warm textures, open layouts, and contemporary functionality. At Vasterior – Modern Farmhouse Interiors in Moradabad, UP, we create homes that reflect countryside serenity while embracing modern sophistication.
            </p>

            {/* What Defines Modern Farmhouse Interiors */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Defines Modern Farmhouse Interiors?
            </h2>
            <p>
              Unlike traditional rustic homes, modern farmhouse interiors combine comfort, elegance, and clean design lines. Key elements include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Neutral Palettes</strong> – Whites, beiges, soft greys, paired with natural wood.</li>
              <li><strong>Exposed Materials</strong> – Wood beams, stone walls, shiplap, and brick accents.</li>
              <li><strong>Open Floor Plans</strong> – Large living spaces connected to kitchens and dining.</li>
              <li><strong>Functional Luxury</strong> – Premium modular kitchens, spa-like bathrooms, smart technology.</li>
              <li><strong>Indoor–Outdoor Harmony</strong> – Large windows, verandas, decks, and garden seating.</li>
            </ul>

            {/* Our Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Modern Farmhouse Interior Design Services in Moradabad
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Living Rooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Double-height ceilings with exposed beams.</li>
                  <li>Cozy furniture, neutral fabrics, and rustic-luxury accents.</li>
                  <li>Stone fireplaces or feature walls with premium finishes.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Bedrooms & Guest Suites</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Minimalist yet warm interiors with layered fabrics.</li>
                  <li>Farmhouse-style wooden furniture blended with modern lighting.</li>
                  <li>Balconies and terraces opening to natural views.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Kitchens & Dining Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Premium modular kitchens with rustic cabinetry.</li>
                  <li>Quartz or stone countertops with farmhouse sinks.</li>
                  <li>Large dining tables with pendant lights and open layouts.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Bathrooms & Wellness Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Spa-like bathrooms with stone sinks, freestanding tubs.</li>
                  <li>Premium fixtures blending rustic textures with sleek finishes.</li>
                  <li>Natural tones for relaxation.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Outdoor & Semi-Open Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Verandas with lounge furniture.</li>
                  <li>Pergola-covered patios, firepits, and landscaped gardens.</li>
                  <li>Poolside or deck-side modern farmhouse lounges.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Entertainment & Multi-Use Zones</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Game rooms, home theaters, and rustic-modern lounges.</li>
                  <li>Indoor courtyards with skylights and greenery.</li>
                </ul>
              </div>
            </div>

            {/* Our Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process for Modern Farmhouses
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Lifestyle Understanding</strong> – Whether it&apos;s for full-time living or weekend retreats.</li>
              <li><strong>Concept Development</strong> – Blending rustic textures with modern minimalism.</li>
              <li><strong>Visualization</strong> – 3D renders showing the rustic-modern harmony.</li>
              <li><strong>Material Curation</strong> – Locally sourced wood and stone, balanced with premium imports.</li>
              <li><strong>Execution & Detailing</strong> – On-site craftsmanship with layered finishes.</li>
              <li><strong>Styling & Handover</strong> – Final touches with lighting, art, and accessories.</li>
            </ul>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Modern Farmhouse Interiors in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Rustic + Modern Expertise</strong> – Specialists in fusing natural charm with sleek design.</li>
              <li><strong>Premium Yet Practical</strong> – Durable interiors suited for countryside living.</li>
              <li><strong>Full-Service Execution</strong> – From layouts to outdoor lounges, all handled seamlessly.</li>
              <li><strong>Local Sensibility</strong> – Designs inspired by Moradabad&apos;s heritage and landscape.</li>
              <li><strong>Trusted Portfolio</strong> – Recognized across UP for farmhouse, villa, and luxury interiors.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Modern Farmhouse Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Warm Yet Sophisticated Homes</strong> – Comfortable for families, elegant for guests.</li>
              <li><strong>Closer to Nature</strong> – Large windows and natural finishes create harmony.</li>
              <li><strong>Perfect for Gatherings</strong> – Spacious designs made for family and social events.</li>
              <li><strong>Durability</strong> – Interiors built for long-term farmhouse living.</li>
              <li><strong>Prestige Value</strong> – Modern farmhouses stand out as lifestyle investments.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our farmhouse near Moradabad was redesigned with a modern style by Vasterior. It feels rustic yet premium — exactly what we wanted.&quot; – Rohit & Anjali Sinha
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;The open kitchen, double-height living area, and verandas are stunning. Vasterior brought our dream modern farmhouse to life.&quot; – Kunal & Pooja Jain
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Modern Farmhouse Interiors Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: How is a modern farmhouse different from a traditional one?</h3>
                <p>A: Modern farmhouses blend rustic materials with minimalist lines and modern luxury features.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Do you design outdoor lounges and decks for farmhouses?</h3>
                <p>A: Yes, outdoor spaces are a key part of our modern farmhouse projects.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can a farmhouse be both rustic and luxurious?</h3>
                <p>A: Absolutely. That&apos;s the essence of modern farmhouse interiors — cozy charm with premium finishes.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does a modern farmhouse project take?</h3>
                <p>A: Typically 14–20 weeks, depending on customization and scale.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you use Vastu principles in farmhouse design?</h3>
                <p>A: Yes, we align farmhouse layouts with Vastu for positivity and harmony.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Modern Farmhouse Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gmail.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Creating Modern Farmhouse Interiors in Moradabad That Blend Rustic Charm with Contemporary Luxury.
            </p>
          </div>

          <PostNavigation slug="modern-farmhouse-interiors-in-moradabad-up" />
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
