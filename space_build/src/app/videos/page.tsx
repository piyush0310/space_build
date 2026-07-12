import type { Metadata } from "next";
import ProjectVideo from "./ProjectVideo";


export const metadata: Metadata = {
  title: "space build – Project Videos | Interior Design Portfolio & Work Showcase",
  description:
    "Watch our project videos showcasing space build's interior design work, completed projects, and craftsmanship. See our expert team in action delivering exceptional interior solutions.",
  keywords:
    "space build videos, interior design videos, project showcase, completed projects, interior design portfolio, carpentry videos, design process, interior transformation videos, space build work showcase, home renovation videos",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.space build.com/videos",
  },

  openGraph: {
    type: "website",
    url: "https://www.space build.com/videos",
    title: "space build – Project Videos | Interior Design Portfolio & Work Showcase",
    description:
      "Watch our project videos showcasing space build's interior design work, completed projects, and craftsmanship. See our expert team in action delivering exceptional interior solutions.",
    images: [
      {
        url: "ttps://res.cloudinary.com/df1v3yied/image/upload/v1756528800/space buildlogo_fpcrfw.png",
        width: 1200,
        height: 630,
        alt: "space build Project Videos – Interior Design Work Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@space build",
    title: "space build – Project Videos | Interior Design Portfolio & Work Showcase",
    description:
      "Watch our project videos showcasing space build's interior design work, completed projects, and craftsmanship. See our expert team in action delivering exceptional interior solutions.",
    images: ["ttps://res.cloudinary.com/df1v3yied/image/upload/v1756528800/space buildlogo_fpcrfw.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Videos() {
  return (
    <div className="min-h-screen bg-[#FFF2EB]">
        <ProjectVideo />
    </div>
  );
}