import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <div className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Construction Company Reviews in Kashipur: How to Read, Verify
                and Use Feedback
              </h1>

              <p>
                Reviews are the first thing most owners read, yet few know how
                to use them. A score of 4.5 can hide serious problems, while a
                few angry comments may come from a single misunderstanding.
                The skill lies in sorting feedback by type, checking it
                against real sites and noticing what the company does in
                reply. This guide gives you a practical method to turn
                scattered opinions into a safe decision.
              </p>

              <p className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
                <strong>Note:</strong> This article gives general guidance and
                does not rate or endorse any firm. Rates are approximate and
                must be confirmed in writing.
              </p>
            </div>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                1. What Reviews Can and Cannot Tell You
              </h2>
              <p>Reviews are signals, not proof.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>They show how clients felt during and after the project</li>
                <li>They reveal repeated behaviour patterns</li>
                <li>They rarely measure structural strength</li>
                <li>They may leave out cost overruns in detail</li>
                <li>They depend on who chooses to write</li>
              </ul>
              <p>
                Use them to decide whom to investigate, not whom to hire.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                2. Build Your Own Review File
              </h2>
              <p>
                Do not trust memory. Keep a simple record for each company.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Company name and contact details</li>
                <li>Sources checked, such as map listings and social pages</li>
                <li>Number of reviews seen and their dates</li>
                <li>Main praise points</li>
                <li>Main complaint points</li>
                <li>Questions you want to ask the company</li>
                <li>Result of any site visit or reference call</li>
              </ul>
              <p>A written file makes comparison fair and calm.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Sort Feedback by Type
              </h2>
              <p>
                Not all praise or complaint carries equal weight. Place each
                comment under a heading.
              </p>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Quality of Work
                </h3>
                <p>Cracks, leakage, finish, alignment and strength.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Time and Delay
                </h3>
                <p>Promised date versus actual date.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Money and Billing
                </h3>
                <p>Quote accuracy, extra charges and advance demands.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  Communication
                </h3>
                <p>Response speed, clarity and attitude.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  After Handover
                </h3>
                <p>Repair response and warranty honour.</p>
              </div>

              <p>Count how many comments fall under each heading.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Why Complaint Type Matters More Than Count
              </h2>
              <p>
                One company may have three complaints about slow phone replies.
                Another may have three about leakage within one year. The
                numbers match, but the risk does not.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Communication complaints are annoying but fixable</li>
                <li>Delay complaints can raise loan and rent costs</li>
                <li>Billing complaints threaten your budget</li>
                <li>
                  Structural and leakage complaints threaten safety and value
                </li>
                <li>
                  Repeated after-handover complaints show weak support
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Read the Timeline of Reviews
              </h2>
              <p>Dates tell a story that stars hide.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Steady reviews across months suggest ongoing business</li>
                <li>A sudden burst of praise may be arranged</li>
                <li>
                  Old praise with recent complaints may signal falling
                  standards
                </li>
                <li>
                  Old complaints with recent praise may signal improvement
                </li>
                <li>Long gaps may mean few active projects</li>
              </ul>
              <p>Sort reviews by newest first, then scan backwards.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                6. The Average Rating Trap
              </h2>
              <p>A single number compresses too much information.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>A few extreme scores can lift or drop the average</li>
                <li>Small review counts make averages unstable</li>
                <li>Different platforms use different scoring habits</li>
                <li>Some clients rate only the sales experience</li>
                <li>Averages ignore the type of project reviewed</li>
              </ul>
              <p>
                Look at the spread of scores and the written details, not only
                the headline number.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Spotting Genuine Detail
              </h2>
              <p>Real clients usually mention specifics.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Type and approximate size of the building</li>
                <li>Stage where a problem occurred</li>
                <li>Names of roles, such as supervisor or engineer</li>
                <li>How the issue was resolved</li>
                <li>Small mixed feelings rather than pure praise</li>
                <li>Plain language instead of advertising phrases</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Signs of Doubtful Reviews
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Several comments with similar wording</li>
                <li>Profiles with only one review</li>
                <li>Praise with no project detail</li>
                <li>Many reviews posted within a few days</li>
                <li>Competitor-style attacks with no facts</li>
                <li>Reviews that repeat the company&apos;s slogan</li>
              </ul>
              <p>
                Doubtful reviews are not proof of fraud, but they deserve less
                weight.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                9. Judge the Company&apos;s Replies
              </h2>
              <p>
                How a company responds says as much as the review itself.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Calm, specific replies suggest a mature team</li>
                <li>Replies that offer to fix the issue offline are positive</li>
                <li>Blaming the client in public is a warning</li>
                <li>Copy-paste replies show low attention</li>
                <li>No replies at all may mean nobody is watching</li>
                <li>Updated reviews after a fix show real follow-through</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Reviews by Project Type
              </h2>
              <p>Match feedback to your own project.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Residential homes:</strong> finishing, privacy of
                  layout and communication
                </li>
                <li>
                  <strong>Shops and offices:</strong> deadlines and early
                  opening
                </li>
                <li>
                  <strong>Warehouses and sheds:</strong> structural strength
                  and heavy flooring
                </li>
                <li>
                  <strong>Renovation:</strong> cleanliness, dust control and
                  handling of old structures
                </li>
              </ul>
              <p>
                A glowing review for a shed tells you little about a family
                home.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                11. Common Review Themes and Their Meaning
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  &quot;Finished on time&quot; is useful only with dates
                </li>
                <li>
                  &quot;Very cooperative&quot; may refer to attitude, not
                  quality
                </li>
                <li>
                  &quot;Reasonable price&quot; needs a size and rate
                </li>
                <li>
                  &quot;No hidden charges&quot; is valuable, so ask what was
                  included
                </li>
                <li>
                  &quot;Still in touch after years&quot; strongly suggests real
                  support
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Review-to-Reality Check
              </h2>
              <p>Compare what you read with what you see.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Visit one finished project mentioned in reviews</li>
                <li>
                  Ask the owner whether the review matches their experience
                </li>
                <li>Look for the problems that reviewers described</li>
                <li>
                  Check whether the company&apos;s current sites look organised
                </li>
                <li>
                  Note whether workers and supervisors match descriptions
                </li>
              </ul>
              <p>If reality differs from the page, trust reality.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Questions to Ask Reviewers Directly
              </h2>
              <p>
                When you reach a past client, keep questions short and open.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>What did the company do best?</li>
                <li>What went wrong and how was it handled?</li>
                <li>Did the final cost match the first quote?</li>
                <li>How long after handover did you need repairs?</li>
                <li>Would you give them a larger project?</li>
              </ul>
              <p>The last question often brings the most honest answer.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Handling Negative Reviews Fairly
              </h2>
              <p>One bad review is not a verdict.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Read the whole story, not just the title</li>
                <li>Check whether the complaint is specific</li>
                <li>
                  See whether the company replied and resolved it
                </li>
                <li>Look for similar complaints elsewhere</li>
                <li>Ask the company about it directly in a meeting</li>
              </ul>
              <p>
                A company that explains openly is often safer than one that
                hides.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Approximate Rate Reference
              </h2>
              <p>
                Reviews that mention price are useful only against market
                ranges. These figures are indicative.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Labour-only work:</strong> roughly ₹250 to ₹450 per
                  sq ft
                </li>
                <li>
                  <strong>Grey structure with material:</strong> roughly ₹1,100
                  to ₹1,500 per sq ft
                </li>
                <li>
                  <strong>Standard turnkey:</strong> roughly ₹1,700 to ₹2,300
                  per sq ft
                </li>
                <li>
                  <strong>Premium turnkey:</strong> ₹2,500 per sq ft and above
                </li>
              </ul>
              <p>
                <strong>Example:</strong> a 1,000 sq ft home at ₹1,900 per sq
                ft would cost near ₹19 lakh, excluding land, furniture and
                approval fees.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Material Mentions in Reviews
              </h2>
              <p>Reviews that name materials deserve extra attention.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Cement:</strong> branded bags usually sell between
                  ₹350 and ₹450
                </li>
                <li>
                  <strong>TMT steel:</strong> price changes through the year
                </li>
                <li>
                  <strong>Bricks:</strong> clay and fly ash vary in strength
                  and cost
                </li>
                <li>
                  <strong>Sand and aggregate:</strong> transport distance
                  affects the rate
                </li>
                <li>
                  <strong>Tiles and fittings:</strong> widest gap between basic
                  and luxury
                </li>
              </ul>
              <p>
                <strong>Tip:</strong> when a review praises &quot;good
                material&quot;, ask which brands were used.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Turning Reviews into Contract Terms
              </h2>
              <p>Use what you learned to protect yourself on paper.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Add a delay penalty if delay complaints appeared</li>
                <li>List brand names if material complaints appeared</li>
                <li>Fix a rate and unit if billing complaints appeared</li>
                <li>Add a defect period if repair complaints appeared</li>
                <li>Name a contact person if communication complaints appeared</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Agreement Essentials
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Detailed scope of work</li>
                <li>Total value or rate per sq ft</li>
                <li>Material brands and grades</li>
                <li>Stage-wise payment milestones</li>
                <li>Start and completion dates</li>
                <li>Penalty for unjustified delay</li>
                <li>Defect liability period</li>
                <li>Pricing method for changes</li>
                <li>Dispute resolution method</li>
              </ul>
              <p>
                <strong>Payment advice:</strong> link instalments to completed
                stages and take written receipts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                19. Writing Your Own Review Later
              </h2>
              <p>Your honest feedback helps the next family.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Wait until handover and first monsoon are over</li>
                <li>Mention strengths and weaknesses</li>
                <li>
                  Include approximate area, timeline and cost accuracy
                </li>
                <li>Avoid abuse and personal attacks</li>
                <li>Update the review if issues are fixed</li>
                <li>Share photos only with permission of your site</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                20. Hidden Costs to Keep in Mind
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Map approval and authority fees</li>
                <li>Soil testing and structural drawings</li>
                <li>Temporary water and electricity connection</li>
                <li>Debris removal</li>
                <li>Water tank, borewell and septic tank</li>
                <li>Boundary wall and main gate</li>
                <li>Landscaping and outdoor lighting</li>
              </ul>
              <p>Keep eight to ten percent as a safety reserve.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                21. Why Local Word of Mouth Still Matters
              </h2>
              <p>
                In Kashipur, families, traders and dealers know each other, so
                offline opinion travels fast and carries weight. A company
                that treats clients badly rarely hides for long. Local firms
                also understand soil behaviour, drainage patterns, municipal
                procedures and dependable suppliers, and they remain reachable
                for repairs after handover.
              </p>
              <p>
                Construction company reviews in Kashipur work best as a
                starting map, not a final answer. Keep a written review file,
                sort feedback by type, read timelines and judge how the company
                replies. Confirm everything through site visits and calls to
                past clients, then turn lessons into clear contract terms.
                Careful reading of reviews, backed by real checking, protects
                your money and gives your project a safer start.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  1. Can I trust online reviews of construction companies?
                </h3>
                <p>
                  Use them as clues, then confirm through site visits and calls
                  to past clients.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  2. How many reviews are enough?
                </h3>
                <p>
                  A healthy number across different platforms and months
                  matters more than one high score.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  3. Which complaint is most serious?
                </h3>
                <p>
                  Repeated leakage, structural defects and hidden charges
                  deserve the most caution.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  4. How can I spot fake reviews?
                </h3>
                <p>
                  Look for similar wording, one-review profiles, no project
                  detail and sudden bursts of praise.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  5. Does a reply from the company matter?
                </h3>
                <p>
                  Yes. Calm, specific replies and real fixes show maturity,
                  while blaming clients is a warning.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  6. What is the usual turnkey rate per sq ft?
                </h3>
                <p>
                  Standard turnkey work generally falls between ₹1,700 and
                  ₹2,300 per sq ft.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  7. Should I write a review after my project?
                </h3>
                <p>
                  Yes, after handover and the first monsoon, with balanced and
                  factual details.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  8. How much reserve should I keep?
                </h3>
                <p>
                  Eight to ten percent for approvals, water tanks, debris
                  removal and price changes.
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