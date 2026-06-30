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
              Creating Elegant, Comfortable, and Functional Homes in Moradabad
            </h3>
            <p>
              Your home is where your story begins. It reflects your lifestyle, emotions, and personality. Designing a residence is not only about beauty but also about comfort, functionality, and harmony. As the leading Residential Interior Designer in Moradabad, UP, Vasterior specializes in designing homes that are modern, luxurious, and Vastu-compliant. Whether you own an apartment, villa, or bungalow, we create personalized interiors that match your dreams.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Residential Interior Design in Moradabad?
            </h2>
            <p>
              Moradabad, also called the Brass City of India, is known for its artistic culture and fast-growing modern lifestyle. Families today want homes that balance traditional values with modern elegance. This is where Vasterior comes in:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personalized Home Designs</strong> – Every family is unique, so we design spaces that reflect your lifestyle.</li>
              <li><strong>Expert Team of Interior Designers</strong> – Skilled architects, designers, and project managers for flawless results.</li>
              <li><strong>Complete Residential Solutions</strong> – From living rooms to modular kitchens, bedrooms, and bathrooms.</li>
              <li><strong>3D Visualization & Planning</strong> – Preview your dream home before actual execution.</li>
              <li><strong>Affordable Luxury</strong> – Elegant residential designs at competitive costs.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Residential Interior Design Services in Moradabad
            </h2>
            <p>We cover every corner of your home with thoughtful planning and stylish design.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Living Room Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Elegant seating layouts for family time and gatherings.</li>
                  <li>Premium flooring, wall finishes, and feature walls.</li>
                  <li>Designer ceilings with modern lighting.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Bedroom Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cozy, calming, and luxury-driven bedroom designs.</li>
                  <li>Customized wardrobes, headboards, and storage solutions.</li>
                  <li>Ambient lighting and soothing color palettes.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Modular Kitchens</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Smart storage, modern countertops, and appliances.</li>
                  <li>Functional yet stylish layouts (L-shape, U-shape, island kitchens).</li>
                  <li>Easy-to-maintain finishes with long durability.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Kids&apos; Room Designs</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Safe, creative, and vibrant interiors for children.</li>
                  <li>Customized furniture and playful colors.</li>
                  <li>Practical storage to keep the room clutter-free.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Bathroom Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Premium fittings, anti-skid tiles, and smart layouts.</li>
                  <li>Spa-inspired, luxurious designs for relaxation.</li>
                  <li>Compact solutions for small bathrooms.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Luxury Villas & Apartments</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>High-end interiors with bespoke furniture and finishes.</li>
                  <li>Italian marble, premium décor, and smart technology.</li>
                  <li>Personalized concepts that match your lifestyle.</li>
                </ul>
              </div>
            </div>

            {/* Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process
            </h2>
            <p>At Vasterior, we believe in a systematic and transparent process:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation</strong> – Understanding your family&apos;s lifestyle and requirements.</li>
              <li><strong>Concept & Planning</strong> – Initial design layouts and 3D visuals.</li>
              <li><strong>Material Selection</strong> – Helping you choose the right furniture, finishes, and décor.</li>
              <li><strong>Execution</strong> – Professional supervision for timely completion.</li>
              <li><strong>Final Handover</strong> – Delivering your dream home with perfection.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Hiring Vasterior for Residential Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personalized Comfort</strong> – Homes designed as per your family&apos;s taste.</li>
              <li><strong>Better Functionality</strong> – Practical layouts that save space.</li>
              <li><strong>Higher Property Value</strong> – Modern interiors increase resale worth.</li>
              <li><strong>Vastu-Compliant Designs</strong> – Balanced spaces with positive energy.</li>
              <li><strong>Hassle-Free Execution</strong> – From start to finish, everything is managed by our team.</li>
            </ul>

            {/* Why Moradabad Families Trust Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Moradabad Families Trust Vasterior?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Strong track record in residential interior projects.</li>
              <li>Deep knowledge of local tastes, cultural heritage, and modern trends.</li>
              <li>Trusted for on-time delivery and transparent pricing.</li>
              <li>Portfolio covering apartments, villas, bungalows, and premium residences.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior designed our apartment interiors beautifully. The modular kitchen and living room makeover were beyond expectations.&quot; – Sonia Agarwal, Moradabad
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our villa was transformed into a luxurious residence by Vasterior. The team handled everything from design to execution perfectly.&quot; – Rajeev Khanna, Moradabad
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Residential Interior Designer in Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you design only apartments or villas too?</h3>
                <p>A: We design apartments, villas, bungalows, and luxury residences in Moradabad.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: How much does residential interior designing cost in Moradabad?</h3>
                <p>A: Costs depend on project size and materials, but we offer affordable packages.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you provide Vastu-compliant residential designs?</h3>
                <p>A: Yes, Vasterior specializes in blending Vastu Shastra with modern aesthetics.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Can you design homes in traditional as well as modern styles?</h3>
                <p>A: Absolutely. We provide both heritage-inspired and contemporary concepts.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: How do I start my residential interior project with Vasterior?</h3>
                <p>A: Simply call or email us. Our team will schedule a consultation and site visit.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Residential Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gamil.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Residential Spaces in Moradabad with Comfort, Elegance & Modern Luxury.
            </p>
          </div>

          <PostNavigation slug="residential-interior-designer-moradabad-up" />
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
