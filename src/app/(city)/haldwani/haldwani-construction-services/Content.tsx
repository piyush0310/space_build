
import LandingEnquiry from "@/components/LandingEnquiry";

const constructionServices = [
  {
    title: "1. Planning and Design Support",
    intro: "Good construction starts before the first brick.",
    items: [
      ["Space planning", "Room sizes, circulation, and orientation."],
      ["Elevation and exterior design", "The look of the building from outside."],
      [
        "Structural design coordination",
        "Work with qualified engineers following relevant codes.",
      ],
      [
        "Service layouts",
        "Early planning of electrical, plumbing, and drainage.",
      ],
      ["3D views", "Previews that help owners decide before building."],
    ],
    conclusion:
      "Early planning prevents costly changes once work begins.",
  },
  {
    title: "2. Approvals and Documentation Support",
    intro: "Most buildings need clearance before work starts.",
    items: [
      ["Local authority guidance", "Guidance on required local authority approvals."],
      ["Drawing preparation", "Preparation of drawings in the form required."],
      [
        "Documentation support",
        "Support with documentation and follow-up.",
      ],
      [
        "Plan compliance",
        "Checks that construction follows the approved plan.",
      ],
    ],
    conclusion:
      "Requirements differ by plot and building type, so confirm them with the relevant authority.",
  },
  {
    title: "3. Site Preparation and Foundation",
    intro:
      "The foundation carries the entire building, so it deserves careful attention.",
    items: [
      ["Site clearing and marking", "Preparing and marking the construction area."],
      ["Excavation", "Excavation to the required depth."],
      [
        "Foundation design",
        "Design suited to the site's soil conditions.",
      ],
      [
        "Footings and plinth",
        "Footings, plinth beams, and plinth filling.",
      ],
      [
        "Damp-proof course",
        "Protection below floor level against rising damp.",
      ],
    ],
    conclusion:
      "Uttarakhand lies in a high seismic region, so foundation and structural quality are especially important.",
  },
  {
    title: "4. Structural Construction",
    intro: "This stage forms the frame and body of the building.",
    items: [
      [
        "Reinforced concrete work",
        "Columns, beams, and slabs in reinforced concrete.",
      ],
      [
        "Masonry",
        "Brickwork or block masonry for walls.",
      ],
      [
        "Structural elements",
        "Lintels, sunshades, and staircases.",
      ],
      ["Concrete curing", "Proper curing of concrete."],
      [
        "Steel quality checks",
        "Checks on steel placement and concrete cover.",
      ],
    ],
    conclusion:
      "Good practice here decides the strength and life of the building.",
  },
  {
    title: "5. Roofing and Waterproofing",
    intro: "Heavy monsoon rain makes this service essential in Haldwani.",
    items: [
      [
        "Roof treatment",
        "Roof slab treatment and slope for drainage.",
      ],
      [
        "Waterproofing",
        "Waterproofing of terraces, bathrooms, and balconies.",
      ],
      [
        "External wall treatment",
        "Treatment of external walls where needed.",
      ],
      [
        "Rainwater outlets",
        "Rainwater outlets and downpipes.",
      ],
      [
        "Damp control",
        "Damp control in basements or lower floors.",
      ],
    ],
    conclusion:
      "Waterproofing done at the right time is far cheaper than repairing leaks later.",
  },
  {
    title: "6. Electrical and Plumbing Services",
    intro:
      "These services run through the walls and floors, so they must be planned early.",
    items: [
      [
        "Electrical work",
        "Conduits, wiring, switchboards, earthing, and lighting points.",
      ],
      [
        "Plumbing",
        "Water supply lines, drainage, sanitary fittings, and tanks.",
      ],
      [
        "Rainwater and drainage",
        "Proper outlets to avoid waterlogging.",
      ],
      [
        "Future provisions",
        "Extra points for appliances, air conditioners, and smart devices.",
      ],
    ],
    conclusion:
      "Coordinating these services with interiors avoids breaking finished walls later.",
  },
  {
    title: "7. Plastering, Flooring, and Finishing",
    items: [
      ["Plastering", "Internal and external plastering."],
      [
        "Flooring",
        "Flooring in tiles, stone, or other materials.",
      ],
      [
        "Kitchen and bathroom tiling",
        "Skirting and wall tiles in kitchens and bathrooms.",
      ],
      [
        "Doors and windows",
        "Doors, windows, and grills.",
      ],
      [
        "Staircase finishing",
        "Staircase finishing and railings.",
      ],
    ],
    conclusion:
      "Finish quality is what owners see and touch every day, so check samples before approval.",
  },
  {
    title: "8. Painting and Exterior Finishing",
    items: [
      [
        "Surface preparation",
        "Surface preparation, putty, and primer.",
      ],
      [
        "Interior and exterior painting",
        "Paint systems suited to interior and exterior surfaces.",
      ],
      [
        "Decorative finishes",
        "Texture and decorative finishes.",
      ],
      [
        "Weather-resistant treatment",
        "Weather-resistant exterior treatment.",
      ],
      [
        "Final touch-ups",
        "Final touch-ups and cleaning.",
      ],
    ],
  },
  {
    title: "9. Interior Fit-Out Services",
    intro:
      "Finishing the inside turns a structure into a home or workplace.",
    items: [
      ["Modular furniture", "Modular kitchens and wardrobes."],
      [
        "Storage and media units",
        "TV units, study units, and storage walls.",
      ],
      [
        "Ceilings and lighting",
        "False ceilings and lighting design.",
      ],
      [
        "Decorative walls",
        "Wall paneling and feature walls.",
      ],
      [
        "Fitted furniture",
        "Fitted furniture and bathroom vanities.",
      ],
    ],
    conclusion:
      "Planning interiors alongside construction gives better results and fewer changes.",
  },
  {
    title: "10. Renovation and Remodeling Services",
    intro: "Older homes often need upgrades.",
    items: [
      ["Layout changes", "Layout changes and room modifications."],
      [
        "Surface and fixture upgrades",
        "Replacing worn flooring, kitchens, and bathrooms.",
      ],
      [
        "Structural strengthening",
        "Structural strengthening where needed.",
      ],
      [
        "Service upgrades",
        "Plumbing and electrical upgrades.",
      ],
      [
        "Facade refresh",
        "Facade refresh and repainting.",
      ],
    ],
    conclusion:
      "A pre-work inspection helps decide what can be changed safely.",
  },
  {
    title: "11. Extension and Additional Floors",
    intro: "Families grow, and so do space needs.",
    items: [
      [
        "Existing structure assessment",
        "Checking the existing foundation and structure.",
      ],
      [
        "Extension design",
        "Designing load-safe extensions.",
      ],
      [
        "Connecting structures",
        "Connecting new and old structures.",
      ],
      [
        "Finish matching",
        "Matching finishes and levels.",
      ],
      [
        "Service modifications",
        "Rework of staircases and services.",
      ],
    ],
    conclusion:
      "Adding load to an existing building should always follow a structural check.",
  },
  {
    title: "12. Commercial Construction Services",
    intro: "Shops, clinics, offices, and showrooms have special needs.",
    items: [
      [
        "Commercial layout",
        "Layout for customer flow and display.",
      ],
      [
        "Durable finishes",
        "Durable flooring and wall finishes.",
      ],
      [
        "Electrical load planning",
        "Electrical load planning.",
      ],
      [
        "Signage and facade",
        "Signage and facade planning.",
      ],
      [
        "Safety and ventilation",
        "Fire safety and ventilation considerations.",
      ],
      [
        "Project scheduling",
        "Quick turnaround for business timelines.",
      ],
    ],
  },
  {
    title: "13. Boundary Walls, Gates, and External Works",
    items: [
      ["Compound walls and gates", "Compound walls and gates."],
      ["Paving and driveways", "Paving and driveways."],
      [
        "External drainage",
        "Drainage and rainwater channels.",
      ],
      [
        "Parking and sheds",
        "Parking areas and sheds.",
      ],
      [
        "Landscaping preparation",
        "Landscaping base preparation.",
      ],
    ],
  },
  {
    title: "14. Structural Repair and Maintenance",
    items: [
      ["Crack assessment", "Crack assessment and repair."],
      [
        "Waterproofing repairs",
        "Waterproofing repairs.",
      ],
      [
        "Surface restoration",
        "Plaster and paint restoration.",
      ],
      [
        "Damp repairs",
        "Repair of damp walls and ceilings.",
      ],
      [
        "Periodic inspection",
        "Periodic inspection and maintenance.",
      ],
    ],
  },
  {
    title: "15. Turnkey Construction",
    intro:
      "Turnkey service combines planning, construction, finishing, and handover under one agreement.",
    items: [
      [
        "One point of responsibility",
        "A single team manages the project.",
      ],
      [
        "Planned schedule",
        "Stages follow in a coordinated order.",
      ],
      [
        "Clear documents",
        "Scope, price, and timeline in one place.",
      ],
      [
        "Less coordination effort",
        "The owner deals with one contact.",
      ],
    ],
    conclusion:
      "Turnkey suits busy owners who want a smoother experience.",
  },
];

