import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Expert in Rampur | Experienced Vastu Shastra Consultant – Space Build",
  description:
    "Consult an experienced Vastu expert in Rampur with Space Build. Get practical Vastu Shastra solutions for homes, offices, plots, and factories in Rampur & Moradabad.",
  keywords:
    "vastu expert Rampur, experienced vastu consultant Rampur, vastu shastra expert near me, vastu specialist Rampur Moradabad, certified vastu consultant, home vastu expert, factory vastu expert Rampur, vastu remedies expert, Space Build vastu consultant, vastu shastra advisor Rampur, रामपुर वास्तु विशेषज्ञ, अनुभवी वास्तु सलाहकार रामपुर, वास्तु शास्त्र विशेषज्ञ, प्रमाणित वास्तु सलाहकार, फैक्ट्री वास्तु विशेषज्ञ रामपुर, वास्तु उपाय विशेषज्ञ, स्पेस बिल्ड वास्तु सलाहकार, मुरादाबाद वास्तु विशेषज्ञ, Rampur vastu expert, experienced vastu consultant Rampur me, vastu shastra specialist near me, certified vastu advisor Rampur Moradabad, factory ke liye vastu expert, vastu upay expert Rampur, Space Build vastu consultant, ghar office ke liye vastu specialist, vastu expert, vastu specialist, vastu shastra advisor, Rampur vastu, Moradabad vastu expert, Space Build, experienced vastu consultant, vastu remedies, factory vastu, home vastu specialist, office vastu specialist",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title:
      "Vastu Expert in Rampur | Experienced Vastu Shastra Consultant – Space Build",
    description:
      "Consult an experienced Vastu expert in Rampur with Space Build. Get practical Vastu Shastra solutions for homes, offices, plots, and factories in Rampur & Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Experienced Vastu Expert in Rampur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Expert in Rampur | Experienced Vastu Shastra Consultant – Space Build",
    description:
      "Consult an experienced Vastu expert in Rampur with Space Build. Get practical Vastu Shastra solutions for homes, offices, plots, and factories in Rampur & Moradabad.",
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