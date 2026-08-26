import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Office Pest Control Services in Moradabad | Space Build - Reliable Pest Solutions for Workplaces",
  description:
    "Space Build offers professional office pest control services in Moradabad, keeping your workplace hygienic, pest-free, and safe for employees. Trusted solutions for cockroaches, termites, rodents, and more. Visit https://www.spacebuild.co.in/ to book a service today.",
  keywords:
    "office pest control Moradabad, office pest control services, corporate pest control Moradabad, workplace pest management, pest control for offices, cockroach control office Moradabad, termite treatment for offices, rodent control office Moradabad, Space Build pest control, best pest control company Moradabad, commercial office sanitization, pest management services for businesses, मुरादाबाद में ऑफिस पेस्ट कंट्रोल, कार्यालय कीट नियंत्रण सेवाएं, ऑफिस के लिए पेस्ट कंट्रोल, कॉकरोच नियंत्रण ऑफिस मुरादाबाद, दीमक उपचार ऑफिस, चूहा नियंत्रण सेवाएं ऑफिस, स्पेस बिल्ड पेस्ट कंट्रोल मुरादाबाद, कार्यस्थल स्वच्छता सेवाएं, बेस्ट पेस्ट कंट्रोल कंपनी मुरादाबाद, Moradabad me office pest control service, office ke liye pest control company, corporate office pest control Moradabad, cockroach bhagane ka upay office me, dimak treatment office Moradabad, rat control service office ke liye, Space Build pest control company Moradabad, workplace hygiene aur pest control, best pest control service near me, office pest control, corporate pest control, workplace hygiene, Space Build, Moradabad pest control, termite treatment office, rodent control office, cockroach treatment, pest management for businesses, office sanitization services, commercial pest control Moradabad, pest control near me, safe pest control for workplaces, employee health and hygiene",
  alternates: {
    canonical: "https://www.spacebuild.co.in/office-pest-control-moradabad",
  },
  openGraph: {
    title:
      "Office Pest Control Services in Moradabad | Space Build - Reliable Pest Solutions for Workplaces",
    description:
      "Space Build offers professional office pest control services in Moradabad, keeping your workplace hygienic, pest-free, and safe for employees. Trusted solutions for cockroaches, termites, rodents, and more. Visit https://www.spacebuild.co.in/ to book a service today.",
    url: "https://www.spacebuild.co.in/office-pest-control-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Office Pest Control Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Office Pest Control Services in Moradabad | Space Build - Reliable Pest Solutions for Workplaces",
    description:
      "Space Build offers professional office pest control services in Moradabad, keeping your workplace hygienic, pest-free, and safe for employees. Trusted solutions for cockroaches, termites, rodents, and more. Visit https://www.spacebuild.co.in/ to book a service today.",
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