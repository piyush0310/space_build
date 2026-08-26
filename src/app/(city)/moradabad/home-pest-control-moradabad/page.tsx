import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Home Pest Control in Moradabad | Space Build - Safe & Effective Pest Solutions for Your Home",
  description:
    "Protect your home from cockroaches, termites, rodents, and mosquitoes with Space Build's trusted home pest control services in Moradabad. Safe, family-friendly treatments for lasting results. Visit https://www.spacebuild.co.in/ to book your service today.",
  keywords:
    "home pest control Moradabad, pest control services for homes, residential pest control Moradabad, termite control home Moradabad, cockroach control services, rodent control home Moradabad, mosquito control services, bed bug treatment Moradabad, Space Build pest control, best home pest control company Moradabad, household pest management, safe pest control for families, मुरादाबाद में घरेलू पेस्ट कंट्रोल, घर के लिए कीट नियंत्रण सेवाएं, दीमक नियंत्रण घर मुरादाबाद, कॉकरोच नियंत्रण सेवाएं, चूहा नियंत्रण घर मुरादाबाद, मच्छर नियंत्रण सेवाएं, खटमल उपचार मुरादाबाद, स्पेस बिल्ड पेस्ट कंट्रोल, बेस्ट होम पेस्ट कंट्रोल कंपनी मुरादाबाद, परिवार के लिए सुरक्षित पेस्ट कंट्रोल, Moradabad me ghar ke liye pest control service, residential pest control company Moradabad, dimak control ghar Moradabad, cockroach bhagane ka tarika ghar me, chuha bhagane ka upay Moradabad, machar control service ghar ke liye, khatmal treatment Moradabad, Space Build pest control company, ghar ke liye best pest control, family ke liye safe pest control, home pest control, residential pest control, Moradabad pest control, Space Build, termite treatment home, rodent control home, cockroach treatment, mosquito control, bed bug treatment, household pest management, pest control near me, safe pest control for families, apartment pest control, house pest control services",
  alternates: {
    canonical: "https://www.spacebuild.co.in/home-pest-control-moradabad",
  },
  openGraph: {
    title:
      "Home Pest Control in Moradabad | Space Build - Safe & Effective Pest Solutions for Your Home",
    description:
      "Protect your home from cockroaches, termites, rodents, and mosquitoes with Space Build's trusted home pest control services in Moradabad. Safe, family-friendly treatments for lasting results. Visit https://www.spacebuild.co.in/ to book your service today.",
    url: "https://www.spacebuild.co.in/home-pest-control-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Home Pest Control in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Home Pest Control in Moradabad | Space Build - Safe & Effective Pest Solutions for Your Home",
    description:
      "Protect your home from cockroaches, termites, rodents, and mosquitoes with Space Build's trusted home pest control services in Moradabad. Safe, family-friendly treatments for lasting results. Visit https://www.spacebuild.co.in/ to book your service today.",
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