import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function GriddingSurveyPage() {
  return (
    <div className="min-h-screen bg-[#edf4f8]">
      {/* Hero Section */}
      <section className="relative w-full h-[28vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkpejqlby/image/upload/v1769677934/Gridding_mtmfxh.jpg"
          alt="Gridding, Layout Planning & Surveying by Space Build"
          fill
          className="object-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">
              GRIDDING, LAYOUT PLANNING & SURVEYING
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic">
              The scientific foundation of every aligned home, office & commercial space
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
        <span className="text-gray-900 font-medium">Vastu Gridding & Survey</span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">Vastu Gridding & Survey</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Precision mapping that reveals the true energy blueprint of your space.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The first and most critical step in any Vastu consultation or interior design project.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Before a space can be corrected, designed, renovated, or aligned, it must be understood.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Space Build, Gridding and MahaVastu Surveying form the technical backbone of every project. This service transforms an ordinary floor plan into a scientifically accurate energy map, revealing how the 16 MahaVastu zones, 45 devtas, marma points, and elemental forces interact with your real-world environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Unlike conventional architectural drawings, MahaVastu gridding identifies the true north (which often differs from magnetic north) and places your entire space in a cosmically accurate orientation.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            The result is a precise energetic blueprint, empowering both client and consultant with clarity before any changes, remedies, or design decisions are made.
          </p>
        </div>
      </section>

      {/* What This Service Includes */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-8">WHAT THIS SERVICE INCLUDES</h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">1. Identifying True North</h4>
              <p className="text-gray-700 mb-2">Most architectural plans rely on magnetic north, which is often several degrees off from true north.</p>
              <p className="text-gray-700">Our surveyors use professional instruments to establish accurate directional alignment, ensuring the entire analysis is correct.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">2. Creating a Gridded MahaVastu Layout</h4>
              <p className="text-gray-700 mb-3">Every square inch of the space is divided and mapped according to:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• 16 MahaVastu Zones</li>
                <li>• 45 Devtas (Directional Deities)</li>
                <li>• 8 Directions + 4 Sub-directions</li>
                <li>• Marma Points (Sensitive energy intersections)</li>
                <li>• Activity–Element correlations</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This grid becomes the master document for deeper consultations, renovations, or interior design.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">3. Full On-Site Survey & Documentation</h4>
              <p className="text-gray-700 mb-3">Our team conducts a detailed visual and sensory inspection of the space:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Complete video walkthrough</li>
                <li>• High-resolution photographs of each direction</li>
                <li>• Notes on natural light, ventilation, and openings</li>
                <li>• Mapping of water outlets, heavy objects, electrical units</li>
                <li>• Identification of imbalances, distortions, or zone violations</li>
                <li>• Preliminary suggestions for color and element corrections</li>
                <li>• Floor level differences, depressions, and clutter accumulation points</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This documentation allows MahaVastu practitioners to understand the space deeply even without being physically present.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">4. Audit Reports (Client Copy Included)</h4>
              <p className="text-gray-700 mb-3">You receive a comprehensive set of documents:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Gridded MahaVastu layout (PDF + print-ready)</li>
                <li>• True North–corrected orientation map</li>
                <li>• Zone-by-zone observations</li>
                <li>• Elemental balance and imbalance notes</li>
                <li>• Key concerns flagged</li>
                <li>• Suggested next steps</li>
                <li>• Photographic survey folder</li>
                <li>• Video documentation</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">These reports are client-owned, meaning you can use them with any MahaVastu expert in future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gridding is Essential */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">WHY GRIDDING IS ESSENTIAL</h3>
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            Everything that follows; consultation, correction, renovation, even interior styling — depends on this stage.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">Without accurate gridding:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Remedies may not work</li>
              <li>• Zones can be misinterpreted</li>
              <li>• Activities may be placed incorrectly</li>
              <li>• Renovation decisions can become costly mistakes</li>
              <li>• AstroVastu alignment becomes impossible</li>
              <li>• Interior design loses energetic harmony</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            Gridding ensures your entire project is based on scientific precision, not guesswork.
          </p>
        </div>
      </section>

      {/* When Should You Take This Service */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHEN SHOULD YOU TAKE THIS SERVICE?</h3>
          <p className="text-gray-700 mb-4">This service is ideal for:</p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• New home or office purchases</li>
              <li>• Beginning a MahaVastu consultation</li>
              <li>• Pre-renovation planning</li>
              <li>• Understanding recurring problems in the space</li>
              <li>• Preparing documentation for another MahaVastu expert</li>
              <li>• Architects or interior designers who want accurate Vastu integration</li>
              <li>• Businesses moving into a new commercial space</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic">
            If your space is the "cause," gridding reveals the exact nature of that cause.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">BENEFITS YOU EXPERIENCE</h3>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• Absolute clarity about what's working and what's not</li>
            <li>• A technical blueprint for all future decisions</li>
            <li>• Removal of confusion around directions</li>
            <li>• Accurate Vastu analysis and remedies</li>
            <li>• Prevention of costly renovation errors</li>
            <li>• A clear understanding of zone, activity mismatches</li>
            <li>• Deep awareness of how your space affects your life goals</li>
          </ul>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">
          A well-gridded layout is a lifetime asset.
        </p>
      </section>

      {/* Deliverables */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">DELIVERABLES (WHAT YOU RECEIVE)</h3>
          <p className="text-gray-700 mb-4">By the end of the survey, you receive:</p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>1. True North–aligned scaled layout</li>
              <li>2. MahaVastu Grid (16 zones + devtas + marma points)</li>
              <li>3. Video walkthrough scan</li>
              <li>4. Photographic documentation of every corner</li>
              <li>5. Survey report with findings</li>
              <li>6. Activity & element imbalance notes</li>
              <li>7. Initial observations by survey team</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic">
            Everything is delivered digitally + optionally in printed format.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">THE PROCESS AT Space Build</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 1 — Project Intake</h4>
            <p className="text-gray-700">We understand your purpose: consultation, renovation, or interior design.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 2 — Site Visit</h4>
            <p className="text-gray-700">Our trained MahaVastu surveyors visit the location with professional tools.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 3 — True North Mapping</h4>
            <p className="text-gray-700">All calculations are aligned using accurate directional instruments.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 4 — Grid Creation</h4>
            <p className="text-gray-700">The team divides the layout using MahaVastu methodology.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 5 — Site Documentation</h4>
            <p className="text-gray-700">Videos + photos + technical notes are collected.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 6 — Audit Compilation</h4>
            <p className="text-gray-700">All findings are consolidated into a clear report.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 7 — Client Handover</h4>
            <p className="text-gray-700">You receive the entire set of maps, grids, and recordings.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">FAQs</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">1. Is gridding mandatory before a consultation?</h4>
              <p className="text-gray-700">Yes — any serious Vastu or interior project must begin with an accurate grid.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">2. How long does the survey take?</h4>
              <p className="text-gray-700">Typically 1–3 hours, depending on property size.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">3. Can I use this layout with another MahaVastu consultant?</h4>
              <p className="text-gray-700">Absolutely. All documents are client-owned.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">4. Is the cost separate from consultation fees?</h4>
              <p className="text-gray-700">Yes. Gridding is a standalone technical service.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">5. Do you offer online surveying?</h4>
              <p className="text-gray-700">No, gridding requires on-site measurements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Begin Your Vastu Journey with Scientific Accuracy
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            A correct grid is the foundation of every aligned, successful home or workspace.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">Book Your Space Build Survey Today</p>
            <p className="text-gray-700">Call us today at:</p>
            <p className="text-[#D4935D] font-semibold text-lg">+917906086899</p>
            <p className="text-[#D4935D] font-semibold">spacebuild.india@gamil.com</p>
          </div>
          <p className="text-gray-600 italic mt-6">
            (Set the correct direction before you take the next step.)
          </p>
        </div>
      </section>
    </div>
  );
}