import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";
export const metadata = {
  title: "Luxury Modular Kitchen Design & Installation | Space Build",
  description:
    "Discover premium luxury modular kitchen designs by Space Build, featuring high-end materials, smart technology, and custom storage for a stunning, functional kitchen.",
  keywords:
    "luxury modular kitchen, modular kitchen design, luxury kitchen interiors, premium modular kitchen, modular kitchen materials, smart modular kitchen, custom modular kitchen, modular kitchen layouts, Space Build kitchen design",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-design",
  },
  openGraph: {
    title: "Project Management Consultation Services | Space Build",
    description:
      "Get expert project management consultation from Space Build. Improve planning, budgeting, and risk management for residential, commercial & industrial projects.",
    url: "https://www.spacebuild.co.in/project-management-consultation",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Project Management Consultation Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management Consultation Services | Space Build",
    description:
      "Get expert project management consultation from Space Build. Improve planning, budgeting, and risk management for residential, commercial & industrial projects.",
    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782801421/IMG_20260630_112901.jpg_wnfyv5.jpg",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
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