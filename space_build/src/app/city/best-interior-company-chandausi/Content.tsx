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
            Best Interior Company in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior, Where Design Meets Direction. Vasterior begins with a simple but powerful 
              belief: a space should not just look good, it should work for you. Recognised as the 
              Best Interior Company in Chandausi, Vasterior designs interiors that align aesthetics, 
              functionality, and energy using modern MahaVastu principles.
            </p>

            {/* Why Best */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Is the Best Interior Company in Chandausi
            </h3>
            <p>
              What sets Vasterior apart is the integration of interior design expertise with 
              MahaVastu-based spatial alignment. Every project considers layout, flow, natural 
              light, materials, proportions, and energy movement.
            </p>

            {/* Design Approach */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design That Goes Beyond Looks
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Smart space planning for comfort and efficiency</li>
              <li>Thoughtful furniture placement that enhances movement</li>
              <li>Material selection that balances durability and warmth</li>
              <li>Lighting design that supports mood and productivity</li>
            </ul>

            {/* MahaVastu */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu: The Science Behind Aligned Spaces
            </h3>
            <p>
              MahaVastu is spatial science that supports health, clarity, financial stability, 
              and emotional harmony through subtle adjustments and energy correction.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>No religious symbolism</li>
              <li>No forced layouts</li>
              <li>No compromise on aesthetics</li>
            </ul>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Solutions for Every Kind of Space
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Residential Interiors</strong> - Homes for peace and comfort</li>
              <li><strong>Commercial & Office Spaces</strong> - Layouts for focus and growth</li>
              <li><strong>Retail & Showroom Design</strong> - Spaces that elevate brand presence</li>
              <li><strong>Vastu Corrections</strong> - Optimize existing spaces without demolition</li>
            </ul>

            {/* Local Understanding */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Deep Local Understanding, Global Design Thinking
            </h3>
            <p>
              Vasterior blends Chandausi lifestyle insights with modern design sensibilities 
              and globally relevant execution standards.
            </p>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              A Calm, Confident Way to Begin
            </h3>
            <p>
              Transforming a space starts with conversation. Many clients begin by calling{" "}
              <strong>+917906086899</strong> or emailing{" "}
              <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                info@spacebuild.com
              </a>.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. Why is Vasterior the best interior company in Chandausi?
                </h4>
                <p>
                  Vasterior combines premium design with MahaVastu alignment, ensuring spaces 
                  are visually refined and energetically supportive.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Does MahaVastu affect design aesthetics?
                </h4>
                <p>
                  No. MahaVastu corrections integrate subtly within modern, elegant designs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Can Vasterior work on existing homes or offices?
                </h4>
                <p>
                  Yes. Vasterior specializes in optimizing existing spaces without demolition.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. What types of projects does Vasterior handle?
                </h4>
                <p>
                  Residential homes, apartments, offices, retail stores, and renovations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. Is MahaVastu religious in nature?
                </h4>
                <p>
                  No. MahaVastu is a scientific, directional, energy-based system.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How do I start a project with Vasterior?
                </h4>
                <p>
                  Call <strong>+917906086899</strong> or email{" "}
                  <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                    info@spacebuild.com
                  </a>{" "}
                  to explore possibilities.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="best-interior-company-chandausi" />
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
