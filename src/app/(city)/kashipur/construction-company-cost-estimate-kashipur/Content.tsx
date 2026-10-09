import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <div className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <section className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Construction Company Cost Estimate in Kashipur: How Estimates
                Are Built and How to Test Them
              </h1>
              <p className="leading-7">
                Every construction company hands you a number, but not every
                number means the same thing. One figure may be a quick guess
                from a phone call, while another comes from measured quantities
                and analysed rates. Owners who understand how an estimate is
                built can ask sharper questions, spot weak spots and avoid
                budget shocks. This guide walks through the full anatomy of an
                estimate in Kashipur.
              </p>
              <p className="leading-7">
                <em>
                  Note: this article gives general guidance and does not
                  endorse any firm. All figures are approximate and must be
                  confirmed through written quotations.
                </em>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                1. What a Cost Estimate Really Is
              </h2>
              <p className="leading-7">
                An estimate is a reasoned forecast of spending, not a promise.
                Its strength depends on the information behind it.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Based on drawings, site conditions and chosen finishing.</li>
                <li>Built from quantities multiplied by rates.</li>
                <li>Includes allowances for risk and price movement.</li>
                <li>Can be revised when scope or design changes.</li>
                <li>
                  Becomes binding only when written into an agreement.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                2. Four Levels of Estimates
              </h2>
              <p className="leading-7">
                Companies use different levels as the project becomes clearer.
              </p>

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Rough Estimate
                  </h3>
                  <p className="leading-7">
                    A quick figure from area and a per sq ft rate. Useful for
                    early budgeting, with wide error.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Preliminary Estimate
                  </h3>
                  <p className="leading-7">
                    Prepared from basic drawings and key specifications.
                    Narrower error.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Detailed Estimate
                  </h3>
                  <p className="leading-7">
                    Built from full drawings with measured quantities and
                    analysed rates. Best for decisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Final Contract Estimate
                  </h3>
                  <p className="leading-7">
                    The agreed figure inside the signed contract, with clear
                    scope and conditions.
                  </p>
                </div>
              </div>

              <p className="leading-7">
                Always ask which level the company is giving you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Accuracy Expected at Each Level
              </h2>
              <p className="leading-7">
                Knowing the likely error range helps you plan a safety margin.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Rough estimate: large variation is normal.</li>
                <li>Preliminary estimate: moderate variation.</li>
                <li>Detailed estimate: small variation.</li>
                <li>
                  Final contract estimate: small variation, controlled by
                  change rules.
                </li>
              </ul>
              <p className="leading-7">
                Do not borrow money against a rough estimate alone.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Information a Company Needs to Estimate Well
              </h2>
              <p className="leading-7">
                Poor input produces poor numbers.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Approved or draft architectural drawings.</li>
                <li>Structural drawings or design notes.</li>
                <li>Soil report or local soil knowledge.</li>
                <li>Finishing choices in writing.</li>
                <li>Brand preferences for key materials.</li>
                <li>Preferred start date and duration.</li>
                <li>Access, water and power status at site.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Step One: Quantity Takeoff
              </h2>
              <p className="leading-7">
                The company measures work from drawings.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Excavation and filling volumes.</li>
                <li>
                  Concrete volumes for footings, columns, beams and slabs.
                </li>
                <li>Steel weight from bar schedules.</li>
                <li>Brickwork and plaster areas.</li>
                <li>Flooring and tiling areas.</li>
                <li>Door, window and fixture counts.</li>
                <li>Painting areas by coat.</li>
              </ul>
              <p className="leading-7">
                Missing a drawing means missing quantities, so ask which
                sheets were used.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                6. Step Two: Rate Analysis
              </h2>
              <p className="leading-7">
                Each work item gets a rate built from its parts.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Material cost per unit.</li>
                <li>Labour cost per unit.</li>
                <li>Equipment and tool cost.</li>
                <li>Wastage allowance.</li>
                <li>Overhead share.</li>
                <li>Profit margin.</li>
              </ul>
              <p className="leading-7">
                Ask to see rate analysis for two or three major items, such as
                slab concrete and brickwork.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Step Three: Bill of Quantities
              </h2>
              <p className="leading-7">
                The Bill of Quantities, called BOQ, lists every item with
                quantity, unit and rate.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Item description in plain words.</li>
                <li>Unit such as cubic foot, square foot or point.</li>
                <li>Quantity measured.</li>
                <li>Rate per unit.</li>
                <li>Amount for each line.</li>
                <li>Subtotals by stage.</li>
                <li>Grand total with taxes.</li>
              </ul>
              <p className="leading-7">
                A BOQ is the most useful document for comparing companies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                8. How to Check a BOQ Quickly
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Confirm the area and floor count match your plan.</li>
                <li>Look for large lump-sum lines with no breakup.</li>
                <li>Check whether doors, windows and fittings are listed.</li>
                <li>
                  See whether plumbing and electrical points are counted.
                </li>
                <li>Compare units across quotes.</li>
                <li>Ask what is excluded in writing.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                9. Approximate Rate Reference
              </h2>
              <p className="leading-7">
                Rates vary with design, finishing and season. These ranges are
                indicative.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>
                  <strong>Labour-only work:</strong> roughly ₹250 to ₹450 per
                  sq ft.
                </li>
                <li>
                  <strong>Grey structure with material:</strong> roughly
                  ₹1,100 to ₹1,500 per sq ft.
                </li>
                <li>
                  <strong>Standard turnkey:</strong> roughly ₹1,700 to ₹2,300
                  per sq ft.
                </li>
                <li>
                  <strong>Premium turnkey:</strong> ₹2,500 per sq ft and
                  above.
                </li>
              </ul>
              <p className="leading-7">
                <strong>Example:</strong> a 1,000 sq ft home at ₹1,900 per sq
                ft would cost near ₹19 lakh, excluding land, furniture and
                approval fees.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Stage-Wise Cost Plan
              </h2>
              <p className="leading-7">
                A good estimate also shows how spending flows over time.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>
                  <strong>Excavation and foundation:</strong> about 12 to 15
                  percent.
                </li>
                <li>
                  <strong>RCC structure:</strong> about 25 to 30 percent.
                </li>
                <li>
                  <strong>Masonry and plaster:</strong> about 15 to 18
                  percent.
                </li>
                <li>
                  <strong>Flooring and tiling:</strong> about 10 to 12
                  percent.
                </li>
                <li>
                  <strong>Plumbing and electrical:</strong> about 10 to 12
                  percent.
                </li>
                <li>
                  <strong>Paint, doors and windows:</strong> about 12 to 15
                  percent.
                </li>
              </ul>
              <p className="leading-7">
                Use this plan to line up loan releases and personal funds.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                11. Material Share in the Estimate
              </h2>
              <p className="leading-7">
                Material usually takes roughly 60 to 65 percent of total cost.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>
                  <strong>Cement:</strong> branded bags usually sell between
                  ₹350 and ₹450.
                </li>
                <li>
                  <strong>TMT steel:</strong> price moves during the year.
                </li>
                <li>
                  <strong>Bricks:</strong> clay and fly ash vary in strength
                  and cost.
                </li>
                <li>
                  <strong>Sand and aggregate:</strong> transport distance
                  affects the rate.
                </li>
                <li>
                  <strong>Tiles and fittings:</strong> widest gap between
                  basic and luxury.
                </li>
              </ul>
              <p className="leading-7">
                <strong>Tip:</strong> ask which material prices were assumed
                and on what date.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Provisional Sums and Allowances
              </h2>
              <p className="leading-7">
                Some items cannot be priced exactly at estimate stage, so
                companies use placeholders.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Tiles and sanitaryware allowance per sq ft or per set.</li>
                <li>Kitchen and wardrobe allowance.</li>
                <li>Light fittings allowance.</li>
                <li>Landscaping allowance.</li>
                <li>Special structural items awaiting design.</li>
              </ul>
              <p className="leading-7">
                Ask what happens when your actual choice costs more or less
                than the allowance.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Contingency Allowance
              </h2>
              <p className="leading-7">
                Contingency covers small unknowns.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Hidden soil conditions.</li>
                <li>Minor design adjustments.</li>
                <li>Wastage above plan.</li>
                <li>Small price rise.</li>
                <li>Unplanned weather delay costs.</li>
              </ul>
              <p className="leading-7">
                Check whether the company has included a contingency, and keep
                your own additional reserve of eight to ten percent.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Price Escalation and Validity
              </h2>
              <p className="leading-7">
                Material and wage prices move, so every estimate needs time
                limits.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Validity period of the quote.</li>
                <li>Whether rates are fixed or variable.</li>
                <li>How cement and steel changes will be handled.</li>
                <li>Cap on any escalation.</li>
                <li>Method of proof for price rise.</li>
                <li>Date from which rates apply.</li>
              </ul>
              <p className="leading-7">
                A fixed-rate period of several weeks is common, but ask
                clearly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Exclusions to Watch
              </h2>
              <p className="leading-7">
                Exclusions decide whether an estimate is complete.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Map approval and authority fees.</li>
                <li>Soil testing and structural drawings.</li>
                <li>Temporary water and electricity connection.</li>
                <li>Debris removal.</li>
                <li>Water tank, borewell and septic tank.</li>
                <li>Boundary wall and main gate.</li>
                <li>Landscaping and outdoor lighting.</li>
                <li>Furniture and appliances.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Red Flags in Estimates
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>A single total with no breakup.</li>
                <li>Rates far below every other quote.</li>
                <li>No mention of brands or grades.</li>
                <li>Verbal promises not shown on paper.</li>
                <li>No validity date.</li>
                <li>Large advance demanded before detailed estimate.</li>
                <li>
                  Refusal to explain how numbers were calculated.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Comparing Estimates from Several Companies
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Share identical drawings and finishing notes.</li>
                <li>Request BOQ format from each.</li>
                <li>Put all quotes into one comparison sheet.</li>
                <li>Align units and inclusions.</li>
                <li>Mark allowances and exclusions.</li>
                <li>Compare timelines and warranty.</li>
                <li>Judge total cost, not only the headline rate.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Handling Changes After Estimate
              </h2>
              <p className="leading-7">
                Changes are normal, but they must be controlled.
              </p>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Ask for a written change request form.</li>
                <li>Get price and time impact before approving.</li>
                <li>Use the same rate basis where possible.</li>
                <li>Record signed approvals.</li>
                <li>Update the running budget immediately.</li>
                <li>Avoid changes after slab casting where possible.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                19. Agreement Points Linked to the Estimate
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Detailed scope of work.</li>
                <li>Total value or rate per sq ft.</li>
                <li>Material brands and grades.</li>
                <li>Stage-wise payment milestones.</li>
                <li>Start and completion dates.</li>
                <li>Penalty for unjustified delay.</li>
                <li>Defect liability period.</li>
                <li>Pricing method for changes.</li>
                <li>Dispute resolution method.</li>
              </ul>
              <p className="leading-7">
                <strong>Payment advice:</strong> link instalments to completed
                stages and avoid heavy advances.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                20. Tracking Actual Cost Against Estimate
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>Keep a simple payment register.</li>
                <li>Compare each stage bill with the stage plan.</li>
                <li>Photograph completed work before paying.</li>
                <li>Check delivered material against the list.</li>
                <li>Note every approved variation.</li>
                <li>
                  Review variance monthly and ask for explanations.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                21. Seasonal and Local Notes
              </h2>
              <ul className="list-disc space-y-2 pl-6 leading-7">
                <li>
                  <strong>Dry months:</strong> efficient casting and curing.
                </li>
                <li>
                  <strong>Monsoon:</strong> delays and extra waterproofing
                  care.
                </li>
                <li>
                  <strong>Winter:</strong> comfortable labour, with
                  occasional fog delays.
                </li>
              </ul>
              <p className="leading-7">
                A Kashipur-based company understands soil behaviour, drainage
                patterns, municipal procedures and dependable suppliers,
                which brings estimates closer to real spending. Outside firms
                may quote lower, yet travel and slow response often cancel
                the saving.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Conclusion</h2>
              <p className="leading-7">
                A construction company cost estimate in Kashipur is only as
                good as its drawings, quantities, rates and conditions. Ask
                which level of estimate you are seeing, request a BOQ, check
                allowances and exclusions, and compare several quotes on equal
                terms. Add your own reserve, control changes in writing and
                track actual spending against the plan. When you understand
                how the number is built, you can trust it, challenge it or
                improve it with confidence.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  1. What is the difference between rough and detailed
                  estimates?
                </h3>
                <p className="leading-7">
                  A rough estimate uses area and a per sq ft rate, while a
                  detailed one uses measured quantities and analysed rates.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  2. What is a BOQ?
                </h3>
                <p className="leading-7">
                  A Bill of Quantities lists every work item with quantity,
                  unit, rate and amount.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  3. What is the usual turnkey rate per sq ft?
                </h3>
                <p className="leading-7">
                  Standard turnkey work generally falls between ₹1,700 and
                  ₹2,300 per sq ft.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  4. Why do estimates from different companies differ?
                </h3>
                <p className="leading-7">
                  Scope, material grades, allowances, supervision level and
                  company overhead all change the total.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  5. What is a provisional sum?
                </h3>
                <p className="leading-7">
                  It is a placeholder amount for items not yet chosen, such as
                  tiles or fixtures.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  6. How much reserve should I keep beyond the estimate?
                </h3>
                <p className="leading-7">
                  Eight to ten percent for approvals, water tanks, debris
                  removal and price changes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  7. How long is an estimate valid?
                </h3>
                <p className="leading-7">
                  Usually a few weeks, so ask for a written validity date and
                  rules for price changes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  8. Can an estimate change after signing?
                </h3>
                <p className="leading-7">
                  Only through written change approvals, with clear price and
                  time impact.
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