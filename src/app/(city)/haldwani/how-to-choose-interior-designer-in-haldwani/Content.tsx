
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <article className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                How to Choose an Interior Designer in Haldwani: A Three-Meeting
                Question Guide
              </h1>
              <p>
                Most owners pick a designer after one friendly chat and a
                portfolio scroll. A better way is to use three short meetings,
                each with a different purpose, and to ask questions that reveal
                how a studio really works. Good answers are specific and calm,
                while weak ones are vague or pushy. This guide gives you the
                questions, the answers to look for and the warning signs for
                each meeting.
              </p>
              <p className="rounded-lg border-l-4 border-gray-300 bg-gray-50 p-4 text-sm italic text-gray-600">
                Note: all figures are approximate and change with design,
                material and season. Confirm everything through written
                quotations.
              </p>
            </header>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                1. Why Meetings Work Better Than Brochures
              </h2>
              <p>Brochures show the best moments. Meetings show habits.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>You hear how the designer explains problems.</li>
                <li>You see whether questions are welcomed or avoided.</li>
                <li>You notice who actually attends and who is missing.</li>
                <li>You compare several studios on the same questions.</li>
                <li>You build a written record of promises.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                2. Prepare One Page Before Meeting Anyone
              </h2>
              <p>Give every designer the same starting information.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Plot or flat size and floor plan, if available.</li>
                <li>Rooms to be done and rooms to leave.</li>
                <li>Total budget range and payment comfort.</li>
                <li>Move-in or deadline date.</li>
                <li>Style references, three or four pictures.</li>
                <li>Family needs, such as elderly members, kids or home office.</li>
                <li>Vastu preferences, if any.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                3. The Three-Meeting Plan
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Meeting one:</strong> fit and process, at the studio
                  or by video.
                </li>
                <li>
                  <strong>Meeting two:</strong> proof, at a finished or running
                  site.
                </li>
                <li>
                  <strong>Meeting three:</strong> numbers and terms, with the
                  written quotation.
                </li>
              </ul>
              <p>
                Do not skip to meeting three early, even if the price looks
                attractive.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Meeting One Goal: Fit and Process
              </h2>
              <p>
                The first meeting tests whether the designer understands you
                and works in an organised way.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Do they ask about your routine before suggesting styles?</li>
                <li>Do they explain their steps from brief to handover?</li>
                <li>
                  Do they mention drawings and schedules without being asked?
                </li>
                <li>Do they speak plainly or hide behind jargon?</li>
                <li>Do they respect your budget limit?</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Meeting One Questions
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Who will design my project and who will supervise it?</li>
                <li>How many projects are you handling now?</li>
                <li>What documents will I receive before work starts?</li>
                <li>How do you handle changes after approval?</li>
                <li>
                  Which services do you offer: design only, execution or both?
                </li>
                <li>How long does a project like mine usually take?</li>
                <li>Can you share two addresses of finished homes?</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                6. How to Read the Answers
              </h2>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Strong Answers
                </h3>
                <p>
                  Names of roles, a step-by-step process, mention of drawings,
                  schedules and written approvals.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Weak Answers
                </h3>
                <p>
                  &quot;We handle everything&quot;, &quot;don&apos;t worry
                  about it&quot; or promises with no steps.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Warning Answers
                </h3>
                <p>
                  Refusal to share addresses, pressure to decide quickly or
                  blame on earlier clients.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Meeting Two Goal: Proof on Site
              </h2>
              <p>The second meeting tests quality with your own eyes.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Visit one finished project and one running site.</li>
                <li>
                  Go with the designer, then speak to the owner alone for a few
                  minutes.
                </li>
                <li>Take photos for later comparison.</li>
                <li>Ask what went wrong and how it was fixed.</li>
                <li>
                  Notice how the team behaves with workers and neighbours.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Meeting Two Questions on Site
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Which part of this project was most difficult?</li>
                <li>Did the final cost match the first quote?</li>
                <li>Was the timeline met, and if not, why?</li>
                <li>
                  Which materials were used in the kitchen and wardrobes?
                </li>
                <li>How has the work looked after one monsoon?</li>
                <li>What repairs were needed and how fast were they done?</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                9. What to Check Physically
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Drawers and doors close smoothly.</li>
                <li>Edges and joints are clean.</li>
                <li>
                  Paint lines are straight near ceilings and switchboards.
                </li>
                <li>Wardrobe backs and corners are dry.</li>
                <li>Kitchen units show no swelling near the sink.</li>
                <li>Lighting spreads evenly without harsh patches.</li>
                <li>Hardware feels solid and quiet.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Approximate Cost Reference
              </h2>
              <p>
                Know market ranges before meeting three. These figures are
                indicative.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Basic interiors:</strong> roughly ₹900 to ₹1,400 per
                  sq ft.
                </li>
                <li>
                  <strong>Mid-range interiors:</strong> roughly ₹1,400 to
                  ₹2,200 per sq ft.
                </li>
                <li>
                  <strong>Premium interiors:</strong> ₹2,500 per sq ft and
                  above.
                </li>
                <li>
                  <strong>Modular kitchen:</strong> priced per running foot, by
                  material and hardware.
                </li>
              </ul>
              <p>
                <strong>Example:</strong> a 1,000 sq ft flat at ₹1,600 per sq
                ft would cost near ₹16 lakh, excluding appliances and loose
                furniture.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                11. Meeting Three Goal: Numbers and Terms
              </h2>
              <p>
                The third meeting tests honesty in pricing and clarity in
                paperwork.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Bring the quotations from all shortlisted studios.</li>
                <li>Ask each designer to explain every line.</li>
                <li>
                  Compare board grades, hardware brands and exclusions.
                </li>
                <li>Ask what is not included.</li>
                <li>Review payment stages and timeline.</li>
                <li>Read the draft agreement before any payment.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Meeting Three Questions
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Is this a room-wise quotation with sizes and rates?</li>
                <li>Which board and hardware brands are included?</li>
                <li>
                  What is excluded, such as civil, electrical or appliances?
                </li>
                <li>How are extra works priced and approved?</li>
                <li>What is the warranty and who handles complaints?</li>
                <li>What happens if there is a delay on your side?</li>
                <li>How are payments linked to stages?</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Reading the Quotation
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Room-wise breakup with sizes.</li>
                <li>Unit rate and quantity for each item.</li>
                <li>Brand and grade of key materials.</li>
                <li>Inclusions and exclusions written plainly.</li>
                <li>Taxes and extra charges visible.</li>
                <li>Payment stages listed.</li>
                <li>Validity period stated.</li>
              </ul>
              <p>
                A single lump sum with no breakup is a reason to pause.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Agreement Points to Confirm
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Room-wise scope of work.</li>
                <li>Total value or rate per sq ft.</li>
                <li>Material brands and grades.</li>
                <li>Stage-wise payment milestones.</li>
                <li>Start and completion dates.</li>
                <li>Penalty for unjustified delay.</li>
                <li>Warranty period and coverage.</li>
                <li>Pricing method for changes.</li>
                <li>Dispute resolution method.</li>
              </ul>
              <p>
                <strong>Payment advice:</strong> link instalments to completed
                stages and avoid heavy advances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Questions Specific to Haldwani
              </h2>
              <p>Local weather and supply affect results.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Which boards do you use near kitchens and bathrooms for
                  humidity?
                </li>
                <li>How will you protect wardrobes during the monsoon?</li>
                <li>How do you plan ventilation in closed storage?</li>
                <li>What lighting suits cool, cloudy evenings?</li>
                <li>How do you handle delivery on narrow or hilly roads?</li>
                <li>Who is available locally for repairs?</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                16. Meeting Scenarios by Owner Type
              </h2>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  First-Time Owner
                </h3>
                <p>
                  Ask for simple explanations and sample documents. Prefer
                  studios that guide patiently.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Working Couple
                </h3>
                <p>
                  Ask about weekly photo updates and a single contact person.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Joint Family
                </h3>
                <p>
                  Ask how the studio balances different needs and manages
                  approvals.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Owner Living Outside Haldwani
                </h3>
                <p>
                  Ask about local supervision, remote reporting and payment tied
                  to proof.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Shop or Clinic Owner
                </h3>
                <p>
                  Ask about phased work, night shifts and delay penalties.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Hidden Costs to Raise in Any Meeting
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

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Red Flags Across All Three Meetings
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Different people attending each meeting with no continuity.
                </li>
                <li>Reluctance to show finished projects.</li>
                <li>Heavy advance demanded early.</li>
                <li>Rates far below every competitor.</li>
                <li>No written quotation or drawings.</li>
                <li>Vague answers on timeline and warranty.</li>
                <li>Pressure to sign immediately.</li>
                <li>
                  Photos on the website that the team cannot explain.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                19. Decide with a Simple Record
              </h2>
              <p>After each meeting, write short notes.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Clarity of answers.</li>
                <li>Honesty about limits.</li>
                <li>Quality seen on site.</li>
                <li>Fairness of the quotation.</li>
                <li>Comfort in working together.</li>
                <li>Open concerns to resolve before signing.</li>
              </ul>
              <p>
                Choose the studio with the clearest answers and the fewest
                unresolved concerns.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                20. Meeting a Studio Based in Another City
              </h2>
              <p>
                Some studios serve several towns. Space Build, an interior
                design and Vastu studio based in Moradabad, is one example (see{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline underline-offset-2"
                >
                  https://www.spacebuild.co.in/
                </a>
                ). If you meet an outside studio for Haldwani, add these
                questions.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Is a site supervisor available near you?</li>
                <li>How often will the team visit?</li>
                <li>Who manages local vendors and deliveries?</li>
                <li>Are there travel or coordination charges?</li>
                <li>How are repairs handled after handover?</li>
                <li>
                  Can meeting two take place at a nearby finished project?
                </li>
              </ul>
              <p>Distance is acceptable when systems and reporting are clear.</p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. How many meetings should I have before choosing?
                  </h3>
                  <p>
                    Three: one for fit and process, one for proof on site, and
                    one for numbers and terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. What should I bring to the first meeting?
                  </h3>
                  <p>
                    A one-page brief with rooms, budget, dates, style pictures
                    and your floor plan.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. What is the most important question to ask?
                  </h3>
                  <p>
                    Who will design my project, and who will supervise it
                    daily.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. What is the interior cost per sq ft?
                  </h3>
                  <p>
                    Basic work starts near ₹900 per sq ft, mid-range runs about
                    ₹1,400 to ₹2,200 and premium goes above ₹2,500.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. Why visit a site with the designer?
                  </h3>
                  <p>
                    It shows finish quality, team behaviour and how the studio
                    handles real problems.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    6. How many quotations should I compare?
                  </h3>
                  <p>
                    Collect at least three, with identical scope and matching
                    material grades.
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