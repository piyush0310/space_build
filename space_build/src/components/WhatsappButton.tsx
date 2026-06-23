"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/917906086899"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-1/2 right-4 translate-y-[45px] bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
    >
      <FaWhatsapp size={28} />
    </Link>
  );
};

export default WhatsAppButton;