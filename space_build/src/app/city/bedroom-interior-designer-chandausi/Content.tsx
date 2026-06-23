// components/WeddingPageContent.js
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
            Bedroom Interior Designer in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior believes that a bedroom is not just a room you sleep in, it is the most personal space in your home, a sanctuary where your body rests, your mind unwinds, and your energy resets every single day. As a boutique interior design studio specialising in thoughtfully designed, Vastu-aligned spaces, Vasterior brings refined bedroom interior design solutions to homes in Chandausi, blending comfort, calm, and contemporary elegance into spaces that truly feel like your own.
            </p>
            <p>
              In a world that constantly demands your attention, your bedroom should give something back, silence, balance, and a sense of belonging. That is exactly what we design for.
            </p>

            {/* Why Bedroom Design */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Bedroom Interior Design Deserves Special Attention
            </h2>
            <p className="mb-4">
              Among all spaces in a home, the bedroom carries the deepest emotional weight. It holds your quiet moments, your conversations at the end of long days, your recovery, and your dreams, both literal and metaphorical. Yet, it is often treated as an afterthought.
            </p>
            <p>A well-designed bedroom:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improves sleep quality and daily energy levels</li>
              <li>Supports emotional well-being and relationships</li>
              <li>Reduces visual and mental clutter</li>
              <li>Feels comforting without being dull</li>
              <li>Looks luxurious without feeling heavy</li>
            </ul>
            <p>
              At Vasterior, we approach bedroom interiors in Chandausi with sensitivity, understanding lifestyle, climate, family structure, and personal taste, so the space feels intuitively right, not just visually appealing.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Bedroom Interior Design Services in Chandausi
            </h2>
            <p className="mb-4">
              We design bedrooms that feel intentional, personal, and timeless. Our services are not template-based; every bedroom is crafted around the person who will live in it.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Master Bedroom Design</h3>
                <p>From bed-back walls and wardrobes to lighting, textures, and layout planning, we create master bedrooms that feel restful yet refined. The focus is always on comfort, privacy, and effortless luxury.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Guest Bedroom Interiors</h3>
                <p>Guest bedrooms are designed to feel warm, welcoming, and uncluttered, spaces that offer comfort without overwhelming the visitor, while still reflecting your home's design language.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kids' Bedroom Design</h3>
                <p>For children and teenagers, we balance creativity with practicality, safe materials, smart storage, flexible layouts, and age-appropriate aesthetics that grow with them.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Wardrobe & Storage Planning</h3>
                <p>Smart wardrobes, dressing units, and concealed storage solutions that reduce visual noise and improve daily functionality, especially important for compact bedrooms.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Lighting, Colour & Material Selection</h3>
                <p>Soft ambient lighting, soothing colour palettes, breathable materials, and tactile finishes, all selected to support relaxation and visual harmony.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vastu-Aligned Bedroom Planning</h3>
                <p>Without unnecessary demolition or fear-based remedies, we integrate Vastu principles through layout, bed placement, colours, and object alignment, subtly and scientifically.</p>
              </div>
            </div>

            {/* Design Philosophy */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior's Design Philosophy for Bedrooms
            </h2>
            <p className="mb-4">
              Our approach to bedroom interiors is rooted in spatial flow and energy balance. We believe good design should feel calm, not loud; intentional, not forced.
            </p>
            <p>What defines our bedroom designs:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Thoughtful furniture placement for easy movement</li>
              <li>Balanced proportions and visual weight</li>
              <li>Timeless materials over trend-driven choices</li>
              <li>Non-destructive Vastu corrections</li>
              <li>A sense of emotional grounding and privacy</li>
            </ul>
            <p>Every design decision serves a purpose, nothing is random, nothing is excessive.</p>

            {/* What Makes Vasterior Different */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Vasterior Different in Chandausi
            </h2>
            <p className="mb-4">
              Chandausi homes have a unique character, deeply rooted in family living, yet increasingly aspirational and modern. Vasterior bridges this beautifully.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Boutique studio approach - limited projects, high attention</li>
              <li>No copy-paste designs - every bedroom is customised</li>
              <li>Design + Vastu expertise under one roof</li>
              <li>Clear process and transparent communication</li>
              <li>Focus on long-term comfort, not short-term trends</li>
            </ul>
            <p>We don't just decorate bedrooms, we design spaces that support how you live.</p>

            {/* Design Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Bedroom Design Process
            </h2>
            <p className="mb-4">We keep the process calm, clear, and collaborative.</p>
            <ol className="list-decimal list-inside space-y-4 ml-4">
              <li><strong>Consultation & Understanding</strong><br/>We begin by understanding your lifestyle, needs, preferences, and concerns.</li>
              <li><strong>Space & Energy Analysis</strong><br/>Layout, light, ventilation, and flow are studied before design begins.</li>
              <li><strong>Concept & Design Development</strong><br/>Mood, materials, colours, furniture planning, and lighting are finalised.</li>
              <li><strong>Detailed Planning</strong><br/>Wardrobes, bed walls, storage, finishes, and detailing are resolved.</li>
              <li><strong>Execution or Design-Only Support</strong><br/>Depending on your requirement, we either execute or guide your team.</li>
            </ol>

            {/* Ideal For */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who Is This Service Ideal For?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Homeowners designing a new bedroom</li>
              <li>Families renovating existing homes</li>
              <li>Working professionals seeking calm, clutter-free spaces</li>
              <li>Couples looking to redesign their master bedroom</li>
              <li>Anyone who values peace, quality, and thoughtful design</li>
            </ul>
            <p>If you believe your bedroom should feel as good as it looks, you're in the right place.</p>

            {/* Call to Action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Design a Bedroom That Truly Feels Yours
            </h2>
            <p className="mb-4">
              If you're looking for a bedroom interior designer in Chandausi who understands both aesthetics and well-being, Vasterior would love to have a conversation.
            </p>
            <p>
              You can call us at <strong>+917906086899</strong> to discuss your requirements, or write to us at{" "}
              <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                info@spacebuild.com
              </a>{" "}
              to begin a thoughtful, pressure-free consultation about your bedroom space.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">1. What is the cost of bedroom interior design in Chandausi?</h3>
                <p>The cost depends on room size, scope, materials, and whether you opt for design-only or full execution. We prefer transparent, project-based pricing rather than per-square-foot estimates.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2. Do you offer bedroom design without execution?</h3>
                <p>Yes. Vasterior offers design-only bedroom consultation, where we provide layouts, material guidance, and detailing without execution.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. How long does a bedroom interior project usually take?</h3>
                <p>Design timelines typically range from a few weeks, while execution timelines vary depending on scope and site conditions. Exact timelines are discussed during consultation.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. Can you redesign an existing bedroom without breaking walls?</h3>
                <p>Absolutely. We specialise in non-destructive redesigns, using layout optimisation, furniture planning, lighting, colours, and materials.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. Do you follow Vastu for bedroom interiors?</h3>
                <p>Yes, we integrate Vastu principles in a modern, practical way, without fear, superstition, or unnecessary demolition.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">6. Can you design small bedrooms effectively?</h3>
                <p>Yes. Small bedrooms often benefit the most from thoughtful design, smart storage, and visual balance.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">7. Do you work only in Chandausi?</h3>
                <p>While this page focuses on Chandausi, Vasterior also undertakes select projects in nearby regions and cities.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">8. How do I start the process?</h3>
                <p>
                  You can start by calling <strong>+917906086899</strong> or emailing{" "}
                  <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                    info@spacebuild.com
                  </a>{" "}
                  to schedule an initial discussion.
                </p>
              </div>
            </div>
          </div>
          <PostNavigation slug="bedroom-interior-designer-in-chandausi" />
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
