"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data/services";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/animations";
import { CTASection } from "@/components/sections/cta-section";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/[0.03] to-transparent" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6">What We Do</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business
              and solve complex challenges at enterprise scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group rounded-2xl glass-card overflow-hidden"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>
                  {/* Visual Side */}
                  <div className={`lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-background/40" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-accent-cyan" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Side */}
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                      What We Deliver
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-accent-cyan/20 hover:bg-white/[0.04] transition-all duration-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link href="/contact">
                        <Button variant="outline" size="sm" className="gap-2">
                          Discuss This Service
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
