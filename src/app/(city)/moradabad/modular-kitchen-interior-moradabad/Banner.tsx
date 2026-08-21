import { Phone } from "lucide-react";

export const metadata = {
  title: "Modular Kitchen Interior in Moradabad | Modern Kitchen Design",
  description:
    "Get premium Modular Kitchen Interior services in Moradabad with Space Build. We design stylish, functional, and customized modular kitchens with smart storage, modern finishes, and elegant interiors for every home.",
  keywords: [
    "modular kitchen interior Moradabad",
    "modular kitchen design Moradabad",
    "modern kitchen interior Moradabad",
    "kitchen interior designer Moradabad",
    "custom modular kitchen Moradabad",
    "luxury kitchen design Moradabad",
    "kitchen renovation Moradabad",
    "modular kitchen services Moradabad",
    "kitchen cabinet design Moradabad",
    "Space Build Moradabad",
  ],
};

export default function ModularKitchenInteriorMoradabad() {
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
            Modular Kitchen Interior in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Create a beautiful and highly functional
            <strong> Modular Kitchen Interior in Moradabad</strong> with Space
            Build. Our expert designers craft customized kitchen interiors that
            blend smart storage, premium materials, modern layouts, and elegant
            finishes to enhance both style and efficiency. From modular
            cabinets, countertops, and wall units to lighting, accessories, and
            space-saving solutions, we design complete kitchen interiors that
            suit your lifestyle and maximize every inch of available space.
            Whether you prefer a contemporary, luxury, or minimalist kitchen,
            we deliver interiors that combine aesthetics with everyday
            practicality.
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