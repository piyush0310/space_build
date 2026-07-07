import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function VastuConstructionPage() {
  return (
    <div className="min-h-screen bg-[#edf4f8]">

      {/* Hero Section */}
<section
  className="relative w-full h-[25vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1783419078/8ef1e54938f4d6e27c32899b13b6da1c_e09pjm.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/45"></div>

  <div className="relative z-10 text-center px-4">
    <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
      VASTU CONSTRUCTION
    </h1>

    <p className="text-xl md:text-2xl text-white/90 font-light italic">
      Build Your Dream Space on a Strong Vastu Foundation
    </p>
  </div>
</section>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-600 flex items-center gap-2">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>

        <ChevronRight className="w-4 h-4" />

        <Link href="/services" className="hover:text-gray-900">
          Services
        </Link>

        <ChevronRight className="w-4 h-4" />

        <span className="text-gray-900 font-medium">
          Vastu Construction
        </span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-6">

        <div className="bg-white rounded-xl shadow-md p-8 mb-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">
            Vastu Construction
          </h2>

          <p className="text-lg text-center text-gray-700 italic mb-2">
            Professional Vastu guidance from planning to completion for homes,
            offices, commercial buildings, and industrial projects.
          </p>

          <p className="text-lg text-center text-[#D4935D] font-semibold">
            Build Right. Prosper for Life.
          </p>
        </div>

        <div className="space-y-6">

          <h3 className="text-3xl font-serif text-gray-800">
            INTRODUCTION
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed">
            A building performs best when Vastu is integrated from the very
            beginning of construction. Proper planning ensures that every
            important space supports positive energy, harmony, and long-term
            success.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Our Vastu Construction service provides expert guidance throughout
            the entire construction journey—from plot evaluation and layout
            planning to structural execution and final inspection.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            We collaborate with homeowners, architects, engineers, and builders
            to ensure every important structural element is aligned with
            authentic Vastu principles while maintaining modern architecture,
            functionality, and aesthetics.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-md">

            <p className="text-gray-800 font-semibold text-center text-lg mb-3">
              Our Philosophy
            </p>

            <p className="text-gray-700 text-center italic text-xl">
              "Plan Right • Build Right • Live Better."
            </p>

          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            Every decision made during construction affects the future energy
            of the property. Proper planning today helps avoid expensive
            structural corrections tomorrow.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed italic">
            Our goal is to help you create a space that naturally supports
            prosperity, health, happiness, and lasting success for generations.
          </p>

        </div>

      </section>

      {/* What is Vastu Construction */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">

          <h3 className="text-3xl font-serif text-gray-800 mb-6">
            WHAT IS VASTU CONSTRUCTION?
          </h3>
                    <div className="bg-white rounded-lg p-6 shadow-md space-y-4">

            <p className="text-gray-700 leading-relaxed">
              Vastu Construction is a complete consultation service that
              integrates authentic Vastu principles into every stage of a
              construction project—from the initial planning and architectural
              layout to the final execution of the structure.
            </p>

            <p className="text-gray-700">
              Our guidance is suitable for:
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Residential Homes</li>
              <li>• Villas & Farmhouses</li>
              <li>• Apartments</li>
              <li>• Commercial Buildings</li>
              <li>• Offices & Showrooms</li>
              <li>• Industrial Projects</li>
            </ul>

            <p className="text-gray-700 leading-relaxed italic">
              Every important structural element is planned according to Vastu
              principles so that the completed property promotes prosperity,
              harmony, stability, and overall well-being while maintaining
              modern functionality.
            </p>

          </div>
        </div>
      </section>

      {/* How the Process Works */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h3 className="text-3xl font-serif text-gray-800 mb-6">
          HOW THE CONSTRUCTION PROCESS WORKS
        </h3>

        <p className="text-gray-700 mb-6">
          Our Vastu Construction consultation follows a structured process to
          ensure that every stage of your project is aligned with authentic
          Vastu principles.
        </p>

        <div className="space-y-4">

          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md">

            <h4 className="font-semibold text-gray-800 text-xl mb-3">
              1. Site & Plot Evaluation
            </h4>

            <p className="text-gray-700">
              We carefully examine the plot orientation, road position,
              surrounding environment, land slope, levels, and entry
              possibilities before construction begins to establish the best
              foundation for the project.
            </p>

          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">

            <h4 className="font-semibold text-gray-800 text-xl mb-3">
              2. Vastu Planning & Layout Design
            </h4>

            <p className="text-gray-700 mb-3">
              Detailed guidance is provided for:
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Main Entrance</li>
              <li>• Living Room</li>
              <li>• Kitchen Placement</li>
              <li>• Bedrooms</li>
              <li>• Pooja Room</li>
              <li>• Staircase & Toilets</li>
              <li>• Water Tanks & Septic Tank</li>
              <li>• Open Spaces & Parking</li>
            </ul>

            <p className="text-gray-700 mt-3 italic">
              Every area is planned to maximize positive energy while ensuring
              comfort, functionality, and architectural excellence.
            </p>

          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md">

            <h4 className="font-semibold text-gray-800 text-xl mb-3">
              3. Construction Monitoring & Final Inspection
            </h4>

            <p className="text-gray-700 mb-3">
              During the construction phase we provide:
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Stage-wise construction guidance</li>
              <li>• Structural layout verification</li>
              <li>• Placement review of major areas</li>
              <li>• Site inspection whenever required</li>
              <li>• Final review before possession</li>
            </ul>

            <p className="text-gray-700 mt-3 italic">
              This systematic approach helps ensure that your completed
              structure remains aligned with Vastu principles and supports
              long-term prosperity and harmony.
            </p>

          </div>

        </div>

      </section>

      {/* Prerequisites */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">

          <h3 className="text-3xl font-serif text-gray-800 mb-6">
            PREREQUISITES
          </h3>
                    <div className="bg-white rounded-lg p-6 shadow-md space-y-4">

            <p className="text-gray-700">
              To provide accurate Vastu guidance, please keep the following ready:
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Architectural floor plans</li>
              <li>• Plot dimensions and site details</li>
            </ul>

            <p className="text-gray-700">
              If available:
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Google location of the property</li>
              <li>• Site photographs</li>
              <li>• Structural drawings</li>
              <li>• Current construction stage details</li>
            </ul>

            <p className="text-gray-700 font-semibold mt-4">
              Complete drawings help us provide precise and practical recommendations.
            </p>

          </div>
        </div>
      </section>

      {/* Important Guidelines */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h3 className="text-3xl font-serif text-gray-800 mb-6">
          IMPORTANT GUIDELINES
        </h3>

        <div className="bg-white rounded-lg p-6 shadow-md">

          <ul className="space-y-2 text-gray-700">
            <li>• Consultation is recommended before construction begins.</li>
            <li>• Suitable for residential, commercial, and industrial projects.</li>
            <li>• Existing architectural plans can also be reviewed.</li>
            <li>• Both online and on-site consultation options are available.</li>
            <li>• Stage-wise guidance ensures better implementation.</li>
            <li>• All project information remains completely confidential.</li>
          </ul>

          <p className="text-gray-700 mt-6 italic">
            Proper planning at the beginning minimizes future modifications and
            helps create a well-balanced structure.
          </p>

        </div>

      </section>

      {/* Who Should Choose */}
      <section className="-12">

        <div className="max-w-5xl mx-auto px-6">

          <h3 className="text-3xl font-serif text-gray-800 mb-6">
            WHO SHOULD CHOOSE VASTU CONSTRUCTION?
          </h3>

          <p className="text-gray-700 mb-4">
            This service is ideal for:
          </p>

          <div className="bg-white rounded-lg p-6 shadow-md">

            <ul className="space-y-2 text-gray-700">
              <li>• Families planning to build a new home</li>
              <li>• Villa and farmhouse owners</li>
              <li>• Apartment construction projects</li>
              <li>• Architects and builders</li>
              <li>• Commercial property developers</li>
              <li>• Office and showroom owners</li>
              <li>• Industrial project developers</li>
              <li>• Anyone who wants Vastu integrated from the foundation stage</li>
            </ul>

          </div>

          <p className="text-gray-700 mt-6 italic text-center">
            Build correctly once rather than making costly corrections later.
          </p>

        </div>

      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <h3 className="text-3xl font-serif text-gray-800 mb-6">
          BENEFITS OF VASTU CONSTRUCTION
        </h3>
                <div className="bg-white rounded-lg p-6 shadow-md">

          <ul className="space-y-2 text-gray-700">
            <li>• Proper Vastu planning from the beginning</li>
            <li>• Reduced need for future structural corrections</li>
            <li>• Better balance of positive energy throughout the property</li>
            <li>• Functional layouts without compromising modern design</li>
            <li>• Expert guidance at every stage of construction</li>
            <li>• Improved harmony, prosperity, and long-term stability</li>
            <li>• Professional support from planning to project completion</li>
          </ul>

        </div>

        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">
          A well-planned structure becomes the foundation of a happy, healthy,
          and prosperous life.
        </p>

      </section>

      {/* FAQs */}
      <section className="-12">

        <div className="max-w-5xl mx-auto px-6">

          <h3 className="text-3xl font-serif text-gray-800 mb-6">
            FAQs
          </h3>

          <div className="space-y-4">

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">
                1. When should I consult for Vastu Construction?
              </h4>
              <p className="text-gray-700">
                The ideal time is before construction begins so Vastu principles
                can be incorporated into the planning and design itself.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">
                2. Can you review my existing architectural plan?
              </h4>
              <p className="text-gray-700">
                Yes. We can evaluate your existing plans and suggest Vastu-based
                improvements before construction starts.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">
                3. Do you work with architects and builders?
              </h4>
              <p className="text-gray-700">
                Absolutely. We regularly coordinate with architects, engineers,
                and construction teams to ensure smooth implementation.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">
                4. Is this service available online?
              </h4>
              <p className="text-gray-700">
                Yes. We provide both online consultations and on-site visits,
                depending on the project's requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">
                5. Do you visit construction sites?
              </h4>
              <p className="text-gray-700">
                Yes. Site visits can be arranged whenever required for
                inspections, layout verification, and stage-wise guidance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">
                6. Is this service only for homes?
              </h4>
              <p className="text-gray-700">
                No. We provide Vastu Construction guidance for residential,
                commercial, office, showroom, and industrial projects.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">        <div className="text-center bg-white rounded-2xl shadow-md p-8">

          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Build with Vastu. Build for Success.
          </h3>

          <p className="text-lg text-gray-700 mb-4">
            Start your construction journey with expert Vastu guidance from the
            very foundation. Proper planning today creates a space that supports
            prosperity, harmony, health, and long-term success.
          </p>

          <p className="text-lg text-gray-700 mb-6 italic">
            Every great structure begins with the right direction.
          </p>

          <div className="space-y-2">
            <p className="text-xl font-semibold text-gray-800">
              Book Your Vastu Construction Consultation
            </p>

            <p className="text-gray-700">
              Connect with our experts today at:
            </p>

            <p className="text-[#D4935D] font-semibold text-lg">
              +91 7906086899
            </p>

            <p className="text-[#D4935D] font-semibold">
              spacebuild.india@gmail.com
            </p>
          </div>

          <p className="text-gray-600 italic mt-6">
            Let's build your dream space the right way.
          </p>

        </div>
      </section>

    </div>
  );
}