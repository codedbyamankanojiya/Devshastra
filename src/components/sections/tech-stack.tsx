"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { staggerContainer, staggerItem } from "@/lib/animations";

const techCategories = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    color: "accent-cyan",
  },
  {
    name: "Backend",
    techs: ["Node.js", "Python", "Express", "FastAPI"],
    color: "accent-indigo",
  },
  {
    name: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin"],
    color: "accent-violet",
  },
  {
    name: "AI & ML",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
    color: "accent-cyan",
  },
  {
    name: "Cloud & DevOps",
    techs: ["AWS", "GCP", "Docker", "CI/CD"],
    color: "accent-indigo",
  },
  {
    name: "Databases",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
    color: "accent-violet",
  },
];

export function TechStack() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Technology"
          title="Our Technology Stack"
          gradient="Technology Stack"
          description="We leverage industry-leading technologies to build scalable, high-performance solutions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={staggerItem}
              className="p-6 rounded-2xl glass-card group"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 text-foreground border border-white/5 hover:border-accent-cyan/30 hover:bg-accent-cyan/5 transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
