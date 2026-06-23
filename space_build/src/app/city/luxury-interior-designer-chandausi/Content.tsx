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
            Luxury Interior Designer in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a truly luxurious space is not defined by how expensive it
              looks, but by how deeply it supports the life lived within it. As a luxury interior
              design and spatial flow consulting studio, we bring together refined aesthetics,
              intelligent planning, and MahaVastu-aligned design to create homes and spaces in
              Chandausi that feel balanced, timeless, and effortlessly elegant.
            </p>
            <p>
              Every project we undertake begins with a simple yet powerful intention, to design
              spaces that do not just look beautiful, but feel right. Spaces that nurture clarity,
              comfort, prosperity, and emotional well-being, while reflecting the individuality of
              the people who inhabit them.
            </p>

            {/* Redefining Luxury */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Redefining Luxury Interior Design in Chandausi
            </h3>
            <p>
              Luxury interior design in Chandausi is evolving. Homeowners today are moving beyond
              surface-level décor and trending styles, seeking spaces that are calm, functional,
              and deeply personal. The new definition of luxury lies in thoughtful layouts,
              intelligent use of materials, natural light optimisation, and a sense of harmony that
              lasts well beyond the first impression.
            </p>
            <p>
              At Vasterior, we approach luxury as a balance of form, function, and energy. Whether
              it is a spacious family home, a modern villa, or a boutique commercial space, our
              designs are rooted in longevity, avoiding short-lived trends and focusing instead on
              timeless elegance and purposeful planning.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Philosophy: Where Interiors Meet Intention
            </h3>
            <p>
              What sets Vasterior apart as a luxury interior designer in Chandausi is our
              philosophy of intentional design. We do not believe in over-designing or unnecessary
              structural changes. Instead, we work with what already exists, enhancing it through
              intelligent layouts, spatial flow correction, material selection, and subtle Vastu
              alignment.
            </p>
            <p>Our design philosophy rests on three core pillars:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Spatial Flow:</strong> Every room should allow energy, movement, and light
                to flow naturally.
              </li>
              <li>
                <strong>Emotional Connection:</strong> A space should evoke calm, confidence, and
                belonging.
              </li>
              <li>
                <strong>Timeless Design:</strong> Materials, colours, and forms that age gracefully
                with time.
              </li>
            </ul>
            <p className="mt-2">
              By integrating MahaVastu principles in a non-destructive, design-first manner, we
              ensure that beauty and balance coexist seamlessly.
            </p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Luxury Interior Design Services in Chandausi
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Luxury Residential Interior Design
            </h4>
            <p>
              We design premium residential interiors that reflect your lifestyle, aspirations, and
              values. From layout planning to detailed material curation, every element is
              thoughtfully aligned to create homes that feel both luxurious and deeply comfortable.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Vastu-Integrated Interior Design
            </h4>
            <p>
              Our expertise in MahaVastu allows us to align spaces with natural elements,
              activities, and energy zones, without demolition or disruption. The result is a home
              that supports well-being, clarity, and growth while maintaining refined aesthetics.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Space Planning &amp; Layout Optimisation
            </h4>
            <p>
              Luxury is often hidden in the details you do not immediately notice, circulation,
              proportions, furniture placement, and visual balance. We specialise in optimising
              layouts so every square foot feels intentional and breathable.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Material, Lighting &amp; Furniture Curation
            </h4>
            <p>
              From stone and wood to fabrics and finishes, we curate materials that are tactile,
              durable, and timeless. Lighting is layered carefully to enhance mood, function, and
              architectural features.
            </p>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Renovation &amp; Non-Destructive Corrections
            </h4>
            <p>
              For existing homes and spaces in Chandausi, we offer intelligent renovation solutions
              and non-destructive corrections that uplift both design and energy, without
              unnecessary structural changes.
            </p>

            {/* Why Choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Homeowners in Chandausi Choose Vasterior
            </h3>
            <p>
              Clients choose Vasterior not just for our design sensibility, but for the experience
              we offer.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A calm, consultation-led approach rather than rushed decisions.</li>
              <li>Clear design logic behind every choice.</li>
              <li>Integration of aesthetics, comfort, and Vastu alignment.</li>
              <li>Transparent processes and refined execution.</li>
              <li>Spaces that feel luxurious yet deeply livable.</li>
            </ul>
            <p className="mt-2">
              Our work speaks quietly but confidently, through balance, proportion, and intention.
            </p>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Design Process: From Vision to Reality
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>
                <strong>Understanding Your Vision</strong> – We begin by listening. Your
                lifestyle, concerns, aspirations, and future plans shape the foundation.
              </li>
              <li>
                <strong>Spatial &amp; Vastu Analysis</strong> – A detailed study of layout, zones,
                movement, and energy alignment.
              </li>
              <li>
                <strong>Concept Development</strong> – Mood boards, material palettes, and layout
                strategies that align with your vision.
              </li>
              <li>
                <strong>Design Detailing</strong> – Technical drawings, elevations, lighting plans,
                and specifications.
              </li>
              <li>
                <strong>Execution Support</strong> – Coordination, site reviews, and quality checks
                to ensure the design is realised as intended.
              </li>
            </ol>

            {/* Lifestyle Fit */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Designing for the Lifestyle of Chandausi
            </h3>
            <p>
              Chandausi homes often reflect a beautiful blend of tradition, family-centric living,
              and evolving modern aspirations. Our designs respect this balance, creating interiors
              that feel rooted yet contemporary.
            </p>
            <p>
              Climate considerations, natural light, ventilation, and cultural sensibilities are
              subtly woven into every project. The result is a space that feels appropriate to its
              location, yet elevated in its execution.
            </p>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Design Journey with Vasterior
            </h3>
            <p>
              If you are seeking a luxury interior designer in Chandausi who values intention as
              much as aesthetics, Vasterior would be delighted to guide you. For a detailed
              conversation about your space, you can connect with our team by calling{" "}
              <strong>+917906086899</strong>, where we will walk you through our approach and
              understand your requirements.
            </p>
            <p>
              You may also reach out via email at{" "}
              <a
                href="mailto:info@spacebuild.com"
                className="text-blue-600 hover:underline"
              >
                info@spacebuild.com
              </a>{" "}
              to schedule a consultation at your convenience. Your space deserves more than
              decoration; it deserves direction, balance, and thoughtful design.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What makes Vasterior a luxury interior designer in Chandausi?
                </h4>
                <p>
                  Vasterior combines refined interior design with MahaVastu-aligned spatial
                  planning. Our focus is on timeless aesthetics, intelligent layouts, and
                  non-destructive energy alignment rather than trend-driven or contractor-led
                  design.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do you offer Vastu-based interior design without demolition?
                </h4>
                <p>
                  Yes. Our approach emphasises non-destructive corrections through layout
                  planning, furniture placement, materials, colours, lighting, and activity
                  alignment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Do you handle complete interior projects in Chandausi?
                </h4>
                <p>
                  We offer both consultation-based services and full-scale interior design support
                  depending on project scope and requirements.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. What types of properties do you design?
                </h4>
                <p>
                  We work on premium residences, villas, farmhouses, and select boutique
                  commercial spaces that value thoughtful design and long-term quality.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. How early should I contact an interior designer?
                </h4>
                <p>
                  Ideally, as early as possible, even before construction or renovation begins.
                  Early involvement allows better spatial planning, cost efficiency, and energy
                  alignment.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How can I get in touch with Vasterior for a consultation?
                </h4>
                <p>
                  You can speak directly with our team by calling{" "}
                  <strong>+917906086899</strong>, or email us at{" "}
                  <a
                    href="mailto:info@spacebuild.com"
                    className="text-blue-600 hover:underline"
                  >
                    info@spacebuild.com
                  </a>{" "}
                  to begin your design journey.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="luxury-interior-designer-in-chandausi" />
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
