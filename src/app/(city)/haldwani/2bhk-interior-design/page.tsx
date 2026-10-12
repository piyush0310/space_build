
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design | Space Build Haldwani",
  description:
    "Plan a smart, stylish 2BHK interior design with Space Build Haldwani. Explore room-wise ideas, storage solutions, materials, and budget tips for a comfortable home. Book your free consultation today.",
  keywords:
    "2BHK interior design, 2BHK home interior, 2BHK interior ideas, 2BHK flat interior, small home interior, 2BHK interior cost, 2BHK modular kitchen, 2BHK living room design, 2BHK bedroom design, 2BHK wardrobe design, 2BHK false ceiling, 2BHK interior package, budget 2BHK interior, 2BHK apartment interior, interior designer Haldwani, interior design Haldwani, Haldwani interiors, home makeover, turnkey interiors, Space Build Haldwani",
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/2bhk-interior-design-in-haldwani",
  },
  openGraph: {
    title: "2BHK Interior Design | Space Build Haldwani",
    description:
      "Plan a smart, stylish 2BHK interior design with Space Build Haldwani. Explore room-wise ideas, storage solutions, materials, and budget tips for a comfortable home. Book your free consultation today.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design | Space Build Haldwani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design | Space Build Haldwani",
    description:
      "Plan a smart, stylish 2BHK interior design with Space Build Haldwani. Explore room-wise ideas, storage solutions, materials, and budget tips for a comfortable home. Book your free consultation today.",
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
