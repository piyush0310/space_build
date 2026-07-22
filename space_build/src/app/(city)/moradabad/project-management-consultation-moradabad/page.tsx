import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Project Management Consultation in Moradabad | Space Build",
  description:
    "Get expert project management consultation in Moradabad with Space Build. Reliable planning, budgeting, execution & quality control for your projects.",
  keywords:
    "project management consultation Moradabad, project management consultant Moradabad, construction project management Moradabad, Space Build project consultation, interior project management Moradabad, construction consultancy Moradabad, project planning services Moradabad, building project management, real estate project consultant Moradabad, project execution consultancy",
  alternates: {
    canonical: "https://www.spacebuild.co.in/project-management-consultation-moradabad",
  },
  openGraph: {
    title: "Project Management Consultation in Moradabad | Space Build",
    description:
      "Get expert project management consultation in Moradabad with Space Build. Reliable planning, budgeting, execution & quality control for your projects.",
    url: "https://www.spacebuild.co.in/project-management-consultation-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Project Management Consultation in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management Consultation in Moradabad | Space Build",
    description:
      "Get expert project management consultation in Moradabad with Space Build. Reliable planning, budgeting, execution & quality control for your projects.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
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