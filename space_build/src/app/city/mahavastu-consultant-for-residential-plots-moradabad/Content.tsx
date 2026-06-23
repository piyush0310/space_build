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
          
          <p className="text-gray-900 font-semibold mb-6 text-xl">
            Build Your Dream Home on Energy-Aligned Land
          </p>
          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <p>
              Every great home begins with the right plot of land. But even before construction starts, the land itself carries vibrations that can shape your family’s health, wealth, and happiness. At Vasterior &ndash; Mahavastu Consultant for Residential Plots in Moradabad, UP, we help families choose and design their plots using advanced Mahavastu principles, ensuring long-term prosperity, harmony, and growth.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Mahavastu for Residential Plots?
            </h2>
            <p>
              While traditional Vastu focuses mainly on directions, Mahavastu takes a deeper approach by analyzing:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>16 Energy Directions &ndash; Wealth, health, relationships, education, and career zones.</li>
              <li>Five Elements Balance &ndash; Earth, water, fire, air, and space distributed harmoniously.</li>
              <li>Plot Shape &amp; Orientation &ndash; Rectangular and square plots preferred, irregular ones corrected.</li>
              <li>Surrounding Influences &ndash; Roads, water bodies, factories, or tall structures nearby.</li>
              <li>Non-Demolition Remedies &ndash; Solutions through placements, colors, and symbols.</li>
            </ul>
            <p>
              By applying Mahavastu before construction, you avoid future imbalances and build on a foundation of positive energy.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Mahavastu Services for Residential Plots
            </h2>
            <p>We provide guidance from pre-purchase to construction planning.</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Pre-Purchase Mahavastu Guidance</strong><br />
                Assistance in selecting the most auspicious plot.<br />
                Evaluation of orientation, slope, and surroundings.
              </li>
              <li>
                <strong>Plot Energy Mapping</strong><br />
                Identifying wealth, health, and relationship directions.<br />
                Checking imbalances in energy flow.
              </li>
              <li>
                <strong>Remedies for Existing Plots</strong><br />
                Correcting irregular shapes or challenging directions.<br />
                Non-demolition solutions using boundaries, plants, or design corrections.
              </li>
              <li>
                <strong>Construction Integration</strong><br />
                Advising on where to place entrances, pooja rooms, kitchens, and living areas.<br />
                Aligning future villa or home blueprint with Mahavastu principles.
              </li>
            </ol>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Step-by-Step Mahavastu Process for Plots
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Consultation &amp; Goal Setting &ndash; Understanding family aspirations.</li>
              <li>On-Site or Map Analysis &ndash; Measuring plot shape, slope, and orientation.</li>
              <li>Energy Mapping &ndash; Analyzing 16 directions for prosperity, wellness, and harmony.</li>
              <li>Customized Remedies &ndash; Non-demolition corrections for balance.</li>
              <li>Integration with Home Design &ndash; Aligning future construction with Mahavastu.</li>
            </ol>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior as Mahavastu Consultant for Residential Plots in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Certified Mahavastu Expertise &ndash; Skilled in advanced 16-direction mapping.</li>
              <li>Dual Advantage &ndash; Plot Vastu + interior design integration.</li>
              <li>Customized Solutions &ndash; Remedies tailored for each plot.</li>
              <li>Practical Approach &ndash; Non-demolition, cost-effective corrections.</li>
              <li>Local Expertise &ndash; Understanding of Moradabad&rsquo;s geography and land types.</li>
              <li>Trusted Brand &ndash; Villas, kothis, and farmhouses across UP guided with Mahavastu.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Mahavastu-Aligned Residential Plots
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Smooth Construction &ndash; Energy-aligned plots reduce building challenges.</li>
              <li>Family Prosperity &ndash; Homes built on corrected land attract abundance.</li>
              <li>Better Health &amp; Relationships &ndash; Energy balance supports harmony.</li>
              <li>Financial Stability &ndash; Wealth zones activated from the foundation stage.</li>
              <li>Legacy Value &ndash; Generations benefit from balanced living.</li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &ldquo;Before buying our residential plot in Moradabad, we consulted Vasterior. Their Mahavastu guidance saved us from making the wrong investment.&rdquo; – Pankaj &amp; Meera Sharma
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &ldquo;Our plot had irregular shape and slope. Vasterior gave us simple remedies, and we are now building our dream home with confidence.&rdquo; – Ravi &amp; Anjali Verma
              </blockquote>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Mahavastu Consultant for Residential Plots Moradabad
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q1: Can Mahavastu help before purchasing a plot?
                </h3>
                <p>A: Yes, we analyze and recommend the best plots based on energy and direction.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q2: Do remedies involve changing the plot’s structure?
                </h3>
                <p>A: No. Most solutions are non-demolition, using boundaries, trees, or symbols.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q3: What if my plot is irregular in shape?
                </h3>
                <p>A: Mahavastu offers remedies to neutralize imbalances in shape and size.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q4: Do you provide integration with architects?
                </h3>
                <p>A: Yes, we collaborate with architects to align construction with Mahavastu.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q5: How long does a plot consultation take?
                </h3>
                <p>A: Usually 1&ndash;2 days, depending on plot size and complexity.</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Contact Vasterior – Mahavastu Consultant for Residential Plots in Moradabad
            </h2>
            <div className="space-y-2 text-gray-900">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p>
                <strong>📧 Email:</strong>{" "}
                <a href="mailto:info@spacebuild.com" className="text-blue-600 underline">
                  info@spacebuild.com
                </a>
              </p>
              <p>
                <strong>🌐 Website:</strong>{" "}
                <a href="http://www.vasterior.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  www.vasterior.com
                </a>
              </p>
            </div>

            <p className="mt-6 text-gray-700">
              Vasterior &ndash; Guiding Moradabad Families to Build Homes on Plots Aligned with Mahavastu Balance &amp; Prosperity.
            </p>
          </div>
          <PostNavigation slug="mahavastu-consultant-for-residential-plots-moradabad" />
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
