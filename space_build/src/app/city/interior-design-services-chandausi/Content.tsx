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
            Interior Design Services in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior designs homes and commercial spaces that look refined, feel balanced, 
              and are aligned with MahaVastu principles. Our Interior Design Services in 
              Chandausi support your life, work, and growth every single day.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Vasterior Design Philosophy
            </h3>
            <p>
              We blend contemporary interior design with MahaVastu for smarter planning, 
              subtle corrections, and thoughtful placements that elevate how a space performs.
            </p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Interior Design Services in Chandausi
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Residential Interior Design</strong> - Homes for comfort and clarity</li>
              <li><strong>Commercial & Office Interiors</strong> - Workspaces for growth</li>
              <li><strong>MahaVastu Space Planning</strong> - Energy alignment without demolition</li>
              <li><strong>Turnkey Solutions</strong> - Complete execution</li>
              <li><strong>Renovation & Energy Correction</strong> - Transform existing spaces</li>
            </ul>

            {/* Why Different */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Is Different
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>MahaVastu-driven modern design</li>
              <li>Fully customized, no templates</li>
              <li>Aesthetics + practicality + intelligence</li>
              <li>Deep Chandausi lifestyle understanding</li>
            </ul>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process: Clear, Thoughtful, No Chaos
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Analyze space and directional strengths</li>
              <li>Develop MahaVastu-aligned concept</li>
              <li>Plan layouts, materials, finishes</li>
              <li>Execute with clarity and coordination</li>
            </ol>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready to Design a Space That Feels Right?
            </h3>
            <p>
              Call <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} to discuss your project, or email{" "}
              <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">
                spacebuild.india@gmail.com
              </a>.
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
                  Modern design + MahaVastu principles for beauty, function, and energy alignment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do I need to believe in Vastu?
                </h4>
                <p>
                  No. MahaVastu is applied practically - many appreciate how much better spaces feel.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Can MahaVastu work without breaking walls?
                </h4>
                <p>Yes. Through layout planning, furniture placement, and directional adjustments.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Do you offer turnkey solutions?
                </h4>
                <p>Yes. Complete solutions from concept to completion.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. How do I start?
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

          <PostNavigation slug="interior-design-services-chandausi" />
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
