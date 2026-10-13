
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: '1. What "Best" and "Affordable" Should Mean',
    intro:
      "No exam or government list ranks private designers, so define both words yourself.",
    points: [
      "Best: a designer who fits your home, family and timeline, and proves it.",
      "Affordable: fair pricing with durable work, not simply the lowest figure.",
      "Look for clear drawings and named materials.",
      "Expect honest quotations without hidden extras.",
      "Check whether reliable repairs are available after handover.",
    ],
    conclusion:
      "Prices change with market conditions, so always request a current itemised written quotation.",
  },
  {
    title: "2. Why the Build Route Often Matters More Than the Name",
    intro:
      "Two designers can draw identical rooms yet deliver very different bills and results because their build routes differ.",
    points: [
      "Labour, factory overhead, delivery and wastage fall in different places.",
      "Quality control happens at different points.",
      "Repair speed differs by route.",
      "Customisation limits vary.",
      "Delivery to a foothill city adds its own complications.",
    ],
    conclusion:
      "Ask which route your designer plans to use before comparing totals.",
  },
  {
    title: "3. Route A: Local Carpenter Working on Site",
    intro:
      "A carpenter builds furniture inside your home from measured drawings. This is the traditional and flexible approach.",
    groups: [
      {
        title: "Strengths",
        points: [
          "Fits awkward walls, corners and slopes.",
          "Easy to adjust during work.",
          "Repairs are usually quick and local.",
          "Suitable for small, custom changes.",
        ],
      },
      {
        title: "Weaknesses",
        points: [
          "Dust, noise and a longer stay in your home.",
          "Quality depends heavily on the individual carpenter.",
          "Finishing quality can vary in humid weather.",
          "Waste and rework can raise costs if supervision is weak.",
        ],
      },
    ],
    conclusion:
      "Best for odd-shaped rooms, small custom items and owners who can supervise closely.",
  },
  {
    title: "4. Route B: Factory-Made Modular Units",
    intro:
      "Units are made in a factory from exact measurements, then delivered and assembled. This is common for kitchens and wardrobes.",
    groups: [
      {
        title: "Strengths",
        points: [
          "Consistent finish and edge sealing.",
          "Faster installation and less dust at home.",
          "Predictable specifications and warranties.",
          "Less on-site wastage.",
        ],
      },
      {
        title: "Weaknesses",
        points: [
          "Measurement errors are costly because units are made in advance.",
          "Standard sizes may waste space in unusual layouts.",
          "Delivery to your city and building adds time and charges.",
          "Modifications after production are difficult.",
        ],
      },
    ],
    conclusion:
      "Best for regular layouts, kitchens and families who want less mess and clear warranties.",
  },
  {
    title: "5. Route C: The Hybrid",
    intro:
      "A hybrid mixes both routes. Factory-made carcasses or fittings combine with local carpentry for custom details and finishing.",
    groups: [
      {
        title: "Strengths",
        points: [
          "Uses factory consistency where it counts.",
          "Keeps local flexibility for awkward spaces.",
          "Allows cost balancing across items.",
          "Makes local repairs easier.",
        ],
      },
      {
        title: "Weaknesses",
        points: [
          "Needs strong coordination between factory and site teams.",
          "Responsibility can become unclear if something fails.",
          "Requires clear drawings so parts fit together.",
        ],
      },
    ],
    conclusion:
      "Best for many mid-sized homes, provided one party is responsible for the entire project.",
  },
  {
    title: "6. Matching the Build Route to Each Item",
    intro:
      "Different parts of a home suit different routes. Use this as a starting guide and ask your designer to justify any change.",
    points: [
      "Kitchen cabinets: factory modular or hybrid, because moisture control and hardware matter.",
      "Wardrobes: factory modular for standard walls, local carpentry for unusual niches.",
      "TV and display units: local carpentry or hybrid for custom sizes.",
      "Beds and storage beds: factory or hybrid, depending on the mechanism.",
      "Study tables and shelves: a local carpenter is often economical.",
      "Pooja unit: local carpentry for custom shape and detailing.",
      "False ceilings and wall panelling: local specialists.",
    ],
    conclusion:
      "Ask the designer to assign a build route to every item in the quotation.",
  },
  {
    title: "7. Where the Money Goes in Each Route",
    intro:
      "Costs hide in different places. Knowing them helps you read quotations fairly.",
    points: [
      "Local route: labour time, wastage, supervision and finishing effort.",
      "Factory route: factory overheads, transport, packaging and installation visits.",
      "Hybrid route: coordination effort and two sets of handling.",
      "All routes: material grade, hardware quality and finishing level.",
    ],
    conclusion:
      "Ask where the designer expects to save money and which quality elements will not be compromised.",
  },
  {
    title: "8. Quality Control Points for Each Route",
    intro:
      "Quality is easier to protect when you know where to look.",
    points: [
      "Local: check board grade on arrival, edge sealing, joint tightness, alignment and polish drying.",
      "Factory: verify measurements before production, check packaging on delivery and inspect each unit before installation.",
      "Hybrid: confirm that factory parts and site additions match the drawings.",
      "All routes: compare delivered materials with approved samples.",
    ],
    conclusion:
      "Ask for quality-control hold points in writing, such as approval before polishing or final fixing.",
  },
  {
    title: "9. Humid Foothill Conditions and Route Choice",
    intro:
      "Haldwani's humid monsoon months, cold winters and warm summers can influence which route performs better.",
    points: [
      "Factory-finished, well-sealed units can provide more consistent moisture protection.",
      "On-site polishing and painting can suffer in damp weather.",
      "Local carpenters may use seasoned wood suited to the area.",
      "Boards stored in damp rooms can swell before installation.",
      "Hinges and channels need quality brands regardless of the route.",
    ],
    conclusion:
      "Ask how the designer will keep materials dry and where finishing work will be carried out.",
  },
  {
    title: "10. Delivery and Logistics to Haldwani",
    intro:
      "Distance and access change the economics of factory routes. Ask practical questions before placing an order.",
    points: [
      "Where is the factory, and how long does transport take?",
      "Who pays for loading, unloading and damage?",
      "Can units pass through your doors, stairs and lanes?",
      "Who assembles the units, and how long will the team stay?",
      "What happens if a part arrives damaged?",
      "How are delays handled during monsoon or fog?",
    ],
    conclusion:
      "A designer who has delivered to similar homes should be able to explain the process in detail.",
  },
  {
    title: "11. Repairs and Warranty by Route",
    intro:
      "The cheapest route can become costly when repairs are slow. Check the repair process before signing.",
    points: [
      "Local carpenter: ask whether they will return and how quickly.",
      "Factory: ask where service requests go and who visits your home.",
      "Hybrid: ask which party handles each type of failure.",
      "All routes: get warranty terms in writing, covering carpentry, hardware and finishes.",
    ],
    conclusion:
      "Keep warranty papers, bills and brand labels together for future repairs.",
  },
  {
    title: "12. The Designer's Role in Each Route",
    intro:
      "A designer can support your project at different levels. Match the service to your confidence and requirements.",
    points: [
      "Design only: drawings for you to execute through a route you choose.",
      "Design plus supervision: drawings and periodic site checks.",
      "Design and build: one party manages design and execution.",
      "Remote design with local execution: drawings supplied digitally and built by a local team.",
    ],
    conclusion:
      "Ask who is responsible if the drawings and execution do not match.",
  },
  {
    title: "13. Questions to Ask Any Designer About the Build Route",
    intro:
      "These questions help reveal how a designer actually delivers a project.",
    points: [
      "Which route will you use for each item, and why?",
      "Where will my furniture be made?",
      "Who inspects it before it reaches my home?",
      "Who handles delivery and installation?",
      "What happens if measurements are wrong?",
      "Who repairs defects, and how quickly?",
      "Can I visit your workshop or a finished home?",
    ],
    conclusion:
      "Specific answers matter more than polished assurances.",
  },
  {
    title: "14. Comparing Quotations Across Build Routes",
    intro:
      "A route changes what a quotation includes. Normalise the scope before comparing totals.",
    points: [
      "Match the scope, materials and brands.",
      "Check transport, installation and polishing charges.",
      "Compare warranty terms.",
      "Include expected repair costs.",
      "Note who bears the risk for measurement errors.",
      "Review exclusions such as civil work and appliances.",
    ],
    conclusion:
      "If one quotation is far lower than the others, ask exactly what is missing.",
  },
  {
    title: "15. Timeline and Seasons by Build Route",
    intro:
      "Each route responds differently to weather and festivals, so build realistic allowances into the schedule.",
    points: [
      "Factory orders need lead time, so measure and approve early.",
      "Local carpentry may be affected by damp spells and festival absences.",
      "Painting and polishing need dry walls.",
      "Delivery may slow during heavy rain or fog.",
      "Book skilled carpenters before busy seasons.",
      "Keep buffer weeks for delays.",
    ],
    conclusion:
      "Ask for a written schedule that allows for weather and festival-related delays.",
  },
  {
    title: "16. A Simple Budget Plan for Affordable Interiors",
    intro:
      "Choose the route that protects your priorities, then plan your money carefully.",
    points: [
      "Set a budget ceiling and keep about ten percent in reserve.",
      "Separate civil work, interiors, furniture and décor.",
      "Spend on hidden quality such as boards, hardware, wiring and waterproofing.",
      "Save on decorative extras and simple finishes.",
      "Defer statement furniture and accessories if necessary.",
      "Phase rooms if cash flow is tight.",
    ],
  },
  {
    title: "17. Verify Before You Commit",
    intro:
      "Evidence matters more than portfolios. Check the work and the people responsible for it.",
    points: [
      "Visit completed homes, ideally using both local and factory routes.",
      "Visit the workshop or factory if possible.",
      "Inspect joinery, hinges, edges and finishes.",
      "Look for warping, peeling and damp.",
      "Ask homeowners how repairs were handled.",
      "Meet the person who will supervise your site.",
      "Compare at least three itemised quotations.",
    ],
    conclusion:
      "Treat a portfolio with no visitable projects as a reason for caution.",
  },
  {
    title: "18. Contract and Payment Habits",
    intro:
      "A written agreement protects every build route and clarifies each party's responsibilities.",
    points: [
      "Attach signed drawings and specifications.",
      "Name materials, brands and grades.",
      "State the route for each item.",
      "Record the total price and milestone-based payments.",
      "Specify the start date, completion date and delay terms.",
      "Put warranty and repair procedures in writing.",
      "Set rules for changes and extra work.",
      "Include a dispute-handling method and witness signatures where appropriate.",
      "Use a modest advance, bank transfers and retained receipts.",
      "Hold the final amount until the snag list is cleared, as agreed in the contract.",
    ],
    conclusion:
      "Do not pay ahead of completed work or make substantial payments without written protections.",
  },
  {
    title: "19. Red Flags in Build Route Conversations",
    intro:
      "Several of these warning signs together should make you pause before proceeding.",
    points: [
      "No clear answer about where furniture is made.",
      "No site measurement before ordering.",
      "No named brands or material samples.",
      "No written warranty or repair process.",
      "Rates far below every other offer without explanation.",
      "Pressure to pay large cash advances.",
      "Refusal to show completed work.",
    ],
    conclusion:
      "Walking away before signing costs nothing, while leaving a project midway can cost a fortune.",
  },
];

