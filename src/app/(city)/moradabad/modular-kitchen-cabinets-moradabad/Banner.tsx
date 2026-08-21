import { Phone } from "lucide-react";

export const metadata = {
  title: "Modular Kitchen Cabinets in Moradabad | Custom Kitchen Storage Solutions",
  description:
    "Get premium Modular Kitchen Cabinets in Moradabad with Space Build. We design stylish, durable, and space-efficient kitchen cabinets with smart storage, modern finishes, and customized layouts for every home.",
  keywords: [
    "modular kitchen cabinets Moradabad",
    "kitchen cabinets Moradabad",
    "custom kitchen cabinets Moradabad",
    "modular kitchen storage Moradabad",
    "modern kitchen cabinets Moradabad",
    "kitchen cupboard design Moradabad",
    "cabinet maker Moradabad",
    "modular kitchen manufacturer Moradabad",
    "kitchen furniture Moradabad",
    "Space Build Moradabad",
  ],
};

export default function ModularKitchenCabinetsMoradabad() {
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
            Modular Kitchen Cabinets in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Upgrade your kitchen with premium
            <strong> Modular Kitchen Cabinets in Moradabad</strong> by Space
            Build. We design and install customized kitchen cabinets that offer
            maximum storage, better organization, and a modern aesthetic.
            Whether you need base cabinets, wall-mounted units, tall pantry
            cabinets, corner storage solutions, or custom kitchen cupboards, our
            modular cabinet systems are built using high-quality materials and
            premium finishes. Our designs help optimize space, improve
            functionality, and create a clutter-free kitchen that perfectly
            matches your lifestyle and interior décor.
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