"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
  return (
    <Link
      href="tel:+917906086899"
      className="fixed top-1/2 right-4 -translate-y-[35px] bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 z-50"
    >
      <FaPhoneAlt size={24} />
    </Link>
  );
};

export default CallButton;