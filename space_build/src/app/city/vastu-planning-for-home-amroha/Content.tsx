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
            Vastu Planning for Home in Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Align Your Home. Elevate Your Life.
              </h3>
              <p>
                Vasterior believes that a home is not just a physical structure, it is a living, breathing ecosystem of energies, emotions, and intentions.
              </p>
              <p>
                Our Vastu Planning for Home in Amroha is designed for families who seek harmony, stability, growth, and peace in their everyday lives, without compromising on modern comfort or aesthetics.
              </p>
              <p>
                Rooted in authentic Vastu wisdom and interpreted through a contemporary lens, Vasterior offers thoughtful, non-destructive, and deeply practical Vastu planning solutions for homes across Amroha and nearby regions.
              </p>
            </div>

            {/* Why Matters */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vastu Planning Matters for Homes in Amroha
              </h3>
              <p>
                Amroha is a city where tradition and modern living beautifully coexist. From independent houses and ancestral homes to newly built residences and apartments, each space carries its own energetic imprint.
              </p>
              <p>
                However, many homeowners unknowingly face challenges such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Financial instability despite hard work</li>
                <li>Repeated health concerns within the family</li>
                <li>Delays in construction or renovations</li>
                <li>Mental stress, lack of peace, or disturbed sleep</li>
                <li>Children facing focus or growth-related issues</li>
              </ul>
              <p>
                Often, these challenges are not random. They are subtle indicators of imbalanced spatial energy. Vastu planning for homes in Amroha helps align your living space with natural forces, directions, elements, and activities, so that your home begins to support you instead of resisting you.
              </p>
            </div>

            {/* Vasterior Philosophy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior's Philosophy: Vastu That Works With Your Home, Not Against It
              </h3>
              <p>
                At Vasterior, we strongly believe that Vastu should heal spaces, not scare homeowners.
              </p>
              <p>Our approach to home Vastu planning is:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Non-destructive – no unnecessary demolition or fear-driven corrections</li>
                <li>Practical & lifestyle-oriented – aligned with how modern families live</li>
                <li>Design-integrated – Vastu and interiors work together, not separately</li>
                <li>Ethical & conscious – no superstition, no exaggeration</li>
              </ul>
              <p>
                We focus on energy alignment, flow, and balance, ensuring that every recommendation feels logical, achievable, and respectful of your existing home.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Home Vastu Planning Services in Amroha
              </h3>
              
              {/* New Home */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">New Home Vastu Planning</h4>
                <p className="mb-4">
                  Planning a new house or buying a plot in Amroha? We assist you with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>Plot and orientation analysis</li>
                  <li>Entrance and zoning guidance</li>
                  <li>Room placement and activity mapping</li>
                  <li>Elemental balance for long-term prosperity</li>
                </ul>
                <p>Early-stage Vastu planning helps avoid future corrections and creates a strong foundation for your home.</p>
              </div>

              {/* Existing Home */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Existing Home Vastu Correction</h4>
                <p className="mb-4">
                  Already living in a home but feeling stuck or unsettled? Our existing home Vastu services include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
                  <li>Detailed energy assessment of the house</li>
                  <li>Identification of imbalances</li>
                  <li>Non-invasive remedies that work with your current layout</li>
                  <li>Practical corrections without breaking or rebuilding</li>
                </ul>
                <p>Perfect for families living in old houses, builder floors, or apartments.</p>
              </div>
            </div>

            {/* Room Wise */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Room-Wise Vastu Planning
              </h3>
              <p className="mb-4">
                Each room has a specific role in shaping your life. We offer focused Vastu planning for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Main entrance & foyer</li>
                <li>Living room & family spaces</li>
                <li>Bedrooms (including children & master bedroom)</li>
                <li>Kitchen & dining areas</li>
                <li>Pooja room</li>
                <li>Toilets & utility spaces</li>
              </ul>
              <p>Every space is aligned based on direction, activity, and elemental harmony.</p>
            </div>

            {/* Renovation */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Renovation-Friendly Vastu Guidance
              </h3>
              <p className="mb-4">
                Planning a renovation or interior upgrade in Amroha? This is the perfect time to integrate Vastu.
              </p>
              <p>We guide you on:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Layout improvements</li>
                <li>Furniture placement</li>
                <li>Color and material alignment</li>
                <li>Lighting and spatial flow</li>
              </ul>
              <p>This ensures your renovation enhances not just beauty, but energy and wellbeing.</p>
            </div>

            {/* What Makes Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes Vasterior the Right Vastu Consultant in Amroha
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li><strong>Integrated Design + Vastu Expertise</strong> – We don't treat Vastu as a standalone service. It flows seamlessly with interior planning and spatial logic.</li>
                <li><strong>No Fear-Based Consulting</strong> – We never say "this will ruin your life" or "demolish immediately." Our solutions are calm, balanced, and reasoned.</li>
                <li><strong>Family-Centric Approach</strong> – Every home is planned keeping in mind children, elders, working professionals, and emotional comfort.</li>
                <li><strong>Rooted in Indian Wisdom, Aligned with Modern Living</strong> – Our guidance respects tradition while fully supporting today's lifestyle needs.</li>
              </ul>
            </div>

            {/* Who Should Opt */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Who Should Opt for Home Vastu Planning?
              </h3>
              <p>Vastu planning is not about belief, it is about alignment. Ideal for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Families building or buying a new home in Amroha</li>
                <li>Homeowners facing repeated life challenges without clear reasons</li>
                <li>Professionals working from home</li>
                <li>Families with children or elderly parents</li>
                <li>Anyone seeking peace, clarity, and long-term stability through conscious living</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Gentle Step Towards a Balanced Home
              </h3>
              <p>
                Your home should support your dreams, your health, and your relationships. With the right Vastu planning, even small shifts in space can create profound changes in daily life.
              </p>
              <p>
                If you are considering Vastu Planning for Home in Amroha, we invite you to have a calm, clarity-driven conversation with us.
              </p>
              <p>
                Call or WhatsApp at <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or Email at{" "}
                <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                  spacebuild.india@gamil.com
                </a>
                .
              </p>
              <p>
                <em>Whether you are building, renovating, or simply seeking answers, Vasterior is here to guide you, thoughtfully, ethically, and consciously.</em>
              </p>
              <p className="mt-6 pt-6 border-t border-gray-200">
                <strong>Vasterior</strong><br />
                Designing spaces that are aligned with intention, balance, and life itself.
              </p>
            </div>
          </div>

          <PostNavigation slug="vastu-planning-for-home-in-amroha" />
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
