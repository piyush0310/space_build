import type { Metadata } from "next";
import Contactcontent from "./Contactcontent";

export const metadata: Metadata = {
  title: "Vasterior – Contact Us | Get in Touch for Interior Design & Consultancy",
  description:
    "Connect with Vasterior today for bespoke interior design, vastu consultation, smart homes, and PMC services. Call us at +917906086899 or email info@spacebuild.com to book your consultation.",
  keywords:
    "Vasterior contact, contact Vasterior, interior design contact, vastu consultation contact, smart home consultation, wedding design contact, PMC services contact, spatial planning contact, furniture sourcing contact",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/contact",
  },

  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/contact",
    title: "Vasterior – Contact Us | Get in Touch for Interior Design & Consultancy",
    description:
      "Reach out to Vasterior for expert interior design, vastu consultation, smart home solutions, wedding design, and PMC services. Call +917906086899 or email info@spacebuild.com.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vasterior – Contact Us",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vasterior – Contact Us | Get in Touch for Interior Design & Consultancy",
    description:
      "Looking for interior design, vastu consultation, or smart home services? Contact Vasterior today via phone or email to book your consultation.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },

  icons: {
    icon: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
  },
};

export default function contactPage() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Contactcontent />
    </div>
  );
}
