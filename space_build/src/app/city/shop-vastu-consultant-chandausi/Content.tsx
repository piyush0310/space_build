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
            Shop Vastu Consultant in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p className="text-lg mb-4">
                Vasterior believes that when a space is aligned correctly, everything else begins to fall into place, your work, your growth, your peace of mind. As a premium interior design and Vastu consultancy rooted in the principles of MahaVastu, Vasterior helps homes, shops, and commercial spaces in Chandausi move from feeling "almost right" to powerfully aligned.
              </p>
              <p className="text-lg mb-4">
                This isn't about superstition. It's about structure, flow, energy, and design working together, beautifully and intelligently.
              </p>
            </div>

            {/* Interior Design Meets MahaVastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Where Interior Design Meets MahaVastu Intelligence
              </h3>
              <p className="mt-4">
                Most spaces look good on the surface. Few actually work for the people inside them.
              </p>
              <p className="mt-4">
                At Vasterior, interior design goes far beyond aesthetics. Every layout, placement, and spatial decision is guided by MahaVastu principles, ensuring your space doesn't just look premium, but supports clarity, prosperity, and stability in real life.
              </p>
              <p className="mt-4">
                Whether it's a retail shop that isn't converting the way it should, an office struggling with consistency, or a home that feels oddly unsettled, we decode what's happening beneath the surface, and realign it with intention.
              </p>
            </div>

            {/* MahaVastu for Shops */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                MahaVastu for Shops & Commercial Spaces in Chandausi
              </h3>
              <p className="mt-4">
                Your shop isn't just four walls and a shutter. It's an ecosystem.
              </p>
              <p className="mt-4">
                MahaVastu focuses on directional energies, element balance, and spatial psychology, without unnecessary demolition or heavy ritual dependency. For shops and commercial spaces, this means:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Improved customer flow and engagement</li>
                <li>Better decision-making and team harmony</li>
                <li>Reduced financial blocks and instability</li>
                <li>A calmer, more focused working environment</li>
              </ul>
              <p className="mt-4">
                In a growing market like Chandausi, where competition is real and margins matter, spatial alignment becomes a silent advantage.
              </p>
            </div>

            {/* What Makes Vasterior Different */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes Vasterior Different
              </h3>
              <p className="mt-4">
                Plenty of people talk about Vastu. Very few know how to integrate it with modern interiors.
              </p>
              <p className="mt-4">
                Vasterior stands at the intersection of design intelligence and energy alignment. Our approach is:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Practical, not preachy</li>
                <li>Customized, never copy-paste</li>
                <li>Aligned with modern lifestyles and businesses</li>
                <li>Rooted in MahaVastu—not diluted shortcuts</li>
              </ul>
              <p className="mt-4">
                We don't ask you to rebuild your space from scratch. We work with what you have, enhancing it thoughtfully and strategically.
              </p>
            </div>

            {/* Our Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Process: Clear, Structured, Effective
              </h3>
              <p className="mt-4">
                We keep things simple and intentional:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Consultation & Understanding</h4>
                  <p>We begin by understanding your space, purpose, challenges, and goals.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">MahaVastu Diagnosis</h4>
                  <p>Directional imbalances, energy blocks, layout inefficiencies, identified clearly.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Design & Alignment Strategy</h4>
                  <p>Interior recommendations blended seamlessly with MahaVastu corrections.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Guided Implementation</h4>
                  <p>Support throughout the alignment process so results actually show up in real life.</p>
                </div>
              </div>
              <p className="mt-4 font-semibold">
                No confusion. No overcomplication. Just clarity.
              </p>
            </div>

            {/* Trusted Consultant */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Trusted Vastu Consultant in Chandausi
              </h3>
              <p className="mt-4">
                Vasterior works closely with homeowners, shop owners, entrepreneurs, and professionals across Chandausi who want more than surface-level solutions. If you've tried "fixes" before and felt no real shift, this is where a deeper, more intelligent approach makes the difference.
              </p>
              <p className="mt-4 font-semibold">
                This is Vastu for people who think long-term.
              </p>
            </div>

            {/* CTA Text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Let's Align Your Space-The Right Way
              </h3>
              <p className="mt-4">
                If you feel your space could support you better, financially, emotionally, or professionally, it probably can.
              </p>
              <p className="mt-4">
                A simple conversation can reveal more than months of guessing. Many of our clients begin by reaching out for a consultation call on{" "}
                <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                  +917906086899
                </a>
                , while others prefer sharing details about their space over email at{" "}
                <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                  info@spacebuild.com
                </a>
                . Either way, the first step is clarity, and that's where alignment begins.
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
                    1. What is MahaVastu, and how is it different from traditional Vastu?
                  </h3>
                  <p>
                    MahaVastu is a modern, structured approach to Vastu that focuses on directional energy, balance, and correction without heavy demolition or rigid rituals. It's practical, logical, and results-driven.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do I need to redesign my entire shop or home?
                  </h3>
                  <p>
                    No. Most MahaVastu corrections work with your existing layout. The goal is alignment, not disruption.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Is MahaVastu suitable for small shops in Chandausi?
                  </h3>
                  <p>
                    Absolutely. In fact, small spaces often show faster, more noticeable results when aligned correctly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. How long does it take to see results?
                  </h3>
                  <p>
                    This varies based on the space and purpose, but many clients report noticeable shifts in flow, mindset, and outcomes within weeks of proper alignment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. Does Vasterior only work on commercial spaces?
                  </h3>
                  <p>
                    Not at all. Vasterior offers MahaVastu-aligned interior solutions for homes, offices, shops, and mixed-use spaces.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. How do I book a consultation?
                  </h3>
                  <p>
                    You can start by speaking directly with the Vasterior team via a call on{" "}
                    <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                      +917906086899
                    </a>
                    , or by emailing your query and space details to{" "}
                    <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                      info@spacebuild.com
                    </a>
                    . The process is simple and pressure-free.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Ready to Transform Your Space?
              </h3>
              <p className="text-center mb-6">
                When your shop works with you instead of against you, the results show up in your business, your clarity, and your growth.
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

          <PostNavigation slug="shop-vastu-consultant-in-chandausi" />
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
