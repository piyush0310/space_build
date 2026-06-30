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
            Villa Interior Designer in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a villa is not merely a large home, it is a personal ecosystem. 
              A place where space, light, material, and energy come together to support the way you 
              live, think, rest, and grow. In Chandausi, where villas are increasingly becoming 
              symbols of privacy, legacy, and refined living, interior design must go beyond 
              decoration. It must feel intentional, intuitive, and timeless.
            </p>

            {/* Villa Living */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Villa Living in Chandausi: A New Kind of Luxury
            </h3>
            <p>
              Chandausi is witnessing a quiet evolution. Spacious plots, independent villas, and 
              low-density living are replacing congested layouts and generic homes. Villa owners 
              here are not just looking for visual beauty, they seek comfort, longevity, and spaces 
              that feel right over decades, not seasons.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Multiple orientations and natural light sources</li>
              <li>Transitional spaces like verandahs, courtyards, terraces, and staircases</li>
              <li>A balance between social openness and private retreat</li>
              <li>Materials and finishes that age gracefully</li>
            </ul>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior's Philosophy: Designing with Spatial Intelligence
            </h3>
            <p>
              At Vasterior, interior design begins long before furniture or finishes are discussed. 
              We start by understanding how the space wants to function and how the family intends 
              to live within it.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Spatial flow that feels natural and uncluttered</li>
              <li>Material honesty, where textures are chosen for longevity and comfort</li>
              <li>Timeless aesthetics, avoiding trends that date quickly</li>
              <li>Vastu-aligned planning, applied in a non-destructive, intelligent manner</li>
            </ul>

            {/* Spaces */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Designing Every Villa Space with Intention
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Living & Social Areas
            </h4>
            <p>
              Villa living rooms are meant to host, connect, and breathe. We design these spaces to 
              feel expansive yet intimate, balancing seating layouts, ceiling heights, and lighting 
              layers so conversations flow effortlessly without visual noise.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Bedrooms as Personal Sanctuaries
            </h4>
            <p>
              Each bedroom in a villa carries a different rhythm. From master suites to guest rooms, 
              our focus is on rest, privacy, and emotional comfort.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Kitchens that Support Daily Life
            </h4>
            <p>
              A villa kitchen is not just functional, it is central to family energy. We design 
              kitchens that are ergonomic, well-zoned, and thoughtfully aligned.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Courtyards, Staircases & Transitional Spaces
            </h4>
            <p>
              Often overlooked, these areas define a villa's soul. We treat these spaces as design 
              anchors rather than leftover zones.
            </p>

            {/* Why Choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Homeowners in Chandausi Choose Vasterior
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Design that is deeply considered, not template-driven</li>
              <li>Vastu guidance that is non-invasive and design-integrated</li>
              <li>A calm, structured process without unnecessary complexity</li>
              <li>Interiors that feel luxurious yet livable, never overwhelming</li>
            </ul>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Villa Interior Design Process
            </h3>
            <p>
              Every villa project begins with listening. We take time to understand the family, 
              their routines, aspirations, and future plans. From there, we translate these insights 
              into layouts, material palettes, and spatial strategies that feel personal and intuitive.
            </p>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Villa Design Journey
            </h3>
            <p>
              If you are planning to design or transform your villa in Chandausi, a thoughtful 
              conversation can often bring more clarity than countless references.
            </p>
            <p>
              You can speak directly with the Vasterior team by calling{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "}, or by writing to us at{" "}
              <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                spacebuild.india@gamil.com
              </a>, and we'll help you understand the possibilities your space holds.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. Do you design only luxury villas, or do you take mid-sized villa projects as well?
                </h4>
                <p>
                  We work on villas of varying scales. What matters more than size is intent, clients 
                  who value thoughtful planning, quality materials, and long-term comfort align best 
                  with our approach.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Is Vastu mandatory in your villa interior projects?
                </h4>
                <p>
                  Vastu is optional, but many clients choose it once they understand our 
                  non-destructive, design-integrated approach. It is never forced and is always 
                  applied subtly.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Can you work with an existing villa structure?
                </h4>
                <p>
                  Yes. Many of our villa projects involve working within existing layouts and 
                  enhancing them through intelligent zoning, furniture planning, lighting, and 
                  material selection, without major structural changes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Do you handle complete execution or only design consultation?
                </h4>
                <p>
                  We offer both. Depending on the project scope, we can provide complete 
                  design-to-execution services or focused consultation and design guidance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. How long does a villa interior project usually take?
                </h4>
                <p>
                  Timelines vary based on size, complexity, and scope. Villas typically require a 
                  phased approach to ensure quality and alignment rather than rushed outcomes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. Do you take projects outside Chandausi?
                </h4>
                <p>
                  Yes. While this page focuses on Chandausi, we undertake villa interior projects 
                  across nearby regions and cities based on scope and alignment.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="villa-interior-designer-chandausi" />
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
