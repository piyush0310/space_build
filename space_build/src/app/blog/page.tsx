import type { Metadata } from "next";


import BlogPostPage from "./BlogPostPage";




export const metadata: Metadata = {
  title: "Space Build – Interior Design Blogs | Trends, Tips & Inspiration 2025",
  description:
    "Explore Space Build’s portfolio of bespoke interior design projects. From luxury homes to corporate spaces, discover timeless designs crafted with elegance and spatial harmony.",
  keywords:
    "Space Build blogs, interior design blogs, design trends 2025, vastu tips, styling advice, home décor blogs, commercial interior insights",


  // ✅ Canonical
  alternates: {
    canonical: "https://www.spacebuild.co.in/blog",
  },
  openGraph: {
    type: "website",
    url: "https://www.spacebuild.co.in/blog",
    title: "Space Build – Interior Design Blogs | Trends, Tips & Inspiration 2025",
    description:
      "Stay inspired with Space Build’s interior design blogs. Explore the latest trends, Vastu insights, styling tips, and expert advice for residential and commercial spaces.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Space Build – Interior Design Blogs | Trends, Tips & Inspiration 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "Space Build – Interior Design Blogs | Trends, Tips & Inspiration 2025",
    description:
      "Stay inspired with Space Build’s interior design blogs. Explore the latest trends, Vastu insights, styling tips, and expert advice for residential and commercial spaces.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },

  // ✅ 
  
  
};

export default function portfolio() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <BlogPostPage />
    </div>
  );
}
