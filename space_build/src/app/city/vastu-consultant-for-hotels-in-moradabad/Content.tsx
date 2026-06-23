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
            <h3 className="text-xl font-semibold text-gray-900">
              Designing Hotels That Welcome Prosperity, Guests & Positive Energy
            </h3>
            <p>
              Hospitality is more than providing rooms — it’s about creating an environment where guests feel comfortable, happy, and eager to return. In Moradabad, a city with growing tourism and business visitors, hotels must balance modern amenities with an atmosphere that radiates positivity and trust. At Vasterior – Vastu Consultant for Hotels in Moradabad, UP, we integrate Vastu Shastra principles into hotel layouts, interiors, and operations, ensuring success for owners and satisfaction for guests.
            </p>

            {/* Why Hotels Need Vastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Hotels Need Vastu Consultation
            </h2>
            <p>
              Hotels are dynamic spaces where multiple energies interact — guests, staff, kitchens, and commercial activities. Without balance, hotels often face:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Low or inconsistent occupancy rates.</li>
              <li>Negative reviews due to poor guest experience.</li>
              <li>High staff turnover or management stress.</li>
              <li>Financial instability despite good facilities.</li>
              <li>Guest discomfort and lack of repeat business.</li>
            </ul>
            <p>
              By applying Vastu for hotels, we align every element to create harmony that supports both business growth and guest happiness.
            </p>

            {/* Our Vastu Services for Hotels */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu Services for Hotels
            </h2>
            <p>
              We provide end-to-end hotel Vastu consultation in Moradabad for new constructions and existing establishments.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Site & Building Selection</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Analysis of location, plot orientation, and surroundings.</li>
                  <li>Guidance on choosing auspicious sites for hotel projects.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Master Layout Planning</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Entrance positioning to attract prosperity.</li>
                  <li>Lobby and reception placement for welcoming energy.</li>
                  <li>Proper zoning of rooms, restaurants, banquet halls, and service areas.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Room & Guest Area Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Guest room layouts aligned for comfort and positivity.</li>
                  <li>Windows, beds, and bathrooms arranged as per directions.</li>
                  <li>Banquet halls, conference rooms, and dining spaces energized.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Restaurant & Kitchen Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Kitchens aligned with fire element for safety and success.</li>
                  <li>Restaurants and bars positioned for profitability.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Staff & Operations Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Staff quarters, admin offices, and service areas aligned for efficiency.</li>
                  <li>Storage and utility spaces balanced to reduce waste.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">6. Existing Hotel Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Non-demolition corrections for running hotels.</li>
                  <li>Mirror, color, and symbolic remedies integrated with décor.</li>
                </ul>
              </div>
            </div>

            {/* Consultation Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Consultation Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>Initial Discussion – Understanding hotel type, capacity, and owner’s goals.</li>
              <li>Site Visit & Analysis – Examining layout, guest flow, and operational zones.</li>
              <li>Energy Mapping – Studying 16 directions and elemental balance.</li>
              <li>Customized Remedies – Offering corrections specific to hospitality needs.</li>
              <li>Integration with Interiors – Remedies blended with branding and aesthetics.</li>
              <li>Follow-Up Guidance – Monitoring business impact and refining remedies.</li>
            </ul>

            {/* Remedies */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Remedies We Apply for Hotels
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Color Remedies – Using shades in rooms, lobbies, and halls for attraction.</li>
              <li>Mirror & Metal Remedies – Correcting imbalances in entrances or corners.</li>
              <li>Symbolic Enhancements – Placement of yantras or spiritual symbols for prosperity.</li>
              <li>Furniture & Fixture Alignment – Reception desks, dining tables, and beds positioned correctly.</li>
              <li>Green & Water Remedies – Gardens, fountains, and pools aligned with natural energy.</li>
            </ul>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior as Vastu Consultant for Hotels in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Hospitality-Focused Expertise – Specialized in hotel, resort, and guesthouse projects.</li>
              <li>Dual Knowledge – Interior design + Vastu integration for seamless execution.</li>
              <li>Practical Remedies – Corrections that don’t disrupt daily hotel operations.</li>
              <li>Local Advantage – Familiar with Moradabad’s growing hospitality market.</li>
              <li>Trusted Brand – Businesses and luxury properties across UP rely on our guidance.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Hotel Vastu Consultation
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Higher Occupancy Rates – Hotels attract more guests consistently.</li>
              <li>Positive Guest Experiences – Rooms radiate comfort and peace.</li>
              <li>Improved Reputation – Guests leave satisfied and spread good reviews.</li>
              <li>Better Staff Efficiency – Balanced energy encourages teamwork.</li>
              <li>Financial Stability – Wealth zones activated for steady cash flow.</li>
              <li>Repeat Business – Guests prefer to return to energy-balanced hotels.</li>
            </ul>

            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our boutique hotel in Moradabad was struggling with low occupancy. Vasterior’s hotel Vastu consultation helped us increase guest flow within months.&quot; – Hotel Sunrise Residency
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Guests often complained of discomfort earlier. After applying remedies, our reviews improved and repeat bookings increased.&quot; – Royal Heritage Inn
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Consultant for Hotels in Moradabad
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Can Vastu remedies improve occupancy in existing hotels?</h3>
                <p>A: Yes, non-demolition remedies can align energy to attract more guests.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Do you provide Vastu for restaurants inside hotels?</h3>
                <p>A: Absolutely. We integrate kitchen, bar, and dining layouts for profitability.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can Vastu be applied during new hotel construction?</h3>
                <p>A: Yes, applying Vastu at blueprint stage gives the best long-term results.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Are remedies costly?</h3>
                <p>A: No, most involve affordable corrections with colors, mirrors, or placements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you provide services only in Moradabad?</h3>
                <p>A: While based in Moradabad, we also offer consultancy across UP and virtual guidance.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Vastu Consultant for Hotels in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>

            <p className="mt-4 font-semibold">
              Vasterior – Helping Hotels in Moradabad Attract Prosperity, Guests & Growth with Vastu Guidance.
            </p>
          </div>
          <PostNavigation slug="vastu-consultant-for-hotels-in-moradabad" />
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
