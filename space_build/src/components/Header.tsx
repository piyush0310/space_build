"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import TopBar from "@/components/Topbar";
import { Phone, Home } from "lucide-react";


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const servicesDropdownTimeout = React.useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (pendingScroll && pathname === '/') {
      const timer = setTimeout(() => {
        const element = document.querySelector(pendingScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setPendingScroll(null);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname, pendingScroll]);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsAboutDropdownOpen(false);

    if (href.startsWith('#')) {
      e.preventDefault();

      if (pathname !== '/') {
        setPendingScroll(href);
        router.push('/');
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const navigationItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about", hasDropdown: true, dropdownType: "about" },
    { name: "SERVICES", href: "/services", hasDropdown: true, dropdownType: "services" },
    { name: "PORTFOLIO", href: "/portfolio" },
    
    { name: "TESTIMONIALS", href: "/testimonials" },
    { name: "CONTACT", href: "/contact" },
  ];

  const servicesList = [
    { name: "MAHAVASTU YOGDAN", href: "/" },
    { name: "INTERIOR DESIGNING", href: "/" },
    { name: "VASTU GRIDDING SURVEY", href: "/" },
    { name: "SPATIAL FLOW PLANNING", href: "/" },
    { name: "MAHAVASTU CONSULTATION", href: "/" },
    { name: "VASTU STYLING", href: "/" },
    { name: "VASTU RENOVATION", href: "/" },
    { name: "PROJECT MANAGEMENT CONSULTATION (PMC)", href: "/" },
  ];

  const aboutList = [
    { name: "TEAM", href: "#about" },
  ];

  const handleServiceClick = () => {
    setIsServicesDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = () => {
    setIsAboutDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Sticky TopBar */}
      <div className="sticky top-0 z-50">
        <TopBar />
      </div>

      {/* Sticky Main Header below TopBar */}
      <header className="sticky top-[1.5rem] z-40 bg-[#28344B] px-4 py-3 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">

          {/* Brand Name */}
<Link
  href="/"
  className="flex items-center transition-transform duration-200 hover:scale-105 shrink-0"
  onClick={() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    setPendingScroll(null);
  }}
>
  <div className="leading-none">
    <h1 className="text-2xl lg:text-3xl xl:text-4xl font-serif font-medium tracking-tight text-white">
      Space Build
    </h1>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-6 whitespace-nowrap">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative flex items-center">
                {item.hasDropdown && item.dropdownType === "about" ? (
                  <div
                    className="relative items-center"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className="text-white  font-medium text-[10px] lg:text-[11px] xl:text-sm tracking-normal xl:tracking-wide transition-colors duration-200 flex items-center whitespace-nowrap"
                    >
                      {item.name}
                      <svg
                        className="w-3 h-3 ml-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* About Dropdown */}
                    {isAboutDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {aboutList.map((about, index) => (
                          <Link
                            key={index}
                            href={about.href}
                            className="block px-4 py-2 text-sm text-black hover:bg-[#EDF4F8] hover:text-gray-900 transition-colors duration-200"
                            onClick={handleAboutClick}
                          >
                            {about.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.hasDropdown && item.dropdownType === "services" ? (
                  <div
  className="relative items-center"
  onMouseEnter={() => {
  if (servicesDropdownTimeout.current) {
    clearTimeout(servicesDropdownTimeout.current);
  }

  setIsServicesDropdownOpen(true);
}}
onMouseLeave={() => {
  servicesDropdownTimeout.current = setTimeout(() => {
    setIsServicesDropdownOpen(false);
  }, 400);
}}
>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className="text-white hover:text-white font-medium text-[10px] lg:text-[11px] xl:text-sm tracking-normal xl:tracking-wide transition-colors duration-200 flex items-center whitespace-nowrap"
                    >
                      {item.name}
                      <svg
                        className="w-3 h-3 ml-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-90 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {servicesList.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EDF4F8] hover:text-gray-900 transition-colors duration-100 ease-in-out"
                            onClick={handleServiceClick}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-white hover:text-white font-medium text-[10px] lg:text-[11px] xl:text-sm tracking-normal xl:tracking-wide transition-colors duration-200 whitespace-nowrap flex items-center"
                  >
                    {item.name === "HOME" ? (
  <Home size={18} strokeWidth={2} className="text-gray-900" />
) : item.name === "CERTIFICATES" ? (
  <span className="font-bold">{item.name}</span>
) : (
  item.name 
)}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Book Free Consultation Button */}
          <div className="hidden md:block max-w-full">
            <Link
              href="/contact"
              className="flex items-center gap-1 bg-[#EDF4F8] text-black px-2 lg:px-3 py-2 text-[15px] lg:text-xs font-medium transition rounded-lg"
            >
              <Phone size={13} className="shrink-0" />
              <span className="truncate">Talk to Our Experts</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text- focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-300">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown && item.dropdownType === "about" ? (
                    <div>
                      <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className="w-full text-left text-white hover:text-purple-600 font-medium text-sm tracking-wide transition-colors duration-200 px-4 py-2 flex items-center justify-between"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isAboutDropdownOpen && (
                        <div className="pl-8 py-2">
                          {aboutList.map((about, index) => (
                            <Link
                              key={index}
                              href={about.href}
                              className="block text-gray-600 hover:text-purple-600 text-sm py-1 transition-colors duration-200"
                              onClick={handleAboutClick}
                            >
                              {about.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : item.hasDropdown && item.dropdownType === "services" ? (
                    <div>
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        className="w-full text-left text-white hover:text-purple-600 font-medium text-sm tracking-wide transition-colors duration-200 px-4 py-2 flex items-center justify-between"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {isServicesDropdownOpen && (
                        <div className="pl-8 py-2">
                          {servicesList.map((service, index) => (
                            <Link
                              key={index}
                              href={service.href}
                              className="block text-gray-600 hover:text-purple-600 text-sm py-1 transition-colors duration-200"
                              onClick={handleServiceClick}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(item.href, e)}
                      className="text-white hover:text-purple-600 font-medium text-sm tracking-wide transition-colors duration-200 px-4 py-2 flex items-center gap-2"
                    >
                      {item.name === "HOME" ? (
                        <Home size={16} strokeWidth={2} className="text-gray-900" />
                      ) : (
                        item.name
                      )}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#EDF4F8] text-black px-4 py-2 text-sm font-medium tracking-wide hover:bg-[#e8d5c0] transition-colors duration-200 rounded-lg mx-4 text-center"
              >
                Book Free Consultation
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;