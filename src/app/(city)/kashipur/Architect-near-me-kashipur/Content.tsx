
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: "Why Near Me Matters When Choosing an Architect",
    intro:
      "Proximity plays a bigger role in architecture projects than many people realise, especially during the construction and supervision phase.",
    points: [
      "A local architect can visit your site quickly and frequently without long travel delays affecting project timelines.",
      "Local firms are familiar with Kashipur's soil conditions, common site challenges, and typical construction practices in the region.",
      "Proximity makes it easier to schedule in-person meetings for design discussions, material selection, and approvals.",
      "Local architects usually have established relationships with contractors, material suppliers, and structural engineers in the area.",
      "A nearby firm can respond faster to on-site issues that require immediate attention during construction.",
      "Choosing local also makes it easier to visit the firm's completed projects in person before hiring them.",
    ],
  },
  {
    title: "What to Check Before Hiring a Nearby Architect in Kashipur",
    intro:
      "A quick local search brings up many results, but not all of them reflect genuine expertise. Here is what to verify before shortlisting.",
    points: [
      "Physical office or verified address in Kashipur: Confirms the firm has an established local presence, not just a listing.",
      "Completed local projects: Ask to see homes or commercial spaces they have designed within Kashipur or nearby towns.",
      "Google reviews and ratings: Local reviews often reflect real client experiences with timelines and communication.",
      "Range of services offered: Check whether the firm handles design only, or also structural coordination, interiors, and site supervision.",
      "Familiarity with local approval processes: Local architects should know the documentation required by Kashipur's development authority.",
      "Response time and availability: A good local architect should be reachable for site visits within a reasonable timeframe.",
    ],
  },
  {
    title: "Benefits of Choosing a Local Architecture Firm Over an Outstation One",
    intro:
      "While outstation firms may offer attractive portfolios, working with a local team brings practical advantages that directly affect project execution.",
    points: [
      "Faster site visits: Local firms can inspect progress regularly instead of relying on remote updates or photos.",
      "Better understanding of local bylaws: Kashipur-based architects are more likely to be updated on regional building codes and approval requirements.",
      "Easier coordination with local contractors: Established local relationships often mean smoother material sourcing and labour coordination.",
      "Lower travel and logistics costs: Reduces additional charges that outstation firms may add for site visits.",
      "Quicker issue resolution: Problems on-site can be addressed the same day rather than waiting for a scheduled remote visit.",
      "Community trust and accountability: Local firms rely on regional reputation, which often translates into more consistent service quality.",
    ],
  },
  {
    title: "Types of Architecture Services Available Near You in Kashipur",
    intro:
      "Local architecture firms in Kashipur typically offer a wide range of services to support different project needs.",
    points: [
      "Residential home design: Independent houses, duplexes, and villas with customised floor plans.",
      "Vastu-compliant architecture: Layout planning aligned with vastu principles for homes and offices.",
      "Commercial space design: Shops, showrooms, and office interiors suited to business needs.",
      "Industrial and warehouse design: Functional layouts for factories and storage facilities common in Kashipur's industrial areas.",
      "Renovation and extension planning: Redesigning existing structures or adding new floors and rooms.",
      "Interior design integration: Coordinated furniture, storage, and finishing plans alongside the architectural layout.",
      "Project management and site supervision: On-ground coordination to ensure construction matches approved drawings.",
    ],
  },
  {
    title: "How to Search Effectively for an Architect Near You in Kashipur",
    intro:
      "A more targeted search approach helps you find genuinely qualified professionals rather than just the first few search results.",
    points: [
      "Search using specific terms like residential architect Kashipur or vastu architect near me for more relevant results.",
      "Check Google Maps listings for verified local businesses with reviews and photos of completed work.",
      "Ask for recommendations from neighbours, relatives, or colleagues who have recently built or renovated in the area.",
      "Visit local contractor or material supplier shops, as they often know which architects consistently deliver reliable work.",
      "Browse social media pages of local firms to see recent project updates and client interactions.",
      "Shortlist at least two to three firms and compare their consultations before making a final decision.",
    ],
  },
  {
    title: "Questions to Ask a Local Architect During the First Meeting",
    intro:
      "The first consultation is your opportunity to evaluate whether a nearby architect is the right fit for your project.",
    points: [
      "How many similar projects have you completed in Kashipur or nearby areas?",
      "What is your typical process from initial consultation to final drawing handover?",
      "How many site visits are included in your standard service package?",
      "Do you offer vastu consultation as part of your design process?",
      "What is your fee structure, and what is included versus charged separately?",
      "Can I visit or contact clients from your recently completed projects?",
    ],
  },
  {
    title: "Red Flags to Watch for When Searching Locally",
    intro:
      "Not every nearby listing represents a genuinely qualified or reliable architect. Watch for these warning signs during your search.",
    points: [
      "No verifiable office address or physical presence in Kashipur despite claiming local service.",
      "Very few or no reviews, especially for firms claiming years of local experience.",
      "Reluctance to share references or examples of completed nearby projects.",
      "Vague answers about fee structure or scope of services during the first consultation.",
      "Pressure to sign an agreement quickly without providing a written, itemised proposal.",
      "Poor responsiveness even before the project has started, which often worsens once work begins.",
    ],
  },
  {
    title: "Why Space Build Is a Trusted Local Choice in Kashipur",
    intro:
      "Space Build combines local presence with a full range of design and construction services, making it a practical choice for homeowners and businesses searching for a dependable architect nearby.",
    points: [
      "Established local presence with completed residential, commercial, and industrial projects in the region.",
      "In-house vastu expertise integrated into the design process from the very first consultation.",
      "A single accountable team managing architecture, structural coordination, and interior design together.",
      "Transparent, itemised proposals that clearly outline what is included in the service package.",
      "Regular on-site visits and structured project management to keep construction aligned with approved plans.",
      "Positive client feedback highlighting clear communication and attention to detail throughout the project.",
    ],
  },
  {
    title: "Services You Can Access Nearby Through Space Build",
    intro:
      "Space Build offers a complete range of services designed to support projects from the planning stage through to completion.",
    points: [
      "Vastu construction: New-build projects planned with vastu-compliant layouts from the foundation stage.",
      "Interior designing: Coordinated furniture, lighting, and finishing plans that complement the architecture.",
      "Vastu renovation: Practical layout corrections for existing homes without unnecessary demolition.",
      "Project management consultation (PMC): End-to-end site supervision to keep construction on track.",
      "Modular kitchen design: Customised, functional kitchen layouts tailored to your home.",
      "Pest control services: Additional support for long-term property maintenance and upkeep.",
    ],
  },
  {
    title: "Tips for a Smooth First Consultation with a Nearby Architect",
    intro:
      "Preparing in advance helps you make the most of your first meeting and speeds up the overall design process.",
    points: [
      "Bring your plot documents or site measurements, if available, to the first meeting.",
      "Prepare a rough list of requirements, including number of rooms, budget range, and preferred style.",
      "Mention any specific vastu preferences early so they can be factored into the initial design concept.",
      "Ask for a written proposal after the consultation rather than relying on verbal commitments.",
      "Clarify the expected timeline from consultation to drawing handover before proceeding further.",
    ],
  },
];

