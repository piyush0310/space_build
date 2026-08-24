import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Best Pest Control Moradabad | Space Build – Trusted & Affordable Pest Control Company",
  description:
    "Searching for the best pest control in Moradabad? Space Build provides top-rated, safe, and effective pest control solutions for homes, offices, and industries. Get a free inspection today!",
  keywords:
    "best pest control Moradabad, top pest control company Moradabad, best pest control services Moradabad, trusted pest control Moradabad, professional pest control Moradabad, cockroach control company Moradabad, termite control company Moradabad, mosquito fogging Moradabad, rodent control company Moradabad, bed bug removal Moradabad, best pest exterminator Moradabad, Space Build pest control, top rated pest control Moradabad, reliable pest control company, affordable pest control services, best pest control near me, residential pest control company Moradabad, commercial pest control company Moradabad, pest management company Moradabad, licensed pest control experts Moradabad, Moradabad ki sabse achi pest control company, best pest control service Moradabad mein, bharosemand pest control company Moradabad, ghar ke liye sabse achi pest control, deemak khatam karne wali best company, cockroach hatane wali top company Moradabad, machar bhagane ki best service Moradabad, chuha control ki best company, top pest control company Moradabad mein, Space Build best pest control, sasti aur achi pest control service, office aur dukaan ke liye best pest control, professional pest control experts Moradabad, safai aur pest control ki top company, best pest control, Moradabad, Space Build, top rated, trusted pest control company, cockroach control, termite treatment, mosquito fogging, rodent control, bed bug treatment, professional pest management, affordable pest control, residential pest control, commercial pest control, licensed pest control experts, pest control company near me",
  alternates: {
    canonical: "https://www.spacebuild.co.in/best-pest-control-moradabad",
  },
  openGraph: {
    title:
      "Best Pest Control Moradabad | Space Build – Trusted & Affordable Pest Control Company",
    description:
      "Searching for the best pest control in Moradabad? Space Build provides top-rated, safe, and effective pest control solutions for homes, offices, and industries. Get a free inspection today!",
    url: "https://www.spacebuild.co.in/best-pest-control-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best Pest Control Company in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Pest Control Moradabad | Space Build – Trusted & Affordable Pest Control Company",
    description:
      "Searching for the best pest control in Moradabad? Space Build provides top-rated, safe, and effective pest control solutions for homes, offices, and industries. Get a free inspection today!",
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