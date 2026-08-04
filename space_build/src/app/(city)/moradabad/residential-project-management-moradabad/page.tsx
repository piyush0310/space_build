import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Residential Project Management in Moradabad | Space Build",
  description:
    "Planning to build your dream home? Space Build offers expert residential project management in Moradabad, covering design, budgeting, quality & timely delivery. Visit spacebuild.co.in.",
  keywords:
    "residential project management Moradabad, home construction Moradabad, residential construction company Moradabad, house building services Moradabad, Space Build Moradabad, residential contractor Moradabad, home builder Moradabad, villa construction Moradabad, bungalow construction Moradabad, best home construction company Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/residential-project-management-moradabad",
  },
  openGraph: {
    title: "Residential Project Management in Moradabad | Space Build",
    description:
      "Planning to build your dream home? Space Build offers expert residential project management in Moradabad, covering design, budgeting, quality & timely delivery. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/residential-project-management-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Residential Project Management in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Project Management in Moradabad | Space Build",
    description:
      "Planning to build your dream home? Space Build offers expert residential project management in Moradabad, covering design, budgeting, quality & timely delivery. Visit spacebuild.co.in.",
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