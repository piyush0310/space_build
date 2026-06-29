import type { Metadata } from "next";
import Aboutteam from "./Aboutteam";


export const metadata: Metadata = {
  title: "Space Build – Our Team | Expert Craftsmen & Design Professionals",
  description:
    "Meet the talented team behind Space Build – skilled craftsmen, designers, and production experts dedicated to delivering exceptional interior solutions with precision and artistry.",
  keywords:
    "Space Build team, interior design team, expert craftsmen, production team, carpentry experts, marble specialists, paint professionals, interior design professionals, skilled artisans",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.Space Build.com/team",
  },

  openGraph: {
    type: "website",
    url: "https://www.Space Build.com/team",
    title: "Space Build – Our Team | Expert Craftsmen & Design Professionals",
    description:
      "Meet the talented team behind Space Build – skilled craftsmen, designers, and production experts dedicated to delivering exceptional interior solutions with precision and artistry.",
    images: [
      {
        url: "https://res.cloudinary.com/df1v3yied/image/upload/v1759914529/Space Buildteam_epwmdm.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build Team – Expert Craftsmen & Design Professionals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "Space Build – Our Team | Expert Craftsmen & Design Professionals",
    description:
      "Meet the talented team behind Space Build – skilled craftsmen, designers, and production experts dedicated to delivering exceptional interior solutions with precision and artistry.",
    images: ["https://res.cloudinary.com/df1v3yied/image/upload/v1759914529/Space Buildteam_epwmdm.jpg"],
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