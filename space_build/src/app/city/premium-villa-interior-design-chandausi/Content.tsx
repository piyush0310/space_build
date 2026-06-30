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
            Premium Villa Interior Design in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a villa is not just a larger home, it is a reflection of legacy, 
              intention, and the life you are building within it. In Chandausi, where spacious homes 
              are evolving beyond conventional layouts, our approach to premium villa interior design 
              blends timeless aesthetics, intelligent planning, and energy-aligned living to create 
              spaces that feel calm, elevated, and deeply personal.
            </p>

            {/* Redefining Villa Living */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Redefining Villa Living in Chandausi
            </h3>
            <p>
              Chandausi is witnessing a quiet transformation. Villas are no longer designed merely 
              for size or show, they are being shaped for comfort, dignity, and longevity. 
              Homeowners today seek interiors that feel expansive yet intimate, luxurious yet 
              effortless, and beautiful without being overwhelming.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Philosophy: Luxury Rooted in Intention
            </h3>
            <p>
              At Vasterior, luxury is never loud. It is measured, thoughtful, and enduring. Every 
              villa we design follows three core principles:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Spatial Flow – How movement, circulation, and openness affect your daily experience</li>
              <li>Intentional Design – Every room has a purpose beyond aesthetics</li>
              <li>Timelessness – Designs that age gracefully, not trend-dependent interiors</li>
            </ul>

            {/* Why Different */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Villa Interiors Demand a Different Design Approach
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Larger footprints and multiple zones</li>
              <li>Double-height areas, staircases, and transitional spaces</li>
              <li>Greater exposure to natural light and landscape</li>
              <li>The need for privacy within openness</li>
            </ul>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Premium Villa Interior Design Services by Vasterior
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li><strong>Space Planning & Zoning</strong> - We begin by understanding how your family lives, hosts, rests, and evolves.</li>
              <li><strong>Luxury Living & Dining Spaces</strong> - From refined seating compositions to balanced lighting.</li>
              <li><strong>Bespoke Bedrooms & Wardrobes</strong> - Bedrooms treated as sanctuaries with curated comfort.</li>
              <li><strong>Kitchens Designed for Ease & Elegance</strong> - Planned for efficiency, hygiene, and visual harmony.</li>
              <li><strong>Custom Furniture & Material Curation</strong> - Furniture designed specifically for your villa.</li>
              <li><strong>Lighting as a Design Language</strong> - Layered lighting to sculpt spaces and elevate moments.</li>
            </ol>

            {/* Vastu */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vastu-Integrated Villa Interiors (Optional)
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Correct placement of activities and furniture</li>
              <li>Elemental balance through materials, colors, and light</li>
              <li>Enhancing positivity without altering architecture</li>
            </ul>

            {/* Luxury Without Excess */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Luxury Without Excess
            </h3>
            <p>
              True luxury is not about filling every corner, it is about knowing what to leave out. 
              At Vasterior, we create villas that breathe - spaces where silence, light, and 
              proportion become design elements themselves.
            </p>

            {/* Why Choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Vasterior Experience
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Clear design direction</li>
              <li>Thoughtful explanations (not jargon)</li>
              <li>Attention to minute details</li>
              <li>Calm execution</li>
            </ul>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin a Thoughtful Conversation
            </h3>
            <p>
              If you are planning a new villa or upgrading an existing one in Chandausi, a 
              meaningful conversation is often the best place to begin.
            </p>
            <p>
              You can speak directly with the Vasterior team by calling{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "}, where we take the time to understand your space and 
              intent before discussing design possibilities. Alternatively, you may write to us at{" "}
              <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                spacebuild.india@gamil.com
              </a>{" "}
              with details about your villa.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. Do you design villas only in Chandausi?
                </h4>
                <p>
                  While we actively work on villa interior projects in Chandausi, our services also 
                  extend to nearby towns and regions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. What makes Vasterior different from other interior designers?
                </h4>
                <p>
                  Our strength lies in intentional planning, spatial flow expertise, and a calm 
                  luxury aesthetic.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Do you offer turnkey execution?
                </h4>
                <p>
                  Yes, for select projects we offer design plus execution. The scope is discussed 
                  transparently during initial consultations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Is Vastu mandatory in your designs?
                </h4>
                <p>
                  No. Vastu integration is optional and applied only if the client desires it.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. Can you work with an existing villa layout?
                </h4>
                <p>
                  Absolutely. Renovation and upgradation projects are a significant part of our 
                  portfolio.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How early should I contact an interior designer for a villa?
                </h4>
                <p>
                  Ideally, interior planning should begin before construction completion.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  7. Do you customise furniture for villas?
                </h4>
                <p>Yes. Most villa projects involve bespoke furniture designed specifically for the home.</p>
              </div>
            </div>
          </div>

          <PostNavigation slug="premium-villa-interior-design-chandausi" />
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
