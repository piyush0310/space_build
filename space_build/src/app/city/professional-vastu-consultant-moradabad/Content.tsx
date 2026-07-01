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
            <p>
              Trusted Vastu Guidance for Homes, Businesses & Institutions
            </p>
            <p>
              When it comes to shaping spaces that bring harmony, prosperity, and success, professional expertise makes all the difference. At Vasterior – Professional Vastu Consultant in Moradabad, UP, we provide authentic, research-based, and result-driven Vastu services for residential, commercial, industrial, and institutional spaces. Our approach combines ancient Vastu Shastra principles with modern interior and architectural needs, ensuring practical remedies that deliver long-term results.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">
              Why Choose a Professional Vastu Consultant?
            </h2>
            <ul className="list-disc ml-4 space-y-1">
              <li>Authenticity – Guidance rooted in traditional and scientific principles.</li>
              <li>Customized Remedies – Tailored solutions for your property’s unique challenges.</li>
              <li>Holistic Analysis – Consideration of all 16 directions and 5 elements.</li>
              <li>Non-Demolition Solutions – Practical remedies that avoid unnecessary expense.</li>
              <li>Proven Results – Positive changes in health, harmony, and financial growth.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900">
              Our Professional Vastu Services in Moradabad
            </h2>
            <ol className="list-decimal ml-4 space-y-1">
              <li>
                <strong>Residential Vastu Consultation</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Detailed analysis of homes, villas, and apartments.</li>
                  <li>Bedroom, kitchen, and pooja room corrections.</li>
                  <li>Remedies for peace, prosperity, and healthy family life.</li>
                </ul>
              </li>
              <li>
                <strong>Commercial Vastu Consultation</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Offices, shops, and showrooms aligned for success.</li>
                  <li>Cash counters, cabins, and workstations positioned for growth.</li>
                  <li>Practical solutions for sales and customer attraction.</li>
                </ul>
              </li>
              <li>
                <strong>Industrial Vastu Consultation</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Factories, warehouses, and workshops aligned with energy flow.</li>
                  <li>Machinery, raw material, and finished goods placement.</li>
                  <li>Remedies to reduce breakdowns, losses, and inefficiencies.</li>
                </ul>
              </li>
              <li>
                <strong>Institutional Vastu Consultation</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Schools, colleges, and hospitals designed for harmony.</li>
                  <li>Classrooms, wards, and auditoriums aligned with balance.</li>
                  <li>Solutions for discipline, reputation, and growth.</li>
                </ul>
              </li>
              <li>
                <strong>Plot & Land Vastu Consultation</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Site selection and orientation guidance.</li>
                  <li>Zoning for long-term prosperity.</li>
                </ul>
              </li>
              <li>
                <strong>Mahavastu & Advanced Remedies</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Modern Mahavastu techniques for practical application.</li>
                  <li>Color, mirror, metal, and symbolic remedies for balance.</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-900">
              Our Step-by-Step Process
            </h2>
            <ol className="list-decimal ml-4 space-y-1">
              <li>Initial Consultation – Understanding client goals and challenges.</li>
              <li>Site Visit & Layout Analysis – Studying orientation, entrances, and flow.</li>
              <li>Energy Mapping – Analyzing directions and five elements.</li>
              <li>Customized Recommendations – Tailored, easy-to-apply remedies.</li>
              <li>Integration with Interiors – Blending Vastu corrections with décor.</li>
              <li>Follow-Up Guidance – Ensuring long-term benefits.</li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-900">Remedies We Offer</h2>
            <ul className="list-disc ml-4 space-y-1">
              <li>Directional Color Therapy – Enhancing energy with paint and décor.</li>
              <li>Mirror Placement – Correcting energy leaks and blocked corners.</li>
              <li>Metal Remedies – Brass, copper, and iron to strengthen weak zones.</li>
              <li>Symbolic Remedies – Yantras and auspicious symbols for prosperity.</li>
              <li>Furniture Adjustments – Aligning beds, desks, and counters.</li>
              <li>Green & Water Remedies – Plants, fountains, and aquariums for natural flow.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900">Why Vasterior as Professional Vastu Consultant in Moradabad?</h2>
            <ul className="list-disc ml-4 space-y-1">
              <li>Certified Expertise – Deep knowledge of traditional and modern Vastu.</li>
              <li>Dual Advantage – Vastu + interior design for practical results.</li>
              <li>Proven Track Record – Trusted by families, businesses, and institutions.</li>
              <li>Local Expertise – Understanding Moradabad’s housing and commercial hubs.</li>
              <li>Non-Demolition Remedies – Cost-effective corrections without reconstruction.</li>
              <li>Client-Centric Approach – Personalized solutions for every space.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900">Benefits of Professional Vastu Consultation</h2>
            <ul className="list-disc ml-4 space-y-1">
              <li>Peace & Harmony – Families enjoy stronger relationships.</li>
              <li>Health & Vitality – Positive energy supports well-being.</li>
              <li>Financial Stability – Wealth zones activated for prosperity.</li>
              <li>Business Success – Offices and shops attract growth.</li>
              <li>Reputation & Trust – Institutions flourish with balanced energy.</li>
              <li>Sustainable Growth – Long-term stability in every aspect of life.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900">Client Testimonials</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                “We wanted professional guidance for our new home. Vasterior gave us clear, authentic remedies that worked beautifully.” – The Agarwal Family
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                  “Our office energy shifted completely after consultation. Employees are more focused, and our business has grown.” – Sharma Enterprises
              </blockquote>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-12">FAQs – Professional Vastu Consultant in Moradabad</h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: What makes Vasterior different from general Vastu advisors?</h3>
                <p>A: We offer certified, professional consultation with proven results.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Can remedies be applied without demolition?</h3>
                <p>A: Yes, our focus is on simple, practical corrections.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you provide services for both small and large properties?</h3>
                <p>A: Absolutely. We customize remedies for homes, shops, offices, industries, and institutions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Do you also offer Mahavastu services?</h3>
                <p>A: Yes, we integrate traditional Vastu and modern Mahavastu practices.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Can consultations be done online?</h3>
                <p>A: Yes, we provide both on-site and virtual consultations.</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Contact Vasterior – Professional Vastu Consultant in Moradabad
            </h2>
            <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
            <p><strong>📞 Phone:</strong> +91-9100883355</p>
            <p><strong>📧 Email:</strong> spacebuild.india@gmail.com</p>
            <p><strong>🌐 Website:</strong> <a href="http://www.vasterior.com" target="_blank" rel="noopener noreferrer">www.vasterior.com</a></p>
            <p className="mt-4 font-semibold">
              Vasterior – Professional Vastu Consultant in Moradabad, Delivering Authentic Guidance for Prosperity, Health & Growth.
            </p>
          </div>
          <PostNavigation slug="professional-vastu-consultant-in-moradabad" />
        </div>

        {/* Form Section */}
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
