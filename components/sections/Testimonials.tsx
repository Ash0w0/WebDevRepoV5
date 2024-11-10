"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CTO, TechVision Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "Working with Web Development Solutions has been transformative for our company. Their developers integrated seamlessly with our team and delivered exceptional results.",
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "The quality of developers we've hired through Web Development Solutions is outstanding. They've helped us scale our development capacity efficiently.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, DataFlow",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "Their team's technical expertise and professional approach have made them our go-to partner for all our development needs.",
  },
  {
    name: "David Park",
    role: "CEO, CloudScale Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "The developers we hired through Web Development Solutions have consistently exceeded our expectations. Their technical skills and work ethic are remarkable.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground">
            Trusted by leading companies worldwide
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <Card className="transform transition-all duration-300 hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <Quote className="h-8 w-8 text-primary opacity-50" />
                      <p className="text-lg italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-4' : 'bg-primary/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}