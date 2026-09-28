
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import { section } from "framer-motion/client";

const Content = () => {
  const sections = [
    {
      title: "Comprehensive Architectural Services in Kashipur",
      paragraphs: [
        "Kashipur&apos;s steady growth as a residential, commercial, and industrial centre in Uttarakhand has created strong demand for professional architectural services across the region.",
        "From new home construction to commercial buildings, renovations, and Vastu-aligned planning, architectural services today cover far more than just drawing floor plans.",
        "Modern architectural services combine design creativity, structural expertise, regulatory knowledge, and project coordination into a single, streamlined process for clients.",
        "Families and business owners in Kashipur increasingly prefer firms that offer a complete range of architectural services rather than coordinating separate vendors for design, Vastu, interiors, and construction management.",
        "Space Build offers a full spectrum of architectural services in Kashipur, combining design expertise with authentic Vastu knowledge and premium interior solutions under one roof.",
        "This guide explores the range of architectural services available in Kashipur, what each service involves, and how to choose the right partner for your project.",
      ],
    },
    {
      title: "Understanding the Scope of Architectural Services",
      list: [
        "Architectural services extend beyond building design to include site evaluation, feasibility planning, statutory approvals, construction supervision, and interior coordination.",
        "A complete architectural service provider manages the journey from the initial concept to final handover, helping maintain consistency and quality at every stage.",
        "Services are commonly categorized by project type, including residential, commercial, industrial, and renovation-focused architectural work.",
        "Modern architectural firms, including Space Build, can also integrate specialized services such as Vastu consultation and Project Management Consultation.",
        "Understanding the full service scope helps clients choose a provider who can meet project needs without unnecessary vendor coordination.",
      ],
    },
    {
      title: "Site Evaluation and Feasibility Studies",
      list: [
        "Detailed assessment of plot dimensions, boundaries, road access, and orientation before design work begins.",
        "Soil-testing coordination and evaluation of load-bearing capacity relevant to the intended structure.",
        "Analysis of surrounding infrastructure, drainage, utility connections, and access conditions.",
        "Feasibility studies covering budget alignment, structural possibilities, and future expansion potential.",
        "Vastu-based site analysis identifying favourable directions for entrances, key rooms, and functional zones.",
      ],
    },
    {
      title: "Residential Architectural Design",
      list: [
        "Custom home design tailored to family size, lifestyle, budget, and specific functional requirements.",
        "Space planning focused on natural light, ventilation, privacy, storage, and comfortable everyday living.",
        "Design options ranging from independent villas and duplexes to compact urban homes.",
        "Integration of modern architectural trends with traditional and regional design preferences.",
        "Provision for future scalability, including additional floors and extended living areas.",
      ],
    },
    {
      title: "Commercial Architectural Design",
      list: [
        "Design solutions for offices, showrooms, retail outlets, restaurants, warehouses, and industrial facilities.",
        "Layout planning that improves customer flow, employee efficiency, and overall business functionality.",
        "Facade and interior design strategies that strengthen brand identity and market presence.",
        "Structural planning that supports future scalability as businesses expand or diversify.",
        "Compliance-focused design addressing fire safety, parking, accessibility, and operational requirements.",
      ],
    },
    {
      title: "Vastu-Integrated Architectural Planning",
      list: [
        "Application of authentic Vastu Shastra principles to residential and commercial architectural designs.",
        "Directional planning for entrances, kitchens, bedrooms, offices, workspaces, safes, and cash counters.",
        "Non-destructive Vastu corrections that enhance rather than restrict modern architectural creativity.",
        "Ongoing Vastu guidance at important construction milestones.",
        "Personalized Vastu recommendations based on family needs, business goals, and property type.",
      ],
    },
    {
      title: "Renovation and Redesign Services",
      list: [
        "Renovation planning for clients seeking to modernize outdated residential or commercial spaces.",
        "Layout reconfiguration that improves flow and functionality without extensive structural demolition.",
        "Vastu corrections during renovation to address concerns related to health, finances, or business performance.",
        "Facade and exterior upgrades that improve curb appeal and overall property value.",
        "Phased renovation strategies that minimize disruption to daily life or business operations.",
      ],
    },
    {
      title: "Interior Design Services",
      list: [
        "Complete interior design solutions covering concept development, material selection, lighting, furniture, and space planning.",
        "Personalized lighting strategies, colour palettes, textures, and finishes tailored to client preferences.",
        "Custom furniture design and space-optimization solutions for homes, offices, showrooms, and commercial spaces.",
        "Execution supervision to ensure design intent is retained through final installation.",
        "Integration of branding elements into commercial interiors for a cohesive visual identity.",
      ],
    },
    {
      title: "Project Management Consultation",
      list: [
        "End-to-end coordination of architects, contractors, engineers, and vendors throughout construction.",
        "Detailed budget planning and cost control to help prevent project overruns.",
        "Timeline management with milestone tracking to support timely project completion.",
        "Regular quality checks at every construction stage to maintain design and safety standards.",
        "Advisory support for clients who manage execution independently but require professional oversight.",
      ],
    },
    {
      title: "Modular Kitchen Design and Installation",
      list: [
        "Customized modular kitchen solutions designed according to available space and lifestyle needs.",
        "Premium material selection, smart storage solutions, and functional cabinet designs.",
        "Professional installation with thorough quality inspection for long-term durability.",
        "Kitchen designs suitable for both new construction and renovation projects.",
      ],
    },
    {
      title: "Pest Control and Property Protection Services",
      list: [
        "Professional pest inspection and identification for residential and commercial properties.",
        "Customized treatment plans addressing termites, rodents, cockroaches, and other common pest concerns.",
        "Preventive guidance to protect the long-term structural integrity of buildings.",
        "Regular maintenance options for ongoing property protection.",
      ],
    },
    {
      title: "Statutory Approvals and Documentation Support",
      list: [
        "Assistance with preparing documentation required for municipal or development authority approvals.",
        "Guidance through Kashipur&apos;s local building bylaws, plot regulations, and compliance requirements.",
        "Coordination with relevant authorities to streamline approvals and help minimize delays.",
        "Support with structural certifications and other technical documents required for legal compliance.",
      ],
    },
    {
      title: "Space Build&apos;s Complete Architectural Service Process",
      list: [
        "Initial consultation: Understanding client goals, budget, timeline, and specific project requirements.",
        "Site visit and analysis: On-ground evaluation of the plot, orientation, access, and surrounding environment.",
        "Concept development: Creating preliminary design concepts aligned with client vision and functional needs.",
        "Vastu integration: Refining designs to incorporate Vastu principles without disrupting architectural flow.",
        "Detailed drawings and approvals: Preparing comprehensive floor plans and supporting statutory documentation.",
        "Material and vendor coordination: Recommending suitable materials and trusted vendors based on budget and quality expectations.",
        "Construction supervision: Overseeing execution to ensure the built structure matches the approved design.",
        "Interior execution: Managing interior fit-out work for a cohesive and polished final result.",
        "Final inspection and handover: Conducting a thorough walkthrough before project completion and handover.",
      ],
    },
    {
      title: "Industries and Project Types We Serve in Kashipur",
      list: [
        "Independent homes, villas, and duplexes for families seeking personalized residential design.",
        "Corporate offices and business headquarters requiring functional and professional layouts.",
        "Retail showrooms and stores designed to improve customer engagement and product display.",
        "Restaurants, cafes, and hospitality spaces created for ambiance and operational efficiency.",
        "Warehouses and industrial units focused on storage optimization and workflow logistics.",
        "Educational institutes, clinics, and healthcare facilities with specialized design requirements.",
        "Renovation projects for older homes and commercial spaces seeking modernization or Vastu correction.",
      ],
    },
    {
      title: "Benefits of Choosing a Full-Service Architectural Firm",
      list: [
        "Eliminates the need to coordinate multiple separate vendors for design, Vastu, interiors, and construction management.",
        "Ensures design consistency across architecture, interiors, and structural planning throughout the project.",
        "Simplifies communication because one team manages the project from concept to completion.",
        "Reduces the risk of miscommunication or design conflicts between disconnected vendors.",
        "Provides stronger accountability because one firm oversees the project timeline and quality standards.",
        "Can create cost savings through streamlined coordination and reduced project delays.",
      ],
    },
    {
      title: "How to Choose the Right Architectural Service Provider in Kashipur",
      list: [
        "Evaluate the complete service range to ensure it matches your project requirements.",
        "Review portfolios showing completed projects similar in scope, scale, and style to your needs.",
        "Confirm familiarity with Kashipur&apos;s local building regulations and approval processes.",
        "Ask about the approach to Vastu integration if it is important for your project.",
        "Request a clear written breakdown of fees, deliverables, scope, and included services.",
        "Check testimonials and references to assess reliability, communication, and client satisfaction.",
        "Schedule an initial consultation to evaluate communication compatibility and design philosophy.",
      ],
    },
    {
      title: "Common Mistakes to Avoid When Hiring Architectural Services",
      list: [
        "Choosing a provider based only on price without considering experience, portfolio, or service scope.",
        "Failing to communicate project requirements clearly, resulting in designs that do not match actual needs.",
        "Overlooking integrated services and facing unnecessary coordination challenges later.",
        "Skipping written contracts or accepting vague verbal commitments about scope, fees, and timelines.",
        "Not verifying local regulatory knowledge, which can result in approval delays or compliance issues.",
        "Delaying professional consultation until after land purchase, limiting site optimization and design flexibility.",
      ],
    },
    {
      title: "Why Space Build is the Right Choice for Architectural Services in Kashipur",
      list: [
        "Space Build combines architectural design expertise, authentic MahaVastu knowledge, and premium interior design under one roof.",
        "Our team handles residential, commercial, industrial, and renovation projects across Kashipur and the surrounding region.",
        "We maintain transparent and well-documented processes with clear fee structures and no hidden costs.",
        "Every project receives a personalized approach so the final design reflects the client&apos;s vision and goals.",
        "We offer online and on-site consultation options for clients with different schedules and locations.",
        "Our integrated model eliminates the need to coordinate multiple vendors separately.",
        "Clients value our professionalism, creativity, practical planning, and commitment to stress-free execution.",
      ],
    },
  ];

  const faqs = [
    {
      question: "What architectural services does Space Build offer in Kashipur?",
      answer:
        "Space Build offers residential and commercial architecture, Vastu integration, interior design, renovation planning, modular kitchens, documentation support, and Project Management Consultation.",
    },
    {
      question: "Does Space Build assist with statutory approvals in Kashipur?",
      answer:
        "Yes, we support clients with documentation preparation and coordination required for applicable local approvals.",
    },
    {
      question: "Can Vastu be integrated into commercial architectural projects?",
      answer:
        "Yes, Vastu principles can be incorporated into commercial design for entrances, workspaces, cabins, cash counters, and other functional zones without compromising practicality or aesthetics.",
    },
    {
      question: "Does Space Build offer renovation services for existing properties?",
      answer:
        "Yes, Space Build provides renovation and redesign services for existing residential and commercial properties.",
    },
    {
      question: "Is online consultation available for architectural services?",
      answer:
        "Yes, Space Build provides online as well as on-site consultation options for client convenience.",
    },
    {
      question: "What types of projects does Space Build handle in Kashipur?",
      answer:
        "We handle homes, villas, duplexes, offices, showrooms, warehouses, restaurants, clinics, industrial spaces, and renovation projects.",
    },
    {
      question: "Does Space Build provide interior design along with architecture?",
      answer:
        "Yes, interior design is available as an integrated service alongside architectural planning for a cohesive project result.",
    },
    {
      question: "How do I begin the architectural services process with Space Build?",
      answer:
        "Start by scheduling an initial consultation and sharing your basic plot details, requirements, budget range, and project goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Kashipur Architectural Services
            </h2>

            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>

                {
                    
                }

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
              For architecture, Vastu consultation, interior design,
              renovation, modular kitchens, documentation support, and project
              management services in Kashipur, contact Space Build for a
              detailed project consultation.
            </p>

            <p>
              Visit{" "}
              <a
                href="https://www.spacebuild.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.spacebuild.co.in
              </a>{" "}
              to learn more about Space Build services.
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