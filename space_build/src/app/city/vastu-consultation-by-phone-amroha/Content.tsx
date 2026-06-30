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
            Vastu Consultation by Phone in Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that true Vastu guidance is not limited by
              distance, it is guided by intent, understanding, and expertise.
              Our Vastu Consultation by Phone in Amroha is designed for
              individuals and families who seek clarity, balance, and alignment
              in their homes or workplaces, without the need for physical
              visits. Through a calm, structured, and deeply personalized phone
              consultation, we help you realign your space with principles that
              support peace, prosperity, and long-term wellbeing.
            </p>

            {/* Why Phone-based */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Phone-Based Vastu Consultation in Amroha?
            </h2>
            <p>
              Living in a growing city like Amroha often means limited time and
              increasing responsibilities. A phone-based Vastu consultation
              allows you to receive expert guidance from the comfort of your
              home, while still benefiting from a structured and professional
              process.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ideal for homes, shops, offices, plots, and rental properties</li>
              <li>No travel or scheduling stress</li>
              <li>
                Clear, actionable guidance shared verbally and followed up where
                needed
              </li>
              <li>Personal interaction with an experienced Vastu expert</li>
              <li>Suitable for both existing spaces and new properties</li>
            </ul>
            <p>
              This format works especially well for clients who want clarity
              first, before deciding on deeper interventions.
            </p>

            {/* What Is Phone Consultation */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Is a Vastu Consultation by Phone?
            </h2>
            <p>
              A phone Vastu consultation is a guided, one-on-one session where
              our expert studies your space using the information you share,
              such as layout details, directions, room usage, and concerns,
              followed by intuitive and logical Vastu analysis.
            </p>
            <p>During the call, we help you understand:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>How energy flows within your space</li>
              <li>Which zones may be supporting or blocking growth</li>
              <li>What subtle corrections or alignments can bring balance</li>
              <li>How to improve harmony without unnecessary changes</li>
            </ul>
            <p>
              The focus is always on practical, non-destructive, and thoughtful
              guidance.
            </p>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How the Consultation Process Works
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Initial Connection</strong> – You reach out to us to
                book a phone consultation at a convenient time.
              </li>
              <li>
                <strong>Understanding Your Space &amp; Concerns</strong> – We
                listen carefully, whether your focus is health, finances,
                relationships, peace of mind, or business growth.
              </li>
              <li>
                <strong>Vastu Analysis &amp; Guidance</strong> – Based on
                directions, activities, and spatial usage, we offer clear
                explanations and recommendations.
              </li>
              <li>
                <strong>Actionable Takeaways</strong> – You leave the call with
                clarity, direction, and confidence about the next steps for your
                space.
              </li>
            </ol>

            {/* Who Is It For */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Is This Consultation For?
            </h2>
            <p>Our phone-based Vastu consultation in Amroha is ideal for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Homeowners seeking peace and stability</li>
              <li>Families facing recurring challenges without clear reasons</li>
              <li>
                Business owners wanting better focus, growth, and decision-making
              </li>
              <li>Individuals planning renovations or property purchases</li>
              <li>
                People who value guidance but prefer simplicity and discretion
              </li>
            </ul>

            {/* Why Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior?
            </h2>
            <p>
              Vasterior brings together Vastu wisdom and spatial intelligence
              with a modern, human-centric approach. We do not believe in
              fear-driven advice or forced changes. Our consultations are rooted
              in understanding, clarity, and respect for both tradition and
              contemporary lifestyles.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ethical, non-invasive Vastu guidance</li>
              <li>Experience across residential and commercial spaces</li>
              <li>Calm, structured, and confidential consultations</li>
              <li>Focus on long-term harmony, not quick fixes</li>
            </ul>
            <p>
              Every recommendation is made with intention, keeping your comfort,
              beliefs, and lifestyle at the center.
            </p>

            {/* CTA */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Book Your Vastu Consultation by Phone in Amroha
            </h2>
            <p>
              If you are looking for thoughtful Vastu guidance without
              complexity, a phone consultation is the perfect place to begin.
            </p>
            <p>
              You can speak directly with our team and schedule your session by
              calling <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or by writing to us at{" "}
              <a
                href="mailto:spacebuild.india@gamil.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gamil.com
              </a>
              .
            </p>
            <p className="mt-4 font-semibold text-gray-900">
              Whether you are seeking answers, reassurance, or direction,
              Vasterior is here to guide you, one meaningful conversation at a
              time. Vasterior – Aligning Spaces with Clarity, Balance, and
              Purpose.
            </p>
          </div>

          <PostNavigation slug="vastu-consultation-by-phone-in-amroha" />
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
