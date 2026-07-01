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
            Interior Decorator in Chandausi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Vasterior – Where Design Meets MahaVastu. Vasterior redefines what it means to be an 
              Interior Decorator in Chandausi by creating spaces that don't just look good, but work 
              for you. Every home, office, or commercial space we design is a balance of modern 
              aesthetics, functional planning, and the powerful science of MahaVastu.
            </p>

            {/* About */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior
            </h3>
            <p>
              Vasterior is not your typical interior design studio. We are a design-led, Vastu-aligned 
              interior brand focused on transforming spaces from the inside out.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Contemporary interior design principles</li>
              <li>Deep understanding of MahaVastu</li>
              <li>Practical planning for real Indian homes and businesses</li>
            </ul>

            {/* Why Choose */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Interior Decorator in Chandausi?
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-4">
              <li><strong>Design That's Beautiful and Balanced</strong> - Visually refined and energetically aligned</li>
              <li><strong>MahaVastu-Aligned Planning</strong> - Promotes harmony, health, and financial stability</li>
              <li><strong>Fully Customized</strong> - No templates. No shortcuts.</li>
              <li><strong>Local Understanding</strong> - Chandausi lifestyle, climate, construction styles</li>
              <li><strong>End-to-End Solutions</strong> - From concept to execution</li>
            </ol>

            {/* Services */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Interior Design Services in Chandausi
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Residential Interior Design</strong> - Apartments, villas, independent houses</li>
              <li><strong>Commercial & Office Interiors</strong> - Workspaces for focus and productivity</li>
              <li><strong>MahaVastu-Based Space Correction</strong> - Energy remedies without demolition</li>
              <li><strong>Turnkey Interior Solutions</strong> - Complete execution and styling</li>
              <li><strong>Design & Vastu Consultation</strong> - Expert guidance before construction</li>
            </ul>

            {/* MahaVastu */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The MahaVastu Advantage
            </h3>
            <p>
              MahaVastu is not superstition. It's a structured, scientific approach to spatial energy 
              alignment that helps improve peace, financial stability, productivity, and health.
            </p>

            {/* Contact */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Let's Design a Space That Truly Works for You
            </h3>
            <p>
              If you've been feeling that your space looks fine, but doesn't feel right, that's your 
              sign. A quick conversation can bring clarity.
            </p>
            <p>
              Call us at <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} to explore what's possible, or write to{" "}
              <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">
                spacebuild.india@gmail.com
              </a>.
            </p>

            {/* FAQs */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              FAQs – Interior Decorator in Chandausi
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900">
                  1. What makes Vasterior different from other interior decorators?
                </h4>
                <p>
                  Vasterior combines modern interior design with MahaVastu principles, creating 
                  spaces that are visually appealing and energetically balanced.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  2. Do you offer Vastu corrections without demolition?
                </h4>
                <p>
                  Yes. MahaVastu allows for subtle, non-invasive corrections in many cases.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  3. Can you design small homes and apartments?
                </h4>
                <p>
                  Absolutely. Smart planning and MahaVastu principles work powerfully in compact spaces.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  4. Do you handle complete interior execution?
                </h4>
                <p>
                  Yes. Vasterior offers end-to-end turnkey interior solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  5. Is MahaVastu necessary if I just want good interiors?
                </h4>
                <p>
                  Good interiors look nice. Balanced interiors feel right. MahaVastu enhances well-being.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  6. How do I get started with Vasterior?
                </h4>
                <p>
                  Begin with a consultation by calling <strong>+919927611780</strong> or{" "}
             <strong>+918077973797</strong> or{" "} or emailing{" "}
                  <a href="mailto:spacebuild.india@gmail.com" className="text-blue-600 hover:underline">
                    spacebuild.india@gmail.com
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <PostNavigation slug="interior-decorator-chandausi" />
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
