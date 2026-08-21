import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Project Management Consultancy Services | Space Build",
  description:
    "Space Build offers expert project management consultancy services, providing strategic planning, budgeting, and risk management for residential and commercial projects.",
  keywords:
    "project management consultancy, project management consultants, construction consultancy services, project planning and budgeting, project risk management, construction quality assurance, project procurement management, Space Build project consultancy",
  alternates: {
    canonical: "https://www.spacebuild.co.in/project-management-consultation",
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