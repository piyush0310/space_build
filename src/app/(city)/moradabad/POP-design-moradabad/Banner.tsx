import { Phone } from "lucide-react";

export const metadata = {
  title: "POP Design in Moradabad | False Ceiling & POP Interior Design",
  description:
    "Get modern POP design services in Moradabad with Space Build. We create stylish POP ceilings, decorative wall designs, false ceilings, and customized interior solutions for homes, offices, and commercial spaces.",
  keywords: [
    "POP design Moradabad",
    "POP ceiling design Moradabad",
    "false ceiling design Moradabad",
    "modern POP design",
    "POP wall design Moradabad",
    "gypsum ceiling Moradabad",
    "living room POP design",
    "bedroom POP ceiling design",
    "decorative ceiling design",
    "Space Build Moradabad",
  ],
};

export default function POPDesignMoradabad() {
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
            POP Design Services in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Enhance the beauty of your home with professional
            <strong> POP Design Services in Moradabad</strong> from Space Build.
            We specialize in modern POP ceilings, designer false ceilings,
            decorative wall patterns, cove lighting designs, and customized
            interior ceiling solutions for homes, villas, offices, shops, and
            commercial spaces. Our creative designs add elegance, depth, and a
            premium look to every room while improving lighting aesthetics and
            overall interior appeal. POP and false ceiling designs remain one of
            the most popular interior upgrades for modern homes and commercial
            spaces. 
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