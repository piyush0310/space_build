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
            Vastu Consultant in Chandausi, Uttar Pradesh
          </h2>
          
          <p className="text-lg mb-8 text-gray-700">
            Vasterior believes that a space isn't just built with walls, it's shaped by energy, intention, and alignment. As a trusted Vastu Consultant in Chandausi, Uttar Pradesh, Vasterior helps homes and workplaces shift from feeling "almost right" to deeply balanced, prosperous, and peaceful, using time-tested MahaVastu principles blended seamlessly with modern interior design.
          </p>
          
          <p className="text-lg mb-8 text-gray-700">
            If your home looks good but doesn't feel right... there's a reason.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Why Vastu Matters */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vastu Still Matters (More Than Ever)
              </h3>
              <p className="mt-4">
                In today's fast-paced world, stress, financial blocks, disturbed sleep, and constant friction often get blamed on lifestyle. But the truth?
              </p>
              <p className="mt-4">Your space plays a massive role.</p>
              <p className="mt-4">
                Vastu isn't superstition, it's spatial psychology rooted in energy flow. When directions, elements, and layouts are misaligned, they quietly affect:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Mental clarity</li>
                <li>Relationships</li>
                <li>Health patterns</li>
                <li>Business growth</li>
                <li>Financial stability</li>
              </ul>
              <p className="mt-4 font-semibold">
                A properly aligned space supports you without effort. That's the goal.
              </p>
            </div>

            {/* Go-To Consultant */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Your Go-To Vastu Consultant in Chandausi, Uttar Pradesh
              </h3>
              <p className="mt-4">
                Vasterior isn't here to scare you with defects or force unnecessary demolition. The approach is practical, calm, and corrective, not disruptive.
              </p>
              <p className="mt-4">
                What sets Vasterior apart in Chandausi and across Uttar Pradesh:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>MahaVastu-based solutions that work with existing structures</li>
                <li>Minimal to zero demolition wherever possible</li>
                <li>Interior design that enhances Vastu instead of fighting it</li>
                <li>Clear explanations, no confusing jargon, no fear tactics</li>
              </ul>
              <p className="mt-4">
                You get solutions that respect both your space and your lifestyle.
              </p>
            </div>

            {/* MahaVastu Explained */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                MahaVastu, Explained Without the Noise
              </h3>
              <p className="mt-4">
                MahaVastu focuses on balancing the five elements and directional energies using subtle yet powerful corrections, often without breaking walls.
              </p>
              <p className="mt-4">This includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Strategic placements</li>
                <li>Colour and material alignment</li>
                <li>Elemental balancing</li>
                <li>Energy activation techniques</li>
                <li>Layout optimization</li>
              </ul>
              <p className="mt-4">
                The result? A space that supports growth, peace, and momentum, quietly, consistently.
              </p>
            </div>

            {/* Vasterior Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-6 bg-white rounded-lg shadow-md border">
                  <h4 className="font-semibold text-gray-900 mb-3">Residential Vastu Consultation</h4>
                  <p className="text-sm">For homes, apartments, villas, and plots, designed to improve harmony, health, and family well-being.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border">
                  <h4 className="font-semibold text-gray-900 mb-3">Commercial & Office Vastu</h4>
                  <p className="text-sm">For shops, offices, clinics, factories, and workspaces, focused on stability, productivity, and financial flow.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border">
                  <h4 className="font-semibold text-gray-900 mb-3">Interior Design with Vastu Integration</h4>
                  <p className="text-sm">A rare blend where aesthetics and energy work together. No compromises. No clashes.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md border">
                  <h4 className="font-semibold text-gray-900 mb-3">Site Evaluation & Space Correction</h4>
                  <p className="text-sm">For new constructions or existing properties, before small issues become lifelong blocks.</p>
                </div>
              </div>
            </div>

            {/* Why Chandausi Clients Trust */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Chandausi Clients Trust Vasterior
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Deep understanding of local architecture and lifestyle</li>
                <li>Personalized guidance, not copy-paste remedies</li>
                <li>Ethical consulting with long-term impact</li>
                <li>One-on-one attention, not rushed assessments</li>
              </ul>
              <p className="mt-4 font-semibold">
                This isn't about "fixing defects." It's about unlocking potential.
              </p>
            </div>

            {/* Let's Talk */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Let's Talk - When You're Ready
              </h3>
              <p className="mt-4">
                Sometimes, all it takes is one aligned conversation to change how your space works for you.
              </p>
              <p className="mt-4">
                If you feel your home or workplace needs clarity, a quiet phone call can be the first step toward balance. Many clients begin their journey by simply speaking directly at{' '}
                <a href="tel:+917906086899" className="text-blue-600 hover:underline font-semibold">+917906086899</a>.
              </p>
              <p className="mt-4">
                And for those who prefer to reflect before acting, reaching out at{' '}
                <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline font-semibold">info@spacebuild.com</a>{' '}
                often opens up thoughtful, pressure-free guidance.
              </p>
              <p className="font-semibold mt-4 text-lg">
                No obligation. Just direction.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                FAQs – Vastu Consultant in Chandausi, Uttar Pradesh
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">1. Is demolition required for Vastu correction?</h3>
                  <p>No. Vasterior follows MahaVastu principles that focus on non-demolition solutions wherever possible. Structural changes are suggested only when absolutely necessary.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">2. Can Vastu really impact finances and career growth?</h3>
                  <p>Yes, when energy flow is blocked, results often feel stuck. Correct alignment supports better decision-making, stability, and momentum.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">3. Do you offer Vastu consultation for rented homes?</h3>
                  <p>Absolutely. Many corrections are subtle and reversible, making them ideal for rented properties.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">4. How is MahaVastu different from traditional Vastu?</h3>
                  <p>MahaVastu is more flexible, practical, and adaptable to modern construction, without compromising on effectiveness.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">5. Is interior design mandatory with Vastu consultation?</h3>
                  <p>Not at all. Interior design is optional, but when combined, the results are usually more cohesive and powerful.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">6. Do you only serve Chandausi?</h3>
                  <p>While Chandausi is a key focus, Vasterior also serves clients across Uttar Pradesh and beyond.</p>
                </div>
              </div>
            </div>

            {/* Final Thought & CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg border-2 border-orange-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 text-center">
                A Final Thought
              </h3>
              <div className="text-center space-y-4 mb-8">
                <p className="text-lg italic">"Your space listens, even when you don't."</p>
                <p className="text-xl font-semibold">
                  When aligned correctly, it supports you silently, daily, and powerfully.
                </p>
                <p className="text-lg">
                  If you're looking for a Vastu Consultant in Chandausi, Uttar Pradesh who respects both energy and elegance, Vasterior is built for exactly that.
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-4">
                  Balance isn't accidental. It's designed.
                </p>
              </div>
              
              
            </div>
          </div>

          <PostNavigation slug="vastu-consultant-in-chandausi-uttar-pradesh" />
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
