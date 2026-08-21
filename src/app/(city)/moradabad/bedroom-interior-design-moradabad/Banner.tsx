import { Phone } from "lucide-react";

export default function BedroomInteriorDesignMoradabad() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554112/IMG_20260627_141923.jpg_kqocgv.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
            Bedroom Interior Design in Moradabad
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Create a relaxing and stylish personal space with{" "}
            <strong>Bedroom Interior Design in Moradabad</strong> by Space Build.
            Our expert designers craft modern, elegant, and functional bedroom
            interiors that enhance comfort, aesthetics, and everyday living.
            <br />
            From master bedrooms and guest rooms to kids' bedrooms and luxury
            suites, we offer customized wardrobes, false ceilings, lighting,
            wall designs, furniture layouts, and complete bedroom makeover
            solutions tailored to your lifestyle and preferences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+919927611780">
              <button className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-5 py-3 rounded-xl font-semibold border-2 border-white hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg">
                <Phone size={18} />
                <span className="text-base">+91 9927611780</span>
              </button>
            </a>

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