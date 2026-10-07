import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: "What Reviews Can and Cannot Tell You",
    intro:
      "Understanding the limits prevents overconfidence. Reviews guide your shortlist, but they cannot replace inspection.",
    points: [
      "They reveal behaviour, such as honesty and responsiveness.",
      "They hint at common problems, such as delays or seepage.",
      "They cannot confirm technical quality inside concrete or walls.",
      "They cannot prove that a company still has the same team.",
      "They may reflect personal mood, not just performance.",
      "They rarely mention costs in exact, comparable terms.",
    ],
  },
  {
    title: "Sort Comments Into Five Themes",
    intro:
      "Reading randomly leaves you with a blur of opinions. Sorting comments into themes shows where a company is strong or weak.",
    points: [
      "Timeline: was work finished near the promised date?",
      "Cost: did the final bill match the quotation?",
      "Workmanship: how did walls, floors and roofs look after a year?",
      "Communication: were calls answered and changes explained?",
      "After-handover care: were defects repaired without argument?",
    ],
  },
  {
    title: "Decoding Timeline Comments",
    intro:
      "Delay is the most common complaint in construction, so look closely at how it is described.",
    points: [
      "Note whether the delay was small or several months.",
      "See whether the owner changed the design during work.",
      "Check if the company warned about the delay early.",
      "Look for mentions of rain, labour shortage or material gaps.",
      "Observe whether the company compensated or explained.",
      "Notice if the same complaint repeats across clients.",
    ],
  },
  {
    title: "Decoding Cost Comments",
    intro:
      "Money disputes damage trust quickly. Cost comments are valuable when they include specifics.",
    points: [
      "Watch for words such as &quot;hidden charges,&quot; &quot;extra bills&quot; or &quot;rate changed.&quot;",
      "Check whether the owner added work after signing.",
      "Look for praise about itemised bills and receipts.",
      "Notice mentions of material brands matching the agreement.",
      "See whether the company explained price movement in writing.",
      "Be careful with comments that only say &quot;cheap&quot; or &quot;costly.&quot;",
    ],
  },
  {
    title: "Decoding Workmanship Comments",
    intro:
      "Quality problems often appear after the first monsoon. Prefer feedback written months after handover.",
    points: [
      "Mentions of cracks, damp patches or leaking roofs.",
      "Comments on straight walls, even plaster and clean finishing.",
      "Notes about doors, windows and tiles after daily use.",
      "Remarks on drainage, bathrooms and water tanks.",
      "Photographs showing close-up details.",
      "Reviews that mention the age of the building.",
    ],
  },
  {
    title: "Decoding Communication Comments",
    intro:
      "Communication style predicts how problems will be handled. Many owners rate this theme as highly as workmanship.",
    points: [
      "Quick responses to calls and messages.",
      "Clear explanation of technical decisions.",
      "Written confirmation of changes and costs.",
      "Honest warnings about delays or price changes.",
      "Respectful behaviour toward family and neighbours.",
      "Availability of a named supervisor.",
    ],
  },
  {
    title: "Decoding After-Handover Comments",
    intro:
      "Support after the key ceremony separates reliable firms from sales-driven ones. Few reviews mention it, so notice when they do.",
    points: [
      "Quick action on seepage and cracks.",
      "Fair handling of warranty claims.",
      "Return visits without repeated reminders.",
      "Clear contact for repairs.",
      "Help with extensions or small additions later.",
      "Willingness to correct mistakes without blame.",
    ],
  },
  {
    title: "Illustrative Comments and How to Read Them",
    intro:
      "The examples below are invented only to teach interpretation. They are not real feedback about any company.",
    points: [
      "&quot;Very good company, highly recommended.&quot; Too general. It offers no theme and no proof.",
      "&quot;Roof leaked in the first rains, but the team fixed it within a week and charged nothing.&quot; Specific, shows honest fault handling and supports after-handover care.",
      "&quot;They kept increasing the rate every month.&quot; Serious if repeated, though check whether the owner changed the plan.",
      "&quot;Finished two months late because we kept changing rooms, but the supervisor kept us updated.&quot; Balanced, and the delay seems partly the owner&apos;s.",
    ],
  },
  {
    title: "Read the Timeline of Reviews",
    intro:
      "When reviews were posted matters as much as what they say. A pattern over time tells a story.",
    points: [
      "Steady feedback across several years suggests a stable company.",
      "A sudden burst of praise within a few days looks suspicious.",
      "Recent complaints may signal falling standards.",
      "A long silence may mean the company slowed down or changed hands.",
      "Improvement after old complaints shows learning.",
      "Seasonal spikes may relate to rainy-season problems.",
    ],
  },
  {
    title: "Weigh the Reviewer, Not Just the Review",
    intro:
      "Different clients have different expectations. A fair reading considers who wrote the comment.",
    points: [
      "A small-budget renovation differs from a large villa.",
      "An owner who changed plans often may complain about delay.",
      "A first-time builder may misunderstand normal timelines.",
      "A very experienced owner may notice finer defects.",
      "Reviewers with other posted reviews appear more credible.",
      "Clients who mention names of site staff usually saw real work.",
    ],
  },
  {
    title: "Study How the Company Replies",
    intro:
      "A reply reveals attitude. Companies show their real character when facing criticism.",
    points: [
      "Calm, respectful tone without blaming the client.",
      "Specific response, not copy-pasted text.",
      "Offer to meet or solve the problem.",
      "Admission of mistakes where appropriate.",
      "Follow-up showing the issue was resolved.",
      "No threats, insults or public arguments.",
    ],
  },
  {
    title: "Recognise Unreliable Feedback",
    intro:
      "Not every review is honest. Some are written to promote, others to attack.",
    points: [
      "Repeated phrases across different profiles.",
      "Many reviews posted in a short time.",
      "Profiles with no history or photographs.",
      "Generic praise without any project detail.",
      "Extremely emotional attacks without facts.",
      "Comments that mention a competitor by name.",
      "Ratings far above or below the company&apos;s usual pattern.",
    ],
  },
  {
    title: "Confirm Reviews Through Offline Checks",
    intro:
      "Online words become reliable only after real-world confirmation. A few checks take little time.",
    points: [
      "Ask the company for addresses of reviewed projects.",
      "Visit those buildings and inspect walls, roofs and drains.",
      "Call owners, including some you find yourself.",
      "Ask material dealers about payment habits.",
      "Visit an ongoing site for safety and neatness.",
      "Compare what you see with what the reviews claim.",
    ],
  },
  {
    title: "Local Points Worth Looking For",
    intro:
      "Kashipur&apos;s climate and soil influence construction outcomes. Honest local reviews often mention these.",
    points: [
      "How roofs and bathrooms behaved during heavy rain.",
      "Dampness or mould in lower walls.",
      "Drainage around the plot during monsoon.",
      "Cracks after seasonal changes.",
      "Efficiency during fog or wet-weather delays.",
      "Understanding of local approval steps.",
    ],
  },
  {
    title: "Build a Simple Review Scorecard",
    intro:
      "Numbers help you compare firms without emotion. Create your own scorecard after reading feedback.",
    points: [
      "Timeline reliability.",
      "Cost transparency.",
      "Workmanship quality.",
      "Communication habits.",
      "After-handover support.",
      "Response to complaints.",
      "Consistency across time.",
    ],
  },
  {
    title: "If You Run a Construction Company: Earning Honest Reviews",
    intro:
      "Companies can improve trust ethically. Authentic feedback grows from good service, not pressure.",
    points: [
      "Ask satisfied clients to share experiences after handover.",
      "Never offer money or gifts in exchange for ratings.",
      "Do not write or buy reviews.",
      "Reply politely to every comment.",
      "Fix reported problems and update the client.",
      "Share real project photographs with permission.",
      "Keep contact details consistent across platforms.",
    ],
  },
];

