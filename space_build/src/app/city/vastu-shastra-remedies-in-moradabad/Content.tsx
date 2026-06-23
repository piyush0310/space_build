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
            <p>Simple, Effective & Non-Demolition Remedies for Homes & Businesses</p>
            <p>
              Not every property in Moradabad can be rebuilt or redesigned from scratch to follow Vastu principles. Many families and businesses already live or work in buildings where the layout may not perfectly align with Vastu Shastra. At Vasterior – Vastu Shastra Remedies in Moradabad, UP, we specialize in non-demolition, practical, and budget-friendly remedies that balance energy and bring harmony, prosperity, and growth without the need for expensive reconstruction.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">Why Vastu Remedies Are Needed</h2>
            <p>Even small imbalances in direction or element placement can affect well-being and success. Common issues include:</p>
            <ul className="list-disc ml-4 space-y-1">
              <li>Homes with wrongly placed kitchens or bedrooms.</li>
              <li>Shops with cash counters facing the wrong direction.</li>
              <li>Factories with machinery in imbalance zones.</li>
              <li>Offices with poorly placed cabins or workstations.</li>
              <li>Apartments with missing or cut corners in layouts.</li>
            </ul>
            <p>With targeted remedies, these imbalances can be corrected easily while still delivering powerful results.</p>

            <h2 className="text-xl font-semibold text-gray-900">Our Vastu Shastra Remedies in Moradabad</h2>
            <ol className="list-decimal ml-4 space-y-1">
              <li>
                <strong>Residential Remedies</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Bedroom alignment with proper directions.</li>
                  <li>Kitchen corrections for fire and water balance.</li>
                  <li>Mirror remedies for missing corners.</li>
                  <li>Use of colors, symbols, and plants for positivity.</li>
                </ul>
              </li>
              <li>
                <strong>Commercial Remedies</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Cash counter placement corrections.</li>
                  <li>Furniture and shelf alignment for shops.</li>
                  <li>Mirrors and lights used to attract customers.</li>
                  <li>Metal remedies for stability in offices.</li>
                </ul>
              </li>
              <li>
                <strong>Industrial Remedies</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Placement of machinery for reduced breakdowns.</li>
                  <li>Storage adjustments for smooth workflow.</li>
                  <li>Symbolic remedies for wealth and growth.</li>
                  <li>Energy correction for warehouses and godowns.</li>
                </ul>
              </li>
              <li>
                <strong>Institutional Remedies</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Classroom and library positioning for focus.</li>
                  <li>Hospitals corrected for faster patient recovery.</li>
                  <li>Colleges aligned for reputation and admissions.</li>
                </ul>
              </li>
              <li>
                <strong>Plot & Land Remedies</strong>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Correcting irregular plots using symbolic placements.</li>
                  <li>Energy balance through fencing, plantations, and entrances.</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-900">Common Vastu Remedies We Use</h2>
            <ul className="list-disc ml-4 space-y-1">
              <li>Color Therapy – Applying directional colors to walls and décor.</li>
              <li>Mirror Placement – Correcting wrong or missing corners.</li>
              <li>Metal Remedies – Brass, copper, and iron items for balance.</li>
              <li>Symbolic Enhancers – Yantras, Swastik, and sacred symbols.</li>
              <li>Water & Green Remedies – Fountains, aquariums, and plants for harmony.</li>
              <li>Furniture Re-Arrangement – Aligning beds, desks, and counters for energy flow.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900">Our Remedy Application Process</h2>
            <ol className="list-decimal ml-4 space-y-1">
              <li>Layout Analysis – Identifying directional and elemental imbalances.</li>
              <li>Customized Remedy Plan – Suggesting property-specific corrections.</li>
              <li>Practical Implementation – Easy-to-apply remedies without major cost.</li>
              <li>Integration with Interiors – Remedies blended with décor for aesthetics.</li>
              <li>Follow-Up Support – Ensuring long-term effectiveness.</li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-900">Why Choose Vasterior for Vastu Shastra Remedies in Moradabad?</h2>
            <ul className="list-disc ml-4 space-y-1">
              <li>Certified Expertise – Authentic Vastu knowledge with proven results.</li>
              <li>Non-Demolition Focus – Remedies that save cost and time.</li>
              <li>Practical Solutions – Easy, décor-friendly applications.</li>
              <li>Dual Advantage – Interior design + Vastu for seamless integration.</li>
              <li>Local Experience – Deep understanding of Moradabad’s housing and commercial spaces.</li>
              <li>Trusted Brand – Families, businesses, and industries across UP rely on us.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900">Benefits of Vastu Remedies</h2>
            <ul className="list-disc ml-4 space-y-1">
              <li>Quick Results – Energy shifts felt within weeks.</li>
              <li>Affordable Solutions – Cost-effective corrections without renovation.</li>
              <li>Peaceful Homes – Families experience harmony and wellness.</li>
              <li>Profitable Businesses – Shops and offices attract more growth.</li>
              <li>Efficient Industries – Factories run smoothly with fewer losses.</li>
              <li>Long-Term Prosperity – Sustained balance and stability in all aspects of life.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900">Client Testimonials</h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                “Our flat had multiple Vastu defects, but Vasterior gave us simple remedies like mirrors and color changes. The difference was immediate.” – Ritu & Sandeep Mehra
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                “We couldn’t rebuild our shop, but Vasterior’s remedies helped us attract more customers and sales improved.” – Sharma Electronics
              </blockquote>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-12">FAQs – Vastu Shastra Remedies in Moradabad</h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Are remedies as effective as full Vastu compliance?</h3>
                <p>A: Yes, non-demolition remedies provide strong results when applied correctly.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Do remedies cost a lot?</h3>
                <p>A: No, most are affordable and use simple décor items.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can remedies be applied in rented spaces?</h3>
                <p>A: Absolutely. Remedies work for both owned and rented properties.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How soon do results appear?</h3>
                <p>A: Many clients notice improvements within weeks; deeper changes take time.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you offer remedy-only services without full consultation?</h3>
                <p>A: Yes, we provide focused remedy plans if full consultation isn’t required.</p>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900">
              Contact Vasterior – Vastu Shastra Remedies in Moradabad
            </h2>
            <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
            <p><strong>📞 Phone:</strong> +91-9100883355</p>
            <p><strong>📧 Email:</strong> info@spacebuild.com</p>
            <p><strong>🌐 Website:</strong> <a href="http://www.vasterior.com" target="_blank" rel="noopener noreferrer">www.vasterior.com</a></p>

            <p className="mt-4 font-semibold">
              Vasterior – Practical & Affordable Vastu Shastra Remedies in Moradabad, Helping You Balance Energy Without Reconstruction.
            </p>
          </div>
          <PostNavigation slug="vastu-shastra-remedies-in-moradabad" />
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