const serviceNeeds = [
  {
    project: "New House",
    services:
      "Planning, approvals support, foundation, structure, roofing, services, finishing, and interiors.",
  },
  {
    project: "Renovation",
    services:
      "Inspection, selective demolition, upgrades to services, finishing, and interiors.",
  },
  {
    project: "Shop or Clinic",
    services: "Layout planning, utilities, finishing, and fit-out.",
  },
  {
    project: "Extension",
    services:
      "Structural check, extension design, connection work, and finishing.",
  },
];

const faqs = [
  {
    question: "What construction services are available in Haldwani?",
    answer:
      "Common services include planning, foundation, structure, waterproofing, electrical and plumbing, finishing, interiors, renovation, and repairs.",
  },
  {
    question: "What is turnkey construction?",
    answer:
      "One company handles planning, construction, finishing, and handover under a single agreement.",
  },
  {
    question: "Do I need approvals before construction?",
    answer:
      "Usually, yes. Plans generally need clearance from the relevant local authority, so confirm requirements.",
  },
  {
    question: "Why is waterproofing important in Haldwani?",
    answer:
      "Heavy monsoon rain can cause leaks and damp, so proper waterproofing protects the building.",
  },
  {
    question: "Can I add a floor to my existing house?",
    answer:
      "Possibly, after a structural check of the foundation and existing frame.",
  },
  {
    question: "Can construction and interiors be planned together?",
    answer:
      "Yes. Planning both together reduces rework and keeps wiring, plumbing, and storage organized.",
  },
  {
    question: "How should I compare quotes?",
    answer:
      "Give every firm the same scope and compare services included, materials, timeline, and warranty.",
  },
  {
    question: "How do I get a quote from Space Build Haldwani?",
    answer:
      "Contact the team through the website, book a site visit, and receive an itemized estimate for your project.",
  },
];

