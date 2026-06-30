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
            Modern Interior Designer in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior is where modern interior design meets intentional living. Vasterior designs 
              interiors that look refined, function effortlessly, and align energetically using 
              MahaVastu principles for homes and commercial spaces across Chandausi.
            </p>

            {/* Redefining Modern */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Redefining Modern Interior Design in Chandausi
            </h3>
            <p>
              Today's homeowners want spaces that reflect aspirations, support lifestyle, and feel 
              right. Vasterior adapts modern design intelligently to climate, culture, purpose, 
              and energy flow.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Vasterior Design Philosophy
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Clean, modern layouts</li>
              <li>Intelligent space planning</li>
              <li>Thoughtful material and lighting choices</li>
              <li>MahaVastu-aligned spatial corrections</li>
            </ul>

            {/* MahaVastu */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Modern Aesthetics, Aligned With MahaVastu
            </h3>
            <p>
              MahaVastu integrates seamlessly to improve flow, enhance peace, support prosperity, 
              and create harmony without compromising modern design sensibilities.
            </p>

            {/* Residential */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Residential Interior Design Services
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Living room and bedroom interiors</li>
              <li>Modular kitchens and wardrobes</li>
              <li>Lighting design and material selection</li>
              <li>Full-home interior planning</li>
              <li>MahaVastu-based spatial alignment</li>
            </ul>

            {/* Commercial */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Commercial Interior Design Expertise
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Office and workspace interiors</li>
              <li>Retail and showroom layouts</li>
              <li>Clinics, studios, and consultation spaces</li>
              <li>Vastu-aligned layouts for business growth</li>
            </ul>

            {/* Why Choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Is a Trusted Interior Designer
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Modern design expertise + MahaVastu knowledge</li>
              <li>Highly customized, non-template designs</li>
              <li>Attention to detail at every stage</li>
              <li>Clear communication and transparent processes</li>
            </ul>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              A Thoughtful Conversation Is Where It Begins
            </h3>
            <p>
              Call <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} to explore possibilities for your space, or email{" "}
              <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                spacebuild.india@gamil.com
              </a>{" "}
              for a detailed discussion.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What makes Vasterior different from other designers?
                </h4>
                <p>
                  Vasterior combines modern design with MahaVastu principles for visually elegant 
                  and energetically balanced spaces.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Does MahaVastu affect modern interiors?
                </h4>
                <p>
                  No. MahaVastu integrates subtly within clean, contemporary designs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Does Vasterior handle both design and execution?
                </h4>
                <p>
                  Yes. End-to-end solutions from concept to finishing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Can MahaVastu be applied to existing spaces?
                </h4>
                <p>
                  Yes. Without major structural changes, suitable for new and old properties.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. Does Vasterior design commercial spaces?
                </h4>
                <p>
                  Yes. Offices, retail, studios, and work environments aligned for performance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How can I get started with Vasterior?
                </h4>
                <p>
                  Call <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or email{" "}
                  <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                    spacebuild.india@gamil.com
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="modern-interior-designer-chandausi" />
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
