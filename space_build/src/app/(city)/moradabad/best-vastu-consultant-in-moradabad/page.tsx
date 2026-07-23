import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Best Vastu Consultant in Moradabad | Space Build",
  description:
    "Space Build is among the best vastu consultants in Moradabad, offering experienced guidance, practical remedies & personalized site assessments.",
  keywords:
    "best vastu consultant in Moradabad, top vastu expert Moradabad, Space Build vastu consultation, experienced vastu consultant, vastu expert for home Moradabad, vastu consultant for business, trusted vastu consultant Moradabad, vastu consultation services, vastu specialist Moradabad, hire best vastu consultant",
  alternates: {
    canonical: "https://www.spacebuild.co.in/best-vastu-consultant-in-moradabad",
  },
  openGraph: {
    title: "Best Vastu Consultant in Moradabad | Space Build",
    description:
      "Space Build is among the best vastu consultants in Moradabad, offering experienced guidance, practical remedies & personalized site assessments.",
    url: "https://www.spacebuild.co.in/best-vastu-consultant-in-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best Vastu Consultant in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Vastu Consultant in Moradabad | Space Build",
    description:
      "Space Build is among the best vastu consultants in Moradabad, offering experienced guidance, practical remedies & personalized site assessments.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
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