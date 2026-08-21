import { Phone } from "lucide-react";

export const metadata = {
  title: "PVC Modular Kitchen in Moradabad | Waterproof Kitchen Solutions",
  description:
    "Get durable and stylish PVC Modular Kitchen designs in Moradabad with Space Build. Our waterproof, termite-resistant, and low-maintenance PVC kitchens offer smart storage, modern finishes, and long-lasting performance.",
  keywords: [
    "PVC modular kitchen Moradabad",
    "PVC kitchen design Moradabad",
    "waterproof modular kitchen Moradabad",
    "PVC kitchen cabinets Moradabad",
    "modular kitchen PVC material Moradabad",
    "PVC kitchen interior Moradabad",
    "affordable modular kitchen Moradabad",
    "kitchen designer Moradabad",
    "custom modular kitchen Moradabad",
    "Space Build Moradabad",
  ],
};

export default function PVCModularKitchenMoradabad() {
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
            PVC Modular Kitchen in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Looking for a durable and budget-friendly
            <strong> PVC Modular Kitchen in Moradabad</strong>? Space Build
            offers customized PVC modular kitchen solutions that combine modern
            aesthetics with excellent durability. PVC kitchens are known for
            being waterproof, termite-resistant, easy to maintain, and highly
            cost-effective, making them a popular choice for Indian homes. Our
            designs include stylish cabinets, smart storage systems, premium
            hardware, and functional layouts that maximize space while ensuring
            long-lasting performance. Whether you need a compact kitchen or a
            complete modular setup, we deliver solutions tailored to your needs
            and budget.
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