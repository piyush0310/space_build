import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SpaceBuildServicesPage() {
  return (
    <div className="min-h-screen bg-[#EDF4F8]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&auto=format&fit=crop&q=100"
          alt="SPACE BUILD SERVICES"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              SPACE BUILD SERVICES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic">
              Where Energy, Aesthetics & Purpose Converge
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-600 flex items-center gap-2">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Services</span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">SPACE BUILD SERVICES</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At SPACE BUILD, we believe a space is more than architecture; it is a living organism, constantly interacting with its occupants. Every corner carries intention, every material holds memory, and every layout shapes how energy moves through life.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our services unite MahaVastu science, spatial psychology, and luxury interior design to create environments that feel grounded, beautiful, and profoundly aligned with your goals.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            Whether you seek clarity, better flow, wellness, harmony, or a complete transformation, SPACE BUILD offers a structured, holistic approach that honours both your vision and your energy.
          </p>
        </div>
      </section>

      {/* Our Core Offerings */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-8 text-center">OUR CORE OFFERINGS</h3>
          
          <div className="space-y-6">
            {/* Service 1: MahaVastu Yogdan */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Link href="/services/mahavastu-yogdan">
                <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">1. MahaVastu Yogdan</h4>
              </Link>
              <p className="text-gray-700 mb-3 italic">A free service dedicated to healing, clarity, and upliftment.</p>
              <p className="text-gray-700 mb-3">
                MahaVastu Yogdan is our heartfelt contribution to society; a gurudakshina-inspired offering by every trained MahaVastu practitioner to honour Dr. Khushdeep Bansal, the founder of the MahaVastu system.
              </p>
              <p className="text-gray-700 mb-3">
                This free service is designed for individuals facing challenges related to career, finances, relationships, stability, or emotional well-being.
              </p>
              <div className="bg-[#EDF4F8] rounded p-4 mb-3">
                <p className="text-gray-800 font-semibold text-center mb-2">Guided by the motto:</p>
                <p className="text-gray-700 text-center italic">
                  "Har Ghar Hoga MahaVastu; Dhan, Sukh, Sehat Tathastu."
                </p>
              </div>
              <p className="text-gray-700 mb-3">Each Yogdan session follows a precise and structured 20-minute process:</p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• 10 minutes – Understanding the client's concern</li>
                <li>• 5 minutes – Analyzing the layout</li>
                <li>• 5 minutes – Giving MahaVastu insights + practical steps</li>
              </ul>
              <p className="text-gray-700 mb-2 font-semibold">Important Notes:</p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• Offered every Wednesday, on-site and offline only</li>
                <li>• Each person can avail it once every 4 months</li>
                <li>• Privacy is guaranteed</li>
                <li>• Clients must bring a scaled layout with true north</li>
              </ul>
              <Link href="/services/mahavastu-yogdan" className="text-[#D4935D] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 6: Interior Designing */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Link href="/services/interior-designing">
                <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">2. Interior Designing</h4>
              </Link>
              <p className="text-gray-700 mb-3 italic">Luxury interiors rooted in energy, culture & timeless aesthetics.</p>
              <p className="text-gray-700 mb-3">
                SPACE BUILD designs homes, offices, boutique spaces, and commercial environments that blend architectural clarity, material warmth, spatial psychology, MahaVastu principles, and personal storytelling.
              </p>
              <p className="text-gray-700 mb-2">Our design process includes:</p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• Concept development</li>
                <li>• Spatial planning</li>
                <li>• Material & palette selection</li>
                <li>• Lighting strategy</li>
                <li>• Furniture detailing</li>
                <li>• Custom features & installations</li>
                <li>• Execution supervision</li>
              </ul>
              <p className="text-gray-700 mb-3">
                Every project becomes a signature narrative — visually stunning, emotionally grounded, and energetically aligned.
              </p>
              <Link href="/services/interior-designing" className="text-[#D4935D] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 2: Gridding */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Link href="/services/vastu-gridding-survey">
                <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">3. Gridding, Layout Planning & Surveying</h4>
              </Link>
              <p className="text-gray-700 mb-3 italic">The foundation of every accurate Vastu interpretation.</p>
              <p className="text-gray-700 mb-3">
                Before designing or renovating, your space must be measured, mapped, and understood with absolute precision — not intuitively, but scientifically.
              </p>
              <p className="text-gray-700 mb-2">Our trained surveyors create:</p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• True-North aligned layouts (correcting magnetic deviation)</li>
                <li>• 16-zone MahaVastu grid mapping</li>
                <li>• 45 devta distribution</li>
                <li>• Marma point identification</li>
                <li>• Image & video documentation of the site</li>
                <li>• Color and elemental assessments</li>
                <li>• Comprehensive audit reports</li>
              </ul>
              <p className="text-gray-700 mb-3">
                This step forms the technical backbone of every interior design, Vastu consultation, or renovation project.
              </p>
              <Link href="/services/vastu-gridding-survey" className="text-[#D4935D] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 5: Spatial Flow */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Link href="/services/spatial-flow-planning">
                <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">4. Spatial Flow Planning</h4>
              </Link>
              <p className="text-gray-700 mb-3 italic">Designing movement, intention, and energy.</p>
              <p className="text-gray-700 mb-3">
                Spatial Flow Planning ensures that every object, door, storage unit, and circulation path supports free movement, balanced energy, a clutter-free lifestyle, and a calm and intuitive environment.
              </p>
              <p className="text-gray-700 mb-2">We evaluate:</p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• Placement of beds, sofas, tables, workstations</li>
                <li>• Entry-exit routes</li>
                <li>• Overlaps of heavy/light elements</li>
                <li>• Movement blocks caused by furniture or objects</li>
                <li>• Flow of natural light and ventilation</li>
                <li>• Subtle energy flow distortions</li>
              </ul>
              <p className="text-gray-700 mb-3">
                The result is a space where your mind feels clear, your actions flow effortlessly, and your daily rhythms feel supportive and stress-free.
              </p>
              <Link href="/services/spatial-flow-planning" className="text-[#D4935D] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>

            {/* Service 3: MahaVastu */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Link href="/services/mahavastu-consultation">
                <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">5. Mahavastu Consultation</h4>
              </Link>
              <p className="text-gray-700 mb-3 italic">For manifestation, stability, new beginnings, and major life goals.</p>
              <p className="text-gray-700 mb-3">This premium consultation is ideal for individuals who:</p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• Are planning to renovate</li>
                <li>• Have made changes and are now facing unexpected challenges</li>
                <li>• Want to manifest specific goals</li>
                <li>• Need deeper alignment between their prakriti, profession, and living/working space</li>
              </ul>
              <p className="text-gray-700 mb-2">Our approach goes beyond basic Vastu tips. It involves:</p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• Layer-by-layer analysis of zones and objects</li>
                <li>• Astro-alignment (when needed)</li>
                <li>• Energy–profession–activity resonance</li>
                <li>• Time-bound recommendations</li>
                <li>• Execution guidance</li>
                <li>• Three-month check-ins</li>
                <li>• One site visit (for offline consultation)</li>
              </ul>
              <div className="bg-[#EDF4F8] rounded p-4 mb-3">
                <p className="text-gray-800 font-semibold mb-2">Pricing:</p>
                <p className="text-gray-700">• ₹25,000 — Online Consultation</p>
                <p className="text-gray-700">• ₹51,000 — Offline Consultation (includes 1 site visit)</p>
              </div>
              <Link href="/services/mahavastu-consultation" className="text-[#D4935D] font-semibold hover:underline">
                Learn More →
              </Link>
            </div>


            {/* Service 8: Vastu Styling */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Link href="/services/vastu-styling">
                <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">6. Vastu Styling</h4>
              </Link>
              <p className="text-gray-700 mb-3 italic">Remedies that are aesthetic, modern and energetically powerful.</p>
              <p className="text-gray-700 mb-3">
                Vastu Styling combines beauty with intention.
              </p>
              <p className="text-gray-700 mb-2">Instead of traditional, heavy corrective tools, we recommend:</p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• Curated objects</li>
                <li>• Artwork</li>
                <li>• Metal, wood, or ceramic elements</li>
                <li>• Color accents</li>
                <li>• Spatial accessories</li>
                <li>• Modern Vastu remedies</li>
                <li>• Placement corrections without demolition</li>
              </ul>
              <p className="text-gray-700 mb-3">
                These styling interventions elevate the look of the space, the elemental balance, the energy flow, and the emotional experience of living or working there.
              </p>
              <p className="text-gray-700 mb-2">
                Perfect for clients who want visible improvement without major changes.
              </p>

              <Link href="/services/vastu-styling" className="text-[#D4935D] font-semibold hover:underline">
                Learn More →
          </Link>
            </div>

            {/* Service 7: Vastu Renovation */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Link href="/services/vastu-renovation">
                <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">7. Vastu Renovation</h4>
              </Link>
              <p className="text-gray-700 mb-3 italic">Renovating your space with clarity, intention, and cosmic harmony.</p>
              <p className="text-gray-700 mb-3">
                Renovation becomes truly powerful when guided by Vastu.
              </p>
              <p className="text-gray-700 mb-2">We help clients:</p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• Reorient activities to correct zones</li>
                <li>• Modify layouts without structural destruction</li>
                <li>• Apply element balancing</li>
                <li>• Plan new construction with Vastu integration</li>
                <li>• Align renovations with long-term goals</li>
                <li>• Avoid common Vastu mistakes during redesign</li>
              </ul>
              <p className="text-gray-700 mb-3">
                This service is ideal for families refreshing their home, offices expanding or restructuring, retail spaces improving flow, and individuals facing recurring issues after renovations.
              </p>

              <Link href="/services/vastu-renovation" className="text-[#D4935D] font-semibold hover:underline">
                Learn More →
          </Link>
            </div>

            {/* Service: Project Management Consultation */}
<div className="bg-white rounded-lg p-6 shadow-md">
  <Link href="/services/project-management-consultation">
    <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">8. Project Management Consultation (PMC)</h4>
  </Link>
  <p className="text-gray-700 mb-3 italic">Plan smarter. Build better. Stress less.</p>
  <p className="text-gray-700 mb-3">
    Expert guidance to plan, coordinate, and execute your interior or renovation project smoothly — without stress, confusion, or costly mistakes.
  </p>
  <p className="text-gray-700 mb-2">This service is ideal for:</p>
  <ul className="space-y-2 text-gray-700 mb-3">
    <li>• Managing an interior or renovation project yourself</li>
    <li>• Coordinating multiple vendors independently</li>
    <li>• Structuring timelines, budgets, and scopes</li>
    <li>• Avoiding execution errors and costly reworks</li>
    <li>• Getting expert oversight without full execution contracts</li>
  </ul>
  <p className="text-gray-700 mb-3">
    PMC brings order, clarity, and strategic direction to your project, acting as your advisor, coordinator, and problem-solver at every stage.
  </p>
  <Link href="/services/project-management-consultation" className="text-[#D4935D] font-semibold hover:underline">
    Learn More →
  </Link>
</div>

            

            

            

            
            
          </div>
          
        </div>
      </section>

      {/*SPACE BUILD */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">WHY CHOOSE SPACE BUILD?</h3>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• A rare blend of luxury design + MahaVastu expertise</li>
            <li>• Deeply personalized, emotionally intelligent guidance</li>
            <li>• Non-destructive, modern, research-backed Vastu methods</li>
            <li>• Transparent, documented, professionally structured processes</li>
            <li>• Proven results with clients across India</li>
            <li>• Aesthetics and energy given equal importance</li>
          </ul>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">
          Your space should not only look extraordinary — it should feel like it belongs to you.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4 text-center">
          At SPACE BUILD, we design for your story, your goals, and your energetic blueprint.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Explore our services and discover how SPACE BUILD can help you create a space that truly supports your life.
            </p>
            <div className="space-y-2">
              <p className="text-xl font-semibold text-gray-800">Get in Touch Today</p>
              <p className="text-[#D4935D] font-semibold text-lg">+917906086899</p>
              <p className="text-[#D4935D] font-semibold">spacebuild.india@gamil.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}