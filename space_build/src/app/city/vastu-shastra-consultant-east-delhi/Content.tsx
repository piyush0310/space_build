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
            Vastu Shastra Consultant East Delhi – Bring Balance, Beauty, and Prosperity to Your Space with Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Transform Your Surroundings with Vasterior – The Trusted Vastu Shastra Consultant East Delhi. Your home or workspace is not just a physical space - it&apos;s a reflection of energy, emotion, and purpose. When energy flows in harmony, life unfolds effortlessly with peace, prosperity, and progress.
            </p>
            <p>
              At Vasterior, we bring the timeless wisdom of Vastu Shastra into modern architecture and design. As a leading Vastu Shastra Consultant East Delhi, we specialize in transforming homes, offices, and commercial spaces into zones of balance and abundance.
            </p>
            <p>
              Whether you&apos;re building a new home, designing your workspace, or re-energizing your existing property, our Vastu experts ensure that every corner of your space aligns with the five elements - earth, water, fire, air, and space - creating an environment that truly supports your goals.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – A Blend of Authentic Vastu Wisdom and Modern Design
            </h2>
            <p>
              Vasterior is a premium Vastu and interior design consultancy in Delhi NCR, known for its refined approach that merges spiritual principles with architectural excellence. Our team of certified Vastu consultants, architects, and interior designers brings decades of combined experience to help clients achieve perfect harmony in their spaces.
            </p>
            <p>
              We don&apos;t just offer Vastu corrections - we create holistic environments that nurture health, wealth, and happiness. Vasterior&apos;s philosophy is simple yet powerful: when your surroundings are balanced, your life follows suit.
            </p>
            <p>
              Serving across East Delhi, including areas like Preet Vihar, Laxmi Nagar, Mayur Vihar, and Anand Vihar, we&apos;ve helped countless homeowners and businesses create spaces that look elegant and feel energetically aligned.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Vastu Shastra Consultant East Delhi
            </h2>
            <p>
              When precision, aesthetics, and authenticity matter, Vasterior stands as your ideal partner. Here&apos;s why clients across East Delhi trust us:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Vastu Experts</strong>: Our consultants are trained in traditional Vastu Shastra and modern architectural practices for flawless integration.</li>
              <li><strong>Personalized Consultation</strong>: Every property is unique, and so is our approach - we tailor recommendations to suit your space, energy, and goals.</li>
              <li><strong>Luxury Design Alignment</strong>: We blend energy corrections seamlessly into your interiors without compromising on beauty or modernity.</li>
              <li><strong>Non-Destructive Remedies</strong>: No structural changes required - our solutions are simple, aesthetic, and highly effective.</li>
              <li><strong>Scientific & Spiritual Harmony</strong>: We combine practical direction analysis with energy balancing techniques rooted in ancient wisdom.</li>
              <li><strong>Trusted Reputation</strong>: With hundreds of satisfied clients across Delhi NCR, Vasterior is synonymous with credibility and transformative results.</li>
            </ul>
            <p className="mt-4">
              At Vasterior, we don&apos;t just advise - we architect energy and design harmony into every project.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              At Vasterior, we offer complete Vastu and design consultancy services tailored to meet the unique needs of residential, commercial, and industrial clients.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Home Vastu Consultation</strong>: Transform your home into a haven of peace and prosperity. From entrance directions to room placements, we ensure every element supports your family&apos;s well-being.
              </li>
              <li>
                <strong>Vastu for Offices & Commercial Spaces</strong>: Boost productivity, leadership, and financial success by aligning your workplace with Vastu principles that enhance focus and growth.
              </li>
              <li>
                <strong>Vastu for Apartments & Builder Floors</strong>: Our experts help you make the most of your available layout, ensuring energy flows seamlessly even in limited spaces.
              </li>
              <li>
                <strong>Vastu for New Constructions</strong>: Planning a new building? We work with your architect from the design stage to ensure your space is aligned from foundation to finish.
              </li>
              <li>
                <strong>Interior Design with Vastu Integration</strong>: Our interior solutions combine luxury aesthetics with directional balance for spaces that look opulent and feel harmonious.
              </li>
              <li>
                <strong>Online & On-Site Consultations</strong>: Whether you prefer in-person sessions in East Delhi or virtual consultations, our experts offer flexible, accurate, and personalized Vastu guidance.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Crafting Spaces of Elegance and Energy
            </h2>
            <p>
              Vasterior&apos;s work across East Delhi reflects a perfect balance between design brilliance and energetic harmony. From high-end homes in Anand Vihar to offices in Mayur Vihar and retail spaces in Preet Vihar, our portfolio speaks of precision, creativity, and transformation.
            </p>
            <p>
              Each project is guided by Vastu&apos;s universal principles - direction, proportion, and flow - to create spaces that not only impress visually but also radiate positivity. Our clients often describe their post-consultation experience as &quot;a shift in both environment and mindset&quot; - a testament to Vasterior&apos;s dedication to perfection.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Trust Built Through Transformation
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior completely changed the energy of our home. Every corner feels more peaceful and vibrant. Their expertise is unmatched.&quot; – Neha Verma, Laxmi Nagar
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We hired Vasterior for our office in East Delhi, and the difference was visible within weeks - smoother operations and better team morale.&quot; – Rajeev Malhotra, Preet Vihar
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;The consultation was insightful, professional, and practical. Their design sense perfectly complements their Vastu knowledge.&quot; – Anjali Bansal, Mayur Vihar
              </blockquote>
            </div>
            <p className="mt-4">
              Vasterior&apos;s growing family of clients reflects our unwavering commitment to excellence, authenticity, and trust.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Shastra Consultant East Delhi
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What makes Vasterior the best Vastu Shastra Consultant East Delhi?</h3>
                <p>Vasterior stands out for its certified experts, customized solutions, and seamless integration of Vastu with modern design aesthetics.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Can Vastu be applied without structural changes?</h3>
                <p>Yes. Our consultants specialize in aesthetic, non-destructive remedies such as furniture repositioning, lighting alignment, and symbolic enhancements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Do you offer Vastu services for apartments and builder floors?</h3>
                <p>Absolutely. Our team customizes Vastu solutions for compact urban layouts commonly found across East Delhi.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. What benefits can I expect from Vastu consultation?</h3>
                <p>You can expect improved peace of mind, family harmony, productivity, financial growth, and a balanced lifestyle.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I schedule a consultation with Vasterior?</h3>
                <p>Simply call or email us, and our experts will arrange an on-site or online consultation tailored to your space and requirements.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Align Energy, Design, and Life
            </h2>
            <p>
              Create a home or office that radiates prosperity, peace, and purpose with Vasterior, your trusted Vastu Shastra Consultant East Delhi. Whether you&apos;re designing a new space or realigning an existing one, we&apos;ll help you achieve the perfect harmony of form, flow, and function.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:spacebuild.india@gamil.com">spacebuild.india@gamil.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="vastu-shastra-consultant-east-delhi" />
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
