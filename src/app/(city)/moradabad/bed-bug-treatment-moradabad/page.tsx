import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Bed Bug Treatment in Moradabad | Space Build Pest Control Experts",
  description:
    "Struggling with bed bugs at home, hotel, or office in Moradabad? Space Build offers safe, effective, and thorough bed bug treatment services. Book a free inspection today.",
  keywords:
    "bed bug treatment Moradabad, bed bug control Moradabad, bed bug removal Moradabad, best pest control Moradabad, bed bug fumigation Moradabad, bed bug spray services Moradabad, hotel bed bug treatment Moradabad, residential bed bug control Moradabad, mattress bed bug treatment Moradabad, bed bug pest control company Moradabad, Space Build Moradabad, pest control company Moradabad, Moradabad mein khatmal ka ilaj, bed bug treatment Moradabad, khatmal control Moradabad, khatmal bhagane ki seva Moradabad, ghar ke liye khatmal upchar Moradabad, hotel mein khatmal ka ilaj Moradabad, best khatmal control company Moradabad, sasti pest control seva Moradabad, gadde ka khatmal upchar Moradabad, Space Build pest control Moradabad, bed bug treatment, bed bug control, bed bug removal, pest control Moradabad, bed bug fumigation, mattress treatment, Space Build, home pest control, hotel pest control, Uttar Pradesh pest control",
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
    canonical: "https://www.spacebuild.co.in/bed-bug-treatment-moradabad",
  },
  openGraph: {
    title:
      "Bed Bug Treatment in Moradabad | Space Build Pest Control Experts",
    description:
      "Struggling with bed bugs at home, hotel, or office in Moradabad? Space Build offers safe, effective, and thorough bed bug treatment services. Book a free inspection today.",
    url: "https://www.spacebuild.co.in/bed-bug-treatment-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Bed Bug Treatment Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bed Bug Treatment in Moradabad | Space Build Pest Control Experts",
    description:
      "Struggling with bed bugs at home, hotel, or office in Moradabad? Space Build offers safe, effective, and thorough bed bug treatment services. Book a free inspection today.",
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