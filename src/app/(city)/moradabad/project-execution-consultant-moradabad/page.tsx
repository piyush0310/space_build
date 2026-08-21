import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Project Execution Consultant in Moradabad | Space Build",
  description:
    "Space Build is a trusted project execution consultant in Moradabad, offering end-to-end planning, construction management, and turnkey execution services. Visit spacebuild.co.in.",
  keywords:
    "project execution consultant Moradabad, project execution company Moradabad, construction consultant Moradabad, turnkey project execution, project management Moradabad, Space Build Moradabad, civil construction consultant, building project execution, real estate project consultant Moradabad, infrastructure execution services",
  alternates: {
    canonical: "https://www.spacebuild.co.in/project-execution-consultant-moradabad",
  },
  openGraph: {
    title: "Project Execution Consultant in Moradabad | Space Build",
    description:
      "Space Build is a trusted project execution consultant in Moradabad, offering end-to-end planning, construction management, and turnkey execution services. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/project-execution-consultant-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Project Execution Consultant in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Execution Consultant in Moradabad | Space Build",
    description:
      "Space Build is a trusted project execution consultant in Moradabad, offering end-to-end planning, construction management, and turnkey execution services. Visit spacebuild.co.in.",
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