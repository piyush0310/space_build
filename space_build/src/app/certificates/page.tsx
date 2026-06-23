import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "MahaVastu Certificates | MahaVastu Acharya Chitresh Jain Certification | Vasterior",
  description:
    "View official MahaVastu certifications of MahaVastu Acharya Chitresh Jain, trained under Khushdeep Bansal. Trusted expertise with 15+ years of experience in Vastu consultation.",
  keywords:
    "mahavastu certificate, vastu certification india, MahaVastu Acharya Chitresh Jain certificate, khushdeep bansal mahavastu, vastu consultant certification, vastu expert india, vasterior certificates",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/certificates",
  },

  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/certificates",
    title: "MahaVastu Certificates | MahaVastu Acharya Chitresh Jain Certification | Vasterior",
    description:
      "View official MahaVastu certifications of MahaVastu Acharya Chitresh Jain, trained under Khushdeep Bansal. Trusted expertise with 15+ years of experience in Vastu consultation.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vasterior",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "MahaVastu Certificates | MahaVastu Acharya Chitresh Jain Certification | Vasterior",
    description:
      "View official MahaVastu certifications of MahaVastu Acharya Chitresh Jain, trained under Khushdeep Bansal. Trusted expertise with 15+ years of experience in Vastu consultation.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },

  icons: {
    icon: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
  },
};

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Content />
    </div>
  );
}
