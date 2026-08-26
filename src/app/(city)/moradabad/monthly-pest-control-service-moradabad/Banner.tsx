import { Phone } from "lucide-react";

export default function MonthlyPestControlServiceMoradabad() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1783507178/photo-1629608934925-725d09a4eb9a_ycup8h.avif')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
            Monthly Pest Control Service in Moradabad
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Looking for reliable{" "}
            <strong>Monthly Pest Control Service in Moradabad</strong>? Space
            Build provides professional scheduled pest control services for
            homes, apartments, offices, restaurants, hotels, shops, warehouses,
            factories, and commercial properties.
            <br />
            Our experienced pest control professionals provide regular
            inspections and targeted treatments for common pests including
            cockroaches, ants, mosquitoes, termites, rodents, rats, and bed
            bugs. A scheduled monthly service helps identify pest activity
            early and maintain consistent protection for your property using
            quality, government-approved products and advanced treatment
            methods.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Call Button */}
            <a href="tel:+919927611780">
              <button className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-5 py-3 rounded-xl font-semibold border-2 border-white hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg">
                <Phone size={18} />
                <span className="text-base">+91 9927611780</span>
              </button>
            </a>

            {/* Monthly Plan Button */}
            <a href="mailto:spacebuild.india@gmail.com">
              <button className="bg-transparent px-5 py-3 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-gray-800 transition">
                Get Monthly Plan
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
