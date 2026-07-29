import { Phone } from "lucide-react";

export const metadata = {
  title: "Wardrobe Design in Moradabad | Custom & Modular Wardrobes",
  description:
    "Get modern wardrobe design services in Moradabad with Space Build. We create modular wardrobes, sliding wardrobes, walk-in closets, bedroom wardrobes, and customized storage solutions for homes and apartments.",
  keywords: [
    "wardrobe design Moradabad",
    "modular wardrobe Moradabad",
    "custom wardrobe design",
    "sliding wardrobe Moradabad",
    "bedroom wardrobe design",
    "walk in wardrobe Moradabad",
    "modern wardrobe design",
    "wooden wardrobe design",
    "wardrobe designer Moradabad",
    "Space Build Moradabad",
  ],
};

export default function WardrobeDesignMoradabad() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554112/IMG_20260627_141923.jpg_kqocgv.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-20 md:mt-32">
            Wardrobe Design Services in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Upgrade your bedroom storage with professional
            <strong> Wardrobe Design Services in Moradabad</strong> from
            Space Build. We design stylish modular wardrobes, sliding door
            wardrobes, walk-in closets, hinged wardrobes, and customized
            storage solutions that maximize space while enhancing the beauty of
            your interiors. Our expert designers focus on functionality,
            organization, premium finishes, and modern aesthetics to create
            wardrobes that perfectly match your lifestyle and home décor.
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