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
              Functional Luxury for the Heart of Your Home
            </h3>
            <p>
              Modern homes demand interiors that are not only beautiful but also intelligent. Kitchens must be designed for efficiency, while wardrobes must provide organized storage without compromising on style. At Vasterior – Modular Kitchen and Wardrobe Designer in Moradabad, UP, we create spaces that combine functionality, premium finishes, and timeless design.
            </p>

            {/* Why Modular Kitchens & Wardrobes are Essential */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Modular Kitchens & Wardrobes are Essential in Today&apos;s Homes
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Space Optimization</strong> – Smart layouts for compact apartments, villas, and kothis.</li>
              <li><strong>Customization</strong> – Designs tailored to your lifestyle, cooking habits, and storage needs.</li>
              <li><strong>Durability</strong> – Finishes built for daily use, heat, and humidity.</li>
              <li><strong>Premium Aesthetics</strong> – Sleek, modern, and stylish interiors.</li>
              <li><strong>Value Addition</strong> – Modular designs increase both utility and property value.</li>
            </ul>

            {/* Modular Kitchen Designs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Modular Kitchen Designs We Offer
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Straight Kitchens</h3>
                <p>Streamlined, ideal for compact flats and service kitchens.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. L-Shaped Kitchens</h3>
                <p>The most popular choice in Moradabad — efficient and space-saving.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. U-Shaped Kitchens</h3>
                <p>Perfect for villas and farmhouses with maximum storage and counters.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Island Kitchens</h3>
                <p>Premium kitchens with central counters for cooking, dining, and entertaining.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Parallel Kitchens</h3>
                <p>Two-counter layout for large families and heavy-duty cooking.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Open Kitchens</h3>
                <p>Modern designs that flow into living and dining zones.</p>
              </div>
            </div>

            {/* Modular Wardrobe Solutions */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Modular Wardrobe Solutions
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Sliding Door Wardrobes</h3>
                <p>Space-efficient and stylish with premium finishes.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Hinged Door Wardrobes</h3>
                <p>Classic, versatile, and available in custom sizes.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Walk-In Wardrobes</h3>
                <p>Luxury storage with customized partitions and lighting.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Corner Wardrobes</h3>
                <p>Maximizing every inch of space in compact rooms.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Glass & Mirror Wardrobes</h3>
                <p>Adding depth, light, and a modern touch.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Customized Wardrobes</h3>
                <p>Designed for kids, couples, or utility spaces.</p>
              </div>
            </div>

            {/* Premium Features */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Premium Features We Provide
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">For Kitchens:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Soft-close drawers and pull-outs.</li>
                  <li>Imported fittings and accessories.</li>
                  <li>Quartz, granite, or Corian countertops.</li>
                  <li>Task lighting and under-cabinet LEDs.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">For Wardrobes:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Adjustable shelves, drawers, and hidden compartments.</li>
                  <li>Premium finishes: laminates, acrylics, veneers, matte PU.</li>
                  <li>Integrated mirrors, dressing corners, and organizers.</li>
                  <li>Sensor-based lighting for luxury touch.</li>
                </ul>
              </div>
            </div>

            {/* Our Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation & Requirement Study</strong> – Lifestyle, family needs, and usage patterns.</li>
              <li><strong>Layout Planning</strong> – Suggesting the best kitchen and wardrobe designs.</li>
              <li><strong>3D Visualization</strong> – Realistic previews before execution.</li>
              <li><strong>Material Selection</strong> – Durable and stylish finishes curated for you.</li>
              <li><strong>Execution & Installation</strong> – Precision work with imported hardware.</li>
              <li><strong>Handover & Aftercare</strong> – Long-term support and guidance.</li>
            </ul>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Dual Expertise</strong> – Specialists in both kitchens and wardrobes.</li>
              <li><strong>Bespoke Solutions</strong> – No standard templates, everything is custom.</li>
              <li><strong>Premium Quality</strong> – Global-grade fittings and finishes.</li>
              <li><strong>Local Advantage</strong> – Quick execution and support in Moradabad.</li>
              <li><strong>Trusted Brand</strong> – Villas, apartments, and farmhouses across UP already trust Vasterior.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Modular Kitchens & Wardrobes
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Organized Living</strong> – Decluttered and efficient storage solutions.</li>
              <li><strong>Time Saving</strong> – Smart layouts reduce effort in cooking and storage.</li>
              <li><strong>Luxury Lifestyle</strong> – Interiors that feel premium every day.</li>
              <li><strong>Durability</strong> – Materials built for Indian usage conditions.</li>
              <li><strong>Property Value</strong> – Homes with modular kitchens and wardrobes are highly valued.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior designed both our modular kitchen and wardrobes. The execution was flawless, and everything feels premium and practical.&quot; – Vikas & Pooja Bhatia
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;The walk-in wardrobe and island kitchen they created for us have completely transformed our home. Highly recommended!&quot; – Anjali & Rohit Agarwal
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Modular Kitchen & Wardrobe Designer Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you design both small and large kitchens?</h3>
                <p>A: Yes, we create modular kitchens for compact apartments as well as villas and farmhouses.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: What materials do you use for wardrobes?</h3>
                <p>A: We offer laminates, acrylics, glass, veneers, matte PU, and more based on preference.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can you design walk-in wardrobes in Moradabad homes?</h3>
                <p>A: Absolutely, we specialize in customized walk-in wardrobes.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does installation take?</h3>
                <p>A: Kitchens usually take 3–6 weeks; wardrobes 2–4 weeks, depending on scale.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you integrate appliances into kitchens?</h3>
                <p>A: Yes, we provide fully integrated modular kitchens with built-in appliances.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Modular Kitchen & Wardrobe Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Modular Kitchens & Wardrobes in Moradabad That Combine Style, Functionality & Premium Quality.
            </p>
          </div>

          <PostNavigation slug="modular-kitchen-and-wardrobe-designer-moradabad-up" />
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
