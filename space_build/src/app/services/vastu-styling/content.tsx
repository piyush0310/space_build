import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function VastuStylingPage() {
  return (
    <div className="min-h-screen bg-[#edf4f8]">
      {/* Hero Section */}
      <section className="relative w-full h-[28vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/da12wzxoq/image/upload/v1769506557/Vastu-Styling_1_busrqm.jpg"
          alt="Vastu Styling by Space Build"
          fill
          className="object-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              VASTU STYLING
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic">
              Where aesthetics meet alignment; styling your space with beauty, intention, and energetic harmony
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
        <span className="text-gray-900 font-medium">Vastu Styling</span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">Vastu Styling</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A refined, non-destructive approach that elevates your space through curated objects, thoughtful placements, and elemental balance, without renovation or structural changes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Styling is the final layer of design, the part that shapes how a space feels the moment you enter it.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            But at Space Build, styling is more than décor. It is the art of placing objects, colours, elements, and features in a way that enhances both aesthetic beauty and energy alignment.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">Vastu Styling blends:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Luxury décor sensibility</li>
              <li>• MahaVastu principles</li>
              <li>• Spatial psychology</li>
              <li>• Colour and element theory</li>
              <li>• Light & shadow expression</li>
              <li>• Cultural intuition</li>
              <li>• Modern design language</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            This service is ideal for clients who want a space that feels harmonious and beautiful without undergoing any renovation or large-scale interior work.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            With subtle yet powerful styling corrections, you experience an environment that is visually refined, emotionally grounding, and energetically supportive.
          </p>
        </div>
      </section>

      {/* What Vastu Styling Includes */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-8">WHAT VASTU STYLING INCLUDES</h3>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">1. Object Placement & Realignment</h4>
              <p className="text-gray-700 mb-3">The placement of objects, even a simple vase or artwork, impacts flow and energy. We thoughtfully rearrange or recommend:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Art pieces</li>
                <li>• Mirrors</li>
                <li>• Sculptures</li>
                <li>• Décor accents</li>
                <li>• Metal objects</li>
                <li>• Plants</li>
                <li>• Lamps & lighting</li>
                <li>• Books, accessories, and functional items</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">Each object is placed in a zone that enhances its purpose and energy.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">2. Element Balancing Through Décor</h4>
              <p className="text-gray-700 mb-3">Every MahaVastu zone has a dominant element:</p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li>• Fire</li>
                <li>• Water</li>
                <li>• Air</li>
                <li>• Earth</li>
                <li>• Space</li>
              </ul>
              <p className="text-gray-700 mb-2">We use styling elements like:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Colours</li>
                <li>• Textures</li>
                <li>• Plants</li>
                <li>• Lighting</li>
                <li>• Metal accents</li>
                <li>• Wood or ceramic artefacts</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">…to restore balance and create visual comfort + emotional harmony.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">3. Colour Styling & Micro-Remedies</h4>
              <p className="text-gray-700 mb-3">Instead of painting entire walls, we introduce:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Accent colours</li>
                <li>• Cushions, rugs, throws</li>
                <li>• Artwork tones</li>
                <li>• Metal finishes</li>
                <li>• Curtains & textiles</li>
                <li>• Feature décor items</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">These micro-remedies subtly but significantly shift the energy of a room.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">4. Furniture Styling & Accessory Layering</h4>
              <p className="text-gray-700 mb-3">We refine the space through:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Better placement of furniture</li>
                <li>• Removing heavy objects from sensitive zones</li>
                <li>• Decluttering and reorganizing</li>
                <li>• Adding intentional layering (books, colours, textures)</li>
                <li>• Creating symmetry or asymmetry depending on the zone</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">A well-styled room gains depth, character, and harmony.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">5. Lighting & Atmosphere Enrichment</h4>
              <p className="text-gray-700 mb-3">Light defines emotion. We enhance your space through:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Table lamps</li>
                <li>• Floor lamps</li>
                <li>• Spotlight adjustments</li>
                <li>• Candle stands</li>
                <li>• Backlit décor</li>
                <li>• Warm/cool light balance</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This creates calmness, clarity, or vibrance based on the zone.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">6. Modern Vastu Remedies (Aesthetic & Non-Intrusive)</h4>
              <p className="text-gray-700 mb-3">Unlike traditional remedies, Space Build uses modern, subtle, and luxury-aligned solutions, such as:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Metal artefacts</li>
                <li>• Artistic bowls</li>
                <li>• Ceramic elements</li>
                <li>• Colour-infused décor</li>
                <li>• Natural crystals (only when needed)</li>
                <li>• Sculptural accents</li>
                <li>• Water-inspired décor pieces</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">Each remedy blends seamlessly into the décor while working deeply on the zone's energy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vastu Styling Matters */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">WHY VASTU STYLING MATTERS</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">Styling determines:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• How you feel when you walk into a room</li>
              <li>• How freely energy flows</li>
              <li>• How grounded or inspired you feel</li>
              <li>• How your mind processes visuals</li>
              <li>• How relationships and conversations flow</li>
              <li>• How restful or productive you become</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">Vastu Styling elevates:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Emotional atmosphere</li>
              <li>• Visual harmony</li>
              <li>• Functional comfort</li>
              <li>• Energetic alignment</li>
              <li>• Personal expression</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed italic text-center mt-6">
            It is the fastest and most beautiful way to transform a space without breaking a single wall.
          </p>
        </div>
      </section>

      {/* Who Is This Service For */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHO IS THIS SERVICE FOR?</h3>
          <p className="text-gray-700 mb-4">Vastu Styling is perfect for:</p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• New homeowners wanting immediate alignment</li>
              <li>• People who recently renovated but feel something is "off"</li>
              <li>• Offices needing clarity, focus, and prosperity energy</li>
              <li>• Individuals seeking aesthetic improvement without big budgets</li>
              <li>• Homes with good interiors but poor energy flow</li>
              <li>• People who want subtle but powerful, non-destructive corrections</li>
              <li>• Anyone wanting a refined, designer look with Vastu support</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic text-center">
            If you want your space to look luxurious and feel harmonious, this is the service for you.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">BENEFITS YOU EXPERIENCE</h3>
        <div className="bg-white rounded-lg p-6 shadow-md">
          <ul className="space-y-2 text-gray-700">
            <li>• Better emotional balance</li>
            <li>• Improved energy flow</li>
            <li>• Enhanced peace and clarity</li>
            <li>• Aesthetic upliftment</li>
            <li>• Better sleep, productivity, and well-being</li>
            <li>• Reduced clutter and heaviness</li>
            <li>• Harmonious relationships and mood</li>
            <li>• A sense of comfort, grounding, and belonging</li>
            <li>• Instant transformation without construction</li>
          </ul>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">
          Styling is small in effort, monumental in impact.
        </p>
      </section>

      {/* Deliverables */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">DELIVERABLES YOU RECEIVE</h3>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• Room-by-room styling guide</li>
              <li>• Object placement map</li>
              <li>• Colour palette recommendations</li>
              <li>• Element-based décor suggestions</li>
              <li>• Aesthetic remedy list</li>
              <li>• Furniture rearrangement plan</li>
              <li>• Shopping list (if new décor is required)</li>
              <li>• Implementation support & photo verification</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic text-center">
            A complete styling plan that blends luxury design with Vastu alignment.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">THE Space Build STYLING PROCESS</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 1 — Space Study</h4>
            <p className="text-gray-700">We observe your room's current energy, objects, and circulation.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 2 — Zone Mapping</h4>
            <p className="text-gray-700">Each corner is evaluated based on MahaVastu zones and elements.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 3 — Styling Strategy</h4>
            <p className="text-gray-700">We curate décor, objects, colours, and lighting suitable for each zone.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 4 — Placement & Correction</h4>
            <p className="text-gray-700">Objects are rearranged or introduced in the correct zones.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">Step 5 — Final Aesthetic Layer</h4>
            <p className="text-gray-700">Textiles, accessories, and lighting are refined for a luxury finish.</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">FAQs</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">1. Do I need to buy new décor?</h4>
              <p className="text-gray-700">Not necessarily. We first use what you already own.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">2. Is this a substitute for a full Vastu consultation?</h4>
              <p className="text-gray-700">No. It is a styling-focused correction, not a diagnostic consultation.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">3. How long does the service take?</h4>
              <p className="text-gray-700">Usually 1–2 hours per space, depending on styling needs.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">4. Will the remedies look traditional or out of place?</h4>
              <p className="text-gray-700">Never. All remedies are modern, subtle, and interior-friendly.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">5. Can this be combined with interior design?</h4>
              <p className="text-gray-700">Absolutely, styling is often the final step of an interior project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Transform Your Space With Beauty, Intention & Alignment
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            Let Space Build style your environment into a sanctuary of luxury and harmony, without renovation.
          </p>
          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">Book Your Vastu Styling Session</p>
            <p className="text-gray-700">Get in touch with our experts today at:</p>
            <p className="text-[#D4935D] font-semibold text-lg">+917906086899</p>
            <p className="text-[#D4935D] font-semibold">info@spacebuild.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}