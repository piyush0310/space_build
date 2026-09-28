
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  const sections = [
    {
      title: "Why Hiring the Right Architect Matters",
      paragraphs: [
        "Choosing an architect is one of the most important decisions you will make when planning a home, office, or commercial space in Kashipur.",
        "The right architect does not just create drawings. They shape how your space functions, feels, and performs for decades to come.",
        "With Kashipur&apos;s rapid growth as a residential and commercial hub in Uttarakhand, more people are investing in construction, renovation, and interior projects than ever before.",
        "A poorly chosen architect can lead to design flaws, budget overruns, regulatory issues, and spaces that simply do not work for your lifestyle or business.",
        "On the other hand, the right architect brings clarity, creativity, and technical expertise that transforms a plot of land or an outdated structure into a space you truly love.",
        "This guide walks you through every step of hiring an architect in Kashipur, from understanding your needs to finalizing a contract, so you can make a confident and informed decision.",
        "Space Build has helped numerous clients across Kashipur and nearby regions navigate this exact process, combining architectural expertise with Vastu wisdom and interior design excellence.",
      ],
    },
    {
      title: "Step 1: Define Your Project Requirements Clearly",
      intro:
        "Before reaching out to any architect, take time to clearly outline your project requirements and expectations.",
      list: [
        "Decide what you want to build, such as a home, office, retail space, commercial building, or renovation project.",
        "List your must-have features, including the number of rooms, workspace layout, storage needs, parking, or specific functional zones.",
        "Determine your approximate budget range early so you can shortlist architects who work within your financial comfort zone.",
        "Decide whether you need only architectural design or a complete package including interiors, Vastu consultation, and project management.",
        "Identify your timeline expectations, whether you need the project completed within a few months or can accommodate a longer process.",
        "Gather existing documents such as site plans, plot measurements, ownership papers, and available utility details.",
        "Having clarity on these points helps architects understand your vision faster and provide more accurate proposals.",
      ],
    },
    {
      title: "Step 2: Research Architects Working in Kashipur",
      intro:
        "Research is essential because an architect with local experience can better understand site conditions, regulations, and practical construction requirements.",
      list: [
        "Search for architecture firms and independent architects with experience in Kashipur and the wider Udham Singh Nagar region.",
        "Prioritize local experience because Kashipur-based professionals are more likely to understand regional soil conditions, climate patterns, and municipal regulations.",
        "Browse company websites, portfolios, social media pages, and business listings to understand each architect&apos;s design style and project range.",
        "Look for completed projects similar to your own, whether residential, commercial, industrial, or renovation-focused.",
        "Check whether the architect offers integrated services such as interior design, Vastu consultation, and project management.",
        "Ask friends, family members, neighbours, or business contacts in Kashipur for recommendations based on personal experience.",
        "Shortlist at least three to five architects or firms before moving ahead with detailed comparisons.",
      ],
    },
    {
      title: "Step 3: Verify Qualifications and Credentials",
      intro:
        "Credentials do not guarantee design quality by themselves, but they establish an important baseline of professionalism, qualification, and accountability.",
      list: [
        "Confirm that the architect is registered with the Council of Architecture, also known as COA, the regulatory body for architects in India.",
        "Check educational qualifications, including a recognized degree in architecture from an approved institution.",
        "Ask about additional certifications or specializations, such as Vastu Shastra expertise, sustainable design training, or project management credentials.",
        "Verify the number of years of experience, especially with projects similar to yours in size and complexity.",
        "Understand the team structure, including whether the architect works independently or has engineers, interior designers, and site supervisors.",
        "Ask if they have professional liability insurance to provide additional protection in case of design errors or disputes.",
      ],
    },
    {
      title: "Step 4: Review Portfolios and Past Projects",
      intro:
        "A portfolio reveals more than visual style. It helps you assess how an architect solves planning, functionality, lighting, circulation, and execution challenges.",
      list: [
        "Ask every shortlisted architect for a portfolio of completed residential, commercial, industrial, or renovation projects.",
        "Pay attention to variety, since architects who can adapt across styles and project types often bring more flexibility.",
        "Look closely at how spaces are used in previous projects, especially functionality, natural lighting, ventilation, circulation, and storage.",
        "If possible, visit a completed project in person to assess finishing quality, material choices, and construction standards.",
        "Ask for client references and speak with previous clients about their experience, communication, budget control, and timelines.",
        "Check online reviews and testimonials on websites, Google Business listings, and social media pages.",
        "A strong portfolio combined with positive client feedback is one of the most reliable indicators of an architect&apos;s capability.",
      ],
    },
    {
      title: "Step 5: Schedule Initial Consultations",
      intro:
        "An initial consultation gives you the opportunity to discuss your project and determine whether the architect understands your priorities.",
      list: [
        "Arrange meetings with shortlisted architects to discuss the project in detail.",
        "Explain your requirements, approximate budget, preferred style, and expected timeline.",
        "Ask about the design process, from the first concept and planning stage to drawings, approvals, and execution.",
        "Discuss whether the architect offers site visits, online consultations, or both.",
        "Notice how clearly technical concepts are explained and whether complex details are made easy to understand.",
        "Assess their interest in your specific project rather than accepting a generic one-size-fits-all approach.",
        "Use the consultation to ask questions about communication, revisions, site supervision, and future support.",
      ],
    },
    {
      title: "Step 6: Compare Design Approach and Philosophy",
      intro:
        "Every architect has a different design philosophy. Finding one whose approach aligns with your lifestyle, business requirements, and long-term expectations improves collaboration.",
      list: [
        "Ask whether the architect prioritizes only aesthetics or gives equal importance to functionality, energy efficiency, durability, and maintenance.",
        "If Vastu matters to you, confirm whether the architect has genuine expertise in applying Vastu without compromising modern design.",
        "Discuss their approach to sustainability, including natural light, ventilation, material selection, and energy-efficient planning.",
        "Ask how they balance your preferences with their professional recommendations when there are differences of opinion.",
        "Understand whether their design style is minimalist, contemporary, traditional, luxury, or a hybrid approach.",
        "A good match in design philosophy leads to smoother communication and a final result that truly reflects your expectations.",
      ],
    },
    {
      title: "Step 7: Discuss Fees and Payment Structure",
      intro:
        "Financial transparency is essential before appointing an architect. Always ask for a detailed and documented fee proposal.",
      list: [
        "Ask for a clear fee structure, whether it is fixed-fee, percentage-based, hourly, or based on the project scope.",
        "If fees are percentage-based, request specific numbers instead of accepting general estimates.",
        "Clarify what the fee includes, such as design consultation, drawings, site visits, structural coordination, approvals, and execution supervision.",
        "Ask about extra charges for revisions, additional site visits, scope changes, or expedited work.",
        "Request a written payment schedule that identifies payments due at each project milestone.",
        "Compare fees across shortlisted architects, but do not choose only on the basis of the lowest quote.",
        "Ensure every financial term is documented before signing an agreement.",
      ],
    },
    {
      title: "Step 8: Understand the Scope of Services Offered",
      intro:
        "A clear scope of work prevents confusion later and helps you understand whether you need to appoint additional consultants or vendors.",
      list: [
        "Clarify whether the proposal includes architectural design, structural coordination, interior design, Vastu consultation, and project management.",
        "Ask whether the architect assists with statutory approvals and liaison with municipal or development authorities.",
        "Determine whether they provide on-site construction supervision or only hand over drawings for independent execution.",
        "Check whether furniture planning, material selection, lighting design, and modular kitchen planning are included.",
        "Ask about post-completion support, maintenance guidance, or future renovation assistance.",
        "A comprehensive service scope reduces the need to coordinate multiple vendors and minimizes communication gaps.",
        "Integrated service providers such as Space Build can offer a smoother and more cohesive project experience from start to finish.",
      ],
    },
    {
      title: "Step 9: Evaluate Communication and Working Style",
      intro:
        "Communication quality strongly affects the success of a design and construction project.",
      list: [
        "Assess how promptly and clearly the architect responds to your calls, messages, and questions during the initial stage.",
        "Ask how frequently project updates will be provided and through which channels, such as calls, emails, site meetings, or digital reports.",
        "Determine whether they are open to feedback and willing to make reasonable design changes based on your needs.",
        "Observe whether timelines and possible challenges are discussed realistically instead of making unrealistic promises.",
        "Ask how disagreements, site issues, material delays, or scope changes are handled during construction.",
        "Good communication reduces misunderstandings, prevents unnecessary delays, and creates a more satisfying project experience.",
        "Trust your instincts. If communication feels difficult during early discussions, it may remain difficult throughout the project.",
      ],
    },
    {
      title: "Step 10: Check Legal and Contractual Aspects",
      intro:
        "Never rely only on verbal commitments. A detailed written agreement protects both the client and the architect.",
      list: [
        "Ensure a written contract clearly defines the scope of work, project timeline, fees, payment schedule, and responsibilities of both parties.",
        "Review clauses related to project delays, design revisions, scope changes, cancellation, and termination.",
        "Confirm ownership rights over drawings and intellectual property, especially if you intend to use the design later.",
        "Ask about liability provisions in case of design errors, structural concerns, or non-compliance with building regulations.",
        "Verify who will be responsible for obtaining the necessary municipal and development authority approvals.",
        "Consider having a legal professional review the agreement for high-value residential, industrial, or commercial projects.",
        "A well-drafted contract sets clear expectations and protects both parties from avoidable disputes.",
      ],
    },
    {
      title: "Common Mistakes to Avoid When Hiring an Architect in Kashipur",
      list: [
        "Choosing an architect only because they offer the lowest fee, without checking experience, portfolio, or client feedback.",
        "Failing to clearly explain your requirements, leading to designs that do not match your actual needs.",
        "Skipping the contract stage or proceeding only with verbal agreements.",
        "Not checking client references or previous project experiences before finalizing the architect.",
        "Overlooking local experience, which can lead to regulatory delays or design mismatches with Kashipur&apos;s conditions.",
        "Ignoring compatibility in design philosophy, resulting in friction during planning and execution.",
        "Delaying architectural consultation until after purchasing land, which can limit site optimization and design flexibility.",
        "Assuming every architect offers the same services without confirming inclusions and exclusions.",
      ],
    },
    {
      title: "Why Choose Space Build When Hiring an Architect in Kashipur",
      list: [
        "Space Build offers architectural design expertise, authentic MahaVastu knowledge, and premium interior design under one roof.",
        "Our team has experience handling residential, commercial, industrial, and renovation projects across Kashipur and nearby Uttarakhand regions.",
        "We follow transparent, documented consultation processes with clear fee structures and no hidden costs.",
        "Every project receives a personalized approach that reflects your vision, lifestyle, functional needs, or business identity.",
        "We offer both online and on-site consultation options for convenience.",
        "Our integrated architecture, Vastu, interior design, and project management services reduce the burden of coordinating multiple vendors.",
        "Space Build focuses on professional communication, creative solutions, practical planning, and stress-free project execution.",
        "We prioritize both aesthetics and functionality so your space looks exceptional and works efficiently for years.",
      ],
    },
    {
      title: "Questions to Ask Before Finalizing Your Architect",
      list: [
        "How many years of experience do you have with projects in Kashipur or similar regions?",
        "Can you share examples of completed projects similar in scope to mine?",
        "What is included in your fee, and what additional charges should I expect?",
        "Do you offer Vastu consultation, interior design, and project management services?",
        "How do you handle project delays, scope changes, or unexpected site challenges?",
        "Will you personally oversee my project, or will it be managed by another team member?",
        "What is the expected timeline for a project of this size and complexity?",
        "Can you provide references from previous clients?",
      ],
    },
    {
      title: "Benefits of Hiring the Right Architect",
      list: [
        "A qualified architect helps ensure compliance with applicable building codes, safety norms, and local regulations.",
        "Professional architectural planning can reduce long-term operational and maintenance costs through efficient design.",
        "The right architect brings creative solutions that improve space utilization, natural light, ventilation, and functionality.",
        "Working with an experienced professional helps minimize costly design errors and construction rework.",
        "A skilled architect coordinates effectively with contractors, engineers, and vendors to keep the project organized.",
        "The finished space reflects your personal lifestyle or business identity rather than looking generic.",
        "Good design, material planning, and construction quality can contribute to stronger long-term property value.",
      ],
    },
  ];

  const faqs = [
    {
      question: "How do I start the process of hiring an architect in Kashipur?",
      answer:
        "Start by defining your project requirements, approximate budget, preferred timeline, and required services. Then research and shortlist architects with relevant experience in Kashipur.",
    },
    {
      question: "What qualifications should I check before hiring an architect?",
      answer:
        "Verify Council of Architecture registration, educational background, professional experience, portfolio quality, and familiarity with projects similar to yours.",
    },
    {
      question: "How much do architects in Kashipur typically charge?",
      answer:
        "Fees vary according to project size, scope, service level, and complexity. Architects may charge fixed fees, percentage-based fees, or hourly rates, so always request a written breakdown.",
    },
    {
      question: "Should I hire an architect who also offers interior design services?",
      answer:
        "Yes, integrated architecture and interior design services can simplify coordination, create a more consistent design, and reduce dependency on multiple consultants.",
    },
    {
      question: "Can Space Build assist with both design and statutory approvals?",
      answer:
        "Yes, Space Build supports clients with architectural planning, Vastu integration, design consultation, and documentation coordination for required approvals.",
    },
    {
      question: "Is it necessary to sign a written contract with an architect?",
      answer:
        "Yes, a written agreement is important because it defines the scope of work, fees, timeline, responsibilities, revisions, and terms for both parties.",
    },
    {
      question: "Does Space Build offer online consultations for clients outside Kashipur?",
      answer:
        "Yes, Space Build offers both online and on-site consultation options for clients in Kashipur, nearby regions, and outside the city.",
    },
    {
      question: "How long does it take to find and finalize the right architect?",
      answer:
        "The process usually takes a few weeks, depending on your research, consultations, portfolio review, proposal comparisons, and contract discussions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              How to Hire an Architect in Kashipur
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
              For professional architecture, Vastu consultation, interior
              design, renovation planning, and project management services in
              Kashipur, contact Space Build for a detailed consultation.
            </p>

            <p>
              Learn more about Space Build and its architectural consultation
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