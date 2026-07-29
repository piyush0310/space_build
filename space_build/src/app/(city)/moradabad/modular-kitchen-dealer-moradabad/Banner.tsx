import { Phone } from "lucide-react";

export const metadata = {
  title: "Modular Kitchen Dealer in Moradabad | Premium Kitchen Solutions",
  description:
    "Looking for a modular kitchen dealer in Moradabad? Space Build offers customized modular kitchens, premium kitchen cabinets, smart storage solutions, modern finishes, and professional installation services.",
  keywords: [
    "modular kitchen dealer Moradabad",
    "modular kitchen showroom Moradabad",
    "modular kitchen supplier Moradabad",
    "kitchen dealer Moradabad",
    "modular kitchen near me",
    "modern modular kitchen Moradabad",
    "kitchen cabinets Moradabad",
    "custom modular kitchen Moradabad",
    "luxury modular kitchen Moradabad",
    "Space Build Moradabad",
  ],
};

export default function ModularKitchenDealerMoradabad() {
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
            Modular Kitchen Dealer in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Space Build is a reliable
            <strong> Modular Kitchen Dealer in Moradabad</strong> offering
            modern, functional, and customized kitchen solutions for homes,
            apartments, villas, and commercial spaces. We provide premium
            modular kitchens with high-quality cabinets, smart storage systems,
            durable hardware, stylish finishes, and expert installation. Our
            kitchen solutions are designed to maximize space utilization while
            enhancing the beauty, comfort, and efficiency of your cooking area.
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