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
              Noida Extension, also called Greater Noida West, has become one of the fastest-growing residential and commercial zones in Uttar Pradesh. With its modern apartments, luxurious villas, and booming office spaces, the demand for stylish interiors is at an all-time high. But true comfort and prosperity go beyond aesthetics—your interiors must also align with the principles of Vastu Shastra to ensure positivity, harmony, and growth.
            </p>
            <p>
              That&apos;s where Vasterior, a trusted Vastu Interior Designer in Noida Extension, brings expertise. We combine interior design creativity with Vastu-compliant layouts, ensuring that every corner of your home, office, or retail outlet radiates balance, beauty, and prosperity.
            </p>

            {/* Why Choose a Vastu Interior Designer */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose a Vastu Interior Designer?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Balanced Energy with Style</h3>
                <p>Unlike conventional interior designers who focus only on looks, Vastu interior designers align furniture, colors, and spaces with energy flow.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Health, Peace & Prosperity</h3>
                <p>Properly designed interiors improve relationships, focus, and financial growth.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Customized for Modern Spaces</h3>
                <p>Whether you own a flat in Gaur City, Panchsheel Greens, Eco Village, or a villa in Sector 4, our designs adapt Vastu principles to modern layouts.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Practical & Non-Demolition Solutions</h3>
                <p>Our design approach ensures Vastu corrections without breaking structures—through intelligent use of colors, décor, and placements.</p>
              </div>
            </div>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Vastu Interior Design Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Home Vastu Interior Design</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom layouts with correct bed, wardrobe, and mirror placements.</li>
                  <li>Kitchen designs balancing fire and water elements.</li>
                  <li>Living room arrangements to encourage family bonding.</li>
                  <li>Pooja space interiors for spirituality and calmness.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Office Vastu Interior Design</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cabin design for leaders to enhance authority and decision-making.</li>
                  <li>Workstation layouts to boost productivity and creativity.</li>
                  <li>Conference room orientation for smoother communication.</li>
                  <li>Reception and waiting area interiors to welcome opportunities.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Retail & Showroom Vastu Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cash counter orientation for consistent financial inflow.</li>
                  <li>Display designs to naturally attract buyers.</li>
                  <li>Lighting and color recommendations to improve customer engagement.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Pre-Construction Vastu Interior Guidance</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Layout planning for villas, flats, or commercial spaces before design begins.</li>
                  <li>Space optimization for long-term prosperity.</li>
                  <li>Direction-based material and color choices.</li>
                </ul>
              </div>
            </div>

            {/* Why Vasterior Stands Out */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Stands Out as a Vastu Interior Designer
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Blend of Tradition & Modernity</strong> – Interiors that are both stylish and energy-aligned.</li>
              <li><strong>Practical Solutions</strong> – Focus on affordable, logical, and easy-to-implement remedies.</li>
              <li><strong>Local Expertise</strong> – Years of experience in Noida Extension projects.</li>
              <li><strong>Client-Centric Approach</strong> – Each design is unique to your lifestyle and business goals.</li>
              <li><strong>Flexible Consultations</strong> – On-site design guidance and virtual Vastu interior sessions.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Vastu-Compliant Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Peaceful Homes</strong> – Harmony among family members.</li>
              <li><strong>Prosperous Offices</strong> – Improved financial stability and career growth.</li>
              <li><strong>Health & Well-being</strong> – Balanced environments that reduce stress.</li>
              <li><strong>Customer Engagement</strong> – Shops and showrooms attract more buyers.</li>
              <li><strong>Long-Term Growth</strong> – Interiors designed to support success and positivity.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process of Vastu Interior Design
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation</strong> – Understanding your design needs and challenges.</li>
              <li><strong>Layout Study</strong> – Reviewing property orientation and existing interiors.</li>
              <li><strong>Design Planning</strong> – Suggesting Vastu-compliant furniture, décor, and colors.</li>
              <li><strong>Implementation</strong> – Assisting in creating interiors aligned with Vastu.</li>
              <li><strong>Follow-Up</strong> – Ensuring energy balance is maintained over time.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our 3BHK in Gaur City feels brighter and calmer after Vasterior&apos;s Vastu interiors. Beautiful designs with positive energy!&quot; – Resident, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;They redesigned our office cabin and reception area. Clients now find our workplace more welcoming.&quot; – IT Company, Techzone.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our boutique in Eco Village Arcade looks stylish, and sales have improved after Vasterior&apos;s Vastu interior design.&quot; – Retailer, Sector 4.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Interior Designer in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. How is Vastu interior design different from normal interior design?</h3>
                <p>It combines style with energy balance, ensuring both beauty and harmony.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do Vastu interiors require breaking walls?</h3>
                <p>No, our remedies are non-demolition and focus on placements, colors, and décor.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can Vastu interiors work in small apartments?</h3>
                <p>Yes, our designs are customized for compact flats as well as luxury villas.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide online interior design guidance?</h3>
                <p>Yes, we offer both on-site and online consultations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Are Vastu interiors costly?</h3>
                <p>Not at all. We offer affordable design solutions suited to different budgets.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In a modern hub like Noida Extension, Uttar Pradesh, interiors must do more than look beautiful—they should also align with natural energies for long-term harmony and prosperity.
            </p>
            <p className="mt-4">
              Vasterior, as a leading Vastu Interior Designer in Noida Extension, ensures that your home, office, or showroom interiors combine style with balance. With our expertise, you get designs that are elegant, functional, and deeply positive.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Vastu Interior Designer in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gamil.com</p>
            </div>
          </div>
          <PostNavigation slug="vastu-interior-designer-in-noida-extension" />
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
