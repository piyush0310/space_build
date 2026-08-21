import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Planning Consultant in Moradabad | Space Build",
  description:
    "Space Build works as a trusted construction planning consultant in Moradabad, helping clients plan schedules, resources, permits, and phasing before work begins.",
  keywords:
    "construction planning consultant Moradabad, pre-construction planning Moradabad, construction scheduling Moradabad, building planning consultant Moradabad, Space Build Moradabad, construction phasing Moradabad, site planning consultant Moradabad, project scheduling company Moradabad, resource planning construction Moradabad, construction risk planning Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/construction-planning-consultant-moradabad",
  },
  openGraph: {
    title: "Construction Planning Consultant in Moradabad | Space Build",
    description:
      "Space Build works as a trusted construction planning consultant in Moradabad, helping clients plan schedules, resources, permits, and phasing before work begins.",
    url: "https://www.spacebuild.co.in/construction-planning-consultant-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Construction Planning Consultant in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Planning Consultant in Moradabad | Space Build",
    description:
      "Space Build works as a trusted construction planning consultant in Moradabad, helping clients plan schedules, resources, permits, and phasing before work begins.",
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