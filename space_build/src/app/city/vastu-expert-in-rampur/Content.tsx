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
            Vastu Expert in Rampur – Align Your Space, Align Your Life
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>Vasterior | MahaVastu-Based Vastu Consultation in Rampur</p>
              <p>
                Vasterior is a luxury spatial consulting studio offering
                MahaVastu-based Vastu consultation in Rampur, designed for
                people who seek clarity, balance, and growth, instead of
                superstition. We help homes, businesses, and workplaces realign
                their energy so life flows with less resistance and more ease.
              </p>
              <p>At Vasterior, Vastu is not about fear or belief.</p>
              <p>It is about alignment.</p>
              <p>
                When your space starts supporting you instead of working against
                you, decisions become clearer, stress reduces, and progress feels
                natural.
              </p>
            </div>

            {/* What Vastu Is */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Vastu Really Is (And What It Is Not)
              </h3>
              <p>
                Vastu is often misunderstood as ritualistic or rigid. At
                Vasterior, we practice MahaVastu, a modern, scientific, and
                non-destructive approach to Vastu.
              </p>
              <p>
                Vastu is the science of spatial alignment and how directions,
                elements, activities, and objects interact with human psychology
                and energy.
              </p>
              <p>A well-aligned space:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Reduces mental clutter</li>
                <li>Improves focus and decision-making</li>
                <li>Supports health, finances, and relationships</li>
                <li>Creates emotional calm and stability</li>
              </ul>
              <p>Good Vastu does not force change.</p>
              <p>It removes resistance.</p>
            </div>

            {/* Why Choose Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Choose Vasterior as Your Vastu Expert in Rampur
              </h3>
              <p>
                Rampur homes, businesses, and plots have their own architectural
                patterns, orientations, and challenges. Vasterior brings a deep
                understanding of local spatial conditions, combined with a
                globally respected MahaVastu framework.
              </p>
              <p>What makes us different:</p>

              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    1. MahaVastu Methodology
                  </h4>
                  <p>We follow the 4-step MahaVastu system:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Direction</li>
                    <li>Element</li>
                    <li>Activity</li>
                    <li>Object</li>
                  </ul>
                  <p>
                    Every recommendation is intentional, logical, and backed by
                    thousands of real-life case studies.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    2. Non-Destructive Solutions
                  </h4>
                  <p>No demolition. No unnecessary reconstruction.</p>
                  <p>
                    We focus on practical corrections that work with your
                    existing space.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    3. Design + Vastu Integration
                  </h4>
                  <p>We do not separate Vastu from interiors.</p>
                  <p>
                    Every correction is visually harmonious and aesthetically
                    refined.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    4. Clarity Over Fear
                  </h4>
                  <p>We never use fear-based language.</p>
                  <p>Our role is to guide, not alarm.</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vastu Consultation Services in Rampur
              </h3>
              <p>
                We offer comprehensive Vastu services for residential,
                commercial, and industrial spaces across Rampur and nearby
                regions.
              </p>

              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Residential Vastu Consultation
                  </h4>
                  <p>For:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                    <li>Independent houses</li>
                    <li>Apartments &amp; builder floors</li>
                    <li>Renovated or under-construction homes</li>
                  </ul>
                  <p>Focus areas:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                    <li>Health &amp; peace</li>
                    <li>Family harmony</li>
                    <li>Financial stability</li>
                    <li>Sleep quality &amp; mental clarity</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Commercial &amp; Office Vastu
                  </h4>
                  <p>For:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                    <li>Offices</li>
                    <li>Clinics</li>
                    <li>Shops</li>
                    <li>Showrooms</li>
                    <li>Studios</li>
                  </ul>
                  <p>Focus areas:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                    <li>Business growth</li>
                    <li>Employee productivity</li>
                    <li>Client trust</li>
                    <li>Decision clarity</li>
                    <li>Cash flow alignment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Industrial &amp; Factory Vastu
                  </h4>
                  <p>For:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                    <li>Factories</li>
                    <li>Warehouses</li>
                    <li>Manufacturing units</li>
                  </ul>
                  <p>Focus areas:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                    <li>Operational stability</li>
                    <li>Reduced losses</li>
                    <li>Smooth workflow</li>
                    <li>Workforce balance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Plot &amp; Land Vastu
                  </h4>
                  <p>Before construction:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                    <li>Directional analysis</li>
                    <li>Entrance planning</li>
                    <li>Activity zoning</li>
                    <li>Long-term growth alignment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Vastu-Aligned Interior Planning
                  </h4>
                  <p>For new or existing spaces:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                    <li>Furniture placement</li>
                    <li>Bedroom &amp; kitchen alignment</li>
                    <li>Workstation &amp; seating positioning</li>
                    <li>Storage &amp; utility correction</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Astro-Vastu (Advanced)
                  </h4>
                  <p>For clients seeking deeper alignment:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
                    <li>Planetary influence mapping</li>
                    <li>Life-goal-oriented corrections</li>
                    <li>Timing-based guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Understanding Rampur Spaces */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Understanding Rampur Spaces, Lifestyles &amp; Challenges
              </h3>
              <p>Rampur homes often carry:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Legacy layouts</li>
                <li>Directional constraints</li>
                <li>Mixed-use spaces (home + business)</li>
              </ul>
              <p>Vasterior&apos;s approach respects:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Your lifestyle</li>
                <li>Your beliefs</li>
                <li>Your architecture</li>
                <li>Your pace of change</li>
              </ul>
              <p>We do not impose textbook solutions.</p>
              <p>We adapt Vastu to your real life.</p>
            </div>

            {/* Changes After Alignment */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Changes After a Correct Vastu Alignment
              </h3>
              <p>Clients often report:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Better sleep and calmer minds</li>
                <li>Reduced stress and confusion</li>
                <li>Improved work focus</li>
                <li>Smoother decision-making</li>
                <li>A sense of stability and grounding</li>
              </ul>
              <p>
                Not overnight miracles, but consistent, quiet improvement. That
                is how true alignment works.
              </p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Vastu Consultation Process
              </h3>
              <p>We keep the process simple and transparent:</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Initial Connect – Understand your concerns, space type, and intent.</li>
                <li>On-Site Visit (Rampur &amp; nearby areas) – Detailed MahaVastu analysis of all 16 zones.</li>
                <li>Diagnosis &amp; Insight – Identify what supports you and what creates resistance.</li>
                <li>Correction Guidance – Clear, practical, non-destructive solutions explained calmly.</li>
                <li>Ongoing Clarity – Guidance for implementation and alignment over time.</li>
              </ol>
            </div>

            {/* Invitation / CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Calm Invitation to Begin
              </h3>
              <p>If you feel:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Something is blocked</li>
                <li>Progress feels harder than it should</li>
                <li>Your space looks fine but does not feel right</li>
              </ul>
              <p>It may not be effort that is missing.</p>
              <p>It may be alignment.</p>
              <h4 className="font-semibold text-gray-900 mt-4">
                Book a Vastu Consultation in Rampur
              </h4>
              <p>
                Whether it is your home, office, factory, or land, Vasterior
                helps your space start working with you.
              </p>
              <p>
                Call or WhatsApp to book your Vastu consultation in Rampur. Get
                in touch with our experts today at{" "}
                <strong>+917906086899</strong> or{" "}
                <a
                  href="mailto:info@spacebuild.com"
                  className="text-blue-600 hover:underline"
                >
                  info@spacebuild.com
                </a>
                .
              </p>
              <p>
                Experience MahaVastu guidance that is calm, practical, and
                deeply intentional.
              </p>
              <p>Vasterior</p>
              <p>Where design, direction, and life flow come into alignment.</p>
            </div>
          </div>

          <PostNavigation slug="vastu-expert-in-rampur" />
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
