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
              Transforming Homes into Spaces of Style, Comfort & Functionality
            </h3>
            <p>
              Your home is where life&apos;s best moments happen. It deserves interiors that reflect your personality, comfort, and aspirations. At Vasterior – Best Home Interior Designer in Moradabad, UP, we specialize in creating beautiful, functional, and Vastu-compliant interiors tailored to your lifestyle. From apartments and villas to independent houses, our designs seamlessly combine modern trends with timeless elegance.
            </p>

            {/* Why Vasterior is the Best */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Best Home Interior Designer in Moradabad
            </h2>
            <p>
              Moradabad, popularly known as the Brass City of India, is a blend of tradition and modern living. As families seek stylish yet practical homes, Vasterior stands out as the trusted interior design partner because:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personalized Designs</strong> – Every home is unique, and our concepts reflect your lifestyle.</li>
              <li><strong>Expert Team</strong> – Experienced designers, architects, and project managers ensure perfection.</li>
              <li><strong>End-to-End Solutions</strong> – From consultation to execution, we handle everything.</li>
              <li><strong>3D Visualizations</strong> – Get a clear preview of your interiors before project execution.</li>
              <li><strong>Affordable Luxury</strong> – Premium home interiors at competitive prices.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Home Interior Design Services in Moradabad
            </h2>
            <p>At Vasterior, we offer complete residential interior solutions:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Living Room Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Designer ceilings, modern lighting, and premium flooring.</li>
                  <li>Smart seating layouts for comfort and gatherings.</li>
                  <li>Feature walls with textures, wallpapers, and décor.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Bedroom Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cozy, stylish, and functional bedroom designs.</li>
                  <li>Custom wardrobes, modular storage, and premium finishes.</li>
                  <li>Lighting concepts for relaxation and mood enhancement.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Modular Kitchen Designs</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Functional layouts: L-shape, U-shape, and island kitchens.</li>
                  <li>Durable countertops, cabinets, and fittings.</li>
                  <li>Smart storage solutions to maximize space.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Kids&apos; Room Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Safe, playful, and creative room themes.</li>
                  <li>Practical study corners and innovative storage.</li>
                  <li>Vibrant colors to encourage creativity and joy.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Bathroom Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Elegant fittings and affordable luxury finishes.</li>
                  <li>Compact designs with maximum utility.</li>
                  <li>Spa-like concepts for a refreshing experience.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Villa & Bungalow Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Luxury interiors with bespoke furniture and Italian marble.</li>
                  <li>Smart home integrations and modern décor.</li>
                  <li>Customized themes blending tradition and modernity.</li>
                </ul>
              </div>
            </div>

            {/* Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process
            </h2>
            <p>We believe in transparency, planning, and execution:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation & Requirement Analysis</strong> – Understanding your needs, budget, and style preferences.</li>
              <li><strong>Concept & Planning</strong> – Presenting design concepts with layouts and mood boards.</li>
              <li><strong>3D Visualization</strong> – Showing realistic previews before starting work.</li>
              <li><strong>Material & Furniture Selection</strong> – Guiding you in choosing durable, stylish, and budget-suited options.</li>
              <li><strong>Execution & Project Management</strong> – Professional supervision to ensure timely completion.</li>
              <li><strong>Final Handover & Support</strong> – Delivering your dream home with after-project assistance.</li>
            </ul>

            {/* Why Hire Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Hire Vasterior for Home Interiors in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Trusted Expertise</strong> – Strong portfolio of residential projects.</li>
              <li><strong>Customized Solutions</strong> – Designs aligned with family needs.</li>
              <li><strong>Vastu-Compliant Layouts</strong> – Positive, balanced, and harmonious homes.</li>
              <li><strong>Affordable Options</strong> – Tailored for every budget.</li>
              <li><strong>On-Time Delivery</strong> – Stress-free execution with guaranteed timelines.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Choosing Vasterior
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Stylish designs that increase property value.</li>
              <li>Personalized comfort for every family member.</li>
              <li>Smart use of space in apartments and villas.</li>
              <li>Long-lasting interiors with durable materials.</li>
              <li>Enhanced lifestyle through functional layouts.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior transformed our 3BHK apartment into a stylish and comfortable home. The modular kitchen and bedroom designs are fantastic.&quot; – Ritu Agarwal, Moradabad
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our villa interiors were designed by Vasterior. The team blended modern and traditional elements perfectly. Highly satisfied!&quot; – Arun Khanna, Moradabad
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Best Home Interior Designer in Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: What types of homes do you design in Moradabad?</h3>
                <p>A: We design apartments, villas, bungalows, and independent houses.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: How much does home interior design cost in Moradabad?</h3>
                <p>A: Costs vary depending on size and materials, but Vasterior offers affordable packages.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you offer modular kitchen designs?</h3>
                <p>A: Yes, we specialize in stylish and budget-friendly modular kitchens.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Do you provide Vastu-compliant designs?</h3>
                <p>A: Absolutely. Our layouts follow Vastu principles for harmony and positivity.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: How do I start my project with Vasterior?</h3>
                <p>A: Just call or email us, and our team will schedule a consultation.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Best Home Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Beautiful Homes in Moradabad with Elegance, Comfort & Innovation.
            </p>
          </div>

          <PostNavigation slug="best-home-interior-designer-moradabad-up" />
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
