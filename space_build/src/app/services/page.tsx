import type { Metadata } from "next"

import  Allservicescontent  from "./Allservicescontent";
// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Luxury Vastu & Interior Design Services | SPACE BUILD Studio",
  description:
    "Explore SPACE BUILD Studio’s luxury MahaVastu, AstroVastu, Interior Design, Vastu Renovation & Styling services, crafted for harmony, beauty & balance.",
  keywords: [
    "Vastu consultant, Luxury interior design studio, services, Vastu interior design, Vastu renovation services, AstroVastu consultant, Spatial flow planning, Vastu styling, Interior design with Vastu, Energy aligned interiors",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://Space Build.com/services",
  },

  openGraph: {
    title: "Luxury Vastu & Interior Design Services | SPACE BUILD Studio",
    description:
      "Explore SPACE BUILD Studio’s luxury MahaVastu, AstroVastu, Interior Design, Vastu Renovation & Styling services, crafted for harmony, beauty & balance.",
    url: "https://Space Build.com/services",
    siteName: "SPACE BUILD Studio",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "SPACE BUILD Studio – Interior Design Services | Residential & Commercial Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Vastu & Interior Design Services | SPACE BUILD Studio",
    description:
      "Explore SPACE BUILD Studio’s luxury MahaVastu, AstroVastu, Interior Design, Vastu Renovation & Styling services, crafted for harmony, beauty & balance.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  // ✅ Google site verification
  
}

export default function Service() {
  return (
    <>
      <Allservicescontent />
     
    </>
  )
}
