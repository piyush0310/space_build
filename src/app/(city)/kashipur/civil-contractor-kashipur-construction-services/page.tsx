import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Civil Contractor Kashipur Construction Services | Complete Service List 2026",

  description:
    "Explore civil contractor construction services in Kashipur: new builds, commercial work, sheds, renovation, repairs and compound work, with scope, process and selection tips.",

  keywords:
    "civil contractor Kashipur construction services, construction service list, new building construction, commercial construction services, industrial shed construction, renovation and remodelling, structural repair services, waterproofing services, boundary wall and gate work, foundation and RCC services, plumbing and electrical coordination, interior finishing services, turnkey construction service, project management support, civil work maintenance, extension and floor addition, site development work, construction consulting, service agreement, Kashipur building services",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build",
    },
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/civil-contractor-kashipur-construction-services",
  },

  openGraph: {
    title:
      "Civil Contractor Kashipur Construction Services | Complete Service List 2026",
    description:
      "Explore civil contractor construction services in Kashipur: new builds, commercial work, sheds, renovation, repairs and compound work, with scope, process and selection tips.",
    url: "https://www.spacebuild.co.in/kashipur/civil-contractor-kashipur-construction-services",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Contractor Kashipur Construction Services - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Civil Contractor Kashipur Construction Services | Complete Service List 2026",
    description:
      "Explore civil contractor construction services in Kashipur: new builds, commercial work, sheds, renovation, repairs and compound work, with scope, process and selection tips.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Kashipur, Uttarakhand",
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