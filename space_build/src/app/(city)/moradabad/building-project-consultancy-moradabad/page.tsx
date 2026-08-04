import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Building Project Consultancy in Moradabad | Space Build",
  description:
    "Space Build offers expert building project consultancy in Moradabad, guiding clients through planning, design, approvals, and execution for residential and commercial projects.",
  keywords:
    "building project consultancy Moradabad, construction consultancy Moradabad, building consultant Moradabad, project consultancy company Moradabad, Space Build Moradabad, construction advisory Moradabad, building planning consultancy Moradabad, architectural consultancy Moradabad, construction guidance Moradabad, building approval consultancy Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/building-project-consultancy-moradabad",
  },
  openGraph: {
    title: "Building Project Consultancy in Moradabad | Space Build",
    description:
      "Space Build offers expert building project consultancy in Moradabad, guiding clients through planning, design, approvals, and execution for residential and commercial projects.",
    url: "https://www.spacebuild.co.in/building-project-consultancy-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Building Project Consultancy in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building Project Consultancy in Moradabad | Space Build",
    description:
      "Space Build offers expert building project consultancy in Moradabad, guiding clients through planning, design, approvals, and execution for residential and commercial projects.",
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