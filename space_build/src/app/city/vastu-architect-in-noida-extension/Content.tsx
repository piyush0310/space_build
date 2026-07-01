// components/WeddingPageContent.js
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
            <p>
              Noida Extension, also known as Greater Noida West, has rapidly grown into one of the most desirable residential and commercial destinations in Uttar Pradesh. With its premium societies, luxury villas, IT hubs, and retail complexes, the area is filled with opportunities for families, professionals, and businesses. But when it comes to constructing or designing a property, it&apos;s not just the architecture that matters—it&apos;s also the energy balance that defines long-term peace, prosperity, and success.
            </p>
            <p>
              This is where Vasterior, your trusted Vastu Architect in Noida Extension, makes a difference. We combine architectural planning with Vastu Shastra principles to create homes, offices, and commercial spaces that are both modern and energetically aligned.
            </p>

            {/* Why Choose Vastu Architect */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose a Vastu Architect in Noida Extension?
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Seamless Integration of Design & Energy</strong> - Unlike conventional architects who focus only on space utilization, a Vastu architect ensures every design element aligns with natural energies.</li>
              <li><strong>Peace, Prosperity, and Health</strong> - From entrances to bedrooms and kitchens, layouts are designed to enhance well-being and attract prosperity.</li>
              <li><strong>Customized for Modern Living</strong> - Whether you&apos;re building a 2BHK flat, a villa, or a corporate office in Techzone, our designs adapt Vastu to modern architectural needs.</li>
              <li><strong>Future-Ready Homes & Workspaces</strong> - With balanced energy, properties designed by Vastu architects retain harmony and value for generations.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Vastu Architecture Services
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Residential Vastu Architecture</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Floor plan design aligned with Vastu directions.</li>
                  <li>Placement of bedrooms, kitchens, pooja rooms, and balconies.</li>
                  <li>Villa and apartment layouts ensuring harmony for families.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Office & Commercial Vastu Architecture</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Workspace planning for productivity and success.</li>
                  <li>CEO cabins, meeting rooms, and reception aligned for prosperity.</li>
                  <li>Co-working and IT firm layouts for teamwork and focus.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Retail & Showroom Vastu Architecture</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Entrance orientation to attract maximum footfall.</li>
                  <li>Display and counter placements for consistent sales.</li>
                  <li>Interiors designed to improve customer experience.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Plot & Pre-Construction Vastu Architecture</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Evaluation of plot shape, slope, and directions.</li>
                  <li>Best orientation for entrances, water sources, and utilities.</li>
                  <li>Construction blueprints prepared with Vastu alignment.</li>
                </ul>
              </div>
            </div>

            {/* Why Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Trusted Vastu Architect in Noida Extension
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Certified Expertise</strong> – Backed by both architectural and Vastu Shastra knowledge.</li>
              <li><strong>Local Experience</strong> – Familiarity with layouts in Gaur City, Panchsheel Greens, Eco Village, Ajnara Homes, and commercial hubs.</li>
              <li><strong>Practical Solutions</strong> – Focus on functional, stylish, and Vastu-compliant designs.</li>
              <li><strong>Affordable Packages</strong> – Tailored solutions for every budget.</li>
              <li><strong>Trusted by Families & Businesses</strong> – Proven record of successful projects across Noida Extension.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Hiring a Vastu Architect
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Balanced Living</strong> – Homes designed for harmony and peace.</li>
              <li><strong>Financial Prosperity</strong> – Offices and shops aligned to attract wealth.</li>
              <li><strong>Better Health</strong> – Layouts that support overall well-being.</li>
              <li><strong>Career & Academic Growth</strong> – Optimized study and workspaces for focus.</li>
              <li><strong>Future Security</strong> – A property that supports long-term success.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process of Vastu Architecture
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Consultation</strong> – Understanding client needs, goals, and property details.</li>
              <li><strong>Site & Plot Analysis</strong> – Directional study of land and surroundings.</li>
              <li><strong>Blueprint Design</strong> – Preparing Vastu-compliant architectural plans.</li>
              <li><strong>Implementation Support</strong> – Guiding construction teams for alignment.</li>
              <li><strong>Follow-Up</strong> – Ensuring smooth energy flow after project completion.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension Clients
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior designed our villa in Gaur City with Vastu principles. The result is both modern and peaceful.&quot; – Family, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;As a startup owner, I wanted an office aligned with Vastu. Vasterior&apos;s architectural design in Techzone boosted our productivity.&quot; – Entrepreneur.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our retail showroom in Eco Village Arcade is now more welcoming. Customers spend more time, and sales have increased.&quot; – Shop Owner, Sector 4.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Architect in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. How is a Vastu architect different from a regular architect?</h3>
                <p>A Vastu architect blends architectural design with Vastu principles to ensure harmony and prosperity.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do Vastu architects only work on new constructions?</h3>
                <p>No, we also provide renovation and remodeling guidance to bring existing structures in alignment.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Is it costly to hire a Vastu architect?</h3>
                <p>Not at all. Vasterior offers affordable packages for homes, offices, and shops.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide online architectural guidance?</h3>
                <p>Yes, we provide both on-site and virtual consultations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Can small flats also benefit from Vastu architecture?</h3>
                <p>Absolutely. Even compact apartments can be designed for energy balance.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In the thriving hub of Noida Extension, Uttar Pradesh, modern architecture must go hand-in-hand with natural energy alignment. A Vastu architect ensures your home, office, or retail space not only looks beautiful but also supports prosperity, peace, and success.
            </p>
            <p className="mt-4">
              At Vasterior, we specialize in delivering Vastu-compliant architectural designs that are modern, practical, and effective. Whether it&apos;s a residential flat, a luxurious villa, a startup office, or a retail showroom, our solutions bring balance and positivity to every corner.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Vastu Architect in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gmail.com</p>
            </div>
          </div>
          <PostNavigation slug="vastu-architect-in-noida-extension" />
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