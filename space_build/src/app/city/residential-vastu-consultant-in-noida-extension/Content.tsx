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
            {/* Intro */}
            <p>
              Noida Extension, also called Greater Noida West, is a booming residential and commercial sub-city in the National Capital Region (NCR), Uttar Pradesh. Nestled just across the Hindon River from Sector 121 Noida, it includes sectors like Techzone, Knowledge Park, Sector 16B, 16C, 4, and others. Amidst the influx of new home buyers and families settling in this modern landscape, there&apos;s a growing desire for spaces that aren&apos;t just architecturally elegant, but also energetically balanced and harmonious.
            </p>
            <p>
              That&apos;s where Vasterior, your trusted Residential Vastu Consultant in Noida Extension, steps in—bridging the timeless wisdom of Vastu Shastra with pragmatic design solutions tailored for today&apos;s homes, especially high-rise apartments, gated communities, and villa layouts.
            </p>

            {/* Why Hire a Residential Vastu Consultant */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Hire a Residential Vastu Consultant in Noida Extension?
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Energy Alignment in Dense Urban Homes</h3>
                <p>High-density living in societies like Gaur City, Eco Village, and Panchsheel Greens often overlooks direction-based energy flows. A residential Vastu expert helps realign furniture, entrances, and key spaces for better harmony and prosperity.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Support for Growing Families</h3>
                <p>Families with working professionals or students in the house can benefit from bedroom and study placement optimized for focus, rest, and relationships.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Simplified Remedies for Modern Homes</h3>
                <p>Urban flats often limit structural changes. Vasterior specializes in non-demolition remedies—crystals, color therapy, mirrors, natural elements—that are practical and cost-effective.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">4. Custom, Science-Based Solutions</h3>
                <p>With experience in Noida Extension&apos;s layout patterns and energy dynamics, Vasterior delivers logical, site-specific solutions, minus the guesswork or outdated rituals.</p>
              </div>
            </div>

            {/* Services */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Vasterior&apos;s Residential Vastu Services in Noida Extension
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Home Layout Analysis</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Detailed study of floor plans, compass direction, and room functions.</li>
                  <li>Ideal placement suggestions for bedrooms, kitchen, pooja room, and study area.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Entrance & Main Door Optimization</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Aligning main entry to welcome positive energies.</li>
                  <li>Recommendations on clutter-free zones and placement modifications.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Living & Dining Room Alignment</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Tips for improving family interaction, airflow, and energy dispersion.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Bedroom Vastu Guidance</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Direction-based bed placement for better sleep, relationships, and harmony.</li>
                  <li>Positioning for wardrobes, study desks, mirrors, and electronics.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kitchen & Utility Areas</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Stove and sink alignment for wealth generation and health.</li>
                  <li>Ideas for pantry and refrigerator locations to balance fire and water energies.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Balcony & Open Spaces</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Suggestions to enhance these zones for calmness and fresh energy.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Non-Structural Remedies</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Application of color therapy, crystals, vases, pyramids, and other natural elements to correct doshas without renovation.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Report & Implementation Support</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Easy-to-follow written remedy sheets.</li>
                  <li>Virtual or in-person follow-ups to ensure noticeable improvements.</li>
                </ul>
              </div>
            </div>

            {/* Why Vasterior Excels */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Why Vasterior Excels as a Residential Vastu Expert
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Local Knowledge:</strong> Deep familiarity with Greater Noida West&apos;s typical residential blueprints and spatial challenges.</li>
              <li><strong>Logical Approach:</strong> Remedies are grounded in functionality, not superstition.</li>
              <li><strong>Flexibility:</strong> Available for on-site visits or convenient virtual consultations.</li>
              <li><strong>Proven Results:</strong> Satisfied clients across Tier 1 and Tier 2 societies, startups, and families in Noida Extension.</li>
            </ul>

            {/* Benefits Table */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Benefits of Residential Vastu Consultation
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Benefits</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Better Relationships</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Harmonious bedroom layouts and communal areas</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Enhanced Well-being</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Healthier energy supports physical and mental wellness</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Prosperity & Success</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Kitchen and entrance alignment promote abundance</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Improved Focus</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Study zones and work desks optimized by direction</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Stress Relief</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Balanced environments reduce emotional tension</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Process */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              How Vasterior&apos;s Residential Vastu Process Works
            </h2>
            <ul className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Introductory Call:</strong> Understand your concerns, goals, and space type.</li>
              <li><strong>Site Review:</strong> Study of blueprints, photos, and directions—virtually or on-site.</li>
              <li><strong>Analytical Report:</strong> Clear, structured suggestions for Vastu alignment.</li>
              <li><strong>Remedy Assistance:</strong> Practical guidance for implementing changes.</li>
              <li><strong>Follow-Up:</strong> Check in to observe improvements and make final tweaks.</li>
            </ul>

            {/* Testimonials */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Testimonials from Noida Extension Residents
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;Vasterior helped realign our 2BHK in Eco Village without a single knock on the wall. The change in peace and focus has been remarkable.&quot; – Family, Sector 16C.
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                &quot;From cluttered entrances to smooth energy, Vasterior&apos;s recommendations turned our apartment vibe from chaotic to calming.&quot; – Resident, Gaur City.
              </blockquote>
            </div>

            {/* FAQ Section */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              FAQs – Residential Vastu Consultant in Noida Extension
            </h2>
            
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Do I need to renovate for Vastu compliance?</h3>
                <p>No. Most remedies are non-structural—using elements, placement, and color.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. Is Vastu relevant for flats?</h3>
                <p>Absolutely. Strategic alignment within apartments has a powerful impact on energy.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Can we consult online?</h3>
                <p>Yes, Vasterior offers convenient virtual consultations along with in-person support.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. How soon do benefits appear?</h3>
                <p>Clients often notice a difference in the atmosphere within a few weeks of applying remedies.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Do you cater only to Noida Extension?</h3>
                <p>While specialized in Noida Extension, Vasterior serves clients across Uttar Pradesh.</p>
              </div>
            </div>

            {/* Conclusion */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Conclusion
            </h2>
            <p>
              As Noida Extension surges ahead as a modern residential destination, creating homes that embody peace, growth, and well-being is more important than ever. Vasterior stands as the go-to Residential Vastu Consultant, offering practical, evidence-based solutions that enrich not just spaces, but lives.
            </p>
            <p className="mt-4">
              Ready to embrace harmony in your home? Consult Vasterior today for a personalized, energy-aligned living space.
            </p>

            {/* Contact Info */}
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior – Residential Vastu Consultant
            </h2>
            <div className="space-y-2">
              <p><strong>Phone:</strong> +917906086899</p>
              <p><strong>Email:</strong> spacebuild.india@gmail.com</p>
            </div>
          </div>
          <PostNavigation slug="residential-vastu-consultant-in-noida-extension" />
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