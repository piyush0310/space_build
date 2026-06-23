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
              As Noida Extension (Greater Noida West) in Uttar Pradesh rapidly develops into a hub of modern living and commerce, families and businesses are increasingly looking for ways to bring peace, prosperity, and balance into their spaces. While architectural design and décor add beauty, the energy alignment of a home or office determines its true harmony.
            </p>
            <p>
              With busy schedules and fast-paced lifestyles, not everyone can opt for on-site consultations. That&apos;s why Vasterior offers professional online Vastu consultation in Noida Extension, Uttar Pradesh, combining the wisdom of ancient Vastu Shastra with the convenience of digital connectivity. Now, whether you live in a high-rise apartment, villa, office, or retail space, you can access expert guidance without stepping outside your home.
            </p>

            {/* Why Choose Online Vastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose an Online Vastu Consultant in Noida Extension?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Convenience Anytime, Anywhere</h3>
                <p>Residents of Noida Extension often juggle work, travel, and family commitments. Online consultation allows you to connect with experts at your convenience.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Quick Solutions for Modern Homes</h3>
                <p>Most apartments in Gaur City, Panchsheel Greens, Eco Village, and Ajnara Homes are designed for compact living. Online analysis of layouts and directions provides practical remedies without physical visits.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Affordable and Time-Saving</h3>
                <p>You don&apos;t need to wait weeks for an appointment. Online sessions provide instant guidance at reasonable costs.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Customized Reports</h3>
                <p>After your consultation, you receive detailed recommendations tailored to your property layout.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. No Barriers for Businesses</h3>
                <p>Entrepreneurs running offices in Techzone, Knowledge Park, and Gaur City Mall can access business-focused Vastu remedies without interrupting daily operations.</p>
              </div>
            </div>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Online Vastu Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Residential Online Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom and kitchen alignment for peace and prosperity.</li>
                  <li>Entrance, balcony, and living room corrections.</li>
                  <li>Remedies for better health and family harmony.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Online Commercial Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Workstation and cabin placements for productivity.</li>
                  <li>Conference room and pantry orientation for smoother workflow.</li>
                  <li>Entrance and reception setup to attract opportunities.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Online Retail & Showroom Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cash counter and product display alignment.</li>
                  <li>Entrance direction corrections for higher sales.</li>
                  <li>Color and lighting suggestions for customer engagement.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Plot & Pre-Construction Vastu (Online Guidance)</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Virtual analysis of plot orientation and layout.</li>
                  <li>Suggestions for entrances, water sources, and room placements.</li>
                  <li>Guidance before construction begins to ensure long-term stability.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Non-Demolition Remedies Online</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Color and mirror therapies.</li>
                  <li>Pyramids and crystal placements.</li>
                  <li>Practical solutions suited for compact apartments and offices.</li>
                </ul>
              </div>
            </div>

            {/* How Online Consultation Works */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Online Vastu Consultation Works with Vasterior
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Share Your Layout</strong> – Send floor plans, plot details, or images via email/WhatsApp.</li>
              <li><strong>Video/Call Session</strong> – Our expert analyzes directions and layouts in real-time.</li>
              <li><strong>Detailed Report</strong> – You receive a customized digital report with remedies.</li>
              <li><strong>Implementation Guidance</strong> – Step-by-step support to apply corrections.</li>
              <li><strong>Follow-Up Support</strong> – Continued assistance until results are visible.</li>
            </ul>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Preferred Online Vastu Consultant
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Trusted Local Expertise</strong> – Years of experience working across Noida Extension.</li>
              <li><strong>Practical Solutions</strong> – Remedies that fit into modern urban living.</li>
              <li><strong>Flexibility</strong> – Sessions via phone, video call, or email, as per client preference.</li>
              <li><strong>Global Reach</strong> – Serving clients in Noida Extension, across Uttar Pradesh, and beyond.</li>
              <li><strong>Positive Track Record</strong> – Proven success with both homeowners and entrepreneurs.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Online Vastu Consultation with Vasterior
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Time Efficiency</strong> – Get guidance without scheduling physical visits.</li>
              <li><strong>Cost-Effective</strong> – Affordable packages tailored to your needs.</li>
              <li><strong>Immediate Application</strong> – Quick remedies for stress-free living.</li>
              <li><strong>Accessible Anywhere</strong> – Whether in Noida Extension or abroad, guidance is just a call away.</li>
              <li><strong>Scientific & Logical Approach</strong> – Focused on balance, not superstition.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We consulted Vasterior online for our 3BHK apartment in Gaur City. The remedies were simple, and within a month we noticed more peace at home.&quot; – Family, Sector 4.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our startup in Techzone benefited immensely from their online session. Team productivity has improved!&quot; – IT Firm Owner, Greater Noida West.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Even without visiting our shop, Vasterior guided us through video call. Sales improved steadily after applying their suggestions.&quot; – Retailer, Gaur City Arcade.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Online Vastu Consultant in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. How can you provide Vastu guidance without visiting the site?</h3>
                <p>By analyzing your floor plan, images, and directions, we can provide accurate online remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Are online consultations as effective as on-site ones?</h3>
                <p>Yes, the effectiveness depends on proper analysis. Our digital process ensures accuracy and results.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Do you provide follow-up support?</h3>
                <p>Yes, we provide continuous assistance until you see results.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. What if I live outside Noida Extension?</h3>
                <p>Our online services are available across Uttar Pradesh and even internationally.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Do I need to make structural changes?</h3>
                <p>No, most remedies involve simple, non-demolition solutions like colors, mirrors, and crystals.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In today&apos;s digital age, getting expert guidance shouldn&apos;t be restricted by geography. With Vasterior&apos;s online Vastu consultation services in Noida Extension, Uttar Pradesh, you can enjoy harmony, prosperity, and balance in your spaces without the need for physical visits.
            </p>
            <p className="mt-4">
              Whether you live in a high-rise apartment, villa, office, or shop, our online solutions are practical, effective, and customized to your unique needs.
            </p>
            <p className="mt-4">
              If you are looking for a trusted online Vastu consultant, Vasterior is here to guide you every step of the way.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Online Vastu Consultant in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> info@spacebuild.com</p>
            </div>
          </div>
          <PostNavigation slug="online-vastu-consultant-in-noida-extension" />
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