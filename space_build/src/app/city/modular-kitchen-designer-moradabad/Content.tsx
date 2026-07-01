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
              Smart, Stylish & Functional Kitchens for Modern Living
            </h3>
            <p>
              The kitchen is no longer just a cooking space — it&apos;s the heart of the home where families gather, meals are shared, and lifestyle meets design. At Vasterior – Modular Kitchen Designer in Moradabad, UP, we specialize in creating kitchens that are efficient, durable, and aesthetically stunning. Whether you prefer a sleek modern layout or a warm classic style, our modular kitchens combine form, function, and elegance.
            </p>

            {/* Why Choose Modular Kitchens */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Modular Kitchens for Moradabad Homes?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Space Optimization</strong> – Smart layouts for both compact and spacious kitchens.</li>
              <li><strong>Durability</strong> – Materials designed to withstand daily use, humidity, and heat.</li>
              <li><strong>Aesthetic Variety</strong> – Contemporary, rustic, luxury, or minimalist styles.</li>
              <li><strong>Easy Maintenance</strong> – Finishes that are easy to clean and maintain.</li>
              <li><strong>Customization</strong> – Tailored to your family&apos;s cooking and storage needs.</li>
            </ul>
            <p className="mt-4">
              With a modular design, your kitchen is not just practical — it becomes a statement of lifestyle.
            </p>

            {/* Types of Modular Kitchens */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Types of Modular Kitchens We Design
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Straight Kitchens</h3>
                <p>Perfect for small apartments or service kitchens, offering a streamlined setup.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. L-Shaped Kitchens</h3>
                <p>Most popular for Moradabad homes, providing excellent workflow and efficient corner usage.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. U-Shaped Kitchens</h3>
                <p>Ideal for large villas and farmhouses — maximum storage and counter space.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Island Kitchens</h3>
                <p>Luxury kitchens with central counters for cooking, dining, or entertaining.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Parallel Kitchens</h3>
                <p>Two-counter style, great for busy families with multiple users at once.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Open Kitchens</h3>
                <p>Seamlessly integrated into living/dining areas, perfect for modern interiors.</p>
              </div>
            </div>

            {/* Premium Features */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Premium Features in Vasterior Modular Kitchens
            </h2>
            
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Cabinetry & Storage</strong> – Soft-close shutters, pull-out drawers, corner units.</li>
              <li><strong>Countertops</strong> – Quartz, granite, Corian, or premium stone.</li>
              <li><strong>Lighting</strong> – Task lighting, ambient lighting, under-cabinet LEDs.</li>
              <li><strong>Appliance Integration</strong> – Built-in ovens, dishwashers, chimneys, and refrigerators.</li>
              <li><strong>Smart Solutions</strong> – Sensor taps, concealed handles, and touch-based controls.</li>
              <li><strong>Finishes</strong> – Acrylic, laminate, lacquered glass, matte PU, veneer.</li>
            </ul>

            {/* Our Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation & Need Analysis</strong> – Understanding family size, cooking style, and space.</li>
              <li><strong>Layout Planning</strong> – Suggesting the best modular type (L-shape, island, parallel).</li>
              <li><strong>3D Design & Visualization</strong> – Previewing your kitchen design in detail.</li>
              <li><strong>Material Selection</strong> – Helping you choose durable, stylish, and budget-friendly finishes.</li>
              <li><strong>Execution & Installation</strong> – On-site precision with premium hardware.</li>
              <li><strong>Handover & Support</strong> – Final styling plus long-term aftercare guidance.</li>
            </ul>

            {/* Why Vasterior is the Right Choice */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Right Choice in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Kitchen Specialists</strong> – Dedicated expertise in modular kitchen design.</li>
              <li><strong>Premium Quality</strong> – Imported fittings and globally trusted hardware brands.</li>
              <li><strong>Customization</strong> – No ready-made setups; every kitchen is bespoke.</li>
              <li><strong>Aesthetic Flexibility</strong> – From ultra-modern gloss finishes to rustic wood styles.</li>
              <li><strong>Local Advantage</strong> – Being in Moradabad means faster execution and support.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of a Vasterior Modular Kitchen
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Efficient Cooking Experience</strong> – Perfect work triangle for comfort.</li>
              <li><strong>Stylish Interiors</strong> – A kitchen that elevates the overall home look.</li>
              <li><strong>Space Maximization</strong> – Every corner put to use with clever storage.</li>
              <li><strong>Easy Maintenance</strong> – Finishes chosen for long-lasting convenience.</li>
              <li><strong>Higher Home Value</strong> – Modular kitchens increase resale value.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our new L-shaped modular kitchen by Vasterior is both beautiful and practical. Cooking feels effortless now.&quot; – Rohit & Meera Verma
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted a premium island kitchen in our villa. Vasterior gave us a design that&apos;s perfect for entertaining and daily use.&quot; – Sahil & Priya Agarwal
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Modular Kitchen Designer Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: How long does it take to install a modular kitchen?</h3>
                <p>A: Depending on size and customization, 3–6 weeks is typical.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Are modular kitchens durable in Indian cooking conditions?</h3>
                <p>A: Yes, we use high-grade materials and finishes suited for oil, heat, and frequent use.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can you design a modular kitchen for a small flat?</h3>
                <p>A: Absolutely. Modular kitchens are ideal for compact homes too.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Do you provide appliance integration?</h3>
                <p>A: Yes, we design kitchens with fully integrated modern appliances.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you offer warranty or aftercare?</h3>
                <p>A: Yes, our kitchens come with product warranty and post-installation support.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Modular Kitchen Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gmail.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Modular Kitchens in Moradabad That Blend Style, Comfort & Functionality.
            </p>
          </div>

          <PostNavigation slug="modular-kitchen-designer-moradabad-up" />
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
