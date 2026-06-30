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
            Vastu Remedies For Homes Delhi – Transform Your Living Space with Vasterior&apos;s Expert Guidance
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Balance Your Home, Balance Your Life – Discover the Power of Vastu Remedies with Vasterior. Your home is more than walls and décor - it&apos;s a living, breathing energy field that shapes your mood, health, relationships, and success. When the energy of your space flows in harmony, everything in life aligns effortlessly.
            </p>
            <p>
              As a leading expert in Vastu Remedies For Homes Delhi, Vasterior specializes in transforming residential spaces into centers of balance and positivity - without requiring any structural changes.
            </p>
            <p>
              Whether you&apos;ve just moved into a new home or are looking to correct energy imbalances in your existing one, our certified Vastu consultants provide scientifically designed, aesthetically integrated solutions that harmonize your environment and enhance your lifestyle.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – Designing Energy, Designing Life
            </h2>
            <p>
              Vasterior is a luxury Vastu and interior design consultancy based in Delhi NCR, dedicated to creating homes that exude peace, prosperity, and aesthetic elegance. Our team of certified Vastu experts, architects, and interior designers brings together years of experience in combining traditional Vastu Shastra principles with modern architecture and design sensibility.
            </p>
            <p>
              We believe that every home has its unique energy pattern - and our role is to fine-tune that energy to align with your personal goals, whether it&apos;s health, harmony, or financial growth.
            </p>
            <p>
              With hundreds of successful transformations across Delhi, Vasterior has become synonymous with authentic, effective, and luxurious Vastu consultancy.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD for Vastu Remedies For Homes Delhi
            </h2>
            <p>
              Choosing Vasterior means choosing a partner who understands both the science of space and the art of living. Here&apos;s what makes us Delhi&apos;s preferred Vastu consultancy:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Expertise</strong>: Our consultants are qualified Vastu professionals with deep knowledge of energy mapping and architectural design.</li>
              <li><strong>Non-Structural Remedies</strong>: We offer easy, aesthetic solutions - no demolitions or major renovations needed.</li>
              <li><strong>Customized Home Solutions</strong>: Every remedy is tailored to your specific layout, direction, and life goals.</li>
              <li><strong>Luxury Aesthetic Integration</strong>: Our Vastu adjustments enhance both your home&apos;s energy and its visual appeal.</li>
              <li><strong>Scientific & Practical Approach</strong>: We focus on energy balance that aligns with real-world architecture and lifestyle needs.</li>
              <li><strong>Trusted by Homeowners Across Delhi NCR</strong>: From apartments in South Delhi to villas in Gurgaon, our expertise has elevated hundreds of homes.</li>
            </ul>
            <p className="mt-4">
              At Vasterior, we don&apos;t just correct spaces - we elevate energies and help you experience true harmony in your surroundings.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              At Vasterior, we offer a range of holistic and practical Vastu solutions to create homes that are both aesthetically stunning and energetically balanced.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Vastu Remedies for Existing Homes</strong>: We specialize in identifying and correcting Vastu imbalances through direction-based remedies such as color harmonization, placement correction, and elemental balancing.
              </li>
              <li>
                <strong>Vastu for New Homes and Renovations</strong>: Building or renovating? Our experts guide you through design, layout, and construction plans to ensure the home aligns with natural energy principles from the start.
              </li>
              <li>
                <strong>Home Energy Mapping & Space Balancing</strong>: Our consultants analyze energy grids within your space to identify stress zones and optimize flow through customized solutions.
              </li>
              <li>
                <strong>Interior Design with Vastu Alignment</strong>: We merge interior luxury with Vastu principles - ensuring every color, texture, and furniture piece supports harmony and beauty.
              </li>
              <li>
                <strong>Online & On-Site Consultations</strong>: Whether you&apos;re in Delhi or elsewhere in India, Vasterior provides both virtual and in-person Vastu consultations tailored to your convenience.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Transforming Homes into Havens
            </h2>
            <p>
              Vasterior&apos;s residential portfolio across Delhi NCR speaks of transformation, precision, and purpose. From contemporary apartments in East Delhi to luxury villas in South Delhi, our team has redesigned energies in homes of all sizes and styles. Clients often describe their experience as &quot;a visible shift in peace, health, and happiness&quot;.
            </p>
            <p>
              Each project showcases our core philosophy - beauty with balance, design with direction, and art with energy. Our expertise ensures that your home doesn&apos;t just look exceptional - it feels extraordinary.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Real Stories of Positive Change
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior changed the energy of our home without breaking a single wall. Simple Vastu remedies brought incredible calm and prosperity.&quot; – Pooja Mehra, South Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We had constant disputes and restlessness at home. After Vasterior&apos;s consultation, everything started falling into place. The energy feels peaceful now.&quot; – Rohit Khanna, East Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Their remedies were elegant and practical - no drastic changes, just intelligent energy alignment. Highly recommended for Vastu Remedies For Homes Delhi.&quot; – Simran Kaur, West Delhi
              </blockquote>
            </div>
            <p className="mt-4">
              Our clients trust us not just for results, but for the empathy, professionalism, and precision we bring to every project.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Remedies For Homes Delhi
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What are Vastu remedies for homes?</h3>
                <p>Vastu remedies are non-structural corrections designed to balance energy flow in your home using color, placement, and elemental alignment techniques.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do Vastu remedies really work?</h3>
                <p>Yes. When implemented correctly by certified experts like Vasterior, these remedies can bring noticeable improvements in peace, prosperity, and family harmony.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can I apply Vastu remedies in an apartment or flat?</h3>
                <p>Absolutely. Our team provides customized Vastu remedies suitable for all property types - including builder floors, apartments, and villas.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Do Vastu remedies require reconstruction?</h3>
                <p>No. Our focus is on practical and elegant solutions such as mirror placement, color adjustments, and directional balancing - no major renovations needed.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I book a consultation with Vasterior?</h3>
                <p>Simply contact us via phone or email, and we&apos;ll schedule a personalized Vastu consultation for your home anywhere in Delhi NCR.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Redefine Your Home&apos;s Energy
            </h2>
            <p>
              Experience a life of harmony, abundance, and positivity with Vasterior, your trusted expert for Vastu Remedies For Homes Delhi. Let our specialists help you create a living space that nurtures peace, prosperity, and happiness - all through the power of balanced energy.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:spacebuild.india@gamil.com">spacebuild.india@gamil.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="vastu-remedies-for-homes-delhi" />
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
