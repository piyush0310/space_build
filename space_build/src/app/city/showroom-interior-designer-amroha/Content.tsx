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
            Showroom Interior Designer Amroha
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Showroom Interior Designer Amroha — Luxury retail interiors by
                Vasterior.
              </p>
              <p>
                Vasterior brings a new vocabulary of luxury retail design to
                Amroha, blending intuitive spatial flow, modern materiality, and
                MahaVastu-aligned energy to create high-performing showrooms
                that sell more, feel premium, and tell a story the moment a
                customer walks in.
              </p>
              <p>
                In a world where customers shop with their eyes before they shop
                with their wallets, your showroom is not just a commercial
                space. It is your brand&apos;s first impression, sales engine,
                and emotional touchpoint, all in one.
              </p>
              <p>
                As Amroha grows into a hub of new businesses, boutique stores,
                and specialty retail, Vasterior steps in with one promise: your
                space will not only look beautiful, it will perform beautifully.
              </p>
            </div>

            {/* Why showroom interiors matter */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Your Showroom Interior Matters More Than Ever
              </h3>
              <p>
                Amroha&apos;s market is evolving. Customers today seek
                experience, clarity, comfort, and aspiration, not cluttered
                shelves or harsh lighting.
              </p>
              <p>A well-designed showroom influences:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Buying behaviour.</strong> Lighting, layout, and
                  display psychology guide customers toward hero products.
                </li>
                <li>
                  <strong>Brand trust and recall.</strong> A premium interior
                  communicates quality before they touch the product.
                </li>
                <li>
                  <strong>Movement and flow.</strong> Intuitive paths make
                  customers stay longer and explore more categories.
                </li>
                <li>
                  <strong>Conversion rates.</strong> Smart zoning turns
                  browsers into buyers.
                </li>
                <li>
                  <strong>Long-term brand value.</strong> A thoughtful showroom
                  becomes a landmark people recommend and return to.
                </li>
              </ul>
              <p className="mt-2">
                Vasterior applies luxury retail logic from metro boutiques,
                combined with MahaVastu-backed spatial intelligence tailored for
                Amroha.
              </p>
            </div>

            {/* Philosophy */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vasterior&apos;s Signature Philosophy for Retail Spaces
              </h3>
              <p>
                A showroom is not only a space; it is a living narrative of your
                brand. Every line, light, and layout must speak your story with
                clarity.
              </p>
              <p>Spaces are designed to be:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Ultra-modern yet timeless</li>
                <li>Visually soothing yet commercially bold</li>
                <li>Rich in materiality yet practical for daily retail use</li>
                <li>Energy-aligned yet free from superstition</li>
                <li>Warm, inviting, and emotionally resonant</li>
              </ul>
              <p className="mt-2">
                Whether it is jewellery, fashion, footwear, furniture, or
                electronics, Vasterior ensures the space does not just attract
                customers, it holds them.
              </p>
            </div>

            {/* Spatial Flow Consulting */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Spatial Flow Consulting – The Vasterior Advantage
              </h3>
              <p>
                Retail success depends on movement: how customers enter, turn,
                what they see first, and where they pause.
              </p>
              <p>This proprietary approach includes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Zoning for commercial intelligence</strong> –
                  High-visibility, high-conversion, and decision zones.
                </li>
                <li>
                  <strong>Product psychology mapping</strong> – Elevating
                  bestsellers through focused placement.
                </li>
                <li>
                  <strong>Visual hierarchy design</strong> – Guiding the eye
                  using lighting, textures, and elevations.
                </li>
                <li>
                  <strong>Customer journey experience</strong> – A curated,
                  intuitive walk through the showroom.
                </li>
                <li>
                  <strong>Operational flow design</strong> – Optimised storage,
                  counters, packaging, trial rooms, and cabins.
                </li>
              </ul>
              <p className="mt-2">
                This blend of creative luxury and scientific logic positions
                Vasterior as a leading showroom interior designer in Amroha.
              </p>
            </div>

            {/* Vastu section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Vastu &amp; MahaVastu for Showrooms – Subtle and Effective
              </h3>
              <p>
                Vasterior avoids fear-based Vastu language and instead uses
                positive, practical alignment to enhance clarity and flow.
              </p>
              <p>The MahaVastu-led approach typically considers:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  <strong>Entrance</strong> – Inviting, open, uncluttered
                  zones, often oriented to welcoming directions.
                </li>
                <li>
                  <strong>Billing counter</strong> – Placed in active,
                  decision-supporting zones.
                </li>
                <li>
                  <strong>Storage and inventory</strong> – Located in grounding
                  areas for stability.
                </li>
                <li>
                  <strong>Display zones</strong> – Positioned where attraction
                  and quick browsing are supported.
                </li>
                <li>
                  <strong>Central space</strong> – Kept open for visual calm and
                  harmony.
                </li>
                <li>
                  <strong>Material and colour alignment</strong> – Warm beiges,
                  matte woods, soft metallics, and diffused lighting to amplify
                  brand aura.
                </li>
              </ul>
              <p className="mt-2">
                The result is a showroom that feels good, works beautifully, and
                supports better sales.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Showroom Interior Design Services in Amroha
              </h3>
              <p>Vasterior offers full-spectrum, end-to-end services:</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>
                  <strong>Concept development and brand translation</strong>
                </li>
                <li>
                  <strong>Detailed space planning and zoning</strong>
                </li>
                <li>
                  <strong>3D renders and mood boards</strong>
                </li>
                <li>
                  <strong>Material selection and luxury finish palettes</strong>
                </li>
                <li>
                  <strong>Lighting design</strong> for pathways and hero
                  products
                </li>
                <li>
                  <strong>Display system design</strong> – shelving, racks,
                  pedestals, islands
                </li>
                <li>
                  <strong>Façade and window experience design</strong>
                </li>
                <li>
                  <strong>Vastu and MahaVastu integration</strong>
                </li>
                <li>
                  <strong>Execution, vendor coordination, and supervision</strong>
                </li>
                <li>
                  <strong>Post-handover support</strong> for fine-tuning
                  displays and lighting
                </li>
              </ol>
              <p className="mt-2">
                This integrated design, energy, and execution model is rare in
                the local market.
              </p>
            </div>

            {/* Types of showrooms */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Showrooms Designed by Vasterior
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Jewellery showrooms</li>
                <li>Fashion boutiques</li>
                <li>Footwear and accessories stores</li>
                <li>Electronics and mobile outlets</li>
                <li>Furniture and lifestyle showrooms</li>
                <li>Optical stores</li>
                <li>Cosmetic and beauty outlets</li>
                <li>Multi-brand departmental stores</li>
                <li>Tile, sanitaryware, and hardware showrooms</li>
                <li>Luxury decor and gift shops</li>
              </ul>
              <p className="mt-2">
                Each category demands a distinct visual and psychological
                strategy, which the design adapts to.
              </p>
            </div>

            {/* Why Vasterior */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vasterior Is a Top Showroom Interior Designer in Amroha
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Luxury, editorial-grade aesthetic</li>
                <li>MahaVastu-aligned planning without superstition</li>
                <li>High-conversion layouts and lighting</li>
                <li>Founder-led creative supervision</li>
                <li>Premium execution quality and durable finishes</li>
                <li>Consultation support from first sketch to final polish</li>
                <li>
                  Local expertise across Amroha, Moradabad, Rampur, Gajraula,
                  and NCR
                </li>
              </ul>
              <p className="mt-2">
                The result is a showroom that customers love to visit and hate
                to leave.
              </p>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Begin Your Showroom Transformation
              </h3>
              <p>
                If you are building or renovating a showroom in Amroha, your
                space deserves the precision, beauty, and intelligence Vasterior
                brings.
              </p>
              <p>
                Join the free Yogdaan sessions on Wednesdays for initial
                guidance, choose a paid Vastu and retail consultation for deeper
                clarity, or opt for full interior design and execution support.
              </p>
              <p>
                Enquire today and transform your showroom into a luxury retail
                experience. Get in touch with our experts at{" "}
                <strong>+917906086899</strong> or{" "}
                <a
                  href="mailto:info@spacebuild.com"
                  className="text-blue-600 hover:underline"
                >
                  info@spacebuild.com
                </a>
                .
              </p>
            </div>
          </div>

          <PostNavigation slug="showroom-interior-designer-amroha" />
        </div>

        {/* Form Section */}
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