const faqs = [
  {
    question: "How should I read construction company reviews?",
    answer:
      "Sort comments into timeline, cost, workmanship, communication and after-handover themes, then look for repeated patterns.",
  },
  {
    question: "Are star ratings enough?",
    answer:
      "No. Ratings are a quick summary. Written details, dates and the company&apos;s replies explain what the score means.",
  },
  {
    question: "How can I spot fake reviews?",
    answer:
      "Look for repeated wording, vague praise, new profiles and many reviews posted close together.",
  },
  {
    question: "Is one negative review a red flag?",
    answer:
      "Not alone. Check whether similar complaints repeat and how professionally the company responded.",
  },
  {
    question: "Why do review dates matter?",
    answer:
      "Dates reveal consistency, recent changes and whether feedback was written after the first monsoon.",
  },
  {
    question: "Should I call previous clients?",
    answer:
      "Yes. Calls give honest details that written comments often miss, especially about final cost and repairs.",
  },
  {
    question: "Can reviews guarantee quality?",
    answer:
      "No. They guide your shortlist, but site visits, documents and a written agreement remain essential.",
  },
  {
    question: "Can companies ask clients for reviews?",
    answer:
      "Yes, politely, after good service. Offering rewards or posting fake comments is unethical and risky.",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Kashipur Construction Company Reviews: Reading Between the Lines
            </h2>

            <p>
              A review is a short story told by someone who has already paid,
              waited and moved in. That makes it powerful. It also makes it
              incomplete, because the writer saw only one project from one
              angle, often on one emotional day.
            </p>

            <p>
              Think of reading a weather report for a month instead of a single
              afternoon. One cloudy comment means little, but a month of data
              reveals the climate. This guide shows how to decode Kashipur
              construction company reviews by theme, so scattered comments
              become a clear picture. Each section opens with a short idea,
              followed by points you can apply.
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
              Final Word on Kashipur Construction Company Reviews
            </h2>

            <p>
              Studying Kashipur construction company reviews works best when
              you read by theme, check timing, weigh the reviewer and confirm
              everything offline. Combine feedback with quotations, documents,
              site visits and a written agreement. The company that welcomes
              your questions and shows consistent proof is the one most likely
              to deliver.
            </p>

            <p>
              Next step: pick three companies, fill the five-theme sheet from
              their reviews, call two past clients each and visit one site this
              week. Add your company name, phone number, address and Google
              Maps link here.
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
                +919927611780
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