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
            Full Home Interior Design in South Delhi
            <br />
            Where Design Meets Energy. Where Homes Finally Feel Right.
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes a home should do more than look good, it should support your life. In a city 
              like South Delhi, where homes carry legacy, ambition, and emotion in equal measure, interior 
              design can’t be superficial. It needs intelligence, intention, and alignment. That’s exactly 
              where Vasterior steps in, creating full home interiors that blend refined aesthetics with 
              MahaVastu principles, so your space doesn’t just impress, it works for you.
            </p>

            {/* Full Home Interior, Done the Vasterior Way */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Full Home Interior, Done the Vasterior Way
            </h3>
            <p>
              At Vasterior, full home interior design means taking complete responsibility for how your home 
              looks, feels, and functions, inside and out, corner to corner.
            </p>
            <p>This includes:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Thoughtful space planning and layout optimization</li>
              <li>Custom furniture designed for your lifestyle</li>
              <li>Smart storage solutions that reduce visual and mental clutter</li>
              <li>Material, color, and lighting selections that feel calm yet elevated</li>
              <li>End-to-end execution with professional site supervision</li>
            </ul>
            <p>
              But here’s the difference most interior firms won’t talk about: every single design decision is 
              guided by MahaVastu alignment, not added later, not adjusted halfway, and never treated as an 
              afterthought.
            </p>

            {/* Why MahaVastu Is Not “Optional” Anymore */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why MahaVastu Is Not “Optional” Anymore
            </h3>
            <p>Most homes look fine on paper.</p>
            <p>Yet people complain about:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Restless sleep</li>
              <li>Constant irritation at home</li>
              <li>Financial instability despite hard work</li>
              <li>A space that feels heavy, even when it’s beautiful</li>
            </ul>
            <p>MahaVastu addresses this silently.</p>
            <p>At Vasterior, MahaVastu principles are used practically, without demolition or superstition.</p>
            <p>The focus is on:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Directional balance</li>
              <li>Energy flow</li>
              <li>Placement corrections</li>
              <li>Elemental harmony</li>
            </ul>
            <p>
              The result? Homes that feel calmer, lighter, and more supportive, without looking “traditional” 
              or compromised in design.
            </p>
            <p>
              This is where Vasterior stands apart: we don’t design homes and then fix energy. We design with 
              energy from the start.
            </p>

            {/* South Delhi Homes Need a Smarter Interior Approach */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              South Delhi Homes Need a Smarter Interior Approach
            </h3>
            <p>Designing for South Delhi isn’t the same as designing anywhere else.</p>
            <p>You’re dealing with:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Builder floors with layout limitations</li>
              <li>Renovations in older properties</li>
              <li>Compact plots that demand intelligent space usage</li>
              <li>High expectations for finish, longevity, and aesthetics</li>
            </ul>
            <p>
              Generic, Pinterest-inspired interiors simply don’t survive here.
            </p>
            <p>
              Vasterior approaches every South Delhi home as a custom project, not a template. The design 
              responds to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Your family structure</li>
              <li>Your daily routines</li>
              <li>The property’s orientation and energy grid</li>
              <li>Long-term comfort, not short-term trends</li>
            </ul>
            <p>
              Because a home in South Delhi isn’t just an address, it’s a statement of how you live.
            </p>

            {/* A Design Philosophy Rooted in Real Life */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              A Design Philosophy Rooted in Real Life
            </h3>
            <p>Vasterior doesn’t believe in designing homes for guests.</p>
            <p>We design for:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>How you wake up</li>
              <li>Where you pause during the day</li>
              <li>How you unwind at night</li>
              <li>How the space holds you during difficult seasons</li>
            </ul>
            <p>Our philosophy is simple:</p>
            <p>
              Homes should support the people living in them, emotionally, energetically, and practically.
            </p>
            <p>
              That’s why our clients often say the same thing months after moving in: “Nothing dramatic 
              changed. But everything feels easier.”
            </p>
            <p>
              That’s not coincidence. That’s alignment.
            </p>

            {/* Our Full Home Interior Process */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Full Home Interior Process (Clear, Calm, Controlled)
            </h3>
            <p>No chaos. No confusion. No last-minute surprises.</p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Initial Consultation
            </h4>
            <p>Understanding your home, lifestyle, and expectations.</p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Energy & Space Assessment
            </h4>
            <p>MahaVastu-based evaluation to guide layout and zoning decisions.</p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Design Concept & Planning
            </h4>
            <p>
              Visuals, material palettes, and spatial planning aligned with energy flow.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Detailed Execution Drawings
            </h4>
            <p>Precision matters, especially in full home interiors.</p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              On-Site Execution & Supervision
            </h4>
            <p>Quality control, timelines, and accountability handled by our team.</p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4">
              Final Styling & Handover
            </h4>
            <p>A home that’s ready to be lived in, not corrected later.</p>

            {/* Who Vasterior Is Right For */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Vasterior Is Right For
            </h3>
            <p>Vasterior is ideal for you if:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>You want full home interiors, not piecemeal décor</li>
              <li>You care about how your home feels, not just how it photographs</li>
              <li>You value long-term peace over short-term trends</li>
              <li>You want MahaVastu integrated intelligently, without dogma</li>
            </ul>
            <p>
              If you’re looking for quick fixes or surface-level styling, we’re probably not the right fit.
            </p>
            <p>
              And that’s intentional.
            </p>

            {/* Let’s Start With a Conversation */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let’s Start With a Conversation
            </h3>
            <p>
              If you’re exploring full home interior design in South Delhi and want clarity before committing, 
              a conversation is the best place to begin.
            </p>
            <p>
              You can speak directly with the Vasterior team by calling{" "}
              <strong>+917906086899</strong>, or if you prefer to put your thoughts down first, simply write 
              to{" "}
              <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                info@spacebuild.com
              </a>.
            </p>
            <p>
              No pressure, just an honest discussion about what your home actually needs.
            </p>
            <p>
              Because the right home doesn’t shout. It aligns.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              FAQs
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What does “Full Home Interior” include at Vasterior?
                </h4>
                <p>
                  It covers everything, from layout planning and custom furniture to materials, lighting, 
                  storage, and execution. The key difference is that all decisions are guided by MahaVastu 
                  principles from the start.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do you make structural changes for MahaVastu alignment?
                </h4>
                <p>
                  No. Vasterior follows non-demolition MahaVastu practices, using placement, orientation, 
                  color, and energy balancing techniques without breaking or rebuilding structures.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Is MahaVastu religious or traditional in appearance?
                </h4>
                <p>
                  Not at all. The design outcome remains modern, minimal, and refined. MahaVastu works at an 
                  energetic level, it doesn’t dictate aesthetics.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Do you only work in South Delhi?
                </h4>
                <p>
                  South Delhi is a strong focus due to the nature of properties here, but Vasterior also 
                  works on select projects beyond the area.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. How early should we involve Vasterior in a project?
                </h4>
                <p>
                  Ideally at the planning stage. MahaVastu is most effective when integrated from the 
                  beginning rather than corrected later.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How do I know if my home needs MahaVastu alignment?
                </h4>
                <p>
                  If your home feels restless, heavy, or misaligned despite good interiors, that’s usually a 
                  sign. A consultation helps identify this clearly.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  7. How do I get started?
                </h4>
                <p>
                  Start with a conversation. Call <strong>+917906086899</strong> or email{" "}
                  <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                    info@spacebuild.com
                  </a> to explore whether Vasterior is the right fit for your home.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="full-home-interior-design-south-delhi" />
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
