import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: "Why Reviews Influence Construction Decisions",
    intro:
      "Construction is expensive, slow and hard to undo. Feedback from earlier owners reduces the uncertainty.",
    points: [
      "Reviews reveal how a builder behaves under pressure.",
      "They show whether promised timelines were respected.",
      "They highlight billing honesty or surprise charges.",
      "They expose how complaints are handled after handover.",
      "They help you compare firms that look identical on paper.",
      "A review is a window into real experience, which makes it more valuable than a polished brochure.",
    ],
  },
  {
    title: "Places Where You Can Find Feedback",
    intro:
      "No single platform tells the full story. Gathering opinions from several places gives a balanced picture.",
    points: [
      "Map listings with ratings and photos.",
      "Social media pages and community groups.",
      "Local classified and directory websites.",
      "Video testimonials on the company page.",
      "Conversations with neighbours who built recently.",
      "Chats with material suppliers and site workers.",
      "Discussions on property forums.",
      "When different sources repeat the same praise or complaint, treat it as reliable information.",
    ],
  },
  {
    title: "Understanding Star Ratings Properly",
    intro:
      "Stars are a quick summary, not a verdict. The number alone can mislead.",
    points: [
      "A perfect score with very few ratings proves little.",
      "A slightly lower score across many reviews often looks more honest.",
      "Compare the rating against the total number of reviews.",
      "Check how recent the latest feedback is.",
      "Look at the spread between five-star and one-star ratings.",
      "Read the written comments, because they explain what the numbers mean.",
    ],
  },
  {
    title: "Signs of Genuine Reviews",
    intro:
      "Real clients write in distinct voices. Their comments contain small details that outsiders would not know.",
    points: [
      "Mention of specific work, such as a roof, kitchen or boundary wall.",
      "References to dates, delays or particular site staff.",
      "A mix of praise and minor criticism.",
      "Different writing styles across reviewers.",
      "Photos taken at the actual property.",
      "Reviewers who have posted about other places as well.",
      "Authentic feedback feels human, imperfect and specific.",
    ],
  },
  {
    title: "Signs of Fake or Paid Reviews",
    intro:
      "Some companies buy praise to look better than they are. Learn the warning signals to protect your money.",
    points: [
      "Many reviews posted within a few days.",
      "Repeated phrases or nearly identical sentences.",
      'Very general comments like "excellent service" with no detail.',
      "Reviewer profiles with no history or photos.",
      "Sudden jumps in rating after a long quiet period.",
      "Aggressive attacks on competitors in the comment section.",
      "If a profile looks suspicious, search deeper before trusting it.",
    ],
  },
  {
    title: "How to Read Negative Reviews",
    intro:
      "Bad reviews are not always a reason to reject a builder. What matters is the nature of the complaint and the response.",
    points: [
      "Separate genuine quality problems from personal disputes.",
      "Notice whether complaints repeat across different clients.",
      "Check if the issue involved delay, cost, workmanship or behaviour.",
      "Read the builder's reply for tone and accountability.",
      "See whether the problem was eventually solved.",
      "Consider how old the complaint is.",
      "A calm, respectful reply that offers a solution often shows maturity.",
    ],
  },
  {
    title: "Patterns Worth Noticing",
    intro:
      "Individual comments are stories, but patterns are evidence. Look for themes that appear again and again.",
    points: [
      "Frequent praise for honest pricing.",
      "Repeated mention of on-time handover.",
      "Consistent complaints about hidden charges.",
      "Regular comments about poor communication.",
      "Several notes on seepage after the first rainy season.",
      "Frequent appreciation for after-sales support.",
      "Three similar comments from unconnected people carry more weight than one dramatic story.",
    ],
  },
  {
    title: "Questions Reviews Should Help You Answer",
    intro:
      "Treat review reading as research with a purpose. Keep a checklist while you browse.",
    points: [
      "Was the final cost close to the original estimate?",
      "Did the team finish within the agreed period?",
      "How good was the quality after one year?",
      "Was the supervisor reachable and responsive?",
      "Were materials the same as promised?",
      "How did the builder solve mistakes?",
      "Would clients recommend the same team to relatives?",
      "If reviews leave several of these questions unanswered, ask the builder directly.",
    ],
  },
  {
    title: "Turning Online Reviews Into Real Conversations",
    intro:
      "Screen opinions are only the beginning. A phone call or visit confirms what the internet suggests.",
    points: [
      "Request contact details of two or three previous owners.",
      "Prefer clients who did not appear on the builder's own shortlist.",
      "Ask about problems, not just satisfaction.",
      "Visit finished houses and inspect walls, floors and roofs.",
      "Check older properties for cracks and damp patches.",
      "Observe how the owner speaks about the builder.",
      "Voices on the ground carry far more credibility than anonymous text.",
    ],
  },
  {
    title: "Reviews and Site Visits Work Together",
    intro:
      "Positive feedback should match what you see in person. A gap between the two is a warning.",
    points: [
      "Compare photographs online with the live site condition.",
      "Look for cleanliness, safety gear and orderly storage.",
      "Check whether materials match brands mentioned in reviews.",
      "Ask workers how long they have stayed with the company.",
      "Notice whether the supervisor knows the project details.",
      "Confirm that the number of ongoing sites seems manageable.",
      "Consistency between words and reality builds confidence.",
    ],
  },
  {
    title: "Local Factors That Appear in Honest Feedback",
    intro:
      "Region-specific comments are especially useful because they show whether a builder understands local conditions.",
    points: [
      "Handling of humidity and dampness.",
      "Performance of roofs during heavy monsoon.",
      "Drainage arrangements around plots.",
      "Planning around fog and rainy-season delays.",
      "Earthquake-safe design practices.",
      "Familiarity with local approval procedures.",
      "A builder praised for managing these issues will likely handle your project well too.",
    ],
  },
  {
    title: "Mistakes People Make While Reading Reviews",
    intro:
      "Even careful readers fall into traps. Awareness helps you avoid them.",
    points: [
      "Trusting only the first page of comments.",
      "Ignoring the date of feedback.",
      "Believing every complaint without verification.",
      "Overlooking how the builder responds.",
      "Choosing based on one emotional story.",
      "Skipping direct calls to past clients.",
      "Forgetting that project types and budgets differ.",
    ],
  },
  {
    title: "Using Reviews Alongside Other Checks",
    intro:
      "Feedback is powerful, but it should never be the only test. Combine it with documents and inspection.",
    points: [
      "Request an itemised written quotation.",
      "Verify business registration and address.",
      "Confirm the presence of a qualified engineer.",
      "Read the agreement for warranty and delay terms.",
      "Compare at least three builders.",
      "Plan payments in stages linked to progress.",
      "Reviews tell you who deserves a meeting; paperwork tells you who deserves your signature.",
    ],
  },
  {
    title: "Sharing Your Own Review Responsibly",
    intro:
      "After your project ends, your experience can help the next family. Honest, fair feedback improves the entire market.",
    points: [
      "Write only about what you personally experienced.",
      "Mention both strengths and weaknesses.",
      "Include details like project type and timeline.",
      "Avoid personal insults or emotional exaggeration.",
      "Add photographs of the finished work.",
      "Update your review if problems are solved later.",
      "Responsible reviews push builders toward better service.",
    ],
  },
];

