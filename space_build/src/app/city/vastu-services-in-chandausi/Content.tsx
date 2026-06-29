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
            Vastu Services in Chandausi by Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p className="text-lg mb-4">
                Vasterior believes that your space is never neutral, it's either supporting your life or silently working against it. That's why our Vastu services in Chandausi are designed not as rituals or quick fixes, but as deeply aligned, well-thought-out interventions using the powerful principles of MahaVastu, seamlessly integrated with modern interior design.
              </p>
              <p className="text-lg">
                We don't just correct spaces. We realign lives, calmly, practically, and with intention.
              </p>
            </div>

            {/* Spatial Imbalance */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                When Life Feels Stuck, Look at the Space Around You
              </h3>
              <p className="mt-4">
                Ever noticed how some homes feel peaceful the moment you step in, while others feel heavy for no obvious reason? Or how certain offices struggle despite effort, talent, and long hours?
              </p>
              <p className="mt-4">
                That's not coincidence. That's spatial imbalance. In today's fast-paced world, stress, financial instability, health issues, and relationship conflicts often trace back, not to effort, but to how our spaces are aligned.
              </p>
              <p className="mt-4">
                Vastu isn't superstition. It's spatial psychology, directional science, and energy flow working together. And when done right, it doesn't demand breaking walls or rebuilding your life.
              </p>
            </div>

            {/* MahaVastu Difference */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why MahaVastu Is Different (and Smarter)
              </h3>
              <p className="mt-4">
                Most people hesitate to explore Vastu because they fear demolition, disruption, or impractical advice. MahaVastu changes that narrative entirely.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Scientific and logic-driven, not fear-based</li>
                <li>Non-demolition focused, making it ideal for existing homes and offices</li>
                <li>Practical and results-oriented, with clear cause-and-effect reasoning</li>
                <li>Designed for modern lifestyles, not ancient living conditions</li>
              </ul>
              <p className="mt-4">
                At Vasterior, MahaVastu allows us to correct imbalances through layout optimization, interior placement, color psychology, elemental balance, and directional alignment—without turning your space upside down.
              </p>
            </div>

            {/* Vasterior Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The Vasterior Way: Where Interiors Meet Alignment
              </h3>
              <p className="mt-4">
                We don't treat interior design and Vastu as separate services. That's outdated. At Vasterior, both work together, because beauty without alignment feels hollow, and alignment without aesthetics feels forced.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Detailed spatial and directional analysis</li>
                <li>Understanding how you use the space daily</li>
                <li>Identifying stress points affecting growth, peace, or stability</li>
                <li>Designing subtle yet powerful corrections through interiors</li>
                <li>Ensuring changes feel natural, elegant, and sustainable</li>
              </ul>
              <p className="mt-4">
                The result? Spaces that don't just look good, but work for you.
              </p>
            </div>

            {/* Services Offered */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Vastu Services in Chandausi
              </h3>
              <p className="mt-4">
                We offer customized MahaVastu-based solutions for:
              </p>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Residential Spaces</h4>
                  <p className="mt-2">Homes, apartments, villas, whether you're facing health concerns, financial instability, or emotional unrest, we help restore balance without disrupting daily life.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Commercial & Office Spaces</h4>
                  <p className="mt-2">For offices, shops, and workspaces, our focus is on growth, clarity, decision-making, and financial flow, without compromising professional aesthetics.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">New Constructions</h4>
                  <p className="mt-2">Planning a new home or project? Early Vastu alignment saves years of correction later. We work alongside architects and designers to ensure alignment from day one.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Existing Properties</h4>
                  <p className="mt-2">Already built? No problem. MahaVastu thrives in existing structures through intelligent, non-invasive solutions.</p>
                </div>
              </div>
            </div>

            {/*SPACE BUILD */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Chandausi Chooses Vasterior
              </h3>
              <p className="mt-4">
                Because people don't want vague advice anymore. They want clarity. Logic. Results.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>A balanced blend of modern design and MahaVastu wisdom</li>
                <li>Honest, ethical guidance, no exaggeration, no fear tactics</li>
                <li>Solutions that respect your lifestyle, budget, and reality</li>
                <li>Deep understanding of local homes, workspaces, and needs in Chandausi</li>
              </ul>
              <p className="mt-4">
                We don't promise miracles. We promise alignment, and alignment changes everything.
              </p>
            </div>

            {/* CTA Conversation */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Let's Talk Before You Change Anything
              </h3>
              <p className="mt-4">
                If something in your space, or life, feels off, a simple conversation can bring more clarity than months of confusion. Many clients begin with a call, just to understand what might be working against them and what can be gently corrected.
              </p>
              <p className="mt-4">
                You can speak directly with the Vasterior team by calling{" "}
                <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                  +917906086899
                </a>
                , or if you prefer to explain your situation in detail, writing to{" "}
                <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                  info@spacebuild.com
                </a>{" "}
                is a great place to start. No pressure. Just clarity.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. Is MahaVastu different from traditional Vastu?
                  </h3>
                  <p>
                    Yes. MahaVastu is more scientific, practical, and modern. It focuses on non-demolition solutions and logical corrections rather than rituals or drastic changes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do I need to break walls or rebuild my home?
                  </h3>
                  <p>
                    No. One of the biggest advantages of MahaVastu is that most corrections can be done without demolition, using interior changes, placements, and directional alignment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Can Vastu really affect finances and mental peace?
                  </h3>
                  <p>
                    Absolutely. Your space influences focus, decision-making, sleep, stress levels, and productivity. Correct alignment improves flow, mentally and materially.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Is this only for homes?
                  </h3>
                  <p>
                    Not at all. Offices, shops, clinics, and commercial spaces often see faster and more visible results because of improved work energy and clarity.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. How long does it take to see results?
                  </h3>
                  <p>
                    Some clients feel changes almost immediately, while others notice gradual improvements over weeks. Results depend on the space, the issue, and the corrections applied.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. Do you provide services only in Chandausi?
                  </h3>
                  <p>
                    Chandausi is a key focus area, but consultations can also be extended beyond, depending on the project and requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Ready for Spaces That Work For You?
              </h3>
              <p className="text-center mb-6">
                Vasterior's Vastu services in Chandausi – where modern design meets timeless wisdom.
              </p>
              <div className="text-center space-y-3">
                <p>
                  📞 Call:{" "}
                  <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                    +917906086899
                  </a>
                </p>
                <p>
                  📧 Email:{" "}
                  <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                    info@spacebuild.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="vastu-services-in-chandausi" />
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
