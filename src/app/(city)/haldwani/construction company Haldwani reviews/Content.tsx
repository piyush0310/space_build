
import LandingEnquiry from "@/components/LandingEnquiry";

const reviewSources = [
  {
    title: "Online Maps and Business Listings",
    description:
      "Business profiles often show ratings and written comments. Check the number of reviews, their dates, and how the business responds.",
  },
  {
    title: "Social Media Pages",
    description:
      "Posts, comments, and tagged photos can show real work. Check whether comments come from genuine accounts with relevant activity.",
  },
  {
    title: "Neighbourhood and Community Groups",
    description:
      "Local groups and messaging communities often share frank experiences. Treat these as informal sources and ask follow-up questions.",
  },
  {
    title: "Architects, Engineers, and Suppliers",
    description:
      "Professionals who work with builders may observe quality, payment behaviour, and reliability over time.",
  },
  {
    title: "Past Clients Directly",
    description:
      "Ask the company for recent client references and speak with homeowners whose projects are complete.",
  },
  {
    title: "Completed Sites",
    description:
      "Inspecting a finished building lets you assess workmanship and finishing with your own eyes.",
  },
];

const goodReviewPoints = [
  {
    title: "Timeline",
    description: "Was the work delivered as promised?",
  },
  {
    title: "Cost",
    description: "Did the final bill match the original quotation?",
  },
  {
    title: "Quality",
    description:
      "How were the walls, floors, doors, waterproofing, and finishing?",
  },
  {
    title: "Communication",
    description: "Were calls answered and progress updates shared?",
  },
  {
    title: "Supervision",
    description: "Was a supervisor present and responsive?",
  },
  {
    title: "Problem Handling",
    description: "How were defects, delays, and changes managed?",
  },
  {
    title: "After-Sales Service",
    description: "Did the company return to address issues after handover?",
  },
];

const unreliableReviewSigns = [
  "Many reviews posted within a short period",
  "Similar wording across different accounts",
  "Accounts with no history or only one review",
  "Overly emotional language without supporting details",
  "No mention of a real project, location, or timeline",
  "Extreme ratings without an explanation",
  "Reviews that read like slogans or advertisements",
  "Only five-star ratings with no critical comments",
];

const concerningReviewPoints = [
  "Repeated delays without clear reasons",
  "Costs rising far beyond the original quotation",
  "Poor finishing or leakage after handover",
  "Materials different from those promised",
  "Workers or supervisors frequently changing",
  "Difficulty contacting the company after payment",
  "Refusal to honour warranty promises",
];

const verificationSteps = [
  {
    title: "Visit Completed Sites",
    description:
      "Ask for addresses of finished projects and visit with the owner's permission. Check wall alignment, corner finishing, door fitting, tile joints, ceilings, bathrooms, and terrace drainage.",
  },
  {
    title: "Call Past Clients",
    description:
      "Ask for two or three recent clients, including homeowners with projects similar to yours. Prepare your questions before calling.",
  },
  {
    title: "Visit an Ongoing Site",
    description:
      "Observe how work is organised, whether the site appears safe, and how workers and supervisors coordinate their tasks.",
  },
  {
    title: "Check the Paperwork",
    description:
      "Request business details, sample agreements, quotation formats, and stage-wise payment records before committing.",
  },
];

const clientQuestions = [
  "Was the project completed on time? If not, why?",
  "Did the final cost match the original quotation?",
  "How was the quality of structural work and finishing?",
  "Were there leaks, cracks, or other issues after handover?",
  "How did the company handle problems?",
  "Was the supervisor available and helpful?",
  "Were the materials the same as those promised?",
  "Would you hire the company again?",
];

const companyQuestions = [
  "Can you share references from recent projects?",
  "How do you handle client complaints?",
  "Can I visit a completed site and an ongoing site?",
  "What was your most difficult project, and how did you handle it?",
  "How do you collect and respond to client feedback?",
];

const scorecardItems = [
  "Quality of completed work",
  "Structural safety practices",
  "Clarity of quotation",
  "Material specifications",
  "Supervision and team coordination",
  "Timeline discipline",
  "Communication",
  "Payment terms",
  "Warranty and after-sales service",
  "Interior coordination",
];

