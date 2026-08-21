import { Phone } from "lucide-react";

export const metadata = {
  title: "Wall Decor Design in Moradabad | Modern Wall Decoration Services",
  description:
    "Get creative wall decor design services in Moradabad with Space Build. We offer decorative wall panels, wallpapers, accent walls, wall art, texture painting, and customized wall decoration solutions for homes and offices.",
  keywords: [
    "wall decor design Moradabad",
    "wall decoration services Moradabad",
    "accent wall design Moradabad",
    "wall panel design Moradabad",
    "modern wall decor",
    "living room wall design",
    "bedroom wall decoration",
    "wallpaper installation Moradabad",
    "texture wall design",
    "Space Build Moradabad",
  ],
};

export default function WallDecorDesignMoradabad() {
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
            Wall Decor Design Services in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Transform plain walls into stunning design elements with
            <strong> Wall Decor Design Services in Moradabad</strong> from
            Space Build. We create modern accent walls, decorative wall panels,
            wallpaper installations, texture finishes, wall moldings, artistic
            wall features, and customized décor solutions for homes, villas,
            apartments, offices, and commercial spaces. Our creative wall
            designs add personality, elegance, and visual appeal while enhancing
            the overall interior aesthetics of your property.
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