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
            Vastu Consultation Online in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p className="text-lg mb-4">
                Vasterior brings a refined, modern approach to Vastu consultation, designed for today's homes, workspaces, and lifestyles. Rooted in the practical wisdom of MahaVastu, our online Vastu consultation services in Chandausi focus on aligning your space with natural energies while preserving its design, functionality, and aesthetic intent.
              </p>
              <p className="text-lg mb-4">
                No fear-based remedies. No unnecessary demolition. Just intelligent spatial alignment that works with your interiors, not against them.
              </p>
              <p className="text-lg">
                In a world where spaces directly influence focus, finances, relationships, and well-being, Vasterior helps you transform your environment into a quiet support system for growth and balance.
              </p>
            </div>

            {/* Interior Design & MahaVastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Thoughtful Blend of Interior Design & MahaVastu
              </h3>
              <p className="mt-4">
                What sets Vasterior apart is our integrated approach. We don't treat Vastu as a separate, spiritual add-on. Instead, we weave MahaVastu principles directly into interior planning and spatial design.
              </p>
              <p className="mt-4">
                Every recommendation is:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Logically structured</li>
                <li>Design-sensitive</li>
                <li>Practical to implement</li>
                <li>Tailored to your existing or planned space</li>
              </ul>
              <p className="mt-4">
                Whether it's your home, office, retail outlet, or commercial property in Chandausi, our focus remains the same: energy alignment that feels natural, not forced.
              </p>
            </div>

            {/* Online Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Online Vastu Consultation - Designed for Modern Living
              </h3>
              <p className="mt-4">
                Distance should never limit clarity. Our online Vastu consultation process is structured to deliver the same depth, accuracy, and personalization as an on-site consultation-without the logistical hassle.
              </p>
              <p className="mt-4">How the Process Works:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mt-4">
                <li><strong>Initial Understanding</strong> – We begin with a detailed discussion about your space, concerns, and goals.</li>
                <li><strong>Plan & Layout Review</strong> – Floor plans, photographs, and directional details are carefully analysed.</li>
                <li><strong>MahaVastu Evaluation</strong> – Energy zones, directional imbalances, and functional placements are assessed.</li>
                <li><strong>Actionable Recommendations</strong> – Clear, practical suggestions that align with your interiors and lifestyle.</li>
                <li><strong>Design-Conscious Corrections</strong> – No disruption, only subtle realignments that enhance flow and harmony.</li>
              </ol>
              <p className="mt-4">
                The result is a space that feels calmer, more supportive, and purpose-driven.
              </p>
            </div>

            {/* Why MahaVastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why MahaVastu Works (Without the Myths)
              </h3>
              <p className="mt-4">
                MahaVastu is not about superstition, it's about spatial intelligence. Based on directional energies, natural elements, and functional zoning, it offers a structured framework for improving how a space performs.
              </p>
              <p className="mt-4">
                Unlike traditional Vastu approaches that rely heavily on rigid rules, MahaVastu is:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Flexible</li>
                <li>Result-oriented</li>
                <li>Adaptable to modern architecture</li>
              </ul>
              <p className="mt-4">
                It allows us to improve energy flow without sacrificing comfort, beauty, or practicality.
              </p>
            </div>

            {/* Who Benefits */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Who Benefits from Online Vastu Consultation?
              </h3>
              <p className="mt-4">
                Vasterior's online Vastu consultation in Chandausi is ideal for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Homeowners planning a new house or apartment</li>
                <li>Families experiencing stress, stagnation, or imbalance</li>
                <li>Business owners seeking growth and stability</li>
                <li>Offices aiming to improve productivity and decision-making</li>
                <li>Existing spaces that feel "off" but don't need structural changes</li>
              </ul>
              <p className="mt-4">
                If your space isn't supporting you the way it should, it's time to realign, not rebuild.
              </p>
            </div>

            {/* Philosophy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Spaces That Support You, Silently
              </h3>
              <p className="mt-4">
                A well-aligned space doesn't shout. It works quietly in the background, supporting better sleep, clearer thinking, healthier relationships, and steadier progress. That's the philosophy Vasterior brings to every consultation.
              </p>
              <p className="mt-4 font-semibold">
                Our role isn't to impose beliefs. It's to create spaces that feel right the moment you step into them.
              </p>
            </div>

            {/* CTA Text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Let's Begin with a Simple Conversation
              </h3>
              <p className="mt-4">
                Sometimes, clarity starts with a single discussion. Whether you're exploring options or already know something needs to change, a brief conversation can offer direction.
              </p>
              <p className="mt-4">
                Many clients prefer to start by speaking directly with our team over a quick call on{" "}
                <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                  +917906086899
                </a>
                , while others choose to share their space details via{" "}
                <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                  spacebuild.india@gamil.com
                </a>
                , whatever feels most comfortable.
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
                    1. Is online Vastu consultation as effective as on-site consultation?
                  </h3>
                  <p>
                    Yes. With accurate floor plans, images, and directional details, online Vastu consultation delivers precise and actionable insights—often with greater flexibility and convenience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do I need to break or rebuild parts of my home?
                  </h3>
                  <p>
                    No. Vasterior focuses on non-destructive, design-aligned solutions. Most MahaVastu corrections are subtle and easy to implement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. What types of spaces do you consult for?
                  </h3>
                  <p>
                    We offer online Vastu consultation for homes, offices, commercial spaces, retail outlets, and studios.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Is MahaVastu different from traditional Vastu Shastra?
                  </h3>
                  <p>
                    Yes. MahaVastu is more adaptable and logic-driven, making it suitable for modern layouts without rigid or outdated constraints.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. Can Vastu be aligned without changing interiors?
                  </h3>
                  <p>
                    Absolutely. Our approach ensures Vastu alignment enhances your interiors rather than compromises them.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. How do I get started?
                  </h3>
                  <p>
                    Simply reach out to Vasterior for an initial discussion. A short call or email is enough to understand whether a consultation is right for your space.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Ready to Realign Your Space?
              </h3>
              <p className="text-center mb-6">
                Online Vastu consultation with Vasterior – clarity delivered, wherever you are.
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

          <PostNavigation slug="vastu-consultation-online-in-chandausi" />
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
