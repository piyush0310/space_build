import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "PMC Services in Moradabad | Project Management Consultancy - Space Build",
  description:
    "Space Build offers professional PMC services in Moradabad, covering design coordination, tendering, execution monitoring, cost control & quality assurance.",
  keywords:
    "PMC services Moradabad, project management consultancy Moradabad, PMC company Moradabad, Space Build PMC services, PMC construction Moradabad, project monitoring consultancy, tendering and contract management, PMC for residential projects, PMC for commercial projects, construction consultancy firm Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/pmc-services-moradabad",
  },
  openGraph: {
    title: "PMC Services in Moradabad | Project Management Consultancy - Space Build",
    description:
      "Space Build offers professional PMC services in Moradabad, covering design coordination, tendering, execution monitoring, cost control & quality assurance.",
    url: "https://www.spacebuild.co.in/pmc-services-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - PMC Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PMC Services in Moradabad | Project Management Consultancy - Space Build",
    description:
      "Space Build offers professional PMC services in Moradabad, covering design coordination, tendering, execution monitoring, cost control & quality assurance.",
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