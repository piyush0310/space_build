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
            Home Interior Decoration Services in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a home is not merely decorated, it is felt. Every colour, texture, object, and flow within a space carries emotion, memory, and energy. Through our bespoke home interior decoration services in Chandausi, we help homeowners transform ordinary houses into refined, balanced, and deeply personal living environments, spaces that support your lifestyle while quietly elevating your everyday experience.
            </p>
            <p>
              In a city like Chandausi, where homes are evolving rapidly yet remain rooted in family values, interior decoration requires more than trend-following. It demands sensitivity, intention, and an understanding of how people actually live within their spaces. That is where Vasterior's philosophy of timeless design and spatial harmony comes into play.
            </p>

            {/* Beyond Furniture */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Interior Decoration That Goes Beyond Furniture & Paint
            </h3>
            <p>
              For us, interior decoration is not about filling a home with expensive pieces or copying catalog looks. It is about layering meaning into space.
            </p>
            <p>
              True home interior decoration involves:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Understanding movement and circulation</li>
              <li>Balancing light, materials, and textures</li>
              <li>Creating visual calm without monotony</li>
              <li>Aligning décor with the home's natural energy and purpose</li>
              <li>Enhancing comfort without clutter</li>
            </ul>
            <p>
              At Vasterior, we approach decoration as a non-destructive, intelligent process, one that respects the existing structure of your home while elevating it through thoughtful design decisions.
            </p>

            {/* Signature Approach */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Signature Approach to Home Interior Decoration in Chandausi
            </h3>
            <p>
              Every Vasterior project begins with listening. We study how your home functions, how you use your spaces, and what you want to feel when you enter them.
            </p>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>
                <strong>Spatial Understanding & Mood Definition</strong>
                <br />
                We define the emotional tone of each space, calm, welcoming, energising, intimate, before selecting any décor elements.
              </li>
              <li>
                <strong>Furniture Styling & Layout Enhancement</strong>
                <br />
                Instead of overcrowding rooms, we refine furniture placement to improve flow, comfort, and visual balance.
              </li>
              <li>
                <strong>Material & Texture Layering</strong>
                <br />
                From fabrics and finishes to wood tones and accents, we curate materials that feel cohesive and timeless.
              </li>
              <li>
                <strong>Lighting as a Design Tool</strong>
                <br />
                Ambient, task, and accent lighting are used to shape moods and highlight architectural features.
              </li>
              <li>
                <strong>Décor & Object Curation</strong>
                <br />
                Art, mirrors, rugs, soft furnishings, and statement elements are selected with restraint and purpose.
              </li>
              <li>
                <strong>Vastu-Aligned Styling (Without Disruption)</strong>
                <br />
                Where required, décor choices are aligned with Vastu principles using colours, placements, materials, and activity alignment, without demolition or drastic changes.
              </li>
            </ol>

            {/* Spaces We Decorate */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Spaces We Decorate
            </h3>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Living Rooms
            </h4>
            <p>Designed to feel welcoming yet elegant, perfect for family time and guests alike.</p>
            
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Bedrooms
            </h4>
            <p>Personalised sanctuaries that support rest, comfort, and emotional calm.</p>
            
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Dining Areas
            </h4>
            <p>Balanced layouts that encourage conversation, warmth, and togetherness.</p>
            
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Kitchens
            </h4>
            <p>Functional yet visually light spaces where organisation and ease matter most.</p>
            
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Pooja & Spiritual Corners
            </h4>
            <p>Subtle, respectful designs that support focus and serenity without overpowering the home.</p>
            
            <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
              Balconies & Transitional Areas
            </h4>
            <p>Often overlooked spaces transformed into peaceful extensions of your home.</p>

            {/* Why Choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Homeowners in Chandausi Choose Vasterior
            </h3>
            <p>
              Clients approach Vasterior not just for decoration, but for clarity and confidence in their spaces.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A luxury yet understated design sensibility</li>
              <li>Personal attention and deep involvement in every project</li>
              <li>Respect for Indian homes and lifestyles</li>
              <li>Non-destructive, practical solutions</li>
              <li>Long-term functionality over short-term trends</li>
              <li>A calm, process-driven approach from start to finish</li>
            </ul>
            <p>We don't believe in loud design. We believe in design that quietly works.</p>

            {/* Who For */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Is This Service Ideal For?
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>New homeowners wanting a refined setup</li>
              <li>Families upgrading existing interiors</li>
              <li>Professionals seeking calm, organised homes</li>
              <li>Homeowners who value aesthetics with purpose</li>
              <li>Those who want elegance without overdoing it</li>
            </ul>

            {/* Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process: Simple, Structured, Intentional
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li>Initial Consultation – Understanding your needs, lifestyle, and expectations</li>
              <li>Design Direction – Mood, styling, and spatial intent</li>
              <li>Curation & Planning – Décor, materials, lighting, and furniture alignment</li>
              <li>On-Site Styling & Final Touches – Bringing everything together seamlessly</li>
            </ol>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Home Transformation with Vasterior
            </h3>
            <p>
              If you are looking for home interior decoration services in Chandausi that feel thoughtful, refined, and deeply personal, Vasterior would be delighted to guide you.
            </p>
            <p>
              A simple conversation is often the first step toward meaningful transformation. You can speak directly with our team at{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} to discuss your home and explore how subtle design changes can create a powerful impact. Alternatively, feel free to write to us at{" "}
              <a
                href="mailto:spacebuild.india@gmail.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gmail.com
              </a>
              , and we will help you begin the journey at your own pace.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What is included in home interior decoration services?
                </h4>
                <p>
                  Home interior decoration focuses on furniture styling, décor selection, lighting, materials, textures, and overall spatial harmony—without structural changes or demolition.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do you handle small decoration projects?
                </h4>
                <p>
                  Yes. We work on both full-home decoration and specific areas like living rooms, bedrooms, or balconies.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Is Vastu compulsory in your decoration services?
                </h4>
                <p>
                  No. Vastu alignment is optional and integrated subtly only if the client desires it.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Will my existing furniture be reused?
                </h4>
                <p>
                  Absolutely. Wherever possible, we refine layouts and enhance existing furniture rather than replacing it unnecessarily.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. Do you offer execution along with decoration?
                </h4>
                <p>
                  Yes, depending on the scope, we assist with execution, sourcing, coordination, and on-site styling.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How long does a typical decoration project take?
                </h4>
                <p>
                  Timelines vary based on scope, but most decoration projects are completed within a few weeks.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  7. Can I consult Vasterior before committing?
                </h4>
                <p>
                  Of course. You can call <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or email{" "}
                  <a
                    href="mailto:spacebuild.india@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    spacebuild.india@gmail.com
                  </a>{" "}
                  to schedule an initial discussion and understand the process better.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="home-interior-decoration-services-chandausi" />
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
