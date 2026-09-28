
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: 'What Makes an Architect the "Best" for House Design',
    intro:
      "Not every architect is the right fit for every homeowner. Before choosing one, it helps to understand what truly separates a good architect from an average one.",
    points: [
      "The best architects listen first and design second, spending real time understanding the family's lifestyle before sketching anything.",
      "They offer multiple design options instead of pushing a single fixed template on every client.",
      "A strong architect balances aesthetics with structural practicality, so the house looks good and stands strong for decades.",
      "The best professionals are transparent about costs, giving realistic budget ranges instead of vague estimates.",
      "They stay updated with local building regulations, ensuring the design gets smooth municipal approval.",
      "Good architects provide clear visual communication through 3D renders, not just technical 2D drawings that are hard for clients to interpret.",
      "They maintain consistent communication throughout the project, rather than disappearing after the initial design phase.",
      "The best architects design with future flexibility in mind, allowing for extensions or renovations later without major rework.",
    ],
  },
  {
    title: "About Spacebuild - House Design Specialists in Kashipur",
    intro:
      "Spacebuild has established itself as a trusted house design firm by focusing on one core idea: architecture should serve the people living inside it, not just look good in photographs.",
    points: [
      "The firm's design team includes architects, structural engineers, and interior specialists, covering every design need under one roof.",
      "Spacebuild has worked on projects ranging from compact city homes to spacious farmhouse designs across Kashipur and nearby towns.",
      "The team follows a collaborative design approach, where clients actively participate in shaping their home rather than receiving a finished design with no input.",
      "Spacebuild uses advanced 3D visualization tools, allowing clients to preview their house design realistically before construction begins.",
      "The firm is known for its honest project timelines and clear documentation at every stage of design and approval.",
      "Spacebuild's designs are created with long-term durability in mind, not just short-term visual trends.",
    ],
  },
  {
    title: "Core House Design Services Offered by Spacebuild",
    intro:
      "Spacebuild provides a full range of house design services, allowing clients to manage their entire project through a single, coordinated team.",
    points: [
      "Custom Floor Plan Design - Layouts created specifically around plot size, family structure, and daily lifestyle needs.",
      "Front Elevation and Facade Design - A range of styles from modern minimal to classic traditional facades.",
      "3D House Visualization - Photorealistic renders and walkthroughs to help clients finalize design decisions confidently.",
      "Structural Engineering and Safety Design - Ensuring the house is built to withstand regional weather and seismic considerations.",
      "Interior Space Planning - Room-by-room interior detailing including kitchens, bedrooms, and living areas.",
      "Vastu-Aligned House Design - Designs that respect Vastu principles while maintaining a modern architectural language.",
      "Working Drawings for Construction - Precise technical drawings handed to site engineers and contractors for accurate execution.",
      "Building Plan Approval Support - Assistance with documentation required for Nagar Palika and municipal sanctioning.",
      "On-Site Design Supervision - Periodic site visits to confirm the design is being executed correctly during construction.",
      "Renovation and Remodeling Design - Updated layouts and facades for homeowners upgrading an existing property.",
    ],
  },
  {
    title: "House Design Styles Spacebuild Specializes In",
    intro:
      "Every homeowner has a different vision for their house, and Spacebuild designs across a wide spectrum of architectural styles.",
    points: [
      "Contemporary Modern Homes - Bold geometric forms, large windows, and flat or low-slope roofing.",
      "Traditional Indian House Designs - Spatial planning suited to joint families, courtyards, and cultural preferences.",
      "Colonial-Inspired Bungalows - Elegant verandas, pillars, and symmetrical facades for a timeless appeal.",
      "Farmhouse and Outskirt Residences - Open, spacious designs suited to larger plots on Kashipur's outer belts.",
      "Duplex and Multi-Floor Homes - Efficient vertical planning for families needing more built-up area on smaller plots.",
      "Compact City House Designs - Smart space utilization for narrow or medium-sized urban plots within Kashipur.",
      "Eco-Conscious House Designs - Homes designed with natural lighting, cross-ventilation, and sustainable material choices.",
    ],
  },
  {
    title: "Step-by-Step House Design Process at Spacebuild",
    intro:
      "Spacebuild follows a well-defined process so clients always know what stage their project is at and what comes next.",
    points: [
      "Discovery Meeting - Understanding family size, budget, preferred style, and must-have features for the home.",
      "Site Assessment - Evaluating plot orientation, soil quality, road access, and neighboring structures.",
      "Preliminary Layout Options - Presenting two or three initial floor plan concepts for client feedback.",
      "Design Refinement - Adjusting layouts and elevations based on client input until the design feels right.",
      "3D Rendering and Walkthrough - Creating realistic visuals so clients can experience the design before construction.",
      "Structural and Technical Detailing - Engineers finalize load calculations, beam placements, and safety specifications.",
      "Approval Documentation - Preparing and submitting drawings for official municipal sanction.",
      "Construction Coordination - Sharing working drawings with the execution team and conducting periodic quality checks.",
      "Final Walkthrough and Handover - Confirming the completed house matches the approved design before handing over the keys.",
    ],
  },
  {
    title: "Why Homeowners Choose Spacebuild for House Design in Kashipur",
    points: [
      "Personalized Design Approach - No two Spacebuild homes look identical, since each is built around the client's specific needs.",
      "Complete In-House Team - Architecture, structural engineering, and interiors are handled internally, reducing coordination issues.",
      "Realistic Budgeting - Clients receive honest cost expectations early, avoiding mid-project financial stress.",
      "Strong Local Knowledge - Familiarity with Kashipur's soil types, climate patterns, and municipal approval process.",
      "Visual Clarity Before Construction - 3D previews reduce the risk of design regret after the house is built.",
      "Long-Term Design Thinking - Homes are planned with future extensions or lifestyle changes in mind.",
      "Dependable Communication - Clients are kept informed at every major milestone, not just at the start and end of the project.",
    ],
  },
  {
    title: "Factors That Influence House Design Cost in Kashipur",
    intro:
      "Understanding what affects design pricing helps homeowners budget more accurately before starting the process.",
    points: [
      "Total Built-Up Area - Larger homes generally involve more design and engineering work, affecting overall fees.",
      "Design Complexity - Multi-level homes or homes with unique architectural features require more detailed planning.",
      "Level of Customization - Fully custom designs cost more than adapting a standard layout to a plot.",
      "Interior Design Scope - Adding detailed interior planning increases the overall design package cost.",
      "Structural Requirements - Soil conditions and floor count influence the structural engineering fees.",
      "3D Visualization Detailing - More detailed, photorealistic renders may involve additional design hours.",
      "Approval and Documentation Needs - Complex plots or additional permissions can add to the documentation workload.",
    ],
    outro:
      "Spacebuild provides a free initial consultation, allowing homeowners to get a clear cost estimate before signing any design agreement.",
  },
  {
    title: "Vastu Considerations in House Design",
    intro:
      "Many families in Kashipur want their homes to reflect Vastu principles alongside modern design. Spacebuild's team incorporates these thoughtfully rather than treating them as an afterthought.",
    points: [
      "Entrance direction planned according to Vastu recommendations wherever the plot orientation allows.",
      "Kitchen placement aligned with traditional guidelines while maintaining practical workflow.",
      "Bedroom positioning balanced between Vastu preferences and comfortable daily usage.",
      "Pooja room and sacred spaces designed with appropriate placement and quiet positioning within the home.",
      "Staircase and toilet placement planned carefully to avoid common Vastu conflicts.",
      "Overall design language that keeps the home visually modern while respecting traditional beliefs.",
    ],
  },
  {
    title: "Mistakes to Avoid When Choosing a House Design Architect",
    points: [
      "Choosing based on price alone, without checking design quality or structural expertise.",
      "Skipping the 3D visualization step, which often leads to disappointment after construction is complete.",
      "Not verifying past project experience, especially for homes similar in size or style to your own.",
      "Ignoring structural engineering credentials, which can compromise long-term safety of the house.",
      "Failing to clarify what is included in the design fee, leading to unexpected additional charges later.",
      "Overlooking future needs, such as space for an additional floor or room down the line.",
    ],
  },
  {
    title: "Benefits of a Well-Designed House",
    points: [
      "Improved daily comfort through better natural light, airflow, and room flow.",
      "Higher resale value, since well-designed homes are more attractive to future buyers.",
      "Lower long-term maintenance costs, thanks to better material planning and structural quality.",
      "More efficient use of space, especially valuable on smaller or irregularly shaped plots.",
      "Better energy efficiency, reducing dependence on artificial lighting and cooling.",
      "Stronger emotional connection to the home, since the design reflects the family's actual lifestyle.",
    ],
  },
  {
    title: "Areas Spacebuild Covers Around Kashipur",
    intro:
      "Spacebuild's house design services are available across Kashipur city and several nearby localities, including:",
    points: [
      "Kashipur city and central residential zones.",
      "Jaspur.",
      "Bazpur.",
      "Gadarpur.",
      "Rudrapur outskirts.",
      "Ramnagar Road belt.",
      "Outlying farmhouse and rural plots near Kashipur.",
    ],
  },
  {
    title: "How to Get Started with Spacebuild",
    points: [
      "Book a free consultation to discuss your plot, budget, and design expectations.",
      "Share your plot documents so the team can begin preliminary site analysis.",
      "Discuss your family's lifestyle needs to help the design team understand your priorities.",
      "Review initial layout concepts and provide feedback for refinement.",
      "Approve the final 3D design before moving into structural detailing and documentation.",
      "Begin construction with ongoing design supervision from the Spacebuild team.",
    ],
  },
];

