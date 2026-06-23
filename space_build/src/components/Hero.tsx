"use client";

import React, { useState, useEffect, useCallback } from "react";

interface Slide {
  image: string;
  mobileImage?: string;
}

const slides: Slide[] = [
  {
    image: "https://plus.unsplash.com/premium_photo-1748070893462-4445075983e8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mobileImage: "https://plus.unsplash.com/premium_photo-1748070893462-4445075983e8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661963428055-4b25a7ebd3a9?q=80&w=1116&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mobileImage: "https://plus.unsplash.com/premium_photo-1661963428055-4b25a7ebd3a9?q=80&w=1116&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1661963505505-f992fa0a8630?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mobileImage: "https://plus.unsplash.com/premium_photo-1661963505505-f992fa0a8630?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slideNext = useCallback(() => {
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  }, []);

  const slidePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(slideNext, 7000);
    return () => clearInterval(interval);
  }, [slideNext]);

  return (
    <>
      {/* DESKTOP VERSION */}
      <section className="hidden md:block hero-desktop relative w-full overflow-hidden h-screen">
        {slides.map((slide, index) => (
          <div
            key={`desktop-${index}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
          >
            {/* Desktop Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
            </div>

            {/* Desktop Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#d56a52] rounded-full animate-float opacity-60" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#d56a52] rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#d56a52] rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 right-1/6 w-2.5 h-2.5 bg-[#d56a52] rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
            <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-[#d56a52] rounded-full animate-float opacity-45" style={{ animationDelay: '4s' }}></div>
          </div>
        ))}

        {/* Desktop Navigation Buttons */}
        <button
          className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-white/40 bg-white/15 backdrop-blur-md text-white hover:bg-[#d56a52] hover:border-[#d56a52] transition-all duration-300 z-30 group shadow-lg"
          onClick={slidePrev}
          aria-label="Previous Slide"
        >
          <svg className="w-6 h-6 mx-auto transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-white/40 bg-white/15 backdrop-blur-md text-white hover:bg-[#d56a52] hover:border-[#d56a52] transition-all duration-300 z-30 group shadow-lg"
          onClick={slideNext}
          aria-label="Next Slide"
        >
          <svg className="w-6 h-6 mx-auto transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Desktop Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-4 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-12 h-1.5 bg-[#d56a52] shadow-lg' 
                  : 'w-8 h-1.5 bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* MOBILE VERSION */}
      <section className="block md:hidden hero-mobile relative w-full overflow-hidden" style={{ height: '20vh', minHeight: '40dvh' }}>
        {slides.map((slide, index) => (
          <div
            key={`mobile-${index}`}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
          >
            {/* Mobile Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={slide.mobileImage || slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center center'
                }}
              />
              <div className="absolute inset-0 bg-black/15"></div>
            </div>

            {/* Mobile Floating Elements - Fewer and smaller */}
            <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-[#d56a52] rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-[#d56a52] rounded-full animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
          </div>
        ))}

        {/* Mobile Navigation Buttons - Smaller and closer to edges */}
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm text-white active:bg-white/30 transition-all duration-200 z-30"
          onClick={slidePrev}
          aria-label="Previous Slide"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/40 bg-white/20 backdrop-blur-sm text-white active:bg-white/30 transition-all duration-200 z-30"
          onClick={slideNext}
          aria-label="Next Slide"
        >
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Mobile Slide Indicators - Smaller */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-1 bg-[#d56a52]' 
                  : 'w-6 h-1 bg-white/50 active:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        /* Desktop specific styles */
        .hero-desktop {
          height: 100vh;
        }

        /* Mobile specific styles */
        .hero-mobile {
          height: 100vh;
          height: 100dvh; /* Use dynamic viewport height for mobile */
          min-height: -webkit-fill-available;
        }

        /* iOS Safari fix */
        @supports (-webkit-touch-callout: none) {
          .hero-mobile {
            height: -webkit-fill-available;
          }
        }

        /* Smooth rendering */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Image optimization for mobile */
        @media (max-width: 767px) {
          .hero-mobile img {
            image-rendering: -webkit-optimize-contrast;
            transform: translateZ(0);
            will-change: transform;
          }
        }

        /* Image optimization for desktop */
        @media (min-width: 768px) {
          .hero-desktop img {
            image-rendering: crisp-edges;
            image-rendering: -webkit-optimize-contrast;
          }
        }

        /* Touch-friendly buttons on mobile */
        @media (max-width: 767px) {
          button {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;