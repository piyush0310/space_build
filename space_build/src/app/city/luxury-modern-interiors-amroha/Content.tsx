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
            Luxury Modern Interiors in Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior redefines luxury modern interiors in Amroha by
              transforming homes into thoughtfully designed environments that
              reflect success, clarity, and refined living. Every space created
              is rooted in intention, where architecture, interiors, and energy
              align seamlessly to support the lifestyle of modern families,
              entrepreneurs, and visionaries shaping the city&apos;s future.
            </p>
            <p>
              In a place like Amroha, where tradition, aspiration, and growth
              coexist, luxury is no longer about ornamentation alone. It is
              about precision, comfort, flow, and quiet confidence. At
              Vasterior, homes are designed to feel contemporary yet timeless,
              expressive yet composed, luxurious yet deeply personal.
            </p>

            {/* Evolution */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Evolution of Modern Luxury Living in Amroha
            </h3>
            <p>
              Amroha is witnessing a subtle but powerful shift in residential
              design. Builder floors, independent villas, and premium homes are
              no longer treated as mere structures; they are becoming
              expressions of identity and achievement.
            </p>
            <p>Modern luxury interiors in Amroha today demand:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Clean architectural lines with warmth</li>
              <li>Thoughtful material palettes instead of visual excess</li>
              <li>
                Spaces that adapt to modern lifestyles without losing cultural
                grounding
              </li>
              <li>Homes that feel calm, balanced, and future-ready</li>
            </ul>
            <p>
              Luxury, in its truest form, is how a space makes you feel every
              single day. This is where Vasterior&apos;s approach stands apart.
            </p>

            {/* Philosophy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Design Philosophy: Modern, Meaningful, Aligned
            </h3>
            <p>
              At the heart of Vasterior lies a philosophy called Spatial Flow
              Consulting, a design approach that blends modern interior design
              with the science of MahaVastu, without superstition or fear-based
              narratives.
            </p>
            <p>Vasterior believes that:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A well-designed home should support clarity of thought</li>
              <li>
                Spaces should encourage ease, productivity, and emotional
                comfort
              </li>
              <li>Design should quietly work in your favour</li>
            </ul>
            <p>
              Integration of MahaVastu focuses on alignment, balance, and energy
              optimization, treated as design intelligence much like light,
              proportion, or ergonomics. The result is interiors that not only
              look refined but also feel right.
            </p>

            {/* Signature Elements */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Signature Elements of Our Luxury Modern Interiors
            </h3>
            <p>
              Every Vasterior project in Amroha is bespoke. There are no
              templates or repetition, each home is designed from the inside
              out.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Material Language
            </h4>
            <p>
              A restrained yet rich palette is curated using natural stones,
              warm woods, refined metals, textured finishes, and tactile
              fabrics. Materials are selected for longevity, comfort, and visual
              harmony.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Lighting as Architecture
            </h4>
            <p>
              Lighting is never an afterthought. Layered lighting, including
              ambient, task, and accent, is used to sculpt spaces, enhance
              materials, and set the emotional tone of each room.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Color Psychology
            </h4>
            <p>
              Neutral bases with thoughtfully chosen accents create calm yet
              character-driven interiors. Colours are selected based on spatial
              function, light behaviour, and emotional impact.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Spatial Zoning
            </h4>
            <p>
              Every square foot is optimized. Open plans feel expansive yet
              defined, while private areas feel cocooned without being heavy.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Custom Detailing
            </h4>
            <p>
              From bespoke furniture to tailored storage solutions, detailing is
              precise and intentional, designed to disappear into elegance.
            </p>

            {/* Spaces */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Spaces We Transform with Modern Luxury
            </h3>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Living Rooms
            </h4>
            <p>
              Designed as refined social spaces that are welcoming, composed,
              and expressive. Statement walls, layered textures, and balanced
              seating arrangements create a sense of quiet grandeur.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Modern Kitchens
            </h4>
            <p>
              Efficient, elegant, and clutter-free kitchens are crafted for
              modern families, where functionality meets aesthetic restraint and
              seamless workflow.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Master Bedrooms
            </h4>
            <p>
              Personal sanctuaries that promote rest and renewal through soft
              palettes, controlled lighting, acoustic comfort, and thoughtful
              layouts.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Home Offices &amp; Study Areas
            </h4>
            <p>
              Spaces that encourage focus, confidence, and productivity, ideal
              for business owners and professionals working from home.
            </p>

            <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
              Pooja &amp; Private Corners
            </h4>
            <p>
              Designed with sensitivity and modern sensibility so they remain
              clean, serene, and respectful without visual heaviness.
            </p>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process: Clarity, Precision, Trust
            </h3>
            <p>
              Luxury is also about how smoothly a project unfolds. The process
              is structured, transparent, and collaborative.
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>
                <strong>Consultation &amp; Understanding</strong> – Deep
                listening to lifestyle, aspirations, and concerns.
              </li>
              <li>
                <strong>Spatial Analysis &amp; Planning</strong> – Layouts,
                zoning, and circulation are studied to enhance flow and
                usability.
              </li>
              <li>
                <strong>Design Development</strong> – Mood boards, material
                palettes, and detailed design concepts are curated.
              </li>
              <li>
                <strong>Technical Detailing</strong> – Drawings,
                specifications, and coordination ensure design integrity.
              </li>
              <li>
                <strong>Execution Oversight (Where Applicable)</strong> –
                Design vision is translated accurately on site with attention to
                quality and detail.
              </li>
            </ol>
            <p>
              Throughout the journey, communication remains clear, calm, and
              professional.
            </p>

            {/* Why Vasterior */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Discerning Amroha Clients Choose Vasterior
            </h3>
            <p>
              Clients in Amroha choose Vasterior not just for design, but for
              confidence and alignment.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Bespoke, non-repetitive designs</li>
              <li>Deep understanding of modern luxury sensibilities</li>
              <li>Balanced integration of MahaVastu without superstition</li>
              <li>Transparent processes and professional documentation</li>
              <li>Long-term value creation over short-term trends</li>
            </ul>
            <p>
              Clients value design that grows with them, in homes that remain
              relevant, elegant, and emotionally grounding over time.
            </p>

            {/* Reimagined Luxury */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Luxury Interior Design in Amroha, Reimagined
            </h3>
            <p>
              As a luxury interior designer in Amroha, Vasterior brings a
              refined, contemporary perspective to residential interiors, one
              that respects heritage while embracing modernity. Whether it is a
              new villa, a builder floor, or a complete home transformation, the
              approach remains rooted in clarity, intention, and excellence.
            </p>
            <p>
              Modern home interiors in Amroha deserve more than visual appeal;
              they deserve intelligence, balance, and soul.
            </p>

            {/* CTA */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Journey with Vasterior
            </h3>
            <p>
              If you are looking for luxury modern interiors in Amroha that feel
              composed, intentional, and deeply personal, Vasterior invites you
              to begin a conversation. Let a space be designed that reflects who
              you are today and supports who you are becoming.
            </p>
            <p>
              Get in touch with our experts today at{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or{" "}
              <a
                href="mailto:spacebuild.india@gamil.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gamil.com
              </a>
              . Schedule a private consultation with Vasterior and experience
              modern luxury, aligned.
            </p>
          </div>

          <PostNavigation slug="interior-designer-in-amroha" />
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
