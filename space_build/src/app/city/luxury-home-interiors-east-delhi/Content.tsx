import React from "react";

import LandingEnquiry from "@/components/LandingEnquiry";
import PostNavigation from "@/components/PostNavigation";

const Content = () => {
  return (
    <div className="min-h-screen bg-[#FFF2EB] pt-15">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Luxury Home Interiors in East Delhi
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Redefine Your Living Experience with Luxury Home Interiors in East Delhi
            </h3>
            <p>
              Your home deserves interiors that reflect your personality and sophistication. At Vasterior, we specialize in designing elegant and functional living spaces that combine comfort, beauty, and innovation. As the leading name for luxury home interiors in East Delhi, we transform houses into refined sanctuaries that inspire everyday living.
            </p>
            <p>
              From modern apartments to grand villas, we create luxurious home designs that are timeless, harmonious, and tailored to your lifestyle.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior
            </h2>
            <p>
              Vasterior is a premium interior design firm with a deep understanding of how spaces shape the way we live. Based in East Delhi, our team of talented designers, architects, and craftsmen has been transforming homes into personalized works of art for years.
            </p>
            <p>
              Our design philosophy centers around balance—blending luxury with livability, creativity with comfort, and elegance with practicality. Each project is approached as a unique canvas, where design meets craftsmanship and every detail matters.
            </p>
            <p>
              Whether it&apos;s home interior design, modular kitchen design, or full-scale renovation, Vasterior delivers excellence in every aspect. Our goal is to create homes that are not just beautiful but meaningful.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD – The Trusted Name for Luxury Home Interiors in East Delhi
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Tailored Luxury Designs</strong> – Every home we design reflects your taste, lifestyle, and personality. Our customized design solutions ensure exclusivity in every detail.</li>
              <li><strong>End-to-End Turnkey Solutions</strong> – From planning and design to material sourcing and final execution, we manage the entire process seamlessly.</li>
              <li><strong>Experienced Team of Experts</strong> – Our interior designers and project managers have years of expertise in luxury interiors and premium residential design.</li>
              <li><strong>High-Quality Materials and Finishes</strong> – We use only the finest materials, furniture, and décor elements for long-lasting beauty and comfort.</li>
              <li><strong>On-Time Delivery</strong> – Our professional team ensures timely project completion without compromising on quality or precision.</li>
              <li><strong>Transparent Process</strong> – We maintain clear communication and fair pricing throughout every stage of your project.</li>
            </ul>
            <p>
              Vasterior is committed to delivering luxury home interiors in East Delhi that balance aesthetics, functionality, and sophistication.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Interior Design Services in East Delhi
            </h2>
            <p>
              As one of the most trusted brands for luxury home interiors in East Delhi, Vasterior provides a wide range of design and renovation services tailored to modern homeowners.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Complete Home Interior Design</h3>
            <p>
              We create cohesive design concepts for your entire home, ensuring a unified aesthetic across all rooms. From layout planning to furniture and lighting, every detail is carefully curated.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Modular Kitchen Design</h3>
            <p>
              Our modular kitchen designs combine innovation and elegance. We craft kitchens that are ergonomic, efficient, and aesthetically pleasing with smart storage and premium finishes.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Living Room and Bedroom Interiors</h3>
            <p>
              We design living areas that leave a lasting impression and bedrooms that offer serene comfort. Our designs emphasize balance, proportion, and mood-enhancing lighting.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Bathroom and Wardrobe Design</h3>
            <p>
              Experience functional luxury with our bathroom and wardrobe interiors. We use durable materials, elegant fittings, and modern layouts that make daily life effortless.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">Home Renovation and Remodeling</h3>
            <p>
              Give your existing home a new life with Vasterior&apos;s renovation expertise. We update layouts, replace materials, and modernize interiors without losing your home&apos;s character.
            </p>

            <h3 className="font-semibold text-gray-900 mb-2">3D Visualization and Design Consultation</h3>
            <p>
              Our design process begins with 3D visualization, allowing you to preview your space before execution. Every design decision is made collaboratively to ensure satisfaction.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Portfolio and Work Quality
            </h2>
            <p>
              Every project by Vasterior is a blend of creativity, craftsmanship, and luxury. Our portfolio spans across East Delhi and beyond, featuring homes that embody elegance and comfort.
            </p>
            <p>
              We pay close attention to detail—whether it&apos;s the choice of materials, lighting, or furniture placement. Our partnerships with top suppliers ensure that every element meets the highest standards of quality.
            </p>
            <p>
              At Vasterior, luxury is not just about appearances. It&apos;s about how a space feels, how it functions, and how it improves the way you live. Each project is built to last and designed to inspire.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior turned our 4BHK apartment into a stunning luxury home. The design, materials, and execution were perfect from start to finish.&quot; – Rohit and Nidhi Khanna
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;The best decision we made was choosing Vasterior for our home interiors. Their attention to detail and quality workmanship truly stand out.&quot; – Priya Sharma
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;They understood exactly what we wanted and delivered more than we expected. Our home feels elegant, modern, and timeless.&quot; – Arjun Mehta
              </blockquote>
            </div>
            <p>
              Our clients trust us because we turn ideas into beautiful, livable realities with precision and passion.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Who offers the best luxury home interiors in East Delhi?</h3>
                <p>A: Vasterior is widely recognized as the leading provider of luxury home interiors in East Delhi, offering personalized design and superior craftsmanship.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. What services are included in luxury home interior design?</h3>
                <p>A: Our services include design consultation, space planning, modular kitchen design, furniture selection, lighting design, and full turnkey execution.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can you redesign my existing home?</h3>
                <p>A: Yes. We offer complete home renovation and remodeling services to give your space a luxurious and modern update.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. How long does it take to complete a home interior project?</h3>
                <p>A: Most projects are completed within 10 to 14 weeks, depending on the size and complexity of the design. We ensure timely delivery and high-quality execution.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Why should I choose Vasterior for luxury home interiors in East Delhi?</h3>
                <p>A: Vasterior combines creative excellence, experienced professionals, premium materials, and a transparent process to deliver designs that redefine luxury living.</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior Today for Your Dream Home Interiors in East Delhi
            </h2>
            <p>
              Transform your home into a luxurious retreat that reflects your personality and lifestyle. Let Vasterior design a space that blends beauty, comfort, and functionality seamlessly.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:spacebuild.india@gamil.com">spacebuild.india@gamil.com</a></p>
              <p><strong>Website:</strong> <a href="https://www.vasterior.com" target="_blank" rel="noopener noreferrer">www.vasterior.com</a></p>
              <p><strong>Location:</strong> East Delhi, India</p>
            </div>

            <p className="mt-4 font-semibold text-gray-900">
              Vasterior – Creating Luxury Home Interiors in East Delhi That Redefine Modern Living.
            </p>
          </div>

          <PostNavigation slug="premium-residential-interior-designer-east-delhi" />
        </div>

        {/* Form Section - Smart positioning with CSS order */}
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
