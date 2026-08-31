import { Phone } from "lucide-react";

export default function Banner() {
  return (
    <main className="bg-white">
      <section
        className="relative text-white py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1784614424/617c07cbe3f89632078bcefe00a91bb8_tzjybj.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
            Best Vastu Consultant in Rampur
          </h1>

          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Get practical Vastu guidance for your home, office, and commercial
            spaces through <strong>Space Build&apos;s Vastu Consultant Services in Rampur</strong>.
            <br />
            Our certified MahaVastu experts assess the direction, layout,
            entrance, rooms, kitchen, bedrooms, living areas, workspaces,
            furniture placement, colors, energy zones, and other important
            aspects of your property. Based on the existing structure and
            requirements of your space, we provide practical Vastu
            recommendations that focus on improving balance, functionality,
            comfort, and positive energy while minimizing unnecessary
            structural changes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+919927611780">
              <button className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-5 py-3 rounded-xl font-semibold border-2 border-white hover:opacity-90 transition flex items-center justify-center gap-2 shadow-lg">
                <Phone size={18} />
                <span className="text-base">+91 9927611780</span>
              </button>
            </a>

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
