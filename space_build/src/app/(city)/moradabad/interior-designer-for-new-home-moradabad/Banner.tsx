import { Phone } from "lucide-react";

export const metadata = {
  title: "Interior Designer for New Home in Moradabad | Space Build",
  description:
    "Looking for an interior designer for a new home in Moradabad? Space Build provides complete home interior design services including modular kitchens, bedrooms, living rooms, wardrobes, false ceilings, and customized interiors.",
  keywords: [
    "interior designer for new home moradabad",
    "new home interior design moradabad",
    "home interior designer moradabad",
    "new house interior designer",
    "villa interior designer moradabad",
    "apartment interior design moradabad",
    "modern home interiors moradabad",
    "3bhk interior design moradabad",
    "luxury home interiors moradabad",
    "space build moradabad",
  ],
};

export default function InteriorDesignerForNewHomeMoradabad() {
  return (
    <main className="bg-white">
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
            Interior Designer for New Home in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Build your dream home with the help of an experienced
            <strong> Interior Designer for New Home in Moradabad</strong>.
            Space Build offers complete interior design solutions for newly
            constructed houses, villas, apartments, and duplex homes. From
            space planning and 3D design concepts to modular kitchens,
            wardrobes, false ceilings, lighting, and furniture layouts, we
            create stylish, functional, and personalized interiors that match
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