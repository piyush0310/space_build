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
              Complete Design & Execution – One Partner, Total Solution
            </h3>
            <p>
              Designing and setting up a home or commercial space is exciting, but it can also feel overwhelming. Coordinating architects, carpenters, electricians, suppliers, and vendors often leads to delays, miscommunication, and cost overruns. That&apos;s why turnkey interior design is the smarter way forward. At Vasterior – Turnkey Interior Designer in Moradabad, UP, we manage your entire project from concept to completion, ensuring a stress-free experience with premium results.
            </p>

            {/* What is Turnkey Interior Design */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What is Turnkey Interior Design?
            </h2>
            <p>
              Turnkey means you hand over the &quot;key&quot; to your designer — and receive the finished space ready to move in. Unlike fragmented execution, where multiple contractors handle different parts, turnkey design gives you:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>One Point of Contact</strong> – No chasing multiple vendors.</li>
              <li><strong>Cost & Time Control</strong> – Defined budgets and faster completion.</li>
              <li><strong>Design Consistency</strong> – A unified theme across your entire property.</li>
              <li><strong>Quality Assurance</strong> – Single accountability for materials and workmanship.</li>
              <li><strong>Ready-to-Use Spaces</strong> – Move into a fully styled home or office.</li>
            </ul>

            {/* Our Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Turnkey Interior Design Services in Moradabad
            </h2>
            <p>We cover every step of the interior journey under one roof.</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Design Consultation & Planning</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Understanding lifestyle, requirements, and vision.</li>
                  <li>Site surveys, space measurement, and Vastu considerations.</li>
                  <li>Mood boards and conceptual sketches.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. 3D Visualization & Drawings</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Realistic renders of every room.</li>
                  <li>Detailed drawings for carpentry, electricals, and plumbing.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Material Selection & Procurement</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Curated finishes, fabrics, lights, and furniture.</li>
                  <li>Vendor management and cost negotiations.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Civil & Structural Work</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Partitioning, flooring, ceiling works.</li>
                  <li>Renovations, extensions, and modifications.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Carpentry & Modular Solutions</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Modular kitchens, wardrobes, and storage units.</li>
                  <li>Bespoke furniture designed and crafted.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Electrical & Plumbing</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Concealed wiring, smart home systems.</li>
                  <li>Bathroom fittings and utility areas.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">7. Painting, Décor & Styling</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Wall finishes, wallpapers, and textures.</li>
                  <li>Curtains, art, lighting, and accessories.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">8. Final Handover</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Quality checks, deep cleaning, and ready-to-use delivery.</li>
                </ul>
              </div>
            </div>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Turnkey Interior Designer in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>End-to-End Execution</strong> – From bare shell to styled interiors.</li>
              <li><strong>Single Responsibility</strong> – No confusion between multiple vendors.</li>
              <li><strong>Premium Quality</strong> – Materials and workmanship guaranteed.</li>
              <li><strong>Time Efficiency</strong> – Faster project delivery.</li>
              <li><strong>Transparent Costs</strong> – Fixed estimates with no hidden surprises.</li>
              <li><strong>Trusted Expertise</strong> – Villas, kothis, apartments, offices, and farmhouses designed across UP.</li>
            </ul>

            {/* Our Specialization */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Specialization in Turnkey Projects
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Residential</strong> – Villas, kothis, apartments, farmhouses.</li>
              <li><strong>Commercial</strong> – Offices, retail showrooms, hospitality spaces.</li>
              <li><strong>Luxury Projects</strong> – Premium finishes, imported materials, and smart automation.</li>
              <li><strong>Budget-Friendly Options</strong> – Practical turnkey solutions without compromising on design.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Turnkey Interior Design
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Peace of Mind</strong> – One partner for all aspects of design and execution.</li>
              <li><strong>Consistency</strong> – Same quality across all rooms and zones.</li>
              <li><strong>Customization</strong> – Every project designed uniquely for the client.</li>
              <li><strong>Saves Time & Effort</strong> – Avoids constant coordination.</li>
              <li><strong>Future-Ready Spaces</strong> – Designs that are durable, stylish, and adaptable.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted a turnkey solution for our 4BHK villa in Moradabad. Vasterior managed everything — from kitchen to décor — and delivered on time.&quot; – Anil & Ritu Kapoor
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Turnkey interiors by Vasterior saved us so much stress. We literally got our keys back to a finished home!&quot; – Sameer & Priya Sharma
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Turnkey Interior Designer Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: How is turnkey interior design different from hiring contractors individually?</h3>
                <p>A: With turnkey design, Vasterior manages everything under one contract. You don&apos;t have to coordinate with multiple vendors.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Is turnkey interior design more expensive?</h3>
                <p>A: Not necessarily. Since we manage materials and labor together, you often save cost compared to fragmented work.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you handle both design and execution?</h3>
                <p>A: Yes, we manage end-to-end projects from concept, design, and material selection to final styling.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Can turnkey interiors include modular kitchens and wardrobes?</h3>
                <p>A: Absolutely. Modular solutions are a core part of our turnkey projects.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: What types of spaces do you handle?</h3>
                <p>A: We specialize in both residential (villas, farmhouses, apartments) and commercial (offices, showrooms, restaurants) turnkey interiors.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Turnkey Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Delivering Complete Turnkey Interiors in Moradabad with Style, Precision & Reliability.
            </p>
          </div>

          <PostNavigation slug="turnkey-interior-designer-moradabad-up" />
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
