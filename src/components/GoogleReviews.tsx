"use client";

import React, { useState, useRef } from "react";

// ── Google SVG logo ──────────────────────────────────────────────
const GoogleLogo = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

// ── Star component ───────────────────────────────────────────────
const Stars = ({ count = 5, size = 18 }: { count?: number; size?: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < count ? "#FBBC05" : "#e0e0e0"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

// ── Review data ──────────────────────────────────────────────────
const reviews = [
  {
    id: 1,
    name: "Vanshika Singh",
    avatar: null,
    initials: "V",
    avatarBg: "#1a7340",
    time: "7 months ago",
    stars: 5,
    text: "I had the pleasure of meeting Acharya ji today, and it was truly a beautiful and blessed experience. Their guidance was remarkably accurate and the vastu corrections suggested were very practical.",
  },
  {
    id: 2,
    name: "Ankita Aggarwal",
    avatar: null,
    initials: "AA",
    avatarBg: "#4285F4",
    time: "8 months ago",
    stars: 5,
    text: "Very well versed and intelligent Acharya ji is. He gives on point advice and solution for ongoing problems. Highly recommended for anyone looking for vastu guidance.",
  },
  {
    id: 3,
    name: "Vishal Mahajan",
    avatar: null,
    initials: "VM",
    avatarBg: "#EA4335",
    time: "a year ago",
    stars: 5,
    text: "I had an amazing experience with MahaVastu Acharya Chitresh Jain. His predictions are incredibly accurate and insightful. He helped me understand the vastu defects in my factory and the remedies worked wonderfully.",
  },
  {
    id: 4,
    name: "Priya Sharma",
    avatar: null,
    initials: "PS",
    avatarBg: "#34A853",
    time: "5 months ago",
    stars: 5,
    text: "Outstanding consultation experience. The MahaVastu analysis was thorough and the solutions provided were easy to implement without any structural changes. Highly satisfied with the results.",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    avatar: null,
    initials: "RK",
    avatarBg: "#FBBC05",
    time: "3 months ago",
    stars: 5,
    text: "Best vastu consultant I have ever visited. Very knowledgeable and practical approach. After implementing the suggested remedies, my business has shown significant improvement.",
  },
  {
    id: 6,
    name: "Meena Agarwal",
    avatar: null,
    initials: "MA",
    avatarBg: "#9c27b0",
    time: "2 months ago",
    stars: 5,
    text: "MahaVastu Acharya Chitresh Jain's expertise in MahaVastu is unparalleled. The consultation was detailed and he explained everything in a simple way. The remedies he suggested brought positive changes.",
  },
];

const CARDS_PER_PAGE = 3;

export default function GoogleReviews() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE);
  const visible = reviews.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section className="py-12 px-4 bg-[#f6eade]">
      <div className="max-w-6xl mx-auto">

        {/* ── Section heading ── */}
        <h2 className="text-center text-sm font-serif font-medium lg:text-4xl text-black mb-8">
          Reviews
        </h2>

        <div className="flex flex-col lg:flex-row items-start gap-6">

          {/* ── Left: Business summary card ── */}
          <div className="shrink-0 w-full lg:w-52 bg-white rounded-2xl border border-[#e8d8c4] shadow-sm px-5 py-6 flex flex-col items-start gap-2">
            {/* Business avatar placeholder */}
            <div className="w-12 h-12 rounded-full bg-[#f0e0cc] border border-[#dfc9aa] flex items-center justify-center overflow-hidden mb-1">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" fill="#c9ad85" />
                <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" fill="#c9ad85" />
              </svg>
            </div>

            <p className="text-sm font-bold font-sans text-gray-800 leading-snug">
              MahaVastu Acharya Chitresh Jain
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold font-sans text-[#FBBC05]">4.9</span>
              <Stars count={5} size={14} />
            </div>

            <p className="text-xs font-sans text-gray-500">Based on 165 reviews</p>

            {/* Powered by Google */}
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-[11px] font-sans text-gray-500">powered by</span>
              <svg width="42" height="14" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.70-8.23-4.70-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
              </svg>
            </div>

            {/* Review us button */}
            <a
              href="https://share.google/QBCUfUGN6xqQeNW4g"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 bg-[#4285F4] hover:bg-[#3367d6] text-white text-xs font-sans font-semibold px-4 py-2 rounded-full transition-colors duration-200 shadow-sm"
            >
              review us on
              <GoogleLogo size={14} />
            </a>
          </div>

          {/* ── Right: Review cards + navigation ── */}
          <div className="flex-1 w-full min-w-0">
            <div className="relative">

              {/* Prev arrow */}
              <button
                onClick={prev}
                disabled={page === 0}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-[#e0d0ba] shadow flex items-center justify-center text-gray-500 hover:bg-[#f6eade] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
                {visible.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-xl border border-[#e8d8c4] shadow-sm px-4 py-4 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200"
                  >
                    {/* Reviewer header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        {/* Avatar */}
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold font-sans shrink-0"
                          style={{ backgroundColor: review.avatarBg }}
                        >
                          {review.initials}
                        </div>
                        <div>
                          <p className="text-sm font-bold font-sans text-gray-800 leading-tight">{review.name}</p>
                          <p className="text-[11px] font-sans text-gray-400">{review.time}</p>
                        </div>
                      </div>
                      {/* Google G */}
                      <div className="shrink-0">
                        <GoogleLogo size={18} />
                      </div>
                    </div>

                    {/* Stars */}
                    <Stars count={review.stars} size={16} />

                    {/* Review text */}
                    <p className="text-xs font-sans text-gray-600 leading-relaxed line-clamp-4">
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Next arrow */}
              <button
                onClick={next}
                disabled={page === totalPages - 1}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-[#e0d0ba] shadow flex items-center justify-center text-gray-500 hover:bg-[#f6eade] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-150"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Dot pagination */}
            <div className="flex items-center justify-center gap-2 mt-5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === page
                      ? "w-5 h-2 bg-[#FBBC05]"
                      : "w-2 h-2 bg-[#d4b896] hover:bg-[#b5976a]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}