import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Office in Rampur | Space Build Moradabad",
  description:
    "Want a Vastu-compliant office in Rampur that boosts growth and productivity? Space Build Moradabad offers expert Vastu for office consultancy. Visit https://www.spacebuild.co.in/.",
  keywords:
    "Vastu for office Rampur, office Vastu consultant Rampur, Vastu for workplace, Vastu for business growth, Vastu Shastra for office Moradabad, Vastu for cabin placement, Vastu for reception area, Vastu for cash counter, commercial Vastu expert Rampur, corporate office Vastu, Vastu for shop, Vastu for showroom, Space Build Moradabad, office Vastu consultancy, Vastu for seating arrangement, रामपुर में ऑफिस के लिए वास्तु, ऑफिस वास्तु सलाहकार रामपुर, कार्यालय के लिए वास्तु, व्यापार वृद्धि के लिए वास्तु, वास्तु शास्त्र ऑफिस मुरादाबाद, केबिन के लिए वास्तु, रिसेप्शन एरिया वास्तु, कैश काउंटर वास्तु, दुकान के लिए वास्तु, शोरूम के लिए वास्तु, स्पेस बिल्ड मुरादाबाद, Rampur me office ke liye Vastu, office Vastu consultant Rampur, workplace ke liye Vastu tips, business growth ke liye Vastu, Vastu Shastra office Moradabad, cabin placement Vastu, reception area Vastu tips, cash counter ke liye Vastu, dukan ke liye Vastu salah, showroom Vastu Rampur, Space Build Moradabad office Vastu",
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
    title: "Vastu for Office in Rampur | Space Build Moradabad",
    description:
      "Expert Vastu guidance for offices, shops, and commercial spaces in Rampur by Space Build Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu for Office in Rampur - Space Build Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Office in Rampur | Space Build Moradabad",
    description:
      "Trusted office Vastu consultancy in Rampur by Space Build Moradabad. Book your consultation today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    title: "Vastu for Office in Rampur | Space Build Moradabad",
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