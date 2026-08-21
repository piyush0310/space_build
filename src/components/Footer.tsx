"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}
const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We provide complete interior designing, modular kitchen, furniture, architecture and turnkey solutions.",
  },
  {
    question: "How can I book a consultation?",
    answer:
      "Simply call us or send an enquiry through our Contact page.",
  },
  {
    question: "Do you provide customized designs?",
    answer:
      "Yes, every project is completely customized according to your needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project duration depends on project size and scope.",
  },
  {
    question: "Do you provide online consultation?",
    answer:
      "Yes, online consultations are available.",
  },
  {
    question: "What is your pricing?",
    answer:
      "Pricing depends upon project requirements and materials.",
  },
];
const Footer: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };
  return (
    <footer className="bg-[#28344B] text-white py-14">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block mb-3">
              <h2 className="text-4xl font-serif font-bold tracking-[0.15em] uppercase">
                SPACE BUILD
              </h2>
            </Link>
            <p className="font-semibold mb-5">
              Moradabad, Uttar Pradesh, India
            </p>

            <div className="space-y-3">
              <a
                href="mailto:spacebuild.india@gmail.com"
                className="flex items-center gap-2 hover:text-yellow-500 transition"
              >
                <Mail size={18} />
                <span>spacebuild.india@gmail.com</span>
              </a>
              <a
                href="tel:+919927611780"
                className="flex items-center gap-2 hover:text-yellow-500 transition"
              >
                <Phone size={18} />
                <span>+91 9927611780</span>
              </a>
              <a
                href="tel:+918077973797"
                className="flex items-center gap-2 hover:text-yellow-500 transition"
              >
                <Phone size={18} />
                <span>+91 8077973797</span>
              </a>
            </div>
            <div className="flex gap-5 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61572940314974"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/spacebuildindia?igsi=MWY4c3JvMTB5OGRjNA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://wa.me/919927611780"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://in.linkedin.com/company/spacebuild"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
                    {/* Quick Links */}
          <div>
            <h3 className="text-3xl font-serif mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="hover:text-yellow-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/why-choose-space-build"
                  className="hover:text-yellow-500 transition"
                >
                  Why Choose
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-yellow-500 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-yellow-500 transition"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-yellow-500 transition"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-yellow-500 transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-500 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-yellow-500 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-yellow-500 transition"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-yellow-500 transition"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* FAQ Section */}
          <div>
            <h3 className="text-3xl font-serif mb-6">
              FAQs
            </h3>
            <div className="space-y-3">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-600 pb-3"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left font-medium"
                  >
                    <span>{item.question}</span>
                    <span className="text-xl">
                      {faqOpen === index ? "−" : "+"}
                    </span>
                  </button>
                  {faqOpen === index && (
                    <p className="mt-3 text-gray-300 leading-6">
                      {item.answer}
                      <Link
                        href="/faq"
                        className="text-yellow-400 ml-2 hover:underline"
                      >
                        Read More
                      </Link>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
                    {/* Our Location */}
          <div>
            <h3 className="text-3xl font-serif mb-6">
              Our Location
            </h3>
            <div className="overflow-hidden rounded-lg shadow-lg h-80">
              <iframe
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                title="SPACE BUILD Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.4038731146798!2d78.6941854756792!3d28.82683357555919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afd8a21b57a23%3A0x3fac9d68c93d962a!2sSPACE%20BUILD%20%E2%80%93%20moduler%20Kitchen%20%26%20Interiors!5e0!3m2!1sen!2sin!4v1783318624067!5m2!1sen!2sin"
              />
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="mt-14 border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} SPACE BUILD. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-yellow-500 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-yellow-500 transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;