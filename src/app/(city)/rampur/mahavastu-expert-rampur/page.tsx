import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Mahavastu Expert in Rampur | Space Build Moradabad",

  description:
    "Searching for a certified Mahavastu expert in Rampur? Space Build Moradabad offers professional Mahavastu consultation for homes, offices & commercial spaces. Visit https://www.spacebuild.co.in/.",

  keywords:
    "Mahavastu expert Rampur, Mahavastu consultant Rampur, best Mahavastu expert near me, Mahavastu consultancy Moradabad, Mahavastu for home, Mahavastu for office, MahaVastu principles, Mahavastu Purusha, Mahavastu Shastri Rampur, residential Mahavastu consultant, commercial Mahavastu expert, Mahavastu architect Rampur, Space Build Moradabad, Mahavastu tips for new house, Mahavastu consultation online, Mahavastu science services, रामपुर में महावास्तु विशेषज्ञ, महावास्तु सलाहकार रामपुर, घर के लिए महावास्तु सेवा, महावास्तु सेवाएं मुरादाबाद, महावास्तु परामर्श रामपुर, ऑफिस महावास्तु सलाहकार, महावास्तु शास्त्र सलाह, स्पेस बिल्ड मुरादाबाद, महावास्तु कंसल्टेंट, निर्माण में महावास्तु मार्गदर्शन, Rampur me Mahavastu expert, Mahavastu consultant Rampur me, ghar ke liye Mahavastu salah, Mahavastu expert Moradabad me, best Mahavastu consultant Rampur, Mahavastu sewa Rampur, office ke liye Mahavastu tips, Space Build Moradabad Mahavastu expert, Mahavastu jankari Hindi me, naye ghar ke liye Mahavastu solution",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Mahavastu Expert in Rampur | Space Build Moradabad",
    description:
      "Professional Mahavastu consultation in Rampur for homes, offices, and commercial buildings by Space Build Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Mahavastu Expert in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mahavastu Expert in Rampur | Space Build Moradabad",
    description:
      "Trusted Mahavastu consultancy services in Rampur by Space Build Moradabad. Book your consultation today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Mahavastu Expert in Rampur | Space Build Moradabad",
    "geo.placename": "Rampur, Uttar Pradesh",
    "geo.region": "IN-UP",
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