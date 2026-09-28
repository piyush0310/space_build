import LandingEnquiry from "@/components/LandingEnquiry";
import error from "next/error"

const Content = () => {
  const services = [
    {
      title: "1. 2D Floor Plans and Space Planning",
      points: [
        "We prepare detailed floor plans that show room sizes, wall positions, door and window locations, staircase placement and open areas, all matched to your plot size and shape.",
        "Every plan is built around how your family actually lives, including joint or nuclear family requirements, number of bedrooms, work-from-home needs, elderly members, children&apos;s study areas and guest requirements.",
        "Our designers focus on smart circulation, so you do not lose valuable space to long corridors or awkward corners.",
        "We offer more than one layout option where possible, so you can compare and choose the arrangement that suits you best.",
      ],
    },
    {
      title: "2. Vastu-Compliant House Maps",
      points: [
        "Our Vastu-guided planning covers the main entrance, living room, kitchen, bedrooms, pooja room, staircase, toilets, water tanks, septic tank, open spaces and parking.",
        "We evaluate plot orientation, road position, land slope and surroundings before finalising the layout because these factors influence the entire design.",
        "Vastu is applied together with modern architecture, so you get a home that is both energetically balanced and visually contemporary without awkward compromises.",
        "Our guidance is based on authentic Vastu principles and delivered in clear, practical language that homeowners and builders can easily follow.",
      ],
    },
    {
      title: "3. 3D Elevation and Front Design",
      points: [
        "A 3D elevation lets you see your home&apos;s exterior before construction begins, including facade style, materials, colours, balconies, parapets and lighting.",
        "We help you compare modern, minimalist, classic and contemporary design options, so you can approve the final look with confidence.",
        "The elevation is designed to suit Kashipur&apos;s weather conditions and age well with low maintenance.",
        "We also suggest suitable finishes such as textured paint, cladding, stone accents and grills that balance beauty with durability.",
      ],
    },
    {
      title: "4. Structural and Utility Coordination",
      points: [
        "We coordinate with structural engineers and builders so that columns, beams and staircases fit the design without disturbing your room layouts.",
        "Plumbing, drainage, electrical points and water tank positions are planned early, which prevents wall breaking and rework later.",
        "Sunlight, ventilation shafts and rainwater flow are considered at the drawing stage itself.",
        "Early planning of septic tanks, borewells and underground water tanks helps you stay aligned with both functionality and Vastu.",
      ],
    },
    {
      title: "5. Interior-Integrated Planning",
      points: [
        "Because we are also interior designers, we plan wardrobe walls, modular kitchen layouts, TV units, pooja units and storage while preparing the map.",
        "This ensures that switch boards, lights, false-ceiling requirements and furniture placement are already accounted for before construction is complete.",
        "You avoid the common problem of a beautiful structure with rooms that cannot fit the furniture you want.",
        "Our team can continue with complete interior execution, giving you one trusted partner from map to move-in.",
      ],
    },
    {
      title: "6. Renovation and Re-Planning of Existing Homes",
      points: [
        "If you own an older house, we review your existing plan and suggest layout improvements, extra rooms, better lighting and Vastu corrections.",
        "Where possible, we recommend practical remedies that avoid heavy demolition, so you save time and money.",
        "Our renovation guidance suits homeowners who want to modernise their space without rebuilding from scratch.",
        "We can also help add a floor, extend a room or reorganise the kitchen and bathrooms for better comfort.",
      ],
    },
  ];

  const faqs = [
    {
      question: "1. What does a house map designer do?",
      answer:
        "A house map designer plans your home&apos;s layout, room sizes, entry, staircase, ventilation and structure so it is functional, safe and attractive.",
    },
    {
      question: "2. Do you provide Vastu-based house maps in Kashipur?",
      answer:
        "Yes. We integrate Vastu principles into the layout from the start without compromising modern design.",
    },
    {
      question: "3. Can you review my existing house plan?",
      answer:
        "Yes. We evaluate existing plans and suggest improvements before construction begins.",
    },
    {
      question: "4. Do you offer online consultation?",
      answer:
        "Yes. Both online and on-site consultations are available depending on your project.",
    },
    {
      question: "5. What details do I need to share to start?",
      answer:
        "Please share plot dimensions, site details, your requirements and, if available, a location pin and photographs.",
    },
    {
      question: "6. Do you also provide 3D elevation and interiors?",
      answer:
        "Yes. We offer 3D elevations, interior design, modular kitchens and complete design solutions.",
    },
    {
      question: "7. How long does house map preparation take?",
      answer:
        "Timelines depend on plot size and complexity. Share your requirements and we will confirm a schedule during consultation.",
    },
    {
      question: "8. Can you help during construction?",
      answer:
        "Yes. We provide stage-wise guidance, layout verification and site inspection when required.",
    },
    {
      question: "9. Is Vastu possible on a small or irregular plot?",
      answer:
        "Yes. Our experts adapt the layout to the plot&apos;s shape and suggest practical solutions.",
    },
    {
      question: "10. Do you work with my architect or builder?",
      answer:
        "Absolutely. We coordinate with architects, engineers and construction teams for smooth implementation.",
    },
    {
      question: "11. Can you design a map for a commercial building?",
      answer:
        "Yes. We plan offices, showrooms, shops and industrial buildings with functional and Vastu-based layouts.",
    },
    {
      question: "12. When should I contact you?",
      answer:
        "Ideally before construction begins, so planning, Vastu and design can be included from the start.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <div className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl font-semibold text-gray-900 sm:text-3xl">
              Top House Map Designer in Kashipur – Vastu-Compliant Home
              Planning by Space Build
            </h2>

            <p>
              Building a home is one of the biggest decisions of your life, and
              it starts with a well-planned house map. A good map decides how
              your rooms flow, how much light and air you get, how safe the
              structure is and how comfortable daily life feels for decades.
            </p>

            <p>
              Space Build is a team of architects, interior designers and
              construction professionals. We serve homeowners in Kashipur with
              house map designing that blends modern architecture, practical
              space planning and authentic Vastu Shastra principles.
            </p>

            <p>
              Our approach follows a simple philosophy: Plan Right, Build
              Right, Live Better. Every line on your plan is drawn with your
              family&apos;s lifestyle, budget and long-term needs in mind.
            </p>

            <p>
              Whether you own a small 100 sq. yd. plot or a large farmhouse
              land, we create a map that uses every square foot wisely and
              gives your family a home that feels open, warm and truly
              personal.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why a Professional House Map Designer Matters in Kashipur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Fast-growing city, limited plots:</strong> Kashipur is
                expanding quickly, and most residential plots are compact. A
                skilled designer makes every square foot count, so even a 1,000
                sq. ft. plot feels open, organised and comfortable.
              </li>
              <li>
                <strong>Avoid costly mistakes:</strong> Errors in room
                placement, staircase position or column layout are expensive to
                fix once construction starts. A professionally prepared map
                removes these risks before the first brick is laid.
              </li>
              <li>
                <strong>Better approvals and smoother construction:</strong> A
                properly drawn map with correct dimensions, setbacks and
                structural coordination helps you communicate clearly with
                contractors, engineers and local authorities.
              </li>
              <li>
                <strong>Comfort in the local climate:</strong> Kashipur has hot
                summers, humid monsoons and cool winters. Smart window
                placement, cross-ventilation and natural light planning reduce
                dependence on fans, ACs and artificial lighting.
              </li>
              <li>
                <strong>Long-term property value:</strong> A home with a
                logical layout, good Vastu alignment and quality design can
                earn better resale and rental value.
              </li>
              <li>
                <strong>Lower construction cost:</strong> A well-optimised plan
                avoids unnecessary walls, wasted corridors and material overuse,
                which directly reduces your total building expense.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              About Space Build
            </h2>

            <p>
              Space Build offers integrated design solutions covering
              architecture, interiors, furniture, lighting and landscaping, so
              you never have to coordinate between several agencies.
            </p>

            <p>
              Our team is led by a Founder and Managing Director who is an
              interior designer and MahaVastu expert, supported by a Director
              of Operations and Project Execution and senior interior
              designers.
            </p>

            <p>
              We manage every project with precision, creativity and transparent
              communication, from the first consultation to final handover. We
              work on residential homes, villas, apartments, offices, showrooms
              and commercial spaces with the same attention to detail.
            </p>

            <p>
              Our service range includes Vastu construction, interior designing,
              Vastu renovation, project management consultation, modular
              kitchens and pest control services, so your home is supported at
              every stage.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our House Map Designing Services
            </h2>

            {services.map((service) => (
              <div key={service.title} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Step-by-Step Design Process
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Step 1 – Consultation and requirement study:</strong>{" "}
                We discuss your family size, lifestyle, budget, preferred style
                and Vastu expectations. Consultation is available both online
                and on-site.
              </li>
              <li>
                <strong>Step 2 – Site and plot evaluation:</strong> We study
                plot dimensions, orientation, road facing, surroundings and
                slope, and we ask for plot papers or site photographs.
              </li>
              <li>
                <strong>Step 3 – Concept layout:</strong> We prepare initial
                floor-plan options so you can compare different arrangements of
                rooms, parking and open spaces.
              </li>
              <li>
                <strong>Step 4 – Refinement and Vastu review:</strong> Your
                feedback is included, and the layout is checked against Vastu
                principles and functional needs.
              </li>
              <li>
                <strong>Step 5 – 3D elevation and detailed drawings:</strong>{" "}
                We finalise the exterior design and share working drawings that
                builders and engineers can follow.
              </li>
              <li>
                <strong>Step 6 – Construction support:</strong> We offer
                stage-wise guidance, layout verification and site inspection
                when required, so the built house matches the approved plan.
              </li>
              <li>
                <strong>Step 7 – Final review:</strong> Before possession, we
                review the completed structure to confirm that important spaces
                match the approved plan and design intent.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Plot-Wise House Map Planning
            </h2>

            <h3 className="text-lg font-semibold text-gray-900">Small Plots</h3>
            <p>
              Compact plots need clever planning. We use open kitchens,
              multipurpose rooms, built-in storage and staircases placed in the
              most efficient position. Vertical planning, such as a
              well-designed second or third floor, helps you gain extra rooms
              without needing a bigger plot. Good ventilation and lighting are
              prioritised so a small house never feels congested.
            </p>

            <h3 className="text-lg font-semibold text-gray-900">Medium Plots</h3>
            <p>
              These plots allow a comfortable family home with a separate
              drawing room, two to four bedrooms, a dining area, a pooja space
              and parking. We plan front and back open spaces to bring in
              light, air and greenery. Future expansion, such as a first-floor
              addition, can be included in the design from the beginning.
            </p>

            <h3 className="text-lg font-semibold text-gray-900">
              Large Plots and Farmhouses
            </h3>
            <p>
              Larger land allows landscaped gardens, wide driveways, guest
              rooms, servant quarters and outdoor sitting areas. We plan the
              relationship between the main house, garden, parking and water
              features so the entire property feels connected. Vastu placement
              of the main house, boundary walls, water sources and open spaces
              is carefully evaluated.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Facing-Wise House Map Planning
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>East-facing plots:</strong> These are popular for good
                morning light. We place the main entrance, living room and pooja
                area to take advantage of it while planning the kitchen and
                utility areas carefully.
              </li>
              <li>
                <strong>North-facing plots:</strong> These usually offer steady,
                soft light. We design open, welcoming living spaces and place
                bedrooms and storage in balanced positions.
              </li>
              <li>
                <strong>West-facing plots:</strong> These need thoughtful
                planning for afternoon heat. We use shading, smart window sizing
                and suitable room placement to keep interiors comfortable.
              </li>
              <li>
                <strong>South-facing plots:</strong> These are often
                misunderstood. With correct Vastu planning and entrance
                placement, a south-facing plot can also become a comfortable and
                well-balanced home.
              </li>
              <li>
                <strong>Corner plots:</strong> These give two open sides and
                better light. We use the extra frontage for larger windows,
                attractive elevations and easy parking access.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Room-by-Room Planning Guidance
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Main entrance:</strong> We design a welcoming entry that
                works with the plot&apos;s orientation and avoids obstructions.
              </li>
              <li>
                <strong>Living room:</strong> This space is planned for family
                time and guests, with good lighting, comfortable seating zones
                and easy access to the dining area.
              </li>
              <li>
                <strong>Kitchen:</strong> We plan the kitchen with Vastu
                placement, proper ventilation, working-triangle efficiency and
                space for modular storage, chimney and appliances.
              </li>
              <li>
                <strong>Bedrooms:</strong> Master and children&apos;s bedrooms
                are planned for privacy, attached bathrooms, wardrobes and calm
                natural light.
              </li>
              <li>
                <strong>Pooja room:</strong> We select a peaceful,
                Vastu-suitable location and design it as a clean, dignified
                space for daily prayer.
              </li>
              <li>
                <strong>Staircase and toilets:</strong> These are placed with
                both structural convenience and Vastu principles in mind.
              </li>
              <li>
                <strong>Parking and open areas:</strong> We ensure practical
                vehicle movement, safe entry and exit, and useful green or open
                spaces around the house.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Property Types We Design For
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Independent houses and bungalows with parking, gardens and future expansion options.</li>
              <li>Duplex homes and villas with carefully planned staircases, balconies and double-height areas.</li>
              <li>Farmhouses that connect indoor comfort with outdoor living, gardens and open lawns.</li>
              <li>Apartments and flats with interior-focused planning that makes limited carpet area feel larger and more organised.</li>
              <li>Commercial spaces, including offices, showrooms and shops designed for customer flow and staff comfort.</li>
              <li>Industrial projects with functional, efficient and Vastu-aligned building layouts.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Space Build as Your House Map Designer in Kashipur
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Design and Vastu under one roof:</strong> Our team
                handles both architecture and Vastu, saving time and preventing
                conflicting advice.
              </li>
              <li>
                <strong>Personalised, not template-based:</strong> Every map is
                created for your plot, family and budget. We do not reuse
                generic drawings.
              </li>
              <li>
                <strong>Transparent communication:</strong> We explain design
                choices in simple language and keep you informed at every stage.
              </li>
              <li>
                <strong>Complete solution provider:</strong> From house map to
                modular kitchen, interiors, renovation and project management
                consultation, we support the complete journey.
              </li>
              <li>
                <strong>Flexible consultation:</strong> You can consult us
                online or on-site, and all project information remains
                confidential.
              </li>
              <li>
                <strong>Collaboration with your team:</strong> We work with your
                architect, engineer or builder so every decision moves the
                project forward.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common House Map Mistakes and How We Help
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Ignoring plot orientation, sunlight and wind direction.</li>
              <li>Poor staircase placement that wastes space and affects Vastu.</li>
              <li>Creating too many small rooms instead of usable, well-proportioned spaces.</li>
              <li>Skipping built-in storage planning, resulting in clutter later.</li>
              <li>Ignoring plumbing and electrical planning until construction begins.</li>
              <li>Not planning for future needs such as another floor, home office or elderly-friendly rooms.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Ways to Save Money with a Smart House Map
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Optimise the layout to reduce unnecessary wall length, corridors and structural complexity.</li>
              <li>Choose regular, well-proportioned room shapes where possible because they are easier and more economical to build.</li>
              <li>Align kitchens and bathrooms to reduce plumbing length and installation costs.</li>
              <li>Plan furniture, electrical points and interiors early to prevent wall breaking and rework.</li>
              <li>Get expert guidance before construction, when changes are easiest and least expensive.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Modern House Design Trends We Follow
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Open-plan living areas that combine living, dining and kitchen spaces.</li>
              <li>Natural light and ventilation through larger windows, courtyards and skylights.</li>
              <li>Smart storage through modular wardrobes, lofts and multi-purpose furniture.</li>
              <li>Balconies, terraces and green corners that bring greenery into daily life.</li>
              <li>Timeless elevations with clean and elegant front designs that remain attractive for years.</li>
              <li>Flexible rooms such as home offices and study rooms that adapt as family needs evolve.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Practical Tips Before You Finalise Your House Map
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Check plot papers, ownership documents, measurements and local building rules before design work begins.</li>
              <li>Plan for your future family needs, a possible second floor, a home office and elderly-friendly rooms.</li>
              <li>Prioritise light and ventilation in every habitable room.</li>
              <li>Do not overload the plan with many small rooms. Well-sized, usable rooms provide better comfort.</li>
              <li>Involve the designer before construction begins to minimise future modifications.</li>
              <li>Review drawings and 3D views carefully before final approval.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Documents Required for House Map Design
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Plot dimensions and site details.</li>
              <li>Property or ownership documents for reference.</li>
              <li>Google location or site photographs of the plot.</li>
              <li>Your requirement list, including rooms, floors, parking, pooja room and other needs.</li>
              <li>Existing architectural plan, if you want it reviewed or improved.</li>
              <li>Approximate budget and construction timeline.</li>
              <li>Structural drawings and current construction-stage details, if work has already started.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Benefits of a Professionally Designed House Map
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Efficient use of every square foot with clear and comfortable room flow.</li>
              <li>Reduced construction errors, rework and material wastage.</li>
              <li>Better natural light, ventilation and temperature control throughout the year.</li>
              <li>Vastu-aligned layouts that support harmony, health and prosperity.</li>
              <li>Easier coordination between engineers, contractors and interior teams.</li>
              <li>A home that holds long-term value and looks modern for years.</li>
              <li>Peace of mind knowing your investment is planned by professionals.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Serving Kashipur and Nearby Areas
            </h2>

            <p>
              We provide house map design and consultation for homeowners in
              Kashipur and surrounding towns through both online and on-site
              consultations. Clients can share plot details, photographs and
              location pins digitally, and our team guides them through the
              process without unnecessary delays.
            </p>

            <p>
              Site visits can be arranged when required for inspection, layout
              verification and stage-wise guidance.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Frequently Asked Questions
            </h2>

            <div className="space-y-5">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>

            <p>
              A great home begins with a great plan. If you want a house map
              that is practical, Vastu-aligned and beautifully designed, Space
              Build is ready to help you build it right the first time.
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
