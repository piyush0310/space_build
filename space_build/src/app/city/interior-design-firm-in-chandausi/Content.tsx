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
            Interior Design Firm in Chandausi
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
            Vasterior isn't just an interior design firm in Chandausi, it's where thoughtful design meets intentional living.
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
            We create spaces that don't just look beautiful but feel right.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Every home, office, or commercial space we design is carefully crafted to balance aesthetics, functionality, and energy alignment using the proven principles of MahaVastu.
            </p>
            <p>
              Because great design isn't only about what you see. It's about how your space supports your life.
            </p>

            {/* Designing Spaces */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Designing Spaces That Work With You, Not Against You
            </h2>
            <p className="mb-4">
              Most interiors fail for one simple reason: they focus only on visuals.
            </p>
            <p className="mb-6">
              At Vasterior, we take a more intelligent approach. We believe a well-designed space should elevate your daily experience, help you feel calmer at home, sharper at work, and more grounded in your surroundings.
            </p>
            <p>
              That's why our interior design process blends modern design sensibilities with MahaVastu-based spatial alignment, ensuring your space flows effortlessly in both form and energy. Whether you're building from scratch or transforming an existing space, our role is to make sure every corner serves a purpose, practically, visually, and energetically.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Interior Design Services in Chandausi
            </h2>
            <p className="mb-6">
              As a full-service interior design firm in Chandausi, Vasterior offers end-to-end solutions tailored to your lifestyle, business goals, and spatial needs.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Residential Interior Design</h3>
            <p className="mb-6">
              From apartments and independent homes to villas, we design living spaces that feel personal, intuitive, and timeless. Layout planning, furniture design, material selection, lighting, and color palettes are all aligned to enhance comfort and positivity, without drastic structural changes.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Commercial & Office Interiors</h3>
            <p className="mb-6">
              Your workspace should encourage focus, growth, and clarity. We design offices, studios, clinics, and retail spaces that support productivity while subtly aligning with MahaVastu principles to promote stability and momentum in business.
            </p>

            {/* MahaVastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vastu Alignment with MahaVastu Principles
            </h2>
            <p className="mb-4">
              Unlike traditional Vastu that often demands demolition or fear-based changes, MahaVastu works with what already exists.
            </p>
            <p className="mb-6">
              Our approach focuses on directional corrections, energy balancing, and layout optimization, making it practical, modern, and non-intrusive.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Why MahaVastu Makes a Real Difference</h3>
            <p className="mb-4">
              MahaVastu isn't superstition, it's spatial science refined for modern living.
            </p>
            <p className="mb-6">
              When applied correctly, it helps:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Improve clarity and mental peace at home</li>
              <li>Create better flow and decision-making in workspaces</li>
              <li>Reduce friction caused by poorly planned layouts</li>
              <li>Support overall harmony without extreme changes</li>
            </ul>
            <p>
              At Vasterior, MahaVastu is not treated as a separate add-on. It's integrated seamlessly into the design process, so your space feels natural, not forced or overcorrected.
            </p>

            {/* Why Choose */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Is a Trusted Interior Design Firm in Chandausi
            </h2>
            <p className="mb-4">
              Chandausi deserves more than cookie-cutter interiors, and that's exactly why clients choose us.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Designs tailored to you, not copied from Pinterest boards</li>
              <li>Balanced approach—aesthetics + energy + usability</li>
              <li>Transparent process with clarity at every stage</li>
              <li>Modern, livable interiors that age gracefully</li>
              <li>Subtle MahaVastu integration, not fear-driven Vastu rules</li>
            </ul>
            <p>
              We don't believe in intimidating clients with jargon or rigid beliefs. We believe in educating, collaborating, and designing spaces that genuinely improve quality of life.
            </p>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process: Clear, Calm, and Collaborative
            </h2>
            <p className="mb-6">
              We start by understanding you, your needs, challenges, preferences, and goals. From there, we analyze the space, plan layouts, apply MahaVastu-based alignment where required, and design interiors that feel cohesive and intentional.
            </p>
            <p>No rushed decisions. No unnecessary changes. Just smart design that works.</p>

            {/* Call to Action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Design a Space That Supports You
            </h2>
            <p className="mb-4">
              If you've been feeling like your space looks fine but doesn't feel right, that's usually a sign something deeper needs alignment. A simple conversation can bring surprising clarity.
            </p>
            <p className="mb-8">
              Many of our clients begin by speaking directly with our team to understand what's possible for their home or workspace. A quick call on <strong>+917906086899</strong> is often all it takes to get things moving. And if you prefer writing things out, reaching us at{" "}
              <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                info@spacebuild.com
              </a>{" "}
              is an easy way to start the discussion.
            </p>
            <p>No pressure. No hard sell. Just honest guidance from people who care about doing it right.</p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  1. What makes Vasterior different from other interior design firms in Chandausi?
                </h3>
                <p>
                  Vasterior combines modern interior design with MahaVastu principles in a practical, non-intrusive way. We don't just decorate spaces, we design environments that support daily living, mental clarity, and long-term comfort.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  2. Do you require structural changes for MahaVastu corrections?
                </h3>
                <p>
                  No. MahaVastu focuses on subtle corrections and spatial balance rather than demolition or major reconstruction. Most alignments are achieved through layout planning, placement, and design adjustments.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  3. Can I opt for interior design without MahaVastu?
                </h3>
                <p>
                  Absolutely. MahaVastu is an option, not a compulsion. However, many clients choose to include it once they understand how seamlessly it can be integrated into the design.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  4. Do you handle both residential and commercial projects?
                </h3>
                <p>
                  Yes. We design homes, apartments, offices, retail spaces, clinics, and other commercial interiors across Chandausi and nearby areas.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  5. How do I get started with Vasterior?
                </h3>
                <p>
                  The easiest way is to connect with us directly. A brief call or email helps us understand your space and guide you on the next steps, whether it's a full interior project or a focused consultation.
                </p>
              </div>
            </div>
          </div>
          <PostNavigation slug="interior-design-firm-in-chandausi" />
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
