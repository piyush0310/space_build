"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from 'next/image';

// Utility function to combine class names
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Custom hook to detect mobile devices
const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return isMobile;
};

// AspectRatio component
interface AspectRatioProps {
  ratio: number;
  children: React.ReactNode;
  className?: string;
}

const AspectRatio: React.FC<AspectRatioProps> = ({ ratio, children, className }) => {
  return (
    <div className={cn("relative w-full", className)} style={{ paddingBottom: `${100 / ratio}%` }}>
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};

// Custom hook for intersection observer
interface UseIntersectionObserverReturn {
  elementRef: React.RefObject<HTMLDivElement | null>;
  isIntersecting: boolean;
  hasIntersected: boolean;
}

const useIntersectionObserver = (options: IntersectionObserverInit = {}): UseIntersectionObserverReturn => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return { elementRef, isIntersecting, hasIntersected };
};

interface ImageData {
  id: number;
  src: string;
  alt: string;
  layout: "vertical" | "horizontal";
}

// Lazy Image Component
interface LazyImageProps {
  image: ImageData;
  className?: string;
  onClick?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({ image, className, onClick }) => {
  const { elementRef, hasIntersected } = useIntersectionObserver();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  return (
    <div ref={elementRef} className={cn("relative", className)} onClick={onClick}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-orange-100 animate-pulse rounded-lg">
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 bg-gray-700 rounded-full opacity-40"></div>
          </div>
        </div>
      )}
      
