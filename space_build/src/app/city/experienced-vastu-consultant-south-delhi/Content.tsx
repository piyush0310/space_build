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
            Experienced Vastu Consultant South Delhi &ndash; Bring Balance, Beauty, and Prosperity to Your Space with Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Experience the Art of Energy-Aligned Living<br />
              Every space you live or work in has a rhythm &ndash; an unseen flow of energy that influences your peace, health, and prosperity. When that energy is balanced, life unfolds effortlessly. When it&rsquo;s disturbed, stress, conflict, or stagnation may quietly take over.
            </p>
            <p>
              As the most Experienced Vastu Consultant South Delhi, Vasterior specializes in harmonizing modern spaces with timeless Vastu wisdom. We bring together scientific analysis, intuitive energy understanding, and elegant design integration to transform homes and workplaces into powerful centers of positivity and progress.
            </p>
            <p>
              Whether it&rsquo;s a new residence, luxury villa, office, or commercial establishment &ndash; Vasterior ensures every corner aligns with universal energy, supporting harmony, success, and holistic well-being.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior &ndash; South Delhi&rsquo;s Leading Name in Vastu and Design
            </h2>
            <p>
              Vasterior is a trusted Vastu and interior design consultancy in Delhi NCR, renowned for its refined, research-based approach that unites traditional energy science with modern aesthetics. Our team includes certified Vastu experts, architects, and designers, each with years of experience in transforming spaces across South Delhi&rsquo;s premium neighborhoods &ndash; including Greater Kailash, Vasant Vihar, Defence Colony, and Chhatarpur Farms.
            </p>
            <p>
              We don&rsquo;t just analyze spaces; we reimagine how energy, architecture, and interiors work together to enhance your lifestyle and productivity. At Vasterior, every consultation is built on deep expertise, precision, and an unwavering focus on creating balance without disrupting beauty.
            </p>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior &ndash; The Most Experienced Vastu Consultant South Delhi
            </h2>
            <p>
              Here&rsquo;s why property owners, architects, and developers across Delhi NCR choose Vasterior for Vastu excellence:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Decades of Combined Experience</strong>: Our consultants bring extensive field experience in both Vastu and architectural design.
              </li>
              <li>
                <strong>Science Meets Spirituality</strong>: We interpret Vastu Shastra through geometry, natural light, energy zones, and spatial alignment &ndash; no myths, only logic.
              </li>
              <li>
                <strong>Customized Solutions for Every Space</strong>: Each consultation is tailored to your property&rsquo;s direction, purpose, and energy dynamics.
              </li>
              <li>
                <strong>No Demolition, Only Remedies</strong>: Our corrective methods are non-structural, practical, and visually appealing.
              </li>
              <li>
                <strong>Integration with Luxury Interiors</strong>: Our designs blend seamlessly with your aesthetics while maintaining energetic balance.
              </li>
              <li>
                <strong>Trusted Across South Delhi</strong>: From elite homes to boutique offices, we&rsquo;ve guided countless successful transformations.
              </li>
            </ul>
            <p className="mt-4">
              When you choose Vasterior, you&rsquo;re not just hiring a consultant &ndash; you&rsquo;re partnering with a team that understands how energy shapes prosperity.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu &amp; Interior Services in Delhi NCR
            </h2>
            <p>
              We offer a wide spectrum of Vastu consultation and interior design services crafted for homes, offices, and commercial establishments.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Residential Vastu Consultation</strong>: For apartments, bungalows, and villas &ndash; we analyze room placement, entrances, and directions to enhance peace, health, and financial well-being.
              </li>
              <li>
                <strong>Vastu for Offices &amp; Corporate Spaces</strong>: Our office Vastu consultations focus on improving focus, teamwork, and leadership energy to boost productivity and profits.
              </li>
              <li>
                <strong>Commercial and Retail Vastu</strong>: We help retail stores, showrooms, and business establishments attract more customers and sustain growth through energy alignment.
              </li>
              <li>
                <strong>Vastu for New Constructions</strong>: Our experts collaborate with architects to plan layouts that align with natural elements and Vastu principles from the ground up.
              </li>
              <li>
                <strong>Vastu for Renovations and Existing Properties</strong>: We perform detailed audits and suggest energy corrections without structural changes &ndash; ideal for existing homes or offices.
              </li>
              <li>
                <strong>Interior Design with Vastu Integration</strong>: Our interior experts design elegant, energy-balanced spaces where beauty and harmony coexist effortlessly.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio &ndash; Where Design Meets Direction
            </h2>
            <p>
              Vasterior&rsquo;s portfolio reflects creativity, precision, and transformation across South Delhi and NCR. From luxury homes in Greater Kailash to corporate spaces in Saket and Vasant Kunj, we&rsquo;ve delivered spaces that not only look exceptional but also feel balanced and alive.
            </p>
            <p>Our past projects demonstrate:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Enhanced peace and family harmony in residential homes</li>
              <li>Improved staff performance and profitability in offices</li>
              <li>Balanced, aesthetically rich interiors with strong positive energy flow</li>
            </ul>
            <p className="mt-4">
              Each consultation is an artistic journey where energy design and architectural excellence meet seamlessly.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials &ndash; Experience the Transformation
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &ldquo;Vasterior&rsquo;s Vastu guidance brought clarity and calm to our home. Every room feels lighter and more connected.&rdquo; <br />&ndash; Anjali Mehta, Defence Colony
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &ldquo;We saw real improvement in our office environment after following their recommendations. Truly the most Experienced Vastu Consultant South Delhi.&rdquo; <br />&ndash; Rajiv Sethi, Vasant Vihar
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &ldquo;Professional, detailed, and highly intuitive. Their expertise is unmatched.&rdquo; <br />&ndash; Simran Arora, Chhatarpur Farms
              </blockquote>
            </div>
            <p className="mt-4">
              At Vasterior, every testimonial reflects the same promise &ndash; precision, trust, and transformation through energy alignment.
            </p>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs &ndash; Experienced Vastu Consultant South Delhi
            </h2>

            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">1. Why should I hire an experienced Vastu consultant?</h3>
                <p>Experience ensures that your consultant understands the technical, architectural, and energetic nuances of your property, delivering results that truly work.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">2. Can Vastu corrections be done without changing the structure?</h3>
                <p>Yes. Vasterior&rsquo;s non-structural remedies, like repositioning, color balancing, and energy alignment, offer visible improvements without reconstruction.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">3. Does Vastu apply to modern apartments?</h3>
                <p>Absolutely. Our experts specialize in applying traditional Vastu principles to contemporary layouts in a practical and aesthetic way.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">4. How long does a consultation take?</h3>
                <p>A typical consultation involves site analysis, directional mapping, and customized solutions, generally completed within a few sessions.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">5. How can I book a Vastu consultation with Vasterior?</h3>
                <p>Simply call or email us. Our team will arrange an on-site or online consultation tailored to your property and goals.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior &ndash; Balance Energy, Elevate Living
            </h2>
            <p>
              Let your home or workspace become a source of calm, creativity, and success with Vasterior, the most Experienced Vastu Consultant South Delhi. We combine deep knowledge, architectural insight, and design elegance to help you live in spaces that support every aspect of your growth.
            </p>
            <div className="space-y-2">
              <p>
                <strong>Phone:</strong> +917906086899
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:info@spacebuild.com">info@spacebuild.com</a>
              </p>
              <p>
                Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.
              </p>
            </div>
          </div>
          <PostNavigation slug="experienced-vastu-consultant-south-delhi" />
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
