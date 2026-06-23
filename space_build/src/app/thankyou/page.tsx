"use client";
import React from "react";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6eade] px-6">
      <div className="bg-[#fae8d6] text-gray-800 shadow-md rounded-xl p-8 w-full max-w-2xl text-center">
        <h2 className="text-3xl font-serif mb-3">Thank You</h2>
        <p className="text-lg text-gray-600 mb-6">
          Your message has been sent successfully. <br /> We’ll get back to you soon.
        </p>

        {/* Quick Query Contact Number */}
        <p className="text-base text-gray-700 mb-6">
          For a quick query, call us:{" "}
          <a
            href="tel:+917906086899"
            className="text-[#d47c36] underline hover:text-[#b56428] transition"
          >
            +917906086899
          </a>
        </p>

        <Link
          href="/"
          className="inline-block bg-[#f7d9bc] text-black py-2 px-5 rounded-md text-sm shadow hover:bg-[#f5c9a0] transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
