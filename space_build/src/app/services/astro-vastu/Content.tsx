import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AstroVastuPage() {
  return (
    <div className="min-h-screen bg-[#FFF2EB]">
      {/* Hero Section */}
      <section className="relative w-full h-[28vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/da12wzxoq/image/upload/v1765186695/5_wuf5ek.jpg"
          alt="AstroVastu by Vasterior"
          fill
          className="object-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              ASTROVASTU
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic">
              Where Your Space Meets Your Soul's Blueprint
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
        <span className="text-gray-900 font-medium">AstroVastu</span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">AstroVastu</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Align your environment with the planetary patterns that shape your nature, goals, and destiny.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            A personalised, cosmic-aligned approach that integrates your birth chart with MahaVastu principles; creating a space that resonates with who you truly are.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every individual carries a unique energetic signature; a blend of planetary influences, elemental tendencies, strengths, sensitivities, and karmic imprints.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Traditional Vastu studies a space. Astrology studies the person. <strong>AstroVastu brings the two together, harmonising the inhabitant with the habitat.</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Vasterior, our AstroVastu service maps your birth chart onto your home or workspace, ensuring every zone supports your natural rhythm, prakriti, potential, and planetary energies.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-lg text-gray-800 font-semibold mb-3">This creates a life where:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Your environment amplifies your strengths</li>
              <li>• Your challenges are softened</li>
              <li>• Your goals manifest more smoothly</li>
              <li>• Your emotional and mental patterns find synchrony</li>
              <li>• Your decisions feel aligned</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            AstroVastu is deeply personal, profoundly intuitive, and scientifically grounded in MahaVastu's zone–planet–element correlations.
          </p>
        </div>
      </section>

      {/* What AstroVastu Includes */}
      <section className="bg-[#f7d9bc] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-8">WHAT ASTROVASTU INCLUDES</h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">1. Birth Chart Study</h4>
              <p className="text-gray-700 mb-3">We analyse:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Planetary strengths & weaknesses</li>
                <li>• Yogas, doshas, karmic influences</li>
                <li>• Elemental imbalances</li>
                <li>• Career, finance, relationship indicators</li>
                <li>• Supportive vs conflicting planetary energies</li>
                <li>• Functional benefics & malefics</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This helps us understand your energetic DNA.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">2. Planet–Zone Mapping</h4>
              <p className="text-gray-700 mb-3">Each MahaVastu zone corresponds to planetary forces and devtas. We align:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Your planetary strengths with supportive zones</li>
                <li>• Your sensitive planets with healing zones</li>
                <li>• Your debilitated planets with corrective placements</li>
                <li>• Your dominant elements with balanced spatial activities</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This creates harmony between your inner chart and your outer space.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">3. Room & Function Allocation</h4>
              <p className="text-gray-700 mb-3">Based on your chart, we identify which zones are best suited for:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Master bedroom</li>
                <li>• Workspace / office</li>
                <li>• Children's rooms</li>
                <li>• Meditation or spiritual zones</li>
                <li>• Financial decision zones</li>
                <li>• Storage or heavy objects</li>
                <li>• Water-related activities</li>
                <li>• Fire-related activities</li>
                <li>• Creative or intellectual pursuits</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">Every room becomes a consciously aligned environment.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">4. Personalised Planetary Remedies in Space</h4>
              <p className="text-gray-700 mb-3">AstroVastu corrections include:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Elemental adjustments</li>
                <li>• Colour activations</li>
                <li>• Planet-specific objects</li>
                <li>• Directional anchors</li>
                <li>• Metal, wood, or light-based remedies</li>
                <li>• Placement of symbolic items</li>
                <li>• Strengthening weak planetary zones</li>
                <li>• Soothing hyperactive planetary zones</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">These remedies are aesthetic, subtle, and modern; designed to blend seamlessly into contemporary interiors.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">5. Behavioural & Activity Alignment</h4>
              <p className="text-gray-700 mb-3">Your daily habits, routines, and tasks are synced with:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Beneficial planetary timings</li>
                <li>• Supportive zones in your layout</li>
                <li>• Your natural prakriti</li>
                <li>• Your professional frequency</li>
                <li>• Your emotional temperament</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This helps you operate from your most aligned energetic window.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AstroVastu Matters */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">WHY ASTROVASTU MATTERS</h3>
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed font-semibold">
            Because no two people are identical — so no two homes should be, either.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Even in the same house:
          </p>
          <ul className="text-gray-700 space-y-1">
            <li>• One person may feel uplifted</li>
            <li>• Another may feel drained</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            The difference lies in planetary alignment.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">AstroVastu ensures:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• You sleep in the zone compatible with your Moon</li>
              <li>• You work in a zone that supports your Sun or Mercury</li>
              <li>• Your finances sit in a supportive Jupiter zone</li>
              <li>• Your marital harmony aligns with Venus</li>
              <li>• Your health is not conflicted by Rahu–Ketu disturbances</li>
              <li>• Your children grow in zones that strengthen their chart</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            When your planet–space relationship is corrected, life begins to flow with ease.
          </p>
        </div>
      </section>

      {/* Who Should Take AstroVastu */}
      <section className="bg-[#f7d9bc] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHO SHOULD TAKE ASTROVASTU?</h3>
          <p className="text-gray-700 mb-4">This service is ideal for:</p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• Individuals who feel "energetically mismatched" with their home</li>
              <li>• Families where some members thrive while others struggle</li>
              <li>• Business owners needing better flow, success, and visibility</li>
              <li>• Parents planning rooms for children based on their nature</li>
              <li>• People sensitive to energy, emotions, or environmental shifts</li>
              <li>• Anyone facing recurring issues despite Vastu-correct layouts</li>
              <li>• People wanting planetary support for specific goals</li>
              <li>• Individuals setting up a new home or workspace</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic">
            AstroVastu is especially powerful for new beginnings; new offices, new relationships, new aspirations, or new homes.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">BENEFITS OF ASTROVASTU</h3>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• Deep alignment of personality and space</li>
            <li>• Smoother manifestation of goals</li>
            <li>• Better mental clarity & emotional balance</li>
            <li>• Enhanced performance and productivity</li>
            <li>• Improved relationships & harmony</li>
            <li>• Stable finances and decision-making</li>
            <li>• Reduced friction, conflict & stagnation</li>
            <li>• A sense of belonging, grounding & inner calm</li>
            <li>• A space that feels naturally "yours"</li>
          </ul>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">
          It is alignment in the truest sense: inner energies + outer environment + life direction.
        </p>
      </section>

      {/* Deliverables */}
      <section className="bg-[#f7d9bc] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">DELIVERABLES (WHAT YOU RECEIVE)</h3>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• Detailed birth chart interpretation</li>
              <li>• Zone–planet alignment map</li>
              <li>• Personalised functional plan for each room</li>
              <li>• Elemental & object-based corrections</li>
              <li>• Modern, aesthetic AstroVastu remedies</li>
              <li>• Behavioural and activity guidelines</li>
              <li>• Compatibility insights (for families/couples)</li>
              <li>• Planetary support plan for goals</li>
              <li>• Implementation guidance</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic">
            Everything is presented clearly, visually, and practically.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">THE ASTROVASTU PROCESS</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 1 — Birth Details Intake</h4>
            <p className="text-gray-700">(Date, time, place of birth)</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 2 — Chart Interpretation</h4>
            <p className="text-gray-700">Planetary, elemental, and karmic analysis.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 3 — Vastu Layout Mapping</h4>
            <p className="text-gray-700">Your chart is layered onto the MahaVastu grid.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 4 — Diagnosis</h4>
            <p className="text-gray-700">Where space and chart support each other, and where they conflict.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 5 — Remedy Prescription</h4>
            <p className="text-gray-700">Precise planetary + spatial corrections.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 6 — Implementation & Follow-Up</h4>
            <p className="text-gray-700">Guidance on remedy placement and behavioural alignment.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f7d9bc] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">FAQs</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">1. Do I need a gridded layout for AstroVastu?</h4>
              <p className="text-gray-700">Yes, a precise layout is essential. If you don't have one, Vasterior can do it through the Gridding & Survey service.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">2. Is this the same as religious astrology?</h4>
              <p className="text-gray-700">No. AstroVastu is scientific, zone-based, and focused on energy alignment, not rituals.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">3. Will I need to change rooms?</h4>
              <p className="text-gray-700">Sometimes, yes, if your chart strongly indicates a conflicting zone.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">4. Are remedies traditional or complicated?</h4>
              <p className="text-gray-700">No. Remedies are modern, aesthetic, and easy to implement.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">5. How soon will I feel a difference?</h4>
              <p className="text-gray-700">Most people experience shifts within 15–60 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Align Your Space With Your Soul's Purpose
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Let your home and workplace reflect who you are, and who you are becoming.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">Book Your AstroVastu Consultation</p>
            <p className="text-gray-700">Contact us today at:</p>
            <p className="text-[#D4935D] font-semibold text-lg">+917906086899</p>
            <p className="text-[#D4935D] font-semibold">info@spacebuild.com</p>
          </div>
          <p className="text-gray-600 italic mt-6">
            A cosmic alignment that transforms both the environment and the self.
          </p>
        </div>
      </section>
    </div>
  );
}