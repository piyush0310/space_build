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
            Vastu Consultant Near Me in Rampur
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior is a luxury spatial consulting studio offering
                scientifically grounded, non-destructive MahaVastu
                consultations in Rampur, designed to align your home, business,
                and life with clarity, balance, and effortless flow.
              </p>
              <p>
                We believe Vastu is not about superstition or fear, it is about
                alignment. When your space supports you, resistance reduces,
                decisions become clearer, and progress begins to feel natural
                rather than forced.
              </p>
            </div>

            {/* Why People Search */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why People in Rampur Search for a “Vastu Consultant Near Me”
              </h3>
              <p>
                In Rampur, many homes and businesses are built with deep
                emotional value, including ancestral houses, independently
                constructed residences, family-run shops, clinics, factories,
                and growing offices. Over time, people begin to feel that
                despite hard work, something feels stuck.
              </p>
              <p>Common concerns we hear from Rampur clients include:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Continuous stress or mental heaviness at home</li>
                <li>Business growth plateauing despite effort</li>
                <li>Frequent disagreements or lack of harmony in family spaces</li>
                <li>Sleep disturbances or lack of focus</li>
                <li>Renovations that improved appearance but not peace</li>
              </ul>
              <p>
                People do not search for a Vastu consultant because they believe
                something is wrong. They search because they sense their space
                is not fully supporting them.
              </p>
              <p>
                That is where a scientific, modern MahaVastu approach becomes
                essential.
              </p>
            </div>

            {/* Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior&apos;s Approach: Vastu as Spatial Alignment, Not Belief
              </h3>
              <p>
                At Vasterior, we do not practice ritual-based or fear-driven
                Vastu. We work with MahaVastu, a structured and research-backed
                system that studies how space, direction, activity, and objects
                interact with human psychology and daily life.
              </p>
              <p>Our process focuses on:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Understanding how your space functions</li>
                <li>
                  Identifying points of resistance within layouts and zones
                </li>
                <li>
                  Correcting alignment without demolition or major breakage
                </li>
                <li>
                  Integrating Vastu seamlessly with interior design and
                  usability
                </li>
              </ul>
              <p>
                We believe a well-aligned space should feel calm, logical, and
                supportive, not restrictive or overwhelming.
              </p>
            </div>

            {/* Why Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes Vasterior the Best Vastu Consultant in Rampur
              </h3>
              <h4 className="font-semibold text-gray-900 mt-3">
                MahaVastu-Based Scientific Analysis
              </h4>
              <p>
                We use a 16-zone MahaVastu grid to study how activities,
                utilities, furniture, and movement interact with each directional
                zone. This allows precise corrections instead of generic advice.
              </p>

              <h4 className="font-semibold text-gray-900 mt-3">
                Non-Destructive Corrections
              </h4>
              <p>No breaking walls. No forced changes.</p>
              <p>Our solutions work with what already exists, making them practical for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Built homes</li>
                <li>Rented spaces</li>
                <li>Commercial properties</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mt-3">
                Integrated Vastu + Interior Intelligence
              </h4>
              <p>
                Unlike traditional consultants, Vasterior blends interior
                design, spatial flow, and Vastu alignment, ensuring your space
                looks refined while functioning better energetically.
              </p>

              <h4 className="font-semibold text-gray-900 mt-3">
                Personalised, Not Template-Based
              </h4>
              <p>
                Every property in Rampur, whether a home, shop, or factory, has
                a unique layout and intent. Our consultations are never
                copy-paste.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                MahaVastu Consultation Services in Rampur
              </h3>

              <div className="space-y-4 mt-4">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Residential Vastu Consultation
                  </h4>
                  <p>
                    For independent homes, apartments, and ancestral properties
                    in Rampur.
                  </p>
                  <p>We focus on:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Bedroom, kitchen, living and pooja alignment</li>
                    <li>Sleep, health, relationships and mental clarity</li>
                    <li>Layout corrections without renovation stress</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Commercial &amp; Office Vastu
                  </h4>
                  <p>For offices, clinics, factories, warehouses, and corporate spaces.</p>
                  <p>We help align:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Owner and leadership zones</li>
                    <li>Workstations and staff flow</li>
                    <li>Cash, accounts, and decision-making areas</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Shop &amp; Business Vastu
                  </h4>
                  <p>Ideal for retail stores, showrooms, and family businesses.</p>
                  <p>Focus areas include:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Entry and visibility</li>
                    <li>Cash counter placement</li>
                    <li>Product flow and customer movement</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Vastu + Interior Alignment
                  </h4>
                  <p>For clients planning renovation or interiors.</p>
                  <p>
                    We integrate MahaVastu at the planning stage, ensuring the
                    space is aligned before execution, saving time, cost, and
                    future corrections.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    MahaVastu Yogdaan (Free Guidance)
                  </h4>
                  <p>
                    As part of our service philosophy, Vasterior also offers
                    MahaVastu Yogdaan, a guidance initiative where basic
                    concerns are addressed with simple, conscious corrections.
                  </p>
                  <p>(Availability subject to schedule.)</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">
                    Paid MahaVastu Consultation
                  </h4>
                  <p>A comprehensive, structured consultation involving:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Detailed site analysis</li>
                    <li>16-zone evaluation</li>
                    <li>Activity and object alignment</li>
                    <li>Clear, practical recommendations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Local sensitivity */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Serving Rampur with Local Sensitivity &amp; Professional Precision
              </h3>
              <p>Rampur properties often involve:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Multi-generational families</li>
                <li>Mixed-use homes (residence plus business)</li>
                <li>Traditional layouts with modern needs</li>
              </ul>
              <p>Vasterior understands these realities. Our recommendations respect:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Cultural values</li>
                <li>Practical limitations</li>
                <li>Budget and usability</li>
              </ul>
              <p>
                Consultations are available as on-site visits in Rampur or
                remote consultations where applicable.
              </p>
            </div>

            {/* After alignment */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What You Can Expect After Alignment
              </h3>
              <p>Clients often report:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>A calmer home environment</li>
                <li>Improved focus and sleep</li>
                <li>Better decision-making</li>
                <li>Reduced friction in daily routines</li>
                <li>A subtle but consistent sense of progress</li>
              </ul>
              <p>
                Vastu alignment does not create miracles. It removes resistance,
                allowing your effort to finally move forward.
              </p>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Book a Vastu Consultant Near You in Rampur
              </h3>
              <p>
                If you have been searching for a trusted Vastu consultant near
                me in Rampur, one who understands space as both science and
                lived experience, Vasterior offers clarity without superstition
                and solutions without disruption.
              </p>
              <p>
                Talk to a MahaVastu Expert. Contact us today at{" "}
                <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or{" "}
                <a
                  href="mailto:spacebuild.india@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  spacebuild.india@gmail.com
                </a>
                .
              </p>
              <p>
                Schedule a site evaluation in Rampur. Your space already has
                potential.
              </p>
              <p>We simply help it work with you, not against you.</p>
            </div>
          </div>

          <PostNavigation slug="vastu-consultant-near-me-in-rampur" />
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
