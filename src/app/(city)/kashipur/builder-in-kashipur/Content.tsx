import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: "Who Is a Builder?",
    intro:
      "A builder takes your plan from an empty plot to a finished structure. Think of the builder as a project captain who keeps every worker moving in the same direction.",
    points: [
      "Studies your plot, budget and family needs.",
      "Prepares drawings with an architect or an in-house designer.",
      "Arranges labour, steel, cement, bricks and fittings.",
      "Supervises each stage on site.",
      "Hands over the finished property with proper records.",
      "One responsible contact saves you from chasing several tradespeople.",
    ],
  },
  {
    title: "Why Construction Demand Is Growing Here",
    intro:
      "Rising demand has clear local reasons. Knowing them helps you judge rates and timelines realistically.",
    points: [
      "Factories in the industrial belt attract workers and managers needing housing.",
      "Closeness to Jim Corbett National Park supports resorts and homestays.",
      "Rail and road links to Delhi, Moradabad and Dehradun are convenient.",
      "Hospitals, markets and colleges keep expanding.",
      "Nearby villagers are shifting into town for better facilities.",
      "More buyers bring more contractors, and quality differs widely. Careful selection therefore matters.",
    ],
  },
  {
    title: "Services You Should Expect",
    intro:
      "Scope differs between companies. Always confirm what is included before signing.",
    points: [
      "Residential construction: independent houses, duplexes, villas and builder floors.",
      "Commercial construction: shops, showrooms, offices and clinics.",
      "Industrial sheds: factory buildings, godowns and boundary walls.",
      "Renovation: extra floors, roof repair, kitchen upgrades and repainting.",
      "Interior finishing: false ceilings, modular kitchens, wardrobes and flooring.",
      "Turnkey projects: complete handover, ready to move in.",
      "Approval support: help preparing maps and documents for local sanction.",
    ],
  },
  {
    title: "Types of Contracts",
    intro:
      "The contract style decides who carries the risk. Understand it before you negotiate.",
    points: [
      "Labour-only: you buy materials, the builder supplies workers. It costs less but needs your constant attention.",
      "Material plus labour: the builder provides both at a per-square-foot rate. This is the most common choice.",
      "Turnkey: one agreed price covers everything, including fixtures and finishing.",
      "Item-rate: payment follows measured work, such as concrete quantity.",
      "First-time owners usually find material plus labour or turnkey the safest.",
    ],
  },
  {
    title: "Understanding Construction Cost",
    intro:
      "Cost is mostly calculated per square foot of built-up area. Market prices keep moving, so ask for a fresh written quotation instead of trusting old figures.",
    points: [
      "Grade of cement, steel, tiles and sanitary fittings.",
      "Number of floors and depth of foundation.",
      "Soil condition at the plot.",
      "Design complexity, such as balconies, arches and elevations.",
      "Brands chosen for doors, windows and electrical items.",
      "Labour availability during festival and harvest periods.",
      "Tip: Keep about ten percent in reserve for changes nobody predicted.",
    ],
  },
  {
    title: "Materials That Decide Strength",
    intro:
      "A building may look fine on handover day, but poor material shows after the first monsoon. Kashipur's humid Terai climate makes moisture protection especially important.",
    points: [
      "Select branded, ISI-marked cement and TMT bars.",
      "Use well-cured bricks or fly-ash blocks.",
      "Apply waterproofing on roofs, bathrooms and basements.",
      "Choose seasoned wood or sturdy UPVC for frames.",
      "Insist on copper wiring and certified switches.",
      "Keep bills for every major delivery.",
      "Ask for samples first, then compare them with what actually arrives on site.",
    ],
  },
  {
    title: "Step-by-Step Building Process",
    intro:
      "A clear sequence removes confusion and helps you ask smarter questions.",
    points: [
      "Site visit and soil check: the plot is inspected.",
      "Design: floor plan, elevation and structural layout are finalised.",
      "Approval: sanction is obtained where required.",
      "Foundation: excavation, reinforcement and casting.",
      "Plinth and columns: the frame rises above ground.",
      "Slab casting: each floor receives its concrete roof.",
      "Brickwork and plaster: walls are raised and smoothed.",
      "Electrical and plumbing: concealed lines are laid.",
      "Flooring and finishing: tiles, paint, doors and fixtures go in.",
      "Inspection and handover: a snag list is cleared before keys change hands.",
    ],
  },
  {
    title: "Qualities of a Reliable Builder",
    intro:
      "Anyone can claim experience. These signs reveal genuine professionals.",
    points: [
      "Finished projects you can personally visit.",
      "Honest talk about risks and possible delays.",
      "Itemised, transparent estimates.",
      "Qualified engineer or architect on the team.",
      "Written agreements and proper paperwork.",
      "Positive feedback from earlier clients.",
      "Ability to explain technical choices in simple language.",
      "Be wary of a price far below the market. Very cheap quotes often hide weak material or later add-on charges.",
    ],
  },
  {
    title: "Questions to Ask Before Hiring",
    intro:
      "Sharp questions show you are serious and quickly expose weak preparation.",
    points: [
      "How many houses have you completed locally in recent years?",
      "Who supervises the site daily?",
      "Which brands of steel, cement and fittings are included?",
      "How are instalments linked to progress?",
      "What is the penalty for delay?",
      "Is there a warranty on structure and waterproofing?",
      "Can I speak with two previous clients?",
      "Note the answers and compare at least three builders.",
    ],
  },
  {
    title: "Smart Payment Practice",
    intro:
      "Money disputes cause most broken builder relationships. A structured schedule protects both sides.",
    points: [
      "Pay only a modest advance after signing.",
      "Link instalments to completed stages, not calendar dates.",
      "Collect receipts for every transfer.",
      "Prefer bank transfer over cash.",
      "Hold a small final amount until the snag list is cleared.",
      "Record any scope change and extra cost in writing.",
    ],
  },
  {
    title: "Common Mistakes to Avoid",
    intro:
      "Learning from others' errors can save lakhs.",
    points: [
      "Beginning work without a signed contract.",
      "Skipping soil testing to save a small amount.",
      "Changing the design midway.",
      "Ignoring drainage planning.",
      "Choosing only on the lowest price.",
      "Not verifying land ownership papers.",
      "Forgetting ventilation and natural light.",
    ],
  },
  {
    title: "Weather and Timeline Planning",
    intro:
      "Monsoon, from about July to September, slows outdoor work. Winter fog can also shorten working hours.",
    points: [
      "Finish the foundation before heavy rain arrives.",
      "Cover cement and steel against dampness.",
      "Allow extra curing time for plaster and paint.",
      "Ask for a written schedule with milestone dates.",
      "Expect a two-floor house to take several months, depending on size and finish.",
    ],
  },
  {
    title: "Modern and Eco-Friendly Options",
    intro:
      "Many sustainable features fit within an ordinary budget and lower future bills.",
    points: [
      "Rainwater harvesting tanks.",
      "Solar panels for heating and lighting.",
      "Fly-ash bricks that reduce waste.",
      "Cross-ventilation to cut cooling needs.",
      "LED lighting and energy-rated appliances.",
      "Earthquake-resistant design, essential in Uttarakhand's seismic zone.",
    ],
  },
];

