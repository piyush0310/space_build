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
            Best Vastu Consultant in Hyderabad
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            {/* Intro */}
            <div>
              <p>
                Vasterior is Hyderabad's trusted studio for MahaVastu-based space alignment and modern interior design, built for people who want their home or workplace to feel lighter, calmer, and more supportive of growth. If you're searching for the best Vastu consultant in Hyderabad who can also design your space beautifully (without turning it into a "temple-style" layout), you're in the right place.
              </p>
            </div>

            {/* Subtitle */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Best Vastu Consultant in Hyderabad (MahaVastu + Interior Design, Done Right)
            </h3>
            <p>
              Your home isn't just where you live. It's where your energy resets. And your office isn't just where you work. It's where your money, focus, and decision-making happens.
            </p>
            <p>
              At Vasterior, we combine the power of MahaVastu with practical interior design to create spaces that look premium and feel aligned. No fear-based Vastu. No random remedies. Just a structured, modern approach that actually makes sense.
            </p>

            {/* Why Choose Vasterior */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior is Considered the Best Vastu Consultant in Hyderabad
            </h2>
            <p>
              There are many Vastu consultants in Hyderabad. But very few can do Vastu corrections without ruining the design, the aesthetics, or the practicality of your space.
            </p>
            <p>
              Here's what makes Vasterior different:
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">We follow MahaVastu principles</h3>
                <p>Structured, step-by-step methodology</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">We blend Vastu and interior design</h3>
                <p>Your home looks premium, not "forced"</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Practical solutions</h3>
                <p>Minimal disruption, no-demolition solutions</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Full implementation support</h3>
                <p>Advice without execution is useless</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">All space types</h3>
                <p>Homes, villas, apartments, offices, commercial spaces</p>
              </div>
            </div>

            {/* MahaVastu Explanation */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Makes MahaVastu Different (And Why It Works Better Today)
            </h2>
            <p>
              MahaVastu is not about superstition. It's about how directions, energy zones, placements, and movement flow affect your day-to-day life.
            </p>
            <p>
              The biggest reason people love MahaVastu is this: It often works without demolition.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Zoning</li>
              <li>Placement shifts</li>
              <li>Interior alignment</li>
              <li>Color and element balancing</li>
              <li>Energy activation and correction techniques</li>
            </ul>

            {/* Core Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Core Services (Vastu + Design)
            </h2>
            <p>
              Vasterior provides end-to-end solutions that align your space and elevate your lifestyle.
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>MahaVastu Consultation for Homes:</strong> Perfect for apartments, villas, independent houses, duplexes, and family homes.</li>
              <li><strong>MahaVastu for Offices & Businesses:</strong> Create massive shifts in focus, flow, and decision clarity.</li>
              <li><strong>Vastu-Based Interior Designing:</strong> Layout, décor, lighting, furniture placement, and colors naturally aligned.</li>
              <li><strong>Pre-Construction Vastu Planning:</strong> Plan the layout correctly from the beginning.</li>
              <li><strong>Vastu Corrections Without Demolition:</strong> Correction methods that don't involve breaking walls.</li>
              <li><strong>Layout Optimization + Energy Flow Design:</strong> Space feels more open, breathable, and balanced.</li>
            </ol>

            {/* Signature Approach */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vastu + Interior Design: The Vasterior Signature Approach
            </h2>
            <p>
              We treat Vastu and interior design as one integrated system. We align furniture placement, bed direction, kitchen energy, work desk position, lighting, colors, décor placements, entry alignment, and clutter patterns.
            </p>
            <p>
              The result is a space that looks high-end and feels emotionally safe.
            </p>

            {/* Problems We Solve */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Problems We Help You Fix
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>"I don't feel peaceful at home anymore."</li>
              <li>"We fight too often for no real reason."</li>
              <li>"Money comes in but never stays."</li>
              <li>"Career growth is stuck even after hard work."</li>
              <li>"I feel drained the moment I enter my home."</li>
              <li>"Business is unstable, good months, then sudden losses."</li>
            </ul>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Our Vastu Consultation Works
            </h2>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Discovery Call:</strong> Understand your concerns, goals, space type, and challenges.</li>
              <li><strong>Layout Review / Site Visit:</strong> Physical consultation or layout-based analysis.</li>
              <li><strong>Energy Mapping Using MahaVastu:</strong> Map key zones and identify imbalance points.</li>
              <li><strong>Correction Plan:</strong> Practical, budget-friendly, low-disruption remedies.</li>
              <li><strong>Vastu + Interior Alignment:</strong> Interior design recommendations aligned with Vastu.</li>
              <li><strong>Implementation Support:</strong> Guide you through execution.</li>
            </ol>

            {/* Results */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Results You Can Expect
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Calmer mind and reduced stress</li>
              <li>Better sleep and healthier routines</li>
              <li>Improved family bonding and fewer conflicts</li>
              <li>Increased focus and productivity</li>
              <li>Smoother financial flow</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              What Clients Say About Vasterior
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                "Honestly, I didn't expect such a difference without breaking anything. The house feels calmer within a week." — Client, Kondapur
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                "We wanted Vastu correction but also wanted the interiors to look classy. Vasterior nailed both." — Client, Jubilee Hills
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                "The office alignment helped a lot. Team coordination improved and we finally started closing deals smoothly." — Business Owner, Gachibowli
              </blockquote>
            </div>

            {/* FAQs */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Why should I choose Vasterior as the best Vastu consultant in Hyderabad?</h3>
                <p>Because we don't just give advice, we give structured correction plans and align your interiors too.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you follow traditional Vastu or MahaVastu?</h3>
                <p>We specialize in MahaVastu principles because it is more practical, modern, and often works without demolition.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can Vastu be corrected without demolition?</h3>
                <p>Yes. Most apartment and home issues can be corrected through placement, zoning, and energy balancing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Do you provide Vastu for offices in Hyderabad?</h3>
                <p>Yes. We do office Vastu, business Vastu, and commercial space alignment.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Can you do Vastu consultation online?</h3>
                <p>Yes. Layout-based analysis and online consultation available.</p>
              </div>
            </div>

            {/* Contact */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Ready to Align Your Space in Hyderabad?
            </h2>
            <div className="space-y-2">
              <p><strong>📞 Phone:</strong> +917906086899</p>
              <p><strong>📧 Email:</strong> info@spacebuild.com</p>
              <p>
                Because when your space is aligned, life stops feeling like a constant fight.
              </p>
            </div>
          </div>

          <PostNavigation slug="best-vastu-consultant-in-hyderabad" />
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
