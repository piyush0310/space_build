import { Phone } from "lucide-react";

export const metadata = {
  title: "Interior Lighting Design in Moradabad | Home & Office Lighting Solutions",
  description:
    "Get professional interior lighting design services in Moradabad with Space Build. We design decorative lighting, false ceiling lighting, ambient lighting, modular lighting, and smart lighting solutions for homes, offices, and commercial spaces.",
  keywords: [
    "lighting design interior Moradabad",
    "interior lighting design Moradabad",
    "home lighting design Moradabad",
    "false ceiling lighting Moradabad",
    "modern lighting design",
    "decorative lighting Moradabad",
    "living room lighting design",
    "bedroom lighting design",
    "office lighting solutions Moradabad",
    "Space Build Moradabad",
  ],
};

export default function LightingDesignInteriorMoradabad() {
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
            Interior Lighting Design Services in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Enhance the beauty and functionality of your space with
            <strong> Interior Lighting Design Services in Moradabad</strong>
            from Space Build. We create customized lighting plans for living
            rooms, bedrooms, kitchens, offices, villas, and commercial spaces
            using ambient lighting, decorative fixtures, cove lighting, false
            ceiling lighting, task lighting, and smart lighting systems. Our
            expert designers ensure the perfect balance of comfort, aesthetics,
            and energy efficiency to create elegant and welcoming interiors.
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