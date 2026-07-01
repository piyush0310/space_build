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
            Commercial Vastu Consultant Delhi NCR – Empower Your Business Spaces with Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Accelerate Success with Vasterior – The Leading Commercial Vastu Consultant Delhi NCR. Every business space carries energy - an invisible yet powerful force that influences productivity, prosperity, and peace of mind. As a top-rated Commercial Vastu Consultant Delhi NCR, Vasterior helps organizations, entrepreneurs, and corporate leaders unlock the full potential of their spaces through strategic Vastu alignment.
            </p>
            <p>
              Our team of certified Vastu professionals combines ancient Indian Vastu wisdom with modern architectural planning, ensuring that your office, retail store, or industrial unit radiates positive energy and supports your business goals.
            </p>
            <p>
              At Vasterior, we don&apos;t just design spaces; we engineer environments for success, balance, and enduring prosperity.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – Where Energy and Architecture Meet Business Growth
            </h2>
            <p>
              Vasterior is a luxury Vastu and interior design consultancy in Delhi NCR, specializing in energy-aligned design solutions for residential and commercial environments. With a multidisciplinary team of certified Vastu experts, architects, and interior stylists, Vasterior has earned its reputation as a trusted partner for businesses that seek both aesthetic brilliance and energetic balance.
            </p>
            <p>
              Our commercial Vastu consultations are designed to optimize direction, structure, and layout to align with universal energies - empowering decision-making, focus, and financial stability. Whether it&apos;s a corporate office, startup workspace, retail showroom, or manufacturing unit, we ensure every square foot of your property supports your business objectives harmoniously.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD – The Preferred Commercial Vastu Consultant Delhi NCR
            </h2>
            <p>
              Vasterior stands at the intersection of spiritual science and business strategy, helping you achieve growth that is sustainable, stable, and stress-free. Here&apos;s why we&apos;re recognized as the leading Commercial Vastu Consultant in Delhi NCR:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Vastu Professionals</strong>: Our experts are qualified practitioners of authentic Vastu Shastra with hands-on experience in commercial design.</li>
              <li><strong>Customized Business Solutions</strong>: We create tailored strategies that suit your specific commercial layout, industry type, and energy goals.</li>
              <li><strong>Architectural Expertise</strong>: Seamlessly integrating Vastu with modern corporate architecture for functionally aesthetic results.</li>
              <li><strong>Non-Disruptive Corrections</strong>: We provide simple, practical remedies that improve energy flow without affecting existing infrastructure.</li>
              <li><strong>Result-Oriented Approach</strong>: Our clients often report enhanced team focus, smoother operations, and consistent business growth after consultation.</li>
              <li><strong>Trusted by Leading Enterprises</strong>: From boutique startups to large corporates, Vasterior is a name synonymous with balance, professionalism, and trust.</li>
            </ul>
            <p className="mt-4">
              At Vasterior, your success is designed by energy and guided by expertise.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              Our services are built to enhance the flow of energy and productivity in all kinds of commercial environments.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Vastu for Offices and Workspaces</strong>: We analyze directions, desk placements, lighting, and energy zones to promote better focus, leadership, and collaboration among employees.
              </li>
              <li>
                <strong>Vastu for Retail and Showrooms</strong>: For retail outlets, product display, entrance alignment, and customer movement are optimized to enhance visibility, engagement, and sales potential.
              </li>
              <li>
                <strong>Vastu for Industrial Units and Factories</strong>: We help manufacturing spaces achieve operational efficiency and smoother workflows by aligning production areas, machinery placement, and energy balance.
              </li>
              <li>
                <strong>Corporate Interior Design with Vastu Alignment</strong>: Vasterior creates luxury business interiors that blend style with energy balance, ensuring your brand presence reflects harmony and sophistication.
              </li>
              <li>
                <strong>Pre-Construction Vastu Planning</strong>: Before breaking ground, our experts analyze your commercial plot and design layout to ensure energy efficiency and prosperity from the very start.
              </li>
              <li>
                <strong>Online & On-Site Consultation Services</strong>: Whether you prefer in-person guidance or remote consultation, Vasterior offers flexible service options across Delhi NCR for businesses of all scales.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Proven Results, Powerful Energy
            </h2>
            <p>
              Vasterior&apos;s portfolio spans corporate offices, co-working hubs, boutiques, retail stores, hotels, and industrial facilities across Delhi NCR. Each project demonstrates the perfect union of precision, creativity, and positive energy flow. Our designs are not just visually captivating but strategically aligned to foster clarity, confidence, and commercial success.
            </p>
            <p>
              Our commercial clients consistently report improvements in team performance, client relations, and overall workplace morale after implementing our Vastu recommendations - proof that good energy drives good business.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Trust Built Through Transformation
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior completely redefined how our office feels and functions. The energy shift was immediate - productivity and morale went up significantly.&quot; – Rohit Mehra, Connaught Place
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Their Vastu consultation for our retail outlet brought noticeable improvements in customer engagement and sales. They truly are the best Commercial Vastu Consultant Delhi NCR.&quot; – Anita Kapoor, Gurgaon
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Professional, elegant, and insightful - Vasterior&apos;s approach to commercial Vastu is both practical and visionary.&quot; – Rajiv Khanna, Noida
              </blockquote>
            </div>
            <p className="mt-4">
              Our success stories reflect our commitment to trust, transformation, and tangible results.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Commercial Vastu Consultant Delhi NCR
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What is the role of a Commercial Vastu Consultant in Delhi NCR?</h3>
                <p>A Commercial Vastu Consultant ensures that your business space is aligned with positive energy principles, promoting growth, harmony, and success.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. How does Vastu impact business performance?</h3>
                <p>Proper Vastu alignment enhances productivity, teamwork, financial stability, and mental clarity - all key drivers of business success.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can Vastu corrections be done without structural changes?</h3>
                <p>Yes. Vasterior specializes in non-destructive remedies using color schemes, seating arrangements, lighting, and symbolic placements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. What types of businesses can benefit from commercial Vastu?</h3>
                <p>Vastu can enhance energy in all business types - from corporate offices and retail showrooms to hospitality and industrial spaces.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How do I book a consultation with Vasterior?</h3>
                <p>Simply call or email us to schedule your personalized session with our Commercial Vastu Consultant Delhi NCR. Our team will guide you step-by-step.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Design the Energy of Your Success
            </h2>
            <p>
              Your business deserves a space that works as hard as you do. With Vasterior, the trusted Commercial Vastu Consultant Delhi NCR, you can transform your workspace into a magnet for productivity, prosperity, and peace. Let us align your space for success - where modern business meets timeless energy science.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:spacebuild.india@gmail.com">spacebuild.india@gmail.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="commercial-vastu-consultant-delhi-ncr" />
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
