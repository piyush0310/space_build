import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "House Renovation As Per Vastu in Moradabad | Space Build Guide",
  description:
    "Planning a house renovation as per Vastu in Moradabad? Learn the right process, timing, and planning steps with expert guidance from Space Build. Visit https://www.spacebuild.co.in/",
  keywords:
    "house renovation as per vastu moradabad, vastu renovation process, house renovation planning vastu, vastu shubh muhurat renovation, renovation timing vastu, house renovation checklist moradabad, vastu renovation steps, space build moradabad, home renovation budget vastu, vastu renovation guidelines, house upgrade vastu, renovation dos and donts vastu, vastu based home improvement, moradabad house renovation guide, vastu ke anusar ghar renovation, ghar renovation ki planning, renovation ka shubh samay, ghar renovation checklist moradabad, vastu renovation ke steps, ghar renovation budget vastu, ghar upgrade vastu, renovation ke dos and donts, vastu anusar ghar sudhar, moradabad ghar renovation guide, house renovation, vastu, moradabad, renovation planning, vastu muhurat, space build, home improvement, vastu guidelines, renovation checklist, vastu shastra",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "House Renovation As Per Vastu in Moradabad | Space Build Guide",
    description:
      "Planning a house renovation as per Vastu in Moradabad? Learn the right process, timing, and planning steps with expert guidance from Space Build.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - House Renovation As Per Vastu in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Renovation As Per Vastu in Moradabad | Space Build Guide",
    description:
      "Planning a house renovation as per Vastu in Moradabad? Learn the right process, timing, and planning steps with expert guidance from Space Build.",
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