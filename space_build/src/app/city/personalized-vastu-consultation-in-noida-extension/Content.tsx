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
              Every home, office, or commercial property is unique—so why should Vastu remedies be the same for everyone? In the fast-developing region of Noida Extension (Greater Noida West), Uttar Pradesh, thousands of families, professionals, and entrepreneurs are searching for customized Vastu solutions that fit their lifestyle, property type, and budget.
            </p>
            <p>
              At Vasterior, we specialize in personalized Vastu consultation in Noida Extension, offering tailor-made guidance that blends ancient Vastu Shastra principles with modern practicality. Unlike generic advice, our personalized approach ensures that every remedy is specific to your space, your challenges, and your goals.
            </p>

            {/* Why Choose Personalized Vastu Consultation */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Personalized Vastu Consultation?
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Every Space is Different</strong> - Two flats in the same society may have different entrances, layouts, and energy imbalances. Personalized Vastu adapts remedies to your exact situation.</li>
              <li><strong>Lifestyle-Centric Solutions</strong> - Families, bachelors, entrepreneurs, and shop owners all need unique approaches. What works for one may not work for another.</li>
              <li><strong>Goal-Oriented Corrections</strong> - Whether you want financial stability, family peace, better health, or business growth—personalized consultation focuses on your objectives.</li>
              <li><strong>Practical Remedies</strong> - We recommend non-demolition solutions such as mirror placement, crystals, pyramids, and colors—easy to apply in modern apartments and offices.</li>
              <li><strong>Affordable & Flexible</strong> - Personalized doesn&apos;t mean expensive—our packages are designed to fit all budgets.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Personalized Vastu Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Home & Apartment Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom and kitchen corrections suited to your floor plan.</li>
                  <li>Entrance and living room alignment to welcome positivity.</li>
                  <li>Remedies for rented flats where changes are limited.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Office & Workplace Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Desk and cabin placements customized for your profession.</li>
                  <li>Team seating and conference layouts for improved productivity.</li>
                  <li>Personalized remedies for stress-free and focused work environments.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Retail & Shop Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Tailored corrections for cash counter placement.</li>
                  <li>Product display strategies suited to your store size.</li>
                  <li>Remedies for increasing customer flow and sales.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Plot & Pre-Construction Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Personalized analysis of land shape, slope, and surroundings.</li>
                  <li>Blueprint modifications before construction begins.</li>
                  <li>Guidance on entrances, utilities, and room allocations.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Personalized Remedies Without Renovation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Specific use of crystals, pyramids, and color therapy.</li>
                  <li>Placement-based corrections for unique property challenges.</li>
                  <li>Tailored energy balancing methods for long-term results.</li>
                </ul>
              </div>
            </div>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Right Choice for Personalized Vastu
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Expertise</strong> – Years of experience across apartments, villas, offices, and shops in Greater Noida West.</li>
              <li><strong>Tailored Solutions</strong> – No generic advice, only remedies crafted for your specific needs.</li>
              <li><strong>Logical & Practical</strong> – Focus on real-world corrections, not superstition.</li>
              <li><strong>Flexible Consultation Options</strong> – On-site visits and online sessions available.</li>
              <li><strong>Trusted by Clients</strong> – Families and businesses across Noida Extension rely on Vasterior&apos;s personalized approach.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Personalized Vastu Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Specific to Your Needs</strong> – Every solution is custom-designed for your property.</li>
              <li><strong>Better Results</strong> – Tailored remedies show faster and more effective improvements.</li>
              <li><strong>Peace & Prosperity</strong> – Homes become calmer and more supportive of relationships.</li>
              <li><strong>Business Growth</strong> – Offices and shops see improved productivity and financial flow.</li>
              <li><strong>Long-Term Stability</strong> – Personalized corrections ensure lasting positivity.</li>
            </ul>

            {/* Our Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process of Personalized Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Interaction</strong> – Understanding your concerns, goals, and lifestyle.</li>
              <li><strong>Layout Analysis</strong> – Reviewing your property&apos;s floor plan and orientation.</li>
              <li><strong>Tailored Report</strong> – Remedies crafted for your unique requirements.</li>
              <li><strong>Implementation Guidance</strong> – Step-by-step corrections provided.</li>
              <li><strong>Follow-Up</strong> – Continued support to ensure visible results.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Clients in Noida Extension
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted solutions for our 3BHK flat in Gaur City without structural changes. Vasterior&apos;s personalized remedies worked wonders.&quot; – Family, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;As entrepreneurs, we needed office-specific guidance. Their tailored approach boosted our productivity.&quot; – Startup Owner, Techzone.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our shop in Eco Village Arcade had poor customer flow. After personalized consultation, sales improved steadily.&quot; – Retailer, Greater Noida West.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Personalized Vastu Consultation in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. How is personalized Vastu different from general Vastu advice?</h3>
                <p>Personalized consultation is tailored to your property layout, goals, and challenges.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do I need to share my floor plan?</h3>
                <p>Yes, it helps us design precise remedies for your space.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Are remedies costly?</h3>
                <p>No, we focus on affordable, non-demolition corrections.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Can personalized Vastu work for rented apartments or offices?</h3>
                <p>Yes, our solutions adapt easily without requiring permanent changes.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Do you provide online personalized consultations?</h3>
                <p>Yes, we offer both on-site and virtual consultations for convenience.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a modern hub like Noida Extension, Uttar Pradesh, no two properties are the same—so why settle for generic remedies? With Vasterior&apos;s personalized Vastu consultation, you get tailored solutions designed specifically for your apartment, villa, office, shop, or plot.
            </p>
            <p className="mt-4">
              Our practical and affordable remedies ensure that your space aligns with natural energies to support peace, prosperity, health, and long-term growth.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Personalized Vastu Consultation in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> info@spacebuild.com</p>
            </div>
          </div>
          <PostNavigation slug="personalized-vastu-consultation-in-noida-extension" />
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