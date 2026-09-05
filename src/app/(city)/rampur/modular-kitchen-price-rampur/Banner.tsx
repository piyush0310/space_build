import { Phone } from "lucide-react";

export default function ModularKitchenPriceRampur() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1783507357/premium_photo-1683141179507-734e6157ddba_nsmobc.avif')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
            Modular Kitchen Price in Rampur
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Looking for a stylish modular kitchen at the right budget? Get
            customized solutions through{" "}
            <strong>
              Space Build's Modular Kitchen Design Services in Rampur
            </strong>
            .
            <br />
            The price of a modular kitchen can vary depending on the kitchen
            size, layout, materials, finishes, cabinets, hardware, countertop,
            storage requirements, appliances, and level of customization. Our
            experienced kitchen designers understand your space, requirements,
            lifestyle, and budget before planning your kitchen. We provide
            customized L-shaped, U-shaped, straight, parallel, and island
            kitchen designs with practical storage solutions, quality
            materials, modern finishes, and efficient layouts. Our focus is on
            transparent planning, smart space utilization, durability,
            functionality, and creating a beautiful kitchen that offers value
            within your budget.
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