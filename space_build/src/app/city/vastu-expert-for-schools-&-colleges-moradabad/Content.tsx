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
            {/* Intro */}
            <h3 className="text-xl font-semibold text-gray-900">
              Creating Learning Environments That Inspire Success & Harmony
            </h3>
            <p>
              Education is the foundation of every successful society. Schools and colleges are not just physical structures but spaces where knowledge, discipline, and growth take root. However, if the flow of energy in educational institutions is not balanced, challenges like poor student focus, staff stress, or declining reputation may arise. At Vasterior – Vastu Expert for Schools & Colleges in Moradabad, UP, we align campuses, classrooms, and facilities with Vastu principles to create positive, disciplined, and successful learning environments.
            </p>

            {/* Why Educational Institutions Need Vastu */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Educational Institutions Need Vastu
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Better Student Concentration – Classrooms aligned for focus and learning.</li>
              <li>Staff Harmony – Faculty morale and cooperation improve.</li>
              <li>Institutional Reputation – Balanced energy attracts more admissions.</li>
              <li>Financial Stability – Fee collection and administration zones aligned with prosperity.</li>
              <li>Smooth Operations – Reduced conflicts and improved discipline.</li>
            </ul>
            {/* Our Vastu Services for Schools & Colleges */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Vastu Services for Schools & Colleges
            </h2>
            <p>
              We offer specialized consultation for educational institutions of all sizes in Moradabad.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Site & Campus Planning</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Guidance on selecting land for schools or colleges.</li>
                  <li>Orientation of main gates, boundary walls, and open areas.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Building & Layout Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Placement of classrooms, labs, libraries, and auditoriums.</li>
                  <li>Alignment of administration blocks and principal’s office.</li>
                  <li>Proper positioning of staircases, corridors, and staff rooms.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Classroom Vastu</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Ensuring desks, blackboards, and teacher’s positions enhance focus.</li>
                  <li>Energy alignment for concentration, creativity, and discipline.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Special Zones</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Laboratories – Fire and air elements balanced for safety and innovation.</li>
                  <li>Libraries – North-east positioning for knowledge and calm.</li>
                  <li>Playgrounds & Sports Areas – Correctly placed for energy and vitality.</li>
                  <li>Hostels & Canteens – Designed for student wellness and positivity.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">5. Existing Institutions</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Remedies for current schools and colleges without demolition.</li>
                  <li>Décor, colors, mirrors, and symbols integrated into facilities.</li>
                </ul>
              </div>
            </div>
            {/* Our Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Process
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li>Consultation & Discussion – Understanding institution goals and challenges.</li>
              <li>Site Visit & Energy Analysis – Mapping directions and identifying imbalances.</li>
              <li>Customized Solutions – Remedies tailored to classrooms, admin areas, and hostels.</li>
              <li>Integration with Infrastructure – Blending remedies with design and branding.</li>
              <li>Follow-Up Guidance – Monitoring student performance and staff feedback.</li>
            </ul>
            {/* Remedies in Schools & Colleges */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Remedies We Use in Schools & Colleges
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Color Therapy – Light shades in classrooms for clarity, green in libraries for growth.</li>
              <li>Symbolic Remedies – Educational yantras and motivational symbols for learning.</li>
              <li>Mirror & Layout Adjustments – Correcting imbalances in corridors and entrances.</li>
              <li>Metal Remedies – Use of copper, brass, or iron objects for balance.</li>
              <li>Furniture Arrangement – Positioning desks and chairs for smooth energy flow.</li>
            </ul>
            {/*SPACE BUILD */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD as Vastu Expert for Schools & Colleges in Moradabad?
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Education-Specific Expertise – Focused experience in institutional Vastu.</li>
              <li>Dual Advantage – Vastu consultancy + interior planning for institutions.</li>
              <li>Practical Remedies – Corrections without disturbing classes or activities.</li>
              <li>Local Advantage – Familiar with Moradabad’s educational culture and needs.</li>
              <li>Trusted by Institutions – Schools and colleges across UP rely on us for Vastu guidance.</li>
            </ul>
            {/* Benefits */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Educational Vastu Consultation
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Improved Student Results – Focused classrooms encourage learning.</li>
              <li>Staff Cooperation – Positive energy enhances teamwork.</li>
              <li>Higher Admissions – Reputation improves with balanced energy.</li>
              <li>Financial Stability – Fee collection and accounts managed smoothly.</li>
              <li>Peaceful Environment – Discipline improves, stress reduces.</li>
              <li>Institutional Growth – Colleges and schools expand with confidence.</li>
            </ul>
            {/* Client Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                “Our college had issues with discipline and low admissions. Vasterior’s Vastu consultation brought balance and improved our reputation.” – Saraswati College, Moradabad
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                “After applying remedies in our school, students seemed calmer and more focused. Parents also noticed the difference.” – Bright Future Academy
              </blockquote>
            </div>
            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Vastu Expert for Schools & Colleges in Moradabad
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1: Can Vastu improve student performance?</h3>
                <p>A: Yes, classroom alignment and remedies enhance focus and learning.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2: Do you provide consultation for small schools?</h3>
                <p>A: Absolutely. Our solutions are scalable for both small and large institutions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3: Are remedies disruptive to daily operations?</h3>
                <p>No, remedies are non-demolition and can be applied without disturbing activities.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4: Can hostels and canteens be aligned with Vastu?</h3>
                <p>A: Yes, we provide complete guidance for all institutional facilities.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5: Do you consult only in Moradabad?</h3>
                <p>A: While based in Moradabad, we offer services across UP and online consultations.</p>
              </div>
            </div>
            {/* Contact */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Vastu Expert for Schools & Colleges in Moradabad
            </h2>
            <div className="space-y-2">
              <p><strong>📍 Location:</strong> Moradabad, Uttar Pradesh</p>
              <p><strong>📞 Phone:</strong> +91-9100883355</p>
              <p><strong>📧 Email:</strong> spacebuild.india@gamil.com</p>
              <p><strong>🌐 Website:</strong> www.vasterior.com</p>
            </div>
            <p className="mt-4 font-semibold">
              Vasterior – Guiding Schools & Colleges in Moradabad to Build Balanced, Successful & Positive Learning Spaces with Vastu.
            </p>
          </div>
          <PostNavigation slug="vastu-expert-for-schools-and-colleges-in-moradabad" />
        </div>
        {/* Enquiry Form */}
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
