import { Phone } from "lucide-react";

export const metadata = {
  title: "Modular Kitchen Cost in Moradabad | Affordable Kitchen Pricing",
  description:
    "Know the Modular Kitchen Cost in Moradabad with Space Build. Get customized kitchen solutions with transparent pricing, premium materials, smart storage options, and expert installation for every budget.",
  keywords: [
    "modular kitchen cost Moradabad",
    "modular kitchen price Moradabad",
    "kitchen renovation cost Moradabad",
    "modular kitchen estimate Moradabad",
    "kitchen interior cost Moradabad",
    "modular kitchen budget Moradabad",
    "custom kitchen cost Moradabad",
    "modular kitchen installation Moradabad",
    "kitchen designer Moradabad",
    "Space Build Moradabad",
  ],
};

export default function ModularKitchenCostMoradabad() {
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
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-20 md:mt-32">
            Modular Kitchen Cost in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Looking for information about
            <strong> Modular Kitchen Cost in Moradabad</strong>? Space Build
            offers customized modular kitchen solutions designed to match your
            space, style preferences, and budget. The cost of a modular kitchen
            depends on factors such as kitchen size, layout, cabinet materials,
            hardware quality, countertop selection, storage accessories, and
            finishing options. Whether you need a budget-friendly kitchen, a
            mid-range modular setup, or a luxury kitchen design, our team
            provides transparent pricing and tailored solutions that deliver
            exceptional value, durability, and functionality for your home.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+919927611780">
              <button className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-5 py-3 rounded-xl font-semibold border-2 border-white hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg">
                <Phone size={18} />
                <span>+91 9927611780</span>
              </button>
            </a>

            <a href="mailto:spacebuild.india@gmail.com">
              <button className="bg-transparent px-5 py-3 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-black transition">
                Book Free Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}