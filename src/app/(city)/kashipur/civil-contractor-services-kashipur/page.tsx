import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Civil Contractor Services Kashipur | Scope & Standards Guide",
  description:
    "Need civil contractor services in Kashipur? Use a scope-of-work menu with service standards for surveys, RCC, waterproofing, drainage and repairs.",
  keywords: [
    "civil contractor services in Kashipur",
    "civil contractor Kashipur",
    "civil construction services Kashipur",
    "civil contractor scope of work",
    "construction site surveys",
    "earthwork services",
    "foundation construction",
    "RCC construction services",
    "reinforced cement concrete work",
    "masonry services",
    "waterproofing services Kashipur",
    "drainage construction",
    "building repair services",
    "construction scope sheet",
    "civil construction service standards",
    "construction quality standards",
    "written construction warranty",
    "civil contractor service agreement",
    "residential construction services",
    "commercial civil construction",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/civil-contractor-services-kashipur",
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
    title: "Civil Contractor Services Kashipur | Scope & Standards Guide",
    description:
      "Need civil contractor services in Kashipur? Use a scope-of-work menu with service standards for surveys, RCC, waterproofing, drainage and repairs.",
    url: "https://www.spacebuild.co.in/kashipur/civil-contractor-services-kashipur",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Contractor Services Kashipur - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil Contractor Services Kashipur | Scope & Standards Guide",
    description:
      "Need civil contractor services in Kashipur? Use a scope-of-work menu with service standards for surveys, RCC, waterproofing, drainage and repairs.",
    images: ["/og-image.jpg"],
  },
  geo: {
    placename: "Kashipur, Uttarakhand, India",
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