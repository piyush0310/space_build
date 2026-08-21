import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Commercial Project Management in Moradabad | Space Build",
  description:
    "Space Build offers expert commercial project management in Moradabad, covering planning, execution, budgeting, and quality control for offices, retail, and industrial projects.",
  keywords:
    "commercial project management Moradabad, commercial construction Moradabad, project management company Moradabad, commercial building contractor Moradabad, Space Build Moradabad, office construction Moradabad, retail construction Moradabad, industrial project management Moradabad, construction management services Moradabad, commercial property development Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/commercial-project-management-moradabad",
  },
  openGraph: {
    title: "Commercial Project Management in Moradabad | Space Build",
    description:
      "Space Build offers expert commercial project management in Moradabad, covering planning, execution, budgeting, and quality control for offices, retail, and industrial projects.",
    url: "https://www.spacebuild.co.in/commercial-project-management-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Commercial Project Management in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Project Management in Moradabad | Space Build",
    description:
      "Space Build offers expert commercial project management in Moradabad, covering planning, execution, budgeting, and quality control for offices, retail, and industrial projects.",
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