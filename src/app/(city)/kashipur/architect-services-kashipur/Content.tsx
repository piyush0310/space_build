
import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  const sections = [
    {
      title: "Professional Architect Services for Every Project in Kashipur",
      paragraphs: [
        "As Kashipur continues to grow into a thriving residential and commercial destination in Uttarakhand, the need for dependable architect services has never been greater.",
        "Whether you are building a family home, setting up a business, or upgrading an existing property, professional architect services help ensure your project is safe, functional, and visually compelling.",
        "Architect services today go far beyond drafting blueprints. They encompass planning, design, Vastu alignment, approvals, and construction oversight.",
        "Many residents and business owners in Kashipur are unaware of how much a good architect service provider can simplify the building journey, reduce stress, and prevent costly mistakes.",
        "Space Build delivers complete architect services in Kashipur, combining creative design, technical precision, and authentic Vastu expertise for homes and commercial spaces alike.",
        "This guide explains the different architect services available in Kashipur, how they work, and what to expect when partnering with a professional firm like Space Build.",
      ],
    },
    {
      title: "What Do Architect Services Actually Include?",
      list: [
        "Architect services usually begin with understanding your requirements, budget, vision, and functional priorities through a detailed consultation.",
        "They include site assessment, feasibility analysis, and evaluation of plot-specific factors such as soil type, orientation, access, drainage, and surrounding infrastructure.",
        "Design services cover everything from initial concept sketches to detailed technical drawings used by contractors and engineers during construction.",
        "Many architect service providers also offer supporting services such as structural coordination, interior design, Vastu consultation, and statutory approval assistance.",
        "Construction supervision helps ensure the final built structure matches the approved design, with quality checks conducted at important stages.",
        "Post-construction support, including maintenance guidance and design documentation, can also form part of a complete architect service package.",
      ],
    },
    {
      title: "Why Professional Architect Services Matter in Kashipur",
      list: [
        "Kashipur&apos;s terrain, seasonal weather patterns, and evolving municipal regulations make professional architectural guidance valuable for safe and compliant construction.",
        "Without expert involvement, property owners may face structural inefficiencies, regulatory non-compliance, and design errors that become costly to correct later.",
        "Professional architect services help optimize land use, particularly on compact or irregularly shaped plots common in developing areas.",
        "As Kashipur&apos;s real estate market matures, well-designed properties can command stronger resale value and buyer interest.",
        "Businesses benefit from architect services that improve customer experience, operational efficiency, and brand representation through thoughtful commercial design.",
        "Families increasingly seek architect services that combine modern design with Vastu alignment, reflecting regional preferences for home energy and harmony.",
      ],
    },
    {
      title: "Residential Architect Services",
      list: [
        "Personalized home design based on family size, lifestyle habits, budget, and long-term living plans.",
        "Space planning that prioritizes natural light, cross-ventilation, privacy, storage, and functional room layouts.",
        "Design flexibility for independent homes, villas, duplexes, multi-story homes, and compact urban plots.",
        "Integration of contemporary aesthetics with traditional and regionally relevant design elements.",
        "Planning for future expansion, including additional floors, extended living spaces, or evolving family needs.",
      ],
    },
    {
      title: "Commercial Architect Services",
      list: [
        "Functional design solutions for offices, retail stores, showrooms, restaurants, warehouses, and industrial facilities.",
        "Layout planning that improves customer experience, staff productivity, safety, circulation, and operational flow.",
        "Facade and branding integration that strengthens business identity and street presence.",
        "Scalable design planning that supports future business growth, expansion, and operational changes.",
        "Coordination with structural experts and vendors for technically sound and practical commercial construction.",
      ],
    },
    {
      title: "Vastu-Based Architect Services",
      list: [
        "Authentic Vastu Shastra integration for both new construction and renovation projects.",
        "Directional guidance for entrances, kitchens, bedrooms, workspaces, reception areas, cabins, and cash counters.",
        "Non-destructive Vastu corrections that align energy flow without disrupting modern design intent.",
        "Continuous Vastu consultation available throughout important stages of construction.",
        "Personalized recommendations based on family needs, business goals, and property-specific conditions.",
      ],
    },
    {
      title: "Renovation Architect Services",
      list: [
        "Redesign solutions for outdated homes or commercial spaces seeking modernization.",
        "Layout improvements that enhance movement, light, ventilation, storage, and functionality with minimal structural disruption.",
        "Vastu corrections integrated into renovation plans to address recurring concerns.",
        "Facade, entrance, and interior upgrades that improve aesthetics and property value.",
        "Phased renovation planning that helps minimize disruption to home life or business operations.",
      ],
    },
    {
      title: "Interior Design Services",
      list: [
        "Complete interior planning covering concept development, materials, lighting, furniture, finishes, and decor selection.",
        "Personalized design narratives that reflect client identity in both residential and commercial projects.",
        "Space-optimization strategies for compact homes, offices, showrooms, and expansive properties.",
        "Custom storage, modular furniture, wardrobe, TV unit, and modular kitchen design solutions.",
        "Execution supervision to maintain design consistency from concept to final installation.",
      ],
    },
    {
      title: "Project Management Consultation",
      list: [
        "Coordinated oversight of architects, contractors, engineers, and vendors throughout the build process.",
        "Structured budgeting, timeline tracking, and milestone-based quality checks.",
        "Advisory guidance for clients managing execution independently while seeking professional oversight.",
        "Risk-mitigation strategies to reduce delays, disputes, design mismatches, and cost overruns.",
        "Regular site monitoring to maintain construction quality and alignment with approved drawings.",
      ],
    },
    {
      title: "Additional Support Services",
      list: [
        "Modular kitchen design and installation tailored to available space, storage requirements, and lifestyle needs.",
        "Professional pest-control services that help protect long-term structural integrity of buildings.",
        "Assistance with statutory documentation and liaison support for relevant local development authorities.",
        "Material-selection guidance and vendor recommendations based on quality, budget, and project requirements.",
      ],
    },
    {
      title: "How Space Build&apos;s Architect Services Work",
      list: [
        "Step 1: Discovery consultation. We understand your goals, budget range, style preferences, and functional requirements.",
        "Step 2: Site assessment. Our team evaluates the plot, orientation, access, existing conditions, and surrounding environment.",
        "Step 3: Concept design. Preliminary design concepts are developed and presented for your review and feedback.",
        "Step 4: Vastu refinement. The design is refined to incorporate Vastu principles when required without compromising architectural quality.",
        "Step 5: Technical drawings. Detailed floor plans, elevations, sections, and coordination drawings are prepared for approval and construction.",
        "Step 6: Approvals assistance. We support documentation and coordination required for applicable statutory clearances.",
        "Step 7: Construction oversight. Our team supervises execution to help ensure the built structure matches the approved design.",
        "Step 8: Interior integration. Interior design and fit-out work are coordinated alongside construction for a cohesive result.",
        "Step 9: Final handover. A comprehensive walkthrough and quality inspection take place before project handover.",
      ],
    },
    {
      title: "Who Needs Professional Architect Services in Kashipur?",
      list: [
        "Families planning to construct a new home on a residential plot in or around Kashipur.",
        "Business owners setting up offices, showrooms, restaurants, retail stores, warehouses, or industrial facilities.",
        "Property owners looking to renovate or modernize an outdated residential or commercial structure.",
        "Developers planning mixed-use, multi-unit, commercial, or residential projects requiring detailed architectural planning.",
        "Homeowners seeking Vastu corrections or energy-aligned improvements for an existing property.",
        "Anyone purchasing a new plot who wants professional feasibility guidance before finalizing the purchase.",
      ],
    },
    {
      title: "What Sets Quality Architect Services Apart",
      list: [
        "Personalized attention: Quality services begin with understanding client needs rather than applying generic templates.",
        "Technical precision: Strong structural knowledge helps ensure designs are beautiful, safe, practical, and durable.",
        "Regulatory expertise: Familiarity with Kashipur&apos;s building norms can help reduce approval delays.",
        "Transparent communication: Clients remain informed at every stage without unexpected surprises.",
        "Integrated offerings: The best providers combine design, Vastu, interiors, and project management for a seamless experience.",
        "Proven track record: A strong portfolio and positive client feedback demonstrate consistent service quality.",
      ],
    },
    {
      title: "DIY Planning vs Professional Architect Services",
      list: [
        "DIY or informal planning can overlook critical regulatory requirements, leading to potential legal or approval complications later.",
        "Without professional design, space utilization may become inefficient, creating wasted areas or awkward layouts.",
        "Professional architect services identify structural risks early and can help prevent expensive corrections after construction begins.",
        "Working with an architect gives clients access to trusted contractors, vendors, material suppliers, and professional coordination.",
        "Although DIY approaches may appear less expensive initially, professional guidance can prevent much larger costs from design mistakes and rework.",
        "Architect services can add long-term value through stronger resale potential, practical layouts, better durability, and reduced maintenance costs.",
      ],
    },
    {
      title: "Cost Considerations for Architect Services in Kashipur",
      list: [
        "Fees vary based on project scale, complexity, location, and the services included in the selected package.",
        "Common fee structures include fixed project fees, percentage-based fees related to construction cost, and hourly consultation rates.",
        "Always request a detailed itemized scope showing what is included, such as design, approvals, site visits, revisions, and supervision.",
        "Additional costs may apply for expanded scope, extensive revisions, special design requirements, or extra site visits beyond the original agreement.",
        "Comparing proposals from multiple providers can help establish fair pricing, but quality and experience should remain important decision factors.",
        "Bundling architecture, Vastu, and interior services with one provider can often be more cost-effective than appointing separate vendors.",
      ],
    },
    {
      title: "Tips for Getting the Most from Your Architect Services",
      list: [
        "Communicate your priorities clearly from the first consultation to reduce mismatched expectations later.",
        "Share reference images, inspiration boards, preferred colours, materials, and features you admire.",
        "Stay engaged throughout the design process by reviewing drawings and giving timely feedback.",
        "Ask questions whenever something is unclear, because effective architects welcome collaboration.",
        "Be realistic about budget and timeline constraints so the architect can plan accordingly.",
        "Maintain open communication during construction to address on-site adjustments promptly.",
      ],
    },
    {
      title: "Why Choose Space Build for Architect Services in Kashipur",
      list: [
        "Space Build combines architectural design expertise and authentic MahaVastu knowledge under one collaborative team.",
        "Our services cover residential, commercial, industrial, and renovation projects across Kashipur and the surrounding Uttarakhand and Uttar Pradesh region.",
        "We follow transparent and documented processes with clear fee structures and honest communication.",
        "Each project receives a personalized design approach that reflects the client&apos;s vision and practical needs.",
        "Online and on-site consultation options provide flexibility for clients with different schedules and locations.",
        "Our integrated service model combines architecture, Vastu, interiors, and project management without the hassle of coordinating multiple vendors.",
        "Clients value our professionalism, attention to detail, practical planning, and stress-free project experience.",
      ],
    },
  ];

  const faqs = [
    {
      question: "What architect services does Space Build provide in Kashipur?",
      answer:
        "Space Build offers residential and commercial architecture, Vastu integration, renovation planning, interior design, modular kitchens, statutory documentation support, and Project Management Consultation.",
    },
    {
      question: "How do I start the architect service process with Space Build?",
      answer:
        "Start with an initial consultation to discuss your project goals, plot details, budget range, preferred timeline, and functional requirements.",
    },
    {
      question:
        "Are Vastu-based architect services available for commercial projects?",
      answer:
        "Yes, Vastu principles can be integrated into residential as well as commercial architectural designs without compromising functionality or modern aesthetics.",
    },
    {
      question:
        "Does Space Build offer architect services for renovation projects?",
      answer:
        "Yes, Space Build provides renovation and redesign services for existing homes, offices, commercial spaces, and other properties.",
    },
    {
      question: "Can I get architect services through online consultation?",
      answer:
        "Yes, Space Build offers online and on-site consultation options for client convenience.",
    },
    {
      question: "Does Space Build assist with statutory approvals?",
      answer:
        "Yes, we support clients with documentation preparation and coordination required for applicable local approvals.",
    },
    {
      question: "How are architect service fees typically calculated?",
      answer:
        "Fees may be fixed, percentage-based, or hourly depending on project scale, complexity, required deliverables, site involvement, and the selected service package.",
    },
    {
      question: "What should I prepare before my first consultation?",
      answer:
        "Basic plot details, available site plans, ownership documents, budget range, project goals, and design references will help make the consultation productive.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Architect Services in Kashipur
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
              For professional architecture, Vastu consultation, interior
              design, renovation, statutory documentation support, and project
              management services in Kashipur, contact Space Build for a
              detailed consultation.
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
              to learn more about Space Build architect services.
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