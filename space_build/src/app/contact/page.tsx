import type { Metadata } from "next";
import Contactcontent from "./Contactcontent";

export const metadata: Metadata = {
  title: "space build – Contact Us | Get in Touch for Interior Design & Consultancy",
  description:
    "Connect with space build today for bespoke interior design, vastu consultation, smart homes, and PMC services. Call us at ++919927611780 or email spacebuild.india@gmail.com to book your consultation.",
  keywords:
    "space build contact, contact space build, interior design contact, vastu consultation contact, smart home consultation, wedding design contact, PMC services contact, spatial planning contact, furniture sourcing contact",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.space build.com/contact",
  },

  openGraph: {
    type: "website",
    url: "https://www.space build.com/contact",
    title: "space build – Contact Us | Get in Touch for Interior Design & Consultancy",
    description:
      "Reach out to space build for expert interior design, vastu consultation, smart home solutions, wedding design, and PMC services. Call ++919927611780 or email spacebuild.india@gmail.com.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/space buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "space build – Contact Us",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@space build",
    title: "space build – Contact Us | Get in Touch for Interior Design & Consultancy",
    description:
      "Looking for interior design, vastu consultation, or smart home services? Contact space build today via phone or email to book your consultation.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/space buildlogo_bmzk0r.png"],
  },

  icons: {
    icon: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/space buildlogo_bmzk0r.png",
  },
};

export default function contactPage() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Contactcontent />
    </div>
  );
}
