"use client";

import React from "react";

const certificates = [
  {
    title: "Mahavastu",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1777791862/MAHAVASTU_CERTIFICATES_page-0005_ttgfo4.jpg",
  },
  {
    title: "Mahavastu",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1778398179/mehak_jain_mahavastu_fezwuo.jpg",

  },
  {
    title: "Mahavastu",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1777791862/MAHAVASTU_CERTIFICATES_page-0001_e1piqs.jpg",
  },
  {
    title: "Mahavastu",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1777791862/MAHAVASTU_CERTIFICATES_page-0004_vwjylk.jpg",
  },
  {
    title: "Mahavastu",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1777791862/MAHAVASTU_CERTIFICATES_page-0003_jp0bgn.jpg",
  },
   {
    title: "Mahavastu",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1777791861/MAHAVASTU_CERTIFICATES_page-0002_snmtvs.jpg",
  },
];

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-[#f6eade] px-4 sm:px-6 lg:px-10 py-10">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-5xl sm:text-5xl font-serif lg:text-6xl font-medium text-gray-800">
          Certificates
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Verified Mahavastu achievements and certifications
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