const faqs = [
  {
    question: "What does build route mean?",
    answer:
      "It describes where and how furniture is made: by a local carpenter on site, in a factory, or through a hybrid of both.",
  },
  {
    question: "Which interior build route is cheapest?",
    answer:
      "It depends on the item, design and supervision. Compare itemised quotations that include delivery, installation and repair terms.",
  },
  {
    question: "Is factory modular better for kitchens?",
    answer:
      "It often offers consistent finishing and edge sealing, but accurate measurements before production are essential.",
  },
  {
    question: "When does a local carpenter make sense?",
    answer:
      "A local carpenter can suit awkward spaces, small custom pieces and items needing on-site adjustments, provided supervision is strong.",
  },
  {
    question: "What is a hybrid interior build route?",
    answer:
      "It combines factory-made parts with local carpentry for custom details, ideally with one party responsible for the whole project.",
  },
  {
    question: "How do repairs differ by build route?",
    answer:
      "Local carpenters may return directly, factory repairs follow a service process, and hybrid projects need clear responsibility for each type of defect.",
  },
  {
    question: "How should I pay an interior designer?",
    answer:
      "Agree on a reasonable advance after signing a contract, then link further payments to milestones and keep bank-transfer receipts.",
  },
  {
    question: "When should I walk away from an interior designer?",
    answer:
      "Be cautious if the designer cannot explain the build route, skips site measurements, refuses written terms or demands a large cash advance.",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <article className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Best Affordable Interior Designers in Haldwani: Where the
                Furniture Is Made Matters as Much as Who Draws It
              </h1>

              <p className="leading-7">
                Families searching for the best affordable interior designers
                in Haldwani usually compare portfolios and quotations. They
                often skip a quieter question that decides cost, quality and
                repair headaches: where will the furniture actually be made?
              </p>

              <p className="leading-7">
                Think of buying a shirt. You can buy ready-made, hire a tailor
                or alter a ready-made piece. Each route differs in price, fit
                and repair. Interiors work the same way. This guide explains
                three build routes, shows what suits each item in your home
                and lists questions to ask any designer. Each section opens
                with a short idea, followed by practical points you can use.
              </p>

              <p className="rounded-lg border-l-4 border-rose-700 bg-gray-50 p-4 text-sm leading-6">
                <strong>Important:</strong> There is no independently verified
                ranking presented here. Compare designers based on your
                requirements, written quotations, workmanship and repair
                commitments. Always confirm current prices before committing.
              </p>
            </header>

            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>

                <p className="leading-7">{section.intro}</p>

                {section.groups && (
                  <div className="space-y-4">
                    {section.groups.map((group) => (
                      <div key={group.title} className="space-y-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {group.title}
                        </h3>
                        <ul className="list-disc space-y-2 pl-6">
                          {group.points.map((point) => (
                            <li key={point} className="leading-7">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {section.points && (
                  <ul className="list-disc space-y-2 pl-6">
                    {section.points.map((point) => (
                      <li key={point} className="leading-7">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}

                {section.conclusion && (
                  <p className="leading-7">{section.conclusion}</p>
                )}
              </section>
            ))}

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                20. Compare the Three Interior Build Routes
              </h2>

              <p className="leading-7">
                Each route has different strengths. Use this summary as a
                starting point, then check how the proposed materials, site
                conditions and service terms affect your specific project.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-3 font-semibold text-gray-900">
                        Factor
                      </th>
                      <th className="border p-3 font-semibold text-gray-900">
                        Local carpenter
                      </th>
                      <th className="border p-3 font-semibold text-gray-900">
                        Factory modular
                      </th>
                      <th className="border p-3 font-semibold text-gray-900">
                        Hybrid
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-3 font-medium">Customisation</td>
                      <td className="border p-3">High flexibility</td>
                      <td className="border p-3">
                        Depends on available specifications
                      </td>
                      <td className="border p-3">
                        Combines standard parts and custom details
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Installation</td>
                      <td className="border p-3">
                        More work happens at home
                      </td>
                      <td className="border p-3">
                        Units are assembled on site
                      </td>
                      <td className="border p-3">
                        Factory and site work must be coordinated
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Dust and noise</td>
                      <td className="border p-3">Can be higher</td>
                      <td className="border p-3">
                        Generally less at home
                      </td>
                      <td className="border p-3">
                        Depends on on-site work
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Repairs</td>
                      <td className="border p-3">
                        Often handled locally
                      </td>
                      <td className="border p-3">
                        Depends on factory service
                      </td>
                      <td className="border p-3">
                        Responsibility must be defined
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-3 font-medium">Main risk</td>
                      <td className="border p-3">
                        Variable workmanship and supervision
                      </td>
                      <td className="border p-3">
                        Measurement and delivery errors
                      </td>
                      <td className="border p-3">
                        Coordination and unclear responsibility
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="rounded-lg border border-gray-200 p-4"
                  >
                    <h3 className="font-semibold leading-6 text-gray-900">
                      {index + 1}. {faq.question}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3 border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Choose the Right Build Route Before You Hire
              </h2>

              <p className="leading-7">
                Choosing among the best affordable interior designers in
                Haldwani becomes easier when you decide the build route first.
                Match each item to local carpentry, factory modular or a
                hybrid approach. Ask where it will be made, check delivery and
                repair arrangements, insist on drawings and named materials,
                and put everything into a precise contract.
              </p>

              <p className="leading-7">
                A reliable designer should be willing to explain the route
                openly. Clear information about production, quality control,
                payments and repairs helps protect both your budget and the
                finished interior.
              </p>
            </section>
          </div>
        </article>

        <aside className="ml-auto w-full p-4 lg:w-[42%] lg:pl-10">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Content;
