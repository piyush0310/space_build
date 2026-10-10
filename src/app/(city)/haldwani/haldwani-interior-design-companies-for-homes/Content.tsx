
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  const comparisonCriteria = [
    "Understanding of brief and family needs",
    "Layout functionality and storage",
    "Material brands, grades and specifications",
    "Quotation clarity and completeness",
    "Timeline and milestone planning",
    "Designer and supervisor assignment",
    "Warranty and after-sales support",
    "References and completed projects",
    "Communication and responsiveness",
    "Overall value for money",
  ];

  const faqs = [
    {
      question: "What is an identical-brief comparison?",
      answer:
        "You give every company the same written brief and ask for the same response, so differences become clear.",
    },
    {
      question: "What should my brief include?",
      answer:
        "Home type and size, family needs, storage problems, cooking style, Vastu wishes, budget and move-in date.",
    },
    {
      question: "How many companies should I compare?",
      answer:
        "Three or four give a fair view without causing confusion.",
    },
    {
      question: "Why insist on a site visit?",
      answer:
        "Measurements, damp, access and wiring affect cost and design, so quotes without a visit are guesses.",
    },
    {
      question: "How do I compare quotations fairly?",
      answer:
        "Align scope, brands and exclusions first, then compare totals and ask about any large gaps.",
    },
    {
      question: "What proof should I verify?",
      answer:
        "Visit completed homes, inspect joinery, ask owners about the first monsoon and meet the supervisor.",
    },
    {
      question: "How should I pay the winning company?",
      answer:
        "Give a small advance after signing, then pay by milestone through bank transfer and keep receipts.",
    },
    {
      question: "When should I remove a company?",
      answer:
        "Remove those who skip site visits, ignore the brief, hide completed homes or demand large cash advances.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <article className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Haldwani Interior Design Companies for Homes: Give Everyone
                the Same Exam Paper
              </h1>

              <p>
                Most homeowners meet several Haldwani interior design
                companies for homes and hear several different pitches. One
                talks style, another talks price, a third talks speed. Because
                each conversation differs, comparison becomes impossible.
              </p>

              <p>
                Think of a taste test. To judge three cooks fairly, you ask
                each to prepare the same dish. This guide shows how to do that
                with interior companies: write one brief, request the same
                response from each, then compare the answers side by side.
                Each section opens with a short idea, followed by points you
                can use.
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                1. Why an Identical Brief Works
              </h2>
              <p>
                Fair comparison needs equal inputs. Otherwise you compare
                enthusiasm, not capability.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Every company solves the same problem.</li>
                <li>Differences in quality show up clearly.</li>
                <li>Sales charm matters less than thinking.</li>
                <li>Quotations become comparable.</li>
                <li>
                  Your family sees the same material and decides together.
                </li>
                <li>You learn how each company handles questions.</li>
              </ul>
              <p>
                A company that welcomes this test is usually confident.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                2. Step One: Write a One-Page Home Brief
              </h2>
              <p>
                A clear brief is the foundation of the whole exercise. Keep
                it short, specific and honest.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Home type, size, floors and ownership status.</li>
                <li>Number of family members, ages and elder needs.</li>
                <li>Cooking style and kitchen expectations.</li>
                <li>
                  Storage pain points and seasonal items such as quilts.
                </li>
                <li>Work-from-home or study needs.</li>
                <li>Vastu preferences, if any.</li>
                <li>Budget ceiling and desired move-in date.</li>
                <li>Must-have items separated from optional ones.</li>
              </ul>
              <p>Attach a floor plan or measured sketch where possible.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Step Two: Define the Response You Want
              </h2>
              <p>
                Tell every company exactly what to return. This prevents
                vague proposals.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  A rough layout for kitchen, master bedroom and living area.
                </li>
                <li>A list of materials with brands and grades.</li>
                <li>An itemised quotation against the same scope.</li>
                <li>A timeline with milestones and a weather allowance.</li>
                <li>A statement of warranty and after-sales terms.</li>
                <li>Names of the designer and supervisor assigned.</li>
                <li>Two sample projects with similar home types.</li>
              </ul>
              <p>
                Set one deadline for everyone and note who meets it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Step Three: Shortlist Three or Four Companies
              </h2>
              <p>
                Too many companies create confusion, while too few limit your
                view. A small, varied list works best.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Neighbours who completed interiors recently.</li>
                <li>Local carpenters and material dealers.</li>
                <li>Maps and business listings with detailed feedback.</li>
                <li>Social pages showing real projects.</li>
                <li>
                  Architects and builders who see interiors after
                  construction.
                </li>
                <li>Families in your housing society.</li>
              </ul>
              <p>
                Record the source beside each name. Names appearing from two
                independent sources start with an advantage.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Step Four: Hold Identical Briefing Meetings
              </h2>
              <p>
                Use the same agenda, questions and time limit with every
                company.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Share the brief in advance.</li>
                <li>
                  Ask them to walk through the response they will deliver.
                </li>
                <li>Ask who will design and supervise your project.</li>
                <li>Ask what could go wrong in your home.</li>
                <li>Ask what they would change in your budget.</li>
                <li>Take notes on questions they ask you.</li>
              </ul>
              <p>
                A company that listens more than it pitches is thinking about
                your home, not its own sales.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                6. Step Five: Request a Site Visit From Each Company
              </h2>
              <p>
                A quotation without seeing the home is a guess. Insist on a
                visit before any price arrives.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Measurements taken on site.</li>
                <li>
                  Observation of existing walls, damp, wiring and plumbing.
                </li>
                <li>
                  Discussion of access for deliveries and society rules.
                </li>
                <li>Questions about light, ventilation and noise.</li>
                <li>Photographs recorded for reference.</li>
                <li>
                  Clear statement of what they will and will not change.
                </li>
              </ul>
              <p>Note how carefully each visitor inspects the home.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Step Six: Judge Timeliness and Care in the Replies
              </h2>
              <p>
                How companies respond to a deadline predicts how they will
                handle project milestones.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Did they deliver on the promised date?</li>
                <li>Did they answer your follow-up questions quickly?</li>
                <li>Did they present documents neatly and clearly?</li>
                <li>Did they explain assumptions and exclusions?</li>
                <li>Did they warn you about risks in your brief?</li>
                <li>Did they offer practical alternatives for your budget?</li>
              </ul>
              <p>
                Late, careless replies before signing rarely improve later.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                8. The Side-by-Side Comparison Sheet
              </h2>
              <p>
                Copy this table into a notebook or spreadsheet. Fill one
                column per company.
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="border-b p-3">Comparison criterion</th>
                      <th className="border-b p-3">Company A</th>
                      <th className="border-b p-3">Company B</th>
                      <th className="border-b p-3">Company C</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonCriteria.map((criterion) => (
                      <tr key={criterion} className="odd:bg-white even:bg-gray-50">
                        <td className="border-b p-3 font-medium">
                          {criterion}
                        </td>
                        <td className="border-b p-3">Score / notes</td>
                        <td className="border-b p-3">Score / notes</td>
                        <td className="border-b p-3">Score / notes</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500">
                Tip: add a fourth company column if needed, and record evidence
                beside each score instead of relying on memory.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                9. Reading the Layout Responses
              </h2>
              <p>Layouts reveal how a company thinks about daily life.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Does the plan improve movement between rooms?</li>
                <li>Is there enough storage for your real belongings?</li>
                <li>Are windows, light and ventilation respected?</li>
                <li>Does the kitchen suit your cooking habits?</li>
                <li>Are elders, children and guests considered?</li>
                <li>
                  Are Vastu wishes addressed without harming function?
                </li>
              </ul>
              <p>
                Reward companies that explain the reasoning behind each
                decision.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Reading the Material Lists
              </h2>
              <p>
                Materials decide how your home ages, especially in humid
                foothill conditions.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Brands and grades should be named.</li>
                <li>
                  Moisture-resistant boards belong in kitchens, bathrooms and
                  ground-floor rooms.
                </li>
                <li>Edges should be sealed properly.</li>
                <li>Hardware quality should be specified.</li>
                <li>Paints should be washable and breathable.</li>
                <li>Samples should be offered before approval.</li>
              </ul>
              <p>
                Phrases like “premium quality” without names cannot be
                enforced.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                11. Normalising Quotations Before Comparing
              </h2>
              <p>
                Different scopes make totals meaningless. Align everything
                before judging price.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Confirm the same rooms and items are included.</li>
                <li>Match material brands and finishes.</li>
                <li>
                  Check whether civil, electrical and plumbing work are
                  included.
                </li>
                <li>Compare transport, installation and polishing charges.</li>
                <li>Note exclusions in each quotation.</li>
                <li>
                  Ask each company to revise its quotation to your common
                  scope.
                </li>
              </ul>
              <p>
                Prices change with market conditions, so insist on current
                written quotations with validity dates.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Spotting Gaps and Unusual Gaps in Price
              </h2>
              <p>
                When one quotation differs sharply, investigate before
                celebrating or rejecting.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Find the row where the difference begins.</li>
                <li>
                  Ask what is included in the lower or higher price.
                </li>
                <li>Look for substituted materials or missing items.</li>
                <li>Check whether extra work is priced separately.</li>
                <li>Ask how changes will be handled.</li>
                <li>
                  Be wary of very low totals that avoid detail.
                </li>
              </ul>
              <p>The explanation matters more than the number.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Scoring the Companies
              </h2>
              <p>
                Turn the table into scores. Weight the rows by what matters
                most to your family.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Give each row a score from one to five.</li>
                <li>
                  Assign weights, such as storage or warranty, based on your
                  priorities.
                </li>
                <li>Multiply scores by weights and add the results.</li>
                <li>Write one line of proof beside each score.</li>
                <li>
                  Remove any company that triggers a red flag, whatever its
                  total.
                </li>
                <li>Discuss the final sheet with your family.</li>
              </ul>
              <p>Evidence beats charm every time.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Verify What Each Company Claims
              </h2>
              <p>Responses on paper still need real-world confirmation.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Visit at least one completed home from each company.</li>
                <li>Inspect joinery, hinges, paint and flooring.</li>
                <li>Look for warping, peeling and damp.</li>
                <li>
                  Ask owners how finishes aged after a monsoon.
                </li>
                <li>Visit the office or workshop, if there is one.</li>
                <li>Meet the supervisor who will handle your home.</li>
                <li>Call references you choose yourself.</li>
              </ul>
              <p>
                Treat a company with no visitable projects as a reason for
                caution.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Home-Specific Checks for Haldwani
              </h2>
              <p>Local conditions and household habits shape good choices.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Humid monsoon months affecting wood and walls.</li>
                <li>
                  Cold, foggy winters needing warm textures and storage for
                  quilts.
                </li>
                <li>Hot summers needing ventilation and shading.</li>
                <li>Delivery logistics for large boards and furniture.</li>
                <li>Seasonal labour gaps around festivals.</li>
                <li>
                  Safety for elders and children, such as non-slip floors and
                  secure fittings.
                </li>
              </ul>
              <p>
                Ask for examples from earlier local homes, not general
                promises.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Contract Terms That Lock In the Winning Response
              </h2>
              <p>
                Once you choose, write the response into the agreement.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Signed drawings and specifications attached.</li>
                <li>Named materials, brands and grades.</li>
                <li>Total price and milestone-based payments.</li>
                <li>Start date, completion date and delay terms.</li>
                <li>Warranty on carpentry, hardware and finishes.</li>
                <li>Rules for changes and extra work.</li>
                <li>Dispute-handling method and witness signatures.</li>
              </ul>
              <p>
                Read every clause slowly, preferably with a trusted adviser.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Payment Habits That Keep Both Sides Honest
              </h2>
              <p>How you pay shapes how the company behaves.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Pay only a modest advance after signing.</li>
                <li>Release instalments after each inspected milestone.</li>
                <li>Pay by bank transfer and keep every receipt.</li>
                <li>
                  Record extra work and its cost before execution.
                </li>
                <li>
                  Hold back a small final amount until the snag list is
                  cleared.
                </li>
                <li>Never pay ahead of completed work.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Red Flags During the Comparison
              </h2>
              <p>Several of these together should remove a company.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Refusal to follow the same brief or deadline.</li>
                <li>Quotation delivered without a site visit.</li>
                <li>No named designer or supervisor.</li>
                <li>No completed homes to visit.</li>
                <li>Pressure to pay large cash advances.</li>
                <li>
                  Rates far below every other offer without explanation.
                </li>
                <li>Vague answers about brands, warranty or exclusions.</li>
              </ul>
              <p>
                Walking away before signing costs nothing, while leaving
                midway can cost a fortune.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                19. Handover and Aftercare
              </h2>
              <p>A good company stays reachable after the keys change hands.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Walk through every room with a written snag list.</li>
                <li>Test hinges, drawers, switches and lights.</li>
                <li>
                  Collect drawings, bills, warranty cards and care
                  instructions.
                </li>
                <li>Confirm a named contact for repairs.</li>
                <li>Keep rooms ventilated during humid months.</li>
                <li>
                  Report defects in writing with dated photographs.
                </li>
              </ul>
            </section>

            <section className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Choose With Evidence, Not Guesswork
              </h2>
              <p>
                Choosing among Haldwani interior design companies for homes
                becomes simple when everyone answers the same brief. Write
                the brief, define the response, hold identical meetings,
                align quotations, fill the comparison sheet, verify claims
                in person and protect yourself with a precise contract and
                staged payments. A genuine company will welcome the exercise,
                because fair comparison rewards honest work.
              </p>
              <p>
                <strong>Next step:</strong> write your one-page brief this
                week and send it with the response checklist to three
                companies.
              </p>
              <p className="text-sm text-gray-600">
                Add your company name, phone number, full address, Haldwani
                service details and Google Maps link here.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
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
