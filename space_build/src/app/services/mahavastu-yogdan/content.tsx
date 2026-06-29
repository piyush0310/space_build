import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function MahaVastuYogdanPage() {
  return (
    <div className="min-h-screen bg-[#edf4f8]">
      {/* Hero Section */}
      <section className="relative w-full h-[25vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkpejqlby/image/upload/v1769677935/Mahavastu-Yogdyaan_ezo4yu.jpg"
          alt="MahaVastu Yogdan by SPACE BUILD"
          fill
          className="object-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              MAHAVASTU YOGDAN
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic">
              A Free, Heart-Led Service for Clarity, Balance & Life Harmony
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
        <span className="text-gray-900 font-medium">MahaVastu Yogdan</span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">Mahavastu Yogdan</h2>
          <p className="text-lg text-center text-gray-700 italic mb-2">
            A sacred offering of guidance, clarity, and energetic support - absolutely free.
          </p>
          <p className="text-lg text-center text-[#D4935D] font-semibold">
            Every Wednesday at SPACE BUILD.
          </p>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-3xl font-serif text-gray-800">INTRODUCTION</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            MahaVastu Yogdan is one of the most meaningful services we offer at Space Build.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            It is not a consultation. It is not a commercial service.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            It is a commitment of gratitude; a gurudakshina offered by all trained MahaVastu practitioners to honor Dr. Khushdeep Bansal, who brought the MahaVastu system to millions through rigorous research, science, and real-life case studies.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold text-center text-lg mb-3">Guided by the motto:</p>
            <p className="text-gray-700 text-center italic text-xl">
              "Har Ghar Hoga MahaVastu; Dhan, Sukh, Sehat Tathastu."
            </p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Yogdan exists to help individuals move from confusion to clarity, from imbalance to harmony, from challenges to possibilities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            It is a space where people find direction, actionable steps, and emotional relief; all through the precision and compassion of MahaVastu.
          </p>
        </div>
      </section>

      {/* What is MahaVastu Yogdan */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHAT IS MAHAVASTU YOGDAN?</h3>
          <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
            <p className="text-gray-700 leading-relaxed">
              MahaVastu Yogdan is a 20-minute free session dedicated to identifying the root cause of a client's problem and providing simple, practical MahaVastu-based insights that help them resolve it.
            </p>
            <p className="text-gray-700">Whether the concern relates to:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Career or finances</li>
              <li>• Business stagnation</li>
              <li>• Relationships or emotional well-being</li>
              <li>• Property issues</li>
              <li>• Sudden obstacles</li>
              <li>• Peace, stability, or health</li>
            </ul>
            <p className="text-gray-700 leading-relaxed italic">
              …MahaVastu Yogdan offers a grounded, non-superstitious, structured approach to understanding why the problem exists and how it can be corrected.
            </p>
          </div>
        </div>
      </section>

      {/* How the Session Works */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">HOW THE SESSION WORKS (20 Minutes)</h3>
        <p className="text-gray-700 mb-6">Each Yogdan session follows a strict, result-oriented format to honor the client's time and ensure clarity.</p>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">1. Understanding the Issue - 10 Minutes</h4>
            <p className="text-gray-700">We listen carefully to the client's concern to understand symptoms, timelines, patterns, and emotional context.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">2. Analyzing the Layout - 5 Minutes</h4>
            <p className="text-gray-700 mb-3">Using the MahaVastu method, we assess:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• The 16 directional zones</li>
              <li>• Elemental imbalances</li>
              <li>• Activity misplacements</li>
              <li>• 45 devta influences</li>
              <li>• Marma points</li>
              <li>• Space-object alignments</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">The goal is to identify the root cause - not the visible problem, but the energetic misalignment beneath it.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 text-xl mb-3">3. Offering MahaVastu Insights - 5 Minutes</h4>
            <p className="text-gray-700 mb-3">Clients receive:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Clear explanation of what is causing the issue</li>
              <li>• Easy, non-destructive corrections</li>
              <li>• Practical steps to follow</li>
              <li>• Element or object-based adjustments</li>
              <li>• Behavioral or activity recommendations</li>
            </ul>
            <p className="text-gray-700 mt-3 italic">These insights are precise, effective, and time-bound, helping clients experience real improvements.</p>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">PREREQUISITES</h3>
          <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
            <p className="text-gray-700">To ensure meaningful results, clients must bring:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• A scaled layout of the home or office</li>
              <li>• The correct Google location</li>
            </ul>
            <p className="text-gray-700">If possible:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• A gridded layout (saves analysis time)</li>
              <li>• True north indication</li>
              <li>• Recent photos of the space</li>
            </ul>
            <p className="text-gray-700 font-semibold mt-4">
              Without a proper layout, the session cannot be conducted.
            </p>
          </div>
        </div>
      </section>

      {/* Important Guidelines */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">IMPORTANT GUIDELINES</h3>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• Completely free service</li>
            <li>• Offered only on Wednesdays</li>
            <li>• Each person can attend once every 4 months</li>
            <li>• Strictly offline, not available online</li>
            <li>• All shared information is private and confidential</li>
            <li>• If the client prefers, they may consult any MahaVastu practitioner in their area</li>
          </ul>
          <p className="text-gray-700 mt-6 italic">
            Yogdan is not a replacement for a full consultation; it is a short, actionable clarity session.
          </p>
        </div>
      </section>

      {/* Who Should Come */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHO SHOULD COME FOR MAHAVASTU YOGDAN?</h3>
          <p className="text-gray-700 mb-4">This service is ideal for those who:</p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• Are facing immediate or unexpected challenges</li>
              <li>• Want clarity before making major decisions</li>
              <li>• Feel emotionally or energetically stuck</li>
              <li>• Need direction but are unsure where to begin</li>
              <li>• Want to understand whether their problem is Vastu-related</li>
              <li>• Cannot invest in a full consultation yet</li>
              <li>• Wish to experience MahaVastu before committing to a larger project</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic text-center">
            Yogdan is the first ray of light, a beginning point.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">BENEFITS OF MAHAVASTU YOGDAN</h3>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• Precise understanding of the root cause</li>
            <li>• Immediate clarity and relief</li>
            <li>• Simple, practical corrections</li>
            <li>• No demolition or structural changes</li>
            <li>• Confidential and respectful experience</li>
            <li>• A chance to evaluate if deeper consultation is needed</li>
            <li>• A supportive environment built on care and science</li>
          </ul>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">
          Most importantly, Yogdan reconnects clients with hope and direction.
        </p>
      </section>

      {/* FAQs */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">FAQs</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">1. Is this service really free?</h4>
              <p className="text-gray-700">Yes. MahaVastu Yogdan is entirely free as an offering of gratitude and contribution.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">2. How long does the session last?</h4>
              <p className="text-gray-700">Each session is exactly 20 minutes, divided into 10 + 5 + 5 minutes.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">3. Do I need an appointment?</h4>
              <p className="text-gray-700">Yes, registrations are required due to limited slots.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">4. Can I attend online?</h4>
              <p className="text-gray-700">No. Yogdan is available only offline.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">5. I don't have a layout. Can you make one?</h4>
              <p className="text-gray-700">We can create a gridded layout through our Gridding & Surveying service (paid). Without a layout, Yogdan cannot be conducted.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">6. Will I get remedies?</h4>
              <p className="text-gray-700">Yes, simple, practical, non-destructive steps aligned with MahaVastu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Book Your MahaVastu Yogdan Slot
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            A small shift in your space can create a profound shift in your life.
          </p>
          <p className="text-lg text-gray-700 mb-6 italic">
            Begin with clarity. Begin with Yogdan.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">Register for Wednesday's Yogdan Session</p>
            <p className="text-gray-700">Connect with our experts today at:</p>
            <p className="text-[#D4935D] font-semibold text-lg">+917906086899</p>
            <p className="text-[#D4935D] font-semibold">info@spacebuild.com</p>
          </div>
          <p className="text-gray-600 italic mt-6">
            (First Come First Basis)
          </p>
        </div>
      </section>
    </div>
  );
}