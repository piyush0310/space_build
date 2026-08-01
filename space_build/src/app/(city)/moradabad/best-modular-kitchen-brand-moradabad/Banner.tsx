import { Phone } from "lucide-react";

export const metadata = {
  title: "Best Modular Kitchen Brand in Moradabad | Premium Kitchen Solutions",
  description:
    "Looking for the Best Modular Kitchen Brand in Moradabad? Space Build offers customized modular kitchen solutions with premium materials, modern designs, smart storage systems, and expert installation for every home.",
  keywords: [
    "best modular kitchen brand Moradabad",
    "top modular kitchen Moradabad",
    "premium modular kitchen Moradabad",
    "modular kitchen company Moradabad",
    "best kitchen designer Moradabad",
    "modular kitchen manufacturer Moradabad",
    "luxury modular kitchen Moradabad",
    "custom modular kitchen Moradabad",
    "kitchen interior designer Moradabad",
    "Space Build Moradabad",
  ],
};

export default function BestModularKitchenBrandMoradabad() {
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
            Best Modular Kitchen Brand in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Searching for the
            <strong> Best Modular Kitchen Brand in Moradabad</strong>? Space
            Build delivers premium modular kitchen solutions designed to combine
            style, functionality, and durability. Our kitchens feature
            high-quality materials, advanced storage systems, premium hardware,
            and modern layouts tailored to your lifestyle and space
            requirements. From compact kitchens to luxury modular designs, we
            focus on craftsmanship, customization, and customer satisfaction to
            create kitchens that are beautiful, efficient, and built to last.
            Whether you're building a new home or renovating your existing
            kitchen, our expert team provides end-to-end design and installation
            services.
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