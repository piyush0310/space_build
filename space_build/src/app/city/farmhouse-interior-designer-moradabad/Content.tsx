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
              Turning Countryside Properties into Lifestyle Retreats
            </h3>
            <p>
              A farmhouse is not just another home. It&apos;s a retreat for relaxation, a venue for celebrations, and a space that bridges comfort with nature. Designing a farmhouse requires a unique approach that balances rustic charm with modern living. At Vasterior – Farmhouse Interior Designer in Moradabad, UP, we craft interiors that bring together natural textures, premium finishes, and layouts designed for leisure, family time, and comfort.
            </p>

            {/* Why Farmhouse Interior Design is Different */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Farmhouse Interior Design is Different
            </h2>
            <p>
              Unlike city apartments or villas, farmhouses come with sprawling layouts and outdoor connections. Their interiors must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Blend Indoor & Outdoor Living</strong> – Verandas, courtyards, terraces, and gardens.</li>
              <li><strong>Use Natural Materials</strong> – Stone, wood, rustic finishes for authenticity.</li>
              <li><strong>Be Family & Guest Friendly</strong> – Large lounges, flexible dining, multiple bedrooms.</li>
              <li><strong>Offer Durability</strong> – Interiors that can withstand countryside conditions.</li>
              <li><strong>Celebrate Warmth</strong> – Cozy, welcoming designs for getaways and gatherings.</li>
            </ul>

            {/* Our Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Farmhouse Interior Design Services in Moradabad
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Living & Lounge Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Spacious living halls with natural light and open views.</li>
                  <li>Rustic beams, exposed brick, or stone feature walls.</li>
                  <li>Premium furniture designed for comfort and gatherings.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Bedrooms & Guest Suites</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cozy farmhouse bedrooms with natural textures.</li>
                  <li>Walk-in wardrobes and luxury bathrooms.</li>
                  <li>Terraces and balconies opening to greenery.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Dining & Kitchens</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Farmhouse dining halls with large wooden tables.</li>
                  <li>Premium modular kitchens with rustic cabinetry.</li>
                  <li>Outdoor or semi-open kitchens for events and barbecues.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Bathrooms & Wellness Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Natural stone sinks, spa-inspired showers, and rustic-modern fittings.</li>
                  <li>Warm tones with premium lighting for relaxation.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Outdoor & Semi-Covered Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Verandas with lounge seating.</li>
                  <li>Pergola-covered terraces, firepits, landscaped gardens.</li>
                  <li>Poolside lounges and rustic-modern decks.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Entertainment Zones</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Game rooms, indoor courtyards, and cozy libraries.</li>
                  <li>Home theaters designed with farmhouse character.</li>
                </ul>
              </div>
            </div>

            {/* Our Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Farmhouse Design Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Understanding Purpose</strong> – Is it for weekend retreats, permanent living, or events?</li>
              <li><strong>Conceptualization</strong> – Defining rustic, modern, or blended farmhouse themes.</li>
              <li><strong>Visualization</strong> – 3D renders showcasing the lifestyle flow.</li>
              <li><strong>Material Selection</strong> – Durable, natural materials balanced with premium finishes.</li>
              <li><strong>Execution</strong> – Skilled craftsmanship with attention to detailing.</li>
              <li><strong>Final Styling</strong> – Adding décor, lighting, and outdoor integrations.</li>
            </ul>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Farmhouse Interior Designer in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Specialized Expertise</strong> – Experience with large countryside properties.</li>
              <li><strong>Rustic + Modern Balance</strong> – Designs that feel both natural and luxurious.</li>
              <li><strong>Full Turnkey Execution</strong> – From planning to furniture and décor curation.</li>
              <li><strong>Local Knowledge</strong> – Understanding Moradabad&apos;s climate, heritage, and lifestyle.</li>
              <li><strong>Trusted Portfolio</strong> – Villas, kothis, and farmhouses across UP.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Professionally Designed Farmhouse Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Lifestyle Upgrade</strong> – Spaces tailored for family time, leisure, and celebrations.</li>
              <li><strong>Closer to Nature</strong> – Interiors that extend into gardens and courtyards.</li>
              <li><strong>Prestige Factor</strong> – Farmhouses with premium interiors stand out as lifestyle investments.</li>
              <li><strong>Durability</strong> – Long-lasting finishes for countryside conditions.</li>
              <li><strong>Flexibility</strong> – Interiors that adapt for both everyday living and entertaining.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted our farmhouse near Moradabad to feel rustic yet luxurious. Vasterior delivered perfectly with warm, premium interiors.&quot; – Deepak & Rina Malhotra
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our farmhouse now feels like a true retreat — open spaces, cozy lounges, and a rustic-modern kitchen. Thank you Vasterior.&quot; – Akhil & Pooja Sharma
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Farmhouse Interior Designer Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you design both traditional and modern farmhouses?</h3>
                <p>A: Yes, we specialize in rustic, modern, and fusion farmhouse interiors.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Can you design outdoor lounges, decks, and poolside areas?</h3>
                <p>A: Absolutely, outdoor spaces are central to farmhouse living.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: How long does a farmhouse interior project take?</h3>
                <p>A: Typically 14–20 weeks depending on scale and customization.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Do you provide Vastu-compliant farmhouse designs?</h3>
                <p>A: Yes, we integrate Vastu principles into farmhouse layouts when required.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you also handle farmhouse renovations?</h3>
                <p>A: Yes, we remodel existing farmhouses into premium lifestyle retreats.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Farmhouse Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Farmhouse Interiors in Moradabad That Blend Rustic Warmth with Premium Elegance.
            </p>
          </div>

          <PostNavigation slug="farmhouse-interior-designer-moradabad-up" />
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
