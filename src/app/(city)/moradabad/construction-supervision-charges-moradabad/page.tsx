import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Supervision Charges in Moradabad | Space Build",
  description:
    "Understand how construction supervision charges work in Moradabad and what influences pricing. Space Build offers transparent, value-driven supervision services. Visit spacebuild.co.in.",
  keywords:
    "construction supervision charges Moradabad, construction supervision cost, site supervision fees Moradabad, construction supervision consultant, Space Build Moradabad, building supervision pricing, construction site supervision services, supervision charges per square foot, residential construction supervision cost, construction management fees Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/construction-supervision-charges-moradabad",
  },
  openGraph: {
    title: "Construction Supervision Charges in Moradabad | Space Build",
    description:
      "Understand how construction supervision charges work in Moradabad and what influences pricing. Space Build offers transparent, value-driven supervision services. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/construction-supervision-charges-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Construction Supervision Charges in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Supervision Charges in Moradabad | Space Build",
    description:
      "Understand how construction supervision charges work in Moradabad and what influences pricing. Space Build offers transparent, value-driven supervision services. Visit spacebuild.co.in.",
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