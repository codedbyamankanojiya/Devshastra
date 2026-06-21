"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Calendar, TrendingUp } from "lucide-react";
import { projects, projectCategories } from "@/lib/data/projects";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { CTASection } from "@/components/sections/cta-section";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const completed = filtered.filter((p) => p.status === "completed");
  const upcoming = filtered.filter((p) => p.status === "upcoming");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-indigo/[0.03] to-transparent" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="indigo" className="mb-6">
              Portfolio
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of impactful solutions and upcoming innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[72px] z-30 glass-panel border-b border-white/5 py-4">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300",
                  activeCategory === cat
                    ? "bg-accent-cyan text-background"
                    : "text-muted-foreground hover:text-foreground bg-white/5 hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      {completed.length > 0 && (
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl font-bold font-heading mb-10">
              Completed Projects
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {completed.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={staggerItem}
                    layout
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="group rounded-2xl glass-card overflow-hidden"
                  >
                    {/* Image Placeholder */}
                    <div className="h-48 relative overflow-hidden bg-gradient-to-br from-muted/50 to-background">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-5xl font-bold font-heading text-white/[0.03]">
                          {String(project.id).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge>{project.category}</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="flex items-center gap-1.5 text-xs font-medium text-accent-cyan">
                          View Details <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-semibold font-heading text-foreground mb-2 group-hover:text-accent-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-[10px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      )}

      {/* Upcoming Projects */}
      {upcoming.length > 0 && (
        <section className="section-padding">
          <div className="section-container">
            <h2 className="text-2xl font-bold font-heading mb-4">
              Upcoming Ventures
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl">
              Cutting-edge projects in development to solve tomorrow&apos;s challenges.
            </p>

            <div className="space-y-5">
              {upcoming.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 rounded-2xl glass-card group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold font-heading text-foreground">
                          {project.title}
                        </h3>
                        <Badge variant="violet">{project.category}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {project.impact && (
                        <div className="flex items-start gap-2 p-3 rounded-lg bg-accent-cyan/5 border border-accent-cyan/10 mb-4">
                          <TrendingUp className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                          <p className="text-xs text-accent-cyan">{project.impact}</p>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-[10px]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {project.expectedLaunch && (
                      <div className="lg:text-right flex-shrink-0">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="text-xs">Expected Launch</span>
                        </div>
                        <p className="text-xl font-bold font-heading text-accent-cyan">
                          {project.expectedLaunch}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
