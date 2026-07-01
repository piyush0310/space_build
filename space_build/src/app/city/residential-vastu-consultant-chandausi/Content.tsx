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
            Residential Vastu Consultant in Chandausi
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Vasterior believes a home isn't just something you live in, it's something that quietly shapes your thoughts, decisions, relationships, and momentum in life. As a trusted Residential Vastu Consultant in Chandausi, Vasterior blends refined interior design with the scientific principles of MahaVastu to create homes that don't just look good, but work for you.
          </p>
          <p className="text-lg mb-8 text-gray-700">
            This is where spatial intelligence meets modern living, thoughtfully, practically, and without superstition.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* When a Home Feels Off */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                When a Home Looks Perfect but Still Feels Off
              </h3>
              <p className="mt-4">
                Many homeowners come to us with beautifully designed spaces, yet something doesn't click.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>A house that feels heavy despite tasteful interiors</li>
                <li>Repeated stress around health, finances, or peace of mind</li>
                <li>Renovations that improved aesthetics but not outcomes</li>
                <li>A constant feeling that the space is draining instead of supporting</li>
              </ul>
              <p className="mt-4">
                These issues often have less to do with décor, and more to do with how the space is aligned. That's where Vastu, when done right, changes everything.
              </p>
            </div>

            {/* Vasterior Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The Vasterior Approach: MahaVastu, Not Myths
              </h3>
              <p className="mt-4">
                At Vasterior, we follow MahaVastu, a modern, logical, and deeply researched system of spatial alignment. Unlike traditional Vastu that often relies on rigid rules or demolition-heavy corrections, MahaVastu focuses on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Directional energy balance</li>
                <li>Practical, non-invasive solutions</li>
                <li>Scientific reasoning over blind belief</li>
                <li>Alignment through layout, placement, colours, materials, and flow</li>
              </ul>
              <p className="mt-4">
                Most importantly, MahaVastu is integrated during the interior design process, not added as an afterthought. So your home doesn't just become compliant. It becomes coherent.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Residential Vastu Services in Chandausi
              </h3>
              <p className="mt-4">
                Vasterior offers end-to-end residential Vastu consultation, tailored to real homes and real lifestyles.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vastu for New Homes</h4>
                  <p>Strategic planning from the beginning, including room placements, entrances, kitchens, bedrooms, and pooja spaces, so your home starts aligned from day one.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vastu Correction for Existing Homes</h4>
                  <p>Already living in your space? We specialise in MahaVastu-based corrections that require minimal or no demolition, using intelligent design adjustments instead.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interior Layout & Furniture Alignment</h4>
                  <p>Often, the problem isn't the room, it's what's placed inside it. We optimise furniture positioning to improve flow, clarity, and comfort.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kitchen, Bedroom & Entrance Vastu</h4>
                  <p>These zones carry the strongest energetic impact. Our consultations focus heavily on correcting these areas without compromising usability or aesthetics.</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Design-Based Energy Balancing</h4>
                  <p>Colours, textures, lighting, materials, and spatial rhythm are used intentionally to bring balance, subtly, beautifully, and effectively.</p>
                </div>
              </div>
            </div>

            {/*SPACE BUILD */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Homeowners in Chandausi Choose Vasterior
              </h3>
              <p className="mt-4">
                Because we don't sell fear. We offer clarity.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Personalised consultations — no one-size-fits-all advice</li>
                <li>Zero unnecessary rituals or extreme recommendations</li>
                <li>A design-first mindset that respects your taste and lifestyle</li>
                <li>Clear explanations so you understand why something works</li>
                <li>Practical solutions aligned with modern homes and budgets</li>
              </ul>
              <p className="mt-4">
                We believe Vastu should empower you, not overwhelm you.
              </p>
            </div>

            {/* More Than Vastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                More Than Vastu. A Better Way to Live.
              </h3>
              <p className="mt-4">
                Vasterior works with the belief that your home should support your growth, not silently resist it. When spaces are aligned correctly, people often notice:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Better sleep and mental clarity</li>
                <li>Reduced friction in daily life</li>
                <li>Improved focus and productivity</li>
                <li>A calmer, more grounded home environment</li>
              </ul>
              <p className="mt-4">Not magic. Just intelligent design aligned with natural principles.</p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. What makes MahaVastu different from traditional Vastu?
                  </h3>
                  <p>
                    MahaVastu is a modern system based on directional energy balance and scientific logic. It avoids superstition and focuses on practical, explainable solutions that fit contemporary homes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do Vastu corrections require demolition or reconstruction?
                  </h3>
                  <p>
                    In most cases, no. Vasterior specialises in non-demolition or minimal-change corrections using layout adjustments, design elements, and placement strategies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Can Vastu be applied to already furnished homes?
                  </h3>
                  <p>
                    Absolutely. Existing homes are often easier to correct than people assume. Furniture alignment, colour balance, and directional adjustments can make a significant difference.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Will Vastu limit my interior design choices?
                  </h3>
                  <p>
                    Not at all. At Vasterior, design and Vastu work together. Aesthetic preferences are respected while ensuring the space remains energetically aligned.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. Is Vastu consultation only for people facing problems?
                  </h3>
                  <p>
                    No. Many homeowners consult us proactively, to enhance clarity, stability, and long-term harmony in their homes.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. How do I begin a consultation with Vasterior?
                  </h3>
                  <p>
                    You can start by having a quick discussion with our team over a phone call or by sharing basic details of your home via email. From there, we guide you through the next steps smoothly and transparently.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Ready to Align Your Home the Right Way?
              </h3>
              <p className="text-center mb-6">
                Sometimes, all it takes is one conversation to understand what your space has been missing. If you're considering a residential Vastu consultation in Chandausi, connecting with the Vasterior team can be your first step toward a more balanced home.
              </p>
              <div className="text-center space-y-3">
                <p>
                  📞 Call: <a href="tel:+917906086899" className="text-blue-600 hover:underline">+917906086899</a>
                </p>
                <p>
                  📧 Email: <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">spacebuild.india@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="residential-vastu-consultant-in-chandausi" />
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
