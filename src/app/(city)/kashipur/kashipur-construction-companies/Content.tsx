import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: "What Civil Construction Means",
    intro:
      "Civil construction covers the structural and ground-related parts of a project. It comes before electrical, interior and decorative work.",
    points: [
      "Shapes the land to receive a building.",
      "Creates the load-bearing structure.",
      "Builds water, drainage and access systems.",
      "Protects the structure from soil, water and weather.",
      "Prepares the base for finishing trades.",
    ],
  },
  {
    title: "Civil Work Versus Finishing Work",
    intro:
      "Owners often mix the two, which causes budget and scheduling confusion. A clear distinction helps you plan.",
    points: [
      "Civil work: excavation, concrete, steel reinforcement, masonry, waterproofing, drainage.",
      "Finishing work: paint, tiles, false ceilings, cabinets, decorative lighting.",
      "Services work: wiring, plumbing, ventilation and fire systems.",
      "Civil work is permanent: correcting it later is difficult and costly.",
      "Finishing is flexible: it can be changed or upgraded over time.",
    ],
  },
  {
    title: "Site Survey and Soil Investigation",
    intro:
      "Every sound project begins with understanding the land. Skipping this stage is one of the most expensive mistakes.",
    points: [
      "Boundary measurement and levelling.",
      "Study of slope and natural water flow.",
      "Soil bearing capacity testing.",
      "Groundwater level assessment.",
      "Identification of nearby structures, trees and utilities.",
      "Recommendations for foundation type.",
    ],
  },
  {
    title: "Earthwork and Site Preparation",
    intro:
      "Before construction begins, the ground must be prepared. Poor preparation leads to settlement and drainage problems.",
    points: [
      "Clearing vegetation and debris.",
      "Levelling and grading the plot.",
      "Excavation to required depth.",
      "Filling and compaction in layers.",
      "Disposal of surplus soil.",
      "Marking building lines accurately.",
      "Temporary drainage during rainy periods.",
    ],
  },
  {
    title: "Foundation Work",
    intro:
      "The foundation carries the entire weight of the building into the soil. Its design depends on soil strength, load and number of floors.",
    points: [
      "Isolated footings: support individual columns on good soil.",
      "Combined or strip footings: share loads across closely spaced columns.",
      "Raft foundation: spreads weight over a large area on weaker soil.",
      "Pile foundation: transfers load to deeper strong layers.",
      "Plinth beams: tie columns together at ground level.",
    ],
  },
  {
    title: "Reinforced Concrete Structure",
    intro:
      "Most modern buildings use reinforced concrete, where steel handles tension and concrete handles compression. Together they form a durable frame.",
    points: [
      "Columns carry vertical loads to the foundation.",
      "Beams transfer floor loads to columns.",
      "Slabs create floors and roofs.",
      "Staircases and lintels complete the frame.",
      "Correct bar spacing and cover protect steel from rust.",
      "Proper vibration removes air pockets from concrete.",
    ],
  },
  {
    title: "Masonry and Wall Construction",
    intro:
      "Walls divide space, provide privacy and resist weather. Good masonry looks straight and performs quietly.",
    points: [
      "Choice between clay bricks, fly-ash bricks and concrete blocks.",
      "Correct mortar mix and joint thickness.",
      "Proper bonding between layers.",
      "Vertical alignment checked with a plumb line.",
      "Lintels over doors and windows.",
      "Adequate curing to prevent shrinkage cracks.",
    ],
  },
  {
    title: "Waterproofing and Damp Protection",
    intro:
      "Water is the greatest enemy of buildings in humid regions. Civil teams must plan protection from the start.",
    points: [
      "Damp-proof course at plinth level.",
      "Roof slab treatment with slope and waterproof coating.",
      "Bathroom floor and wall protection before tiling.",
      "Basement and water tank treatment.",
      "Sealing of joints, pipe openings and parapets.",
      "Testing by water ponding before final finishing.",
    ],
  },
  {
    title: "Drainage, Sewage and Water Systems",
    intro:
      "A building needs safe movement of water in and out. Poor planning creates smells, stains and health risks.",
    points: [
      "Surface drains around the plot.",
      "Rainwater pipes and roof outlets.",
      "Septic tanks or sewer connections.",
      "Soak pits where permitted.",
      "Underground and overhead water tanks.",
      "Proper slopes in all channels.",
      "Inspection chambers for cleaning.",
    ],
  },
  {
    title: "Boundary Walls, Gates and Retaining Structures",
    intro:
      "External civil works protect the plot and manage level differences. They also affect safety and appearance.",
    points: [
      "Boundary walls with strong footings and expansion joints.",
      "Gates, pillars and entrance paving.",
      "Retaining walls where ground levels differ.",
      "Parapets and railings on terraces.",
      "Raised plinths and ramps.",
      "Compound drainage and paving.",
    ],
  },
  {
    title: "Civil Works for Commercial and Industrial Sites",
    intro:
      "Larger projects need additional capabilities. Kashipur&apos;s industrial belt makes these services relevant.",
    points: [
      "Heavy-duty floors for machinery and trucks.",
      "Steel structure foundations and anchor bolts.",
      "Internal roads, bays and parking areas.",
      "Storm-water drainage and effluent channels.",
      "Boundary and security structures.",
      "Overhead tank platforms and equipment pads.",
      "Warehouse floors with level and joint control.",
    ],
  },
  {
    title: "Quality Control and Testing",
    intro:
      "Good civil teams measure rather than guess. Testing records are proof of care.",
    points: [
      "Cube tests to confirm concrete strength.",
      "Steel checks for size, grade and cleanliness.",
      "Verification of cement quality and storage.",
      "Level and alignment measurements.",
      "Pressure testing of water lines.",
      "Leak testing of roofs and tanks.",
      "Daily site records and photographs.",
    ],
  },
  {
    title: "Safety and Site Management",
    intro:
      "Civil sites involve heavy loads, depth and height. Safe practice protects people and prevents delays.",
    points: [
      "Edge protection and secure scaffolding.",
      "Shoring of deep excavations.",
      "Helmets, shoes and gloves for workers.",
      "Safe storage of tools and fuel.",
      "Controlled movement of vehicles.",
      "First-aid supplies and trained supervisors.",
      "Worker welfare, such as clean water and shelter.",
    ],
  },
  {
    title: "Contracts, Pricing and Payment",
    intro:
      "Civil work is often priced by quantity, so clarity prevents disputes.",
    points: [
      "Item-rate pricing for excavation, concrete, steel and masonry.",
      "Lump-sum pricing for defined packages.",
      "Labour-only or material-plus-labour arrangements.",
      "Measurement method written in the agreement.",
      "Stage-linked payments after inspection.",
      "Rates for additional work stated in advance.",
    ],
  },
  {
    title: "How to Choose a Civil Construction Team",
    intro:
      "Verification matters more here because mistakes are buried. Look for evidence, not slogans.",
    points: [
      "Visit completed structures that are several years old.",
      "Check for cracks, damp patches and settlement.",
      "Confirm a qualified civil engineer reviews the work.",
      "Ask about testing practices and records.",
      "Verify business registration and address.",
      "Speak with previous clients about delays and bills.",
      "Compare at least three itemised quotations.",
      "Confirm current local approval requirements with the municipal or development authority.",
    ],
  },
  {
    title: "Maintenance of Civil Works",
    intro:
      "Structures last longer when small issues are handled early.",
    points: [
      "Clean drains and gutters before every monsoon.",
      "Inspect roofs and terraces for cracks.",
      "Repair hairline cracks promptly.",
      "Check boundary walls for tilt or settlement.",
      "Keep records of drawings and test reports.",
      "Report warranty issues quickly.",
    ],
  },
];

