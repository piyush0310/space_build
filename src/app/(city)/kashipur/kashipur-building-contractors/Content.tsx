import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: "What a Building Contractor Does",
    intro:
      "A contractor agrees to carry out defined construction work for a fixed payment or rate. The agreement may cover a whole building or a single trade.",
    points: [
      "Reads drawings and plans the work sequence.",
      "Arranges labour, tools and sometimes materials.",
      "Supervises quality on site.",
      "Coordinates with architects, engineers and suppliers.",
      "Handles day-to-day problems and worker management.",
      "Hands over completed work according to the agreement.",
    ],
  },
  {
    title: "Main Types of Contractors",
    intro:
      "Knowing the categories helps you match the professional to your project.",
    points: [
      "General contractor: manages the entire building from foundation to handover.",
      "Sub-contractor: handles a specific trade under a general contractor.",
      "Labour contractor: supplies workers while you provide materials.",
      "Specialist contractor: focuses on steel work, waterproofing, interiors or electrical systems.",
      "Design-and-build contractor: offers drawings and construction together.",
      "Renovation contractor: works on repairs, extensions and remodelling.",
    ],
  },
  {
    title: "Trades You May Need on Your Project",
    intro:
      "A building involves many skills. Understanding them lets you ask better questions and avoid gaps.",
    points: [
      "Excavation and earthwork: site levelling and foundation digging.",
      "Reinforcement work: cutting, bending and tying steel bars.",
      "Concrete work: mixing, pouring and curing.",
      "Masonry: brick or block walls.",
      "Plastering: smooth internal and external surfaces.",
      "Carpentry: shuttering, doors, windows and furniture.",
      "Plumbing: water supply and drainage lines.",
      "Electrical work: wiring, panels and fixtures.",
      "Painting and polishing: final surface finishing.",
      "Tiling and flooring: floor and wall coverings.",
      "Waterproofing: roof, bathroom and tank protection.",
    ],
  },
  {
    title: "Choosing Between One Contractor or Many",
    intro:
      "You can hire a single contractor or manage several separately. Each approach has advantages and drawbacks.",
    points: [
      "Single contractor: easier coordination, one point of responsibility, fewer disputes.",
      "Multiple trade contractors: possible cost saving, more control, but heavy management effort.",
      "Hybrid approach: one main contractor, with you selecting specialists for certain items.",
    ],
  },
  {
    title: "Experience That Actually Counts",
    intro:
      "Years of work matter only when they match your project. Relevant, verifiable experience is the real measure.",
    points: [
      "Number of similar buildings completed.",
      "Projects of comparable size and budget.",
      "Examples older than two or three years.",
      "Evidence of work in the Kashipur climate.",
      "Stability of the crew over time.",
      "Willingness to show sites without preparation.",
    ],
  },
  {
    title: "Skills and Supervision",
    intro:
      "A skilled crew without proper supervision still produces uneven work. Look for both capability and oversight.",
    points: [
      "A qualified engineer or experienced supervisor on site.",
      "Foremen who guide each trade.",
      "Clear instructions based on approved drawings.",
      "Regular measurement and inspection of work.",
      "Quick correction of errors before they are covered.",
      "Daily recording of progress.",
    ],
  },
  {
    title: "Understanding Contractor Rates",
    intro:
      "Rates vary with the type of work and the agreement. Always clarify what the quoted figure includes.",
    points: [
      "Rate per square foot of built-up area.",
      "Lump-sum price for a defined scope.",
      "Item-rate based on measured quantities.",
      "Daily wage for labour-only arrangements.",
      "Cost-plus arrangements with an agreed margin.",
    ],
  },
  {
    title: "Materials: Who Supplies What",
    intro:
      "Responsibility for materials should be clear from the beginning. Confusion here causes frequent disputes.",
    points: [
      "State whether materials are included in the rate.",
      "List brands and grades in the agreement.",
      "Decide who stores and protects deliveries.",
      "Agree on handling of wastage.",
      "Require approval before any substitution.",
      "Keep bills for all purchases.",
    ],
  },
  {
    title: "Verifying a Contractor Before Hiring",
    intro:
      "Trust must be earned through checks. Spend time on verification before any payment.",
    points: [
      "Confirm identity, address and phone number.",
      "Ask for business and tax registration where applicable.",
      "Request references from at least two previous clients.",
      "Visit one ongoing site and one finished building.",
      "Check feedback on more than one platform.",
      "Search the contractor&apos;s name together with the word &quot;complaint.&quot;",
      "Meet the supervisor who will handle your site.",
    ],
  },
  {
    title: "Contract Essentials",
    intro:
      "A written agreement protects both sides. Verbal promises are easily forgotten or denied.",
    points: [
      "Detailed scope with drawings attached.",
      "Total price and payment schedule.",
      "Start date, completion date and delay terms.",
      "Material specifications and brands.",
      "Responsibility for permits and approvals.",
      "Warranty period for structure and waterproofing.",
      "Method for settling disagreements.",
      "Signatures of both sides, preferably with a witness.",
    ],
  },
  {
    title: "Payment Practices",
    intro:
      "How you pay affects motivation, quality and safety. Stage-based payment is the fairest method.",
    points: [
      "Give only a modest advance after signing.",
      "Link instalments to completed and inspected stages.",
      "Pay through bank transfer and retain receipts.",
      "Avoid paying for work not yet started.",
      "Hold back a small final amount until defects are corrected.",
      "Record extra work and its cost in writing.",
    ],
  },
  {
    title: "Local Conditions Contractors Should Understand",
    intro:
      "Kashipur&apos;s environment influences construction methods. A contractor who knows it makes wiser choices.",
    points: [
      "Humidity and damp control through ventilation and waterproofing.",
      "Monsoon planning for excavation, plaster and painting.",
      "Raised plinths and drainage design for waterlogging risk.",
      "Earthquake-safe detailing for Uttarakhand&apos;s seismic zone.",
      "Protection of cement and steel from moisture.",
      "Scheduling around fog and rainy periods.",
    ],
  },
  {
    title: "Managing Your Contractor During the Project",
    intro:
      "Even a good contractor performs better under attentive ownership. Stay involved without interfering.",
    points: [
      "Visit the site on a fixed weekly day.",
      "Photograph hidden work before it is covered.",
      "Keep a diary of decisions and changes.",
      "Use one contact person for all instructions.",
      "Approve changes in writing with their cost.",
      "Hold a short review meeting every fortnight.",
    ],
  },
  {
    title: "Red Flags to Respect",
    intro:
      "Some behaviours predict trouble. Notice them early, before you commit.",
    points: [
      "Refusal to provide a written estimate.",
      "Pressure to pay quickly.",
      "No fixed office or verifiable address.",
      "Reluctance to share past client contacts.",
      "Rates far below every other quotation.",
      "Frequent changes of supervisor.",
      "Vague answers about materials and methods.",
    ],
  },
  {
    title: "After Completion: Handover and Support",
    intro:
      "The relationship does not end when painting finishes. Proper closure protects your investment.",
    points: [
      "Inspect the building with a written defect list.",
      "Collect drawings, bills and warranty papers.",
      "Confirm that all pending work is completed.",
      "Keep the contractor&apos;s contact for repair needs.",
      "Inspect roofs and walls before the first monsoon.",
      "Release the final payment only after corrections.",
    ],
  },
];

