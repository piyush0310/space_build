import { Phone } from "lucide-react";

export default function RenovateHouseAccordingToVastuMoradabad() {
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
            Renovate House According to Vastu in Moradabad
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Renovate your home with thoughtful Vastu planning and practical
            design guidance through{" "}
            <strong>
              Space Build's House Renovation According to Vastu Services in
              Moradabad
            </strong>
            .
            <br />
            Our certified MahaVastu experts evaluate your existing home's
            layout, main entrance, room directions, kitchen, bedrooms,
            bathrooms, staircase, structural modifications, natural light,
            ventilation, and overall energy flow. We provide personalized Vastu
            recommendations for renovation and remodeling projects, helping
            you make suitable changes to your existing property while
            maintaining functionality and comfort. Our practical approach aims
            to create a more harmonious, positive, balanced, and comfortable
            living environment.
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
