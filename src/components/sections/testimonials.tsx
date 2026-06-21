"use client";

import { Quote } from "lucide-react";
import { Marquee } from "@/components/shared/marquee";
import { SectionHeader } from "@/components/shared/section-header";
import { testimonials } from "@/lib/data/testimonials";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="section-container mb-12">
        <SectionHeader
          eyebrow="Testimonials"
          title="What Our Clients Say"
          gradient="Clients Say"
          description="Don't just take our word for it — hear from the companies we've helped transform."
        />
      </div>

      <Marquee speed="slow" pauseOnHover>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-between p-7 rounded-2xl glass-card min-w-[340px] max-w-[400px] group"
          >
            <div>
              <Quote className="w-8 h-8 text-accent-cyan/30 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan/30 to-accent-indigo/30 flex items-center justify-center text-sm font-bold text-foreground">
                {testimonial.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
