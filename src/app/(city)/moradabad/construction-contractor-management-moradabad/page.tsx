import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Contractor Management in Moradabad | Space Build",
  description:
    "Space Build provides professional construction contractor management in Moradabad, coordinating labor, vendors, and site operations for timely, quality-driven project delivery. Visit spacebuild.co.in.",
  keywords:
    "construction contractor management Moradabad, contractor management services, construction management Moradabad, site management consultant, labor contractor coordination, Space Build Moradabad, building contractor supervision, vendor management construction, project contractor consultancy, construction site coordination Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/construction-contractor-management-moradabad",
  },
  openGraph: {
    title: "Construction Contractor Management in Moradabad | Space Build",
    description:
      "Space Build provides professional construction contractor management in Moradabad, coordinating labor, vendors, and site operations for timely, quality-driven project delivery. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/construction-contractor-management-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Construction Contractor Management in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Contractor Management in Moradabad | Space Build",
    description:
      "Space Build provides professional construction contractor management in Moradabad, coordinating labor, vendors, and site operations for timely, quality-driven project delivery. Visit spacebuild.co.in.",
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