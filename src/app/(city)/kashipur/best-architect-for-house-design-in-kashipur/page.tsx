import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Architect for House Design in Kashipur | Spacebuild",

  description:
    "Searching for the best architect for house design in Kashipur? Spacebuild delivers custom floor plans, elevations & Vastu-friendly homes. Book a free design consultation now!",

  keywords:
    "best architect for house design Kashipur, house design architect Kashipur, top architects in Kashipur, home design company Kashipur, residential design firm Kashipur, house designing services Kashipur, architect for new house Kashipur, house floor plan designer Kashipur, elevation design company Kashipur, custom home design Kashipur, best home design firm Uttarakhand, professional architect Kashipur, house design consultant Kashipur, budget house design Kashipur, luxury house design Kashipur, modern house design company Kashipur, Vastu house design Kashipur, interior and exterior design Kashipur, house design near me Kashipur, Spacebuild house design, architect for bungalow design Kashipur, 3D house design Kashipur",

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/best-architect-for-house-design-in-kashipur",
  },

  openGraph: {
    title: "Best Architect for House Design in Kashipur | Spacebuild",

    description:
      "Searching for the best architect for house design in Kashipur? Spacebuild delivers custom floor plans, elevations & Vastu-friendly homes. Book a free design consultation now!",

    url: "https://www.spacebuild.co.in/kashipur/best-architect-for-house-design-in-kashipur",

    siteName: "Space Build",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Spacebuild - Best Architect for House Design in Kashipur",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Architect for House Design in Kashipur | Spacebuild",

    description:
      "Searching for the best architect for house design in Kashipur? Spacebuild delivers custom floor plans, elevations & Vastu-friendly homes. Book a free design consultation now!",

    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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