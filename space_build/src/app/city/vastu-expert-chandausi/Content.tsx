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
            Vastu Expert in Chandausi
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            – Interior Design Aligned with MahaVastu
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior believes that a space should do more than just look beautiful, it should support your life. Based in Chandausi, Vasterior brings together expert interior design and MahaVastu principles to create homes and workspaces that feel calmer, function better, and align with growth, prosperity, and peace.
              </p>
              <p className="mt-4 font-semibold">
                This isn't surface-level Vastu advice. This is intentional design backed by energy science.
              </p>
            </div>

            {/* Alignment Benefits */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                When Your Space Is Aligned, Everything Else Follows
              </h3>
              <p className="mt-4">
                Have you ever walked into a place and instantly felt lighter? Or calmer? Or more focused? That's not accidental, that's energy alignment done right.
              </p>
              <p>
                As a trusted Vastu expert in Chandausi, Vasterior helps individuals, families, and businesses correct energetic imbalances without breaking down walls or compromising design. Using MahaVastu, we work with what already exists and elevate it, practically, aesthetically, and energetically.
              </p>
              <p>
                The result? Spaces that support:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Better financial flow</li>
                <li>Mental clarity and emotional peace</li>
                <li>Health, harmony, and stability</li>
                <li>Business growth and decision-making</li>
              </ul>
            </div>

            {/* MahaVastu Difference */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes MahaVastu Different (and Smarter)
              </h3>
              <p className="mt-4">
                MahaVastu is not about rigid rules or fear-based corrections. It's a scientific, flexible, and modern approach to Vastu that adapts to today's architecture and lifestyle.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>No demolition required</li>
                <li>Corrections can be done through layout planning, interiors, colors, placements, and subtle remedies</li>
                <li>Works seamlessly with modern homes, apartments, offices, and commercial spaces</li>
              </ul>
              <p>At Vasterior, MahaVastu is not treated as an afterthought, it's integrated from the design stage itself.</p>
            </div>

            {/* Why Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Choose Vasterior as Your Vastu Expert in Chandausi
              </h3>
              <p className="mt-4">
                Let's be honest, most Vastu consultants don't understand interiors, and most interior designers ignore energy flow. Vasterior bridges that gap.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Interior Design + Vastu under one roof</li>
                <li>MahaVastu-based corrections that are practical and design-friendly</li>
                <li>Solutions tailored specifically for homes, offices, and commercial spaces in Chandausi</li>
                <li>A calm, consultative approach, no superstition, no pressure, no jargon overload</li>
              </ul>
              <p>We don't just "suggest directions." We design spaces that work.</p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Vastu & Interior Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Residential Vastu & Interior Alignment</h4>
                  <p>For homes that feel balanced, peaceful, and supportive of family life, without compromising on aesthetics.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Commercial & Office Vastu</h4>
                  <p>Ideal for businesses, clinics, studios, and offices looking to improve stability, productivity, and growth.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">MahaVastu Space Correction</h4>
                  <p>Smart, non-invasive corrections using planning, interiors, colors, layouts, and energy tools.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interior Design with Energy Planning</h4>
                  <p>Designing spaces where beauty and energy alignment go hand in hand, from concept to execution.</p>
                </div>
              </div>
            </div>

            {/* Real Life Results */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Designed for Real Life, Not Just Diagrams
              </h3>
              <p className="mt-4">
                At Vasterior, we focus on results you can feel:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Homes that feel lighter and calmer</li>
                <li>Workspaces that feel more focused and grounded</li>
                <li>Spaces that support momentum instead of resistance</li>
              </ul>
              <p>Because when your environment is aligned, life feels less forced, and more flowing.</p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. Is MahaVastu different from traditional Vastu?
                  </h3>
                  <p>Yes. MahaVastu is more flexible, scientific, and practical. It focuses on corrections without demolition and works well with modern construction and interiors.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do I need to redesign my entire home to follow Vastu?
                  </h3>
                  <p>Not at all. Most corrections can be done through layout planning, placements, colors, and subtle changes, often without major renovation.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Can Vasterior help with both interiors and Vastu together?
                  </h3>
                  <p>Absolutely. That's our core strength. We design interiors that are aesthetically strong and energetically aligned.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Do you offer Vastu services for offices and businesses in Chandausi?
                  </h3>
                  <p>Yes. We work with homes, offices, retail spaces, clinics, and commercial properties across Chandausi and nearby areas.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. How do I get started?
                  </h3>
                  <p>Just reach out. A quick call on +917906086899 or an email to info@spacebuild.com is enough to begin the conversation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
              Let's Talk About Your Space
            </h3>
            <p className="text-center mb-6">
              If something about your home or workspace feels "off," it's usually is, and it's fixable. A simple conversation can be the first step.
            </p>
            <div className="text-center space-y-3">
              <p className="font-semibold">
                📞 Call: <a href="tel:+917906086899" className="text-blue-600 hover:underline">+917906086899</a>
              </p>
              <p className="font-semibold">
                📧 Email: <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">info@spacebuild.com</a>
              </p>
            </div>
          </div>

          <PostNavigation slug="vastu-expert-in-chandausi" />
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
