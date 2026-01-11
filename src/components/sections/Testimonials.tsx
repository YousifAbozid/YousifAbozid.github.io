import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Mail } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { testimonials } from '../../data/portfolio';
import { cn, createEmailLink } from '../../lib/utils';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const titleRef = useScrollAnimation({ delay: 200 });
  const carouselRef = useScrollAnimation({ delay: 400 });

  // Preload images for current and adjacent slides
  useEffect(() => {
    const preloadImage = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Preload current slide
    preloadImage(testimonials[currentIndex].avatar);

    // Preload next slide
    const nextIndex = (currentIndex + 1) % testimonials.length;
    preloadImage(testimonials[nextIndex].avatar);

    // Preload previous slide
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    preloadImage(testimonials[prevIndex].avatar);
  }, [currentIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={cn(
          'w-4 h-4',
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-l-bg-3 dark:text-d-bg-3'
        )}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-l-bg-1 dark:bg-d-bg-1">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} data-animate="fade" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-l-text-1 dark:text-d-text-1 mb-4">
              What People Say
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-l-text-2 dark:text-d-text-2 mt-6 max-w-2xl mx-auto">
              Testimonials from colleagues, clients, and collaborators I&apos;ve
              had the pleasure to work with.
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div
            ref={carouselRef}
            data-animate="slide-up"
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 p-3 rounded-full bg-l-bg-2 dark:bg-d-bg-2 border border-border-l dark:border-border-d hover:bg-l-bg-3 dark:hover:bg-d-bg-3 transition-all duration-200 shadow-lg cursor-pointer hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-l-text-1 dark:text-d-text-1" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 p-3 rounded-full bg-l-bg-2 dark:bg-d-bg-2 border border-border-l dark:border-border-d hover:bg-l-bg-3 dark:hover:bg-d-bg-3 transition-all duration-200 shadow-lg cursor-pointer hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-l-text-1 dark:text-d-text-1" />
            </button>

            {/* Testimonial Cards */}
            <div className="overflow-hidden px-4 md:px-8">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map(testimonial => (
                  <div
                    key={testimonial.id}
                    className="w-full shrink-0 px-2 md:px-4"
                  >
                    <div className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg border border-border-l dark:border-border-d p-6 md:p-8 relative min-h-100 flex flex-col">
                      {/* Quote Icon */}
                      <div className="absolute top-4 md:top-6 left-4 md:left-6 text-primary/20">
                        <Quote className="w-6 h-6 md:w-8 md:h-8" />
                      </div>

                      {/* Content */}
                      <div className="pt-8 md:pt-8 flex-1 flex flex-col">
                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-4">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-base md:text-lg text-l-text-2 dark:text-d-text-2 leading-relaxed mb-6 italic flex-1">
                          &quot;{testimonial.content}&quot;
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center space-x-4 mt-auto">
                          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-primary flex items-center justify-center text-white font-bold text-lg shrink-0">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              loading="lazy"
                              className="w-full h-full object-cover"
                              onError={e => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling!.textContent =
                                  testimonial.name.charAt(0);
                              }}
                            />
                            <span className="hidden">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-heading font-semibold text-l-text-1 dark:text-d-text-1 truncate">
                              {testimonial.name}
                            </div>
                            <div className="text-l-text-3 dark:text-d-text-3 text-sm leading-tight">
                              {testimonial.title} at {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center space-x-3 mt-8 pb-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    'rounded-full transition-all duration-200 cursor-pointer hover:scale-110',
                    index === currentIndex
                      ? 'w-4 h-4 bg-primary shadow-lg'
                      : 'w-3 h-3 bg-l-bg-3 dark:bg-d-bg-3 hover:bg-primary/50'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-l-text-2 dark:text-d-text-2 mb-6">
              Ready to work together and create something amazing?
            </p>
            <a
              href={createEmailLink('collaboration')}
              className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
