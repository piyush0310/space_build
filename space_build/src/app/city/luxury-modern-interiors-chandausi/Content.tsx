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
            Luxury Modern Interiors in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that luxury is not loud, it is felt. It is the quiet confidence of a space 
              that flows effortlessly, reflects your personality, and supports your lifestyle without ever 
              demanding attention. In Chandausi, where homes are evolving from functional structures into 
              personal sanctuaries, Vasterior brings a refined approach to luxury modern interiors that is 
              intentional, timeless, and deeply personal.
            </p>

            {/* Redefining Luxury */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Redefining Modern Luxury for Chandausi Homes
            </h3>
            <p>
              Chandausi today is at an interesting crossroads, rooted in tradition, yet open to 
              contemporary living. Homeowners are no longer satisfied with generic interiors or copy-paste 
              designs. They seek spaces that feel elevated, thoughtfully planned, and aligned with their 
              aspirations.
            </p>
            <p>
              Luxury modern interiors are not about excessive décor or imported trends. They are about 
              balance, clean lines softened with warmth, modern materials paired with human comfort, and 
              spaces that feel expansive without being cold.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Vasterior Philosophy: Design with Intention
            </h3>
            <p>
              At Vasterior, interior design goes far beyond visual appeal. Every space is approached as a 
              living system, one that must support movement, emotion, productivity, rest, and connection.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Modern design sensibilities</li>
              <li>Timeless material choices</li>
              <li>Intelligent space planning</li>
              <li>Conscious spatial flow</li>
            </ul>

            {/* Design Elements */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Defines a Vasterior Luxury Modern Interior
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Material Palette
            </h4>
            <p>
              Natural stones, refined laminates, tactile fabrics, leather accents, wood tones, and 
              thoughtfully selected metals, chosen not just for appearance, but for longevity and feel.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Colour & Light
            </h4>
            <p>
              Modern neutral palettes layered with warmth, depth, and contrast. Lighting is treated as an 
              architectural element, shaping mood and movement rather than being an afterthought.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Furniture & Layout
            </h4>
            <p>
              Custom-designed or carefully curated furniture that complements the architecture of the 
              space. Layouts are planned to enhance openness, circulation, and comfort.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Details That Matter
            </h4>
            <p>
              From seamless storage solutions to precise finishes, every detail is resolved with clarity 
              and restraint, luxury that whispers rather than shouts.
            </p>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process: Calm, Clear, and Collaborative
            </h3>
            <p>
              Designing a luxury interior should feel exciting, not overwhelming. Vasterior follows a 
              structured yet flexible process that keeps clients informed and confident at every stage.
            </p>

            {/* Why Choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Chandausi Clients Choose Vasterior
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Personal involvement from the core team</li>
              <li>Design decisions backed by logic and experience</li>
              <li>Honest guidance rather than trends pushed for sale</li>
              <li>A long-term view of comfort, maintenance, and value</li>
            </ul>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Begin with a Conversation
            </h3>
            <p>
              If you're planning a luxury modern home or workspace in Chandausi, the best place to begin 
              is a thoughtful conversation.
            </p>
            <p>
              You can speak directly with the Vasterior team by calling{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "}, or share your vision with us over email at{" "}
              <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">
                spacebuild.india@gmail.com
              </a>.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What types of projects does Vasterior handle in Chandausi?
                </h4>
                <p>
                  Vasterior works on luxury residential interiors, private villas, apartments, office 
                  spaces, and select boutique commercial projects, focusing on modern and timeless 
                  design aesthetics.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do you only design, or do you also handle execution?
                </h4>
                <p>
                  Vasterior offers both design-only consultations and complete design-and-execution 
                  services, depending on the scope and client preference.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. What makes Vasterior different from local interior designers?
                </h4>
                <p>
                  Vasterior focuses on intentional design, spatial flow, and long-term comfort rather 
                  than surface-level décor. Each project is custom-crafted, not template-based.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Can you work with an existing home or renovation project?
                </h4>
                <p>
                  Yes. Vasterior regularly works with renovation projects, reimagining existing spaces 
                  without unnecessary demolition, wherever possible.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. How early should I contact Vasterior before starting my interior project?
                </h4>
                <p>
                  Ideally, reach out during the planning or early construction stage. Early involvement 
                  allows for better layouts, cost efficiency, and design clarity.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. Do you help with material selection and budgeting?
                </h4>
                <p>
                  Absolutely. Material selection, cost planning, and realistic budgeting are integral 
                  parts of Vasterior's process.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  7. How can I get started with Vasterior?
                </h4>
                <p>
                  You can start by calling <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} to discuss your project, or by 
                  emailing{" "}
                  <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">
                    spacebuild.india@gmail.com
                  </a>{" "}
                  with basic details about your space and requirements.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="luxury-modern-interiors-chandausi" />
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
