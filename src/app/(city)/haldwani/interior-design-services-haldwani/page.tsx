
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Design Services Haldwani | Packages & Deliverables",
  description:
    "Exploring interior design services in Haldwani? Compare service types, deliverables, costs, timelines and contract points before choosing your provider.",
  keywords: [
    "interior design services in Haldwani",
    "full home interior design Haldwani",
    "modular kitchen design Haldwani",
    "wardrobe design Haldwani",
    "home renovation services Haldwani",
    "office interior design Haldwani",
    "Vastu planning Haldwani",
    "interior project management Haldwani",
    "interior design packages Haldwani",
    "interior design cost Haldwani",
    "interior design deliverables Haldwani",
    "interior design warranty Haldwani",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/interior-design-services-haldwani",
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
    title: "Interior Design Services Haldwani | Packages & Deliverables",
    description:
      "Exploring interior design services in Haldwani? Compare service types, deliverables, costs, timelines and contract points before choosing your provider.",
    url: "https://www.spacebuild.co.in/haldwani/interior-design-services-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior design services in Haldwani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Services Haldwani | Packages & Deliverables",
    description:
      "Compare interior design services in Haldwani, including packages, deliverables, costs, timelines and warranties.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.placename": "Haldwani, Uttarakhand, India",
    "geo.region": "IN-UT",
    "geo.country": "IN",
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