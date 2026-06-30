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
              The bustling locality of Noida Extension (Greater Noida West), Uttar Pradesh has become a preferred residential hub for modern families. With its well-planned societies, premium apartments, villas, and growing infrastructure, it attracts thousands of new homeowners every year. But as homes become more modern and compact, many residents realize that peace, prosperity, and harmony depend not just on interiors, but also on how energy flows through the living space.
            </p>
            <p>
              This is where Vasterior, your trusted partner for Home Vastu Consultation in Noida Extension, makes a difference. By blending ancient Vastu Shastra wisdom with practical modern solutions, we help transform your home into a place of balance, growth, and happiness.
            </p>

            {/* Why Home Vastu is Important */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why is Home Vastu Consultation Important in Noida Extension?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. High-Rise Living Needs Balance</h3>
                <p>Popular societies like Gaur City, Panchsheel Greens, Eco Village, and Ajnara Homes focus on architectural convenience but often neglect energy alignment. Vastu helps correct these imbalances.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Family Peace and Well-Being</h3>
                <p>The placement of bedrooms, kitchens, and living areas can directly impact family bonding, mental peace, and health.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Financial Stability</h3>
                <p>Vastu-compliant entrances, kitchens, and pooja areas can enhance prosperity and steady cash flow.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Practical Solutions for Modern Homes</h3>
                <p>Vasterior specializes in non-demolition remedies like mirror placement, crystal therapy, and color balance, making it easy to implement solutions in compact flats and villas.</p>
              </div>
            </div>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Home Vastu Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛋️ Living Room Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Correct placement of seating for better family interaction.</li>
                  <li>Entrance orientation for positivity.</li>
                  <li>Lighting and décor suggestions to welcome prosperity.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛏️ Bedroom Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bed placement for restful sleep and improved relationships.</li>
                  <li>Positioning of wardrobes, mirrors, and electronics.</li>
                  <li>Study corner alignment for children&apos;s focus.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🍴 Kitchen Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Stove and sink alignment for health and financial stability.</li>
                  <li>Refrigerator, pantry, and utility area positioning.</li>
                  <li>Element balancing (fire and water energies).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛕 Pooja Room & Prayer Space Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ideal directions for setting up prayer areas.</li>
                  <li>Remedies for spiritual growth and peace of mind.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Balcony & Open Area Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>How to enhance balconies and open areas for fresh, positive energy.</li>
                  <li>Plant suggestions to balance natural elements.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🖼️ Remedies Without Demolition</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Crystal placement to redirect energies.</li>
                  <li>Mirrors for correcting energy imbalances.</li>
                  <li>Color therapy for walls, curtains, and décor.</li>
                </ul>
              </div>
            </div>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Home Vastu Consultation?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Experience:</strong> Extensive work in Noida Extension apartments, villas, and builder floors.</li>
              <li><strong>Logical, Practical Remedies:</strong> Easy-to-apply solutions for urban families.</li>
              <li><strong>Trusted Results:</strong> Proven record of improving peace, prosperity, and well-being.</li>
              <li><strong>Flexible Options:</strong> On-site consultations or convenient online sessions.</li>
              <li><strong>Personalized Guidance:</strong> Every home is unique—our solutions are tailored accordingly.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Home Vastu Consultation
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Peaceful Family Environment</strong> – Strengthened relationships and reduced conflicts.</li>
              <li><strong>Better Health & Well-being</strong> – Balanced spaces that support physical and mental wellness.</li>
              <li><strong>Financial Prosperity</strong> – Smooth income flow and financial stability.</li>
              <li><strong>Improved Focus for Children</strong> – Directional study placements that aid education.</li>
              <li><strong>Positive Lifestyle</strong> – A home that feels lighter, happier, and more inviting.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Vasterior&apos;s Home Vastu Consultation Works
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Discussion</strong> – Understanding your lifestyle and family needs.</li>
              <li><strong>Layout Review</strong> – Floor plan, compass direction, or site visit.</li>
              <li><strong>Customized Report</strong> – Clear, step-by-step suggestions.</li>
              <li><strong>Implementation Support</strong> – Practical assistance to apply remedies.</li>
              <li><strong>Follow-Up Guidance</strong> – Continued consultation for long-term success.</li>
            </ul>

            {/* Client Experiences */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Experiences from Noida Extension
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our 3BHK flat in Eco Village never felt comfortable. After Vasterior&apos;s remedies, our home finally feels peaceful.&quot; – Resident, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We noticed a big difference in our children&apos;s focus after their study table alignment was corrected.&quot; – Family, Gaur City.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Without any demolition, Vasterior gave simple suggestions that improved our home&apos;s energy. Highly recommended!&quot; – Villa Owner, Sector 4.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Home Vastu Consultation in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Is Vastu applicable for modern apartments?</h3>
                <p>Yes, Vastu adapts easily to high-rise apartments and compact flats.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do remedies require breaking walls?</h3>
                <p>Not at all. Most solutions are non-demolition remedies like mirror placement, crystals, or colors.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. How long does it take to see results?</h3>
                <p>Clients often experience noticeable changes within weeks of applying remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Can I consult online?</h3>
                <p>Yes, Vasterior provides both on-site and virtual consultations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Do you only cover Noida Extension?</h3>
                <p>No, while we specialize in Noida Extension, we also serve across Uttar Pradesh and India.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              Your home is more than just walls and furniture—it&apos;s the heart of your family&apos;s well-being. In a modern hub like Noida Extension, Uttar Pradesh, where homes are designed for space efficiency, Vasterior&apos;s Home Vastu Consultation ensures that your living space radiates peace, prosperity, and happiness.
            </p>
            <p className="mt-4">
              Whether it&apos;s a 2BHK apartment, luxury villa, or builder floor, our expert guidance transforms ordinary homes into positive, balanced, and thriving living environments.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Home Vastu Consultation in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gamil.com</p>
            </div>
          </div>
          <PostNavigation slug="home-vastu-consultation-in-noida-extension" />
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