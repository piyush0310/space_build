
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <article className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Haldwani Interior Designer Cost for Residential Homes: Unit
                Rates and a Worked Sample Quote
              </h1>

              <p>
                A single per sq ft figure hides what you are really buying. Two
                homes of the same size can differ by lakhs because one has
                three wardrobes and a full ceiling while the other has a plain
                kitchen and fresh paint. Studios also price items in different
                units, which makes quotes hard to compare. This guide gives an
                item-level rate sheet for residential work in Haldwani, a
                formula for your own estimate and a worked 2BHK quotation you
                can use as a template.
              </p>

              <p className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <strong>Note:</strong> All rates are approximate, indicative
                and change with brand, design and season. Replace them with
                figures from written quotations.
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                1. Why Item-Level Rates Matter
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Quotes become comparable line by line.</li>
                <li>You see which items drive the total.</li>
                <li>Cuts and upgrades can be priced instantly.</li>
                <li>Hidden margins are easier to spot.</li>
                <li>Phasing becomes simple, since each item has its own cost.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                2. Common Billing Units
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Per sq ft of front area:</strong> Wardrobes, TV units
                  and kitchen cabinets.
                </li>
                <li>
                  <strong>Per running foot:</strong> Kitchen counters and some
                  storage runs.
                </li>
                <li>
                  <strong>Per sq ft of surface:</strong> Ceilings, paint,
                  panelling and flooring.
                </li>
                <li>
                  <strong>Per point:</strong> Electrical and plumbing points.
                </li>
                <li>
                  <strong>Per piece or lump sum:</strong> Lights, mirrors and
                  special items.
                </li>
              </ul>
              <p>
                Always write the unit beside the rate before comparing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Overall Rate Bands
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Basic interiors: roughly ₹900 to ₹1,400 per sq ft.</li>
                <li>
                  Mid-range interiors: roughly ₹1,400 to ₹2,200 per sq ft.
                </li>
                <li>Premium interiors: ₹2,500 per sq ft and above.</li>
              </ul>
              <p>
                Treat these as a cross-check for your itemised total, not as
                the quote itself.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Unit Rate Sheet: Carpentry
              </h2>
              <p>
                Indicative rates for materials plus installation, based on
                front area.
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[550px] border-collapse text-left text-sm">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="border-b p-3">Item</th>
                      <th className="border-b p-3">Billing Unit</th>
                      <th className="border-b p-3">Indicative Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Wardrobe, basic laminate", "Per sq ft", "₹1,200–₹1,800"],
                      ["Wardrobe, mid-range with better hardware", "Per sq ft", "₹1,800–₹2,800"],
                      ["Wardrobe, premium finish", "Per sq ft", "₹3,000 and above"],
                      ["TV unit with storage", "Per sq ft of front area", "₹1,500–₹3,000"],
                      ["Modular kitchen cabinets", "Per sq ft of front area", "₹1,200–₹3,000"],
                      ["Pooja unit", "Per piece", "₹30,000–₹1.5 lakh"],
                    ].map((row) => (
                      <tr key={row[0]} className="odd:bg-white even:bg-gray-50">
                        {row.map((cell, index) => (
                          <td
                            key={index}
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

              <p>
                Modular kitchen rates depend on finish and hardware. Counters
                and appliances are separate, so confirm their costs before
                comparing quotations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Unit Rate Sheet: Ceiling, Paint and Walls
              </h2>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[550px] border-collapse text-left text-sm">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="border-b p-3">Item</th>
                      <th className="border-b p-3">Billing Unit</th>
                      <th className="border-b p-3">Indicative Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Plain gypsum ceiling", "Per sq ft", "₹80–₹150"],
                      ["Cove or layered ceiling", "Per sq ft", "₹120–₹250"],
                      ["Interior paint with putty and primer", "Per sq ft of wall area", "₹25–₹60"],
                      ["Textured paint or limewash", "Per sq ft", "₹40–₹120"],
                      ["Wall panels or fluted cladding", "Per sq ft", "₹250–₹600"],
                      ["Wallpaper", "Per sq ft", "₹60–₹200"],
                    ].map((row) => (
                      <tr key={row[0]} className="odd:bg-white even:bg-gray-50">
                        {row.map((cell, index) => (
                          <td
                            key={index}
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

              <p>
                Paint rates depend on surface preparation, putty, primer and
                the number of coats. Wallpaper and wall panel costs also vary
                with material quality and design.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                6. Unit Rate Sheet: Electrical, Plumbing and Floor
              </h2>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[550px] border-collapse text-left text-sm">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="border-b p-3">Item</th>
                      <th className="border-b p-3">Billing Unit</th>
                      <th className="border-b p-3">Indicative Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Electrical point with wiring", "Per point", "₹800–₹1,800"],
                      ["Distribution board upgrade", "Per job", "₹8,000–₹25,000"],
                      ["Plumbing point shifting", "Per point", "₹1,500–₹5,000"],
                      ["Tile laying labour", "Per sq ft", "₹40–₹90"],
                      ["Bathroom remodel", "Per bathroom", "₹0.8–₹3 lakh"],
                      ["Lights and fans", "Per item", "Depends on model"],
                    ].map((row) => (
                      <tr key={row[0]} className="odd:bg-white even:bg-gray-50">
                        {row.map((cell, index) => (
                          <td
                            key={index}
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

              <p>
                Tile laying labour excludes the tile cost. Lights and fans are
                priced by model, from simple to designer ranges. Confirm
                material grades and installation charges in writing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Cost Formula for Your Own Estimate
              </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  Measure the front area of wardrobes, TV units and kitchen
                  cabinets.
                </li>
                <li>Measure ceiling and paintable wall area.</li>
                <li>Count electrical and plumbing points.</li>
                <li>Multiply each quantity by an indicative rate.</li>
                <li>Add design and supervision fees.</li>
                <li>Add eight to ten percent for reserve.</li>
                <li>
                  Compare the total with the overall rate band for a sanity
                  check.
                </li>
              </ol>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">
                  Simple Cost Formula
                </h3>
                <p className="mt-2">
                  <strong>Item cost = Quantity × Unit rate</strong>
                </p>
                <p className="mt-2">
                  <strong>
                    Planning total = Item costs + Design and supervision fees
                    + Reserve
                  </strong>
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Worked Sample: Mid-Range 2BHK, About 1,000 Sq Ft
              </h2>
              <p>
                The following sample illustrates how individual items can be
                listed in a residential interior quotation.
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="border-b p-3">Item</th>
                      <th className="border-b p-3">Quantity and Basis</th>
                      <th className="border-b p-3">Approx. Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Modular kitchen", "About 90 sq ft front area at ₹2,000", "₹1.80 lakh"],
                      ["Wardrobes (3)", "About 90 sq ft front area at ₹2,000", "₹1.80 lakh"],
                      ["TV unit and wall panel", "One lump set", "₹0.90 lakh"],
                      ["False ceiling", "About 700 sq ft at ₹130", "₹0.91 lakh"],
                      ["Electrical points and lighting", "Lump sum", "₹1.20 lakh"],
                      ["Paint", "About 3,000 sq ft at ₹40", "₹1.20 lakh"],
                      ["Pooja unit", "One piece", "₹0.50 lakh"],
                      ["Study unit", "One piece", "₹0.60 lakh"],
                      ["Minor bathroom upgrades", "Two bathrooms", "₹0.80 lakh"],
                      ["Flooring touch-ups", "Lump sum", "₹0.60 lakh"],
                      ["Curtains and soft furnishing", "Lump sum", "₹0.80 lakh"],
                    ].map((row) => (
                      <tr key={row[0]} className="odd:bg-white even:bg-gray-50">
                        {row.map((cell, index) => (
                          <td
                            key={index}
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

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  Sample Quotation Summary
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between gap-4">
                    <span>Subtotal</span>
                    <strong>₹11.11 lakh</strong>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Design and supervision (about 12%)</span>
                    <strong>₹1.40 lakh</strong>
                  </div>
                  <div className="flex justify-between gap-4 border-t pt-3">
                    <span>Total before reserve</span>
                    <strong>₹12.51 lakh</strong>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Reserve at 10%</span>
                    <strong>₹1.25 lakh</strong>
                  </div>
                  <div className="flex justify-between gap-4 border-t border-gray-300 pt-3 text-gray-900">
                    <span className="font-bold">Planning total</span>
                    <strong className="text-xl">About ₹13.8 lakh</strong>
                  </div>
                </div>
              </div>

              <p>
                The article estimates this at around ₹1,250 to ₹1,380 per sq
                ft, placing it in the lower mid-range band. These figures are
                indicative; confirm all quantities, calculations and current
                rates before relying on the estimate.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                9. How the Sample Changes with Choices
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Upgrading wardrobes to premium finish could add roughly ₹0.7
                  to ₹1.2 lakh.
                </li>
                <li>
                  Dropping the full ceiling for light strips could save roughly
                  ₹0.4 to ₹0.6 lakh.
                </li>
                <li>
                  Adding a full bathroom remodel could add roughly ₹1 to ₹3
                  lakh.
                </li>
                <li>
                  Using basic laminate in all units could save roughly ₹0.5
                  to ₹1 lakh.
                </li>
                <li>
                  Adding fluted panels in two rooms could add roughly ₹0.4 to
                  ₹1 lakh.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Where Quotes Usually Differ
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Board grade and hardware brands.</li>
                <li>Whether civil and electrical work are included.</li>
                <li>Number of points and lights counted.</li>
                <li>Paint coats and surface preparation.</li>
                <li>Whether appliances, curtains and decor are included.</li>
                <li>Supervision frequency and fee model.</li>
                <li>Warranty length and coverage.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                11. Rebuild Each Quote on a Common Sheet
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>List each studio in columns.</li>
                <li>List items from the sample table in rows.</li>
                <li>Write the unit and quantity for each studio.</li>
                <li>Mark brands and grades.</li>
                <li>Mark exclusions.</li>
                <li>Add missing items to the cheapest quote.</li>
                <li>Compare totals again.</li>
              </ul>
              <p>
                A quote that looks cheapest often becomes middle after
                additions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Residential Rate Notes for Haldwani
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Moisture-ready boards can raise carpentry cost, but they suit
                  local humidity.
                </li>
                <li>
                  Some premium finishes travel from larger cities, which can
                  add freight.
                </li>
                <li>Festival and wedding seasons may raise labour rates.</li>
                <li>Narrow or hilly roads can add delivery charges.</li>
                <li>
                  Warm lighting upgrades are often high value for the price.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Fees Linked to Residential Projects
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Design-only fee: roughly ₹50 to ₹250 per sq ft.</li>
                <li>
                  Supervision fee: often about 5% to 12% of vendor work.
                </li>
                <li>Consultation visit: roughly ₹1,000 to ₹5,000.</li>
                <li>Society or landlord charges: as set by property rules.</li>
              </ul>
              <p>
                Ask where the design fee sits inside a turnkey rate.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Payment Schedule Suggestion
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Small booking amount at signing.</li>
                <li>Instalment after design and drawing approval.</li>
                <li>Instalment on material order.</li>
                <li>Instalment after carpentry installation.</li>
                <li>Instalment after painting and finishing.</li>
                <li>Final payment after inspection and defect fixing.</li>
              </ul>
              <p className="rounded-lg border-l-4 border-rose-700 bg-rose-50 p-4">
                <strong>Payment advice:</strong> Take written receipts every
                time, link instalments to completed stages and avoid large
                advances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Hidden Costs and Reserve
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Wall breaking and re-plastering.</li>
                <li>Extra electrical points.</li>
                <li>Plumbing changes.</li>
                <li>Appliances and loose furniture.</li>
                <li>Debris removal and deep cleaning.</li>
                <li>Society or approval charges.</li>
                <li>Temporary storage during work.</li>
              </ul>
              <p>Keep eight to ten percent as a safety reserve.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Red Flags in Itemised Quotes
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Single lump sums for large items.</li>
                <li>No brands or grades named.</li>
                <li>Quantities missing beside rates.</li>
                <li>Very low rates that ignore exclusions.</li>
                <li>Heavy advance demanded early.</li>
                <li>Frequent changes to numbers after discussions.</li>
                <li>Pressure to sign quickly.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Verification Checklist
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Registered business or firm details.</li>
                <li>GST registration where applicable.</li>
                <li>Verified studio address.</li>
                <li>Names and background of designers.</li>
                <li>Addresses of completed residential projects.</li>
                <li>Contact numbers of past clients.</li>
                <li>Sample agreement.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Agreement Essentials
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Room-wise scope of work.</li>
                <li>Itemised rates and quantities.</li>
                <li>Material brands and grades.</li>
                <li>Stage-wise payment milestones.</li>
                <li>Start and completion dates.</li>
                <li>Penalty for unjustified delay.</li>
                <li>Warranty period and coverage.</li>
                <li>Pricing method for changes.</li>
                <li>Dispute resolution method.</li>
              </ul>
              <p>
                Link instalments to completed stages and avoid heavy advances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                19. Using the Rate Sheet Wisely
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Treat figures as ranges, not quotes.</li>
                <li>Ask each studio to show its own unit rates.</li>
                <li>Check quantities against your drawings.</li>
                <li>Question any rate far outside the range.</li>
                <li>Update the sheet after each meeting.</li>
                <li>Keep a copy with your payment record.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                20. Studios in Nearby Cities
              </h2>
              <p>
                Some studios serve several towns, and unit rates may differ.
                Space Build, an interior design and Vastu studio based in
                Moradabad, is one example. Visit{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-rose-700 underline underline-offset-4 hover:text-rose-900"
                >
                  https://www.spacebuild.co.in/
                </a>
                . If you consider an outside studio for Haldwani, ask these
                cost questions.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Are travel or coordination charges added to the rates?</li>
                <li>Who supervises local execution?</li>
                <li>Where are materials sourced and delivered from?</li>
                <li>How are repairs handled after handover?</li>
                <li>
                  Can they provide a sample itemised quote like the one above?
                </li>
              </ul>
              <p>
                Distance is acceptable when rates, reporting and support are
                clear.
              </p>
            </section>

            <section className="space-y-5 border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. What is the residential interior cost per sq ft in
                    Haldwani?
                  </h3>
                  <p className="mt-2">
                    Basic work starts near ₹900 per sq ft, mid-range runs about
                    ₹1,400 to ₹2,200 and premium goes above ₹2,500.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. How is a wardrobe priced?
                  </h3>
                  <p className="mt-2">
                    Usually per sq ft of front area, from about ₹1,200 for
                    basic laminate to ₹3,000 and above for premium finishes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. How much does a false ceiling cost?
                  </h3>
                  <p className="mt-2">
                    Plain gypsum is roughly ₹80 to ₹150 per sq ft, and cove or
                    layered designs run about ₹120 to ₹250.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. What did the sample 2BHK cost?
                  </h3>
                  <p className="mt-2">
                    About ₹12.5 lakh before reserve and near ₹13.8 lakh with a
                    ten percent reserve.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. Why do itemised quotes differ?
                  </h3>
                  <p className="mt-2">
                    Board grades, hardware brands, exclusions, quantities and
                    supervision levels change the totals.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    6. Can I build my own estimate?
                  </h3>
                  <p className="mt-2">
                    Yes. Measure areas and points, multiply by indicative
                    rates, add fees and a reserve, then compare with quotes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    7. How much advance should I pay?
                  </h3>
                  <p className="mt-2">
                    Keep it small and pay by stages after verified progress.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    8. How much reserve should I keep?
                  </h3>
                  <p className="mt-2">
                    Eight to ten percent for civil changes, electrical work,
                    appliances and price changes.
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
