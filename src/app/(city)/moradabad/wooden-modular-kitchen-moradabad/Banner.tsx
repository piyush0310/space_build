import { Phone } from "lucide-react";

export const metadata = {
  title: "Wooden Modular Kitchen in Moradabad | Premium Kitchen Designs",
  description:
    "Get elegant Wooden Modular Kitchen designs in Moradabad with Space Build. We create customized wooden kitchens with premium finishes, smart storage solutions, durable cabinets, and modern layouts for stylish homes.",
  keywords: [
    "wooden modular kitchen Moradabad",
    "wooden kitchen design Moradabad",
    "modular wooden kitchen Moradabad",
    "wooden kitchen cabinets Moradabad",
    "custom wooden kitchen Moradabad",
    "luxury modular kitchen Moradabad",
    "kitchen interior designer Moradabad",
    "modern wooden kitchen Moradabad",
    "kitchen renovation Moradabad",
    "Space Build Moradabad",
  ],
};

export default function WoodenModularKitchenMoradabad() {
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
            Wooden Modular Kitchen in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Enhance your home with a beautifully crafted
            <strong> Wooden Modular Kitchen in Moradabad</strong> by Space
            Build. Our customized wooden kitchens combine timeless elegance,
            durability, and modern functionality to create a warm and inviting
            cooking space. We use high-quality wood finishes, premium hardware,
            and smart storage solutions to design kitchens that are both stylish
            and practical. From classic wooden textures to contemporary modular
            layouts, our kitchens are tailored to your space, lifestyle, and
            aesthetic preferences, ensuring long-lasting performance and
            exceptional visual appeal.
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