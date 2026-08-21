import { Phone } from "lucide-react";

export const metadata = {
  title: "Modular Kitchen Accessories in Moradabad | Smart Kitchen Storage Solutions",
  description:
    "Discover premium Modular Kitchen Accessories in Moradabad with Space Build. Enhance your kitchen with pull-out baskets, corner units, cutlery organizers, pantry systems, bottle pull-outs, and smart storage solutions.",
  keywords: [
    "modular kitchen accessories Moradabad",
    "kitchen accessories Moradabad",
    "modular kitchen fittings Moradabad",
    "kitchen storage solutions Moradabad",
    "pull out baskets Moradabad",
    "kitchen organizer Moradabad",
    "corner kitchen units Moradabad",
    "modular kitchen hardware Moradabad",
    "kitchen accessories dealer Moradabad",
    "Space Build Moradabad",
  ],
};

export default function ModularKitchenAccessoriesMoradabad() {
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
            Modular Kitchen Accessories in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Upgrade your cooking space with premium
            <strong> Modular Kitchen Accessories in Moradabad</strong> from
            Space Build. We offer smart storage solutions and modern kitchen
            fittings that improve organization, accessibility, and efficiency.
            From pull-out baskets, tandem drawers, bottle pull-outs, corner
            carousel units, cutlery organizers, pantry storage systems, and
            under-sink accessories to advanced modular hardware, our solutions
            help maximize every inch of your kitchen. Designed for convenience
            and durability, our modular kitchen accessories enhance both the
            functionality and appearance of modern kitchens.
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