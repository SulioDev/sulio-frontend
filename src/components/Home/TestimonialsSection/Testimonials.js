"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <div className="w-full max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="hidden lg:block w-1/4 max-w-[200px] relative aspect-square">
          <Image
            src="/images/1.png"
            alt="Testimonial background left"
            fill
            sizes="(max-width: 1024px) 0vw, 200px"
            className="object-contain"
            priority
          />
        </div>

        <Carousel className="w-full h-[200px]">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="h-[200px] relative rounded-2xl shadow-lg">
                  <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/2.png"
                      alt="Testimonial background"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 50vw"
                      className="object-cover"
                      priority
                      quality={90}
                    />
                  </div>
                  <CardContent className="relative z-10 h-full flex flex-col justify-center p-4 md:p-6">
                    <div className="text-center flex justify-center flex-col items-center">
                      <p className="text-sm md:text-base w-[80%] italic font-thin">
                        &quot;{testimonial.text}&quot;
                      </p>
                      <p className="text-lg md:text-xl font-semibold mb-2">
                        ~{testimonial.author}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-gray-100 rounded-full p-2 shadow-md z-20 transition-colors"
            variant="ghost"
          />
          <CarouselNext 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-gray-100 rounded-full p-2 shadow-md z-20 transition-colors"
            variant="ghost"
          />
        </Carousel>

        <div className="hidden lg:block w-1/4 max-w-[200px] relative aspect-square">
          <Image
            src="/images/3.png"
            alt="Testimonial background right"
            fill
            sizes="(max-width: 1024px) 0vw, 200px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}