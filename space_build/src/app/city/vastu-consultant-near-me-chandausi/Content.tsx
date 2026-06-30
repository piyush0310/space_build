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
            Vastu Consultant Near Me in Chandausi
          </h2>
          <p className="text-lg mb-8 text-gray-700">
            Vasterior believes that a space isn't just four walls, it's a living energy system that silently shapes your health, relationships, focus, and financial flow. If you've been searching for a Vastu Consultant near you in Chandausi who understands both modern living and ancient wisdom, you've landed exactly where you're meant to be.
          </p>
          <p className="text-lg mb-8 text-gray-700">
            We don't "fix problems." We realign spaces, so life starts flowing the way it should.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Why People Search */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why People in Chandausi Are Actively Looking for a Vastu Consultant
              </h3>
              <p className="mt-4">
                Let's be real, most people don't wake up wanting Vastu advice. They look for it when:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Their home feels restless or heavy</li>
                <li>Work isn't growing despite effort</li>
                <li>Businesses face unexplained stagnation</li>
                <li>Peace feels… missing</li>
              </ul>
              <p className="mt-4">
                In a city like Chandausi, where homes and commercial spaces are often built without energy alignment, Vastu isn't a luxury, it's a necessity. And generic online tips won't cut it. Your plot direction, layout, usage, and lifestyle need local, on-ground understanding.
              </p>
              <p className="mt-4">
                That's exactly where Vasterior steps in.
              </p>
            </div>

            {/* What Makes Vasterior Trusted */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                What Makes Vasterior a Trusted Vastu Consultant in Chandausi
              </h3>
              <p className="mt-4">
                Most Vastu consultants stop at advice. We go several steps further.
              </p>
              <p className="font-semibold mt-4 mb-4">Vastu + Interior Design, Seamlessly Integrated</p>
              <p className="mt-4">
                Your space shouldn't look like a "Vastu correction project." At Vasterior, every solution is aesthetic, intentional, and functional, because beauty and energy must coexist.
              </p>
              <p className="font-semibold mt-4 mb-4">MahaVastu Principles (No Fear, No Demolition Obsession)</p>
              <p className="mt-4">
                We follow MahaVastu, a practical, logic-driven system that focuses on:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Energy balance</li>
                <li>Directional alignment</li>
                <li>Space optimization</li>
              </ul>
              <p className="mt-4">
                Often without breaking walls or creating chaos.
              </p>
              <p className="font-semibold mt-4">Real-Life, Actionable Solutions</p>
              <p className="mt-4">
                No vague remedies. No unnecessary rituals. Just clear, implementable guidance that fits your life, not disrupts it.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Our Vastu & Space Alignment Services
              </h3>
              <ul className="list-none space-y-6 mt-6">
                <li className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-3">🏡</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Residential Vastu Consultation
                  </h4>
                  <p>For homes that feel calm, nourishing, and supportive.</p>
                  <p className="mt-2 text-sm text-gray-600">Ideal for: New homes & apartments, Existing houses facing recurring issues, Families seeking peace, health, and stability</p>
                </li>
                <li className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-3">💼</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Commercial & Office Vastu
                  </h4>
                  <p>Because business success is not just strategy, it's energy.</p>
                  <p className="mt-2 text-sm text-gray-600">We help: Improve cash flow & decision clarity, Align leadership spaces, Create work environments that actually work</p>
                </li>
                <li className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-3">🎨</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Interior Design with Vastu Alignment
                  </h4>
                  <p>Design-first. Energy-aligned.</p>
                  <p className="mt-2 text-sm text-gray-600">Every layout, color, and placement is chosen with intention, so your space looks premium and performs energetically.</p>
                </li>
                <li className="p-6 bg-gray-50 rounded-xl">
                  <div className="text-2xl mb-3">🔍</div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">
                    Vastu Correction for Existing Spaces
                  </h4>
                  <p>Already living or working there? No problem.</p>
                  <p className="mt-2 text-sm text-gray-600">We specialize in non-invasive corrections that respect your current structure while upgrading its energy.</p>
                </li>
              </ul>
            </div>

            {/* Why MahaVastu */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Why MahaVastu Works (Without the Drama)
              </h3>
              <p className="mt-4">
                MahaVastu isn't superstition, it's energy science applied intelligently.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>No fear-based predictions</li>
                <li>No extreme demolition advice</li>
                <li>No one-size-fits-all rules</li>
              </ul>
              <p className="mt-4">
                Instead, it focuses on flow, balance, and long-term harmony, making it perfect for modern homes and businesses in Chandausi.
              </p>
            </div>

            {/* Local Consultant */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                A Local Vastu Consultant You Can Actually Talk To
              </h3>
              <p className="mt-4">
                Vasterior is not about rushing consultations or confusing jargon. We believe in conversation, clarity, and conscious decisions.
              </p>
              <p className="mt-4">
                If you're feeling unsure about your home or workspace, a simple discussion can bring surprising insight. Many of our clients begin with a call and walk away with instant clarity, and a clear next step.
              </p>
              <p className="mt-4">
                You can reach out directly by calling <a href="tel:+917906086899" className="text-blue-600 hover:underline">+917906086899</a> for a conversation, or if you prefer writing things down, an email to <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">spacebuild.india@gamil.com</a>, is always a good place to start.
              </p>
              <p className="mt-4 font-semibold">
                No pressure. Just perspective.
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
                    1. Do I really need a Vastu consultant for my home or office?
                  </h3>
                  <p>If your space feels "off" despite everything looking fine on the surface, Vastu can uncover invisible energy imbalances. It's not about belief, it's about alignment.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    2. What is MahaVastu, and how is it different?
                  </h3>
                  <p>MahaVastu is a modern evolution of traditional Vastu. It focuses on energy flow and practical correction, often without demolition, making it ideal for today's homes and businesses.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    3. Can Vastu be corrected in an already constructed property?
                  </h3>
                  <p>Yes. Most of our work involves existing spaces. Corrections are subtle, smart, and non-destructive wherever possible.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    4. Will my interiors need to be changed completely?
                  </h3>
                  <p>Not at all. Our approach blends interior design with Vastu, ensuring changes feel natural, minimal, and visually refined.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    5. Is Vasterior only for homes?
                  </h3>
                  <p>No. We work with homes, offices, retail spaces, and commercial properties across Chandausi and nearby areas.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">
                    6. How do I get started with a consultation?
                  </h3>
                  <p>Start with a conversation. A quick call on <a href="tel:+917906086899" className="text-blue-600 hover:underline">+917906086899</a> or an email to <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">spacebuild.india@gamil.com</a> helps us understand your space and guide you on the best next step.</p>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl shadow-lg border border-orange-100">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 text-center">
                Your Space Is Talking. Are You Listening?
              </h3>
              <p className="text-center mb-6 font-semibold text-lg">
                When a space aligns, life stops feeling like a constant push.
              </p>
              <p className="text-center mb-6">
                If you've been searching for a Vastu Consultant near you in Chandausi, Vasterior is here to help you realign, calmly, consciously, and beautifully.
              </p>
              <div className="text-center space-y-3">
                <p>📞 Call: <a href="tel:+917906086899" className="text-blue-600 hover:underline font-semibold">+917906086899</a></p>
                <p>📧 Email: <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline font-semibold">spacebuild.india@gamil.com</a></p>
              </div>
            </div>
          </div>

          <PostNavigation slug="vastu-consultant-near-me-in-chandausi" />
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
