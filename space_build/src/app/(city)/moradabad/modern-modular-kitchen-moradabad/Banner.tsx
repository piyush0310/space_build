import { Phone } from "lucide-react";

export const metadata = {
  title: "Modern Modular Kitchen in Moradabad | Contemporary Kitchen Designs",
  description:
    "Get a Modern Modular Kitchen in Moradabad with Space Build. We design stylish, functional, and space-efficient kitchens with premium finishes, smart storage solutions, and contemporary layouts for modern homes.",
  keywords: [
    "modern modular kitchen Moradabad",
    "contemporary modular kitchen Moradabad",
    "modular kitchen design Moradabad",
    "modern kitchen interior Moradabad",
    "luxury modular kitchen Moradabad",
    "custom modular kitchen Moradabad",
    "kitchen designer Moradabad",
    "modular kitchen contractor Moradabad",
    "kitchen renovation Moradabad",
    "Space Build Moradabad",
  ],
};

export default function ModernModularKitchenMoradabad() {
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
            Modern Modular Kitchen in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Transform your cooking space with a
            <strong> Modern Modular Kitchen in Moradabad</strong> by Space
            Build. Our contemporary kitchen designs combine elegant aesthetics,
            smart storage, premium materials, and advanced functionality to
            create a space that is both beautiful and practical. From sleek
            cabinets and soft-close drawers to modern countertops, lighting,
            and innovative storage accessories, every element is carefully
            planned to maximize efficiency and enhance your lifestyle. Whether
            you prefer a minimalist, luxury, or contemporary kitchen design, we
            deliver customized solutions tailored to your home and preferences.
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