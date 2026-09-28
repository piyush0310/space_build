import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Professional Architect in Kashipur – Qualified Design Experts | Space Build",
  description:
    "Hire a professional, registered architect in Kashipur. Space Build offers qualified architecture, structural coordination, vastu and interior design services you can trust.",
  keywords:
    "professional architect in kashipur, registered architect kashipur, qualified architect kashipur, coa registered architect kashipur, best professional architect kashipur, licensed architect kashipur, experienced architect kashipur, architect qualifications india, vastu architect professional kashipur, residential architect kashipur, commercial architect kashipur, industrial architect kashipur, structural architect kashipur, space build professional architect, certified architecture firm kashipur, house design architect kashipur, architect credentials verification, professional architecture services kashipur, top architect kashipur, architect for home construction kashipur, council of architecture registered kashipur",
  alternates: {
    canonical: "https://www.spacebuild.co.in/professional-architect-kashipur",
  },
  openGraph: {
    title:
      "Professional Architect in Kashipur – Qualified Design Experts | Space Build",
    description:
      "Hire a professional, registered architect in Kashipur. Space Build offers qualified architecture, structural coordination, vastu and interior design services you can trust.",
    url: "https://www.spacebuild.co.in/professional-architect-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Professional Architect in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Professional Architect in Kashipur – Qualified Design Experts | Space Build",
    description:
      "Hire a professional, registered architect in Kashipur. Space Build offers qualified architecture, structural coordination, vastu and interior design services you can trust.",
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