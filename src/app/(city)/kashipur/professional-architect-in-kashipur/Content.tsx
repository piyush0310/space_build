
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: 'What Makes an Architect "Professional"?',
    intro:
      "The term architect is sometimes used loosely, but a genuinely professional architect meets specific standards of qualification, registration, and practice.",
    points: [
      "Formal education: A recognised degree in architecture (B.Arch or equivalent) from a certified institution.",
      "Council of Architecture (CoA) registration: Legal registration required in India to practice and sign official architectural drawings.",
      "Structured design process: A defined workflow from consultation to concept design, working drawings, and site supervision.",
      "Professional liability and accountability: A registered architect is legally accountable for the safety and compliance of their design.",
      "Continued industry knowledge: Awareness of current building codes, materials, and construction techniques.",
      "Transparent documentation: Written agreements, itemised fee structures, and clear scope of work for every project.",
    ],
  },
  {
    title: "Why Hiring a Registered Professional Matters in Kashipur",
    intro:
      "As Kashipur's construction activity grows, the gap between qualified professionals and informal designers has become more important to understand before signing any agreement.",
    points: [
      "A registered architect's drawings are typically required for approvals from the local development authority.",
      "Professional design reduces the risk of structural errors that could compromise safety or require expensive rework.",
      "Registered architects carry professional accountability, offering clients more protection than informal or unregistered designers.",
      "Professional firms are more likely to coordinate properly with structural engineers, reducing costly design conflicts.",
      "A qualified architect brings updated knowledge of building codes, which helps avoid approval rejections or delays.",
      "Professional documentation protects clients in case of disputes over scope, cost, or project delays.",
    ],
  },
  {
    title: "Core Services Offered by a Professional Architect",
    intro:
      "A professional architecture practice typically covers the full journey from initial idea to construction-ready documentation, not just a single drawing.",
    points: [
      "Site analysis and feasibility study: Assessing plot conditions, orientation, and any site-specific constraints before design begins.",
      "Concept design and space planning: Developing initial layout options based on client requirements and budget.",
      "Vastu-integrated planning: Aligning room placement and entrance direction with vastu principles, where requested.",
      "Structural design coordination: Working with structural engineers to ensure the design is safe and buildable.",
      "Working drawings and technical documentation: Detailed drawings used by contractors for accurate construction.",
      "3D visualization: Realistic renders to help clients understand the finished space before construction begins.",
      "Approval documentation support: Preparing drawings and paperwork required for municipal or development authority approval.",
      "Site supervision: Periodic visits to ensure construction matches the approved design and specifications.",
    ],
  },
  {
    title: "Signs You Are Dealing With a Genuinely Professional Architect",
    intro:
      "Before signing any agreement, it helps to recognise the practical signs of professionalism during your initial interactions.",
    points: [
      "They ask detailed questions about your requirements, budget, and site conditions before proposing a design.",
      "They provide a written proposal outlining scope, deliverables, timeline, and fees.",
      "They are transparent about what is included in the fee and what is charged separately.",
      "They can show a portfolio of completed projects, ideally including examples in or near Kashipur.",
      "They involve or recommend a structural engineer for load-bearing and safety calculations.",
      "They offer a realistic timeline rather than making unrealistic promises to win the project.",
      "They remain professionally responsive even after the initial consultation and payment.",
    ],
  },
  {
    title: "Warning Signs of an Unqualified or Informal Designer",
    intro:
      "Being aware of common red flags helps protect you from costly mistakes, especially on larger residential or commercial projects.",
    points: [
      "Reluctance to share registration details, qualifications, or a formal portfolio.",
      "No written agreement or scope of work before starting design or collecting payment.",
      "Drawings that lack structural detail or coordination with a qualified engineer.",
      "Vague or inconsistent answers about fees, revisions, and site visit inclusions.",
      "No verifiable completed projects or client references in the local area.",
      "Pressure to make quick decisions without adequate time to review the proposal.",
    ],
  },
  {
    title: "Residential Projects: What to Expect from a Professional Architect",
    intro:
      "For homeowners in Kashipur, a professional architect brings structure and clarity to what can otherwise be an overwhelming process.",
    points: [
      "A clear discussion of family needs, lifestyle, and future space requirements before design begins.",
      "Layout options that balance functionality, natural light, ventilation, and vastu preferences.",
      "Detailed working drawings that reduce ambiguity and errors during construction.",
      "Realistic budgeting guidance based on material choices and construction scope.",
      "Ongoing support through approvals, structural coordination, and site supervision.",
      "A final design that reflects the client's vision while remaining practical to build and maintain.",
    ],
  },
  {
    title: "Commercial and Industrial Projects: The Professional Advantage",
    intro:
      "For business owners, working with a professional architect brings additional value around compliance, functionality, and long-term flexibility.",
    points: [
      "Careful planning of layout efficiency, circulation, and code compliance for commercial spaces.",
      "Facade and signage design that supports visibility and brand presence.",
      "Industrial layout planning that prioritises workflow, loading access, and safety requirements.",
      "Coordination with fire safety and structural requirements specific to commercial and institutional buildings.",
      "Flexible design planning that allows for future expansion or changes in business needs.",
      "Professional documentation that simplifies approvals for commercial and industrial permits.",
    ],
  },
  {
    title: "How to Verify an Architect's Credentials in Kashipur",
    intro:
      "Taking a few extra steps to verify credentials can save significant time, money, and stress later in your project.",
    points: [
      "Ask for the architect's Council of Architecture (CoA) registration number and verify it if needed.",
      "Request to see their educational qualifications and relevant professional experience.",
      "Ask for a portfolio showing completed projects similar in type and scale to yours.",
      "Request client references you can contact directly for feedback on their experience.",
      "Confirm whether they work with a registered structural engineer for safety-critical calculations.",
      "Check for consistent online presence, including reviews, a business listing, and social media activity.",
    ],
  },
  {
    title: "Questions to Ask During Your First Consultation",
    intro:
      "A structured first meeting helps you evaluate professionalism and fit before committing to a long-term project relationship.",
    points: [
      "What is your educational background and how many years have you been practising in Kashipur?",
      "Can you share examples of similar projects you have completed in the region?",
      "What does your standard fee structure include, and what is billed separately?",
      "How do you coordinate with structural engineers and contractors during construction?",
      "How many site visits are included, and how are additional visits handled?",
      "What is your typical process for handling design revisions?",
    ],
  },
  {
    title: "The Professional Design Process at Space Build",
    intro:
      "Space Build follows a structured, professional design process designed to give clients clarity and confidence at every stage of their project.",
    points: [
      "Initial consultation: Understanding client requirements, budget, vastu preferences, and site conditions in detail.",
      "Concept design: Presenting layout options for client feedback before moving to detailed drawings.",
      "Vastu integration: Aligning the design with vastu principles alongside practical planning needs.",
      "Structural coordination: Working closely with structural engineers to finalise a safe, buildable design.",
      "3D visualization: Providing realistic renders so clients can clearly picture the finished space.",
      "Working drawings: Preparing detailed technical documentation for accurate construction execution.",
      "Site supervision: Conducting regular visits to ensure construction aligns with the approved design.",
    ],
  },
  {
    title: "Why Space Build Is Recognised as a Professional Architecture Partner",
    intro:
      "Space Build's approach reflects the qualities clients should expect from any professional architecture firm in Kashipur.",
    points: [
      "A team of qualified architects, interior designers, and vastu experts working together on every project.",
      "Transparent, itemised proposals that clearly outline scope, deliverables, and fees from the start.",
      "Structured project management that keeps design and construction aligned throughout.",
      "A growing portfolio of residential, commercial, and industrial projects across the region.",
      "Consistent client feedback highlighting clear communication, attention to detail, and reliable execution.",
    ],
  },
  {
    title: "The Value of Professional Design in the Long Run",
    intro:
      "While professional architectural services involve an upfront fee, the long-term value they provide typically outweighs the initial cost.",
    points: [
      "Reduces the risk of expensive structural or layout errors discovered after construction begins.",
      "Improves natural light, ventilation, and overall functionality of the finished space.",
      "Helps avoid approval delays caused by incomplete or non-compliant documentation.",
      "Provides a clear, documented reference point in case of disputes with contractors during construction.",
      "Enhances long-term property value through thoughtful, well-executed design.",
    ],
  },
];

