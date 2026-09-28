
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: "Why Architectural Design Matters More Than Ever in Kashipur",
    intro:
      "As land becomes more valuable and construction costs rise, thoughtful design decisions at the planning stage directly affect long-term comfort, cost, and property value.",
    points: [
      "Well-planned architectural design reduces the need for expensive structural changes after construction begins.",
      "Efficient space planning maximises usable area, which matters more on Kashipur's typically compact residential plots.",
      "Good design improves natural light, ventilation, and energy efficiency, reducing long-term utility costs.",
      "A distinctive architectural style enhances curb appeal and can positively influence property resale value.",
      "Thoughtful design integrates vastu principles from the start, avoiding costly corrections later.",
      "Professional design reduces construction errors that often arise from working without proper drawings.",
    ],
  },
  {
    title: "Popular Architectural Styles in Kashipur",
    intro:
      "Kashipur's architectural landscape reflects a blend of traditional influences and modern design preferences. Understanding these styles helps you choose a direction that suits your taste and budget.",
    points: [
      "Contemporary minimalist design: Clean lines, flat or low-slope roofs, and uncluttered facades with functional layouts.",
      "Traditional Indian design: Sloped roofs, courtyards, and elements inspired by regional architectural heritage.",
      "Modern fusion style: A blend of contemporary materials with traditional layout principles, popular among vastu-conscious homeowners.",
      "Industrial-style commercial design: Exposed structural elements and utilitarian layouts common in Kashipur's growing commercial and industrial zones.",
      "Colonial-inspired facades: Symmetrical elevations, pillars, and detailed cornices, still favoured by some homeowners for larger villas.",
      "Eco-conscious design: Increasing interest in natural ventilation, courtyards, and passive cooling techniques suited to the regional climate.",
    ],
  },
  {
    title: "Core Principles of Good Architectural Design",
    intro:
      "Beyond visual style, strong architectural design follows a set of practical principles that ensure the space works well for daily living or business operations.",
    points: [
      "Functional space planning: Rooms and zones arranged to match how the space will actually be used day to day.",
      "Natural light optimisation: Window placement and orientation designed to maximise daylight while minimising heat gain.",
      "Ventilation and airflow: Cross-ventilation planning to reduce dependence on artificial cooling, especially important during Kashipur's warmer months.",
      "Efficient circulation: Clear, logical movement paths between rooms, reducing wasted corridor space.",
      "Structural efficiency: Column and beam placement planned to balance design flexibility with construction cost.",
      "Material appropriateness: Choosing finishes and materials suited to the local climate and maintenance expectations.",
    ],
  },
  {
    title: "Vastu-Integrated Architectural Design in Kashipur",
    intro:
      "Vastu remains a significant consideration for many homeowners and business owners in the region, and integrating it early leads to better outcomes than retrofitting it later.",
    points: [
      "Entrance placement: Main door direction planned according to vastu principles alongside practical street-facing considerations.",
      "Room zoning: Kitchen, bedrooms, and pooja spaces positioned according to traditional vastu guidelines.",
      "Balanced layout: Ensuring vastu compliance does not compromise natural light, ventilation, or functional flow.",
      "Staircase and structural placement: Careful planning to align structural elements with vastu recommendations without adding unnecessary cost.",
      "Commercial vastu application: Office entrances, cash counters, and workstation placement increasingly planned with vastu input for businesses.",
      "Early-stage integration: Involving a vastu expert from the concept design stage avoids expensive layout changes after construction starts.",
    ],
  },
  {
    title: "Residential Architectural Design Trends in Kashipur",
    intro:
      "Homeowners in Kashipur are increasingly moving away from generic layouts toward more personalised, functional, and future-ready designs.",
    points: [
      "Open-plan living and dining areas: Combined spaces that feel larger and support more flexible family use.",
      "Dedicated home office spaces: Growing demand for a functional work-from-home corner within the layout.",
      "Multi-generational planning: Layouts that accommodate joint families with separate but connected living zones.",
      "Statement facades: Distinctive elevation design using textured finishes, stone cladding, or accent lighting.",
      "Courtyard and balcony integration: Outdoor connected spaces used for light, ventilation, and greenery.",
      "Smart storage planning: Built-in storage solutions designed into the architecture rather than added later as furniture.",
    ],
  },
  {
    title: "Commercial and Industrial Architectural Design Considerations",
    intro:
      "Design priorities shift significantly when planning commercial or industrial spaces, where functionality and visibility often take precedence.",
    points: [
      "Facade and signage integration: Storefronts and office buildings designed to maximise visibility and brand presence.",
      "Efficient floor plate planning: Maximising usable commercial area while meeting fire safety and circulation requirements.",
      "Industrial shed layout: Practical design for warehouses and factories prioritising loading access, ventilation, and workflow efficiency.",
      "Flexible interior zoning: Commercial layouts designed to adapt easily as business needs change over time.",
      "Parking and access planning: Adequate vehicle and pedestrian access designed into the site layout from the start.",
      "Compliance-driven design: Institutional and industrial projects require careful planning around fire safety, structural, and municipal regulations.",
    ],
  },
  {
    title: "Materials Commonly Used in Kashipur's Architectural Projects",
    intro:
      "Material choice significantly affects both the appearance and long-term durability of a building, especially given the regional climate.",
    points: [
      "Exposed brick and stone cladding: Popular for textured, natural-looking facades on residential projects.",
      "Reinforced concrete framing: Standard structural choice for multi-storey residential and commercial buildings.",
      "Weather-resistant exterior paints: Selected to withstand Kashipur's seasonal temperature and humidity variations.",
      "Glass and aluminium facades: Increasingly used in commercial projects for a modern, professional appearance.",
      "Locally sourced materials: Preferred where possible to reduce transport costs and support faster construction timelines.",
      "Energy-efficient glazing: Growing interest in glass options that reduce heat gain while maintaining natural light.",
    ],
  },
  {
    title: "How Climate Influences Architectural Design in Kashipur",
    intro:
      "Kashipur experiences hot summers, a defined monsoon season, and cooler winters, all of which should influence key design decisions.",
    points: [
      "Roof design: Sloped or insulated roofing helps manage heat gain and monsoon water runoff effectively.",
      "Window orientation: East-facing windows are often prioritised for morning light while limiting harsh west-facing heat exposure.",
      "Overhangs and shading: Chajjas and sunshades reduce direct heat entry during peak summer months.",
      "Drainage planning: Proper site grading and drainage design are essential given the region's monsoon rainfall.",
      "Ventilation-first layouts: Cross-ventilation reduces reliance on artificial cooling, improving long-term energy efficiency.",
      "Material selection for humidity resistance: Finishes chosen to withstand monsoon moisture without frequent maintenance.",
    ],
  },
  {
    title: "The Architectural Design Process at Space Build",
    intro:
      "A structured design process ensures that every project moves smoothly from initial concept to final construction-ready drawings.",
    points: [
      "Initial consultation: Understanding client requirements, budget, vastu preferences, and site conditions.",
      "Concept design: Developing preliminary layout options for client review and feedback.",
      "Vastu integration: Aligning the design with vastu principles alongside practical space planning needs.",
      "3D visualization: Creating realistic renders so clients can clearly picture the finished space before construction.",
      "Structural coordination: Working with structural engineers to finalise a safe, buildable design.",
      "Working drawings: Preparing detailed technical drawings for contractors and site execution.",
      "Site supervision: Ongoing coordination to ensure construction matches the approved architectural design.",
    ],
  },
  {
    title: "Common Architectural Design Mistakes to Avoid",
    intro:
      "Avoiding a few common planning errors can save significant time, cost, and frustration during construction.",
    points: [
      "Prioritising an attractive facade over practical interior space planning and functionality.",
      "Ignoring natural light and ventilation in favour of purely decorative window placement.",
      "Overlooking vastu considerations until after the structural design is already finalised.",
      "Underestimating storage needs during the initial layout planning stage.",
      "Choosing materials based on appearance alone without considering local climate suitability.",
      "Skipping structural coordination early, leading to costly redesigns later in the project.",
    ],
  },
  {
    title: "Tips for Planning Your Architectural Design Project",
    intro:
      "A little preparation before your first design consultation can significantly improve the quality and efficiency of the final outcome.",
    points: [
      "List your must-have rooms and spaces along with any specific functional requirements.",
      "Share your budget range upfront so the design can be planned realistically from the start.",
      "Mention any vastu preferences early so they can be integrated into the initial concept.",
      "Collect reference images of styles or facades you like to help communicate your design preferences clearly.",
      "Discuss future needs, such as additional floors or room extensions, so the design can accommodate them structurally.",
    ],
  },
  {
    title: "Why Choose Space Build for Architectural Design in Kashipur",
    intro:
      "Space Build brings together architecture, vastu expertise, and interior design under one experienced team, ensuring a cohesive design process from concept to completion.",
    points: [
      "In-house vastu integration from the earliest design stage, avoiding costly later corrections.",
      "A team experienced across residential, commercial, and industrial architectural projects in the region.",
      "Transparent design proposals with clear deliverables at each project stage.",
      "3D visualization support so clients can confidently approve designs before construction begins.",
      "Coordinated structural and interior planning under a single accountable team.",
    ],
  },
];

