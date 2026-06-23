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
            Luxury Villa Interior Designer in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a villa is not just a large home, it is a personal world. In a 
              place like Chandausi, where homes are often expansive, rooted, and deeply connected to 
              family legacy, luxury interior design must go beyond surface beauty. It must reflect 
              intention, balance, and a sense of quiet confidence. At Vasterior, we design luxury 
              villa interiors in Chandausi that feel timeless, emotionally grounded, and effortlessly 
              refined.
            </p>

            {/* Villa Context */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Designing Villas in Chandausi: More Than Just Space
            </h3>
            <p>
              Villas in Chandausi are defined by scale, openness, and individuality. These homes are 
              not built to follow trends, they are built to last generations. High ceilings, generous 
              rooms, verandahs, private gardens, and layered indoor-outdoor transitions demand a 
              design approach that respects proportion, light, and movement.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Vasterior Design Philosophy
            </h3>
            <p>
              At Vasterior, luxury is never loud. Our philosophy is rooted in timelessness, balance, 
              and intention. We design spaces that feel composed rather than crowded, elegant rather 
              than excessive.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A deep understanding of spatial flow</li>
              <li>Intelligent material selection</li>
              <li>Harmony between function and emotion</li>
              <li>Calm luxury that ages gracefully</li>
            </ul>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Luxury Villa Interior Design Services in Chandausi
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Concept & Spatial Planning
            </h4>
            <p>
              We begin by understanding your lifestyle, family structure, and long-term vision. 
              Spaces are zoned thoughtfully to ensure comfort, privacy, and flow across the villa.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Material & Finish Curation
            </h4>
            <p>
              From stone, wood, fabrics, and metals to subtle textures and tones, every material is 
              chosen for its aesthetic, durability, and emotional resonance.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Furniture & Custom Detailing
            </h4>
            <p>
              We design and curate furniture that complements the architecture of the villa, 
              ensuring scale, comfort, and visual balance.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Lighting Design
            </h4>
            <p>
              Lighting is treated as an architectural element, layered, intentional, and 
              mood-defining.
            </p>

            {/* What Makes Different */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes a Vasterior Villa Truly Different
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Rooms feel connected yet distinct</li>
              <li>Movement through the home feels intuitive</li>
              <li>Materials feel cohesive, not overdone</li>
              <li>Luxury is experienced quietly, not announced</li>
            </ul>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Thoughtful Design Process
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li><strong>Discovery</strong> – Understanding your lifestyle, aspirations, and spatial needs</li>
              <li><strong>Design Direction</strong> – Developing concepts rooted in balance and elegance</li>
              <li><strong>Detailing</strong> – Refining materials, layouts, and finishes</li>
              <li><strong>Alignment</strong> – Ensuring spatial harmony and functional clarity</li>
              <li><strong>Execution Support</strong> – Guiding the project to completion with precision</li>
            </ol>

            {/* Why Choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Homeowners in Chandausi Choose Vasterior
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A calm, professional approach</li>
              <li>Deep respect for client privacy and trust</li>
              <li>Design decisions driven by logic and emotion</li>
              <li>Direct involvement and thoughtful communication</li>
            </ul>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Villa Design Journey
            </h3>
            <p>
              If you are planning to design or transform your luxury villa in Chandausi, a thoughtful 
              conversation is the best place to begin.
            </p>
            <p>
              You can speak directly with the Vasterior team by calling{" "}
              <strong>+917906086899</strong>, where we take the time to understand your vision before 
              offering any design direction. You may also write to us at{" "}
              <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                info@spacebuild.com
              </a>{" "}
              to initiate a detailed discussion about your villa interior requirements.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. Do you specialise only in luxury villa interiors?
                </h4>
                <p>
                  Yes. Vasterior primarily focuses on luxury residential interiors, including villas, 
                  independent homes, and large private residences.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do you take up villa interior projects in Chandausi specifically?
                </h4>
                <p>
                  Yes. We work with villa owners in Chandausi and nearby regions, offering tailored 
                  interior design solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Is your design style modern or traditional?
                </h4>
                <p>
                  Our style is timeless. We blend contemporary sensibilities with classic elements, 
                  ensuring that the interiors remain elegant and relevant over time.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Do you handle execution or only design?
                </h4>
                <p>
                  We offer both design-only services and design with execution support, depending on 
                  the client's preference and project scope.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. How early should I contact an interior designer for my villa?
                </h4>
                <p>
                  Ideally, the design process should begin during the planning or early construction 
                  stage. However, we also work on renovation and transformation projects.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How do I start working with Vasterior?
                </h4>
                <p>
                  You can begin by calling <strong>+917906086899</strong> for an initial discussion or 
                  emailing{" "}
                  <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                    info@spacebuild.com
                  </a>{" "}
                  to share your project details.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="luxury-villa-interior-designer-chandausi" />
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
