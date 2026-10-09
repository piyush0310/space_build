import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <div className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <div>
              <p className="text-lg leading-8">
                When owners say &quot;contractor&quot;, they often mean different
                people. One may be a main contractor who runs the entire project,
                another a labour thekedar who supplies masons, and a third a
                specialist who only fixes tiles. Knowing how the contractor market
                in Kashipur is organised helps you hire the right person for the
                right task, avoid confusion over responsibility and keep payments
                clean. This guide maps the whole structure.
              </p>

              <p className="mt-4 text-base leading-7 italic">
                Note: this article gives general guidance and does not endorse any
                person or firm. Rates are approximate and should be confirmed in
                writing.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                1. The Contractor Market at a Glance
              </h2>
              <p className="mt-3 leading-7">
                Construction work in Kashipur moves through layers, and each layer
                has its own role.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Main contractors who take overall responsibility</li>
                <li>Labour thekedars who supply and manage workers</li>
                <li>Specialist trade contractors for specific tasks</li>
                <li>Material suppliers and dealers</li>
                <li>Engineers and architects who guide or inspect</li>
              </ul>
              <p className="mt-4 leading-7">
                Problems usually appear where one layer&apos;s duty ends and the
                next begins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                2. Main Contractors
              </h2>
              <p className="mt-3 leading-7">
                A main contractor signs the agreement with you and answers for the
                whole building.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Prepares the estimate and work plan</li>
                <li>Arranges labour, material and equipment</li>
                <li>Coordinates all trades</li>
                <li>Manages timelines and quality</li>
                <li>Handles billing and handover</li>
              </ul>
              <p className="mt-4 leading-7">
                You get one point of responsibility, which simplifies disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                3. Labour Thekedars
              </h2>
              <p className="mt-3 leading-7">
                A thekedar is a labour supplier who leads a gang of workers.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Provides masons, helpers and bar benders</li>
                <li>Works mostly on labour-only rates</li>
                <li>Does not normally buy material</li>
                <li>
                  May work under a main contractor or directly for the owner
                </li>
                <li>
                  Quality depends heavily on the thekedar&apos;s own skill
                </li>
              </ul>
              <p className="mt-4 leading-7">
                Hiring a thekedar directly saves contractor margin, but you must
                supervise material and progress yourself.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                4. Specialist Trade Contractors
              </h2>
              <p className="mt-3 leading-7">
                Some tasks need trained hands beyond general masonry.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Shuttering and RCC teams:</strong> formwork, steel
                  placing and casting
                </li>
                <li>
                  <strong>Plaster and masonry gangs:</strong> walls, surfaces and
                  finishing coats
                </li>
                <li>
                  <strong>Flooring and tiling teams:</strong> laying, levelling
                  and polishing
                </li>
                <li>
                  <strong>Plumbing teams:</strong> pipelines, fittings and testing
                </li>
                <li>
                  <strong>Electrical teams:</strong> wiring, boards and safety
                  points
                </li>
                <li>
                  <strong>Painting teams:</strong> putty, primer and final coats
                </li>
                <li>
                  <strong>Steel fabricators:</strong> gates, grills, railings and
                  sheds
                </li>
                <li>
                  <strong>Waterproofing applicators:</strong> terrace and wet-area
                  treatment
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                5. Subcontracting: How Work Really Flows
              </h2>
              <p className="mt-3 leading-7">
                Many main contractors pass parts of the job to specialists.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Main contractor signs with the owner</li>
                <li>Specialist trades are hired for their own tasks</li>
                <li>Payments flow down the chain</li>
                <li>Responsibility should still stay with the main contractor</li>
                <li>Owners should know which tasks are subcontracted</li>
              </ul>
              <p className="mt-4 leading-7">
                Subcontracting is normal, but it must be visible in the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                6. Risks in a Long Subcontract Chain
              </h2>
              <p className="mt-3 leading-7">
                More layers mean more places for things to go wrong.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Delay in payment at one layer stops work at another
                </li>
                <li>Quality varies between different gangs</li>
                <li>Nobody feels fully responsible for defects</li>
                <li>Workers change frequently</li>
                <li>Blame shifts between layers during disputes</li>
              </ul>
              <p className="mt-4 leading-7">
                Ask the main contractor to name every trade partner before work
                begins.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                7. Which Contractor Type Suits Which Owner
              </h2>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Owner Without Time
              </h3>
              <p className="mt-2 leading-7">
                Hire a main contractor on a turnkey or material-plus-labour basis.
              </p>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Owner Who Can Supervise
              </h3>
              <p className="mt-2 leading-7">
                Consider labour thekedars with direct material purchase.
              </p>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Owner Fixing One Issue
              </h3>
              <p className="mt-2 leading-7">
                Hire a specialist for repair, waterproofing or flooring only.
              </p>

              <h3 className="mt-5 text-xl font-semibold text-gray-900">
                Owner Building in Stages
              </h3>
              <p className="mt-2 leading-7">
                Combine a main contractor for structure with specialists for
                finishing later.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                8. Approximate Rate Levels
              </h2>
              <p className="mt-3 leading-7">
                Pricing depends on whether you hire one main contractor or several
                parties.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Labour-only work:</strong> roughly ₹250 to ₹450 per sq
                  ft
                </li>
                <li>
                  <strong>Grey structure with material:</strong> roughly ₹1,100 to
                  ₹1,500 per sq ft
                </li>
                <li>
                  <strong>Standard turnkey:</strong> roughly ₹1,700 to ₹2,300 per
                  sq ft
                </li>
                <li>
                  <strong>Premium turnkey:</strong> ₹2,500 per sq ft and above
                </li>
              </ul>
              <p className="mt-4 leading-7">
                <strong>Example:</strong> a 1,000 sq ft home at ₹1,900 per sq ft
                would cost near ₹19 lakh, excluding land, furniture and approval
                fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                9. How Specialist Work Is Usually Billed
              </h2>
              <p className="mt-3 leading-7">
                Units differ by trade, so confirm them before agreeing.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Flooring and painting by square foot</li>
                <li>Plumbing and electrical by point or per bathroom</li>
                <li>Fabrication by weight or per running foot</li>
                <li>Brickwork by volume or area</li>
                <li>Shuttering by contact area</li>
              </ul>
              <p className="mt-4 leading-7">
                Ask each specialist to write the unit and rate in a simple work
                order.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                10. Work Order: What to Write
              </h2>
              <p className="mt-3 leading-7">
                A one-page work order prevents most arguments with individual
                trades.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Name and contact of the contractor</li>
                <li>Exact task and location</li>
                <li>Unit, rate and expected quantity</li>
                <li>Material responsibility</li>
                <li>Start and completion dates</li>
                <li>Payment terms</li>
                <li>Quality standard and rework rule</li>
              </ul>
              <p className="mt-4 leading-7">
                Both sides should sign and keep a copy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                11. Managing Several Contractors Yourself
              </h2>
              <p className="mt-3 leading-7">
                Some owners hire each trade separately to save margin. This works
                only with discipline.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Create a simple schedule showing which trade comes when
                </li>
                <li>Avoid overlapping trades in the same room</li>
                <li>Inspect each stage before the next trade starts</li>
                <li>Keep a separate payment record for each contractor</li>
                <li>
                  Resolve overlaps in writing, not by word of mouth
                </li>
              </ul>
              <p className="mt-4 leading-7">
                If this feels heavy, a main contractor is worth the margin.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                12. Material Responsibility Between Parties
              </h2>
              <p className="mt-3 leading-7">
                Confusion over who buys what is a common source of loss.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Cement:</strong> branded bags usually sell between ₹350
                  and ₹450
                </li>
                <li>
                  <strong>TMT steel:</strong> price changes through the year
                </li>
                <li>
                  <strong>Bricks:</strong> clay and fly ash vary in strength and
                  cost
                </li>
                <li>
                  <strong>Sand and aggregate:</strong> transport distance changes
                  the rate
                </li>
                <li>
                  <strong>Tiles and fittings:</strong> widest gap between basic
                  and luxury
                </li>
              </ul>
              <p className="mt-4 leading-7">
                <strong>Tip:</strong> state in writing who buys, who stores and
                who bears wastage for each item.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                13. Verification Checklist for Any Contractor
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Verified identity and address</li>
                <li>Names of earlier clients and site locations</li>
                <li>Registered business details for firms</li>
                <li>GST registration where applicable</li>
                <li>Size and stability of the working team</li>
                <li>Safety arrangements for workers</li>
                <li>Sample of past work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                14. Judging Quality Across Trades
              </h2>
              <p className="mt-3 leading-7">
                Look at the finish of each trade before choosing.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Straight alignment of walls and columns</li>
                <li>Smooth plaster without hairline cracks</li>
                <li>Level floors with neat joints</li>
                <li>Leak-free pipe joints under pressure test</li>
                <li>Safe and tidy wiring with proper fittings</li>
                <li>Even paint with clean edges</li>
                <li>Strong welds and finish on steel work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                15. Payment Methods That Reduce Risk
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Small booking amount at signing</li>
                <li>Stage-wise payments after measured progress</li>
                <li>
                  Retention of a small portion until defects are cleared
                </li>
                <li>Written receipts for every transfer</li>
                <li>Preference for traceable payment modes</li>
                <li>No advance larger than the work completed</li>
              </ul>
              <p className="mt-4 leading-7">
                Pay each contractor only for work you have seen and measured.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                16. Hidden Costs Outside Contractor Rates
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Map approval and authority fees</li>
                <li>Soil testing and structural drawings</li>
                <li>Temporary water and electricity connection</li>
                <li>Debris removal</li>
                <li>Water tank, borewell and septic tank</li>
                <li>Boundary wall and main gate</li>
                <li>Landscaping and outdoor lighting</li>
              </ul>
              <p className="mt-4 leading-7">
                Keep eight to ten percent as a safety reserve.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                17. Agreement Points With a Main Contractor
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Detailed scope of work</li>
                <li>Total value or rate per sq ft</li>
                <li>List of trades and who performs them</li>
                <li>Material brands and grades</li>
                <li>Stage-wise payment milestones</li>
                <li>Start and completion dates</li>
                <li>Penalty for unjustified delay</li>
                <li>Defect liability period</li>
                <li>Dispute resolution method</li>
              </ul>
              <p className="mt-4 leading-7">
                <strong>Payment advice:</strong> link instalments to completed
                stages and never pay ahead of progress.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                18. Warning Signs Across the Market
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Heavy advance demanded before any work</li>
                <li>No written work order or agreement</li>
                <li>Refusal to name trade partners</li>
                <li>Rates far below every competitor</li>
                <li>Frequent replacement of workers</li>
                <li>Unpaid labour complaints on site</li>
                <li>Pressure to decide immediately</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                19. Seasonal Behaviour of the Labour Market
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Dry months:</strong> high demand, so good teams book
                  early
                </li>
                <li>
                  <strong>Monsoon:</strong> slower work and some workers leave for
                  farming
                </li>
                <li>
                  <strong>Winter:</strong> steady availability, with fog delaying
                  early starts
                </li>
              </ul>
              <p className="mt-4 leading-7">
                Booking trades early for peak months reduces waiting and price
                jumps.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                20. Why Local Contractors Make the Chain Stronger
              </h2>
              <p className="mt-3 leading-7">
                A Kashipur-based contractor knows which thekedars and specialists
                are dependable, how soil and drainage behave and which suppliers
                deliver on time. This local network shortens delays, trims
                transport cost and makes repair visits easy. Outside contractors
                must build that network from scratch, which often costs you time.
              </p>
            </section>

            <section>
              <p className="leading-7">
                Kashipur construction contractors work in layers, from main
                contractors to labour thekedars and specialist trades. Choose the
                structure that matches your time, budget and supervision ability,
                then write every responsibility into an agreement or work order.
                Verify each contractor, pay by measured progress and keep a reserve
                for hidden costs. When you understand who does what, your project
                moves with less confusion and fewer disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="mt-5 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. What is the difference between a main contractor and a
                    thekedar?
                  </h3>
                  <p className="mt-2 leading-7">
                    A main contractor runs the whole project, while a thekedar
                    mainly supplies and manages workers.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. Is hiring each trade separately cheaper?
                  </h3>
                  <p className="mt-2 leading-7">
                    It can save margin, but it needs strong scheduling and
                    supervision from you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. What is the usual turnkey rate per sq ft?
                  </h3>
                  <p className="mt-2 leading-7">
                    Standard turnkey work generally falls between ₹1,700 and
                    ₹2,300 per sq ft.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. Should I know who the subcontractors are?
                  </h3>
                  <p className="mt-2 leading-7">
                    Yes, ask the main contractor to list every trade partner in
                    the agreement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. How should I pay specialist trades?
                  </h3>
                  <p className="mt-2 leading-7">
                    Pay by measured progress, with written receipts and a small
                    retention until defects are cleared.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    6. Do I need a written work order for small trades?
                  </h3>
                  <p className="mt-2 leading-7">
                    Yes, a one-page order with task, rate, unit and dates prevents
                    most disputes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    7. How much reserve should I keep?
                  </h3>
                  <p className="mt-2 leading-7">
                    Eight to ten percent for approvals, water tanks, debris
                    removal and price changes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    8. Why prefer local contractors?
                  </h3>
                  <p className="mt-2 leading-7">
                    They know dependable workers, suppliers and local conditions,
                    and can return quickly for repairs.
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