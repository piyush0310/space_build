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
            Turnkey Interior Designer in Chandausi
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
            Designed with Intention. Executed with Precision. Aligned with MahaVastu.
          </p>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior is redefining what it means to work with a turnkey interior designer in Chandausi. We design and execute interiors that don't just look refined, they feel right. By blending thoughtful interior design with the scientific principles of MahaVastu, we create spaces that support clarity, comfort, and growth, while taking complete ownership of the process from concept to final handover.
            </p>
            <p>
              For homeowners and business owners in Chandausi who want zero chaos, zero guesswork, and a space that truly works for them, Vasterior offers an end-to-end interior journey built on trust, detail, and alignment.
            </p>

            {/* Turnkey Experience */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              A True Turnkey Interior Experience - Start to Finish
            </h2>
            <p className="mb-4">
              Turnkey interior design isn't about pretty drawings. It's about responsibility.
            </p>
            <p className="mb-6">
              As a full-service turnkey interior designer in Chandausi, Vasterior manages everything, design planning, material sourcing, execution, supervision, and delivery. You don't chase vendors. You don't juggle timelines. You don't stress over decisions.
            </p>
            <p>You get one expert team, one clear vision, and one seamless outcome.</p>
            <p>From the first design discussion to the final reveal, every detail is planned, aligned, and executed with intent.</p>

            {/* MahaVastu Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Where Interior Design Meets MahaVastu
            </h2>
            <p className="mb-4">At Vasterior, design is not just visual, it's energetic.</p>
            <p className="mb-6">
              We integrate MahaVastu principles into interior planning to ensure that your space supports:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>mental peace</li>
              <li>financial stability</li>
              <li>productivity and focus</li>
              <li>emotional balance</li>
            </ul>
            <p>
              MahaVastu is a modern, non-demolition science. That means no breaking walls, no drastic structural changes, only intelligent placement, proportion correction, color balance, and energy alignment.
            </p>
            <p>Whether it's your home or workplace, we design spaces that feel lighter, calmer, and more aligned with your goals.</p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Complete Turnkey Interior Services in Chandausi
            </h2>
            <p className="mb-6">
              Vasterior delivers end-to-end turnkey interior solutions tailored to your lifestyle, business needs, and vastu requirements.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Residential Interior Design</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Apartments, independent homes & villas</li>
              <li>Living rooms, bedrooms & dining areas</li>
              <li>Modular kitchens & wardrobes</li>
              <li>Storage planning and space optimization</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Commercial Interior Design</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>Offices and corporate spaces</li>
              <li>Retail stores and showrooms</li>
              <li>Clinics, studios & professional spaces</li>
              <li>Productivity-focused layouts aligned with MahaVastu</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Execution & Finishing</h3>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-6">
              <li>False ceilings & lighting design</li>
              <li>Electrical and plumbing coordination</li>
              <li>Custom furniture & finishes</li>
              <li>Material selection and quality control</li>
              <li>On-site supervision and final handover</li>
            </ul>
            <p>Every project is handled with transparency, precision, and a clear timeline, because great design means nothing without flawless execution.</p>

            {/* Why Choose */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Chandausi Chooses Vasterior
            </h2>
            <p className="mb-6">
              Clients across Chandausi trust Vasterior because we don't believe in shortcuts or copy-paste interiors.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>End-to-end responsibility, from design to delivery</li>
              <li>Personalized interiors, not generic templates</li>
              <li>MahaVastu expertise integrated subtly and scientifically</li>
              <li>Clear communication and realistic timelines</li>
              <li>One point of contact, no coordination stress</li>
            </ul>
            <p>We don't just design spaces. We design confidence, the confidence that your investment is in the right hands.</p>

            {/* Call to Action */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Design a Space That Works for You
            </h2>
            <p className="mb-4">
              If you're planning a new home, renovating an existing space, or setting up a commercial property in Chandausi, the right conversation can change everything.
            </p>
            <p className="mb-8">
              A quick call with the Vasterior team at <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} can help you understand what's possible for your space, without pressure or jargon. If you prefer to start with details or drawings, writing to{" "}
              <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                spacebuild.india@gamil.com
              </a>{" "}
              is an easy first step toward a well-planned, vastu-aligned interior.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs - Turnkey Interior Designer in Chandausi
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">
                  What does turnkey interior design mean?
                </h3>
                <p>Turnkey interior design means one team handles the entire project, design, materials, execution, coordination, and final delivery. With Vasterior, you don't manage vendors or timelines; we do it all.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you provide MahaVastu without structural changes?</h3>
                <p>Yes. MahaVastu works on scientific corrections through layout planning, placements, proportions, and design elements, without breaking walls or altering the structure.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can you handle both residential and commercial projects in Chandausi?</h3>
                <p>Absolutely. Vasterior offers turnkey interior solutions for homes, offices, retail spaces, clinics, and other commercial properties in and around Chandausi.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How involved do I need to be during the project?</h3>
                <p>As much or as little as you want. We keep you informed at every stage, but the execution and coordination are completely managed by our team.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How do I start working with Vasterior?</h3>
                <p>
                  You can begin with a simple conversation. Calling <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} allows you to discuss your space and expectations, or you can share your requirements over email at{" "}
                  <a href="mailto:spacebuild.india@gamil.com" className="text-blue-600 hover:underline">
                    spacebuild.india@gamil.com
                  </a>{" "}
                  to start the design process.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Is turnkey interior design cost-effective?</h3>
                <p>Yes. Turnkey projects reduce hidden costs, delays, and rework. With clear planning and execution under one team, you get better control over quality and budget.</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Final Word
              </p>
              <p>
                Your space should support your life, your work, and your future, not fight against it.
              </p>
              <p>
                With Vasterior as your turnkey interior designer in Chandausi, you don't just get an interior. You get a space designed with intention, executed with clarity, and aligned to work in your favor.
              </p>
            </div>
          </div>
          <PostNavigation slug="turnkey-interior-designer-in-chandausi" />
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
