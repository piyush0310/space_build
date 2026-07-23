import { Phone } from "lucide-react";

export default function VastuForNegativeEnergyRemovalMoradabad() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1784614424/617c07cbe3f89632078bcefe00a91bb8_tzjybj.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
            Best Vastu for Negative Energy Removal in Moradabad
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Remove negative vibrations and welcome peace, prosperity, and
            positive energy with
            <strong>
              {" "}
              Space Build's Vastu for Negative Energy Removal Services in
              Moradabad
            </strong>
            .
            <br />
            Our certified MahaVastu experts provide personalized Vastu
            consultations for homes, apartments, villas, offices, shops, and
            commercial spaces. We identify hidden Vastu defects, energy
            blockages, improper room placements, entrance issues, bedroom and
            kitchen imbalances, and workplace energy disturbances. Using
            effective MahaVastu remedies, we help eliminate negative energy,
            improve mental peace, enhance family relationships, support better
            health, attract financial growth, and create a harmonious living and
            working environment—without requiring major structural changes.
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

            {/* Free Consultation Button */}
            <a href="mailto:spacebuild.india@gmail.com">
              <button className="bg-transparent px-5 py-3 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-gray-800 transition">
                Book Free Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}