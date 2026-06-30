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
          

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Elevating Interiors with Sophistication, Craftsmanship & Vision
            </h3>
            <p>
              When you imagine high-end interiors, you think of elegance, precision, bespoke elements, and a signature style. At Vasterior – High-End Interior Designer in Moradabad, UP, we specialize in crafting luxury living and working places that go beyond aesthetics. With a focus on materials, detailing, Vastu harmony, and impeccable execution, we bring interiors that make a statement—yet feel cozy, functional, and timeless.
            </p>

            {/* Why Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is the Choice for High-End Interiors in Moradabad
            </h2>
            <p>
              Moradabad is evolving: people now expect interiors that speak luxury, not just utility. Here&apos;s why clients choose Vasterior for high-end projects:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Bespoke & Tailored Design</h3>
                <p>Every project is custom—from concept to finish—no off-the-shelf templates.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Premium Materials & Finishes</h3>
                <p>Marble, natural stone, designer lighting, imported furniture, custom millwork.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Expert Team & Craftsmanship</h3>
                <p>Skilled architects, interior designers, artisans, and project managers collaborating.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vastu Integration & Balance</h3>
                <p>We weave in Vastu principles so luxury doesn&apos;t compromise harmony.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Full Turnkey Service</h3>
                <p>From planning, procurement, and execution, to handover and support.</p>
              </div>
            </div>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our High-End Interior Design Services in Moradabad
            </h2>
            <p>We deliver premium solutions across residential, luxury homes, and commercial projects:</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Luxury Residences, Villas & Kothis</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Grand living rooms with high ceilings, statement lighting, sculptural elements</li>
                  <li>Dining halls, lounges, courtyards, and terraces with refined aesthetics</li>
                  <li>Bespoke furniture and millwork tailored to your style and scale</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Premium Apartments & Flats</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>High-end finishes in compact spaces with intelligent design</li>
                  <li>Concealed storage, smart lighting, and luxury detailing</li>
                  <li>Elevated bathrooms, kitchens, and bedrooms with cohesive elegance</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Designer Modular Kitchens & Bathrooms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Quartz, granite, exotic stone, custom cabinetry</li>
                  <li>Luxury plumbing fixtures, concealed fittings, smart technology</li>
                  <li>Designer backsplashes, mood lighting, detailed ceiling work</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Home Theaters, Lounges & Entertainment Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Acoustic walls, bespoke seating, ambient lighting</li>
                  <li>Integrated AV systems, concealed wiring, and minimalistic finishes</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">High-End Commercial Interiors</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Signature lobbies, reception areas, boardrooms</li>
                  <li>Luxury retail showrooms, boutiques, upscale cafés</li>
                  <li>Offices with a premium experience and design consistency</li>
                </ul>
              </div>
            </div>

            {/* Design Approach */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Approach to High-End Interiors
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Discovery & Visioning</strong> - We start with deep conversation: your taste, lifestyle, aspirations.</li>
              <li><strong>Concept & Design Directions</strong> - We build mood boards, style palettes, design narratives that reflect exclusivity.</li>
              <li><strong>3D Renderings & Virtual Walkthroughs</strong> - You experience the interiors before they&apos;re built—choose finishes, lighting, textures.</li>
              <li><strong>Material Curation & Procurement</strong> - We source the finest materials—both local and imported—and manage logistics.</li>
              <li><strong>Meticulous Execution</strong> - Our team oversees every checkbox: alignment, jointing, lighting, finishing touches.</li>
              <li><strong>Handover & Aftercare</strong> - We deliver polished interiors and support for any adjustments or maintenance.</li>
            </ul>

            {/* Why High-End Interiors Add Value */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why High-End Interiors Add Value
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Prestige & Identity</strong> — Interiors that reflect your status and taste</li>
              <li><strong>Long-Term Investment</strong> — Premium finishes and designs that age gracefully</li>
              <li><strong>Enhanced Living Quality</strong> — Comfort, utility, and elegance combined</li>
              <li><strong>Better Resale Value</strong> — High-end interiors command premium in the market</li>
              <li><strong>Emotional Connection</strong> — A home or office that feels truly yours</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We entrusted Vasterior with our high-end villa in Moradabad. The detailing is immaculate—from bespoke cabinetry to lighting accents. Our guests are blown away.&quot; – Shalini Verma
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;The apartment they gave us in Moradabad feels five-star. Their execution is exceptionally precise, and the finishes are top-tier.&quot; – Rahul Gupta
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – High-End Interior Designer Moradabad
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: What does &quot;high-end&quot; actually mean in interior design?</h3>
                <p>A: High-end means premium materials, custom work, fine finishes, high attention to detail, and design uniqueness.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Are high-end interiors in Moradabad affordable?</h3>
                <p>A: Luxury has tiers. We offer multiple levels so you can choose what fits your vision and budget.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Can small apartments get high-end treatment too?</h3>
                <p>A: Certainly. With smart design and material choices, even flats can reflect luxury.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Do you integrate Vastu even in high-end spaces?</h3>
                <p>A: Yes, Vasterior ensures even luxury interiors align with energy and direction principles.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: What&apos;s the timeline for a high-end project?</h3>
                <p>A: It depends on scale. Luxury villas or big homes might take 12–20 weeks; apartments may be faster.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Vasterior – High-End Interior Designer in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gamil.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Crafting High-End Interiors in Moradabad with Elegance, Precision & Vision
            </p>
          </div>

          <PostNavigation slug="high-end-interior-designer-moradabad-up" />
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
