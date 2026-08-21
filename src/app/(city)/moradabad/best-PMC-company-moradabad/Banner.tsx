import { Phone } from "lucide-react";

export default function BestPMCCompanyMoradabad() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1782801421/IMG_20260630_112901.jpg_wnfyv5.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-serif font-semibold mb-5 mt-20 md:mt-32">
            Best PMC Company in Moradabad
          </h1>

          {/* Sub Heading */}
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Looking for the <strong>Best PMC Company in Moradabad</strong>?
            Space Build delivers professional Project Management Consultancy
            (PMC) services for residential, commercial, industrial, and interior
            projects. From planning and budgeting to contractor coordination,
            quality control, site supervision, timeline management, and final
            project handover, our experienced team ensures every project is
            completed efficiently, within budget, and according to the highest
            quality standards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+919927611780">
              <button className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-6 py-3 rounded-xl font-semibold border-2 border-white hover:opacity-90 transition flex items-center gap-2 shadow-lg">
                <Phone size={18} />
                <span>+91 9927611780</span>
              </button>
            </a>

            <a href="mailto:spacebuild.india@gmail.com">
              <button className="bg-transparent px-6 py-3 rounded-xl font-semibold border-2 border-white hover:bg-white hover:text-black transition">
                Get Free Consultation
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}