const faqs = [
  {
    question:
      "What qualifications should a professional architect in Kashipur have?",
    answer:
      "A recognised B.Arch degree and valid Council of Architecture (CoA) registration are essential qualifications to check.",
  },
  {
    question: "Why is CoA registration important?",
    answer:
      "It confirms the architect is legally authorised to practice and sign official drawings required for approvals in India.",
  },
  {
    question: "Does a professional architect also handle structural design?",
    answer:
      "Professional architects typically coordinate with a registered structural engineer rather than handling structural calculations themselves.",
  },
  {
    question: "How can I verify an architect's credentials before hiring?",
    answer:
      "Ask for their registration number, qualifications, portfolio, and client references before signing any agreement.",
  },
  {
    question: "Is Space Build a professional architecture firm in Kashipur?",
    answer:
      "Yes, Space Build offers professional architecture, vastu, and interior design services backed by a qualified, experienced team.",
  },
  {
    question: "What happens if I hire an unregistered designer?",
    answer:
      "You risk approval delays, structural issues, and limited legal accountability if problems arise during or after construction.",
  },
  {
    question: "Do professional architects offer vastu consultation as well?",
    answer:
      "Many do, either in-house or through coordination with a vastu expert, including firms like Space Build.",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Professional Architect in Kashipur – What to Look For &amp; Why It
              Matters
            </h2>

            <p>
              Hiring a professional architect in Kashipur is one of the most
              important decisions you&apos;ll make before starting any
              construction or renovation project. The difference between a
              registered, experienced professional and an unqualified designer
              often shows up later — in structural safety, approval delays,
              budget overruns, or a layout that simply does not work for daily
              living.
            </p>

            <p>
              This guide explains what defines a truly professional architect in
              Kashipur, why qualifications and registration matter, what
              services a professional should offer, and how to evaluate
              credentials before hiring. It also outlines why Space Build is
              trusted by homeowners and businesses across the region for
              professional, accountable design and execution.
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
              Get Started with a Professional Architect at Space Build
            </h2>

            <p>
              Whether you&apos;re planning a new home, renovation, or commercial
              project in Kashipur, working with a qualified, professional
              architecture team ensures your project is designed safely,
              efficiently, and in line with your vision. Share your site
              details, requirements, and budget with Space Build to begin your
              consultation.
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