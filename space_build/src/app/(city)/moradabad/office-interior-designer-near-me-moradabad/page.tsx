import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Office Interior Designer Near Me in Moradabad | Space Build",
  description:
    "Office Interior Designer Near Me in Moradabad by Space Build for office interior design, corporate office interiors, commercial workspace design, office renovation, and office fit-out services.",
  keywords:
    "office interior designer near me Moradabad, office interior design Moradabad, corporate office interiors Moradabad, commercial office designer Moradabad, workspace interior design Moradabad, office renovation Moradabad, best office interior designer Moradabad, Space Build Moradabad, office fit-out Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/office-interior-designer-near-me-moradabad",
  },
  openGraph: {
    title: "Office Interior Designer Near Me in Moradabad | Space Build",
    description:
      "Office Interior Designer Near Me in Moradabad by Space Build for office interior design, corporate office interiors, commercial workspace design, office renovation, and office fit-out services.",
    url: "https://www.spacebuild.co.in/office-interior-designer-near-me-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Office Interior Designer Near Me in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Interior Designer Near Me in Moradabad | Space Build",
    description:
      "Office Interior Designer Near Me in Moradabad by Space Build for office interior design, corporate office interiors, commercial workspace design, office renovation, and office fit-out services.",
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