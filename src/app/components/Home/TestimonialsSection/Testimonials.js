"use client";

import React, { useEffect, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      author: "Benoit Loisel",
      text: "How Sulio AI helped Benoit Loisel triple their sales in 6 months. With AI matching, they experienced a 25% higher conversion rate and saved 10 hours/week on client interactions.",
    },
    {
      author: "Sarah Chen",
      text: "Using Sulio AI transformed our client engagement. We saw a 30% increase in response rates and saved 12 hours/week on manual tasks.",
    },
    {
      author: "Mark Johnson",
      text: "Sulio AI's matching algorithm helped us reach perfect-fit clients. Our conversion rate improved by 28% and we saved 8 hours/week.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Image - Only on Tablet and Desktop */}
        <div className="hidden lg:block w-1/4 max-w-[200px]">
          <img
            src="/images/1.png"
            alt="Testimonial background left"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Testimonial Carousel */}
        <div className="h-[200px] w-full relative">
          <div className="relative h-full rounded-2xl shadow-lg flex flex-col justify-center items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/2.png"
                alt="Testimonial background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Carousel Content */}
            <div className="relative z-10 flex-grow flex flex-col justify-between p-4 md:p-6">
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                aria-label="Previous Testimonial"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-gray-100 rounded-full p-2 shadow-md z-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Testimonial"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-gray-100 rounded-full p-2 shadow-md z-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-5 md:w-5 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Slide Content */}
              <div className="flex-grow flex items-center justify-center overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <blockquote
                      key={index}
                      className="min-w-full px-4 md:px-16 text-center text-sm md:text-base italic text-gray-700 leading-relaxed"
                    >
                      <p className="mb-3">"{testimonial.text}"</p>
                      <cite className="not-italic font-semibold text-gray-900">
                        - {testimonial.author}
                      </cite>
                    </blockquote>
                  ))}
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-green-600"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image - Only on Tablet and Desktop */}
        <div className="hidden lg:block w-1/4 max-w-[200px]">
          <img
            src="/images/3.png"
            alt="Testimonial background right"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
