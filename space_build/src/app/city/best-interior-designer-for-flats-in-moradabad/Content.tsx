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
              Smart, Stylish & Functional Interiors for Modern Flats
            </h3>
            <p>
              Flats and apartments are becoming the preferred choice for families and professionals in Moradabad due to their convenience, security, and modern layouts. However, designing a flat requires a thoughtful approach to space optimization, functionality, and aesthetics. At Vasterior – Best Interior Designer for Flats in Moradabad, UP, we specialize in creating stylish, practical, and Vastu-compliant interiors that transform compact apartments into luxurious living spaces.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Flat Interiors in Moradabad?
            </h2>
            <p>
              Moradabad, known for its rich culture and evolving lifestyle, is witnessing rapid growth in apartment living. Families want interiors that maximize comfort within limited square footage. Vasterior is the preferred choice because:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Expertise in Flat Interior Designing</strong> – Years of experience in designing modern apartments and flats.</li>
              <li><strong>Smart Space Planning</strong> – Making small areas look spacious and functional.</li>
              <li><strong>Personalized Designs</strong> – Tailored to family needs, lifestyle, and budget.</li>
              <li><strong>Affordable Luxury</strong> – Premium interiors at competitive pricing.</li>
              <li><strong>End-to-End Execution</strong> – From concept to handover, managed seamlessly.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Flat Interior Design Services in Moradabad
            </h2>
            <p>We design interiors that make your flat both beautiful and functional.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Living Room Interiors for Flats</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Compact seating layouts to fit apartment space.</li>
                  <li>Modern wall textures, wallpapers, and feature walls.</li>
                  <li>Designer ceilings with stylish lighting solutions.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Bedroom Interiors for Flats</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Space-saving wardrobes and storage solutions.</li>
                  <li>Elegant themes for master, kids&apos;, and guest bedrooms.</li>
                  <li>Cozy interiors for maximum comfort.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Modular Kitchen Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>L-shaped, parallel, or island kitchens designed for flats.</li>
                  <li>Affordable yet durable cabinets, countertops, and fittings.</li>
                  <li>Smart storage to optimize space in smaller kitchens.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Kids&apos; Room Designs</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Playful colors and themes within compact layouts.</li>
                  <li>Safe furniture with multipurpose use.</li>
                  <li>Study corners with functional storage.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Bathroom Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Compact bathroom layouts with modern fittings.</li>
                  <li>Anti-skid tiles and low-maintenance finishes.</li>
                  <li>Luxury upgrades like glass partitions and vanity counters.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Balcony & Utility Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cozy balcony seating for relaxation.</li>
                  <li>Smart washing/utility zone planning.</li>
                  <li>Green design with plants and décor.</li>
                </ul>
              </div>
            </div>

            {/* Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process for Flats
            </h2>
            <p>We follow a structured approach to deliver high-quality flat interiors:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation & Requirement Analysis</strong> – Understanding your flat&apos;s layout and family needs.</li>
              <li><strong>Concept Design & 3D Visualization</strong> – Preview your interiors before execution.</li>
              <li><strong>Material Selection</strong> – Durable, stylish, and cost-effective options.</li>
              <li><strong>Execution & Project Management</strong> – On-site supervision and timely updates.</li>
              <li><strong>Final Handover</strong> – Delivering your dream flat interiors as planned.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Hiring Vasterior for Flat Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Space Optimization</strong> – Smart layouts for compact apartments.</li>
              <li><strong>Stylish Yet Functional</strong> – Interiors that look good and serve practical needs.</li>
              <li><strong>Personalized Touch</strong> – Designs aligned with your family&apos;s lifestyle.</li>
              <li><strong>Durable & Affordable</strong> – Long-lasting materials within budget.</li>
              <li><strong>Stress-Free Experience</strong> – Complete project handled by professionals.</li>
            </ul>

            {/* Why Moradabad Families Prefer Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Moradabad Families Prefer Vasterior
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Expertise in apartment and flat interiors.</li>
              <li>Blend of modern design trends and Vastu principles.</li>
              <li>Transparent pricing with no hidden costs.</li>
              <li>Trusted for on-time project completion.</li>
              <li>Wide portfolio of 2BHK, 3BHK, and luxury flats.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our 2BHK flat was designed by Vasterior. The team made every corner functional and stylish. The living room looks spacious now.&quot; – Rashmi Gupta, Moradabad
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior transformed our 3BHK apartment interiors beautifully. The modular kitchen and bedrooms are elegant and practical.&quot; – Alok Bansal, Moradabad
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Best Interior Designer for Flats in Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you design interiors for both small and large flats?</h3>
                <p>A: Yes, we handle 1BHK, 2BHK, 3BHK, and luxury flats in Moradabad.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: How much does flat interior designing cost in Moradabad?</h3>
                <p>A: Costs depend on size and materials, but Vasterior offers affordable packages.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you design modular kitchens for flats?</h3>
                <p>A: Absolutely. We create compact and stylish modular kitchens for apartments.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Can flat interiors be Vastu-compliant?</h3>
                <p>A: Yes, our designs integrate Vastu principles with modern aesthetics.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: How long does it take to complete flat interiors?</h3>
                <p>A: Usually 6–10 weeks, depending on project size and customization.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Best Interior Designer for Flats in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gamil.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Modern & Affordable Flat Interiors in Moradabad with Style and Functionality.
            </p>
          </div>

          <PostNavigation slug="best-interior-designer-for-flats-in-moradabad-up" />
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
