
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
              In today&apos;s fast-paced world, the demand for peaceful, balanced, and positive living and working environments has never been higher. Noida Extension (Greater Noida West), Uttar Pradesh—a rapidly growing hub of apartments, villas, offices, and retail outlets—has seen a surge in families and businesses embracing Vastu Shastra. However, one concern often holds people back: the belief that professional Vastu services are expensive or out of reach.
            </p>
            <p>
              That&apos;s where Space Build stands apart. As a trusted provider of affordable Vastu consultation in Noida Extension, we ensure that everyone—whether homeowners, entrepreneurs, or shopkeepers—can access effective, practical, and budget-friendly Vastu solutions without compromising on quality.
            </p>

            {/* Why Choose Affordable Vastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Affordable Vastu Consultation?
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Accessible for Everyone</strong> - Families living in 2BHK or 3BHK apartments in societies like Gaur City, Panchsheel Greens, or Eco Village can now enjoy Vastu benefits without worrying about high costs.</li>
              <li><strong>Budget-Friendly Remedies</strong> - Unlike misconceptions, Vastu corrections don&apos;t always require structural changes. Affordable remedies like mirror placement, color adjustments, crystals, and directional setups make solutions practical for all.</li>
              <li><strong>Business Growth Within Budget</strong> - Startups, co-working spaces, and retail outlets in Techzone, Knowledge Park, and Gaur City Mall can boost growth through simple, low-cost Vastu adjustments.</li>
              <li><strong>Long-Term Value</strong> - A small investment in Vastu creates lasting peace, prosperity, and success for years to come.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Space Build&apos;s Affordable Vastu Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Affordable Home Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Entrance, bedroom, and kitchen corrections.</li>
                  <li>Remedies for family peace and financial flow.</li>
                  <li>Non-demolition solutions suited for flats and villas.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Affordable Office Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Desk orientation and team seating corrections.</li>
                  <li>Cost-effective remedies for cabins and conference rooms.</li>
                  <li>Positive reception setups to attract clients.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Affordable Retail & Showroom Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Simple adjustments for cash counters.</li>
                  <li>Product display strategies without major redesign.</li>
                  <li>Entrance alignment for higher customer footfall.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Affordable Plot & Pre-Construction Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Online or on-site layout reviews before construction.</li>
                  <li>Practical advice on entrances, water sources, and design balance.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Affordable Remedies Without Structural Change</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use of pyramids, plants, crystals, and mirrors.</li>
                  <li>Color therapy through paints, curtains, or décor.</li>
                  <li>Placement-based corrections within existing setups.</li>
                </ul>
              </div>
            </div>

            {/* Why Space Build */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Space Build is the Right Choice for Affordable Vastu
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Pocket-Friendly Solutions</strong> – Tailored to meet every budget.</li>
              <li><strong>Practical & Simple Remedies</strong> – No unnecessary rituals or costly changes.</li>
              <li><strong>Local Expertise</strong> – Deep understanding of Noida Extension layouts and projects.</li>
              <li><strong>Trusted by Families & Businesses</strong> – Proven record of positive transformations.</li>
              <li><strong>Flexible Consultation Options</strong> – Affordable on-site and online consultations.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Affordable Vastu Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Peace of Mind Without High Cost</strong> – Balanced homes that radiate calm.</li>
              <li><strong>Business Growth on a Budget</strong> – Steady financial improvement for startups and shops.</li>
              <li><strong>Improved Relationships</strong> – Family harmony without expensive renovations.</li>
              <li><strong>Employee Productivity</strong> – Positive work environments that boost performance.</li>
              <li><strong>Accessible for All</strong> – From homeowners to entrepreneurs, everyone benefits.</li>
            </ul>

            {/* How Space Build Makes Vastu Affordable */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Space Build Makes Vastu Affordable
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Free Initial Discussion</strong> – Understand concerns before suggesting solutions.</li>
              <li><strong>Flexible Packages</strong> – Choose services based on need and budget.</li>
              <li><strong>Step-by-Step Guidance</strong> – Implement changes gradually without financial strain.</li>
              <li><strong>Virtual Consultations</strong> – Save travel and consultation costs.</li>
              <li><strong>Simple Remedies</strong> – Focus on cost-effective, long-lasting results.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We thought Vastu would be too costly, but Space Build gave us affordable remedies for our flat in Gaur City. The atmosphere feels so much better now.&quot; – Resident, Sector 4.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;As a small startup, we couldn&apos;t afford expensive consultants. Space Build provided simple, low-cost solutions that really boosted our team&apos;s energy.&quot; – IT Firm, Techzone.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our shop in Eco Village Arcade was struggling. With Space Build&apos;s affordable corrections, sales have improved steadily.&quot; – Retail Owner, Noida Extension.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Affordable Vastu Consultation in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Is affordable Vastu consultation effective?</h3>
                <p>Yes, low-cost remedies like placements, colors, and crystals bring noticeable results without major expenses.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do you charge separately for home and office consultations?</h3>
                <p>Yes, but we offer flexible packages to suit every budget.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can I get affordable consultation online?</h3>
                <p>Absolutely. Online consultations save time and cost while delivering accurate remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. How soon will I see results?</h3>
                <p>Many clients notice changes within weeks of applying remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Is affordable Vastu only for small homes?</h3>
                <p>No, we provide budget-friendly solutions for apartments, villas, shops, and offices alike.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              Vastu consultation doesn&apos;t have to be expensive to be effective. At Space Build, we believe that every family and business in Noida Extension, Uttar Pradesh deserves a positive, harmonious space—without financial burden.
            </p>
            <p className="mt-4">
              Our affordable Vastu consultation services deliver practical, budget-friendly remedies that work for homes, offices, retail outlets, and plots. With simple yet powerful corrections, we ensure that your space supports peace, prosperity, and growth.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Space Build – Affordable Vastu Consultation in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gmail.com</p>
            </div>
          </div>

          <PostNavigation slug="affordable-vastu-consultation-in-noida-extension" />
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