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
            Interior Designer in Delhi NCR
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <p>
              Vasterior is a leading Interior Designer in Delhi NCR, known for
              creating meaningful, luxurious, and intelligently planned spaces
              that blend aesthetics with functionality. With years of expertise
              in Residential, Commercial, Villa, and Vastu-aligned interiors,
              Vasterior stands as a trusted design studio for homeowners and
              businesses who aim for timeless design, modern comfort, and
              long-term value. Our work is driven by research, design
              psychology, spatial science, and deep attention to detail,
              ensuring every space reflects the client&apos;s lifestyle, energy,
              and aspirations.
            </p>

            <p>
              Delhi NCR is a region of evolving architecture, fast
              modernization, and diverse living styles. Every home and
              workspace demands a unique interior approach that enhances
              comfort, productivity, and visual harmony. Vasterior specializes
              in tailoring interiors that suit the climate, culture, and
              contemporary lifestyle of Delhi NCR, delivering spaces that are
              elegant, practical, and future-ready.
            </p>

            <p>
              Whether you are planning to build your dream home, redesign your
              office, or renovate an old space, Vasterior ensures smooth
              execution&apos; right from concept and 3D visualization to
              material planning, execution, and final styling.
            </p>

            {/* Why Choose */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Interior Designer in Delhi NCR?
            </h2>
            <p>
              Hiring an interior designer is more than choosing colors and
              furniture&apos; it involves planning, technical understanding,
              budget optimization, and design innovation. Vasterior offers a
              complete design-to-delivery solution with transparency, superior
              quality, and deep design expertise.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Customized Interior Solutions</strong> &ndash; Every
                space has a different purpose, user behavior, and energy
                pattern. Our team spends time understanding your lifestyle,
                requirements, and long-term goals to create interiors that are
                personalized, comfortable, and visually stunning.
              </li>
              <li>
                <strong>Mahavastu-Aligned Designs</strong> &ndash; Vasterior
                incorporates Mahavastu principles to promote harmony, balanced
                energies, and better well-being. From room positioning to
                element balancing, we design layouts that support growth and
                positivity.
              </li>
              <li>
                <strong>End-to-End Execution</strong> &ndash; Right from
                conceptual design, floor planning, 3D renders, material
                selection, carpentry, electrical, lighting design, and décor,
                we manage everything in-house for a seamless experience.
              </li>
              <li>
                <strong>Timeless Aesthetics with Smart Functionality</strong> &ndash; Our designs blend luxury with practicality. We focus on ergonomics,
                space optimization, storage innovation, and long-lasting
                materials suited for Delhi NCR&apos;s climate.
              </li>
              <li>
                <strong>On-Time Project Delivery</strong> &ndash; We follow a
                structured process and well-defined timelines, ensuring your
                project is completed without delays or hassles.
              </li>
              <li>
                <strong>Use of Premium &amp; Durable Materials</strong> &ndash; Every selection&apos; from laminates and stones to lights and
                fixtures&apos; is chosen for durability and elegance so your
                space remains beautiful for years.
              </li>
            </ul>

            {/* Services heading */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Interior Designing Services in Delhi NCR
            </h2>
            <p>
              Vasterior offers a wide range of services, catering to
              homeowners, commercial spaces, and hospitality projects across
              Delhi, Noida, Gurugram, Faridabad, and Ghaziabad.
            </p>

            {/* 1. Residential */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              1. Residential Interior Design
            </h3>
            <p>
              Your home is a reflection of your personality. We design warm,
              luxurious, and functional spaces that enhance lifestyle and
              comfort.
            </p>
            <p className="font-semibold">Residential Services Include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Living Room Interiors</li>
              <li>Modular Kitchens</li>
              <li>Bedroom &amp; Wardrobe Design</li>
              <li>Kids Room Themes</li>
              <li>Dining &amp; Family Lounge</li>
              <li>Foyers, Hallways &amp; Balcony Spaces</li>
              <li>Pooja Rooms with Vastu Alignment</li>
              <li>Full Home Renovation &amp; Remodeling</li>
            </ul>
            <p>
              We create homes that support well-being, positivity, and family
              bonding.
            </p>

            {/* 2. Luxury Villa */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              2. Luxury Villa Interior Design
            </h3>
            <p>
              Villas in Delhi NCR require a grand, space-rich, and aesthetic
              approach.
            </p>
            <p className="font-semibold">Our villa designs include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Double-height living spaces</li>
              <li>Large-scale custom furniture</li>
              <li>Statement lighting</li>
              <li>Natural stone accents</li>
              <li>High-end walk-in wardrobes</li>
              <li>Home theaters &amp; entertainment zones</li>
              <li>Landscape &amp; outdoor lounge design</li>
            </ul>
            <p>
              We specialize in creating luxurious yet comforting villa
              interiors with a modern, minimalist, or classical touch.
            </p>

            {/* 3. Commercial */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              3. Commercial Interior Design
            </h3>
            <p>
              Functionality is the foundation of commercial spaces. Vasterior
              creates designs that boost productivity, employee comfort, and
              customer experience.
            </p>
            <p className="font-semibold">Commercial Design Expertise:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Offices</li>
              <li>Corporate Spaces</li>
              <li>Showrooms &amp; Retail Stores</li>
              <li>Restaurants &amp; Cafés</li>
              <li>Clinics &amp; Wellness Spaces</li>
            </ul>
            <p>
              We optimize workflow, acoustics, lighting, and brand identity
              through smart design.
            </p>

            {/* 4. Mahavastu */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              4. Mahavastu Interior Planning
            </h3>
            <p>Modern design blends beautifully with ancient science.</p>
            <p className="font-semibold">Our Mahavastu services include:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Energy zone mapping</li>
              <li>Correct placement of furniture/elements</li>
              <li>Balancing the five elements</li>
              <li>Color and material alignment</li>
              <li>Layout corrections without structural changes</li>
            </ul>
            <p>
              We ensure your home or office supports harmony, productivity, and
              prosperity.
            </p>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process &ndash; How Vasterior Designs with Precision
            </h2>
            <p>
              To ensure transparency and clarity, we follow a structured
              workflow:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Step 1: Consultation &amp; Understanding</strong> &ndash; We discuss your preferences, needs, lifestyle, space limitations,
                and budget.
              </li>
              <li>
                <strong>Step 2: Site Visit &amp; Measurement</strong> &ndash; Our team takes accurate measurements and evaluates space behavior
                and natural light flow.
              </li>
              <li>
                <strong>Step 3: Concept Development</strong> &ndash; Based on your inputs, we create mood boards, themes, palette options, and
                initial layouts.
              </li>
              <li>
                <strong>Step 4: 3D Visualization</strong> &ndash; You receive realistic 3D renders for better decision-making.
              </li>
              <li>
                <strong>Step 5: Material Selection</strong> &ndash; We guide you through selecting finishes, stones, fabrics, lights, and décor
                items.
              </li>
              <li>
                <strong>Step 6: Execution &amp; Project Management</strong> &ndash; Our team supervises every stage through a well-coordinated
                system, ensuring premium finishing and timely completion.
              </li>
              <li>
                <strong>Step 7: Styling &amp; Handover</strong> &ndash; Final styling adds life to your space&apos; curtains, décor, art, and
                lighting touches.
              </li>
            </ul>

            {/* What Sets Apart */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Sets Vasterior Apart in Delhi NCR?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Strong Design Identity</strong> &ndash; We create
                interiors that blend global trends with local aesthetics
                suitable for Delhi NCR living.
              </li>
              <li>
                <strong>Space Optimization Experts</strong> &ndash; Even small
                apartments are transformed into spacious, functional homes.
              </li>
              <li>
                <strong>Client-Centric Approach</strong> &ndash; You stay
                involved through every stage, and your choices guide the final
                outcome.
              </li>
              <li>
                <strong>Transparent Pricing</strong> &ndash; No hidden costs.
                Every stage is structured and openly communicated.
              </li>
              <li>
                <strong>High Search Intent Based Expertise</strong> &ndash; We
                understand what Delhi NCR homeowners look for&apos; luxury,
                utility, comfort, and long-term durability.
              </li>
            </ul>

            {/* Trends */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Trends in Delhi NCR We Specialize In
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Modern Minimalist Interiors</li>
              <li>Contemporary Luxury Designs</li>
              <li>Indian Traditional Fusion</li>
              <li>European &amp; Scandinavian Styles</li>
              <li>Soft Neutral Palettes</li>
              <li>Smart Home Automation Interiors</li>
              <li>Sustainable &amp; Eco-Friendly Design</li>
              <li>High-End Stone &amp; Wood Finishes</li>
              <li>LED-Based Architectural Lighting</li>
            </ul>
            <p>
              These trends improve aesthetics and add high resale value to your
              property.
            </p>

            {/* Areas we serve */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Areas We Serve Across Delhi NCR
            </h2>
            <p>We offer full design and execution services across:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Delhi (South, East, West, Central, North)</li>
              <li>Noida &amp; Greater Noida</li>
              <li>Gurugram (All Sectors)</li>
              <li>Faridabad</li>
              <li>Ghaziabad &amp; Indirapuram</li>
            </ul>
            <p>
              No matter where you are in NCR, we bring our expertise to your
              doorstep.
            </p>

            {/* Call to action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Call the Best Interior Designer in Delhi NCR
            </h2>
            <p>
              If you want a space that looks elegant, feels balanced, and
              supports your lifestyle, Vasterior is here to design it with
              precision and passion.
            </p>
            <p>
              From luxury villas to compact homes, from offices to retail
              spaces&apos; your dream interior starts here.
            </p>
            <div className="space-y-1">
              <p>📞 +917906086899</p>
              <p>
                📩{" "}
                <a
                  href="mailto:spacebuild.india@gamil.com"
                  className="text-blue-600 underline"
                >
                  spacebuild.india@gamil.com
                </a>
              </p>
            </div>
            <p className="mt-2">
              Let Vasterior shape a space that reflects you.
            </p>
          </div>

          <PostNavigation slug="interior-designer-in-delhi-ncr" />
        </div>

        {/* Form Section - Smart positioning with CSS order */}
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
