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
            Vastu Consultation by Phone in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p className="text-lg mb-4">
                Vasterior believes that every space carries an invisible intelligence, an energy blueprint that quietly influences your health, wealth, relationships, and peace of mind. When this energy flows correctly, life feels lighter. Decisions feel clearer. Progress stops feeling forced.
              </p>
              <p className="text-lg mb-4">
                Through our Vastu Consultation by Phone in Chandausi, we help you realign your home or workspace using the precise, time-tested principles of MahaVastu, without demolition, disruption, or fear-driven remedies.
              </p>
              <p className="text-lg">
                Whether you live in Chandausi or manage a property from elsewhere, expert Vastu guidance is now just a conversation away.
              </p>
            </div>

            {/* Why Vastu Matters */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why Vastu Still Matters in Modern Living
              </h3>
              <p className="mt-4">
                Modern homes are designed for convenience. Vastu ensures they are designed for balance.
              </p>
              <p className="mt-4">
                Every direction, layout, entrance, and room placement subtly affects energy flow. When these elements are misaligned, people often experience unexplained stress, financial instability, health concerns, or stagnation, even when everything looks perfect on the surface.
              </p>
              <p className="mt-4">
                Vastu doesn't replace logic or hard work. It supports them. It removes energetic resistance so your efforts actually start showing results.
              </p>
            </div>

            {/* MahaVastu Advantage */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                The MahaVastu Advantage - Subtle, Scientific, Powerful
              </h3>
              <p className="mt-4">
                At Vasterior, we follow MahaVastu, a refined and practical system of Vastu that works with energy correction, not structural damage.
              </p>
              <p className="mt-4">
                Unlike traditional Vastu methods that rely on heavy construction changes or extreme remedies, MahaVastu focuses on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Directional energy correction</li>
                <li>Elemental balance</li>
                <li>Colour, placement, and orientation adjustments</li>
                <li>Non-invasive, practical solutions</li>
              </ul>
              <p className="mt-4">
                The result? Realignment without anxiety. Harmony without chaos.
              </p>
            </div>

            {/* Phone Process */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                How Phone-Based Vastu Consultation Works
              </h3>
              <p className="mt-4">
                Our Vastu Consultation by Phone in Chandausi is designed for clarity, comfort, and precision.
              </p>
              <p className="mt-4">Here's how it unfolds:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mt-4">
                <li>You share your floor plan, photos, or layout details digitally.</li>
                <li>Our expert analyses your space through MahaVastu principles.</li>
                <li>During a detailed phone call, you receive personalized guidance, room by room, direction by direction.</li>
                <li>You're given clear, doable corrections that fit your lifestyle and space.</li>
              </ol>
              <p className="mt-4">
                No rushed calls. No vague advice. Just structured, thoughtful guidance you can actually apply.
              </p>
            </div>

            {/* Who It's For */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Who This Consultation Is Ideal For
              </h3>
              <p className="mt-4">
                This service is perfect if you:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Own a home, flat, or villa in Chandausi</li>
                <li>Run a shop, office, clinic, or commercial space</li>
                <li>Are planning renovations or interior changes</li>
                <li>Feel stuck despite "doing everything right"</li>
                <li>Want Vastu clarity without on-site intervention</li>
              </ul>
              <p className="mt-4">
                Distance is no barrier when energy is understood correctly.
              </p>
            </div>

            {/* Interior Design Meets Vastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Where Interior Design Meets Vastu Alignment
              </h3>
              <p className="mt-4">
                Vasterior stands at the intersection of aesthetics and energy.
              </p>
              <p className="mt-4">
                We don't treat Vastu as an afterthought or a superstition. We integrate it seamlessly with interior design logic, ensuring your space looks refined and feels balanced. The goal isn't to clutter your home with remedies, it's to design spaces that naturally support growth, comfort, and stability.
              </p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Changes Can You Expect?
              </h3>
              <p className="mt-4">
                Clients often report:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Improved peace and emotional calm</li>
                <li>Better sleep and focus</li>
                <li>Financial stability and decision clarity</li>
                <li>Reduced conflicts at home or work</li>
                <li>A sense of flow instead of resistance</li>
              </ul>
              <p className="mt-4">
                These shifts aren't dramatic overnight miracles, they're quiet, consistent improvements that compound over time.
              </p>
            </div>

            {/* CTA Text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Book Your Vastu Consultation by Phone in Chandausi
              </h3>
              <p className="mt-4">
                If something about your space feels off, it usually is.
              </p>
              <p className="mt-4">
                A single conversation can bring clarity that months of guessing cannot. To begin your Vastu Consultation by Phone with Vasterior, simply reach out by calling{" "}
                <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                  +917906086899
                </a>{" "}
                to speak directly with our team or write to us at{" "}
                <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                  info@spacebuild.com
                </a>{" "}
                to schedule your consultation at your convenience.
              </p>
              <p className="mt-4 font-semibold">
                Your space is already speaking. It's time to listen.
              </p>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-6 mt-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    1. Is phone-based Vastu consultation really effective?
                  </h3>
                  <p>
                    Yes. When guided by MahaVastu principles, accurate floor plans and visuals are enough to diagnose energy imbalances. Physical presence is not mandatory for effective correction.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. Do I need to break walls or rebuild anything?
                  </h3>
                  <p>
                    No. MahaVastu focuses on non-destructive corrections such as placement changes, orientation adjustments, colours, and elemental balancing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. How long does the consultation take?
                  </h3>
                  <p>
                    Typically, the call lasts between 45 to 60 minutes, depending on the size and complexity of the space.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Is this service only for homes?
                  </h3>
                  <p>
                    Not at all. We offer Vastu consultation for homes, offices, shops, factories, clinics, and other commercial spaces in and around Chandausi.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. Will I need to buy expensive remedies?
                  </h3>
                  <p>
                    No forced purchases. All recommendations are practical, minimal, and aligned with your existing space and lifestyle.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    7. How do I get started?
                  </h3>
                  <p>
                    Simply call{" "}
                    <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                      +917906086899
                    </a>{" "}
                    or email{" "}
                    <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                      info@spacebuild.com
                    </a>
                    , and our team will guide you through the next steps.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 p-8 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Ready for Phone Vastu Consultation?
              </h3>
              <p className="text-center mb-6">
                Expert Vastu guidance delivered through clear, structured phone conversations.
              </p>
              <div className="text-center space-y-3">
                <p>
                  📞 Call:{" "}
                  <a href="tel:+917906086899" className="text-blue-600 hover:underline">
                    +917906086899
                  </a>
                </p>
                <p>
                  📧 Email:{" "}
                  <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">
                    info@spacebuild.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="vastu-consultation-by-phone-in-chandausi" />
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
