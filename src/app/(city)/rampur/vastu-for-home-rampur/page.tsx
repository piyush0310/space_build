import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Home in Rampur | Space Build Moradabad",

  description:
    "Planning to build or renovate your house in Rampur? Get expert Vastu for home guidance from Space Build Moradabad for a balanced, prosperous living space. Visit https://www.spacebuild.co.in/.",

  keywords:
    "Vastu for home Rampur, home Vastu tips Rampur, house Vastu consultant Rampur, Vastu for new house, Vastu for home construction, Vastu Shastra for house Moradabad, Vastu for bedroom, Vastu for kitchen, Vastu for main door, Vastu for pooja room, residential Vastu expert Rampur, Vastu for independent house, home Vastu consultancy, Space Build Moradabad, Vastu for flat, Vastu tips for family home, रामपुर में घर के लिए वास्तु, घर वास्तु टिप्स रामपुर, मकान के लिए वास्तु सलाहकार, नए घर के लिए वास्तु, घर निर्माण में वास्तु, वास्तु शास्त्र घर के लिए मुरादाबाद, बेडरूम के लिए वास्तु, रसोई के लिए वास्तु, मुख्य द्वार वास्तु, पूजा घर वास्तु, स्पेस बिल्ड मुरादाबाद, फ्लैट के लिए वास्तु, Rampur me ghar ke liye Vastu, ghar Vastu tips Rampur, makan ke liye Vastu consultant, naye ghar ke liye Vastu, ghar banate samay Vastu, Vastu Shastra ghar ke liye Moradabad, bedroom ke liye Vastu tips, kitchen ke liye Vastu, main door Vastu Rampur, pooja room Vastu tips, Space Build Moradabad home Vastu, flat ke liye Vastu salah",

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
    title: "Vastu for Home in Rampur | Space Build Moradabad",
    description:
      "Expert Vastu guidance for homes in Rampur, covering construction, renovation, and interior planning, by Space Build Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu for Home in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu for Home in Rampur | Space Build Moradabad",
    description:
      "Trusted home Vastu consultancy in Rampur by Space Build Moradabad. Book your consultation today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu for Home in Rampur | Space Build Moradabad",
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