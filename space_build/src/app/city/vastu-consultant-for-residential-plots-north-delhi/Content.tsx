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
            Vastu Consultant For Residential Plots North Delhi – Build Your Dream Home on Energetic Foundations with Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Shape Your Future from the Foundation – Choose Vasterior, the Leading Vastu Consultant For Residential Plots North Delhi. Every home begins with a plot - and every plot carries a unique vibration that shapes the energy of the life built upon it. Selecting or designing your residential plot according to Vastu Shastra can make the difference between a peaceful, prosperous life and constant imbalance.
            </p>
            <p>
              At Vasterior, we specialize in Vastu consultation for residential plots in North Delhi, guiding homeowners, architects, and builders in identifying, designing, and optimizing land in alignment with the five natural elements - earth, water, fire, air, and space.
            </p>
            <p>
              Our goal is simple yet powerful: to ensure your home radiates positivity, stability, and abundance right from its foundation. Whether you are choosing land or planning a new villa, Vasterior&apos;s Vastu expertise helps you make decisions that invite harmony and lifelong success.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – The Harmony Between Energy and Architecture
            </h2>
            <p>
              Vasterior is a premium Vastu and interior design consultancy based in Delhi NCR, renowned for bringing scientific precision and artistic excellence into energy-balanced design. Our team of certified Vastu experts, architects, and designers combines deep traditional Vastu wisdom with modern spatial intelligence. For over a decade, Vasterior has been guiding clients in creating homes, villas, and townships that blend energy balance with architectural elegance.
            </p>
            <p>
              When it comes to residential plots, our consultants carefully assess factors such as soil quality, slope, cardinal directions, energy zones, and natural surroundings - creating a blueprint that maximizes prosperity and peace before construction begins.
            </p>
            <p>
              At Vasterior, we don&apos;t just analyze plots - we craft energy-infused foundations for beautiful, balanced, and long-lasting homes.
            </p>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Choose Vasterior as Your Vastu Consultant For Residential Plots North Delhi
            </h2>
            <p>
              Building your dream home starts with making the right energetic choices. Here&apos;s why homeowners, developers, and architects across Delhi NCR trust Vasterior:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Vastu Professionals</strong>: Our consultants hold formal training in Vastu Shastra and specialize in modern applications for residential construction.</li>
              <li><strong>Scientific Site Evaluation</strong>: We analyze topography, directions, road alignment, plot shape, and elemental balance to identify the most auspicious land.</li>
              <li><strong>Customized Vastu Reports</strong>: Every consultation includes personalized recommendations aligned with your family goals and architectural vision.</li>
              <li><strong>Architectural Collaboration</strong>: We work hand-in-hand with architects to ensure your home design follows both functional and energetic logic.</li>
              <li><strong>Luxury Design Integration</strong>: All remedies and alignments complement your home&apos;s aesthetic appeal - no visible or intrusive adjustments.</li>
              <li><strong>Trusted Across North Delhi</strong>: From Model Town to Civil Lines and Ashok Vihar, we&apos;ve successfully guided hundreds of families in creating energy-perfect homes.</li>
            </ul>
            <p className="mt-4">
              With Vasterior, your home begins not with a structure - but with a space aligned to success and serenity.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              We offer a complete range of Vastu and design consultancy services for residential, commercial, and industrial clients across Delhi NCR.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Vastu for Residential Plots</strong>: Our experts help you select the most auspicious plot based on direction, slope, shape, and energy zones to ensure harmony and prosperity.
              </li>
              <li>
                <strong>Vastu for New Home Design & Construction</strong>: From layout planning to room positioning, we align every design element to natural forces for optimum balance and comfort.
              </li>
              <li>
                <strong>Vastu for Existing Homes and Renovations</strong>: Even if your home is already built, our consultants offer effective, non-structural remedies to correct energy imbalances.
              </li>
              <li>
                <strong>Landscape & Water Element Vastu</strong>: We guide the ideal placement of gardens, pools, or water tanks to amplify positive energy and financial flow.
              </li>
              <li>
                <strong>Interior Design with Vastu Principles</strong>: Vasterior&apos;s interior design team blends modern luxury aesthetics with Vastu compliance - creating homes that look elegant and feel alive.
              </li>
              <li>
                <strong>On-Site & Online Consultations</strong>: Whether in-person or virtually, we offer precise, professional, and confidential consultations across Delhi NCR.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Crafting Foundations of Prosperity and Peace
            </h2>
            <p>
              Every successful Vasterior project begins with the land beneath it. Our residential Vastu consultations for plots across North Delhi - including Shalimar Bagh, Civil Lines, Model Town, and Ashok Vihar - have helped countless families and developers begin their projects on the right energetic note.
            </p>
            <p>
              We use geo-energetic mapping, soil testing, and directional analysis to create practical, high-precision insights for construction planning. Our portfolio includes both private villas and large residential developments, where every structure stands as a testament to balance, intention, and design excellence.
            </p>
            <p>
              At Vasterior, we build trust, peace, and prosperity - before the first brick is even laid.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Real Results, Real Alignment
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior&apos;s Vastu guidance for our plot in Civil Lines was spot on. Their detailed report and direction analysis gave us total clarity before construction.&quot; – Rohit Mehta, Civil Lines
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We wanted to ensure our new home in North Delhi followed Vastu principles from day one. Vasterior made it simple, logical, and aesthetic.&quot; – Ananya Gupta, Model Town
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Their expertise in plot selection and energy balancing is unmatched. The consultation was scientific, clear, and transformative.&quot; – Kunal Kapoor, Shalimar Bagh
              </blockquote>
            </div>
            <p className="mt-4">
              Every testimonial reflects our mission - to turn land into living spaces of light, luxury, and longevity.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Consultant For Residential Plots North Delhi
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Why should I consult a Vastu expert before buying a residential plot?</h3>
                <p>A Vastu consultant helps you evaluate the land&apos;s natural energy flow, ensuring your investment brings long-term peace, health, and financial stability.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. How does Vasterior evaluate residential plots in North Delhi?</h3>
                <p>We assess direction, slope, soil quality, surrounding structures, and elemental balance using modern tools and ancient Vastu principles.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can existing plots be corrected if they have Vastu defects?</h3>
                <p>Yes. We offer practical, non-structural remedies like landscaping adjustments, color corrections, and directional placements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Does Vastu really influence property energy?</h3>
                <p>Absolutely. Vastu aligns your home with the five natural elements, balancing internal and external energy flow to enhance prosperity and well-being.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I book a consultation with Vasterior?</h3>
                <p>You can contact us directly via phone or email, and our experts will schedule an on-site or online consultation anywhere in North Delhi.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Build the Foundation of Your Future
            </h2>
            <p>
              Your dream home deserves more than just good design - it deserves the right energy. With Vasterior, the leading Vastu Consultant For Residential Plots North Delhi, you can ensure your land and layout are perfectly aligned for long-term peace, prosperity, and purpose.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:info@spacebuild.com">info@spacebuild.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="vastu-consultant-for-residential-plots-north-delhi" />
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
