// components/WeddingPageContent.js
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
            Vastu Remedies in Hyderabad
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>Vasterior is redefining how Hyderabad experiences Vastu remedies, not as superstition, not as blind ritual, but as strategic spatial alignment rooted in the advanced principles of MahaVastu and integrated seamlessly into intelligent interior design.</p>
              <p>If your home feels unsettled despite success…</p>
              <p>If your business revenue fluctuates without logic…</p>
              <p>If relationships feel strained or health feels inconsistent…</p>
              <p>It may not be destiny. It may be direction.</p>
            </div>

            {/* Why Vastu Matters */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vastu Remedies Matter in Hyderabad Today
            </h2>
            <p>Hyderabad is evolving fast. High-rise apartments in Gachibowli. Luxury villas in Jubilee Hills. IT offices in HITEC City. Retail spaces in Banjara Hills. Growth is everywhere.</p>
            <p>But growth without alignment creates friction.</p>
            <p>Common issues we see:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Repeated financial instability despite strong effort</li>
              <li>Delays in marriage or relationship harmony</li>
              <li>Career stagnation in high-performing professionals</li>
              <li>Stress-heavy homes with no visible reason</li>
              <li>Offices where employees feel low motivation</li>
            </ul>
            <p>In many cases, the root cause is directional imbalance, incorrect placements in the North, South-West disturbances, kitchen-fire conflicts, or entrance misalignment.</p>
            <p>This is where strategic Vastu remedies come in. Not demolition. Not fear-based solutions. Not costly reconstruction. Precision corrections.</p>

            {/* What Makes Vasterior Different */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Vasterior Different?
            </h2>
            <p>Most Vastu consultants give generic advice. Move this. Place that. Pray here.</p>
            <p>Vasterior does something far more advanced.</p>
            <p>We apply MahaVastu directional logic, a structured system that evaluates:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>16 directional zones</li>
              <li>Elemental balance</li>
              <li>Functional energy mapping</li>
              <li>Usage correction</li>
              <li>Colour, material, and layout realignment</li>
            </ul>
            <p>And then we integrate these corrections into your interior design, so your space doesn't just "feel better." It looks premium.</p>
            <p>You don't choose between design and Vastu. You get both.</p>

            {/* Residential Vastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Residential Vastu Remedies in Hyderabad
            </h2>
            <p>Your home is your core frequency. When it's misaligned, everything outside reflects that imbalance.</p>
            <p>We offer:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Entrance Corrections</strong> - Main door directional calibration and activation.</li>
              <li><strong>Kitchen & Fire Zone Remedies</strong> - Balancing fire-water conflicts without reconstruction.</li>
              <li><strong>Bedroom Energy Realignment</strong> - Master bedroom authority zone corrections for stability and relationships.</li>
              <li><strong>Children & Study Zone Optimisation</strong> - North-East and East corrections for clarity and focus.</li>
              <li><strong>Wealth & Growth Zone Activation</strong> - North and North-East enhancement using material science and directional strengthening.</li>
            </ul>
            <p>All remedies are practical, aesthetic, and implementable within existing layouts wherever possible.</p>

            {/* Commercial Vastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Commercial & Office Vastu Corrections
            </h2>
            <p>In Hyderabad's competitive business ecosystem, direction matters.</p>
            <p>We help:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IT offices optimise productivity zones</li>
              <li>Startups align leadership cabins for authority</li>
              <li>Retail spaces correct cash-flow directions</li>
              <li>Clinics balance healing zones</li>
              <li>Corporate headquarters strengthen growth sectors</li>
            </ul>
            <p>Revenue instability, employee attrition, leadership friction, these often trace back to directional imbalances. We don't guess. We measure. We map. We correct.</p>

            {/* No-Demolition */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              No-Demolition Vastu Solutions
            </h2>
            <p>One of the biggest fears clients have is structural changes. Let's be clear.</p>
            <p>Most Vastu defects can be corrected through:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Functional shifting</li>
              <li>Weight balancing</li>
              <li>Colour therapy</li>
              <li>Elemental activation</li>
              <li>Metal and material placements</li>
              <li>Space usage recalibration</li>
            </ul>
            <p>Demolition is the last resort, not the first suggestion. That's strategic Vastu.</p>

            {/* Hyderabad Expertise */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Hyderabad-Specific Expertise
            </h2>
            <p>High-rise apartments come with fixed plumbing and electrical layouts. Villas have complex zoning. Commercial spaces have compliance constraints.</p>
            <p>We understand Hyderabad architecture. From compact 2BHK apartments in Kondapur to premium villas in Tellapur and corporate offices in Financial District, we tailor remedies to your spatial realities.</p>
            <p>No textbook theory. Only contextual solutions.</p>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Consultation</strong> - We understand your challenges, financial, emotional, professional.</li>
              <li><strong>Directional Energy Mapping</strong> - Using MahaVastu principles, we evaluate all 16 zones.</li>
              <li><strong>Diagnosis & Correction Plan</strong> - You receive a structured, prioritised action plan.</li>
              <li><strong>Interior-Integrated Implementation</strong> - We align aesthetics with energy logic.</li>
              <li><strong>Monitoring & Refinement</strong> - Because energy shifts require calibrated adjustment.</li>
            </ol>

            {/* Why Trust Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Clients Trust Vasterior
            </h2>
            <p>Because we don't promise miracles. We promise alignment. And alignment changes everything.</p>
            <p>We've seen:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Business owners regain financial consistency</li>
              <li>Couples experience reduced conflict</li>
              <li>Professionals break career stagnation</li>
              <li>Families experience calmer living environments</li>
            </ul>
            <p>Not because of ritual. Because of direction.</p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">1. What are Vastu remedies?</h3>
                <p>Vastu remedies are corrective measures applied to balance directional energy in a space. These can include functional shifts, colour adjustments, material placements, and zone activation.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2. Do Vastu remedies require demolition?</h3>
                <p>In most cases, no. Advanced MahaVastu techniques allow corrections without structural changes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. How is MahaVastu different from traditional Vastu?</h3>
                <p>MahaVastu uses directional energy logic across 16 zones and focuses on practical, measurable corrections rather than symbolic rituals.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. Can Vastu remedies improve business growth?</h3>
                <p>Directional alignment in leadership, finance, and growth zones can positively influence operational stability and financial consistency.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. How long does it take to see results?</h3>
                <p>Changes in energy alignment can reflect within weeks, depending on the severity of imbalance and implementation accuracy.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">6. Do you provide Vastu for apartments in Hyderabad?</h3>
                <p>Yes. We specialise in apartment corrections where structural changes are limited.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">7. Is Vastu scientific?</h3>
                <p>While rooted in ancient principles, modern MahaVastu applies directional mapping and functional correction techniques based on spatial logic.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">8. Do you combine interior design with Vastu?</h3>
                <p>Yes. Vasterior uniquely integrates interior aesthetics with energy alignment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">9. Can rented properties be corrected?</h3>
                <p>Absolutely. Many remedies are non-invasive and suitable for rental homes and offices.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">10. How do I get started?</h3>
                <p>Begin with a professional consultation where we assess your space and identify core imbalances.</p>
              </div>
            </div>

            {/* CTA */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              The Next Step
            </h2>
            <p>If you've read this far, something already resonates. Maybe it's the financial inconsistency. Maybe it's the emotional strain. Maybe it's the quiet feeling that your space could be working harder for you.</p>
            <p>A brief conversation could bring clarity. You can speak directly with our experts at <strong>+917906086899</strong> or simply send a note to <strong>info@spacebuild.com</strong>, and let's evaluate what your space is truly communicating.</p>
            <p>Because when direction aligns, outcomes follow.</p>
            <p>Vasterior doesn't just design spaces. We align futures.</p>
          </div>
          <PostNavigation slug="vastu-remedies-in-hyderabad" />
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
