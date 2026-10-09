
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <article className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Interior Design Cost in Haldwani: A Budget Planner with Worked
                Examples
              </h1>

              <p>
                Most cost articles list rates and stop there. Real owners need
                something more practical: how to split a budget, what to do
                first, what to postpone and how to stop the bill from growing.
                This guide works like a planner. It gives rate bands, worked
                examples for common homes, scenarios for tight budgets and a
                control routine for the execution stage.
              </p>

              <p className="rounded-lg border-l-4 border-gray-300 bg-gray-50 p-4 text-sm italic text-gray-600">
                Note: all figures are approximate and change with design, brand
                and season. Treat them as planning numbers and confirm through
                written quotations.
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                1. Cost Is a Decision, Not Just a Number
              </h2>
              <p>
                Final spending depends on choices you make, mostly in the first
                month.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Scope: which rooms and how much carpentry.</li>
                <li>Grade: board, hardware and finish quality.</li>
                <li>Detail: simple lines or heavy decorative work.</li>
                <li>Timing: all at once or in phases.</li>
                <li>Control: how closely you track changes.</li>
              </ul>
              <p>Change any of these and the total moves.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                2. Rate Bands per Sq Ft
              </h2>
              <p>These ranges are indicative for full interiors.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Basic tier:</strong> roughly ₹900 to ₹1,400 per sq
                  ft.
                </li>
                <li>
                  <strong>Mid tier:</strong> roughly ₹1,400 to ₹2,200 per sq
                  ft.
                </li>
                <li>
                  <strong>Premium tier:</strong> ₹2,500 per sq ft and above.
                </li>
              </ul>
              <p>
                A per sq ft rate is a starting point. A room-wise quote gives a
                truer picture.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Worked Example One: 1BHK Flat, About 600 Sq Ft
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Basic tier at ₹1,100 per sq ft: near ₹6.6 lakh.</li>
                <li>Mid tier at ₹1,600 per sq ft: near ₹9.6 lakh.</li>
                <li>Premium tier at ₹2,500 per sq ft: near ₹15 lakh.</li>
              </ul>
              <p>
                <strong>Typical priorities:</strong> compact kitchen, one
                wardrobe, TV unit, lighting and paint.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Worked Example Two: 2BHK Flat, About 1,000 Sq Ft
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Basic tier at ₹1,200 per sq ft: near ₹12 lakh.</li>
                <li>Mid tier at ₹1,700 per sq ft: near ₹17 lakh.</li>
                <li>Premium tier at ₹2,600 per sq ft: near ₹26 lakh.</li>
              </ul>
              <p>
                <strong>Typical priorities:</strong> modular kitchen, two or
                three wardrobes, living room wall, false ceiling and bathroom
                upgrades.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Worked Example Three: 3BHK or House, About 1,500 Sq Ft
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Basic tier at ₹1,200 per sq ft: near ₹18 lakh.</li>
                <li>Mid tier at ₹1,800 per sq ft: near ₹27 lakh.</li>
                <li>Premium tier at ₹2,700 per sq ft: near ₹40.5 lakh.</li>
              </ul>
              <p>
                <strong>Typical priorities:</strong> larger kitchen, multiple
                wardrobes, study, pooja unit, staircase detail and lighting
                layers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                6. Budget Split Across Elements
              </h2>
              <p>
                A balanced budget avoids overspending on one item.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Carpentry and storage:</strong> about 40 to 50
                  percent.
                </li>
                <li>
                  <strong>Kitchen:</strong> about 12 to 18 percent, often
                  inside carpentry.
                </li>
                <li>
                  <strong>Ceiling and lighting:</strong> about 8 to 12
                  percent.
                </li>
                <li>
                  <strong>Paint and wall finish:</strong> about 6 to 10
                  percent.
                </li>
                <li>
                  <strong>Flooring and tile work:</strong> about 8 to 15
                  percent where needed.
                </li>
                <li>
                  <strong>Electrical and plumbing changes:</strong> about 5 to
                  10 percent.
                </li>
                <li>
                  <strong>Soft furnishing and decor:</strong> about 5 to 10
                  percent.
                </li>
              </ul>
              <p>
                Percentages shift with the type of home, so adjust after the
                first quotation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Room Priority Ladder
              </h2>
              <p>When funds are limited, spend in this order.</p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Kitchen, since daily use is highest.</li>
                <li>Storage in bedrooms.</li>
                <li>Lighting and electrical points.</li>
                <li>Living room essentials.</li>
                <li>Bathrooms where needed.</li>
                <li>Paint and wall finishes.</li>
                <li>Decor and soft furnishing.</li>
              </ol>
              <p>
                Postpone decor first, never waterproofing or safe wiring.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Approximate Room-Wise Ranges
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Living room:</strong> roughly ₹1.5 lakh to ₹5 lakh.
                </li>
                <li>
                  <strong>Master bedroom:</strong> roughly ₹1.5 lakh to ₹4.5
                  lakh.
                </li>
                <li>
                  <strong>Kids room:</strong> roughly ₹1 lakh to ₹3.5 lakh.
                </li>
                <li>
                  <strong>Modular kitchen:</strong> roughly ₹1.2 lakh to ₹4
                  lakh for an average kitchen.
                </li>
                <li>
                  <strong>Dining area:</strong> roughly ₹0.8 lakh to ₹2.5 lakh.
                </li>
                <li>
                  <strong>Pooja unit:</strong> roughly ₹0.3 lakh to ₹1.5 lakh.
                </li>
                <li>
                  <strong>Bathroom upgrade:</strong> roughly ₹0.8 lakh to ₹3
                  lakh.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                9. What-If Scenarios
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Scenario A: Tight Budget
                  </h3>
                  <p>
                    Use basic boards with good hardware, simple ceilings,
                    standard paint and ready lights. Build kitchen and
                    wardrobes first.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Scenario B: Balanced Budget
                  </h3>
                  <p>
                    Use mid-range boards, soft-close hardware, layered lighting
                    and selective wall features.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Scenario C: Comfort-First Budget
                  </h3>
                  <p>
                    Spend more on kitchen, bedroom storage and lighting. Keep
                    living room decor simple.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Scenario D: Rental Home
                  </h3>
                  <p>
                    Choose durable finishes, neutral colours and fewer custom
                    pieces to cut repair costs.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Phase Plan for Spreading Cost
              </h2>
              <p>Phasing helps when cash arrives over time.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Phase one:</strong> civil changes, electrical,
                  plumbing, kitchen and bedroom storage.
                </li>
                <li>
                  <strong>Phase two:</strong> ceiling, lighting, paint and
                  living room units.
                </li>
                <li>
                  <strong>Phase three:</strong> extra furniture, curtains and
                  decor.
                </li>
                <li>
                  <strong>Rule:</strong> finish all dusty and wet work before
                  moving in.
                </li>
              </ul>
              <p>
                Ask the studio to price each phase separately, with a note on
                how phasing affects the total.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                11. Where Spending Rises Fast
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Heavy decorative panelling.</li>
                <li>Full-height glass or mirror work.</li>
                <li>Imported stone or exotic finishes.</li>
                <li>Complex ceiling shapes.</li>
                <li>Frequent design changes after production.</li>
                <li>Rush schedules that require extra labour.</li>
                <li>Late changes in kitchen or wardrobe size.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Where Savings Are Safe
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Compact, simple layouts.</li>
                <li>Standard sizes for doors and windows.</li>
                <li>Fewer curved shapes.</li>
                <li>Ready-made lights instead of custom fixtures.</li>
                <li>Simple paint combinations.</li>
                <li>Reusing good existing furniture.</li>
                <li>Planning appliances before kitchen design.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Where Saving Is Risky
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Weak boards near kitchens and bathrooms.</li>
                <li>Low-grade hinges and channels in daily-use units.</li>
                <li>Poor wiring and loose switches.</li>
                <li>Skipped waterproofing in wet areas.</li>
                <li>Poor ventilation planning in closed storage.</li>
                <li>Weak fixing of heavy units.</li>
              </ul>
              <p>
                Repairing these costs far more than doing them well at the
                start.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Haldwani Cost Notes
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Humidity makes moisture-ready boards worth the extra spend.
                </li>
                <li>
                  Some premium materials travel from larger cities, which can
                  add freight.
                </li>
                <li>
                  Carpenters get busy in festival and wedding months, so rates
                  can rise.
                </li>
                <li>
                  Narrow or hilly colony roads may raise delivery charges.
                </li>
                <li>
                  Cold evenings make warm lighting a high-value upgrade.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Reading the Quotation Line by Line
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Room-wise breakup with sizes.</li>
                <li>Unit rate and quantity for each item.</li>
                <li>Brand and grade of boards and hardware.</li>
                <li>Inclusions and exclusions written plainly.</li>
                <li>Taxes and extra charges visible.</li>
                <li>Payment stages listed.</li>
                <li>Validity period stated.</li>
              </ul>
              <p>
                Avoid single lump sums and phrases such as &quot;as
                required&quot;.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Compare Quotes by Rebuilding the Sheet
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Put each studio in a column.</li>
                <li>Put each room and item in rows.</li>
                <li>
                  Match board grade and hardware brand before comparing price.
                </li>
                <li>Mark what each quote excludes.</li>
                <li>Add extra costs missing from the lowest quote.</li>
                <li>Compare totals again after the additions.</li>
              </ul>
              <p>
                A lowest quote often becomes middle or high once the missing
                items are added.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Cash Flow and Payment Schedule
              </h2>
              <p>A clear schedule keeps your funds organised.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Small booking amount at signing.</li>
                <li>Instalment after design and drawing approval.</li>
                <li>Instalment on material order.</li>
                <li>Instalment after carpentry installation.</li>
                <li>Instalment after painting and finishing.</li>
                <li>Final payment after inspection and defect fixing.</li>
              </ul>
              <p>
                Take written receipts every time and avoid large advances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Hidden Costs and Reserve
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Wall breaking and re-plastering.</li>
                <li>Electrical rewiring and extra points.</li>
                <li>Plumbing changes.</li>
                <li>Appliances and loose furniture.</li>
                <li>Curtains, blinds and decor.</li>
                <li>Shifting, storage and debris removal.</li>
                <li>Deep cleaning before move-in.</li>
              </ul>
              <p>
                Keep eight to ten percent of the budget as a safety reserve.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                19. Cost Control During Execution
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Freeze drawings and finishes before production.</li>
                <li>
                  Approve every change in writing with price and time impact.
                </li>
                <li>Keep a simple payment register.</li>
                <li>Match deliveries with the brand list.</li>
                <li>Review progress against the schedule weekly.</li>
                <li>Photograph hidden work before it is covered.</li>
                <li>Compare running spend with the stage budget.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                20. Studios from Nearby Cities
              </h2>
              <p>
                Some studios serve several towns, and cost structure differs.
                Space Build, an interior design and Vastu studio based in
                Moradabad, is one example (see{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  https://www.spacebuild.co.in/
                </a>
                ). If you consider an outside studio for Haldwani, ask these
                cost questions.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Are travel or coordination charges added?</li>
                <li>Who supervises local execution?</li>
                <li>Where are materials sourced and delivered from?</li>
                <li>How are repairs handled after handover?</li>
                <li>Can they show similar completed work and rates?</li>
              </ul>
              <p>
                Distance is acceptable when cost, reporting and support are
                clear.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. What is the interior design cost per sq ft in Haldwani?
                  </h3>
                  <p>
                    Basic work starts near ₹900 per sq ft, mid-range runs about
                    ₹1,400 to ₹2,200 and premium goes above ₹2,500.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. How much does a 2BHK interior cost?
                  </h3>
                  <p>
                    Roughly ₹12 lakh to ₹26 lakh for about 1,000 sq ft,
                    depending on the quality tier and carpentry volume.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. Which rooms should I do first on a tight budget?
                  </h3>
                  <p>
                    Start with the kitchen and bedroom storage, then lighting,
                    and postpone decor.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. Can I do interiors in phases?
                  </h3>
                  <p>
                    Yes, but finish dusty and wet work first, and ask the studio
                    to price each phase separately.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. Why do two quotes for the same flat differ?
                  </h3>
                  <p>
                    Different board grades, hardware brands, scope and
                    exclusions change the total.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    6. How do I keep the final bill close to the quote?
                  </h3>
                  <p>
                    Freeze drawings before production, approve changes in
                    writing and track spending each week.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    7. How much advance should I pay?
                  </h3>
                  <p>
                    Keep it small and pay by stages after verified progress.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    8. How much reserve should I keep?
                  </h3>
                  <p>
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