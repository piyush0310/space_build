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
              Where Premium Living Meets Bespoke Design
            </h3>
            <p>
              Villas are a symbol of success and lifestyle. Designing them requires more than just creativity — it requires a deep understanding of scale, proportion, and personalization. At Vasterior – Premium Villa Interior Designer in Moradabad, UP, we bring together world-class luxury and functional elegance to create villas that feel timeless, personal, and truly premium.
            </p>

            {/* The Essence */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Essence of Premium Villa Interiors
            </h2>
            <p>
              A premium villa interior is not defined by expensive décor alone. It&apos;s about how every room flows into the next, how materials and textures complement each other, and how the design reflects the family&apos;s identity. Common elements that set premium villas apart include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Tailored Spatial Planning</strong> – Smart zoning for family, guests, and entertainment.</li>
              <li><strong>Material Excellence</strong> – Italian marble, natural veneers, brass detailing, designer furniture.</li>
              <li><strong>Lighting as Art</strong> – From skylights to custom chandeliers, lighting defines luxury.</li>
              <li><strong>Vastu Integration</strong> – Harmony and balance without compromising on elegance.</li>
              <li><strong>Exclusive Detailing</strong> – Custom wardrobes, walk-in closets, spa bathrooms, and bespoke furniture.</li>
            </ul>

            {/* Our Specialization */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Specialization in Premium Villa Design
            </h2>
            <p>At Vasterior, every villa project is treated as a canvas for originality and exclusivity.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Grand Foyers & Living Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Statement entrances with marble flooring and dramatic ceilings.</li>
                  <li>Large lounges with layered seating and premium textures.</li>
                  <li>Accent walls with stone, veneer, or brass inlays.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Master Suites & Bedrooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Custom headboards, designer flooring, and acoustic walls.</li>
                  <li>Walk-in closets with premium cabinetry.</li>
                  <li>En-suite bathrooms styled like private spas.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Dining & Kitchens</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Formal dining areas with curated furniture and artistic lighting.</li>
                  <li>Premium modular kitchens with imported fittings and integrated appliances.</li>
                  <li>Service kitchens designed for functionality in large households.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Entertainment & Family Lounges</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Home theatres with acoustic treatment.</li>
                  <li>Game rooms, libraries, or private lounges.</li>
                  <li>Smart automation for lighting, sound, and climate control.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Bathrooms & Dressing Rooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Rain showers, bathtubs, premium tiles, and luxury fittings.</li>
                  <li>Custom vanity counters with designer lighting.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Outdoor Luxury Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Pergola-covered terraces, landscaped gardens, and water features.</li>
                  <li>Outdoor lounges with seasonal comfort solutions.</li>
                </ul>
              </div>
            </div>

            {/* Our Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process for Premium Villa Interiors
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation & Visioning</strong> – Understanding your lifestyle and expectations.</li>
              <li><strong>Concept Development</strong> – Theme boards and design direction unique to your villa.</li>
              <li><strong>3D Visualization</strong> – Realistic walkthroughs before execution.</li>
              <li><strong>Material Curation</strong> – Premium global and local selections.</li>
              <li><strong>Execution & Supervision</strong> – On-site craftsmanship with attention to detail.</li>
              <li><strong>Final Styling & Handover</strong> – Delivery of polished, premium interiors.</li>
            </ul>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior as Premium Villa Interior Designer in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Villa-Specific Expertise</strong> – Proven experience in large, premium residences.</li>
              <li><strong>Exclusivity</strong> – No two villa projects are ever the same.</li>
              <li><strong>Transparency</strong> – Clear timelines and pricing, no hidden surprises.</li>
              <li><strong>Cultural Balance</strong> – Designs that respect tradition while embracing modern luxury.</li>
              <li><strong>Reputation & Trust</strong> – Recognized for premium projects across Moradabad & UP.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Premium Villa Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Lifestyle Upgrade</strong> – Everyday living elevated to a premium experience.</li>
              <li><strong>Prestige & Identity</strong> – Interiors that reflect family pride and status.</li>
              <li><strong>Functional Elegance</strong> – Spaces that look beautiful but also serve everyday needs.</li>
              <li><strong>Durable Luxury</strong> – Long-lasting premium materials and detailing.</li>
              <li><strong>Increased Property Value</strong> – Premium interiors enhance real estate worth.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our villa in Moradabad was designed by Vasterior. Every corner reflects premium quality — from the double-height lounge to the spa bathrooms.&quot; – Vikram & Neha Sharma
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;They gave us exactly what we wanted: premium interiors that are stylish, comfortable, and unique.&quot; – Anita & Rajesh Bansal
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Premium Villa Interior Designer Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: What makes Vasterior different from other designers in Moradabad?</h3>
                <p>A: Our specialization in villas, premium material selection, and personalized approach set us apart.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Can premium villa interiors also follow Vastu?</h3>
                <p>A: Yes, our premium designs are aligned with Vastu principles without compromising luxury.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you only handle new villas or renovations too?</h3>
                <p>A: Both. We design new villas and upgrade existing ones into premium spaces.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does a premium villa project take?</h3>
                <p>A: Typically 12–20 weeks depending on scope and customization.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you design custom furniture for villas?</h3>
                <p>A: Absolutely. We create bespoke furniture pieces tailored to your interiors.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Premium Villa Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Premium Villa Interiors in Moradabad That Reflect Elegance, Identity & Lifestyle.
            </p>
          </div>

          <PostNavigation slug="premium-villa-interior-designer-moradabad-up" />
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
