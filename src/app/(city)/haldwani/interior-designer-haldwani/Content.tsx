
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  const faqs = [
    {
      question: "How much does an interior designer charge in Haldwani?",
      answer:
        "Fees vary by scope. Some studios charge a percentage of project cost, others a per-square-foot rate that includes design and execution.",
    },
    {
      question: "How long does a full home project take?",
      answer:
        "A typical 2 or 3 BHK home takes about two to four months from approval to handover.",
    },
    {
      question: "Can I get Vastu guidance along with the design?",
      answer:
        "Yes. Space Build combines MahaVastu advice with layout planning so both work together.",
    },
    {
      question: "Is a modular kitchen worth it for a small home?",
      answer:
        "Yes. Smart cabinets and corner fittings make small kitchens easier to use and clean.",
    },
    {
      question: "Do you offer online consultation?",
      answer:
        "Yes. You can share plans and photos, and discuss ideas over a call.",
    },
    {
      question: "Can I renovate only one or two rooms?",
      answer:
        "Absolutely. Many clients start with a kitchen or bedroom and extend later.",
    },
    {
      question: "Which materials suit humid weather best?",
      answer:
        "BWP plywood, anti-skid tiles and moisture-resistant finishes perform well in damp conditions.",
    },
    {
      question: "How do I start my project?",
      answer:
        "Call or WhatsApp the team, share your requirements and book a consultation.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <article className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Interior Designer in Haldwani: A Practical Guide to Smart,
                Vastu-Friendly Spaces
              </h1>

              <p>
                Haldwani is growing fast. New apartments, independent houses
                and shops are coming up along Rampur Road, Nainital Road,
                Kaladhungi Road and Bareilly Road. A well-planned space here
                has to handle a mixed climate, family-oriented layouts and a
                steady budget. This guide explains how professional design
                works, what to expect and how to pick the right partner for
                your project.
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                1. Why Haldwani Homes Need Locally Aware Design
              </h2>
              <p>
                <strong>Theory:</strong> Every city has its own lifestyle,
                weather and building habits. A layout copied from a metro
                apartment rarely suits a Kumaon-gateway town.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Joint and extended families need flexible living and dining
                  zones.
                </li>
                <li>Guests visit often, so the drawing room deserves extra attention.</li>
                <li>
                  Festival seasons call for open floor space and good storage
                  for decor.
                </li>
                <li>Humid monsoons and cool winters affect material choices.</li>
                <li>Many plots are narrow, so every foot of space must work.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                2. What a Design Professional Actually Does
              </h2>
              <p>
                <strong>Theory:</strong> A designer is not just a decorator.
                The role covers planning, coordination and quality control
                from the first sketch to handover.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Measures the site and studies how your family lives day to day.</li>
                <li>Prepares a layout that improves movement and natural light.</li>
                <li>Creates 2D plans and 3D views before any work begins.</li>
                <li>Selects materials, colours, lighting and hardware.</li>
                <li>Coordinates carpenters, electricians, painters and plumbers.</li>
                <li>Checks finishing quality at every stage.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Services You Can Expect
              </h2>
              <p>
                <strong>Theory:</strong> A full-service studio saves you from
                chasing five different vendors.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Complete home interiors for flats, villas and builder floors.</li>
                <li>Modular kitchen and wardrobe design.</li>
                <li>False ceiling and lighting plans.</li>
                <li>TV units, study tables, pooja units and storage solutions.</li>
                <li>Office, clinic, showroom and café fit-outs.</li>
                <li>Renovation of old homes with Vastu-guided corrections.</li>
                <li>Project management and site supervision.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Styles That Work Well Here
              </h2>
              <p>
                <strong>Theory:</strong> The best style is the one your family
                can live with for ten years, not the one trending this month.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Modern minimal:</strong> clean lines, handleless
                  shutters, neutral palettes.
                </li>
                <li>
                  <strong>Contemporary warm:</strong> wood textures with soft
                  lighting and fabric accents.
                </li>
                <li>
                  <strong>Traditional with a twist:</strong> carved panels,
                  brass details and rich colours for family homes.
                </li>
                <li>
                  <strong>Scandinavian light:</strong> pale woods and white
                  walls for compact apartments.
                </li>
                <li>
                  <strong>Luxury classic:</strong> moulding, wall panelling
                  and statement chandeliers for large villas.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Climate-Smart Material Selection
              </h2>
              <p>
                <strong>Theory:</strong> Materials that look good in a
                showroom may not last in humid or dusty conditions. Choose
                for durability first, appearance second.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Use BWP or marine-grade plywood in kitchens, bathrooms and
                  wardrobes near damp walls.
                </li>
                <li>Prefer laminates, acrylic or PU finishes that resist moisture.</li>
                <li>Select vitrified or anti-skid tiles for wet zones.</li>
                <li>
                  Choose breathable, washable paints for walls exposed to
                  seasonal damp.
                </li>
                <li>
                  Add proper ventilation and exhaust points to prevent odour
                  and mould.
                </li>
                <li>
                  Pick hardware from trusted brands so hinges and channels
                  stay smooth for years.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                6. Modular Kitchen Planning
              </h2>
              <p>
                <strong>Theory:</strong> The kitchen is the busiest room in
                an Indian home. Good planning reduces walking, clutter and
                cooking fatigue.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Follow the work triangle between hob, sink and refrigerator.</li>
                <li>
                  Provide deep drawers for utensils and tall units for grains
                  and bulk items.
                </li>
                <li>Add a chimney with the right suction for heavy Indian cooking.</li>
                <li>Use easy-clean backsplashes behind the hob and sink.</li>
                <li>
                  Keep a separate zone for the mixer, microwave and small
                  appliances.
                </li>
                <li>
                  Install soft-close fittings and corner carousels to use
                  dead space.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Living, Dining and Bedroom Layouts
              </h2>
              <p>
                <strong>Theory:</strong> Comfort comes from proportion and
                flow rather than expensive decoration.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Keep at least a three-foot walking path in every room.</li>
                <li>Place the TV unit so daylight does not cause glare.</li>
                <li>
                  Combine seating, console and storage in the drawing room
                  for a neat look.
                </li>
                <li>Use sliding wardrobes in small bedrooms to save swing space.</li>
                <li>Add a study corner or work-from-home nook where possible.</li>
                <li>
                  Keep children's rooms flexible with bed storage and open
                  play space.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Lighting and False Ceilings
              </h2>
              <p>
                <strong>Theory:</strong> Lighting shapes mood more than
                furniture does. Layered light makes rooms feel larger and
                calmer.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Combine ambient, task and accent lights in each room.</li>
                <li>
                  Use warm white for bedrooms and neutral white for kitchens
                  and study areas.
                </li>
                <li>Install cove lighting for a soft glow in living rooms.</li>
                <li>
                  Choose a false ceiling only where it adds value, such as
                  hiding wiring or ducts.
                </li>
                <li>Add dimmers in lounges and master bedrooms.</li>
                <li>Plan switches and sockets before furniture is finalised.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                9. Blending Vastu with Modern Design
              </h2>
              <p>
                <strong>Theory:</strong> Vastu Shastra studies how directions,
                light and airflow affect daily comfort. A skilled designer
                applies it through layout and colour, not by breaking walls
                unnecessarily.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Place the kitchen in the south-east where the plan allows.</li>
                <li>Keep the north-east zone light, clean and clutter-free.</li>
                <li>Position the master bedroom in the south-west for stability.</li>
                <li>Avoid heavy storage in the north-east corner.</li>
                <li>Choose colours that match the energy of each direction.</li>
                <li>
                  Use simple remedies such as mirrors, plants and lighting
                  before any structural change.
                </li>
              </ul>
              <p>
                Space Build is led by a MahaVastu expert, which helps clients
                balance beauty with directional planning in one project.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Budget and Cost Factors
              </h2>
              <p>
                <strong>Theory:</strong> Cost depends on scope, material grade
                and finish level. A clear estimate prevents mid-project
                shocks.
              </p>
              <p>
                Approximate ranges for full-home work in smaller Indian
                cities are often between ₹1,200 and ₹2,500 per square foot,
                depending on specifications. Premium finishes cost more.
                The main cost drivers are:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Total carpet area and number of rooms.</li>
                <li>Brand and grade of plywood, hardware and laminates.</li>
                <li>Amount of custom carpentry versus ready furniture.</li>
                <li>Electrical, plumbing and civil changes needed.</li>
                <li>Lighting fixtures, wallpapers and decor items.</li>
                <li>Quality of site supervision and labour.</li>
              </ul>
              <p>
                Ask for a room-wise quotation with a material list. It makes
                comparison easy and keeps billing transparent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                11. A Step-by-Step Project Process
              </h2>
              <p>
                <strong>Theory:</strong> A defined process keeps deadlines
                and expectations realistic.
              </p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  <strong>Consultation:</strong> discuss needs, taste, budget
                  and timeline.
                </li>
                <li>
                  <strong>Site visit:</strong> take measurements and note
                  structural limits.
                </li>
                <li>
                  <strong>Concept:</strong> receive moodboards, layouts and
                  3D visuals.
                </li>
                <li>
                  <strong>Estimate:</strong> approve costs and payment stages.
                </li>
                <li>
                  <strong>Execution:</strong> carpentry, electrical, ceiling,
                  paint and fixtures begin.
                </li>
                <li>
                  <strong>Quality check:</strong> inspect finishing, alignment
                  and safety.
                </li>
                <li>
                  <strong>Handover:</strong> receive a cleaned, ready-to-use
                  home with warranty details.
                </li>
              </ol>
              <p>
                Most 2 BHK and 3 BHK projects take roughly two to four months,
                depending on size and approvals.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                12. How to Choose the Right Partner
              </h2>
              <p>
                <strong>Theory:</strong> Anyone can show attractive photos.
                Look for proof of process, communication and after-work
                support.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Ask to see completed projects and speak to past clients.</li>
                <li>
                  Check whether the team includes trained designers and
                  execution managers.
                </li>
                <li>Confirm that the quotation lists materials and brands.</li>
                <li>
                  Understand the payment schedule and what each stage covers.
                </li>
                <li>Clarify how changes during work will be priced.</li>
                <li>Confirm the warranty on carpentry and hardware.</li>
                <li>
                  Make sure the studio can handle site visits or remote
                  coordination for your area.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Why Families Consider Space Build
              </h2>
              <p>
                <strong>Theory:</strong> Choosing a partner is about trust,
                clarity and consistent delivery.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Design, Vastu guidance and construction support under one roof.</li>
                <li>
                  Experienced designers working alongside an operations lead
                  for site discipline.
                </li>
                <li>
                  Services spanning interiors, modular kitchens, renovation
                  and project management consultation.
                </li>
                <li>
                  Client reviews that highlight smooth communication and
                  neat finishing.
                </li>
                <li>
                  Free-flowing consultations, including online sessions for
                  clients who cannot meet in person.
                </li>
                <li>Personalised planning instead of repeated templates.</li>
              </ul>
              <p>
                Share your plan, photos and budget through the contact page,
                or call the team to discuss a Haldwani project.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Common Mistakes to Avoid
              </h2>
              <p>
                <strong>Theory:</strong> Most regrets come from rushed
                decisions, not poor taste.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Buying furniture before finalising the layout.</li>
                <li>Ignoring storage until the final stage.</li>
                <li>Choosing trendy colours that tire the eye quickly.</li>
                <li>
                  Saving money on hardware and regretting it within two years.
                </li>
                <li>Skipping a written agreement and scope list.</li>
                <li>Underestimating electrical points and lighting needs.</li>
                <li>
                  Changing designs midway without checking the cost impact.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Maintenance Tips After Handover
              </h2>
              <p>
                <strong>Theory:</strong> Good care extends the life of any
                finish.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Wipe laminates with a soft damp cloth, never harsh chemicals.
                </li>
                <li>Keep kitchen shutters dry near the sink area.</li>
                <li>
                  Service channels and hinges once a year with a light
                  lubricant.
                </li>
                <li>Ventilate rooms daily during monsoon.</li>
                <li>Clean chimney filters every few weeks.</li>
                <li>Repaint high-traffic walls every three to four years.</li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-gray-200 p-4"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {index + 1}. {faq.question}
                    </h3>
                    <p className="mt-2 leading-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>

        <aside className="ml-auto w-full p-4 lg:w-[42%] lg:pl-10">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Content;
