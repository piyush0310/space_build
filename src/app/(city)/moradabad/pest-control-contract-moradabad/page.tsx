import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Pest Control Contract in Moradabad | Space Build – Annual Maintenance Plans",
  description:
    "Get year-round protection with a pest control contract in Moradabad from Space Build. Explore annual maintenance plans for termite treatment and general pest control. Visit spacebuild.co.in to enroll.",
  keywords:
    "pest control contract Moradabad, annual maintenance contract pest control, pest control AMC Moradabad, yearly pest control plan, termite treatment contract, pest control agreement, Space Build Moradabad, commercial pest control contract, residential pest control AMC, pest control service agreement, मोरादाबाद में पेस्ट कंट्रोल कॉन्ट्रैक्ट, saal bhar ka pest control plan Moradabad, pest control AMC kya hota hai, वार्षिक दीमक उपचार अनुबंध, ghar ke liye pest control agreement, बिज़नेस के लिए पेस्ट कंट्रोल कॉन्ट्रैक्ट, Space Build annual plan, yearly deemak treatment contract, मोरादाबाद पेस्ट कंट्रोल समझौता, office pest control ka contract",
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
    title: "Pest Control Contract in Moradabad | Space Build",
    description:
      "Sign up for a pest control annual maintenance contract in Moradabad with Space Build for consistent termite protection and pest management throughout the year.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control Contract in Moradabad - Space Build",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Contract in Moradabad | Space Build",
    description:
      "Sign up for a pest control annual maintenance contract in Moradabad with Space Build for consistent termite protection and pest management throughout the year.",
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