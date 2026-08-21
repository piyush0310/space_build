import { Phone } from "lucide-react";

export default function FlatInteriorDesignMoradabad() {
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
            Best Flat Interior Design in Moradabad
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Transform your apartment with{" "}
            <strong>Space Build's Flat Interior Design Services in Moradabad</strong>.
            We create modern, elegant, and space-efficient interiors that
            enhance both comfort and functionality while reflecting your
            personal style.
            <br />
            Whether you own a 1BHK, 2BHK, 3BHK, luxury apartment, or penthouse,
            our experienced designers provide customized solutions including
            modular kitchens, wardrobes, false ceilings, living room interiors,
            bedroom designs, lighting plans, and complete turnkey interior
            execution tailored to your budget and lifestyle.
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