import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Pest Control Annual Maintenance in Moradabad | Space Build – Year-Round Property Care",
  description:
    "Keep your property protected all year with pest control annual maintenance in Moradabad from Space Build. Seasonal treatments, structured schedules and long-term termite protection. Visit spacebuild.co.in to know more.",
  keywords:
    "pest control annual maintenance Moradabad, annual pest maintenance plan, yearly termite maintenance, seasonal pest control schedule, annual pest control package, property maintenance pest control, Space Build Moradabad, year round pest protection, structured pest maintenance plan, annual termite care Moradabad, मोरादाबाद में पेस्ट कंट्रोल वार्षिक रखरखाव, saal bhar ki pest maintenance Moradabad, मौसमी पेस्ट कंट्रोल शेड्यूल, ghar ki annual pest maintenance, वार्षिक दीमक देखभाल मोरादाबाद, property maintenance ke sath pest control, Space Build annual maintenance, poore saal pest protection, मोरादाबाद में सालाना पेस्ट केयर प्लान, structured pest maintenance schedule",
  authors: [
    {
      name: "Space Build",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Pest Control Annual Maintenance in Moradabad | Space Build",
    description:
      "Maintain year-round pest protection for your property in Moradabad with Space Build's structured annual maintenance approach to termite and pest management.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control Annual Maintenance in Moradabad - Space Build",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Annual Maintenance in Moradabad | Space Build",
    description:
      "Maintain year-round pest protection for your property in Moradabad with Space Build's structured annual maintenance approach to termite and pest management.",
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