const faqs = [
  {
    question: "How do I find the best builder in Kashipur?",
    answer:
      "Visit completed projects, read client feedback, compare three written quotes and confirm a qualified engineer is involved.",
  },
  {
    question: "What is the construction cost per square foot?",
    answer:
      "It varies with material grade, design and market prices. Request a current written estimate.",
  },
  {
    question: "How long does house construction take?",
    answer:
      "A standard two-floor home usually needs several months. Size, finish level and monsoon affect the schedule.",
  },
  {
    question: "Do builders handle map approval?",
    answer:
      "Many do. Confirm in the agreement whether sanction work and fees are included.",
  },
  {
    question: "Is turnkey better than labour-only?",
    answer:
      "Turnkey suits busy owners because one party manages everything. Labour-only costs less but needs close supervision.",
  },
  {
    question: "Which documents should I verify?",
    answer:
      "Check the builder's registration, past work records, written agreement and your plot's ownership papers.",
  },
  {
    question: "Can builders construct commercial buildings?",
    answer:
      "Yes, many handle shops, offices and sheds. Ask for similar completed projects as proof.",
  },
  {
    question: "How can I avoid cost overruns?",
    answer:
      "Finalise the design early, fix rates in writing, track every bill and keep ten percent reserve.",
  },
];

const Content: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Builder in Kashipur: Build Your Dream Property with Confidence
            </h2>

            <p>
              Kashipur, in Udham Singh Nagar, Uttarakhand, is changing fast.
              Industrial growth in SIDCUL, better roads and new schools have
              made the town a popular choice for families and investors. As a
              result, many owners now search for a dependable builder in
              Kashipur before starting construction.
            </p>

            <p>
              This guide covers services, costs, materials, the building process
              and hiring tips. Each section starts with a short idea, then gives
              clear points.
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
              Final Word on Hiring a Builder in Kashipur
            </h2>

            <p>
              Hiring a builder is one of the biggest financial decisions a
              family makes. Take time, visit completed sites, compare written
              quotes and demand clarity. A trustworthy builder in Kashipur will
              welcome such questions.
            </p>

            <p>
              Ready to begin? Share plot size, budget and timeline with a
              qualified local builder, then request a site visit and detailed
              estimate. Add your company name, phone number, address and Google
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