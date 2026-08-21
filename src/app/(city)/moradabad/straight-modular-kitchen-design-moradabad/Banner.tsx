import { Phone } from "lucide-react";

export const metadata = {
  title: "Straight Modular Kitchen Design in Moradabad | Space Build",
  description:
    "Get modern Straight Modular Kitchen Design services in Moradabad with Space Build. We design stylish single-wall kitchens with smart storage, premium finishes, and space-saving layouts for apartments and homes.",
  keywords: [
    "straight modular kitchen design Moradabad",
    "single wall kitchen Moradabad",
    "modular kitchen Moradabad",
    "straight kitchen layout Moradabad",
    "small kitchen design Moradabad",
    "modern modular kitchen Moradabad",
    "compact kitchen design Moradabad",
    "kitchen interior designer Moradabad",
    "space saving kitchen Moradabad",
    "Space Build Moradabad",
  ],
};

export default function StraightModularKitchenDesignMoradabad() {
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
            Straight Modular Kitchen Design in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Create a sleek and efficient cooking space with a
            <strong> Straight Modular Kitchen Design in Moradabad</strong> by
            Space Build. Also known as a single-wall kitchen, this layout is
            perfect for apartments, studio homes, and compact spaces. Our
            designers create customized straight kitchens with smart storage
            solutions, premium cabinets, durable countertops, and modern
            finishes that maximize functionality while maintaining a clean and
            elegant appearance. It is an ideal choice for homeowners seeking a
            practical, space-saving, and stylish kitchen design.
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