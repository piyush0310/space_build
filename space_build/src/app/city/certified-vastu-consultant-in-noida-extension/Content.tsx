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
              Noida Extension (Greater Noida West), Uttar Pradesh has rapidly grown into one of the most prominent residential and commercial destinations in the NCR. With premium societies, modern villas, IT hubs, and retail complexes, the region is attracting families and entrepreneurs in huge numbers. But while architecture and interiors add comfort, the true essence of harmony and prosperity lies in the balance of energies within the space.
            </p>
            <p>
              That is where a Certified Vastu Consultant becomes essential. At Vasterior, we bring credibility, professionalism, and proven expertise as a certified Vastu consultant in Noida Extension, offering authentic guidance that blends traditional Vastu Shastra wisdom with modern practicality.
            </p>

            {/* Why Choose Certified Vastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose a Certified Vastu Consultant in Noida Extension?
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Professional Expertise</strong> - Certified consultants undergo structured training and bring deeper knowledge compared to general practitioners.</li>
              <li><strong>Authenticity & Trust</strong> - Certification ensures solutions are backed by standardized knowledge and ethics.</li>
              <li><strong>Results with Logic</strong> - Certified experts focus on practical, science-based remedies rather than superstition.</li>
              <li><strong>Tailored Solutions for Modern Living</strong> - From high-rise apartments to offices in Techzone and Knowledge Park, certified professionals provide remedies that fit today&apos;s compact and commercial spaces.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Certified Vastu Services
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Residential Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom, kitchen, and living room alignment.</li>
                  <li>Entrance and balcony positioning for prosperity.</li>
                  <li>Non-demolition remedies for apartments and villas.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Commercial & Office Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Correct cabin and workstation alignment.</li>
                  <li>Reception and conference room orientation.</li>
                  <li>Remedies for stress-free and productive workspaces.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Retail & Showroom Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cash counter placement for revenue growth.</li>
                  <li>Product display strategies to attract buyers.</li>
                  <li>Entrance corrections to increase footfall.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Plot & Pre-Construction Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Certified evaluation of plot direction, slope, and shape.</li>
                  <li>Layout planning for long-term stability.</li>
                  <li>Best positioning for entrances, water, and workspaces.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Non-Demolition Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use of crystals, pyramids, and color therapy.</li>
                  <li>Practical placement-based corrections.</li>
                  <li>Easy adjustments that deliver lasting change.</li>
                </ul>
              </div>
            </div>

            {/* Why Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Certified Choice in Noida Extension
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Certified Expertise</strong> – Backed by authentic Vastu training and knowledge.</li>
              <li><strong>Local Experience</strong> – Extensive projects in Noida Extension&apos;s residential and commercial spaces.</li>
              <li><strong>Practical Remedies</strong> – Budget-friendly solutions, no structural breakage.</li>
              <li><strong>Trusted Results</strong> – Clients consistently report improvements in peace, growth, and well-being.</li>
              <li><strong>Flexible Consultations</strong> – Both on-site visits and virtual sessions available.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Consulting a Certified Vastu Expert
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Financial Stability</strong> – Better cash flow and prosperity for homes and businesses.</li>
              <li><strong>Family Peace</strong> – Stronger relationships and reduced conflicts.</li>
              <li><strong>Health Benefits</strong> – Balanced spaces support overall well-being.</li>
              <li><strong>Employee Productivity</strong> – Offices see improved teamwork and efficiency.</li>
              <li><strong>Customer Growth</strong> – Retail outlets enjoy better engagement and loyalty.</li>
            </ul>

            {/* Consultation Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Consultation Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Interaction</strong> – Understanding client needs and challenges.</li>
              <li><strong>Certified Property Analysis</strong> – Studying floor plans, directions, and energy balance.</li>
              <li><strong>Detailed Recommendations</strong> – Customized remedies based on certified methods.</li>
              <li><strong>Implementation Guidance</strong> – Step-by-step application support.</li>
              <li><strong>Follow-Up</strong> – Monitoring progress and fine-tuning corrections.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted a certified consultant we could trust. Vasterior&apos;s remedies for our 3BHK in Gaur City worked beautifully.&quot; – Family, Sector 4.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our IT office in Techzone benefited immensely after certified guidance. Team focus and client meetings improved drastically.&quot; – Startup Owner.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;As retailers, we needed proven advice. The certified consultation gave us simple corrections that increased sales within weeks.&quot; – Shop Owner, Eco Village Arcade.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Certified Vastu Consultant in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What makes a certified Vastu consultant different?</h3>
                <p>Certified consultants are trained, credible, and apply structured knowledge rather than generic advice.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do certified consultations cost more?</h3>
                <p>Not necessarily. Vasterior offers affordable certified consultations tailored to your needs.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Is Vastu applicable in modern apartments and offices?</h3>
                <p>Yes, certified remedies adapt easily to high-rise flats, compact offices, and showrooms.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Can I consult a certified expert online?</h3>
                <p>Yes, we provide both on-site and online consultations for your convenience.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How soon will I see results?</h3>
                <p>Many clients notice improvements within weeks, while long-term benefits grow over months.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a fast-growing hub like Noida Extension, Uttar Pradesh, homes, offices, and commercial spaces need not only modern design but also certified energy alignment for lasting peace, prosperity, and success.
            </p>
            <p className="mt-4">
              With Vasterior&apos;s Certified Vastu Consultation, you receive professional, credible, and effective guidance tailored for today&apos;s living and working spaces. From compact flats to retail outlets and corporate offices, our certified expertise ensures practical remedies and visible results.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Certified Vastu Consultant in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gmail.com</p>
            </div>
          </div>
          <PostNavigation slug="certified-vastu-consultant-in-noida-extension" />
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