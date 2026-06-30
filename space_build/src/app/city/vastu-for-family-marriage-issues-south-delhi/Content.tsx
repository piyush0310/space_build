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
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 text-gray-900">
            Vastu for Family &amp; Marriage Issues in South Delhi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior understands something most people hesitate to say out loud: sometimes, even
              when love is present and intentions are good, harmony inside a home begins to quietly
              slip away. Conversations turn sharp, silence feels heavier, small disagreements repeat
              themselves, and slowly the home stops feeling like a place of emotional safety.
            </p>
            <p>
              If you are living in South Delhi and sensing that something feels off within your
              family or marriage, without a clear reason, this page is for you. Not to judge, not to
              scare, but to help you understand why it is happening and how it can be corrected.
            </p>

            {/* When relationships feel heavy */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              When Relationships Feel Heavy at Home
            </h3>
            <p>Family and marriage issues rarely explode overnight, they build quietly.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Repeated arguments over small things</li>
              <li>Emotional distance despite living together</li>
              <li>Constant irritation or misunderstanding</li>
              <li>A lack of warmth, intimacy, or patience</li>
              <li>Feeling drained the moment you enter your home</li>
            </ul>
            <p>
              What is confusing is that nothing seems wrong on the surface. The house is
              well-furnished, the lifestyle is comfortable, the family wants peace, yet the tension
              remains. This is where space psychology and MahaVastu intersect.
            </p>

            {/* How home affects dynamics */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Your Home Affects Family &amp; Marriage Dynamics
            </h3>
            <p>Homes are not neutral containers; they quietly influence relationships.</p>
            <p>They shape:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>How family members communicate</li>
              <li>How safe people feel expressing emotions</li>
              <li>How conflicts escalate or dissolve</li>
              <li>How closeness and respect are sustained</li>
            </ul>
            <p>
              In many South Delhi homes, relationship stress is linked to factors such as incorrect
              placement of bedrooms or beds, fire and water elements clashing emotionally, activity
              zones conflicting with rest zones, furniture layouts that block natural interaction,
              and spaces that overstimulate instead of calming. Over time, these imbalances show up
              as emotional friction, not as visible defects.
            </p>

            {/* Why common in South Delhi */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why This Is Common in South Delhi Homes
            </h3>
            <p>South Delhi homes often combine several challenging patterns:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Renovated interiors built on old structural logic</li>
              <li>Luxury design without deeper spatial alignment</li>
              <li>Apartments planned for convenience, not emotional flow</li>
            </ul>
            <p>
              Add to this high-pressure lifestyles, a mix of nuclear and joint family dynamics, and
              work stress carried back home, and the result is often a beautiful home that
              unintentionally amplifies tension instead of easing it.
            </p>

            {/* Vasterior approach */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Approach: MahaVastu, Not Myths
            </h3>
            <p>
              At Vasterior, we do not believe in fear-based Vastu, demolition-heavy solutions, or
              superstition.
            </p>
            <p>
              Our work is rooted in MahaVastu, a practical, non-destructive system that focuses on:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Directional logic</li>
              <li>Activity placement</li>
              <li>Emotional zoning</li>
              <li>Elemental balance</li>
              <li>Human movement and behaviour inside space</li>
            </ul>
            <p>We do not ask you to break your home; we realign how it supports you.</p>

            {/* How MahaVastu helps */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How MahaVastu Helps Heal Family &amp; Marriage Issues
            </h3>
            <p>When done correctly, MahaVastu works quietly but powerfully.</p>
            <p>Clients often experience:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Reduced arguments and emotional volatility</li>
              <li>Better communication between partners</li>
              <li>A calmer, softer home atmosphere</li>
              <li>Improved intimacy and mutual respect</li>
              <li>Emotional stability among children and elders</li>
            </ul>
            <p>
              These changes happen not because of objects, but because the home starts supporting
              human relationships instead of resisting them.
            </p>

            {/* Privacy and discretion */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Privacy, Discretion &amp; Sensitivity—Always
            </h3>
            <p>We understand that family and marriage concerns are deeply personal.</p>
            <p>Our consultations are:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Completely confidential</li>
              <li>Respectful of personal boundaries</li>
              <li>Free from judgment or assumptions</li>
              <li>Tailored to your family structure and lifestyle</li>
            </ul>
            <p>
              Whether it is a couple, a joint family, or a home going through transition, every case
              is approached with empathy and professionalism.
            </p>

            {/* When to consider consultation */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              When Should You Consider a Consultation?
            </h3>
            <p>You may want to explore MahaVastu if:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Conflicts feel repetitive and unresolved</li>
              <li>Peace at home feels temporary</li>
              <li>Emotional distance has grown silently</li>
              <li>Marriage feels strained without a clear cause</li>
              <li>You have tried many things but nothing sustains</li>
            </ul>
            <p>Often, the issue is not effort, it is environmental misalignment.</p>

            {/* Let’s talk */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let&apos;s Talk—Quietly and Clearly
            </h3>
            <p>
              If you feel your home needs a deeper emotional reset, a calm conversation can be the
              first step.
            </p>
            <p>
              You can speak directly with the Vasterior team by calling{" "}
              <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "}, where your concerns will be heard and you will be
              guided on whether a MahaVastu consultation is right for your situation.
            </p>
            <p>
              Alternatively, you can write to{" "}
              <a
                href="mailto:spacebuild.india@gamil.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gamil.com
              </a>{" "}
              to share your challenges in confidence and schedule a discreet discussion. No
              pressure, no fear tactics, just clarity.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQs)
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <span className="font-semibold">
                  Is Vastu really effective for marriage and family problems?
                </span>{" "}
                Yes, when practised correctly. MahaVastu works by correcting spatial and
                directional imbalances that influence emotional behaviour, communication, and stress
                patterns within a home.
              </li>
              <li>
                <span className="font-semibold">
                  Will I need to break or reconstruct my house?
                </span>{" "}
                No. Vasterior follows a non-destructive MahaVastu approach. Most corrections involve
                alignment, placement, and activity-based changes rather than demolition.
              </li>
              <li>
                <span className="font-semibold">Is this religious or ritual-based?</span> No.
                MahaVastu is not a religious practice, it is a spatial science rooted in logic,
                energy flow, and human psychology.
              </li>
              <li>
                <span className="font-semibold">How long does it take to see results?</span> Many
                clients notice emotional shifts within weeks. Deeper family dynamics may take
                longer, depending on the situation and consistency of alignment.
              </li>
              <li>
                <span className="font-semibold">Do you handle joint family homes?</span> Yes. We
                frequently work with joint families and multi-generational households, especially
                common in South Delhi, with full sensitivity to hierarchy and privacy.
              </li>
              <li>
                <span className="font-semibold">Is the consultation confidential?</span> Absolutely.
                All discussions, observations, and recommendations are handled with complete
                discretion.
              </li>
              <li>
                <span className="font-semibold">
                  Can this help if we have already tried counselling?
                </span>{" "}
                Yes. MahaVastu complements emotional and psychological work by correcting the
                environment in which those conversations and efforts take place.
              </li>
              <li>
                <span className="font-semibold">Do you offer online consultations?</span> Yes.
                Depending on the case, both on-site and online MahaVastu consultations are
                available.
              </li>
              <li>
                <span className="font-semibold">
                  How do I know if this is the right step for me?
                </span>{" "}
                Start with a conversation. You can call <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or email{" "}
                <a
                  href="mailto:spacebuild.india@gamil.com"
                  className="text-blue-600 hover:underline"
                >
                  spacebuild.india@gamil.com
                </a>
                , and you will be guided honestly, whether you choose to proceed or not.
              </li>
            </ol>

            {/* Final thought */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Final Thought
            </h3>
            <p>
              Sometimes, peace does not need another conversation, it needs the space to support
              that conversation. Vasterior is here when you are ready.
            </p>
          </div>

          <PostNavigation slug="vastu-for-family-marriage-issues-south-delhi" />
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
