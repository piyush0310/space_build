import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SpaceBuildServicesPage() {
  return (
    <div className="min-h-screen bg-[#EDF4F8]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
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
  
  {/* Service 1: Vastu Construction */}
  <div className="bg-white rounded-lg p-6 shadow-md">
    <Link href="/services/vastu-construction">
      <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">
        1. Vastu Construction
      </h4>
    </Link>

    <p className="text-gray-700 mb-3 italic">
      Build your dream home with Vastu principles integrated from the very beginning.
    </p>

    <p className="text-gray-700 mb-3">
      Our Vastu Construction service ensures that every stage of your project—from
      planning and design to execution—is aligned with authentic Vastu guidelines.
      This creates a strong foundation for health, prosperity, harmony, and long-term success.
    </p>

    <p className="text-gray-700 mb-3">
      We work closely with homeowners, architects, engineers, and builders to
      ensure that every important element of the structure is positioned according
      to Vastu principles without compromising modern design or functionality.
    </p>

    <div className="bg-[#EDF4F8] rounded p-4 mb-3">
      <p className="text-gray-800 font-semibold text-center mb-2">
        Our Construction Approach
      </p>
      <p className="text-gray-700 text-center italic">
        "Plan Right • Build Right • Live Better."
      </p>
    </div>

    <p className="text-gray-700 mb-3">
      Our Vastu Construction consultation includes:
    </p>

    <ul className="space-y-2 text-gray-700 mb-3">
      <li>• Plot and site evaluation before construction</li>
      <li>• Vastu-based floor planning and room placement</li>
      <li>• Proper entrance, staircase, kitchen, and bedroom positioning</li>
      <li>• Guidance during every major stage of construction</li>
      <li>• Final inspection before possession</li>
    </ul>

    <p className="text-gray-700 mb-2 font-semibold">
      Important Notes:
    </p>

    <ul className="space-y-2 text-gray-700 mb-3">
      <li>• Suitable for residential and commercial projects</li>
      <li>• Consultation is recommended before construction begins</li>
      <li>• Architectural drawings or site plans are required</li>
      <li>• Online and on-site consultation options available</li>
    </ul>

    <Link
      href="/services/vastu-construction"
      className="text-[#D4935D] font-semibold hover:underline"
    >
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
            {/* Service 3: Vastu Renovation */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Link href="/services/vastu-renovation">
                <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">3. Vastu Renovation</h4>
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
    <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">4. Project Management Consultation (PMC)</h4>
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

{/* Service 1: Moduler Kitchen */}
<div className="bg-white rounded-lg p-6 shadow-md">

  <Link href="/services/moduler-kitchen">

    <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">
      5. Moduler Kitchen
    </h4>

  </Link>


  <p className="text-gray-700 mb-3 italic">
    Create your dream kitchen with modern designs, smart storage solutions,
    and premium finishes.
  </p>


  <p className="text-gray-700 mb-3">
    Our Moduler Kitchen service provides complete kitchen solutions—from
    design planning and material selection to installation and final finishing.
    We create functional and stylish kitchens that improve comfort, storage,
    and everyday living.
  </p>


  <p className="text-gray-700 mb-3">
    We work closely with homeowners, designers, and craftsmen to ensure that
    every kitchen element is customized according to your space, lifestyle,
    and requirements without compromising quality or aesthetics.
  </p>


  <div className="bg-[#EDF4F8] rounded p-4 mb-3">

    <p className="text-gray-800 font-semibold text-center mb-2">
      Our Kitchen Design Approach
    </p>

    <p className="text-gray-700 text-center italic">
      "Smart Design • Quality Materials • Beautiful Living."
    </p>

  </div>


  <p className="text-gray-700 mb-3">
    Our Moduler Kitchen service includes:
  </p>


  <ul className="space-y-2 text-gray-700 mb-3">

    <li>• Space measurement and kitchen layout planning</li>

    <li>• Customized cabinets, drawers, and storage solutions</li>

    <li>• Selection of premium materials, finishes, and accessories</li>

    <li>• Professional installation and quality inspection</li>

    <li>• Complete kitchen transformation support</li>

  </ul>


  <p className="text-gray-700 mb-2 font-semibold">
    Important Notes:
  </p>


  <ul className="space-y-2 text-gray-700 mb-3">

    <li>• Suitable for new kitchens and renovation projects</li>

    <li>• Customized designs according to available space</li>

    <li>• Kitchen measurements and layout details are required</li>

    <li>• Online and on-site consultation options available</li>

  </ul>


  <Link
    href="/services/moduler-kitchen" className="text-[#D4935D] font-semibold hover:underline">
  
    Learn More →
  </Link>

</div>
{/* Service 1: Pest Control Service */}
<div className="bg-white rounded-lg p-6 shadow-md">

  <Link href="/services/pest-control-services">

    <h4 className="font-semibold text-gray-800 text-2xl mb-3 hover:text-[#D4935D] transition-colors cursor-pointer">
      6. Pest Control Service
    </h4>

  </Link>


  <p className="text-gray-700 mb-3 italic">
    Protect your home and workplace with professional pest control solutions
    for a clean, safe, and healthy environment.
  </p>


  <p className="text-gray-700 mb-3">
    Our Pest Control Service provides effective pest management solutions
    for residential, commercial, and industrial spaces. From inspection and
    identification to treatment and prevention, we ensure complete protection
    against unwanted pests.
  </p>


  <p className="text-gray-700 mb-3">
    We use proper techniques and customized treatment plans to control common
    pests while maintaining safety, hygiene, and long-term protection for your
    property.
  </p>


  <div className="bg-[#EDF4F8] rounded p-4 mb-3">

    <p className="text-gray-800 font-semibold text-center mb-2">
      Our Pest Control Approach
    </p>

    <p className="text-gray-700 text-center italic">
      "Identify • Treat • Protect."
    </p>

  </div>


  <p className="text-gray-700 mb-3">
    Our Pest Control service includes:
  </p>


  <ul className="space-y-2 text-gray-700 mb-3">

    <li>• Complete property inspection and pest identification</li>

    <li>• Cockroach, termite, mosquito, and rodent control</li>

    <li>• Customized pest treatment solutions</li>

    <li>• Professional application and safety procedures</li>

    <li>• Prevention guidance for long-term protection</li>

  </ul>


  <p className="text-gray-700 mb-2 font-semibold">
    Important Notes:
  </p>


  <ul className="space-y-2 text-gray-700 mb-3">

    <li>• Suitable for residential and commercial properties</li>

    <li>• Inspection is recommended before treatment</li>

    <li>• Property details help us provide accurate solutions</li>

    <li>• Regular maintenance options are available</li>

  </ul>


  <Link
    href="/services/pest-control-services" className="text-[#D4935D] font-semibold hover:underline">
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
              <p className="text-[#D4935D] font-semibold text-lg">+919927611780</p>
              <p className="text-[#D4935D] font-semibold">spacebuild.india@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}