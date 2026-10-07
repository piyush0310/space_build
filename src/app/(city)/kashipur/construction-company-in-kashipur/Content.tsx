import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: "How a Company Differs From an Individual Contractor",
    intro:
      "The structure behind the name affects reliability. Understanding the contrast helps you decide where to place trust.",
    points: [
      "Companies maintain formal records, agreements and billing systems.",
      "Dedicated engineers review drawings and site quality.",
      "A larger workforce reduces delay when one worker is absent.",
      "Purchase teams negotiate better material rates.",
      "Accountability sits with a registered entity, not one person.",
      "Individual contractors may charge less but offer limited support.",
      "The right choice depends on project size, budget and the level of oversight you want.",
    ],
  },
  {
    title: "Types of Projects a Company Can Handle",
    intro:
      "Capacity varies, so confirm that the firm has handled work similar to yours.",
    points: [
      "Residential: independent houses, duplexes, villas and apartments.",
      "Commercial: shops, showrooms, offices, clinics and hotels.",
      "Industrial: factory sheds, warehouses and cold storage units.",
      "Institutional: schools, hostels and community buildings.",
      "Hospitality: resorts and homestays near tourist routes.",
      "Renovation: structural repair, extension and remodelling.",
      "A firm with varied experience may adapt better, though a specialist can be ideal for niche needs.",
    ],
  },
  {
    title: "Core Services Offered",
    intro:
      "Service lists differ between companies. Compare them carefully to avoid gaps.",
    points: [
      "Site survey and soil investigation.",
      "Architectural and structural design.",
      "Cost estimation and budgeting.",
      "Authority approval support.",
      "Material procurement and storage.",
      "Civil work, including foundation, columns and slabs.",
      "Electrical, plumbing and fire-safety installation.",
      "Interior finishing and handover support.",
      "The more services under one roof, the fewer coordination problems you face.",
    ],
  },
  {
    title: "The Construction Process Explained",
    intro:
      "A transparent company can describe its workflow clearly. Knowing the stages lets you track progress with confidence.",
    points: [
      "Consultation: needs, budget and plot details are discussed.",
      "Design: layouts and elevations are prepared.",
      "Estimate and contract: costs are finalised in writing.",
      "Approval: necessary permissions are arranged.",
      "Foundation: excavation, reinforcement and concrete casting.",
      "Structure: columns, beams and slabs rise floor by floor.",
      "Masonry and plaster: walls are built and finished.",
      "Services: electrical and plumbing lines are installed.",
      "Finishing: flooring, painting, doors and fixtures.",
      "Handover: final inspection and documentation.",
      "Ask for a written schedule showing the expected timing of each stage.",
    ],
  },
  {
    title: "Why Kashipur Is Attracting Builders and Buyers",
    intro:
      "Local growth explains the rising number of construction firms. Understanding it helps you gauge market conditions.",
    points: [
      "Industrial estates create steady housing demand.",
      "Road and rail connections support trade.",
      "Tourism around nearby forests encourages hotel and homestay projects.",
      "Education and healthcare facilities continue expanding.",
      "Families from surrounding villages prefer town living.",
      "More activity means greater choice, but also greater variation in quality.",
    ],
  },
  {
    title: "Qualities of a Dependable Company",
    intro:
      "Reputation grows from repeated good behaviour. Watch for these signs.",
    points: [
      "Honest, itemised estimates.",
      "Qualified engineers and trained supervisors.",
      "Clean, safe and organised sites.",
      "Prompt response to calls and questions.",
      "Respect for agreed timelines.",
      "Written warranty on structure and waterproofing.",
      "Fair treatment of workers and neighbours.",
      "A company that shows these traits during early meetings usually continues them during construction.",
    ],
  },
  {
    title: "Legal and Documentation Checks",
    intro:
      "Paperwork reveals professionalism. Verify records before advancing any payment.",
    points: [
      "Business registration and tax details.",
      "Valid address and contact numbers.",
      "Previous project records.",
      "Insurance cover for workers, where applicable.",
      "Written contract with drawings.",
      "Receipts and invoices for all payments.",
      "Ownership papers of your own plot.",
      "Never rely on spoken assurances alone.",
    ],
  },
  {
    title: "Quality Control and Safety Standards",
    intro:
      "Good companies treat quality and safety as daily routines. These practices protect your investment and the workforce.",
    points: [
      "Material testing, such as concrete strength checks.",
      "Branded cement, steel and fittings.",
      "Proper curing of concrete.",
      "Scaffolding checked before use.",
      "Helmets, gloves and shoes for workers.",
      "Fire and electrical safety precautions.",
      "Regular inspection by senior engineers.",
      "Ask to see how these procedures are recorded on site.",
    ],
  },
  {
    title: "Technology and Planning Tools",
    intro:
      "Modern firms use tools that improve accuracy and reduce waste. You need not understand the software, but you should ask about it.",
    points: [
      "3D drawings that show your future building before work begins.",
      "Digital measurement and quantity calculation.",
      "Scheduling charts to track stage completion.",
      "Photo updates shared with owners.",
      "Mobile communication groups for quick decisions.",
      "Technology does not replace skill, yet it improves transparency.",
    ],
  },
  {
    title: "Cost Structure and Pricing Methods",
    intro:
      "Understanding pricing prevents disputes. Companies typically use one of several billing styles.",
    points: [
      "Rate per square foot of built-up area.",
      "Fixed turnkey price for complete delivery.",
      "Item-rate billing based on measured work.",
      "Cost-plus arrangement with an agreed profit margin.",
      "Always ask what the rate covers, including materials, labour, finishing and approvals.",
      "Prices change with market conditions, so request a current written quotation.",
    ],
  },
  {
    title: "Climate and Soil Considerations",
    intro:
      "Kashipur's Terai location brings humidity, heavy monsoon and seismic risk. A local company should design accordingly.",
    points: [
      "Raised plinth to prevent waterlogging.",
      "Strong waterproofing for roofs and bathrooms.",
      "Good drainage around the building.",
      "Cross-ventilation to limit dampness.",
      "Earthquake-resistant structural detailing.",
      "Scheduling that avoids peak rainfall.",
      "Ask the company to share examples of how it handled these challenges before.",
    ],
  },
  {
    title: "How to Compare Companies",
    intro:
      "A structured comparison removes emotion from the decision. Collect information in one place and score each firm.",
    points: [
      "Experience in similar projects.",
      "Technical team strength.",
      "Quotation clarity.",
      "Material specifications.",
      "Timeline commitment.",
      "Warranty terms.",
      "Client references.",
      "Communication quality.",
      "Visit at least one running site for each shortlisted firm and speak with previous clients.",
    ],
  },
  {
    title: "Contract and Payment Practice",
    intro:
      "A clear agreement protects both sides. Money should flow according to progress.",
    points: [
      "Include full scope, drawings and specifications.",
      "State start date, completion date and delay terms.",
      "Set payment stages linked to finished work.",
      "Use bank transfers and keep receipts.",
      "Hold back a final amount until defects are cleared.",
      "Record every change in writing with its cost.",
      "Read all clauses carefully before signing.",
    ],
  },
  {
    title: "Common Mistakes to Avoid",
    intro:
      "Many problems begin with decisions made too quickly.",
    points: [
      "Choosing only the lowest price.",
      "Skipping site visits.",
      "Starting without a signed contract.",
      "Ignoring soil testing.",
      "Changing designs repeatedly.",
      "Paying large advances early.",
      "Neglecting after-handover support.",
      "Patience during selection saves effort during construction.",
    ],
  },
  {
    title: "After-Handover Support and Maintenance",
    intro:
      "A strong company stays reachable after the key ceremony. Maintenance extends the building's life.",
    points: [
      "Collect drawings, warranties and bills.",
      "Inspect walls and roofs before each monsoon.",
      "Report seepage promptly during the warranty.",
      "Clean tanks and drains twice a year.",
      "Repaint exteriors periodically.",
      "Keep the company's number for future additions.",
    ],
  },
];

