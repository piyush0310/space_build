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
            Interior Design Firm in Amroha
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Luxury Spaces Crafted With Heart, Harmony & High Design
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior begins with a simple belief: a home is not built with materials, it is built with meaning.
              </p>
              <p>
                In Amroha, where heritage meets modern aspiration, we bring a new language of interior design that blends timeless aesthetics, spatial intelligence, and a deeply personal storytelling approach.
              </p>
              <p>
                Our work isn&apos;t about decorating rooms, it&apos;s about creating energy-aligned, emotionally connected spaces that elevate the way you live every single day.
              </p>
              <p>
                As the leading Interior Design Firm in Amroha, we specialize in designing homes that feel luxurious yet lived-in, functional yet poetic, modern yet rooted.
              </p>
              <p>
                Each project becomes a reflection of your journey, your rhythm, and your definition of beauty.
              </p>
            </div>

            {/* A New Aesthetic for Amroha */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A New Aesthetic for Amroha
              </h3>
              <p className="mt-2">
                Modern Luxury, Elevated Simplicity, and Cultural Warmth
              </p>
              <p>
                Amroha is transforming. Families are choosing refined interiors, world-class materials, and well-planned layouts that bring ease and elegance to daily life.
              </p>
              <p>
                Our design philosophy respects this transformation.
              </p>
              <p>We combine:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li>Soft contemporary minimalism</li>
                <li>Warm Indian textures</li>
                <li>Thoughtful color palettes</li>
                <li>High-function spatial planning</li>
                <li>Modern European detailing</li>
                <li>Vastu-inspired harmony (when required)</li>
              </ul>
              <p className="mt-4">
                The result is a home where every corner feels intentional; artful, balanced, and beautifully practical.
              </p>
            </div>

            {/* Our Specialisation */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Specialisation
              </h3>
              <p className="mt-2">Crafting Life-Centric Interiors That Feel Like You</p>
              <p>
                As a luxury-driven Interior Design Firm in Amroha, we offer a seamless range of interior solutions crafted for discerning homeowners, entrepreneurs, and lifestyle-oriented families.
              </p>
            </div>

            {/* 1. Residential Interior Design */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                1. Residential Interior Design - Homes That Tell Your Story
              </h4>
              <p>
                Your home should feel like your safe space; a place where your personality breathes in every texture, every color, every detail.
              </p>
              <p>We design full homes including:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Luxury Living Rooms</li>
                <li>Modern Modular Kitchens</li>
                <li>Personalized Bedrooms</li>
                <li>Walk-in Wardrobes</li>
                <li>Dining & Entertainment Spaces</li>
                <li>Kids&apos; Rooms & Study Areas</li>
                <li>Foyers, Balconies & Nooks</li>
              </ul>
              <p>
                Expect a beautiful balance of mood, functionality, and refined luxury, all tailored to your lifestyle.
              </p>
            </div>

            {/* 2. Commercial & Office Interiors */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                2. Commercial & Office Interiors
              </h4>
              <p>Designed for Productivity, Branding & Comfort</p>
              <p>
                Offices in Amroha are evolving too, becoming modern, minimal, tech-ready spaces that boost performance and make the right brand impression.
              </p>
              <p>We create:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Sleek reception areas</li>
                <li>Director & MD cabins</li>
                <li>Employee workstations</li>
                <li>Conference rooms</li>
                <li>Collaborative lounges</li>
                <li>Storage-efficient spaces</li>
                <li>Refreshing breakout zones</li>
              </ul>
              <p>
                Every commercial project is a balance of aesthetics × utility × energy flow.
              </p>
            </div>

            {/* 3-7 Services */}
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                3. Space Planning & Layout Optimization
              </h4>
              <p>
                Good design begins with planning, not purchases. We map flow, utility, zoning, movement patterns, and natural light to create layouts that improve lifestyle and productivity.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                4. Renovation & Refurbishment
              </h4>
              <p>
                Transforming Old Spaces Into New Experiences. Whether your home is 5 years old or 50, we redesign it with a fresh, luxurious language, without losing its essence.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                5. Kitchen & Wardrobe Design
              </h4>
              <p>
                Functional Luxury for Daily Life. We create high-performance modular kitchens, ergonomic storage, and elegant wardrobes built to last.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                6. Material & Color Consultation
              </h4>
              <p>
                Because Beauty Begins With the Right Choices. We guide you through color palettes, flooring options, stone, veneer & laminate selection, wall textures & finishes.
              </p>

              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mt-4">
                7. Turnkey Project Management
              </h4>
              <p>
                From Concept to Creation. For busy homeowners, entrepreneurs, and NRIs, we take full responsibility: designing, sourcing, fabrication, vendor management, site execution, quality control, and final styling.
              </p>
            </div>

            {/* Why We Are the Most Trusted */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why We Are the Most Trusted Interior Design Firm in Amroha
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-4">
                <li>Personalised, not template-based designs</li>
                <li>Luxury finishing with practical detailing</li>
                <li>Human-centric design process</li>
                <li>Strong technical foundation</li>
                <li>Emotional interpretation of spaces</li>
                <li>Clear communication & transparent execution</li>
                <li>Local understanding of Amroha lifestyle</li>
              </ul>
            </div>

            {/* Your Journey With Us */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Your Journey With Us
              </h3>
              <p className="mt-2">Smooth, Clear & Enjoyable</p>
              <p>We follow a simple 5-step, luxury-grade process:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                <li><strong>Discovery & Consultation</strong> – Understanding your needs, lifestyle, goals, and aspirations.</li>
                <li><strong>Concept Creation</strong> – Moodboards, palettes, inspirations, layouts, and design direction.</li>
                <li><strong>Detailed Design Development</strong> – 3D renders, elevations, technical drawings, material selections.</li>
                <li><strong>Execution & Site Coordination</strong> – Our team, vendors, and specialists work in perfect alignment.</li>
                <li><strong>Reveal & Styling</strong> – Your space is transformed; elegant, warm, functional, and deeply personal.</li>
              </ol>
            </div>

            {/* CTA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Let&apos;s Build Your Dream Space in Amroha
              </h3>
              <p>
                Whether you&apos;re designing a new home, upgrading your interiors, or transforming an old space — we bring creativity, technical excellence, and emotional storytelling into every project.
              </p>
              <p>
                Book Your Consultation Today. Get in touch with our experts today at{" "}
                <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or{" "}
                <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">
                  spacebuild.india@gmail.com
                </a>.
              </p>
              <p>
                Let&apos;s design a space that feels like home, refined, luxurious, and completely yours.
              </p>
            </div>
          </div>

          <PostNavigation slug="interior-design-firm-amroha" />
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
