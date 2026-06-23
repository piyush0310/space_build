"use client";

import React, { useState, useEffect } from "react";
import { Handshake, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import Modal from "react-modal";

// Collaborators Type
interface Collaborator {
  name: string;
  logo: string;
}

// Collaborators Data
const collaborators: Collaborator[] = [
  { name: "Artist/ Art Gallery", logo: "https://cdn-icons-png.flaticon.com/128/4344/4344149.png" },
  { name: "Vastu Consultants", logo: "https://cdn-icons-png.flaticon.com/128/7951/7951824.png" },
  { name: "Architects", logo: "https://cdn-icons-png.flaticon.com/128/2092/2092027.png" },
  { name: "Civil Contractors", logo: "https://cdn-icons-png.flaticon.com/128/2942/2942433.png" },
  { name: "M.E.P Consultants", logo: "https://cdn-icons-png.flaticon.com/128/15834/15834400.png" },
  { name: "Builders", logo: "https://cdn-icons-png.flaticon.com/128/15876/15876021.png" },
];

export default function Collaborators() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  // Fix for Next.js App Router - set app element after component mounts
  useEffect(() => {
    // Try multiple selectors for different Next.js versions
    const appElement = document.querySelector("body") || document.documentElement;
    if (appElement) {
      Modal.setAppElement(appElement);
    }
  }, []);

  return (
    <section className="py-0 bg-[#f6eade]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-center font-light text-black tracking-widest">
          Our Collaborators
        </h2>
        <p className="text-gray-600 max-w-6xl mx-auto text-center mb-12">
          We partner with the best in the industry to deliver exceptional design solutions.
        </p>

        {/* Collaborators Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 justify-center items-center">
          {collaborators.map((collab, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition transform hover:scale-95"
            >
              <Image
                src={collab.logo}
                alt={collab.name}
                width={60}
                height={60}
                className="w-15 h-15 rounded-full shadow-md border border-gray-300"
              />
              <span className="mt-2 text-gray-700 font-medium">{collab.name}</span>
            </div>
          ))}
        </div>

        {/* Collaboration Invitation */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center bg-gray-100 px-6 py-2 rounded-full text-black font-medium text-gray-700">
            <Handshake className="mr-2 h-4 w-4" />
            Interested in collaborating with us?
          </div>
          <p className="mt-3 text-gray-700 max-w-xl mx-auto">
            We&apos;re always looking for new partnerships that align with our vision and values.
          </p>
          <button
            onClick={() => setModalIsOpen(true)}
            className="mt-6 inline-flex items-center px-6 py-3 bg-[#f7d9bc] text-black rounded-full hover:bg-[#f7d9bc] transition group"
          >
            Become a Collaborator
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="relative w-full max-w-2xl mx-auto bg-transparent p-8 rounded-lg shadow-3xl backdrop-blur-md"
        overlayClassName="fixed inset-0 bg-[#f6eade]/70 flex items-center justify-center z-50"
      >
        {/* Close Button */}
        <button
          onClick={() => setModalIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        <h2 className="!text-black headline-5 section-subtitle text-1xl font-bold mb-6 text-gray-800 text-center">
          Become a Partner
        </h2>

        {/* Contact Form */}
        <form
          action="https://formsubmit.co/info@spacebuild.com"
          method="POST"
          className="space-y-5"
        >
          {/* Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://www.vasterior.com/thankyou" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-4 border rounded-lg bg-white text-gray-800"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-4 border rounded-lg bg-white text-gray-800"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              className="w-full p-4 border rounded-lg bg-white text-gray-800"
              required
            />
            <select
              name="service"
              className="w-full p-4 border rounded-lg bg-white text-gray-800"
              required
              defaultValue=""
            >
              <option value="" disabled>
                Select a Service
              </option>
              <option value="Artists">Artists / Art Gallery</option>
              <option value="Vastu Consultants">Vastu Consultants</option>
              <option value="MEP Consultants">MEP Consultants</option>
              <option value="Architects">Architects</option>
              <option value="Civil Contractors">Civil Contractors</option>
              <option value="Builders">Builders</option>
            </select>
          </div>

          <input
            type="number"
            name="experience"
            placeholder="Years of Experience"
            className="w-full p-4 border rounded-lg bg-white text-gray-800"
            required
          />

          <textarea
            name="note"
            placeholder="Tell us your thoughts..."
            className="w-full p-4 border rounded-lg bg-white text-gray-800"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="w-full p-4 bg-[#f7d9bc] text-white rounded-lg hover:bg-[#f6eade] transition"
          >
            Submit
          </button>
        </form>
      </Modal>
    </section>
  );
}