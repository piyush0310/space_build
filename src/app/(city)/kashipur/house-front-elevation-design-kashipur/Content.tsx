
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  const serviceSections = [
    {
      heading: "1. Custom Front Elevation Design",
      points: [
        "Every elevation is created for your plot, your family and your budget, and we do not reuse a fixed template for every client.",
        "We study your plot size, road position, surrounding buildings and floor plan, then design a facade that fits naturally in its setting.",
        "Options are prepared so you can compare styles and select the one that feels right.",
        "Your feedback shapes each revision, so the final design reflects your taste and not just ours.",
      ],
    },
    {
      heading: "2. 3D Elevation Visualisation",
      points: [
        "A 3D view shows the exterior with proposed colours, materials, lighting and proportions, so you understand the final look clearly.",
        "You can review changes to windows, balconies, textures and paint schemes before construction, which avoids confusion and rework.",
        "Clear visuals also help your builder and contractor understand exactly what needs to be executed.",
        "Comparing two or three colour or material combinations in 3D makes decision-making much easier.",
      ],
    },
    {
      heading: "3. Vastu-Aligned Elevation Planning",
      points: [
        "Our Vastu construction guidance covers the main entrance, plot orientation, road position and structural layout, and the same care is applied to the front elevation.",
        "We consider entrance placement, gate position, porch, steps and open areas so the exterior supports positive energy while remaining modern and stylish.",
        "Existing plans can also be reviewed, and Vastu-based improvements are suggested before construction starts.",
        "Both online and on-site consultation options are available, and all project information remains confidential.",
      ],
    },
    {
      heading: "4. Elevation for New Construction",
      points: [
        "We design the elevation along with the floor plan and structure, so windows, balconies, staircase and floor heights work together.",
        "Planning both at the same time avoids awkward exteriors, wasted space and last-minute structural changes.",
        "Stage-wise guidance and site inspection are available to keep the built facade aligned with the approved design.",
        "Early coordination with your engineer or contractor helps ensure that projections, sunshades and parapets are built correctly.",
      ],
    },
    {
      heading: "5. Elevation Makeover for Existing Homes",
      points: [
        "If your home looks outdated, we redesign the front with new textures, colours, cladding, balcony treatment, lighting and entrance features.",
        "Practical improvements are recommended so you gain a fresh look without heavy demolition.",
        "This is a cost-effective way to modernise an older house and increase its value.",
        "We can also combine the makeover with renovation work, such as new doors, windows or a redesigned porch.",
      ],
    },
    {
      heading: "6. Interior and Exterior Coordination",
      points: [
        "Because interior design is part of our core work, we keep the outside and inside of your home in harmony.",
        "Colours, lighting and material choices are matched, so the entrance, living room and exterior feel like one design story.",
        "Our modular kitchen and interior services continue that quality throughout the home.",
        "You get one design language across the entire property, from the gate to the last room.",
      ],
    },
  ];

  const faqs = [
    {
      question: "1. What is a front elevation design?",
      answer:
        "It is the design of your home's exterior face, shown in 2D drawings and 3D views.",
    },
    {
      question: "2. Do you offer front elevation design in Kashipur?",
      answer:
        "Yes. We serve homeowners in and around Kashipur through online and on-site consultation.",
    },
    {
      question: "3. Can you include Vastu in the elevation?",
      answer:
        "Yes. We consider entrance, orientation and layout alignment as part of the design.",
    },
    {
      question: "4. Can you redesign my old home's facade?",
      answer:
        "Yes. We offer elevation makeovers with practical improvements and minimal demolition.",
    },
    {
      question: "5. Will I see the design before construction?",
      answer:
        "Yes. 3D visualisation helps you review the look before work begins.",
    },
    {
      question: "6. Do you help during execution?",
      answer:
        "Yes. We provide stage-wise guidance and site inspection when required.",
    },
    {
      question: "7. What details do you need to start?",
      answer:
        "We need plot size, floor plans, site photographs, location pin and your style preferences.",
    },
    {
      question: "8. Do you also provide interiors?",
      answer:
        "Yes. We offer interior design, modular kitchens and complete home solutions.",
    },
    {
      question: "9. Can you design the gate and boundary wall too?",
      answer:
        "Yes. We can match the compound wall, gate and nameplate to your elevation.",
    },
    {
      question: "10. Can you suggest colours and materials?",
      answer:
        "Yes. We recommend options based on your style, budget, climate and maintenance needs.",
    },
    {
      question: "11. Is elevation design only for new houses?",
      answer:
        "No. It is also suitable for renovations, floor additions and facade upgrades.",
    },
    {
      question: "12. When should I contact you?",
      answer:
        "Ideally before construction begins, so the elevation, layout and Vastu can be planned together.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <div className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl font-semibold text-gray-900 sm:text-3xl">
              House Front Elevation Design in Kashipur – Modern, Vastu-Aligned
              Exterior Designs by Space Build
            </h2>

            <p>
              The front elevation is the first thing anyone notices about your
              home. It shapes the first impression for guests and neighbours,
              and it reflects your taste, lifestyle and the care you put into
              your property.
            </p>

            <p>
              Space Build offers house front elevation design in Kashipur that
              blends modern architecture, practical planning and Vastu guidance.
              Our team of architects, interior designers and construction
              professionals designs elevations that look elegant and work well
              in real life.
            </p>

            <p>
              Our philosophy is simple: Plan Right, Build Right, Live Better.
              We design the exterior together with the floor plan, so the look
              of your home always matches how it functions inside.
            </p>

            <p>
              Whether you are building a new bungalow, adding a floor or giving
              an old house a fresh face, we help you choose an elevation you
              will be proud of for years.
            </p>

            <p>
              Our aim is to give you a facade that is beautiful, durable,
              practical and personal, and not just a copy of a picture from the
              internet.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              What Is a House Front Elevation?
            </h2>

            <p>
              A front elevation is the design of the outer face of your house as
              seen from the street, including walls, windows, doors, balconies,
              parapets, roof lines, lighting and finishing materials.
            </p>

            <p>
              It is prepared as a 2D drawing and a 3D view, so you can see
              exactly how the house will look before construction begins. A good
              elevation is not just decoration. It affects sunlight,
              ventilation, privacy, weather protection and long-term
              maintenance.
            </p>

            <p>
              The elevation must also match the internal layout because window
              positions, staircase location and floor heights are decided
              together. A complete elevation package can also include the
              boundary wall, gate, porch, landscaping and exterior lighting, so
              the whole frontage looks unified.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Front Elevation Design Matters
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Strong first impression:</strong> A well-designed facade
                makes your home stand out on the street and adds to your pride
                of ownership.
              </li>
              <li>
                <strong>Higher property value:</strong> Homes with attractive
                and well-proportioned exteriors are easier to sell or rent and
                can receive better market value.
              </li>
              <li>
                <strong>Comfort inside the home:</strong> Smart placement of
                windows, balconies and shading elements brings in daylight and
                fresh air while reducing heat gain.
              </li>
              <li>
                <strong>Privacy and security:</strong> Careful design of
                openings, boundary walls and gates helps you enjoy light and
                views without feeling exposed.
              </li>
              <li>
                <strong>Avoiding expensive changes:</strong> A 3D preview lets
                you decide before work starts and prevents costly facade changes
                later.
              </li>
              <li>
                <strong>Long-term durability:</strong> Good detailing of
                parapets, sunshades and drainage protects walls from seepage and
                weather damage.
              </li>
              <li>
                <strong>Emotional satisfaction:</strong> Coming home to a
                facade you love makes every day feel more special.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our House Front Elevation Services in Kashipur
            </h2>

            <div className="space-y-6">
              {serviceSections.map((service) => (
                <div key={service.heading} className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.heading}
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Popular Front Elevation Styles We Design
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Modern contemporary:</strong> Clean lines, flat or
                slightly sloped roofs, large glass openings and neutral colours
                give a bright and fresh look.
              </li>
              <li>
                <strong>Minimalist:</strong> Simple shapes, limited materials
                and calm tones create an elegant facade that stays attractive
                for years.
              </li>
              <li>
                <strong>Classic and traditional:</strong> Columns, arches,
                detailed mouldings and warm colours give a refined and timeless
                character.
              </li>
              <li>
                <strong>Luxury facade:</strong> Statement entrances, stone or
                cladding accents, feature lighting and premium finishes create
                a rich, high-end presence.
              </li>
              <li>
                <strong>Indo-modern blend:</strong> Traditional elements such as
                jaali patterns, decorative doors and a welcoming porch are
                combined with modern lines and materials.
              </li>
              <li>
                <strong>Duplex and multi-storey elevations:</strong> Balconies,
                projections, planters and varied heights break monotony and give
                depth to taller buildings.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Elevation Ideas by Number of Floors
            </h2>

            <h3 className="text-lg font-semibold text-gray-900">
              Single-Floor Homes
            </h3>
            <p>
              Use a strong entrance porch, a slightly raised parapet and a
              feature wall to give the house presence and character. Horizontal
              lines and wide windows make the house look broad and welcoming.
              Planters and landscaping become important because the facade is
              easy to frame with greenery.
            </p>

            <h3 className="text-lg font-semibold text-gray-900">
              Ground Plus One Homes
            </h3>
            <p>
              Balconies on the first floor create depth and give shade to the
              ground-floor entrance. Combining textured paint on the upper level
              with stone or cladding on the lower level adds visual balance. The
              staircase and window alignment should be planned carefully so the
              front looks neat and proportionate.
            </p>

            <h3 className="text-lg font-semibold text-gray-900">
              Ground Plus Two and Taller Homes
            </h3>
            <p>
              Vertical elements such as fins, columns and tall windows add
              height and rhythm. Stepping balconies or varied projections
              prevent the building from looking like a flat box. Rooftop
              features, hidden water tanks and clean parapets give the top of
              the building a finished appearance.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Key Elements of a Great Front Elevation
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Main entrance and door:</strong> The door is the focal
                point of the facade, so its size, material, design and
                surroundings deserve special attention.
              </li>
              <li>
                <strong>Windows and openings:</strong> Correct size and
                placement bring daylight and ventilation, while proportion and
                alignment improve the overall look.
              </li>
              <li>
                <strong>Balconies and projections:</strong> These add depth and
                usable space, and they provide shade to rooms below when planned
                properly.
              </li>
              <li>
                <strong>Parapet and roof line:</strong> A neat parapet,
                well-designed roof edge and hidden water tank make the top of
                the building look clean and finished.
              </li>
              <li>
                <strong>Boundary wall and gate:</strong> A matching compound
                wall and gate complete the exterior and improve security and
                privacy.
              </li>
              <li>
                <strong>Facade lighting:</strong> Wall lights, cove lights and
                entrance lighting highlight textures and make the home look
                beautiful at night.
              </li>
              <li>
                <strong>Landscaping and planters:</strong> Greenery, planters
                and small garden areas soften the exterior and welcome visitors.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Entrance and Porch Design
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Make the entrance the hero:</strong> A well-designed
                entrance draws the eye, guides visitors and gives the house a
                confident character.
              </li>
              <li>
                <strong>Porch depth and height:</strong> A properly proportioned
                porch gives shade, rain protection and a comfortable transition
                between outside and inside.
              </li>
              <li>
                <strong>Steps and platform:</strong> Well-planned steps with
                safe dimensions and durable finishes make daily use easy for
                children and elderly family members.
              </li>
              <li>
                <strong>Door design:</strong> Material, colour and pattern
                should suit the overall style, and the door should look
                substantial and welcoming.
              </li>
              <li>
                <strong>Vastu consideration:</strong> Entrance direction and
                placement are studied with plot orientation and road position.
              </li>
              <li>
                <strong>Accessible planning:</strong> Where required, we plan a
                gentle ramp or easy access for elderly members and wheelchair
                users.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Boundary Wall and Gate Design
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Use matching colours, textures and materials for a unified frontage.</li>
              <li>Balance wall height, openings and gate design for privacy without making the house feel closed off.</li>
              <li>Choose sliding gates, swing gates or pedestrian gates in metal, wood-finish or mixed materials based on your needs.</li>
              <li>Add a stylish nameplate, wall lights and gate lights for character and easy identification.</li>
              <li>Plan gate width and driveway dimensions for smooth vehicle movement.</li>
              <li>Use proper waterproofing and drainage to prevent dampness and stains at the base of walls.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Colour Selection for Front Elevation
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Neutral palettes such as whites, creams, greys and beiges give a clean and timeless look.</li>
              <li>Warm tones such as earthy browns, terracotta and soft yellows create a friendly and welcoming feel.</li>
              <li>Accent colours on a feature wall, door or balcony add personality without overwhelming the facade.</li>
              <li>Lighter colours reflect heat and make spaces look larger, while darker tones add depth and contrast.</li>
              <li>The colour scheme should sit comfortably with neighbouring buildings and the local environment.</li>
              <li>We consider Vastu-friendly colour suggestions along with orientation and the overall design.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Facade Lighting Design
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Wall washers, spotlights and strip lights bring out textures, cladding and entrance details after dark.</li>
              <li>A mix of ambient, accent and functional lights creates depth without glare.</li>
              <li>Well-lit steps, gates and driveways make coming home at night safer and more comfortable.</li>
              <li>LED fixtures reduce electricity use and offer long life, helping to control running costs.</li>
              <li>Warm tones create a cosy and welcoming look, while cooler tones suit modern minimalist facades.</li>
              <li>Conduits, junction boxes and switches should be planned during construction so wiring remains hidden and neat.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Materials and Finishes for Front Elevation
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Textured and weather-resistant paint is a practical, budget-friendly option that adds colour and protects walls.</li>
              <li>Natural or artificial stone cladding adds richness and depth, especially at entrances and feature walls.</li>
              <li>Tiles and cladding panels create modern patterns with low maintenance and long life when installed correctly.</li>
              <li>Wood-finish and metal elements work well for doors, pergolas, louvers and grills.</li>
              <li>Glass and glazing provide light and openness and work best when combined with shading for heat control.</li>
              <li>Grills, jaalis and screens offer decoration, ventilation and privacy at the same time.</li>
              <li>We recommend finishes according to your budget, Kashipur weather conditions and maintenance preferences.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Designing Elevations for Kashipur&apos;s Climate
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Sunshades, deeper balconies and well-planned window sizes reduce direct sunlight and help keep rooms cooler in summer.</li>
              <li>Proper slopes, drip moulds, waterproofing and drainage prevent dampness, stains and seepage during monsoon.</li>
              <li>Openings are positioned for cross-ventilation, so the house stays fresh through changing seasons.</li>
              <li>Moisture-resistant, dust-resistant and fade-resistant materials lower repainting and repair costs over time.</li>
              <li>Simple textures and easy-to-clean surfaces help the facade look good for longer.</li>
              <li>Windows and balconies that allow winter sun into living spaces make the home more pleasant in colder months.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Landscaping and Greenery for the Frontage
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Built-in planters and vertical greenery add freshness and soften hard surfaces.</li>
              <li>Even a compact garden strip with grass, shrubs or decorative stones improves the look of the house.</li>
              <li>Well-chosen trees provide shade, but their root spread and location should be planned carefully.</li>
              <li>Neatly finished paths and paving guide visitors and make the entrance more attractive.</li>
              <li>A small fountain or water feature can add charm where space and maintenance allow.</li>
              <li>We recommend low-maintenance plants and practical layouts for a beautiful frontage with reasonable effort.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Front Elevation by Plot and Facing
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li><strong>East-facing homes:</strong> We use pleasant morning light for an inviting entrance and attractive facade.</li>
              <li><strong>North-facing homes:</strong> We create bright and calm exteriors with balanced openings and welcoming entrance features.</li>
              <li><strong>West-facing homes:</strong> We use shading, careful window sizing and suitable materials to manage strong afternoon sun.</li>
              <li><strong>South-facing homes:</strong> With correct planning and entrance placement, these homes can be comfortable, elegant and Vastu-conscious.</li>
              <li><strong>Corner plots:</strong> We use both frontages for attractive corner treatment, wider windows and stronger visual impact.</li>
              <li><strong>Compact plots:</strong> Vertical lines, smart balconies and light colours help small houses appear taller and more spacious.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Current Front Elevation Trends
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Clean geometric forms using simple cubes, projections and straight lines.</li>
              <li>Mixed materials such as textured paint, stone, wood-finish panels and glass for depth without clutter.</li>
              <li>Statement entrances with larger doors, decorative frames and layered porch designs.</li>
              <li>Integrated planters in balconies and parapets for greenery and freshness.</li>
              <li>Concealed details such as hidden downpipes, tank enclosures and neat cable routing.</li>
              <li>Soft and warm facade lighting that highlights texture and creates a welcoming glow.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Our Design Process
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Consultation: We discuss your taste, budget, plot details and Vastu expectations online or on-site.</li>
              <li>Site and plan study: We review dimensions, orientation, road position, floor plans and surrounding buildings.</li>
              <li>Concept development: Initial elevation ideas are prepared with style, colour and material options.</li>
              <li>3D visualisation: You see the proposed facade and suggest changes before finalising.</li>
              <li>Vastu and functional review: The design is checked for entrance placement, ventilation, structure and practicality.</li>
              <li>Working drawings: Final drawings and details are prepared for your builder or contractor.</li>
              <li>Execution guidance: We provide stage-wise support and site inspection when needed so the built facade matches the design.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Common Front Elevation Mistakes to Avoid
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Designing the elevation after the structure is built, which limits choices and causes expensive changes.</li>
              <li>Following short-lived trends blindly instead of choosing timeless proportions and materials.</li>
              <li>Using too many materials or colours, which can make the house look cluttered.</li>
              <li>Ignoring weather and maintenance needs when selecting finishes.</li>
              <li>Placing windows without considering interior layout, privacy, furniture placement and airflow.</li>
              <li>Forgetting facade lighting, which makes even a good exterior lose its charm after sunset.</li>
              <li>Ignoring the gate and boundary wall, resulting in a mismatched overall frontage.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Budget Tips for Front Elevation Design
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Set your budget early so we can recommend suitable materials and design scope.</li>
              <li>Highlight one focal area such as the entrance, feature wall or balcony for a strong visual impact.</li>
              <li>Combine quality exterior paint with selective stone or cladding for a premium look at a manageable cost.</li>
              <li>Finalise the elevation before construction to avoid breaking finished work and wasting materials.</li>
              <li>Prioritise waterproofing and quality finishes because they can save repair costs later.</li>
              <li>Phase landscaping, decorative lighting and gate upgrades if you want to spread the cost.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Maintenance Tips to Keep Your Facade Beautiful
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Clean dust and stains from walls, glass and grills regularly to keep the exterior fresh.</li>
              <li>Inspect parapets, sunshades and joints before and after monsoon to catch small leaks early.</li>
              <li>Repaint on schedule to protect surfaces and avoid larger repair costs later.</li>
              <li>Use suitable coatings and periodic inspection to protect metal and wood from rust, peeling and weather damage.</li>
              <li>Plan termite and pest prevention for doors, frames and wooden elements. Our pest control service can support long-term protection.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Why Choose Space Build for Front Elevation Design
            </h2>

            <ul className="list-disc space-y-2 pl-6">
              <li>Architecture, interiors and Vastu under one roof for consistent advice and a well-coordinated design.</li>
              <li>Personalised elevations that match your plot, taste and lifestyle instead of repeated templates.</li>
              <li>Clear communication in simple language, so you can make decisions with confidence.</li>
              <li>Support from design to completion, including drawings, construction guidance and final inspection.</li>
              <li>Confidential and professional handling of all project information.</li>
              <li>Client-approved experience focused on smooth management, workmanship and attention to detail.</li>
              <li>Complete services including Vastu construction, interiors, renovation, project management, modular kitchens and pest control.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Serving Kashipur and Nearby Areas
            </h2>

            <p>
              We work with homeowners in and around Kashipur through online and
              on-site consultations. You can share plot photographs, floor plans
              and location details digitally, and we guide you without
              unnecessary delays.
            </p>

            <p>
              Site visits are arranged when required for inspection and
              stage-wise guidance. Whether your home is in a city colony, a
              developing area or a farmland location, we adapt the elevation to
              its surroundings.
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
              A well-designed front elevation gives your home a lasting identity.
              If you want a modern, durable and Vastu-aligned facade in
              Kashipur, Space Build is ready to help you plan and execute it
              with confidence.
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