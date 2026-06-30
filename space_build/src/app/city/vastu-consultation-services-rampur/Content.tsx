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
            Vastu Consultation Services Rampur
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior believes that when a space is aligned correctly, life begins to move with greater clarity, stability, and ease. Not through belief or superstition, but through intelligent observation of how direction, elements, activity, and human behavior interact within a built environment.
              </p>
              <p>
                Our Vastu Consultation Services in Rampur are designed for people who want their homes, businesses, and workplaces to support them quietly, without fear, demolition, or disruption.
              </p>
              <p>
                In a city like Rampur, where homes often carry emotional legacy, businesses grow organically, and properties evolve over time, Vastu cannot be rigid or destructive. It must be practical, adaptable, and deeply respectful of modern living. This is where Vasterior's MahaVastu-based approach becomes relevant.
              </p>
            </div>

            {/* Rethinking Vastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Rethinking Vastu: From Belief to Alignment
              </h3>
              <p>
                At its essence, Vastu is the science of spatial intelligence. It studies how natural forces, light, direction, elements, and movement interact with human activity inside a space. When these forces are aligned correctly, resistance reduces. Decision-making improves. Emotional balance stabilizes. Growth feels less forced.
              </p>
              <p>
                Over time, traditional Vastu practices became rigid, fear-driven, and heavily dependent on demolition or drastic changes. Vasterior works differently.
              </p>
              <p>
                We practice MahaVastu, a modern, research-backed evolution of classical Vastu that simplifies spatial alignment into four clear principles:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Direction</li>
                <li>Element</li>
                <li>Activity</li>
                <li>Object</li>
              </ul>
              <p>
                This framework allows corrections that are non-destructive, logical, and effective, even in already-constructed homes, offices, factories, and plots. Instead of breaking structures, we realign intent.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior's Vastu Consultation Services in Rampur
              </h3>
              <p>
                Our Vastu consultation services in Rampur are tailored for residential, commercial, and industrial properties. Each consultation is approached as a unique spatial case, not a template.
              </p>

              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">1. Home Vastu Consultation in Rampur</h4>
                  <p>For independent houses, builder floors, apartments, and ancestral homes.</p>
                  <p>We study:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Room usage and activity flow</li>
                    <li>Directional alignment of bedrooms, kitchen, toilets, and entrances</li>
                    <li>Placement of furniture, storage, mirrors, and heavy objects</li>
                    <li>Subtle energy imbalances affecting health, relationships, and peace</li>
                  </ul>
                  <p>Our goal is not perfection, but support. We help homes feel calmer, more settled, and emotionally lighter.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">2. Plot & Land Vastu Consultation</h4>
                  <p>Before construction begins, alignment matters the most.</p>
                  <p>We assist with:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Plot orientation and entry points</li>
                    <li>Slope, cuts, extensions, and natural elements</li>
                    <li>Vastu-based planning guidance for future construction</li>
                    <li>Corrections that preserve plot potential without delay</li>
                  </ul>
                  <p>This service is ideal for families and developers in Rampur planning long-term investments.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">3. Commercial & Office Vastu Consultation</h4>
                  <p>For shops, clinics, offices, warehouses, and showrooms.</p>
                  <p>A business space must support:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Decision clarity</li>
                    <li>Cash flow stability</li>
                    <li>Team harmony</li>
                    <li>Authority and leadership presence</li>
                  </ul>
                  <p>We analyze seating positions, entry zones, workstations, storage, and energy circulation to ensure the space works with the business, not against it.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">4. Factory & Industrial Vastu Consultation</h4>
                  <p>Factories and industrial units require a highly practical Vastu approach.</p>
                  <p>We focus on:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Production flow and machinery placement</li>
                    <li>Administrative zones vs operational zones</li>
                    <li>Storage, raw material movement, and exits</li>
                    <li>Safety, efficiency, and long-term stability</li>
                  </ul>
                  <p>Our MahaVastu-based factory consultations are observation-driven and grounded in real operational logic.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">5. Astro-Vastu (Optional Advanced Layer)</h4>
                  <p>
                    For clients seeking deeper alignment, we offer Astro-Vastu integration; where planetary influences are studied alongside spatial layouts to fine-tune results. This is always optional and handled with maturity, not mysticism.
                  </p>
                </div>
              </div>
            </div>

            {/*SPACE BUILD */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Clients in Rampur Choose Vasterior
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>MahaVastu-trained expertise, not generic Vastu advice</li>
                <li>Non-destructive corrections suitable for existing structures</li>
                <li>Design + Vastu integration, ensuring aesthetics are never compromised</li>
                <li>Case-study-backed approach rooted in real observations</li>
                <li>Calm, respectful guidance without fear or pressure</li>
              </ul>
              <p>We do not sell remedies. We do not create anxiety. We help you understand how your space functions—and gently correct what works against you.</p>
            </div>

            {/* Who Is This For */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Who Is This Vastu Consultation For?
              </h3>
              <p>Our Vastu consultation services in Rampur are ideal for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Homeowners feeling stuck, restless, or unsettled</li>
                <li>Families facing repeated stress despite "doing everything right"</li>
                <li>Business owners experiencing stagnation or instability</li>
                <li>Professionals who want clarity without superstition</li>
                <li>Decision-makers who value logic, not blind belief</li>
              </ul>
              <p>If you are looking for progress without demolition, and clarity without chaos—this approach is for you.</p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Consultation Process (Simple & Transparent)
              </h3>
              <div className="space-y-4 mt-4">
                <div><strong>Initial Understanding:</strong> We understand your concerns, goals, and the nature of your property.</div>
                <div><strong>Site Analysis & Energy Mapping:</strong> Detailed directional and activity-based assessment using MahaVastu principles.</div>
                <div><strong>Clear Observations:</strong> We explain what is working and what is creating resistance—without fear.</div>
                <div><strong>Gentle Corrections:</strong> Practical, non-invasive recommendations tailored to your lifestyle or business.</div>
                <div><strong>Ongoing Alignment Support:</strong> Guidance on implementation and long-term balance.</div>
              </div>
              <p>Every step is calm, logical, and respectful of your space.</p>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vastu Consultation in Rampur - Done the Right Way
              </h3>
              <p>
                Vasterior is not here to impose rules. We are here to restore alignment. When your space stops resisting you, life feels lighter. Decisions feel clearer. Growth becomes more natural.
              </p>
              <p>
                If you are looking for a trusted Vastu consultant in Rampur, grounded in MahaVastu and modern spatial understanding, Vasterior offers a refined, intelligent alternative to traditional practices.
              </p>
              <p>
                <strong>Book Your Vastu Consultation in Rampur</strong>
              </p>
              <p>
                Let your space start supporting you, quietly, intelligently, and effortlessly. Schedule a Vastu Consultation with Vasterior. Call us today at{" "}
                <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or{" "}
                <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                  spacebuild.india@gamil.com
                </a>
                .
              </p>
            </div>
          </div>

          <PostNavigation slug="vastu-consultation-services-rampur" />
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
