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
            {/* Subtitle */}
            <p className="text-lg font-semibold text-gray-800">
              Harmonizing Farmhouse Living with Energy, Balance & Luxury
            </p>

            {/* Intro */}
            <p>
              A farmhouse is more than a countryside property — it&apos;s a place of healing, celebration, and connection with nature. While premium interiors add beauty, Vastu Shastra ensures harmony, positivity, and well-being in these spaces. At Vasterior – Vastu Expert for Farmhouses in Moradabad, UP, we combine authentic Vastu guidance with bespoke farmhouse interiors, helping families enjoy not just luxury, but also a balanced and prosperous lifestyle.
            </p>

            {/* Why Vastu is Essential for Farmhouses */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu is Essential for Farmhouses
            </h2>
            <p>
              Farmhouses differ from city apartments and villas because of their scale, open land, and countryside orientation. Without Vastu alignment, even luxurious spaces may feel incomplete.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Energy Flow</strong> – Farmhouses are surrounded by open land; placement of entrances, windows, and courtyards affects energy.</li>
              <li><strong>Balance of Elements</strong> – Fire (kitchen), water (pools), earth (gardens), air (ventilation), and space must be harmonized.</li>
              <li><strong>Peace & Prosperity</strong> – Proper Vastu ensures positive vibrations for family gatherings and retreats.</li>
              <li><strong>Health & Well-being</strong> – Bedrooms, kitchens, and relaxation zones aligned with energy directions support wellness.</li>
              <li><strong>Investment Value</strong> – Farmhouses designed with Vastu principles have higher cultural and lifestyle appeal.</li>
            </ul>

            {/* Vasterior's Role */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Role as Vastu Expert + Interior Designer
            </h2>
            <p>
              Unlike standalone consultants, we offer design + Vastu integration. This means every choice — from room placement to lighting and materials — is aligned with Vastu principles and modern luxury.
            </p>

            {/* Key Vastu-Focused Areas */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Key Vastu-Focused Farmhouse Design Areas
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Entrances & Main Doors</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Correct directional placement for energy entry.</li>
                  <li>Balanced thresholds, proportions, and finishes.</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Living & Lounge Spaces</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Alignment with north-east or north for family harmony.</li>
                  <li>Placement of seating, artwork, and lighting as per Vastu flow.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Kitchens & Dining</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>South-east positioning for fire element balance.</li>
                  <li>Layout designed for convenience and prosperity.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Bedrooms & Guest Suites</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Master bedroom aligned to south-west for stability.</li>
                  <li>Children&apos;s rooms and guest suites positioned for growth and comfort.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Bathrooms & Water Features</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Placement in east or north for correct flow of water energy.</li>
                  <li>Pools, fountains, and spa zones designed with balance.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Outdoor & Courtyards</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Verandas, decks, and gardens integrated with Vastu zones.</li>
                  <li>Trees, plants, and pathways aligned with positive energy directions.</li>
                </ul>
              </div>
            </div>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Farmhouse Vastu + Design Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation & Site Visit</strong> – Assessing farmhouse layout, land orientation, and family needs.</li>
              <li><strong>Vastu Mapping</strong> – Identifying directional strengths and energy imbalances.</li>
              <li><strong>Conceptual Planning</strong> – Combining Vastu guidelines with design themes.</li>
              <li><strong>Visualization</strong> – 3D renders showing interiors styled with Vastu alignment.</li>
              <li><strong>Execution</strong> – Implementing Vastu-based positioning for rooms, doors, furniture, and décor.</li>
              <li><strong>Final Styling & Remedies</strong> – Using mirrors, plants, lights, or structural adjustments for complete harmony.</li>
            </ul>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Vastu Expert for Farmhouses in Moradabad
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Dual Expertise</strong> – Certified Vastu consultants + interior design specialists.</li>
              <li><strong>Farmhouse-Specific Knowledge</strong> – Expertise in large countryside layouts near Moradabad.</li>
              <li><strong>Luxury + Balance</strong> – Bespoke interiors designed with Vastu alignment.</li>
              <li><strong>Holistic Approach</strong> – Focus on energy, health, prosperity, and aesthetics.</li>
              <li><strong>Trusted Across UP</strong> – Recognized for villas, kothis, and farmhouse projects.</li>
            </ul>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Vastu-Aligned Farmhouse Interiors
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Positive Energy Flow</strong> – Spaces that feel balanced and welcoming.</li>
              <li><strong>Better Relationships</strong> – Layouts designed for family harmony.</li>
              <li><strong>Health & Wellness</strong> – Proper placement of bedrooms, kitchens, and water bodies.</li>
              <li><strong>Financial Growth</strong> – Farmhouses aligned with prosperity zones.</li>
              <li><strong>Peace of Mind</strong> – A retreat that feels naturally serene.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted our farmhouse near Moradabad to follow Vastu while still feeling modern. Vasterior delivered both — luxury and harmony.&quot; – Anil & Kavita Jain
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Every corner of our farmhouse now feels peaceful and balanced. The blend of design and Vastu has made a big difference.&quot; – Rohit & Neha Bansal
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Expert for Farmhouses Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Do you only give Vastu advice or handle interiors too?</h3>
                <p>A: We provide complete turnkey services — Vastu consultation integrated into interior design.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Can you correct Vastu issues in an existing farmhouse?</h3>
                <p>A: Yes, through layout changes, furniture repositioning, and subtle remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Do you provide Vastu-compliant kitchen and bedroom planning?</h3>
                <p>A: Absolutely, kitchens and bedrooms are key Vastu zones in every farmhouse project.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: How long does a farmhouse Vastu consultation take?</h3>
                <p>A: Initial mapping can be done in 1–2 days, with design integration depending on project size.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Is Vastu compatible with modern luxury interiors?</h3>
                <p>A: Yes, we balance aesthetics with Vastu principles seamlessly.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Vastu Expert for Farmhouses in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gmail.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-medium text-gray-800">
              Vasterior – Designing Farmhouse Interiors in Moradabad that Combine Vastu, Luxury & Lifestyle Harmony.
            </p>
          </div>
          <PostNavigation slug="vastu-expert-for-farmhouses-moradabad" />
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
