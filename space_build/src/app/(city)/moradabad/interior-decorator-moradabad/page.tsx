import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Decorator in Moradabad | Space Build",
  description:
    "Space Build is a trusted interior decorator in Moradabad offering personalized home & office decor, furnishing, styling & complete interior decoration solutions.",
  keywords:
    "interior decorator Moradabad, interior decoration services Moradabad, best interior decorator near me, home decor Moradabad, office decoration services, Space Build interior decorator, furnishing and decor solutions, wall decor Moradabad, interior styling company, home decoration company Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-decorator-moradabad",
  },
  openGraph: {
    title: "Interior Decorator in Moradabad | Space Build",
    description:
      "Space Build is a trusted interior decorator in Moradabad offering personalized home & office decor, furnishing, styling & complete interior decoration solutions.",
    url: "https://www.spacebuild.co.in/interior-decorator-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Decorator in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Decorator in Moradabad | Space Build",
    description:
      "Space Build is a trusted interior decorator in Moradabad offering personalized home & office decor, furnishing, styling & complete interior decoration solutions.",
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