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
            Industrial Vastu Consultant West Delhi – Power Your Industrial Success with Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Enhance Productivity and Profitability with Vasterior – The Trusted Industrial Vastu Consultant West Delhi. Every industrial space holds immense potential - not just in its machinery and manpower, but in its energy alignment. When directions, layout, and design flow in harmony with Vastu principles, businesses thrive with stability, productivity, and consistent growth.
            </p>
            <p>
              As a leading Industrial Vastu Consultant West Delhi, Vasterior helps factories, warehouses, and manufacturing units harness the power of balanced energy for peak performance and prosperity.
            </p>
            <p>
              Our approach is both scientific and practical, blending the time-tested knowledge of Vastu Shastra with modern industrial architecture. From the placement of machinery and entry gates to the layout of production zones and offices, every aspect is fine-tuned for success.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – The Pinnacle of Design, Direction, and Energy
            </h2>
            <p>
              Vasterior is a luxury Vastu and interior consultancy based in Delhi NCR, known for its precision-driven and design-integrated approach to spatial harmony. With a team of certified Vastu consultants, architects, and industrial planners, we bring decades of experience in optimizing energy flow across diverse spaces - including factories, corporate offices, warehouses, and residential projects.
            </p>
            <p>
              Our industrial Vastu services in West Delhi focus on enhancing the operational flow, workforce efficiency, and energy sustainability of your business.
            </p>
            <p>
              At Vasterior, we go beyond just Vastu corrections - we design environments that empower business growth and create lasting prosperity.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Industrial Vastu Consultant West Delhi
            </h2>
            <p>
              When precision, energy, and performance matter, Vasterior is the partner businesses trust. Here&apos;s why industries across West Delhi choose us:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Industrial Vastu Experts</strong>: Our consultants hold professional certifications and hands-on experience with large-scale industrial layouts.</li>
              <li><strong>Customized Industrial Analysis</strong>: We evaluate your site layout, directions, energy nodes, and functions to design solutions unique to your business model.</li>
              <li><strong>Seamless Integration with Architecture</strong>: Our corrections complement your existing building design without structural disruptions.</li>
              <li><strong>Result-Oriented Consultation</strong>: We focus on tangible outcomes - better productivity, workforce stability, and financial consistency.</li>
              <li><strong>Non-Destructive Remedies</strong>: Our techniques include directional adjustments, color balancing, and energy mapping without demolition.</li>
              <li><strong>Trusted by Delhi&apos;s Leading Industrial Units</strong>: From small-scale manufacturing setups to large production facilities, Vasterior is known for reliability, confidentiality, and success.</li>
            </ul>
            <p className="mt-4">
              At Vasterior, energy becomes your business advantage - guiding you toward growth with balance and purpose.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              Vasterior provides a complete range of industrial, commercial, and residential Vastu services across Delhi NCR, designed to align spaces with success.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Industrial Vastu Consultation</strong>: We conduct a detailed assessment of factory layouts, production flow, energy points, and machinery alignment to ensure maximum operational efficiency and profitability.
              </li>
              <li>
                <strong>Vastu for Warehouses & Storage Units</strong>: Proper placement of inventory zones, loading docks, and entry points ensures smooth logistics and minimal energy blockages.
              </li>
              <li>
                <strong>Pre-Construction Vastu Planning</strong>: If you&apos;re planning a new industrial project, our experts collaborate with architects to ensure directional accuracy, energy flow, and zoning balance right from the design stage.
              </li>
              <li>
                <strong>Factory Office & Administration Zone Vastu</strong>: We create office environments within factories that promote clarity, leadership, and smooth decision-making for business owners and management teams.
              </li>
              <li>
                <strong>Interior Design & Aesthetic Alignment</strong>: Our design solutions align industrial interiors - including color schemes, signage, and work zones - with energetic harmony and professional aesthetics.
              </li>
              <li>
                <strong>Online & On-Site Consultations</strong>: We offer flexible consultation options - both on-site across West Delhi and virtually - ensuring expert support wherever your business is located.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Energy That Drives Industrial Excellence
            </h2>
            <p>
              From manufacturing plants in Kirti Nagar to warehouses in Mundka and Naraina, Vasterior&apos;s industrial Vastu expertise has transformed numerous facilities across West Delhi. Each project reflects our dedication to combining scientific precision and spiritual insight. Clients have reported measurable benefits such as improved production flow, better employee morale, reduced equipment breakdowns, and consistent growth in revenue.
            </p>
            <p>
              At Vasterior, we view each project as a collaboration - creating spaces where innovation, harmony, and performance thrive together.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Building Trust, One Industry at a Time
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;After consulting Vasterior, our factory operations became smoother and more productive. Their remedies were simple, practical, and effective.&quot; – Rohit Mehta, Naraina Industrial Area
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We were searching for an Industrial Vastu Consultant West Delhi who truly understood factory dynamics - Vasterior exceeded our expectations.&quot; – Anjali Kapoor, Kirti Nagar
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our warehouse layout was optimized beautifully. Energy feels balanced, and workflow efficiency has improved significantly.&quot; – Vikas Jain, Mundka
              </blockquote>
            </div>
            <p className="mt-4">
              Each testimonial reflects Vasterior&apos;s commitment to excellence, trust, and tangible business transformation.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Industrial Vastu Consultant West Delhi
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Why do I need an Industrial Vastu Consultant in West Delhi?</h3>
                <p>Industrial Vastu ensures your facility&apos;s layout, direction, and operations are energetically balanced, enhancing productivity, employee focus, and profitability.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Can Vastu really impact industrial efficiency?</h3>
                <p>Yes. Proper Vastu alignment improves workflow, reduces operational friction, and fosters smoother coordination among departments.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Is it necessary to rebuild for Vastu corrections?</h3>
                <p>Not at all. Vasterior provides non-structural remedies such as spatial rearrangement, directional corrections, and element balancing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. What types of industries does Vasterior serve?</h3>
                <p>We cater to manufacturing units, textile factories, warehouses, packaging industries, and production plants across Delhi NCR.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I schedule an industrial Vastu consultation?</h3>
                <p>Simply contact Vasterior via phone or email, and we&apos;ll arrange an expert on-site visit or virtual consultation tailored to your business needs.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Where Design Meets Direction
            </h2>
            <p>
              Empower your industrial facility with the balance and success it deserves. Partner with Vasterior, your trusted Industrial Vastu Consultant West Delhi, to create an environment that drives growth, stability, and innovation.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:info@spacebuild.com">info@spacebuild.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="industrial-vastu-consultant-west-delhi" />
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
