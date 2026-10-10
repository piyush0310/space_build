
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <article className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Haldwani Residential Interior Design Services: Compare Packages Before You Buy
              </h1>

              <p className="text-lg leading-8">
                Most confusion in interior projects begins with one word:
                package. A &quot;complete package&quot; from one studio may
                leave out electrical work, while another includes it but
                excludes the kitchen. Two quotes with the same name can differ
                by lakhs. This guide lays out the common service packages in
                Haldwani side by side, shows what each includes and excludes,
                and explains how to choose the one that fits your home.
              </p>

              <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                <strong>Note:</strong> All figures are approximate and change
                with design, material and season. Confirm everything through
                written quotations.
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                1. Why Package Names Mislead
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Names such as &quot;premium&quot; or &quot;complete&quot; have no fixed meaning.</li>
                <li>Inclusions differ from studio to studio.</li>
                <li>Exclusions often appear in small print.</li>
                <li>Brand and grade of materials are rarely named.</li>
                <li>Supervision may be included in one package and charged extra in another.</li>
              </ul>
              <p className="font-semibold text-gray-900">
                Compare contents, never names.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                2. The Five Common Package Types
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Consultation package:</strong> Advice and guidance only.</li>
                <li><strong>Design-only package:</strong> Concepts, drawings and schedules.</li>
                <li><strong>Supervised package:</strong> Design plus site supervision, using your own vendors.</li>
                <li><strong>Turnkey package:</strong> Design, execution and handover together.</li>
                <li><strong>Phased package:</strong> Turnkey work split into stages over time.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Package One: Consultation
              </h2>
              <h3 className="text-lg font-semibold text-gray-900">Includes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>One or two meetings and site visits.</li>
                <li>Advice on layout, colours and lighting.</li>
                <li>Rough budget guidance.</li>
                <li>Notes or sketches in some cases.</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-900">Excludes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Detailed drawings.</li>
                <li>Material schedules.</li>
                <li>Execution and supervision.</li>
              </ul>
              <p><strong>Best for:</strong> Owners who will plan and execute most work themselves.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Package Two: Design-Only
              </h2>
              <h3 className="text-lg font-semibold text-gray-900">Includes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Site measurement.</li>
                <li>Concept and layout.</li>
                <li>3D views where offered.</li>
                <li>Technical drawings for carpentry, electrical and ceiling work.</li>
                <li>Material and finish schedule.</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-900">Excludes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Execution and vendor management.</li>
                <li>Daily supervision.</li>
                <li>Material purchase.</li>
              </ul>
              <p>
                <strong>Best for:</strong> Owners with a trusted contractor or
                carpenter who want a professional plan.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Package Three: Supervised Execution
              </h2>
              <h3 className="text-lg font-semibold text-gray-900">Includes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Everything in the design-only package.</li>
                <li>Vendor coordination.</li>
                <li>Scheduled site visits.</li>
                <li>Quality checks at key stages.</li>
                <li>Bill and measurement verification.</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-900">Excludes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Direct responsibility for vendor workmanship, unless stated in the agreement.</li>
                <li>Material costs, since you pay vendors separately.</li>
              </ul>
              <p>
                <strong>Best for:</strong> Owners who want control over vendors
                and prices but need expert oversight.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                6. Package Four: Turnkey
              </h2>
              <h3 className="text-lg font-semibold text-gray-900">Includes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Design, drawings and schedules.</li>
                <li>Civil, electrical, plumbing and carpentry work as listed.</li>
                <li>Painting, ceiling and flooring as listed.</li>
                <li>Supervision and quality control.</li>
                <li>Handover with defect fixing and warranty.</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-900">Often excludes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Appliances and loose furniture.</li>
                <li>Curtains and decor.</li>
                <li>Approvals and society fees.</li>
                <li>Major structural work.</li>
              </ul>
              <p>
                <strong>Best for:</strong> Busy owners and people living outside
                the city.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Package Five: Phased Turnkey
              </h2>
              <h3 className="text-lg font-semibold text-gray-900">Includes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Overall design for the whole home.</li>
                <li>Execution divided into phases, such as kitchen and bedrooms first.</li>
                <li>Separate quotes and schedules for each phase.</li>
                <li>Protection of finished areas during later phases.</li>
              </ul>
              <h3 className="text-lg font-semibold text-gray-900">Excludes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Price protection unless written into the agreement.</li>
                <li>Free redesign of later phases.</li>
              </ul>
              <p>
                <strong>Best for:</strong> Owners with limited funds who still
                want a unified result.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Package Comparison Matrix
              </h2>
              <p>
                Use this matrix when you read any quotation. Confirm each item
                with the studio because actual package terms can vary.
              </p>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-[760px] w-full border-collapse text-left text-sm">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="border-b p-3 font-semibold">Item</th>
                      <th className="border-b p-3 font-semibold">Consultation</th>
                      <th className="border-b p-3 font-semibold">Design-only</th>
                      <th className="border-b p-3 font-semibold">Supervised</th>
                      <th className="border-b p-3 font-semibold">Turnkey</th>
                      <th className="border-b p-3 font-semibold">Phased</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Layout advice", "Yes", "Yes", "Yes", "Yes", "Yes"],
                      ["Technical drawings", "No", "Yes", "Yes", "Yes", "Yes"],
                      ["Material schedule", "No", "Yes", "Yes", "Yes", "Yes"],
                      ["Vendor coordination", "No", "No", "Yes", "Yes", "Yes"],
                      ["Execution", "No", "No", "By your vendors", "Yes", "Yes, by phase"],
                      ["Site supervision", "No", "No", "Yes", "Yes", "Yes"],
                      ["Warranty from studio", "No", "No", "Limited", "Yes", "Yes"],
                      ["Owner effort", "High", "High", "Medium", "Low", "Low to medium"],
                    ].map((row) => (
                      <tr key={row[0]} className="odd:bg-white even:bg-gray-50">
                        {row.map((cell, index) => (
                          <td
                            key={`${row[0]}-${index}`}
                            className={`border-b border-gray-200 p-3 ${
                              index === 0 ? "font-medium text-gray-900" : ""
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                9. Approximate Cost Reference
              </h2>
              <p>
                Prices vary with carpentry volume, materials and design depth.
                These ranges are indicative and should be verified through
                written quotations.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Consultation: roughly ₹1,000 to ₹5,000 per visit.</li>
                <li>Design-only fee: roughly ₹50 to ₹250 per sq ft.</li>
                <li>Supervision fee: often 5% to 12% of vendor work.</li>
                <li>Basic turnkey: roughly ₹900 to ₹1,400 per sq ft.</li>
                <li>Mid-range turnkey: roughly ₹1,400 to ₹2,200 per sq ft.</li>
                <li>Premium turnkey: ₹2,500 per sq ft and above.</li>
              </ul>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="mb-2 font-semibold text-gray-900">
                  Worked cost example
                </h3>
                <p className="leading-7">
                  A 1,000 sq ft home at ₹1,600 per sq ft for turnkey work would
                  cost approximately <strong>₹16 lakh</strong>, excluding
                  appliances and loose furniture.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                10. How to Choose by Owner Type
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Handy owner with a good carpenter: design-only.</li>
                <li>Owner who wants vendor control: supervised package.</li>
                <li>Busy working family: turnkey.</li>
                <li>Owner abroad: turnkey with weekly reports.</li>
                <li>Tight yearly budget: phased turnkey.</li>
                <li>Owner unsure about direction: consultation first.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                11. What Packages Often Leave Out
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Civil changes such as wall breaking.</li>
                <li>Electrical rewiring beyond listed points.</li>
                <li>Plumbing relocation.</li>
                <li>Appliances and fixtures.</li>
                <li>Curtains, blinds and decor.</li>
                <li>Society fees and deposits.</li>
                <li>Structural engineer charges.</li>
                <li>Debris removal beyond basic cleaning.</li>
              </ul>
              <p className="font-semibold text-gray-900">
                Ask for a written exclusion list in every quote.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Add-On Services Worth Knowing
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Vastu consultation and layout review.</li>
                <li>Waterproofing and dampness treatment.</li>
                <li>Pest control before wood fitting.</li>
                <li>Solar and water heater planning.</li>
                <li>Smart switches and home automation.</li>
                <li>Landscape and terrace design.</li>
                <li>Extended warranty or annual maintenance.</li>
              </ul>
              <p>
                Price add-ons separately so that you can drop what you do not
                need.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Room-Wise Package Options
              </h2>
              <p>Some studios offer packages by room.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li><strong>Kitchen package:</strong> Layout, units, counters and lighting.</li>
                <li><strong>Bedroom package:</strong> Bed wall, wardrobe and lights.</li>
                <li><strong>Living room package:</strong> TV unit, ceiling and seating plan.</li>
                <li><strong>Kids room package:</strong> Study, storage and safe finishes.</li>
                <li><strong>Pooja unit package:</strong> Design and fitting.</li>
              </ul>
              <p>
                Room packages suit small budgets, but check that all rooms will
                still match.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Haldwani Notes for Packages
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Moisture-ready boards should be listed for kitchens and wardrobes.</li>
                <li>Ventilation details for closed storage should appear in drawings.</li>
                <li>Warm lighting plans suit cool, cloudy evenings.</li>
                <li>Delivery for narrow or hilly roads may need planning.</li>
                <li>Festival and wedding seasons need early booking.</li>
                <li>Local repair support should be named in warranty terms.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Questions to Ask Before Buying a Package
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>What exactly is included room by room?</li>
                <li>What is excluded or charged extra?</li>
                <li>Which board and hardware brands are included in the rate?</li>
                <li>Who supervises the work, and how often?</li>
                <li>What is the timeline in weeks?</li>
                <li>What warranty applies to which items?</li>
                <li>How are changes priced?</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Verification Checklist
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Registered business or firm details.</li>
                <li>GST registration where applicable.</li>
                <li>Verified studio address.</li>
                <li>Names and backgrounds of designers.</li>
                <li>Addresses of completed residential projects.</li>
                <li>Contact numbers of past clients.</li>
                <li>Sample agreement.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Agreement Essentials
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Package name and written inclusion list.</li>
                <li>Written exclusion list.</li>
                <li>Total value or rate per sq ft.</li>
                <li>Material brands and grades.</li>
                <li>Stage-wise payment milestones.</li>
                <li>Start and completion dates.</li>
                <li>Penalty for unjustified delay.</li>
                <li>Warranty period and coverage.</li>
                <li>Pricing method for changes.</li>
                <li>Dispute resolution method.</li>
              </ul>
              <p className="rounded-lg border-l-4 border-rose-700 bg-rose-50 p-4 leading-7 text-gray-800">
                <strong>Payment advice:</strong> Link instalments to completed
                stages and avoid heavy advances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Hidden Costs and Reserve
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Wall breaking and re-plastering.</li>
                <li>Extra electrical points.</li>
                <li>Plumbing changes.</li>
                <li>Appliances and loose furniture.</li>
                <li>Curtains, blinds and decor.</li>
                <li>Debris removal and deep cleaning.</li>
                <li>Society or approval charges.</li>
              </ul>
              <p className="font-semibold text-gray-900">
                Keep eight to ten percent as a safety reserve.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                19. Red Flags in Package Offers
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Package names with no written contents.</li>
                <li>Very low rates with no material brands named.</li>
                <li>Heavy advance demanded early.</li>
                <li>Reluctance to show completed residential projects.</li>
                <li>Pressure to sign immediately.</li>
                <li>Frequent changes of site staff.</li>
                <li>Vague answers on warranty and exclusions.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                20. Packages from Studios in Nearby Cities
              </h2>
              <p className="leading-7">
                Some studios serve several towns. Space Build, an interior
                design and Vastu studio based in Moradabad, is one example. Visit{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-rose-700 underline decoration-rose-300 underline-offset-4 hover:text-rose-900"
                >
                  Space Build&apos;s website
                </a>
                . If you consider an outside studio for Haldwani, ask how each
                package works remotely.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Is a site supervisor available near you?</li>
                <li>How often will the team visit?</li>
                <li>Who manages local vendors and deliveries?</li>
                <li>Are there travel or coordination charges?</li>
                <li>How are repairs handled after handover?</li>
                <li>Can they show similar completed residential work?</li>
              </ul>
              <p className="font-medium text-gray-900">
                Distance is acceptable when packages and reporting are clear.
              </p>
            </section>

            <section className="space-y-6 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. What residential interior packages are common in Haldwani?
                  </h3>
                  <p className="mt-2 leading-7">
                    Consultation, design-only, supervised, turnkey and phased
                    turnkey packages are common options to compare.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. What is the difference between design-only and turnkey?
                  </h3>
                  <p className="mt-2 leading-7">
                    Design-only provides plans and schedules, while turnkey
                    also delivers execution, supervision and handover as
                    specified in the agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. What is the interior cost per sq ft?
                  </h3>
                  <p className="mt-2 leading-7">
                    Basic turnkey is approximately ₹900 to ₹1,400 per sq ft,
                    mid-range is about ₹1,400 to ₹2,200, and premium starts
                    above ₹2,500 per sq ft. Actual prices vary by scope and
                    materials.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. What do packages usually exclude?
                  </h3>
                  <p className="mt-2 leading-7">
                    Appliances, loose furniture, decor, society fees, major
                    structural work and extra civil changes may be excluded.
                    Check the written exclusion list.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. Is a phased package a good idea?
                  </h3>
                  <p className="mt-2 leading-7">
                    Yes, it can suit tight budgets if the whole home is designed
                    first and each phase is priced and scheduled separately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    6. How do I compare two packages?
                  </h3>
                  <p className="mt-2 leading-7">
                    Compare inclusions, exclusions, material brands,
                    supervision, timeline and warranty side by side.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    7. How much advance should I pay?
                  </h3>
                  <p className="mt-2 leading-7">
                    Keep the advance limited and link further payments to
                    verified progress and completed work stages.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    8. How much reserve should I keep?
                  </h3>
                  <p className="mt-2 leading-7">
                    Keep around eight to ten percent as a reserve for civil
                    changes, electrical work, appliances and price changes.
                  </p>
                </div>
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
