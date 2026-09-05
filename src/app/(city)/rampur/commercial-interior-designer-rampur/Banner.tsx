import { Phone } from "lucide-react";

export default function CommercialInteriorDesignerRampur() {
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
            Commercial Interior Designer in Rampur
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Create professional, attractive, and functional commercial spaces
            with{" "}
            <strong>
              Space Build's Commercial Interior Design Services in Rampur
            </strong>
            .
            <br />
            Our experienced commercial interior designers create customized
            interiors for offices, retail stores, showrooms, restaurants,
            clinics, salons, studios, and other commercial spaces. We carefully
            plan your space according to your business requirements, brand
            identity, customer experience, workflow, and budget. From space
            planning, reception areas, workstations, cabins, display areas,
            partitions, furniture, lighting, false ceilings, flooring, wall
            designs, colors, materials, and décor to complete commercial
            interiors, we provide practical and modern design solutions that
            maximize space utilization and create a professional environment.
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

            {/* Free Consultation Button */}
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