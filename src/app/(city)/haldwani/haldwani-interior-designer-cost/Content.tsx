
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <article className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Haldwani Interior Designer Cost: What the Designer&apos;s Fee
                Covers and How to Compare It
              </h1>
              <p className="text-base leading-8">
                When owners ask about designer cost, they usually mix two
                different things: the fee paid for design and the money spent
                on carpentry, paint and materials. Confusing them leads to
                wrong comparisons, because one studio may charge a design fee
                and sell execution at cost while another hides the fee inside
                the execution rate. This guide separates the designer&apos;s
                own charge from the project cost, so that you can compare
                studios in Haldwani on equal ground.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                1. Two Costs, Not One
              </h2>
              <p>Every interior project has two layers.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Designer&apos;s fee:</strong> Payment for thinking,
                  drawings, supervision and coordination.
                </li>
                <li>
                  <strong>Project cost:</strong> Payment for materials, labour
                  and installation.
                </li>
              </ul>
              <p>
                A fair comparison needs both layers shown separately, even in
                a turnkey package.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                2. What the Design Fee Pays For
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Time spent on briefing, visits and measurement.</li>
                <li>Concepts, layouts and 3D views.</li>
                <li>Technical drawings and material schedules.</li>
                <li>Coordination with vendors and trades.</li>
                <li>Supervision and quality checks.</li>
                <li>Revisions and problem solving during work.</li>
                <li>Studio overhead and staff.</li>
              </ul>
              <p>
                A very low fee can mean thin drawings and little supervision.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Common Fee Models
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Fixed Design Fee
                  </h3>
                  <p>
                    One agreed amount for concept and drawings, with execution
                    handled separately.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Per Sq Ft Design Fee
                  </h3>
                  <p>
                    Charged by area, often between ₹50 and ₹250 per sq ft
                    depending on depth and studio.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Percentage of Project Cost
                  </h3>
                  <p>
                    A share of total spending, commonly used for full-service
                    projects.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Turnkey Rate
                  </h3>
                  <p>
                    One combined rate for design and execution, with the fee
                    built in.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Hourly or Visit-Based Charge
                  </h3>
                  <p>
                    Suitable for advice on one room or review of another plan.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Approximate Fee Ranges
              </h2>
              <p>
                These ranges are indicative and vary with studio reputation
                and scope.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Consultation visit:</strong> Roughly ₹1,000 to
                  ₹5,000 per visit.
                </li>
                <li>
                  <strong>Concept and layout for one room:</strong> Roughly
                  ₹5,000 to ₹25,000.
                </li>
                <li>
                  <strong>Full home design package:</strong> Roughly ₹50 to
                  ₹250 per sq ft.
                </li>
                <li>
                  <strong>Percentage model:</strong> Commonly about 8 to 15
                  percent of project cost.
                </li>
              </ul>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Worked Example
                </h3>
                <p>
                  A 1,000 sq ft flat with a design fee of ₹100 per sq ft would
                  have a design charge near ₹1 lakh, separate from execution
                  cost.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Approximate Project Cost Reference
              </h2>
              <p>
                Execution spending sits on top of the fee in non-turnkey
                models.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-gray-100 text-gray-900">
                      <th className="border border-gray-300 p-3">
                        Interior Category
                      </th>
                      <th className="border border-gray-300 p-3">
                        Approximate Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Basic interiors
                      </td>
                      <td className="border border-gray-300 p-3">
                        ₹900–₹1,400 per sq ft
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Mid-range interiors
                      </td>
                      <td className="border border-gray-300 p-3">
                        ₹1,400–₹2,200 per sq ft
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">
                        Premium interiors
                      </td>
                      <td className="border border-gray-300 p-3">
                        ₹2,500 per sq ft and above
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Ask whether a quoted rate already includes the design fee.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                6. Fee vs Execution: Which Is Cheaper?
              </h2>
              <p>Each route has trade-offs.</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Pay Fee, Execute Yourself:</strong> Lower studio
                  cost, but you manage vendors, quality and delays.
                </li>
                <li>
                  <strong>Pay Fee, Studio Supervises Execution:</strong>{" "}
                  Balanced control, with clear responsibility for design and
                  site checks.
                </li>
                <li>
                  <strong>Turnkey with Built-In Fee:</strong> Convenient, but
                  you must confirm what is inside the rate.
                </li>
                <li>
                  <strong>Percentage Model:</strong> Aligns the designer with
                  project size, but check for incentives to raise scope.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Factors That Raise a Designer&apos;s Fee
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Reputation and demand.</li>
                <li>Complex layouts and custom furniture.</li>
                <li>Number of rooms and drawings.</li>
                <li>Frequent revisions.</li>
                <li>Strict timelines.</li>
                <li>Detailed supervision requirements.</li>
                <li>Travel and coordination outside the city.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Factors That Lower the Fee
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Clear brief and fixed scope.</li>
                <li>Simple layouts and standard furniture.</li>
                <li>Fewer revisions.</li>
                <li>Flexible timelines.</li>
                <li>Bundled design and execution.</li>
                <li>Clients who decide quickly.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                9. What Should Be Free and What Should Be Paid
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Often free:</strong> First meeting, basic needs
                  discussion.
                </li>
                <li>
                  <strong>Often paid or adjustable:</strong> Site measurement,
                  concepts, 3D views and drawings.
                </li>
                <li>
                  <strong>Sometimes included in turnkey:</strong> Supervision
                  and revisions.
                </li>
                <li>
                  <strong>Usually extra:</strong> Additional rounds of
                  redesign and late changes.
                </li>
              </ul>
              <p>Ask exactly where free ends and paid begins.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Questions About Fees
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Is the fee fixed, per sq ft or a percentage?</li>
                <li>What is included: concept, 3D, drawings and supervision?</li>
                <li>How many revisions are included?</li>
                <li>Is the fee adjusted if I proceed with execution?</li>
                <li>Are site visits during execution included?</li>
                <li>Are there extra charges for travel or small changes?</li>
                <li>What happens to the fee if I stop midway?</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                11. Fee Payment Timing
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Small booking amount at agreement.</li>
                <li>Instalment on concept approval.</li>
                <li>Instalment on final drawings.</li>
                <li>
                  Balance on handover or on supervision stages.
                </li>
                <li>Written receipts for every payment.</li>
              </ul>
              <p>
                Avoid paying the full design fee before seeing real drawings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                12. How to Compare Designer Quotes
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Ask each studio to list design fee and execution cost
                  separately.
                </li>
                <li>Match scope, such as number of rooms and drawings.</li>
                <li>
                  Match material grades before comparing execution rates.
                </li>
                <li>Check supervision frequency.</li>
                <li>Compare warranty terms.</li>
                <li>Add extras missing from the lowest quote.</li>
                <li>Judge total cost, not only the fee.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Hidden Billing Patterns to Watch
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Low design fee with high execution margin.</li>
                <li>
                  Free design that is recovered through inflated material
                  rates.
                </li>
                <li>
                  Vague supervision with extra charges for each visit.
                </li>
                <li>Revision limits that trigger heavy charges.</li>
                <li>Vendor commissions not disclosed.</li>
                <li>Fees for 3D views repeated for small changes.</li>
              </ul>
              <p>Ask for item-wise pricing to see where money goes.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Negotiating Fees Without Hurting Quality
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Share a complete brief so that no guesswork remains.</li>
                <li>Fix the scope and number of revisions in writing.</li>
                <li>
                  Ask for a package that combines design and supervision.
                </li>
                <li>Offer prompt stage payments.</li>
                <li>
                  Choose a smaller scope first, such as kitchen and bedrooms.
                </li>
                <li>Avoid pushing the fee so low that effort is cut.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Hidden Project Costs Beyond the Fee
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Wall breaking and re-plastering.</li>
                <li>Electrical rewiring and extra points.</li>
                <li>Plumbing changes.</li>
                <li>Appliances and loose furniture.</li>
                <li>Curtains, blinds and decor.</li>
                <li>Debris removal and deep cleaning.</li>
                <li>Transport and fitting of special items.</li>
              </ul>
              <p>Keep eight to ten percent as a safety reserve.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Haldwani-Specific Fee Notes
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Local studios may charge lower travel costs, while outside
                  studios may add them.
                </li>
                <li>Demand rises in wedding and festival seasons.</li>
                <li>
                  Hilly or narrow roads can add supervision and delivery
                  effort.
                </li>
                <li>
                  Humidity needs careful material selection, which adds design
                  thinking.
                </li>
                <li>Quick repair access has real value after handover.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Agreement Essentials
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Room-wise scope of work.</li>
                <li>Design fee and what it covers.</li>
                <li>Total execution value or rate per sq ft.</li>
                <li>Material brands and grades.</li>
                <li>Stage-wise payment milestones.</li>
                <li>Start and completion dates.</li>
                <li>Penalty for unjustified delay.</li>
                <li>Warranty period and coverage.</li>
                <li>Pricing method for changes.</li>
                <li>Dispute resolution method.</li>
              </ul>
              <p>
                <strong>Payment advice:</strong> Link instalments to completed
                stages and avoid heavy advances.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Red Flags in Fee Discussions
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Refusal to state what the fee covers.</li>
                <li>Large non-refundable advance.</li>
                <li>No written scope or revision limit.</li>
                <li>Rates far below every competitor.</li>
                <li>Pressure to sign immediately.</li>
                <li>Vague answers on supervision.</li>
                <li>No drawings promised.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                19. Verification Checklist
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Registered business or firm details.</li>
                <li>GST registration where applicable.</li>
                <li>Verified studio address.</li>
                <li>Names and background of designers.</li>
                <li>Addresses of completed projects.</li>
                <li>Contact numbers of past clients.</li>
                <li>Sample agreement.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                20. Fees of Studios Based Outside Haldwani
              </h2>
              <p>
                Some studios serve several towns. Space Build, an interior
                design and Vastu studio based in Moradabad, is one example
                (see{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-900"
                >
                  Space Build&apos;s website
                </a>
                ). If you consider an outside studio for Haldwani, ask these
                fee questions.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Are travel or coordination charges added?</li>
                <li>
                  Is supervision handled by a local person, and who pays for
                  it?
                </li>
                <li>How many site visits are included?</li>
                <li>Who manages local vendors and deliveries?</li>
                <li>How are repairs handled after handover?</li>
              </ul>
              <p>
                Distance is acceptable when fees, reporting and support are
                clear.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. What does an interior designer charge in Haldwani?
                  </h3>
                  <p className="mt-2 leading-7">
                    Fees commonly range from about ₹50 to ₹250 per sq ft for
                    design, or roughly 8 to 15 percent of project cost.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. Is the design fee separate from execution cost?
                  </h3>
                  <p className="mt-2 leading-7">
                    Often yes, unless the studio offers a turnkey rate with
                    the fee built in, so ask for the breakup.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. What does the design fee include?
                  </h3>
                  <p className="mt-2 leading-7">
                    Concepts, layouts, drawings, material schedules and, in
                    some packages, supervision and revisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. Can I pay only for design and execute myself?
                  </h3>
                  <p className="mt-2 leading-7">
                    Yes, but you must manage vendors, quality and delays, so
                    clear drawings become essential.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. How many revisions are included?
                  </h3>
                  <p className="mt-2 leading-7">
                    It varies, so fix the number in writing and ask how extra
                    rounds are charged.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    6. Why do designer quotes differ so much?
                  </h3>
                  <p className="mt-2 leading-7">
                    Scope, material grades, supervision level, fee model and
                    exclusions all change the total.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    7. How much advance should I pay?
                  </h3>
                  <p className="mt-2 leading-7">
                    Keep it small and pay by stages after verified progress.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    8. How much reserve should I keep?
                  </h3>
                  <p className="mt-2 leading-7">
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
