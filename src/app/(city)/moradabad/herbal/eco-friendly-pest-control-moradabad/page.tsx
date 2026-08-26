import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Herbal & Eco-Friendly Pest Control in Moradabad | Space Build – Safe, Green Solutions",
  description:
    "Choose herbal and eco-friendly pest control in Moradabad with Space Build. Safe for children, pets and the environment while effectively controlling termites and other pests. Visit spacebuild.co.in to learn more.",
  keywords:
    "herbal pest control Moradabad, eco friendly pest control Moradabad, organic termite treatment, chemical free pest control, green pest control services, natural pest control Moradabad, Space Build Moradabad, non-toxic pest control, safe pest control for kids and pets, botanical pest control solutions, मोरादाबाद में हर्बल पेस्ट कंट्रोल, eco friendly pest control Moradabad, प्राकृतिक दीमक उपचार मोरादाबाद, bina chemical wala pest control, बच्चों और पालतू जानवरों के लिए सुरक्षित पेस्ट कंट्रोल, ghar ke liye herbal pest control, Space Build हर्बल सर्विस, chemical free deemak ka ilaj, मोरादाबाद में जैविक पेस्ट कंट्रोल, safe aur natural pest control",
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
    title: "Herbal & Eco-Friendly Pest Control in Moradabad | Space Build",
    description:
      "Get safe, chemical-conscious pest control in Moradabad with Space Build's herbal and eco-friendly treatment options for homes and businesses.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Herbal and Eco-Friendly Pest Control in Moradabad - Space Build",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herbal & Eco-Friendly Pest Control in Moradabad | Space Build",
    description:
      "Get safe, chemical-conscious pest control in Moradabad with Space Build's herbal and eco-friendly treatment options for homes and businesses.",
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