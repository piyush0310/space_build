import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Shastra Consultant in Rampur | Space Build Moradabad",

  description:
    "Looking for a trusted Vastu Shastra consultant in Rampur? Space Build Moradabad offers expert Vastu consultation for homes, offices, and commercial spaces. Visit https://www.spacebuild.co.in/ today.",

  keywords:
    "Vastu Shastra consultant Rampur, Vastu consultant near me, best Vastu expert Rampur, Vastu consultancy Moradabad, home Vastu consultant, office Vastu consultant, Vastu for house construction, Vastu Shastra expert Uttar Pradesh, residential Vastu consultant, commercial Vastu consultant, Vastu architect Rampur, Space Build Moradabad, Vastu tips for new home, Vastu consultation online, Vastu Shastra services, रामपुर में वास्तु शास्त्र सलाहकार, वास्तु शास्त्र विशेषज्ञ रामपुर, घर के लिए वास्तु सलाहकार, वास्तु शास्त्र सेवाएं मुरादाबाद, वास्तु परामर्श रामपुर, ऑफिस वास्तु सलाहकार, वास्तु शास्त्र सलाह, स्पेस बिल्ड मुरादाबाद, वास्तु शास्त्र कंसल्टेंट, निर्माण में वास्तु, Rampur me Vastu Shastra consultant, Vastu expert Rampur me, ghar ke liye Vastu salah, Vastu consultant Moradabad me, best Vastu consultant Rampur, Vastu Shastra sewa Rampur, office ke liye Vastu tips, Space Build Moradabad Vastu consultant, Vastu Shastra jankari, naye ghar ke liye Vastu",

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
    title: "Vastu Shastra Consultant in Rampur | Space Build Moradabad",
    description:
      "Expert Vastu Shastra consultation in Rampur for homes, offices, and commercial buildings by Space Build Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Shastra Consultant in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Shastra Consultant in Rampur | Space Build Moradabad",
    description:
      "Trusted Vastu Shastra consultancy services in Rampur by Space Build Moradabad. Book your consultation today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu Shastra Consultant in Rampur | Space Build Moradabad",
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