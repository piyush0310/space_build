import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Site Visit in Moradabad | Space Build",
  description:
    "Book a professional Vastu site visit in Moradabad with Space Build. Get on-site assessment, expert recommendations & practical remedies for your property.",
  keywords:
    "vastu site visit Moradabad, vastu consultant site visit, vastu expert Moradabad, Space Build vastu consultation, on-site vastu assessment, vastu inspection Moradabad, vastu tips for home Moradabad, vastu consultation service, vastu report for property, book vastu consultant Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-site-visit-moradabad",
  },
  openGraph: {
    title: "Vastu Site Visit in Moradabad | Space Build",
    description:
      "Book a professional Vastu site visit in Moradabad with Space Build. Get on-site assessment, expert recommendations & practical remedies for your property.",
    url: "https://www.spacebuild.co.in/vastu-site-visit-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Site Visit in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Site Visit in Moradabad | Space Build",
    description:
      "Book a professional Vastu site visit in Moradabad with Space Build. Get on-site assessment, expert recommendations & practical remedies for your property.",
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