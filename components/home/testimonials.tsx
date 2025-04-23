"use client";
import { cn } from "@/lib/utils";
import {
  TestimonialCard,
  TestimonialAuthor,
} from "@/components/ui/testimonial-card";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Sparkles } from "lucide-react";

interface TestimonialsSectionProps {
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
  className?: string;
}

function Testimonials({ testimonials, className }: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "bg-white text-gray-800",
        "py-12 sm:py-24 md:py-32 px-0",
        "relative overflow-hidden",
        className
      )}
    >
      {/* Decorative Elements */}
      
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16 relative z-10">
        <div className="flex flex-col items-center gap-4 sm:gap-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="h-6 w-6 text-amber-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 font-semibold text-lg">Testimonials</span>
            <Sparkles className="h-6 w-6 text-amber-500" />
          </div>
          
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl">
            Trusted by businesses and developers around the world
          </h2>
          
          <p className="text-md max-w-[600px] font-medium text-gray-600 sm:text-xl">
            We are proud to have received positive feedback from our users.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['#FFA500', '#FF6347', '#9370DB', '#20B2AA', '#3CB371'].map((color, idx) => (
              <div 
                key={idx} 
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="pt-5 w-full">
            <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
              <Carousel
                opts={{ loop: true }}
                plugins={[AutoScroll({ playOnInit: true })]}
                className="w-full"
              >
                <CarouselContent className="ml-0">
                  {testimonials.map((testimonial, index) => {
                    // Rotate through different accent colors
                    const accentColors = [
                      "border-l-blue-500 bg-gradient-to-br from-white to-blue-50",
                      "border-l-purple-500 bg-gradient-to-br from-white to-purple-50",
                      "border-l-emerald-500 bg-gradient-to-br from-white to-emerald-50",
                      "border-l-amber-500 bg-gradient-to-br from-white to-amber-50",
                      "border-l-rose-500 bg-gradient-to-br from-white to-rose-50"
                    ];
                    const accentColor = accentColors[index % accentColors.length];
                    
                    return (
                      <TestimonialCard
                        key={index}
                        className={cn(
                          "mx-2 flex shrink-0 items-center justify-center",
                          "border-l-4 shadow-md transition-all duration-300 hover:shadow-lg",
                          "hover:scale-105 hover:-rotate-1",
                          accentColor
                        )}
                        {...testimonial}
                      />
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white sm:block" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {['blue', 'purple', 'emerald', 'amber', 'rose'].map((color, idx) => (
            <span 
              key={idx}
              className={cn(
                "px-4 py-1 rounded-full text-sm font-medium",
                `bg-${color}-100 text-${color}-700 border border-${color}-200`
              )}
            >
              {["Innovative", "Reliable", "User-friendly", "Exceptional", "Powerful"][idx]}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;