import React from "react";
import LandingEnquiry from "@/components/LandingEnquiry";
import PostNavigation from "@/components/PostNavigation";

const Content = () => {
  return (
    <div className="min-h-screen bg-[#FFF2EB] pt-15">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 text-gray-900">
            Vastu for House Design &amp; Planning in South Delhi
          </h2>
          <h3 className="text-lg sm:text-xl font-medium mb-8 text-gray-800">
            MahaVastu-led Interior Design by Vasterior
          </h3>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior designs homes in South Delhi that do not just look premium, they live
              premium. If your layout feels almost right but daily life still feels heavy,
              cluttered, or mentally noisy, the issue is rarely decor. It is planning. It is
              placement. It is how your home&apos;s activities sit inside its structure, and that
              is exactly where MahaVastu becomes a design advantage.
            </p>
            <p>
              In South Delhi, homes carry complexity: legacy construction, renovation layers, tight
              shafts, mixed orientations, irregular plots, vertical additions, and patched layouts
              made over years. A beautiful upgrade can still feel emotionally exhausting if the
              space is not aligned to how people actually move, work, rest, host, and recharge.
              Vasterior brings interior design and MahaVastu alignment together so your home
              supports your life quietly, every day.
            </p>

            {/* Why South Delhi Homes Need Vastu Planning at the Design Stage */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why South Delhi Homes Need Vastu Planning at the Design Stage
            </h3>
            <p>
              Most Vastu conversations begin too late, after furniture is purchased, walls are
              finished, and routines are already struggling inside the space. In South Delhi, where
              real estate is valuable and renovations are strategic, smart homeowners plan upfront
              so they do not pay twice, once in cost and once in compromises.
            </p>
            <p>MahaVastu-led planning helps you make better decisions on:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Room placements (master bedroom, kitchen, pooja, study, kids&apos; room)
              </li>
              <li>
                Movement logic (entry flow, transitions, corridors, bottlenecks)
              </li>
              <li>
                Activity zones (work, rest, meals, conversations, storage)
              </li>
              <li>Light and openness (where clarity should feel natural)</li>
              <li>
                Furniture direction and sizing (so the room serves the person, not the other way
                around)
              </li>
            </ul>
            <p>This is not Vastu as superstition. This is Vastu as spatial intelligence.</p>

            {/* What MahaVastu Means */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What MahaVastu Means in a Modern South Delhi Home
            </h3>
            <p>
              MahaVastu does not reduce your home to fear-based rules. It looks at your space like a
              system: direction, element, activity, and object, and then aligns design decisions
              accordingly.
            </p>
            <p>
              That means we do not begin with decorative remedies. We begin with what actually runs
              your home:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Where you sleep</li>
              <li>Where you work</li>
              <li>Where you eat</li>
              <li>Where you talk</li>
              <li>Where you store</li>
              <li>Where you pause</li>
            </ul>
            <p>
              When the activity is in the right zone, the home begins to feel easier. When the
              layout supports that activity, the effect becomes consistent, not occasional.
            </p>

            {/* Vasterior’s Approach */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Approach: Interior Design That Is Beautiful and Structurally
              Supportive
            </h3>
            <p>
              Vasterior blends design taste with planning discipline. We do not treat Vastu and
              interiors as separate services competing for control. We integrate them so the end
              result is seamless, refined, and emotionally functional.
            </p>
            <p>What we typically do (depending on your scope):</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                Space documentation and understanding your daily life (not just your floor plan)
              </li>
              <li>
                MahaVastu zone analysis (how your home currently behaves versus how you want it to
                perform)
              </li>
              <li>
                Layout planning or re-planning (without forcing unnecessary demolition)
              </li>
              <li>
                Furniture planning and direction logic (work desk, bed, seating, dining, storage)
              </li>
              <li>Material and lighting decisions that support calm and clarity</li>
              <li>Design detailing that looks premium while remaining practical</li>
              <li>
                Optional execution support for clients who want end-to-end delivery
              </li>
            </ul>
            <p>The goal is simple: your home should feel like it is working with you.</p>

            {/* What You’ll Notice */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What You Will Notice When Planning Is Done Right
            </h3>
            <p>
              Not dramatic before-and-after magic, more like a quiet upgrade you feel daily.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>You walk in and your mind settles faster</li>
              <li>The home feels less noisy, even when it is not silent</li>
              <li>Work feels cleaner, decisions feel less draining</li>
              <li>Family interactions feel less reactive</li>
              <li>Rest feels more complete, without trying too hard</li>
              <li>The layout stops demanding constant adjustment</li>
            </ul>
            <p>When the space is aligned, you stop fighting it.</p>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Services for South Delhi Homeowners
            </h3>
            <p>Choose what matches your stage and ambition:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <span className="font-semibold">
                  Full House Design and MahaVastu Planning (Ideal for Renovations or New Homes)
                </span>{" "}
                For homeowners who want planning, design, and a cohesive aesthetic, done with
                intentional zone logic from day one.
              </li>
              <li>
                <span className="font-semibold">
                  MahaVastu Consultation for an Existing Home
                </span>{" "}
                For homeowners who want corrections, realignment, and planning guidance without
                turning the home upside down.
              </li>
              <li>
                <span className="font-semibold">Focused Zone Planning (Room-Level)</span>{" "}
                Perfect if you are redesigning a master bedroom, kitchen, living room, home office,
                or kids&apos; room and want decisions that are both tasteful and aligned.
              </li>
            </ol>

            {/* Who This Is For */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who This Is For
            </h3>
            <p>This page is for you if you are in South Delhi and you want:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>A home that looks elevated and feels emotionally lighter</li>
              <li>Renovation decisions that will not create long-term discomfort</li>
              <li>
                A layout that supports work, family, and rest without friction
              </li>
              <li>A design team that respects luxury, privacy, and planning logic</li>
              <li>
                MahaVastu that is applied with maturity, without noise, fear, or gimmicks
              </li>
            </ul>

            {/* Book a Conversation */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Book a Conversation
            </h3>
            <p>
              If you are planning a renovation, buying a new property, or simply tired of a home
              that looks right but feels off, a conversation can bring clarity fast. Many South
              Delhi clients start by sharing a basic floor plan and a few concerns, then we take it
              forward from there, so you can call{" "}
              <strong>+917906086899</strong> when you are ready, or write to{" "}
              <a
                href="mailto:info@spacebuild.com"
                className="text-blue-600 hover:underline"
              >
                info@spacebuild.com
              </a>{" "}
              and tell us what you are planning and what you want your home to feel like.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              FAQs - Vastu for House Design &amp; Planning (South Delhi)
            </h3>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <span className="font-semibold">
                  Is MahaVastu different from regular Vastu?
                </span>{" "}
                Yes. MahaVastu is more structured and application-driven, focused on aligning
                direction, elements, activities, and objects. In practice, it integrates better with
                modern homes because it works through planning decisions, not just rituals.
              </li>
              <li>
                <span className="font-semibold">
                  Do I need demolition to fix Vastu?
                </span>{" "}
                Not necessarily. Many improvements come from layout adjustments, activity
                placement, furniture direction, storage logic, and room prioritisation. If
                structural change is genuinely beneficial, it will be explained clearly, without
                forcing it.
              </li>
              <li>
                <span className="font-semibold">
                  Can MahaVastu be applied to apartments in South Delhi?
                </span>{" "}
                Absolutely. Apartments have constraints, but that is where intelligent planning
                matters most. We work with what is possible, including entry flow, bedroom
                placement logic, work zones, kitchen dynamics, and furniture alignment.
              </li>
              <li>
                <span className="font-semibold">
                  I am renovating, when should I involve Vasterior?
                </span>{" "}
                As early as possible, ideally before finalising layout, furniture sizes, and
                electrical or lighting points. Vastu planning is most powerful when it informs
                design, not when it is asked to adjust after everything is fixed.
              </li>
              <li>
                <span className="font-semibold">
                  Will Vasterior&apos;s design style be forced on my home?
                </span>{" "}
                No. The design language is developed around your taste, your lifestyle, and your
                home&apos;s architectural reality. MahaVastu guides planning decisions; your
                aesthetic is curated intentionally.
              </li>
              <li>
                <span className="font-semibold">What do you need from me to get started?</span>{" "}
                Usually: a floor plan or rough sketch, site address or locality, a few photos or
                videos, and your core concerns such as sleep, stress, finances, family harmony, or
                work focus. If you do not have plans, we can guide the next step.
              </li>
              <li>
                <span className="font-semibold">Do you also handle execution?</span>{" "}
                Yes, execution can be included for full-scope projects. For some clients, we also
                do consultation-only planning where your contractor executes under guidance,
                depending on scope and fit.
              </li>
              <li>
                <span className="font-semibold">
                  How long does a MahaVastu and design planning process take?
                </span>{" "}
                Timelines vary by size and scope. A focused room-level plan can be quicker, while
                full-home planning and design take longer due to detailing, iterations, and
                coordination.
              </li>
              <li>
                <span className="font-semibold">
                  Is this service only for Vastu believers?
                </span>{" "}
                No. This is for homeowners who care about how a space functions psychologically and
                practically. You do not need belief, only the willingness to design with
                intelligence.
              </li>
              <li>
                <span className="font-semibold">How do I book a consultation?</span>{" "}
                Start with a short conversation. When it feels aligned, you can call{" "}
                <strong>+917906086899</strong> for a quick slot, or email{" "}
                <a
                  href="mailto:info@spacebuild.com"
                  className="text-blue-600 hover:underline"
                >
                  info@spacebuild.com
                </a>{" "}
                with your location in South Delhi, property type, and what you want help with.
              </li>
            </ol>
          </div>

          <PostNavigation slug="vastu-for-house-design-planning-south-delhi" />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[450px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
