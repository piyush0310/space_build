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
            Affordable Vastu Consultant Delhi – Bring Balance, Peace, and Prosperity Within Your Budget with Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Experience True Vastu Benefits Without Overspending – Choose Vasterior, Your Affordable Vastu Consultant Delhi. Good Vastu doesn&apos;t have to come at a high cost - it simply needs the right guidance. At Vasterior, we believe that everyone deserves a home filled with peace, positivity, and prosperity, regardless of their budget.
            </p>
            <p>
              As a trusted Affordable Vastu Consultant Delhi, we offer professional, scientifically-backed, and practical Vastu solutions that are both effective and accessible. Whether you&apos;re designing a new home, planning an office, or improving an existing space, our certified experts guide you with affordable yet impactful remedies that align your surroundings with positive energy.
            </p>
            <p>
              Our goal is simple - to help you live better, feel better, and succeed better through balanced spaces, without unnecessary expenses.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – Where Expertise Meets Accessibility
            </h2>
            <p>
              Vasterior is a leading Vastu and interior consultancy in Delhi NCR, known for merging authentic Vastu principles with modern living styles. Our team includes certified Vastu experts, architects, and designers who specialize in creating spaces that are both beautiful and energetically harmonious.
            </p>
            <p>
              Unlike generic advice or costly consultations, Vasterior focuses on precise, practical, and budget-friendly solutions tailored to your property&apos;s unique energy structure. From compact city apartments to spacious villas, we provide direction-based analysis, energy mapping, and non-structural corrections to achieve holistic balance.
            </p>
            <p>
              Our philosophy is simple - effective Vastu doesn&apos;t need to be expensive, but it must be expertly executed.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Affordable Vastu Consultant Delhi
            </h2>
            <p>
              If you&apos;re seeking trusted and affordable Vastu guidance, here&apos;s why Vasterior is the right choice:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified and Experienced Experts</strong>: Our consultants are professionally trained and bring years of experience in residential and commercial Vastu.</li>
              <li><strong>Budget-Friendly Consultations</strong>: We believe in value-driven services - expert solutions that respect your time and investment.</li>
              <li><strong>Non-Structural Remedies</strong>: No need for demolition or redesign. We suggest subtle, aesthetic corrections that enhance energy flow effortlessly.</li>
              <li><strong>Scientific and Personalized Approach</strong>: Every property is analyzed through its orientation, purpose, and energy grid to deliver measurable results.</li>
              <li><strong>Transparent Pricing and Reports</strong>: You get detailed, easy-to-understand reports with clear recommendations - no hidden charges or complex jargon.</li>
              <li><strong>Trusted by Families and Businesses Across Delhi NCR</strong>: From affordable homes to offices and retail spaces, our clients trust us for genuine, effective results.</li>
            </ul>
            <p className="mt-4">
              At Vasterior, we redefine affordability through expertise, trust, and results - not shortcuts.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              We offer complete, affordable Vastu consultation and interior design services across Delhi NCR, tailored to suit different property types and budgets.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Residential Vastu Consultation</strong>: We help homeowners design peaceful, balanced living spaces that foster harmony, health, and prosperity - even in compact apartments or builder floors.
              </li>
              <li>
                <strong>Office & Commercial Space Vastu</strong>: Our Vastu consultation for offices and retail spaces ensures improved productivity, growth, and financial success.
              </li>
              <li>
                <strong>Vastu for Apartments and Flats</strong>: Vasterior specializes in optimizing apartment layouts for energy flow, ensuring positive vibes and balance without structural modifications.
              </li>
              <li>
                <strong>Vastu for New Construction Projects</strong>: For developers and homeowners, we provide detailed Vastu guidance from the design stage - including plot analysis, direction alignment, and room zoning.
              </li>
              <li>
                <strong>Interior Design with Vastu Harmony</strong>: Our designers blend aesthetic appeal with energy balance, ensuring that your home not only looks elegant but also feels calm and uplifting.
              </li>
              <li>
                <strong>Online and On-Site Consultations</strong>: Vasterior offers flexible consultation options - whether you prefer an in-person visit or a detailed online session, our expertise is always within reach.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Affordable Yet Transformative Solutions
            </h2>
            <p>
              Our work across Delhi NCR proves that effective Vastu doesn&apos;t need to be complicated or costly. From small city apartments in Dwarka and Rohini to family homes in South Delhi, our clients have experienced visible transformations - smoother relationships, enhanced concentration, better sleep, and overall peace of mind.
            </p>
            <p>
              Each project is handled with care, precision, and personalized attention - ensuring affordability never compromises quality or authenticity. At Vasterior, your peace of mind is our priority - and your home&apos;s energy is our responsibility.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Affordable Excellence That Speaks for Itself
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;We were searching for an affordable Vastu Consultant Delhi, and Vasterior exceeded our expectations. Simple remedies made a huge difference in our home&apos;s energy.&quot; – Neha Sharma, Dwarka
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Professional, budget-friendly, and reliable. Their approach is scientific and easy to understand - no unnecessary costs or changes.&quot; – Arun Verma, Pitampura
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior proved that good Vastu can be affordable too. The improvements we felt after their consultation were remarkable.&quot; – Priya Malhotra, East Delhi
              </blockquote>
            </div>
            <p className="mt-4">
              Our clients trust Vasterior for one reason - we deliver results that last, without burdening your budget.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Affordable Vastu Consultant Delhi
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Can I get effective Vastu solutions at an affordable price?</h3>
                <p>Absolutely. Vasterior specializes in affordable Vastu consultations that deliver tangible results without structural changes or heavy expenses.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. How do I know if my home needs Vastu correction?</h3>
                <p>If you&apos;re facing frequent stress, imbalance, or stagnation in life, a simple energy analysis from our experts can reveal areas for improvement.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Do you provide online affordable Vastu consultations?</h3>
                <p>Yes. Our online sessions are equally detailed, providing personalized analysis, layout corrections, and energy enhancement tips.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. Will Vastu remedies affect my home&apos;s design or décor?</h3>
                <p>Not at all. Our solutions blend seamlessly with modern interiors - they enhance beauty while improving energy flow.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I book a consultation with Vasterior?</h3>
                <p>Simply call or email us, and our team will schedule a consultation at your convenience - in-person or online.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Quality Vastu, Honest Pricing
            </h2>
            <p>
              Balance, harmony, and prosperity should be within everyone&apos;s reach - and Vasterior, your trusted Affordable Vastu Consultant Delhi, makes it possible. Our expert team is ready to help you transform your home or workspace into a sanctuary of success and serenity - with simple, effective, and affordable Vastu solutions.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:info@spacebuild.com">info@spacebuild.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="affordable-vastu-consultant-delhi" />
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
