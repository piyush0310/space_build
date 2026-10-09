import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Affordable Interior Designer Haldwani | Budget Home Guide",
  description:
    "Need an affordable interior designer in Haldwani? Use the spend-save-defer method to plan budgets, compare quotes and avoid cheap mistakes that cost more later.",
  keywords: [
    "affordable interior designer in Haldwani",
    "affordable interior designer Haldwani",
    "budget interior designer Haldwani",
    "interior designer Haldwani",
    "affordable home interior design Haldwani",
    "budget home interior design Haldwani",
    "affordable kitchen designer Haldwani",
    "affordable wardrobe designer Haldwani",
    "home interior design cost Haldwani",
    "interior design budget planning",
    "interior design quotation comparison",
    "interior design budget guide",
    "spend save defer interior design method",
    "low cost interior design ideas",
    "budget friendly home interiors",
    "affordable modular kitchen Haldwani",
    "affordable wardrobe design Haldwani",
    "interior design material selection",
    "interior design cost saving tips",
    "avoid cheap interior design mistakes",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/affordable-interior-designer-haldwani",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Affordable Interior Designer Haldwani | Budget Home Guide",
    description:
      "Need an affordable interior designer in Haldwani? Use the spend-save-defer method to plan budgets, compare quotes and avoid cheap mistakes that cost more later.",
    url: "https://www.spacebuild.co.in/haldwani/affordable-interior-designer-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Interior Designer in Haldwani - Budget Home Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Interior Designer Haldwani | Budget Home Guide",
    description:
      "Need an affordable interior designer in Haldwani? Use the spend-save-defer method to plan budgets, compare quotes and avoid cheap mistakes that cost more later.",
    images: ["/og-image.jpg"],
  },
  geo: {
    placename: "Haldwani, Uttarakhand, India",
    region: "IN-UT",
    country: "IN",
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