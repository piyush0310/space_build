import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Fit-Out Company in Moradabad | Space Build",
  description:
    "Interior Fit-Out Company in Moradabad by Space Build for offices, retail, showrooms, and commercial spaces. Complete fit-out services from design to handover.",
  keywords:
    "interior fit-out company Moradabad, commercial fit-out Moradabad, office fit-out contractor Moradabad, retail fit-out Moradabad, interior fit-out contractor Moradabad, fit-out services Moradabad, best fit-out company Moradabad, Space Build Moradabad, workspace fit-out Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-fit-out-company-moradabad",
  },
  openGraph: {
    title: "Interior Fit-Out Company in Moradabad | Space Build",
    description:
      "Interior Fit-Out Company in Moradabad by Space Build for offices, retail, showrooms, and commercial spaces. Complete fit-out services from design to handover.",
    url: "https://www.spacebuild.co.in/interior-fit-out-company-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Fit-Out Company in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Fit-Out Company in Moradabad | Space Build",
    description:
      "Interior Fit-Out Company in Moradabad by Space Build for offices, retail, showrooms, and commercial spaces. Complete fit-out services from design to handover.",
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