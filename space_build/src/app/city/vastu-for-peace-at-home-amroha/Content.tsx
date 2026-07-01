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
            Vastu For Peace At Home in Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior believes that peace at home is not something you search for outside, it is something you design within. In the quiet moments of daily life, in the way light enters your home, in how spaces support rest, conversation, and clarity, peace either flows or feels blocked.
              </p>
              <p>
                Through our specialised MahaVastu consultation for homes in Amroha, we help families realign their living spaces so that calm, harmony, and emotional balance become a natural part of everyday life.
              </p>
              <p>
                A peaceful home is not about rituals or fear. It is about alignment, between space, energy, and the people who live within it.
              </p>
            </div>

            {/* Home Feels Heavy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                When a Home Feels Heavy, Life Feels the Same
              </h3>
              <p>
                Many homeowners sense something is off at home but cannot logically explain it. Despite a beautiful interior or a well-built house, there may be:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Constant restlessness or anxiety</li>
                <li>Frequent arguments or misunderstandings</li>
                <li>Disturbed sleep or lack of mental clarity</li>
                <li>A feeling of stagnation or emotional heaviness</li>
              </ul>
              <p>
                Vastu looks at these experiences not as problems, but as signals. Signals that certain areas of the home may not be supporting the natural flow of energy required for peace, stability, and emotional wellbeing.
              </p>
              <p>
                At Vasterior, we interpret these signals with sensitivity, logic, and modern understanding, never superstition.
              </p>
            </div>

            {/* Peace Is Alignment */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Peace Is an Outcome of Alignment, Not Coincidence
              </h3>
              <p>
                True peace at home emerges when spaces support how you live, think, rest, and connect with one another. MahaVastu focuses on aligning:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Activities with the right zones</li>
                <li>Elements (earth, water, fire, air, space) in balance</li>
                <li>Objects and layouts that support the mind and body</li>
                <li>Directional energies that influence emotions and relationships</li>
              </ul>
              <p>
                When these factors are aligned, peace becomes effortless. The home starts supporting you—rather than draining you.
              </p>
            </div>

            {/* Common Imbalances */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Common Vastu Imbalances Seen in Homes
              </h3>
              <p>
                In our consultations across North India, including homes in and around Amroha, we often notice patterns such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Bedrooms placed in zones that overstimulate the mind</li>
                <li>Kitchens positioned in conflict zones, affecting family harmony</li>
                <li>Entrances that create agitation instead of welcome</li>
                <li>Heavy storage or clutter blocking emotional flow</li>
                <li>Missing or misused calm zones meant for rest and reflection</li>
              </ul>
              <p>
                These are not faults, they are simply opportunities for correction. And most importantly, corrections do not require demolition.
              </p>
            </div>

            {/* Vasterior Approach */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                How Vasterior Brings Peace Through MahaVastu
              </h3>
              <p>
                Vasterior follows the MahaVastu system, a modern, non-destructive approach that blends ancient spatial wisdom with contemporary living.
              </p>
              <p>Our process is:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Logical and personalised - no generic remedies</li>
                <li>Non-invasive - no breaking, rebuilding, or panic</li>
                <li>Design-integrated - Vastu works with your interiors</li>
                <li>Emotion-focused - peace, clarity, and stability as outcomes</li>
              </ul>
              <p>
                We study your home as a living system, how you use it, how you feel in it, and how it can better support your life.
              </p>
            </div>

            {/* Area-Wise Guidance */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vastu for Peace - Area-Wise Guidance
              </h3>
              
              <h4 className="font-semibold text-gray-900 mt-6 mb-3">
                Bedrooms: Where the Mind Must Rest
              </h4>
              <p>
                Bedrooms influence sleep quality, emotional security, and relationships. Correct placement of the bed, head direction, colours, and object weight can significantly reduce anxiety, overthinking, and restlessness.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-3">
                Living Room: The Emotional Core of the Home
              </h4>
              <p>
                This is where family energy meets external energy. When aligned correctly, the living room supports open communication, warmth, and emotional bonding rather than tension or overstimulation.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-3">
                Kitchen: The Fire That Should Nourish, Not Burn
              </h4>
              <p>
                The kitchen governs nourishment, physical and emotional. Proper fire and water balance helps reduce irritability, health issues, and daily friction within the family.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-3">
                Entrance: Where Energy Enters First
              </h4>
              <p>
                The main door sets the tone for the entire home. A correctly aligned entrance welcomes calm, clarity, and positivity, instead of stress and chaos.
              </p>

              <h4 className="font-semibold text-gray-900 mt-6 mb-3">
                Puja or Meditation Space: The Anchor of Stillness
              </h4>
              <p>
                Even in modern homes, a correctly placed spiritual or quiet corner anchors peace and mental balance, regardless of personal belief systems.
              </p>
            </div>

            {/*SPACE BUILD */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Families in Amroha Choose Vasterior
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Deep understanding of modern Indian lifestyles</li>
                <li>Respect for aesthetic, comfort, and functionality</li>
                <li>Experience in both interior design and Vastu alignment</li>
                <li>A calm, conversational consulting approach</li>
                <li>Solutions that feel practical, dignified, and long-lasting</li>
              </ul>
              <p>
                We do not impose beliefs. We help you understand your space—so you can live better within it.
              </p>
            </div>

            {/* Peace Is Design Choice */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Peace Is Not a Luxury. It Is a Design Choice.
              </h3>
              <p>
                A peaceful home supports:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4 mb-4">
                <li>Better sleep</li>
                <li>Healthier relationships</li>
                <li>Mental clarity</li>
                <li>Emotional stability</li>
                <li>A sense of grounding after long days</li>
              </ul>
              <p>
                If your home feels restless, heavy, or emotionally draining, it may simply be asking for alignment, not change.
              </p>
            </div>

            {/* Call to Action */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Begin with a Conversation
              </h3>
              <p>
                If you are looking for Vastu for peace at home in Amroha, we invite you to start with a simple, honest conversation.
              </p>
              <p>
                You can speak directly with the Vasterior team at <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or write to us at{" "}
                <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">
                  spacebuild.india@gmail.com
                </a>
              </p>
              <p>
                Whether you seek clarity, correction, or quiet reassurance, we approach every home with respect, intention, and care.
              </p>
              <p>
                <em>Because when your space is at peace, life follows naturally.</em>
              </p>
            </div>
          </div>

          <PostNavigation slug="vastu-for-peace-at-home-in-amroha" />
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
