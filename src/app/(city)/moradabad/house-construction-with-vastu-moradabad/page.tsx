import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "House Construction with Vastu in Moradabad | Space Build",
  description:
    "Space Build offers reliable house construction with Vastu in Moradabad. Get a well-planned, durable home designed with correct direction, energy flow & modern comfort.",
  keywords:
    "house construction with vastu moradabad, vastu house construction, home construction company moradabad, vastu based house building, space build moradabad, vastu home design moradabad, best house builders moradabad, vastu construction services, residential construction with vastu, vastu construction company",
  alternates: {
    canonical: "https://www.spacebuild.co.in/house-construction-with-vastu-moradabad",
  },
  openGraph: {
    title: "House Construction with Vastu in Moradabad | Space Build",
    description:
      "Space Build offers reliable house construction with Vastu in Moradabad. Get a well-planned, durable home designed with correct direction, energy flow & modern comfort.",
    url: "https://www.spacebuild.co.in/house-construction-with-vastu-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - House Construction with Vastu in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "House Construction with Vastu in Moradabad | Space Build",
    description:
      "Space Build offers reliable house construction with Vastu in Moradabad. Get a well-planned, durable home designed with correct direction, energy flow & modern comfort.",
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