import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: "Defining 'Best' Before You Search",
    intro:
      "A clear definition saves time. Without one, you may choose the loudest advertiser instead of the most capable team.",
    points: [
      "Write down your property type: home, villa, shop or warehouse.",
      "Fix a realistic spending limit.",
      "Decide your preferred completion period.",
      "Note the quality level you expect for finishing.",
      "List special needs, such as a basement or parking floor.",
      "With these details on paper, every builder can be measured against the same yardstick.",
    ],
  },
  {
    title: "Core Qualities That Mark an Excellent Builder",
    intro:
      "Excellence shows in habits, not slogans. Look for consistent behaviour across projects.",
    points: [
      "Honest communication, including bad news.",
      "Strong structural knowledge backed by a qualified engineer.",
      "Respect for deadlines and written commitments.",
      "Neat, organised and safe working sites.",
      "Fair, itemised billing without hidden extras.",
      "Willingness to correct mistakes without argument.",
      "Good treatment of labourers and neighbours.",
      "A builder who displays these traits repeatedly deserves serious attention.",
    ],
  },
  {
    title: "Experience Counts, But Only When Verified",
    intro:
      "Years in business mean little without visible results. Experience should be provable, relevant and recent.",
    points: [
      "Ask how many projects resemble yours in size and style.",
      "Visit at least two finished buildings that are several years old.",
      "Check how walls, roofs and floors have aged.",
      "Speak with owners about problems faced after moving in.",
      "Confirm that the person you meet will personally supervise your site.",
      "Older buildings reveal what brand-new photographs cannot: durability.",
    ],
  },
  {
    title: "Technical Strength Behind the Scenes",
    intro:
      "Beautiful paint hides weak foundations. Technical competence decides whether your house stands safely for generations.",
    points: [
      "Soil testing before the foundation design.",
      "Structural drawings approved by an engineer.",
      "Correct reinforcement and concrete mix ratios.",
      "Earthquake-resistant detailing suitable for Uttarakhand.",
      "Proper waterproofing in roofs, toilets and underground tanks.",
      "Planned drainage for heavy Terai rainfall.",
      "Ask the builder to explain these steps in plain language. Confidence and clarity usually signal real knowledge.",
    ],
  },
  {
    title: "Material Standards and Supplier Honesty",
    intro:
      "Cheap shortcuts in materials create expensive repairs. The best builders are open about what goes into your walls.",
    points: [
      "Named brands for cement, steel, bricks and tiles.",
      "Delivery bills available for inspection.",
      "Storage of cement away from moisture.",
      "Willingness to show samples before bulk ordering.",
      "Tests for cube strength where appropriate.",
      "Written approval before any substitution.",
    ],
  },
  {
    title: "Transparent Pricing Without Surprises",
    intro:
      "Money is where trust is tested most. Clear numbers prevent arguments later.",
    points: [
      "Detailed quotation listing every work item.",
      "Separate rates for optional upgrades.",
      "Stated charges for drawings, approvals and testing.",
      "Written price for extra work beyond the plan.",
      "Honest explanation of why rates differ from competitors.",
      "Regular statements showing amounts spent.",
      "Beware of the lowest bidder. Extremely low quotes often return later as change orders and compromises.",
    ],
  },
  {
    title: "Design Support and Practical Planning",
    intro:
      "A good builder does more than stack bricks. Intelligent planning improves comfort and resale value.",
    points: [
      "Smart room placement for light and airflow.",
      "Efficient use of every square foot.",
      "Safe stair placement and generous ceiling height.",
      "Electrical points planned for modern appliances.",
      "Space for future expansion.",
      "Respect for local building rules and setbacks.",
      "Ask whether an architect or designer is part of the team or available through partners.",
    ],
  },
  {
    title: "Project Management and Site Discipline",
    intro:
      "Delays usually come from weak management, not bad luck. Organised builders plan labour and materials ahead.",
    points: [
      "Written timeline with stage-wise dates.",
      "Daily site supervisor with a known phone number.",
      "Weekly progress updates with photographs.",
      "Advance ordering of key materials.",
      "Contingency plans for rain and shortages.",
      "Clean handover with a defect list cleared.",
    ],
  },
  {
    title: "Reputation You Can Check Independently",
    intro:
      "Word of mouth remains powerful in a close community. Combine it with online research.",
    points: [
      "Read detailed reviews on map listings.",
      "Ask neighbours about their experience.",
      "Talk to shop owners who supply builders.",
      "Observe how the company replies to criticism.",
      "Search the company name for unresolved complaints.",
      "Compare feedback across different platforms.",
      "Consistent praise from independent sources is more convincing than a perfect score on one page.",
    ],
  },
  {
    title: "After-Sales Support and Warranty",
    intro:
      "Real quality continues after handover. Dependable builders stand behind their craft.",
    points: [
      "Written warranty for structure and waterproofing.",
      "Quick response to seepage or crack complaints.",
      "Clear contact person for repairs.",
      "Handover of drawings, bills and maintenance advice.",
      "Fair policy on defects found within the warranty period.",
      "Willingness to assist with future extensions.",
    ],
  },
  {
    title: "Comparing Builders Side by Side",
    intro:
      "A simple scorecard turns confusing impressions into fair judgement. Rate each shortlisted firm from one to five on these items.",
    points: [
      "Verified past work.",
      "Technical team strength.",
      "Quotation clarity.",
      "Material quality.",
      "Communication style.",
      "Timeline commitment.",
      "Warranty terms.",
      "Client references.",
      "Add the scores and discuss the totals with your family. Numbers keep emotion and sales talk in check.",
    ],
  },
  {
    title: "Mistakes That Lead to a Poor Choice",
    intro:
      "Many owners regret decisions made in a hurry. Avoid these familiar traps.",
    points: [
      "Selecting purely on price.",
      "Trusting verbal promises.",
      "Skipping site visits.",
      "Ignoring land ownership verification.",
      "Paying large advances early.",
      "Changing the plan repeatedly during construction.",
      "Neglecting to read the agreement.",
    ],
  },
  {
    title: "Local Factors That Affect Quality",
    intro:
      "Place shapes construction decisions. A builder who understands Kashipur's conditions makes wiser choices.",
    points: [
      "Humid air demands good ventilation and damp control.",
      "Monsoon scheduling affects excavation and plastering.",
      "Plot levels near roads influence drainage design.",
      "Growing industrial zones raise demand for labour.",
      "Neighbouring forest belts may call for special insect and moisture care.",
      "Seasonal fog can slow outdoor finishing.",
      "Local awareness separates a practical builder from a generic one.",
    ],
  },
  {
    title: "Making the Final Decision",
    intro:
      "After research, pause and review everything calmly. A confident choice rests on facts, not pressure.",
    points: [
      "Re-read all quotations and agreements.",
      "Visit the top two sites once more.",
      "Confirm payment stages in writing.",
      "Check that every promise appears in the contract.",
      "Trust the team that answers questions most openly.",
      "Sign only when every clause is understood.",
    ],
  },
];

