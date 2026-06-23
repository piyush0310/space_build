"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Testimonial Type
interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  image: string;
}

// Featured Testimonials Data
export const featuredTestimonials: Testimonial[] = [
  
  {
    id: 2,
    name: "Mr. Rakesh & Mrs. Reena Jain",
    location: "Studio Apartment, Noida Extension",
    rating: 4,
    text: "space build perfectly blended aesthetics and Vastu, transforming our space into a harmonious, positive environment. It feels balanced, beautiful, and filled with positive energy. Their expertise and creativity exceeded expectations. Truly exceptional!",
    image: "https://cdn-icons-png.flaticon.com/128/1647/1647179.png",
  },
  {
    id: 3,
    name: "Mr. Raja Jain",
    location: "Preet Vihar",
    rating: 4,
    text: "The interior design completely transformed our space, making it more beautiful, comfortable, and perfectly styled. Every detail was thoughtfully designed, creating a warm and inviting atmosphere. Truly a wonderful and satisfying experience!",
    image: "https://cdn-icons-png.flaticon.com/128/1647/1647179.png",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredTestimonials.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="py-28 bg-[#EDF4F8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-center font-light text-black tracking-widest">
            Testimonials
          </h2>
          <p className="text-black/80 max-w-2xl mx-auto mt-2">
            Hear what our clients have to say about their experience.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden rounded-lg px-2 sm:px-4 md:px-0">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 sm:px-4"
                >
                  <div className="p-4 sm:p-6 md:p-8 bg-[#28344B] rounded-lg shadow-sm mx-auto max-w-4xl min-h-[300px] sm:min-h-[350px] flex flex-col justify-between">
                    {/* Star Rating */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={`${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"} sm:w-5 sm:h-5 md:w-6 md:h-6`}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <div className="flex-grow flex items-center">
                      <p className="text-white text-sm sm:text-base md:text-lg text-center leading-relaxed px-2 sm:px-4">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center justify-center text-black mt-4 sm:mt-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover mr-3 sm:mr-4"
                      />
                      <div className="text-center">
                        <h3 className="font-semibold text-sm sm:text-base md:text-lg">{testimonial.name}</h3>
                        <p className="text-xs sm:text-sm text-black/60">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on Mobile */}
          <button
            onClick={prevSlide}
            className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white/90 hover:bg-white p-1.5 md:p-2 rounded-full shadow-md transition-all"
          >
            <ChevronLeft size={16} className="text-gray-700 md:w-5 md:h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white/90 hover:bg-white p-1.5 md:p-2 rounded-full shadow-md transition-all"
          >
            <ChevronRight size={16} className="text-gray-700 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-1.5 sm:space-x-2">
          {featuredTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                currentIndex === index
                  ? "bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;