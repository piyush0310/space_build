import { Phone } from "lucide-react";

export const metadata = {
  title: "L Shape Modular Kitchen in Moradabad | Space Saving Kitchen Design",
  description:
    "Get modern L Shape Modular Kitchen services in Moradabad with Space Build. We design stylish, space-saving, and functional L-shaped kitchens with smart storage, premium finishes, and customized layouts.",
  keywords: [
    "L shape modular kitchen Moradabad",
    "L shaped kitchen design Moradabad",
    "modular kitchen Moradabad",
    "corner kitchen design Moradabad",
    "modern kitchen design Moradabad",
    "custom modular kitchen Moradabad",
    "small kitchen design Moradabad",
    "luxury modular kitchen Moradabad",
    "kitchen interior designer Moradabad",
    "Space Build Moradabad",
  ],
};

export default function LShapeModularKitchenMoradabad() {
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
            L Shape Modular Kitchen in Moradabad
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto">
            Upgrade your home with a stylish and functional
            <strong> L Shape Modular Kitchen in Moradabad</strong> from
            Space Build. L-shaped kitchens are one of the most popular kitchen
            layouts because they maximize corner space, improve workflow, and
            provide ample storage while maintaining an open and modern look. Our
            expert designers create customized L-shaped kitchens with premium
            cabinets, smart storage solutions, durable countertops, and elegant
            finishes that perfectly match your lifestyle, space, and budget.
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