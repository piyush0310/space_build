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
              Stylish & Budget-Friendly Interiors Tailored for You
            </h3>
            <p>
              Everyone dreams of a beautifully designed home or office, but many believe that interior designing is expensive. At Vasterior – Affordable Interior Designer in Moradabad, UP, we break this myth by delivering premium quality interiors at pocket-friendly costs. Whether you want to renovate your home, set up a modern office, or design a retail showroom in Moradabad, our team ensures that style and functionality come together without exceeding your budget.
            </p>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior as the Most Affordable Interior Designer in Moradabad?
            </h2>
            <p>
              Moradabad is a city of art, culture, and evolving modern lifestyles. Families and businesses here are seeking interiors that are functional, elegant, and cost-effective. Vasterior is trusted because:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Budget-Friendly Packages</strong> – Transparent pricing with customized plans for every client.</li>
              <li><strong>Smart Space Planning</strong> – Maximizing utility of every inch without unnecessary costs.</li>
              <li><strong>Stylish Yet Durable Designs</strong> – Cost-effective materials that look premium and last long.</li>
              <li><strong>Personalized Concepts</strong> – Tailored designs based on your lifestyle and preferences.</li>
              <li><strong>Complete End-to-End Solutions</strong> – From planning to final handover, managed professionally.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Affordable Interior Design Services in Moradabad
            </h2>
            <p>At Vasterior, affordability doesn&apos;t mean compromise. We offer complete interior solutions at reasonable costs:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Affordable Residential Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Elegant living room designs with budget-friendly furniture and lighting.</li>
                  <li>Cost-efficient bedroom makeovers with customized wardrobes.</li>
                  <li>Modular kitchens using durable yet economical materials.</li>
                  <li>Bathroom upgrades with modern fittings that suit your budget.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Affordable Commercial Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Budget-friendly office interiors designed for productivity.</li>
                  <li>Showroom interiors with smart product display layouts.</li>
                  <li>Cost-efficient restaurant & café interiors with appealing themes.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Affordable Renovations</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Full home renovations within budget.</li>
                  <li>Cost-effective kitchen and bathroom upgrades.</li>
                  <li>Revamping old offices into modern workplaces.</li>
                </ul>
              </div>
            </div>

            {/* How We Make Interiors Affordable */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How We Make Interiors Affordable Without Compromise
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Smart Material Selection</strong> – We suggest alternatives that look premium but cost less.</li>
              <li><strong>Space Utilization</strong> – Intelligent layouts to reduce wastage and unnecessary expenses.</li>
              <li><strong>Customized Furniture</strong> – Designed as per your needs, saving extra purchase costs.</li>
              <li><strong>Modular Approach</strong> – Flexible designs that allow staged implementation.</li>
              <li><strong>Local Sourcing</strong> – Using locally available high-quality materials from Moradabad to reduce costs.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Choosing Vasterior for Affordable Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Get premium designs at competitive prices.</li>
              <li>Save money without sacrificing style or comfort.</li>
              <li>Transparent pricing – no hidden costs.</li>
              <li>On-time project delivery.</li>
              <li>Personalized attention for every project.</li>
            </ul>

            {/* Why Moradabad Prefers Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Moradabad Prefers Vasterior for Budget-Friendly Interiors?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Strong reputation as an affordable yet high-quality interior designer.</li>
              <li>Trusted by families, businesses, and professionals across Moradabad.</li>
              <li>Blend of modern trends with Vastu principles.</li>
              <li>Wide portfolio covering residential, commercial, and renovation projects.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We thought interior designing would be out of budget, but Vasterior delivered a stunning living room makeover at an affordable cost. Highly recommended!&quot; – Nitin Sharma, Moradabad
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our office renovation was handled by Vasterior, and they gave us a modern design within our budget. Professional and reliable team.&quot; – Kavita Jain, Moradabad
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Affordable Interior Designer in Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Can interiors really be affordable in Moradabad?</h3>
                <p>A: Yes, Vasterior offers cost-effective interior packages without compromising on quality.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: What is the minimum budget for interior designing in Moradabad?</h3>
                <p>A: Budgets vary based on project size and materials, but we provide flexible plans for all clients.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you provide modular kitchens at affordable rates?</h3>
                <p>A: Absolutely. Our modular kitchen designs are durable, stylish, and budget-friendly.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Can I renovate only one room within a limited budget?</h3>
                <p>A: Yes, we also take small-scale renovation projects for specific rooms.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you provide free consultation for budget interior planning?</h3>
                <p>A: We provide initial consultation and cost estimation to help you plan better.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Affordable Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Designing Affordable Interiors in Moradabad with Style, Comfort, and Value.
            </p>
          </div>

          <PostNavigation slug="affordable-interior-designer-moradabad-up" />
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
