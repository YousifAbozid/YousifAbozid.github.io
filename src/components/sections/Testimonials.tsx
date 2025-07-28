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
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-l-bg-2 dark:bg-d-bg-2 border border-border-l dark:border-border-d hover:bg-l-bg-3 dark:hover:bg-d-bg-3 transition-colors shadow-lg cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-l-text-1 dark:text-d-text-1" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-l-bg-2 dark:bg-d-bg-2 border border-border-l dark:border-border-d hover:bg-l-bg-3 dark:hover:bg-d-bg-3 transition-colors shadow-lg cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-l-text-1 dark:text-d-text-1" />
            </button>

            {/* Testimonial Cards */}
            <div className="overflow-hidden mx-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map(testimonial => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-l-bg-2 dark:bg-d-bg-2 rounded-lg border border-border-l dark:border-border-d p-8 relative">
                      {/* Quote Icon */}
                      <div className="absolute top-6 left-6 text-primary/20">
                        <Quote className="w-8 h-8" />
                      </div>

                      {/* Content */}
                      <div className="pt-8">
                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-4">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-lg text-l-text-2 dark:text-d-text-2 leading-relaxed mb-6 italic">
                          &quot;{testimonial.content}&quot;
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-heading font-semibold text-l-text-1 dark:text-d-text-1">
                              {testimonial.name}
                            </div>
                            <div className="text-l-text-3 dark:text-d-text-3 text-sm">
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
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    'w-3 h-3 rounded-full transition-colors',
                    index === currentIndex
                      ? 'bg-primary'
                      : 'bg-l-bg-3 dark:bg-d-bg-3 hover:bg-primary/50'
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-16 pt-8 border-t border-border-l dark:border-border-d">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  15+
                </div>
                <div className="text-l-text-2 dark:text-d-text-2">
                  Happy Clients
                </div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  4.9/5
                </div>
                <div className="text-l-text-2 dark:text-d-text-2">
                  Average Rating
                </div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-l-text-2 dark:text-d-text-2">
                  Project Completion
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
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
