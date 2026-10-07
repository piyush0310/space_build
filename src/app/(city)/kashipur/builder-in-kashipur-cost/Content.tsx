import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";

const sections = [
  {
    title: "How Builders Calculate the Price",
    intro:
      "Builders usually quote a rate for each square foot of built-up area. The method looks simple, yet the meaning of 'built-up area' needs checking.",
    points: [
      "Built-up area includes walls, balconies, staircases and sometimes the terrace.",
      "Some firms count only the covered floor, others add open spaces.",
      "Basement, parking and boundary walls are often priced separately.",
      "The rate may include materials or only labour.",
      "Finishing level changes the rate noticeably.",
      "Ask the builder to write exactly what the quoted rate covers. Two identical numbers can describe very different work.",
    ],
  },
  {
    title: "Rate Models You Will Come Across",
    intro:
      "The pricing style decides who carries financial risk. Choose the model that matches your time and knowledge.",
    points: [
      "Labour-only rate: you buy materials, the builder charges for workers.",
      "Material plus labour rate: one combined rate for everything structural.",
      "Turnkey package: a complete price including interiors and fittings.",
      "Item-rate billing: payment follows measured quantities of finished work.",
      "Labour-only looks cheaper on paper, but wastage and delays can erase the saving.",
      "Owners with limited time often prefer a combined or turnkey arrangement.",
    ],
  },
  {
    title: "Main Factors That Change Your Total",
    intro:
      "Several variables push cost up or down. Knowing them gives you real negotiating power.",
    points: [
      "Quality grade of cement, steel, tiles and sanitary items.",
      "Number of floors, since deeper foundations cost more.",
      "Soil strength at your plot.",
      "Complexity of the elevation, arches and balconies.",
      "Plot shape and access for delivery vehicles.",
      "Season, because rain and festivals affect labour availability.",
      "Brand choices for doors, windows, wiring and paint.",
      "Even a small plan change, such as an extra column or a curved wall, can alter the estimate.",
    ],
  },
  {
    title: "Indicative Spending Split",
    intro:
      "Costs spread across several stages. The shares below are only rough guidance, and your builder's estimate will differ with design and materials.",
    points: [
      "Foundation and structure: the largest portion, often close to half.",
      "Masonry and plastering: a moderate share.",
      "Electrical and plumbing: a smaller but important share.",
      "Flooring, tiling and doors: noticeable, and highly flexible.",
      "Painting and final finishing: a modest share.",
      "Approvals, drawings and supervision: a minor portion.",
      "Spending carefully on the structure is wise, because it cannot be redone cheaply later.",
    ],
  },
  {
    title: "Material Costs and Quality Trade-Offs",
    intro:
      "Materials form a major chunk of the budget. Smart choices reduce cost without weakening safety.",
    points: [
      "Spend generously on steel, cement and waterproofing.",
      "Save on decorative items that can be upgraded later.",
      "Compare fly-ash bricks with clay bricks for price and strength.",
      "Buy in planned lots to avoid frequent price jumps.",
      "Verify bills against deliveries to prevent shortages.",
      "Avoid unbranded electrical wires, which risk fire.",
      "Cheap structural material is false economy. Repairing a leaking roof often costs more than choosing better waterproofing at the start.",
    ],
  },
  {
    title: "Labour and Supervision Charges",
    intro:
      "Skilled workers influence both quality and expense. Rates depend on trade, experience and demand.",
    points: [
      "Masons, bar-benders, carpenters and electricians charge separately.",
      "Peak seasons raise daily wages.",
      "Skilled supervision may add to the quote but prevents rework.",
      "Poor workmanship leads to cracks, seepage and repainting.",
      "Staying with one organised team reduces idle time.",
      "Paying slightly more for competent labour usually saves money over the building's lifetime.",
    ],
  },
  {
    title: "Costs Owners Often Forget",
    intro:
      "Many budgets collapse because of items nobody mentioned early. Ask about each point before signing.",
    points: [
      "Architect and structural design fees.",
      "Soil testing and survey charges.",
      "Map sanction and authority fees.",
      "Electricity and water connection charges.",
      "Septic tank, boundary wall and gate.",
      "Landscaping, lighting and outdoor paving.",
      "Furniture, curtains and appliances.",
      "Shifting and housewarming expenses.",
      "List these separately, so they never surprise you after the main structure stands.",
    ],
  },
  {
    title: "Hidden Charges Inside Quotations",
    intro:
      "A friendly rate can hide extra payments. Read every line, especially the fine print.",
    points: [
      '"Extra work" clauses without stated rates.',
      "Material substitution without written approval.",
      "Charges for water and electricity used on site.",
      "Debris removal and cleaning fees.",
      "Fees for design changes after approval.",
      "Taxes added only at the final bill.",
      "Request a final price in writing, including all taxes and site utilities.",
    ],
  },
  {
    title: "Weather, Soil and Local Conditions",
    intro:
      "Kashipur's environment influences budgets more than many people realise. Terai land and heavy rainfall demand extra care.",
    points: [
      "Softer or moist soil may need deeper or reinforced foundations.",
      "Raising the plinth protects against waterlogging.",
      "Strong waterproofing is essential for roofs and bathrooms.",
      "Rain interruptions can increase labour waiting time.",
      "Earthquake-safe design adds engineering cost but protects life.",
      "Good drainage prevents future structural damage.",
      "Investing in these features early prevents costly repairs.",
    ],
  },
  {
    title: "Smart Ways to Control Spending",
    intro:
      "Saving money does not require compromising safety. A few disciplined habits make a visible difference.",
    points: [
      "Finalise design and interiors before excavation begins.",
      "Avoid changes once walls are built.",
      "Choose simple shapes, which need less material and labour.",
      "Plan electrical points carefully on paper.",
      "Start foundation work before the heavy rainy period.",
      "Compare at least three written quotations.",
      "Keep a monthly record of every payment.",
      "Early decisions are cheap, while late changes are painfully expensive.",
    ],
  },
  {
    title: "Comparing Quotations Fairly",
    intro:
      "A cheap offer may leave out important work. Place all quotations in a simple table and check them line by line.",
    points: [
      "Confirm identical drawings and floor area.",
      "Match material brands and grades.",
      "Verify whether finishing is included.",
      "Compare payment schedules.",
      "Check warranty terms.",
      "Note exclusions mentioned in small print.",
      "If one quote is far below the rest, ask what is missing instead of celebrating.",
    ],
  },
  {
    title: "Payment Structure and Cash Flow",
    intro:
      "How you pay affects both cost control and builder performance. Stage-wise payment keeps accountability high.",
    points: [
      "Sign the agreement before giving any advance.",
      "Link instalments to completed stages.",
      "Use bank transfers and keep receipts.",
      "Hold back a final amount until defects are fixed.",
      "Keep spare funds ready for approved changes.",
      "Avoid taking loans beyond comfortable repayment limits.",
      "Steady cash flow prevents work stoppage, which is among the most expensive problems on any site.",
    ],
  },
  {
    title: "Long-Term Value Versus Short-Term Savings",
    intro:
      "The cheapest construction is rarely the least expensive over twenty years. Maintenance, electricity bills and repairs all count.",
    points: [
      "Quality waterproofing lowers repair visits.",
      "Good ventilation cuts cooling expense.",
      "Energy-efficient lighting reduces monthly bills.",
      "Solar water heating pays back gradually.",
      "Durable flooring avoids early replacement.",
      "Sound structure raises resale value.",
      "Think of construction as an investment rather than a one-time purchase.",
    ],
  },
];

