import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ProjectManagementConsultationPage() {
  return (
    <div className="min-h-screen bg-[#edf4f8]">
      {/* Hero Section */}
      <section className="relative w-full h-[28vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkpejqlby/image/upload/v1769677935/PMC_i2bu0t.jpg"
          alt="Project Management Consultation by Space Build"
          fill
          className="object-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              PROJECT MANAGEMENT CONSULTATION
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic">
              Expert guidance to plan, coordinate, and execute your interior or renovation project smoothly — without stress, confusion, or costly mistakes.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-600 flex items-center gap-2">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/services" className="hover:text-gray-900">Services</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Project Management Consultation</span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">Introduction</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Interior projects don't fail because of lack of money or good intentions.
            They fail because of misalignment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Misaligned timelines.<br/>
            Misaligned vendors.<br/>
            Misaligned expectations.<br/>
            Misaligned decisions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Space Build, our Project Management Consultation service exists to bring order, clarity, and strategic direction to interior design, renovation, and construction projects, especially where multiple stakeholders, vendors, or decisions are involved.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>This is not execution contracting.<br/>
            This is high-level project intelligence.</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We step in as your advisor, coordinator, and problem-solver, ensuring your project moves forward with structure, transparency, and confidence, while protecting your time, money, and peace of mind.
          </p>
        </div>
      </section>

      {/* What Is Project Management Consultation */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-8">WHAT IS PROJECT MANAGEMENT CONSULTATION?</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Project Management Consultation is a strategic advisory service designed to help clients:
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• Plan projects realistically</li>
              <li>• Structure timelines and scopes</li>
              <li>• Coordinate multiple vendors</li>
              <li>• Avoid execution errors</li>
              <li>• Control budgets and quality</li>
              <li>• Reduce stress and confusion</li>
              <li>• Make informed decisions at every stage</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-6">
            We act as your single point of clarity, guiding you through planning, sequencing, coordination, and decision-making.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 italic">
            This service can be taken independently or alongside interior design, Vastu renovation, or execution services.
          </p>
        </div>
      </section>

      {/* What This Service Includes */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-8">WHAT THIS SERVICE INCLUDES</h3>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">Project Scope Definition</h4>
            <p className="text-gray-700 mb-3">We help you clearly define:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• What is included</li>
              <li>• What is excluded</li>
              <li>• What is optional</li>
              <li>• What can be phased later</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">This avoids scope creep, confusion, and unexpected costs.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">Timeline & Phase Planning</h4>
            <p className="text-gray-700 mb-3">We create a realistic project roadmap, covering:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Design timelines</li>
              <li>• Procurement schedules</li>
              <li>• Execution phases</li>
              <li>• Vendor sequencing</li>
              <li>• Buffer planning for delays</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">This ensures your project moves logically, not chaotically.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">Budget Structuring & Cost Clarity</h4>
            <p className="text-gray-700 mb-3">We guide you on:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Budget allocation across categories</li>
              <li>• Priority vs non-priority spends</li>
              <li>• Cost control checkpoints</li>
              <li>• Avoiding hidden expenses</li>
              <li>• Understanding BOQs & quotations</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">You gain financial clarity before commitments, not after mistakes.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">Vendor Coordination Strategy</h4>
            <p className="text-gray-700 mb-3">We help manage interactions between:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Contractors</li>
              <li>• Carpenters</li>
              <li>• Electricians</li>
              <li>• Plumbers</li>
              <li>• Material suppliers</li>
              <li>• Fabricators</li>
              <li>• Designers (if external)</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">Our role is to ensure everyone is aligned to the same plan, drawings, and expectations.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">Execution Sequencing Guidance</h4>
            <p className="text-gray-700 mb-3">Many projects go wrong because tasks happen in the wrong order.</p>
            <p className="text-gray-700 mb-3">We guide:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• What should happen first</li>
              <li>• What must wait</li>
              <li>• What should never overlap</li>
              <li>• Where checks are critical</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">This saves time, rework, and money.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">Quality Control Advisory</h4>
            <p className="text-gray-700 mb-3">We help you understand:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• What quality benchmarks to look for</li>
              <li>• What common shortcuts vendors take</li>
              <li>• Where inspections are crucial</li>
              <li>• How to evaluate finishes, joinery, lighting, and materials</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">You don't need to be an expert, we empower you to ask the right questions.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">Risk Identification & Problem Solving</h4>
            <p className="text-gray-700 mb-3">We proactively identify:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Design–execution mismatches</li>
              <li>• Timeline risks</li>
              <li>• Budget stress points</li>
              <li>• Vendor dependency issues</li>
              <li>• Site-specific challenges</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">And guide you with practical, experience-backed solutions.</p>
          </div>
        </div>
      </section>

      {/* When Should You Take This Service */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHEN SHOULD YOU TAKE THIS SERVICE?</h3>
          <p className="text-gray-700 mb-4">Project Management Consultation is ideal if:</p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• You're managing an interior or renovation project yourself</li>
              <li>• You have hired multiple vendors independently</li>
              <li>• You feel overwhelmed by decisions and coordination</li>
              <li>• Your project has stalled or gone off-track</li>
              <li>• You want expert oversight without full execution contracts</li>
              <li>• You want to avoid costly mistakes</li>
              <li>• You want a calm, structured project journey</li>
              <li>• You value planning more than firefighting</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic">
            This service is especially powerful for first-time homeowners, founders, professionals, and busy families.
          </p>
        </div>
      </section>

      {/* What Makes Space Build Different */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">WHAT MAKES Space Build DIFFERENT</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Unlike generic project managers, Space Build brings:
        </p>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• Interior design intelligence</li>
            <li>• Material & execution knowledge</li>
            <li>• Vastu-aware planning (when applicable)</li>
            <li>• Experience with luxury and mid-scale projects</li>
            <li>• Calm, non-salesy advisory approach</li>
            <li>• Clear communication and documentation</li>
          </ul>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          We don't push vendors.<br/>
          We don't force decisions.<br/>
          <strong>We enable better ones.</strong>
        </p>
      </section>

      {/* Benefits You Experience */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">BENEFITS YOU EXPERIENCE</h3>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• Reduced stress and overwhelm</li>
              <li>• Clear project direction</li>
              <li>• Better coordination between teams</li>
              <li>• Fewer mistakes and reworks</li>
              <li>• Better budget control</li>
              <li>• Informed decision-making</li>
              <li>• Time savings</li>
              <li>• Improved execution quality</li>
              <li>• Confidence at every stage</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-6 italic">
            You remain in control, without being consumed by the process.
          </p>
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">DELIVERABLES YOU RECEIVE</h3>
        <p className="text-gray-700 mb-4">Depending on scope, you may receive:</p>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• Project scope framework</li>
            <li>• Timeline & phase plan</li>
            <li>• Vendor coordination strategy</li>
            <li>• Budget planning guidance</li>
            <li>• Execution sequencing checklist</li>
            <li>• Quality control checkpoints</li>
            <li>• Decision-making frameworks</li>
            <li>• Written recommendations & notes</li>
          </ul>
        </div>
        <p className="text-gray-700 mt-6 italic">
          All advice is practical, realistic, and tailored to your project.
        </p>
      </section>

      {/* The Process */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">HOW THE CONSULTATION WORKS</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 1 — Project Understanding</h4>
              <p className="text-gray-700">We understand your site, scope, goals, constraints, and concerns.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 2 — Problem Mapping</h4>
              <p className="text-gray-700">We identify where clarity is missing or risks are high.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 3 — Strategic Guidance</h4>
              <p className="text-gray-700">You receive structured advice on planning, sequencing, and coordination.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 4 — Ongoing Support (Optional)</h4>
              <p className="text-gray-700">You may opt for periodic check-ins as the project progresses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Plan Smarter. Build Better. Stress Less.
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Let Space Build guide your project with clarity, structure, and confidence.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">Book a Project Management Consultation</p>
            <p className="text-gray-700">Get in touch with our experts today at:</p>
            <p className="text-[#D4935D] font-semibold text-lg">+917906086899</p>
            <p className="text-[#D4935D] font-semibold">spacebuild.india@gamil.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}