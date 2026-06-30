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
            3D Interior Designer in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior designs spaces that are visually refined, functionally intelligent, and 
              energetically aligned using MahaVastu principles. As a leading 3D Interior Designer 
              in Chandausi, we create interiors that support clarity, comfort, and growth.
            </p>

            {/* 3D Power */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Where Design Meets Precision: The Power of 3D
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Experience your space realistically before execution</li>
              <li>Understand layouts, proportions, lighting, materials</li>
              <li>Make confident decisions without costly changes</li>
              <li>Visualize how your space will actually flow</li>
            </ul>

            {/* MahaVastu */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu × Interior Design
            </h3>
            <p>
              MahaVastu focuses on directional energy balance, five-element harmony, and practical 
              corrections that align spaces with human behavior and purpose.
            </p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our 3D Interior Design Services in Chandausi
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Residential Interior Design</strong> - Calm, personal living spaces</li>
              <li><strong>Commercial Interior Design</strong> - Workspaces for efficiency</li>
              <li><strong>3D Visualisation & Walkthroughs</strong> - Experience before execution</li>
              <li><strong>Space Planning</strong> - Optimized circulation and balance</li>
            </ul>

            {/* Why Choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Design with purpose - every decision has reason</li>
              <li>MahaVastu integration without visual compromise</li>
              <li>Detail-driven approach - nothing random</li>
              <li>Client-first mindset - your lifestyle leads</li>
            </ul>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Design a Space That Works for You
            </h3>
            <p>
              Call<strong>+919927611780</strong> or{" "}
                  <strong>+918077973797</strong> or{" "} or email{" "}
              <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                spacebuild.india@gamil.com
              </a>{" "}
              to start your project - no pressure, just clarity.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What is 3D interior design?
                </h4>
                <p>
                  Realistic visual representation before execution that avoids confusion and costly changes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. How is MahaVastu different from traditional Vastu?
                </h4>
                <p>
                  More flexible, practical, design-friendly - focuses on layout and design corrections.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Can MahaVastu be applied without major changes?
                </h4>
                <p>
                  Yes. Through furniture placement, colors, zoning, and proportions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Is 3D design included before execution?
                </h4>
                <p>Absolutely. Clarity comes first - full confidence before implementation.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. How do I get started?
                </h4>
                <p>
                  Call<strong>+919927611780</strong> or{" "}
                      <strong>+918077973797</strong> or{" "} or email{" "}
                  <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                    spacebuild.india@gamil.com
                  </a>{" "}
                  for initial conversation.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="3d-interior-designer-chandausi" />
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
