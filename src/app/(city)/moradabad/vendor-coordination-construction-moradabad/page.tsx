import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vendor Coordination for Construction in Moradabad | Space Build",
  description:
    "Space Build manages vendor coordination for construction projects in Moradabad, handling selection, scheduling, and quality alignment across all trades.",
  keywords:
    "vendor coordination construction Moradabad, construction vendor management Moradabad, subcontractor coordination Moradabad, construction vendor selection Moradabad, Space Build Moradabad, material vendor management Moradabad, contractor coordination Moradabad, trade coordination construction Moradabad, supplier management construction Moradabad, multi-vendor construction Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vendor-coordination-construction-moradabad",
  },
  openGraph: {
    title: "Vendor Coordination for Construction in Moradabad | Space Build",
    description:
      "Space Build manages vendor coordination for construction projects in Moradabad, handling selection, scheduling, and quality alignment across all trades.",
    url: "https://www.spacebuild.co.in/vendor-coordination-construction-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vendor Coordination for Construction in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendor Coordination for Construction in Moradabad | Space Build",
    description:
      "Space Build manages vendor coordination for construction projects in Moradabad, handling selection, scheduling, and quality alignment across all trades.",
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