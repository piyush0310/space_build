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
          

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Introduction */}
            <p>
              East Delhi is a dynamic region, known for its mix of residential communities, educational hubs, commercial markets, and business centers. With such diversity, the need for balanced spaces that support prosperity, health, and harmony is stronger than ever. This is where the expertise of a MahaVastu Acharya in East Delhi becomes invaluable.
            </p>
            <p>
              At Vasterior, we bring the wisdom of MahaVastu through certified Acharyas who guide individuals, families, and organizations to transform their spaces into centers of positive energy. Whether it&apos;s a home, office, retail store, or industrial setup, our MahaVastu Acharyas analyze every detail and provide practical, non-demolition remedies that create a lasting impact.
            </p>

            {/* Who is a MahaVastu Acharya */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Who is a MahaVastu Acharya?
            </h2>
            <p>
              A MahaVastu Acharya is not just a consultant but a learned guide who combines the ancient science of Vastu Shastra with modern MahaVastu principles. Trained extensively in energy mapping, direction analysis, and advanced MahaVastu techniques, an Acharya goes deeper than standard consultations.
            </p>
            <p>
              The Acharya helps identify hidden imbalances in the environment, addresses challenges related to finances, career, health, or relationships, and provides remedies that align with the natural energy flow. Their role is to empower people with actionable solutions that create harmony between individuals and their surroundings.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD&apos;s MahaVastu Acharya in East Delhi?
            </h2>
            <p>
              At Vasterior, we believe every client deserves authentic guidance. Our MahaVastu Acharyas stand out because of their:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Expert Training & Certification</strong> – Backed by rigorous study and years of practice in MahaVastu methodology.</li>
              <li><strong>Holistic Approach</strong> – Focusing not only on structural layouts but also on emotional, mental, and spiritual well-being.</li>
              <li><strong>Non-Demolition Remedies</strong> – Practical corrections using colors, placements, symbols, and energy balancing without breaking structures.</li>
              <li><strong>Client-Centric Solutions</strong> – Tailored guidance based on personal goals such as wealth creation, career growth, health, or family peace.</li>
              <li><strong>Proven Success Stories</strong> – Numerous residents and businesses in East Delhi have experienced transformation through our Acharyas&apos; guidance.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Services Offered by MahaVastu Acharya in East Delhi
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Home Energy Balancing</h3>
                <p>Our Acharyas ensure your home radiates peace, happiness, and prosperity by aligning every room with positive directional energy.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Business & Office Vastu</h3>
                <p>For entrepreneurs, startups, and corporate offices, we create energy layouts that attract success, boost productivity, and strengthen client relations.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Industrial MahaVastu Guidance</h3>
                <p>From factory floors to warehouses, our Acharyas design flow systems that improve efficiency, reduce wastage, and increase output.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Educational & Career Vastu</h3>
                <p>Students and professionals in East Delhi benefit from customized guidance that sharpens focus, removes distractions, and enhances achievement.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Health & Relationship Harmony</h3>
                <p>Our remedies improve family bonding, reduce conflicts, and promote physical and emotional well-being by correcting subtle energy blocks.</p>
              </div>
            </div>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Consulting a MahaVastu Acharya
            </h2>
            <p>When you consult a MahaVastu Acharya in East Delhi through Vasterior, you unlock:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Financial growth and improved cash flow</li>
              <li>Better decision-making and career advancements</li>
              <li>Peaceful family relationships and marital harmony</li>
              <li>Enhanced concentration, focus, and creativity</li>
              <li>Relief from chronic stress and health concerns</li>
              <li>A positive environment that attracts prosperity and good fortune</li>
            </ul>

            {/* Why East Delhi Residents Rely on MahaVastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why East Delhi Residents Rely on MahaVastu
            </h2>
            <p>
              East Delhi, with areas like Laxmi Nagar, Preet Vihar, Mayur Vihar, Shahdara, Vivek Vihar, and Anand Vihar, is a hub of both residential growth and business expansion. However, rapid urbanization often leads to cramped layouts, energy imbalances, and stress. A MahaVastu Acharya in East Delhi ensures these challenges are resolved with effective remedies, creating harmony in apartments, bungalows, offices, and commercial complexes without structural alterations.
            </p>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              The Consultation Journey with Vasterior&apos;s Acharya
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Understanding Your Needs</strong> – Initial discussion about issues and aspirations.</li>
              <li><strong>Property Assessment</strong> – Reviewing architectural layouts, maps, and directional alignments.</li>
              <li><strong>On-Site Visit</strong> – Detailed inspection to identify energy blocks.</li>
              <li><strong>Customized Remedies</strong> – Offering corrections using colors, placements, and symbols.</li>
              <li><strong>Follow-Up Guidance</strong> – Continuous support to ensure remedies deliver lasting results.</li>
            </ul>

            {/* Commitment */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Commitment
            </h2>
            <p>
              At Vasterior, we don&apos;t just offer consultation—we offer transformation. Our MahaVastu Acharyas are dedicated to helping individuals and businesses in East Delhi live healthier, wealthier, and more fulfilling lives by aligning their spaces with universal energy principles. Whether you are a homeowner in Mayur Vihar, a student in Laxmi Nagar, or a business owner in Preet Vihar, our solutions are designed to fit your lifestyle and needs.
            </p>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions (FAQs)
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. How is a MahaVastu Acharya different from a regular Vastu consultant?</h3>
                <p>A MahaVastu Acharya is a certified expert trained in advanced MahaVastu techniques, offering deeper insights and precise remedies compared to general consultants.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Do Acharyas provide remedies without demolition?</h3>
                <p>Yes, our Acharyas specialize in non-demolition solutions using practical, symbolic, and color-based methods.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can an Acharya help with business growth in East Delhi?</h3>
                <p>Absolutely. From offices to showrooms, our Acharyas provide remedies that enhance productivity, attract clients, and ensure steady growth.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Are online consultations available?</h3>
                <p>Yes, we provide both online and offline MahaVastu consultations to serve clients across East Delhi.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How long does it take to see results after remedies?</h3>
                <p>Results may begin within weeks, while long-term benefits gradually unfold as the energy balance stabilizes.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Us
            </h2>
            <p>
              If you are seeking clarity, prosperity, and harmony in your life, connect with Vasterior – your trusted MahaVastu Acharya in East Delhi. Our certified experts are ready to guide you with proven methods and effective remedies tailored to your needs.
            </p>
            <div className="space-y-2 mt-4">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gmail.com</p>
            </div>
            <p className="mt-4">
              Book your consultation today and experience the transformative power of MahaVastu with Vasterior. Whether you are in Laxmi Nagar, Mayur Vihar, Preet Vihar, or any part of East Delhi, our team is here to support your journey towards positive energy and holistic well-being.
            </p>
          </div>
          <PostNavigation slug="mahavastu-acharya-in-east-delhi" />
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