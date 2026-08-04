import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Project Management in Moradabad | Space Build",
  description:
    "Space Build provides professional interior project management in Moradabad, handling design coordination, execution, budgeting, and quality control for homes and businesses.",
  keywords:
    "interior project management Moradabad, interior design Moradabad, interior contractor Moradabad, interior fit-out Moradabad, Space Build Moradabad, office interior Moradabad, home interior Moradabad, retail interior Moradabad, turnkey interior services Moradabad, interior execution company Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-project-management-moradabad",
  },
  openGraph: {
    title: "Interior Project Management in Moradabad | Space Build",
    description:
      "Space Build provides professional interior project management in Moradabad, handling design coordination, execution, budgeting, and quality control for homes and businesses.",
    url: "https://www.spacebuild.co.in/interior-project-management-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Project Management in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Project Management in Moradabad | Space Build",
    description:
      "Space Build provides professional interior project management in Moradabad, handling design coordination, execution, budgeting, and quality control for homes and businesses.",
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