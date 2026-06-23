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
              Smart, Functional & Elegant Commercial Spaces Designed for Success
            </h3>
            <p>
              When it comes to commercial spaces, design is not just about looks—it is about productivity, customer engagement, and brand identity. As the leading Commercial Interior Designer in Moradabad, UP, Vasterior specializes in transforming ordinary business spaces into extraordinary environments. From offices and retail showrooms to restaurants, hotels, and corporate hubs, our designs are tailored to maximize efficiency while leaving a lasting impression.
            </p>

            {/* Why Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior for Commercial Interior Design in Moradabad?
            </h2>
            <p>
              Moradabad, known as the &quot;Brass City of India,&quot; is rapidly expanding into a modern industrial and business hub. With growing retail markets, showrooms, and corporate setups, the need for professional commercial interior design services has increased. Vasterior stands out because:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Business-Oriented Designs</strong> – Our interiors don&apos;t just look good; they help improve customer experience and employee productivity.</li>
              <li><strong>Vastu + Modern Aesthetics</strong> – We blend traditional energy-balancing principles with contemporary layouts.</li>
              <li><strong>Complete Project Execution</strong> – From planning and material selection to execution and handover, we manage everything.</li>
              <li><strong>Customized Solutions</strong> – Every brand is unique, so we design interiors that reflect your company&apos;s values and goals.</li>
              <li><strong>Affordable Luxury</strong> – Premium commercial interiors at competitive prices in Moradabad.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Commercial Interior Design Services in Moradabad
            </h2>
            <p>At Vasterior, we cater to a wide range of business segments:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Office Interior Design</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ergonomic layouts for better employee comfort.</li>
                  <li>Modern workstations, cabins, and collaborative spaces.</li>
                  <li>Lighting and color schemes that improve focus and efficiency.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Retail Showroom Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Space-optimized product displays.</li>
                  <li>Attention-grabbing entrance and façade designs.</li>
                  <li>Customer-friendly layouts that boost sales and footfall.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Restaurants & Cafés</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Theme-based interiors that match cuisine and customer profile.</li>
                  <li>Comfortable seating, mood lighting, and acoustics for ambience.</li>
                  <li>Functional kitchens and serving layouts for smooth operations.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Hotels, Banquets & Resorts</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Luxury interiors for lobbies, suites, and banquet halls.</li>
                  <li>Durable yet stylish furniture for long-term use.</li>
                  <li>Aesthetic décor that enhances guest experience.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Industrial & Corporate Hubs</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Functional planning for warehouses and manufacturing units.</li>
                  <li>Executive boardrooms with premium finishes.</li>
                  <li>Energy-efficient design solutions.</li>
                </ul>
              </div>
            </div>

            {/* Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process
            </h2>
            <p>We follow a transparent, step-by-step approach for every commercial project:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation & Requirement Analysis</strong> – Understanding your business needs and budget.</li>
              <li><strong>Concept Development</strong> – Creating layouts and design themes tailored for your brand.</li>
              <li><strong>3D Visualization & Approval</strong> – Showing how your space will look before execution.</li>
              <li><strong>Material & Furniture Selection</strong> – Helping you choose the right finishes and designs.</li>
              <li><strong>Execution & Delivery</strong> – On-site supervision with timely handover.</li>
              <li><strong>Post-Project Support</strong> – Assistance even after project completion.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Hiring Vasterior for Commercial Interiors in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Boosts Employee Productivity</strong> – Well-planned offices reduce stress and improve efficiency.</li>
              <li><strong>Enhances Brand Image</strong> – A stylish space builds trust with customers and clients.</li>
              <li><strong>Better Space Utilization</strong> – Intelligent layouts make even small areas functional.</li>
              <li><strong>Long-Lasting Value</strong> – Durable materials and timeless designs ensure long-term benefits.</li>
            </ul>

            {/* Why Businesses Trust Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Businesses in Moradabad Trust Vasterior?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Decades of combined experience in commercial interiors.</li>
              <li>Expertise in local design trends, modern luxury, and global standards.</li>
              <li>Portfolio of retail showrooms, offices, hotels, and industrial projects.</li>
              <li>Committed to on-time and budget-friendly delivery.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We hired Vasterior for our showroom interiors in Moradabad. The design increased our sales and made the space more appealing to customers.&quot; – Amit Sharma, Moradabad
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior transformed our office into a modern workplace. The layout and lighting improved productivity, and clients love visiting our space.&quot; – Neha Verma, Moradabad
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Commercial Interior Designer in Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: What types of commercial spaces do you design in Moradabad?</h3>
                <p>A: We specialize in offices, retail showrooms, restaurants, hotels, banquets, and corporate hubs.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Do you design budget-friendly commercial interiors?</h3>
                <p>A: Yes, we offer packages that fit different budgets without compromising on quality.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can you provide Vastu-compliant commercial interiors?</h3>
                <p>A: Absolutely, Vasterior integrates Vastu principles with modern designs.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Do you provide 3D designs before execution?</h3>
                <p>A: Yes, we use advanced 3D visualization so clients can see the final look in advance.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: How can I get started with Vasterior?</h3>
                <p>A: Simply contact us via phone or email. Our team will schedule a consultation.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Commercial Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Redefining Commercial Interiors in Moradabad with Style, Functionality & Innovation.
            </p>
          </div>

          <PostNavigation slug="commercial-interior-designer-in-moradabad-up" />
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
