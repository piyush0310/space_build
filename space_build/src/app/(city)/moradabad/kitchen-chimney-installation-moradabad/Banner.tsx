import { Phone } from "lucide-react";

export const metadata = {
  title: "Kitchen Chimney Installation in Moradabad | Expert Chimney Fitting Services",
  description:
    "Get professional Kitchen Chimney Installation in Moradabad with Space Build. We provide expert chimney fitting, ducting solutions, modular kitchen integration, and hassle-free installation for all chimney brands.",
  keywords: [
    "kitchen chimney installation Moradabad",
    "chimney fitting services Moradabad",
    "kitchen chimney near me Moradabad",
    "chimney installation service Moradabad",
    "modular kitchen chimney installation",
    "chimney duct installation Moradabad",
    "kitchen chimney contractor Moradabad",
    "chimney repair and installation Moradabad",
    "kitchen appliance installation Moradabad",
    "Space Build Moradabad",
  ],
};

export default function KitchenChimneyInstallationMoradabad() {
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
            Kitchen Chimney Installation in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Looking for reliable
            <strong> Kitchen Chimney Installation in Moradabad</strong>? Space
            Build provides professional chimney fitting and installation
            services for modular kitchens, apartments, villas, and residential
            properties. Our experienced team ensures proper chimney placement,
            secure mounting, efficient ducting, and seamless integration with
            your kitchen layout. A correctly installed chimney helps eliminate
            smoke, grease, odors, and heat while improving ventilation and
            maintaining a cleaner cooking environment. Whether you're installing
            a new chimney or upgrading an existing setup, we deliver safe,
            efficient, and long-lasting installation solutions.
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
