import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Post Construction Pest Control in Moradabad | Space Build – Complete Pest Protection",
  description:
    "Space Build offers professional post construction pest control services in Moradabad for homes, offices, and commercial buildings. Get rid of termites, cockroaches, rodents and more. Visit spacebuild.co.in today.",
  keywords:
    "post construction pest control Moradabad, pest control services Moradabad, termite treatment after construction, cockroach control Moradabad, rodent control Moradabad, general pest control Moradabad, Space Build Moradabad, pest treatment for homes, commercial pest control Moradabad, residential pest control services, मोरादाबाद में पोस्ट कंस्ट्रक्शन पेस्ट कंट्रोल, निर्माण के बाद कीट नियंत्रण, घर में दीमक और कॉकरोच का इलाज, chuhe aur kide makode ka ilaj Moradabad, ghar ka pest control Moradabad, makan banne ke baad pest treatment, Space Build पेस्ट कंट्रोल सर्विस, office aur ghar ke liye pest control, मोरादाबाद पेस्ट कंट्रोल कंपनी, kide makode bhagane ka tarika",
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
    title: "Post Construction Pest Control in Moradabad | Space Build",
    description:
      "Comprehensive post construction pest control services in Moradabad by Space Build, protecting your already built property from termites and other common pests.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Post Construction Pest Control in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Post Construction Pest Control in Moradabad | Space Build",
    description:
      "Comprehensive post construction pest control services in Moradabad by Space Build, protecting your already built property from termites and other common pests.",
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