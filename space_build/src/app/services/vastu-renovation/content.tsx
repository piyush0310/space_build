import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function VastuRenovationPage() {
  return (
    <div className="min-h-screen bg-[#edf4f8]">
      {/* Hero Section */}
      <section className="relative w-full h-[28vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkpejqlby/image/upload/v1769677934/Vastu-Renovation_yywmwi.jpg"
          alt="Vastu Renovation by Space Build"
          fill
          className="object-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              VASTU RENOVATION
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic">
              Renovating your space with clarity, precision, and cosmic harmony
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
        <span className="text-gray-900 font-medium">Vastu Renovation</span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">Vastu Renovation</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A guided renovation service that ensures every change - big or small - aligns with the flow of energy, purpose, and prosperity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-semibold text-center italic">
            Renovate with intention. Renovate with alignment. Renovate with Space Build.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Renovation is not just about upgrading materials, finishes, or layouts - it is about upgrading the energy of a space.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">At Space Build, Vastu Renovation integrates:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• MahaVastu science</li>
              <li>• Architectural sensitivity</li>
              <li>• Interior planning expertise</li>
              <li>• Spatial psychology</li>
              <li>• Aesthetics and luxury design</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            …to ensure that every structural change enhances harmony rather than disturbing it.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're redoing one room or transforming an entire home/office, we ensure that every decision, from wall placement to storage planning, supports your goals, well-being, and long-term success.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            This service is for those who want a renovation that is beautiful, meaningful, and energetically correct.
          </p>
        </div>
      </section>

      {/* When Do You Need */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHEN DO YOU NEED VASTU RENOVATION?</h3>
          <p className="text-gray-700 mb-4">Vastu Renovation is essential when:</p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• You've recently renovated and things feel "off"</li>
              <li>• You're planning a renovation soon and want to avoid Vastu mistakes</li>
              <li>• You feel blocked, overwhelmed, or emotionally heavy in your space</li>
              <li>• You're facing sudden relationship, health, or financial problems</li>
              <li>• You're experiencing repeated delays or losses after altering the space</li>
              <li>• You purchased an older home or office needing structural upgrades</li>
              <li>• You want to create a fresh, aligned beginning</li>
              <li>• You're preparing for new goals; marriage, business expansion, parenthood, etc.</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6">
            Renovation done without Vastu awareness often leads to imbalances.
          </p>
          <p className="text-gray-700 mt-2 italic text-center">
            Our role is to correct, guide, and elevate.
          </p>
        </div>
      </section>

      {/* What Vastu Renovation Includes */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-8">WHAT VASTU RENOVATION INCLUDES</h3>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">1. Pre-Renovation Vastu Audit</h4>
            <p className="text-gray-700 mb-3">We begin by analysing:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• The current layout</li>
              <li>• 16 zones & their elemental states</li>
              <li>• Activity–zone mismatches</li>
              <li>• Heavy/light object placement</li>
              <li>• Water outlets & fire points</li>
              <li>• Blockages & distortions</li>
              <li>• Marma points</li>
              <li>• Emotional and behavioural imprints</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">This creates a diagnostic map of what must be corrected before renovation begins.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">2. Structural Planning with Vastu Intelligence</h4>
            <p className="text-gray-700 mb-3">We guide you on:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Where to shift walls</li>
              <li>• Where not to break</li>
              <li>• Where to open or close passages</li>
              <li>• Ideal placement of toilets, kitchens, bedrooms</li>
              <li>• Where to add or remove weight</li>
              <li>• Ideal placement of doors and windows</li>
              <li>• Safe zones for major construction</li>
              <li>• Element-friendly materials</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">This step ensures that renovation supports, not disrupts, natural energy.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">3. Interior Layout & Object Placement Guidance</h4>
            <p className="text-gray-700 mb-3">Renovation is not just civil work - it is also about how the space will breathe once it's complete.</p>
            <p className="text-gray-700 mb-2">We plan:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Furniture placement</li>
              <li>• Storage design</li>
              <li>• Colour palettes</li>
              <li>• Lighting zones</li>
              <li>• Access paths</li>
              <li>• Feature elements</li>
              <li>• Object placement (remedies, metals, decor)</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">The goal is to create a space that is beautiful and balanced.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">4. Non-Destructive Corrections & Element Alignment</h4>
            <p className="text-gray-700 mb-3">Not every renovation needs demolition.</p>
            <p className="text-gray-700 mb-2">We integrate powerful, modern MahaVastu corrections such as:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Colour & element-based balancing</li>
              <li>• Metal/wood/fire/earth/light placements</li>
              <li>• Directional remedy anchors</li>
              <li>• Behavioural alignment</li>
              <li>• Water/fire/air element adjustment</li>
              <li>• Planet-specific corrections (if needed)</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">These subtle interventions create a smoother flow of energy after renovation.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">5. Renovation Monitoring & Support</h4>
            <p className="text-gray-700 mb-3">During the renovation period, we provide:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• On-call guidance</li>
              <li>• Photographic verifications</li>
              <li>• Updated instructions based on site progress</li>
              <li>• Correction checkpoints</li>
              <li>• Final pre-handover review</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">This ensures the design and Vastu alignment stay intact through the process.</p>
          </div>
        </div>
      </section>

      {/* Why Space Build */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHY Space Build FOR VASTU RENOVATION?</h3>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Because we understand both:
            </p>
            <p className="text-gray-800 font-semibold text-lg">
              The architecture of space
            </p>
            <p className="text-gray-700">and</p>
            <p className="text-gray-800 font-semibold text-lg">
              The architecture of energy
            </p>
            <p className="text-gray-700 mt-4">
              Most designers focus only on aesthetics. Most Vastu practitioners overlook materiality, circulation, luxury finishes, and modern design needs.
            </p>
            <p className="text-gray-700 font-semibold">
              Space Build integrates both worlds seamlessly.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-md mt-4">
              <p className="text-gray-800 font-semibold mb-3">You get:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Technical precision</li>
                <li>• Aesthetic sophistication</li>
                <li>• Energetic alignment</li>
                <li>• Practical, modern implementation</li>
                <li>• A space that feels truly elevated</li>
              </ul>
            </div>
            <p className="text-gray-700 mt-4 italic text-center">
              Our renovation guidance supports the life you want to build next.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">BENEFITS OF VASTU RENOVATION</h3>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• Smooth life transitions</li>
            <li>• Improved relationships</li>
            <li>• Better financial stability</li>
            <li>• Enhanced productivity</li>
            <li>• Emotional clarity and peace</li>
            <li>• Improved health and vitality</li>
            <li>• A sense of belonging & grounding</li>
            <li>• A home that feels alive</li>
            <li>• An office that supports growth</li>
            <li>• Fewer mistakes, delays, and reworks during renovation</li>
          </ul>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">
          Renovation becomes an opportunity to reset your space and your life.
        </p>
      </section>

      {/* Deliverables */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">DELIVERABLES YOU RECEIVE</h3>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• Vastu diagnosis report</li>
              <li>• Zone-by-zone correction plan</li>
              <li>• Renovation do's and don'ts</li>
              <li>• Structural change guidance</li>
              <li>• Object & furniture placement plan</li>
              <li>• Colour & material recommendations</li>
              <li>• Element-based remedy map</li>
              <li>• Renovation timeline guidance</li>
              <li>• Support during execution</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic text-center">
            Everything is presented clearly and with precision.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">THE Space Build PROCESS</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 1 — Initial Consultation & Problem Mapping</h4>
            <p className="text-gray-700">Understanding what has changed, what is planned, and what is needed.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 2 — MahaVastu Audit</h4>
            <p className="text-gray-700">A deep analysis of the space before renovation.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 3 — Renovation Blueprint Creation</h4>
            <p className="text-gray-700">We redraw your renovation plan with Vastu-correct alignment.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 4 — Execution Support</h4>
            <p className="text-gray-700">Guiding contractors and ensuring no errors creep in.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 5 — Final Alignment & Review</h4>
            <p className="text-gray-700">Ensuring the renovated space is energetically complete.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">FAQs</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">1. Can you renovate the whole house according to Vastu?</h4>
              <p className="text-gray-700">Yes, whether it's one room or an entire property.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">2. Do I need to demolish walls for Vastu renovation?</h4>
              <p className="text-gray-700">Not always. Many corrections are non-structural.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">3. Can this be combined with interior design?</h4>
              <p className="text-gray-700">Absolutely, most renovation projects are integrated with our interior design services.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">4. Is a gridded layout required?</h4>
              <p className="text-gray-700">Yes. If you don't have one, Space Build will create it through our Gridding & Survey service.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">5. How long does the process take?</h4>
              <p className="text-gray-700">It depends on the scope, from 1 week for minor renovation guidance to multi-month support for full projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Renovate With Intention. Renovate With Alignment. Renovate With Space Build.
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Transform your existing space into a sanctuary of harmony, prosperity, and beauty.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">Begin Your Vastu Renovation Journey</p>
            <p className="text-gray-700">Call us today at:</p>
            <p className="text-[#D4935D] font-semibold text-lg">+917906086899</p>
            <p className="text-[#D4935D] font-semibold">spacebuild.india@gamil.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}