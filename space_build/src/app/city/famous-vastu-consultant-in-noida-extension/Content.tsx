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
              Noida Extension (Greater Noida West), Uttar Pradesh has become one of the fastest-growing real estate and business hubs in the NCR. With its mix of premium apartments, luxury villas, co-working spaces, IT parks, and retail centers, the locality attracts ambitious families and entrepreneurs. In such a competitive and dynamic environment, people often look for ways to invite positivity, prosperity, and harmony into their spaces.
            </p>
            <p>
              This is where Vasterior, known as a famous Vastu consultant in Noida Extension, stands out. Trusted for years by families, business owners, and startups alike, Vasterior blends authentic Vastu Shastra knowledge with practical modern solutions, ensuring visible and lasting results.
            </p>

            {/* Why Vasterior is Famous */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is a Famous Vastu Consultant in Noida Extension
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Proven Track Record</strong> - Hundreds of satisfied clients across Noida Extension societies, offices, and retail outlets recommend Vasterior for consistent results.</li>
              <li><strong>Recognized Expertise</strong> - Our consultation services are sought after for combining traditional wisdom with a logical, science-backed approach.</li>
              <li><strong>Local Experience</strong> - We understand the layouts of major Noida Extension societies like Gaur City, Panchsheel Greens, Eco Village, and Ajnara Homes, as well as commercial hubs like Techzone and Knowledge Park.</li>
              <li><strong>Practical Remedies</strong> - Known for offering non-demolition solutions such as mirror placements, crystals, pyramids, and color therapy, we ensure Vastu is affordable and convenient for modern living.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Famous Vastu Services
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏠 Residential Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Bedroom, kitchen, and living area alignment for peace and prosperity.</li>
                  <li>Remedies to improve family bonding and financial stability.</li>
                  <li>Entrance and balcony corrections without reconstruction.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏢 Office Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>CEO cabin and workstation placements for leadership and productivity.</li>
                  <li>Conference room layouts for smoother decision-making.</li>
                  <li>Reception and entrance alignment to attract clients.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🛍️ Retail & Showroom Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cash counter orientation to ensure steady revenue.</li>
                  <li>Customer flow optimization with strategic layouts.</li>
                  <li>Lighting and décor suggestions to boost engagement.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Plot & Pre-Construction Vastu Consultation</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Shape, slope, and directional analysis of plots.</li>
                  <li>Best layout planning before construction for long-term success.</li>
                  <li>Correct positioning of entrances, utilities, and core spaces.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌿 Non-Demolition Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Energy corrections using crystals, pyramids, and colors.</li>
                  <li>Natural balancing elements for modern apartments.</li>
                  <li>Affordable, practical solutions trusted by families and businesses.</li>
                </ul>
              </div>
            </div>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Choosing a Famous Vastu Consultant
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Credibility & Trust</strong> – Recognized expertise backed by real client success stories.</li>
              <li><strong>Visible Results</strong> – Families and businesses report noticeable improvements in harmony, focus, and prosperity.</li>
              <li><strong>Balanced Lifestyle</strong> – Healthier, calmer, and more positive living environments.</li>
              <li><strong>Business Growth</strong> – Offices and shops experience higher efficiency and customer inflow.</li>
              <li><strong>Peace of Mind</strong> – Knowing that your space is aligned with natural energies.</li>
            </ul>

            {/* How Vasterior Works */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Vasterior Works
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Consultation</strong> – Understanding client concerns and goals.</li>
              <li><strong>Detailed Site or Layout Review</strong> – Analysis of directions, rooms, and overall energy.</li>
              <li><strong>Customized Report</strong> – Tailored recommendations for the property.</li>
              <li><strong>Implementation Support</strong> – Guidance to apply remedies step by step.</li>
              <li><strong>Follow-Up</strong> – Continuous consultation to ensure results are sustained.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension Clients
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior is truly the most famous Vastu consultant in Noida Extension. Their simple remedies made our 3BHK in Gaur City feel completely transformed.&quot; – Family, Sector 4.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our office in Techzone became more productive and welcoming after their consultation. Clients notice the difference too!&quot; – IT Startup Owner.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;As shopkeepers, we wanted practical remedies. Vasterior gave us budget-friendly solutions that actually increased sales.&quot; – Retailer, Eco Village Arcade.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Famous Vastu Consultant in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Why should I choose a famous Vastu consultant?</h3>
                <p>Famous consultants like Vasterior are trusted because of their proven results and large client base.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Is Vastu consultation expensive?</h3>
                <p>Not at all. Vasterior offers affordable, customized remedies for every budget.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can Vastu really help in high-rise apartments?</h3>
                <p>Yes, our remedies are specifically designed for modern flats, villas, and offices.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do you provide online consultations?</h3>
                <p>Yes, both on-site and virtual consultations are available.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How quickly will I see changes?</h3>
                <p>Many clients report improvements within weeks, with long-term benefits building over time.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              In the rapidly developing region of Noida Extension, Uttar Pradesh, finding balance in living and working spaces is crucial. Vasterior&apos;s reputation as a famous Vastu consultant is built on years of trust, client satisfaction, and visible results.
            </p>
            <p className="mt-4">
              Whether it&apos;s a compact apartment, a luxurious villa, a bustling office, or a growing retail outlet, our practical, affordable, and effective Vastu solutions ensure that your space radiates positivity, prosperity, and peace.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – Famous Vastu Consultant in Noida Extension
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> info@spacebuild.com</p>
            </div>
          </div>
          <PostNavigation slug="famous-vastu-consultant-in-noida-extension" />
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