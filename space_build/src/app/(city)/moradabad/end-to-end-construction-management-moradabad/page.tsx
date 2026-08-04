import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "End-to-End Construction Management in Moradabad | Space Build",
  description:
    "Space Build delivers end-to-end construction management in Moradabad, handling design, execution, and handover under one accountable team. Visit spacebuild.co.in.",
  keywords:
    "end-to-end construction management Moradabad, complete construction solutions Moradabad, turnkey construction management, construction management company Moradabad, Space Build Moradabad, design to handover construction, full service construction consultant, integrated construction management, building project management Moradabad, single point construction accountability",
  alternates: {
    canonical: "https://www.spacebuild.co.in/end-to-end-construction-management-moradabad",
  },
  openGraph: {
    title: "End-to-End Construction Management in Moradabad | Space Build",
    description:
      "Space Build delivers end-to-end construction management in Moradabad, handling design, execution, and handover under one accountable team. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/end-to-end-construction-management-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - End-to-End Construction Management in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "End-to-End Construction Management in Moradabad | Space Build",
    description:
      "Space Build delivers end-to-end construction management in Moradabad, handling design, execution, and handover under one accountable team. Visit spacebuild.co.in.",
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