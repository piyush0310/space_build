import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Office in Moradabad | Space Build Office Vastu Consultation",
  description:
    "Looking for Vastu guidance for your office in Moradabad? Space Build offers practical office Vastu consultation for better productivity, growth & stability.",
  keywords:
    "vastu for office moradabad, office vastu consultant moradabad, vastu for workplace, vastu for cash counter, vastu for employees, vastu for reception area, office vastu remedies, space build office vastu, business vastu consultation, vastu for shops and offices",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-office-moradabad",
  },
  openGraph: {
    title: "Vastu for Office in Moradabad | Space Build Office Vastu Consultation",
    description:
      "Looking for Vastu guidance for your office in Moradabad? Space Build offers practical office Vastu consultation for better productivity, growth & stability.",
    url: "https://www.spacebuild.co.in/vastu-for-office-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Office in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Office in Moradabad | Space Build Office Vastu Consultation",
    description:
      "Looking for Vastu guidance for your office in Moradabad? Space Build offers practical office Vastu consultation for better productivity, growth & stability.",
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