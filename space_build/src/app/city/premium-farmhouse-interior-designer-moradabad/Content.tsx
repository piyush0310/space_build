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
              Transforming Farmhouses into Premium Lifestyle Retreats
            </h3>
            <p>
              Farmhouses are not just weekend getaways — they are sanctuaries of peace, family bonding, and luxury living. Designing a farmhouse requires a very different sensibility compared to city homes: more open planning, natural material use, rustic-meets-modern themes, and a deep focus on comfort. At Vasterior – Premium Farmhouse Interior Designer in Moradabad, UP, we create interiors that reflect the serenity of countryside living, while offering the elegance and detail of premium luxury design.
            </p>

            {/* Why Farmhouse Interiors Demand a Different Approach */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Farmhouse Interiors Demand a Different Approach
            </h2>
            <p>
              Unlike villas or apartments, farmhouses are surrounded by greenery, open skies, and sprawling land. Interiors here must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Blend with Nature</strong> – Use natural woods, stones, fabrics, and textures.</li>
              <li><strong>Prioritize Comfort</strong> – Large lounges, cozy corners, verandas, and outdoor kitchens.</li>
              <li><strong>Balance Rustic & Luxury</strong> – Raw finishes meet premium lighting and modern furniture.</li>
              <li><strong>Celebrate Family & Gatherings</strong> – Farmhouses are built for relaxation, hosting, and events.</li>
              <li><strong>Durability</strong> – Designs must withstand countryside climate (humidity, dust, open-air).</li>
            </ul>

            {/* Our Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Premium Farmhouse Design Services in Moradabad
            </h2>
            <p>We bring a signature premium touch to every farmhouse project, making it both rustic and refined.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Living & Drawing Rooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Double-height lounges with natural wood ceilings.</li>
                  <li>Large sectional sofas, fireplaces, and earthy décor.</li>
                  <li>Premium lighting fixtures that blend rustic charm with luxury.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Bedrooms & Private Suites</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cozy yet premium interiors with wood, stone, and warm lighting.</li>
                  <li>Walk-in wardrobes and luxury bathrooms.</li>
                  <li>Balconies/terraces with nature-facing seating.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Dining & Kitchens</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Farmhouse-style dining halls with long wooden tables.</li>
                  <li>Premium modular kitchens with rustic finishes and imported fittings.</li>
                  <li>Outdoor/secondary kitchens for barbecues and family gatherings.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Bathrooms & Wellness Zones</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Natural stone sinks, spa-inspired showers, and wooden accents.</li>
                  <li>Bathtubs with countryside views.</li>
                  <li>Premium fittings that combine comfort and style.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Outdoor & Semi-Open Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Verandas with wooden decks and swing seating.</li>
                  <li>Pergola-covered terraces with mood lighting.</li>
                  <li>Poolside lounges and landscaped gardens.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Entertainment & Multi-Purpose Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Game rooms, lounges, and indoor courtyards.</li>
                  <li>Home theaters styled with rustic-luxury balance.</li>
                  <li>Dedicated party zones or farm-to-table dining setups.</li>
                </ul>
              </div>
            </div>

            {/* Our Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process for Premium Farmhouse Interiors
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Lifestyle Study</strong> – Understanding whether you want a farmhouse for weekend retreats, full-time living, or entertaining.</li>
              <li><strong>Concept Development</strong> – Rustic-modern, vintage-luxury, or contemporary-country themes tailored for you.</li>
              <li><strong>3D Visualization</strong> – Realistic previews of how your farmhouse will look.</li>
              <li><strong>Material Selection</strong> – Locally sourced woods, stones, combined with premium imports.</li>
              <li><strong>Execution</strong> – Balancing raw finishes with refined detailing.</li>
              <li><strong>Handover & Styling</strong> – Final touches with furniture, lighting, and outdoor integration.</li>
            </ul>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior as Premium Farmhouse Interior Designer in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Specialized in Large Residences</strong> – Experience in villas, kothis, and farmhouses.</li>
              <li><strong>Premium Rustic-Luxury Balance</strong> – No over-designing, just natural elegance.</li>
              <li><strong>End-to-End Service</strong> – From conceptual planning to furniture sourcing.</li>
              <li><strong>Local & Global Material Expertise</strong> – Using sustainable and premium finishes.</li>
              <li><strong>Trusted by Families Across UP</strong> – Recognized for personalized, high-quality projects.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Premium Farmhouse Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Closer to Nature</strong> – Interiors that breathe with their surroundings.</li>
              <li><strong>Premium Lifestyle</strong> – Rustic charm paired with luxurious detailing.</li>
              <li><strong>Perfect for Gatherings</strong> – Spacious, welcoming layouts for family and friends.</li>
              <li><strong>Durability & Functionality</strong> – Built to last in open countryside conditions.</li>
              <li><strong>Higher Property Value</strong> – Premium farmhouses command strong investment returns.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our farmhouse near Moradabad was designed by Vasterior. The balance of rustic charm and luxury finishes is perfect — it feels warm yet premium.&quot; – Sandeep & Radhika Jain
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted a farmhouse for weekend getaways. Vasterior gave us cozy interiors, a premium kitchen, and amazing outdoor lounges.&quot; – Vivek & Nisha Agarwal
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Premium Farmhouse Interior Designer Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: What&apos;s the difference between farmhouse interiors and villa interiors?</h3>
                <p>A: Villas are more formal; farmhouses are designed to feel natural, rustic, and connected with the outdoors.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Do you design both modern and traditional farmhouses?</h3>
                <p>A: Yes, from rustic countryside to contemporary-luxury farmhouses, we cover both.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can you design outdoor kitchens and lounges for farmhouses?</h3>
                <p>A: Absolutely. Outdoor zones are integral to farmhouse design.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does a farmhouse project take?</h3>
                <p>A: Depending on scale, usually 14–20 weeks.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Can premium farmhouse interiors follow Vastu?</h3>
                <p>A: Yes, we integrate Vastu seamlessly into farmhouse layouts.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Premium Farmhouse Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Premium Farmhouse Interiors in Moradabad That Combine Rustic Charm with Luxury Living.
            </p>
          </div>

          <PostNavigation slug="premium-farmhouse-interior-designer-moradabad-up" />
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
