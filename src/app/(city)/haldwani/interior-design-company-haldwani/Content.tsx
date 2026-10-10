
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <article className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Interior Design Company in Haldwani: Look Behind the Showroom
              </h1>
              <p>
                When you meet an interior design company in Haldwani, you see
                the front: a designer, a portfolio and a quotation. The home
                you receive, however, is shaped by teams you never meet:
                estimators, buyers, workshop crews, site supervisors and
                accounts staff.
              </p>
              <p>
                Think of a film unit. The audience sees the actors, but the
                movie depends on the camera crew, editors and production
                managers. An interior company works the same way. This guide
                opens each department, explains what it should do and shows
                what to ask so you can judge the real organisation. Small firms
                combine roles, yet every job still needs someone responsible.
                Each section opens with a short idea, followed by points you can
                use.
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                1. Company, Studio or Freelancer
              </h2>
              <p>
                The structure behind a name changes your experience. Know the
                differences before choosing.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Freelancer: personal attention, limited capacity, little backup.</li>
                <li>Small studio: shared roles with some specialisation.</li>
                <li>Mid-size company: defined teams, written systems, wider capacity.</li>
                <li>Large firm: formal procedures, but possibly less personal attention.</li>
              </ul>
              <p>
                Match the structure to your project size and your appetite for
                supervision.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                2. The Core Functions Inside Every Company
              </h2>
              <p>
                Whatever the size, the same jobs must be done. Learn the list,
                then ask who handles each.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Design: layouts, drawings and material selection.</li>
                <li>Estimating: quantities and cost.</li>
                <li>Procurement: buying and tracking materials.</li>
                <li>Production: carpentry and fabrication.</li>
                <li>Site execution: installation and finishing.</li>
                <li>Quality control: checks at defined points.</li>
                <li>Client coordination: communication and changes.</li>
                <li>Accounts: bills, receipts and payments.</li>
                <li>After-sales: warranty and repairs.</li>
              </ul>
              <p>
                If one person claims to do everything, ask how work continues
                when they are away.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                3. The Design Team
              </h2>
              <p>
                Designers turn your brief into drawings. Their quality decides
                how well the home suits your life.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Ask who will lead your project and their experience.</li>
                <li>Look for structured briefs, not only mood boards.</li>
                <li>Expect dimensioned layouts, elevations and point drawings.</li>
                <li>Check whether junior designers are supervised by seniors.</li>
                <li>Ask how many projects each designer handles at once.</li>
                <li>See whether the same designer follows the project to site.</li>
              </ul>
              <p>
                Meet the person who will actually design your home, not only the
                salesperson.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Estimating: Where Your Price Is Born
              </h2>
              <p>
                Estimators convert drawings into quantities and money. Accuracy
                here protects your budget.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Measures boards, laminates, hardware and finishes from drawings.</li>
                <li>Adds wastage and installation allowances.</li>
                <li>Applies current material and labour rates.</li>
                <li>Lists exclusions and assumptions.</li>
                <li>Updates figures when designs change.</li>
                <li>Prepares an item-wise quotation.</li>
              </ul>
              <p>
                Ask who prepared your quotation and whether they visited your
                site. Prices change with market conditions, so insist on a
                current written quotation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Procurement: The Buying Desk
              </h2>
              <p>
                Materials decide durability. Procurement is where quality is
                protected or traded away.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Chooses suppliers on quality, price and reliability.</li>
                <li>Orders boards, hardware and finishes in planned lots.</li>
                <li>Checks deliveries against approved samples.</li>
                <li>Rejects damaged or substandard material.</li>
                <li>Tracks brands, batches and delivery dates.</li>
                <li>Stores materials safely and dry.</li>
              </ul>
              <p>
                Ask how the company confirms that delivered hardware and boards
                match the quotation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                6. Production: In-House Workshop or Outsourced Carpentry
              </h2>
              <p>
                Where furniture is made affects quality control and delivery.
                Both models can work if managed well.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>In-house workshop: easier supervision and faster fixes.</li>
                <li>Outsourced carpenters: flexible capacity, but quality depends on management.</li>
                <li>Hybrid model: core work in-house, specialist items outside.</li>
                <li>Ask to visit the workshop or see work in progress.</li>
                <li>Check machinery, dust control and finishing area.</li>
                <li>Ask who inspects pieces before delivery.</li>
              </ul>
              <p>
                A company that welcomes workshop visits usually has little to
                hide.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Site Execution and Supervision
              </h2>
              <p>
                Installation and finishing happen in your home. Daily
                supervision turns drawings into correct work.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>A named supervisor or project manager for your site.</li>
                <li>Skilled carpenters, electricians, painters and polishers.</li>
                <li>Protection of floors and furniture during work.</li>
                <li>Daily diaries recording work and instructions.</li>
                <li>Coordination between trades to avoid clashes.</li>
                <li>Clear working hours and cleaning routines.</li>
              </ul>
              <p>
                Meet the supervisor before signing. Their competence matters
                more than the salesperson&apos;s charm.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Quality Control: The Checking Habit
              </h2>
              <p>
                Quality should be planned, not hoped for. Look for checkpoints
                before problems become visible.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Verification of measurements before production.</li>
                <li>Inspection of boards, edges and hardware on arrival.</li>
                <li>Alignment checks during installation.</li>
                <li>Moisture and surface checks before painting.</li>
                <li>Testing of lights, switches and fittings.</li>
                <li>A written snag list at handover.</li>
              </ul>
              <p>
                Ask for a blank inspection checklist. Genuine systems exist even
                when old projects are private.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                9. Client Coordination: Your Single Point of Contact
              </h2>
              <p>
                Many clients judge a company by how easy it is to reach.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>A named coordinator who answers calls and messages.</li>
                <li>Written confirmation of changes and their cost.</li>
                <li>Weekly updates with photographs.</li>
                <li>Honest warnings about delays.</li>
                <li>A clear route for complaints.</li>
                <li>Scheduled meetings at key milestones.</li>
              </ul>
              <p>
                Test responsiveness before you sign. Habits shown early usually
                continue.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Accounts and Billing
              </h2>
              <p>
                Clear records keep disputes small. Money handling shows the
                company&apos;s maturity.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Itemised quotations and running bills.</li>
                <li>Receipts for every payment.</li>
                <li>Separate records for each project.</li>
                <li>Clear treatment of advances and deductions.</li>
                <li>Timely payment to vendors and workers.</li>
                <li>Statements you can check.</li>
              </ul>
              <p>
                Ask how a milestone bill is prepared and what documents support
                it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                11. After-Sales and Warranty
              </h2>
              <p>
                Real quality continues after handover. After-sales shows
                whether the company values relationships.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Written warranty for carpentry, hardware and finishes.</li>
                <li>A named contact for repairs.</li>
                <li>Reasonable response times for defects.</li>
                <li>Care instructions for wood, laminates and fabrics.</li>
                <li>Clear terms on what warranty covers and excludes.</li>
                <li>Willingness to help with future additions.</li>
              </ul>
              <p>Ask previous clients how repairs were handled.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Legal and Business Identity Checks
              </h2>
              <p>
                A company should be traceable if something goes wrong. Verify
                identity without being intrusive.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Registered business name and office address.</li>
                <li>Business and tax registrations, where applicable.</li>
                <li>Names of owners or directors.</li>
                <li>Matching names on quotations, receipts and agreements.</li>
                <li>A fixed office you can visit.</li>
                <li>A working phone number and business email.</li>
              </ul>
              <p>
                Confirm current local registration and compliance requirements
                with the relevant authority, since rules can change.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Questions That Open Each Door
              </h2>
              <p>
                Specific questions show how a company really runs. Ask each
                candidate the same set.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Who will design my home, and how many projects do they handle?</li>
                <li>Who prepared my estimate, and did they visit the site?</li>
                <li>Who buys materials, and how are deliveries checked?</li>
                <li>Where is my furniture made, and can I visit?</li>
                <li>Who supervises my site every day?</li>
                <li>How is quality checked before handover?</li>
                <li>Who do I call when something breaks?</li>
              </ul>
              <p>
                Names and processes in the answers are better than general
                reassurance.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                14. How Company Size Changes the Answers
              </h2>
              <p>Size affects capacity, systems and personal attention.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Small teams: close contact, but check backup for illness and delays.</li>
                <li>Mid-size: balance of systems and attention.</li>
                <li>Large firms: strong procedures, but ask who actually handles your job.</li>
                <li>Rapid growth: check that quality and supervision keep pace.</li>
              </ul>
              <p>
                Ask how many projects the company runs at present and how many
                supervisors cover them.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Haldwani Conditions Across All Functions
              </h2>
              <p>
                The foothill climate and local logistics affect every
                department.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Design that handles humid monsoon, cold winters and warm summers.</li>
                <li>Estimates that include delivery to awkward or sloping access.</li>
                <li>Procurement that stores boards dry.</li>
                <li>Workshops that control humidity during finishing.</li>
                <li>Site schedules that respect rain, fog and festival leave.</li>
                <li>After-sales that check for dampness and swelling after monsoon.</li>
              </ul>
              <p>
                Ask for examples from earlier local homes, not general promises.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Verifying the Company Behind the Claims
              </h2>
              <p>Evidence converts descriptions into confidence. Use several checks.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Visit the office and see where records are kept.</li>
                <li>Visit the workshop, if one exists.</li>
                <li>Visit one running site and one completed home.</li>
                <li>Meet the designer and supervisor assigned to you.</li>
                <li>Call past clients, including some you choose yourself.</li>
                <li>Compare at least three itemised quotations.</li>
              </ul>
              <p>
                Treat a company with no visitable office, workshop or projects
                as a reason for caution.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Contract Terms That Reflect a Real Organisation
              </h2>
              <p>
                A company with working systems welcomes precise terms, because
                it can meet them.
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
                18. Payment Habits That Keep Both Sides Honest
              </h2>
              <p>How you pay shapes how the company behaves.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Pay only a modest advance after signing.</li>
                <li>Release instalments after each inspected milestone.</li>
                <li>Pay by bank transfer and keep every receipt.</li>
                <li>Record extra work and its cost before execution.</li>
                <li>Hold back a small final amount until the snag list is cleared.</li>
                <li>Never pay ahead of completed work.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                19. Red Flags of a Hollow Organisation
              </h2>
              <p>Several of these together should stop the process.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The owner claims to handle every function personally.</li>
                <li>No named designer or supervisor for your project.</li>
                <li>Quotation delivered without a site visit.</li>
                <li>No office, workshop or completed homes to visit.</li>
                <li>No written agreement or warranty.</li>
                <li>Pressure to pay large cash advances.</li>
                <li>Rates far below every other offer without explanation.</li>
                <li>Refusal to share references.</li>
              </ul>
              <p>
                Walking away before signing costs nothing, while leaving midway
                can cost a fortune.
              </p>
            </section>

            <section className="space-y-4">
              <p>
                An interior design company in Haldwani is more than a name and
                a portfolio. It is a set of functions: design, estimating,
                buying, production, installation, checking, billing and
                after-sales. Ask who performs each one, look for evidence in
                documents and sites and write the answers into a precise
                contract. A genuine company will explain its inner workings
                with pride, because organised work is the surest path to a
                well-finished home.
              </p>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h2 className="text-xl font-bold text-gray-900">
                  Your Next Step
                </h2>
                <p className="mt-2">
                  Copy the nine functions into a sheet, ask three companies who
                  handles each and visit one office or workshop for each this
                  week.
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Add your company name, registration details, phone number,
                  full address, Haldwani service details and Google Maps link
                  here.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. What does an interior design company do?
                  </h3>
                  <p>
                    It designs, estimates, buys materials, produces furniture,
                    installs, checks quality, manages billing and provides
                    after-sales support.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. How is a company different from a freelancer?
                  </h3>
                  <p>
                    Companies offer structured teams and wider capacity, while
                    freelancers offer personal attention but limited backup.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. Should I visit the workshop?
                  </h3>
                  <p>
                    Yes, if the company has one. It shows machinery, finishing
                    quality and how pieces are inspected.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. Who should prepare my quotation?
                  </h3>
                  <p>
                    An estimator who has seen your drawings and site, using
                    named materials and current rates.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. What identity checks are sensible?
                  </h3>
                  <p>
                    Registered name, address, tax registrations where
                    applicable, owner names and matching documents.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    6. What after-sales support should I expect?
                  </h3>
                  <p>
                    Written warranty, a named repair contact, clear coverage
                    terms and care instructions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    7. How should I pay the company?
                  </h3>
                  <p>
                    Give a small advance after signing, then pay by milestone
                    through bank transfer and keep receipts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    8. When should I avoid a company?
                  </h3>
                  <p>
                    Avoid those with no visitable office or projects, no written
                    terms, pressure for cash advances or hidden references.
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
