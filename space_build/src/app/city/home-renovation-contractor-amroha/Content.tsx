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
            Home Renovation Contractor Amroha - Luxury Transformations by Vasterior Studio
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior Studio brings a new era of home renovation to Amroha, an era where thoughtful design meets technical precision, contemporary aesthetics meet cultural warmth, and every space is crafted not just to look beautiful, but to feel aligned, calm, and efficient.
              </p>
              <p>
                For the families of Amroha looking to modernize their homes, upgrade old structures, improve functionality, or rebuild the soul of their space, we offer a full-scale renovation service grounded in luxury, comfort, and purposeful design.
              </p>
              <p>
                Whether you're refreshing a single room or reimagining your entire home, Vasterior ensures a renovation journey that is seamless, elegant, and deeply personal.
              </p>
            </div>

            {/* Why Renovation Matters */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Home Renovation in Amroha Matters Today
              </h3>
              <p>
                Amroha's homes carry rich cultural character, traditional layouts, joint-family living patterns, older electrical and plumbing systems, and a natural desire for spaciousness. As lifestyles evolve, families seek:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>More natural light and openness</li>
                <li>Functional kitchens</li>
                <li>Modernized bathrooms</li>
                <li>Better ventilation & utility planning</li>
                <li>Smart storage without compromise</li>
                <li>Aesthetic harmony</li>
                <li>Vastu-aligned spaces for wellbeing</li>
              </ul>
              <p>
                Home renovation is no longer about "fixing old things." It is about upgrading your daily life. It is about transforming your home into a place that supports your routines, reflects your personality, and enhances your lifestyle, every single day.
              </p>
            </div>

            {/*SPACE BUILD */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
               SPACE BUILD Studio for Home Renovation in Amroha
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Luxury + Functionality, Balanced Perfectly</strong> – We blend premium design with practical execution, ensuring your renovated home looks editorial yet works in real life.</li>
                <li><strong>Amroha-Specific Expertise</strong> – We understand local building patterns, common issues in older constructions, and the unique cultural needs of Amroha families.</li>
                <li><strong>Vastu-Aligned Renovation</strong> – Unlike traditional contractors, we integrate MahaVastu-based spatial flow planning; ensuring harmony, balance, and aligned energy.</li>
                <li><strong>Transparent Pricing & Timelines</strong> – Every project comes with clear breakdowns, material specifications, and full accountability from Day 1.</li>
                <li><strong>End-to-End Execution</strong> – From concept to civil work to final styling — everything is handled by our expert team.</li>
                <li><strong>Minimal Disruption</strong> – Your comfort is our priority. Renovation is executed with care, cleanliness, and constant communication.</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Signature Home Renovation Services in Amroha
              </h3>
              
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">Full Home Renovation</h4>
              <p>When your home needs a complete reset, restructuring, or modern revival, we create a unified design and execution plan.</p>
              <p>We upgrade everything; walls, floors, ceilings, lighting, furniture, bathrooms, kitchens, storage, and more.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>A fresh, timeless design identity</li>
                <li>Better space usage</li>
                <li>Improved lighting & ventilation</li>
                <li>Modern materials</li>
                <li>A luxurious, magazine-like transformation</li>
              </ul>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6">Kitchen Renovation - Reimagined for Today's Lifestyle</h4>
              <p>The kitchen is the heart of every Amroha home.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Modular kitchens</li>
                <li>Heat–steam–moisture-resistant materials</li>
                <li>Integrated storage</li>
                <li>Premium appliances</li>
                <li>Vastu-compliant layouts</li>
                <li>Easy-to-clean surfaces</li>
                <li>Soft-close hardware</li>
                <li>Lighting layered for function + beauty</li>
              </ul>
              <p>Your new kitchen will feel organized, elegant, and effortless.</p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6">Bathroom Renovation - Spa-Level Luxury</h4>
              <p>We turn old bathrooms into modern, hotel-style sanctuaries.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Anti-skid flooring</li>
                <li>Concealed plumbing</li>
                <li>Wall-mounted WC</li>
                <li>Glass shower partitions</li>
                <li>High-pressure showers</li>
                <li>Premium fittings</li>
                <li>Warm ambient lighting</li>
                <li>Moisture-control solutions</li>
              </ul>
              <p>Because your mornings deserve serenity.</p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-6">Living Room Renovation</h4>
              <p>This is where families gather, and where your home makes its first impression.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Space optimization</li>
                <li>TV wall treatments</li>
                <li>False ceiling + lighting design</li>
                <li>Flooring upgrades</li>
                <li>Texture paints or wallpapers</li>
                <li>Integrated storage</li>
                <li>Elegant furniture planning</li>
              </ul>
              <p>A living room that feels expansive, warm, and incredibly refined.</p>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Home Renovation Process (Smooth & Stress-Free)
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Site Visit & Survey</strong> – We understand your space, measurements, challenges, and goals.</li>
                <li><strong>Design + Planning</strong> – You receive layouts, mood boards, material palettes, and renovation blueprint.</li>
                <li><strong>Costing & Approvals</strong> – Transparent BOQs and budgets.</li>
                <li><strong>Execution Begins</strong> – Our team handles civil work, plumbing, electricals, carpentry, painting, ceilings, etc.</li>
                <li><strong>Quality Checks</strong> – Every corner is inspected for precision.</li>
                <li><strong>Styling & Handover</strong> – Your renovated home is handed over flawlessly, clean, and ready to move in.</li>
                <li><strong>Aftercare Support</strong> – You can reach us anytime for adjustments or guidance.</li>
              </ol>
            </div>

            {/* Call to Action */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Transform your home into a luxury experience
              </h3>
              <p>
                Book your Free Home Renovation Evaluation in Amroha today. Call at{" "}
                <strong>+917906086899</strong> or{" "}
                <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                  info@spacebuild.com
                </a>
                .
              </p>
            </div>
          </div>

          <PostNavigation slug="home-renovation-contractor-amroha" />
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
