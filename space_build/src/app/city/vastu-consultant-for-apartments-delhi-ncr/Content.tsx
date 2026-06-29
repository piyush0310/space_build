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
            Vastu Consultant For Apartments Delhi NCR – Balance Energy, Design, and Lifestyle with Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Experience Perfect Energy Alignment in Apartment Living – Choose Vasterior, the Trusted Vastu Consultant For Apartments Delhi NCR. Modern apartments are designed for convenience and luxury, but not every layout aligns with the flow of positive energy. Even the most beautiful interiors can feel dull or unbalanced if energy is disrupted by improper directions, placement, or element misalignment.
            </p>
            <p>
              As the leading Vastu Consultant For Apartments Delhi NCR, Vasterior specializes in transforming modern apartment spaces into centers of harmony, health, and happiness - without structural changes.
            </p>
            <p>
              Whether you live in a high-rise in Gurgaon, a builder floor in South Delhi, or a premium apartment in Noida, our expert team ensures your home resonates with the perfect balance of the five natural elements - earth, water, fire, air, and space.
            </p>
            <p>
              Our mission is simple: to make your apartment feel energetically alive while maintaining its modern, luxurious charm.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – The Intersection of Design, Energy, and Elegance
            </h2>
            <p>
              Vasterior is a premier Vastu and interior consultancy in Delhi NCR, known for blending ancient Vastu Shastra with contemporary architecture and interior design. Led by certified Vastu experts, architects, and designers, our team brings years of experience in analyzing and enhancing energy flow within apartments, penthouses, and builder floors.
            </p>
            <p>
              We believe that Vastu isn&apos;t about breaking walls or rearranging your home - it&apos;s about understanding your space, harmonizing its layout, and unlocking its full energetic potential.
            </p>
            <p>
              At Vasterior, we merge technical knowledge with creative intuition to help apartment owners live in spaces that are not only beautiful but energetically balanced.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Vastu Consultant For Apartments Delhi NCR
            </h2>
            <p>
              Every apartment is unique - and so is its energy pattern. Here&apos;s why Vasterior is the most trusted choice among discerning homeowners and architects in Delhi NCR:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Vastu Experts</strong>: Our consultants are trained professionals with deep knowledge of Vastu principles for modern residential layouts.</li>
              <li><strong>Tailored Apartment Solutions</strong>: We analyze direction, structure, and functionality to offer precise, personalized Vastu solutions.</li>
              <li><strong>Non-Structural Remedies</strong>: Our methods are elegant, practical, and aesthetic - no demolition, only energy alignment.</li>
              <li><strong>Scientific + Spiritual Approach</strong>: We use both directional analysis and energy mapping to ensure harmony at every level.</li>
              <li><strong>Luxury Design Integration</strong>: Our remedies blend seamlessly with high-end interiors, maintaining visual appeal and flow.</li>
              <li><strong>Proven Client Results</strong>: From improving peace and relationships to increasing prosperity, our clients across Delhi NCR experience real transformations.</li>
            </ul>
            <p className="mt-4">
              At Vasterior, we create energetic balance without compromising on luxury, beauty, or modern living.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              We offer a comprehensive range of Vastu and interior services designed for apartment owners, builders, and developers across Delhi NCR.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Apartment Vastu Consultation</strong>: We analyze the apartment layout, directions, entrance, and energy zones to align your living space with nature&apos;s positive forces.
              </li>
              <li>
                <strong>Vastu for New Apartments</strong>: Planning to move into a new apartment? Our experts help you choose or modify your layout to ensure long-term peace and prosperity.
              </li>
              <li>
                <strong>Vastu for Builder Floors</strong>: Our team provides tailored solutions for builder floors and compact layouts, ensuring optimal energy flow without structural alterations.
              </li>
              <li>
                <strong>Interior Design with Vastu Alignment</strong>: Vasterior&apos;s design specialists create luxurious interiors that also follow Vastu principles - integrating colors, materials, and lighting for balanced energy.
              </li>
              <li>
                <strong>Online & On-Site Consultations</strong>: Whether you prefer a digital consultation or a personal visit, our services are flexible, detailed, and highly confidential.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Crafting Energy-Infused Luxury Apartments
            </h2>
            <p>
              Vasterior&apos;s portfolio showcases successful apartment consultations across Delhi, Gurgaon, and Noida - from elegant penthouses to contemporary studio apartments. Each project reflects our commitment to precision, harmony, and design sophistication. We&apos;ve worked with both individual homeowners and real estate developers to ensure their properties are Vastu-aligned from blueprint to interior finish.
            </p>
            <p>
              Our clients frequently report improved well-being, smoother family relationships, and enhanced prosperity within weeks of implementing our recommendations. At Vasterior, every apartment we consult becomes a living space of balance, abundance, and joy.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Real Transformations, Real Trust
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior transformed our apartment&apos;s energy without changing the interiors. The difference in peace and positivity was immediate.&quot; – Amit Malhotra, South Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Their expertise in apartment Vastu is unmatched. Every solution was practical and aesthetically aligned with our luxury interiors.&quot; – Ritika Jain, Gurgaon
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior&apos;s team explained Vastu scientifically - it was more about balance than superstition. Our home feels harmonious now.&quot; – Neha Mehta, Noida
              </blockquote>
            </div>
            <p className="mt-4">
              Our clients&apos; experiences reflect what sets Vasterior apart - expertise, trust, and transformation that lasts.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Consultant For Apartments Delhi NCR
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Why do apartments need Vastu consultation?</h3>
                <p>Even in modern apartments, energy flow plays a vital role in overall well-being. A professional consultation ensures your layout supports health, happiness, and financial success.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Can Vastu be applied in multi-storey buildings or compact flats?</h3>
                <p>Yes. Vasterior specializes in apartment and builder floor Vastu - offering remedies that work within limited space without reconstruction.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Are Vastu corrections expensive or complicated?</h3>
                <p>Not at all. Our solutions are subtle, aesthetic, and cost-effective, such as color balancing, mirror placement, and energy direction optimization.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Will Vastu affect my apartment&apos;s design or interiors?</h3>
                <p>No. We harmonize energy flow while maintaining or even enhancing your apartment&apos;s visual appeal and layout.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I schedule a Vastu consultation with Vasterior?</h3>
                <p>Simply call or email us, and our team will arrange an appointment (online or on-site) anywhere in Delhi NCR.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Elevate Energy, Elevate Living
            </h2>
            <p>
              Make your apartment a sanctuary of harmony and success with Vasterior, your trusted Vastu Consultant For Apartments Delhi NCR. Let our experts align your home&apos;s energy flow with your aspirations - ensuring your family lives with peace, balance, and prosperity.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:info@spacebuild.com">info@spacebuild.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="vastu-consultant-for-apartments-delhi-ncr" />
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
