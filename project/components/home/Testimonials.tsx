"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 bg-backgroundAlt">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from our satisfied customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative px-10">
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 border-primary text-primary hover:bg-primary/10 z-10"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 border-primary text-primary hover:bg-primary/10 z-10"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </Button>
            
            {/* Testimonial Carousel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {TESTIMONIALS.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                          <div className="relative h-24 w-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-primary/20">
                            <Image
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div className="flex-grow text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating 
                                    ? "text-yellow-400 fill-yellow-400" 
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                          <div>
                            <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-primary" : "bg-primary/30"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;