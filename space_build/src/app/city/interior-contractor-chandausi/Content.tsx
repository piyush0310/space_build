// components/LivingRoomContent.js
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
            Interior Contractor in Chandausi
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
            Vasterior, Designing Spaces That Look Right and Feel Right
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior is redefining what it means to be an interior contractor in Chandausi by blending thoughtful interior design with the powerful principles of MahaVastu. We don't just design homes and commercial spaces to impress visually, we design them to support harmony, prosperity, clarity, and long-term well-being.
            </p>
            <p>
              If you're looking for interiors that go beyond surface-level beauty and actually work for you, you're in the right place.
            </p>

            {/* More Than Contractor */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              More Than an Interior Contractor - A Space Alignment Partner
            </h2>
            <p className="mb-4">
              Most interior contractors focus on layouts, finishes, and furniture. At Vasterior, we take it several steps further.
            </p>
            <p className="mb-6">
              Every space we design is approached with three non-negotiables:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Aesthetics that reflect your lifestyle</li>
              <li>Functionality that simplifies everyday living</li>
              <li>MahaVastu alignment that enhances energy flow</li>
            </ul>
            <p>The result? Spaces that feel calm, balanced, productive, and intentional whether it's your home, office, or commercial property in Chandausi.</p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design Services in Chandausi
            </h2>
            <p className="mb-6">
              As a full-service interior contractor in Chandausi, Vasterior handles everything from concept to completion.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Residential Interior Design</h3>
            <p className="mb-4">We design homes that feel personal, peaceful, and powerful.</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Complete home interiors</li>
              <li>Modular kitchens</li>
              <li>Bedrooms, living rooms & pooja spaces</li>
              <li>Vastu-aligned layouts without structural chaos</li>
              <li>Renovation & redesign projects</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Commercial Interior Design</h3>
            <p className="mb-4">For businesses, energy matters as much as aesthetics.</p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Offices & workspaces</li>
              <li>Retail stores & showrooms</li>
              <li>Clinics, studios & hospitality spaces</li>
              <li>Layout planning for productivity and customer flow</li>
              <li>Brand-aligned interiors with MahaVastu support</li>
            </ul>

            {/* MahaVastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Power of MahaVastu in Interior Design
            </h2>
            <p className="mb-4">
              MahaVastu is not superstition, it's a structured, logical system that works with the five elements and directional energies of a space. When integrated correctly, it can significantly impact how a space performs.
            </p>
            <p className="mb-6">
              At Vasterior, MahaVastu principles are subtly woven into:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Furniture placement</li>
              <li>Color selection</li>
              <li>Spatial zoning</li>
              <li>Entry and movement flow</li>
            </ul>
            <p>All without breaking walls or disrupting design aesthetics.</p>

            <p className="mb-6">Our clients often report:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improved peace of mind at home</li>
              <li>Better focus and productivity at work</li>
              <li>Smoother finances and decision-making</li>
              <li>A general sense that the space just "feels right"</li>
            </ul>
            <p>That's the difference alignment makes.</p>

            {/* Why Choose */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Interior Contractor in Chandausi?
            </h2>
            <p className="mb-4">
              Because you don't want a cookie-cutter interior. You want a space that understands you.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Local expertise in Chandausi with a premium design approach</li>
              <li>MahaVastu-integrated interiors, not afterthought consultations</li>
              <li>End-to-end execution, so you're not juggling vendors</li>
              <li>Designs that age well, not trend-chasing visuals</li>
              <li>Clear communication and transparent process</li>
              <li>We don't rush projects. We get them right.</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design & Execution Process
            </h2>
            <p className="mb-6">A structured approach for flawless results:</p>
            <ol className="list-decimal list-inside space-y-4 ml-4">
              <li>Discovery & Consultation - We understand your space, lifestyle, goals, and challenges.</li>
              <li>Design + MahaVastu Planning - Layouts, concepts, and alignments are created together, not separately.</li>
              <li>Material & Finish Selection - Premium, practical, and aligned with the energy of the space.</li>
              <li>Execution & Supervision - Our team ensures design intent is executed precisely on-site.</li>
              <li>Final Alignment & Handover - A space that looks refined, functions seamlessly, and feels balanced.</li>
            </ol>

            {/* Local Context */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design Rooted in Chandausi, Built for Modern Living
            </h2>
            <p className="mb-6">
              Chandausi homes and commercial spaces have their own character, constraints, and cultural rhythm. Vasterior designs with this local context in mind while delivering a modern, elevated finish.
            </p>
            <p>
              Whether you're building new, renovating, or simply correcting what doesn't feel right in your space, we bring clarity and structure to the process.
            </p>

            {/* Call to Action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Design a Space That Supports You
            </h2>
            <p className="mb-4">
              If you're considering interior design or Vastu-aligned planning in Chandausi, a simple conversation can bring surprising clarity. Many of our projects begin with a quick call where we understand your needs and suggest the right direction, no pressure, no jargon.
            </p>
            <p className="mb-8">
              You can reach out to the Vasterior team directly by calling <strong>+917906086899</strong>, or if you prefer writing things through, an email to{" "}
              <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                info@spacebuild.com
              </a>
              , is always welcome. Either way, it starts with a conversation, and ends with a space that truly works for you.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  1. Is Vasterior only an interior designer or also an interior contractor in Chandausi?
                </h3>
                <p>Vasterior is a complete interior contractor in Chandausi, handling both design and execution. You don't need to coordinate with multiple vendors, we manage the entire process.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  2. Do you follow Vastu strictly, even if it affects the design?
                </h3>
                <p>No. We follow MahaVastu principles in a practical, non-invasive way. Design aesthetics are never compromised. Alignment is achieved intelligently, not forcefully.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. Can MahaVastu be applied to existing homes or offices?</h3>
                <p>Yes. MahaVastu works exceptionally well for existing spaces without requiring demolition or major structural changes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. What types of projects does Vasterior handle?</h3>
                <p>We handle residential interiors, commercial interiors, renovations, and layout corrections for homes, offices, shops, and workspaces in and around Chandausi.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. How early should I involve Vasterior in my project?</h3>
                <p>The earlier, the better. Involving us at the planning stage allows for stronger layouts, better energy alignment, and cost efficiency, but we also work seamlessly with ongoing or completed structures.</p>
              </div>
            </div>
          </div>
          <PostNavigation slug="interior-contractor-in-chandausi" />
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
