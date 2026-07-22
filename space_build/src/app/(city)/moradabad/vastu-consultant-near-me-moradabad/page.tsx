import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultant Near Me in Moradabad | Space Build Local Experts",
  description:
    "Searching for a Vastu consultant near you in Moradabad? Space Build offers local, on-site Vastu consultation for homes, offices & plots with practical remedies.",
  keywords:
    "vastu consultant near me moradabad, local vastu expert moradabad, nearby vastu consultant, vastu consultant moradabad city, vastu services near me, vastu for home near me, vastu for office moradabad, space build local vastu expert, on-site vastu consultation, vastu consultant contact moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-consultant-near-me-moradabad",
  },
  openGraph: {
    title: "Vastu Consultant Near Me in Moradabad | Space Build Local Experts",
    description:
      "Searching for a Vastu consultant near you in Moradabad? Space Build offers local, on-site Vastu consultation for homes, offices & plots with practical remedies.",
    url: "https://www.spacebuild.co.in/vastu-consultant-near-me-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Consultant Near Me in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant Near Me in Moradabad | Space Build Local Experts",
    description:
      "Searching for a Vastu consultant near you in Moradabad? Space Build offers local, on-site Vastu consultation for homes, offices & plots with practical remedies.",
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