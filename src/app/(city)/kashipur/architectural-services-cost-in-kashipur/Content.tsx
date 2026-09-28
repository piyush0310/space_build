
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  const sections = [
    {
      title: "What Do Architectural Services Include?",
      points: [
        "Consultation and requirement study: Understanding your family, lifestyle, budget, plot details and Vastu expectations before design begins.",
        "Concept design and floor planning: Layout options for rooms, staircase, parking, open areas and future expansion.",
        "3D elevation and exterior design: A visual preview of the facade with colours, materials, balconies and lighting, so you can decide before construction.",
        "Detailed working drawings: Drawings that builders and engineers can follow during construction.",
        "Vastu-integrated planning: Guidance on entrance, kitchen, bedrooms, pooja room, staircase, toilets, water tanks and open spaces, from plot evaluation to final inspection.",
        "Construction monitoring: Stage-wise guidance, layout verification and site inspection when required.",
        "Interior coordination: Planning of kitchens, wardrobes, lighting and furniture along with the structure.",
      ],
    },
    {
      title: "How Architects Usually Charge",
      content: [
        {
          heading: "Percentage of Construction Cost",
          paragraphs: [
            "This is one of the most common models, where the fee is a share of the total construction budget. Market sources commonly place these fees anywhere from about 3% to 15% of construction cost, depending on complexity, size and location.",
            "Simple residential homes generally sit toward the lower end, while premium homes and complex commercial projects sit higher. This model is easy to understand, but you should confirm exactly which services are covered.",
          ],
        },
        {
          heading: "Rate Per Square Foot",
          paragraphs: [
            "Many homeowners find this model easiest for early budgeting because the fee is linked to the built-up area of the home.",
            "Published market ranges vary, but one commonly quoted range for residential architect fees is roughly Rs 50 to Rs 150 per square foot of built-up area. A design-only package costs less than a full-service package with drawings and site supervision.",
          ],
        },
        {
          heading: "Fixed or Lump-Sum Fee",
          paragraphs: [
            "For clearly defined work, such as a single elevation or a plan review, a fixed price gives you cost certainty.",
            "Be careful when a lump-sum quote is far below normal market levels because that can mean the scope is much narrower than a full-service package. Always ask for the complete list of deliverables in writing before you agree.",
          ],
        },
        {
          heading: "Stage-Wise Payment",
          paragraphs: [
            "Most architects divide payment into milestones rather than taking the full fee at once. A common approach is payment tied to concept design, design development, working drawings and project completion.",
            "This protects both sides because you pay as the work progresses and the architect is paid for completed stages.",
          ],
        },
      ],
    },
    {
      title: "Key Factors That Affect Architectural Services Cost in Kashipur",
      points: [
        "Plot size and built-up area: A larger area usually means higher total fees, although the per-square-foot rate can fall as the area increases.",
        "Type of project: A single-storey home, duplex, villa, farmhouse and commercial building all involve different levels of design effort.",
        "Design complexity: Curved walls, double-height spaces, multiple levels, custom facades and unusual plot shapes require more time and detailing.",
        "Scope of services: A basic floor plan costs less than a package that includes 3D elevation, working drawings, Vastu planning, interior coordination and site visits.",
        "Site supervision: Adding construction supervision raises the fee because it requires stage-wise support and visits.",
        "Vastu requirements: Detailed Vastu planning, plan reviews and stage-wise checks add expert time to the project.",
        "Location and city tier: Rates in large metro cities are generally higher, while smaller cities can have lower charges for similar work.",
        "Number of revisions: More design rounds and late changes increase both time and cost.",
        "Project timeline: Tight deadlines or fast-track work may require extra resources.",
        "Experience of the design team: Established professionals can charge more, but experience can save money through better planning and fewer mistakes.",
      ],
    },
    {
      title: "What Is Usually Charged Separately",
      points: [
        "Structural design: Structural drawings are commonly quoted separately from the main architectural fee, so ask whether they are included.",
        "Plumbing and electrical drawings: These may be included in a package or billed as add-ons depending on the scope.",
        "Interior design: Detailed interiors, modular kitchens, wardrobes, ceilings and furniture are separate services, although they can be coordinated with architecture.",
        "Landscape design: Gardens, driveways and outdoor seating may need an additional scope.",
        "Government approvals and documentation: Municipal or authority-related paperwork is usually handled separately, so confirm the process with your professional.",
        "Taxes: Professional fees can attract GST, which is usually charged in addition to the professional fee.",
        "Model and presentation extras: Walkthroughs, additional renders and physical models may cost extra.",
      ],
    },
    {
      title: "Our Approach to Pricing at Space Build",
      points: [
        "Scope-based quotation: We prepare a quote after understanding your plot, requirements and the services you actually need, so you pay for what is relevant to your project.",
        "Clear deliverables: We explain what is included, such as floor plans, 3D elevation, working drawings, Vastu guidance and site visits, so you know what to expect.",
        "No one-size-fits-all pricing: A small plot with a simple layout and a large villa with custom design need different effort, so we do not apply one flat rate to everyone.",
        "Consultation first: Share your plot details and requirements online or on-site, and we guide you toward the right service level and budget.",
        "Confidential handling: All project information remains completely confidential.",
        "Interior cost guidance: If you also plan interiors, our team can guide you on budgeting for the inside of your home.",
      ],
    },
    {
      title: "Cost by Type of Project",
      content: [
        {
          heading: "Residential Homes and Bungalows",
          paragraphs: [
            "Costs depend on plot size, number of floors, room count and design style. A home with a simple, regular layout generally needs less design effort than a custom villa with multiple levels.",
            "Including Vastu planning, 3D elevation and construction guidance increases the scope, but it also reduces the risk of costly corrections later.",
          ],
        },
        {
          heading: "Duplex Homes and Villas",
          paragraphs: [
            "These projects involve more structural coordination, staircase planning, balconies and facade design.",
            "Premium finishes, larger areas and custom features raise the design workload and fee. Early planning of services, parking and landscaping avoids expensive changes.",
          ],
        },
        {
          heading: "Farmhouses and Large Plots",
          paragraphs: [
            "Larger land means more planning for gardens, driveways, water sources, boundary walls and outdoor areas.",
            "The per-area cost may reduce because of scale, but the total scope can still be significant.",
          ],
        },
        {
          heading: "Renovation and Redesign Projects",
          paragraphs: [
            "Renovation fees depend on how much of the layout, facade or interior you want to change.",
            "Practical improvements and Vastu corrections that avoid heavy demolition can help control cost. Existing plans can be reviewed before work starts, so improvements are finalised on paper first.",
          ],
        },
        {
          heading: "Commercial and Office Spaces",
          paragraphs: [
            "Offices, showrooms and shops require customer-flow planning, staff comfort, lighting and branding.",
            "Commercial architecture is often more complex than simple residential work because design and coordination effort can be greater.",
          ],
        },
      ],
    },
    {
      title: "Ways to Reduce Architectural and Project Costs",
      points: [
        "Consult before you build: Early planning reduces future modifications, which are often the most expensive part of a project.",
        "Finalise drawings before construction: Changing walls, doors or windows after work begins wastes material and labour.",
        "Keep the layout simple where possible: Regular room shapes and efficient plumbing lines reduce structural and construction complexity.",
        "Prioritise your needs: Decide the must-have rooms and features first, and phase optional extras such as landscaping or decorative lighting.",
        "Choose the right service level: If you already have a builder and engineer, you may not need full supervision, but keep stage-wise checks on important elements.",
        "Combine services: Getting architecture, Vastu planning and interior coordination from one team avoids duplicate effort and conflicting advice.",
        "Share a clear brief: A detailed requirement list saves design hours and reduces revisions.",
      ],
    },
    {
      title: "Hidden Costs of Choosing Only the Cheapest Option",
      points: [
        "Poor space planning: A cheap plan may waste area, leaving you with corridors, awkward rooms and inadequate storage.",
        "Expensive corrections: Errors in layout, staircase position or Vastu alignment can require demolition after construction.",
        "Unclear scope: Low quotes often exclude drawings, site visits or revisions that you later have to pay for.",
        "Communication problems: Lack of stage-wise guidance can lead to misunderstandings with builders and contractors.",
        "Lower long-term value: A poorly designed home may be less comfortable and harder to sell or rent.",
      ],
    },
    {
      title: "What to Ask Before Hiring an Architect",
      points: [
        "What exactly is included in the fee? Ask for a clear list of drawings, visits, revisions and consultations.",
        "How is payment structured? Understand the stages and what you receive at each one.",
        "Are structural and service drawings included? Confirm which drawings are part of the package.",
        "Is construction supervision available? Find out whether site visits are included or charged separately.",
        "How many design revisions are allowed? This helps avoid disputes later.",
        "Do you offer Vastu guidance? If Vastu matters to you, make sure it is integrated from the start.",
        "What documents do you need? Preparing plot details and drawings in advance speeds up the process.",
      ],
    },
    {
      title: "Documents to Keep Ready for an Accurate Quote",
      points: [
        "Plot dimensions and site details.",
        "Existing architectural floor plans, if available.",
        "Google location or site photographs of the plot.",
        "Structural drawings and construction stage details, if the project has already started.",
        "Your requirement list, including rooms, floors, parking and special needs.",
        "Your approximate budget and preferred timeline.",
      ],
    },
    {
      title: "Why Choose Space Build",
      points: [
        "Architecture, Vastu and interiors under one roof: You avoid managing multiple agencies and receive consistent advice.",
        "Personalised design: Every plan is created for your plot and family, and not copied from a template.",
        "Transparent communication: We explain options, scope and decisions in simple language.",
        "Support from planning to completion: Our guidance continues through drawings, construction and final inspection.",
        "Flexible consultation: Both online and on-site consultations are available.",
        "Client-approved experience: Clients describe our process as smooth and well managed, praising our communication and workmanship.",
      ],
    },
  ];

  const faqs = [
    {
      question: "1. How much do architectural services cost in Kashipur?",
      answer:
        "The cost depends on plot size, project type, scope and design complexity, so a proper quote needs your requirements.",
    },
    {
      question: "2. Do you charge per square foot or by percentage?",
      answer:
        "We prepare a scope-based quote after understanding your project and the services you need.",
    },
    {
      question: "3. Is Vastu planning included?",
      answer:
        "Vastu guidance can be integrated into the service, and we confirm the scope during consultation.",
    },
    {
      question: "4. Are structural drawings included?",
      answer:
        "This depends on the package, so we clearly explain what is included in the quotation.",
    },
    {
      question: "5. Do you charge for site visits?",
      answer:
        "Site visits can be arranged when required, and the terms are confirmed in advance.",
    },
    {
      question: "6. Can I get a quote online?",
      answer:
        "Yes. Share your plot details and requirements, and our team will guide you.",
    },
    {
      question: "7. Can I pay in stages?",
      answer:
        "Stage-wise payment is common, and we discuss the structure during consultation.",
    },
    {
      question: "8. Does hiring an architect really save money?",
      answer:
        "Yes. Good planning reduces errors, rework and wastage, which can often offset the design cost.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <div className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Architectural Services Cost in Kashipur – Fees, Factors and
              Budget Guide by Space Build
            </h2>

            <p>
              If you are planning a new home, a renovation or a commercial
              building, one of your first questions will be about architectural
              services cost in Kashipur. The honest answer is that the cost
              depends on your plot, scope of work and how much support you want
              from the design stage to final handover.
            </p>

            <p>
              Space Build is a team of architects, interior designers and
              construction professionals. We believe clients should understand
              what they are paying for before they commit. Clear scope and
              transparent communication are part of how we work.
            </p>

            <p>
              This guide explains how architects usually charge, what affects
              the price, what is included in a proper service and how you can
              plan your budget wisely.
            </p>

            <p>
              Our philosophy is Plan Right, Build Right, Live Better. Good
              planning at the start is one of the best ways to reduce your total
              project cost later.
            </p>

            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                  {section.title}
                </h2>

                {section.content ? (
                  <div className="space-y-6">
                    {section.content.map((item) => (
                      <div key={item.heading} className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.heading}
                        </h3>
                        {item.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="list-disc space-y-2 pl-6">
                    {section.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Serving Kashipur and Nearby Areas
            </h2>

            <p>
              We work with homeowners and business owners in and around
              Kashipur through online and on-site consultations. Plot details,
              photographs and location pins can be shared digitally, so you can
              start the process from home.
            </p>

            <p>
              Site visits are arranged when required for inspections and
              stage-wise guidance.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>

            <p>
              A well-planned project begins with a clear scope and the right
              professional guidance. Share your plot details and requirements
              with Space Build to receive practical architectural guidance and a
              suitable project quotation.
            </p>

            <p>
              📞 <strong>WhatsApp / Call:</strong>{" "}
              <a
                href="tel:+919927611780"
                className="text-blue-600 hover:underline"
              >
                +91 9927611780
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