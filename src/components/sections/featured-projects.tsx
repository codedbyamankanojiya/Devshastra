"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  const completed = projects.filter((p) => p.status === "completed");

  return (
    <section className="section-padding relative">
      <div className="section-container">
        <SectionHeader
          eyebrow="Our Work"
          title="Featured Case Studies"
          gradient="Case Studies"
          description="Real projects delivering measurable impact for our clients across industries."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {completed.map((project, i) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="group relative rounded-2xl glass-card overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image Placeholder */}
                <div className="lg:w-2/5 h-56 lg:h-auto relative overflow-hidden bg-gradient-to-br from-muted to-background">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold font-heading text-white/5">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                  {/* Gradient hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-indigo/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{project.category}</Badge>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-lg">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-medium text-accent-cyan group-hover:gap-3 transition-all duration-300">
                    View Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
