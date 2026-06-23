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
              Noida Extension (Greater Noida West), Uttar Pradesh has emerged as one of the most dynamic real estate and business destinations in the NCR. With its high-rise societies, luxurious villas, commercial hubs, and retail spaces, it attracts thousands of families and entrepreneurs every year. While architecture and design bring style, the true secret to lasting peace, prosperity, and success lies in aligning spaces with Vastu Shastra.
            </p>
            <p>
              That&apos;s where Vasterior, recognized as a Top Vastu Consultant in Noida Extension, makes all the difference. Known for delivering practical, effective, and result-oriented solutions, Vasterior blends ancient wisdom with modern needs to create balanced living and working environments.
            </p>

            {/* Why Vasterior is Top */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is Ranked Among the Top Vastu Consultants
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Proven Expertise</strong> - With years of experience in homes, offices, shops, and industrial spaces, Vasterior has earned the reputation of being a top consultant in Noida Extension.</li>
              <li><strong>Practical Remedies</strong> - Instead of suggesting expensive demolitions, we specialize in non-structural corrections like mirror placement, color therapy, and energy-balancing tools.</li>
              <li><strong>Local Knowledge</strong> - Our experience covers popular townships such as Gaur City, Panchsheel Greens, Eco Village, and Ajnara Homes, along with commercial hubs in Techzone and Knowledge Park.</li>
              <li><strong>Trusted by Families & Businesses</strong> - Hundreds of satisfied clients vouch for the positive changes they&apos;ve seen in prosperity, health, and harmony.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Services as a Top Vastu Consultant
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Residential Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom and kitchen alignment for family harmony.</li>
                  <li>Entrance and balcony corrections for prosperity.</li>
                  <li>Remedies for compact apartments and luxury villas alike.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Office Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Desk and cabin placements to improve productivity.</li>
                  <li>Reception and meeting room layouts for smoother operations.</li>
                  <li>Remedies for employee harmony and business growth.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Retail & Showroom Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cash counter and display alignment to increase sales.</li>
                  <li>Entrance orientation to maximize customer inflow.</li>
                  <li>Décor and lighting advice to enhance buyer engagement.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Plot & Pre-Construction Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Directional study of land and slope.</li>
                  <li>Blueprint corrections before construction begins.</li>
                  <li>Placement planning for entrances, utilities, and core spaces.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Vastu Corrections Without Demolition</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Crystal, pyramid, and mirror remedies.</li>
                  <li>Simple color changes for balance.</li>
                  <li>Practical element adjustments for long-term harmony.</li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Consulting the Top Vastu Expert in Noida Extension
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Financial Growth</strong> – Homes and businesses attract stable prosperity.</li>
              <li><strong>Peaceful Living</strong> – Reduced stress and better relationships within families.</li>
              <li><strong>Improved Productivity</strong> – Offices see stronger employee performance.</li>
              <li><strong>Better Health</strong> – Balanced energy supports overall well-being.</li>
              <li><strong>Customer Attraction</strong> – Shops and showrooms experience higher engagement.</li>
            </ul>

            {/* Vasterior's Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Consultation</strong> – Understanding your needs and challenges.</li>
              <li><strong>Property Review</strong> – Studying layout, directions, and functionality.</li>
              <li><strong>Customized Report</strong> – Practical recommendations tailored to your space.</li>
              <li><strong>Implementation Guidance</strong> – Step-by-step support for applying remedies.</li>
              <li><strong>Follow-Up Support</strong> – Continued assistance to ensure results are sustained.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior truly deserves the title of top Vastu consultant in Noida Extension. Our 3BHK in Gaur City feels completely different—calm and positive.&quot; – Resident, Sector 4.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our IT office in Techzone became more productive after their remedies. Client interactions are smoother too.&quot; – Startup Owner.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;As shop owners in Eco Village Arcade, we noticed steady sales growth after applying their practical corrections.&quot; – Retailer, Greater Noida West.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Top Vastu Consultant in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What makes Vasterior a top Vastu consultant?</h3>
                <p>Years of expertise, client trust, and proven results across residential and commercial projects.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do you suggest expensive demolitions?</h3>
                <p>No, most of our remedies are non-demolition corrections.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Are services affordable for middle-class families?</h3>
                <p>Yes, we provide packages tailored to all budgets.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Can I book an online consultation?</h3>
                <p>Yes, we offer both on-site and virtual Vastu consultations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How quickly do results show?</h3>
                <p>Clients often notice improvements in energy and atmosphere within weeks.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a thriving hub like Noida Extension, Uttar Pradesh, success and happiness depend not only on modern architecture but also on energy alignment. As a Top Vastu Consultant, Vasterior ensures your home, office, or retail outlet is designed for peace, prosperity, and growth.
            </p>
            <p className="mt-4">
              With practical, affordable, and result-driven remedies, Vasterior helps you unlock the true potential of your space—making it a foundation for a better future.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Top Vastu Consultant in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> info@spacebuild.com</p>
            </div>
          </div>
          <PostNavigation slug="top-vastu-consultant-in-noida-extension" />
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