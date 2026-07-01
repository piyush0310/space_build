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
              Redesigning Homes with Modern Style and Timeless Comfort
            </h3>
            <p>
              Your home is more than just four walls – it&apos;s a reflection of your lifestyle, emotions, and aspirations. Over time, homes lose their charm and functionality, but with the right renovation expert, they can be transformed into stunning, modern, and highly functional living spaces. As the leading Home Renovation Interior Designer in Moradabad, UP, Vasterior specializes in turning outdated homes into contemporary masterpieces while keeping comfort, elegance, and Vastu in mind.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Home Renovation in Moradabad?
            </h2>
            <p>
              Moradabad, famous for its brass handicrafts and cultural heritage, is also witnessing a growing demand for modern, stylish, and functional homes. Renovation is not just about repairing old spaces – it&apos;s about reinventing interiors for the future. Here&apos;s why homeowners in Moradabad trust Vasterior:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Expertise in Full Home Makeovers</strong> – From modular kitchens to luxury living rooms, we handle everything.</li>
              <li><strong>Customized Renovation Plans</strong> – Tailored designs as per your budget, lifestyle, and preferences.</li>
              <li><strong>Blend of Tradition & Modernity</strong> – Designs that respect local culture while adding global elegance.</li>
              <li><strong>Vastu-Compliant Renovations</strong> – Ensuring positivity and harmony in your renovated home.</li>
              <li><strong>On-Time & Hassle-Free Execution</strong> – We manage end-to-end projects with minimal disruption to your daily life.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Home Renovation Interior Design Services in Moradabad
            </h2>
            <p>At Vasterior, we provide complete residential renovation solutions for every corner of your house:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Living Room Renovation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Modern false ceilings, statement lighting, and wall textures.</li>
                  <li>Space-saving furniture and premium flooring options.</li>
                  <li>Elegant designs for gatherings, family time, and relaxation.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Bedroom Renovation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Custom wardrobes, walk-in closets, and stylish headboards.</li>
                  <li>Cozy and luxurious interiors for restful sleep.</li>
                  <li>Ambient lighting and soothing color combinations.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Modular Kitchen Upgrades</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Smart storage, modern fittings, and premium countertops.</li>
                  <li>Durable finishes with stylish yet functional layouts.</li>
                  <li>Open kitchen concepts with advanced appliances.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Bathroom Renovation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Luxurious fittings, anti-skid tiles, and elegant designs.</li>
                  <li>Compact yet functional layouts with premium vanities.</li>
                  <li>Spa-inspired interiors for a refreshing experience.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Full Home Renovation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Complete redesign of villas, bungalows, and apartments.</li>
                  <li>Integration of modern technology, energy-efficient lighting, and Vastu principles.</li>
                  <li>Personalized layouts that match your lifestyle.</li>
                </ul>
              </div>
            </div>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Vasterior Handles Home Renovation Projects
            </h2>
            <p>We follow a structured process to ensure smooth execution and client satisfaction:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Consultation</strong> – Understanding your needs and budget.</li>
              <li><strong>Site Analysis & Concept Creation</strong> – Identifying structural changes and design possibilities.</li>
              <li><strong>3D Visualization & Approval</strong> – Showing realistic previews before work begins.</li>
              <li><strong>Material & Furniture Selection</strong> – Helping you pick the right designs and finishes.</li>
              <li><strong>Execution & Supervision</strong> – Professional project management with timely updates.</li>
              <li><strong>Final Handover</strong> – Delivering your renovated dream home on time.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Hiring Vasterior for Home Renovation in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Enhanced Property Value</strong> – Renovated homes have higher resale value.</li>
              <li><strong>Modern Lifestyle Upgrade</strong> – Smart layouts and contemporary interiors.</li>
              <li><strong>Energy-Efficient Homes</strong> – Sustainable design choices reduce electricity bills.</li>
              <li><strong>Space Optimization</strong> – Making even small homes look spacious and elegant.</li>
              <li><strong>Stress-Free Renovation</strong> – End-to-end solutions with zero hassle for homeowners.</li>
            </ul>

            {/* Why Moradabad Homeowners Prefer Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Moradabad Homeowners Prefer Vasterior?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A trusted name in residential interior designing and renovations.</li>
              <li>Experience in working with apartments, villas, bungalows, and heritage homes.</li>
              <li>Expertise in combining Vastu-friendly layouts with modern luxury.</li>
              <li>Transparent pricing and on-time project delivery.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We renovated our old house with Vasterior, and the results were beyond expectations. The modular kitchen and living room design completely transformed our lifestyle.&quot; – Rakesh Agarwal, Moradabad
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior redesigned our bedroom and bathrooms with modern themes. The execution was smooth, and the final look feels luxurious.&quot; – Pooja Sharma, Moradabad
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Home Renovation Interior Designer in Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you handle both partial and full home renovations?</h3>
                <p>A: Yes, we take up both small-scale upgrades (like kitchens and bathrooms) and full home renovation projects.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: How long does a typical renovation project take in Moradabad?</h3>
                <p>A: Timelines depend on the scale of work, but Vasterior ensures timely completion with proper planning.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you provide cost estimates before starting?</h3>
                <p>A: Yes, we provide a detailed cost breakdown after site analysis and consultation.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Can you renovate old traditional houses into modern homes?</h3>
                <p>A: Absolutely. We specialize in revamping heritage homes with modern functionality.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you include Vastu in renovation planning?</h3>
                <p>A: Yes, our experts integrate Vastu guidelines without compromising on modern aesthetics.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Home Renovation Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gmail.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Redefining Homes in Moradabad with Elegant Renovations & Modern Design.
            </p>
          </div>

          <PostNavigation slug="home-renovation-interior-designer-in-moradabad-up" />
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
