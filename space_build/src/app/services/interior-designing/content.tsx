import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function InteriorDesignPage() {
  return (
    <div className="min-h-screen bg-[#edf4f8]">
      {/* Hero Section */}
      <section className="relative w-full h-[28vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkpejqlby/image/upload/v1769677934/Interior-Design_i2guum.jpg"
          alt="Interior Designing by Space Build"
          fill
          className="object-full"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4">
              INTERIOR DESIGNING
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic">
              Creating luxury interiors where aesthetics, purpose, and energy move in absolute harmony
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-600 flex items-center gap-2">
        <Link href="/" className="hover:text-gray-900">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link href="/services" className="hover:text-gray-900">Services</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-900 font-medium">Interior Designing</span>
      </nav>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-6">
        <div className="space-y-6">
          <h2 className="text-4xl font-serif text-gray-800 mb-8 text-center">Interior Designing</h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Luxury interior design for apartments, kothis, factories, and companies in India requires a perfect blend of style, functionality, and smart planning. At Space Build, we deliver premium and customized interior design solutions that transform spaces into modern, elegant, and highly functional environments. With 15+ years of experience and MahaVastu-certified expertise, we focus on creating interiors that enhance both aesthetics and overall positivity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our luxury interior design for apartments is designed to maximize space while maintaining a sophisticated and modern look. From stylish living areas to smart bedrooms and customized furniture, we ensure every apartment reflects comfort and premium design. For kothis, we offer the best luxury interior design solutions with grand layouts, high-end materials, and elegant finishes that create a royal and timeless living experience.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We also specialize in luxury interior design for factories in India, where we focus on improving workspace efficiency along with a professional and organized environment. Our designs include office cabins, reception areas, and smart layouts that enhance productivity. For corporate clients, we provide the best luxury interior design for companies, creating modern offices, executive cabins, and inspiring workspaces that align with brand identity and business growth.
          </p>

          {/* IMAGE 1 — Luxury interior showcase after intro paragraphs */}
          {/* Replace src with your own Cloudinary URL */}
          <div className="relative w-full h-[320px] md:h-[460px] rounded-2xl overflow-hidden shadow-lg my-8">
            <Image
              src="https://res.cloudinary.com/dkpejqlby/image/upload/v1778056343/1_pgb9me_h83glj.jpg"
              alt="Luxury interior by Space Build"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-6 py-4">
              <p className="text-white text-sm italic">Crafted to reflect who you are and what your life is becoming</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            At Space Build, we follow a structured design process that includes consultation, planning, 3D design, and execution to ensure high-quality results. Our focus on customization, detail, and premium materials makes us a trusted choice for luxury interior design services across India.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            If you are looking to transform your space with expert interior design, connect with Space Build today. Fill out the enquiry form or contact our team to get started with your luxury interior project.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Thoughtfully designed, emotionally grounded, and energetically aligned spaces, crafted to reflect who you are and what your life is becoming.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Space Build, interior design goes far beyond colours, furniture, and décor. We design experiences, energies, and emotional atmospheres.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            A space should look beautiful, but more importantly, it should feel right. It should support your growth, mirror your story, and elevate the everyday moments that shape your life.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">Our approach blends:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Architectural design clarity</li>
              <li>• High-end aesthetic sensibility</li>
              <li>• Spatial psychology</li>
              <li>• MahaVastu principles</li>
              <li>• Material intelligence</li>
              <li>• Cultural intuition</li>
              <li>• Technical precision</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Together, we create spaces that are luxurious yet warm, modern yet rooted, visually stunning yet deeply functional, and always aligned with the energetic blueprint of the inhabitants.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            Whether it is a home, office, boutique studio, or commercial space, Space Build crafts environments that inspire comfort, confidence, productivity, prosperity, and emotional connection.
          </p>
        </div>

         {/* Replace src with a site visit, planning session, or design-in-progress photo */}
            <div className="relative w-full h-[420px] md:h-[700px] rounded-2xl overflow-hidden shadow-lg my-8">
  <Image
    src="https://res.cloudinary.com/dkpejqlby/image/upload/v1778056345/27JulySpace BuildTSInfomatic20A.jpg_rbnpzo.jpg"
    alt="Space Build design process — planning in progress"
    fill
    className="object-contain object-center"
  />

  <div className="absolute inset-0 flex items-end justify-center p-4">
    <p className="text-white text-base md:text-1xl font-serif italic text-center">
      Every decision is intentional. Every detail is considered.
    </p>
  </div>
</div>
      </section>

     

      

      {/* What Interior Designing Includes */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-8">WHAT INTERIOR DESIGNING AT SPACE BUILD INCLUDES</h3>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">1. Discovery & Vision Mapping</h4>
              <p className="text-gray-700 mb-3">We begin by understanding:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Your lifestyle</li>
                <li>• Your aspirations</li>
                <li>• Your personal style</li>
                <li>• Functional needs</li>
                <li>• Cultural and emotional preferences</li>
                <li>• Your long-term vision for the space</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This becomes the foundation of the design narrative.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">2. Concept Creation</h4>
              <p className="text-gray-700 mb-3">Every project gets its own conceptual identity, crafted with care:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Mood boards</li>
                <li>• Inspiration palettes</li>
                <li>• Luxury material direction</li>
                <li>• Lighting philosophy</li>
                <li>• Colour psychology</li>
                <li>• Spatial storytelling</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">Your design concept becomes the soul of the project, guiding everything that follows.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">3. Zoning & Space Planning</h4>
              <p className="text-gray-700 mb-3">Using architectural logic + MahaVastu precision, we plan:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Functional zones</li>
                <li>• Movement pathways</li>
                <li>• Furniture layout</li>
                <li>• Private vs public areas</li>
                <li>• Activity alignment with zones</li>
                <li>• Natural light flow</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">The goal is to create an environment that is intuitive, harmonious, and energetically balanced.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">4. Material & Finish Selection</h4>
              <p className="text-gray-700 mb-3">We curate premium materials that reflect timeless luxury:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Natural stones</li>
                <li>• Exotic veneers</li>
                <li>• Leather, upholstery, and textured fabrics</li>
                <li>• Metals and architectural hardware</li>
                <li>• Paints and specialty finishes</li>
                <li>• Custom wallpapers & art</li>
                <li>• Flooring solutions</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">Every material is selected with intention, balancing aesthetics with energy.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">5. Lighting Design</h4>
              <p className="text-gray-700 mb-3">Lighting defines the mood of a space. We design layered lighting environments:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Ambient</li>
                <li>• Task</li>
                <li>• Accent</li>
                <li>• Cove & backlit elements</li>
                <li>• Spotlighting</li>
                <li>• Feature lighting for luxury highlights</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This ensures every room feels immersive, warm, and sophisticated.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">6. Custom Furniture & Detailing</h4>
              <p className="text-gray-700 mb-3">We design bespoke furniture pieces tailored to your space:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Signature chairs and sofas</li>
                <li>• Tailored wardrobes</li>
                <li>• Luxury study tables</li>
                <li>• Built-in consoles</li>
                <li>• Bespoke room features</li>
                <li>• Paneling & architectural detailing</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">Everything is crafted with timelessness and craftsmanship in mind.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">7. 3D Visualisation</h4>
              <p className="text-gray-700 mb-3">Before anything is built, you see your space in near-real form:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Photorealistic 3D renders</li>
                <li>• Material reproduction</li>
                <li>• Finish and lighting simulations</li>
                <li>• Detailed visualization walkthroughs</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This ensures clarity, comfort, and confidence before execution.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">8. Technical Drawings & Documentation</h4>
              <p className="text-gray-700 mb-3">We provide complete construction-ready documentation:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Furniture drawings</li>
                <li>• Electrical & lighting plans</li>
                <li>• Plumbing & bathroom drawings</li>
                <li>• Ceiling/RCP layouts</li>
                <li>• Wall elevations & sections</li>
                <li>• Execution-ready packages</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This brings precision and ease for contractors and vendors.</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 text-xl mb-3">9. Execution Management (Optional)</h4>
              <p className="text-gray-700 mb-3">We supervise:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Vendor coordination</li>
                <li>• Material procurement</li>
                <li>• Quality checks</li>
                <li>• Site visits</li>
                <li>• Timeline oversight</li>
                <li>• Final styling and handover</li>
              </ul>
              <p className="text-gray-700 mt-3 italic">This ensures the design is executed exactly as envisioned.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE 3 & 4 — Two-column image grid between "Includes" and "Why Choose" */}
      {/* Replace both srcs with two different completed project photos */}
      <div className="grid grid-cols-2 w-full h-[220px] md:h-[440px]">
        <div className="relative overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dkpejqlby/image/upload/v1778056345/27JulySpace BuildTSInfomatic08A.jpg_fdabrj.jpg"
            alt="Luxury custom furniture by Space Build"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dkpejqlby/image/upload/v1778056345/27JulySpace BuildTSInfomatic35A.jpg_pmipv3.jpg"
            alt="Layered lighting design by Space Build"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/*SPACE BUILD */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">WHY CLIENTS CHOOSE Space Build FOR INTERIOR DESIGN</h3>

        {/* IMAGE 5 — Completed project showcase */}
        {/* Replace src with your most impressive completed project image */}
        <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden shadow-lg mb-8">
          <Image
            src="https://res.cloudinary.com/dkpejqlby/image/upload/v1778056344/2_u9qi2w_doimrl.jpg"
            alt="Completed luxury interior project by Space Build"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-end">
            <p className="text-white text-base font-serif italic px-6 pb-5">
              Luxury with depth. Beauty with energy. Aesthetics with intention.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Most designers create good-looking spaces.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <p className="text-gray-800 font-semibold mb-3">We create spaces that:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Transform daily life</li>
              <li>• Elevate emotional well-being</li>
              <li>• Align with MahaVastu principles</li>
              <li>• Enhance productivity & prosperity</li>
              <li>• Feel timeless, not trend-driven</li>
              <li>• Reflect your personal mythology and story</li>
            </ul>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            Every design at Space Build is a journey; collaborative, meaningful, and deeply conscious.
          </p>
        </div>
      </section>

      {/* What You Experience */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">WHAT YOU EXPERIENCE</h3>

          {/* IMAGE 6 — Serene home interior above the bullet list */}
          {/* Replace src with a calming bedroom or living area from your portfolio */}
          <div className="relative w-full h-[320px] md:h-[460px] rounded-2xl overflow-hidden shadow-lg my-8">
            <Image
              src="https://res.cloudinary.com/dkpejqlby/image/upload/v1778056344/3_idjfpl_z1iwxx.jpg"
              alt="A calm and elegant home interior by Space Build"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <ul className="space-y-2 text-gray-700">
              <li>• A home that feels grounded, calm, and elegant</li>
              <li>• An office that inspires focus and success</li>
              <li>• A space that aligns with your aspirations</li>
              <li>• An environment that supports your mental and emotional state</li>
              <li>• A design that is functional yet artfully curated</li>
              <li>• A feeling of this finally feels like me</li>
            </ul>
          </div>
          <p className="text-gray-700 mt-6 italic text-center">
            When energy and aesthetics work together, the transformation is both visible and invisible.
          </p>
        </div>
      </section>

      {/* Deliverables */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">DELIVERABLES</h3>

        {/* IMAGE 7 — Design drawings / technical documents visual */}
        {/* Replace src with floor plans, material sheets, or design documentation photo */}
        <div className="relative w-full h-[320px] md:h-[560px] rounded-2xl overflow-hidden shadow-lg my-8">
          <Image
            src="https://res.cloudinary.com/dkpejqlby/image/upload/v1778056345/27JulySpace BuildTSInfomatic13A.jpg_szqqld.jpg"
            alt="Interior design technical drawings and documentation"
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-gray-700 mb-3">You receive:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Concept & mood boards</li>
            <li>• Material palettes</li>
            <li>• Detailed zoning & layouts</li>
            <li>• Interior design drawings</li>
            <li>• Lighting design</li>
            <li>• Furniture detailing</li>
            <li>• 3D renders</li>
            <li>• Vastu alignment (if applicable)</li>
            <li>• Execution details</li>
            <li>• Styling recommendations</li>
          </ul>
        </div>
        <p className="text-gray-700 mt-6 italic text-center">
          A complete creative + technical package that brings your dream space to life.
        </p>
      </section>

      {/* The Process */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-6">THE SPACE BUILD DESIGN PROCESS</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 1 — Discovery & Vision Alignment</h4>
              <p className="text-gray-700">Your story becomes the foundation.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 2 — Concept & Mood Creation</h4>
              <p className="text-gray-700">Visual direction and atmosphere building.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 3 — Spatial Planning & Vastu Integration</h4>
              <p className="text-gray-700">Functionality + energy alignment.</p>
            </div>

            {/* IMAGE 8 — Mid-process image between steps 3 and 4 */}
            {/* Replace src with a site visit, planning session, or design-in-progress photo */}
            <div className="relative w-full h-[420px] md:h-[700px] rounded-2xl overflow-hidden shadow-lg my-8">
  <Image
    src="https://res.cloudinary.com/dkpejqlby/image/upload/v1778056344/27JulySpace BuildTSInfomatic31A.jpg_xmupub.jpg"
    alt="Space Build design process — planning in progress"
    fill
    className="object-contain object-center"
  />

  
</div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 4 — Material Exploration & Detailing</h4>
              <p className="text-gray-700">Luxury meets longevity.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 5 — 3D Experience & Refinements</h4>
              <p className="text-gray-700">Your space, fully visualized.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 6 — Technical Drawings</h4>
              <p className="text-gray-700">For contractors and execution teams.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-semibold text-gray-800 mb-2">Step 7 — Supervision & Styling (Optional)</h4>
              <p className="text-gray-700">Ensuring perfection in the final look and feel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-3xl font-serif text-gray-800 mb-6">FAQs</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">1. Is Vastu included in this service?</h4>
            <p className="text-gray-700">Yes, Vastu alignment is integrated if requested or necessary for the project.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">2. Do you undertake both residential and commercial projects?</h4>
            <p className="text-gray-700">Absolutely; homes, offices, studios, showrooms, boutique spaces, and more.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">3. Do you help with material selection?</h4>
            <p className="text-gray-700">Yes. Material and finish selection is a core part of the process.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">4. Can I hire Space Build only for design and not execution?</h4>
            <p className="text-gray-700">Yes. We offer design-only packages too.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-semibold text-gray-800 mb-2">5. How long does an interior project take?</h4>
            <p className="text-gray-700">Depends on scope, but typically 2 to 8 months.</p>
          </div>
        </div>

        {/* IMAGE 9 — Aspirational detail shot after FAQs */}
        {/* Replace src with a beautifully styled room detail or feature wall */}
        
      </section>

      {/* Closing CTA */}
      <section className="bg-[#edf4f8] py-12">
        <div className="max-w-5xl mx-auto px-6">
          {/* IMAGE 10 — Full bleed room as CTA backdrop */}
          {/* Replace src with your most aspirational completed interior image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="relative w-full h-[420px] md:h-[500px]">
              <Image
                src="https://res.cloudinary.com/dkpejqlby/image/upload/v1778056344/27JulySpace BuildTSInfomatic27A.jpg_qxnrzk.jpg"
                alt="A luxurious interior designed by Space Build, perfect for a consultation CTA"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/55 flex items-center justify-center">

                <div className="text-center px-6 max-w-xl">
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                    Design a Space That Reflects Your Story, Vision & Energy
                  </h3>
                  <p className="text-lg text-white/90 mb-6">
                    Let Space Build craft an interior that feels luxurious, aligned, timeless and unmistakably yours.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-2 py-2 space-y-2">
                    <p className="text-white text-xl font-semibold">Request an Interior Design Consultation</p>
                    <p className="text-white/80">Contact us today at:</p>
                    <p className="text-[#f7b97a] font-semibold text-lg">+917906086899</p>
                    <p className="text-[#f7b97a] font-semibold">spacebuild.india@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}