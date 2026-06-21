"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, TestTube, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "Deep dive into your business requirements, goals, and technical landscape to define the project scope.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Create wireframes, prototypes, and visual designs that align with your brand and optimize user experience.",
  },
  {
    icon: Code2,
    title: "Develop",
    description: "Build your solution using modern tech stacks with clean, maintainable code and agile methodologies.",
  },
  {
    icon: TestTube,
    title: "Test & QA",
    description: "Rigorous testing across devices, browsers, and scenarios to ensure reliability and performance.",
  },
  {
    icon: Rocket,
    title: "Deploy & Scale",
    description: "Launch to production with CI/CD pipelines, monitoring, and ongoing support for continuous improvement.",
  },
];

export function DevProcess() {
  return (
    <section className="section-padding relative">
      <div className="section-container">
        <SectionHeader
          eyebrow="How We Work"
          title="Our Development Process"
          gradient="Development Process"
          description="A proven methodology that ensures quality delivery on time, every time."
        />

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="relative text-center group"
              >
                {/* Step Number & Icon */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/30 transition-all duration-500">
                    <step.icon className="w-7 h-7 text-accent-cyan" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent-cyan text-background text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-semibold font-heading text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
