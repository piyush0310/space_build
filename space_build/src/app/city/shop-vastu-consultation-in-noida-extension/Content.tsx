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
              Running a shop in Noida Extension (Greater Noida West), Uttar Pradesh comes with opportunities as well as challenges. With bustling retail hubs, shopping complexes, and markets growing in the area, competition is fierce. Every shop owner wants better customer flow, higher sales, and consistent profits. But what many don&apos;t realize is that energy balance within the shop plays a critical role in business success.
            </p>
            <p>
              This is where Vasterior, a trusted name for Shop Vastu Consultation in Noida Extension, provides expert solutions. We combine authentic Vastu Shastra principles with practical retail strategies to create shop layouts that attract customers, boost sales, and ensure long-term prosperity.
            </p>

            {/* Why Shops Need Vastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Shops Need Vastu Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Customer Attraction</strong> - The entrance and layout decide whether customers feel welcomed and comfortable inside the shop.</li>
              <li><strong>Steady Cash Flow</strong> - Cash counter placement and alignment influence how smoothly money comes and stays.</li>
              <li><strong>Product Visibility</strong> - Wrongly placed displays or shelves can block energy flow and reduce customer engagement.</li>
              <li><strong>Competitive Advantage</strong> - In crowded markets and malls of Noida Extension, Vastu-aligned shops stand out naturally.</li>
              <li><strong>Stress-Free Management</strong> - A balanced shop layout reduces stress for owners and improves staff efficiency.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Shop Vastu Consultation Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🚪 Entrance & Layout Alignment</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Correct positioning of shop entrance for positivity.</li>
                  <li>Layout adjustments to allow smooth customer movement.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💰 Cash Counter Placement</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ideal placement of cash counters for financial stability.</li>
                  <li>Remedies for shops with limited space.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Product Display & Shelving</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Strategic product placement for better visibility.</li>
                  <li>Display design to increase customer engagement and sales.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💡 Lighting & Color Balance</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Recommendations on lighting that enhances energy flow.</li>
                  <li>Vastu-compliant colors to improve customer mood.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Remedies Without Renovation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Use of crystals, pyramids, and mirrors for correction.</li>
                  <li>Affordable adjustments suitable for small shops.</li>
                </ul>
              </div>
            </div>

            {/* Why Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is Trusted for Shop Vastu in Noida Extension
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Experience</strong> – Worked with retail stores across malls, complexes, and local markets in Greater Noida West.</li>
              <li><strong>Affordable Solutions</strong> – Practical, non-demolition remedies.</li>
              <li><strong>Proven Track Record</strong> – Shops report improved sales and customer satisfaction.</li>
              <li><strong>Flexible Consultation</strong> – On-site visits and online consultations available.</li>
              <li><strong>Customized Advice</strong> – Tailored solutions for clothing stores, electronics shops, restaurants, boutiques, and more.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Shop Vastu Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Increased Footfall</strong> – More customers are naturally attracted.</li>
              <li><strong>Higher Sales</strong> – Strategic layouts promote better buying decisions.</li>
              <li><strong>Financial Stability</strong> – Cash flow becomes smoother.</li>
              <li><strong>Positive Environment</strong> – Shop feels more welcoming for both staff and customers.</li>
              <li><strong>Business Growth</strong> – Long-term prosperity and expansion opportunities.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process of Shop Vastu Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Interaction</strong> – Understanding your shop type and challenges.</li>
              <li><strong>On-Site / Layout Analysis</strong> – Study of directions, entrance, and product placement.</li>
              <li><strong>Customized Remedies</strong> – Tailored solutions for your retail space.</li>
              <li><strong>Implementation Guidance</strong> – Step-by-step instructions for corrections.</li>
              <li><strong>Follow-Up Support</strong> – Ensuring results remain consistent.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Shop Owners in Noida Extension
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;After Vasterior corrected our cash counter direction, sales in our clothing shop increased noticeably.&quot; – Retailer, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our electronics shop in Gaur City Arcade saw better customer engagement after applying their display suggestions.&quot; – Shop Owner, Sector 4.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We run a boutique in Eco Village. Vasterior&apos;s remedies created a calm and welcoming environment for buyers.&quot; – Boutique Owner, Noida Extension.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Shop Vastu Consultation in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Can Vastu consultation really increase shop sales?</h3>
                <p>Yes, correct alignment of entrances, cash counters, and product displays influences customer behavior and financial flow.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do I need to renovate my shop for Vastu corrections?</h3>
                <p>No, most remedies are non-demolition solutions like placements, mirrors, and colors.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Are Vastu services expensive for small shop owners?</h3>
                <p>Not at all. Vasterior offers affordable packages suitable for every budget.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Can you provide consultation for rented shops?</h3>
                <p>Yes, we specialize in solutions for both owned and rented spaces.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Do you provide online consultations?</h3>
                <p>Yes, we offer both on-site and online Vastu consultations.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a competitive marketplace like Noida Extension, Uttar Pradesh, success depends not just on products and pricing but also on the energy alignment of your shop. With Vasterior&apos;s Shop Vastu Consultation, you can ensure your retail space attracts more customers, generates higher sales, and creates long-term financial stability.
            </p>
            <p className="mt-4">
              Our remedies are practical, affordable, and designed for modern shops of all sizes. Whether you own a boutique, electronics store, restaurant, or general retail shop, we help you unlock the full potential of your business.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Shop Vastu Consultation in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gmail.com</p>
            </div>
          </div>
          <PostNavigation slug="shop-vastu-consultation-in-noida-extension" />
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