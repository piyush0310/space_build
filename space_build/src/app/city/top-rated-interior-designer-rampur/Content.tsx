import React from "react";

import LandingEnquiry from "@/components/LandingEnquiry";
import PostNavigation from "@/components/PostNavigation";

const Content = () => {
  return (
    <div className="min-h-screen bg-[#FFF2EB] pt-15">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Top Rated Interior Designer Rampur – Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Rampur Homes Need Thoughtful, Energy-Aligned Design
            </h3>
            <p>
              Vasterior believes that every home in Rampur carries a quiet rhythm — the soft echo of family traditions, the calmness of small-town elegance, and the evolving aspirations of a modern lifestyle. Rampur is a city where heritage blends effortlessly with contemporary comfort, yet many homes remain limited by layouts that don&apos;t fully express their personality or support their energy flow.
            </p>
            <p>
              Today&apos;s families desire spaces that feel warm yet sophisticated — a home that nurtures productivity, health, prosperity, and peace. This makes thoughtful interior design more relevant than ever. And when design is paired with the deeper intelligence of Vastu and spatial flow science, ordinary homes transform into elevated living experiences.
            </p>
            <p>
              If you&apos;re searching for the Top Rated Interior Designer in Rampur, you&apos;re in the right place.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – Our Philosophy & Promise
            </h2>
            <p>
              Vasterior is a premium interior design and MahaVastu-led consultancy that blends aesthetics, intuition, and directional energy into every project. Founded on the belief that a space should feel as beautiful as it looks, we craft environments that support your lifestyle and amplify your goals.
            </p>
            <p>Our design philosophy integrates:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Luxury interiors with material richness</li>
              <li>Spatial intelligence rooted in scientific MahaVastu</li>
              <li>Emotional clarity through clutter-free layouts</li>
              <li>Personal storytelling through details, textures, and colors</li>
            </ul>
            <p>
              Whether it&apos;s a builder-floor in Civil Lines, a bungalow near Bilaspur Road, or a heritage home in the old Rampur quarters — Vasterior designs environments that are refined, meaningful, and effortlessly harmonious.
            </p>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior as the Top Rated Interior Designer in Rampur
            </h2>
            <p>
              Choosing the right interior designer is more than aesthetics — it&apos;s a partnership of trust, clarity, and vision. Vasterior is recognized by homeowners across North India not only for refined style but for our deeply aligned methodology, which brings life, energy, and character to a home.
            </p>
            <p>Here&apos;s what sets us apart in Rampur:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Luxury Meets Functionality</strong> – Our designs aren&apos;t loud or overwhelming — they blend warmth, refinement, and comfort. Every material, color, and detail is chosen with purpose.
              </li>
              <li>
                <strong>MahaVastu-Driven Precision</strong> – We don&apos;t decorate homes — we align them. Our Vastu knowledge optimizes each zone for health, relationships, stability, finance, and creativity.
              </li>
              <li>
                <strong>Scientific Spatial Flow</strong> – Your furniture placement, walkway width, lighting temperatures — everything follows a structured logic that makes the space feel easy, breathable, and luxurious.
              </li>
              <li>
                <strong>Hyper-Customized Designs</strong> – No templates. No repeated ideas. Every home reflects the client&apos;s story, aspirations, and lifestyle patterns.
              </li>
            </ol>

            {/* Signature Interior Design Approach */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Signature Interior Design Approach
            </h2>
            <p>At Vasterior, design goes beyond visual beauty. Our signature method combines intuition, science, and experience.</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Spatial Flow Mapping</strong> – We study the movement of energy, people, and light within your home. This reveals circulation blocks, Vastu imbalances, or unused zones.
              </li>
              <li>
                <strong>Material Selection & Styling</strong> – Only premium materials — leather, suede, natural stone, warm-toned veneers, tailored fabrics, and intelligent lighting.
              </li>
              <li>
                <strong>Lighting Layering</strong> – Ambient, task, accent, and decorative lighting work together to create depth, relax the eyes, and enhance functionality.
              </li>
              <li>
                <strong>Personalized Aesthetic Direction</strong> – Whether you like minimal luxury, classic modern, rustic charm, or contemporary warmth — the aesthetic is built around you.
              </li>
            </ol>

            {/* MahaVastu Integration */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu + Interior Design: The Unique Vasterior Advantage in Rampur
            </h2>
            <p>
              Rampur homes often have irregular plots, multi-use rooms, extended balconies, and layouts that evolved over generations. This is where Vasterior&apos;s MahaVastu integration becomes a game-changer.
            </p>
            <p>We analyze:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>16 MahaVastu zones</li>
              <li>Planetary influences</li>
              <li>Devta energies</li>
              <li>Elemental balance</li>
              <li>Activity–zone compatibility</li>
              <li>Marma and Brahmasthan sensitivity</li>
              <li>Astro-Vastu charts for personal alignment</li>
            </ul>
            <p className="mt-4">
              <strong>The outcome?</strong> A home that isn&apos;t just designed beautifully — it supports your emotional, financial, and spiritual wellbeing.
            </p>

            {/* Services Offered */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Services We Offer in Rampur
            </h2>
            <p>Vasterior provides a comprehensive suite of luxury interior and Vastu services in Rampur:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Vastu Yogdan (Free Wednesday Consultations)</strong> – A heartfelt initiative where we offer guidance on common Vastu concerns without charging any fee.</li>
              <li><strong>Paid MahaVastu Consultation</strong> – A full, detailed property analysis with remedies, design recommendations, Vastu zoning, and Astro-Vastu alignment.</li>
              <li><strong>Vastu Styling</strong> – Object placement, color balancing, elemental correction, and mindful décor selection.</li>
              <li><strong>Full-Scale Interior Designing</strong> – 3D renders, material palette curation, luxury styling, technical drawings, and complete design blueprint.</li>
              <li><strong>Spatial Flow Expertise</strong> – Eliminating energy blocks and creating effortless, breathable movement within your home.</li>
              <li><strong>Astro-Vastu Consultation</strong> – Aligning your home&apos;s zones with your planetary profile and life goals.</li>
              <li><strong>Drafting, Gridding & Survey</strong> – Accurate on-site measurement, zone mapping, and technical foundation for error-free design execution.</li>
            </ol>

            {/* Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Process – How Vasterior Transforms Rampur Homes
            </h2>
            <p>We follow a smooth, predictable, and deeply collaborative process:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Discovery & Consultation</strong> – Understanding your lifestyle, vision, problems, and aspirations.</li>
              <li><strong>Spatial & Vastu Analysis</strong> – Mapping your home&apos;s energy blueprint and identifying corrections.</li>
              <li><strong>Concept & Moodboards</strong> – Presenting inspiration, palettes, materials, textures, and themes.</li>
              <li><strong>Detailed Drawings & 3D Visuals</strong> – Providing absolute clarity before execution begins.</li>
              <li><strong>Material Curation & Vendor Coordination</strong> – Ensuring the highest quality at every stage.</li>
              <li><strong>Design Integration & Handover</strong> – Your space is transformed into a refined, aligned, luxurious environment.</li>
            </ol>

            {/* Project Possibilities */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Project Possibilities in Rampur
            </h2>
            <p>Different homes require different design approaches. Vasterior has experience across:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Builder floors</li>
              <li>Multi-story residences</li>
              <li>Independent bungalows</li>
              <li>Modern apartments</li>
              <li>Renovation-based upgrades</li>
              <li>Joint-family homes</li>
              <li>Heritage homes in older Rampur lanes</li>
            </ul>
            <p>Each project receives a unique treatment — no copy-paste templates.</p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Top Rated Interior Designer Rampur
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">1. Who is the Top Rated Interior Designer in Rampur?</h3>
                <p>Vasterior is widely recognized for luxury interiors and Vastu-based design expertise in Rampur.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2. Do you offer Vastu consultation with interior design?</h3>
                <p>Yes. Every project integrates MahaVastu principles for alignment and clarity.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. What is the cost of interior design in Rampur?</h3>
                <p>Costs vary by scope, materials, and detailing. Consultations start at ₹50,000 per room.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. Do you work on renovations in Rampur?</h3>
                <p>Absolutely — renovations are one of our core strengths.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. How soon can we start the project?</h3>
                <p>Project timelines depend on scope, but we begin with a consultation followed by spatial mapping.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Begin Your Transformation Today
            </h2>
            <p>
              Your home deserves more than furniture and décor — it deserves direction, intention, and harmony. If you&apos;re ready to experience a space that feels aligned, luxurious, and uniquely yours, Vasterior would be honoured to guide you.
            </p>
            <p className="mt-4">
              Begin your transformation today. Reach out for a consultation, and let&apos;s design a Rampur home that supports your journey, your energy, and your future.
            </p>
            
            <div className="space-y-2 mt-6">
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> <a href="mailto:info@spacebuild.com" className="text-blue-600 underline">info@spacebuild.com</a></p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
          </div>

          <PostNavigation slug="top-rated-interior-designer-rampur" />
        </div>

        {/* Form Section - Smart positioning with CSS order */}
        <div className="w-full lg:w-[450px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
