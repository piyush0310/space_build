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
              Noida Extension (Greater Noida West), Uttar Pradesh has rapidly become one of the most sought-after residential and commercial hubs in North India. With its modern infrastructure, premium societies, and upcoming business hubs, thousands of families and enterprises are building their future here. Amid this fast-paced growth, the need for balance, harmony, and prosperity within homes and workplaces has never been more important.
            </p>
            <p>
              This is where Vasterior, a trusted Vastu Shastra consultant in Noida Extension, provides professional guidance. By blending ancient Vastu Shastra principles with modern design practices, we create spaces that radiate positivity, attract prosperity, and improve overall well-being.
            </p>

            {/* Why Choose a Vastu Shastra Consultant */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose a Vastu Shastra Consultant in Noida Extension?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Energy Balance in High-Rise Living</h3>
                <p>Most apartments and villas in popular townships like Gaur City, Panchsheel Greens, Eco Village, and Ajnara Homes focus on architectural convenience but often neglect natural energy alignment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Business Growth in a Competitive Hub</h3>
                <p>Tech parks, offices, and retail outlets in Techzone and Knowledge Park need energy-balanced layouts for productivity and profit growth.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Family Peace and Prosperity</h3>
                <p>Correct placements of bedrooms, kitchens, and living areas can reduce conflicts, improve health, and strengthen relationships.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Practical Remedies for Modern Homes</h3>
                <p>Vasterior specializes in non-demolition solutions—simple, cost-effective remedies that don&apos;t require breaking walls or altering structures.</p>
              </div>
            </div>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Vastu Shastra Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Residential Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom, kitchen, and living room alignment.</li>
                  <li>Main entrance and balcony positioning for prosperity.</li>
                  <li>Remedies to improve peace and family bonding.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Commercial Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Desk and cabin arrangements for better decision-making.</li>
                  <li>Placement of conference rooms and pantries for smooth operations.</li>
                  <li>Reception orientation to attract clients and opportunities.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Retail & Showroom Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Entrance and cash counter positioning for consistent sales.</li>
                  <li>Display layout for better customer engagement.</li>
                  <li>Color and lighting recommendations to boost shopping experience.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Plot & Pre-Construction Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Shape, slope, and directional evaluation of plots.</li>
                  <li>Layout guidance before construction for long-term success.</li>
                  <li>Ideal positioning of water tanks, entrances, and work areas.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Non-Structural Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Energy balancing with crystals and pyramids.</li>
                  <li>Mirror and color therapy solutions.</li>
                  <li>Element alignment for improved harmony.</li>
                </ul>
              </div>
            </div>

            {/* Why Vasterior Stands Out */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Stands Out
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Experience with Local Projects:</strong> We&apos;ve worked across Noida Extension societies, villas, offices, and retail hubs.</li>
              <li><strong>Scientific & Practical Approach:</strong> Logical, result-oriented recommendations suited to today&apos;s lifestyles.</li>
              <li><strong>Trusted Name in Vastu:</strong> From families to entrepreneurs, our clients value the results of our consultation.</li>
              <li><strong>Flexibility:</strong> We offer on-site visits and virtual consultations across Uttar Pradesh.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Consulting Vasterior
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Financial Prosperity</strong> – Stable income and business growth.</li>
              <li><strong>Peaceful Homes</strong> – Stronger relationships and stress-free living.</li>
              <li><strong>Better Health</strong> – Positive energy promotes overall well-being.</li>
              <li><strong>Career & Education Success</strong> – Improved focus for students and professionals.</li>
              <li><strong>Business Expansion</strong> – Increased customer engagement and opportunities.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Discussion</strong> – Understanding your goals and challenges.</li>
              <li><strong>Detailed Analysis</strong> – On-site or online study of property layout.</li>
              <li><strong>Customized Solutions</strong> – Tailored remedies for your space.</li>
              <li><strong>Implementation Guidance</strong> – Easy-to-follow corrective steps.</li>
              <li><strong>Follow-Up Support</strong> – Ensuring visible, long-term results.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension Clients
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We applied Vasterior&apos;s remedies in our 3BHK apartment at Eco Village, and within weeks our home felt lighter and more peaceful.&quot; – Family, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our IT office in Techzone lacked focus. After consultation, team productivity improved significantly.&quot; – Business Owner, Greater Noida West.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our showroom sales at Gaur City Arcade increased steadily after Vasterior guided us on entrance and counter placements.&quot; – Retailer, Sector 4.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Shastra Consultant in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Do Vastu remedies require breaking walls?</h3>
                <p>No, most solutions by Vasterior are non-demolition remedies that are simple and affordable.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Can Vastu Shastra help in apartments?</h3>
                <p>Yes, our methods are customized for high-rise apartments and modern flats.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Is Vastu really effective for businesses?</h3>
                <p>Absolutely. Proper alignment of entrances, cabins, and counters enhances financial flow and opportunities.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide online Vastu services?</h3>
                <p>Yes, Vasterior offers both on-site and virtual consultations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How long does it take to see results?</h3>
                <p>It varies, but many clients experience positive changes within weeks.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a fast-developing hub like Noida Extension, Uttar Pradesh, creating spaces that align with natural energies is essential for long-term happiness, health, and prosperity. Vasterior, as your trusted Vastu Shastra consultant, brings tailored, practical, and effective solutions for homes, offices, shops, and plots.
            </p>
            <p className="mt-4">
              If you want your property to radiate positivity, balance, and growth, it&apos;s time to consult the experts at Vasterior.
            </p>

            {/* Contact Information */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Vastu Shastra Consultant in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gamil.com</p>
            </div>
          </div>
          <PostNavigation slug="vastu-shastra-consultant-in-noida-extension" />
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