const faqs = [
  {
    question: "What architectural styles are popular in Kashipur right now?",
    answer:
      "Contemporary minimalist, modern fusion, and vastu-integrated designs are among the most requested styles for homes in the region.",
  },
  {
    question:
      "Does architectural design in Kashipur usually include vastu planning?",
    answer:
      "Many clients request it, and firms like Space Build integrate vastu principles from the initial concept stage.",
  },
  {
    question: "How does climate affect architectural design in Kashipur?",
    answer:
      "Roof slope, window orientation, shading, and drainage are all planned around the region's hot summers and monsoon rainfall.",
  },
  {
    question: "Can I combine traditional and modern design elements?",
    answer:
      "Yes, modern fusion design is a popular approach, blending contemporary materials with traditional layout principles.",
  },
  {
    question: "How long does the architectural design process usually take?",
    answer:
      "Timelines vary by project scale, but concept design and 3D visualization are typically completed within a few consultation stages.",
  },
  {
    question: "Is 3D visualization included in architectural design services?",
    answer:
      "Many firms, including Space Build, offer 3D renders so clients can review the design before construction begins.",
  },
  {
    question: "What is the biggest design mistake homeowners make?",
    answer:
      "Prioritising facade appearance over functional space planning, natural light, and ventilation is one of the most common mistakes.",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Kashipur Architectural Design – Trends, Styles &amp; Planning
              Guide
            </h2>

            <p>
              Good architectural design in Kashipur is no longer just about four
              walls and a roof — it&apos;s about creating spaces that are
              functional, vastu-aligned, climate-appropriate, and visually
              distinctive. As the town grows into a stronger residential and
              industrial hub within Uttarakhand, more property owners are
              investing in thoughtful design rather than standard, repetitive
              layouts.
            </p>

            <p>
              This guide explores the current landscape of architectural design
              in Kashipur — popular styles, planning principles, material
              choices, vastu integration, and practical tips for creating a home
              or commercial space that balances aesthetics with functionality.
              Whether you&apos;re building new or renovating, this guide will
              help you plan a design that suits Kashipur&apos;s climate,
              culture, and lifestyle, with support from Space Build.
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
              Start Your Architectural Design Journey with Space Build
            </h2>

            <p>
              Every plot and project in Kashipur has unique requirements, and
              the best architectural design comes from a process that balances
              creativity with practical planning. Share your site details,
              requirements, and design preferences with the Space Build team to
              begin developing a layout that reflects both your lifestyle and
              the region&apos;s climate and vastu considerations.
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