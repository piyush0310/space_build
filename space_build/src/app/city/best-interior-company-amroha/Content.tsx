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
            Best Interior Company in Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Redefining Luxury Interiors in Amroha with Energy, Emotion &amp; Extraordinary
                Design.
              </p>
              <p>
                In the heart of Amroha, where tradition meets modern aspiration, Vasterior is
                quietly reshaping the way people experience their homes. We are more than
                designers; we are spatial storytellers, crafting interiors that feel luxurious,
                effortless, and deeply aligned with the people who live in them.
              </p>
              <p>
                Every home we design in Amroha becomes a statement of personality, intention, and
                the life the family wishes to manifest.
              </p>
              <p>
                When you walk into a Vasterior-designed space, you do not just see the design,
                you feel the balance, the warmth, the clarity. Every decision, from material and
                layout to light, color, and placement, is governed by luxury design principles,
                sound architectural logic, and subtle MahaVastu intelligence.
              </p>
              <p>
                This is what makes Vasterior the Best Interior Company in Amroha today.
              </p>
            </div>

            {/* Why Amroha chooses Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Amroha Chooses Vasterior
              </h3>
              <p className="mt-2">
                Amroha is evolving. Homes here are becoming more expressive, more global, and more
                conscious. People want interiors that look luxurious but also feel grounding,
                spaces that support success, relationships, peace, and creativity.
              </p>
              <p>
                Vasterior steps into this desire with a unique proposition: luxury with meaning,
                aesthetic with alignment, beauty with balance, and modernity with Vastu-conscious
                flow.
              </p>
              <p>
                Our clients in Amroha trust us because we do not deliver only furniture layouts or
                color palettes; we deliver transformation, the kind that changes how a person
                wakes up, works, relaxes, hosts, and lives every day.
              </p>
              <p>Luxury becomes effortless when design aligns with energy.</p>
            </div>

            {/* Signature services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Signature Interior Services in Amroha
              </h3>

              <h4 className="font-semibold text-gray-900 mt-4">
                1. Luxury Home Interior Design
              </h4>
              <p>
                Every home has a story, and our job is to bring that story alive through
                textures, materials, and thoughtful spatial flows.
              </p>
              <p>
                Whether it is a modern villa, an independent kothi, or a builder-floor, we create
                interiors that feel curated, artistic, and timeless.
              </p>
              <p>Expect:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Natural, luxurious materials</li>
                <li>Cohesive color palettes</li>
                <li>Designer lighting layers</li>
                <li>Bespoke furniture</li>
                <li>Calm, functional layouts</li>
              </ul>
              <p className="mt-2">Your home becomes a sanctuary.</p>

              <h4 className="font-semibold text-gray-900 mt-4">
                2. Bespoke Furniture &amp; Modular Solutions
              </h4>
              <p>Not all furniture carries intention; ours does. We design:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Bespoke beds</li>
                <li>Walk-in wardrobes</li>
                <li>Storage-efficient modular kitchens</li>
                <li>Floating TV units</li>
                <li>Sheesham and metal fusion pieces</li>
                <li>Luxury sofa sets</li>
              </ul>
              <p className="mt-2">
                Every element is crafted to look elegant and function effortlessly within your
                lifestyle.
              </p>

              <h4 className="font-semibold text-gray-900 mt-4">
                3. Spatial Flow Planning (Interior &times; Vastu Integration)
              </h4>
              <p>This is where Vasterior stands apart. We use the MahaVastu system to refine:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Activities</li>
                <li>Object placement</li>
                <li>Directional alignment</li>
                <li>Room utility</li>
              </ul>
              <p className="mt-2">
                But we do it in a way that feels scientific, modern, and non-superstitious. No
                fear language, no doomsday predictions, only pure logic, psychology, and energy
                alignment.
              </p>
              <p>
                The result is homes that flow naturally, emotionally, visually, and energetically.
              </p>

              <h4 className="font-semibold text-gray-900 mt-4">
                4. Living Room Makeovers
              </h4>
              <p>The living room is your home&apos;s first impression. We specialize in:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Elegant statement walls</li>
                <li>Plush furniture combinations</li>
                <li>Warm lighting</li>
                <li>Art-led styling</li>
                <li>Conversation-friendly layouts</li>
              </ul>
              <p className="mt-2">
                Your guests should feel the luxury the moment they enter.
              </p>

              <h4 className="font-semibold text-gray-900 mt-4">
                5. Bedroom Designs Grounded in Peace &amp; Energy
              </h4>
              <p>Bedrooms should heal you. We create bedroom spaces that feel:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Soft</li>
                <li>Private</li>
                <li>Restorative</li>
                <li>Emotionally warm</li>
              </ul>
              <p className="mt-2">
                From headboard designs to subtle Vastu-aligned color palettes, every detail
                supports restful sleep and personal harmony.
              </p>

              <h4 className="font-semibold text-gray-900 mt-4">
                6. Designer Wardrobes &amp; Storage Planning
              </h4>
              <p>
                Storage is not just a utility; it is architecture. Our wardrobes maximize space
                without sacrificing aesthetics.
              </p>
              <p>Expect:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Silent hardware</li>
                <li>Intelligent internal layouts</li>
                <li>Matte or high-gloss finishes</li>
                <li>Premium laminates</li>
                <li>Hidden niches and drawers</li>
              </ul>
              <p className="mt-2">Function meets luxury.</p>

              <h4 className="font-semibold text-gray-900 mt-4">
                7. Commercial Interiors in Amroha
              </h4>
              <p>
                For studios, offices, boutiques, and showrooms, we design spaces that inspire
                trust and reflect your brand identity.
              </p>
              <p>Our commercial interiors offer:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Clean, modern lines</li>
                <li>High-utility planning</li>
                <li>Visual merchandising clarity</li>
                <li>Strategic lighting</li>
                <li>Strong brand presence</li>
              </ul>
              <p className="mt-2">
                If your workspace needs to impress clients and energize your team, Vasterior is
                your partner.
              </p>

              <h4 className="font-semibold text-gray-900 mt-4">
                8. Renovation &amp; Refurbishment
              </h4>
              <p>
                Old homes in Amroha carry emotion but may lack modern functionality. We upgrade:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Layouts</li>
                <li>Kitchens</li>
                <li>Wardrobes</li>
                <li>Bathrooms</li>
                <li>Lighting</li>
                <li>Flooring</li>
                <li>False ceilings</li>
              </ul>
              <p className="mt-2">We maintain the soul while elevating the experience.</p>
            </div>

            {/* Vastu without fear */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vastu Without Fear: The Vasterior Way
              </h3>
              <p>
                Vastu is not about superstition; it is about psychology, comfort, purpose, and
                energy. Our approach is grounded, modern, and empowering.
              </p>
              <p>We offer:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Vastu Yogdaan (Every Wednesday - Free Consultation)</strong> – A social
                  initiative to help anyone with Vastu concerns, with zero charges and full
                  guidance.
                </li>
                <li>
                  <strong>Paid Vastu Consultation</strong> – For clients who want a complete
                  analysis of their home or to manifest a specific goal such as health, career,
                  relationships, stability, or peace.
                </li>
                <li>
                  <strong>Gridding, Drafting &amp; Survey</strong> – Mapping your home as per the
                  MahaVastu scientific grid to ensure accuracy and clarity.
                </li>
                <li>
                  <strong>Vastu Renovation Support</strong> – When a home needs structural changes
                  to realign its energy.
                </li>
                <li>
                  <strong>Interior &amp; Vastu Alignment</strong> – Our signature service, merging
                  energy with aesthetics.
                </li>
              </ul>
              <p className="mt-2">
                This holistic approach is what sets Vasterior apart and makes us the most trusted
                Vastu-aligned interior company in Amroha.
              </p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Design Process
              </h3>
              <p className="mt-2">A smooth, artistic, and transparent journey:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Discovery &amp; Intent Understanding</strong> – We begin by understanding
                  your lifestyle, aspirations, cultural values, and energy needs.
                </li>
                <li>
                  <strong>Concept Creation</strong> – Moodboards, material palettes, and visual
                  storytelling set the tone of your space.
                </li>
                <li>
                  <strong>Material Curation</strong> – Premium stones, woods, laminates, lighting,
                  and textiles selected with precision.
                </li>
                <li>
                  <strong>3D Visualization</strong> – See your future home in photorealistic
                  detail before execution.
                </li>
                <li>
                  <strong>Technical Drawings</strong> – RCP, electrical, plumbing, and furniture
                  construction drawings for flawless execution.
                </li>
                <li>
                  <strong>Procurement &amp; Execution Oversight</strong> – Coordination with
                  vendors, quality monitoring, and on-site alignment with design.
                </li>
                <li>
                  <strong>Spatial Flow Alignment</strong> – Final checks to ensure every zone
                  aligns aesthetically and energetically.
                </li>
              </ol>
              <p className="mt-2">
                The result is a home that feels luxurious, intelligent, and emotionally right.
              </p>
            </div>

            {/* Why Vasterior is best */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes Vasterior the Best Interior Company in Amroha
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>We blend luxury with purpose, not trends.</li>
                <li>We design for energy, not just aesthetics.</li>
                <li>Our designs feel international yet personal.</li>
                <li>We prioritize functionality and comfort.</li>
                <li>Transparent processes and honest execution.</li>
                <li>A team with dual expertise in interior design and MahaVastu.</li>
              </ul>
            </div>

            {/* Closing / CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Your Home in Amroha Deserves Meaning
              </h3>
              <p className="mt-2">
                A well-designed home is a luxury; a well-aligned home is a blessing. At Vasterior,
                you receive both.
              </p>
              <p>
                Whether you are building a new house, renovating an existing one, or seeking
                Vastu-guided interior planning, our team brings craftsmanship, clarity, and
                consciousness to every square inch.
              </p>
              <h4 className="font-semibold text-gray-900 mt-4">
                Transform Your Home into a Space of Luxury, Balance &amp; Meaning
              </h4>
              <p>
                If you are searching for the Best Interior Company in Amroha, you have already
                found it. Contact us today at <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or{" "}
                <a
                  href="mailto:spacebuild.india@gamil.com"
                  className="text-blue-600 hover:underline"
                >
                  spacebuild.india@gamil.com
                </a>
                . Your space is waiting. Let&apos;s design it with intention.
              </p>
            </div>
          </div>

          <PostNavigation slug="best-interior-company-in-amroha" />
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
