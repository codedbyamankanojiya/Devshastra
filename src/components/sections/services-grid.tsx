"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/section-header";
import { services } from "@/lib/data/services";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  // First 6 services for the home page bento grid
  const featuredServices = services.slice(0, 6);

  return (
    <section className="section-padding relative">
      <div className="section-container">
        <SectionHeader
          eyebrow="What We Do"
          title="Services That Drive Growth"
          gradient="Drive Growth"
          description="Comprehensive technology solutions tailored to transform your business and solve complex challenges at scale."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featuredServices.map((service, i) => (
            <motion.div
              key={service.title}
              variants={staggerItem}
              className={cn(
                "group relative p-7 rounded-2xl glass-card overflow-hidden",
                i === 0 && "md:col-span-2 lg:col-span-1"
              )}
            >
              {/* Gradient overlay on hover */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-br",
                  service.gradient
                )}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-accent-cyan" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold font-heading text-foreground mb-3 group-hover:text-foreground transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Learn more indicator */}
                <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-accent-cyan opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Learn more
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
