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
            Affordable Vastu Consultant in Chandausi
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Interior Design & MahaVastu Alignment by Vasterior
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior brings together intelligent interior design and authentic MahaVastu principles to help homes and workplaces in Chandausi function better, energetically, emotionally, and practically. If you're looking for an affordable Vastu consultant in Chandausi who doesn't rely on fear-based remedies or generic rules, you're in the right place.
              </p>
              <p className="mt-4 font-semibold">
                We don't "fix" spaces blindly. We study them.
              </p>
              <p className="font-semibold">
                We don't promise miracles. We create alignment.
              </p>
            </div>

            {/* Why Vastu Isn't One-Rule-Fits-All */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vastu Isn't One-Rule-Fits-All
              </h3>
              <p className="mt-4">
                Most people encounter Vastu as a list of do's and don'ts. Face this way. Don't place that there. Add a remedy and hope for the best.
              </p>
              <p>
                That's not how real Vastu works. Every home has a different layout. Every family lives differently. Every space carries its own energetic pattern.
              </p>
              <p>
                At Vasterior, we work exclusively with MahaVastu, a scientific and logic-driven approach that evaluates directions, layout usage, and energy flow as they exist, not as textbooks assume. This allows us to offer solutions that are practical, personalized, and non-invasive.
              </p>
            </div>

            {/* What Makes Vasterior Different */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes Vasterior Different
              </h3>
              <p className="mt-4">
                We sit at the intersection of design and direction. Unlike traditional consultants who treat Vastu and interiors as separate worlds, Vasterior integrates both from day one. That means:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>No awkward design compromises</li>
                <li>No demolition-heavy corrections unless absolutely necessary</li>
                <li>No superstition-driven advice</li>
              </ul>
              <p className="mt-4">
                Instead, we focus on alignment that feels natural, looks intentional, and supports how you actually live or work. And yes, it's affordable. Because good Vastu should be accessible, not intimidating.
              </p>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Vastu & Interior Services in Chandausi
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Residential Vastu Consultation</h4>
                  <p>For apartments, independent houses, villas, and plots. We assess energy flow, room usage, entrances, kitchens, bedrooms, and more, then suggest MahaVastu-aligned corrections that fit your lifestyle.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Commercial & Office Vastu</h4>
                  <p>Ideal for shops, offices, clinics, and workspaces. Designed to improve stability, focus, decision-making, and growth, without disrupting operations.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interior Design with MahaVastu Alignment</h4>
                  <p>Design isn't just about aesthetics. We create interiors that are visually refined and energetically balanced, so your space works for you, not against you.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Online & On-Site Consultations</h4>
                  <p>Whether you're in Chandausi or consulting remotely, our process is structured, clear, and outcome-driven.</p>
                </div>
              </div>
            </div>

            {/* The MahaVastu Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The MahaVastu Approach (In Simple Terms)
              </h3>
              <p className="mt-4">
                MahaVastu is not about superstition. It's about directional intelligence. Instead of forcing structural changes, MahaVastu focuses on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Correct placement and activation</li>
                <li>Energy balancing through subtle design shifts</li>
                <li>Logical corrections that respect existing architecture</li>
              </ul>
              <p>This makes it ideal for modern homes and businesses where practicality matters as much as belief.</p>
            </div>

            {/* Affordable Doesn't Mean Generic */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Affordable Doesn't Mean Generic
              </h3>
              <p className="mt-4">
                Being an affordable Vastu consultant in Chandausi doesn't mean cutting corners. It means offering clarity instead of confusion, solutions instead of fear, and guidance instead of guesswork.
              </p>
              <p>
                At Vasterior, every consultation is approached with intent, whether it's a single-room concern or a full-space alignment.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. Is Vasterior really an affordable Vastu consultant in Chandausi?
                  </h3>
                  <p>Yes. Our pricing is structured to remain accessible while maintaining professional depth. We believe effective Vastu guidance shouldn't be exclusive or fear-driven.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do you follow traditional Vastu or MahaVastu?
                  </h3>
                  <p>We work strictly with MahaVastu principles, which are more adaptable to modern architecture and existing structures.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Will I need to break walls or redesign my entire home?
                  </h3>
                  <p>In most cases, no. MahaVastu focuses on corrective alignment rather than heavy demolition. Structural changes are suggested only when absolutely necessary.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Can Vastu and interior design really work together?
                  </h3>
                  <p>They should. When Vastu and design are planned together, the result is a space that looks good and feels right—without compromises.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. Do you offer online consultations for Chandausi clients?
                  </h3>
                  <p>Absolutely. Many clients prefer online consultations, especially for initial assessments. On-site visits are available when required.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. How do I get started?
                  </h3>
                  <p>Start with a conversation. A quick call or email helps us understand your concern and guide you toward the right next step—without any obligation.</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Ready to Align Your Space?
              </h3>
              <p className="text-center mb-6">
                If you've been feeling stuck, unsettled, or simply unsure about your space, a short conversation can bring surprising clarity.
              </p>
              <div className="text-center space-y-3">
                <p className="font-semibold">📞 Call: <a href="tel:+917906086899" className="text-blue-600 hover:underline">+917906086899</a></p>
                <p className="font-semibold">📧 Email: <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">spacebuild.india@gamil.com</a></p>
              </div>
            </div>
          </div>

          <PostNavigation slug="affordable-vastu-consultant-in-chandausi" />
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
