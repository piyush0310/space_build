import type { Metadata } from "next";
import Aboutteam from "./Aboutteam";


export const metadata: Metadata = {
  title: "Vasterior – Our Team | Expert Craftsmen & Design Professionals",
  description:
    "Meet the talented team behind Vasterior – skilled craftsmen, designers, and production experts dedicated to delivering exceptional interior solutions with precision and artistry.",
  keywords:
    "Vasterior team, interior design team, expert craftsmen, production team, carpentry experts, marble specialists, paint professionals, interior design professionals, skilled artisans",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/team",
  },

  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/team",
    title: "Vasterior – Our Team | Expert Craftsmen & Design Professionals",
    description:
      "Meet the talented team behind Vasterior – skilled craftsmen, designers, and production experts dedicated to delivering exceptional interior solutions with precision and artistry.",
    images: [
      {
        url: "https://res.cloudinary.com/df1v3yied/image/upload/v1759914529/vasteriorteam_epwmdm.jpg",
        width: 1200,
        height: 630,
        alt: "Vasterior Team – Expert Craftsmen & Design Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vasterior – Our Team | Expert Craftsmen & Design Professionals",
    description:
      "Meet the talented team behind Vasterior – skilled craftsmen, designers, and production experts dedicated to delivering exceptional interior solutions with precision and artistry.",
    images: ["https://res.cloudinary.com/df1v3yied/image/upload/v1759914529/vasteriorteam_epwmdm.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Team() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
        <Aboutteam />
      
    </div>
  );
}