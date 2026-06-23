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
            Trusted Vastu Expert in Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior is a trusted name in Vastu consultation for homes and businesses in Amroha, known for bringing balance, clarity, and alignment to spaces that truly matter. We believe Vastu is not about fear, demolition, or rigid rules, it is about understanding energy, intention, and flow, and aligning your space to support your life's growth, peace, and prosperity.
              </p>
              <p>
                In a world where spaces are built fast but lived in deeply, Vasterior offers thoughtful, ethical, and result-oriented Vastu guidance, rooted in traditional wisdom, refined through modern understanding, and applied with sensitivity to your lifestyle.
              </p>
            </div>

            {/* Trusted Expert */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Your Trusted Vastu Expert in Amroha
              </h3>
              <p>
                Finding the right Vastu expert is not just about knowledge, it is about trust. As a trusted Vastu expert in Amroha, Vasterior works closely with families, professionals, and business owners who want their spaces to support them, not restrict them.
              </p>
              <p>
                Our approach is calm, practical, and deeply personalized. We do not impose generic remedies or superstition-driven advice. Instead, we study your space, your concerns, and your goals, and guide you toward alignment that feels natural, achievable, and long-lasting.
              </p>
              <p>
                Whether you are building a new home, living in an existing one, or running a business space, Vasterior helps you understand how direction, placement, and flow influence daily life, often in ways we don't consciously notice.
              </p>
            </div>

            {/* Non-Destructive Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Thoughtful, Non-Destructive Approach to Vastu
              </h3>
              <p>One of the biggest concerns people have about Vastu is fear, fear of mistakes, fear of demolition, fear of expensive changes. At Vasterior, we strongly believe that true Vastu empowers, not frightens.</p>
              <p>Our consultations focus on:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Non-destructive and practical corrections</li>
                <li>Minimal, logical changes with maximum impact</li>
                <li>Subtle remedies that integrate seamlessly into your space</li>
                <li>Long-term balance rather than temporary fixes</li>
              </ul>
              <p>This makes our process especially suitable for existing homes, apartments, and running businesses in Amroha, where structural changes may not be possible or desired.</p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vastu Services Offered in Amroha
              </h3>
              <p>As a trusted Vastu consultant in Amroha, Vasterior offers a comprehensive range of services designed to support both personal and professional spaces.</p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-3">
                Residential Vastu Consultation
              </h4>
              <p>For independent houses, apartments, and villas, we help align:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Bedrooms, kitchen, pooja spaces, and living areas</li>
                <li>Health, relationships, peace of mind, and financial stability</li>
                <li>Energy flow without disturbing your daily life</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mt-6 mb-3">
                Commercial & Office Vastu
              </h4>
              <p>For offices, shops, clinics, and commercial establishments, we focus on:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Growth, stability, decision-making, and team harmony</li>
                <li>Correct placement of workstations, cabins, and entrances</li>
                <li>Aligning the space with business intent and expansion goals</li>
              </ul>

              <h4 className="font-semibold text-gray-900 mt-6 mb-3">
                Plot & Construction Vastu
              </h4>
              <p>Before construction begins, we assist with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Plot selection and orientation</li>
                <li>Layout planning aligned with Vastu principles</li>
                <li>Preventing long-term issues before they arise</li>
              </ul>
            </div>

            {/* Vastu + Interior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vastu with Interior Alignment
              </h3>
              <p>Vasterior uniquely blends Vastu with interior planning, ensuring that:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Design aesthetics and energy work together</li>
                <li>Furniture, materials, and layouts feel balanced and intentional</li>
                <li>Your space looks beautiful and feels right</li>
              </ul>
            </div>

            {/* Impact */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                How Vastu Alignment Impacts Your Life
              </h3>
              <p>
                A well-aligned space supports you quietly, every day. Clients often come to us with concerns they cannot fully explain, constant stress, blocked growth, disturbed sleep, or repeated setbacks.
              </p>
              <p>Vastu alignment can help bring:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>A sense of calm and emotional stability</li>
                <li>Better focus and clarity in decision-making</li>
                <li>Improved relationships within the family or team</li>
                <li>A feeling of grounding, confidence, and forward movement</li>
              </ul>
              <p>At Vasterior, we don't promise miracles. We promise clarity, honesty, and alignment, and let the space do the rest.</p>
            </div>

            {/* Why Choose */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Clients in Amroha Choose Vasterior
              </h3>
              <p>Clients across Amroha and nearby regions choose Vasterior because we combine knowledge with integrity.</p>
              <p>What sets us apart:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Deep respect for traditional Vastu, without rigidity</li>
                <li>Clear explanations, no jargon, no fear-based language</li>
                <li>Personalized guidance, not one-size-fits-all remedies</li>
                <li>A calm, respectful consulting process</li>
                <li>Alignment of space with real-life goals and challenges</li>
              </ul>
              <p>We work with discretion, sensitivity, and a strong ethical foundation, because your space is personal, and your trust matters.</p>
            </div>

            {/* Call to Action */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Consult a Trusted Vastu Expert in Amroha
              </h3>
              <p>
                If you are seeking a trusted Vastu expert in Amroha who listens, understands, and guides with clarity, Vasterior is here to help.
              </p>
              <p>
                Whether you are at the stage of confusion, curiosity, or readiness, a conversation is often the first step toward alignment.
              </p>
              <p>
                Call or WhatsApp at <strong>+917906086899</strong> or Email us at{" "}
                <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                  info@spacebuild.com
                </a>
              </p>
              <p>
                Reach out to schedule a consultation and begin the journey toward a space that supports your life, quietly, powerfully, and intentionally.
              </p>
              <p>
                <em>Vasterior - Aligning spaces with purpose, balance, and clarity.</em>
              </p>
            </div>
          </div>

          <PostNavigation slug="trusted-vastu-expert-in-amroha" />
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
