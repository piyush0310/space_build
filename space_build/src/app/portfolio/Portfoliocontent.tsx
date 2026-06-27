"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { X } from "lucide-react";

interface Image {
  id: number;
  src: string;
  alt: string;
  category: string;
  layout: "vertical" | "horizontal";
}

const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

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

const mc302Images: Image[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411851/1_hmntm4.jpg",
    alt: "Minimalist beach wedding setup",
    category: "MC302",
    layout: "horizontal"
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411844/2_oo4iyh.jpg",
    alt: "Elegant table setting",
    category: "MC302",
    layout: "vertical"
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411850/6_lvw8yq.jpg",
    alt: "Rustic wedding details",
    category: "MC302",
    layout: "horizontal"
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411834/3_n6jmab.jpg",
    alt: "Garden wedding arch",
    category: "MC302",
    layout: "vertical"
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411839/4_a1om17.jpg",
    alt: "Castle venue",
    category: "MC302",
    layout: "vertical"
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411864/2_zuwdqv.jpg",
    alt: "Oceanfront ceremony",
    category: "MC302",
    layout: "horizontal"
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411845/6_n0agso.jpg",
    alt: "Rustic wedding details",
    category: "MC302",
    layout: "vertical"
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411850/5_dvr0x2.jpg",
    alt: "Rustic wedding details",
    category: "MC302",
    layout: "horizontal"
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411850/3_mq68mb.jpg",
    alt: "Rustic wedding details",
    category: "MC302",
    layout: "horizontal"
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411846/1_znes6q.jpg",
    alt: "Castle venue",
    category: "MC302",
    layout: "vertical"
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411848/4_gzydzh.jpg",
    alt: "Rustic wedding details",
    category: "MC302",
    layout: "horizontal"
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411835/5_ncaszu.jpg",
    alt: "Castle venue",
    category: "MC302",
    layout: "vertical"
  },
];

const studioapartmentImages: Image[] = [
  {
    id: 13,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411899/1_pgb9me.jpg",
    alt: "Minimalist beach wedding setup",
    category: "StudioApartment",
    layout: "horizontal"
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411868/5_qtrssy.jpg",
    alt: "Elegant table setting",
    category: "StudioApartment",
    layout: "vertical"
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411887/4_isiaa6.jpg",
    alt: "Rustic wedding details",
    category: "StudioApartment",
    layout: "horizontal"
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411871/1_dpe2qv.jpg",
    alt: "Garden wedding arch",
    category: "StudioApartment",
    layout: "vertical"
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411869/4_vfpeld.jpg",
    alt: "Castle venue",
    category: "StudioApartment",
    layout: "vertical"
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411899/2_u9qi2w.jpg",
    alt: "Oceanfront ceremony",
    category: "StudioApartment",
    layout: "horizontal"
  },
  {
    id: 19,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411867/3_wyktcp.jpg",
    alt: "Rustic wedding details",
    category: "StudioApartment",
    layout: "vertical"
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411887/3_idjfpl.jpg",
    alt: "Rustic wedding details",
    category: "StudioApartment",
    layout: "horizontal"
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411899/1_pgb9me.jpg",
    alt: "Rustic wedding details",
    category: "StudioApartment",
    layout: "horizontal"
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411870/2_pxlfn1.jpg",
    alt: "Castle venue",
    category: "StudioApartment",
    layout: "vertical"
  },
  {
    id: 23,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411901/6_bizlgf.jpg",
    alt: "Rustic wedding details",
    category: "StudioApartment",
    layout: "horizontal"
  },
  {
    id: 24,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411869/6_pyooo1.jpg",
    alt: "Castle venue",
    category: "StudioApartment",
    layout: "vertical"
  },
];

const tsinformaticImages: Image[] = [
  {
    id: 25,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411926/6_fe2czt.jpg",
    alt: "Minimalist beach wedding setup",
    category: "TSInformatic",
    layout: "horizontal"
  },
  {
    id: 26,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411913/2_tqt1cd.jpg",
    alt: "Elegant table setting",
    category: "TSInformatic",
    layout: "vertical"
  },
  {
    id: 27,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411920/3_eejw8t.jpg",
    alt: "Rustic wedding details",
    category: "TSInformatic",
    layout: "horizontal"
  },
  {
    id: 28,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411916/4_wtyt6k.jpg",
    alt: "Garden wedding arch",
    category: "TSInformatic",
    layout: "vertical"
  },
  {
    id: 29,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411917/3_r9z5da.jpg",
    alt: "Castle venue",
    category: "TSInformatic",
    layout: "vertical"
  },
  {
    id: 30,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411919/4_xqjxga.jpg",
    alt: "Oceanfront ceremony",
    category: "TSInformatic",
    layout: "horizontal"
  },
  {
    id: 31,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411915/1_xa0gej.jpg",
    alt: "Rustic wedding details",
    category: "TSInformatic",
    layout: "vertical"
  },
  {
    id: 32,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411923/7_ypfu6o.jpg",
    alt: "Rustic wedding details",
    category: "TSInformatic",
    layout: "horizontal"
  },
  {
    id: 33,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411924/8_s2kxgm.jpg",
    alt: "Rustic wedding details",
    category: "TSInformatic",
    layout: "horizontal"
  },
  {
    id: 34,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411910/5_mmonba.jpg",
    alt: "Castle venue",
    category: "TSInformatic",
    layout: "vertical"
  },
  {
    id: 35,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411921/5_gebaxc.jpg",
    alt: "Rustic wedding details",
    category: "TSInformatic",
    layout: "horizontal"
  },
  {
    id: 36,
    src: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764411911/8_ifrmgh.jpg",
    alt: "Castle venue",
    category: "TSInformatic",
    layout: "vertical"
  }
];

