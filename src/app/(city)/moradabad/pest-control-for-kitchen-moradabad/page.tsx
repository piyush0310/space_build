import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Pest Control for Kitchen in Moradabad | Space Build - Safe Kitchen Pest Solutions",
  description:
    "Keep your kitchen hygienic and pest-free with Space Build's specialized kitchen pest control services in Moradabad. Effective treatments for cockroaches, ants, rodents, and stored food pests. Visit https://www.spacebuild.co.in/ to book your service today.",
  keywords:
    "kitchen pest control Moradabad, pest control for kitchen, cockroach control kitchen Moradabad, ant control kitchen services, rodent control kitchen Moradabad, stored food pest control, restaurant kitchen pest control, commercial kitchen pest management, Space Build pest control, best kitchen pest control company Moradabad, food safe pest control services, hygienic kitchen pest solutions, मुरादाबाद में रसोई पेस्ट कंट्रोल, किचन के लिए कीट नियंत्रण सेवाएं, रसोई में कॉकरोच नियंत्रण, चींटी नियंत्रण किचन सेवाएं, चूहा नियंत्रण रसोई मुरादाबाद, खाद्य भंडारण कीट नियंत्रण, होटल रसोई पेस्ट कंट्रोल, स्पेस बिल्ड पेस्ट कंट्रोल, बेस्ट किचन पेस्ट कंट्रोल कंपनी मुरादाबाद, खाद्य सुरक्षित पेस्ट कंट्रोल सेवाएं, Moradabad me kitchen pest control service, kitchen ke liye pest control company, cockroach control kitchen Moradabad, chinti bhagane ka upay kitchen me, chuha control kitchen service Moradabad, restaurant kitchen pest control Moradabad, food safe pest control treatment, Space Build pest control company, kitchen ke liye best pest control, hygienic kitchen pest solutions, kitchen pest control, cockroach control kitchen, ant control kitchen, rodent control kitchen, food safe pest control, restaurant kitchen hygiene, Space Build, Moradabad pest control, stored food pest management, commercial kitchen pest control, pest control near me, hygienic kitchen solutions, safe pest control for food areas",
  alternates: {
    canonical: "https://www.spacebuild.co.in/kitchen-pest-control-moradabad",
  },
  openGraph: {
    title:
      "Pest Control for Kitchen in Moradabad | Space Build - Safe Kitchen Pest Solutions",
    description:
      "Keep your kitchen hygienic and pest-free with Space Build's specialized kitchen pest control services in Moradabad. Effective treatments for cockroaches, ants, rodents, and stored food pests. Visit https://www.spacebuild.co.in/ to book your service today.",
    url: "https://www.spacebuild.co.in/kitchen-pest-control-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Pest Control for Kitchen in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pest Control for Kitchen in Moradabad | Space Build - Safe Kitchen Pest Solutions",
    description:
      "Keep your kitchen hygienic and pest-free with Space Build's specialized kitchen pest control services in Moradabad. Effective treatments for cockroaches, ants, rodents, and stored food pests. Visit https://www.spacebuild.co.in/ to book your service today.",
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