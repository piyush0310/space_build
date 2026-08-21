import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PestControlPage() {
  return (
    <div className="min-h-screen bg-[#edf4f8]">

      {/* Hero Section */}
      <section
        className="relative w-full h-[25vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1783507178/photo-1629608934925-725d09a4eb9a_ycup8h.avif')",
          backgroundPosition: "center center",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="relative z-10 text-center px-4">

          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
            PEST CONTROL SERVICE
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-light italic">
            Professional Pest Control Solutions for a Safe, Clean & Healthy Space
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
          Pest Control Service
        </span>

      </nav>




      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-6">


        <div className="bg-white rounded-xl shadow-md p-8 mb-6">


          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">
            Pest Control Service
          </h2>



          <p className="text-lg text-center text-gray-700 italic mb-2">

            Professional pest management solutions designed to protect your
            home, office, and commercial spaces from unwanted pests.

          </p>



          <p className="text-lg text-center text-[#D4935D] font-semibold">

            Protect Your Space. Live Healthy. Stay Safe.

          </p>


        </div>




        <div className="space-y-6">



          <h3 className="text-3xl font-serif text-gray-800">
            INTRODUCTION
          </h3>




          <p className="text-lg text-gray-700 leading-relaxed">

            A clean and hygienic environment is essential for a healthy
            lifestyle. Professional pest control helps remove harmful pests
            and prevents future infestations.

          </p>




          <p className="text-lg text-gray-700 leading-relaxed">

            Our Pest Control Service provides complete pest management
            solutions for residential, commercial, and industrial spaces.
            We use effective methods and proper techniques to control pests
            while maintaining safety and hygiene.

          </p>




          <p className="text-lg text-gray-700 leading-relaxed">

            We work with trained professionals to identify pest problems,
            understand the level of infestation, and provide customized
            treatment solutions according to your specific requirements.

          </p>




          <div className="bg-white rounded-lg p-6 shadow-md">


            <p className="text-gray-800 font-semibold text-center text-lg mb-3">

              Our Approach

            </p>



            <p className="text-gray-700 text-center italic text-xl">

              "Identify • Treat • Protect."

            </p>


          </div>





          <p className="text-lg text-gray-700 leading-relaxed">

            Every pest problem requires the right solution. Proper inspection
            and timely treatment help maintain a clean, safe, and comfortable
            living environment.

          </p>




          <p className="text-lg text-gray-700 leading-relaxed italic">

            Our goal is to provide reliable pest control services that protect
            your property, improve hygiene, and create a healthier environment
            for you and your family.

          </p>



        </div>


      </section>
            {/* What is Pest Control Service */}
      <section className="bg-[#edf4f8] py-12">

        <div className="max-w-5xl mx-auto px-6">


          <h3 className="text-3xl font-serif text-gray-800 mb-6">
            WHAT IS PEST CONTROL SERVICE?
          </h3>



          <div className="bg-white rounded-lg p-6 shadow-md space-y-4">


            <p className="text-gray-700 leading-relaxed">

              Pest Control Service is a professional solution designed to
              identify, control, and eliminate unwanted pests from residential,
              commercial, and industrial spaces while maintaining safety and
              hygiene.

            </p>




            <p className="text-gray-700">

              Our pest control solutions are suitable for:

            </p>




            <ul className="space-y-2 text-gray-700">


              <li>• Residential Homes</li>

              <li>• Apartments & Villas</li>

              <li>• Offices & Workspaces</li>

              <li>• Restaurants & Commercial Areas</li>

              <li>• Warehouses & Industrial Spaces</li>

              <li>• Shops and Other Properties</li>


            </ul>




            <p className="text-gray-700 leading-relaxed italic">

              Every pest control treatment is planned according to the type of
              pest problem, level of infestation, and property requirements to
              provide effective and long-lasting protection.

            </p>



          </div>


        </div>


      </section>





      {/* How the Process Works */}
      <section className="max-w-5xl mx-auto px-6 py-12">



        <h3 className="text-3xl font-serif text-gray-800 mb-6">

          HOW THE PEST CONTROL PROCESS WORKS

        </h3>




        <p className="text-gray-700 mb-6">

          Our pest control process follows a systematic approach to identify
          the problem, provide effective treatment, and ensure long-term
          protection from pests.

        </p>




        <div className="space-y-4">





          {/* Step 1 */}
          <div className="bg-white rounded-lg p-6 shadow-md">


            <h4 className="font-semibold text-gray-800 text-xl mb-3">

              1. Inspection & Pest Identification

            </h4>



            <p className="text-gray-700">

              We carefully inspect your property to identify the type of pest,
              affected areas, entry points, and the level of infestation before
              planning the suitable treatment.

            </p>


          </div>







          {/* Step 2 */}
          <div className="bg-white rounded-lg p-6 shadow-md">


            <h4 className="font-semibold text-gray-800 text-xl mb-3">

              2. Treatment Planning & Pest Control Solution

            </h4>




            <p className="text-gray-700 mb-3">

              Customized treatment is provided for:

            </p>




            <ul className="space-y-2 text-gray-700">


              <li>• Cockroach Control</li>

              <li>• Termite Treatment</li>

              <li>• Ant Control</li>

              <li>• Mosquito Control</li>

              <li>• Rodent Control</li>

              <li>• Bed Bug Treatment</li>

              <li>• General Pest Prevention</li>


            </ul>




            <p className="text-gray-700 mt-3 italic">

              Each treatment method is selected according to the pest type and
              property conditions to achieve effective results with proper
              safety measures.

            </p>



          </div>







          {/* Step 3 */}
          <div className="bg-white rounded-lg p-6 shadow-md">


            <h4 className="font-semibold text-gray-800 text-xl mb-3">

              3. Treatment Execution & Final Inspection

            </h4>




            <p className="text-gray-700 mb-3">

              During the service process we provide:

            </p>




            <ul className="space-y-2 text-gray-700">


              <li>• Professional pest treatment application</li>

              <li>• Safe handling of pest control procedures</li>

              <li>• Complete coverage of affected areas</li>

              <li>• Prevention guidance for future protection</li>

              <li>• Final inspection after treatment</li>


            </ul>




            <p className="text-gray-700 mt-3 italic">

              Our systematic approach ensures effective pest control and helps
              maintain a clean, healthy, and protected environment.

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

              To provide effective pest control treatment, please keep the
              following details ready:

            </p>




            <ul className="space-y-2 text-gray-700">


              <li>• Type of pest problem</li>

              <li>• Affected areas details</li>

              <li>• Property size information</li>

              <li>• Previous pest treatment details (if any)</li>


            </ul>




            <p className="text-gray-700">

              If available:

            </p>




            <ul className="space-y-2 text-gray-700">


              <li>• Property photographs</li>

              <li>• Pest activity details</li>

              <li>• Preferred service schedule</li>

              <li>• Specific problem areas</li>


            </ul>




            <p className="text-gray-700 font-semibold mt-4">

              Complete information helps us provide accurate inspection and the
              most suitable pest control solution.

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


            <li>
              • Regular pest control helps prevent future infestations.
            </li>


            <li>
              • Suitable for residential, commercial, and industrial spaces.
            </li>


            <li>
              • Professional inspection is recommended before treatment.
            </li>


            <li>
              • Proper preparation helps improve treatment effectiveness.
            </li>


            <li>
              • Follow safety instructions provided after service completion.
            </li>


            <li>
              • Regular maintenance keeps your property clean and protected.
            </li>


          </ul>




          <p className="text-gray-700 mt-6 italic">

            Timely pest control prevents damage, protects health, and maintains
            a safe environment.

          </p>



        </div>


      </section>







      {/* Who Should Choose */}
      <section className="py-12">


        <div className="max-w-5xl mx-auto px-6">



          <h3 className="text-3xl font-serif text-gray-800 mb-6">

            WHO SHOULD CHOOSE PEST CONTROL SERVICE?

          </h3>




          <p className="text-gray-700 mb-4">

            This service is ideal for:

          </p>





          <div className="bg-white rounded-lg p-6 shadow-md">


            <ul className="space-y-2 text-gray-700">



              <li>
                • Homeowners facing pest problems
              </li>


              <li>
                • Families looking for a hygienic living environment
              </li>


              <li>
                • Office owners and workspace managers
              </li>


              <li>
                • Restaurants and commercial property owners
              </li>


              <li>
                • Industrial and warehouse owners
              </li>


              <li>
                • Anyone wanting preventive pest protection
              </li>


              <li>
                • Property owners requiring regular maintenance services
              </li>



            </ul>



          </div>




          <p className="text-gray-700 mt-6 italic text-center">

            Protect your property today for a cleaner, healthier, and safer
            tomorrow.

          </p>




        </div>


      </section>
            {/* Benefits */}
      <section className="max-w-5xl mx-auto px-6 py-12">


        <h3 className="text-3xl font-serif text-gray-800 mb-6">

          BENEFITS OF PEST CONTROL SERVICE

        </h3>




        <div className="bg-white rounded-lg p-6 shadow-md">


          <ul className="space-y-2 text-gray-700">


            <li>
              • Protection from harmful pests and insects
            </li>


            <li>
              • Improved hygiene and cleanliness of your property
            </li>


            <li>
              • Prevention of property damage caused by pests
            </li>


            <li>
              • Safer and healthier living environment
            </li>


            <li>
              • Professional treatment with effective solutions
            </li>


            <li>
              • Long-term prevention from repeated infestations
            </li>


            <li>
              • Expert guidance for maintaining a pest-free space
            </li>


          </ul>


        </div>





        <p className="text-lg text-gray-700 leading-relaxed mt-6 italic text-center">

          A pest-free environment creates a healthier, safer, and more
          comfortable space for living and working.

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

                1. Why is pest control necessary?

              </h4>


              <p className="text-gray-700">

                Pest control helps remove harmful pests, prevents property
                damage, improves hygiene, and creates a healthier environment.

              </p>


            </div>







            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">

                2. How often should pest control be done?

              </h4>


              <p className="text-gray-700">

                The frequency depends on the type of pest, property condition,
                and level of infestation. Regular preventive treatments help
                maintain long-term protection.

              </p>


            </div>







            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">

                3. Is pest control safe for homes?

              </h4>


              <p className="text-gray-700">

                Yes. Professional pest control services follow proper safety
                procedures and use suitable treatment methods according to the
                requirement.

              </p>


            </div>







            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">

                4. Which pests can be controlled?

              </h4>


              <p className="text-gray-700">

                We provide solutions for various pests including cockroaches,
                termites, ants, mosquitoes, rodents, bed bugs, and other common
                pest problems.

              </p>


            </div>







            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">

                5. Do you provide pest control for commercial spaces?

              </h4>


              <p className="text-gray-700">

                Yes. Pest control services are available for homes, offices,
                shops, restaurants, warehouses, and industrial properties.

              </p>


            </div>







            <div className="bg-white rounded-lg p-6 shadow-md">


              <h4 className="font-semibold text-gray-800 mb-2">

                6. Do you provide regular maintenance pest control?

              </h4>


              <p className="text-gray-700">

                Yes. Regular maintenance plans can be arranged to prevent
                recurring pest issues and keep your property protected.

              </p>


            </div>




          </div>



        </div>


      </section>
            {/* Closing CTA */}
      <section className="max-w-5xl mx-auto px-6 py-12">


        <div className="text-center bg-white rounded-2xl shadow-md p-8">



          <h3 className="text-2xl font-serif text-gray-800 mb-4">

            Keep Your Space Pest Free & Protected

          </h3>





          <p className="text-lg text-gray-700 mb-4">


            Protect your home, office, and commercial spaces with professional
            pest control solutions. Our expert services help maintain a clean,
            healthy, and safe environment with effective treatment methods.


          </p>





          <p className="text-lg text-gray-700 mb-6 italic">


            A healthier space begins with proper protection.


          </p>





          <div className="space-y-2">



            <p className="text-xl font-semibold text-gray-800">


              Book Your Pest Control Consultation


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


            Let's create a cleaner, safer, and pest-free environment for you.


          </p>





        </div>



      </section>



    </div>
  );
}