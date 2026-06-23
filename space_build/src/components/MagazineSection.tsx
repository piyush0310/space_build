"use client";

import Link from "next/link";

export default function MagazineSection() {
  const pdfUrl = "/magazine/Vasterior.pdf";

  return (
    <section className="w-full bg-[#FFF2EB]">
      <div className="max-w-7xl mx-auto px-2 text-center">

        <h2 className="text-4xl lg:text-3xl font-serif text-gray-900 mb-2">
          Aura- The Design Journal of Vasterior
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-5">
          Aura is the philosophical canvas of Vasterior, where the science of Vastu meets the art of modern living. More than a design publication, it is a reflection on how spaces influence the flow of energy, emotions, and everyday experiences. Each edition uncovers the invisible dialogue between architecture and life, where direction, proportion, light, and material come together to create environments that feel aligned and alive.
        </p>

        <div className="flex justify-center gap-3 w-full">

  <Link
    href={pdfUrl}
    target="_blank"
    className="w-1/2 sm:w-[200px] text-center px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base bg-[#d4b896] hover:bg-[#c0a07a] text-white rounded-lg transition mb-2"
  >
    View Magazine
  </Link>

  <Link
    href={pdfUrl}
    download
    className="w-1/2 sm:w-[200px] text-center px-4 py-2 sm:px-8 sm:py-3 text-sm sm:text-base border border-[#d4b896] text-[#d4b896] rounded-lg hover:bg-[#d4b896] hover:text-white transition mb-2"
  >
    Download PDF
  </Link>

</div>

      </div>
    </section>
  );
}