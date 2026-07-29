import { Phone } from "lucide-react";

export const metadata = {
  title: "Modular Kitchen Manufacturer in Moradabad | Custom Kitchen Solutions",
  description:
    "Looking for a modular kitchen manufacturer in Moradabad? Space Build designs and manufactures customized modular kitchens with premium materials, smart storage solutions, modern finishes, and expert installation services.",
  keywords: [
    "modular kitchen manufacturer Moradabad",
    "modular kitchen supplier Moradabad",
    "custom modular kitchen Moradabad",
    "kitchen manufacturer Moradabad",
    "modular kitchen dealer Moradabad",
    "modern modular kitchen Moradabad",
    "PVC modular kitchen Moradabad",
    "acrylic modular kitchen Moradabad",
    "kitchen cabinet manufacturer Moradabad",
    "Space Build Moradabad",
  ],
};

export default function ModularKitchenManufacturerMoradabad() {
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
            Modular Kitchen Manufacturer in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Space Build is a trusted
            <strong> Modular Kitchen Manufacturer in Moradabad</strong>
            offering premium-quality customized kitchen solutions for homes,
            apartments, villas, and commercial properties. We manufacture
            stylish modular kitchens with durable cabinets, smart storage
            systems, premium hardware, modern finishes, and space-saving
            layouts. From design and manufacturing to installation, our team
            delivers functional, elegant, and long-lasting kitchens tailored to
            your lifestyle and budget.
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