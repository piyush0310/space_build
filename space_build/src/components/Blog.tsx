"use client";

import React from "react";
import { blogPosts } from "@/data/blogdata";
import Image from "next/image";
import Link from "next/link";

const BlogPreview: React.FC = () => {
  // Sort blogs by date (newest first) and take first 3
  const previewBlogs = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-16 px-4 bg-[#EDF4F8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif tracking-[0.2em] text-black mb-8">
            BLOGS
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {previewBlogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="group block">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Date Badge */}
                <div className="relative">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white">
                    {blog.date}
                  </div>

                  {/* Blog Image */}
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-[#28344B] h-27 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-xl font-bold text-white mb-1 tracking-wide line-clamp-2"
                      title={blog.title}
                    >
                      {blog.title}
                    </h3>
                    <p className="text-sm text-white line-clamp-1">
                      {blog.subtitle}
                    </p>
                  </div>
                </div>

              </article>
            </Link>
          ))}
        </div>

        {/* More Blogs Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-[#28344B] text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            More Blogs
            <svg
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;