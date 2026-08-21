import { Phone } from "lucide-react";

export default function ConstructionPlanningConsultantMoradabad() {
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
            Construction Planning Consultant in Moradabad
          </h1>

          {/* Sub Heading */}
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Looking for a trusted <strong>Construction Planning Consultant in Moradabad</strong>?
            Space Build provides expert construction planning and project
            consultancy services for residential, commercial, industrial, and
            institutional developments. Our team assists with feasibility
            studies, project scheduling, resource allocation, budgeting,
            procurement planning, risk management, and execution strategies to
            ensure smooth project delivery, optimized costs, and timely
            completion.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Call Button */}
            <a href="tel:+919927611780">
              <button className="bg-gradient-to-r from-[#2eaad4] to-[#2c67f2] px-6 py-3 rounded-xl font-semibold border-2 border-white hover:opacity-90 transition flex items-center gap-2 shadow-lg">
                <Phone size={18} />
                <span>+91 9927611780</span>
              </button>
            </a>

            {/* Consultation Button */}
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