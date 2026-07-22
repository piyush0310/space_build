import { Phone } from "lucide-react";

export default function ConstructionProjectManagementServicesMoradabad() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dv9tivfvq/image/upload/v1784703548/what-is-project-management-consultancy_ofyh81.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-serif mb-4 mt-18 md:mt-30">
            Best Construction Project Management Services in Moradabad
          </h1>

          {/* Subheading */}
          <p className="text-xl mb-6 max-w-4xl mx-auto">
            Ensure the successful execution of your construction project with
            <strong> Space Build's Construction Project Management Services in Moradabad</strong>.
            <br />
            Our experienced project managers oversee every stage of construction,
            including planning, budgeting, contractor coordination, procurement,
            quality assurance, timeline management, safety compliance, and cost
            control. We provide end-to-end project management solutions for
            residential, commercial, industrial, and institutional projects,
            ensuring timely completion, superior quality, and maximum value for
            your investment.
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