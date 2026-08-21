import { Phone } from "lucide-react";

export const metadata = {
  title: "Modular Kitchen with Island in Moradabad | Luxury Island Kitchen Design",
  description:
    "Get premium Modular Kitchen with Island designs in Moradabad by Space Build. We create stylish island kitchens with smart storage, modern layouts, elegant finishes, and functional workspaces for contemporary homes.",
  keywords: [
    "modular kitchen with island Moradabad",
    "island kitchen design Moradabad",
    "modern island kitchen Moradabad",
    "luxury modular kitchen Moradabad",
    "kitchen island design Moradabad",
    "open kitchen with island Moradabad",
    "custom modular kitchen Moradabad",
    "contemporary kitchen design Moradabad",
    "kitchen interior designer Moradabad",
    "Space Build Moradabad",
  ],
};

export default function ModularKitchenWithIslandMoradabad() {
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
            Modular Kitchen with Island in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Transform your home with a stunning
            <strong> Modular Kitchen with Island in Moradabad</strong> by Space
            Build. Our island kitchen designs combine luxury, functionality, and
            modern aesthetics to create a spacious and efficient cooking
            environment. Kitchen islands provide additional workspace, extra
            storage, seating options, and a stylish focal point for your home.
            Whether you prefer a contemporary open kitchen or a premium modular
            setup, our customized island kitchens are designed to enhance
            convenience, improve workflow, and elevate the overall appearance of
            your living space.
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