import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <div className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <h1 className="text-3xl font-bold text-gray-900">
              Civil Contractor Price List in Kashipur: A Price List Is Only as
              Good as Its Format
            </h1>

            <p>
              Many owners type &quot;civil contractor Kashipur price list&quot;
              hoping to find one fixed table of rates. No such table exists.
              Prices move with steel, cement, labour and season, and every
              contractor includes different work in each rate. A copied number
              from a website or a friend can be stale or misleading.
            </p>

            <p>
              Think of a railway timetable. The columns, stations and times
              follow one format, so you can compare trains. A price list works
              the same way. When contractors present rates in an identical
              format, comparison becomes easy. This guide shows how to demand
              that format, fill it, read it and keep it current. It deliberately
              gives no rupee figures, because unverified numbers mislead. Each
              section opens with a short idea, followed by points you can use.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                1. Why Public Price Lists Mislead
              </h2>

              <p>
                A rate seen online or heard from a neighbour hides the details
                that decide its meaning.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>It may be months or years old</li>
                <li>It may cover labour only, or labour plus material</li>
                <li>
                  It may assume easy soil, wide road access and no rain delay
                </li>
                <li>It may exclude finishing, approvals or testing</li>
                <li>It may describe a different grade of material</li>
              </ul>

              <p>
                Treat any outside number as a conversation starter, never as a
                budget.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                2. What a Proper Price List Contains
              </h2>

              <p>
                A usable list is more than a column of numbers. Each line must
                answer six questions.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>What exact work is being priced</li>
                <li>In which unit it is measured</li>
                <li>What the rate includes</li>
                <li>What it excludes</li>
                <li>Which material brand and grade it assumes</li>
                <li>Until what date the rate stays valid</li>
              </ul>

              <p>
                A line missing any of these answers cannot be compared fairly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Units of Measurement Explained
              </h2>

              <p>
                Civil work uses different units for different items. Confusing
                them is a common source of budget shock.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Cubic metre or cubic foot:</strong> excavation,
                  concrete and masonry
                </li>
                <li>
                  <strong>Square metre or square foot:</strong> plaster,
                  flooring, waterproofing and painting
                </li>
                <li>
                  <strong>Running metre or running foot:</strong> drains, edges
                  and pipelines
                </li>
                <li>
                  <strong>Kilogram or tonne:</strong> reinforcement steel
                </li>
                <li>
                  <strong>Number or lump sum:</strong> doors, tanks, pillars and
                  gates
                </li>
              </ul>

              <p>
                Ask for the unit beside every rate, and confirm how quantities
                will be measured.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Rate Types You Will Meet
              </h2>

              <p>
                Contractors present prices in several styles. Know the style
                before comparing.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Labour-only rate:</strong> workers&apos; charge, with
                  materials bought by you
                </li>
                <li>
                  <strong>Material-plus-labour rate:</strong> a combined figure
                  for the item
                </li>
                <li>
                  <strong>Per square foot of built-up area:</strong> a quick
                  overall figure for whole buildings
                </li>
                <li>
                  <strong>Lump sum:</strong> one price for a defined package
                </li>
                <li>
                  <strong>Daily wage rate:</strong> payment for workers by the
                  day
                </li>
              </ul>

              <p>
                Never compare a labour-only line with a material-plus-labour
                line.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                5. A Blank Rate Card You Can Request
              </h2>

              <p>
                Ask each contractor to fill this table for your project. The
                blanks are intentional, because only a current quotation gives
                honest numbers.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-gray-900">
                      <th className="border border-gray-300 p-3">Item</th>
                      <th className="border border-gray-300 p-3">Unit</th>
                      <th className="border border-gray-300 p-3">Rate</th>
                      <th className="border border-gray-300 p-3">Includes</th>
                      <th className="border border-gray-300 p-3">Excludes</th>
                      <th className="border border-gray-300 p-3">
                        Brand and grade
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Excavation", "Cubic unit"],
                      ["Concrete work", "Cubic unit"],
                      ["Reinforcement steel", "Weight"],
                      ["Brick or block masonry", "Cubic unit"],
                      ["Plaster", "Area"],
                      ["Roof waterproofing", "Area"],
                      ["Drain construction", "Length"],
                      ["Boundary wall", "Length"],
                    ].map(([item, unit]) => (
                      <tr key={item}>
                        <td className="border border-gray-300 p-3 font-medium">
                          {item}
                        </td>
                        <td className="border border-gray-300 p-3">{unit}</td>
                        <td className="border border-gray-300 p-3">_____</td>
                        <td className="border border-gray-300 p-3">_____</td>
                        <td className="border border-gray-300 p-3">_____</td>
                        <td className="border border-gray-300 p-3">_____</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Add rows for your own items, then send the identical card to
                every contractor.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                6. Earthwork Lines: What to Check
              </h2>

              <p>
                Digging looks simple but varies with site conditions. A single
                rate can hide large differences.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Whether the rate covers digging only or also disposal of soil
                </li>
                <li>Whether back-filling and compaction are included</li>
                <li>Treatment of wet soil and pumping</li>
                <li>Depth limits assumed in the rate</li>
                <li>Access conditions assumed for machines</li>
                <li>Extra rate if hard ground is found</li>
              </ul>

              <p>Ask for a stated rate for unexpected ground conditions.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Concrete Lines: What to Check
              </h2>

              <p>
                Concrete is a major cost and a major risk. Its price depends on
                several details.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Grade of concrete in writing</li>
                <li>Site mixing or ready-mix supply</li>
                <li>
                  Whether shuttering, vibration and curing are included
                </li>
                <li>Whether pumping to upper floors is included</li>
                <li>Cube testing, where the engineer recommends it</li>
                <li>Treatment of wastage</li>
              </ul>

              <p>
                A lower grade quietly lowers both the price and the strength,
                so insist on the grade being named.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Steel Lines: What to Check
              </h2>

              <p>
                Steel is billed by weight, and its market rate moves often.
                Fabrication adds labour on top.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Grade and brand of bars</li>
                <li>
                  Whether binding wire, spacers and cutting waste are included
                </li>
                <li>Bending and fixing charges</li>
                <li>Weight statements from structural drawings</li>
                <li>Delivery bills proving what was purchased</li>
                <li>Handling of surplus and offcuts</li>
              </ul>

              <p>
                Keep supplier bills, so you can compare billed weight with
                delivered weight.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                9. Masonry, Plaster and Waterproofing Lines
              </h2>

              <p>
                These items shape and protect walls, and differences in method
                create visible price gaps.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Type of brick or block used</li>
                <li>Mortar mix and joint thickness</li>
                <li>Plaster thickness and number of coats</li>
                <li>Surface preparation and curing</li>
                <li>Waterproofing chemical type and number of layers</li>
                <li>Warranty attached to the waterproofing line</li>
              </ul>

              <p>
                Cheap waterproofing is rarely a bargain, since repair work
                disrupts finished interiors.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Drains, Tanks and External Works Lines
              </h2>

              <p>
                External items are often forgotten in the first budget, then
                rushed at the end.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Drain length, depth and lining type</li>
                <li>Tank capacity and construction method</li>
                <li>
                  Boundary wall height, thickness and foundation depth
                </li>
                <li>Paving area and base preparation</li>
                <li>Gate pillars and retaining structures</li>
                <li>Septic tank or sewer connection charges</li>
              </ul>

              <p>
                List these early so they do not appear as late surprises.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                11. Inclusions and Exclusions Column
              </h2>

              <p>
                This column matters more than the rate itself. A cheap rate
                with long exclusions is usually expensive.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Mark every item as included or excluded</li>
                <li>Watch for site utilities, debris removal and cleaning</li>
                <li>Check scaffolding, shuttering and curing charges</li>
                <li>Confirm whether taxes and fees are inside the rate</li>
                <li>Ask who pays for design, approvals and testing</li>
                <li>
                  Request written clarification of vague words such as
                  &quot;standard&quot; or &quot;usual&quot;
                </li>
              </ul>

              <p>
                Anything unclear should be written down and confirmed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Validity Date and Price Movement
              </h2>

              <p>
                A rate without a date is a rumour. Material and labour prices
                change, so every list needs rules for change.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>State the date the list was issued</li>
                <li>State how many days the rates stay valid</li>
                <li>
                  Agree how steel and cement price movement will be handled
                </li>
                <li>Prefer a written formula over a verbal promise</li>
                <li>Keep a cap on increases where possible</li>
                <li>Re-quote when the validity period ends</li>
              </ul>

              <p>
                Prices change with market conditions, so always request a
                current written quotation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Per-Square-Foot Figures Versus Item Rates
              </h2>

              <p>
                A single figure per square foot is quick but blunt. An item-wise
                list is slower but clearer.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Per-square-foot figures suit early budgeting</li>
                <li>Item rates suit comparing contractors line by line</li>
                <li>
                  Ask what area is counted, such as balconies and staircases
                </li>
                <li>Ask which finishing grade the figure assumes</li>
                <li>
                  Convert item totals back to a per-square-foot figure to
                  sanity-check
                </li>
                <li>
                  Never accept a figure without a written scope behind it
                </li>
              </ul>

              <p>Use the quick figure to start, and the item list to decide.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Comparing Two Price Lists Fairly
              </h2>

              <p>
                Comparison works only when everything else is equal. Use a
                checklist.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Same drawings and quantities</li>
                <li>Same units and measurement method</li>
                <li>Same material brands and grades</li>
                <li>Same inclusions and exclusions</li>
                <li>Same validity period</li>
                <li>Same payment terms and warranty</li>
              </ul>

              <p>
                When one list is far lower, find the row where it differs. That
                row usually explains the gap.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Keeping a Price Diary
              </h2>

              <p>
                A small diary protects you during a long project. It records
                what was promised and what changed.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Write the date and source of every rate you receive</li>
                <li>Note the reason for any revision</li>
                <li>Save supplier bills for major materials</li>
                <li>Record each approved change with its cost</li>
                <li>Compare actual spending with the list every month</li>
                <li>Keep photographs of delivered materials</li>
              </ul>

              <p>
                A diary calms disputes, because facts replace memory.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Local Conditions That Affect the List
              </h2>

              <p>
                Kashipur&apos;s Terai climate and soil influence what a sensible
                price list must include.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Moist ground may need deeper or reinforced foundations</li>
                <li>Raised plinths and drainage protect against waterlogging</li>
                <li>Strong waterproofing matters during heavy monsoon</li>
                <li>Rain and fog can add idle time to schedules</li>
                <li>
                  Festival and harvest seasons can change labour availability
                </li>
                <li>
                  Earthquake-resistant detailing needs engineering attention
                </li>
              </ul>

              <p>A list that ignores these items may grow later.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Contract and Payment Habits
              </h2>

              <p>
                A price list becomes powerful only when attached to an
                agreement. Link money to verified work.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Attach the rate card and signed drawings to the contract</li>
                <li>Pay only a modest advance after signing</li>
                <li>
                  Release instalments after inspected, jointly measured work
                </li>
                <li>Pay by bank transfer and keep every receipt</li>
                <li>Hold retention until defects are corrected</li>
                <li>Record extra work and its rate before execution</li>
                <li>Never pay ahead of completed work</li>
              </ul>

              <p>
                Confirm current local approval and compliance requirements
                with the relevant authority, since rules can change.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Red Flags in a Price List
              </h2>

              <p>Several of these together should stop the process.</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>No dates, units or inclusions</li>
                <li>One lump figure with no breakdown</li>
                <li>
                  Rates far below every other list without explanation
                </li>
                <li>Vague phrases such as &quot;extra at actuals&quot;</li>
                <li>Brand names missing from major items</li>
                <li>Pressure to accept the rate &quot;only today&quot;</li>
                <li>Refusal to put the rate card in writing</li>
              </ul>

              <p>
                Walking away before signing costs nothing, while leaving midway
                can cost a fortune.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>

              <p>
                A <strong>civil contractor Kashipur price list</strong> is
                useful only when it shows units, inclusions, exclusions, brands
                and validity in a format every contractor follows. Request the
                same blank rate card from each one, compare line by line, keep
                a price diary and tie payments to inspected work. A genuine
                contractor will fill the card openly and explain every number.
              </p>

              <p>
                <strong>Next step:</strong> copy the blank rate card into a
                sheet, add your own items and send it to three contractors this
                week. (Add your company name, phone number, address and Google
                Maps link here, along with your own current rate ranges.)
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  1. Is there a fixed price list for civil contractors in
                  Kashipur?
                </h3>
                <p>
                  No. Rates vary with materials, labour, scope and season, so
                  request a current written list.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  2. What should a price list include?
                </h3>
                <p>
                  Item, unit, rate, inclusions, exclusions, material brand and
                  grade, and the validity date.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  3. Why are units important?
                </h3>
                <p>
                  Different items use different units, and mixing them causes
                  wrong comparisons and budget surprises.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  4. How long is a price list valid?
                </h3>
                <p>
                  It varies. Ask for a written validity period and a rule for
                  handling price movement.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  5. Why do two lists differ so much?
                </h3>
                <p>
                  Differences come from material grade, included work,
                  exclusions, overhead and the contractor&apos;s assumptions.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  6. Is a per-square-foot figure enough?
                </h3>
                <p>
                  It helps early budgeting, but an item-wise list is better for
                  comparing contractors fairly.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  7. How do I handle rising material prices?
                </h3>
                <p>
                  Agree a written formula or capped escalation clause before
                  signing the agreement.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  8. What are warning signs in a price list?
                </h3>
                <p>
                  Missing dates and units, one lump figure, vague extras, no
                  brands and pressure to accept quickly.
                </p>
              </div>
            </section>
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