const faqs = [
  {
    question: "Where can I read builder reviews in Kashipur?",
    answer:
      "Check map listings, social pages, local directories and community groups, then confirm opinions through direct calls.",
  },
  {
    question: "Can I trust online ratings fully?",
    answer:
      "No. Ratings are a starting point. Verify through written comments, client calls and site visits.",
  },
  {
    question: "How do I spot fake reviews?",
    answer:
      "Look for repeated wording, vague praise, new profiles and many reviews posted within a short time.",
  },
  {
    question: "Is one bad review a reason to reject a builder?",
    answer:
      "Not necessarily. Check whether the complaint repeats and how professionally the builder responded.",
  },
  {
    question: "How many reviews should I read?",
    answer:
      "Read as many as possible across several platforms, focusing on recent, detailed and balanced comments.",
  },
  {
    question: "Should I contact previous clients?",
    answer:
      "Yes. Speaking with two or three owners gives honest details that written reviews often miss.",
  },
  {
    question: "Do reviews guarantee good quality?",
    answer:
      "No. They guide your shortlist, but inspections, documents and a written agreement are still essential.",
  },
  {
    question: "Should I leave a review after my project?",
    answer:
      "Yes. Share a fair, detailed account, which helps other families make safer decisions.",
  },
];

const Content: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Builder in Kashipur Reviews: Why Opinions Matter
            </h2>

            <p>
              Before spending lakhs on a house, almost every owner checks
              builder in Kashipur reviews. That instinct is sound. Past clients
              have already lived through delays, bills and handovers, so their
              words carry information that no advertisement can offer.
            </p>

            <p>
              However, reviews are not always honest, and a high rating does
              not guarantee quality. Think of reviews as clues in a detective
              story: one clue proves little, but a pattern across many clues
              reveals the truth. This guide shows you how to collect, read and
              test feedback. Each section opens with a brief idea, followed by
              practical points.
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
              Final Word on Builder in Kashipur Reviews
            </h2>

            <p>
              Studying builder in Kashipur reviews can save you from costly
              regret, provided you read them with care. Look for patterns, test
              claims through calls and visits, and never rely on ratings alone.
              The best builders earn trust through consistent, verifiable work,
              and their feedback will reflect it.
            </p>

            <p>
              Next step: choose three builders, read their feedback across at
              least two platforms, contact previous clients and visit one live
              site each this week. Add your company name, phone number, address
              and Google Maps link here.
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