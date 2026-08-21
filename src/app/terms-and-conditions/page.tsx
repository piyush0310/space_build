"use client";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  FileText,
} from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#28344B]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#28344B] via-[#32415c] to-[#28344B]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-28">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300">
            <Link
              href="/"
              className="hover:text-yellow-500 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-yellow-500">
              Terms & Conditions
            </span>
          </div>
          {/* Heading */}
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2">
              <ShieldCheck className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-yellow-400">
                Space Build Legal Information
              </span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Terms & Conditions
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-300">
              These Terms & Conditions govern your use of the
              pace Build website and all services offered by our
              company including interior designing, modular
              kitchens, architecture, renovation and turnkey
              solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Content */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="rounded-3xl border border-gray-100 bg-white shadow-xl p-6 sm:p-8 lg:p-12">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100">
                <FileText className="h-7 w-7 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#28344B]">
                  Terms of Use
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Last Updated: July 2026
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-10">
              {/* Section 1 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  1. Acceptance of Terms
                </h3>
                <p className="leading-8 text-gray-600">
                  By accessing this website, requesting a quotation,
                  booking a consultation, or using any Space Build
                  service, you acknowledge that you have read,
                  understood and agreed to these Terms &
                  Conditions.
                </p>
              </div>
              {/* Section 2 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  2. Services Offered
                </h3>
                <p className="leading-8 text-gray-600">
                 Space Build provides professional interior
                  designing, modular kitchen solutions,
                  architectural consultation, furniture planning,
                  renovation and complete turnkey execution for
                  residential and commercial projects.
                </p>
              </div>
                            {/* Section 3 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  3. Client Responsibilities
                </h3>
                <p className="leading-8 text-gray-600">
                  Clients are responsible for providing accurate
                  project details, site measurements (where
                  applicable), required approvals, and timely
                  communication throughout the project. Any delay
                  caused due to incomplete information or
                  restricted site access may affect project
                  timelines.
                </p>
              </div>
              {/* Section 4 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  4. Quotations & Pricing
                </h3>
                <p className="leading-8 text-gray-600">
                  All quotations issued by Space Build are based on
                  the project scope discussed with the client.
                  Prices may change if the project requirements,
                  material selection, dimensions, specifications,
                  taxes or government regulations change after the
                  quotation has been prepared.
                </p>
              </div>
              {/* Section 5 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  5. Payments
                </h3>
                <p className="leading-8 text-gray-600">
                  Payments shall be made according to the payment
                  schedule agreed upon in the project proposal.
                  Work may begin only after the agreed advance
                  payment has been received. Delayed payments may
                  result in project delays or temporary suspension
                  of work until outstanding dues are cleared.
                </p>
              </div>
              {/* Section 6 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  6. Project Timeline
                </h3>
                <p className="leading-8 text-gray-600">
                  Estimated completion dates are provided for
                  planning purposes. Actual timelines may vary due
                  to material availability, client-requested
                  modifications, unforeseen site conditions,
                  weather, transportation delays or events beyond
                  our reasonable control.
                </p>
              </div>
              {/* Section 7 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  7. Cancellation & Refund Policy
                </h3>
                <p className="leading-8 text-gray-600">
                  Cancellation requests must be submitted in
                  writing. Refund eligibility depends upon the
                  stage of the project and expenses already
                  incurred for design work, labour, procurement,
                  manufacturing or installation. Customized
                  products and completed work are generally
                  non-refundable.
                </p>
              </div>
                            {/* Section 8 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  8. Intellectual Property
                </h3>
                <p className="leading-8 text-gray-600">
                  All designs, layouts, drawings, concepts,
                  renderings, logos, images, website content,
                  documents and other materials created by
                  Space Build remain our intellectual property
                  unless otherwise agreed in writing. No content
                  may be copied, reproduced or distributed without
                  prior written permission.
                </p>
              </div>
              {/* Section 9 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  9. Warranty
                </h3>
                <p className="leading-8 text-gray-600">
                  Warranty coverage is applicable only where
                  specifically mentioned in the project agreement.
                  Damage caused by misuse, negligence, accidents,
                  improper maintenance, natural disasters or
                  unauthorized modifications will not be covered
                  under warranty.
                </p>
              </div>
              {/* Section 10 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  10. Limitation of Liability
                </h3>
                <p className="leading-8 text-gray-600">
                  Space Build shall not be liable for indirect,
                  incidental, consequential or special damages
                  arising from the use of our website or services.
                  Our total liability shall never exceed the amount
                  paid by the client for the specific project.
                </p>
              </div>
              {/* Section 11 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  11. Third-Party Services
                </h3>
                <p className="leading-8 text-gray-600">
                  Certain materials, products or services may be
                  supplied by third-party vendors or manufacturers.
                  While we work only with trusted partners,
                  Space Build is not responsible for delays,
                  warranty claims or policies that are solely under
                  the control of those third parties.
                </p>
              </div>
              {/* Section 12 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  12. Privacy
                </h3>
                <p className="leading-8 text-gray-600">
                  Your personal information is handled according to
                  our Privacy Policy. By using this website, you
                  consent to the collection and use of information
                  necessary for providing quotations, consultations
                  and project-related communication.
                </p>
              </div>
              {/* Section 13 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  13. Governing Law
                </h3>
                <p className="leading-8 text-gray-600">
                  These Terms & Conditions shall be governed by and
                  interpreted in accordance with the laws of India.
                  Any dispute arising from these terms or our
                  services shall be subject to the exclusive
                  jurisdiction of the competent courts of
                  Moradabad, Uttar Pradesh.
                </p>
              </div>
                            {/* Section 14 */}
              <div>
                <h3 className="text-2xl font-bold text-[#28344B] mb-4">
                  14. Contact Information
                </h3>
                <p className="leading-8 text-gray-600">
                  If you have any questions regarding these Terms &
                  Conditions or any of our services, please feel free
                  to contact us.
                </p>
                <div className="mt-6 rounded-2xl border border-yellow-100 bg-yellow-50 p-6">
                  <h4 className="text-xl font-semibold text-[#28344B]">
                    SPACE BUILD
                  </h4>
                  <div className="mt-4 space-y-3 text-gray-700">
                    <p>
                      <span className="font-semibold">Address:</span>{" "}
                      Sector 13, B-25, near Ashoka Mart, New Moradabad, Moradabad, Uttar Pradesh 244001
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{" "}
                      spacebuild.india@gmail.com
                    </p>
                    <p>
                      <span className="font-semibold">Phone:</span>{" "}
                      +91 9927611780
                    </p>
                    <p>
                      <span className="font-semibold">Alternate Phone:</span>{" "}
                      +91 8077973797
                    </p>
                  </div>
                </div>
              </div>
              {/* Section 15 */}
              <div className="rounded-2xl bg-[#28344B] p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-white">
                  Updates to These Terms
                </h3>
                <p className="mt-4 leading-8 text-gray-300">
                  Space Build reserves the right to modify or update
                  these Terms & Conditions at any time without prior
                  notice. Changes become effective immediately after
                  being published on this page. We encourage visitors
                  to review this page periodically to stay informed of
                  any updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}