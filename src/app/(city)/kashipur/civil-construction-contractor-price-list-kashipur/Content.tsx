import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <div className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Civil Construction Contractor Price List in Kashipur: Rates
                Alone Do Not Build a Budget
              </h1>

              <p>
                Many owners collect a{" "}
                <strong>
                  civil construction contractor price list in Kashipur
                </strong>{" "}
                and then stall. They hold a page of rates but cannot say what
                their own building will cost. A rate is only one half of a
                price. The other half is quantity, meaning how much of each item
                your drawings actually need.
              </p>

              <p>
                Think of a grocery bill. Knowing that rice costs a certain
                amount per kilo tells you nothing until you know how many kilos
                your family eats. Construction works the same way. This guide
                shows how to multiply rates by quantities, add allowances and
                reserves, and compare lists fairly. It uses invented numbers
                only to teach the method, and it names no real market rates.
                Each section opens with a short idea, followed by points you can
                use.
              </p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                1. The Budget Formula Behind Every Price List
              </h2>

              <p>
                Every civil budget follows the same simple structure.
                Understanding it removes most of the mystery.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Line cost = quantity × rate</strong>
                </li>
                <li>
                  <strong>Subtotal = sum of all line costs</strong>
                </li>
                <li>
                  <strong>
                    Allowances = wastage, site conditions and small unlisted
                    items
                  </strong>
                </li>
                <li>
                  <strong>Reserve = money kept aside for surprises</strong>
                </li>
                <li>
                  <strong>
                    Total budget = subtotal + allowances + reserve + excluded
                    items
                  </strong>
                </li>
              </ul>

              <p>
                Each part can be checked separately, which is why itemised
                lists are safer than one lump figure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                2. Why Quantities Matter More Than You Think
              </h2>

              <p>
                A small error in quantity can outweigh a large saving in rate.
                Owners often negotiate rates hard and ignore measurements.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Quantities come from drawings, not from guesses.</li>
                <li>
                  Different contractors may measure the same drawing
                  differently.
                </li>
                <li>Wastage assumptions change quantities quietly.</li>
                <li>
                  Changing a design after pricing changes quantities at once.
                </li>
                <li>
                  An independent engineer can verify quantities before you sign.
                </li>
              </ul>

              <p>
                Always ask for the quantity beside every rate, so you can see
                both halves of the price.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Collect Quantities From Your Drawings
              </h2>

              <p>
                You do not need to be an engineer to understand where quantities
                come from. A rough picture helps you ask better questions.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Excavation:</strong> plan area of foundation
                  multiplied by depth.
                </li>
                <li>
                  <strong>Concrete:</strong> volume of footings, columns, beams
                  and slabs.
                </li>
                <li>
                  <strong>Steel:</strong> weight taken from bar schedules in
                  structural drawings.
                </li>
                <li>
                  <strong>Masonry:</strong> wall length, height and thickness.
                </li>
                <li>
                  <strong>Plaster:</strong> wall and ceiling surface area.
                </li>
                <li>
                  <strong>Waterproofing:</strong> terrace, bathroom and tank
                  surface area.
                </li>
              </ul>

              <p>
                Ask the contractor or engineer to show you the quantity sheet.
                A professional can produce one quickly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                4. A Worked Example With Invented Numbers
              </h2>

              <p>
                The numbers below are invented only to demonstrate the method.
                They are not market rates and describe no real contractor.
                &quot;Units&quot; means any currency.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="border-b border-gray-200 px-4 py-3 font-semibold">
                        Item
                      </th>
                      <th className="border-b border-gray-200 px-4 py-3 font-semibold">
                        Quantity
                      </th>
                      <th className="border-b border-gray-200 px-4 py-3 font-semibold">
                        Rate
                      </th>
                      <th className="border-b border-gray-200 px-4 py-3 font-semibold">
                        Line cost
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Excavation", "200", "10", "2,000"],
                      ["Concrete", "80", "50", "4,000"],
                      ["Steel", "6", "400", "2,400"],
                      ["Masonry", "120", "30", "3,600"],
                      ["Plaster", "600", "5", "3,000"],
                      ["Waterproofing", "150", "8", "1,200"],
                    ].map((item) => (
                      <tr
                        key={item[0]}
                        className="even:bg-gray-50"
                      >
                        {item.map((value, index) => (
                          <td
                            key={`${item[0]}-${index}`}
                            className="border-b border-gray-200 px-4 py-3"
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                The subtotal is 16,200 units. A ten percent reserve adds 1,620,
                giving 17,820 units before excluded items. Notice that
                quantities drive the result as much as rates do.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Add Allowances for Things a List Never Shows
              </h2>

              <p>
                Price lists name main items, but real sites need small extras.
                Ignoring them creates the classic &quot;why is it more than
                the list?&quot; shock.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Wastage of cement, steel and bricks.</li>
                <li>Water and electricity used on site.</li>
                <li>Scaffolding, shuttering and curing.</li>
                <li>Cleaning and debris removal.</li>
                <li>Temporary rain protection.</li>
                <li>Minor repairs after weather damage.</li>
                <li>Transport for awkward access.</li>
              </ul>

              <p>
                Ask which of these are inside the rates and which will be billed
                separately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                6. List What the Price List Excludes
              </h2>

              <p>
                Excluded items are part of your total even though they are not
                in the list. Write them down before comparing totals.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Architect and structural design fees.</li>
                <li>Soil testing and survey.</li>
                <li>Map approval and authority fees.</li>
                <li>Electricity and water connection charges.</li>
                <li>Septic tank, boundary wall and gate, if not listed.</li>
                <li>Finishing items such as tiles, paint and fittings.</li>
                <li>Furniture, curtains and landscaping.</li>
              </ul>

              <p>
                Add a separate section to your budget sheet for these, and fill
                it through quotations from other providers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Reserve and Contingency Money
              </h2>

              <p>
                A reserve is not a sign of poor planning. It is the honest
                admission that buildings hide surprises.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Keep roughly ten percent aside, more for old or complex plots.
                </li>
                <li>Do not treat it as spendable on upgrades.</li>
                <li>
                  Use it only for approved changes and genuine surprises.
                </li>
                <li>Record every use in your price diary.</li>
                <li>
                  Release unused reserve only after handover and defect
                  clearance.
                </li>
              </ul>

              <p>
                A project without a reserve usually borrows money at the worst
                moment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Handling Price Movement During the Project
              </h2>

              <p>
                Material and labour prices change over time. A fair list
                explains how.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>State the issue date and validity period on the list.</li>
                <li>
                  Agree a written formula for steel and cement movement.
                </li>
                <li>
                  Prefer a capped escalation clause to open-ended rises.
                </li>
                <li>
                  Decide whether you or the contractor buys price-sensitive
                  items.
                </li>
                <li>
                  Buy critical materials in planned lots when stable.
                </li>
                <li>Re-quote when the validity period ends.</li>
              </ul>

              <p>
                Prices change with market conditions, so always request a
                current written quotation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                9. Compare Two Lists Using the Same Quantities
              </h2>

              <p>
                The easiest way to compare is to apply both lists to identical
                quantities. Differences then come only from rates and
                inclusions.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Take one quantity sheet from your engineer.</li>
                <li>
                  Multiply each contractor&apos;s rates by the same quantities.
                </li>
                <li>Compare subtotals, not headline rates.</li>
                <li>
                  Check whether any item is missing from either list.
                </li>
                <li>
                  Note differences in material brands and grades.
                </li>
                <li>Review exclusions side by side.</li>
              </ul>

              <p>
                A low rate on an item you barely use matters less than a
                slightly higher rate on a large item.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Spot Unbalanced Pricing
              </h2>

              <p>
                Some contractors lower rates on items you will notice and raise
                them on items you will not. The total looks fair while the
                details are skewed.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Compare each line against the other contractors&apos; lines.</li>
                <li>
                  Look for unusually low rates on early items, such as
                  excavation.
                </li>
                <li>
                  Look for unusually high rates on items likely to increase
                  later.
                </li>
                <li>Check how extra work is priced.</li>
                <li>
                  Ask the contractor to justify any line far from the average.
                </li>
              </ul>

              <p>
                Unbalanced pricing is legal in many cases, but you should
                understand it before signing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                11. Per-Square-Foot Figures Versus Item Totals
              </h2>

              <p>
                A single figure per square foot is useful for early planning,
                but item totals decide the final contract.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Use a per-square-foot figure to test whether a budget is
                  realistic.
                </li>
                <li>
                  Convert your itemised total back into a per-square-foot
                  figure as a sanity check.
                </li>
                <li>
                  Ask which areas are counted, such as balconies and
                  staircases.
                </li>
                <li>Ask which finishing level the figure assumes.</li>
                <li>
                  Never accept a figure without a written scope behind it.
                </li>
              </ul>

              <p>
                If the two methods differ greatly, find out why before
                proceeding.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Material Quality and the Price Behind It
              </h2>

              <p>
                A rate cannot be judged without the grade it assumes. Quality
                differences hide inside identical-looking lines.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Cement and steel brand and grade.</li>
                <li>Brick or block type.</li>
                <li>Concrete grade.</li>
                <li>
                  Waterproofing chemical and number of layers.
                </li>
                <li>Pipe, wiring and fitting brands.</li>
                <li>Paint type and number of coats.</li>
              </ul>

              <p>
                Insist on named products in the agreement, then check delivery
                bills against them.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Phasing the Budget Across Stages
              </h2>

              <p>
                Cash flow matters as much as total cost. Spreading the budget
                across stages prevents mid-project panic.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Foundation and plinth stage.</li>
                <li>Frame and roof stage.</li>
                <li>Masonry, services and plaster stage.</li>
                <li>Finishing stage.</li>
                <li>External works and handover stage.</li>
              </ul>

              <p>
                Ask the contractor for a stage-wise cash requirement chart. It
                helps you arrange funds or loan releases on time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Local Conditions That Affect Quantities and Rates
              </h2>

              <p>
                Kashipur&apos;s Terai climate and soil change what a realistic
                budget must include.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Moist ground may need deeper or reinforced foundations.
                </li>
                <li>
                  Raised plinths and drains add quantity but prevent damage.
                </li>
                <li>
                  Strong waterproofing is essential during heavy monsoon.
                </li>
                <li>Rain and fog can add idle time.</li>
                <li>
                  Festival and harvest seasons can affect labour availability.
                </li>
                <li>
                  Earthquake-resistant detailing needs engineering attention.
                </li>
              </ul>

              <p>
                A list that ignores these items may grow after work begins.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Contract and Payment Habits
              </h2>

              <p>
                A price list becomes powerful only when attached to an
                agreement. Link money to verified progress.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Attach the rate list, quantity sheet and signed drawings to
                  the contract.
                </li>
                <li>Pay only a modest advance after signing.</li>
                <li>
                  Release instalments after inspected, jointly measured work.
                </li>
                <li>Pay by bank transfer and keep every receipt.</li>
                <li>Hold retention until defects are corrected.</li>
                <li>
                  Record extra work and its rate before execution.
                </li>
                <li>Never pay ahead of completed work.</li>
              </ul>

              <p>
                Confirm current local approval and compliance requirements with
                the relevant authority, since rules can change.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Keep a Live Budget Sheet
              </h2>

              <p>
                A budget sheet turns a one-time calculation into a daily tool.
                Update it as the project moves.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Columns for budgeted amount, committed amount, paid amount
                  and balance.
                </li>
                <li>One row per item and one row per approved change.</li>
                <li>A separate block for excluded items.</li>
                <li>A reserve line showing how much remains.</li>
                <li>Monthly comparison with actual progress.</li>
                <li>Notes on each price revision.</li>
              </ul>

              <p>
                Share the sheet with your family, so surprises stay small.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Verify the Contractor Behind the List
              </h2>

              <p>
                A neat list means little if the contractor cannot deliver.
                Verify before you trust any number.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Visit one running site and one building at least two years old.</li>
                <li>Check walls, ceilings and drains for cracks or damp.</li>
                <li>Call past clients, including some you choose yourself.</li>
                <li>Meet the supervisor who will handle your site.</li>
                <li>Confirm address and registration, where applicable.</li>
                <li>
                  Compare at least three itemised lists on identical quantities.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Red Flags in Price Lists and Budgets
              </h2>

              <p>Several of these together should stop the process.</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Rates without units or dates.</li>
                <li>One lump figure with no breakdown.</li>
                <li>
                  Rates far below every other list without explanation.
                </li>
                <li>Vague phrases such as &quot;extra at actuals.&quot;</li>
                <li>Brand names missing from major items.</li>
                <li>Quantities that do not match your drawings.</li>
                <li>Pressure to accept the list &quot;only today.&quot;</li>
                <li>Refusal to share the quantity sheet.</li>
              </ul>

              <p>
                Walking away before signing costs nothing, while leaving midway
                can cost a fortune.
              </p>
            </section>

            <section className="space-y-4">
              <p>
                A{" "}
                <strong>
                  civil construction contractor price list in Kashipur
                </strong>{" "}
                is a tool, not an answer. Multiply each rate by a checked
                quantity, add allowances for small extras, list the exclusions,
                keep a reserve and compare contractors on identical quantities.
                Keep a live budget sheet, and tie every payment to inspected
                work. A genuine contractor will share the quantity sheet
                openly, because transparent numbers protect both sides.
              </p>

              <p>
                <strong>Next step:</strong> ask your engineer for a quantity
                sheet this week, then send it with a blank rate card to three
                contractors and compare their totals line by line.{" "}
                <em>
                  (Add your company name, phone number, address and Google Maps
                  link here, along with your own current rate ranges.)
                </em>
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. How do I turn a price list into a budget?
                  </h3>
                  <p>
                    Multiply each rate by a checked quantity, add allowances
                    and excluded items, then keep a reserve.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. Where do quantities come from?
                  </h3>
                  <p>
                    From drawings and bar schedules. Ask your engineer or
                    contractor for a written quantity sheet.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. Why compare lists using the same quantities?
                  </h3>
                  <p>
                    It isolates differences in rates and inclusions, so you
                    compare like with like.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. How much reserve should I keep?
                  </h3>
                  <p>
                    About ten percent is common, more for old or complex plots,
                    used only for approved changes.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. What items are usually excluded from lists?
                  </h3>
                  <p>
                    Design fees, soil tests, approvals, utility connections,
                    finishing items and external works.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    6. How are price rises during a project handled?
                  </h3>
                  <p>
                    Through a written formula or capped escalation clause
                    agreed before signing.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    7. Is a per-square-foot figure enough?
                  </h3>
                  <p>
                    It helps early planning, but item totals on checked
                    quantities decide the final contract.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    8. What are warning signs in a price list?
                  </h3>
                  <p>
                    Missing units or dates, lump figures, unmatched quantities,
                    vague extras, missing brands and pressure to accept quickly.
                  </p>
                </div>
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