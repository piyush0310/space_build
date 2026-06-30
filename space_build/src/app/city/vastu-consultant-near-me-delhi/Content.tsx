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
            Vastu Consultant Near Me Delhi – Elevate Your Space with Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Transform Your Home&apos;s Energy with Vasterior – The Leading Vastu Consultant Near Me Delhi
            </p>
            <p>
              Your home is more than just walls and décor - it&apos;s an energy field that shapes your peace, prosperity, and success. At Vasterior, we bring the ancient wisdom of Vastu Shastra into modern living. Whether you&apos;re designing a new home, revamping your interiors, or rebalancing your office energies, our Vastu Consultant Near Me Delhi services help you create a space that radiates positivity, abundance, and timeless elegance.
            </p>
            <p>
              Our approach goes beyond conventional Vastu advice - we blend spiritual balance with architectural precision, crafting environments that look luxurious and feel deeply aligned.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – Where Design Meets Divine Energy
            </h2>
            <p>
              Vasterior is a premium Vastu and interior consultancy firm in Delhi NCR, renowned for transforming ordinary spaces into refined sanctuaries of balance and prosperity.
            </p>
            <p>
              With a team of certified Vastu experts in Delhi, experienced architects, and interior stylists, we combine scientific Vastu principles with luxury design sensibilities.
            </p>
            <p>
              From analyzing directions and layouts to recommending aesthetic corrections and décor enhancements, we ensure that every detail contributes to harmony and visual excellence. Vasterior&apos;s foundation lies in authentic expertise, modern methodology, and absolute client trust.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Vastu Consultant Near Me Delhi
            </h2>
            <p>
              When you seek perfection, you need a partner who understands both energy and elegance. Here&apos;s why discerning homeowners and businesses across Delhi NCR choose Vasterior:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>Certified Vastu Experts: Our consultants are qualified and deeply experienced in traditional Vastu Shastra applications for modern spaces.</li>
              <li>Customized Vastu Solutions: Every home and office has a unique energy map - we offer personalized remedies that are practical, aesthetic, and effective.</li>
              <li>Luxury-Centric Approach: We blend Vastu compliance with premium design, ensuring beauty and energy flow coexist seamlessly.</li>
              <li>Scientific & Spiritual Balance: Our recommendations are rooted in directional science, cosmic energy mapping, and architectural harmony.</li>
              <li>Proven Track Record: Over 500+ clients in Delhi NCR trust Vasterior for their home and business transformations.</li>
              <li>Confidential, Transparent Service: Every consultation is handled with utmost discretion, clarity, and dedication.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              At Vasterior, we offer end-to-end Vastu consultation and design integration services for residential and commercial spaces across Delhi NCR.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>Home Vastu Consultation - Enhance the positive flow of energy in your residence with tailored Vastu recommendations for layout, entrances, bedrooms, kitchens, and living zones.</li>
              <li>Vastu for Offices and Businesses - From workspace alignment to directional seating, we optimize your office energy for productivity, growth, and financial stability.</li>
              <li>Vastu for New Constructions - Planning your dream home? Our pre-construction guidance ensures every element - from plot orientation to room placement - aligns with prosperity principles.</li>
              <li>Interior Styling with Vastu Alignment - We curate luxury interiors that harmonize aesthetics with energy, using colors, materials, and décor aligned to Vastu Shastra.</li>
              <li>On-Site & Online Consultations - Whether you&apos;re in Delhi or anywhere in India, Vasterior offers in-person and digital Vastu sessions for your convenience.</li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio of Perfection – Crafting Balanced, Beautiful Spaces
            </h2>
            <p>
              Vasterior&apos;s portfolio showcases luxury residences, corporate offices, boutique hotels, and retail spaces designed with precision, grace, and energetic integrity.
            </p>
            <p>
              Each project reflects our belief that true beauty emerges when energy and design flow as one.
            </p>
            <p>
              Our clients describe their experience as transformative - spaces that don&apos;t just look stunning but also feel divinely right. The Vasterior touch transforms architecture into art, and interiors into inspiration.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – The Trust Behind Our Success
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior completely changed the aura of my home. Every corner feels lighter and more peaceful. Their approach is deeply insightful yet incredibly refined.&quot; - Neha Kapoor, South Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Our office started seeing noticeable improvements in team productivity and energy soon after Vasterior&apos;s consultation. Their precision and professionalism are unmatched.&quot; - Rohit Malhotra, Gurgaon
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior is not just a Vastu consultant; they are energy architects. Their designs have a soul.&quot; - Priya Sharma, Delhi NCR
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Consultant Near Me Delhi
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">What makes Vasterior the best Vastu Consultant Near Me Delhi?</h3>
                <p>Vasterior stands out for combining authentic Vastu Shastra principles with luxurious, modern design. Our personalized approach ensures every client experiences visible transformation in energy and ambiance.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do I need to demolish walls for Vastu corrections?</h3>
                <p>Not at all. We specialize in non-structural Vastu remedies, using color schemes, mirror placements, and directional adjustments that preserve your interiors beautifully.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How is a home Vastu consultation conducted?</h3>
                <p>Our expert visits your site or evaluates your layout plan online, studies directional energies, and provides practical, elegant recommendations for maximum harmony.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can Vasterior provide Vastu for office spaces in Delhi NCR?</h3>
                <p>Yes. We offer customized Vastu services for offices, startups, retail spaces, and corporates across Delhi, Gurgaon, and Noida.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How do I book a Vastu consultation with Vasterior?</h3>
                <p>Simply call us or email your requirement. Our team will schedule your session and guide you through the process.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior Today – Align Luxury with Energy
            </h2>
            <p>
              Experience the art of balanced living with the most trusted Vastu Consultant Near Me Delhi.
            </p>
            <p>
              Whether you&apos;re building your dream home or revamping your workspace, Vasterior brings cosmic harmony into modern architecture - elegantly and effortlessly.
            </p>
            <div className="space-y-2 mt-4">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gamil.com</p>
            </div>
            <p className="mt-4">
              Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.
            </p>
          </div>
          <PostNavigation slug="vastu-consultant-near-me-delhi" />
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
