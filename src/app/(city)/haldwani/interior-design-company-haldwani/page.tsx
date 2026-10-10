
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Design Company Haldwani | Inside the Teams",
  description:
    "Looking at an interior design company in Haldwani? Learn what each internal team does, from design to site, and how to judge them before hiring.",
  keywords: [
    "interior design company in Haldwani",
    "interior design company Haldwani",
    "interior designers Haldwani",
    "interior design teams",
    "interior design company hiring guide",
    "interior design estimating",
    "interior design procurement",
    "interior design workshop",
    "interior design site execution",
    "interior design after-sales service",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/interior-design-company-haldwani",
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
    title: "Interior Design Company Haldwani | Inside the Teams",
    description:
      "Looking at an interior design company in Haldwani? Learn what each internal team does, from design to site, and how to judge them before hiring.",
    url: "https://www.spacebuild.co.in/haldwani/interior-design-company-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Company in Haldwani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Company Haldwani | Inside the Teams",
    description:
      "Looking at an interior design company in Haldwani? Learn what each internal team does, from design to site, and how to judge them before hiring.",
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
