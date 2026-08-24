import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Ant Control Services in Moradabad | Space Build Pest Control Experts",
  description:
    "Dealing with ant trails in your kitchen, garden, or office in Moradabad? Space Build offers safe and effective ant control services with long-lasting results. Book a free inspection today.",
  keywords:
    "ant control services Moradabad, ant control Moradabad, ant removal Moradabad, best pest control Moradabad, kitchen ant treatment Moradabad, ant extermination Moradabad, ant spray services Moradabad, commercial ant control Moradabad, residential ant control Moradabad, ant pest control company Moradabad, Space Build Moradabad, pest control company Moradabad, Moradabad mein cheenti niyantran seva, ant control Moradabad, cheenti bhagane ki seva Moradabad, ghar ke liye cheenti upchar Moradabad, kitchen mein cheenti se bachav Moradabad, best cheenti control company Moradabad, sasti pest control seva Moradabad, cheenti spray seva Moradabad, cheenti hatane ka upay Moradabad, Space Build pest control Moradabad, ant control, ant removal, ant extermination, pest control Moradabad, kitchen pest control, ant spray, Space Build, home pest control, commercial pest control, Uttar Pradesh pest control",
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
    canonical: "https://www.spacebuild.co.in/ant-control-moradabad",
  },
  openGraph: {
    title:
      "Ant Control Services in Moradabad | Space Build Pest Control Experts",
    description:
      "Dealing with ant trails in your kitchen, garden, or office in Moradabad? Space Build offers safe and effective ant control services with long-lasting results. Book a free inspection today.",
    url: "https://www.spacebuild.co.in/ant-control-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Ant Control Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ant Control Services in Moradabad | Space Build Pest Control Experts",
    description:
      "Dealing with ant trails in your kitchen, garden, or office in Moradabad? Space Build offers safe and effective ant control services with long-lasting results. Book a free inspection today.",
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