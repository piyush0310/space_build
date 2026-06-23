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
  { id: 1, src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D", alt: "Portfolio 1", layout: "horizontal" },

  { id: 5, src: "https://plus.unsplash.com/premium_photo-1722034552807-6c8ede1aefca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8MXwwfHx8MA%3D%3D", alt: "Portfolio 5", layout: "vertical" },

  { id: 6, src: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Portfolio 6", layout: "horizontal" },

  { id: 7, src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D", alt: "Portfolio 7", layout: "vertical" },

  { id: 8, src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww", alt: "Portfolio 8", layout: "horizontal" },

  { id: 9, src: "https://res.cloudinary.com/da12wzxoq/image/upload/f_auto,q_auto,w_auto/v1764411924/8_s2kxgm.jpg", alt: "Portfolio 9", layout: "horizontal" },

  { id: 11, src: "https://res.cloudinary.com/dkpejqlby/image/upload/f_auto,q_auto,w_auto/v1763231888/p16_pscidc_t18bdk.png", alt: "Portfolio 11", layout: "horizontal" },

  { id: 13, src: "https://res.cloudinary.com/dkpejqlby/image/upload/f_auto,q_auto,w_auto/v1763233202/Furniture_lmhbq3_j4u6fs.png", alt: "Portfolio 13", layout: "horizontal" },

  { id: 14, src: "https://res.cloudinary.com/dkpejqlby/image/upload/f_auto,q_auto,w_auto/v1763232534/p18_b2412l_f8sx6b.png", alt: "Portfolio 14", layout: "vertical" },

  { id: 15, src: "https://plus.unsplash.com/premium_photo-1684348962314-64fa628992f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww", alt: "Portfolio 15", layout: "horizontal" },

  { id: 16, src: "https://res.cloudinary.com/dkpejqlby/image/upload/f_auto,q_auto,w_auto/v1763232541/p20_bxpldi_fx0zhz.png", alt: "Portfolio 16", layout: "vertical" },

  { id: 17, src: "https://images.unsplash.com/photo-1606744888344-493238951221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww", alt: "Portfolio 17", layout: "horizontal" },

  { id: 18, src: "https://res.cloudinary.com/dkpejqlby/image/upload/f_auto,q_auto,w_auto/v1763232543/p15_h9wfha_mkpkc6.png", alt: "Portfolio 18", layout: "vertical" },

  { id: 19, src: "https://res.cloudinary.com/dkpejqlby/image/upload/f_auto,q_auto,w_auto/v1763232536/p14_yfwpa2_aj2si3.png", alt: "Portfolio 19", layout: "horizontal" },

  { id: 20, src: "https://res.cloudinary.com/dkpejqlby/image/upload/f_auto,q_auto,w_auto/v1763232541/p21_rlpio9_bvaerk.png", alt: "Portfolio 20", layout: "vertical" },

  { id: 21, src: "https://res.cloudinary.com/dkpejqlby/image/upload/f_auto,q_auto,w_auto/v1763232410/p17_huccy0_pt1hh1.png", alt: "Portfolio 21", layout: "horizontal" },

  { id: 23, src: "https://res.cloudinary.com/da12wzxoq/image/upload/f_auto,q_auto,w_auto/v1764411851/1_hmntm4.jpg", alt: "Portfolio 23", layout: "horizontal" },

  { id: 25, src: "https://res.cloudinary.com/da12wzxoq/image/upload/f_auto,q_auto,w_auto/v1764411923/7_ypfu6o.jpg", alt: "Portfolio 26", layout: "horizontal" },

  { id: 26, src: "https://res.cloudinary.com/dkpejqlby/image/upload/f_auto,q_auto,w_auto/v1763231881/p3_kpidjw_ejuac8.png", alt: "Portfolio 5", layout: "vertical" },

  { id: 27, src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww", alt: "Portfolio 25", layout: "horizontal" },

  { id: 29, src: "https://res.cloudinary.com/da12wzxoq/image/upload/f_auto,q_auto,w_auto/v1764411911/7_nb8vvs.jpg", alt: "Portfolio 29", layout: "vertical" },

  { id: 32, src: "https://res.cloudinary.com/da12wzxoq/image/upload/f_auto,q_auto,w_auto/v1764411913/2_tqt1cd.jpg", alt: "Portfolio 32", layout: "vertical" },

  { id: 33, src: "https://res.cloudinary.com/da12wzxoq/image/upload/f_auto,q_auto,w_auto/v1764411912/6_cu3jiq.jpg", alt: "Portfolio 33", layout: "vertical" },
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