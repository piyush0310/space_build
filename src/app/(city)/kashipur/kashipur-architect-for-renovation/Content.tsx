import LandingEnquiry from "@/components/LandingEnquiry";
const renovationSigns = [
  "Frequent water seepage, damp walls, or ceiling leaks that keep recurring despite repairs.",
  "Cracks appearing in walls, beams, or columns, which may indicate structural wear over time.",
  "Outdated electrical wiring that is not equipped to handle modern appliance loads safely.",
  "Poor natural lighting or ventilation due to old-style window and room placements.",
  "A layout that no longer suits your current family size, lifestyle, or business needs.",
  "Rising maintenance costs year after year, which often signals it is cheaper to renovate than keep patching problems.",
  "Outdated flooring, plumbing fixtures, or finishes that make the space feel old despite being structurally sound.",
];

const reasonsToHireArchitect = [
  "Renovation is not just cosmetic. It often involves structural assessment, which requires professional expertise rather than only a contractor's opinion.",
  "An architect can identify hidden issues like weak foundations, poor drainage planning, or unsafe load-bearing walls before work begins.",
  "Renovation projects require balancing the old structure with new design elements, which needs careful technical and aesthetic planning.",
  "A qualified architect ensures renovation work complies with current building safety standards, which is especially important given Uttarakhand's seismic zone classification.",
  "Without professional planning, renovation projects often go over budget due to unexpected structural surprises discovered during the project.",
  "An experienced renovation architect can advise on which parts of the structure can be reused and which need replacement, saving unnecessary demolition costs.",
];

const renovationServices = [
  {
    title: "Residential renovation",
    text: "Updating homes, bungalows, and apartments with modern layouts, finishes, and safety upgrades.",
  },
  {
    title: "Kitchen and bathroom remodeling",
    text: "Focused upgrades on the most frequently used and quickly outdated spaces in a home.",
  },
  {
    title: "Structural renovation",
    text: "Reinforcing walls, columns, or foundations that show signs of wear or damage.",
  },
  {
    title: "Facade and exterior renovation",
    text: "Refreshing the outer appearance of a building without altering its core structure.",
  },
  {
    title: "Office and commercial renovation",
    text: "Modernizing workspaces, showrooms, or retail spaces to improve functionality and customer experience.",
  },
  {
    title: "Extension and additional floor construction",
    text: "Adding new rooms or floors to an existing structure to accommodate growing space needs.",
  },
  {
    title: "Heritage and old building restoration",
    text: "Preserving the character of older properties in Kashipur while improving safety and usability.",
  },
];

const renovationProcess = [
  {
    title: "Site assessment",
    text: "The architect visits the property to evaluate structural condition, existing layout, and renovation potential.",
  },
  {
    title: "Client consultation",
    text: "Discussing your requirements, budget, priorities, and timeline for the project.",
  },
  {
    title: "Structural evaluation",
    text: "Identifying any safety concerns that need to be addressed before or during renovation.",
  },
  {
    title: "Design proposal",
    text: "Presenting updated floor plans, material suggestions, and 3D visualizations where needed.",
  },
  {
    title: "Budget and timeline finalization",
    text: "Agreeing on costs, payment milestones, and expected project duration.",
  },
  {
    title: "Approval and documentation",
    text: "Handling any necessary municipal permissions if the renovation involves structural changes or extensions.",
  },
  {
    title: "Execution and supervision",
    text: "Overseeing the renovation work to ensure it matches the approved design and quality standards.",
  },
  {
    title: "Final handover",
    text: "A walkthrough to confirm all work is completed as agreed before final payment.",
  },
];

const costFactors = [
  {
    title: "Scope of work",
    text: "Cosmetic updates cost significantly less than structural repairs or extensions.",
  },
  {
    title: "Age and condition of the building",
    text: "Older structures often reveal hidden issues once work begins, which can affect final costs.",
  },
  {
    title: "Material selection",
    text: "Premium finishes, fixtures, and fittings naturally increase the overall budget.",
  },
  {
    title: "Structural changes",
    text: "Adding or removing walls, floors, or load-bearing elements requires engineering work that adds to the cost.",
  },
  {
    title: "Labor and contractor rates",
    text: "Costs can vary depending on the complexity of work and the experience level of the execution team.",
  },
  {
    title: "Approval and documentation fees",
    text: "These are applicable if the renovation requires municipal permissions for structural changes.",
  },
];

