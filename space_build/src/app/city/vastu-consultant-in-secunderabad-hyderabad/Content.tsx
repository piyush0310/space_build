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
            Vastu Consultant in Secunderabad, Hyderabad
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <p>
              Vasterior believes that every space carries an energy blueprint that silently influences success, relationships, health, and financial stability. When your home or workplace aligns with the right directional energies, life begins to flow differently, decisions feel clearer, opportunities increase, and daily living becomes effortlessly balanced. As a trusted Vastu Consultant in Secunderabad, Hyderabad, Vasterior combines the precision of MahaVastu principles with intelligent interior design to transform ordinary spaces into powerful environments that support your goals.
            </p>
            <p>
              Whether you are moving into a new property, redesigning your interiors, or correcting existing energy imbalances, our approach focuses on practical, modern solutions that work within real urban lifestyles.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu Matters in Modern Homes & Businesses
            </h2>
            <p>
              Urban living has changed how spaces are designed, but energy principles remain constant. Apartments, villas, offices, and commercial properties often unknowingly create energetic conflicts due to layout limitations.
            </p>
            <p>Proper Vastu alignment helps:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improve financial stability and growth opportunities</li>
              <li>Enhance mental clarity and decision-making</li>
              <li>Support harmonious relationships within families</li>
              <li>Increase productivity in workspaces</li>
              <li>Reduce stress caused by environmental imbalance</li>
            </ul>
            <p>
              Vastu today is not about superstition — it is about optimizing spatial psychology, directional energy flow, and environmental harmony.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior
            </h2>
            <p>
              Vasterior is a modern Vastu and interior design studio specializing in MahaVastu-based spatial alignment for contemporary homes and commercial environments in Hyderabad.
            </p>
            <p>Our philosophy is simple:</p>
            <p>Design should not only look beautiful - it should work energetically for you.</p>
            <p>What makes Vasterior different:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Integration of MahaVastu principles with modern interior aesthetics</li>
              <li>Scientific energy mapping rather than generalized remedies</li>
              <li>Practical corrections without unnecessary reconstruction</li>
              <li>Personalized solutions based on property layout and occupant goals</li>
              <li>Balance between spiritual wisdom and architectural logic</li>
            </ul>
            <p>We bridge ancient spatial intelligence with present-day design functionality.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu Consultation Services
            </h2>

            <h3 className="font-semibold text-gray-900">
              Residential Vastu Consultation
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Apartment and villa energy analysis</li>
              <li>Room placement evaluation</li>
              <li>Bedroom, kitchen, and entrance alignment</li>
              <li>Family harmony and wellbeing optimization</li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-4">
              Commercial & Office Vastu
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Office productivity enhancement</li>
              <li>Business growth alignment</li>
              <li>Workspace energy planning</li>
              <li>Leadership cabin positioning strategies</li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-4">
              Property Purchase Vastu Analysis
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Pre-buy evaluation of flats, villas, and plots</li>
              <li>Risk identification before investment</li>
              <li>Directional suitability assessment</li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-4">
              Interior Design with MahaVastu Alignment
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Layout planning aligned with energy zones</li>
              <li>Color and material recommendations</li>
              <li>Furniture positioning strategies</li>
              <li>Functional yet energetically balanced interiors</li>
            </ul>

            <h3 className="font-semibold text-gray-900 mt-4">
              Energy Corrections Without Demolition
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Non-structural remedies</li>
              <li>Element balancing techniques</li>
              <li>Directional activation methods</li>
              <li>Practical solutions suitable for apartments</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD
            </h2>
            <p>
              Choosing the right Vastu consultant is about results, not rituals. Vasterior focuses on measurable lifestyle improvement through intelligent corrections.
            </p>
            <p>Clients choose us because we offer:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Practical solutions suited for modern buildings</li>
              <li>MahaVastu-based scientific analysis</li>
              <li>Interior design expertise under one roof</li>
              <li>Customized recommendations, never generic advice</li>
              <li>Minimal disruption to existing structures</li>
              <li>Long-term energy alignment strategies</li>
            </ul>
            <p>Our goal is not temporary fixes but sustainable transformation.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process: From Analysis to Alignment
            </h2>
            <p>
              We follow a structured consultation journey designed for clarity and effectiveness.
            </p>

            <h3 className="font-semibold text-gray-900">
              Step 1: Discovery Consultation
            </h3>
            <p>Understanding your concerns, goals, and property details.</p>

            <h3 className="font-semibold text-gray-900 mt-4">
              Step 2: Energy Mapping & Analysis
            </h3>
            <p>Detailed directional and spatial evaluation using MahaVastu principles.</p>

            <h3 className="font-semibold text-gray-900 mt-4">
              Step 3: Diagnosis Report
            </h3>
            <p>Identification of imbalance zones affecting different life aspects.</p>

            <h3 className="font-semibold text-gray-900 mt-4">
              Step 4: Design & Correction Strategy
            </h3>
            <p>Interior alignment and energy correction recommendations.</p>

            <h3 className="font-semibold text-gray-900 mt-4">
              Step 5: Implementation Guidance
            </h3>
            <p>Step-by-step support to apply changes confidently.</p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Local Expertise in Secunderabad & Hyderabad
            </h2>
            <p>
              Properties across Secunderabad and Hyderabad come with unique architectural patterns, high-rise apartments, independent villas, gated communities, and commercial complexes. Vasterior understands these regional layouts deeply and tailors Vastu solutions specifically for urban South Indian construction styles.
            </p>
            <p>
              Our recommendations respect building constraints while maximizing energetic potential, ensuring solutions remain realistic and implementable.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Transformations Clients Experience
            </h2>
            <p>
              After alignment, clients commonly notice:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improved financial momentum</li>
              <li>Greater emotional stability at home</li>
              <li>Better sleep and reduced stress</li>
              <li>Enhanced business performance</li>
              <li>Stronger interpersonal harmony</li>
              <li>Increased motivation and focus</li>
            </ul>
            <p>
              When space supports you energetically, effort starts yielding better outcomes.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Clients Say
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>"Our home finally feels peaceful."</strong><br/>
                After Vasterior's consultation, small corrections created a noticeable shift in family harmony and overall positivity.
              </li>
              <li>
                <strong>"Business decisions became clearer."</strong><br/>
                Office alignment recommendations helped improve workflow and team productivity within weeks.
              </li>
              <li>
                <strong>"Practical and modern approach."</strong><br/>
                No demolition, no complicated rituals, just logical guidance that actually worked.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Start Your Vastu Alignment Journey
            </h2>
            <p>
              If you're planning to harmonize your home or workspace, a quick conversation with our team at +917906086899 can help you understand how MahaVastu alignment applies specifically to your property. You can also begin your consultation journey by sharing your requirements at{" "}
              <a
                href="mailto:info@spacebuild.com"
                className="text-blue-600 underline"
              >
                info@spacebuild.com
              </a>
              , and our experts will guide you toward the next steps with clarity and care.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-6 mt-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  1. What does a Vastu Consultant in Secunderabad do?
                </h3>
                <p>
                  A Vastu consultant analyzes property layout, directions, and energy distribution to recommend corrections that improve harmony, prosperity, and wellbeing.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  2. What is MahaVastu and how is it different from traditional Vastu?
                </h3>
                <p>
                  MahaVastu uses structured energy mapping and logical correction techniques rather than generalized rules, making it more practical for modern buildings.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  3. Do I need to demolish walls for Vastu corrections?
                </h3>
                <p>
                  No. Most corrections suggested by Vasterior involve placement changes, energy balancing techniques, and interior adjustments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  4. Can Vastu help businesses grow?
                </h3>
                <p>
                  Yes. Proper alignment can improve decision-making clarity, team productivity, and financial flow within commercial environments.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  5. Is Vastu applicable for apartments in Hyderabad?
                </h3>
                <p>
                  Absolutely. Even fixed-layout apartments can be optimized through directional corrections and interior alignment strategies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  6. When should I consult a Vastu expert, before or after buying property?
                </h3>
                <p>
                  Ideally before purchase, but corrections can also be applied successfully after moving in.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  7. How long does a Vastu consultation take?
                </h3>
                <p>
                  The process typically includes analysis, reporting, and guidance phases depending on property size and requirements.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  8. Does Vasterior provide interior design along with Vastu?
                </h3>
                <p>
                  Yes. Vasterior specializes in combining interior aesthetics with MahaVastu alignment for holistic results.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  9. Are remedies religious in nature?
                </h3>
                <p>
                  No. Recommendations focus on spatial balance and energy optimization rather than rituals.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  10. How do I book a consultation with Vasterior?
                </h3>
                <p>
                  You can initiate the process through a consultation call or email discussion, after which the team guides you through the next steps based on your property needs.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="vastu-consultant-in-secunderabad-hyderabad" />
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
