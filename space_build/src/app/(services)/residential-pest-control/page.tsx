import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Residential Pest Control Services | Safe & Effective Home Protection",
  description:
    "Protect your home from termites, rodents, and insects with expert residential pest control. Safe, effective, and long-lasting solutions for a pest-free home.",
  keywords:
    "residential pest control, home pest control services, termite control, rodent control, cockroach control, mosquito control, pest control company, pest prevention tips, eco-friendly pest control, professional exterminator services, bed bug treatment, ant control, seasonal pest control, pest control near me, home pest inspection",
  alternates: {
    canonical: "https://www.spacebuild.co.in/residential-pest-control",
  },
  openGraph: {
    title: "Residential Pest Control Services | Safe & Effective Home Protection",
    description:
      "Protect your home from termites, rodents, and insects with expert residential pest control. Safe, effective, and long-lasting solutions for a pest-free home.",
    url: "https://www.spacebuild.co.in/residential-pest-control",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Residential Pest Control Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Pest Control Services | Safe & Effective Home Protection",
    description:
      "Protect your home from termites, rodents, and insects with expert residential pest control. Safe, effective, and long-lasting solutions for a pest-free home.",
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