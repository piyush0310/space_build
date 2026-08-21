import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Turnkey Project Management in Moradabad | Space Build",
  description:
    "Space Build offers turnkey project management in Moradabad, delivering fully finished, ready-to-use spaces under one contract, from design to final handover.",
  keywords:
    "turnkey project management Moradabad, turnkey construction Moradabad, turnkey contractor Moradabad, turnkey interior services Moradabad, Space Build Moradabad, turnkey building solutions Moradabad, end-to-end construction Moradabad, single contract construction Moradabad, ready to move construction Moradabad, turnkey commercial project Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/turnkey-project-management-moradabad",
  },
  openGraph: {
    title: "Turnkey Project Management in Moradabad | Space Build",
    description:
      "Space Build offers turnkey project management in Moradabad, delivering fully finished, ready-to-use spaces under one contract, from design to final handover.",
    url: "https://www.spacebuild.co.in/turnkey-project-management-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Turnkey Project Management in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Turnkey Project Management in Moradabad | Space Build",
    description:
      "Space Build offers turnkey project management in Moradabad, delivering fully finished, ready-to-use spaces under one contract, from design to final handover.",
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