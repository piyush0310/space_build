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
            Contemporary Interior Designer in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior is where contemporary interior design meets conscious spatial alignment. 
              We design homes and workspaces in Chandausi that look exceptional and feel right, 
              guided by modern design thinking and MahaVastu principles.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Philosophy: Contemporary. Conscious. Considered.
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Clean, contemporary interiors</li>
              <li>Intelligent space planning</li>
              <li>MahaVastu-aligned layouts</li>
              <li>Functionality that lasts beyond trends</li>
            </ul>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design Services We Offer in Chandausi
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Residential Interior Design</strong> - Homes that reflect personality</li>
              <li><strong>Commercial & Office Interiors</strong> - Workspaces for productivity</li>
              <li><strong>MahaVastu-Based Space Alignment</strong> - Energy corrections</li>
              <li><strong>Layout Planning</strong> - Optimized circulation and flow</li>
              <li><strong>Material Selection</strong> - Comfort, longevity, harmony</li>
            </ul>

            {/* MahaVastu */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why MahaVastu Is a Game-Changer
            </h3>
            <p>
              MahaVastu focuses on practical corrections that improve mental peace, health, 
              productivity, and flow without superstition.
            </p>

            {/* Why Choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD in Chandausi
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Modern design + MahaVastu expertise</li>
              <li>Premium yet livable designs</li>
              <li>Local architecture understanding</li>
              <li>Thoughtful execution with long-term value</li>
            </ul>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process: Simple, Transparent, Intentional
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Discovery & Consultation</li>
              <li>Design Concept & Planning</li>
              <li>Material & Detail Finalization</li>
              <li>Execution & Coordination</li>
              <li>Final Styling & Handover</li>
            </ol>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Design a Space That Feels Right
            </h3>
            <p>
              Call <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} to discuss your ideas, or email{" "}
              <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">
                spacebuild.india@gmail.com
              </a>{" "}
              to schedule a consultation.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What makes Vasterior different?
                </h4>
                <p>
                  Contemporary design + MahaVastu principles for visually refined, energetically 
                  balanced spaces.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do you follow traditional Vastu or MahaVastu?
                </h4>
                <p>MahaVastu - more practical and adaptable to modern needs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Can MahaVastu be applied without major changes?
                </h4>
                <p>
                  Yes. Through layout adjustments, placements, colors, and design elements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Do you handle turnkey projects?
                </h4>
                <p>Yes. Design, planning, and execution for consistency and quality.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. Is MahaVastu suitable for commercial spaces?
                </h4>
                <p>
                  Absolutely. Enhances productivity and business flow significantly.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How do I get started?
                </h4>
                <p>
                  Call <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or email{" "}
                  <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">
                    spacebuild.india@gmail.com
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="contemporary-interior-designer-chandausi" />
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
