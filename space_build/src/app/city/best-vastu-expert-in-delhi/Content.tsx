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
            Best Vastu Expert in Delhi – Discover the Power of Perfect Energy with Vasterior
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <p>
              Experience True Balance and Luxury with the Best Vastu Expert in Delhi – Vasterior.<br />
              Every home has a heartbeat – a rhythm shaped by energy, direction, and design. At Vasterior, we help you unlock that harmony through the profound science of Vastu Shastra.<br />
              As the Best Vastu Expert in Delhi, our mission is to transform spaces into havens of prosperity and peace. Whether it&apos;s your dream home or your growing business, Vasterior&apos;s Vastu consultation blends ancient wisdom with modern architectural finesse – ensuring every detail aligns with energy, aesthetics, and intent.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – Redefining Modern Vastu Excellence
            </h2>
            <p>
              Vasterior is a luxury Vastu and interior design studio in Delhi NCR, renowned for curating spaces that feel as good as they look.<br />
              Our approach combines the spiritual depth of Vastu Shastra with the sophistication of contemporary design, creating homes and offices that radiate beauty, balance, and bliss.<br />
              Our team comprises certified Vastu consultants, architects, and interior stylists with over a decade of experience serving clients across Delhi NCR.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD – The Best Vastu Expert in Delhi
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>Certified Expertise: Led by highly qualified Vastu professionals with years of real-world application and results.</li>
              <li>Holistic Space Analysis: We study direction, energy flow, and layout to create spaces that feel balanced and inviting.</li>
              <li>Luxury Aesthetic Integration: Every remedy, color, or placement suggestion aligns with your décor and lifestyle.</li>
              <li>Non-Destructive Corrections: Vasterior specializes in energy enhancement without structural changes.</li>
              <li>Exclusive Client Experience: Personalized consultations with a focus on confidentiality, clarity, and positive outcomes.</li>
              <li>Proven Transformations: Hundreds of successful residential and commercial projects across Delhi NCR stand as proof of our expertise.</li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>Home Vastu Consultation – Bring harmony and abundance into your home. We assess entrances, room placements, and energy directions to ensure each corner radiates positivity.</li>
              <li>Vastu for Office & Commercial Spaces – Boost productivity, focus, and business growth with expert Vastu solutions designed for modern workplaces across Delhi NCR.</li>
              <li>Vastu for New Constructions – Get your plan evaluated by Vasterior&apos;s experts to ensure the perfect alignment of elements from the start.</li>
              <li>Luxury Interior Designing with Vastu – Our interior team designs elegant, balanced spaces where energy meets art.</li>
              <li>Online & On-Site Consultations – Whether through detailed layout analysis or an on-site visit, we deliver expert guidance that transforms your space with ease.</li>
            </ul>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Where Energy Meets Elegance
            </h2>
            <p>
              Vasterior&apos;s work stands as a symbol of refined artistry and powerful Vastu alignment.<br />
              From luxury residences in South Delhi to modern offices in Gurgaon, our portfolio showcases an impeccable blend of function, flow, and energy balance.<br />
              Each project reflects our belief that a perfectly designed space isn&apos;t just about luxury – it&apos;s about living in resonance with the universe.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – The Trust Behind Our Expertise
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior brought magic into our home. The energy shifted completely after their consultation. The team&apos;s precision and professionalism are unmatched.&quot; – Aditi Verma, Delhi NCR
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We were searching for the Best Vastu Expert in Delhi, and Vasterior exceeded every expectation. Our office now feels balanced and productive.&quot; – Rahul Mehta, Connaught Place
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Their blend of luxury design and authentic Vastu is incredible. The transformation was both visual and energetic.&quot; – Simran Bhatia, South Delhi
              </blockquote>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Best Vastu Expert in Delhi
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Who is considered the Best Vastu Expert in Delhi?</h3>
                <p>Vasterior is widely recognized as the Best Vastu Expert in Delhi for its holistic approach merging traditional Vastu Shastra with luxury modern design.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How can Vastu improve my home or office energy?</h3>
                <p>Vastu aligns your surroundings with natural elements, enhancing peace, prosperity, and productivity through directional harmony and space balance.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Are Vastu corrections expensive or require reconstruction?</h3>
                <p>No, Vasterior&apos;s methods focus on non-structural remedies such as décor alignment, mirror placement, color adjustments, and symbolic enhancements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Does Vasterior provide Vastu tips for home interiors?</h3>
                <p>Yes, we offer personalized Vastu tips for home interiors, including suggestions on layout, lighting, and energy flow.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">How can I schedule a consultation with the Best Vastu Expert in Delhi?</h3>
                <p>Simply reach out to Vasterior by phone or email for a smooth and confidential process.</p>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Where Energy and Design Unite
            </h2>
            <div className="space-y-2">
              <p>
                Experience the transformative power of true balance with Vasterior, the Best Vastu Expert in Delhi.<br />
                Phone: +917906086899<br />
                Email: spacebuild.india@gmail.com
              </p>
            </div>
          </div>
          <PostNavigation slug="best-vastu-expert-in-delhi" />
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