const faqs = [
  {
    question: "What does a construction company do?",
    answer:
      "It plans, designs, builds and delivers structures, managing engineers, workers, materials and approvals under one agreement.",
  },
  {
    question: "Is a company better than an individual contractor?",
    answer:
      "Companies offer structured teams and accountability, while individuals may cost less but provide limited support.",
  },
  {
    question: "Which documents should I verify?",
    answer:
      "Check registration, address, previous projects, written contract, drawings and payment receipts.",
  },
  {
    question: "How long does construction usually take?",
    answer:
      "A typical two-floor house needs several months, depending on size, finishing level and weather.",
  },
  {
    question: "Do construction companies help with approvals?",
    answer:
      "Many assist with drawings and paperwork. Confirm in writing whether fees are included.",
  },
  {
    question: "How should payments be made?",
    answer:
      "Pay a small advance after signing, then release instalments after verified stage completion through bank transfer.",
  },
  {
    question: "What warranty can I expect?",
    answer:
      "Reliable firms usually provide written cover for structure and waterproofing. Confirm the duration before signing.",
  },
  {
    question: "Can companies handle commercial and industrial projects?",
    answer:
      "Yes, many build shops, offices and sheds. Ask for similar completed projects as proof.",
  },
];

const Content: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Kashipur Construction Company: What It Is and Why It Matters
            </h2>

            <p>
              A Kashipur construction company is a registered business that
              plans, builds and delivers structures for homes, shops, factories
              and institutions. Unlike a single mason or small contractor, a
              company brings a complete system: designers, engineers,
              supervisors, skilled workers and purchase teams.
            </p>

            <p>
              Think of it as the difference between hiring one musician and
              booking an entire band. Both can play, but the band delivers a
              fuller, better-coordinated performance. This guide explains how
              such companies work, what they offer and how to pick one wisely.
              Each section opens with a short idea, followed by points you can
              apply.
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
              Final Word on Kashipur Construction Companies
            </h2>

            <p>
              Choosing a Kashipur construction company is a long-term decision
              that shapes safety, comfort and money. Verify documents, compare
              itemised quotations, inspect real sites and insist on a precise
              written agreement. A genuine company will welcome these checks
              and answer every question openly.
            </p>

            <p>
              Next step: shortlist three companies, visit one live site each
              and request detailed written estimates this week. Add your
              company name, phone number, address and Google Maps link here.
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