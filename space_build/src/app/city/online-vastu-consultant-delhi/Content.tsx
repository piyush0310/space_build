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
            Online Vastu Consultant Delhi – Transform Your Space with Virtual Expertise by Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Bring Balance, Prosperity, and Peace Home – Wherever You Are. In today&apos;s fast-paced digital world, finding the right Vastu guidance shouldn&apos;t be limited by distance or time. With Vasterior&apos;s Online Vastu Consultation services, you can now access Delhi&apos;s most trusted experts - anytime, anywhere.
            </p>
            <p>
              As the leading Online Vastu Consultant Delhi, Vasterior combines ancient Vastu Shastra principles with modern digital tools to evaluate, analyze, and harmonize your living or working space - virtually.
            </p>
            <p>
              Whether you&apos;re planning a new home, designing an office, or improving an existing property, our online Vastu experts help you achieve balance, abundance, and positive energy - all from the comfort of your home.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – The Future of Energy-Aligned Living
            </h2>
            <p>
              Vasterior is a premium Vastu and interior design consultancy in Delhi NCR, recognized for its scientific, practical, and aesthetic approach to space energy alignment. Our team consists of certified Vastu experts, architects, and interior designers who specialize in creating spaces that are not only beautiful but also energetically balanced.
            </p>
            <p>
              With the growing demand for convenience and accuracy, we developed a seamless Online Vastu Consultation system - where clients can share floor plans, images, and videos for real-time analysis and personalized guidance.
            </p>
            <p>
              Through virtual consultations, Vasterior has empowered hundreds of clients across India and abroad to transform their spaces into zones of prosperity, peace, and purpose - without geographical boundaries.
            </p>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior as Your Online Vastu Consultant Delhi
            </h2>
            <p>
              Choosing the right Vastu consultant can redefine your home and lifestyle. Here&apos;s why Vasterior stands out as a trusted name for Online Vastu Consultation in Delhi NCR:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Vastu Experts</strong>: Our consultants are professionally trained and certified with years of experience across residential and commercial projects.</li>
              <li><strong>Accurate Digital Analysis</strong>: Using floor plans, photographs, and digital mapping, we assess energy zones and directions with precision.</li>
              <li><strong>Convenient & Time-Saving</strong>: Get professional consultation without travel - perfect for busy homeowners, NRIs, and professionals.</li>
              <li><strong>Customized Remedies</strong>: We provide simple, non-structural, and aesthetic Vastu corrections that suit modern apartments and villas alike.</li>
              <li><strong>Affordable & Transparent Pricing</strong>: Expert guidance at accessible rates with no hidden fees.</li>
              <li><strong>Trusted Across Delhi NCR</strong>: Hundreds of satisfied clients in areas like South Delhi, Dwarka, Noida, and Gurugram have experienced visible results with our online services.</li>
            </ul>
            <p className="mt-4">
              At Vasterior, we bring the power of Vastu science directly to your screen - offering expertise that fits your schedule, lifestyle, and budget.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              At Vasterior, we deliver comprehensive Vastu and design solutions for homes, offices, and commercial spaces - both online and offline.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Online Home Vastu Consultation</strong>: Get personalized guidance on your home layout, entrances, and room placements to attract peace, prosperity, and health - all through a video call and digital blueprint analysis.
              </li>
              <li>
                <strong>Online Office & Commercial Space Vastu</strong>: Boost productivity, leadership, and business growth with customized energy alignment for your office, shop, or workspace - virtually guided by our experts.
              </li>
              <li>
                <strong>Vastu for Apartments & Builder Floors</strong>: Compact layouts or high-rise living? Our experts provide apartment-specific remedies that work without breaking walls or altering your interiors.
              </li>
              <li>
                <strong>Vastu for New Constructions</strong>: Planning to build a new property? We collaborate with your architect to ensure every directional and elemental aspect supports your future success.
              </li>
              <li>
                <strong>Interior Design Consultation with Vastu Integration</strong>: Our interior designers blend luxury aesthetics with energy flow - helping you design elegant, functional, and Vastu-aligned spaces.
              </li>
              <li>
                <strong>Global Online Consultations</strong>: No matter where you live, our online sessions make Vastu expertise accessible globally - with professional precision and cultural adaptability.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Transformations That Speak for Themselves
            </h2>
            <p>
              Every successful consultation at Vasterior reflects our deep understanding of space, energy, and design. Our online Vastu consultations have guided clients across Delhi, Mumbai, Dubai, Singapore, and London, proving that distance is no barrier to transformation.
            </p>
            <p>
              We&apos;ve worked on everything from small apartments to multi-level villas, corporate offices, and retail stores - each project customized for energetic harmony, aesthetic appeal, and real-world practicality. At Vasterior, our results are measurable not just in balance - but in the improved quality of life our clients experience.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Real Experiences, Real Transformations
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;I consulted Vasterior online for our flat in South Delhi. Their process was professional and incredibly easy - we noticed positive changes within a few weeks.&quot; – Amit Kapoor, Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;The team explained Vastu through video consultation with clarity. No unnecessary rituals - just intelligent, science-based guidance.&quot; – Sneha Bansal, Gurugram
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;I live abroad and took an online Vastu consultation for my Delhi property. Everything was handled smoothly, and the remedies were simple yet powerful.&quot; – Rohit Mehta, Dubai
              </blockquote>
            </div>
            <p className="mt-4">
              Vasterior&apos;s online clients consistently praise our professionalism, precision, and genuine results - proof that energy alignment knows no boundaries.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Online Vastu Consultant Delhi
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. How does online Vastu consultation work?</h3>
                <p>You share your floor plan, site photos, and layout details with our team. Through a video call, our experts analyze the directions, energy flow, and balance to suggest customized remedies.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Is online Vastu consultation as effective as in-person consultation?</h3>
                <p>Yes, absolutely. Our online consultations follow the same detailed process as in-person visits, ensuring accuracy and reliability.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. What information do I need to provide for online consultation?</h3>
                <p>Basic property details such as the floor plan, entrance direction, photographs, and purpose of the space (home, office, etc.) are sufficient.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Are the remedies easy to apply in apartments or rented homes?</h3>
                <p>Yes. Our remedies are completely non-destructive - focusing on element balance, color, décor, and placements rather than construction changes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I schedule an online Vastu consultation with Vasterior?</h3>
                <p>Simply call or email us, and our team will guide you through the process and schedule a session at your convenience.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Energy Solutions for the Modern World
            </h2>
            <p>
              Balance your space, energy, and lifestyle effortlessly with Vasterior, your trusted Online Vastu Consultant Delhi. Whether you&apos;re planning a new home or wish to rebalance your existing one, our certified experts are just a click away - ready to help you create a life of peace, progress, and prosperity.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:info@spacebuild.com">info@spacebuild.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="online-vastu-consultant-delhi" />
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
