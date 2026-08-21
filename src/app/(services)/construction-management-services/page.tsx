import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Management Services | Space Build",
  description:
    "Space Build offers expert construction management services covering planning, budgeting, quality control & site supervision for residential and commercial projects.",
  keywords:
    "construction management services, construction project management, construction management company, residential construction management, commercial construction management, construction cost control, construction quality control, construction site supervision, construction planning services, Space Build construction management",
  alternates: {
    canonical: "https://www.spacebuild.co.in/construction-management-services",
  },
  openGraph: {
    title: "Construction Management Services | Space Build",
    description:
      "Space Build offers expert construction management services covering planning, budgeting, quality control & site supervision for residential and commercial projects.",
    url: "https://www.spacebuild.co.in/construction-management-services",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Construction Management Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Management Services | Space Build",
    description:
      "Space Build offers expert construction management services covering planning, budgeting, quality control & site supervision for residential and commercial projects.",
    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782801421/IMG_20260630_112901.jpg_wnfyv5.jpg",
    ],
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