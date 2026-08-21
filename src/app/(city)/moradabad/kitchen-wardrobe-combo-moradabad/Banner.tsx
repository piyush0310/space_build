import { Phone } from "lucide-react";

export const metadata = {
  title: "Kitchen Wardrobe Combo in Moradabad | Modular Kitchen & Wardrobe",
  description:
    "Get customized Kitchen Wardrobe Combo solutions in Moradabad with Space Build. We design modular kitchens and wardrobes with premium materials, smart storage, modern finishes, and space-saving layouts for homes and apartments.",
  keywords: [
    "kitchen wardrobe combo Moradabad",
    "modular kitchen and wardrobe Moradabad",
    "kitchen wardrobe design Moradabad",
    "custom wardrobe and kitchen Moradabad",
    "modular wardrobe Moradabad",
    "modular kitchen Moradabad",
    "home interior Moradabad",
    "wardrobe designer Moradabad",
    "kitchen interior designer Moradabad",
    "Space Build Moradabad",
  ],
};

export default function KitchenWardrobeComboMoradabad() {
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
            Kitchen Wardrobe Combo in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Upgrade your home with a customized
            <strong> Kitchen Wardrobe Combo in Moradabad</strong> by Space
            Build. We provide complete interior solutions that combine stylish
            modular kitchens with functional wardrobes, ensuring a consistent
            design theme throughout your home. Our experts create smart storage
            solutions, premium cabinetry, elegant finishes, and space-efficient
            layouts that enhance both aesthetics and practicality. Whether you
            are furnishing a new home, apartment, villa, or renovating an
            existing space, our kitchen and wardrobe packages offer convenience,
            quality craftsmanship, and excellent value.
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