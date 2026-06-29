// components/BathroomContent.js
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
            Bathroom Interior Remodeling in Chandausi
          </h2>
          <p className="text-lg font-semibold text-gray-800 mb-6">
            -Thoughtfully Designed. Beautifully Aligned. Built to Last.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Space Build believes that a bathroom is not just a functional corner of your home, it is a deeply personal space where your day begins and ends. In homes across Chandausi, bathrooms are evolving from basic utility areas into calm, hygienic sanctuaries that reflect comfort, elegance, and intelligent planning. Our approach to bathroom interior remodeling focuses on creating spaces that feel effortless to use, easy to maintain, and visually timeless, without unnecessary demolition or disruption.
            </p>
            <p>
              Whether you are upgrading an old bathroom, correcting layout issues, or planning a complete transformation, Space Build brings together design expertise, material intelligence, and spatial balance to deliver bathrooms that truly work for modern Indian living.
            </p>

            {/* Why Bathroom Remodeling Matters */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Bathroom Remodeling Matters More Than You Think
            </h2>
            <p className="mb-4">
              In many Indian homes, bathrooms are often the most overlooked spaces, until problems start showing up. Poor ventilation, outdated plumbing, inefficient layouts, water seepage, or lack of storage can quietly affect hygiene, comfort, and even the overall energy of the home.
            </p>
            <p>A well-planned bathroom remodel can:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improve daily comfort and ease of movement</li>
              <li>Enhance hygiene and reduce moisture-related issues</li>
              <li>Increase property value and longevity of finishes</li>
              <li>Optimize small or awkward layouts</li>
              <li>Create a sense of calm and order in everyday routines</li>
            </ul>
            <p>
              For homeowners in Chandausi, bathroom interior remodeling is increasingly about smart upgrades, spaces that look refined, perform efficiently, and age gracefully with time.
            </p>

            {/* Space Build's Philosophy */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Space Build's Philosophy: Intelligent, Non-Destructive Remodeling
            </h2>
            <p className="mb-4">
              At Space Build, we don't believe in breaking spaces unnecessarily. Our bathroom remodeling philosophy is rooted in design-first thinking, where every decision, layout, material, lighting, and storage, is carefully considered before execution.
            </p>
            <p>We focus on:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Spatial flow: Ensuring smooth movement and logical placement of fixtures</li>
              <li>Material intelligence: Choosing finishes that handle moisture, wear, and time</li>
              <li>Light & ventilation: Creating brighter, fresher bathrooms without harsh glare</li>
              <li>Storage without clutter: Clean, concealed, and easy-to-use solutions</li>
              <li>Energy alignment: Subtle Vastu-based planning for balance and comfort</li>
            </ul>
            <p>The result is a bathroom that feels thoughtfully composed, not over-designed or temporary.</p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Bathroom Interior Remodeling Services in Chandausi
            </h2>
            <p className="mb-4">
              We offer end-to-end bathroom interior remodeling solutions tailored to your space, lifestyle, and budget.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Complete Bathroom Renovation</h3>
                <p>From outdated bathrooms to fully transformed spaces, we handle layout rethinking, material selection, and detailing to deliver a seamless upgrade.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Modern Luxury Bathroom Design</h3>
                <p>Elegant finishes, refined color palettes, premium fixtures, and clean lines, designed to feel indulgent yet practical.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Small Bathroom Optimization</h3>
                <p>Smart planning for compact bathrooms using clever layouts, storage solutions, and visual expansion techniques.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Premium Fixtures & Finishes</h3>
                <p>Guidance on tiles, stone, sanitaryware, fittings, and accessories that balance aesthetics with durability.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Waterproofing & Long-Term Durability</h3>
                <p>Special focus on moisture control, sealing, and material compatibility to avoid future maintenance issues.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Vastu-Aligned Bathroom Planning</h3>
                <p>Non-intrusive corrections through placement, colors, materials, and lighting, without demolition.</p>
              </div>
            </div>

            {/* What Makes Space Build Different */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes Space Build Different
            </h2>
            <p className="mb-4">
              In a market full of standard designs and contractor-driven decisions, Space Build stands apart.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>No template designs: Every bathroom is custom-planned</li>
              <li>Design-led approach: We prioritize planning before execution</li>
              <li>Long-term thinking: Spaces designed to age well, not just look good today</li>
              <li>Attention to detail: From drawer depths to lighting temperatures</li>
              <li>Calm, confident execution: No chaos, no rushed decisions</li>
            </ul>
            <p>We design bathrooms that feel intentional, not accidental.</p>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Bathroom Remodeling Process
            </h2>
            <p className="mb-4">We keep the process simple, transparent, and stress-free:</p>
            <ol className="list-decimal list-inside space-y-4 ml-4">
              <li><strong>Initial Consultation</strong><br/>Understanding your concerns, lifestyle needs, and expectations.</li>
              <li><strong>Space Analysis & Planning</strong><br/>Layout evaluation, ventilation review, storage planning, and design direction.</li>
              <li><strong>Design & Material Selection</strong><br/>Visual guidance, material palettes, and fixture recommendations.</li>
              <li><strong>Execution Coordination (if applicable)</strong><br/>Working closely with vendors and contractors to maintain design integrity.</li>
              <li><strong>Final Detailing & Handover</strong><br/>Ensuring everything functions, feels, and looks exactly as planned.</li>
            </ol>

            {/* Call to Action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Start Your Bathroom Transformation with Confidence
            </h2>
            <p className="mb-4">
              If you are considering bathroom interior remodeling in Chandausi and want a space that feels refined, functional, and thoughtfully designed, a conversation is the best place to start.
            </p>
            <p>
              You can speak directly with the Space Build team by calling <strong>+917906086899</strong> to discuss your bathroom remodeling requirements, or write to us at{" "}
              <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                info@spacebuild.com
              </a>{" "}
              to schedule a consultation and explore possibilities tailored to your home.
            </p>
            <p>We believe great bathrooms are not built by chance, but by clarity, intention, and intelligent design.</p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  1. How long does a bathroom interior remodeling project usually take?
                </h3>
                <p>The timeline depends on the scope of work. A design-led remodel can take anywhere from a few weeks to longer for full renovations, depending on materials, layout changes, and execution complexity.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  2. Can you remodel a bathroom without major demolition?
                </h3>
                <p>Yes. Space Build specializes in non-destructive, intelligent remodeling wherever possible, using layout optimization, material changes, and design corrections instead of unnecessary breaking.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  3. Do you handle small bathroom remodeling in Chandausi?
                </h3>
                <p>Absolutely. Small bathrooms are one of our strengths. With smart layouts, lighting, and storage, compact spaces can feel surprisingly spacious and comfortable.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  4. Do you offer Vastu-compliant bathroom design?
                </h3>
                <p>Yes. We incorporate subtle, non-intrusive Vastu principles through placement, colors, materials, and spatial balance, without structural damage.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  5. How do I get started with Space Build?
                </h3>
                <p>
                  Simply call <strong>+917906086899</strong> or email{" "}
                  <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                    info@spacebuild.com
                  </a>{" "}
                  to begin a conversation. We'll guide you through the next steps based on your space and requirements.
                </p>
              </div>
            </div>
          </div>
          <PostNavigation slug="bathroom-interior-remodeling-chandausi" />
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
