import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Home Construction as Per Vastu | Vastu-Based House Construction Services | Space Build",
  description:
    "Build your dream home with Space Build's home construction as per Vastu services. We specialize in Vastu-compliant house planning, architectural design, construction, and turnkey solutions for positive, balanced, and functional living spaces.",
  keywords:
    "home construction as per vastu, vastu house construction, vastu compliant house construction, vastu construction services, vastu home planning, vastu based home construction, vastu friendly house design, residential vastu construction, modern vastu home, vastu architecture, vastu construction company, house construction with vastu, Space Build",
  alternates: {
    canonical: "https://www.spacebuild.co.in/home-construction-as-per-vastu",
  },
  openGraph: {
    title:
      "Home Construction as Per Vastu | Vastu-Based House Construction Services | Space Build",
    description:
      "Create a Vastu-compliant home with Space Build. We offer expert Vastu-based house construction, planning, architecture, and turnkey construction services for homes designed with harmony and positive energy.",
    url: "https://www.spacebuild.co.in/home-construction-as-per-vastu",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Home Construction as Per Vastu",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Home Construction as Per Vastu | Vastu-Based House Construction Services",
    description:
      "Plan and build your dream home with Vastu principles. Space Build provides complete Vastu-based construction, planning, architecture, and turnkey solutions.",
    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782801421/IMG_20260630_112901.jpg_wnfyv5.jpg",
    ],
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