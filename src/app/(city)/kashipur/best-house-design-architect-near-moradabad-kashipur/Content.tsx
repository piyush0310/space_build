
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  const sections = [
    {
      title: "Finding the Best House Design Architect Near You",
      paragraphs: [
        "Building or renovating a home is one of the biggest emotional and financial investments most families make, which is why finding the best house design architect near Moradabad and Kashipur matters so much.",
        "A great architect does more than draw floor plans. They translate your lifestyle, family needs, and personal taste into a living space that feels comfortable, functional, and beautiful.",
        "Moradabad and Kashipur have both seen steady growth in residential development, with families increasingly seeking modern, Vastu-aligned, and personalized home designs.",
        "Choosing a nearby architect offers practical advantages, including easier site visits, better understanding of local soil and climate conditions, and quicker response times during construction.",
        "Space Build, based in Moradabad, has worked extensively with families across Moradabad, Kashipur, and the surrounding Uttar Pradesh and Uttarakhand belt, delivering homes that balance aesthetics, energy alignment, and everyday functionality.",
        "This guide explains what makes a house design architect truly the best choice, what to look for locally, and how Space Build stands out for homeowners in this region.",
      ],
    },
    {
      title: "Why Location Matters When Choosing a House Design Architect",
      list: [
        "An architect based near Moradabad or Kashipur understands regional soil conditions, groundwater levels, and climate patterns that directly influence foundation and material choices.",
        "Local architects are familiar with municipal building bylaws, plot-size regulations, and approval processes specific to Moradabad Development Authority and Kashipur&apos;s local development norms.",
        "Proximity allows for frequent, hassle-free site visits during critical construction stages, ensuring design intent is properly executed on the ground.",
        "Architects working regularly in the area often have established relationships with reliable local contractors, material suppliers, and skilled labour, which can improve project efficiency.",
        "A local architect is also more accessible for quick consultations, urgent site decisions, or last-minute design clarifications during construction.",
        "Families in smaller towns and developing cities like Kashipur often benefit from architects who understand regional aesthetic preferences alongside modern design trends.",
      ],
    },
    {
      title: "Strong Design Portfolio and Versatility",
      intro:
        "A strong and diverse portfolio is one of the clearest signs of a capable house design architect.",
      list: [
        "The best architects showcase a diverse portfolio spanning different home sizes, styles, and budgets rather than a single repetitive design formula.",
        "Look for versatility across modern minimalist homes, traditional layouts, and hybrid designs that blend contemporary aesthetics with cultural sensibilities.",
        "A strong portfolio demonstrates the architect&apos;s ability to adapt to different plot shapes, orientations, and family requirements.",
        "Quality architects showcase not just exterior elevations but also interior spaces, proving their design thinking extends throughout the entire home.",
      ],
    },
    {
      title: "Genuine Understanding of Family Lifestyle",
      list: [
        "The best house design architects take time to understand your family structure, daily routines, and long-term living plans before finalizing any design.",
        "They ask thoughtful questions about how many people will live in the home, entertaining needs, work-from-home requirements, and future family expansion.",
        "A good architect designs around real-life usage patterns rather than forcing families to adapt to a generic, one-size-fits-all layout.",
        "Personalized design consultations often reveal unique family needs that significantly influence room placement, storage solutions, and outdoor space planning.",
      ],
    },
    {
      title: "Integration of Vastu Principles",
      list: [
        "Many families in Moradabad and Kashipur prefer homes designed with Vastu Shastra principles for harmony, prosperity, and well-being.",
        "The best architects integrate Vastu seamlessly into modern floor plans without compromising functionality or contemporary aesthetics.",
        "Look for architects with genuine Vastu expertise, not just superficial knowledge, to ensure authentic and effective implementation.",
        "Proper Vastu integration covers entrance direction, kitchen placement, bedroom positioning, and overall energy flow throughout the home.",
      ],
    },
    {
      title: "Transparent Communication and Process",
      list: [
        "Top architects maintain clear, consistent communication throughout the design and construction journey, avoiding confusion or unexpected surprises.",
        "They provide detailed drawings, realistic timelines, and transparent fee structures from the very first consultation.",
        "The best professionals welcome client feedback and collaborate rather than dictating design decisions without discussion.",
        "Regular progress updates during construction help build trust and ensure the final result matches the original vision.",
      ],
    },
    {
      title: "Technical Expertise and Structural Knowledge",
      list: [
        "A great house design architect combines aesthetic creativity with solid structural and engineering knowledge to ensure safety and durability.",
        "They coordinate effectively with structural engineers, ensuring the design is both beautiful and technically sound.",
        "Knowledge of local building materials, climate-appropriate construction techniques, and energy-efficient design further distinguishes exceptional architects.",
        "The best architects stay updated with evolving building codes and modern construction technologies relevant to residential projects.",
      ],
    },
    {
      title: "Space Build&apos;s House Design Services Near Moradabad and Kashipur",
      intro:
        "Space Build provides integrated architecture, Vastu, interior design, renovation, modular kitchen, and project management services for homeowners.",
    },
    {
      title: "Custom Residential Architecture",
      list: [
        "Personalized home design tailored to your family size, lifestyle preferences, plot dimensions, and budget requirements.",
        "Thoughtful space planning that maximizes natural light, ventilation, and functional flow throughout the home.",
        "Modern architectural styles blended seamlessly with traditional elements based on client preference and regional context.",
        "Detailed floor plans, elevations, and 3D visualizations to help clients clearly understand the design before construction begins.",
      ],
    },
    {
      title: "Vastu-Aligned Home Construction",
      list: [
        "Complete Vastu-based floor planning covering entrance placement, room positioning, and directional alignment.",
        "Non-destructive Vastu integration that enhances modern design rather than restricting architectural creativity.",
        "Guidance provided at every construction milestone, from foundation laying to final possession.",
        "Vastu consultation available for both new construction and existing home corrections.",
      ],
    },
    {
      title: "Interior Design for Homes",
      list: [
        "Comprehensive interior design services covering concept development, material selection, and furniture detailing.",
        "Personalized color palettes, lighting strategies, and textures that reflect your family&apos;s unique taste and personality.",
        "Custom storage solutions and space-saving designs suited for compact plots or larger family homes.",
        "Execution supervision ensuring interior design intent is preserved through to final installation.",
      ],
    },
    {
      title: "Home Renovation and Redesign",
      list: [
        "Renovation planning for families looking to modernize outdated layouts or expand existing living spaces.",
        "Layout reconfiguration to improve room flow, natural lighting, and overall functionality without major structural demolition.",
        "Vastu corrections applied during renovation to resolve recurring issues related to health, finances, or family harmony.",
        "Facade upgrades and exterior redesign to enhance curb appeal and property value.",
      ],
    },
    {
      title: "Project Management Consultation",
      list: [
        "Expert coordination of architects, contractors, and vendors to ensure smooth and stress-free home construction.",
        "Budget planning and cost-control measures to prevent overruns during the building process.",
        "Timeline management with regular milestone tracking to keep the project on schedule.",
        "Quality checks at every construction stage to maintain design integrity and structural safety.",
      ],
    },
    {
      title: "Modular Kitchen Design",
      list: [
        "Customized modular kitchen solutions designed according to available space, layout, and lifestyle needs.",
        "Premium material selection, smart storage solutions, and functional cabinet designs for everyday convenience.",
        "Professional installation and quality inspection to ensure durability and long-term performance.",
        "Designs tailored for both new home construction and kitchen renovation projects.",
      ],
    },
    {
      title: "Types of Homes We Design Near Moradabad and Kashipur",
      list: [
        "Independent villas and bungalows designed for spacious family living with private outdoor areas.",
        "Compact urban homes optimized for smaller plots without compromising functionality or style.",
        "Duplex and multi-story residential homes designed for joint families or multi-generational living.",
        "Farmhouse and semi-rural residences blending natural surroundings with modern comfort.",
        "Renovation projects for older homes seeking modernization, expansion, or Vastu correction.",
        "Gated community homes requiring designs that comply with specific society or township guidelines.",
      ],
    },
    {
      title: "The Home Design Process at Space Build",
      list: [
        "Initial consultation: Understanding your family&apos;s lifestyle, preferences, budget, and long-term vision for the home.",
        "Site visit and analysis: On-ground assessment of the plot, orientation, soil conditions, and surrounding environment.",
        "Concept development: Creating preliminary design concepts that reflect your personality and functional requirements.",
        "Vastu integration: Refining the design to incorporate Vastu principles without disrupting architectural flow.",
        "Detailed drawings and approvals: Preparing comprehensive floor plans and assisting with necessary statutory approvals.",
        "Material and vendor coordination: Recommending suitable materials and trusted vendors based on budget and quality expectations.",
        "Construction supervision: Overseeing execution to ensure the built home accurately reflects the approved design.",
        "Interior execution: Managing interior fit-out work for a cohesive and polished final result.",
        "Final walkthrough and handover: Conducting a thorough inspection before handing over the completed home to the family.",
      ],
    },
    {
      title: "How to Choose the Best House Design Architect Near You",
      list: [
        "Research architects with proven experience specifically in Moradabad, Kashipur, and nearby residential areas.",
        "Review portfolios carefully, paying attention to homes similar in size, style, and budget to your own project.",
        "Schedule consultations with multiple architects to compare communication style, design philosophy, and overall compatibility.",
        "Ask detailed questions about fee structure, scope of services, and expected project timelines before deciding.",
        "Request client references and, if possible, visit a completed home to assess construction quality firsthand.",
        "Confirm whether the architect offers integrated services like Vastu consultation, interior design, and project management.",
        "Trust your instincts regarding communication and rapport, as a strong working relationship significantly affects project satisfaction.",
      ],
    },
    {
      title: "Common Mistakes to Avoid When Choosing a House Design Architect",
      list: [
        "Selecting an architect based purely on the lowest quoted fee without evaluating experience, portfolio, or client feedback.",
        "Failing to clearly communicate family requirements, resulting in a design that does not fit your lifestyle.",
        "Skipping written contracts or agreeing to vague verbal terms instead of detailed documentation.",
        "Overlooking the value of local experience, which can lead to regulatory delays or design mismatches with regional norms.",
        "Ignoring Vastu considerations early on, making later corrections more difficult and costly.",
        "Delaying architect involvement until after finalizing land purchase, which limits site optimization and design flexibility.",
        "Assuming all architects provide the same scope of services without clarifying inclusions and exclusions upfront.",
      ],
    },
    {
      title: "Why Space Build is a Trusted Choice for Homeowners",
      list: [
        "Space Build combines architectural design expertise with authentic MahaVastu knowledge, offering a valuable combination for homeowners.",
        "Our team has experience designing homes across Moradabad, Kashipur, and surrounding areas, with an understanding of local preferences and regulations.",
        "We maintain transparent, documented processes with clear fee structures and no hidden costs throughout the project.",
        "Every home receives a personalized approach so the final design suits your family&apos;s lifestyle and aspirations.",
        "We provide both online and on-site consultations for flexibility and convenience.",
        "Our integrated services eliminate the need to coordinate multiple vendors separately.",
        "Clients value our professionalism, creativity, attention to detail, and structured project execution.",
        "We prioritize energetic alignment and modern aesthetics, creating homes that feel as good as they look.",
      ],
    },
    {
      title: "Benefits of Hiring the Best House Design Architect",
      list: [
        "A well-designed home improves daily comfort through better natural lighting, ventilation, and space utilization.",
        "Professional architectural planning can reduce long-term maintenance costs and improve property durability.",
        "Vastu-integrated design can support family well-being, financial stability, and a sense of harmony within the home.",
        "The right architect helps avoid costly design errors and construction rework caused by inexperienced planning.",
        "A thoughtfully designed home reflects your personal identity and creates a space that truly feels like your own.",
        "Quality architectural design can increase long-term property value, making it a meaningful investment for the future.",
        "An experienced professional ensures smoother coordination between contractors, vendors, and construction teams.",
      ],
    },
  ];

  const faqs = [
    {
      question:
        "How do I find the best house design architect near Moradabad or Kashipur?",
      answer:
        "Research local architects with relevant portfolios, schedule consultations, and compare their experience, communication style, design approach, and services offered.",
    },
    {
      question: "Does Space Build design homes in both Moradabad and Kashipur?",
      answer:
        "Yes, Space Build provides house design, Vastu consultation, interior design, renovation, and construction consultation services across Moradabad, Kashipur, and nearby regions.",
    },
    {
      question: "Can Vastu be included in a modern home design?",
      answer:
        "Yes, Vastu principles can be integrated into contemporary home designs without compromising style, functionality, or modern architectural aesthetics.",
    },
    {
      question: "How long does it take to design and build a house?",
      answer:
        "Timelines vary by plot size, home area, approvals, design complexity, material availability, and construction scope. Projects can range from several months to over a year.",
    },
    {
      question: "Does Space Build offer interior design along with architecture?",
      answer:
        "Yes, Space Build provides interior design services alongside architectural planning for a cohesive and well-coordinated home experience.",
    },
    {
      question: "Is online consultation available for homeowners outside Moradabad?",
      answer:
        "Yes, Space Build offers online as well as on-site consultation options for homeowners in Moradabad, Kashipur, and outside these locations.",
    },
    {
      question: "What documents are needed to start a home design project?",
      answer:
        "Basic plot details, site dimensions, ownership documents, available site plans, photographs, and your family requirements help begin the consultation process.",
    },
    {
      question: "Can Space Build help renovate an existing home?",
      answer:
        "Yes, Space Build offers renovation and redesign services for existing homes, including layout improvement, interior upgrades, facade redesign, and Vastu corrections.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Best House Design Architect Near Moradabad and Kashipur
            </h2>

            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>

                {section.intro && <p>{section.intro}</p>}

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Frequently Asked Questions
              </h2>

              {faqs.map((faq, index) => (
                <div key={faq.question} className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Q{index + 1}. {faq.question}
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>

            <p>
              For house architecture, MahaVastu consultation, interior design,
              modular kitchen planning, renovation, and project management
              services near Moradabad and Kashipur, contact Space Build for a
              detailed consultation.
            </p>

            <p>
              Learn more about Space Build&apos;s architecture and home design
              services at{" "}
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