const renovationMistakes = [
  "Skipping a proper structural assessment before starting cosmetic renovation work.",
  "Choosing the cheapest contractor without checking their renovation-specific experience.",
  "Underestimating the budget by not accounting for hidden structural repairs.",
  "Making design decisions without consulting an architect, leading to impractical layouts.",
  "Ignoring ventilation and lighting improvements while focusing only on aesthetics.",
  "Not getting necessary approvals for structural changes or extensions, which can cause legal issues later.",
  "Rushing the process without allowing enough time for proper planning and material sourcing.",
];

const choosingArchitectTips = [
  "Check their specific experience in renovation projects, not just new construction, because the skill sets are different.",
  "Ask to see before-and-after examples of previous renovation work they have completed.",
  "Confirm they work with or have access to a structural engineer for safety assessments.",
  "Discuss their approach to handling unexpected issues discovered during renovation, such as hidden damage.",
  "Ask about their process for minimizing disruption if you are renovating while still living in or using the property.",
  "Get a clear, written agreement covering scope, cost, and timeline before work begins.",
  "Choose someone who listens to your priorities rather than pushing a one-size-fits-all renovation approach.",
];

const structuralConsiderations = [
  "Older buildings in Kashipur may not meet current earthquake-resistant construction standards, making structural evaluation essential.",
  "Renovation work involving load-bearing walls requires careful engineering to avoid compromising the building's stability.",
  "Foundation issues, if present, need to be addressed before any major renovation work begins on upper floors.",
  "Plumbing and electrical systems in older properties often need complete upgrades rather than partial fixes to meet modern safety standards.",
  "A qualified architect will always recommend a structural audit for buildings older than 15 to 20 years before starting significant renovation work.",
];

const propertyRenovationTypes = [
  {
    title: "Independent homes and bungalows",
    text: "Focus on modernizing layouts, improving natural light, and updating finishes while addressing any structural wear.",
  },
  {
    title: "Apartments and duplexes",
    text: "Space optimization becomes key, along with updating plumbing and electrical systems that may be outdated.",
  },
  {
    title: "Commercial spaces and showrooms",
    text: "Renovation often focuses on improving customer flow, updated branding elements, and modern lighting.",
  },
  {
    title: "Industrial and warehouse units",
    text: "Renovation may involve reinforcing structures for heavier equipment or improving safety compliance.",
  },
  {
    title: "Old or heritage properties",
    text: "Renovation requires a delicate balance between preserving character and meeting modern safety and functionality needs.",
  },
];

const whyChooseSpacebuild = [
  "Spacebuild's team includes architects and structural engineers who assess properties thoroughly before recommending any renovation plan.",
  "Every renovation project starts with an honest evaluation of what is truly needed versus what can be preserved, helping clients avoid unnecessary costs.",
  "The team provides transparent, itemized quotes so clients know exactly what they are paying for at each stage.",
  "Regular site supervision ensures renovation work is completed to the agreed quality and design standards.",
  "Spacebuild handles everything from design to execution, reducing the need for clients to coordinate separately with multiple vendors.",
  "Whether it is a single-room makeover or a full-building structural renovation, the approach is tailored to the specific property and client needs.",
];

const smoothRenovationTips = [
  "Be clear about your priorities and budget limits from the very first consultation.",
  "Set realistic expectations about timelines, especially if structural work is involved.",
  "Keep some contingency budget aside for unexpected issues that may surface during renovation.",
  "Communicate openly with your architect about any concerns as the project progresses.",
  "Avoid making frequent changes once the design and materials have been finalized, as this can delay the project and increase costs.",
  "Plan for temporary living or working arrangements if the renovation is extensive and disruptive.",
];

