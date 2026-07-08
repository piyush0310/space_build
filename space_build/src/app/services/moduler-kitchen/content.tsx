import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function modulerKitchenPage() {
  return (
    <div className="min-h-screen bg-[#edf4f8]">

      {/* Hero Section */}
      <section
        className="relative w-full h-[25vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1783507357/premium_photo-1683141179507-734e6157ddba_nsmobc.avif')",
          backgroundPosition: "center center",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 text-center px-4">

          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            MODULER KITCHEN
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-light italic">
            Modern Kitchen Designs Crafted for Style, Comfort & Smart Living
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
          Moduler Kitchen
        </span>

      </nav>


      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-6">

        <div className="bg-white rounded-xl shadow-md p-8 mb-6">

          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">
            MODULER KITCHEN
          </h2>

          <p className="text-lg text-center text-gray-700 italic mb-2">
            Premium moduler kitchen solutions designed with smart storage,
            elegant finishes, and modern functionality.
          </p>

          <p className="text-lg text-center text-[#D4935D] font-semibold">
            Design Smart. Cook Better. Live Beautifully.
          </p>

        </div>


        <div className="space-y-6">

          <h3 className="text-3xl font-serif text-gray-800">
            INTRODUCTION
          </h3>


          <p className="text-lg text-gray-700 leading-relaxed">
            A kitchen is the heart of every home, and a well-designed moduler
            kitchen creates the perfect balance between beauty, convenience,
            and functionality.
          </p>


          <p className="text-lg text-gray-700 leading-relaxed">
            Our moduler Kitchen service provides complete solutions from
            design planning and material selection to installation and final
            finishing. We create kitchens that match your lifestyle while
            maximizing space utilization.
          </p>


          <p className="text-lg text-gray-700 leading-relaxed">
            We work closely with homeowners, designers, and craftsmen to
            deliver customized kitchen spaces with modern layouts, premium
            materials, smart storage solutions, and elegant aesthetics.
          </p>


          <div className="bg-white rounded-lg p-6 shadow-md">

            <p className="text-gray-800 font-semibold text-center text-lg mb-3">
              Our Philosophy
            </p>

            <p className="text-gray-700 text-center italic text-xl">
              "Smart Design • Quality Materials • Beautiful Living."
            </p>

          </div>


          <p className="text-lg text-gray-700 leading-relaxed">
            Every kitchen design decision impacts your daily comfort and
            experience. Proper planning ensures maximum efficiency, easy
            maintenance, and a timeless look.
          </p>


          <p className="text-lg text-gray-700 leading-relaxed italic">
            Our goal is to create a kitchen space that combines functionality,
            elegance, organization, and long-lasting quality for your family.
          </p>


        </div>

      </section>
            {/* What is Moduler Kitchen */}
      <section className="bg-[#edf4f8] py-12">

        <div className="max-w-5xl mx-auto px-6">

          <h3 className="text-3xl font-serif text-gray-800 mb-6">
            WHAT IS MODULER KITCHEN?
          </h3>


          <div className="bg-white rounded-lg p-6 shadow-md space-y-4">

            <p className="text-gray-700 leading-relaxed">
              A moduler Kitchen is a modern kitchen solution where different
              components are designed, manufactured, and installed together
              to create a highly functional and stylish cooking space.
            </p>


            <p className="text-gray-700">
              Our moduler kitchen solutions are suitable for:
            </p>


            <ul className="space-y-2 text-gray-700">

              <li>• Residential Apartments</li>

              <li>• Independent Houses</li>

              <li>• Villas & Luxury Homes</li>

              <li>• Modern Kitchen Renovations</li>

              <li>• Compact Kitchen Spaces</li>

              <li>• Premium Interior Projects</li>

            </ul>


            <p className="text-gray-700 leading-relaxed italic">
              Every kitchen is planned according to your space, lifestyle,
              storage requirements, and design preferences to create a
              beautiful and efficient cooking environment.
            </p>


          </div>

        </div>

      </section>



      {/* How the Process Works */}
      <section className="max-w-5xl mx-auto px-6 py-12">


        <h3 className="text-3xl font-serif text-gray-800 mb-6">
          HOW THE MODULER KITCHEN PROCESS WORKS
        </h3>


        <p className="text-gray-700 mb-6">
          Our moduler kitchen design process follows a systematic approach
          to create a perfectly planned kitchen that matches your needs,
          space, and lifestyle.
        </p>



        <div className="space-y-4">


          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md">


            <h4 className="font-semibold text-gray-800 text-xl mb-3">
              1. Space Measurement & Kitchen Planning
            </h4>


            <p className="text-gray-700">
              We carefully analyze your kitchen area, available space,
              wall dimensions, electrical points, plumbing positions, and
              storage requirements before preparing the design plan.
            </p>


          </div>



          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">


            <h4 className="font-semibold text-gray-800 text-xl mb-3">
              2. Design Selection & Material Customization
            </h4>


            <p className="text-gray-700 mb-3">
              Detailed customization is provided for:
            </p>


            <ul className="space-y-2 text-gray-700">

              <li>• Kitchen Layout Design</li>

              <li>• Cabinets & Drawers</li>

              <li>• Countertop Selection</li>

              <li>• Storage Solutions</li>

              <li>• Color Combinations</li>

              <li>• Hardware & Accessories</li>

              <li>• Lighting & Finishing Details</li>

            </ul>


            <p className="text-gray-700 mt-3 italic">
              Every element is selected to provide maximum storage,
              easy maintenance, durability, and a premium appearance.
            </p>


          </div>



          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md">


            <h4 className="font-semibold text-gray-800 text-xl mb-3">
              3. Manufacturing, Installation & Final Finishing
            </h4>


            <p className="text-gray-700 mb-3">
              During the execution stage we provide:
            </p>


            <ul className="space-y-2 text-gray-700">

              <li>• Precision manufacturing</li>

              <li>• Professional installation</li>

              <li>• Quality checking of components</li>

              <li>• Proper fitting of cabinets and accessories</li>

              <li>• Final finishing and inspection</li>

            </ul>


            <p className="text-gray-700 mt-3 italic">
              Our systematic approach ensures a durable, functional, and
              beautifully finished moduler kitchen ready for everyday use.
            </p>


          </div>


        </div>


      </section>
            {/* Prerequisites */}
      <section className="py-12">

        <div className="max-w-5xl mx-auto px-6">

          <h3 className="text-3xl font-serif text-gray-800 mb-6">
            PREREQUISITES
          </h3>


          <div className="bg-white rounded-lg p-6 shadow-md space-y-4">


            <p className="text-gray-700">
              To design your perfect moduler kitchen, please keep the
              following details ready:
            </p>


            <ul className="space-y-2 text-gray-700">

              <li>• Kitchen area measurements</li>

              <li>• Existing kitchen layout details</li>

              <li>• Storage requirements</li>

              <li>• Preferred kitchen style and design ideas</li>

            </ul>


            <p className="text-gray-700">
              If available:
            </p>


            <ul className="space-y-2 text-gray-700">

              <li>• Kitchen photographs</li>

              <li>• Floor plans</li>

              <li>• Appliance details</li>

              <li>• Plumbing and electrical layout</li>

            </ul>


            <p className="text-gray-700 font-semibold mt-4">
              Complete details help us create an accurate design with better
              space planning and customization.
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

            <li>• Proper planning is recommended before starting kitchen work.</li>

            <li>• Suitable for both new kitchens and renovation projects.</li>

            <li>• Kitchen design should focus on functionality and workflow.</li>

            <li>• Premium quality materials improve durability and appearance.</li>

            <li>• Smart storage solutions help maximize available space.</li>

            <li>• Professional installation ensures long-lasting performance.</li>

          </ul>



          <p className="text-gray-700 mt-6 italic">
            A well-planned moduler kitchen saves time, improves efficiency,
            and creates a comfortable cooking experience.
          </p>


        </div>


      </section>



      {/* Who Should Choose */}
      <section className="py-12">


        <div className="max-w-5xl mx-auto px-6">


          <h3 className="text-3xl font-serif text-gray-800 mb-6">
            WHO SHOULD CHOOSE MODULER KITCHEN?
          </h3>



          <p className="text-gray-700 mb-4">
            This service is ideal for:
          </p>



          <div className="bg-white rounded-lg p-6 shadow-md">


            <ul className="space-y-2 text-gray-700">


              <li>• Families building a new home</li>

              <li>• Homeowners looking for kitchen upgrades</li>

              <li>• Apartment owners with limited space</li>

              <li>• Villa and luxury home owners</li>

              <li>• Interior designers and architects</li>

              <li>• Anyone wanting organized kitchen storage</li>

              <li>• People who prefer modern and stylish kitchens</li>


            </ul>


          </div>



          <p className="text-gray-700 mt-6 italic text-center">
            Create a kitchen that matches your lifestyle with smart design
            and beautiful functionality.
          </p>



        </div>


      </section>
            {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">


        <h3 className="text-3xl font-serif text-gray-800 mb-6">
          BENEFITS OF MODULER KITCHEN
        </h3>



        <div className="bg-white rounded-lg p-6 shadow-md">


          <ul className="space-y-2 text-gray-700">


            <li>• Smart utilization of available kitchen space</li>

            <li>• Modern and elegant kitchen appearance</li>

            <li>• Customized storage solutions according to requirements</li>

            <li>• Easy maintenance and better organization</li>

            <li>• Durable materials with premium finishing</li>

            <li>• Improved cooking convenience and workflow</li>

            <li>• Professional design and installation support</li>


          </ul>


        </div>



        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">

          A beautifully designed moduler kitchen transforms your cooking space
          into an organized, comfortable, and stylish part of your home.

        </p>



      </section>




      {/* FAQs */}
      <section className="py-12">


        <div className="max-w-5xl mx-auto px-6">


          <h3 className="text-3xl font-serif text-gray-800 mb-6">
            FAQs
          </h3>



          <div className="space-y-4">



            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">
                1. What is a Moduler kitchen?
              </h4>


              <p className="text-gray-700">
                A moduler kitchen is a modern kitchen system made with
                pre-designed modules like cabinets, drawers, shelves, and
                storage units that are installed together for better
                functionality and appearance.
              </p>


            </div>




            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">
                2. How long does it take to complete a moduler kitchen?
              </h4>


              <p className="text-gray-700">
                The completion time depends on the kitchen size, design
                complexity, materials selected, and customization requirements.
              </p>


            </div>




            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">
                3. Can I customize my moduler kitchen design?
              </h4>


              <p className="text-gray-700">
                Yes. Every moduler kitchen can be customized according to your
                space, storage needs, preferred colors, materials, and
                lifestyle requirements.
              </p>


            </div>




            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">
                4. Are moduler kitchens suitable for small spaces?
              </h4>


              <p className="text-gray-700">
                Yes. moduler kitchens are designed to maximize storage and
                functionality, making them highly suitable for compact spaces.
              </p>


            </div>




            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">
                5. Do you provide installation services?
              </h4>


              <p className="text-gray-700">
                Yes. We provide professional installation with proper fitting,
                finishing, and quality inspection.
              </p>


            </div>




            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">
                6. Can existing kitchens be converted into moduler kitchens?
              </h4>


              <p className="text-gray-700">
                Yes. Existing kitchens can be redesigned and upgraded with
                moduler solutions according to available space and requirements.
              </p>


            </div>



          </div>



        </div>


      </section>
            {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        <div className="text-center bg-white rounded-2xl shadow-md p-8">


          <h3 className="text-2xl font-serif text-gray-800 mb-4">
            Design Your Dream Moduler Kitchen
          </h3>



          <p className="text-lg text-gray-700 mb-4">

            Start your kitchen transformation journey with expert moduler
            kitchen design solutions. Create a space that offers smart storage,
            elegant design, comfort, and long-lasting quality.

          </p>



          <p className="text-lg text-gray-700 mb-6 italic">

            Every beautiful kitchen begins with the right design.

          </p>



          <div className="space-y-2">


            <p className="text-xl font-semibold text-gray-800">

              Book Your Moduler Kitchen Consultation

            </p>



            <p className="text-gray-700">

              Connect with our experts today at:

            </p>



            <p className="text-[#D4935D] font-semibold text-lg">

              +919927611780

            </p>



            <p className="text-[#D4935D] font-semibold">

              spacebuild.india@gmail.com

            </p>



          </div>



          <p className="text-gray-600 italic mt-6">

            Let's create a kitchen that makes everyday living better.

          </p>



        </div>


      </section>


    </div>
  );
}