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
            Mahavastu Consultant Delhi – Transform Your Space with Vasterior&apos;s Expert Energy Solutions
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Redefine Energy, Redesign Life – Choose Vasterior, the Leading Mahavastu Consultant Delhi. Every space you live or work in holds energy - and when that energy aligns perfectly, life unfolds with clarity, peace, and growth. At Vasterior, we believe that your environment should support your ambitions, not restrict them.
            </p>
            <p>
              As a trusted Mahavastu Consultant Delhi, we blend the ancient science of Vastu Shastra with modern Mahavastu techniques to harmonize your home, office, or commercial space. Our expert consultants analyze over 16 directional energies and 4 zones of influence, ensuring your surroundings vibrate with positivity, balance, and abundance.
            </p>
            <p>
              Whether you&apos;re moving into a new space or wish to correct your existing one, Vasterior&apos;s Mahavastu consultation helps you create an environment where energy, design, and purpose align beautifully.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – Experience the Art and Science of Mahavastu
            </h2>
            <p>
              Vasterior is a premium Vastu and interior design consultancy in Delhi NCR, recognized for its expertise in integrating traditional energy science with contemporary design principles. Our team includes certified Mahavastu experts, architects, and interior designers who understand both the spiritual depth of Vastu Shastra and the practical needs of modern living.
            </p>
            <p>
              Through Mahavastu, we decode how each direction and element - earth, water, fire, air, and space - interacts within your property. Using color, shape, placement, and flow adjustments, we transform your surroundings into a source of motivation, health, and prosperity.
            </p>
            <p>
              At Vasterior, every consultation is backed by years of research, real-world success stories, and a commitment to creating luxury spaces that feel as good as they look.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Mahavastu Consultant Delhi
            </h2>
            <p>
              When balance and excellence are your priorities, you need a consultancy that understands both energy and elegance. Here&apos;s why Vasterior is the preferred choice across Delhi NCR:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Mahavastu Experts</strong>: Our consultants are trained professionals with deep expertise in energy mapping and direction-based corrections.</li>
              <li><strong>Personalized Consultation</strong>: Each home or office has a unique energy signature - we provide tailor-made solutions that address specific issues.</li>
              <li><strong>Aesthetic & Practical Remedies</strong>: Our remedies use modern design-friendly approaches - no demolitions, no major structural changes.</li>
              <li><strong>Scientific Approach</strong>: We combine Mahavastu research with architectural precision to deliver results that are both visible and measurable.</li>
              <li><strong>Luxury Design Integration</strong>: Every correction or adjustment is seamlessly aligned with your décor and interior design.</li>
              <li><strong>Trusted Across Delhi NCR</strong>: From luxury residences in South Delhi to corporate offices in Connaught Place, we&apos;ve built a reputation for trust, precision, and results.</li>
            </ul>
            <p className="mt-4">
              At Vasterior, we don&apos;t just advise - we align your space to support your goals and lifestyle.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              Vasterior provides comprehensive services that bring together Vastu, Mahavastu, and interior design under one roof for seamless transformation.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Mahavastu for Homes</strong>: Our experts analyze directions, elements, and energy zones to ensure your home radiates peace, love, and prosperity.
              </li>
              <li>
                <strong>Mahavastu for Offices</strong>: Enhance focus, teamwork, and financial growth by aligning your workspace with Mahavastu principles that boost motivation and creativity.
              </li>
              <li>
                <strong>Mahavastu for Commercial Spaces</strong>: From retail showrooms to hospitality projects, our solutions attract positive customer flow and business success through directional balance.
              </li>
              <li>
                <strong>Home & Office Interior Design with Vastu Integration</strong>: We merge energy flow with luxury aesthetics - designing spaces that reflect your personal style while staying energetically aligned.
              </li>
              <li>
                <strong>On-Site and Online Mahavastu Consultations</strong>: Our consultants are available both in-person and virtually for clients across Delhi NCR, ensuring convenience and expertise wherever you are.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Energy That Reflects Excellence
            </h2>
            <p>
              Every project by Vasterior is a story of transformation. Our portfolio features luxury homes, villas, and offices across Delhi NCR, each redefined through Mahavastu alignment. Clients have experienced improvements in family harmony, business performance, and mental well-being within weeks of our consultation.
            </p>
            <p>
              From modern apartments in East Delhi to heritage residences in South Delhi, our work demonstrates how energy, design, and intention can elevate any environment. At Vasterior, we don&apos;t just build spaces - we design experiences that attract success and serenity.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Real Transformations, Real Results
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior helped us understand the energy flow of our new home. Their Mahavastu guidance created a noticeable difference in peace and positivity.&quot; – Ritika Sharma, South Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our business grew significantly after implementing their Mahavastu remedies. Everything feels lighter, more organized, and balanced.&quot; – Ankit Verma, East Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Professional, polite, and incredibly knowledgeable. Vasterior is truly the best Mahavastu Consultant Delhi homeowners can trust.&quot; – Pooja Khanna, West Delhi
              </blockquote>
            </div>
            <p className="mt-4">
              Our clients&apos; trust is our true measure of success - every consultation strengthens our legacy of precision, transformation, and authenticity.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Mahavastu Consultant Delhi
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What is the difference between Vastu and Mahavastu?</h3>
                <p>Traditional Vastu focuses on directional principles, while Mahavastu integrates modern psychological and spatial sciences, providing more flexible, practical energy solutions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do Mahavastu remedies require major renovations?</h3>
                <p>Not at all. Vasterior specializes in non-structural remedies - using colors, shapes, symbols, and placements that blend perfectly with your interiors.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. How does Mahavastu help in improving life balance?</h3>
                <p>By aligning your home or workspace with natural energies, Mahavastu enhances clarity, peace, relationships, and overall prosperity.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Can Mahavastu be applied to apartments and offices?</h3>
                <p>Yes. Our team provides customized Mahavastu consultations for all property types, including apartments, villas, retail spaces, and offices.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I book a consultation with Vasterior?</h3>
                <p>Simply contact us via phone or email, and our team will schedule an in-depth Mahavastu consultation anywhere in Delhi NCR.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Align Energy, Design, and Purpose
            </h2>
            <p>
              Bring harmony, success, and positivity into your life with Vasterior, your trusted Mahavastu Consultant Delhi. Let our experts help you create a home or office that not only looks stunning but also supports your goals and well-being through the power of aligned energy.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:info@spacebuild.com">info@spacebuild.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="mahavastu-consultant-delhi" />
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