const faqs = [
  {
    question: "Q1. When should I consider renovating instead of rebuilding?",
    answer:
      "Renovation is ideal when the core structure is sound but the layout, finishes, or systems need updating.",
  },
  {
    question: "Q2. Does renovation require municipal approval in Kashipur?",
    answer:
      "Only if structural changes or extensions are involved. Cosmetic updates usually do not require approval.",
  },
  {
    question: "Q3. How long does a typical home renovation take?",
    answer:
      "Depending on the scope, most residential renovations take four to ten weeks to complete.",
  },
  {
    question: "Q4. Can old buildings be made earthquake-resistant during renovation?",
    answer:
      "Yes, structural reinforcement can significantly improve safety in older properties.",
  },
  {
    question: "Q5. Is it possible to renovate while still living in the property?",
    answer:
      "Yes, though it requires careful phased planning to minimize disruption.",
  },
  {
    question: "Q6. What is usually the most expensive part of a renovation?",
    answer:
      "Structural repairs and plumbing or electrical upgrades typically cost more than cosmetic changes.",
  },
  {
    question:
      "Q7. Does Spacebuild handle both design and execution for renovations?",
    answer:
      "Yes, Spacebuild manages the entire renovation process from assessment to final execution.",
  },
  {
    question: "Q8. How do I get an accurate renovation cost estimate?",
    answer:
      "A site visit and structural assessment are necessary for an accurate, itemized quote.",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <div className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Kashipur Architect for Renovation: A Complete Guide by Spacebuild
            </h2>

            <p>
              Many homes and commercial buildings in Kashipur were constructed
              10, 15, or even 20 years ago, when design trends, safety
              standards, and space requirements were very different from today.
              Instead of demolishing and rebuilding, which is expensive and
              time-consuming, most property owners are now choosing renovation
              as a smarter and more cost-effective way to modernize their
              spaces.
            </p>

            <p>
              Whether it is an outdated kitchen, a cramped living room, a
              leaking roof, or an entire building that needs a structural
              upgrade, working with the right architect can transform an old,
              inefficient space into something functional, safe, and visually
              appealing. This guide by Spacebuild covers everything property
              owners in Kashipur should know before starting a renovation
              project, from identifying the right time to renovate to choosing
              the right architect, understanding costs, and avoiding common
              mistakes.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Signs Your Property Needs Renovation
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {renovationSigns.map((sign) => (
                <li key={sign}>{sign}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Hire an Architect Specifically for Renovation?
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {reasonsToHireArchitect.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Types of Renovation Services Available in Kashipur
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {renovationServices.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}:</strong> {service.text}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              The Renovation Process: What to Expect
            </h2>

            <ol className="list-decimal space-y-3 pl-6">
              {renovationProcess.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}:</strong> {step.text}
                </li>
              ))}
            </ol>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Factors That Affect Renovation Costs in Kashipur
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {costFactors.map((factor) => (
                <li key={factor.title}>
                  <strong>{factor.title}:</strong> {factor.text}
                </li>
              ))}
            </ul>

            <p>
              Getting a detailed, itemized quote upfront helps avoid budget
              surprises later in the project.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Renovation Mistakes to Avoid
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {renovationMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose the Right Renovation Architect in Kashipur
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {choosingArchitectTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Structural Considerations Specific to Renovation
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {structuralConsiderations.map((consideration) => (
                <li key={consideration}>{consideration}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Renovation for Different Property Types
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {propertyRenovationTypes.map((property) => (
                <li key={property.title}>
                  <strong>{property.title}:</strong> {property.text}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Spacebuild for Renovation in Kashipur?
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {whyChooseSpacebuild.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Tips for a Smooth Renovation Experience
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {smoothRenovationTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get in Touch with Spacebuild
            </h2>

            <p>
              Whether you are planning a single-room update, a kitchen or
              bathroom renovation, a commercial makeover, or a complete
              structural renovation in Kashipur, Spacebuild can help you
              evaluate, plan, design, and execute the project with confidence.
            </p>

            <p>
              To explore design portfolios, request a consultation, or learn
              more about renovation and architect services, visit the official
              website:{" "}
              <a
                href="https://www.spacebuild.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.spacebuild.co.in
              </a>
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
