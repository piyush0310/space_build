
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "3BHK Interior Design in Haldwani | Space Build",

  description:
    "Planning 3BHK interior design in Haldwani? Space Build offers Vastu-aware layouts, modular kitchens, wardrobes and itemised quotations. Book a consultation.",

  keywords:
    "3BHK interior design Haldwani, 3 BHK flat interior design, 3BHK home interior designer Haldwani, interior design services Haldwani, modular kitchen Haldwani, wardrobe design for 3BHK, Vastu interior design Haldwani, home interior designer in Haldwani, 3BHK interior design ideas, living room design for 3BHK, master bedroom interior design, budget interior design Haldwani, interior design with Vastu, Space Build Haldwani, residential interior design Haldwani",

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/3bhk-interior-design-haldwani",
  },

  openGraph: {
    title: "3BHK Interior Design in Haldwani | Space Build",
    description:
      "Planning 3BHK interior design in Haldwani? Space Build offers Vastu-aware layouts, modular kitchens, wardrobes and itemised quotations. Book a consultation.",
    url: "https://www.spacebuild.co.in/3bhk-interior-design-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3BHK Interior Design in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "3BHK Interior Design in Haldwani | Space Build",
    description:
      "Planning 3BHK interior design in Haldwani? Space Build offers Vastu-aware layouts, modular kitchens, wardrobes and itemised quotations. Book a consultation.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Haldwani, Uttarakhand",
    "geo.region": "IN-UT",
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