const faqs = [
  {
    question: "How do I find a reliable architect near me in Kashipur?",
    answer:
      "Check Google Maps listings, read verified reviews, ask for local references, and confirm a physical office address before hiring.",
  },
  {
    question: "Is it better to hire a local architect than an outstation firm?",
    answer:
      "Yes, in most cases. Local architects offer faster site visits, better familiarity with regional bylaws, and easier coordination.",
  },
  {
    question: "Does Space Build offer on-site consultations in Kashipur?",
    answer:
      "Yes, Space Build provides local site visits and consultations for residential, commercial, and industrial projects in the area.",
  },
  {
    question: "What should I ask during my first meeting with a nearby architect?",
    answer:
      "Ask about their experience, fee structure, number of included site visits, and whether vastu consultation is part of their service.",
  },
  {
    question: "Can a local architect help with government approvals?",
    answer:
      "Yes, most local firms are familiar with the documentation required for Kashipur's development authority approvals.",
  },
  {
    question: "How many local architects should I compare before deciding?",
    answer:
      "Comparing at least two to three firms helps you evaluate pricing, communication, and design quality more effectively.",
  },
  {
    question: "Does proximity guarantee better service quality?",
    answer:
      "Not always. Proximity helps with coordination, but it should be combined with a strong portfolio and genuine client reviews.",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Architect Near Me Kashipur – A Complete Local Guide to Finding the
              Right Architect
            </h2>

            <p>
              Searching for an architect near me in Kashipur is usually the
              first step when you are ready to start building, renovating, or
              redesigning a property. But a nearby location alone does not
              guarantee good design, reliable timelines, or transparent pricing.
              Choosing the right local architect requires looking beyond
              proximity — at experience, portfolio, communication, and how well
              the firm understands Kashipur&apos;s specific site conditions and
              building requirements.
            </p>

            <p>
              This guide walks you through everything you need to know when
              searching for an architect near you in Kashipur — what to check
              before hiring, the benefits of choosing a local firm, common
              mistakes to avoid, and why Space Build is a trusted local option
              for residential, commercial, and industrial projects across the
              region.
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
              Making Your Final Decision
            </h2>

            <p>
              Finding the right architect near you in Kashipur comes down to
              balancing convenience with genuine expertise. A local firm offers
              practical advantages in site visits and coordination, but this
              should always be paired with a strong portfolio, transparent
              pricing, and positive client feedback.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Shortlist firms based on both proximity and verified quality of
                past work.
              </li>
              <li>
                Always request a written, itemised proposal before signing any
                agreement.
              </li>
              <li>
                Visit at least one completed project, if possible, before making
                your final decision.
              </li>
              <li>
                Choose a team that offers integrated services — design,
                structural coordination, and interiors — to reduce coordination
                gaps during construction.
              </li>
            </ul>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Get Started with Space Build in Kashipur
            </h2>

            <p>
              If you are searching for a reliable, local architecture partner in
              Kashipur, Space Build offers a combination of design expertise,
              vastu integration, and dependable project execution. Share your
              plot details, requirements, and budget to receive a personalised
              consultation and proposal for your project.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {index + 1}. {faq.question}
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}

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
        </div>

        <div className="w-full lg:w-[42%] p-4 lg:pl-10 ml-auto">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;