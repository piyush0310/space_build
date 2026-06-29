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
            Certified Vastu Expert Delhi NCR – Redefine Energy and Elegance with Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Bring Harmony and Prosperity Home with Vasterior – Certified Vastu Expert Delhi NCR. Your surroundings influence your peace, prosperity, and success more than you realize. At Vasterior, we understand that great design isn&apos;t just about beauty - it&apos;s about energy. As a Certified Vastu Expert in Delhi NCR, we merge the ancient science of Vastu Shastra with the art of modern luxury interiors, creating spaces that radiate positivity, balance, and timeless appeal.
            </p>
            <p>
              Whether you&apos;re designing a new home, enhancing your workspace, or correcting energy imbalances in your current environment, Vasterior ensures your space flows in perfect harmony with universal energies - beautifully, naturally, and luxuriously.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – Certified Vastu Expertise with a Modern Touch
            </h2>
            <p>
              Vasterior is a premium Vastu and interior consultancy firm based in Delhi NCR, specializing in creating energy-balanced spaces that embody elegance, comfort, and success. Our certified Vastu consultants have years of practical experience, guiding homeowners and business leaders toward spaces that support mental clarity, health, and prosperity. We go beyond textbook principles - blending authentic Vastu science with modern architecture and aesthetic refinement.
            </p>
            <p>
              Every recommendation from Vasterior is backed by real-world expertise, precise directional analysis, and design integrity - ensuring your space doesn&apos;t just look extraordinary but also feels powerfully aligned.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD – Certified Vastu Expert Delhi NCR
            </h2>
            <p>
              When you seek perfection, trust only those who understand both the science of space and the art of balance. Here&apos;s why Vasterior stands as the preferred Certified Vastu Expert in Delhi NCR:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Professionals</strong>: Our consultants are trained and accredited in authentic Vastu Shastra, ensuring expertise that&apos;s both credible and result-driven.</li>
              <li><strong>Personalized Space Analysis</strong>: Every home and business is unique - our team studies layouts, directions, and energies to create fully customized solutions.</li>
              <li><strong>Luxury Aesthetic Integration</strong>: We deliver Vastu corrections that enhance design harmony without compromising your interiors&apos; elegance.</li>
              <li><strong>Scientific & Spiritual Alignment</strong>: Combining architectural precision with cosmic principles for energy that flows effortlessly.</li>
              <li><strong>Trusted by Delhi NCR&apos;s Elite</strong>: Our clientele includes premium residences and luxury offices across South Delhi, Gurgaon, and Noida.</li>
              <li><strong>Discreet, Transparent Service</strong>: Confidential consultations with clear, actionable insights - no myths, no unnecessary rituals.</li>
            </ul>
            <p className="mt-4">
              At Vasterior, energy meets design - and every space becomes a masterpiece of harmony.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              At Vasterior, we offer an exclusive range of Vastu and interior design services to help you create environments of prosperity, health, and balance.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Home Vastu Consultation</strong>: Create a home that supports your well-being and success. Our certified experts analyze layouts, directions, and elemental balance to optimize each corner for positive energy flow.
              </li>
              <li>
                <strong>Vastu for Offices & Corporate Spaces</strong>: Boost performance, decision-making, and financial growth by aligning your workspace with Vastu principles tailored for business success.
              </li>
              <li>
                <strong>Vastu for New Constructions</strong>: Planning a new project? Our experts guide you through plot selection, directional planning, and architectural alignment to ensure prosperity from the ground up.
              </li>
              <li>
                <strong>Interior Design with Vastu Integration</strong>: We design high-end interiors that are both luxurious and energetically balanced - where every material, texture, and color supports your lifestyle and goals.
              </li>
              <li>
                <strong>Online & On-Site Consultations</strong>: No matter where you are in Delhi NCR, our certified consultants offer convenient online and in-person sessions for homes and offices alike.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Where Energy and Design Unite
            </h2>
            <p>
              Vasterior&apos;s portfolio showcases spaces that embody balance, beauty, and brilliance. From ultra-luxury residences in South Delhi to contemporary offices in Gurgaon, each project reflects our commitment to energetic harmony and timeless aesthetics.
            </p>
            <p>
              Our clients describe the transformation as &quot;instant yet lasting&quot; - spaces that look exceptional and feel deeply peaceful. At Vasterior, our mission is to design not just interiors, but energetic experiences that elevate your daily life.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Trust that Speaks Volumes
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We consulted Vasterior while renovating our home, and the results were amazing. The energy feels lighter, calmer, and more positive. Truly the Certified Vastu Expert Delhi NCR residents can rely on.&quot; – Anjali Kapoor, South Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our office saw a major improvement in productivity and morale after Vasterior&apos;s consultation. Their precision and professionalism are unmatched.&quot; – Vikram Khanna, Gurgaon
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Every suggestion was practical and beautifully aligned with our interiors. The space now feels balanced and luxurious.&quot; – Ritika Sharma, Noida
              </blockquote>
            </div>
            <p className="mt-4">
              Vasterior&apos;s legacy is built on trust, transformation, and timeless design sophistication.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Certified Vastu Expert Delhi NCR
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What makes Vasterior a Certified Vastu Expert in Delhi NCR?</h3>
                <p>Vasterior&apos;s consultants are professionally certified and bring years of applied experience, combining authentic Vastu wisdom with modern architectural expertise.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Can Vastu work without changing the structure of my home?</h3>
                <p>Absolutely. We focus on non-destructive corrections such as directional adjustments, furniture placement, and color balancing that preserve your interiors&apos; beauty.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Is Vastu applicable for apartments and offices?</h3>
                <p>Yes, Vastu can be applied to all types of spaces - including apartments, villas, corporate offices, and retail environments across Delhi NCR.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. How do I know if my home needs Vastu correction?</h3>
                <p>If you experience discomfort, frequent disputes, or lack of growth despite efforts, a Vastu evaluation can help identify and correct underlying energy imbalances.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I book a consultation with Vasterior?</h3>
                <p>Simply contact us via phone or email, and our team will schedule a convenient session with our Certified Vastu Expert in Delhi NCR.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Balance, Beauty, and Brilliance Await
            </h2>
            <p>
              Transform your surroundings into a source of peace, prosperity, and purpose with Vasterior, your trusted Certified Vastu Expert in Delhi NCR. Experience the fusion of scientific Vastu application and luxury design - perfectly tailored to your space, lifestyle, and vision.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:info@spacebuild.com">info@spacebuild.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="certified-vastu-expert-delhi-ncr" />
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
