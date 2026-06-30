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
            Online Vastu Consultant in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p className="text-lg mb-4">
                Align Your Space. Elevate Your Life.
              </p>
              <p className="text-lg mb-4">
                Vasterior brings together thoughtful interior design and the proven principles of MahaVastu to help homes and workspaces in Chandausi feel lighter, calmer, and more aligned, without breaking your routine or your walls. If your space looks fine but feels off, this is where the shift begins.
              </p>
              <p className="text-lg">
                We don't believe Vastu is about fear or rigid rules. We believe it's about intelligent alignment, of energy, intention, and design, so your space starts supporting your growth instead of silently blocking it.
              </p>
            </div>

            {/* Why Online Vastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Online Vastu Consultation Actually Works
              </h3>
              <p className="mt-4">
                Let's clear this up:
              </p>
              <p className="mt-4">
                You don't need someone physically present to read your space accurately.
              </p>
              <p className="mt-4">
                Our online Vastu consultation is structured, personalised, and deeply effective. Using layouts, images, videos, and detailed interaction, we assess your home or office holistically, directional energies, room usage, entrances, interiors, and flow.
              </p>
              <p className="mt-4">
                What you get is not generic advice, but clear, actionable guidance you can apply immediately, often without demolition or expensive changes.
              </p>
              <p className="font-semibold">Convenient. Precise. Results-driven.</p>
            </div>

            {/* MahaVastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                MahaVastu: Subtle Changes. Serious Impact.
              </h3>
              <p className="mt-4">
                MahaVastu is not old-school Vastu repackaged. It's a refined, practical system that focuses on energy correction without destruction.
              </p>
              <p className="mt-4">
                Instead of telling you what's "wrong," MahaVastu shows how to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Correct imbalances with placement, colour, light, and intent</li>
                <li>Enhance prosperity, health, and mental clarity</li>
                <li>Improve relationships, focus, and decision-making</li>
                <li>Restore balance without altering your architecture</li>
              </ul>
              <p className="mt-4">
                At Vasterior, MahaVastu isn't an add-on, it's the backbone of how we approach every space.
              </p>
            </div>

            {/* Interior Design Meets Energy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Where Interior Design Meets Energy Alignment
              </h3>
              <p className="mt-4">
                Most spaces look good but don't feel good.
              </p>
              <p className="mt-4 font-semibold">That's where we come in.</p>
              <p className="mt-4">
                Vasterior integrates interior design and Vastu alignment so your space is not just aesthetically pleasing, but energetically supportive. Every recommendation respects your lifestyle, taste, and budget, while subtly correcting energy flow.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>No religious overtones.</li>
                <li>No unnecessary rules.</li>
                <li>Just intentional design that works.</li>
              </ul>
            </div>

            {/*SPACE BUILD */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Choose an Online Vastu Consultant in Chandausi?
              </h3>
              <p className="mt-4">
                Because local understanding matters, and so does modern delivery.
              </p>
              <p className="mt-4">
                With Vasterior, you get:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>A consultant who understands the lifestyle, homes, and workspaces of Chandausi</li>
                <li>The flexibility of online consultation without compromising depth</li>
                <li>Solutions that fit real lives, not textbook diagrams</li>
                <li>Guidance that is calm, logical, and easy to follow</li>
              </ul>
              <p className="mt-4">
                Whether you're in a new home, an existing property, or planning changes, online consultation lets you start now, not "someday."
              </p>
            </div>

            {/* Who It's For */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Who Is This Consultation For?
              </h3>
              <p className="mt-4">
                This service is ideal if you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Feel stuck despite doing "everything right"</li>
                <li>Are moving into a new home or office</li>
                <li>Want Vastu guidance without reconstruction</li>
                <li>Are renovating or redesigning interiors</li>
                <li>Own a business and want better stability and growth</li>
                <li>Simply want your space to feel lighter and more supportive</li>
              </ul>
              <p className="mt-4 font-semibold">
                If you're ready for clarity instead of confusion, you're in the right place.
              </p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Process: Simple, Personal, Effective
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4 mt-6">
                <li><strong>Initial Discussion</strong> – Understand your concerns, goals, and space</li>
                <li><strong>Detailed Analysis</strong> – Layouts, directions, interiors, energy flow</li>
                <li><strong>Personalised Guidance</strong> – Clear recommendations tailored to you</li>
                <li><strong>Implementation Support</strong> – We help you apply changes smoothly</li>
              </ol>
              <p className="mt-4 font-semibold">
                No jargon. No overwhelm. Just step-by-step alignment.
              </p>
            </div>

            {/* CTA Text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Let's Align Your Space-Gently and Intelligently
              </h3>
              <p className="mt-4">
                If you've been considering Vastu guidance but didn't want fear-based advice or extreme changes, this is your sign.
              </p>
              <p className="mt-4">
                A simple conversation can bring surprising clarity. Many clients prefer to begin with a direct call to understand whether this consultation is right for them, reaching out on{" "}
                <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                  +917906086899
                </a>{" "}
                is often the fastest way to get started. If you'd rather take it slow, a detailed note shared at{" "}
                <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                  spacebuild.india@gamil.com
                </a>{" "}
                works just as well.
              </p>
              <p className="mt-4">
                Either way, your space has something to say. We help you listen, and respond wisely.
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
                    1. What is an online Vastu consultation?
                  </h3>
                  <p>
                    An online Vastu consultation is a detailed assessment of your space conducted remotely using layouts, images, videos, and discussion. It delivers the same depth as an on-site visit, minus the inconvenience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do I need to break walls or rebuild my home?
                  </h3>
                  <p>
                    No. MahaVastu focuses on correction without demolition. Most solutions involve placement, colour, light, and subtle adjustments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Is MahaVastu different from traditional Vastu?
                  </h3>
                  <p>
                    Yes. MahaVastu is more flexible, practical, and suited to modern living. It prioritises results over rigid rules.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Can this work for rented homes or offices?
                  </h3>
                  <p>
                    Absolutely. Many recommendations are non-invasive and ideal for rented spaces.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. How long does it take to see results?
                  </h3>
                  <p>
                    Some clients notice changes almost immediately, mentally, emotionally, or energetically. Tangible outcomes vary based on consistency and intent.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. Is this service only for homes?
                  </h3>
                  <p>
                    Not at all. We consult for homes, offices, shops, clinics, and commercial spaces.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    7. How do I book a consultation?
                  </h3>
                  <p>
                    You can begin by speaking directly with our team over a call or by sending a detailed query via email. Both options allow us to guide you on the next best step.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Ready for Clarity in Your Space?
              </h3>
              <p className="text-center mb-6">
                Online Vastu consultation with Vasterior – where modern convenience meets ancient wisdom, delivered with clarity and care.
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
                  <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                    spacebuild.india@gamil.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="online-vastu-consultant-in-chandausi" />
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
