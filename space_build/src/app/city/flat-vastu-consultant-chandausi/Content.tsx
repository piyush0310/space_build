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
            Flat Vastu Consultant in Chandausi
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Interior Design & MahaVastu Alignment by Vasterior
          </p>
          <p className="text-lg mb-8 text-gray-700">
            Vasterior believes that a home should do more than look beautiful, it should work for you. As a trusted Flat Vastu Consultant in Chandausi, we help homeowners align their living spaces with the principles of MahaVastu, seamlessly integrating Vastu science with thoughtful interior design to create homes that feel balanced, calm, and energetically supportive.
          </p>
          <p className="text-lg mb-8 text-gray-700">
            In a world of compact apartments and modern flats, traditional Vastu advice often feels impractical. That's where Vasterior steps in, offering real, workable Vastu solutions designed specifically for flat living, without demolition, fear-based narratives, or forced changes.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Why Flat Vastu Matters */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Flat Vastu Matters More Than You Think
              </h3>
              <p className="mt-4">
                Flats are built for efficiency, not energy flow. Fixed layouts, shared walls, limited directions, and structural constraints can unknowingly create:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Financial instability or stagnation</li>
                <li>Mental restlessness and stress</li>
                <li>Sleep disturbances</li>
                <li>Relationship friction</li>
                <li>Health imbalances</li>
              </ul>
              <p className="mt-4">
                A professional Flat Vastu Consultant doesn't change your architecture, we correct the energy within it.
              </p>
              <p className="mt-4">
                Using MahaVastu principles, Vasterior identifies subtle imbalances and corrects them through placements, directional remedies, interior zoning, and design alignment, without breaking walls or disrupting your lifestyle.
              </p>
            </div>

            {/* What Makes Vasterior Different */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes Vasterior Different
              </h3>
              <p className="mt-4">
                Most Vastu consultants work in isolation. Most interior designers ignore energy alignment.
              </p>
              <p className="mt-4">Vasterior does both, together.</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>MahaVastu-Based Approach</strong><br/>MahaVastu is a modern, logic-driven Vastu system designed for today's homes. It focuses on energy correction, not superstition.</li>
                <li><strong>Flat-Friendly, Non-Destructive Solutions</strong><br/>No demolition. No panic. No "this is wrong" fear tactics. Just smart, corrective guidance that fits your existing flat.</li>
                <li><strong>Interior Design with Purpose</strong><br/>Every placement, furniture, colors, décor, lighting, is aligned not just visually, but energetically.</li>
                <li><strong>Local Understanding of Chandausi Homes</strong><br/>We understand the realities of flats and apartments in Chandausi, space limitations, builder layouts, and lifestyle needs.</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Flat Vastu Consultation Services in Chandausi
              </h3>
              <p className="mt-4">
                Complete Flat Vastu Analysis
              </p>
              <p className="mt-4">
                A detailed assessment of your flat's layout, entrances, bedrooms, kitchen, toilets, and living areas, mapped against MahaVastu zones.
              </p>
              <p className="mt-4">
                Vastu-Aligned Interior Planning
              </p>
              <p className="mt-4">
                Design suggestions that improve flow, comfort, and energy, without compromising aesthetics.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Furniture & Placement Corrections</h4>
                  <p>Correcting heavy placements, sleeping directions, work desks, and storage to support productivity and peace.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Color & Element Balancing</h4>
                  <p>Using colors, materials, and elements to neutralize imbalances and enhance positivity.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vastu for Existing Flats</h4>
                  <p>Already living in your flat? No problem. We specialize in Vastu correction for lived-in homes.</p>
                </div>
              </div>
            </div>

            {/* Personal Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Calmer Home Starts with One Conversation
              </h3>
              <p className="mt-4">
                Whether you're planning a new interior or correcting an existing space, a single consultation can bring clarity. Many of our clients begin with a simple call to <a href="tel:+917906086899" className="text-blue-600 hover:underline">+917906086899</a>, just to understand what's possible for their flat. Others prefer writing to us at <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">info@spacebuild.com</a> to discuss their concerns in detail before moving ahead.
              </p>
              <p className="mt-4">
                There's no pressure, only practical guidance rooted in experience.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                FAQs – Flat Vastu Consultant Chandausi
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. Can Vastu really be corrected in a flat without demolition?
                  </h3>
                  <p>Yes. MahaVastu focuses on energy correction through placements, elements, colors, and directional alignment, no structural changes required.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Is MahaVastu different from traditional Vastu Shastra?
                  </h3>
                  <p>Absolutely. MahaVastu is practical, scientific, and suited for modern homes like flats and apartments, unlike traditional methods that rely heavily on construction changes.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Do you provide Vastu consultation along with interior design?
                  </h3>
                  <p>Yes. That's our core strength. Vasterior integrates interior design and Vastu alignment so your home looks good and feels right.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. I already live in my flat. Is consultation still useful?
                  </h3>
                  <p>100%. Most of our clients are living in their flats when they consult us. Corrections can be made without disrupting daily life.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. How do I get started with Vasterior in Chandausi?
                  </h3>
                  <p>You can begin by calling <a href="tel:+917906086899" className="text-blue-600 hover:underline">+917906086899</a> for a quick discussion or emailing <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">info@spacebuild.com</a> with details about your flat. We'll guide you from there.</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Align Your Flat. Elevate Your Life.
              </h3>
              <p className="text-center mb-6">
                Your home is influencing you every single day, whether you realize it or not. With the right Vastu alignment and intentional design, it can start working with you instead of against you.
              </p>
              <p className="text-center mb-6">
                Vasterior is here to help you create a flat in Chandausi that feels balanced, supportive, and genuinely yours.
              </p>
              <div className="text-center space-y-3">
                <p>📞 Call: <a href="tel:+917906086899" className="text-blue-600 hover:underline">+917906086899</a></p>
                <p>📧 Email: <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">info@spacebuild.com</a></p>
              </div>
            </div>
          </div>

          <PostNavigation slug="flat-vastu-consultant-in-chandausi" />
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
