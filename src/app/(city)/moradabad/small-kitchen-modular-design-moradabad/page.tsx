import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Small Kitchen Modular Design in Moradabad | Space Build – Smart Solutions for Compact Kitchens",
  description:
    "Space Build offers small kitchen modular design solutions in Moradabad, with smart layouts, space-saving ideas and compact storage options. Get expert-designed modular kitchens tailored for small apartments and tight spaces.",
  keywords:
    "small kitchen modular design Moradabad, small kitchen ideas, compact kitchen design, space-saving kitchen solutions, small kitchen storage ideas, Space Build Moradabad, tiny kitchen design tips, small apartment kitchen Moradabad, small kitchen makeover, modular kitchen for small spaces",
  alternates: {
    canonical: "https://www.spacebuild.co.in/small-kitchen-modular-design-moradabad",
  },
  openGraph: {
    title: "Small Kitchen Modular Design in Moradabad | Space Build – Smart Solutions for Compact Kitchens",
    description:
      "Space Build offers small kitchen modular design solutions in Moradabad, with smart layouts, space-saving ideas and compact storage options. Get expert-designed modular kitchens tailored for small apartments and tight spaces.",
    url: "https://www.spacebuild.co.in/small-kitchen-modular-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Small Kitchen Modular Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Kitchen Modular Design in Moradabad | Space Build – Smart Solutions for Compact Kitchens",
    description:
      "Space Build offers small kitchen modular design solutions in Moradabad, with smart layouts, space-saving ideas and compact storage options. Get expert-designed modular kitchens tailored for small apartments and tight spaces.",
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