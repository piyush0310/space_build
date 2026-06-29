import type { Metadata } from "next"
import Content from "./Content"

// ✅ SEO Meta Tags
export const metadata: Metadata = {
  title: "Project Management Consultation for Interiors | Space Build",
  description:
    "Expert project management consultation for interior and renovation projects. Plan timelines, budgets, and vendor coordination with clarity—without execution stress.",
  keywords: [
    "project management consultation",
    "interior project management",
    "renovation project management",
    "interior project planning service",
    "project management consultant for interiors",
    "interior renovation management",
    "design project management advisory",
    "interior execution planning",
    "construction project consultation",
    "interior project management consultation service",
    "interior project planning without execution",
    "design project coordination consultant",
    "interior project management for homeowners",
  ],

  // ✅ Canonical
  alternates: {
    canonical: "https://www.Space Build.com/services/project-management-consultation",
  },

  openGraph: {
    title: "Project Management Consultation for Interiors | Space Build",
    description:
      "Professional project management consultation for interior and renovation projects—covering planning, budgeting, timelines, and coordination.",
    url: "https://www.Space Build.com/services/project-management-consultation",
    siteName: "Space Build",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Project Management Consultation for Interiors | Space Build",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Project Management Consultation for Interiors | Space Build",
    description:
      "Expert consultation to plan and manage interior projects efficiently—without handling execution.",
    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
}

export default function ProjectManagementConsultation() {
  return (
    <>
      <Content />
    </>
  )
}