const faqs = [
  {
    question:
      "Who is considered the best architect for house design in Kashipur?",
    answer:
      "The best choice depends on portfolio, structural expertise, communication style, and budget understanding. Spacebuild is known for personalized, budget-conscious house designs across Kashipur.",
  },
  {
    question: "Does Spacebuild design both small and large homes?",
    answer:
      "Yes, Spacebuild handles compact city plots as well as larger farmhouse-style properties, duplexes, bungalows, and independent homes.",
  },
  {
    question: "How soon can I see my house design in 3D?",
    answer:
      "Initial 3D concepts are typically prepared after the site visit, discovery meeting, layout planning, and design requirements are finalized.",
  },
  {
    question: "Is Vastu-compliant design available on request?",
    answer:
      "Yes, Spacebuild incorporates Vastu principles into designs while keeping the architecture modern, practical, and functional.",
  },
  {
    question: "Does Spacebuild assist with building plan approvals?",
    answer:
      "Yes, the team helps prepare and submit drawings and documentation required for municipal sanctioning in Kashipur.",
  },
  {
    question: "Can I make changes after seeing the initial design?",
    answer:
      "Yes, the design process includes a refinement stage where client feedback is incorporated before the final design is completed.",
  },
  {
    question: "Is construction supervision included in the design package?",
    answer:
      "Site supervision is available as part of Spacebuild's services to help ensure that the approved design is executed correctly.",
  },
  {
    question: "How is the design fee calculated?",
    answer:
      "Fees are generally based on built-up area, design complexity, structural requirements, 3D visualization requirements, and the scope of services selected.",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Best Architect for House Design in Kashipur
            </h2>

            <p>
              Finding the best architect for house design in Kashipur can feel
              overwhelming when there are many contractors and design firms
              claiming to build dream homes. The real difference lies in
              experience, design sensibility, and how well an architect
              understands the specific needs of Kashipur&apos;s climate, plots,
              and building norms. Spacebuild has built a reputation as one of
              the most reliable names for house design in this region, offering
              a complete design journey from the first concept sketch to the
              final finished home.
            </p>

            <p>
              Kashipur is growing steadily as a residential hub in Udham Singh
              Nagar, Uttarakhand, with families investing in independent
              houses, duplexes, and farmhouse-style properties. This growth has
              increased demand for architects who can combine functional
              planning with visual appeal while staying within realistic
              budgets. Spacebuild positions itself as a dependable design
              partner for homeowners who want a house that is well-planned,
              structurally sound, and personally meaningful.
            </p>

            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>

                {section.intro ? (
                  <p className="mt-4">{section.intro}</p>
                ) : null}

                <ul className="list-disc pl-6 mt-4 space-y-2">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {section.outro ? (
                  <p className="mt-4">{section.outro}</p>
                ) : null}
              </section>
            ))}

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="mt-4 space-y-5">
                {faqs.map((faq, index) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {index + 1}. {faq.question}
                    </h3>
                    <p className="mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <p>
              More details about house design services, architecture
              consultation, floor plans, 3D elevations, and residential projects
              are available at{" "}
              <a
                href="https://www.spacebuild.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.spacebuild.co.in
              </a>
              .
            </p>

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