const faqs = [
  {
    question: "Who is the best builder in Kashipur?",
    answer:
      "No official ranking exists. The best choice is the one with verified work, clear pricing and strong client feedback for your project type.",
  },
  {
    question: "How do I check a builder's quality?",
    answer:
      "Visit completed and ongoing sites, inspect older buildings and speak directly with previous owners.",
  },
  {
    question: "Should I pick the cheapest builder?",
    answer:
      "Not automatically. Very low quotes often hide weak materials or later extra charges.",
  },
  {
    question: "What should a good quotation include?",
    answer:
      "It should list every work item, material brand, extra-work rate, approval charges and validity period.",
  },
  {
    question: "Is a written agreement necessary?",
    answer:
      "Yes. It records scope, price, schedule, warranty and dispute handling, protecting both sides.",
  },
  {
    question: "How can I avoid construction delays?",
    answer:
      "Choose an organised builder, fix a staged timeline in writing and plan around the monsoon.",
  },
  {
    question: "Does the best builder offer a warranty?",
    answer:
      "Reliable firms usually give written cover for structure and waterproofing. Confirm the duration before signing.",
  },
  {
    question: "How many builders should I compare?",
    answer:
      "Compare at least three. That gives a fair view of pricing, communication and quality.",
  },
];

const Content: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Best Builder in Kashipur: What the Title Really Means
            </h2>

            <p>
              Everyone wants the best builder in Kashipur, yet no official
              ranking exists. Any company calling itself number one is making a
              marketing claim, not stating a verified fact. The best builder for
              your neighbour may be wrong for your plot, budget or taste.
            </p>

            <p>
              So the smarter question is this: which builder is best for my
              project? This guide helps you answer it using evidence, comparison
              and common sense. Every section begins with a short idea, then
              lists points you can apply immediately.
            </p>

            {sections.map((section) => (
              <section key={section.title} className="space-y-5">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>

                <p>{section.intro}</p>

                <ul className="list-disc pl-6 space-y-2">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Final Word on Choosing the Best Builder in Kashipur
            </h2>

            <p>
              The best builder in Kashipur is not a title awarded by
              advertising; it is a reputation earned through honest pricing,
              sound engineering and reliable delivery. Define your needs, verify
              proof, compare carefully and insist on written clarity. Patience
              at this stage protects your money and your peace of mind for
              decades.
            </p>

            <p>
              Ready to move forward? Shortlist three firms, inspect their live
              sites and request itemised written estimates this week. Add your
              company name, phone number, address and Google Maps link here.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQ)
            </h2>

            <div className="mt-6 space-y-6">
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    {index + 1}. {faq.question}
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>

            <p>
              📞 <strong>WhatsApp / Call:</strong>{" "}
              <a
                href="tel:+919927611780"
                className="text-blue-600 hover:underline"
              >
                +91 99276 11780
              </a>
              <br />
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:spacebuild.india@gmail.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gmail.com
              </a>
              <br />
              🌐 <strong>Website:</strong>{" "}
              <a
                href="https://www.spacebuild.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.spacebuild.co.in
              </a>
            </p>
          </div>
        </div>

        <div className="ml-auto w-full p-4 lg:w-[42%] lg:pl-10">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;