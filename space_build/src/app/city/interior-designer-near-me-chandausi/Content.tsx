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
            Interior Designer Near Me in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a well-designed space is not just seen, it is felt. If you are
              searching for an interior designer near me in Chandausi, chances are you are not just
              looking for furniture layouts or colour combinations, but for a space that reflects
              your lifestyle, supports your ambitions, and feels aligned the moment you step inside.
              That is where our work begins.
            </p>
            <p>
              In a town like Chandausi, where homes carry emotional legacy and modern aspirations
              live side by side, interior design must be thoughtful, contextual, and deeply personal.
              At Vasterior, we design interiors that flow with intention, blending aesthetics,
              functionality, and spatial intelligence to create environments that quietly elevate
              everyday living.
            </p>

            {/* Why Local */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Hiring a Local Interior Designer in Chandausi Matters
            </h3>
            <p>
              Searching for an interior designer near me is not just about convenience, it is about
              relevance. A local interior designer understands regional construction practices,
              climate considerations, lifestyle patterns, and the subtle cultural nuances that shape
              how a home or workspace is truly used.
            </p>
            <p>Working in and around Chandausi, we bring:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Practical design solutions suited to local architecture.</li>
              <li>On-ground coordination and site understanding.</li>
              <li>Materials and finishes that age gracefully in local conditions.</li>
              <li>A design sensibility that respects tradition while embracing modern living.</li>
            </ul>
            <p className="mt-2">
              This balance allows us to deliver interiors that feel current today and timeless
              tomorrow.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Vasterior Philosophy: Spatial Flow, Intention &amp; Timeless Design
            </h3>
            <p>
              At the heart of Vasterior lies a simple yet powerful belief, spaces influence how we
              think, feel, and function.
            </p>
            <p>Our design philosophy rests on three pillars:</p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Spatial Flow
            </h4>
            <p>
              Every space should move effortlessly. From how you enter a room to how light travels
              through it, we design layouts that feel intuitive rather than forced.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Intention
            </h4>
            <p>
              Each room has a purpose beyond utility. Whether it is a bedroom meant for deep rest
              or a living room designed for connection, intention guides every design decision.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Timeless Design
            </h4>
            <p>
              We do not chase trends. We curate materials, colours, and forms that remain relevant,
              elegant, and emotionally grounding for years to come.
            </p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Design Services in Chandausi
            </h3>
            <p>
              As a full-scope interior design studio, we offer comprehensive services for both
              residential and commercial spaces in Chandausi and nearby regions.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Residential Interior Design
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Independent homes &amp; villas.</li>
              <li>Apartments &amp; builder floors.</li>
              <li>Renovations and upgrades.</li>
              <li>Room-wise design consultations.</li>
            </ul>
            <p className="mt-2">
              We design homes that feel lived-in yet refined, balancing comfort, beauty, and
              practicality.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Commercial Interior Design
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Offices &amp; workspaces.</li>
              <li>Clinics &amp; wellness centres.</li>
              <li>Retail &amp; boutique spaces.</li>
            </ul>
            <p className="mt-2">
              Our commercial designs focus on productivity, brand identity, and user experience
              without overwhelming the space.
            </p>

            {/* Vastu */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              More Than Interiors: Thoughtful Vastu Integration
            </h3>
            <p>
              One of the defining strengths of Vasterior is our scientific and non-destructive
              approach to Vastu.
            </p>
            <p>
              Unlike common misconceptions, modern Vastu does not mean breaking walls or rebuilding
              structures. Instead, it focuses on:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Intelligent layout planning.</li>
              <li>Activity-zone alignment.</li>
              <li>Material and colour balance.</li>
              <li>Furniture placement and circulation.</li>
            </ul>
            <p className="mt-2">
              For clients in Chandausi who value harmony, clarity, and long-term wellbeing, this
              approach adds a deeper layer of intelligence to interior design, subtle, practical,
              and seamlessly integrated.
            </p>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process: Clear, Calm &amp; Collaborative
            </h3>
            <p>
              Designing a space should feel exciting, not overwhelming. Our process is structured
              yet flexible, allowing you to stay informed and confident at every stage.
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>
                <strong>Understanding You</strong> – We begin by listening, to your lifestyle,
                challenges, aspirations, and the story you want your space to tell.
              </li>
              <li>
                <strong>Spatial Planning &amp; Concept Development</strong> – Layouts, zoning, and
                conceptual direction are developed with both functionality and emotion in mind.
              </li>
              <li>
                <strong>Material &amp; Design Detailing</strong> – From finishes to lighting and
                furniture, every detail is curated to support the overall flow of the space.
              </li>
              <li>
                <strong>Execution Support</strong> (where applicable) – We ensure design intent
                translates accurately on site through coordination and guidance.
              </li>
            </ol>
            <p className="mt-2">
              This clarity is why clients often say the process feels calm, guided, and reassuring.
            </p>

            {/* Different */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Vasterior Is Different from Generic Interior Designers
            </h3>
            <p>
              When people search for the best interior designer near me in Chandausi, they are often
              tired of:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Cookie-cutter designs.</li>
              <li>Rushed decisions.</li>
              <li>Trend-heavy spaces that do not age well.</li>
            </ul>
            <p className="mt-2">
              Vasterior stands apart because we design with depth. Our work is not about filling
              space, but about revealing its potential. Every project is treated as a collaboration,
              not a transaction.
            </p>

            {/* Who For */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Is Vasterior Perfect For?
            </h3>
            <p>Our services are ideal if you:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Want a home that feels calm, balanced, and intentional.</li>
              <li>Value design that is thoughtful rather than flashy.</li>
              <li>Are looking for a long-term design partner, not just a decorator.</li>
              <li>Believe your space should support your lifestyle and growth.</li>
            </ul>
            <p className="mt-2">If that resonates, you are already aligned with our approach.</p>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Interior Journey in Chandausi
            </h3>
            <p>
              If you are planning a new home, renovating an existing space, or designing a workspace
              in or around Chandausi, the right guidance at the right time can make all the
              difference. A conversation is often the first step toward clarity.
            </p>
            <p>
              You can speak directly with the Vasterior team by calling{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} to discuss your space, your ideas, and what is
              possible. For detailed queries or consultation requests, you may also write to us at{" "}
              <a
                href="mailto:spacebuild.india@gmail.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gmail.com
              </a>
              , and we will guide you through the next steps with care and transparency.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              FAQs – Interior Designer Near Me Chandausi
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. Do you provide interior design services in Chandausi?
                </h4>
                <p>
                  Yes, Vasterior actively works in Chandausi and nearby regions, offering both
                  residential and commercial interior design services.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Can you design only one room instead of the entire home?
                </h4>
                <p>
                  Absolutely. We offer room-wise interior design consultations for spaces such as
                  bedrooms, living rooms, kitchens, or offices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Do you include Vastu in your interior designs?
                </h4>
                <p>
                  Yes. Our approach integrates modern, scientific Vastu principles in a
                  non-destructive way, seamlessly aligned with interior design.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. How do I know if Vasterior is the right interior designer for me?
                </h4>
                <p>
                  If you value thoughtful design, clear processes, and spaces that feel emotionally
                  balanced rather than trend-driven, Vasterior is likely a strong fit.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. How can I get started with a consultation?
                </h4>
                <p>
                  You can begin by calling <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} for an initial discussion
                  or emailing{" "}
                  <a
                    href="mailto:spacebuild.india@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    spacebuild.india@gmail.com
                  </a>{" "}
                  with your project details.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="interior-designer-near-me-chandausi" />
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
