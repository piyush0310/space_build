import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Cockroach Control in Moradabad | Professional Pest Control Services – Space Build",
  description:
    "Looking for effective cockroach control in Moradabad? Space Build provides professional cockroach pest control services for homes, offices, kitchens, shops and commercial spaces with targeted treatment solutions.",
  keywords:
    "cockroach control Moradabad, cockroach control services Moradabad, cockroach pest control Moradabad, cockroach treatment Moradabad, pest control Moradabad, best cockroach control Moradabad, cockroach removal Moradabad, cockroach exterminator Moradabad, kitchen cockroach control Moradabad, home cockroach control Moradabad, commercial cockroach control Moradabad, cockroach spray service Moradabad, professional pest control Moradabad, cockroach infestation treatment Moradabad, cockroach control near me Moradabad, Moradabad mein cockroach control, cockroach se chutkara Moradabad, ghar mein cockroach ka ilaj, kitchen cockroach control Moradabad, cockroach bhagane ki service Moradabad, cockroach pest control Moradabad, tilchatta control Moradabad, tilchatte se chutkara, tilchatta treatment Moradabad, ghar ke cockroach ka treatment, kitchen mein cockroach ka solution, best cockroach control service Moradabad, professional pest control Moradabad, cockroach ki problem ka solution",
  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.spacebuild.co.in/cockroach-control-moradabad",
  },
  openGraph: {
    title:
      "Cockroach Control in Moradabad | Professional Pest Control Services – Space Build",
    description:
      "Looking for effective cockroach control in Moradabad? Space Build provides professional cockroach pest control services for homes, offices, kitchens, shops and commercial spaces with targeted treatment solutions.",
    url: "https://www.spacebuild.co.in/cockroach-control-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Cockroach Control Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cockroach Control in Moradabad | Professional Pest Control Services – Space Build",
    description:
      "Looking for effective cockroach control in Moradabad? Space Build provides professional cockroach pest control services for homes, offices, kitchens, shops and commercial spaces with targeted treatment solutions.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Moradabad",
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