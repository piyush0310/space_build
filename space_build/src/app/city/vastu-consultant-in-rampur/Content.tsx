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
            Vastu Consultant in Rampur
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior believes that every home, business, and piece of land
                carries a silent intelligence, one that either supports your
                growth or subtly holds it back.
              </p>
              <p>
                As a trusted Vastu Consultant in Rampur, Vasterior helps
                individuals, families, and business owners realign their spaces
                with natural forces so life begins to flow with greater clarity,
                stability, and ease.
              </p>
              <p>
                Our approach is calm, structured, and deeply rooted in MahaVastu
                principles, blending traditional wisdom with modern living
                without disruption or fear.
              </p>
            </div>

            {/* Why Vastu Matters */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vastu Matters in Rampur Homes &amp; Businesses
              </h3>
              <p>
                Rampur is a city where tradition and modern ambition coexist.
                From independent homes and ancestral properties to shops,
                factories, clinics, and new constructions, spaces here are often
                built with functionality in mind, but not always with energetic
                balance.
              </p>
              <p>Over time, residents may experience unexplained challenges:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Financial stagnation despite hard work</li>
                <li>Health issues without clear medical patterns</li>
                <li>Conflicts within families or partnerships</li>
                <li>Businesses struggling to grow or stabilize</li>
              </ul>
              <p>
                Vastu does not replace effort or intention, it supports them.
                When a space is aligned correctly, daily actions feel lighter,
                decisions become clearer, and progress feels more natural.
              </p>
              <p>
                This is where a professional Vastu consultant in Rampur becomes
                essential, not to scare, but to guide.
              </p>
            </div>

            {/* MahaVastu Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior&apos;s MahaVastu-Based Approach
              </h3>
              <p>
                Vasterior follows the MahaVastu system, a refined,
                non-destructive, and logical approach to Vastu that works with
                directions, elements, activities, and objects rather than
                demolition.
              </p>
              <p>Our consultations focus on:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Correct placement of activities</li>
                <li>Balancing the five elements</li>
                <li>Aligning directional energies</li>
                <li>Strengthening weak zones without breaking walls</li>
              </ul>
              <p>
                This method is practical, respectful of existing structures, and
                suitable for modern lifestyles.
              </p>
              <p>
                Whether it is a small home or a large factory, our solutions are
                tailored, not templated.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vastu Consultation Services in Rampur
              </h3>
              <p>
                As a leading MahaVastu consultant in Rampur, Vasterior offers a
                wide range of services for both residential and commercial
                needs:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Residential Vastu Consultation</strong> – For
                  independent houses, apartments, builder floors, and ancestral
                  homes, focusing on peace, health, relationships, and financial
                  stability.
                </li>
                <li>
                  <strong>Commercial &amp; Business Vastu</strong> – Vastu for
                  shops, offices, clinics, factories, warehouses, and showrooms;
                  designed to improve growth, decision-making, employee harmony,
                  and cash flow.
                </li>
                <li>
                  <strong>Plot &amp; Land Vastu</strong> – Before buying or
                  constructing; ensuring long-term success and stability from
                  the foundation stage itself.
                </li>
                <li>
                  <strong>Astro Vastu</strong> – A deeper layer of consultation
                  where planetary influences are aligned with spatial
                  corrections for goal-based manifestation.
                </li>
                <li>
                  <strong>Vastu Renovation &amp; Refurbishment</strong> – When
                  change is required without reconstruction, perfect for existing
                  homes and running businesses.
                </li>
                <li>
                  <strong>Spatial Flow Planning</strong> – A holistic blend of
                  interior planning and Vastu to ensure movement, light, energy,
                  and usability work together seamlessly.
                </li>
                <li>
                  <strong>Vastu Yogdaan (Free Consultation - Wednesdays)</strong>{" "}
                  – A service-oriented initiative where guidance is offered
                  freely to those seeking direction.
                </li>
              </ul>
            </div>

            {/* What Makes Vasterior Different */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes Vasterior Different
              </h3>
              <p>
                Vasterior is not a quick-remedy Vastu service. We work as
                spatial advisors, not superstition-driven consultants.
              </p>
              <p>What sets us apart:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>MahaVastu-based, non-destructive solutions</li>
                <li>Founder-led, deeply involved consultations</li>
                <li>Calm, logical explanations, no fear tactics</li>
                <li>
                  Experience across homes, offices, factories, and luxury spaces
                </li>
                <li>Integration of Vastu with interior design thinking</li>
              </ul>
              <p>Our focus is not just correction, it is alignment.</p>
            </div>

            {/* Who Should Consult */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Who Should Consider a Vastu Consultation in Rampur?
              </h3>
              <p>This service is ideal for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Families experiencing ongoing stress or instability</li>
                <li>Business owners facing losses or stagnation</li>
                <li>Professionals seeking clarity and growth</li>
                <li>People planning to buy land or start construction</li>
                <li>Anyone who feels their space no longer supports them</li>
              </ul>
              <p>Vastu is not about belief, it is about observation and correction.</p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Vastu Consultation Process
              </h3>
              <p>We follow a clear, professional, and transparent process:</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Initial Discussion – Understanding concerns and objectives</li>
                <li>Site Survey &amp; Directional Mapping</li>
                <li>MahaVastu Analysis – Zones, elements, activities</li>
                <li>Actionable Guidance – Clear, doable recommendations</li>
                <li>Implementation Support &amp; Follow-Up</li>
              </ol>
              <p>Every step is explained. Nothing is forced.</p>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Frequently Asked Questions
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Is demolition required for Vastu correction?</strong>{" "}
                  No. Our MahaVastu approach focuses on non-destructive
                  solutions.
                </li>
                <li>
                  <strong>How long does it take to see results?</strong> Many
                  clients notice subtle shifts within weeks, depending on the
                  issue and corrections applied.
                </li>
                <li>
                  <strong>Is Vastu religious?</strong> No. Vastu is a spatial
                  science based on directions, elements, and human behavior.
                </li>
                <li>
                  <strong>Can Vastu help businesses?</strong> Yes. Many business
                  challenges are linked to spatial misalignment.
                </li>
                <li>
                  <strong>Do you consult for old properties?</strong>{" "}
                  Absolutely. Existing spaces benefit the most from corrective
                  guidance.
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Connect with a Trusted Vastu Consultant in Rampur
              </h3>
              <p>
                If you feel your home or workplace is no longer supporting your
                growth, clarity, or peace, it may be time to realign, not
                rebuild.
              </p>
              <p>
                Vasterior offers professional, respectful, and long-term Vastu
                guidance in Rampur, rooted in MahaVastu principles and modern
                practicality.
              </p>
              <p>
                <strong>Book a Vastu Consultation</strong>
              </p>
              <p>Vasterior – Spatial Flow Consultants. Aligning spaces with intention.</p>
            </div>
          </div>

          <PostNavigation slug="vastu-consultant-in-rampur" />
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
