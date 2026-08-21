import { Phone } from "lucide-react";

export const metadata = {
  title: "U Shape Modular Kitchen in Moradabad | Modern Kitchen Design",
  description:
    "Get customized U Shape Modular Kitchen services in Moradabad with Space Build. We design spacious, functional, and stylish U-shaped kitchens with smart storage, premium finishes, and modern layouts.",
  keywords: [
    "U shape modular kitchen Moradabad",
    "U shaped kitchen design Moradabad",
    "modular kitchen Moradabad",
    "modern kitchen design Moradabad",
    "luxury modular kitchen Moradabad",
    "custom kitchen design Moradabad",
    "kitchen interior designer Moradabad",
    "premium modular kitchen Moradabad",
    "kitchen renovation Moradabad",
    "Space Build Moradabad",
  ],
};

export default function UShapeModularKitchenMoradabad() {
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
            U Shape Modular Kitchen in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Upgrade your home with a premium
            <strong> U Shape Modular Kitchen in Moradabad</strong> by Space
            Build. U-shaped kitchens offer maximum storage, larger countertop
            areas, and an efficient work triangle, making them ideal for medium
            and large homes. Our expert designers create customized kitchen
            layouts with high-quality cabinets, smart storage accessories,
            durable countertops, modern appliances integration, and elegant
            finishes to deliver a beautiful, practical, and highly functional
            cooking space.
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