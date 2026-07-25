import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Hospital/Clinic in Moradabad | Space Build",
  description:
    "Learn Vastu tips for hospitals and clinics in Moradabad with Space Build. Ideal direction, layout, colors & remedies for a calming healthcare space.",
  keywords:
    "vastu for hospital Moradabad, vastu for clinic Moradabad, healthcare facility vastu tips, Space Build vastu consultation, clinic direction as per vastu, hospital layout vastu, vastu tips for clinic Moradabad, vastu remedies for hospital, medical facility design ideas, vastu for reception area",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-hospital-clinic-moradabad",
  },
  openGraph: {
    title: "Vastu for Hospital/Clinic in Moradabad | Space Build",
    description:
      "Learn Vastu tips for hospitals and clinics in Moradabad with Space Build. Ideal direction, layout, colors & remedies for a calming healthcare space.",
    url: "https://www.spacebuild.co.in/vastu-for-hospital-clinic-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Hospital/Clinic in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Hospital/Clinic in Moradabad | Space Build",
    description:
      "Learn Vastu tips for hospitals and clinics in Moradabad with Space Build. Ideal direction, layout, colors & remedies for a calming healthcare space.",
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