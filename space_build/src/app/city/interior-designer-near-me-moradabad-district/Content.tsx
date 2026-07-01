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
              Your Local Interior Design Partner in Moradabad District
            </h3>
            <p>
              When you search for &quot;Interior Designer Near Me in Moradabad District, UP&quot;, you want a company that is reliable, local, and affordable while delivering premium design. That&apos;s where Vasterior comes in. We specialize in residential, commercial, and renovation interiors across the entire Moradabad District — from the city center to nearby towns, villages, and industrial areas.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Interiors in Moradabad District?
            </h2>
            <p>
              Moradabad District is a blend of rich heritage, fast-growing industries, and modern lifestyles. Families, businesses, and professionals here want interiors that reflect style, functionality, and cultural balance. Vasterior is trusted because:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Nearby & Accessible</strong> – Local presence ensures faster service and site visits.</li>
              <li><strong>District-Wide Coverage</strong> – Serving Moradabad city, Rampur border, Sambhal, Amroha side, and nearby villages.</li>
              <li><strong>Affordable Luxury</strong> – Premium interiors at competitive costs.</li>
              <li><strong>Personalized Concepts</strong> – Every project tailored to lifestyle, budget, and local sensibilities.</li>
              <li><strong>End-to-End Execution</strong> – From design consultation to execution, everything handled under one roof.</li>
            </ul>

            {/* Areas Served */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Areas We Serve in Moradabad District
            </h2>
            <p>Vasterior proudly delivers projects across:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Moradabad city & surrounding colonies (Civil Lines, Budh Bazaar, Kanth Road, Delhi Road)</li>
              <li>Towns near Moradabad – Chandausi, Bilari, Kundarki, Bahjoi</li>
              <li>Industrial & suburban belts – Pakbara, Lajpat Nagar, Bhojpur</li>
              <li>Nearby districts & border areas – Rampur, Amroha, Sambhal, Bijnor fringes</li>
            </ul>
            <p className="mt-4">
              Wherever you are in Moradabad District, Vasterior is your answer to &quot;Interior Designer Near Me.&quot;
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Interior Design Services in Moradabad District
            </h2>
            <p>We design and execute interiors for both residential and commercial spaces:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Residential Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Living Rooms – Designer ceilings, wallpapers, lighting, and storage.</li>
                  <li>Bedrooms – Custom wardrobes, cozy themes, space-saving layouts.</li>
                  <li>Modular Kitchens – Compact, stylish, and highly functional.</li>
                  <li>Bathrooms – Modern fittings, anti-skid tiles, spa-like touches.</li>
                  <li>Kids&apos; Rooms – Safe, playful, and creative.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Commercial Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Offices – Productive layouts with modern furniture.</li>
                  <li>Retail Showrooms – Smart display and customer-friendly designs.</li>
                  <li>Restaurants & Cafés – Ambience-driven interiors.</li>
                  <li>Banquets & Hotels – Luxury spaces for hospitality.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Renovations</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Full home makeovers and modern upgrades.</li>
                  <li>Office & shop renovations.</li>
                  <li>Modular conversions of old kitchens and bathrooms.</li>
                </ul>
              </div>
            </div>

            {/* Design Approach */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Approach
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation & Site Visit</strong> – Understanding your space, family/business needs, and budget.</li>
              <li><strong>Concept & Layout Planning</strong> – Presenting mood boards, sketches, and ideas.</li>
              <li><strong>3D Visualization</strong> – Realistic previews of your interiors.</li>
              <li><strong>Material Selection</strong> – Local, durable, and budget-friendly options.</li>
              <li><strong>Execution</strong> – Professional supervision for quality assurance.</li>
              <li><strong>Final Handover</strong> – Ready-to-use interiors with after-support.</li>
            </ul>

            {/* Benefits of Local Designer */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Hiring a Local Interior Designer in Moradabad District
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Quick Response</strong> – Faster service compared to out-station firms.</li>
              <li><strong>Lower Logistics Cost</strong> – Affordable sourcing and material delivery.</li>
              <li><strong>Local Vendor Network</strong> – Trusted carpenters, painters, and suppliers.</li>
              <li><strong>Better Cultural Understanding</strong> – Designs aligned with Moradabad&apos;s lifestyle.</li>
              <li><strong>On-Site Flexibility</strong> – Easier modifications during execution.</li>
            </ul>

            {/* Why Vasterior is Top Choice */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Top Interior Designer Near You
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Trusted by families and businesses across Moradabad District.</li>
              <li>Experience in apartments, villas, kothis, flats, offices, and retail spaces.</li>
              <li>Transparent pricing, no hidden charges.</li>
              <li>Blend of Vastu principles with modern trends.</li>
              <li>Commitment to on-time project delivery.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We searched for an interior designer near me in Moradabad and found Vasterior. They designed our 3BHK beautifully within budget.&quot; – Vikas Sharma, Civil Lines Moradabad
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our shop in Chandausi was renovated by Vasterior. The design improved customer flow and sales. Great team!&quot; – Rohit Kumar, Chandausi
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Interior Designer Near Me in Moradabad District
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you serve areas outside Moradabad city?</h3>
                <p>A: Yes, we serve the entire Moradabad District including towns and villages nearby.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Is it affordable to hire Vasterior in Moradabad?</h3>
                <p>A: Absolutely. We provide flexible packages for every budget.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you handle both homes and commercial spaces?</h3>
                <p>A: Yes, we design residences, flats, kothis, offices, showrooms, and restaurants.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How do I start with Vasterior if I live in a nearby town?</h3>
                <p>A: Simply call or email us. Our team will schedule a site visit.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Can you design interiors in traditional as well as modern styles?</h3>
                <p>A: Yes, we customize according to your preferences—heritage, modern, or fusion.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Interior Designer Near Me in Moradabad District
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad District, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gmail.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Homes & Businesses Across Moradabad District with Style, Comfort, and Value.
            </p>
          </div>

          <PostNavigation slug="interior-designer-near-me-moradabad-district-up" />
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
