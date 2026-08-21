import { Phone } from "lucide-react";

export const metadata = {
  title: "Modular Kitchen Near Me in Moradabad | Trusted Kitchen Designers",
  description:
    "Searching for a Modular Kitchen Near Me in Moradabad? Space Build offers customized modular kitchen design, manufacturing, and installation services with premium materials, smart storage, and modern finishes.",
  keywords: [
    "modular kitchen near me Moradabad",
    "modular kitchen near me",
    "best modular kitchen Moradabad",
    "modular kitchen showroom Moradabad",
    "kitchen designer near me Moradabad",
    "modular kitchen contractor Moradabad",
    "custom modular kitchen Moradabad",
    "kitchen interior designer Moradabad",
    "modular kitchen installation Moradabad",
    "Space Build Moradabad",
  ],
};

export default function ModularKitchenNearMeMoradabad() {
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
            Modular Kitchen Near Me in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Looking for a reliable
            <strong> Modular Kitchen Near Me in Moradabad</strong>? Space Build
            provides complete modular kitchen solutions including design,
            manufacturing, installation, renovation, and smart storage planning.
            Our expert team creates modern kitchens with premium cabinets,
            durable countertops, space-saving accessories, and customized
            layouts that perfectly match your home and lifestyle. Whether you
            need an L-shaped, U-shaped, parallel, straight, or island kitchen,
            we deliver stylish and functional kitchens built for long-term
            performance and everyday convenience.
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