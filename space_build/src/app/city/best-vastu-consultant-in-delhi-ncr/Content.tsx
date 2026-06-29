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
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Vastu Consultant in Delhi NCR
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Welcome to Vasterior, your trusted Vastu Consultant in Delhi NCR dedicated to creating spaces that radiate balance, prosperity, and positive energy. Whether you&apos;re planning your dream home, designing an office, or restructuring a commercial space, our Vastu consultation services help you align your environment with the natural forces of harmony and success.
            </p>
            <p>
              At Vasterior, we blend traditional Vastu principles with modern interior design concepts to ensure that every project delivers both aesthetic appeal and energetic balance.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior - Experience Meets Vastu Expertise
            </h2>
            <p>
              Vasterior is a leading Vastu and interior design studio in Delhi NCR, known for its holistic approach to spatial design. With years of expertise in both interior architecture and Vastu consultation, our mission is to help clients build environments that promote health, happiness, and abundance.
            </p>
            <p>
              Our team of certified Vastu experts in Delhi combines ancient wisdom with modern analytical tools to ensure your home or workspace follows optimal energy flow. From site evaluation and layout planning to directional corrections and element balancing, every recommendation is backed by deep understanding and practical implementation.
            </p>
            <p>
              We have successfully guided hundreds of families, entrepreneurs, and corporates to transform their spaces into zones of prosperity and peace.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Vastu Consultant in Delhi NCR
            </h2>
            <p>
              Choosing the right Vastu consultant in Delhi NCR can make a world of difference in how your space feels and functions. Here&apos;s why clients across the region trust Vasterior:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified and Experienced Vastu Experts</strong> - Our consultants hold professional credentials and decades of combined experience in Vastu science and design.</li>
              <li><strong>Customized Vastu Solutions</strong> - We don&apos;t follow a one-size-fits-all approach. Every consultation is tailored to your plot, building layout, and lifestyle needs.</li>
              <li><strong>Scientific and Logical Approach</strong> - We interpret Vastu with modern practicality, focusing on achievable remedies rather than demolitions or superstitions.</li>
              <li><strong>End-to-End Support</strong> - From initial consultation to final implementation, we guide you through every stage of correction and design alignment.</li>
              <li><strong>Integration with Interior Design</strong> - As a full-service design studio, we ensure Vastu recommendations blend seamlessly into your interiors.</li>
              <li><strong>Trusted by Hundreds</strong> - Our satisfied clients in Delhi NCR speak volumes about our commitment, precision, and quality results.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu and Interior Services in Delhi NCR
            </h2>
            <p>
              At Vasterior, we offer a complete range of Vastu consultation services for residential, commercial, and industrial properties in Delhi NCR.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Home Vastu Consultation</h3>
                <p>
                  Create a home that welcomes prosperity, peace, and happiness. Our home Vastu consultants analyze layout, directions, and elemental balance to ensure every room supports your family&apos;s well-being.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Office Vastu in Delhi NCR</h3>
                <p>
                  A well-balanced workspace enhances productivity and financial growth. We optimize seating arrangements, desk directions, and energy zones to attract success and team harmony.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Commercial and Industrial Vastu</h3>
                <p>
                  From retail shops to factories and hotels, our experts align commercial setups for maximum profitability, customer flow, and operational efficiency.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Vastu for Renovations and Interiors</h3>
                <p>
                  Even if your space is already built, our Vastu expert in Delhi can suggest simple, non-structural remedies through interior adjustments, lighting, mirrors, colors, and elements.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. On-Site and Online Consultations</h3>
                <p>
                  We offer flexible consultation modes—whether you prefer an on-site visit in Delhi NCR or a convenient online session, we ensure you receive accurate and actionable insights.
                </p>
              </div>
            </div>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio - Excellence in Every Project
            </h2>
            <p>
              Our portfolio reflects a perfect blend of aesthetics, energy, and innovation. From luxury residences to modern corporate offices, Vasterior&apos;s Vastu-aligned interiors have transformed how people experience their spaces.
            </p>
            <p>
              Every project is guided by three core principles—Balance, Functionality, and Harmony. We ensure every wall, corner, and layout resonates with the right energy and visual elegance.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials - Trusted by Hundreds Across Delhi NCR
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior completely changed the vibe of our home. We could feel the positivity from day one. Their team explained every detail with clarity and care.&quot; – Neha Sharma, South Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our office now feels more energetic and focused. The team&apos;s Vastu insights made a huge difference in our work environment.&quot; – Rohit Malhotra, Gurugram
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Professional, insightful, and genuine. Vasterior is definitely the best Vastu consultant in Delhi NCR.&quot; – Pooja Mehta, Noida
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions (FAQ)
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">1. What makes Vasterior the best Vastu consultant in Delhi NCR?</h3>
                <p>Vasterior offers a unique combination of expertise in traditional Vastu Shastra and modern interior design, providing scientifically logical, result-oriented Vastu consultation services.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2. Do I need to reconstruct my home to apply Vastu remedies?</h3>
                <p>No. Most Vastu corrections suggested by Vasterior involve minimal or no structural changes. We focus on practical adjustments using design elements, colors, and placements.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. Can Vasterior help with Vastu for office spaces in Delhi NCR?</h3>
                <p>Yes. We specialize in Vastu for offices and commercial properties, ensuring layouts support productivity, financial growth, and team harmony.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. How does the consultation process work?</h3>
                <p>Our Vastu consultation begins with site analysis, directional mapping, and layout evaluation. After that, we provide a detailed report with recommendations and remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. Does Vasterior offer online Vastu consultations?</h3>
                <p>Absolutely. We provide convenient online Vastu consultation services across Delhi NCR and beyond. You can share your layout plan, and our experts will analyze it remotely.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Contact Vasterior Today
            </h2>
            <p>
              Bring balance, peace, and prosperity into your life with professional Vastu guidance.
            </p>
            <p>
              Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.
            </p>
            <div className="space-y-2 mt-4">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> info@spacebuild.com</p>
            </div>
            <p className="mt-6">
              Your space has the power to shape your success, health, and happiness. Let Vasterior&apos;s Vastu experts in Delhi guide you toward the perfect balance between energy and aesthetics. Schedule your personalized Vastu consultation today and experience the difference.
            </p>
          </div>
          <PostNavigation slug="vastu-consultant-in-delhi-ncr" />
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