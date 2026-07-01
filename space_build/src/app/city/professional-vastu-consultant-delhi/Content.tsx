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
            Professional Vastu Consultant Delhi – Create Balanced, Beautiful, and Prosperous Spaces with Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Transform Your Space with the Power of Professional Vastu. Your home or workspace is more than just a physical structure - it&apos;s a living energy field that influences health, happiness, and success. When energy flows right, life feels aligned. When it doesn&apos;t, imbalance shows up in subtle yet powerful ways.
            </p>
            <p>
              That&apos;s where Vasterior, your trusted Professional Vastu Consultant Delhi, helps you create a space that works for you, not against you.
            </p>
            <p>
              Our certified Vastu experts blend authentic Vastu Shastra principles with modern architectural design to harmonize every aspect of your environment. From residential homes and offices to commercial complexes, we provide scientifically validated, result-driven Vastu solutions that transform spaces into centers of positivity and abundance.
            </p>
            <p>
              Whether you&apos;re building new or improving an existing property, Vasterior brings you the clarity, confidence, and cosmic balance your space deserves.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – Redefining Energy Through Design
            </h2>
            <p>
              Vasterior is a leading Vastu and interior design consultancy in Delhi NCR, known for its refined approach that unites science, art, and spirituality in perfect balance. Our team includes certified Vastu consultants, architects, and interior designers who have worked on a wide range of projects - from modern apartments and villas to offices, hotels, and institutional buildings.
            </p>
            <p>
              We focus on practical and aesthetic solutions that align energy flow with architectural functionality. Our recommendations are scientific, achievable, and visually seamless - no unnecessary demolitions, only intelligent corrections.
            </p>
            <p>
              At Vasterior, our mission is simple: to help every client live and work in spaces that support happiness, prosperity, and growth.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Professional Vastu Consultant Delhi
            </h2>
            <p>
              Choosing the right Vastu consultant can redefine the way you experience your home or workspace. Here&apos;s why Vasterior is the preferred name in Delhi NCR:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Expertise</strong>: Our team consists of professionally trained Vastu consultants and architects with real-world project experience.</li>
              <li><strong>Scientific & Modern Approach</strong>: We interpret Vastu through geometry, light, orientation, and design - no myths, only measurable balance.</li>
              <li><strong>Customized Solutions</strong>: Every property is unique, and so are our recommendations - tailored to your lifestyle, goals, and structure.</li>
              <li><strong>No Structural Changes</strong>: We offer effective non-invasive remedies that blend with your interiors and aesthetics.</li>
              <li><strong>Comprehensive Services</strong>: From residential and commercial spaces to hospitality and institutions - we consult across all sectors.</li>
              <li><strong>Proven Trust & Credibility</strong>: Hundreds of happy clients across Delhi NCR have experienced tangible improvements in peace, focus, and prosperity.</li>
            </ul>
            <p className="mt-4">
              When you work with Vasterior, you don&apos;t just receive Vastu advice - you gain a strategic partner in energy, design, and well-being.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              At Vasterior, we offer a complete range of Vastu consultation and design solutions, tailored for different property types and needs.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Residential Vastu Consultation</strong>: Our experts analyze your home&apos;s layout, direction, and energy to create harmony between your family, health, and finances. Perfect for apartments, villas, and bungalows.
              </li>
              <li>
                <strong>Vastu for Offices & Commercial Spaces</strong>: We help business owners improve productivity, financial flow, and team synergy by aligning workspaces with energy balance.
              </li>
              <li>
                <strong>Vastu for New Construction Projects</strong>: From site selection to blueprint planning, our consultants collaborate with your architect to ensure directional and elemental harmony.
              </li>
              <li>
                <strong>Interior Design with Vastu Integration</strong>: Our design team crafts interiors that look luxurious while maintaining Vastu accuracy in color, layout, and lighting.
              </li>
              <li>
                <strong>Vastu for Renovations & Existing Spaces</strong>: We perform energy assessments for existing buildings and suggest practical, design-friendly corrections.
              </li>
              <li>
                <strong>Online & On-Site Consultation</strong>: Vasterior offers both online and in-person consultation services - making expert guidance accessible anytime, anywhere.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Excellence Rooted in Energy and Design
            </h2>
            <p>
              From luxury homes in South Delhi to corporate offices in Noida, every Vasterior project reflects precision, creativity, and positive transformation. Our clients have experienced peaceful living environments, improved relationships and focus, growth in business and finances, and enhanced health and overall well-being.
            </p>
            <p>
              Each consultation is conducted with care, confidentiality, and personalized attention - ensuring that your home or workspace becomes a true reflection of balance and abundance. At Vasterior, we don&apos;t just balance energies - we help people build lives that flow with purpose.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Real People, Real Results
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior guided us in aligning our home with Vastu principles without changing its design. The difference in energy and peace was immediate.&quot; – Amit Khanna, South Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Their consultation was scientific, clear, and extremely practical. Our office feels more focused, and business results have improved.&quot; – Ritika Mehta, Gurugram
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Highly professional and trustworthy. Vasterior truly lives up to its name - blending Vastu and interiors with perfection.&quot; – Sanjay Kapoor, Noida
              </blockquote>
            </div>
            <p className="mt-4">
              At Vasterior, every client experience speaks of transformation through trust, clarity, and expertise.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Professional Vastu Consultant Delhi
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What makes a professional Vastu consultant different from others?</h3>
                <p>A professional Vastu consultant like Vasterior combines certified expertise, modern design understanding, and practical, non-mystical solutions to ensure measurable results.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Can Vastu corrections be made without reconstruction?</h3>
                <p>Yes. Most corrections are aesthetic and directional - achieved through placement, color, or layout adjustments, without structural changes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Is Vastu applicable to apartments and small offices?</h3>
                <p>Absolutely. Vastu can harmonize any space, regardless of size or structure, through scientific orientation analysis.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. How long does it take to see Vastu results?</h3>
                <p>While some clients feel positive changes immediately, long-term benefits like stability and prosperity develop progressively with consistency.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I book a Vastu consultation with Vasterior?</h3>
                <p>Simply call or email us. Our team will schedule a personalized session - either online or on-site - depending on your location and requirements.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Balance, Beauty, and Brilliance Await
            </h2>
            <p>
              Transform your home or workspace into a space that radiates peace, progress, and prosperity with Vasterior, your trusted Professional Vastu Consultant Delhi. Our expert team is ready to align your surroundings with universal energy for a life that flows effortlessly toward success.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:spacebuild.india@gmail.com">spacebuild.india@gmail.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="professional-vastu-consultant-delhi" />
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
