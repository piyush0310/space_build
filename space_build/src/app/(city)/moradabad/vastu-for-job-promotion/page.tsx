import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Job Promotion | Space Build",
  description:
    "Explore Vastu tips believed to support career growth and job promotion with Space Build. Learn home office direction, colors & remedies.",
  keywords:
    "vastu for job promotion, vastu for career growth, vastu tips for success, Space Build vastu consultation, vastu for home office, vastu for professional growth, vastu remedies for career, vastu tips for home Moradabad, vastu for confidence at work, vastu for study table direction",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-job-promotion",
  },
  openGraph: {
    title: "Vastu for Job Promotion | Space Build",
    description:
      "Explore Vastu tips believed to support career growth and job promotion with Space Build. Learn home office direction, colors & remedies.",
    url: "https://www.spacebuild.co.in/vastu-for-job-promotion",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Job Promotion",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Job Promotion | Space Build",
    description:
      "Explore Vastu tips believed to support career growth and job promotion with Space Build. Learn home office direction, colors & remedies.",
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