const faqs = [
  {
    question: "What decides builder cost in Kashipur?",
    answer:
      "Material quality, design, number of floors, soil condition, labour rates and finishing level mainly decide the final price.",
  },
  {
    question: "Is cost calculated per square foot?",
    answer:
      "Yes, most builders quote per square foot of built-up area. Confirm exactly which spaces they count.",
  },
  {
    question: "Why do quotations differ so much?",
    answer:
      "Differences come from material brands, included work, finishing grade and exclusions hidden in the fine print.",
  },
  {
    question: "Which is cheaper: labour-only or turnkey?",
    answer:
      "Labour-only looks cheaper initially, but wastage and supervision can raise expenses. Turnkey offers easier budgeting.",
  },
  {
    question: "How much reserve should I keep?",
    answer:
      "Keep around ten percent aside for unexpected changes, price movement and forgotten items.",
  },
  {
    question: "Are approvals included in the quoted rate?",
    answer:
      "Not always. Ask in writing whether drawings, sanction and utility connection fees are included.",
  },
  {
    question: "Can I reduce cost without losing quality?",
    answer:
      "Yes. Finalise the design early, keep shapes simple, avoid mid-project changes and compare several quotations.",
  },
  {
    question: "Do prices change during construction?",
    answer:
      "Material and labour rates can move. Request a written clause explaining how price changes will be handled.",
  },
];

const Content: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-0">
      <div className="flex flex-col lg:flex-row max-w-[1800px] mx-auto gap-8">
        <div className="w-full lg:w-[60%] px-4 sm:px-8 py-0">
          <div className="space-y-8 text-gray-700">
            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold text-gray-900">
              Builder in Kashipur Cost: Why Price Is More Than One Number
            </h2>

            <p>
              Most owners ask a simple question: what is the builder in Kashipur
              cost per square foot? The honest answer is that no single figure
              fits every plot. Steel, cement and labour prices move through the
              year, and each design brings its own demands.
            </p>

            <p>
              Think of construction pricing like a restaurant bill. The headline
              rate covers the main dish, but drinks, taxes and extras change the
              total. This guide shows every part of the bill, so your final
              amount holds no unpleasant surprises. Each section opens with a
              short idea, then lists points you can apply.
            </p>

            {sections.map((section) => (
              <section key={section.title} className="space-y-5">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {section.title}
                </h2>

                <p>{section.intro}</p>

                <ul className="list-disc pl-6 space-y-2">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Final Word on Builder in Kashipur Cost
            </h2>

            <p>
              Understanding builder in Kashipur cost means looking beyond a
              single rate. Define the scope, compare itemised quotations, plan
              for forgotten expenses and keep a safety reserve. A transparent
              builder will explain every rupee gladly, and that openness is the
              best sign of a trustworthy partner.
            </p>

            <p>
              Next step: prepare your plot details and rough budget, then
              request detailed written estimates from three builders this week.
              Add your company name, phone number, address and Google Maps link
              here.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Frequently Asked Questions (FAQ)
            </h2>

            <div className="mt-6 space-y-6">
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <h3 className="mb-3 font-semibold text-gray-900">
                    {index + 1}. {faq.question}
                  </h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>

            <p>
              📞 <strong>WhatsApp / Call:</strong>{" "}
              <a
                href="tel:+919927611780"
                className="text-blue-600 hover:underline"
              >
                +91 99276 11780
              </a>
              <br />
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:spacebuild.india@gmail.com"
                className="text-blue-600 hover:underline"
              >
                spacebuild.india@gmail.com
              </a>
              <br />
              🌐 <strong>Website:</strong>{" "}
              <a
                href="https://www.spacebuild.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                www.spacebuild.co.in
              </a>
            </p>
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