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
              Modern living in Noida Extension (Greater Noida West), Uttar Pradesh brings convenience and style with its high-rise apartments, villas, offices, and retail hubs. However, many people still face challenges like stress, financial instability, or disharmony at home or work. One major reason is the lack of alignment with Vastu Shastra principles.
            </p>
            <p>
              The good news is—you don&apos;t always need reconstruction or heavy expenses to fix these issues. With Vasterior&apos;s Vastu remedies in Noida Extension, you can correct imbalances using simple, affordable, and non-demolition solutions. These remedies help harmonize your space with natural energies, attracting peace, prosperity, and long-term success.
            </p>

            {/* Why Vastu Remedies are Important */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu Remedies are Important
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Practical Corrections Without Demolition</strong> - Unlike traditional methods that demand structural changes, modern Vastu remedies are easy to apply in apartments, villas, and offices.</li>
              <li><strong>Balance of Elements</strong> - Vastu remedies ensure fire, water, air, earth, and space elements are aligned properly.</li>
              <li><strong>Affordable Solutions</strong> - Practical corrections like mirrors, crystals, pyramids, and color therapy make remedies cost-effective.</li>
              <li><strong>Immediate Relief</strong> - Certain remedies bring noticeable improvements in atmosphere within weeks.</li>
              <li><strong>Adaptable to Any Property</strong> - Whether it&apos;s a home, shop, office, or factory, Vastu remedies can be applied universally.</li>
            </ul>

            {/* Types of Vastu Remedies */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Types of Vastu Remedies by Vasterior
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Home Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Placing mirrors in specific zones to redirect energy.</li>
                  <li>Using light-colored curtains and décor for positivity.</li>
                  <li>Keeping tulsi, bamboo, or money plants in balconies for prosperity.</li>
                  <li>Aligning study desks for children to improve focus.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Office Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Positioning employee desks facing east or north for productivity.</li>
                  <li>Placing crystals or pyramids in stressed areas to balance energy.</li>
                  <li>Correcting reception and meeting room orientation for client success.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Shop Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cash counter alignment for steady financial flow.</li>
                  <li>Strategic display placement to improve customer engagement.</li>
                  <li>Bright, Vastu-friendly lighting to invite buyers.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏭 Factory Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Positioning heavy machinery in the southwest for stability.</li>
                  <li>Aligning storage and dispatch areas for smoother operations.</li>
                  <li>Using colors in sections to balance fire, water, and air elements.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 General Remedies Without Renovation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Color therapy for walls and furniture.</li>
                  <li>Using wind chimes, yantras, or pyramids to balance disturbed zones.</li>
                  <li>Correct placement of water elements like aquariums or fountains.</li>
                </ul>
              </div>
            </div>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Vastu Remedies in Noida Extension?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Expertise</strong> – Years of experience in Greater Noida West&apos;s homes, shops, and offices.</li>
              <li><strong>Non-Demolition Solutions</strong> – Practical remedies that don&apos;t require structural change.</li>
              <li><strong>Affordable Packages</strong> – Designed to fit all budgets.</li>
              <li><strong>Scientific & Logical Approach</strong> – No superstition, only practical energy alignment.</li>
              <li><strong>Trusted Results</strong> – Families and businesses report visible improvements in peace, health, and finances.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Vastu Remedies
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Peace & Harmony</strong> – Strengthened family relationships.</li>
              <li><strong>Financial Prosperity</strong> – Smooth flow of money and opportunities.</li>
              <li><strong>Better Health</strong> – Balanced energies improve overall well-being.</li>
              <li><strong>Business Growth</strong> – Shops and offices see higher productivity and sales.</li>
              <li><strong>Stress Reduction</strong> – Environments feel calmer and lighter.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Vasterior&apos;s Vastu Remedy Process Works
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation</strong> – Understanding your specific concerns.</li>
              <li><strong>Property Analysis</strong> – Reviewing layouts and directions on-site or online.</li>
              <li><strong>Customized Remedies</strong> – Practical corrections based on your space.</li>
              <li><strong>Implementation Support</strong> – Step-by-step guidance to apply remedies.</li>
              <li><strong>Follow-Up</strong> – Continuous support for lasting results.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our 2BHK in Eco Village felt stressful earlier. Vasterior&apos;s simple remedies made the home peaceful within weeks.&quot; – Resident, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We applied their Vastu remedies in our Gaur City shop. Customer flow and sales both increased.&quot; – Shop Owner, Sector 4.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our Techzone office became more positive and productive after their corrections.&quot; – Entrepreneur, Greater Noida West.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Remedies in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Do Vastu remedies really work without demolition?</h3>
                <p>Yes, most remedies involve placements, colors, or crystals—not structural changes.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Are remedies the same for all homes?</h3>
                <p>No, remedies are personalized according to each layout and problem.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Are Vastu remedies expensive?</h3>
                <p>No, they are affordable corrections suited for all budgets.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Can remedies be applied in rented flats or offices?</h3>
                <p>Yes, non-permanent remedies are ideal for rented spaces.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Do you provide online consultations for remedies?</h3>
                <p>Yes, both on-site and virtual consultations are available.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a fast-growing area like Noida Extension, Uttar Pradesh, many properties are built without considering energy alignment. But with Vasterior&apos;s Vastu remedies, you can correct imbalances easily and affordably—without structural changes.
            </p>
            <p className="mt-4">
              Whether it&apos;s your apartment, villa, shop, office, or factory, our practical remedies ensure peace, prosperity, health, and long-term success.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Vastu Remedies in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gmail.com</p>
            </div>
          </div>
          <PostNavigation slug="vastu-remedies-in-noida-extension" />
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