      {hasIntersected && (
        <img
          src={image.src}
          alt={image.alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "object-cover w-full h-full transition-all duration-300 ease-out rounded-lg",
            "will-change-transform group-hover:scale-105",
            isLoaded ? "opacity-100" : "opacity-0",
            hasError && "bg-gray-800 flex items-center justify-center"
          )}
          loading="lazy"
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
          <div className="text-gray-400 text-sm">Failed to load</div>
        </div>
      )}
      
      {hasIntersected && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-600 border-t-gray-300 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

const ChevronLeft: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const PortfolioCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const loadedImagesRef = useRef(new Set<number>());

  

  // Grid images with layout information
  const gridImages: ImageData[] = [
  { id: 1, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554123/WhatsApp_Image_2026-06-25_at_15.18.38_1_nr4izn.jpg", alt: "Portfolio 1", layout: "horizontal" },

  { id: 5, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554110/IMG_20260627_142001.jpg_enwafd.jpg", alt: "Portfolio 5", layout: "vertical" },

  { id: 6, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554113/IMG_20260627_135810.jpg_kwr2uf.jpg", alt: "Portfolio 6", layout: "horizontal" },

  { id: 7, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554828/9027_ptgvkb.png", alt: "Portfolio 7", layout: "vertical" },

  { id: 8, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554132/IMG_20260627_144906.jpg_bad042.jpg", alt: "Portfolio 8", layout: "horizontal" },

  { id: 9, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554112/IMG_20260627_141923.jpg_kqocgv.jpg", alt: "Portfolio 9", layout: "horizontal" },

  { id: 11, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554122/IMG_20260627_144949.jpg_jurisr.jpg", alt: "Portfolio 11", layout: "horizontal" },

  { id: 13, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554117/IMG_20260627_141804.jpg_ohx2i8.jpg", alt: "Portfolio 13", layout: "horizontal" },

  { id: 14, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554121/IMG_20260627_135108.jpg_dbjz8c.jpg", alt: "Portfolio 14", layout: "vertical" },

  { id: 15, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554112/IMG_20260627_135213.jpg_x8i1yq.jpg", alt: "Portfolio 15", layout: "horizontal" },

  { id: 16, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554125/WhatsApp_Image_2026-06-25_at_15.18.54_eckxg1.jpg", alt: "Portfolio 16", layout: "vertical" },

  { id: 17, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554124/WhatsApp_Image_2026-06-25_at_15.18.50_jbmgbo.jpg", alt: "Portfolio 17", layout: "horizontal" },

  { id: 18, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554120/IMG_20260627_144648.jpg_ob7mt9.jpg", alt: "Portfolio 18", layout: "vertical" },

  { id: 19, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554116/IMG_20260627_135332.jpg_jqt2mj.jpg", alt: "Portfolio 19", layout: "horizontal" },

  { id: 20, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554124/WhatsApp_Image_2026-06-25_at_15.18.46_m69b0v.jpg", alt: "Portfolio 20", layout: "vertical" },

  { id: 21, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554116/IMG_20260627_144555.jpg_sgzkt4.jpg", alt: "Portfolio 21", layout: "horizontal" },

  { id: 23, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554112/IMG_20260627_134825.jpg_eutjrs.jpg", alt: "Portfolio 23", layout: "horizontal" },

  { id: 25, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554116/IMG_20260627_144452.jpg_bky7dx.jpg", alt: "Portfolio 25", layout: "horizontal" },

  { id: 26, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554112/IMG_20260627_135002.jpg_vjd69s.jpg", alt: "Portfolio 26", layout: "vertical" },

  { id: 27, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554123/WhatsApp_Image_2026-06-25_at_15.18.44_blf1ic.jpg", alt: "Portfolio 27", layout: "horizontal" },

  { id: 29, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554124/WhatsApp_Image_2026-06-25_at_15.18.46_m69b0v.jpg", alt: "Portfolio 29", layout: "vertical" },

  { id: 32, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554131/IMG_20260627_145628.jpg_bpjne1.jpg", alt: "Portfolio 32", layout: "vertical" },

  { id: 33, src: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782554124/WhatsApp_Image_2026-06-25_at_15.18.51_rdx8ly.jpg", alt: "Portfolio 33", layout: "vertical" },
];

  

  const handleImageClick = (index: number): void => {
    setPopupIndex(index);
  };

  const closePopup = (): void => {
    setPopupIndex(null);
  };

  // Initial load of grid images
  useEffect(() => {
    const initialCount = Math.min(12, gridImages.length);
    setVisibleImages(gridImages.slice(0, initialCount));
    
    gridImages.slice(0, initialCount).forEach((img: ImageData) => {
      loadedImagesRef.current.add(img.id);
    });
  }, []);

  // Handle scroll for infinite loading
  const handleScroll = useCallback(() => {
    if (!gridRef.current) return;
    
    const rect = gridRef.current.getBoundingClientRect();
    const bottomVisible = rect.bottom <= window.innerHeight + 500;
    
    if (bottomVisible && visibleImages.length < gridImages.length && !isLoading) {
      setIsLoading(true);
      
      setTimeout(() => {
        const nextBatchSize = 8;
        const nextImages = gridImages
          .filter((img: ImageData) => !loadedImagesRef.current.has(img.id))
          .slice(0, nextBatchSize);
        
        nextImages.forEach((img: ImageData) => {
          loadedImagesRef.current.add(img.id);
        });
        
        setVisibleImages(prev => [...prev, ...nextImages]);
        setIsLoading(false);
      }, 300);
    }
  }, [visibleImages, isLoading]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  

  
  // Portfolio Image Component
  const PortfolioImage: React.FC<{ image: ImageData }> = ({ image }) => {
    const imageClasses = cn(
      "portfolio-item group overflow-hidden cursor-pointer relative will-change-transform",
      "transition-transform duration-300 hover:z-10 hover:-translate-y-1",
      image.layout === "horizontal" ? "col-span-2" : "col-span-1"
    );

    return (
      <div className={imageClasses}>
        <AspectRatio
          ratio={image.layout === "horizontal" ? 16 / 10.5 : 3 / 4}
        >
          <LazyImage 
            image={image} 
            className="w-full h-full" 
            onClick={() => handleImageClick(0)}
          />
        </AspectRatio>
      </div>
    );
  };

  return (
    <>
      {/* Portfolio Heading */}
      <section id="portfolio" className="bg-[#EDF4F8] text-center py-10">
        <h1 className="text-black text-4xl md:text-5xl font-serif tracking-[0.2em] text-gray-800">
          PORTFOLIO
        </h1>
      </section>

      

        

      {/* Grid Section */}
      <section className="relative pt-10 pb-16 bg-[#EDF4F8] overflow-hidden">
        <div ref={gridRef} className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="max-w-full sm:max-w-[95%] lg:max-w-[90%] mx-auto"> 
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-1 sm:gap-2 will-change-contents">
              {visibleImages.map((image, index) => (
                <PortfolioImage 
                  key={`${image.id}-${index}`}
                  image={image}
                />
              ))}
            </div>
          </div>
          
          {visibleImages.length < gridImages.length && (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            </div>
          )}
          
          {visibleImages.length === 0 && (
            <div className="flex justify-center py-16">
              <div className="text-gray-500 text-lg">No images to display.</div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PortfolioCarousel;