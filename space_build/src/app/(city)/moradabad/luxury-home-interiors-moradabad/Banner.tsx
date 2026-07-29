import { Phone } from "lucide-react";

export const metadata = {
  title: "Luxury Home Interiors in Moradabad | Premium Interior Design",
  description:
    "Get luxury home interiors in Moradabad with Space Build. Premium living room, bedroom, modular kitchen, villa, apartment, and custom interior design solutions with elegant finishes and modern luxury.",
  keywords: [
    "luxury home interiors moradabad",
    "luxury interior designer moradabad",
    "premium home interiors moradabad",
    "luxury villa interior design",
    "luxury living room design",
    "luxury bedroom interiors",
    "high end interior designer moradabad",
    "modern luxury home design",
    "luxury modular kitchen moradabad",
    "space build moradabad",
  ],
};

export default function LuxuryHomeInteriorsMoradabad() {
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
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
            Luxury Home Interiors in Moradabad
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Experience premium living with{" "}
            <strong>Luxury Home Interiors in Moradabad</strong> by
            <strong> Space Build</strong>. We design elegant living rooms,
            luxurious bedrooms, designer modular kitchens, grand dining spaces,
            and sophisticated home interiors using premium materials, modern
            layouts, custom furniture, and stunning lighting concepts.
            Our expert designers create personalized interiors that combine
            comfort, functionality, and timeless luxury for villas,
            apartments, and independent homes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Call Button */}
            <a href="tel:+919927611780">
              <button className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-5 py-3 rounded-xl font-semibold border-2 border-white hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg">
                <Phone size={18} />
                <span className="text-base">+91 9927611780</span>
              </button>
            </a>

            {/* Consultation Button */}
            <a href="mailto:spacebuild.india@gmail.com">
              <button className="bg-transparent px-5 py-3 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-gray-800 transition">
                Book Free Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}