import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Project Management Services in Rampur | Guide",

  description:
    "Explore construction project management services in Rampur: scope, stages, cost control, quality checks, fees and tips to hire a dependable team for your build.",

  keywords:
    "construction project management services Rampur, construction management company Rampur, construction project manager Rampur, building construction consultant Rampur, residential construction management, commercial construction management Rampur, construction supervision services, site supervision Rampur, construction cost control services, construction scheduling and planning, construction quality control Rampur, turnkey construction services Rampur, house construction cost Rampur, construction project management fees, construction contractor in Rampur, building contractor near me",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Construction Project Management Services in Rampur | Guide",
    description:
      "Explore construction project management services in Rampur: scope, stages, cost control, quality checks, fees and tips to hire a dependable team for your build.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Project Management Services in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Construction Project Management Services in Rampur | Guide",
    description:
      "Explore construction project management services in Rampur: scope, stages, cost control, quality checks, fees and tips to hire a dependable team for your build.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Construction Project Management Services in Rampur | Guide",
    "geo.placename": "Rampur, Uttar Pradesh",
    "geo.region": "IN-UP",
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