const haldwaniFactors = [
  {
    title: "Seismic Safety",
    description:
      "Uttarakhand includes areas with significant earthquake risk. Structural design, appropriate detailing, and qualified professional supervision are essential.",
  },
  {
    title: "Monsoon Rainfall",
    description:
      "Roof waterproofing, terrace drainage, and external-wall protection require careful planning.",
  },
  {
    title: "Humidity",
    description:
      "Materials and finishes should be selected with moisture exposure and damp prevention in mind.",
  },
  {
    title: "Soil and Slope",
    description:
      "Foundation design should reflect the actual soil conditions and site characteristics.",
  },
  {
    title: "Approvals",
    description:
      "Confirm the applicable building-plan approvals and permissions with the relevant local authority.",
  },
];

const redFlags = [
  "A quotation far lower than every comparable offer",
  "No written estimate or agreement",
  "Refusal to identify materials and brands",
  "Pressure to pay a large advance",
  "No completed work available to inspect",
  "No clear project timeline",
  "Vague answers about structural design or approvals",
  "Unwillingness to provide client references",
];

const commonMistakes = [
  "Choosing a company based on its star average alone",
  "Ignoring the dates of reviews",
  "Trusting extreme positive or negative posts without details",
  "Skipping visits to completed sites",
  "Not speaking with genuine past clients",
  "Comparing companies with different project types",
  "Forgetting to check what the quotation includes",
];

const interiorBenefits = [
  {
    title: "Better Electrical Planning",
    description:
      "Switches, lights, and sockets can be positioned around furniture layouts and everyday needs.",
  },
  {
    title: "Hidden Wiring and Plumbing",
    description:
      "Planning services early reduces the need to break finished walls later.",
  },
  {
    title: "Space for Fitted Storage",
    description:
      "Niches, wardrobes, and kitchen units can be coordinated with the building layout.",
  },
  {
    title: "Lower Rework Costs",
    description:
      "Early coordination can reduce changes after painting, tiling, and other finishing work.",
  },
  {
    title: "Coordinated Responsibility",
    description:
      "When responsibilities are clearly agreed, one coordinated team can help align civil and interior work.",
  },
];

const materialChoices = [
  {
    title: "Quality Cement and Steel",
    description:
      "Choose suitable grades and specifications for the structural design, as approved by the responsible professional.",
  },
  {
    title: "Damp-Proofing and Waterproofing",
    description:
      "Select suitable products for roofs, bathrooms, terraces, and external walls.",
  },
  {
    title: "Moisture-Resistant Boards",
    description:
      "Consider appropriate boards for kitchens, storage, and other areas exposed to moisture.",
  },
  {
    title: "Rust-Resistant Hardware",
    description:
      "Choose suitable hinges, channels, and fittings for the expected humidity and usage.",
  },
  {
    title: "Suitable Paint Finishes",
    description:
      "Use compatible primers and finishes appropriate for the wall surface and damp conditions.",
  },
];

const projectProcess = [
  {
    title: "Free Consultation",
    description:
      "Share your requirements, family routine, preferred style, and budget range.",
  },
  {
    title: "Site Visit and Measurement",
    description:
      "Record dimensions and identify relevant site conditions before preparing the plan.",
  },
  {
    title: "Concept and Layout",
    description:
      "Plan room placement, circulation, and space usage around everyday comfort.",
  },
  {
    title: "3D Visualisation",
    description:
      "Review the proposed design before execution begins.",
  },
  {
    title: "Itemised Quotation",
    description:
      "Review listed items, quantities, materials, rates, and the agreed scope of work.",
  },
  {
    title: "Material Approval",
    description:
      "Review available samples and confirm finishes before installation.",
  },
  {
    title: "Execution",
    description:
      "Coordinate construction, electrical work, painting, and installation according to the agreed scope.",
  },
  {
    title: "Quality Check and Handover",
    description:
      "Inspect completed work and document any outstanding items before handover.",
  },
];

const spaceBuildBenefits = [
  {
    title: "Clear Estimates",
    description:
      "Itemised quotations help clients understand the proposed scope, materials, and costs.",
  },
  {
    title: "Integrated Planning",
    description:
      "Construction and interior requirements can be considered together during planning.",
  },
  {
    title: "Flexible Packages",
    description:
      "Discuss options for different budgets while keeping essential safety and quality requirements in focus.",
  },
  {
    title: "Coordinated Execution",
    description:
      "Design and site work can be coordinated to maintain consistency through the project.",
  },
  {
    title: "Dedicated Coordination",
    description:
      "A designated contact can help keep communication and progress updates organised.",
  },
  {
    title: "Written Warranty Terms",
    description:
      "Ask for clear written details of workmanship coverage, exclusions, and the process for reporting defects.",
  },
];

