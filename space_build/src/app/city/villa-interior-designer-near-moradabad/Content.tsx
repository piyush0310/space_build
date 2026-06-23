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
              Premium Villa Interiors, Just Around the Corner
            </h3>
            <p>
              When you search for a villa interior designer near Moradabad, UP, you&apos;re not just looking for someone who can fill a house with furniture. You want a partner who understands scale, culture, lifestyle, and luxury — all while being close enough to deliver hands-on supervision and local expertise. At Vasterior, we specialize in designing bespoke villa interiors that combine elegance, comfort, and modern sophistication for families in and around Moradabad.
            </p>

            {/* Why Location Matters */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Location Matters in Villa Interior Design
            </h2>
            <p>Hiring a local or nearby interior designer offers several advantages:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>On-Site Supervision</strong> – Regular visits ensure every detail is executed perfectly.</li>
              <li><strong>Local Material Sourcing</strong> – Access to Moradabad&apos;s wood, brass, and craft traditions.</li>
              <li><strong>Cultural Understanding</strong> – Designs that reflect UP&apos;s heritage while embracing global trends.</li>
              <li><strong>Faster Turnaround</strong> – Easy coordination between client, contractor, and designer.</li>
              <li><strong>Cost Efficiency</strong> – Reduced logistics and optimized execution.</li>
            </ul>
            <p className="mt-4">
              With Vasterior based near you, villa owners get the best of premium design with local convenience.
            </p>

            {/* Our Expertise */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Expertise – Bespoke Villa Interiors
            </h2>
            <p>We create interiors that reflect your identity, lifestyle, and aspirations.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Living Rooms & Lounges</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Double-height spaces with statement chandeliers.</li>
                  <li>Feature walls with veneers, stone, or brass inlays.</li>
                  <li>Smart seating layouts for intimate gatherings or large events.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Bedrooms & Private Suites</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Walk-in wardrobes and luxury en-suites.</li>
                  <li>Cozy yet premium finishes with layered fabrics.</li>
                  <li>Balconies designed as private retreats.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Dining & Kitchens</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Formal dining halls with curated lighting and furniture.</li>
                  <li>Premium modular kitchens with imported fittings.</li>
                  <li>Service kitchens for large family or staff support.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Bathrooms & Wellness Zones</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Spa-inspired designs with rain showers and bathtubs.</li>
                  <li>Premium fixtures paired with warm lighting.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Entertainment & Family Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Home theaters with acoustic planning.</li>
                  <li>Lounges, game rooms, or libraries.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Outdoor & Semi-Open Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Pergola-covered terraces, landscaped gardens.</li>
                  <li>Poolside seating and verandas for seasonal use.</li>
                </ul>
              </div>
            </div>

            {/* Our Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation</strong> – Understanding your villa&apos;s architecture and your family&apos;s lifestyle.</li>
              <li><strong>Conceptual Planning</strong> – Creating zoning maps, mood boards, and themes.</li>
              <li><strong>3D Visualization</strong> – Realistic previews before execution begins.</li>
              <li><strong>Material Selection</strong> – Premium, durable finishes sourced locally and globally.</li>
              <li><strong>Execution & Supervision</strong> – Site visits and quality checks throughout.</li>
              <li><strong>Final Styling</strong> – Décor, lighting, and accessories to complete the look.</li>
            </ul>

            {/* Why Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Preferred Villa Interior Designer Near Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Expertise</strong> – Deep understanding of Moradabad&apos;s architecture and resources.</li>
              <li><strong>Villa-Specific Experience</strong> – Proven work in large residences across UP.</li>
              <li><strong>Premium Quality</strong> – From imported marbles to bespoke furniture.</li>
              <li><strong>Cultural Balance</strong> – Designs that align with tradition and Vastu.</li>
              <li><strong>Trusted Portfolio</strong> – Multiple villa and luxury projects delivered with excellence.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Hiring a Villa Interior Designer Near You
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personalized Attention</strong> – Direct involvement in every stage.</li>
              <li><strong>Timely Completion</strong> – Close supervision avoids unnecessary delays.</li>
              <li><strong>Cultural Sensitivity</strong> – Local traditions woven into design.</li>
              <li><strong>Cost Savings</strong> – Optimized sourcing and reduced logistics.</li>
              <li><strong>Long-Term Support</strong> – Easy access for future upgrades and maintenance.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted a designer near Moradabad who understood our culture and taste. Vasterior delivered a villa that feels luxurious yet very personal.&quot; – Rajat & Nidhi Sharma
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Proximity was important to us. Vasterior&apos;s team visited regularly, ensured quality, and gave us stunning villa interiors.&quot; – Dr. Manish Gupta
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Villa Interior Designer Near Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you only work in Moradabad or nearby areas too?</h3>
                <p>A: We serve Moradabad city, nearby districts, and premium villa projects across UP.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Can you handle both new and existing villas?</h3>
                <p>A: Yes, we design new villas as well as renovate older ones.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you offer Vastu-compliant villa interiors?</h3>
                <p>A: Absolutely. We integrate Vastu principles with modern luxury design.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does a villa project take?</h3>
                <p>A: Typically 12–20 weeks depending on customization and scale.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you design outdoor terraces and gardens too?</h3>
                <p>A: Yes, outdoor areas are part of our villa interior projects.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Villa Interior Designer Near Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Villas Near Moradabad That Reflect Prestige, Comfort, and Modern Elegance.
            </p>
          </div>

          <PostNavigation slug="villa-interior-designer-near-moradabad-up" />
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