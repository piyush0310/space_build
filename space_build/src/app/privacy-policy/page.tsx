// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vasterior",
  description: "Read Vasterior's Privacy Policy to understand how we collect, use, and protect your personal data. We ensure complete confidentiality and data security for all clients.",
  keywords: "Vasterior privacy policy, website privacy policy India, interior design data privacy, vastu consultant privacy, client data protection, Vasterior Delhi NCR",
  alternates: {
    canonical: "https://www.vasterior.com/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/privacy-policy",
    siteName: "Vasterior",
    title: "Privacy Policy | Vasterior",
    description: "Read Vasterior's Privacy Policy to understand how we collect, use, and protect your personal data. We ensure complete confidentiality and data security for all clients.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vasterior Privacy Policy Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Privacy Policy | Vasterior",
    description: "Read Vasterior's Privacy Policy to understand how we collect, use, and protect your personal data. We ensure complete confidentiality and data security for all clients.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      {/* Header Section */}
      <div className="bg-[#FFF1E0] py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-light text-black tracking-widest mt-20">
            Privacy Policy
          </h1>
          <p className="text-xl text-black mt-2">
            Your privacy matters to us at Vasterior
          </p>
          <p className="text-sm text-gray-600 mt-4">
            Effective Date: November 10, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed">
            <p className="mb-6">
              Welcome to Vasterior. Your privacy is important to us. This Privacy Policy explains how <strong>Vasterior</strong> (<strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, <strong>&quot;our&quot;</strong>, <strong>&quot;Vasterior&quot;</strong>) collects, uses, discloses, and protects information when you visit or interact with <a href="https://www.vasterior.com/" className="text-blue-600 hover:underline">https://www.vasterior.com/</a> (the <strong>&quot;Website&quot;</strong>) or use our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Who We Are / Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-semibold text-gray-900 mb-2">Vasterior</p>
              <p className="text-gray-700 mb-1"><strong>Office:</strong> Office No. A4, First Floor, Khosla Complex, Gagan Vihar Extension, Delhi – 110092</p>
              <p className="text-gray-700 mb-1"><strong>Email:</strong> info@spacebuild.com</p>
              <p className="text-gray-700"><strong>Phone:</strong> +917906086899</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">a. Personal Information you provide:</h3>
            <ul className="mb-6 space-y-2">
              <li>Name, email address, phone number, postal address.</li>
              <li>Project details, preferences, messages you send via contact forms, quote requests, or email.</li>
              <li>Any other information you choose to provide (e.g., portfolio details, photographs for projects).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">b. Automatically collected information:</h3>
            <ul className="mb-6 space-y-2">
              <li>Technical data such as IP address, browser type, device type, operating system, pages visited, timestamps, and referrer URL.</li>
              <li>Usage data collected by cookies and similar technologies (see Cookies section).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">c. Third-party information:</h3>
            <ul className="mb-6 space-y-2">
              <li>Information from third-party services you connect (e.g., social networks) or from analytics and advertising providers.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use collected information for the following purposes:</p>
            <ul className="mb-6 space-y-2">
              <li>To respond to your inquiries, provide quotes and services, and manage client relationships.</li>
              <li>To operate, maintain, and improve the Website and our services.</li>
              <li>To send administrative information (e.g., confirmations, updates, security alerts).</li>
              <li>For marketing and promotional communications (only if you consent or where permitted).</li>
              <li>To analyze usage and user behavior to improve content, features, and performance.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Legal Basis for Processing</h2>
            <p className="mb-6">
              Where relevant law requires a legal basis (for example, under data protection regimes outside India), we rely on: your consent, performance of a contract, compliance with legal obligations, or our legitimate interests (such as running and improving the business, provided your rights are respected).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies and Similar Technologies</h2>
            <p className="mb-4">We use cookies, web beacons, and similar technologies to collect website usage information. Cookies help with:</p>
            <ul className="mb-6 space-y-2">
              <li>Essential site functionality.</li>
              <li>Analytics (to understand site performance and user behavior).</li>
              <li>Preferences and personalization.</li>
            </ul>
            <p className="mb-6">
              You can manage or block cookies via your browser settings; however, blocking certain cookies may affect site functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Third-Party Services and Links</h2>
            <p className="mb-6">
              Our Website may include links to third-party sites or use third-party services (such as analytics, hosting, payment processors, social media). These third parties have their own privacy policies. We are not responsible for their practices—please review their policies before providing information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Sharing and Disclosure</h2>
            <p className="mb-4">We may share personal data with:</p>
            <ul className="mb-6 space-y-2">
              <li>Service providers and partners who perform functions on our behalf (e.g., hosting, analytics, payment, marketing).</li>
              <li>Professional advisors, law enforcement, or regulators when required by law or to protect our rights.</li>
              <li>Potential buyers or investors in the event of a sale, merger, or reorganization (with appropriate confidentiality measures).</li>
            </ul>
            <p className="mb-6 font-semibold">
              We will not sell your personal data to third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data Retention</h2>
            <p className="mb-6">
              We retain personal information only as long as necessary for the purposes described, to comply with legal obligations, or to resolve disputes. Retention periods vary depending on the type of data and purpose; if you want specifics, contact us (see Contact section).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Security</h2>
            <p className="mb-6">
              We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, disclosure, alteration, or destruction. No method of transmission over the Internet or electronic storage is 100% secure; while we strive to protect your information, we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Your Rights</h2>
            <p className="mb-4">Depending on your location and applicable law, you may have rights such as:</p>
            <ul className="mb-6 space-y-2">
              <li>Accessing the personal data we hold about you.</li>
              <li>Correcting or updating inaccurate data.</li>
              <li>Requesting deletion or restriction of processing.</li>
              <li>Objecting to certain processing activities (e.g., direct marketing).</li>
              <li>Data portability.</li>
            </ul>
            <p className="mb-6">
              To exercise any rights, please contact us at <a href="mailto:info@spacebuild.com" className="text-blue-600 hover:underline">info@spacebuild.com</a>. We will respond in accordance with applicable law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Children</h2>
            <p className="mb-6">
              Our Website and services are not intended for children under 13 (or higher age where required). We do not knowingly collect personal data from children. If we learn we collected data from a child without parental consent, we will take steps to delete it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. International Transfers</h2>
            <p className="mb-6">
              If your data is transferred or accessed outside your country (including to countries with different data protection laws), we will take reasonable steps to ensure appropriate safeguards are in place.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update this Privacy Policy from time to time. When we make changes, we will post the updated policy on this page with a new <strong>&quot;Effective Date.&quot;</strong> Your continued use of the Website after changes indicates acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Contact Us</h2>
            <p className="mb-4">
              For questions, requests, or privacy concerns, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="font-semibold text-gray-900 mb-2">Vasterior</p>
              <p className="text-gray-700 mb-1"><strong>Email:</strong> info@spacebuild.com</p>
              <p className="text-gray-700 mb-1"><strong>Phone:</strong> +917906086899</p>
              <p className="text-gray-700"><strong>Office:</strong> Office No. A4, First Floor, Khosla Complex, Gagan Vihar Extension, Delhi – 110092</p>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-8 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Questions About Our Privacy Policy?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+917906086899</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@spacebuild.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-600">Office No. A4, First Floor, Khosla Complex, Gagan Vihar Extension, Delhi – 110092</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}