const images: Record<string, Image[]> = {
  MC302: mc302Images,
  StudioApartment: studioapartmentImages,
  TSInformatic: tsinformaticImages,
};

const categories = [
  { label: "TS Informatic", key: "TSInformatic" },
  { label: "Studio Apartment", key: "StudioApartment" },
  { label: "MC302", key: "MC302" }
];

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
  }, [hasIntersected]);

  return { elementRef, isIntersecting, hasIntersected };
};

interface LazyImageProps {
  image: Image;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ image, className }) => {
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
    <div ref={elementRef} className={cn("relative", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-orange-100 animate-pulse rounded-lg">
          <div className="flex items-center justify-center h-full">
            <div className="w-8 h-8 bg-orange-300 rounded-full opacity-40"></div>
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
            hasError && "bg-orange-100 flex items-center justify-center"
          )}
          loading="lazy"
          decoding="async"
        />
      )}
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-orange-200 rounded-lg">
          <div className="text-orange-500 text-sm">Failed to load</div>
        </div>
      )}
      
      {hasIntersected && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("MC302");
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [filteredImages, setFilteredImages] = useState<Image[]>([]);
  const [visibleImages, setVisibleImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const portfolioRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const loadedImagesRef = useRef(new Set<number>());
  
  useEffect(() => {
    const newFilteredImages = images[activeFilter] || [];
    setFilteredImages(newFilteredImages);
    
    loadedImagesRef.current = new Set();
    
    const initialCount = Math.min(12, newFilteredImages.length);
    setVisibleImages(newFilteredImages.slice(0, initialCount));
    
    newFilteredImages.slice(0, initialCount).forEach((img: Image) => {
      loadedImagesRef.current.add(img.id);
    });
  }, [activeFilter]);

  const handleScroll = useCallback(() => {
    if (!gridRef.current) return;
    
    const rect = gridRef.current.getBoundingClientRect();
    const bottomVisible = rect.bottom <= window.innerHeight + 500;
    
    if (bottomVisible && visibleImages.length < filteredImages.length && !isLoading) {
      setIsLoading(true);
      
      setTimeout(() => {
        const nextBatchSize = 8;
        const nextImages = filteredImages
          .filter((img: Image) => !loadedImagesRef.current.has(img.id))
          .slice(0, nextBatchSize);
        
        nextImages.forEach((img: Image) => {
          loadedImagesRef.current.add(img.id);
        });
        
        setVisibleImages(prev => [...prev, ...nextImages]);
        setIsLoading(false);
      }, 300);
    }
  }, [visibleImages, filteredImages, isLoading]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const PortfolioImage: React.FC<{ image: Image }> = ({ image }) => {
    const imageClasses = cn(
      "portfolio-item group overflow-hidden cursor-pointer relative will-change-transform",
      "transition-transform duration-300 hover:z-10 hover:-translate-y-1",
      image.layout === "horizontal" ? "col-span-2" : "col-span-1"
    );

    return (
      <div
        className={imageClasses}
        onClick={() => setSelectedImage(image)}
      >
        <AspectRatio
          ratio={
            image.layout === "horizontal"
              ? 16 / 10.5
              : image.layout === "vertical"
              ? 3 / 4
              : 1
          }
        >
          <LazyImage
            image={image}
            className="w-full h-full"
          />
        </AspectRatio>
      </div>
    );
  };

  const ModalImage: React.FC<{ image: Image }> = ({ image }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
      <div className="relative w-full h-full">
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
        
        <img
          src={image.src}
          alt={image.alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "object-contain w-full h-full rounded-lg transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          loading="eager"
        />
        
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
            <div className="text-white text-center">
              <div className="text-lg mb-2">⚠️</div>
              <div className="text-sm">Failed to load image</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section 
      id="portfolio" 
      ref={portfolioRef}
      className="relative pt-10 bg-[#edf4f8] overflow-hidden min-h-screen"
    >
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-10 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-black tracking-widest">
            P O R T F O L I O
          </h2>
        </div>

        <div className="sticky top-0 z-20  py-4 -mx-4 sm:-mx-6 px-4 sm:px-6 shadow-sm">
          <div className="flex justify-center overflow-x-auto gap-2 md:gap-4 pb-2 scroll-smooth">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={cn(
                  "shrink-0 px-3 py-1 sm:px-5 sm:py-2 rounded-xl text-black text-sm sm:text-base font-medium border transition-all duration-300",
                  activeFilter === category.key
                    ? "bg-[#edf4f8] shadow-md"
                    : "bg-[#edf4f8] hover:border-orange-500"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div 
        ref={gridRef}
        className="relative z-10 container mx-auto px-4 sm:px-6 pb-16"
      >
        <div className="max-w-full sm:max-w-[95%] lg:max-w-[90%] mx-auto"> 
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-1 sm:gap-2 will-change-contents">
            {visibleImages.map((image, index) => (
              <PortfolioImage 
                key={`${image.category}-${image.id}-${index}`}
                image={image}
              />
            ))}
          </div>
        </div>
        
        {visibleImages.length < filteredImages.length && (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
          </div>
        )}
        
        {visibleImages.length === 0 && (
          <div className="flex justify-center py-16">
            <div className="text-gray-500 text-lg">No images to display</div>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 m-2 sm:m-4 text-white hover:opacity-70 transition-opacity z-10"
              aria-label="Close"
            >
              <X size={24} className="sm:w-8 sm:h-8" />
            </button>
            
            <AspectRatio ratio={
              isMobile ? 
                (selectedImage.layout === "horizontal" ? 16/10 : 2/3) : 
                16/9
            }>
              <ModalImage image={selectedImage} />
            </AspectRatio>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;