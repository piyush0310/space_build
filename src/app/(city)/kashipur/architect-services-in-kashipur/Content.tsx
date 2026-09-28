import LandingEnquiry from "@/components/LandingEnquiry";
const residentialServices = [
  {
    title: "Custom home design",
    text: "Personalized floor plans based on family size, lifestyle, and plot dimensions rather than generic templates.",
  },
  {
    title: "Bungalow and villa design",
    text: "Elevation planning, space zoning, and premium finishing recommendations for independent houses.",
  },
  {
    title: "Apartment and duplex planning",
    text: "Efficient space utilization for compact urban plots common in growing parts of Kashipur.",
  },
  {
    title: "Vastu-compliant design",
    text: "Many homeowners in the region prefer designs aligned with Vastu principles, and experienced architects can balance this with modern functionality.",
  },
  {
    title: "Renovation and remodeling",
    text: "Updating older homes with better ventilation, modern layouts, and improved structural safety without a complete rebuild.",
  },
  {
    title: "Landscape and exterior planning",
    text: "Designing gardens, boundary walls, driveways, and outdoor seating areas to complement the main structure.",
  },
];

const commercialServices = [
  {
    title: "Showroom and retail design",
    text: "Layouts focused on customer flow, product display, and brand-appropriate aesthetics.",
  },
  {
    title: "Office space planning",
    text: "Balancing open workspaces, private cabins, meeting rooms, and employee amenities efficiently.",
  },
  {
    title: "Hotel and hospitality design",
    text: "Space planning that considers guest experience, staff movement, and safety compliance.",
  },
  {
    title: "Restaurant and café design",
    text: "Layouts that maximize seating capacity while maintaining comfort and ambiance.",
  },
  {
    title: "Banking and institutional spaces",
    text: "Functional, secure, and professional designs suited for financial or administrative use.",
  },
];

const industrialServices = [
  {
    title: "Structural planning for heavy loads",
    text: "Ensuring the building can safely support machinery, storage racks, and heavy foot traffic.",
  },
  {
    title: "Ventilation and safety planning",
    text: "Designing for proper airflow, fire safety exits, and worker safety compliance.",
  },
  {
    title: "Space optimization",
    text: "Maximizing usable floor area for storage or production lines while maintaining smooth movement paths.",
  },
  {
    title: "Utility and infrastructure planning",
    text: "Coordinating electrical, plumbing, and drainage systems suited for industrial-scale usage.",
  },
];

const interiorServices = [
  {
    title: "Space planning",
    text: "Deciding furniture placement, walkways, and functional zones within an already-built structure.",
  },
  {
    title: "Material and finish selection",
    text: "Choosing flooring, wall finishes, lighting, and fixtures that match the client&apos;s style and budget.",
  },
  {
    title: "Modular furniture design",
    text: "Custom-built wardrobes, kitchen units, and storage solutions tailored to available space.",
  },
  {
    title: "Lighting design",
    text: "Balancing natural and artificial lighting to enhance both aesthetics and energy efficiency.",
  },
  {
    title: "3D visualization",
    text: "Giving clients a realistic preview of the interior before actual work begins, reducing costly revisions later.",
  },
];

const structuralServices = [
  {
    title: "Foundation design",
    text: "Based on soil testing and load calculations specific to the plot location.",
  },
  {
    title: "Load-bearing and framed structure analysis",
    text: "Determining the most suitable construction method for the project.",
  },
  {
    title: "Earthquake-resistant design",
    text: "Especially relevant given Uttarakhand&apos;s seismic zone classification, making this a critical service rather than an optional add-on.",
  },
  {
    title: "Retrofitting and structural audits",
    text: "For older buildings that need safety assessments or reinforcement before renovation.",
  },
];

