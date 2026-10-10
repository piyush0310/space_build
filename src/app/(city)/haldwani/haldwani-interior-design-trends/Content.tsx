
import LandingEnquiry from "@/components/LandingEnquiry";

const Content = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-8 lg:flex-row">
        <article className="w-full px-4 py-0 sm:px-8 lg:w-[60%]">
          <div className="space-y-8 text-gray-700">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Haldwani Interior Design Trends: What Is Popular and What Lasts
              </h1>
              <p className="leading-8">
                Interior trends move fast on social media, but a home in
                Haldwani faces real conditions: humidity, cool evenings, family
                routines and festival crowds. A trend that looks stunning in a
                photo can swell, fade or feel cold after one monsoon. This
                guide lists the main trends shaping local homes in 2026,
                explains why each one works, gives approximate costs and shows
                how to adopt them without regret.
              </p>
              <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-gray-800">
                <strong>Note:</strong> All figures are approximate and change
                with design, material and season. Confirm everything through
                written quotations.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                1. What a Trend Really Is
              </h2>
              <p>
                A trend is a style or material that many people choose in the
                same period.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>It spreads through photos, shops and word of mouth.</li>
                <li>It changes the look of a home quickly.</li>
                <li>It may fade as tastes move on.</li>
                <li>It works best when applied to easy-to-change items.</li>
                <li>It should serve your routine before it serves a photo.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                2. Trend One: Warm Earthy Palettes
              </h2>
              <p>
                Soft browns, sand, terracotta, olive and cream have replaced
                cold greys.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Suit cool, cloudy evenings in the foothills.</li>
                <li>Pair well with natural wood and stone.</li>
                <li>Hide dust and daily marks better than white.</li>
                <li>Work with warm lighting for a calm feel.</li>
                <li>Easy to refresh with cushions, curtains and art.</li>
              </ul>
              <p className="rounded-lg border-l-4 border-amber-500 bg-gray-50 p-4">
                <strong>Tip:</strong> Use bold colour on one wall or
                accessories, not on every surface.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                3. Trend Two: Natural Textures and Materials
              </h2>
              <p>Wood, cane, jute, stone and handwoven fabric add depth.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Wood-finish laminates and veneers in warm tones.</li>
                <li>Cane panels on shutters or headboards.</li>
                <li>Jute or cotton rugs and runners.</li>
                <li>Stone-look tiles in living areas.</li>
                <li>Clay and ceramic accents in dining and entry areas.</li>
              </ul>
              <p>
                Choose moisture-ready versions near kitchens, bathrooms and
                exterior walls.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                4. Trend Three: Pahadi-Inspired Details
              </h2>
              <p>
                Many owners want a quiet link to Kumaon culture without a
                themed look.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Aipan-inspired patterns on pooja walls, thresholds or wall art.</li>
                <li>Local wood carving details on doors and mandir units.</li>
                <li>Stone and slate accents in entry or outdoor spaces.</li>
                <li>Handwoven textiles and baskets as decor.</li>
                <li>Earthy colours that echo hills and fields.</li>
                <li>Brass and copper accents in lamps and utensils.</li>
              </ul>
              <p>
                Keep the details modest so that the home feels modern and
                personal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                5. Trend Four: Fluted and Textured Wall Panels
              </h2>
              <p>
                Vertical grooves and textured panels add depth without heavy
                decor.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Fluted panels behind TV units and beds.</li>
                <li>Limewash and textured paint finishes.</li>
                <li>Slim wooden battens in staircases and passages.</li>
                <li>Soft shadow play under warm lighting.</li>
              </ul>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full min-w-[280px] border-collapse text-left text-sm">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="p-3 font-semibold">Finish</th>
                      <th className="p-3 font-semibold">Approximate cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="p-3">Fluted panels</td>
                      <td className="p-3">₹250–₹600 per sq ft</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-3">Textured paint</td>
                      <td className="p-3">₹40–₹120 per sq ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Check moisture on exterior walls before fixing wood panels.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                6. Trend Five: Handle-Less and Clean-Line Kitchens
              </h2>
              <p>Kitchens are becoming calmer and more hidden.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Handle-less shutters with push or groove openings.</li>
                <li>Matt finishes in earthy or deep tones.</li>
                <li>Tall units for storage with fewer visible lines.</li>
                <li>Concealed appliances and integrated chimneys.</li>
                <li>Breakfast counters in place of bulky dining tables.</li>
                <li>Under-cabinet lighting for task work.</li>
              </ul>
              <p>
                Ask for strong hardware, since push-open systems depend on
                quality mechanisms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                7. Trend Six: Smart Storage as a Design Feature
              </h2>
              <p>Storage is no longer hidden behind ugly doors.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Full-height wardrobes with integrated lofts.</li>
                <li>Under-bed and window-seat storage.</li>
                <li>Slim pull-out units in kitchens.</li>
                <li>Display niches mixed with closed shelves.</li>
                <li>Dedicated shoe, laundry and utility storage.</li>
                <li>Flexible shelves that change as children grow.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                8. Trend Seven: Layered Lighting
              </h2>
              <p>
                Lighting plans now use several layers instead of one central
                fitting.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Cove and concealed strip lights in ceilings.</li>
                <li>Warm spot lights for focus.</li>
                <li>Wall and pendant lights for mood.</li>
                <li>Task lights in kitchens and study areas.</li>
                <li>Dimmers in living rooms and bedrooms.</li>
                <li>Smart switches in higher-budget homes.</li>
              </ul>
              <p>
                Warm tones suit cool evenings, while neutral tones suit
                kitchens and work areas.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                9. Trend Eight: Home Office Corners
              </h2>
              <p>Remote and hybrid work keeps study spaces in demand.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Compact desks built into living or bedroom walls.</li>
                <li>Closed storage for files and equipment.</li>
                <li>Good daylight and proper task lighting.</li>
                <li>Power points and cable management.</li>
                <li>A neat background for video calls.</li>
                <li>Foldable or sliding screens to hide the work area.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                10. Trend Nine: Soft Curves and Rounded Forms
              </h2>
              <p>Curves bring a gentle feel to rectangular rooms.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Rounded sofas, tables and mirrors.</li>
                <li>Arched niches and doorways.</li>
                <li>Soft corners on children&apos;s furniture.</li>
                <li>Curved headboards and console units.</li>
                <li>Round pendant lights and rugs.</li>
              </ul>
              <p>
                Custom curved carpentry costs more, so use ready pieces where
                possible.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                11. Trend Ten: Biophilic and Green Touches
              </h2>
              <p>Plants and natural light bring life indoors.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Balcony and window planters.</li>
                <li>Indoor plants in living and dining areas.</li>
                <li>Light, airy curtains that let daylight in.</li>
                <li>Natural materials near greenery.</li>
                <li>Small herb corners in kitchens.</li>
                <li>Water-resistant planters to protect floors.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                12. Trend Eleven: Statement Pooja and Mandir Units
              </h2>
              <p>The pooja space has become a designed feature.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Wall-mounted or niche-style mandir units.</li>
                <li>Warm lighting and soft backlit panels.</li>
                <li>Wood, stone or marble finishes.</li>
                <li>Closed storage for puja items.</li>
                <li>Proper ventilation for lamps and incense.</li>
                <li>Placement guided by Vastu preferences where desired.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                13. Trend Twelve: Spa-Style Bathrooms
              </h2>
              <p>
                Bathrooms now aim for calm and ease of cleaning.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Large format tiles with fewer joints.</li>
                <li>Wall-hung fittings and concealed cisterns.</li>
                <li>Warm lighting and mirror lights.</li>
                <li>Anti-slip floors and safe grab support where needed.</li>
                <li>Dedicated dry zones and storage niches.</li>
                <li>Good ventilation to reduce dampness.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                14. Approximate Cost Reference for Trend Upgrades
              </h2>
              <p>
                Prices vary with brand, size and finish. These ranges are
                indicative.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full min-w-[340px] border-collapse text-left text-sm">
                  <thead className="bg-gray-100 text-gray-900">
                    <tr>
                      <th className="p-3 font-semibold">Interior work</th>
                      <th className="p-3 font-semibold">Approximate cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="p-3">Basic interiors overall</td>
                      <td className="p-3">₹900–₹1,400 per sq ft</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-3">Mid-range interiors overall</td>
                      <td className="p-3">₹1,400–₹2,200 per sq ft</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-3">Premium interiors overall</td>
                      <td className="p-3">₹2,500 per sq ft and above</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-3">Cove ceiling with lighting</td>
                      <td className="p-3">₹120–₹250 per sq ft</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-3">Handle-less modular kitchen</td>
                      <td className="p-3">
                        Usually higher than basic handled kitchens; priced per
                        running foot
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="p-3">
                        TV wall with fluted panel and lighting
                      </td>
                      <td className="p-3">₹40,000–₹1.5 lakh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <h3 className="font-semibold text-gray-900">
                  Example: Interior cost for a 1,000 sq ft flat
                </h3>
                <p className="mt-2 leading-7">
                  At ₹1,600 per sq ft, the estimated cost would be around{" "}
                  <strong>₹16 lakh</strong>, excluding appliances and loose
                  furniture.
                </p>
              </div>
              <p className="text-sm text-gray-500">
                These are approximate figures from the article, not guaranteed
                market rates. Request a current itemised quotation before
                finalising your budget.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                15. Trends That Need Extra Care in Haldwani
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Wood panels on exterior walls:</strong> Need damp
                  checking and sealing.
                </li>
                <li>
                  <strong>Matt dark finishes:</strong> Show fingerprints, so
                  test samples first.
                </li>
                <li>
                  <strong>Open shelves in kitchens:</strong> Collect dust and
                  moisture.
                </li>
                <li>
                  <strong>Large glass surfaces:</strong> Need cleaning and good
                  curtains for privacy.
                </li>
                <li>
                  <strong>Light carpets and rugs:</strong> Stain easily in
                  family homes.
                </li>
                <li>
                  <strong>Deep wall colours:</strong> Can make small rooms feel
                  smaller on cloudy days.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                16. How to Adopt a Trend Safely
              </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>Choose two or three trends that match your routine.</li>
                <li>Apply bold ones to easy-to-change items.</li>
                <li>
                  Keep base materials timeless, such as flooring and main
                  carpentry.
                </li>
                <li>Ask for physical samples in your own lighting.</li>
                <li>Check moisture and cleaning needs.</li>
                <li>Visit a finished project that uses the same trend.</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                17. Timeless Base, Trendy Layer
              </h2>
              <p>A simple formula keeps a home fresh for years.</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Base layer:</strong> Floors, main carpentry, kitchen
                  carcass, wiring and plumbing.
                </li>
                <li>
                  <strong>Middle layer:</strong> Paint, curtains, wall panels
                  and lighting fixtures.
                </li>
                <li>
                  <strong>Top layer:</strong> Cushions, art, plants, rugs and
                  small decor.
                </li>
              </ul>
              <p>
                Spend most on the base, and update the top layer when tastes
                change.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                18. Hidden Costs of Following Trends
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Custom carpentry for unusual shapes.</li>
                <li>Specialist painters for textured finishes.</li>
                <li>Imported or special-order fittings.</li>
                <li>Extra electrical points for lighting layers.</li>
                <li>Frequent updates if the trend fades.</li>
                <li>Delay when materials need ordering from other cities.</li>
              </ul>
              <p>
                Keep eight to ten percent as a safety reserve.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                19. Agreement and Hiring Points for Trend-Heavy Projects
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Room-wise scope of work.</li>
                <li>Material brands and grades, with sample approval.</li>
                <li>Stage-wise payment milestones.</li>
                <li>Start and completion dates.</li>
                <li>Penalty for unjustified delay.</li>
                <li>Warranty on finishes and hardware.</li>
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
                20. Studios and Trend Guidance
              </h2>
              <p className="leading-8">
                Studios that mix design and Vastu planning often help owners
                balance trends with layout principles. Space Build, an
                interior design and Vastu studio based in Moradabad, is one
                example. Visit{" "}
                <a
                  href="https://www.spacebuild.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-rose-700 underline decoration-rose-300 underline-offset-4 hover:text-rose-900"
                >
                  Space Build
                </a>
                . If you consider an outside studio for Haldwani, ask these
                questions.
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Can you show completed projects using these trends?</li>
                <li>How do you adapt trends to humid conditions?</li>
                <li>Is a site supervisor available near me?</li>
                <li>Are there travel or coordination charges?</li>
                <li>How are repairs handled after handover?</li>
              </ul>
              <p>Distance is acceptable when systems and reporting are clear.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQ)
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. What are the main interior design trends in Haldwani this
                    year?
                  </h3>
                  <p className="mt-2 leading-7">
                    Warm earthy palettes, natural textures, fluted panels,
                    handle-less kitchens, smart storage and layered lighting.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. Are Pahadi-inspired interiors popular?
                  </h3>
                  <p className="mt-2 leading-7">
                    Yes, in subtle forms such as Aipan-inspired patterns, wood
                    details, stone accents and handwoven textiles.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. Which trends suit Haldwani&apos;s climate?
                  </h3>
                  <p className="mt-2 leading-7">
                    Warm palettes, moisture-ready wood finishes, ventilated
                    storage and warm lighting suit local conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. What is the interior cost per sq ft?
                  </h3>
                  <p className="mt-2 leading-7">
                    Basic work starts near ₹900 per sq ft, mid-range runs
                    about ₹1,400 to ₹2,200 and premium goes above ₹2,500.
                    Actual costs depend on scope, material and finish.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. How do I avoid a trend that fades quickly?
                  </h3>
                  <p className="mt-2 leading-7">
                    Keep the base timeless and apply trends to paint, decor,
                    lighting and soft furnishing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    6. Are fluted wall panels worth it?
                  </h3>
                  <p className="mt-2 leading-7">
                    They add depth and warmth, but need damp checks and
                    moisture-ready materials.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    7. How much advance should I pay?
                  </h3>
                  <p className="mt-2 leading-7">
                    Keep it small and pay by stages after verified progress,
                    as agreed in the written contract.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    8. How much reserve should I keep?
                  </h3>
                  <p className="mt-2 leading-7">
                    Eight to ten percent for civil changes, special-order
                    items, electrical work and price changes.
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
