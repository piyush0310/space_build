import { Phone } from "lucide-react";

export default function Banner() {
  return (
    <main className="bg-white">
      <section
        className="relative px-6 py-20 text-white bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl text-center">
          <h1 className="mb-4 mt-18 text-3xl font-serif md:mt-30 md:text-4xl">
            How To Choose Home Renovation Company Haldwani
          </h1>

          <p className="mx-auto mb-6 max-w-4xl text-xl">
            Upgrade your dream home with professional <strong>3BHK Interior Design In kashipur</strong> by Space Build.
            We create luxurious, functional, and personalized interiors that maximize space while enhancing comfort and aesthetics.
            <br />
            Our expert designers provide complete solutions for living rooms, bedrooms, modular kitchens, dining areas, wardrobes,
            false ceilings, lighting, and turnkey interior execution. Every design is carefully crafted to match your lifestyle,
            family needs, and budget while delivering a premium living experience.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:+919927611780">
              <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-white bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-5 py-3 font-semibold shadow-lg transition hover:opacity-90">
                <Phone size={18} />
                <span className="text-base">+91 9927611780</span>
              </button>
            </a>

            <a href="mailto:spacebuild.india@gmail.com">
              <button className="rounded-xl border-2 border-white bg-transparent px-5 py-3 font-semibold transition hover:bg-white hover:text-gray-800">
                Book Free Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
