"use client";

import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

interface FAQItem {
  question: string;
  answer: string;
  link: string;
}

const Footer: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Handle scrolling after navigation
  useEffect(() => {
    if (pendingScroll && pathname === '/') {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setPendingScroll(null);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname, pendingScroll]);

  const toggleFAQ = (index: number): void => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const handleSectionClick = (sectionId: string): void => {
    // If not on home page, navigate to home first, then scroll to section
    if (pathname !== '/') {
      setPendingScroll(sectionId);
      router.push('/');
    } else {
      // Already on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const faqData: FAQItem[] = [
    { 
      question: "What services do you offer?", 
      answer: "At spacebuild, we provide a comprehensive range of design and consultancy services, including Interior Design,", 
      link: "https://www.spacebuild.com/faq"
    },
    { 
      question: "How can I book a consultation?", 
      answer: "Booking with us is quick and easy. You can email us at info@spacebuild.com or call us directly ", 
      link: "https://www.spacebuild.com/faq"
    },
    { 
      question: "Do you provide customized interior designs?", 
      answer: "Yes, we specialize in bespoke interior designs tailored to your lifestyle, preferences, and ", 
      link: "https://www.spacebuild.com/faq"
    },
    { 
      question: "How long does a project usually take?", 
      answer: "Project timelines vary depending on the scope and complexity. Smaller styling or consultation projects ", 
      link: "https://www.spacebuild.com/faq"
    },
    { 
      question: "Do you provide online consultations?", 
      answer: "Yes. For clients unable to meet in person, we offer online consultations through video calls, digital ", 
      link: "https://www.spacebuild.com/faq"
    },
    { 
      question: "What is your pricing structure?", 
      answer: "Our pricing is project-specific and depends on the services required, scale of work, and material choices. We ", 
      link: "https://www.spacebuild.com/faq"
    },
  ];

  return (
    <footer className="bg-[#28344B] text-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          
          {/* Brand & Address */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link
  href="/"
  className="inline-block mb-2"
  onClick={() => setPendingScroll(null)} // Clear pending scroll when going home
>
  <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-[0.15em] text-white uppercase">
    SPACE BUILD
  </h2>
</Link>

<p className="font-semibold text-sm sm:text-base mb-4">
  Bilari, Uttar Pradesh, India
</p>

            
            <div className="space-y-3">
              <a 
                href="mailto:info@spacebuild.com" 
                className="flex items-center gap-2 hover:text-yellow-600 transition text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> 
                <span className="break-all">info@spacebuild.com</span>
              </a>
              <a 
                href="tel:+917906086899" 
                className="flex items-center gap-2 hover:text-yellow-600 transition text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" /> 
                +917906086899
              </a>
              
              {/* Social Media Icons */}
              <div className="flex gap-3 sm:gap-4 mt-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61572940314974" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl sm:text-2xl hover:text-blue-600 transition"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://www.instagram.com/spacebuild/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl sm:text-2xl hover:text-pink-500 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://wa.me/+917906086899" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl sm:text-2xl hover:text-green-500 transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a 
                  href="https://in.linkedin.com/company/spacebuild" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xl sm:text-2xl hover:text-blue-700 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-2xl sm:text-3xl font-serif mb-6 sm:mb-8">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-yellow-600 transition text-sm sm:text-base"
                  onClick={() => setPendingScroll(null)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-yellow-600 transition text-sm sm:text-base">
                  Why Choose
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick("about")} 
                  className="hover:text-yellow-600 transition text-left text-sm sm:text-base"
                  suppressHydrationWarning={true}
                >
                  About Us
                </button>
              </li>
              <li>
                <Link href="#services" className="hover:text-yellow-600 transition text-sm sm:text-base">
                  Services
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick("portfolio")} 
                  className="hover:text-yellow-600 transition text-left text-sm sm:text-base"
                  suppressHydrationWarning={true}
                >
                  Portfolio
                </button>
              </li>


              <li>
                <Link href="/" className="hover:text-yellow-600 transition text-sm sm:text-base">
                  Team
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-yellow-600 transition text-sm sm:text-base">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-yellow-600 transition text-sm sm:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-yellow-600 transition text-sm sm:text-base">
                  Careers
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleSectionClick("#testimonials")} 
                  className="hover:text-yellow-600 transition text-left text-sm sm:text-base"
                  suppressHydrationWarning={true}
                >
                  Testimonials
                </button>
              </li>
              <li>
                <Link href="/" className="hover:text-yellow-600 transition text-sm sm:text-base">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-serif mb-6">FAQs</h3>
            <div className="space-y-3">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-gray-600 pb-3">
                  <button
                    className="w-full text-left font-semibold transition flex justify-between items-center text-sm sm:text-base"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={faqOpen === index}
                    suppressHydrationWarning={true}
                  >
                    <span className="pr-2">{item.question}</span>
                    <span className="text-lg flex-shrink-0">
                      {faqOpen === index ? "−" : "+"}
                    </span>
                  </button>
                  {faqOpen === index && (
                    <div className="mt-3 text-sm sm:text-base">
                      <p>
                        {item.answer}{" "}
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-600 underline hover:text-blue-800"
                        >
                          Read more
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Location Map */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6">Our Location</h3>
            <div className="w-full h-60 sm:h-72 lg:h-80 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.872468086007!2d78.8019067!3d28.623224250000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ae7aea2c57a09%3A0x3f54246d7eb35f53!2sBilari%2C%20Uttar%20Pradesh%20244411!5e0!3m2!1sen!2sin!4v1782193404770!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                title="spacebuild Office Location"
              />
            </div>
            
            
          </div>
        </div>

        {/* Bottom Section - Copyright & Legal Links */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-sm sm:text-base">
                © {new Date().getFullYear()} SPACE BUILD. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm sm:text-base">
              <Link href="#" className="hover:text-yellow-600 transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-yellow-600 transition">
                Terms & Conditions
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;