const faqs = [
  {
    question: "Q1. What architect services does Spacebuild offer in Kashipur?",
    answer:
      "Spacebuild offers residential, commercial, industrial, interior, structural, and renovation design services along with construction supervision.",
  },
  {
    question: "Q2. Can I hire an architect only for interior design?",
    answer:
      "Yes, interior design services can be availed independently, even for already-constructed spaces.",
  },
  {
    question:
      "Q3. Do architect services include municipal approval assistance?",
    answer:
      "Many firms, including Spacebuild, assist with building plan approvals and required documentation.",
  },
  {
    question: "Q4. Is structural design included in architect services?",
    answer:
      "Structural design is often a separate but essential service, especially important in Uttarakhand&apos;s seismic zone.",
  },
  {
    question: "Q5. How long does a typical residential design project take?",
    answer:
      "Most residential projects take three to six weeks for design finalization, depending on complexity.",
  },
  {
    question:
      "Q6. Are 3D visualizations part of standard architect services?",
    answer:
      "Many firms now offer 3D renders and walkthroughs to help clients preview designs before construction.",
  },
  {
    question: "Q7. Can architect services help with renovation projects?",
    answer:
      "Yes, renovation and restoration services cover structural assessment, layout updates, and facade improvements.",
  },
  {
    question:
      "Q8. Do architect services include construction supervision?",
    answer:
      "Some firms include site supervision in their package. Always confirm this before signing an agreement.",
  },
];

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <div className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Architect Services in Kashipur: A Complete Overview by Spacebuild
            </h2>

            <p>
              Kashipur has grown into one of the busiest towns in Udham Singh
              Nagar district, with new residential colonies, commercial markets,
              and industrial units coming up every year. As the town expands,
              the demand for professional architect services has grown alongside
              it. People no longer just want a building; they want a
              well-planned, functional, and future-ready space that reflects
              their needs and budget.
            </p>

            <p>
              This is where a full-service architecture firm like Spacebuild
              plays an important role, offering everything from initial concept
              design to final execution under one roof. This article breaks down
              the range of architect services available in Kashipur, what each
              service involves, and how choosing the right service package can
              save you time, money, and stress throughout your construction
              journey.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Are Architect Services, Exactly?
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                Architect services go far beyond drawing a floor plan. They
                cover planning, safety, aesthetics, and the long-term
                functionality of a space.
              </li>
              <li>
                A complete architect service package typically includes design
                conceptualization, structural planning, material
                recommendations, and construction supervision.
              </li>
              <li>
                Services can be customized depending on whether you need a
                brand-new build, a renovation, or purely interior planning.
              </li>
              <li>
                Good architect services also factor in local climate, soil type,
                and municipal regulations specific to Kashipur.
              </li>
              <li>
                The scope can range from a single-room renovation to a
                full-scale commercial or industrial project.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Residential Architect Services
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {residentialServices.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}:</strong> {service.text}
                </li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Commercial Architect Services
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {commercialServices.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}:</strong> {service.text}
                </li>
              ))}
            </ul>

            <p>
              Commercial projects often require faster turnaround times, and
              experienced firms plan phased execution to minimize business
              disruption.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Industrial and Warehouse Architect Services
            </h2>

            <p>
              Kashipur&apos;s growing industrial belt has increased demand for
              warehouse, factory, and godown design services.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              {industrialServices.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}:</strong> {service.text}
                </li>
              ))}
            </ul>

            <p>
              These projects usually require close coordination between
              architects and structural engineers from the very first design
              stage.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Interior Design Services
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              {interiorServices.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}:</strong> {service.text}
                </li>
              ))}
            </ul>

            <p>
              Interior services can be availed independently, even if the
              architect was not involved in the original construction.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Structural Design and Engineering Services
            </h2>

            <p>
              Structural design ensures the safety and durability of any
              building, regardless of its size or purpose.
            </p>

            <ul className="list-disc space-y-3 pl-6">
              {structuralServices.map((service) => (
                <li key={service.title}>
                  <strong>{service.title}:</strong> {service.text}
                </li>
              ))}
            </ul>

            <p>
              A firm offering both architectural and structural services under
              one roof reduces communication gaps between designers and
              engineers.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              3D Visualization and Design Presentation Services
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Photorealistic 3D renders:</strong> Helping clients
                visualize the final look of their home or commercial space
                before construction begins.
              </li>
              <li>
                <strong>Walkthrough videos:</strong> Simulating a virtual tour
                through the planned space for a more immersive preview.
              </li>
              <li>
                <strong>Material and color mock-ups:</strong> Testing different
                finishes digitally before committing to actual purchases.
              </li>
            </ul>

            <p>
              This service has become increasingly popular in Kashipur as more
              clients want clarity and confidence before investing in
              construction.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Municipal Approval and Documentation Services
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Building plan approval:</strong> Preparing and
                submitting drawings according to Kashipur Municipal Council and
                Udham Singh Nagar development norms.
              </li>
              <li>
                <strong>NOC and compliance documentation:</strong> Handling
                paperwork required for various no-objection certificates based
                on plot location and project type.
              </li>
              <li>
                <strong>Liaison with local authorities:</strong> Experienced
                architects often have established relationships with local
                offices, which can speed up approval timelines.
              </li>
            </ul>

            <p>
              This service is especially valuable for clients unfamiliar with
              the documentation process, saving significant time and reducing
              the chance of rejected applications.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Construction Supervision and Project Management Services
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Site visits and quality checks:</strong> Regular
                inspections to ensure construction matches approved drawings and
                quality standards.
              </li>
              <li>
                <strong>Contractor coordination:</strong> Acting as a bridge
                between the client and on-site contractors to resolve issues
                quickly.
              </li>
              <li>
                <strong>Material quality verification:</strong> Ensuring the
                materials used match specifications agreed upon during the
                design phase.
              </li>
              <li>
                <strong>Timeline and budget tracking:</strong> Keeping the
                project on schedule and flagging potential cost overruns early.
              </li>
            </ul>

            <p>
              This service is particularly useful for clients who cannot be
              present on-site regularly due to work or distance.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Renovation and Restoration Services
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Structural assessment of old buildings:</strong>{" "}
                Identifying safety concerns before starting renovation work.
              </li>
              <li>
                <strong>Layout modernization:</strong> Updating outdated floor
                plans to suit modern living or business needs.
              </li>
              <li>
                <strong>Facade and exterior upgrades:</strong> Refreshing the
                external appearance without altering the entire structure.
              </li>
              <li>
                <strong>Heritage and older property restoration:</strong>{" "}
                Preserving character while improving functionality and safety,
                which is relevant for some of Kashipur&apos;s older commercial
                buildings.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Spacebuild for Architect Services in Kashipur?
            </h2>

            <ul className="list-disc space-y-3 pl-6">
              <li>
                Spacebuild offers a combined team of architects, structural
                engineers, and interior designers, eliminating the need to hire
                multiple vendors separately.
              </li>
              <li>
                Every project begins with a detailed consultation to understand
                the budget, timeline, and specific requirements before design
                work starts.
              </li>
              <li>
                The firm emphasizes climate-responsive and locally suited
                designs rather than copy-paste templates.
              </li>
              <li>
                Transparent fee structures and written agreements ensure clarity
                at every stage of the project.
              </li>
              <li>
                Regular site visits and progress updates keep clients informed
                without them having to constantly follow up.
              </li>
              <li>
                From small residential renovations to large commercial and
                industrial projects, Spacebuild adapts its service scope to
                match the actual needs of each client.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              How to Choose the Right Architect Service Package
            </h2>

            <ol className="list-decimal space-y-3 pl-6">
              <li>
                Start by identifying whether you need design-only services or a
                complete design-to-construction package.
              </li>
              <li>
                Ask for a clear breakdown of what is included. Design,
                structural work, approvals, and supervision are often priced
                separately.
              </li>
              <li>
                Compare timelines offered by different firms, especially if you
                have a fixed possession or opening deadline.
              </li>
              <li>
                Check whether 3D visualization is included, as this can prevent
                costly design changes later.
              </li>
              <li>
                Confirm whether municipal approval assistance is part of the
                package or needs to be arranged separately.
              </li>
              <li>
                Choose a firm that communicates clearly and responds promptly,
                since this reflects how the entire project will likely be
                managed.
              </li>
            </ol>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Get in Touch with Spacebuild
            </h2>

            <p>
              Whether you need residential, commercial, industrial, structural,
              interior, or renovation design services in Kashipur, Spacebuild
              can help you plan your project with clarity and confidence.
            </p>

            <p>
              To explore design portfolios, request a consultation, or learn
              more about architect services, visit the official website:{" "}
              <a
                href="https://www.spacebuild.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.spacebuild.co.in
              </a>
            </p>

            <p>
              📞 <strong>WhatsApp / Call:</strong>{" "}
              <a
                href="tel:+919927611780"
                className="text-blue-600 hover:underline"
              >
                +91 9927611780
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