const faqs = [
  {
    question: "Can I trust online reviews of construction companies?",
    answer:
      "Use reviews as clues rather than final proof. Look for repeated patterns, check the details, visit completed sites, and speak directly with past clients.",
  },
  {
    question: "How do I spot fake reviews?",
    answer:
      "Look for many reviews posted in a short time, similar wording, new accounts, and vague praise without project details. Several warning signs together deserve caution.",
  },
  {
    question: "Is a perfect five-star rating a good sign?",
    answer:
      "Not always. A detailed collection of balanced reviews is often more useful than a few short, uniformly positive comments.",
  },
  {
    question: "What matters more, reviews or site visits?",
    answer:
      "Both are useful, but site visits and conversations with past clients let you verify workmanship and project experiences directly.",
  },
  {
    question: "How many references should I ask for?",
    answer:
      "Ask for two or three recent clients, including at least one homeowner with a project similar to yours.",
  },
  {
    question: "How should a company respond to a bad review?",
    answer:
      "A professional response should remain calm, address the concern with facts, and explain the steps being taken to resolve it.",
  },
  {
    question: "Should I compare reviews across companies?",
    answer:
      "Yes. Compare similar project types, review dates, scopes of work, and recurring comments across multiple sources.",
  },
  {
    question: "How do I get a quote from Space Build Haldwani?",
    answer:
      "Contact the team through the official Space Build website, discuss your requirements, arrange a site visit, and request an itemised estimate.",
  },
];

function SectionHeading({
  number,
  children,
}: {
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className="mb-4 mt-10 flex items-start gap-3 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
      {number && (
        <span className="mt-1 inline-flex h-8 min-w-8 items-center justify-center rounded-md bg-red-50 px-2 text-sm font-bold text-red-700">
          {number}
        </span>
      )}
      <span>{children}</span>
    </h2>
  );
}

function DetailCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-sm">
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-7 text-gray-600">{description}</p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-600" />
          <span className="leading-7">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Content() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3 lg:gap-12">
          <article className="min-w-0 lg:col-span-2">
            <header className="mb-8 border-b border-gray-200 pb-7">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-700">
                Construction Guide · Haldwani
              </p>

              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl">
                Construction Company Haldwani Reviews: How to Read, Verify, and
                Use Them
              </h1>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                A practical guide from Space Build Haldwani to evaluating
                construction company reviews, verifying completed projects,
                and making an informed hiring decision.
              </p>
            </header>

            <div className="space-y-5 text-base leading-8 text-gray-700">
              <p>
                Before hiring a builder, most people search for reviews. A page
                of star ratings and short comments can feel reassuring,
                especially when the project is large and the cost is high.
                However, reviews can mislead as easily as they can help. A
                single angry post may overshadow years of good work, while a
                stack of glowing comments may hide paid or copied content.
              </p>

              <p>
                The goal is not to find a company with perfect ratings. It is
                to understand what reviews actually say, check them against
                facts, and combine them with your own inspection. This guide
                explains where reviews appear, how to read them wisely, how to
                recognise potentially unreliable comments, and how to verify a
                construction company in Haldwani before signing an agreement,
                including Space Build Haldwani.
              </p>

              <SectionHeading>
                Why Reviews Matter, and Why They Are Not Enough
              </SectionHeading>

              <p>
                Reviews can reveal other homeowners&apos; experiences with
                timelines, communication, workmanship, and after-sales
                service. However, every review represents an individual
                experience and may not reflect the full picture.
              </p>

              <BulletList
                items={[
                  "Small samples: A few reviews may not represent hundreds of projects.",
                  "Different expectations: One owner's idea of good service may differ from yours.",
                  "Project mismatch: A review about a small repair may not predict performance on a complete house.",
                  "Possible bias: Some reviews may be encouraged, filtered, or purchased.",
                  "Missing context: Reviews often omit details about materials, supervision, and the agreed scope.",
                ]}
              />

              <p className="rounded-r-lg border-l-4 border-red-600 bg-gray-50 px-5 py-4 font-semibold text-gray-900">
                Treat reviews as clues, not conclusions. Verify important
                claims before choosing a construction company.
              </p>

              <SectionHeading number="01">
                Where to Find Construction Company Reviews
              </SectionHeading>

              <p>
                Do not rely on a single website or social platform. Collect
                feedback from several sources and check whether the information
                matches the company&apos;s actual work.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {reviewSources.map((source) => (
                  <DetailCard
                    key={source.title}
                    title={source.title}
                    description={source.description}
                  />
                ))}
              </div>

              <SectionHeading>
                How to Read Online Reviews Wisely
              </SectionHeading>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Look at the Pattern, Not Just the Average
                  </h3>
                  <p>
                    A rating of 4.3 supported by many detailed comments may be
                    more informative than a perfect 5.0 based on a few short
                    reviews. Look for recurring themes such as delays, unclear
                    charges, or helpful supervision.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Prefer Detailed Reviews
                  </h3>
                  <p>
                    Specific comments that mention the project type, timeline,
                    materials, and communication provide more useful context
                    than general praise.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Check the Dates
                  </h3>
                  <p>
                    Recent reviews may better reflect the company&apos;s
                    current team and practices. Older reviews can still be
                    useful, but ask whether the same people manage projects
                    today.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Read Negative Reviews Carefully
                  </h3>
                  <p>
                    Consider what went wrong, whether the issue was serious,
                    and how the company responded. A calm reply that addresses
                    the concern is more constructive than an aggressive or
                    dismissive response.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Read Positive Reviews Critically
                  </h3>
                  <p>
                    Look for vague, repeated phrases or comments that sound
                    like advertising. Positive feedback is more useful when it
                    describes a specific experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Compare Across Sources
                  </h3>
                  <p>
                    If the same strengths or problems appear on multiple
                    independent platforms, the pattern deserves closer
                    attention.
                  </p>
                </div>
              </div>

              <SectionHeading>
                Signs a Review May Be Fake or Unreliable
              </SectionHeading>

              <p>
                No single clue proves that a review is fake. Still, several
                warning signs together are a reason to investigate further.
              </p>

              <BulletList items={unreliableReviewSigns} />

              <SectionHeading>
                What Good Reviews Usually Mention
              </SectionHeading>

              <p>
                Helpful reviews describe practical details you can compare
                against a quotation, project plan, or site inspection.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {goodReviewPoints.map((point) => (
                  <DetailCard
                    key={point.title}
                    title={point.title}
                    description={point.description}
                  />
                ))}
              </div>

              <SectionHeading>
                What Concerning Reviews Usually Mention
              </SectionHeading>

              <BulletList items={concerningReviewPoints} />

              <p>
                If several different clients describe the same issue, take it
                seriously. Ask the company for an explanation and seek evidence
                before deciding whether the concern applies to your project.
              </p>

              <SectionHeading>
                Go Beyond Reviews: Verify Directly
              </SectionHeading>

              <p>
                Online feedback is only the starting point. Direct verification
                gives you a clearer understanding of the company&apos;s
                workmanship, working methods, and client relationships.
              </p>

              <div className="space-y-4">
                {verificationSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-xl border border-gray-200 p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-50 font-bold text-red-700">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <SectionHeading>
                Questions to Ask Past Clients
              </SectionHeading>

              <p>
                Prepare a short list before contacting references. Ask for
                honest feedback about the complete experience rather than only
                whether the homeowner liked the finished building.
              </p>

              <BulletList items={clientQuestions} />

              <p>
                Listen for hesitation as well as the words being spoken. If an
                answer is unclear, politely ask for an example. A client&apos;s
                experience is most useful when you understand the project size,
                scope, budget, and timeline.
              </p>

              <SectionHeading>
                Questions to Ask the Company About Its Reviews
              </SectionHeading>

              <BulletList items={companyQuestions} />

              <p>
                A company should be prepared to explain its process and discuss
                completed work. Its willingness to answer reasonable questions
                is useful information, but verify claims independently.
              </p>

              <SectionHeading>
                Building Your Own Construction Company Review Scorecard
              </SectionHeading>

              <p>
                After reading reviews and visiting sites, rate each company
                from 1 to 5 against the same criteria. Use the same scoring
                method for every company you compare.
              </p>

              <div className="overflow-hidden rounded-xl border border-gray-200">
                <div className="grid grid-cols-[1fr_90px] bg-gray-50 px-4 py-3 font-semibold text-gray-900">
                  <span>Evaluation Criteria</span>
                  <span className="text-center">Score / 5</span>
                </div>

                {scorecardItems.map((item) => (
                  <div
                    key={item}
                    className="grid grid-cols-[1fr_90px] items-center border-t border-gray-200 px-4 py-3"
                  >
                    <span className="pr-3">{item}</span>
                    <span className="text-center text-gray-400">___</span>
                  </div>
                ))}
              </div>

              <p>
                Add written notes about any red flags. One serious concern,
                such as refusal to provide a written agreement or explain
                structural responsibilities, may outweigh several good
                ratings.
              </p>

              <SectionHeading>
                Local Factors to Keep in Mind in Haldwani
              </SectionHeading>

              <p>
                When reviewing a construction company in Haldwani, consider
                whether the team understands the requirements of your site,
                design, drainage, and local approval process. Ask for
                project-specific explanations instead of relying on general
                assurances.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {haldwaniFactors.map((factor) => (
                  <DetailCard
                    key={factor.title}
                    title={factor.title}
                    description={factor.description}
                  />
                ))}
              </div>

              <p>
                When reading reviews, notice whether owners mention leakage,
                dampness, or structural concerns. These comments can help you
                prepare questions, but the actual site and structural design
                should be assessed by appropriately qualified professionals.
              </p>

              <SectionHeading>Red Flags Beyond Reviews</SectionHeading>

              <BulletList items={redFlags} />

              <SectionHeading>
                Common Mistakes When Using Reviews
              </SectionHeading>

              <BulletList items={commonMistakes} />

              <SectionHeading>
                Why Combine Construction and Interior Planning?
              </SectionHeading>

              <p>
                Coordinating interior requirements during construction can
                reduce avoidable changes later. Electrical points, storage,
                plumbing routes, and furniture layouts are easier to consider
                before walls and finishes are complete.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {interiorBenefits.map((benefit) => (
                  <DetailCard
                    key={benefit.title}
                    title={benefit.title}
                    description={benefit.description}
                  />
                ))}
              </div>

              <p>
                Space Build Haldwani approaches construction and interior
                planning as parts of one overall plan. Whichever company you
                consider, including Space Build Haldwani, request references
                and inspect completed work before making a decision.
              </p>

              <SectionHeading>
                Materials That Suit Haldwani Homes
              </SectionHeading>

              <p>
                Material selection should account for the site, building
                design, expected moisture exposure, and maintenance needs.
                Discuss the specifications with the project team instead of
                relying on brand names alone.
              </p>

              <div className="space-y-3">
                {materialChoices.map((material) => (
                  <div
                    key={material.title}
                    className="rounded-lg bg-gray-50 p-4"
                  >
                    <h3 className="font-bold text-gray-900">
                      {material.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-gray-600">
                      {material.description}
                    </p>
                  </div>
                ))}
              </div>

              <SectionHeading>
                The Process at Space Build Haldwani
              </SectionHeading>

              <p>
                A clear project process helps organise cost, time, design, and
                quality. Confirm the deliverables, responsibilities, payment
                stages, and expected timeline in writing before work begins.
              </p>

              <div className="relative ml-3 space-y-6 border-l-2 border-red-100 pl-6">
                {projectProcess.map((step, index) => (
                  <div key={step.title} className="relative">
                    <span className="absolute -left-[33px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-red-600 bg-white" />
                    <p className="text-xs font-bold uppercase tracking-wider text-red-700">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 leading-7 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <SectionHeading>
                Why Homeowners Consider Space Build Haldwani
              </SectionHeading>

              <p>
                When evaluating Space Build Haldwani or any other construction
                provider, focus on the evidence available to you. Discuss the
                scope, check the quotation, inspect relevant projects, and
                confirm the terms before committing.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {spaceBuildBenefits.map((benefit) => (
                  <DetailCard
                    key={benefit.title}
                    title={benefit.title}
                    description={benefit.description}
                  />
                ))}
              </div>

              <p>
                To view projects, explore services, or enquire about your
                requirements, visit the official Space Build website:
              </p>

              <a
                href="https://www.spacebuild.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 break-all font-semibold text-red-700 underline decoration-red-300 underline-offset-4 hover:text-red-800"
              >
                https://www.spacebuild.co.in/
              </a>

              <SectionHeading>Frequently Asked Questions</SectionHeading>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="text-lg font-bold leading-7 text-gray-900">
                      <span className="mr-2 text-red-700">
                        {index + 1}.
                      </span>
                      {faq.question}
                    </h3>
                    <p className="mt-2 leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-gray-900 p-6 text-white sm:p-8">
                <h2 className="text-2xl font-bold">
                  Make an Informed Construction Decision
                </h2>
                <p className="mt-3 leading-7 text-gray-300">
                  Read reviews carefully, speak with recent clients, inspect
                  completed work, and compare written quotations before
                  choosing a construction company in Haldwani.
                </p>
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-700"
                >
                  Visit Space Build Website
                </a>
              </div>
            </div>
          </article>

          <aside className="min-w-0 lg:sticky lg:top-24">
            <LandingEnquiry />
          </aside>
        </div>
      </div>
    </section>
  );
}