export default function Content() {
  return (
    <section className="bg-white py-10 md:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:gap-10 lg:px-8">
        <article className="min-w-0 lg:col-span-2">
          <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            Haldwani Construction Services: A Complete Guide to What You Can
            Plan, by Space Build Haldwani
          </h1>

          <p className="mb-6 leading-7 text-gray-700">
            Construction is not one single service. A building project is a
            chain of linked services, from planning and approvals to foundation,
            structure, services, finishing, and interiors. Families and
            business owners in Haldwani often discover this late, when a gap
            between two services causes delay, rework, or extra cost. Knowing
            the full list of services in advance helps you decide what you
            need, ask the right questions, and compare offers properly. This
            guide explains the main construction services available in Haldwani,
            what each one covers, and how to plan them as one connected
            project, the way Space Build Haldwani approaches construction
            together with interiors.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
            Why Understanding Services Matters
          </h2>

          <p className="mb-4 leading-7 text-gray-700">
            When you ask for a quote for &quot;construction,&quot; different
            firms may include very different things. One may price only the
            structure. Another may include plastering, flooring, and painting.
            A third may add interiors. Without a clear list of services,
            comparing quotes becomes confusing.
          </p>

          <p className="mb-3 leading-7 text-gray-700">
            A service list helps you:
          </p>

          <ul className="mb-6 list-disc space-y-2 pl-6 leading-7 text-gray-700">
            <li>Define your scope in writing.</li>
            <li>Compare quotes on equal terms.</li>
            <li>Avoid gaps between trades.</li>
            <li>Plan the budget in stages.</li>
            <li>Spot items that are missing or excluded.</li>
          </ul>

          <h2 className="mb-5 mt-8 text-2xl font-bold text-gray-900">
            Construction Services Available in Haldwani
          </h2>

          {constructionServices.map((service) => (
            <section key={service.title} className="mb-8">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>

              {service.intro && (
                <p className="mb-3 leading-7 text-gray-700">
                  {service.intro}
                </p>
              )}

              <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-700">
                {service.items.map(([label, description]) => (
                  <li key={label}>
                    <strong>{label}:</strong> {description}
                  </li>
                ))}
              </ul>

              {service.conclusion && (
                <p className="mt-3 leading-7 text-gray-700">
                  {service.conclusion}
                </p>
              )}
            </section>
          ))}

          <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
            How to Choose the Services You Need
          </h2>

          <p className="mb-4 leading-7 text-gray-700">
            The right service combination depends on whether you are building
            from scratch, renovating, opening a commercial space, or extending
            an existing property.
          </p>

          <div className="mb-5 overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-left text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Project Type
                  </th>
                  <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">
                    Services to Consider
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {serviceNeeds.map((item) => (
                  <tr key={item.project}>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">
                      {item.project}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {item.services}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-6 leading-7 text-gray-700">
            Write your list of services before asking for quotes, so every firm
            prices the same scope.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
            Questions to Ask About Services
          </h2>

          <ul className="mb-6 list-disc space-y-2 pl-6 leading-7 text-gray-700">
            <li>Which of these services are included in your quote?</li>
            <li>Which are excluded, and who handles them?</li>
            <li>Who prepares and checks structural drawings?</li>
            <li>
              How do you coordinate electrical, plumbing, and interior work?
            </li>
            <li>How is quality checked at each stage?</li>
            <li>What does your warranty cover?</li>
            <li>How are changes handled once work begins?</li>
          </ul>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
            Understanding Cost Across Services
          </h2>

          <p className="mb-4 leading-7 text-gray-700">
            Cost depends on size, design, material grade, site conditions, and
            finish level. Rates also change with material prices and labor
            availability, so published figures can go out of date quickly.
          </p>

          <ul className="mb-6 list-disc space-y-2 pl-6 leading-7 text-gray-700">
            <li>
              <strong>Planning and approvals:</strong> Fees depend on project
              size and complexity.
            </li>
            <li>
              <strong>Structure:</strong> Driven by area, floors, and material
              grade.
            </li>
            <li>
              <strong>Finishing:</strong> Varies widely with flooring, tiles,
              and fittings.
            </li>
            <li>
              <strong>Interiors:</strong> Range from basic to premium depending
              on materials and design.
            </li>
            <li>
              <strong>Repairs and renovation:</strong> Depend on the condition
              of the existing building.
            </li>
          </ul>

          <p className="mb-6 leading-7 text-gray-700">
            A detailed estimate after a site visit and design discussion is
            the only reliable figure.
          </p>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
            Common Mistakes When Planning Services
          </h2>

          <ul className="mb-6 list-disc space-y-2 pl-6 leading-7 text-gray-700">
            <li>Comparing quotes with different scopes.</li>
            <li>Leaving out electrical and plumbing planning.</li>
            <li>Ignoring waterproofing until leaks appear.</li>
            <li>Planning interiors only after construction ends.</li>
            <li>Starting without approvals or finalized drawings.</li>
            <li>Paying large amounts before work progresses.</li>
          </ul>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
            Local Factors That Affect Services in Haldwani
          </h2>

          <ul className="mb-6 list-disc space-y-3 pl-6 leading-7 text-gray-700">
            <li>
              <strong>Seismic safety:</strong> Structural quality is essential.
            </li>
            <li>
              <strong>Monsoon rainfall:</strong> Waterproofing and drainage
              need priority.
            </li>
            <li>
              <strong>Humidity:</strong> Materials should resist moisture and
              damp.
            </li>
            <li>
              <strong>Soil and slope:</strong> Foundation design should match
              site conditions.
            </li>
            <li>
              <strong>Approvals:</strong> Building plans usually need clearance
              from the relevant local authority.
            </li>
          </ul>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
            Materials That Suit Haldwani Homes
          </h2>

          <p className="mb-4 leading-7 text-gray-700">
            Haldwani has warm, humid summers, a wet monsoon, and cool winters,
            so material choices matter.
          </p>

          <ul className="mb-6 list-disc space-y-2 pl-6 leading-7 text-gray-700">
            <li>
              <strong>Quality cement and steel:</strong> Reliable grades
              suitable for structural work.
            </li>
            <li>
              <strong>Damp-proofing and waterproofing products:</strong> For
              roofs, bathrooms, and external walls.
            </li>
            <li>
              <strong>Moisture-resistant boards:</strong> Best for kitchens
              and wet-area storage.
            </li>
            <li>
              <strong>Rust-resistant hardware:</strong> Keeps hinges and
              channels smooth through humid months.
            </li>
            <li>
              <strong>Breathable paint finishes:</strong> Help walls resist
              damp marks.
            </li>
          </ul>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
            The Process at Space Build Haldwani
          </h2>

          <p className="mb-4 leading-7 text-gray-700">
            A clear process keeps cost, time, and quality under control. Share
            your project type in the free consultation, and the team will
            discuss which services fit your plan.
          </p>

          <ol className="mb-6 list-decimal space-y-3 pl-6 leading-7 text-gray-700">
            <li>
              <strong>Free consultation:</strong> Share your needs, family
              routine, style preference, and budget range.
            </li>
            <li>
              <strong>Site visit and measurement:</strong> The team records
              dimensions and notes site conditions.
            </li>
            <li>
              <strong>Concept and layout:</strong> Room placement and flow are
              planned for comfort.
            </li>
            <li>
              <strong>3D visualization:</strong> You see the planned look
              before work begins.
            </li>
            <li>
              <strong>Itemized quotation:</strong> Every item is listed with
              quantity, material, and rate.
            </li>
            <li>
              <strong>Material approval:</strong> Samples are shown so you can
              confirm finishes.
            </li>
            <li>
              <strong>Execution:</strong> Skilled workers handle construction,
              electrical work, painting, and installation.
            </li>
            <li>
              <strong>Quality check and handover:</strong> Every unit is
              inspected before the keys are handed over.
            </li>
          </ol>

          <h2 className="mb-3 mt-8 text-2xl font-bold text-gray-900">
            Why Homeowners Choose Space Build Haldwani
          </h2>

          <ul className="mb-6 list-disc space-y-3 pl-6 leading-7 text-gray-700">
            <li>
              <strong>Honest estimates:</strong> Itemized lists with no vague
              line items.
            </li>
            <li>
              <strong>Integrated planning:</strong> Construction and interiors
              considered together.
            </li>
            <li>
              <strong>Flexible packages:</strong> Options for different
              spending levels without compromising safety.
            </li>
            <li>
              <strong>Coordinated execution:</strong> Design and site work
              stay aligned for steady quality.
            </li>
            <li>
              <strong>Dedicated coordinator:</strong> One contact keeps you
              updated at every stage.
            </li>
            <li>
              <strong>Written warranty:</strong> Clear terms on workmanship
              after handover.
            </li>
          </ul>

          <p className="mb-8 leading-7 text-gray-700">
            To view completed projects, explore services, or request a
            quotation, visit the official website at{" "}
            <a
              href="https://www.spacebuild.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900"
            >
              https://www.spacebuild.co.in/
            </a>
            .
          </p>

          <h2 className="mb-5 mt-10 text-2xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {index + 1}. {faq.question}
                </h3>
                <p className="leading-7 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </article>

        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-24">
            <LandingEnquiry />
          </div>
        </aside>
      </div>
    </section>
  );
}
