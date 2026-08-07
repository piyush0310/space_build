"use client";
import React from "react";
import Link from "next/link";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EDF4F8] px-6">
      <div className="bg-[#EDF4F8] text-black-900 shadow-md rounded-xl p-8 w-full max-w-2xl text-center">
        <h2 className="text-3xl font-serif mb-3">Thank You</h2>
        <p className="text-lg text-black-900 mb-6">
          Your message has been sent successfully. <br /> We’ll get back to you soon.
        </p>

        {/* Quick Query Contact Number */}
        <p className="text-base text-black-900 mb-6">
          For a quick query, call us:{" "}
          <a
            href="tel:+919927611780"
            className="text-[#28344B] underline hover:text-[#b56428] transition"
          >
            +919927611780
          </a>
        </p>

        <Link
          href="/"
          className="inline-block bg-[#28344B] text-white py-2 px-5 rounded-md text-sm shadow hover:bg-[#f5c9a0] transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
