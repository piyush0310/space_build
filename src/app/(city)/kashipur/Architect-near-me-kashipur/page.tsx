import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architect Near Me Kashipur – Local Design & Vastu Experts | Space Build",
  description:
    "Searching for an architect near you in Kashipur? Space Build offers local, vastu-integrated architecture, interior design, and project management for homes and businesses.",
  keywords:
    "architect near me kashipur, local architect kashipur, best architect near me, architect near me for house, residential architect kashipur, vastu architect near me kashipur, architect near me for construction, top architect kashipur, architecture firm near me kashipur, house design architect near me, architect consultation near me, space build kashipur, nearby architect for home design, local architecture company kashipur, architect and interior designer near me, best local architect uttarakhand, vastu consultant near me kashipur, architect for renovation near me, architect for commercial space kashipur, industrial architect near me kashipur, architect office in kashipur, find architect near me india",
  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/Architect-near-me-kashipur",
  },
  openGraph: {
    title:
      "Architect Near Me Kashipur – Local Design & Vastu Experts | Space Build",
    description:
      "Searching for an architect near you in Kashipur? Space Build offers local, vastu-integrated architecture, interior design, and project management for homes and businesses.",
    url: "https://www.spacebuild.co.in/kashipur/Architect-near-me-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Architect Near Me in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Architect Near Me Kashipur – Local Design & Vastu Experts | Space Build",
    description:
      "Searching for an architect near you in Kashipur? Space Build offers local, vastu-integrated architecture, interior design, and project management for homes and businesses.",
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