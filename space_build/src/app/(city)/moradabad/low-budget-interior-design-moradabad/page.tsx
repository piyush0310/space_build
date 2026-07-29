import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Low Budget Interior Design in Moradabad | Space Build – Affordable Home & Office Interiors",
  description:
    "Low Budget Interior Design in Moradabad by Space Build for budget home interiors, affordable interior designer, low cost modular kitchen, budget-friendly renovation ideas, affordable office interior design, and economical interior solutions.",
  keywords:
    "low budget interior design Moradabad, affordable interior designer Moradabad, budget home interiors, cheap interior design ideas, low cost modular kitchen Moradabad, Space Build Moradabad, budget-friendly renovation ideas, affordable office interior design, economical interior solutions, small budget home makeover",
  alternates: {
    canonical: "https://www.spacebuild.co.in/low-budget-interior-design-moradabad",
  },
  openGraph: {
    title: "Low Budget Interior Design in Moradabad | Space Build – Affordable Home & Office Interiors",
    description:
      "Low Budget Interior Design in Moradabad by Space Build for budget home interiors, affordable interior designer, low cost modular kitchen, budget-friendly renovation ideas, affordable office interior design, and economical interior solutions.",
    url: "https://www.spacebuild.co.in/low-budget-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Low Budget Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Low Budget Interior Design in Moradabad | Space Build – Affordable Home & Office Interiors",
    description:
      "Low Budget Interior Design in Moradabad by Space Build for budget home interiors, affordable interior designer, low cost modular kitchen, budget-friendly renovation ideas, affordable office interior design, and economical interior solutions.",
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
