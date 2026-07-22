import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Compliant House Construction in Moradabad | Space Build",
  description:
    "Space Build offers expert Vastu compliant house construction in Moradabad. Build your dream home with proper direction, energy balance & modern design for health, wealth & happiness.",
  keywords:
    "vastu compliant house construction moradabad, vastu house construction moradabad, vastu home builders moradabad, best house construction company moradabad, space build moradabad, vastu compliant home design, residential vastu construction, vastu house planning moradabad, vastu architects moradabad, vastu construction company",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-compliant-house-construction-moradabad",
  },
  openGraph: {
    title: "Vastu Compliant House Construction in Moradabad | Space Build",
    description:
      "Space Build offers expert Vastu compliant house construction in Moradabad. Build your dream home with proper direction, energy balance & modern design for health, wealth & happiness.",
    url: "https://www.spacebuild.co.in/vastu-compliant-house-construction-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Compliant House Construction in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Compliant House Construction in Moradabad | Space Build",
    description:
      "Space Build offers expert Vastu compliant house construction in Moradabad. Build your dream home with proper direction, energy balance & modern design for health, wealth & happiness.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};


export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Portfolio />
    </>
  );
}