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
              Your Local Choice for Premium Interiors in Moradabad & Surrounding Areas
            </h3>
            <p>
              Looking for an interior designer near Moradabad, UP who understands local tastes, climate, and budgets? Vasterior is your trusted partner. We offer full-service interior design solutions for homes, flats, offices, and commercial spaces across Moradabad and in the adjoining towns and suburbs. If you are in Amroha, Rampur, Bijnor, or other nearby districts, Vasterior is just your neighborhood interior design expert.
            </p>

            {/* Why Vasterior Is the Best */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Is the Best Interior Designer Near Moradabad
            </h2>
            <p>
              Choosing a designer nearby has several advantages — responsive service, on-site supervision, and familiarity with local suppliers. Here&apos;s why Vasterior stands out:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Local Presence & Understanding</h3>
                <p>We know Moradabad and its surroundings: climate, materials, local style preferences, and vendors.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Proximity for Better Supervision</h3>
                <p>Being nearby means faster site visits, real-time corrections, and closer quality control.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cost Efficiency & Reduced Logistics</h3>
                <p>Fewer transport costs, more accessible sourcing, and less risk in delivery of furniture, materials, and fixtures.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Reliable & Transparent Execution</h3>
                <p>We manage projects with integrity, timelines, and clear communication—even in nearby towns.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Wide Regional Service</h3>
                <p>Besides Moradabad, we serve cities and districts like Rampur, Amroha, Sambhal, Bijnor, Bareilly&apos;s outskirts, and more.</p>
              </div>
            </div>

            {/* Areas Covered */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Areas Covered Around Moradabad
            </h2>
            <p>Here are some areas around Moradabad where Vasterior delivers best-in-class interior design:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Rampur</li>
              <li>Amroha</li>
              <li>Sambhal</li>
              <li>Bijnor</li>
              <li>Bareilly (outer suburbs)</li>
              <li>Shahjahanpur outskirts</li>
              <li>Nearby villages & townships within ~60 km radius</li>
            </ul>
            <p className="mt-4">
              So even if your location is not strictly &quot;in Moradabad,&quot; Vasterior is the &quot;Best Interior Designer Near Moradabad&quot; available to you.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Interior Design Services (Near Moradabad)
            </h2>
            <p>We offer complete design services across sectors and scales, tailored for both local and suburban clients:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Residential Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Living rooms, bedrooms, kitchens, bathrooms</li>
                  <li>Modular kitchens, wardrobes, TV units, storage solutions</li>
                  <li>Custom furniture, lighting, and décor</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Commercial & Office Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Offices, co-working spaces, showrooms</li>
                  <li>Retail outlets, cafés, salons, service centers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Renovations & Upgrades</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Partial or full home renovations</li>
                  <li>Office revamps, façade upgrades</li>
                  <li>Kitchen and bathroom makeovers</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Villas, Bungalows & Luxury Homes</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>High-end finishes, personalized themes</li>
                  <li>Smart home integration, landscaping, terraces</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vastu & Functional Design</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Vastu-aware layouts</li>
                  <li>Energy-efficient design</li>
                  <li>Climate-appropriate materials (heat, humidity control, ventilation)</li>
                </ul>
              </div>
            </div>

            {/* Design Approach */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Approach Near You
            </h2>
            <p>We follow a proven, transparent process that works effectively especially for nearby projects:</p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Consultation & Site Visit</strong> - We visit your location to assess layout, light, structure, and your needs.</li>
              <li><strong>Concept & Mood Boards</strong> - You see proposed themes, color palettes, furniture styles.</li>
              <li><strong>3D Visualization & Revisions</strong> - Realistic 3D renders help you visualize before execution.</li>
              <li><strong>Material & Vendor Selection</strong> - We pick durable, locally available materials and trusted vendors.</li>
              <li><strong>Project Execution & Supervision</strong> - Frequent on-site checks, quality assurance, and timely updates.</li>
              <li><strong>Handover & After-Support</strong> - Final walkthrough, corrections, and post-project support.</li>
            </ul>

            {/* Benefits of Local Designer */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Working with a Local Designer
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Faster response time for site issues and changes</li>
              <li>Lower logistics cost on transport of materials and furniture</li>
              <li>Better regional knowledge of suppliers, material quality, weather-compatibility</li>
              <li>Easier coordination and site meetings</li>
              <li>Trust & reputation in your locale</li>
            </ul>

            {/* What Makes Vasterior Different */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Vasterior Different
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>A strong portfolio of residential, commercial, and luxury projects</li>
              <li>Skilled team of architects, interior designers, and project managers</li>
              <li>Transparent pricing and no hidden costs</li>
              <li>On-time delivery and reliable execution</li>
              <li>After-care support and warranty services</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials from Nearby Areas
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Though our house is in Rampur (just outside Moradabad), we hired Vasterior. Their site visits were prompt, and the end result was stunning.&quot; – Meena Singh, Rampur
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior designed our office near Sambhal. They understood local sensibilities and executed perfectly.&quot; – Rajesh Patel, Sambhal
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Best Interior Designer Near Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you operate outside Moradabad city limits?</h3>
                <p>A: Yes, we cover towns and villages within ~60 km of Moradabad including Rampur, Amroha, Bijnor, and more.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Does the travel cost get added if I live outside Moradabad?</h3>
                <p>A: For sites farther out, nominal travel or logistics costs might apply, but we strive for minimal overhead.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can I get the same design quality in nearby areas as in Moradabad?</h3>
                <p>A: Absolutely. Our standards remain consistent wherever your site is.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does a typical project take near Moradabad?</h3>
                <p>A: Depending on size and scope—residences 8–12 weeks, commercial projects 10–16 weeks.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: How do I start with Vasterior in my area?</h3>
                <p>A: Just call or email us. We&apos;ll schedule a preliminary visit and share a proposal.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Best Interior Designer Near Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Serving:</strong> Moradabad and Nearby Areas, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gamil.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Your Local Interior Design Expert Near Moradabad, Delivering Beauty, Function, and Value.
            </p>
          </div>

          <PostNavigation slug="best-interior-designer-near-moradabad-up" />
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
