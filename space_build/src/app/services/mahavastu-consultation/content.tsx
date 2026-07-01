import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PaidMahaVastuPage() {
  return (
    <div className="min-h-screen bg-[#edf4f8]">
      {/* Hero Section */}
      <section className="relative w-full h-[28vh] md:h-[60vh] overflow-hidden">
  <Image
    src="https://res.cloudinary.com/dkpejqlby/image/upload/v1766997015/1_j979l8.jpg"
    alt="MahaVastu Consultation by Space Build"
    fill
    priority
    className="object-full"
  />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">
              MAHAVASTU CONSULTATION
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light italic mb-2">
              For Manifestation, Life Alignment & Resolving Immediate Challenges
            </p>
            <p className="text-lg md:text-xl text-white/90 font-light italic">
              with Scientific Vastu Precision
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
        <span className="text-gray-900 font-medium">MahaVastu Consultation</span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">Mahavastu Consultation</h2>
          <p className="text-lg text-center text-gray-700 mb-2">
            A deep-dive, goal-focused, and transformational Vastu service designed to align your space with your life's highest intentions.
          </p>
          <p className="text-lg text-center text-[#D4935D] font-semibold">
            Starting at ₹25,000 (Online) and ₹51,000 (Offline)
          </p>
        </div>
        
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            A space has a language. It expresses your desires, reflects your challenges, and silently shapes your experiences.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            The MahaVastu Consultation at Space Build is a structured, scientific, and deeply personalized process that studies this language; helping you correct misalignments, manifest specific goals, and create a life filled with clarity, stability, growth, and harmony.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Unlike the free Yogdan session, this consultation is immersive. It involves layered analysis, expert diagnosis, strategic remedies, and ongoing support designed for individuals who want meaningful, measurable results.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">This service is ideal for those:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Planning to renovate</li>
              <li>• Facing recurring or sudden problems</li>
              <li>• Feeling blocked in growth, finances, career, or relationships</li>
              <li>• Seeking manifestation of long-term goals</li>
              <li>• Wanting stability in business, family, or personal life</li>
              <li>• Wanting an aligned home that supports their aspirations</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed italic text-center">
            This session is where clarity transforms into actionable change.
          </p>
        </div>
      </section>

      {/* What This Consultation Offers */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-8">WHAT THIS CONSULTATION OFFERS</h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">1. A Goal-Based Approach</h4>
              <p className="text-gray-700 mb-3">You can choose to focus on:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Career & growth</li>
                <li>• Business expansion</li>
                <li>• Relationship harmony</li>
                <li>• Emotional balance</li>
                <li>• Health & healing</li>
                <li>• Education & focus</li>
                <li>• Money stability</li>
                <li>• Visibility & recognition</li>
                <li>• Removing obstacles</li>
                <li>• Peace & mental clarity</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">We align your space with the frequency of your goals, ensuring your environment actively supports your journey.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">2. Layer-by-Layer Vastu Analysis</h4>
              <p className="text-gray-700 mb-3">We evaluate:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• The 16 MahaVastu zones</li>
                <li>• Elemental imbalances</li>
                <li>• Zone–activity mismatches</li>
                <li>• Object & remedy placements</li>
                <li>• Energy distortions</li>
                <li>• Marma sensitivities</li>
                <li>• Space usage patterns</li>
                <li>• Emotional + behavioural imprints</li>
                <li>• Signs from the built environment</li>
                <li>• Possible AstroVastu influences (if needed)</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This helps us identify not just the symptom but the source.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">3. Time-Bound Remedies & Clear Action Plan</h4>
              <p className="text-gray-700 mb-3">Every recommendation is:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Practical</li>
                <li>• Non-destructive</li>
                <li>• Modern</li>
                <li>• Aesthetic</li>
                <li>• Easy to implement</li>
                <li>• Energy-aligned</li>
                <li>• Backed by 10,000+ case studies in the MahaVastu system</li>
              </ul>
              <p className="text-gray-700 mt-3 mb-2">Your plan includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Elemental corrections</li>
                <li>• Activity repositioning</li>
                <li>• Object placement changes</li>
                <li>• Colour interventions</li>
                <li>• Metal/wood/fire/water/earth alignments</li>
                <li>• Behavioural resonance practices</li>
                <li>• AstroVastu insights (optional)</li>
                <li>• Renovation guidance (if needed)</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">Each step is designed to create a measurable shift within a defined timeline.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">4. Execution Guidance</h4>
              <p className="text-gray-700 mb-3">For offline clients, we conduct:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• One site visit within 3 months</li>
                <li>• Placement verifications</li>
                <li>• Spatial flow adjustments</li>
                <li>• Quality checks</li>
                <li>• Calibration of remedies</li>
              </ul>
              <p className="text-gray-700 mt-3 mb-2">For online clients:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Step-by-step execution support</li>
                <li>• Photo/video verification of placements</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">5. Follow-Up Support</h4>
              <p className="text-gray-700">Every client receives expert guidance over the next 3 months, ensuring the remedies and alignment processes are implemented correctly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">PRICING</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h4 className="font-semibold text-gray-800 text-2xl mb-3">₹25,000</h4>
            <p className="text-[#D4935D] font-semibold mb-4">Online Consultation</p>
            <p className="text-gray-700">Ideal for those living outside Delhi NCR or preferring a virtual format.</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h4 className="font-semibold text-gray-800 text-2xl mb-3">₹51,000</h4>
            <p className="text-[#D4935D] font-semibold mb-4">Offline Consultation</p>
            <p className="text-gray-700 mb-3">Includes:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Full on-site assessment</li>
              <li>• One site visit within 3 months</li>
              <li>• Deep diagnosis + personalised remedy plan</li>
              <li>• Alignment support throughout execution</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-700 mt-6 italic text-center">
          This is a premium service for clients seeking precise, long-term alignment with expert involvement.
        </p>
      </section>

      {/* When Should You Book */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHEN SHOULD YOU BOOK A MAHAVASTU CONSULTATION?</h3>
          <p className="text-gray-700 mb-4">This service is perfect for you if:</p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• You recently renovated and suddenly things feel "off"</li>
              <li>• You are planning a major life or business upgrade</li>
              <li>• Your home/office feels heavy, chaotic, or draining</li>
              <li>• Relationships or finances are unexpectedly unstable</li>
              <li>• Career progress has slowed without logical reason</li>
              <li>• You are stuck despite consistent effort</li>
              <li>• You want to manifest a specific outcome</li>
              <li>• You need a structured, expert-led approach</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic text-center">
            MahaVastu consultation aligns your environmental energy with your internal direction.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">BENEFITS YOU EXPERIENCE</h3>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• Clarity on the root cause of issues</li>
            <li>• A space that supports your vision</li>
            <li>• Improved flow, productivity, harmony & health</li>
            <li>• Better financial stability</li>
            <li>• Enhanced emotional balance</li>
            <li>• Removal of energetic blockages</li>
            <li>• Aesthetic yet powerful corrections</li>
            <li>• Better relationships and communication</li>
            <li>• Natural manifestation of goals</li>
            <li>• A home or office that feels inspired and alive</li>
          </ul>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">
          This service doesn't just change your space, it transforms how you live within it.
        </p>
      </section>

      {/* Deliverables */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHAT YOU RECEIVE (DELIVERABLES)</h3>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• Comprehensive MahaVastu analysis of your layout</li>
              <li>• A personalised remedy & implementation plan</li>
              <li>• Step-by-step correction guide</li>
              <li>• 3-month alignment support</li>
              <li>• One site visit (offline clients only)</li>
              <li>• Spatial flow improvements</li>
              <li>• Colour & element mapping</li>
              <li>• Guidance for renovation (if applicable)</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic text-center">
            Every element of this service is tailored exclusively to your goals and your space.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">THE Space Build CONSULTATION PROCESS</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 1 — Intake & Goal Setting</h4>
            <p className="text-gray-700">We begin by understanding your challenges, aspirations, and timelines.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 2 — Layout Study & Energetic Diagnosis</h4>
            <p className="text-gray-700">Detailed analysis of your zones, elements, devtas, and object placements.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 3 — Deep Discussion & Explanation</h4>
            <p className="text-gray-700">You learn why an issue is happening, not just what to fix.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 4 — Remedy Plan</h4>
            <p className="text-gray-700">Precise corrections are prescribed with clear do's and don'ts.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 5 — Implementation Support</h4>
            <p className="text-gray-700">We guide you through applying the remedies.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 6 — Follow-Up Check</h4>
            <p className="text-gray-700">Progress is monitored and adjustments made as needed.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">FAQs</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">1. Is this consultation different from Yogdan?</h4>
              <p className="text-gray-700">Yes. Yogdan is a free, 20-minute clarity session. This is a full, in-depth consultation with layered analysis, remedy planning, and months of support.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">2. How quickly will I see results?</h4>
              <p className="text-gray-700">Most clients experience shifts within 7–45 days, depending on the issue and implementation.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">3. Do you need a gridded layout?</h4>
              <p className="text-gray-700">Yes. If you don't have one, Space Build can do the gridding & surveying for you (paid separately).</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">4. Is demolition required?</h4>
              <p className="text-gray-700">No. MahaVastu solutions are modern and non-destructive.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">5. Do remedies look traditional or out of place?</h4>
              <p className="text-gray-700">No. All remedies are aesthetic, subtle, and blend beautifully into contemporary homes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Book Your Personal MahaVastu Consultation Today
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Create a life where your space actively supports your success, stability, and joy.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">Schedule Your Consultation (Online or Offline)</p>
            <p className="text-gray-700">Get in touch with our experts today at:</p>
            <p className="text-[#D4935D] font-semibold text-lg">+917906086899</p>
            <p className="text-[#D4935D] font-semibold">spacebuild.india@gmail.com</p>
          </div>
          <p className="text-gray-600 italic mt-6">
            Let your journey toward alignment begin.
          </p>
        </div>
      </section>
    </div>
  );
}