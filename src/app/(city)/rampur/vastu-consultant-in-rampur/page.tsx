import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultant in Rampur | Best Vastu Shastra Expert – Space Build",
  description:
    "Looking for a trusted Vastu consultant in Rampur? Space Build offers expert Vastu Shastra consultation for homes, offices, and commercial spaces. Book a consultation today.",
  keywords:
    "vastu consultant in Rampur, vastu expert Rampur, vastu shastra consultant Rampur, best vastu consultant near me, home vastu consultant Rampur, office vastu consultant, vastu consultant for plot, vastu shastra expert, vastu tips for home, Space Build Rampur, रामपुर में वास्तु सलाहकार, वास्तु शास्त्र विशेषज्ञ रामपुर, घर के लिए वास्तु सलाहकार, ऑफिस वास्तु सलाहकार, प्लॉट वास्तु परामर्श, वास्तु शास्त्र टिप्स, वास्तु दोष निवारण, सर्वश्रेष्ठ वास्तु सलाहकार रामपुर, Rampur me vastu consultant, vastu shastra expert Rampur me, ghar ke liye vastu consultant, best vastu consultant Rampur, vastu dosh nivaran Rampur, office ke liye vastu tips, plot vastu consultant Rampur, vastu shastra jankari, vastu consultant, vastu shastra, Rampur vastu expert, Space Build, home vastu, office vastu, vastu consultation, vastu dosh remedies, vastu for plot, vastu for construction, residential vastu, commercial vastu",
  alternates: {
    canonical: "https://www.spacebuild.co.in/rampur/vastu-consultant-in-rampur",
  },
  openGraph: {
    title: "Vastu Consultant in Rampur | Best Vastu Shastra Expert – Space Build",
    description:
      "Looking for a trusted Vastu consultant in Rampur? Space Build offers expert Vastu Shastra consultation for homes, offices, and commercial spaces. Book a consultation today.",
    url: "https://www.spacebuild.co.in/rampur/vastu-consultant-in-rampur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Consultant in Rampur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant in Rampur | Best Vastu Shastra Expert – Space Build",
    description:
      "Looking for a trusted Vastu consultant in Rampur? Space Build offers expert Vastu Shastra consultation for homes, offices, and commercial spaces. Book a consultation today.",
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
