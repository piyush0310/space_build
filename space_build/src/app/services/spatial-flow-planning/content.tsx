import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SpatialFlowPage() {
  return (
    <div className="min-h-screen bg-[#FFF2EB]">
      {/* Hero Section */}
      <section className="relative w-full h-[28vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkpejqlby/image/upload/v1769677934/Spatial-Flow-Planning_vxbctu.jpg"
          alt="Spatial Flow Planning by Vasterior"
          fill
          className="object-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              SPATIAL FLOW PLANNING
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic">
              Designing the effortless movement of people, objects, and energy within your space
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
        <span className="text-gray-900 font-medium">Spatial Flow Planning</span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">Spatial Flow Planning</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A refined design service that harmonizes movement, functionality, and energy — ensuring your space feels open, intuitive, and beautifully alive.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every space has a rhythm. Some homes feel naturally calm. Some offices feel instantly productive. Some rooms feel blocked, cramped, or heavy, even when they look beautiful.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            This invisible difference is the result of spatial flow, how people, air, light, objects, and energy travel through the environment.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">At Vasterior, Spatial Flow Planning combines:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• The science of MahaVastu</li>
              <li>• The precision of interior architecture</li>
              <li>• The psychology of movement</li>
              <li>• The aesthetics of luxury design</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            …to create spaces that breathe, expand, support, and uplift.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether it's a compact apartment, a luxury villa, a corporate office, or a boutique commercial space, the way energy flows determines how you feel, think, work, and live.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            This service optimizes the flow of your space so every movement feels effortless, every corner feels intentional, and every room feels aligned.
          </p>
        </div>
      </section>

      {/* What Spatial Flow Planning Includes */}
      <section className="bg-[#f7d9bc] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-8">WHAT SPATIAL FLOW PLANNING INCLUDES</h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">1. Movement Pathway Mapping</h4>
              <p className="text-gray-700 mb-3">We study how you move through your space:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Entry → living → bedrooms</li>
                <li>• Kitchen → dining → utility</li>
                <li>• Office entry → reception → conference areas</li>
                <li>• Staff flow vs guest flow</li>
                <li>• Private vs public zones</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This helps remove friction, congestion, or overlaps that disrupt harmony.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">2. Object & Furniture Placement</h4>
              <p className="text-gray-700 mb-3">Furniture placement has a profound effect on energy flow. We evaluate:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Large furniture blocking zones</li>
                <li>• Incorrect placement in sensitive MahaVastu zones</li>
                <li>• Height and weight imbalance</li>
                <li>• Directional distortions</li>
                <li>• Multi-use pathways</li>
                <li>• Door-to-door movement clashes</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">And reposition everything to support ease, comfort, and clarity.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">3. Element & Activity Balance</h4>
              <p className="text-gray-700 mb-3">Each zone has a natural element (fire, air, water, earth, space). We match activities and objects to the correct zones.</p>
              <p className="text-gray-700 mb-2">Example:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• A fire-related activity in a water zone disturbs both energy and movement.</li>
                <li>• A heavy storage unit in an air zone blocks circulation.</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">Spatial Flow Planning restores harmony through expert realignment.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">4. Natural Light & Ventilation Optimization</h4>
              <p className="text-gray-700 mb-3">Light defines how a space feels. We plan:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Window flow</li>
                <li>• Cross-ventilation paths</li>
                <li>• Light reflections</li>
                <li>• Entry points of natural light</li>
                <li>• Avoidance of light blockages</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This creates a peaceful, uplifting spatial atmosphere.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">5. Clutter & Obstruction Identification</h4>
              <p className="text-gray-700 mb-3">We identify points where energy gets stuck:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Sharp corners</li>
                <li>• Narrow corridors</li>
                <li>• Clutter accumulation zones</li>
                <li>• Dead spaces</li>
                <li>• Overstuffed corners</li>
                <li>• Unused objects affecting flow</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">You'll learn exactly what to remove, reposition, reuse, or redesign.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">6. Energy Flow Calibration</h4>
              <p className="text-gray-700 mb-3">Using MahaVastu principles, we refine:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Directional movement</li>
                <li>• Elemental transitions</li>
                <li>• Activity shifts in the day</li>
                <li>• High-energy vs low-energy zones</li>
                <li>• Spaces meant for rest vs spaces meant for action</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">The result is a space that feels good the moment you enter it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Spatial Flow Matters */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">WHY SPATIAL FLOW MATTERS</h3>
        <div className="space-y-4">
          <p className="text-lg text-gray-700 leading-relaxed">
            A beautifully designed space can still feel "wrong" if the flow is obstructed.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Conversely, even a simple space feels luxurious when the flow is harmonious.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">Spatial Flow Planning improves:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Ease of movement</li>
              <li>• Energy circulation</li>
              <li>• Productivity & focus</li>
              <li>• Emotional well-being</li>
              <li>• Relationship dynamics</li>
              <li>• Clarity of thought</li>
              <li>• Space utilization</li>
              <li>• Visual openness</li>
              <li>• Comfort & calmness</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed italic text-center">
            Flow is the difference between a house and a home, between a space and an experience.
          </p>
        </div>
      </section>

      {/* Who Should Take This Service */}
      <section className="bg-[#f7d9bc] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHO SHOULD TAKE THIS SERVICE?</h3>
          <p className="text-gray-700 mb-4">Ideal for:</p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• New homeowners wanting perfect setup</li>
              <li>• Offices feeling chaotic or low-energy</li>
              <li>• Families experiencing tension or clutter buildup</li>
              <li>• Apartments with limited space</li>
              <li>• Homes where movement feels restricted</li>
              <li>• Renovations needing pre-planning</li>
              <li>• Anyone wanting a more peaceful, intuitive environment</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic text-center">
            Spatial Flow Planning benefits both luxury spaces and compact homes alike.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">BENEFITS YOU EXPERIENCE</h3>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• A space that feels naturally open and spacious</li>
            <li>• Improved emotional balance and mental clarity</li>
            <li>• Better health, sleep, and stress reduction</li>
            <li>• Enhanced productivity and focus</li>
            <li>• Beautiful aesthetic transformation through re-alignment</li>
            <li>• Reduced clutter and chaos</li>
            <li>• Harmonious energy movement across all rooms</li>
            <li>• A calm, grounded, and welcoming environment</li>
          </ul>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">
          It's not interior designing, it's interior harmonizing.
        </p>
      </section>

      {/* Deliverables */}
      <section className="bg-[#f7d9bc] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">DELIVERABLES</h3>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-700 mb-3">You receive:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• A complete spatial flow assessment</li>
              <li>• Room-by-room movement maps</li>
              <li>• Furniture placement plan</li>
              <li>• Object realignment guide</li>
              <li>• Element & activity matching plan</li>
              <li>• Do's and Don'ts based on zone energy</li>
              <li>• Optional styling suggestions for final refinement</li>
              <li>• Implementation guidance + review</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic text-center">
            All advice is aesthetic, modern, and tailored to your lifestyle.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">THE VASTERIOR PROCESS</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 1 — Understanding Your Lifestyle</h4>
            <p className="text-gray-700">Your routines, family structure, work style, emotional needs.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 2 — Layout & Zone Study</h4>
            <p className="text-gray-700">We map movement against MahaVastu zones.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 3 — On-Site Observation</h4>
            <p className="text-gray-700">Identifying blocks, disturbances, or friction zones.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 4 — Replanning</h4>
            <p className="text-gray-700">Reworking the flow of objects, furniture, and pathways.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 5 — Alignment + Refinement</h4>
            <p className="text-gray-700">Ensuring both movement and energy feel seamless.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 6 — Implementation Support</h4>
            <p className="text-gray-700">Guidance through rearrangement & adjustments.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f7d9bc] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">FAQs</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">1. Do I need to buy new furniture?</h4>
              <p className="text-gray-700">No. We focus on repositioning what you already have.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">2. Will this require renovation?</h4>
              <p className="text-gray-700">Rarely. Spatial flow is improved through placement, not demolition.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">3. How long does the process take?</h4>
              <p className="text-gray-700">Usually 1-2 hours on-site + planning time.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">4. Is this different from interior design?</h4>
              <p className="text-gray-700">Yes; it focuses on how the space feels and functions, not just how it looks.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">5. Does this involve Vastu remedies?</h4>
              <p className="text-gray-700">Yes, but subtle. We focus on movement, alignment, and flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Create a Space That Feels Effortless and Alive
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Let Vasterior transform your home or office into an environment that supports clarity, flow, and everyday harmony.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">Book Your Spatial Flow Planning Session</p>
            <p className="text-gray-700">Connect with our experts today at:</p>
            <p className="text-[#D4935D] font-semibold text-lg">+917906086899</p>
            <p className="text-[#D4935D] font-semibold">info@spacebuild.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}