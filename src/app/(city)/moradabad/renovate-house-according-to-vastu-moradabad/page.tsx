import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Renovate Your House According to Vastu in Moradabad | Space Build",
  description:
    "Planning a home renovation in Moradabad? Space Build helps you renovate your house according to Vastu Shastra principles for better health, wealth, and harmony. Get expert Vastu-based renovation solutions at https://www.spacebuild.co.in/.",
  keywords:
    "renovate house according to vastu Moradabad, vastu based home renovation, house renovation Moradabad, vastu compliant renovation, vastu shastra renovation tips, home renovation company Moradabad, vastu consultant for renovation, renovate old house as per vastu, vastu friendly interior renovation, house remodeling Moradabad, vastu renovation ideas, kitchen renovation vastu, bedroom renovation vastu, bathroom renovation vastu, best renovation company Moradabad, Space Build Moradabad, vastu shastra home makeover, renovate flat as per vastu, vastu construction Moradabad, home improvement vastu tips, Moradabad me ghar renovation vastu ke anusar, vastu shastra ke hisab se ghar banwana, ghar ki renovation Moradabad, vastu ke niyam se ghar sudharna, purane ghar ka renovation vastu, ghar ka naksha vastu ke anusar, Moradabad renovation company, vastu consultant Moradabad, ghar ki repairing vastu tarike se, kitchen renovation vastu tips, bedroom renovation vastu Hindi, bathroom vastu renovation, ghar ka interior vastu ke anusar, Space Build Moradabad renovation seva, flat renovation vastu Moradabad, ghar sudharne ke vastu tarike, naya ghar banate samay vastu dhyan, house renovation, vastu renovation, Moradabad construction, vastu shastra, home remodeling, Space Build, vastu compliant home, interior renovation, residential renovation Moradabad, vastu construction tips, home improvement, vastu based design, renovation company Moradabad, old house renovation",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Renovate Your House According to Vastu in Moradabad | Space Build",
    description:
      "Planning a home renovation in Moradabad? Space Build helps you renovate your house according to Vastu Shastra principles for better health, wealth, and harmony.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Renovate Your House According to Vastu in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renovate Your House According to Vastu in Moradabad | Space Build",
    description:
      "Planning a home renovation in Moradabad? Space Build helps you renovate your house according to Vastu Shastra principles for better health, wealth, and harmony.",
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