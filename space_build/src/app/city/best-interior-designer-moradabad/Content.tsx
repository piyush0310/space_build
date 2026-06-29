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
              Transforming Spaces with Creativity, Elegance, and Functionality
            </h3>
            <p>
              When it comes to redefining living and working spaces, Vasterior – Best Interior Designer in Moradabad, UP stands as a trusted name. Our expertise lies in blending modern aesthetics with timeless designs to create interiors that are both beautiful and practical. Whether you are building a new home, renovating your office, or setting up a commercial space in Moradabad, we bring a personalized touch to every project.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Interior Designer in Moradabad?
            </h2>
            <p>
              Moradabad is a vibrant city known for its brass handicrafts, cultural heritage, and modern lifestyle. As families and businesses grow, the demand for premium interior design services has also increased. Here&apos;s why Vasterior is the first choice for clients across Moradabad and surrounding areas:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personalized Design Approach</h3>
                <p>Every client has unique preferences. At Vasterior, we listen carefully to your needs and design interiors that reflect your personality and lifestyle.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Team of Interior Designers</h3>
                <p>Our team includes experienced architects, designers, and project managers who ensure every detail is executed with perfection.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">End-to-End Solutions</h3>
                <p>From space planning, furniture selection, lighting design, to color palettes – we handle every aspect of interior design.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Modern Technology & 3D Visualization</h3>
                <p>We use advanced 3D software to give you a clear preview of your interiors before implementation.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Affordable Luxury</h3>
                <p>Vasterior believes in offering world-class design solutions at competitive prices, making us the most trusted interior design company in Moradabad.</p>
              </div>
            </div>

            {/* Residential Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Residential Interior Design Services in Moradabad
            </h2>
            <p>Your home is more than just a place to live – it&apos;s an extension of your personality. Our residential interior design services include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Living Room Interiors:</strong> Elegant layouts with comfortable furniture, modern lighting, and aesthetic wall finishes.</li>
              <li><strong>Bedroom Interiors:</strong> Cozy, relaxing designs with custom wardrobes, ambient lighting, and soothing colors.</li>
              <li><strong>Modular Kitchens:</strong> Functional and stylish kitchens designed with durable materials and smart storage solutions.</li>
              <li><strong>Kids&apos; Rooms:</strong> Vibrant, safe, and creative interiors for children.</li>
              <li><strong>Luxury Villas & Apartments:</strong> Premium interiors with bespoke furniture, Italian marble, and high-end décor elements.</li>
            </ul>

            {/* Commercial Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Commercial Interior Design in Moradabad
            </h2>
            <p>Moradabad is witnessing rapid growth in businesses, offices, retail spaces, and showrooms. Vasterior offers tailored commercial interior design solutions including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Office Interiors:</strong> Smart layouts for better productivity and employee comfort.</li>
              <li><strong>Retail Showrooms:</strong> Creative displays and space utilization to maximize customer engagement.</li>
              <li><strong>Restaurants & Cafés:</strong> Ambience-driven interiors with thematic lighting and décor.</li>
              <li><strong>Hotels & Banquets:</strong> Luxurious interiors that enhance the hospitality experience.</li>
            </ul>

            {/* Vastu-Friendly Designs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vastu-Friendly Interior Designs
            </h2>
            <p>As the name suggests, Vasterior specializes in combining Vastu principles with modern interior design. We ensure that every project aligns with natural energy flow, creating positivity and balance in your living and working spaces.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Vastu-compliant living rooms, bedrooms, and kitchens.</li>
              <li>Energy-balancing layouts for offices and commercial spaces.</li>
              <li>Personalized consultations by certified Vastu experts.</li>
            </ul>

            {/* Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process
            </h2>
            <p>We follow a transparent and systematic approach:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation & Requirement Analysis</strong> - Understanding your needs, lifestyle, and budget.</li>
              <li><strong>Concept Development & 3D Designs</strong> - Presenting initial concepts, themes, and 3D views.</li>
              <li><strong>Material & Furniture Selection</strong> - Helping you choose the right furniture, finishes, and décor.</li>
              <li><strong>Execution & Project Management</strong> - On-site supervision, timely delivery, and quality control.</li>
              <li><strong>Handover & After-Support</strong> - Final walkthrough and post-completion assistance.</li>
            </ul>

            {/* Why Moradabad Prefers Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Moradabad Prefers Vasterior?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Trusted by hundreds of families and businesses.</li>
              <li>Expertise in local styles, brass-inspired décor, and modern trends.</li>
              <li>Strong portfolio with residential, commercial, and luxury projects.</li>
              <li>Committed to on-time project delivery.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We hired Vasterior for our villa interiors in Moradabad. The designs were elegant and perfectly aligned with our taste. Highly recommended!&quot; – Rohit Gupta, Moradabad
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior designed our new office space. The layout and lighting improved productivity, and clients love the ambience.&quot; – Shalini Sharma, Moradabad
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Best Interior Designer in Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: How much does interior designing cost in Moradabad?</h3>
                <p>A: Costs depend on project size and materials used. Vasterior offers affordable packages without compromising on quality.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Do you provide 3D design previews?</h3>
                <p>A: Yes, we provide advanced 3D visualizations before starting execution.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can you design Vastu-compliant homes?</h3>
                <p>A: Absolutely. Vasterior specializes in blending Vastu Shastra with modern design.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Do you work only in Moradabad or nearby cities as well?</h3>
                <p>A: We serve Moradabad and surrounding regions including Rampur, Bareilly, and Amroha.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: How can I book a consultation with Vasterior?</h3>
                <p>A: Simply call us or fill the form on our website. Our team will connect with you within 24 hours.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Best Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Transform your space with Vasterior – Where Creativity Meets Perfection.
            </p>
          </div>

          <PostNavigation slug="best-interior-designer-in-moradabad-up" />
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
