"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/5 via-accent-indigo/5 to-accent-violet/5" />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-cyan/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-container relative z-10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-accent-cyan/10 border border-accent-cyan/20">
          <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
          <span className="text-xs font-semibold text-accent-cyan uppercase tracking-wider">
            Let&apos;s Build Together
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-6 max-w-3xl mx-auto">
          Have a Project{" "}
          <span className="text-gradient">in Mind?</span>
        </h2>

        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you&apos;re a startup with a bold idea or an enterprise seeking digital
          transformation, we&apos;re ready to bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <Button size="lg" className="gap-2 min-w-[200px]">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Explore Services
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