const faqs = [
  {
    question: "What do civil construction services include?",
    answer:
      "They include surveying, earthwork, foundations, concrete structure, masonry, waterproofing, drainage and boundary works.",
  },
  {
    question: "Why is soil testing important?",
    answer:
      "It shows ground strength and guides foundation design, preventing settlement and cracks.",
  },
  {
    question: "What is the difference between civil and finishing work?",
    answer:
      "Civil work builds the structure and ground systems. Finishing covers paint, tiles, ceilings and decorative items.",
  },
  {
    question: "How is civil work priced?",
    answer:
      "Often by item rate or measured quantity, or as a lump sum. Confirm the method in writing.",
  },
  {
    question: "How can quality be checked?",
    answer:
      "Through concrete cube tests, reinforcement inspection before pouring, leak tests and daily site records.",
  },
  {
    question: "Do civil contractors handle industrial projects?",
    answer:
      "Some do. Ask for completed factory or warehouse projects and check heavy-load flooring experience.",
  },
  {
    question: "Why is drainage planning important here?",
    answer:
      "Heavy monsoon and moist soil can cause waterlogging, so proper drains protect the foundation and walls.",
  },
  {
    question: "What should I ask before hiring?",
    answer:
      "Ask for similar completed projects, engineer details, testing practices, itemised quotations and warranty terms.",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Kashipur Civil Construction Services: The Hidden Skeleton of
              Every Building
            </h2>

            <p>
              When people admire a house, they notice paint, tiles and
              balconies. Almost nobody thinks about what sits beneath and
              inside the walls. That hidden skeleton is civil work, and it
              decides whether a structure stands safely for fifty years or
              starts cracking in five.
            </p>

            <p>
              Think of the human body. Skin and clothes are what you see, but
              bones and muscles carry the weight. Kashipur civil construction
              services build those bones: foundations, columns, beams, slabs,
              drains and site infrastructure. This guide explains what such
              services include, how quality is checked and how to hire a
              capable team. Each section opens with a short idea, followed by
              points you can use.
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
              Final Word on Kashipur Civil Construction Services
            </h2>

            <p>
              Strong Kashipur civil construction services give your project the
              quiet strength that no paint or décor can supply. Insist on soil
              investigation, correct foundation design, verified reinforcement,
              proper waterproofing and clear drainage. Choose a team that
              explains its methods, records its tests and welcomes your
              inspection.
            </p>

            <p>
              Next step: gather your plot papers, request itemised civil
              quotations from three teams and visit one completed structure for
              each this week. Add your company name, phone number, address and
              Google Maps link here.
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