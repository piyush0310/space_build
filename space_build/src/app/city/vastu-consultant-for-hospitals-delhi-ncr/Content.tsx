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
            Vastu Consultant For Hospitals Delhi NCR – Creating Healing Spaces with Energy, Science, and Design by Vasterior
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <p>
              Design Hospitals That Heal Beyond Medicine. A hospital is more than just an institution for treatment - it&apos;s a space where healing begins, hope is restored, and energy determines well-being. The environment, orientation, and energy flow in healthcare buildings play a silent yet powerful role in how patients recover and staff perform.
            </p>
            <p>
              As a leading Vastu Consultant For Hospitals Delhi NCR, Vasterior integrates ancient Vastu Shastra with modern hospital architecture to create environments that enhance recovery, reduce stress, and foster positivity.
            </p>
            <p>
              Our expert consultants analyze every corner - from the entrance and operation theatres to patient rooms and ICUs - ensuring alignment with the five natural elements (earth, water, fire, air, and space). The result? A hospital that not only looks efficient but also feels harmonious and healing.
            </p>
            <p>
              Whether you&apos;re building a new hospital or improving an existing one, Vasterior helps you establish a healthcare space that promotes well-being, trust, and growth.
            </p>

            {/* About Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior – The Science of Design Meets the Energy of Healing
            </h2>
            <p>
              Vasterior is a premium Vastu and interior design consultancy in Delhi NCR, known for creating energy-optimized spaces that harmonize functionality with positivity. With a specialized team of certified Vastu experts, architects, and interior designers, Vasterior has guided multiple healthcare and wellness projects - from clinics and nursing homes to multi-specialty hospitals.
            </p>
            <p>
              We believe that medical success is not just about advanced treatment - it&apos;s also about the environment in which healing happens. Our mission is to design spaces of care that radiate calmness, strength, and balance.
            </p>
            <p>
              Our process blends Vastu Shastra, design aesthetics, and scientific layout planning to ensure that every hospital becomes a place of rejuvenation and trust.
            </p>

            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Your Vastu Consultant For Hospitals Delhi NCR
            </h2>
            <p>
              Designing a hospital is a responsibility that demands both precision and sensitivity. Here&apos;s why Vasterior is trusted by leading healthcare professionals and developers across Delhi NCR:
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Certified Vastu Experts for Healthcare</strong>: Our consultants specialize in hospital and clinic layouts, focusing on healing energy alignment.</li>
              <li><strong>Scientific Energy Mapping</strong>: We analyze the site, orientation, and energy flow for zones like OPDs, ICUs, waiting areas, and operation theatres.</li>
              <li><strong>Improved Healing & Recovery</strong>: Balanced spaces enhance patient comfort, reduce anxiety, and create a positive environment for healing.</li>
              <li><strong>Operational Harmony</strong>: Our designs foster better coordination among medical staff and management teams.</li>
              <li><strong>Non-Structural Remedies</strong>: We offer practical Vastu corrections that enhance energy without altering your existing structure.</li>
              <li><strong>Trusted Expertise Across Delhi NCR</strong>: From boutique clinics to large hospitals, our consultation ensures long-term stability, growth, and positive reputation.</li>
            </ul>
            <p className="mt-4">
              At Vasterior, we transform hospitals into sanctuaries - where science, energy, and empathy work in perfect alignment.
            </p>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu & Interior Services in Delhi NCR
            </h2>
            <p>
              At Vasterior, we provide specialized Vastu and design consultancy services tailored for healthcare and wellness environments.
            </p>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>
                <strong>Vastu for New Hospital Planning</strong>: From site selection to architectural zoning, we ensure the main entrance, patient wards, and service areas align with Vastu&apos;s healing principles for maximum harmony.
              </li>
              <li>
                <strong>Vastu for Existing Hospitals & Clinics</strong>: Our experts conduct energy audits and suggest subtle corrections - optimizing directions, placements, and colors to balance energy flow and improve functionality.
              </li>
              <li>
                <strong>Vastu for Operation Theatres & ICUs</strong>: We guide directional placement of equipment, surgical tables, and lighting to enhance precision, calmness, and positive energy during critical treatments.
              </li>
              <li>
                <strong>Vastu for Waiting & Reception Areas</strong>: Our designs create calm, welcoming spaces that reduce patient anxiety and improve visitor experience.
              </li>
              <li>
                <strong>Interior Design with Vastu Integration</strong>: Our design team blends modern hospital aesthetics with Vastu principles - ensuring hygienic, bright, and balanced interiors without disrupting the medical layout.
              </li>
              <li>
                <strong>Hospital Staff and Admin Zoning</strong>: We optimize doctor cabins, nursing stations, and staff rest zones to support focus, coordination, and professional well-being.
              </li>
            </ul>

            {/* Portfolio */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Portfolio – Healing Through Design and Energy
            </h2>
            <p>
              Vasterior&apos;s work across Delhi NCR includes multi-specialty hospitals, diagnostic centers, and wellness clinics that now function with renewed positivity and efficiency. From Noida&apos;s advanced healthcare units to South Delhi&apos;s specialty centers, our designs have helped improve patient recovery rates, enhance staff coordination and morale, reduce operational stress, and strengthen overall reputation and trust.
            </p>
            <p>
              Each project reflects our belief that when architecture respects energy balance, healing becomes effortless. Our results speak through the smiles of patients, the focus of staff, and the growth of healthcare brands that trust us.
            </p>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials – Where Energy Meets Excellence
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior transformed our hospital&apos;s environment. The space feels calmer, and even our patients comment on the peaceful atmosphere.&quot; – Dr. Ananya Gupta, Noida
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Their approach is deeply scientific yet spiritual. We didn&apos;t have to rebuild anything, and the results were visible in staff harmony and patient satisfaction.&quot; – Arun Sharma, Hospital Director, South Delhi
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Professional, methodical, and effective. Vasterior is truly the best Vastu Consultant For Hospitals Delhi NCR.&quot; – Dr. Neeraj Bansal, Gurgaon
              </blockquote>
            </div>
            <p className="mt-4">
              At Vasterior, every consultation is about more than design - it&apos;s about creating an environment that heals faster and feels better.
            </p>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Consultant For Hospitals Delhi NCR
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Why is Vastu important for hospitals?</h3>
                <p>Vastu ensures the hospital&apos;s energy flow supports patient recovery, operational efficiency, and overall well-being of everyone within the facility.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Can Vastu help existing hospitals without reconstruction?</h3>
                <p>Yes. Vasterior provides practical, non-invasive remedies such as directional corrections, layout rearrangements, and energy harmonization techniques.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Which hospital areas benefit most from Vastu?</h3>
                <p>Operation theatres, patient rooms, ICU, OPD, reception, pharmacy, and staff areas benefit greatly from balanced energy alignment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. How does Vastu affect healing and hospital operations?</h3>
                <p>Properly aligned spaces improve mental calmness, reduce stress, and enhance coordination - resulting in faster recovery and smoother operations.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. How can I book a hospital Vastu consultation with Vasterior?</h3>
                <p>You can call or email us to schedule an in-person or online consultation. Our experts provide detailed energy mapping and customized recommendations.</p>
              </div>
            </div>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Align Healing Spaces with Energy and Excellence
            </h2>
            <p>
              Let your hospital become a space of healing, hope, and harmony with Vasterior, your trusted Vastu Consultant For Hospitals Delhi NCR. Our expertise helps you create environments that not only look professional but also radiate positivity and healing energy.
            </p>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> <a href="mailto:info@spacebuild.com">info@spacebuild.com</a></p>
              <p>Contact Vasterior today for your dream home interiors and expert Vastu consultation in Delhi NCR.</p>
            </div>
          </div>
          <PostNavigation slug="vastu-consultant-for-hospitals-delhi-ncr" />
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
