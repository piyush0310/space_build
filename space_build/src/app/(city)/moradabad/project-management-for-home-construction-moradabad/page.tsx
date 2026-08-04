import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Project Management for Home Construction in Moradabad | Space Build",
  description:
    "Space Build offers professional project management for home construction in Moradabad, guiding homeowners from design to move-in with expert planning and supervision. Visit spacebuild.co.in.",
  keywords:
    "project management for home construction Moradabad, home construction consultant Moradabad, residential project management, house construction management Moradabad, Space Build Moradabad, home building consultancy, custom home construction Moradabad, residential construction supervision, house building project manager, home construction planning services",
  alternates: {
    canonical: "https://www.spacebuild.co.in/project-management-home-construction-moradabad",
  },
  openGraph: {
    title: "Project Management for Home Construction in Moradabad | Space Build",
    description:
      "Space Build offers professional project management for home construction in Moradabad, guiding homeowners from design to move-in with expert planning and supervision. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/project-management-home-construction-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Project Management for Home Construction in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Management for Home Construction in Moradabad | Space Build",
    description:
      "Space Build offers professional project management for home construction in Moradabad, guiding homeowners from design to move-in with expert planning and supervision. Visit spacebuild.co.in.",
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