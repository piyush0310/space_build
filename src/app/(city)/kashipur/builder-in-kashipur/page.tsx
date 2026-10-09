import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Builder in Kashipur | Trusted House & Construction Experts",
  description:
    "Looking for a builder in Kashipur? Compare costs, services, materials and timelines, and learn how to pick a reliable construction partner for your home.",
  keywords:
    "Looking for best builder in Kashipur? Trusted construction company offering house construction, civil contractor, turnkey projects, renovation, villa and commercial building services in Kashipur, Uttarakhand.",

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/builder-in-kashipur",
  },

  openGraph: {
    title: "Builder in Kashipur | Trusted House & Construction Experts",
    description:
      "Looking for a builder in Kashipur? Compare costs, services, materials and timelines, and learn how to pick a reliable construction partner for your home.",
    url: "https://www.spacebuild.co.in/kashipur/builder-in-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Builder in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Builder in Kashipur | Trusted House & Construction Experts",
    description:
      "Looking for a builder in Kashipur? Compare costs, services, materials and timelines, and learn how to pick a reliable construction partner for your home.",
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