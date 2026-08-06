import { Phone } from "lucide-react";

export const metadata = {
  title: "Kitchen Renovation in Moradabad | Modern Kitchen Remodeling Services",
  description:
    "Looking for kitchen renovation in Moradabad? Space Build offers complete kitchen remodeling, cabinet upgrades, countertop replacement, storage solutions, modular kitchen renovation, and modern kitchen makeover services.",
  keywords: [
    "kitchen renovation Moradabad",
    "kitchen remodeling Moradabad",
    "kitchen makeover Moradabad",
    "modular kitchen renovation Moradabad",
    "modern kitchen renovation Moradabad",
    "kitchen interior renovation Moradabad",
    "kitchen cabinet renovation Moradabad",
    "kitchen upgrade Moradabad",
    "kitchen redesign Moradabad",
    "Space Build Moradabad",
  ],
};

export default function KitchenRenovationMoradabad() {
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
            Kitchen Renovation in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Space Build provides professional
            <strong> Kitchen Renovation in Moradabad</strong> for homes,
            apartments, villas, and residential properties. Our kitchen
            renovation services include cabinet replacement, countertop
            upgrades, modular kitchen remodeling, storage optimization,
            lighting improvements, wall finishes, and complete kitchen
            makeovers. We transform old and outdated kitchens into stylish,
            functional, and modern spaces that enhance both comfort and
            property value.
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