const faqs = [
  {
    question: "What is a building contractor?",
    answer:
      "A contractor carries out defined construction work under an agreement, managing labour, supervision and sometimes materials.",
  },
  {
    question: "What is the difference between a contractor and a builder?",
    answer:
      "The terms overlap. Builders often deliver complete projects, while contractors may handle full buildings or specific trades.",
  },
  {
    question: "Should I hire one contractor or several?",
    answer:
      "One main contractor simplifies coordination. Several trade contractors may save money but need more management.",
  },
  {
    question: "How can I verify a contractor?",
    answer:
      "Check address, registration, references, completed sites and feedback, and meet the supervisor in person.",
  },
  {
    question: "What should a contractor agreement include?",
    answer:
      "Scope, drawings, price, payment stages, timeline, materials, warranty and dispute handling.",
  },
  {
    question: "How should I pay a contractor?",
    answer:
      "Pay a small advance after signing, then release instalments after verified stage completion via bank transfer.",
  },
  {
    question: "Who supplies materials?",
    answer:
      "It depends on the agreement. Always specify responsibility, brands and storage in writing.",
  },
  {
    question: "When should I avoid a contractor?",
    answer:
      "Avoid those who refuse written terms, pressure for payment, hide references or quote unrealistically low rates.",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Kashipur Building Contractors: Know Who You Are Hiring
            </h2>

            <p>
              The word &quot;contractor&quot; covers a wide range of people. One
              may be a lone mason with a small crew, another a registered firm
              managing dozens of workers, and a third a specialist who only
              fits tiles or wiring. Hiring the wrong type for your job causes
              delays, disputes and weak results.
            </p>

            <p>
              Think of a hospital. A general doctor, a surgeon and a nurse all
              help patients, yet each has a different role. Likewise, Kashipur
              building contractors fall into distinct categories. This guide
              explains each type, the trades involved and how to choose and
              manage them. Each section opens with a short idea, followed by
              points you can apply.
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
              Final Word on Kashipur Building Contractors
            </h2>

            <p>
              Understanding Kashipur building contractors means knowing their
              types, trades, rates and responsibilities. Choose the category
              that suits your project, verify credentials, compare itemised
              quotations and sign a clear agreement. The right contractor will
              answer your questions openly and welcome your involvement.
            </p>

            <p>
              Next step: shortlist three contractors, visit one site for each
              and compare written quotations this week. Add your company name,
              phone number, address and Google Maps link here.
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