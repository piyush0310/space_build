// components/CafeContent.js
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
            Café Interior Designer in Chandausi
          </h2>
          <p className="text-lg font-semibold text-gray-800 mb-6">
            -Where Design Meets Energy, and Cafés Become Experiences
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes a café is never just about tables, lighting, and wall art. It's about how people feel the moment they walk in, and why they stay longer, order more, and come back again. As a leading café interior designer in Chandausi, Vasterior creates thoughtfully designed café spaces that blend modern aesthetics with powerful MahaVastu principles, aligning beauty with business success.
            </p>
            <p>
              Whether you're launching a brand-new café or upgrading an existing one, we design spaces that don't just look good on Instagram, but actually work for your business.
            </p>

            {/* Why Café Design Matters */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Designing Cafés That Attract, Engage, and Perform
            </h2>
            <p className="mb-4">
              In today's café culture, design isn't optional, it's strategy. Customers choose cafés based on vibe before they even glance at the menu. A well-designed café influences:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>How long customers stay</li>
              <li>How comfortable they feel</li>
              <li>How often they return</li>
              <li>How memorable your brand becomes</li>
            </ul>
            <p>
              At Vasterior, café interior design in Chandausi goes beyond surface-level styling. We study your space, your audience, your brand personality, and your business goals, then translate all of that into a cohesive interior experience that feels intentional, balanced, and inviting.
            </p>

            {/* MahaVastu Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu Café Interiors: A Smart Business Advantage
            </h2>
            <p className="mb-4">
              What sets Vasterior apart from typical interior designers is our deep integration of MahaVastu into café design.
            </p>
            <p>MahaVastu is not superstition, it's a scientific, directional system that aligns space with natural energies. When applied correctly in café interiors, it can positively influence:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Customer footfall and retention</li>
              <li>Cash flow and sales consistency</li>
              <li>Staff productivity and harmony</li>
              <li>Overall business stability</li>
            </ul>
            <p>From seating layouts and kitchen placement to billing counters and entrances, every design decision is subtly aligned to support growth, without compromising on style or modern aesthetics.</p>
            <p>Your café should feel right. MahaVastu ensures it does.</p>

            {/* Why Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Is a Trusted Café Interior Designer in Chandausi
            </h2>
            <p className="mb-4">
              Chandausi's café scene is evolving, and generic designs don't cut it anymore. Vasterior brings a rare mix of design intelligence, local insight, and Vastu expertise, all under one roof.
            </p>
            <p>What you get with Vasterior:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Custom café interior concepts (boho, minimal, earthy, luxe, budget-friendly)</li>
              <li>End-to-end design + execution</li>
              <li>MahaVastu-aligned layouts tailored for cafés</li>
              <li>Practical, revenue-conscious design decisions</li>
              <li>Clear timelines and professional coordination</li>
            </ul>
            <p>We don't believe in copy-paste interiors. Every café we design is unique, just like the brand behind it.</p>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Café Interior Design Process
            </h2>
            <p className="mb-4">We keep things structured, transparent, and stress-free.</p>
            <ol className="list-decimal list-inside space-y-4 ml-4">
              <li><strong>Discovery & Brand Understanding</strong><br/>We understand your café concept, target audience, budget, and vision.</li>
              <li><strong>Space Planning & MahaVastu Alignment</strong><br/>Layouts are optimized for movement, comfort, and energy balance.</li>
              <li><strong>Design Development</strong><br/>Mood boards, material palettes, lighting plans, and 3D visuals bring the concept to life.</li>
              <li><strong>Execution & Supervision</strong><br/>From civil work to final styling, we ensure design intent is executed precisely.</li>
              <li><strong>Final Handover</strong><br/>A café space that's ready to welcome customers, and built to perform long-term.</li>
            </ol>

            {/* Longevity */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Cafés Designed for Today, and Tomorrow
            </h2>
            <p className="mb-4">
              Trends change. Solid design doesn't.
            </p>
            <p>
              As a forward-thinking café interior designer in Chandausi, Vasterior focuses on creating spaces that age well, designs that remain relevant, flexible, and functional as your café grows.
            </p>
            <p>
              Whether you're aiming for cozy community vibes or a bold, standout destination café, we design with longevity in mind.
            </p>

            {/* Call to Action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Design a Café That Works for You
            </h2>
            <p className="mb-4">
              If you're serious about building a café that looks exceptional and supports business growth, it starts with the right conversation. A quick call with the Vasterior team can help you understand how design and MahaVastu can work together for your space.
            </p>
            <p>
              You can reach us directly at <strong>+917906086899</strong>, or if you prefer writing things down first, drop us a note at{" "}
              <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                info@spacebuild.com
              </a>, we'll take it from there.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  1. What makes Vasterior different from other café interior designers in Chandausi?
                </h3>
                <p>Vasterior combines modern café design with MahaVastu principles. This means your café isn't just visually appealing, it's strategically aligned to support customer flow, sales, and long-term business stability.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  2. Do you only design luxury cafés?
                </h3>
                <p>Not at all. We design cafés across budgets, small cafés, takeaway-focused outlets, premium lounges, and everything in between. The goal is smart design, not unnecessary expense.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  3. Will MahaVastu affect the look of my café?
                </h3>
                <p>No. MahaVastu works with design, not against it. The alignment is subtle and invisible to customers, while the aesthetics remain modern, stylish, and on-brand.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  4. Can you redesign an existing café space?
                </h3>
                <p>Yes. We frequently work on café renovations and layout corrections, improving flow, energy balance, and visual appeal without needing a complete rebuild.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  5. How long does a café interior project usually take?
                </h3>
                <p>Timelines depend on size and scope, but most café interior projects take between 4-8 weeks from final design approval to completion.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  6. How do I get started with Vasterior?
                </h3>
                <p>
                  Start with a simple conversation. Call us at <strong>+917906086899</strong> or email{" "}
                  <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                    info@spacebuild.com
                  </a>, and we'll guide you through the next steps based on your space and goals.
                </p>
              </div>
            </div>
          </div>
          <PostNavigation slug="cafe-interior-designer-chandausi" />
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
