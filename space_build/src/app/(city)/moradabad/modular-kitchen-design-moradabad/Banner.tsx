import { Phone } from "lucide-react";

export const metadata = {
  title: "Modular Kitchen Design in Moradabad | Modern Kitchen Designers",
  description:
    "Get modern modular kitchen design services in Moradabad with Space Build. We create customized L-shaped, U-shaped, parallel, island, and luxury modular kitchens with smart storage and premium finishes.",
  keywords: [
    "modular kitchen design Moradabad",
    "modular kitchen Moradabad",
    "kitchen designer Moradabad",
    "modern kitchen design",
    "L shaped kitchen Moradabad",
    "U shaped modular kitchen",
    "luxury modular kitchen Moradabad",
    "small kitchen design Moradabad",
    "custom modular kitchen",
    "Space Build Moradabad",
  ],
};

export default function ModularKitchenDesignMoradabad() {
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
            Modular Kitchen Design Services in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Transform your cooking space with professional
            <strong> Modular Kitchen Design Services in Moradabad</strong> from
            Space Build. We design stylish and functional modular kitchens with
            smart storage solutions, premium cabinets, modern countertops,
            designer backsplashes, and high-quality hardware. Whether you need
            an L-shaped, U-shaped, parallel, island, or customized kitchen, our
            experts create layouts that maximize space, improve efficiency, and
            enhance the beauty of your home.
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