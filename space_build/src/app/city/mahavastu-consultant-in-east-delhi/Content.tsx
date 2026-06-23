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
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Introduction to MahaVastu in East Delhi
            </h2>
            <p>
              East Delhi is one of the most vibrant and rapidly growing regions of the National Capital Region (NCR). With modern infrastructure, residential hubs, commercial spaces, and a deep cultural heritage, the area is home to people who seek balance between material progress and spiritual well-being. This is where MahaVastu consultation in East Delhi plays a crucial role. At Vasterior, we bring the timeless wisdom of Vastu Shastra combined with modern MahaVastu practices to help individuals, families, and businesses achieve harmony, prosperity, and success.
            </p>
            <p>
              Our team of certified MahaVastu experts offers personalized solutions tailored to the unique architecture and energy patterns of your home, office, showroom, or industrial unit. With years of experience, we provide results-driven guidance that aligns with your aspirations and removes hidden blockages from your environment.
            </p>

            {/* What is MahaVastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What is MahaVastu?
            </h2>
            <p>
              MahaVastu is an advanced application of the ancient science of Vastu Shastra, designed to create a positive flow of energy in living and working spaces without the need for structural demolition. Unlike traditional methods that often require major construction changes, MahaVastu focuses on subtle yet powerful corrections using colors, symbols, placements, and energy balancing techniques.
            </p>
            <p>
              By identifying energy imbalances in the four directions—North, South, East, and West—MahaVastu consultants provide practical remedies that bring long-lasting transformation. Whether you are facing financial challenges, health concerns, relationship issues, or professional stagnation, MahaVastu provides clear solutions for holistic growth.
            </p>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior for MahaVastu in East Delhi?
            </h2>
            <p>
              At Vasterior, we go beyond generic advice. Our consultation process involves a thorough analysis of your property&apos;s layout, orientation, and energy fields. Here&apos;s why clients across East Delhi trust us:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Certified MahaVastu Consultants:</strong> Our experts are trained in advanced methodologies and follow authentic MahaVastu principles.</li>
              <li><strong>Non-Demolition Remedies:</strong> We provide practical, effective solutions without breaking or rebuilding structures.</li>
              <li><strong>Personalized Guidance:</strong> Every consultation is customized to the client&apos;s goals—be it wealth, health, career, or relationships.</li>
              <li><strong>Proven Results:</strong> Numerous families and businesses in East Delhi have experienced noticeable improvements in their lives after implementing our suggestions.</li>
              <li><strong>Comprehensive Approach:</strong> From homes to offices, showrooms to industries, we cover all types of spaces with equal expertise.</li>
            </ul>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              MahaVastu Services We Offer in East Delhi
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Residential MahaVastu Consultation</h3>
                <p>A home should be a sanctuary of peace and prosperity. Our consultants analyze the layout of your house, flats, or apartments to ensure that every member enjoys harmony, better health, and financial stability.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Commercial & Office Vastu</h3>
                <p>Business growth is directly linked to the energy flow in offices, shops, and showrooms. We help entrepreneurs in East Delhi optimize their spaces for success, team efficiency, and client attraction.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Industrial Vastu Solutions</h3>
                <p>Factories and manufacturing units require special attention to directional placements of machinery, storage, and workflow. Our MahaVastu guidance ensures smoother operations and higher productivity.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Career & Education Vastu</h3>
                <p>For students and professionals, we recommend specific room arrangements, study zones, and symbolic corrections that boost focus, creativity, and career growth.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Health & Relationship Vastu</h3>
                <p>Energy imbalances can cause stress, conflicts, or health problems. Our remedies strengthen positive vibes to improve relationships, mental peace, and physical well-being.</p>
              </div>
            </div>

            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of MahaVastu Consultation
            </h2>
            <p>Choosing MahaVastu consultation in East Delhi with Vasterior offers multiple advantages:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improved financial stability and wealth flow</li>
              <li>Enhanced career and business opportunities</li>
              <li>Better family relationships and harmony at home</li>
              <li>Stress reduction and mental clarity</li>
              <li>Improved health and well-being</li>
              <li>Attracting positivity, peace, and prosperity</li>
            </ul>

            {/* Why East Delhi Residents Prefer MahaVastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why East Delhi Residents Prefer MahaVastu
            </h2>
            <p>
              East Delhi comprises areas such as Laxmi Nagar, Preet Vihar, Mayur Vihar, Shahdara, Vivek Vihar, and Anand Vihar. These are bustling neighborhoods where modern apartments stand alongside traditional homes. With increasing urban density, residents often experience stress, energy blockages, and imbalance in their living spaces. MahaVastu provides a non-invasive, powerful method to restore balance and ensure that homes and offices radiate positivity.
            </p>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Our Consultation Process Works
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Initial Discussion</strong> – Understanding your challenges and goals.</li>
              <li><strong>Property Analysis</strong> – Reviewing layout maps, directions, and room functions.</li>
              <li><strong>On-Site Visit</strong> – Our consultant visits your East Delhi property for deeper evaluation.</li>
              <li><strong>Report & Remedies</strong> – Detailed MahaVastu solutions are provided with clear instructions.</li>
              <li><strong>Follow-Up Support</strong> – Continuous guidance to ensure successful implementation.</li>
            </ul>

            {/* Partner */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior – Your Trusted Partner in MahaVastu
            </h2>
            <p>
              At Vasterior, we believe that every space has the potential to transform lives. With the right MahaVastu approach, your home and workplace can become powerful centers of growth and happiness. Whether you are a family in Mayur Vihar, a student in Laxmi Nagar, or a business owner in Preet Vihar, we are here to help you experience the life-changing impact of MahaVastu.
            </p>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions (FAQs)
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. What makes MahaVastu different from traditional Vastu?</h3>
                <p>MahaVastu emphasizes non-demolition remedies and practical solutions that can be easily applied without altering your property&apos;s structure.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. How soon can I see results after MahaVastu consultation?</h3>
                <p>Many clients notice improvements within weeks, while long-term benefits unfold gradually as energy balance stabilizes.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Do you provide online MahaVastu consultations in East Delhi?</h3>
                <p>Yes, we offer both online and offline consultations for convenience.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Is MahaVastu consultation expensive?</h3>
                <p>Our packages are designed to be affordable and value-driven, depending on the property type and scope of analysis.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Can MahaVastu help with health and relationship issues?</h3>
                <p>Yes, energy balancing through MahaVastu has helped many clients improve relationships, reduce stress, and experience better health.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              📞 Contact Us
            </h2>
            <p>
              Ready to transform your home or office into a center of prosperity and peace? Connect with Vasterior – your trusted MahaVastu Consultant in East Delhi today. Our experts are available to guide you with authentic MahaVastu remedies and personalized solutions.
            </p>
            <div className="space-y-2 mt-4">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> info@spacebuild.com</p>
            </div>
            <p className="mt-4">
              Book your consultation now and experience how the right energy flow can change your life for the better. Whether you are in Laxmi Nagar, Preet Vihar, Mayur Vihar, Shahdara, or Anand Vihar, Vasterior is here to help you create balance, positivity, and prosperity in every corner of your space.
            </p>
          </div>

          <PostNavigation slug="mahavastu-consultant-in-east-delhi" />
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